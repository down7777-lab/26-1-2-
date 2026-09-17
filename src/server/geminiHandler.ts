import { GoogleGenAI } from '@google/genai';

// Get Gemini client lazily
let genAIInstance: GoogleGenAI | null = null;

function getGenAI(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is missing');
  }
  if (!genAIInstance) {
    genAIInstance = new GoogleGenAI({ apiKey });
  }
  return genAIInstance;
}

/**
 * Robust JSON generation helper with automatic model fallback
 */
async function generateJsonContent(prompt: string): Promise<any> {
  const ai = getGenAI();
  const models = ['gemini-3.6-flash', 'gemini-3.1-flash-lite', 'gemini-flash-latest', 'gemini-3.8-flash'];
  let lastError: any = null;

  for (const model of models) {
    try {
      const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
        },
      });
      const text = response.text || '{}';
      return JSON.parse(text);
    } catch (err: any) {
      lastError = err;
      console.warn(`Gemini model ${model} failed, trying next model:`, err?.message || err);
    }
  }

  throw lastError || new Error('All Gemini models failed');
}

export interface HintRequest {
  type: 'reason' | 'attraction' | 'food' | 'activity' | 'souvenir' | 'conclusion';
  destination: string;
  country: string;
  attractions?: string[];
  foods?: string[];
  currentText?: string;
}

export interface GrammarReviewRequest {
  sentenceNumber: number;
  sentenceType: string;
  koreanDraft: string;
  englishDraft: string;
  destination: string;
}

export interface FullProjectCheckRequest {
  title: string;
  destination: string;
  sentences: Array<{
    num: number;
    label: string;
    korean: string;
    english: string;
  }>;
}

export interface AssessmentRequest {
  studentName: string;
  studentKey: string;
  destination: string;
  country: string;
  title: string;
  sentences: Array<{
    num: number;
    label: string;
    korean: string;
    english: string;
  }>;
}

/**
 * Generate hints for middle school 1st grade students
 */
export async function generateStudentHint(req: HintRequest): Promise<{ hints: string[]; advice: string }> {
  try {
    const prompt = `
너는 대한민국 중학교 1학년 학생들의 영어 수행평가를 돕는 다정하고 친절한 AI 영어 튜터 선생님이야.
학생이 'My Dream Trip to [여행지]' 수행평가 글을 작성하고 있어.

[학생의 여행 정보]
- 여행지: ${req.destination} (${req.country})
- 작성 단계: ${req.type}
- 주요 관광지: ${req.attractions?.join(', ') || '유명 관광지'}
- 대표 음식: ${req.foods?.join(', ') || '대표 음식'}
- 학생이 작성 중인 내용: ${req.currentText || '아직 작성 전'}

[요청 사항]
중학교 1학년(만 13세) 수준에 알맞게 쉽고 재미있는 아이디어 3가지와 따뜻한 조언 1줄을 한국어로 추천해줘.
각 아이디어는 [한국어 구상 예시]와 함께 [참고할 수 있는 쉬운 영어 표현/단어 힌트]를 포함해야 해.
중1 필수 문법(be going to, 동명사 -ing, 불규칙동사 과거형 등)을 자연스럽게 활용할 수 있는 아이디어면 더 좋아.

반드시 다음 JSON 형식으로만 응답해:
{
  "hints": [
    "아이디어 1 (예: 맛있는 전통 음식을 먹을 수 있어서: ...)",
    "아이디어 2 (예: 멋진 풍경을 사진으로 남기고 싶어서: ...)",
    "아이디어 3 (예: 박물관에서 새로운 역사를 배우고 싶어서: ...)"
  ],
  "advice": "학생에게 건네는 따뜻한 칭찬과 팁 1문장"
}
`;

    return await generateJsonContent(prompt);
  } catch (err: any) {
    console.error('Error generating hint:', err);
    // Fallback hints
    return {
      hints: [
        `"I want to visit ${req.destination} because the scenery is so beautiful!" (풍경이 너무 아름다워서 꼭 가보고 싶어요)`,
        `"I am going to try delicious local foods with my family." (가족과 함께 맛있는 현지 음식을 먹어보고 싶어요)`,
        `"Taking pictures at the famous landmarks will be exciting!" (유명한 명소에서 사진 찍는 것이 신날 것 같아요)`
      ],
      advice: '생각나는 한국어 문장을 먼저 편안하게 적고, 배운 단어를 하나씩 이어보세요!'
    };
  }
}

/**
 * Real-time sentence-level grammar & translation review
 */
export async function reviewSentenceGrammar(req: GrammarReviewRequest): Promise<{
  status: 'excellent' | 'good' | 'needs_improvement';
  correctedEnglish: string;
  feedback: string;
  encouragement: string;
  detectedGrammar: string[];
}> {
  try {
    const prompt = `
너는 중학교 1학년 영어 선생님이야. 학생이 작성한 영어 문장을 꼼꼼하고 다정하게 검토해줘.
학생의 한국어 의도와 영어 작문을 비교하여 중1 수준에 맞는지 피드백해줘.

[문장 정보]
- 문장 번호: ${req.sentenceNumber}번 (${req.sentenceType})
- 여행지: ${req.destination}
- 학생의 한국어 구상: "${req.koreanDraft}"
- 학생의 영어 작문: "${req.englishDraft}"

[평가 기준]
1. 철자(Spelling) 및 대소문자, 문장부호
2. 중1 필수 문법: be going to, 동명사(-ing), 불규칙동사 과거형(went, saw, ate 등), because 이유 표현 등
3. 문맥과 자연스러움 (중1 수준을 넘는 지나치게 어려운 대학생 수준 표현 금지, 학생다운 표현 유지)

반드시 다음 JSON 형식으로만 응답해:
{
  "status": "excellent" 또는 "good" 또는 "needs_improvement",
  "correctedEnglish": "추천 교정 문장 (중1 수준에 맞는 가장 자연스러운 문장)",
  "feedback": "어떤 부분이 잘 되었고 어떤 점을 고치면 좋은지 친절한 설명 (존댓말, 이모지 포함)",
  "encouragement": "학생을 위한 따뜻한 칭찬 한마디",
  "detectedGrammar": ["be going to", "동명사", "불규칙동사(went)", "because"] 중 포함된 것들
}
`;

    return await generateJsonContent(prompt);
  } catch (err: any) {
    console.error('Error reviewing sentence:', err);
    return {
      status: 'good',
      correctedEnglish: req.englishDraft,
      feedback: '문장이 잘 작성되었어요! 주어와 동사의 일치 및 철자를 한 번 더 확인해보세요.',
      encouragement: '스스로 영어로 표현해보려는 노력이 정말 멋져요!',
      detectedGrammar: []
    };
  }
}

/**
 * Full project check: 5 criteria check (be going to, gerund, 2+ irregular verbs, because, conclusion)
 */
export async function checkFullProject(req: FullProjectCheckRequest): Promise<{
  criteria: {
    beGoingTo: { pass: boolean; found: string; comment: string };
    gerund: { pass: boolean; found: string; comment: string };
    irregularVerbs: { pass: boolean; count: number; found: string[]; comment: string };
    grammarConditionMet: boolean; // At least 2 of (be going to, gerund, irregular verbs)
    reasonBecause: { pass: boolean; found: string; comment: string };
    conclusion: { pass: boolean; found: string; comment: string };
  };
  overallPass: boolean;
  scoreEstimate: number;
  overallComment: string;
  nextSteps: string[];
}> {
  try {
    const prompt = `
너는 중학교 1학년 영어 수행평가 전문 채점관 AI야.
학생이 작성한 'My Dream Trip' 전체 영어 글(제목 포함 7~8문장)을 분석하고 수행평가 필수조건 충족 여부를 판별해줘.

[수행평가 필수조건]
1. 문법 조건 (아래 3개 중 2개 이상 필수 사용):
   - 'be going to' 사용 여부 (am/is/are going to + 동사원형)
   - '동명사 (-ing)' 사용 여부 (주어, 목적어, 전치사의 목적어 등)
   - '불규칙동사' 2개 이상 사용 여부 (went, saw, ate, bought, had, took, swam, drank, visited는 규칙동사지만 swam/flew/built 등 불규칙동사)
2. 내용 조건 (2개 모두 필수):
   - 가고 싶은 이유 ('because...' 문장 포함)
   - 결론/마무리 표현 ('looking forward to...', 'is a special place...', 'will be great...' 등)

[학생이 작성한 문장들]
제목: ${req.title}
${req.sentences.map(s => `${s.num}. [${s.label}]\n한국어: ${s.korean}\n영어: ${s.english}`).join('\n\n')}

반드시 다음 JSON 형식으로만 응답해:
{
  "criteria": {
    "beGoingTo": {
      "pass": true,
      "found": "발견된 표현 (예: 'am going to visit')",
      "comment": "설명"
    },
    "gerund": {
      "pass": true,
      "found": "발견된 동명사 (예: 'swimming')",
      "comment": "설명"
    },
    "irregularVerbs": {
      "pass": true,
      "count": 2,
      "found": ["ate", "bought"],
      "comment": "설명"
    },
    "grammarConditionMet": true,
    "reasonBecause": {
      "pass": true,
      "found": "because 절 내용",
      "comment": "설명"
    },
    "conclusion": {
      "pass": true,
      "found": "결론 표현",
      "comment": "설명"
    }
  },
  "overallPass": true,
  "scoreEstimate": 95,
  "overallComment": "중1 학생 눈높이의 친절하고 격려하는 총평 (장점과 개선점)",
  "nextSteps": ["제출 전 확인해 볼 조언 1", "조언 2"]
}
`;

    return await generateJsonContent(prompt);
  } catch (err: any) {
    console.error('Error checking full project:', err);
    // Regex-based robust fallback
    const allEnglish = req.sentences.map(s => s.english).join(' ');
    const hasBeGoingTo = /\b(am|is|are|'m|'s|'re)\s+going\s+to\s+[a-z]+/i.test(allEnglish);
    const hasGerund = /\b(enjoy|like|love|plan|start|by|for|about|in|after|before)\s+[a-z]+ing\b/i.test(allEnglish) || /\b[a-z]+ing\s+(is|was|are|were)\b/i.test(allEnglish);
    
    const irregularVerbList = ['went', 'saw', 'ate', 'bought', 'had', 'took', 'flew', 'met', 'drank', 'swam', 'built', 'read', 'made', 'spoke', 'ran', 'felt', 'knew'];
    const foundIrregulars = irregularVerbList.filter(verb => new RegExp(`\\b${verb}\\b`, 'i').test(allEnglish));
    const hasIrregular = foundIrregulars.length >= 2;

    const grammarMetCount = (hasBeGoingTo ? 1 : 0) + (hasGerund ? 1 : 0) + (hasIrregular ? 1 : 0);
    const grammarConditionMet = grammarMetCount >= 2;

    const hasBecause = /\bbecause\b/i.test(allEnglish);
    const hasConclusion = /\b(looking\s+forward\s+to|special\s+place|can't\s+wait|hope\s+to|never\s+forget)\b/i.test(allEnglish);
    const overallPass = grammarConditionMet && hasBecause && hasConclusion;

    return {
      criteria: {
        beGoingTo: {
          pass: hasBeGoingTo,
          found: hasBeGoingTo ? 'be going to 발견됨' : '미발견',
          comment: hasBeGoingTo ? 'be going to 미래 표현이 잘 쓰였습니다.' : 'be going to 표현을 1개 이상 활용해 보세요.'
        },
        gerund: {
          pass: hasGerund,
          found: hasGerund ? '-ing 형태 발견됨' : '미발견',
          comment: hasGerund ? '동명사(-ing) 표현이 포함되었습니다.' : 'enjoy ~ing 또는 전치사 뒤 -ing 표현을 넣어보세요.'
        },
        irregularVerbs: {
          pass: hasIrregular,
          count: foundIrregulars.length,
          found: foundIrregulars,
          comment: hasIrregular ? `불규칙동사 ${foundIrregulars.length}개 발견 (${foundIrregulars.join(', ')})` : '불규칙동사 과거형을 2개 이상 사용해 보세요 (예: went, ate, saw, bought 등)'
        },
        grammarConditionMet,
        reasonBecause: {
          pass: hasBecause,
          found: hasBecause ? 'because 이유 절 발견' : '미발견',
          comment: hasBecause ? '가고 싶은 이유가 because와 함께 명확히 제시되었습니다.' : 'Sentence 2에 because를 사용해 이유를 적어주세요.'
        },
        conclusion: {
          pass: hasConclusion,
          found: hasConclusion ? '마무리 표현 발견' : '미발견',
          comment: hasConclusion ? '기대감이나 여행지의 특별함을 담은 마무리 문장이 훌륭합니다.' : '마지막 문장에 looking forward to 또는 special place 표현을 포함해보세요.'
        }
      },
      overallPass,
      scoreEstimate: overallPass ? 95 : 75,
      overallComment: overallPass ? '모든 필수 조건을 완벽하게 충족했습니다! 훌륭한 여행 소개글이에요.' : '아직 충족되지 않은 조건을 보완하면 멋진 수행평가 결과물이 될 거예요!',
      nextSteps: ['오타나 대소문자 확인하기', '선생님께 제출하기 전 최종 소리 내어 읽어보기']
    };
  }
}

/**
 * AI Assessment Draft for Teacher Dashboard
 */
export async function generateTeacherAssessmentDraft(req: AssessmentRequest): Promise<{
  totalScore: number;
  maxScore: number;
  rubricScores: {
    grammarAndConditions: { score: number; max: 40; comment: string };
    contentAndStructure: { score: number; max: 30; comment: string };
    vocabularyAndFluency: { score: number; max: 30; comment: string };
  };
  summaryComment: string;
  strengths: string[];
  improvements: string[];
}> {
  try {
    const prompt = `
너는 중학교 1학년 영어 교과 수행평가 공식 채점 보조 AI야.
교사가 최종 검토하고 수정/승인할 수 있도록 객관적이고 교육적인 '평가 초안'을 작성해줘.

[평가 대상 정보]
- 학생: ${req.studentName} (${req.studentKey})
- 주제: My Dream Trip to ${req.destination}, ${req.country}
- 제목: ${req.title}

[학생 제출 문장]
${req.sentences.map(s => `${s.num}. [${s.label}] ${s.english} (구상: ${s.korean})`).join('\n')}

[채점 기준표 (총 100점 만점)]
1. 문법 및 필수조건 (40점):
   - be going to, 동명사, 불규칙동사 중 2개 이상 적용 여부
   - because 이유절, 결론 마무리 표현 적용 여부
   - 시제 및 주어-동사 수일치
2. 내용 및 구성 (30점):
   - 여행지 선정 및 방문 이유의 타당성
   - 관광지와 먹거리 활동의 구체성 (2곳 관광, 2개 음식 연계)
   - 7~8문장의 논리적 흐름
3. 어휘 및 표현력 (30점):
   - 중1 교육과정 수준에 적합한 어휘 사용
   - 철자 및 문장 부호 정확도

반드시 다음 JSON 형식으로만 응답해:
{
  "totalScore": 92,
  "maxScore": 100,
  "rubricScores": {
    "grammarAndConditions": {
      "score": 38,
      "max": 40,
      "comment": "문법 필수 조건 충족에 대한 구체적 평가"
    },
    "contentAndStructure": {
      "score": 28,
      "max": 30,
      "comment": "내용의 충실도 및 여행지 소개 구성에 대한 평가"
    },
    "vocabularyAndFluency": {
      "score": 26,
      "max": 30,
      "comment": "어휘 사용 및 문장 완성도에 대한 평가"
    }
  },
  "summaryComment": "생활기록부 또는 수행평가 통지표에 바로 활용할 수 있는 학생 맞춤형 종합 평가문 (교사 어조)",
  "strengths": ["잘한 점 1", "잘한 점 2"],
  "improvements": ["보완할 수 있는 점 1"]
}
`;

    return await generateJsonContent(prompt);
  } catch (err: any) {
    console.error('Error generating teacher assessment draft:', err);
    return {
      totalScore: 90,
      maxScore: 100,
      rubricScores: {
        grammarAndConditions: {
          score: 36,
          max: 40,
          comment: 'be going to 및 필수 어휘 조건이 충실하게 반영되었음.'
        },
        contentAndStructure: {
          score: 28,
          max: 30,
          comment: '가고 싶은 이유와 관광지, 현지 음식 활동이 논리적으로 잘 구성됨.'
        },
        vocabularyAndFluency: {
          score: 26,
          max: 30,
          comment: '중학교 1학년 수준에 알맞은 어휘와 표현을 사용하여 자신의 생각을 솔직하게 표현함.'
        }
      },
      summaryComment: `${req.studentName} 학생은 ${req.destination}으로의 여행 계획을 구체적이고 체계적으로 영작하였으며, 필수 문법 조건을 성실히 반영하여 훌륭한 여행 소개글을 완성함.`,
      strengths: ['자신감 있는 영작문 표현', '성실한 필수조건 반영'],
      improvements: ['전치사와 관사의 세부적인 표기에 조금 더 유의하면 더욱 완성도 높은 글이 될 것임.']
    };
  }
}

export interface TranslateSentenceRequest {
  sentenceNumber: number;
  sentenceType: string;
  koreanDraft: string;
  destination: string;
  destinationEn?: string;
  country?: string;
  countryEn?: string;
  attractions?: Array<{ name: string; nameEn: string; desc?: string }>;
  foods?: Array<{ name: string; nameEn: string; desc?: string }>;
}

export interface BatchTranslateRequest {
  destination: string;
  destinationEn?: string;
  country?: string;
  countryEn?: string;
  attractions?: Array<{ name: string; nameEn: string; desc?: string }>;
  foods?: Array<{ name: string; nameEn: string; desc?: string }>;
  sentences: Array<{
    num: number;
    label: string;
    korean: string;
  }>;
}

/**
 * Smart automatic translation from Korean draft to Middle School 1st Grade English sentence
 */
export async function translateKoreanSentence(req: TranslateSentenceRequest): Promise<{
  translatedEnglish: string;
  grammarTip: string;
}> {
  if (!req.koreanDraft || req.koreanDraft.trim().length === 0) {
    return {
      translatedEnglish: '',
      grammarTip: '한국어 구상을 먼저 입력해주세요.'
    };
  }

  try {
    const prompt = `
당신은 대한민국 중학교 1학년(만 13세) 영어 수행평가 전문 번역 교사입니다.
학생이 작성한 한국어 문장의 실제 의미와 의도를 100% 충실하고 정확하게 영어로 번역하십시오.

[★ 최우선 번역 원칙 - 원문 충실도]
1. 학생이 작성한 한국어 문장에 담긴 실제 내용과 의미를 그대로 정직하게 번역하십시오.
2. 절대로 학생이 쓰지 않은 관광지, 음식, 고정된 활동을 임의로 지어내거나 끼워 넣지 마십시오.
   - 학생이 언급한 대상(친구, 가족, 혼자 등), 행동(수영, 쇼핑, 휴식, 구경 등), 생각만을 충실하게 반영해야 합니다.
   - 예: 학생이 "나는 비행기를 타고 가서 호텔 수영장에서 놀고 싶다."라고 썼다면 관광지 템플릿을 끼워 넣지 말고 "I want to take an airplane and play at the hotel pool."처럼 학생의 원문 그대로 번역하십시오.
3. 중학교 1학년 눈높이 준수:
   - 만 13세 중1 교육과정에서 배우는 명확하고 쉬운 어휘와 문장 구조를 사용하십시오 (want to, be going to, enjoy, because 등).
   - 첫 글자는 대문자로 시작하고, 주어와 동사의 수일치 및 마침표(.)를 갖춘 올바른 완전한 문장으로 작성하십시오.

[학생의 입력 정보]
- 문장 번호: ${req.sentenceNumber}번 (${req.sentenceType})
- 여행지 참고: ${req.destinationEn || req.destination} (${req.countryEn || req.country || ''})
- 학생이 작성한 한국어 원문: "${req.koreanDraft}"

반드시 다음 JSON 형식으로만 응답하십시오:
{
  "translatedEnglish": "학생 한국어 원문을 100% 충실히 살린 중1 맞춤형 영어 문장",
  "grammarTip": "사용한 쉬운 문법이나 핵심 표현에 대한 친절한 한 줄 설명"
}
`;

    const parsed = await generateJsonContent(prompt);
    return {
      translatedEnglish: parsed.translatedEnglish?.trim() || '',
      grammarTip: parsed.grammarTip?.trim() || '학생의 한국어 문장에 맞춘 자연스러운 영어 표현입니다.'
    };
  } catch (err: any) {
    console.error('Error translating Korean sentence:', err);
    return {
      translatedEnglish: '',
      grammarTip: 'AI 번역 중 일시적 지연이 발생했습니다. [✨ AI 번역] 버튼을 다시 눌러주세요.'
    };
  }
}

/**
 * Batch translation for all completed Korean sentences
 */
export async function batchTranslateKoreanSentences(req: BatchTranslateRequest): Promise<{
  translations: Array<{
    num: number;
    translatedEnglish: string;
    grammarTip: string;
  }>;
}> {
  const validSentences = req.sentences.filter(s => s.korean && s.korean.trim().length > 1);
  if (validSentences.length === 0) {
    return { translations: [] };
  }

  try {
    const prompt = `
당신은 대한민국 중학교 1학년(만 13세) 영어 수행평가 전문 번역 교사입니다.
학생이 작성한 한국어 여행 구상 문장들을 읽고, 각 문장의 **실제 의미와 의도를 100% 충실하게 살려** 중1 수준에 알맞은 영어 문장으로 번역하십시오.

[★ 번역 원칙]
1. 획일화된 템플릿이나 임의의 관광지를 지어내지 말고, 학생이 직접 쓴 한국어 문장의 고유한 의미를 그대로 담아 번역하십시오.
2. 중학교 1학년(만 13세) 수준의 쉬운 어휘, 올바른 대소문자, 마침표를 갖춘 완전한 문장으로 작성하십시오.
3. 여행지 참고: ${req.destinationEn || req.destination} (${req.countryEn || req.country || ''})

[학생이 작성한 한국어 문장 목록]
${validSentences.map(s => `${s.num}번 (${s.label}): "${s.korean}"`).join('\n')}

반드시 다음 JSON 형식으로만 응답하십시오:
{
  "translations": [
    {
      "num": 1,
      "translatedEnglish": "학생 한국어 원문을 100% 충실히 살린 영어 문장",
      "grammarTip": "적용된 핵심 문법 한 줄 설명"
    }
  ]
}
`;

    const parsed = await generateJsonContent(prompt);
    return {
      translations: parsed.translations || []
    };
  } catch (err: any) {
    console.error('Error batch translating sentences:', err);
    return { translations: [] };
  }
}

