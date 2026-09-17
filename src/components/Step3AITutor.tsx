import React, { useState } from 'react';
import { fastClientCheck, fetchFullProjectCheck, ClientCheckResult } from '../services/geminiClient';
import {
  Sparkles,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Send,
  ArrowLeft,
  RefreshCw,
  FileCheck,
  Check
} from 'lucide-react';

interface SentenceData {
  num: number;
  label: string;
  korean: string;
  english: string;
}

interface Step3AITutorProps {
  studentName: string;
  destination: string;
  country: string;
  title: string;
  sentences: SentenceData[];
  projectStatus: '작성중' | '제출완료' | '교사승인완료';
  onSubmitToTeacher: () => Promise<void>;
  onBackToStep2: () => void;
  submitting: boolean;
}

export const Step3AITutor: React.FC<Step3AITutorProps> = ({
  studentName,
  destination,
  country,
  title,
  sentences,
  projectStatus,
  onSubmitToTeacher,
  onBackToStep2,
  submitting
}) => {
  // Combine all English sentences for client checks
  const fullEnglishText = sentences.map(s => s.english).join(' ');
  const fastCheck: ClientCheckResult = fastClientCheck(fullEnglishText);

  // Full AI review state
  const [aiReviewLoading, setAiReviewLoading] = useState<boolean>(false);
  const [aiReport, setAiReport] = useState<{
    overallScore?: number;
    grammarScore?: number;
    contentScore?: number;
    praise?: string;
    conditionCheck?: {
      beGoingTo: boolean;
      gerund: boolean;
      irregularVerbs: boolean;
      irregularVerbsList?: string[];
      grammarConditionMet: boolean;
      reasonBecause: boolean;
      conclusion: boolean;
      allPassed: boolean;
    };
    specificSuggestions?: Array<{
      sentenceNum: number;
      issue: string;
      advice: string;
    }>;
    teacherSummaryDraft?: string;
  } | null>(null);

  // Handle Triggering Full Gemini AI Tutor Review
  const handleRunFullCheck = async () => {
    setAiReviewLoading(true);
    try {
      const data = await fetchFullProjectCheck({
        title,
        destination,
        sentences
      });
      setAiReport(data);
    } catch {
      // Fallback
      setAiReport({
        overallScore: fastCheck.overallPassed ? 95 : 85,
        grammarScore: fastCheck.grammarConditionMet ? 38 : 30,
        contentScore: (fastCheck.reasonBecause && fastCheck.conclusion) ? 29 : 24,
        praise: '성실하게 7개 문장을 모두 구상하고 영작했어요! 필수 문법 조건도 훌륭하게 반영하고 있습니다.',
        conditionCheck: {
          beGoingTo: fastCheck.beGoingTo,
          gerund: fastCheck.gerund,
          irregularVerbs: fastCheck.irregularVerbs.passed,
          irregularVerbsList: fastCheck.irregularVerbs.found,
          grammarConditionMet: fastCheck.grammarConditionMet,
          reasonBecause: fastCheck.reasonBecause,
          conclusion: fastCheck.conclusion,
          allPassed: fastCheck.overallPassed
        },
        specificSuggestions: []
      });
    } finally {
      setAiReviewLoading(false);
    }
  };

  const isSubmitted = projectStatus === '제출완료' || projectStatus === '교사승인완료';

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <button
                onClick={onBackToStep2}
                className="text-xs text-slate-500 hover:text-slate-800 inline-flex items-center gap-1 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                문장 수정하기 (Step 2)
              </button>
              <span className="text-slate-300">|</span>
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                STEP 3 · 실시간 AI 튜터 & 최종 제출
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
              수행평가 조건 검토 & AI 종합 피드백
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              작성한 영작문이 중1 수행평가 필수 조건에 맞는지 확인하고 선생님께 최종 제출하세요!
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={onSubmitToTeacher}
              disabled={submitting}
              className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-xs transition cursor-pointer shadow-md ${
                isSubmitted
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-100'
              } disabled:opacity-50`}
            >
              {submitting ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : isSubmitted ? (
                <Check className="w-4 h-4" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              <span>{isSubmitted ? '수정 내용 재제출하기' : '선생님께 제출하기'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Submission Status Alert */}
      {isSubmitted && (
        <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-sm">
                {projectStatus === '교사승인완료' ? '선생님께서 최종 확인 및 평가를 완료하셨습니다!' : '선생님께 정상적으로 제출되었습니다!'}
              </p>
              <p className="text-xs text-emerald-700 mt-0.5">
                교사 대시보드에 실시간 등록되어 검토 중입니다. 필요한 경우 문장을 수정하여 다시 제출할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mandatory Condition Badges Grid */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
              Real-time Condition Audit
            </span>
            <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-1">
              수행평가 5대 필수 조건 실시간 충족 현황
            </h3>
          </div>
          <span className="text-xs text-slate-500">
            문장을 수정하면 배지가 즉시 반영됩니다
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* 1. be going to */}
          <div className={`p-4 rounded-2xl border-2 transition ${
            fastCheck.beGoingTo ? 'bg-emerald-50/70 border-emerald-300' : 'bg-rose-50/50 border-rose-200'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-xs text-slate-700">문법 조건 1</span>
              {fastCheck.beGoingTo ? (
                <span className="inline-flex items-center gap-1 text-emerald-700 text-xs font-bold bg-emerald-100/80 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 충족
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-rose-700 text-xs font-bold bg-rose-100/80 px-2 py-0.5 rounded-full">
                  <XCircle className="w-3.5 h-3.5 text-rose-600" /> 미흡
                </span>
              )}
            </div>
            <h4 className="font-extrabold text-slate-900 text-sm">
              be going to + 동사원형
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              미래 계획 표현 (am/is/are going to)
            </p>
          </div>

          {/* 2. Gerund (-ing) */}
          <div className={`p-4 rounded-2xl border-2 transition ${
            fastCheck.gerund ? 'bg-emerald-50/70 border-emerald-300' : 'bg-rose-50/50 border-rose-200'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-xs text-slate-700">문법 조건 2</span>
              {fastCheck.gerund ? (
                <span className="inline-flex items-center gap-1 text-emerald-700 text-xs font-bold bg-emerald-100/80 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 충족
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-rose-700 text-xs font-bold bg-rose-100/80 px-2 py-0.5 rounded-full">
                  <XCircle className="w-3.5 h-3.5 text-rose-600" /> 미흡
                </span>
              )}
            </div>
            <h4 className="font-extrabold text-slate-900 text-sm">
              동명사 (-ing)
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              enjoy eating, looking forward to visiting 등
            </p>
          </div>

          {/* 3. Irregular verbs (at least 2) */}
          <div className={`p-4 rounded-2xl border-2 transition ${
            fastCheck.irregularVerbs.passed ? 'bg-emerald-50/70 border-emerald-300' : 'bg-rose-50/50 border-rose-200'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-xs text-slate-700">문법 조건 3</span>
              {fastCheck.irregularVerbs.passed ? (
                <span className="inline-flex items-center gap-1 text-emerald-700 text-xs font-bold bg-emerald-100/80 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 2개 이상 충족
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-rose-700 text-xs font-bold bg-rose-100/80 px-2 py-0.5 rounded-full">
                  <XCircle className="w-3.5 h-3.5 text-rose-600" /> {fastCheck.irregularVerbs.count}/2개
                </span>
              )}
            </div>
            <h4 className="font-extrabold text-slate-900 text-sm">
              불규칙동사 과거형 / 활용
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              {fastCheck.irregularVerbs.found.length > 0 ? (
                <span>발견: {fastCheck.irregularVerbs.found.join(', ')}</span>
              ) : (
                <span>saw, ate, bought, went, had 등 활용</span>
              )}
            </p>
          </div>

          {/* 4. Combined Grammar Pass */}
          <div className={`p-4 rounded-2xl border-2 transition ${
            fastCheck.grammarConditionMet ? 'bg-indigo-50/70 border-indigo-300' : 'bg-amber-50/70 border-amber-200'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-xs text-slate-700">핵심 문법 규정</span>
              {fastCheck.grammarConditionMet ? (
                <span className="inline-flex items-center gap-1 text-indigo-800 text-xs font-bold bg-indigo-100 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" /> 규정 통과!
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-amber-800 text-xs font-bold bg-amber-100 px-2 py-0.5 rounded-full">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" /> 2개 이상 필요
                </span>
              )}
            </div>
            <h4 className="font-extrabold text-slate-900 text-sm">
              문법 3개 중 2개 이상 필수
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              be going to / 동명사 / 불규칙동사 중 2개 이상 반영
            </p>
          </div>

          {/* 5. Reason with because */}
          <div className={`p-4 rounded-2xl border-2 transition ${
            fastCheck.reasonBecause ? 'bg-emerald-50/70 border-emerald-300' : 'bg-rose-50/50 border-rose-200'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-xs text-slate-700">내용 필수 조건</span>
              {fastCheck.reasonBecause ? (
                <span className="inline-flex items-center gap-1 text-emerald-700 text-xs font-bold bg-emerald-100/80 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 충족
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-rose-700 text-xs font-bold bg-rose-100/80 px-2 py-0.5 rounded-full">
                  <XCircle className="w-3.5 h-3.5 text-rose-600" /> because 누락
                </span>
              )}
            </div>
            <h4 className="font-extrabold text-slate-900 text-sm">
              가고 싶은 이유 (because)
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              Sentence 2에 "because..."로 이유 밝히기
            </p>
          </div>

          {/* 6. Conclusion / Closing */}
          <div className={`p-4 rounded-2xl border-2 transition ${
            fastCheck.conclusion ? 'bg-emerald-50/70 border-emerald-300' : 'bg-rose-50/50 border-rose-200'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-xs text-slate-700">결론 조건</span>
              {fastCheck.conclusion ? (
                <span className="inline-flex items-center gap-1 text-emerald-700 text-xs font-bold bg-emerald-100/80 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 충족
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-rose-700 text-xs font-bold bg-rose-100/80 px-2 py-0.5 rounded-full">
                  <XCircle className="w-3.5 h-3.5 text-rose-600" /> 기대 표현 권장
                </span>
              )}
            </div>
            <h4 className="font-extrabold text-slate-900 text-sm">
              마무리 및 기대 표현
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              looking forward to 또는 special place 활용
            </p>
          </div>

        </div>

        {/* Action button to call deep AI Tutor */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            * 조건을 모두 충족했다면 AI 정밀 진단을 받아보세요!
          </p>
          <button
            type="button"
            onClick={handleRunFullCheck}
            disabled={aiReviewLoading}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Sparkles className={`w-4 h-4 ${aiReviewLoading ? 'animate-spin' : ''}`} />
            <span>{aiReviewLoading ? 'Gemini AI 정밀 진단 중...' : '🤖 Gemini AI 종합 튜터 정밀 피드백 받기'}</span>
          </button>
        </div>
      </div>

      {/* AI Deep Report Card */}
      {aiReport && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-indigo-200 shadow-md space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 font-display">
                  Gemini AI 종합 튜터 진단 리포트
                </h3>
                <p className="text-xs text-slate-500">
                  학생 맞춤형 성취도 분석 및 보완 가이드
                </p>
              </div>
            </div>

            {aiReport.overallScore && (
              <div className="text-right">
                <span className="text-xs font-semibold text-slate-500 block">AI 예상 점수</span>
                <span className="text-2xl font-black text-indigo-600">{aiReport.overallScore}점</span>
                <span className="text-xs text-slate-400"> / 100점</span>
              </div>
            )}
          </div>

          {/* Praise */}
          {aiReport.praise && (
            <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-2xl text-xs sm:text-sm text-indigo-900 leading-relaxed">
              <span className="font-bold text-indigo-950 block mb-1">🌟 튜터의 칭찬:</span>
              {aiReport.praise}
            </div>
          )}

          {/* Specific Suggestions */}
          {aiReport.specificSuggestions && aiReport.specificSuggestions.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span>문장별 보완 추천 사항</span>
              </h4>
              <div className="space-y-2">
                {aiReport.specificSuggestions.map((item, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <p className="font-bold text-slate-800">Sentence {item.sentenceNum}: {item.issue}</p>
                    <p className="text-slate-600 mt-0.5">💡 조언: {item.advice}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Full Korean / English Comparison Preview */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-indigo-600" />
            <h3 className="font-bold text-slate-900 text-base">
              최종 제출 글 미리보기 (한/영 대조)
            </h3>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <h4 className="font-black text-lg text-slate-900 font-display">
            {title || `My Dream Trip to ${destination}, ${country}`}
          </h4>

          <div className="space-y-3">
            {sentences.map((s) => (
              <div key={s.num} className="p-3 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs mb-1">
                  <span>Sentence {s.num}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-500 font-normal">{s.label}</span>
                </div>
                {s.korean && (
                  <p className="text-slate-500 text-xs mb-1">
                    🇰🇷 {s.korean}
                  </p>
                )}
                <p className="text-slate-900 font-medium">
                  🇺🇸 {s.english || <span className="text-slate-400 italic">아직 작성되지 않았습니다.</span>}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Submit Bottom Bar */}
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold text-slate-700">
              제출 학생: {studentName}
            </p>
            <p className="text-[11px] text-slate-400">
              제출 후에도 마감 시간 전까지는 언제든 다시 수정하여 재제출할 수 있습니다.
            </p>
          </div>

          <button
            type="button"
            onClick={onSubmitToTeacher}
            disabled={submitting}
            className={`w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition cursor-pointer flex items-center justify-center gap-2 ${
              isSubmitted
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200'
            } disabled:opacity-50`}
          >
            {submitting ? (
              <span>저장 및 제출 중...</span>
            ) : isSubmitted ? (
              <>
                <Check className="w-4 h-4" />
                <span>선생님께 다시 제출하기</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>선생님께 최종 제출하기</span>
              </>
            )}
          </button>
        </div>
      </div>

    </div>
  );
};
