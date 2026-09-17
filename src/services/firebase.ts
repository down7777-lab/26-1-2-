import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocFromServer,
  updateDoc,
  deleteDoc,
  collection,
  getDocs,
  collectionGroup
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Initialize Firebase App
export const app = initializeApp(firebaseConfig);

// Initialize Firestore with custom database ID
export const db = getFirestore(
  app,
  firebaseConfig.firestoreDatabaseId || '(default)'
);

// SHA-256 password hashing utility (one-way hash)
export async function hashPassword(plainText: string): Promise<string> {
  const trimmed = plainText.trim();
  const encoder = new TextEncoder();
  const data = encoder.encode(trimmed);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Student key formatter: 2026-{grade}-{classNum}-{studentNum (padded 2 digits)}
export function generateStudentKey(grade: number, classNum: number, studentNum: number): string {
  const paddedNum = studentNum.toString().padStart(2, '0');
  return `2026-${grade}-${classNum}-${paddedNum}`;
}

export function getClassId(grade: number, classNum: number): string {
  return `2026_${grade}_${classNum}`;
}

export interface StudentProfile {
  studentKey: string;
  grade: number;
  classNum: number;
  studentNum: number;
  name: string;
  personalPasswordHash: string;
  passwordResetNeeded?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface TeacherEvaluation {
  totalScore: number;
  grammarScore: number;
  contentScore: number;
  vocabScore: number;
  comment: string;
  gradedAt?: string;
}

export interface TravelProject {
  studentKey: string;
  studentName: string;
  grade?: number;
  classNum?: number;
  studentNum?: number;
  title: string;
  continent: string;
  country: string;
  countryEn: string;
  destination: string;
  destinationEn: string;
  attractions: Array<{ name: string; nameEn: string; desc: string }>;
  foods: Array<{ name: string; nameEn: string; desc: string }>;
  sentences: Array<{
    num: number;
    label: string;
    korean: string;
    english: string;
  }>;
  status: '작성중' | '제출완료' | '교사승인완료';
  aiEvaluation?: {
    overallScore?: number;
    grammarScore?: number;
    contentScore?: number;
    vocabScore?: number;
    praise?: string;
    draftSummary?: string;
  };
  teacherEvaluation?: TeacherEvaluation;
  createdAt?: string;
  updatedAt?: string;
}

export type TravelProjectData = TravelProject;

export interface FirestoreTestResult {
  success: boolean;
  message: string;
  latencyMs?: number;
  stepsPassed?: string[];
}

/**
 * Genuine CRUD verification of Firestore connection
 * Performs CREATE -> READ -> UPDATE -> DELETE on /test/connection-check
 */
export async function testFirestoreCRUD(): Promise<FirestoreTestResult> {
  const startTime = Date.now();
  const testDocId = `check-${Date.now()}`;
  const testDocRef = doc(db, 'system_health', testDocId);
  const stepsPassed: string[] = [];

  try {
    // 1. CREATE
    await setDoc(testDocRef, {
      testField: 'initial_value',
      timestamp: new Date().toISOString(),
      platform: 'Google Cloud Firestore'
    });
    stepsPassed.push('CREATE (setDoc)');

    // 2. READ (forced from server to avoid cache)
    const readSnap = await getDocFromServer(testDocRef);
    if (!readSnap.exists() || readSnap.data()?.testField !== 'initial_value') {
      throw new Error('Read verification failed - document not found on server');
    }
    stepsPassed.push('READ (getDocFromServer)');

    // 3. UPDATE
    await updateDoc(testDocRef, {
      testField: 'updated_value',
      updatedAt: new Date().toISOString()
    });
    const updateSnap = await getDocFromServer(testDocRef);
    if (updateSnap.data()?.testField !== 'updated_value') {
      throw new Error('Update verification failed');
    }
    stepsPassed.push('UPDATE (updateDoc)');

    // 4. DELETE
    await deleteDoc(testDocRef);
    const deleteSnap = await getDoc(testDocRef);
    if (deleteSnap.exists()) {
      throw new Error('Delete verification failed - document still exists');
    }
    stepsPassed.push('DELETE (deleteDoc)');

    const latencyMs = Date.now() - startTime;
    return {
      success: true,
      message: 'Firestore 연결 정상 (CRUD 4단계 검증 완료)',
      latencyMs,
      stepsPassed
    };
  } catch (err: any) {
    console.error('Firestore CRUD test failed:', err);
    // Cleanup if possible
    try {
      await deleteDoc(testDocRef);
    } catch {}

    return {
      success: false,
      message: err?.message || 'Firestore CRUD 테스트 실패',
      latencyMs: Date.now() - startTime,
      stepsPassed
    };
  }
}

/**
 * System Settings
 */
export interface SystemSettings {
  classSharedPassword: string;
  teacherPassword: string;
}

export async function getSystemSettings(): Promise<SystemSettings> {
  try {
    const configRef = doc(db, 'system_config', 'settings');
    const snap = await getDoc(configRef);
    if (snap.exists()) {
      const data = snap.data();
      return {
        classSharedPassword: data.classSharedPassword || 'dream2026',
        teacherPassword: data.teacherPassword || 'teacher1234'
      };
    }
    // Initialize if not exists
    const defaultSettings: SystemSettings = {
      classSharedPassword: 'dream2026',
      teacherPassword: 'teacher1234'
    };
    await setDoc(configRef, {
      ...defaultSettings,
      updatedAt: new Date().toISOString()
    });
    return defaultSettings;
  } catch (err) {
    console.error('Error fetching system settings:', err);
    return {
      classSharedPassword: 'dream2026',
      teacherPassword: 'teacher1234'
    };
  }
}

export async function saveSystemSettings(settings: Partial<SystemSettings>): Promise<boolean> {
  try {
    const configRef = doc(db, 'system_config', 'settings');
    await setDoc(
      configRef,
      {
        ...settings,
        updatedAt: new Date().toISOString()
      },
      { merge: true }
    );
    return true;
  } catch (err) {
    console.error('Failed to save system settings:', err);
    return false;
  }
}

/**
 * Student Account Management
 */
export async function getStudentDoc(grade: number, classNum: number, studentNum: number): Promise<StudentProfile | null> {
  const studentKey = generateStudentKey(grade, classNum, studentNum);
  const classId = getClassId(grade, classNum);
  const studentDocRef = doc(db, 'classes', classId, 'students', studentKey);
  const snap = await getDoc(studentDocRef);
  if (snap.exists()) {
    return snap.data() as StudentProfile;
  }
  return null;
}

export async function registerStudentAccount(
  grade: number,
  classNum: number,
  studentNum: number,
  name: string,
  personalPasswordPlain: string
): Promise<{ success: boolean; student?: StudentProfile; message?: string }> {
  try {
    const studentKey = generateStudentKey(grade, classNum, studentNum);
    const classId = getClassId(grade, classNum);
    const studentDocRef = doc(db, 'classes', classId, 'students', studentKey);

    const existing = await getDoc(studentDocRef);
    if (existing.exists()) {
      return { success: false, message: '이미 등록된 학생 번호입니다. 개인 비밀번호로 로그인해주세요.' };
    }

    const personalPasswordHash = await hashPassword(personalPasswordPlain);
    const newStudent: StudentProfile = {
      studentKey,
      grade,
      classNum,
      studentNum,
      name: name.trim(),
      personalPasswordHash,
      passwordResetNeeded: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    await setDoc(studentDocRef, newStudent);
    return { success: true, student: newStudent };
  } catch (err: any) {
    console.error('Failed to register student:', err);
    return { success: false, message: '학생 등록 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' };
  }
}

export async function changeStudentPassword(
  grade: number,
  classNum: number,
  studentNum: number,
  newPasswordPlain: string
): Promise<boolean> {
  try {
    const studentKey = generateStudentKey(grade, classNum, studentNum);
    const classId = getClassId(grade, classNum);
    const studentDocRef = doc(db, 'classes', classId, 'students', studentKey);
    const newHash = await hashPassword(newPasswordPlain);
    await updateDoc(studentDocRef, {
      personalPasswordHash: newHash,
      passwordResetNeeded: false,
      updatedAt: new Date().toISOString()
    });
    return true;
  } catch (err) {
    console.error('Failed to change student password:', err);
    return false;
  }
}

export async function resetStudentPasswordByTeacher(studentKeyOrGrade: string | number, classNum?: number, studentNum?: number): Promise<boolean> {
  try {
    let studentKey: string;
    let classId: string;

    if (typeof studentKeyOrGrade === 'string') {
      studentKey = studentKeyOrGrade;
      // studentKey format: 2026-{grade}-{classNum}-{studentNum}
      const parts = studentKey.split('-');
      const gr = parts[1] || '1';
      const cl = parts[2] || '1';
      classId = `2026_${gr}_${cl}`;
    } else {
      const gr = studentKeyOrGrade;
      const cl = classNum || 1;
      const num = studentNum || 1;
      studentKey = generateStudentKey(gr, cl, num);
      classId = getClassId(gr, cl);
    }

    const studentDocRef = doc(db, 'classes', classId, 'students', studentKey);
    await updateDoc(studentDocRef, {
      passwordResetNeeded: true,
      personalPasswordHash: '',
      updatedAt: new Date().toISOString()
    });
    return true;
  } catch (err) {
    console.error('Failed to reset student password:', err);
    return false;
  }
}

export async function getAllStudents(): Promise<StudentProfile[]> {
  try {
    // collectionGroup query to find all students across classes
    const studentsGroup = collectionGroup(db, 'students');
    const snap = await getDocs(studentsGroup);
    return snap.docs.map(d => d.data() as StudentProfile);
  } catch (err) {
    console.error('Error fetching all students:', err);
    return [];
  }
}

/**
 * Travel Project Persistence
 */
export async function getTravelProject(studentKey: string): Promise<TravelProject | null> {
  try {
    const projectRef = doc(db, 'travel_projects', studentKey);
    const snap = await getDoc(projectRef);
    if (snap.exists()) {
      return snap.data() as TravelProject;
    }
    return null;
  } catch (err) {
    console.error('Error fetching travel project:', err);
    return null;
  }
}

export async function saveTravelProject(projectData: Partial<TravelProject> & { studentKey: string }): Promise<boolean> {
  try {
    const projectRef = doc(db, 'travel_projects', projectData.studentKey);
    await setDoc(
      projectRef,
      {
        ...projectData,
        updatedAt: new Date().toISOString()
      },
      { merge: true }
    );
    return true;
  } catch (err) {
    console.error('Error saving travel project:', err);
    return false;
  }
}

export async function submitTravelProject(studentKey: string, projectData?: Partial<TravelProject>): Promise<boolean> {
  try {
    const projectRef = doc(db, 'travel_projects', studentKey);
    await setDoc(
      projectRef,
      {
        ...(projectData || {}),
        status: '제출완료',
        updatedAt: new Date().toISOString()
      },
      { merge: true }
    );
    return true;
  } catch (err) {
    console.error('Error submitting travel project:', err);
    return false;
  }
}

export async function saveTeacherEvaluation(studentKey: string, evaluation: TeacherEvaluation): Promise<boolean> {
  try {
    const projectRef = doc(db, 'travel_projects', studentKey);
    await updateDoc(projectRef, {
      teacherEvaluation: evaluation,
      status: '교사승인완료',
      updatedAt: new Date().toISOString()
    });
    return true;
  } catch (err) {
    console.error('Error saving teacher evaluation:', err);
    return false;
  }
}

export async function getAllTravelProjects(): Promise<TravelProject[]> {
  try {
    const projectsCol = collection(db, 'travel_projects');
    const snap = await getDocs(projectsCol);
    return snap.docs.map(doc => doc.data() as TravelProject);
  } catch (err) {
    console.error('Error fetching all travel projects:', err);
    return [];
  }
}

export const getAllProjects = getAllTravelProjects;
