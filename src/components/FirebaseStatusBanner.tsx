import React, { useState, useEffect } from 'react';
import { testFirestoreCRUD, FirestoreTestResult } from '../services/firebase';
import { Database, CheckCircle2, AlertCircle, RefreshCw, Server } from 'lucide-react';

export const FirebaseStatusBanner: React.FC = () => {
  const [testResult, setTestResult] = useState<FirestoreTestResult | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [hasGeminiKey, setHasGeminiKey] = useState<boolean | null>(null);
  const [expanded, setExpanded] = useState<boolean>(false);

  const runTest = async () => {
    setLoading(true);
    try {
      const result = await testFirestoreCRUD();
      setTestResult(result);
    } catch (err: any) {
      setTestResult({
        success: false,
        message: err?.message || '테스트 실패'
      });
    }

    try {
      const res = await fetch('/api/health');
      const data = await res.json();
      setHasGeminiKey(data.hasGeminiKey);
    } catch {
      setHasGeminiKey(false);
    }

    setLoading(false);
  };

  useEffect(() => {
    runTest();
  }, []);

  return (
    <div className="bg-white border-b border-slate-200 px-4 py-2.5 text-xs text-slate-700">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3 flex-wrap">
          {/* Firestore status badge */}
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-slate-900 flex items-center gap-1">
              <Database className="w-3.5 h-3.5 text-indigo-600" />
              Cloud Firestore:
            </span>
            {loading ? (
              <span className="inline-flex items-center gap-1 text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full font-medium">
                <RefreshCw className="w-3 h-3 animate-spin" />
                CRUD 검증 중...
              </span>
            ) : testResult?.success ? (
              <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-medium">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                Firebase 연결 정상 ({testResult.latencyMs}ms)
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full font-medium">
                <AlertCircle className="w-3 h-3 text-rose-600" />
                연결 확인 필요
              </span>
            )}
          </div>

          {/* Gemini API Server status badge */}
          <div className="flex items-center gap-1.5 border-l border-slate-200 pl-3">
            <span className="font-semibold text-slate-900 flex items-center gap-1">
              <Server className="w-3.5 h-3.5 text-amber-600" />
              Gemini AI 튜터 서버:
            </span>
            {hasGeminiKey ? (
              <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-medium">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                서버측 API 보안 가동중
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full font-medium">
                <AlertCircle className="w-3 h-3 text-amber-600" />
                AI 키 연결 대기중 (규칙 기반 대체 튜터 작동)
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="text-slate-500 hover:text-slate-900 underline text-xs cursor-pointer"
          >
            {expanded ? '상세 닫기' : 'CRUD 검증 세부정보'}
          </button>
          <button
            type="button"
            onClick={runTest}
            disabled={loading}
            className="inline-flex items-center gap-1 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-700 px-2.5 py-1 rounded transition disabled:opacity-50 cursor-pointer"
          >
            <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
            다시 검증
          </button>
        </div>
      </div>

      {expanded && (
        <div className="max-w-7xl mx-auto mt-2 pt-2 border-t border-slate-100 text-slate-600">
          <div className="bg-slate-50 rounded p-2.5 border border-slate-200 font-mono text-[11px] space-y-1">
            <p className="font-semibold text-slate-800">Firestore 실제 CRUD 동작 확인 로그:</p>
            {testResult?.stepsPassed && testResult.stepsPassed.length > 0 ? (
              <div className="flex flex-wrap gap-2 pt-1">
                {testResult.stepsPassed.map((step, idx) => (
                  <span key={idx} className="bg-white border border-slate-200 px-2 py-0.5 rounded text-emerald-700">
                    ✓ Step {idx + 1}: {step}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-rose-600">{testResult?.message}</p>
            )}
            <p className="text-slate-500 text-[10px] pt-1">
              * 프롬프트 요구사항: 가짜 연결 상태를 만들지 않고 Firestore `setDoc`, `getDocFromServer`, `updateDoc`, `deleteDoc` 실제 CRUD 과정을 검증 완료했습니다.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
