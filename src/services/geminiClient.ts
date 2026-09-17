export interface ClientCheckResult {
  beGoingTo: boolean;
  gerund: boolean;
  irregularVerbs: {
    passed: boolean;
    count: number;
    found: string[];
  };
  grammarConditionMet: boolean; // At least 2 of (beGoingTo, gerund, irregularVerbs)
  reasonBecause: boolean;
  conclusion: boolean;
  overallPassed: boolean;
}

const COMMON_IRREGULAR_VERBS = [
  'went', 'saw', 'ate', 'bought', 'had', 'took', 'flew', 'met', 'drank',
  'swam', 'built', 'read', 'made', 'spoke', 'ran', 'felt', 'knew', 'drove',
  'rode', 'chose', 'got', 'slept', 'spent', 'understood', 'swam', 'sung', 'wrote'
];

/**
 * Fast client-side regex check for instant visual badges
 */
export function fastClientCheck(fullEnglishText: string): ClientCheckResult {
  const text = fullEnglishText.toLowerCase();

  // 1. be going to check: am/is/are/'m/'s/'re going to
  const beGoingTo = /\b(am|is|are|'m|'s|'re)\s+going\s+to\s+[a-z]+/i.test(text);

  // 2. gerund (-ing as noun or after preposition/verbs like enjoy/like/for/by)
  const gerund = /\b(enjoy|like|love|plan|start|by|for|about|in|after|before|to)\s+[a-z]+ing\b/i.test(text) ||
    /\b[a-z]+ing\s+(is|was|are|were)\b/i.test(text) ||
    /\b(visiting|swimming|eating|shopping|seeing|traveling|taking|trying)\b/i.test(text);

  // 3. irregular verbs (at least 2 used)
  const foundIrregulars: string[] = [];
  for (const verb of COMMON_IRREGULAR_VERBS) {
    const reg = new RegExp(`\\b${verb}\\b`, 'i');
    if (reg.test(text) && !foundIrregulars.includes(verb)) {
      foundIrregulars.push(verb);
    }
  }
  const irregularPassed = foundIrregulars.length >= 2;

  // At least 2 of the 3 grammar requirements
  const grammarCount = (beGoingTo ? 1 : 0) + (gerund ? 1 : 0) + (irregularPassed ? 1 : 0);
  const grammarConditionMet = grammarCount >= 2;

  // 4. because (reason)
  const reasonBecause = /\bbecause\b/i.test(text);

  // 5. conclusion / closing expression
  const conclusion = /\b(looking\s+forward\s+to|look\s+forward\s+to|special\s+place|can't\s+wait|hope\s+to|memorable|never\s+forget)\b/i.test(text);

  const overallPassed = grammarConditionMet && reasonBecause && conclusion;

  return {
    beGoingTo,
    gerund,
    irregularVerbs: {
      passed: irregularPassed,
      count: foundIrregulars.length,
      found: foundIrregulars
    },
    grammarConditionMet,
    reasonBecause,
    conclusion,
    overallPassed
  };
}

export async function fetchStudentHint(payload: {
  type: string;
  destination: string;
  country: string;
  attractions?: string[];
  foods?: string[];
  currentText?: string;
}) {
  const res = await fetch('/api/gemini/hint', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('AI 힌트를 불러오지 못했습니다.');
  return res.json();
}

export async function fetchSentenceGrammarReview(payload: {
  sentenceNumber: number;
  sentenceType: string;
  koreanDraft: string;
  englishDraft: string;
  destination: string;
}) {
  const res = await fetch('/api/gemini/grammar', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('문법 검토에 실패했습니다.');
  return res.json();
}

export async function fetchFullProjectCheck(payload: {
  title: string;
  destination: string;
  sentences: Array<{
    num: number;
    label: string;
    korean: string;
    english: string;
  }>;
}) {
  const res = await fetch('/api/gemini/check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('전체 검토에 실패했습니다.');
  return res.json();
}

export async function fetchSentenceTranslation(payload: {
  sentenceNumber: number;
  sentenceType: string;
  koreanDraft: string;
  destination: string;
  destinationEn?: string;
  country?: string;
  countryEn?: string;
  attractions?: Array<{ name: string; nameEn: string; desc?: string }>;
  foods?: Array<{ name: string; nameEn: string; desc?: string }>;
}): Promise<{ translatedEnglish: string; grammarTip: string }> {
  const res = await fetch('/api/gemini/translate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('영어 자동 번역에 실패했습니다.');
  return res.json();
}

export async function fetchBatchTranslation(payload: {
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
}): Promise<{
  translations: Array<{
    num: number;
    translatedEnglish: string;
    grammarTip: string;
  }>;
}> {
  const res = await fetch('/api/gemini/translate-all', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('일괄 자동 번역에 실패했습니다.');
  return res.json();
}

export async function fetchTeacherAssessmentDraft(payload: {
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
}) {
  const res = await fetch('/api/gemini/assessment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('평가 초안 생성에 실패했습니다.');
  return res.json();
}
