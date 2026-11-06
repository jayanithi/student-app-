import React, { createContext, useContext, useMemo, useState } from 'react';

const AppContext = createContext();

const normalData = {
  student: {
    name: 'Alexander Sterling',
    enrollmentId: 'AC-2024-8892',
    studentId: '#SC-90442-2024',
    program: 'B.Sc. Cognitive Architecture',
    year: '2024-25',
    semester: 'Semester 1',
    email: 'a.sterling@summit.edu',
    phone: '+1 (555) 012-8844',
    creditsEarned: 84,
    totalCredits: 120,
    cgpa: 3.92,
    semesterGpa: 3.82, status: 'Active',
  },
  results: [
    { subject: 'Neural Network Foundations', type: 'Midterm Assessment', date: 'Oct 12', grade: 'A+', point: '4.0' },
    { subject: 'Systems Design Ethics', type: 'Term Project', date: 'Sep 28', grade: 'A-', point: '3.7' },
  ],
  subjectBreakdown: [
    { code: 'ARCH-401', credits: 4, name: 'Advanced Structural Design', internal: '28 / 30', external: '64 / 70' },
    { code: 'PSYC-212', credits: 3, name: 'Environmental Psychology', internal: '25 / 30', external: '58 / 70' },
    { code: 'URBN-305', credits: 4, name: 'Urban Planning Theory', internal: '29 / 30', external: '61 / 70' },
    { code: 'ENG-104', credits: 3, name: 'Sustainable Materials', internal: '22 / 30', external: '52 / 70' },
    { code: 'THES-499', credits: 2, name: 'Thesis Seminar I', internal: '30 / 30', external: '68 / 70' },
  ], exams: [
    { month: 'NOV', day: '14', title: 'Advanced Heuristics', time: '09:00 AM', place: 'Main Hall 4' },
    { month: 'NOV', day: '18', title: 'Quantized Logic II', time: '02:30 PM', place: 'Digital Lab' },
  ],
  notices: [
    { tag: "Dean's Office", title: 'Spring Semester Registration Window', text: 'Early bird registration opens November 1st. Consult your advisor for course selection.', tone: 'primary' },
    { tag: 'Advising', title: 'Mandatory Graduation Seminar', text: 'All final-year students must attend the career placement workshop this Friday.', tone: 'warning' },
  ],
};

const arrearData = {
  ...normalData,
  student: {
    ...normalData.student,
    cgpa: 0.0,
    semesterGpa: 0.0,
    status: 'Reappear',
  },
  results: [
    { subject: 'Sustainable Materials', type: 'End-Term Exam', date: 'Nov 02', grade: 'U', point: 'Uncleared' },
    { subject: 'Neural Network Foundations', type: 'Midterm Assessment', date: 'Oct 12', grade: 'A+', point: '4.0' },
  ],
  subjectBreakdown: [
    { code: 'ARCH-401', credits: 4, name: 'Advanced Structural Design', internal: '28 / 30', external: '64 / 70' },
    { code: 'PSYC-212', credits: 3, name: 'Environmental Psychology', internal: '25 / 30', external: '58 / 70' },
    { code: 'URBN-305', credits: 4, name: 'Urban Planning Theory', internal: '29 / 30', external: '61 / 70' },
    { code: 'ENG-104', credits: 3, name: 'Sustainable Materials', internal: '08 / 30', external: '20 / 70', arrear: true },
    { code: 'THES-499', credits: 2, name: 'Thesis Seminar I', internal: '30 / 30', external: '68 / 70' },
  ],
  notices: [
    { tag: 'Registrar', title: 'Supplementary Exam Registration', text: 'Registration for the December supplementary cycle is now open for students with active arrears.', tone: 'error' },
    { tag: 'Advising', title: 'Mandatory Graduation Seminar', text: 'All final-year students must attend the career placement workshop this Friday.', tone: 'warning' },
  ],
}; export function AppProvider({ children }) {
  const [hasArrear, setHasArrear] = useState(false);

  const value = useMemo(
    () => ({
      hasArrear,
      setHasArrear,
      data: hasArrear ? arrearData : normalData,
    }),
    [hasArrear]
  ); return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppStore() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppStore must be used inside AppProvider');
  return context;
}