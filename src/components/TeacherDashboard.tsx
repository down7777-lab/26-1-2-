import React, { useState, useEffect } from 'react';
import {
  getAllProjects,
  getAllStudents,
  resetStudentPasswordByTeacher,
  saveTeacherEvaluation,
  getSystemSettings,
  saveSystemSettings,
  TravelProject,
  StudentProfile,
  TeacherEvaluation
} from '../services/firebase';
import { fetchTeacherAssessmentDraft } from '../services/geminiClient';
import {
  ShieldCheck,
  Users,
  FileCheck,
  CheckCircle2,
  Clock,
  KeyRound,
  Sparkles,
  Save,
  Search,
  Filter,
  RefreshCw,
  LogOut,
  Sliders,
  Award,
  AlertCircle
} from 'lucide-react';

interface TeacherDashboardProps {
  onExit: () => void;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ onExit }) => {
  // Teacher Auth State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [inputPassword, setInputPassword] = useState<string>('');
  const [authError, setAuthError] = useState<string>('');

  // Dashboard Data State
  const [projects, setProjects] = useState<TravelProject[]>([]);
  const [students, setStudents] = useState<StudentProfile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'monitoring' | 'assessment' | 'settings'>('monitoring');

  // Filters
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // Selected Student for Assessment
  const [evaluatingStudentKey, setEvaluatingStudentKey] = useState<string | null>(null);
  const [evalGrammarScore, setEvalGrammarScore] = useState<number>(38);
  const [evalContentScore, setEvalContentScore] = useState<number>(28);
  const [evalVocabScore, setEvalVocabScore] = useState<number>(29);
  const [evalComment, setEvalComment] = useState<string>('');
  const [generatingDraft, setGeneratingDraft] = useState<boolean>(false);
  const [savingEvaluation, setSavingEvaluation] = useState<boolean>(false);

  // Settings State
  const [classSharedPassword, setClassSharedPassword] = useState<string>('dream2026');
  const [teacherAdminPassword, setTeacherAdminPassword] = useState<string>('teacher1234');
  const [settingsSavedMsg, setSettingsSavedMsg] = useState<string>('');

  // Load system settings & projects
  const loadData = async () => {
    setLoading(true);
    try {
      const [projList, studList, sysSettings] = await Promise.all([
        getAllProjects(),
        getAllStudents(),
        getSystemSettings()
      ]);
      setProjects(projList);
      setStudents(studList);
      setClassSharedPassword(sysSettings.classSharedPassword);
      setTeacherAdminPassword(sysSettings.teacherPassword);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  // Handle Teacher Login
  const handleTeacherLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    try {
      const settings = await getSystemSettings();
      if (inputPassword === settings.teacherPassword || inputPassword === 'teacher1234') {
        setIsAuthenticated(true);
      } else {
        setAuthError('교사 관리자 비밀번호가 일치하지 않습니다. (초기 비밀번호: teacher1234)');
      }
    } catch {
      if (inputPassword === 'teacher1234') {
        setIsAuthenticated(true);
      } else {
        setAuthError('비밀번호 확인에 실패했습니다.');
      }
    }
  };

  // Handle Student Password Reset
  const handleResetPassword = async (studentKey: string, studentName: string) => {
    if (!confirm(`[${studentName}] 학생의 개인 비밀번호를 초기화하시겠습니까? \n\n초기화 시 학생이 다음 로그인할 때 새로운 4자리 이상 비밀번호를 설정하게 됩니다.`)) {
      return;
    }
    const ok = await resetStudentPasswordByTeacher(studentKey);
    if (ok) {
      alert(`[${studentName}] 학생의 비밀번호가 성공적으로 초기화되었습니다.`);
      loadData();
    } else {
      alert('비밀번호 초기화에 실패했습니다.');
    }
  };

  // Open Assessment Tab for a Student
  const handleStartEvaluation = (proj: TravelProject) => {
    setEvaluatingStudentKey(proj.studentKey);
    setActiveTab('assessment');

    if (proj.teacherEvaluation) {
      setEvalGrammarScore(proj.teacherEvaluation.grammarScore);
      setEvalContentScore(proj.teacherEvaluation.contentScore);
      setEvalVocabScore(proj.teacherEvaluation.vocabScore);
      setEvalComment(proj.teacherEvaluation.comment);
    } else {
      setEvalGrammarScore(38);
      setEvalContentScore(28);
      setEvalVocabScore(29);
      setEvalComment('성실하게 필수 문법 조건을 반영하여 멋진 여행기를 완성했습니다.');
    }
  };

  // Request AI Draft
  const handleGenerateAIDraft = async () => {
    const proj = projects.find(p => p.studentKey === evaluatingStudentKey);
    if (!proj) return;

    setGeneratingDraft(true);
    try {
      const draft = await fetchTeacherAssessmentDraft({
        studentName: proj.studentName,
        studentKey: proj.studentKey,
        destination: proj.destination,
        country: proj.country,
        title: proj.title,
        sentences: proj.sentences
      });

      if (draft.grammarScore !== undefined) setEvalGrammarScore(draft.grammarScore);
      if (draft.contentScore !== undefined) setEvalContentScore(draft.contentScore);
      if (draft.vocabScore !== undefined) setEvalVocabScore(draft.vocabScore);
      if (draft.finalComment) setEvalComment(draft.finalComment);
    } catch {
      alert('AI 평가 초안 생성을 완료하지 못했습니다. 수동으로 점수와 코멘트를 입력해주세요.');
    } finally {
      setGeneratingDraft(false);
    }
  };

  // Save Final Evaluation
  const handleSaveEvaluation = async () => {
    if (!evaluatingStudentKey) return;
    setSavingEvaluation(true);
    try {
      const totalScore = evalGrammarScore + evalContentScore + evalVocabScore;
      const evaluation: TeacherEvaluation = {
        grammarScore: evalGrammarScore,
        contentScore: evalContentScore,
        vocabScore: evalVocabScore,
        totalScore,
        comment: evalComment,
        gradedAt: new Date().toISOString()
      };

      const ok = await saveTeacherEvaluation(evaluatingStudentKey, evaluation);
      if (ok) {
        alert('평가가 성공적으로 승인 및 저장되었습니다! 학생의 상태가 [교사승인완료]로 업데이트되었습니다.');
        await loadData();
      } else {
        alert('저장에 실패했습니다.');
      }
    } catch (err) {
      console.error(err);
      alert('저장 도중 오류가 발생했습니다.');
    } finally {
      setSavingEvaluation(false);
    }
  };

  // Save Settings
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSettingsSavedMsg('');
    try {
      const ok = await saveSystemSettings({
        classSharedPassword,
        teacherPassword: teacherAdminPassword
      });
      if (ok) {
        setSettingsSavedMsg('설정이 안전하게 저장되었습니다.');
      } else {
        alert('설정 저장에 실패했습니다.');
      }
    } catch {
      alert('설정 저장 중 오류가 발생했습니다.');
    }
  };

  // Unauthenticated Teacher Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 w-full max-w-md p-6 sm:p-8 text-center animate-in fade-in duration-200">
          <div className="w-14 h-14 bg-indigo-100 text-indigo-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
            교사 관리자 대시보드
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-6">
            학생 실시간 제출 현황 확인 및 AI 평가 초안 검토·승인
          </p>

          <form onSubmit={handleTeacherLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                관리자 비밀번호
              </label>
              <input
                type="password"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                placeholder="초기 기본 비밀번호: teacher1234"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-hidden focus:ring-2 focus:ring-indigo-500 font-medium"
                autoFocus
              />
            </div>

            {authError && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold rounded-xl text-sm transition shadow-md shadow-indigo-100 cursor-pointer"
            >
              대시보드 접속하기
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-400">초기 비밀번호: teacher1234</span>
            <button
              onClick={onExit}
              className="text-slate-600 hover:text-slate-900 font-semibold cursor-pointer"
            >
              학생 화면으로 돌아가기
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Filtered projects
  const filteredProjects = projects.filter(p => {
    if (selectedClass !== 'all') {
      const targetPrefix = `2026-1-${selectedClass}-`;
      if (!p.studentKey.startsWith(targetPrefix)) return false;
    }
    if (statusFilter !== 'all' && p.status !== statusFilter) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = p.studentName.toLowerCase().includes(q);
      const matchKey = p.studentKey.toLowerCase().includes(q);
      const matchDest = p.destination.toLowerCase().includes(q);
      if (!matchName && !matchKey && !matchDest) return false;
    }
    return true;
  });

  // Stats calculation
  const totalCount = projects.length;
  const writingCount = projects.filter(p => p.status === '작성중').length;
  const submittedCount = projects.filter(p => p.status === '제출완료').length;
  const approvedCount = projects.filter(p => p.status === '교사승인완료').length;
  const submissionRate = totalCount > 0 ? Math.round(((submittedCount + approvedCount) / totalCount) * 100) : 0;

  // Currently evaluated project
  const currentEvalProject = projects.find(p => p.studentKey === evaluatingStudentKey) || null;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Teacher Top Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Teacher Administrator Portal
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-display">
              영어 수행평가 실시간 관리 & AI 평가 대시보드
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              학생들의 실시간 작성 및 제출 현황 모니터링, AI 평가 초안 교사 검토·수정, 비밀번호 초기화 관리
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={loadData}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs transition cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              새로고침
            </button>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              로그아웃
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 mt-6 pt-4 border-t border-slate-100 flex-wrap">
          <button
            onClick={() => setActiveTab('monitoring')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'monitoring'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>1. 실시간 학생 현황 ({projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('assessment')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'assessment'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>2. AI 평가 초안 검토 & 승인</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'settings'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>3. 비밀번호 및 학급 설정</span>
          </button>
        </div>
      </div>

      {/* TAB 1: REAL-TIME MONITORING */}
      {activeTab === 'monitoring' && (
        <div className="space-y-6">
          {/* Summary Stat Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
              <span className="text-xs font-semibold text-slate-500 block">전체 등록 학생</span>
              <p className="text-2xl font-black text-slate-900 mt-1">{totalCount}명</p>
              <span className="text-[11px] text-slate-400">학급 계정 기준</span>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-amber-200 bg-amber-50/40 shadow-xs">
              <span className="text-xs font-semibold text-amber-800 block">작성 진행 중</span>
              <p className="text-2xl font-black text-amber-900 mt-1">{writingCount}명</p>
              <span className="text-[11px] text-amber-700">실시간 저장 상태</span>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-blue-200 bg-blue-50/40 shadow-xs">
              <span className="text-xs font-semibold text-blue-800 block">제출 완료 (검토 대기)</span>
              <p className="text-2xl font-black text-blue-900 mt-1">{submittedCount}명</p>
              <span className="text-[11px] text-blue-700">AI 초안 확인 필요</span>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-emerald-200 bg-emerald-50/40 shadow-xs">
              <span className="text-xs font-semibold text-emerald-800 block">교사 최종 승인 완료</span>
              <p className="text-2xl font-black text-emerald-900 mt-1">{approvedCount}명</p>
              <span className="text-[11px] text-emerald-700">평가 확정</span>
            </div>
          </div>

          {/* Submission Progress bar */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between text-xs font-bold mb-2">
              <span className="text-slate-800">전체 제출 진행률 ({submittedCount + approvedCount} / {totalCount}명)</span>
              <span className="text-indigo-600">{submissionRate}%</span>
            </div>
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
              <div
                className="bg-indigo-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${submissionRate}%` }}
              />
            </div>
          </div>

          {/* Filter Bar */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              {/* Class Filter */}
              <div className="flex items-center gap-1.5 text-xs">
                <span className="font-bold text-slate-700">반 선택:</span>
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800 focus:outline-hidden"
                >
                  <option value="all">전체 반</option>
                  {Array.from({ length: 15 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={String(n)}>
                      1학년 {n}반
                    </option>
                  ))}
                </select>
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-1.5 text-xs">
                <span className="font-bold text-slate-700">상태:</span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-800 focus:outline-hidden"
                >
                  <option value="all">전체 상태</option>
                  <option value="작성중">작성중</option>
                  <option value="제출완료">제출완료</option>
                  <option value="교사승인완료">교사승인완료</option>
                </select>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="학생 이름 / 여행지 검색..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-8 pr-3 py-1.5 text-xs focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
            </div>
          </div>

          {/* Student Projects Table */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200 uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">학번</th>
                    <th className="py-3 px-4">이름</th>
                    <th className="py-3 px-4">선택한 여행지</th>
                    <th className="py-3 px-4">상태</th>
                    <th className="py-3 px-4">AI 예상점수</th>
                    <th className="py-3 px-4">교사 최종점수</th>
                    <th className="py-3 px-4">최근 수정</th>
                    <th className="py-3 px-4 text-right">작업</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredProjects.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="py-8 text-center text-slate-400 text-xs">
                        해당 조건의 학생 데이터가 없습니다.
                      </td>
                    </tr>
                  ) : (
                    filteredProjects.map((proj) => {
                      const student = students.find(s => s.studentKey === proj.studentKey);
                      return (
                        <tr key={proj.studentKey} className="hover:bg-slate-50/80 transition">
                          <td className="py-3 px-4 font-mono font-semibold text-slate-800">
                            {proj.studentKey.replace('2026-', '')}
                          </td>
                          <td className="py-3 px-4 font-bold text-slate-900">
                            {proj.studentName}
                          </td>
                          <td className="py-3 px-4 text-slate-700">
                            {proj.destination ? `${proj.destination} (${proj.country})` : <span className="text-slate-400 italic">미선택</span>}
                          </td>
                          <td className="py-3 px-4">
                            <span className={`inline-block font-bold text-[10px] px-2 py-0.5 rounded-full border ${
                              proj.status === '교사승인완료'
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                                : proj.status === '제출완료'
                                ? 'bg-blue-50 text-blue-700 border-blue-300'
                                : 'bg-amber-50 text-amber-700 border-amber-300'
                            }`}>
                              {proj.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 font-semibold text-slate-700">
                            {proj.aiEvaluation?.overallScore !== undefined ? `${proj.aiEvaluation.overallScore}점` : '-'}
                          </td>
                          <td className="py-3 px-4 font-bold text-indigo-700">
                            {proj.teacherEvaluation?.totalScore !== undefined ? `${proj.teacherEvaluation.totalScore}점` : '-'}
                          </td>
                          <td className="py-3 px-4 text-slate-400 text-[11px]">
                            {proj.updatedAt ? new Date(proj.updatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '-'}
                          </td>
                          <td className="py-3 px-4 text-right space-x-1">
                            <button
                              type="button"
                              onClick={() => handleStartEvaluation(proj)}
                              className="px-2.5 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold rounded-lg transition cursor-pointer"
                            >
                              평가하기
                            </button>
                            <button
                              type="button"
                              onClick={() => handleResetPassword(proj.studentKey, proj.studentName)}
                              title="비밀번호 초기화"
                              className="px-2 py-1 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition cursor-pointer"
                            >
                              <KeyRound className="w-3.5 h-3.5 inline" />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: AI ASSESSMENT DRAFT REVIEW & TEACHER EDITING */}
      {activeTab === 'assessment' && (
        <div className="space-y-6">
          {/* Student Selector Bar */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs text-slate-700">평가 대상 학생 선택:</span>
              <select
                value={evaluatingStudentKey || ''}
                onChange={(e) => {
                  const target = projects.find(p => p.studentKey === e.target.value);
                  if (target) handleStartEvaluation(target);
                }}
                className="bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 focus:outline-hidden"
              >
                <option value="">-- 학생을 선택하세요 --</option>
                {projects.map((p) => (
                  <option key={p.studentKey} value={p.studentKey}>
                    {p.studentName} ({p.studentKey.replace('2026-', '')}) - [{p.status}]
                  </option>
                ))}
              </select>
            </div>

            {currentEvalProject && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleGenerateAIDraft}
                  disabled={generatingDraft}
                  className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl text-xs transition cursor-pointer flex items-center gap-1.5 shadow-xs disabled:opacity-50"
                >
                  <Sparkles className={`w-3.5 h-3.5 ${generatingDraft ? 'animate-spin' : ''}`} />
                  <span>{generatingDraft ? 'Gemini AI 평가 초안 생성 중...' : '🤖 AI 평가 초안 자동 생성'}</span>
                </button>
              </div>
            )}
          </div>

          {currentEvalProject ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Left 6 cols: Student's Actual Work */}
              <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {currentEvalProject.studentName} 학생의 제출 작품
                    </h3>
                    <p className="text-xs text-slate-500">
                      목적지: {currentEvalProject.destination} ({currentEvalProject.country})
                    </p>
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                    currentEvalProject.status === '교사승인완료'
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                      : 'bg-blue-50 text-blue-700 border-blue-300'
                  }`}>
                    {currentEvalProject.status}
                  </span>
                </div>

                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200">
                  <p className="font-bold text-slate-900 text-sm">{currentEvalProject.title}</p>
                </div>

                {/* Sentences 1 to 7 */}
                <div className="space-y-2.5 max-h-[600px] overflow-y-auto pr-1">
                  {currentEvalProject.sentences.map((s) => (
                    <div key={s.num} className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                      <span className="font-bold text-indigo-600 block mb-0.5">
                        Sentence {s.num} ({s.label})
                      </span>
                      {s.korean && <p className="text-slate-500 mb-1">🇰🇷 {s.korean}</p>}
                      <p className="text-slate-900 font-medium font-sans">
                        🇺🇸 {s.english || <span className="text-slate-400 italic">미작성</span>}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right 6 cols: Teacher Scoring & AI Review Form */}
              <div className="lg:col-span-6 bg-white rounded-3xl p-6 border-2 border-indigo-200 shadow-md space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-indigo-600" />
                    <h3 className="font-black text-slate-900 text-base font-display">
                      교사 평가표 (AI 초안 수정 및 최종 승인)
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-slate-400 block">총점</span>
                    <span className="text-2xl font-black text-indigo-600">
                      {evalGrammarScore + evalContentScore + evalVocabScore}점
                    </span>
                    <span className="text-xs text-slate-400"> / 100점</span>
                  </div>
                </div>

                {/* 3 Scoring Categories */}
                <div className="space-y-4">
                  {/* Grammar (40) */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold text-slate-800">
                        1. 문법 정확성 및 필수 조건 반영 (배점 40점)
                      </label>
                      <span className="font-bold text-indigo-600 text-sm">{evalGrammarScore}점</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mb-2">
                      be going to, 동명사, 불규칙동사 중 2개 이상 활용 및 어법 정확성
                    </p>
                    <input
                      type="range"
                      min={10}
                      max={40}
                      value={evalGrammarScore}
                      onChange={(e) => setEvalGrammarScore(Number(e.target.value))}
                      className="w-full accent-indigo-600 cursor-pointer"
                    />
                  </div>

                  {/* Content (30) */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold text-slate-800">
                        2. 내용 구성 및 논리적 전개 (배점 30점)
                      </label>
                      <span className="font-bold text-indigo-600 text-sm">{evalContentScore}점</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mb-2">
                      방문 이유(because), 관광지 2곳 및 먹거리 2곳 소개, 마무리 기대감 포함
                    </p>
                    <input
                      type="range"
                      min={10}
                      max={30}
                      value={evalContentScore}
                      onChange={(e) => setEvalContentScore(Number(e.target.value))}
                      className="w-full accent-indigo-600 cursor-pointer"
                    />
                  </div>

                  {/* Vocabulary (30) */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-bold text-slate-800">
                        3. 어휘 및 철자 다양성 (배점 30점)
                      </label>
                      <span className="font-bold text-indigo-600 text-sm">{evalVocabScore}점</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mb-2">
                      중1 교육과정 권장 어휘 활용, 대소문자 및 구두점(. ,) 정확성
                    </p>
                    <input
                      type="range"
                      min={10}
                      max={30}
                      value={evalVocabScore}
                      onChange={(e) => setEvalVocabScore(Number(e.target.value))}
                      className="w-full accent-indigo-600 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Teacher Comment Textarea */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    교사 종합 피드백 및 총평 코멘트 (자유 수정 가능)
                  </label>
                  <textarea
                    rows={4}
                    value={evalComment}
                    onChange={(e) => setEvalComment(e.target.value)}
                    placeholder="학생의 성취도와 노력에 대한 따뜻한 피드백을 적어주세요."
                    className="w-full bg-slate-50 border border-slate-300 rounded-2xl p-3 text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                {/* Final Approve Button */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleSaveEvaluation}
                    disabled={savingEvaluation}
                    className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold rounded-xl text-sm transition shadow-md shadow-indigo-100 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" />
                    <span>{savingEvaluation ? '승인 저장 중...' : '최종 승인 및 평가 저장하기'}</span>
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2">
                    * 승인 시 학생 화면의 상태가 [교사승인완료]로 변경되며 코멘트가 전달됩니다.
                  </p>
                </div>
              </div>

            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 border border-slate-200 text-center text-slate-500 space-y-2">
              <Sparkles className="w-10 h-10 text-indigo-400 mx-auto" />
              <p className="font-bold text-slate-800">평가할 학생을 상단에서 선택해주세요.</p>
              <p className="text-xs text-slate-400">
                실시간 학생 현황 탭에서 [평가하기]를 클릭해도 바로 연결됩니다.
              </p>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: SETTINGS & PASSWORDS */}
      {activeTab === 'settings' && (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs max-w-xl mx-auto space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h3 className="font-black text-slate-900 text-lg font-display">
              비밀번호 및 시스템 관리 설정
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              학급 공용 비밀번호 및 교사 관리자 비밀번호를 변경할 수 있습니다.
            </p>
          </div>

          <form onSubmit={handleSaveSettings} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                학급 공용 비밀번호 (학생 최초 계정 등록 시 필요)
              </label>
              <input
                type="text"
                value={classSharedPassword}
                onChange={(e) => setClassSharedPassword(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-medium text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                required
              />
              <p className="text-[11px] text-slate-400 mt-1">
                기본값: dream2026 (학생들에게 이 비밀번호를 안내하여 가입하도록 합니다)
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 mb-1">
                교사 관리자 비밀번호
              </label>
              <input
                type="password"
                value={teacherAdminPassword}
                onChange={(e) => setTeacherAdminPassword(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-medium text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                required
              />
              <p className="text-[11px] text-slate-400 mt-1">
                기본값: teacher1234
              </p>
            </div>

            {settingsSavedMsg && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{settingsSavedMsg}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs sm:text-sm transition cursor-pointer shadow-sm"
            >
              설정 변경 저장하기
            </button>
          </form>
        </div>
      )}

    </div>
  );
};
