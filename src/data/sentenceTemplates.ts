export interface SentenceGuide {
  num: number;
  label: string;
  badge: string;
  writingGoal: string;
  koreanGuide: string;
  koreanPlaceholder: string;
  grammarTip: string;
  englishPlaceholder: string;
  hintType: 'reason' | 'attraction' | 'food' | 'activity' | 'souvenir' | 'conclusion';
}

export const SENTENCE_TEMPLATES: SentenceGuide[] = [
  {
    num: 1,
    label: 'Sentence 1: 여행 목적지 소개',
    badge: '목적지 소개',
    writingGoal: '가고 싶은 도시/국가와 함께 가고 싶은 사람이나 여행 시기를 자유롭게 구상해보세요.',
    koreanGuide: '어디로, 누구와, 또는 언제 떠나고 싶은지 나만의 여행 계획을 편안하게 적어보세요.',
    koreanPlaceholder: '예: 이번 겨울방학에 가장 친한 친구와 함께 일본 도쿄로 신나는 여행을 떠나고 싶다.',
    grammarTip: '추천 표현: want to visit (~를 방문하고 싶다) / hope to travel to (~로 여행하길 바라다)',
    englishPlaceholder: '한국어를 입력하면 학생의 고유한 구상에 맞춘 자연스러운 영어 문장이 자동으로 생성됩니다.',
    hintType: 'activity'
  },
  {
    num: 2,
    label: 'Sentence 2: 방문 이유 (자유로운 나만의 이유)',
    badge: '방문 이유',
    writingGoal: '그곳에 꼭 가보고 싶은 특별하고 솔직한 이유를 자유롭게 구상해보세요.',
    koreanGuide: '좋아하는 문화, 꼭 보고 싶은 풍경, 관심사 등 나만의 생생한 이유를 적어보세요.',
    koreanPlaceholder: '예: 왜냐하면 나는 어릴 때부터 애니메이션과 반짝이는 도쿄의 야경을 직접 보고 싶었기 때문이다.',
    grammarTip: '★ 핵심 조건: because (~하기 때문에)를 활용하여 이유를 자연스럽게 이어보세요.',
    englishPlaceholder: '한국어 구상 작성 시 because를 활용한 중1 맞춤형 영어 문장이 자동으로 생성됩니다.',
    hintType: 'reason'
  },
  {
    num: 3,
    label: 'Sentence 3: 첫 번째 명소 활동 계획',
    badge: '명소 1 활동',
    writingGoal: '가보고 싶은 대표 명소에서 하고 싶은 특별한 활동이나 체험을 구상해보세요.',
    koreanGuide: '조사한 관광지 중 한 곳을 골라 그곳에서 무엇을 보고 느낄 것인지 적어보세요.',
    koreanPlaceholder: '예: 먼저 도쿄 타워 전망대에 올라가서 도시 전체의 멋진 풍경을 한눈에 감상할 계획이다.',
    grammarTip: '추천 문법: plan to + 동사원형 / be going to + 동사원형 (계획과 예정)',
    englishPlaceholder: '한국어를 작성하면 명소 영문 표기와 활동 표현이 결합된 영어 문장이 자동 번역됩니다.',
    hintType: 'attraction'
  },
  {
    num: 4,
    label: 'Sentence 4: 대표 먹거리 체험',
    badge: '현지 먹거리',
    writingGoal: '현지에서 꼭 맛보고 싶은 대표 음식이나 디저트를 자유롭게 구상해보세요.',
    koreanGuide: '맛보고 싶은 음식과 함께 어떤 맛이 기대되는지 솔직하게 적어보세요.',
    koreanPlaceholder: '예: 둘째로 골목 맛집을 찾아가 따끈하고 진한 정통 돈코츠 라멘과 바삭한 교자를 맛보고 싶다.',
    grammarTip: '추천 문법: try some famous [음식] / enjoy eating [음식] (동명사 -ing 활용)',
    englishPlaceholder: '한국어 음식을 적으면 현지 음식 영문 명칭을 살린 자연스러운 영어 문장이 자동 완성됩니다.',
    hintType: 'food'
  },
  {
    num: 5,
    label: 'Sentence 5: 두 번째 명소 활동 계획',
    badge: '명소 2 활동',
    writingGoal: '또 다른 명소나 장소에서 동행인과 함께 즐기고 싶은 일정을 구상해보세요.',
    koreanGuide: '두 번째 관광지나 번화가에서 어떤 사진을 찍거나 즐길 것인지 적어보세요.',
    koreanPlaceholder: '예: 그 다음 우리는 활기찬 시부야 거리에서 멋진 사진을 찍고 유명한 교차로를 걸어볼 것이다.',
    grammarTip: '★ 추천 문법: be going to + 동사원형 (미래 계획) 또는 took / saw 등 불규칙동사',
    englishPlaceholder: '한국어 일정을 입력하면 활동 동사와 미래 시제가 적용된 영어 문장이 자동 생성됩니다.',
    hintType: 'attraction'
  },
  {
    num: 6,
    label: 'Sentence 6: 여행 계획 및 특별 활동',
    badge: '계획 & 활동',
    writingGoal: '여행지에서 즐기고 싶은 또 다른 자유로운 일정이나 특별한 활동(산책, 쇼핑, 문화 체험 등)을 구상해보세요.',
    koreanGuide: '가보고 싶은 다른 장소나 꼭 해보고 싶은 활동 계획을 나만의 생각으로 편안하게 적어보세요.',
    koreanPlaceholder: '예: 저녁에는 번화가나 공원을 여유롭게 산책하며 예쁜 야경 사진을 많이 찍을 계획이다.',
    grammarTip: '추천 문법: plan to + 동사원형 / will + 동사원형 / enjoy ~ing (동명사) / 불규칙동사 (took, saw 등)',
    englishPlaceholder: '한국어 활동 계획을 입력하면 자연스러운 영어 문장이 자동으로 생성됩니다.',
    hintType: 'activity'
  },
  {
    num: 7,
    label: 'Sentence 7: 결론 및 기대감 (마무리)',
    badge: '기대감 마무리',
    writingGoal: '이 여행이 나에게 왜 특별한지 정리하고, 얼마나 기대하고 있는지 멋지게 마무리해보세요.',
    koreanGuide: '여행에 대한 나의 설렘과 기대감을 자유롭고 솔직한 감정으로 표현해보세요.',
    koreanPlaceholder: '예: 도쿄는 정말 활기차고 특별한 도시이며, 나는 이번 여행을 손꼽아 기다리고 있다.',
    grammarTip: '★ 핵심 조건: look forward to + 명사/동명사(-ing) (~를 손꼽아 기다리다) 또는 can\'t wait to',
    englishPlaceholder: '한국어 소감을 적으면 설렘을 표현하는 감동적인 영어 결론 문장이 자동 번역됩니다.',
    hintType: 'conclusion'
  }
];
