import React from 'react';
import { Plane, Compass, LogOut, ShieldCheck, User, Sparkles } from 'lucide-react';
import { StudentProfile } from '../services/firebase';

interface NavbarProps {
  currentMode: 'student' | 'teacher';
  onSwitchMode: (mode: 'student' | 'teacher') => void;
  student: StudentProfile | null;
  onLogoutStudent: () => void;
  projectStatus?: '작성중' | '제출완료' | '교사승인완료';
  activeStep?: number;
  onSelectStep?: (step: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentMode,
  onSwitchMode,
  student,
  onLogoutStudent,
  projectStatus,
  activeStep = 1,
  onSelectStep
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo and title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-indigo-600 flex items-center justify-center text-white shadow-sm shadow-indigo-200">
            <Plane className="w-5 h-5 -rotate-12" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 font-display">
                My Dream Trip
              </span>
              <span className="hidden sm:inline-block text-[11px] bg-sky-100 text-sky-800 font-semibold px-2 py-0.5 rounded-full border border-sky-200">
                중1 영어 수행평가
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden md:block">
              해외 여행지 탐색 ➔ 구상 및 영작 ➔ Gemini AI 실시간 피드백
            </p>
          </div>
        </div>

        {/* Middle step tabs (when in student mode & logged in) */}
        {currentMode === 'student' && student && onSelectStep && (
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200/80">
            <button
              onClick={() => onSelectStep(1)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeStep === 1
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              1. 여행지 탐색
            </button>
            <button
              onClick={() => onSelectStep(2)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeStep === 2
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>✍️</span>
              2. 영작문 작성
            </button>
            <button
              onClick={() => onSelectStep(3)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                activeStep === 3
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              3. AI 튜터 & 제출
            </button>
          </nav>
        )}

        {/* Right side user info & mode toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {currentMode === 'student' && student ? (
            <div className="flex items-center gap-2">
              {/* Status pill */}
              {projectStatus && (
                <span
                  className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                    projectStatus === '교사승인완료'
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                      : projectStatus === '제출완료'
                      ? 'bg-blue-50 text-blue-700 border-blue-300'
                      : 'bg-amber-50 text-amber-700 border-amber-300'
                  }`}
                >
                  {projectStatus}
                </span>
              )}

              {/* Student info badge */}
              <div className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200/70 border border-slate-200 px-2.5 py-1.5 rounded-lg text-xs text-slate-800 font-medium">
                <User className="w-3.5 h-3.5 text-slate-500" />
                <span className="font-semibold">{student.name}</span>
                <span className="text-slate-400 text-[11px]">
                  ({student.grade}-{student.classNum}-{student.studentNum})
                </span>
              </div>

              <button
                type="button"
                onClick={onLogoutStudent}
                title="로그아웃"
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : currentMode === 'teacher' ? (
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-indigo-50 border border-indigo-200 text-indigo-800 px-3 py-1.5 rounded-lg text-xs font-bold">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                교사 관리자 모드
              </span>
            </div>
          ) : null}

          {/* Mode Switcher Button */}
          <button
            type="button"
            onClick={() => onSwitchMode(currentMode === 'student' ? 'teacher' : 'student')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition border cursor-pointer ${
              currentMode === 'teacher'
                ? 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
                : 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800 shadow-xs'
            }`}
          >
            {currentMode === 'student' ? (
              <>
                <ShieldCheck className="w-3.5 h-3.5" />
                교사 대시보드
              </>
            ) : (
              <>
                <Compass className="w-3.5 h-3.5" />
                학생 모드로 돌아가기
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
