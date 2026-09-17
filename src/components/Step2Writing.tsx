import React, { useState, useRef, useEffect } from 'react';
import { SENTENCE_TEMPLATES, SentenceGuide } from '../data/sentenceTemplates';
import {
  fetchStudentHint,
  fetchSentenceGrammarReview,
  fetchSentenceTranslation,
  fetchBatchTranslation
} from '../services/geminiClient';
import {
  Lightbulb,
  CheckCircle,
  Sparkles,
  Save,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  MapPin,
  Utensils,
  RefreshCw,
  Zap,
  Check
} from 'lucide-react';

interface SentenceData {
  num: number;
  label: string;
  korean: string;
  english: string;
}

interface Step2WritingProps {
  destination: string;
  destinationEn: string;
  country: string;
  countryEn: string;
  attractions: Array<{ name: string; nameEn: string; desc: string }>;
  foods: Array<{ name: string; nameEn: string; desc: string }>;
  title: string;
  onChangeTitle: (title: string) => void;
  sentences: SentenceData[];
  onChangeSentence: (num: number, field: 'korean' | 'english', value: string) => void;
  onSaveProject: () => Promise<void>;
  saving: boolean;
  onProceedToStep3: () => void;
  onBackToStep1: () => void;
}

export const Step2Writing: React.FC<Step2WritingProps> = ({
  destination,
  destinationEn,
  country,
  countryEn,
  attractions,
  foods,
  title,
  onChangeTitle,
  sentences,
  onChangeSentence,
  onSaveProject,
  saving,
  onProceedToStep3,
  onBackToStep1
}) => {
  // Auto translation settings & states
  const [autoTranslateEnabled, setAutoTranslateEnabled] = useState<boolean>(true);
  const [translatingNums, setTranslatingNums] = useState<Record<number, boolean>>({});
  const [sentenceTips, setSentenceTips] = useState<Record<number, string>>({});
  const [batchTranslating, setBatchTranslating] = useState<boolean>(false);
  const [lastTranslatedKorean, setLastTranslatedKorean] = useState<Record<number, string>>({});

  // Debounce timer map
  const debounceTimerRef = useRef<Record<number, ReturnType<typeof setTimeout>>>({});

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      Object.values(debounceTimerRef.current).forEach((timer: ReturnType<typeof setTimeout>) => {
        if (timer) clearTimeout(timer);
      });
    };
  }, []);

  // Active modal for hints
  const [hintModalGuide, setHintModalGuide] = useState<SentenceGuide | null>(null);
  const [hintLoading, setHintLoading] = useState<boolean>(false);
  const [hintData, setHintData] = useState<{
    tips?: string;
    vocabulary?: Array<{ en: string; kr: string }>;
    examples?: string[];
    grammarNote?: string;
  } | null>(null);

  // Active modal for grammar review
  const [reviewModalNum, setReviewModalNum] = useState<number | null>(null);
  const [reviewLoading, setReviewLoading] = useState<boolean>(false);
  const [reviewResult, setReviewResult] = useState<{
    status: 'good' | 'needs_fix' | 'excellent';
    encouragement: string;
    identifiedGrammar: string[];
    spellingErrors: string[];
    grammarTips: string[];
    suggestedDirection: string;
  } | null>(null);

  // Side reference panel toggle
  const [showReference, setShowReference] = useState<boolean>(true);

  const getSentenceData = (num: number) => {
    return sentences.find(s => s.num === num) || { num, label: '', korean: '', english: '' };
  };

  // Perform single sentence translation
  const handleTranslateSentence = async (guide: SentenceGuide, overrideKorean?: string) => {
    const sData = getSentenceData(guide.num);
    const koreanText = (overrideKorean !== undefined ? overrideKorean : sData.korean).trim();

    if (!koreanText || koreanText.length < 2) return;

    setTranslatingNums(prev => ({ ...prev, [guide.num]: true }));
    try {
      const result = await fetchSentenceTranslation({
        sentenceNumber: guide.num,
        sentenceType: guide.badge,
        koreanDraft: koreanText,
        destination,
        destinationEn,
        country,
        countryEn,
        attractions: attractions.map(a => ({ name: a.name, nameEn: a.nameEn })),
        foods: foods.map(f => ({ name: f.name, nameEn: f.nameEn }))
      });

      if (result.translatedEnglish) {
        onChangeSentence(guide.num, 'english', result.translatedEnglish);
        setLastTranslatedKorean(prev => ({ ...prev, [guide.num]: koreanText }));
        if (result.grammarTip) {
          setSentenceTips(prev => ({ ...prev, [guide.num]: result.grammarTip }));
        }
      }
    } catch (err) {
      console.error('Translation error:', err);
    } finally {
      setTranslatingNums(prev => ({ ...prev, [guide.num]: false }));
    }
  };

  // Handle Korean text input with automatic translation debounce
  const handleKoreanInputChange = (guide: SentenceGuide, value: string) => {
    onChangeSentence(guide.num, 'korean', value);

    if (!autoTranslateEnabled) return;

    if (debounceTimerRef.current[guide.num]) {
      clearTimeout(debounceTimerRef.current[guide.num]);
    }

    const trimmed = value.trim();
    // Only auto-trigger when student has entered at least a few Korean characters
    if (trimmed.length >= 3 && trimmed !== lastTranslatedKorean[guide.num]) {
      debounceTimerRef.current[guide.num] = setTimeout(() => {
        handleTranslateSentence(guide, trimmed);
      }, 1200);
    }
  };

  // On blur of Korean input, trigger translation if not already translated or empty
  const handleKoreanInputBlur = (guide: SentenceGuide) => {
    if (!autoTranslateEnabled) return;
    const sData = getSentenceData(guide.num);
    const trimmed = sData.korean.trim();

    if (trimmed.length >= 2 && (!sData.english.trim() || trimmed !== lastTranslatedKorean[guide.num])) {
      if (debounceTimerRef.current[guide.num]) {
        clearTimeout(debounceTimerRef.current[guide.num]);
      }
      handleTranslateSentence(guide, trimmed);
    }
  };

  // Batch translate all completed Korean sentences
  const handleBatchTranslateAll = async () => {
    const validSentences = sentences.filter(s => s.korean && s.korean.trim().length >= 2);
    if (validSentences.length === 0) {
      alert('먼저 최소 1개 이상의 한국어 구상 문장을 작성해주세요!');
      return;
    }

    setBatchTranslating(true);
    try {
      const result = await fetchBatchTranslation({
        destination,
        destinationEn,
        country,
        countryEn,
        attractions: attractions.map(a => ({ name: a.name, nameEn: a.nameEn })),
        foods: foods.map(f => ({ name: f.name, nameEn: f.nameEn })),
        sentences: validSentences.map(s => ({
          num: s.num,
          label: s.label,
          korean: s.korean
        }))
      });

      if (result.translations && result.translations.length > 0) {
        result.translations.forEach(t => {
          onChangeSentence(t.num, 'english', t.translatedEnglish);
          const current = getSentenceData(t.num);
          setLastTranslatedKorean(prev => ({ ...prev, [t.num]: current.korean.trim() }));
          if (t.grammarTip) {
            setSentenceTips(prev => ({ ...prev, [t.num]: t.grammarTip }));
          }
        });
      }
    } catch (err) {
      console.error('Batch translate error:', err);
      alert('일괄 번역 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setBatchTranslating(false);
    }
  };

  // Fetch AI Hint
  const handleOpenHint = async (guide: SentenceGuide) => {
    setHintModalGuide(guide);
    setHintLoading(true);
    setHintData(null);

    const sData = getSentenceData(guide.num);

    try {
      const data = await fetchStudentHint({
        type: guide.hintType,
        destination: `${destination} (${destinationEn})`,
        country: `${country} (${countryEn})`,
        attractions: attractions.map(a => `${a.name} (${a.nameEn})`),
        foods: foods.map(f => `${f.name} (${f.nameEn})`),
        currentText: sData.korean || ''
      });
      setHintData(data);
    } catch {
      // Fallback hint
      setHintData({
        tips: `${guide.label}에 맞게 나만의 솔직한 생각과 느낌을 한국어로 적어보세요!`,
        vocabulary: [
          { en: 'travel', kr: '여행하다' },
          { en: 'delicious', kr: '맛있는' },
          { en: 'fantastic', kr: '환상적인' },
          { en: 'activity', kr: '활동/체험' }
        ],
        examples: ['I am going to visit Tokyo because it has many exciting places.'],
        grammarNote: guide.grammarTip
      });
    } finally {
      setHintLoading(false);
    }
  };

  // Fetch Sentence Grammar Review
  const handleReviewSentence = async (guide: SentenceGuide) => {
    const sData = getSentenceData(guide.num);
    if (!sData.english.trim()) {
      alert('먼저 영어 문장을 번역하거나 작성한 후 문법 검토를 요청해주세요!');
      return;
    }

    setReviewModalNum(guide.num);
    setReviewLoading(true);
    setReviewResult(null);

    try {
      const data = await fetchSentenceGrammarReview({
        sentenceNumber: guide.num,
        sentenceType: guide.badge,
        koreanDraft: sData.korean,
        englishDraft: sData.english,
        destination: `${destination}, ${country}`
      });
      setReviewResult(data);
    } catch {
      setReviewResult({
        status: 'good',
        encouragement: '학생의 고유한 생각을 살려 멋지게 표현했어요! 단어 철자와 문장 끝 마침표(.)를 한 번 더 확인해보세요.',
        identifiedGrammar: ['be going to or natural structure'],
        spellingErrors: [],
        grammarTips: ['문장 첫 글자는 대문자로 시작하고 마침표를 잊지 마세요.'],
        suggestedDirection: '자연스러운 영어 문장으로 잘 표현되었습니다.'
      });
    } finally {
      setReviewLoading(false);
    }
  };

  // Check progress
  const completedSentencesCount = sentences.filter(s => s.english.trim().length > 3).length;
  const koreanCount = sentences.filter(s => s.korean.trim().length > 2).length;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header bar with Navigation, Progress, and Save */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <button
                type="button"
                onClick={onBackToStep1}
                className="text-xs text-slate-500 hover:text-slate-800 inline-flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                여행지 다시 선택
              </button>
              <span className="text-slate-300">|</span>
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                STEP 2 · 나만의 여행기 작성
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
              나의 꿈의 여행기 영작하기
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              선택한 여행지: <strong className="text-slate-900">{destination} ({destinationEn}), {country}</strong>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onSaveProject}
              disabled={saving}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 font-bold text-xs transition cursor-pointer shadow-xs disabled:opacity-50"
            >
              <Save className="w-4 h-4 text-indigo-600" />
              <span>{saving ? '저장 중...' : '임시 저장'}</span>
            </button>

            <button
              type="button"
              onClick={onProceedToStep3}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold text-xs transition cursor-pointer shadow-md shadow-indigo-100"
            >
              <span>3단계: 종합 AI 검토</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Translation Banner & Quick Action */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-indigo-50/70 p-4 rounded-2xl border border-indigo-100/70">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold shrink-0 shadow-xs">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-xs sm:text-sm text-indigo-950">
                  실시간 맞춤형 영어 번역 연동
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                  개인별 생각 반영
                </span>
              </div>
              <p className="text-[11px] text-indigo-700 mt-0.5">
                정형화된 템플릿 대신, 학생이 작성한 한국어 구상에 맞춰 중1 수준의 자연스러운 영어 문장이 자동으로 생성됩니다.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              type="button"
              onClick={handleBatchTranslateAll}
              disabled={batchTranslating || koreanCount === 0}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition cursor-pointer shadow-xs disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
              title="작성된 모든 한국어 문장을 영어로 일괄 자동 번역합니다"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${batchTranslating ? 'animate-spin' : ''}`} />
              <span>{batchTranslating ? '일괄 번역 중...' : '전체 일괄 자동 번역'}</span>
            </button>

            <label className="flex items-center gap-1.5 text-xs text-indigo-900 bg-white px-3 py-1.5 rounded-xl border border-indigo-200 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={autoTranslateEnabled}
                onChange={(e) => setAutoTranslateEnabled(e.target.checked)}
                className="w-3.5 h-3.5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500 cursor-pointer"
              />
              <span className="font-medium text-[11px]">입력 시 자동 번역</span>
            </label>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4 pt-3">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-semibold text-slate-700">
              영작 완성률: {completedSentencesCount} / 7 문장 완성 (한국어 구상 {koreanCount}/7 완료)
            </span>
            <span className="font-bold text-indigo-600">
              {Math.round((completedSentencesCount / 7) * 100)}%
            </span>
          </div>
          <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-indigo-600 h-full transition-all duration-300 rounded-full"
              style={{ width: `${(completedSentencesCount / 7) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Layout: Left Writing Form + Right Reference Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Writing Column (8 cols on lg) */}
        <div className="lg:col-span-8 space-y-6">

          {/* Title Box */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-indigo-700 uppercase tracking-wider">
                Title (여행기 제목)
              </label>
              <span className="text-[11px] text-slate-400">
                기본 예시: My Dream Trip to [도시/국가]
              </span>
            </div>
            <input
              type="text"
              value={title}
              onChange={(e) => onChangeTitle(e.target.value)}
              placeholder={`My Dream Trip to ${destinationEn || destination}, ${countryEn || country}`}
              className="w-full text-base sm:text-lg font-bold text-slate-900 border-b-2 border-indigo-200 focus:border-indigo-600 focus:outline-hidden py-1 px-1 transition"
            />
          </div>

          {/* Sentences 1 to 7 Cards */}
          {SENTENCE_TEMPLATES.map((guide) => {
            const sData = getSentenceData(guide.num);
            const isTranslating = translatingNums[guide.num];
            const hasEnglish = sData.english.trim().length > 3;
            const tip = sentenceTips[guide.num];

            return (
              <div
                key={guide.num}
                className={`bg-white rounded-3xl p-6 border-2 transition shadow-xs space-y-4 ${
                  hasEnglish ? 'border-slate-200 hover:border-slate-300' : 'border-slate-200'
                }`}
              >
                {/* Sentence Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
                      {guide.num}
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
                        {guide.label}
                      </h3>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {guide.writingGoal}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleOpenHint(guide)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 px-2.5 py-1.5 rounded-lg transition cursor-pointer"
                    >
                      <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                      💡 구상 힌트
                    </button>

                    <button
                      type="button"
                      onClick={() => handleTranslateSentence(guide)}
                      disabled={isTranslating || !sData.korean.trim()}
                      className="inline-flex items-center gap-1 text-[11px] font-bold bg-indigo-50 hover:bg-indigo-100 text-indigo-800 border border-indigo-200 px-2.5 py-1.5 rounded-lg transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <Sparkles className={`w-3.5 h-3.5 text-indigo-600 ${isTranslating ? 'animate-spin' : ''}`} />
                      {isTranslating ? '번역 중...' : '✨ AI 번역'}
                    </button>

                    <button
                      type="button"
                      onClick={() => handleReviewSentence(guide)}
                      disabled={!sData.english.trim()}
                      className="inline-flex items-center gap-1 text-[11px] font-bold bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-1.5 rounded-lg transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      <span>✍️ 문법 검토</span>
                    </button>
                  </div>
                </div>

                {/* 1. Korean Draft: Freedom to express personal thoughts */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-slate-800">
                      1. 한국어 구상 작성 (나만의 생각 자유롭게 적기)
                    </label>
                    <span className="text-[11px] text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md font-medium">
                      {guide.grammarTip}
                    </span>
                  </div>
                  <input
                    type="text"
                    value={sData.korean}
                    onChange={(e) => handleKoreanInputChange(guide, e.target.value)}
                    onBlur={() => handleKoreanInputBlur(guide)}
                    placeholder={guide.koreanPlaceholder}
                    className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    💡 {guide.koreanGuide}
                  </p>
                </div>

                {/* 2. English Translation: Automatically filled based on Korean input */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5">
                      <label className="text-xs font-bold text-slate-800">
                        2. 영어 문장 번역
                      </label>
                      {isTranslating ? (
                        <span className="text-[10px] text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded-full inline-flex items-center gap-1 animate-pulse">
                          <Sparkles className="w-3 h-3 animate-spin" />
                          AI 번역 중...
                        </span>
                      ) : hasEnglish ? (
                        <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full inline-flex items-center gap-1">
                          <Check className="w-3 h-3 text-emerald-600" />
                          자동 번역 완료 (수정 가능)
                        </span>
                      ) : null}
                    </div>

                    <span className="text-[11px] text-slate-400">
                      필요시 직접 수정하거나 다듬을 수 있습니다
                    </span>
                  </div>

                  <textarea
                    rows={2}
                    value={sData.english}
                    onChange={(e) => onChangeSentence(guide.num, 'english', e.target.value)}
                    placeholder={guide.englishPlaceholder}
                    className="w-full bg-slate-50/70 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 font-medium focus:outline-hidden focus:ring-2 focus:ring-indigo-500 focus:bg-white transition resize-y font-sans"
                  />

                  {tip && (
                    <p className="text-[11px] text-indigo-600 mt-1 bg-indigo-50/50 p-2 rounded-lg border border-indigo-100/50">
                      💡 {tip}
                    </p>
                  )}
                </div>
              </div>
            );
          })}

          {/* Bottom actions */}
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200">
            <button
              type="button"
              onClick={onBackToStep1}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              이전 (여행지 탐색)
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onSaveProject}
                disabled={saving}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition cursor-pointer"
              >
                {saving ? '저장 중...' : '임시 저장'}
              </button>

              <button
                type="button"
                onClick={onProceedToStep3}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs transition cursor-pointer flex items-center gap-1.5 shadow-sm"
              >
                <span>3단계: AI 튜터 최종 검토</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Reference Column (4 cols on lg) */}
        <div className="lg:col-span-4 space-y-4 sticky top-20">
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">✈️</span>
                <h4 className="font-bold text-slate-900 text-sm">
                  여행지 참고 단어장
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setShowReference(!showReference)}
                className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              >
                {showReference ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>

            {showReference && (
              <div className="space-y-4 text-xs">
                {/* Chosen Destination */}
                <div className="bg-sky-50 rounded-2xl p-3 border border-sky-100">
                  <p className="font-bold text-sky-900">
                    {destination} ({destinationEn})
                  </p>
                  <p className="text-[11px] text-sky-700 mt-0.5">
                    국가: {country} ({countryEn})
                  </p>
                </div>

                {/* 2 Attractions */}
                <div className="space-y-2">
                  <span className="font-bold text-slate-800 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    추천 관광지 (영문 명칭)
                  </span>
                  {attractions.map((a, i) => (
                    <div key={i} className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/70">
                      <p className="font-bold text-slate-900">{a.name}</p>
                      <p className="font-mono text-indigo-600 text-[11px]">{a.nameEn}</p>
                      <p className="text-slate-500 text-[10px] mt-0.5 line-clamp-2">{a.desc}</p>
                    </div>
                  ))}
                </div>

                {/* 2 Foods */}
                <div className="space-y-2">
                  <span className="font-bold text-slate-800 flex items-center gap-1">
                    <Utensils className="w-3.5 h-3.5 text-amber-500" />
                    추천 먹거리 (영문 명칭)
                  </span>
                  {foods.map((f, i) => (
                    <div key={i} className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/70">
                      <p className="font-bold text-slate-900">{f.name}</p>
                      <p className="font-mono text-amber-700 text-[11px]">{f.nameEn}</p>
                      <p className="text-slate-500 text-[10px] mt-0.5 line-clamp-2">{f.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Essential Requirement Checklist Preview */}
                <div className="bg-amber-50 rounded-2xl p-3 border border-amber-200/70 space-y-1.5">
                  <p className="font-bold text-amber-900 text-xs">★ 필수 평가 조건 체크</p>
                  <p className="text-[11px] text-amber-800">• be going to / 동명사(-ing) / 불규칙동사 중 2개 이상</p>
                  <p className="text-[11px] text-amber-800">• Sentence 2에 because 포함</p>
                  <p className="text-[11px] text-amber-800">• Sentence 7에 looking forward to 등 기대/결론 포함</p>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* AI Hint Modal */}
      {hintModalGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-lg p-6 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                  💡
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {hintModalGuide.label} - 구상 아이디어 힌트
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    중학교 1학년 눈높이에 맞춘 아이디어 추천입니다
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setHintModalGuide(null)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {hintLoading ? (
              <div className="py-12 text-center text-slate-500 space-y-2">
                <Sparkles className="w-8 h-8 text-amber-500 animate-spin mx-auto" />
                <p className="text-xs font-semibold">Gemini AI가 멋진 표현 아이디어를 찾는 중...</p>
              </div>
            ) : hintData ? (
              <div className="space-y-4 text-xs">
                {hintData.tips && (
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900">
                    <p className="font-bold mb-1">💡 작성 팁</p>
                    <p>{hintData.tips}</p>
                  </div>
                )}

                {hintData.examples && hintData.examples.length > 0 && (
                  <div>
                    <p className="font-bold text-slate-800 mb-1.5">아이디어 예시 (나만의 생각으로 표현해보세요!):</p>
                    <div className="space-y-2">
                      {hintData.examples.map((ex, i) => (
                        <div key={i} className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-medium">
                          • {ex}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {hintData.vocabulary && hintData.vocabulary.length > 0 && (
                  <div>
                    <p className="font-bold text-slate-800 mb-1.5">활용하기 좋은 영어 단어:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {hintData.vocabulary.map((v, i) => (
                        <div key={i} className="p-2 bg-indigo-50/60 rounded-lg border border-indigo-100 flex items-center justify-between">
                          <span className="font-bold text-indigo-900">{v.en}</span>
                          <span className="text-slate-500 text-[11px]">{v.kr}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {hintData.grammarNote && (
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-600">
                    <span className="font-bold text-slate-800">문법 도움말: </span>
                    {hintData.grammarNote}
                  </div>
                )}
              </div>
            ) : null}

            <div className="mt-6 pt-3 border-t border-slate-100 text-right">
              <button
                type="button"
                onClick={() => setHintModalGuide(null)}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-xl text-xs cursor-pointer"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AI Sentence Grammar Review Modal */}
      {reviewModalNum && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-lg p-6 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                  ✍️
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    문장 {reviewModalNum}번 AI 문법 검토
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    친절하게 틀린 부분을 짚어주고 고치는 팁을 알려줘요
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setReviewModalNum(null)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {reviewLoading ? (
              <div className="py-12 text-center text-slate-500 space-y-2">
                <Sparkles className="w-8 h-8 text-indigo-600 animate-spin mx-auto" />
                <p className="text-xs font-semibold">Gemini AI가 문장을 읽고 피드백을 작성하는 중...</p>
              </div>
            ) : reviewResult ? (
              <div className="space-y-4 text-xs">
                {/* Encouragement */}
                <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-xl text-indigo-900">
                  <p className="font-bold mb-1">🌟 칭찬과 격려</p>
                  <p>{reviewResult.encouragement}</p>
                </div>

                {/* Grammar Tips */}
                {reviewResult.grammarTips && reviewResult.grammarTips.length > 0 && (
                  <div>
                    <p className="font-bold text-slate-800 mb-1">💡 문법 포인트:</p>
                    <ul className="list-disc list-inside space-y-1 text-slate-700">
                      {reviewResult.grammarTips.map((t, idx) => (
                        <li key={idx}>{t}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Spelling suggestions */}
                {reviewResult.spellingErrors && reviewResult.spellingErrors.length > 0 && (
                  <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-800">
                    <p className="font-bold mb-1">⚠️ 철자 확인 필요:</p>
                    <div className="flex flex-wrap gap-2">
                      {reviewResult.spellingErrors.map((sp, idx) => (
                        <span key={idx} className="bg-white border border-rose-200 px-2 py-0.5 rounded font-mono">
                          {sp}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Suggested Direction */}
                {reviewResult.suggestedDirection && (
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-700">
                    <span className="font-bold text-slate-900">추천 방향: </span>
                    {reviewResult.suggestedDirection}
                  </div>
                )}
              </div>
            ) : null}

            <div className="mt-6 pt-3 border-t border-slate-100 text-right">
              <button
                type="button"
                onClick={() => setReviewModalNum(null)}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs cursor-pointer"
              >
                피드백 확인하고 문장 고치기
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
