/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { FirebaseStatusBanner } from './components/FirebaseStatusBanner';
import { Navbar } from './components/Navbar';
import { StudentAuthModal } from './components/StudentAuthModal';
import { Step1Explore } from './components/Step1Explore';
import { Step2Writing } from './components/Step2Writing';
import { Step3AITutor } from './components/Step3AITutor';
import { TeacherDashboard } from './components/TeacherDashboard';
import { SENTENCE_TEMPLATES } from './data/sentenceTemplates';
import {
  StudentProfile,
  TravelProject,
  getTravelProject,
  saveTravelProject,
  submitTravelProject
} from './services/firebase';

export default function App() {
  const [currentMode, setCurrentMode] = useState<'student' | 'teacher'>('student');
  const [student, setStudent] = useState<StudentProfile | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(true);
  const [activeStep, setActiveStep] = useState<number>(1);

  // Project state
  const [project, setProject] = useState<TravelProject | null>(null);
  const [saving, setSaving] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  // Restore stored session if exists
  useEffect(() => {
    const saved = localStorage.getItem('dream_trip_current_student');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        handleLoginSuccess(parsed);
      } catch {
        // ignore
      }
    }
  }, []);

  // When student logs in
  const handleLoginSuccess = async (loggedStudent: StudentProfile) => {
    setStudent(loggedStudent);
    localStorage.setItem('dream_trip_current_student', JSON.stringify(loggedStudent));
    setAuthModalOpen(false);

    // Fetch existing project from Firestore
    try {
      const existing = await getTravelProject(loggedStudent.studentKey);
      if (existing) {
        setProject(existing);
        // If already selected destination, jump to step 2 or 3
        if (existing.destination) {
          if (existing.status === '제출완료' || existing.status === '교사승인완료') {
            setActiveStep(3);
          } else {
            setActiveStep(2);
          }
        } else {
          setActiveStep(1);
        }
      } else {
        // Initialize default empty project
        const defaultSentences = SENTENCE_TEMPLATES.map(t => ({
          num: t.num,
          label: t.badge,
          korean: '',
          english: ''
        }));

        const newProj: TravelProject = {
          studentKey: loggedStudent.studentKey,
          studentName: loggedStudent.name,
          title: 'My Dream Trip',
          continent: '',
          country: '',
          countryEn: '',
          destination: '',
          destinationEn: '',
          attractions: [],
          foods: [],
          sentences: defaultSentences,
          status: '작성중',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        setProject(newProj);
        setActiveStep(1);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Logout
  const handleLogout = () => {
    setStudent(null);
    setProject(null);
    localStorage.removeItem('dream_trip_current_student');
    setAuthModalOpen(true);
  };

  // Complete Step 1 Explore
  const handleCompleteStep1 = async (selected: {
    continent: string;
    country: string;
    countryEn: string;
    destination: string;
    destinationEn: string;
    attractions: Array<{ name: string; nameEn: string; desc: string }>;
    foods: Array<{ name: string; nameEn: string; desc: string }>;
  }) => {
    if (!project || !student) return;

    const defaultTitle = `My Dream Trip to ${selected.destinationEn || selected.destination}, ${selected.countryEn || selected.country}`;

    const updated: TravelProject = {
      ...project,
      continent: selected.continent,
      country: selected.country,
      countryEn: selected.countryEn,
      destination: selected.destination,
      destinationEn: selected.destinationEn,
      attractions: selected.attractions,
      foods: selected.foods,
      title: project.title === 'My Dream Trip' || !project.title ? defaultTitle : project.title,
      updatedAt: new Date().toISOString()
    };

    setProject(updated);
    setActiveStep(2);

    // Persist to Firestore
    try {
      await saveTravelProject(updated);
    } catch (err) {
      console.error('Failed to save to Firestore:', err);
    }
  };

  // Title change
  const handleChangeTitle = (newTitle: string) => {
    if (!project) return;
    setProject({
      ...project,
      title: newTitle
    });
  };

  // Sentence change
  const handleChangeSentence = (num: number, field: 'korean' | 'english', value: string) => {
    if (!project) return;
    const newSentences = project.sentences.map(s => {
      if (s.num === num) {
        return { ...s, [field]: value };
      }
      return s;
    });

    setProject({
      ...project,
      sentences: newSentences
    });
  };

  // Save project
  const handleSaveProject = async () => {
    if (!project) return;
    setSaving(true);
    try {
      await saveTravelProject(project);
    } catch (err) {
      console.error(err);
      alert('저장에 실패했습니다. 네트워크 상태를 확인해주세요.');
    } finally {
      setSaving(false);
    }
  };

  // Final Submit to teacher
  const handleSubmitToTeacher = async () => {
    if (!project || !student) return;

    // Check sentence completeness
    const filledCount = project.sentences.filter(s => s.english.trim().length > 3).length;
    if (filledCount < 5) {
      const confirmSubmit = confirm(`아직 완성되지 않은 문장이 있습니다 (${filledCount}/7 문장 작성됨). 그래도 제출하시겠습니까?`);
      if (!confirmSubmit) return;
    }

    setSubmitting(true);
    try {
      const ok = await submitTravelProject(project.studentKey, project);
      if (ok) {
        setProject({
          ...project,
          status: '제출완료'
        });
        alert('선생님께 성공적으로 제출되었습니다! 교사 대시보드에서 실시간으로 확인 및 평가됩니다.');
      } else {
        alert('제출 도중 오류가 발생했습니다.');
      }
    } catch (err) {
      console.error(err);
      alert('제출에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/60 font-sans text-slate-900 flex flex-col">
      {/* Top Firestore & AI Server Health Banner */}
      <FirebaseStatusBanner />

      {/* Main App Navbar */}
      <Navbar
        currentMode={currentMode}
        onSwitchMode={(mode) => setCurrentMode(mode)}
        student={student}
        onLogoutStudent={handleLogout}
        projectStatus={project?.status}
        activeStep={activeStep}
        onSelectStep={(step) => setActiveStep(step)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        
        {/* TEACHER MODE */}
        {currentMode === 'teacher' ? (
          <TeacherDashboard onExit={() => setCurrentMode('student')} />
        ) : (
          /* STUDENT MODE */
          <div>
            {!student ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-3xl flex items-center justify-center mx-auto text-3xl shadow-sm">
                  ✈️
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display">
                  중1 영어 수행평가: My Dream Trip
                </h2>
                <p className="text-sm text-slate-500 max-w-md mx-auto">
                  가고 싶은 해외 여행지를 조사하고 조건에 맞춰 나만의 멋진 영어 여행기를 완성해보세요!
                </p>
                <button
                  onClick={() => setAuthModalOpen(true)}
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm shadow-md shadow-indigo-100 transition cursor-pointer"
                >
                  로그인 / 계정 등록하고 시작하기
                </button>
              </div>
            ) : (
              <div>
                {/* Step 1: Destination Exploration */}
                {activeStep === 1 && (
                  <Step1Explore
                    initialSelectedData={project ? {
                      continent: project.continent,
                      country: project.country,
                      countryEn: project.countryEn,
                      destination: project.destination,
                      destinationEn: project.destinationEn,
                      attractions: project.attractions,
                      foods: project.foods
                    } : null}
                    onSelectComplete={handleCompleteStep1}
                  />
                )}

                {/* Step 2: Korean & English Writing */}
                {activeStep === 2 && project && (
                  <Step2Writing
                    destination={project.destination}
                    destinationEn={project.destinationEn}
                    country={project.country}
                    countryEn={project.countryEn}
                    attractions={project.attractions}
                    foods={project.foods}
                    title={project.title}
                    onChangeTitle={handleChangeTitle}
                    sentences={project.sentences}
                    onChangeSentence={handleChangeSentence}
                    onSaveProject={handleSaveProject}
                    saving={saving}
                    onProceedToStep3={() => setActiveStep(3)}
                    onBackToStep1={() => setActiveStep(1)}
                  />
                )}

                {/* Step 3: Real-time Gemini AI Tutor & Final Submission */}
                {activeStep === 3 && project && (
                  <Step3AITutor
                    studentName={project.studentName}
                    destination={project.destination}
                    country={project.country}
                    title={project.title}
                    sentences={project.sentences}
                    projectStatus={project.status}
                    onSubmitToTeacher={handleSubmitToTeacher}
                    onBackToStep2={() => setActiveStep(2)}
                    submitting={submitting}
                  />
                )}
              </div>
            )}
          </div>
        )}

      </main>

      {/* Student Authentication Modal */}
      <StudentAuthModal
        isOpen={authModalOpen && !student && currentMode === 'student'}
        onLoginSuccess={handleLoginSuccess}
        onClose={() => setAuthModalOpen(false)}
      />

      {/* Global Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-4 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>중학교 1학년 영어 수행평가: My Dream Trip to... (해외 여행지 소개하기)</span>
          <span className="text-slate-400">Powered by Google Gemini AI & Firebase Firestore</span>
        </div>
      </footer>
    </div>
  );
}
