import React, { useState } from 'react';
import {
  getStudentDoc,
  registerStudentAccount,
  hashPassword,
  changeStudentPassword,
  getSystemSettings,
  StudentProfile
} from '../services/firebase';
import { UserCheck, UserPlus, Lock, KeyRound, Sparkles, HelpCircle, AlertTriangle } from 'lucide-react';

interface StudentAuthModalProps {
  isOpen: boolean;
  onLoginSuccess: (student: StudentProfile) => void;
  onClose?: () => void;
}

export const StudentAuthModal: React.FC<StudentAuthModalProps> = ({
  isOpen,
  onLoginSuccess
}) => {
  const [tab, setTab] = useState<'login' | 'register'>('login');

  // Form states
  const [grade, setGrade] = useState<number>(1);
  const [classNum, setClassNum] = useState<number>(1);
  const [studentNum, setStudentNum] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [classSharedPassword, setClassSharedPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  // Password reset flow
  const [resetPromptStudent, setResetPromptStudent] = useState<StudentProfile | null>(null);
  const [newResetPassword, setNewResetPassword] = useState<string>('');

  const [errorMsg, setErrorMsg] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  if (!isOpen) return null;

  // Handle Returning Student Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('이름을 입력해주세요.');
      return;
    }
    if (!password) {
      setErrorMsg('개인 비밀번호를 입력해주세요.');
      return;
    }

    setLoading(true);
    try {
      const student = await getStudentDoc(grade, classNum, studentNum);
      if (!student) {
        setErrorMsg('등록되지 않은 학생입니다. [처음 시작하기] 탭에서 먼저 등록해주세요.');
        setLoading(false);
        return;
      }

      if (student.name.trim() !== name.trim()) {
        setErrorMsg('등록된 이름과 일치하지 않습니다. 학년, 반, 번호와 이름을 확인해주세요.');
        setLoading(false);
        return;
      }

      // Check if teacher requested a password reset
      if (student.passwordResetNeeded) {
        setResetPromptStudent(student);
        setLoading(false);
        return;
      }

      // Verify hash
      const inputHash = await hashPassword(password);
      if (inputHash !== student.personalPasswordHash) {
        setErrorMsg('비밀번호가 일치하지 않습니다. 다시 입력해주세요. (잊어버렸다면 영어 선생님께 비밀번호 초기화를 요청하세요!)');
        setLoading(false);
        return;
      }

      // Success
      onLoginSuccess(student);
    } catch (err: any) {
      console.error(err);
      setErrorMsg('저장에 실패했어요. 네트워크 연결을 확인하고 다시 시도해 주세요.');
    } finally {
      setLoading(false);
    }
  };

  // Handle First-Time Registration
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg('이름을 입력해주세요.');
      return;
    }
    if (!classSharedPassword.trim()) {
      setErrorMsg('선생님이 알려주신 [학급 공용 비밀번호]를 입력해주세요.');
      return;
    }
    if (!password || password.length < 4) {
      setErrorMsg('나만의 개인 비밀번호는 4자리 이상이어야 합니다.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }

    setLoading(true);
    try {
      // Verify class shared password
      const settings = await getSystemSettings();
      if (classSharedPassword.trim() !== settings.classSharedPassword) {
        setErrorMsg('학급 공용 비밀번호가 일치하지 않습니다. 선생님께 확인해주세요. (기본값: dream2026)');
        setLoading(false);
        return;
      }

      // Register new account
      const result = await registerStudentAccount(grade, classNum, studentNum, name, password);
      if (!result.success || !result.student) {
        setErrorMsg(result.message || '등록에 실패했습니다.');
        setLoading(false);
        return;
      }

      // Success
      onLoginSuccess(result.student);
    } catch (err: any) {
      console.error(err);
      setErrorMsg('저장에 실패했어요. 네트워크 연결을 확인하고 다시 시도해 주세요.');
    } finally {
      setLoading(false);
    }
  };

  // Handle Password Reset Setting
  const handleSaveResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetPromptStudent) return;
    if (!newResetPassword || newResetPassword.length < 4) {
      setErrorMsg('새로운 개인 비밀번호는 4자리 이상이어야 합니다.');
      return;
    }

    setLoading(true);
    try {
      const ok = await changeStudentPassword(
        resetPromptStudent.grade,
        resetPromptStudent.classNum,
        resetPromptStudent.studentNum,
        newResetPassword
      );
      if (ok) {
        const updated = await getStudentDoc(
          resetPromptStudent.grade,
          resetPromptStudent.classNum,
          resetPromptStudent.studentNum
        );
        if (updated) {
          onLoginSuccess(updated);
        }
      } else {
        setErrorMsg('비밀번호 재설정에 실패했습니다. 다시 시도해주세요.');
      }
    } catch {
      setErrorMsg('저장에 실패했어요. 네트워크 연결을 확인하고 다시 시도해 주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-md p-6 sm:p-8 my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Reset Password Prompt Screen */}
        {resetPromptStudent ? (
          <div>
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <KeyRound className="w-7 h-7" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                선생님이 비밀번호를 초기화했어요!
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                {resetPromptStudent.name} 학생, 앞으로 사용할 새로운 4자리 이상 개인 비밀번호를 입력해주세요.
              </p>
            </div>

            <form onSubmit={handleSaveResetPassword} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  새 개인 비밀번호 (4자리 이상 숫자 또는 영문)
                </label>
                <input
                  type="password"
                  value={newResetPassword}
                  onChange={(e) => setNewResetPassword(e.target.value)}
                  placeholder="예: 1234 또는 dream12"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 text-sm"
                  autoFocus
                />
              </div>

              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold rounded-xl text-sm transition shadow-md shadow-indigo-200 disabled:opacity-50 cursor-pointer"
              >
                {loading ? '설정 중...' : '새 비밀번호로 시작하기'}
              </button>
            </form>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-2 border border-indigo-100">
                <Sparkles className="w-6 h-6 text-indigo-600" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                My Dream Trip
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                중학교 1학년 영어 여행기 쓰기 수행평가
              </p>
            </div>

            {/* Tabs */}
            <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl mb-6 text-xs font-bold">
              <button
                type="button"
                onClick={() => {
                  setTab('login');
                  setErrorMsg('');
                }}
                className={`py-2.5 rounded-lg flex items-center justify-center gap-1.5 transition cursor-pointer ${
                  tab === 'login'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <UserCheck className="w-4 h-4" />
                이어서 하기 (로그인)
              </button>
              <button
                type="button"
                onClick={() => {
                  setTab('register');
                  setErrorMsg('');
                }}
                className={`py-2.5 rounded-lg flex items-center justify-center gap-1.5 transition cursor-pointer ${
                  tab === 'register'
                    ? 'bg-white text-indigo-700 shadow-xs'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <UserPlus className="w-4 h-4" />
                처음 시작하기 (등록)
              </button>
            </div>

            {/* Form */}
            <form onSubmit={tab === 'login' ? handleLogin : handleRegister} className="space-y-4">
              {/* Grade, Class, Number Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  학년 / 반 / 번호
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <div className="relative">
                      <select
                        value={grade}
                        onChange={(e) => setGrade(Number(e.target.value))}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value={1}>1학년</option>
                        <option value={2}>2학년</option>
                        <option value={3}>3학년</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <select
                      value={classNum}
                      onChange={(e) => setClassNum(Number(e.target.value))}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                    >
                      {Array.from({ length: 15 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                          {n}반
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select
                      value={studentNum}
                      onChange={(e) => setStudentNum(Number(e.target.value))}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                    >
                      {Array.from({ length: 40 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                          {n}번
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Student Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  이름 (실명 입력)
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="예: 김민준"
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              {/* Register specific: Class Shared Password */}
              {tab === 'register' && (
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-slate-700">
                      학급 공용 비밀번호
                    </label>
                    <span className="text-[11px] text-indigo-600 font-medium">
                      선생님께 받은 비밀번호
                    </span>
                  </div>
                  <input
                    type="password"
                    value={classSharedPassword}
                    onChange={(e) => setClassSharedPassword(e.target.value)}
                    placeholder="기본 비밀번호: dream2026"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
              )}

              {/* Personal Password (PIN) */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-slate-700">
                    {tab === 'login' ? '개인 비밀번호' : '나만의 개인 비밀번호 설정 (4자리 이상)'}
                  </label>
                  {tab === 'login' && (
                    <span className="text-[10px] text-slate-400">
                      등록 시 설정했던 번호
                    </span>
                  )}
                </div>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={tab === 'login' ? '개인 비밀번호 입력' : '4자리 이상 기억하기 쉬운 비밀번호'}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 pr-10"
                    required
                  />
                  <Lock className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                </div>
              </div>

              {/* Register specific: Confirm Password */}
              {tab === 'register' && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    비밀번호 확인
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="비밀번호를 한 번 더 입력하세요"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>
              )}

              {/* Error Alert */}
              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span className="leading-tight">{errorMsg}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold rounded-xl text-xs sm:text-sm transition shadow-md shadow-indigo-100 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-1.5 mt-2"
              >
                {loading ? (
                  <span>불러오는 중...</span>
                ) : tab === 'login' ? (
                  <>
                    <UserCheck className="w-4 h-4" />
                    내 여행 프로젝트 이어쓰기
                  </>
                ) : (
                  <>
                    <UserPlus className="w-4 h-4" />
                    새 여행 프로젝트 시작하기
                  </>
                )}
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-slate-100 text-center">
              <p className="text-[11px] text-slate-500 flex items-center justify-center gap-1">
                <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                태블릿/PC 어디서 접속하든 작성 중인 글이 안전하게 저장됩니다.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
