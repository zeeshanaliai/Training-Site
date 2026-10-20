import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EnrollmentModal } from './components/EnrollmentModal';
import { CourseOutlineModal } from './components/CourseOutlineModal';
import { VerifyCertificateModal } from './components/VerifyCertificateModal';
import { StudentLmsModal } from './components/StudentLmsModal';

import { HomeView } from './views/HomeView';
import { CoursesView } from './views/CoursesView';
import { CampusesView } from './views/CampusesView';
import { PlacementView } from './views/PlacementView';
import { COURSES, Course } from './data/coursesData';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('home');
  
  // Modals state
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedCourseForEnroll, setSelectedCourseForEnroll] = useState<string | undefined>();
  const [selectedCampusForEnroll, setSelectedCampusForEnroll] = useState<string | undefined>();
  
  const [outlineModalOpen, setOutlineModalOpen] = useState(false);
  const [selectedCourseForOutline, setSelectedCourseForOutline] = useState<Course | null>(null);

  const [verifyModalOpen, setVerifyModalOpen] = useState(false);
  const [lmsModalOpen, setLmsModalOpen] = useState(false);

  // Sync with browser hash / navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'courses', 'placement', 'campuses'].includes(hash)) {
        setCurrentPath(hash);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.location.hash = path;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnroll = (courseId?: string, campusId?: string) => {
    setSelectedCourseForEnroll(courseId);
    setSelectedCampusForEnroll(campusId);
    setEnrollModalOpen(true);
  };

  const handleOpenOutline = (courseId: string) => {
    const course = COURSES.find(c => c.id === courseId) || null;
    setSelectedCourseForOutline(course);
    setOutlineModalOpen(true);
  };

  const handleOpenVerify = () => {
    setVerifyModalOpen(true);
  };

  const handleOpenLms = () => {
    setLmsModalOpen(true);
  };

  const handleOpenInstructor = () => {
    handleOpenEnroll(undefined, 'lahore-arfa');
  };

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container">
      {/* Top Navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenEnroll={handleOpenEnroll}
        onOpenLms={handleOpenLms}
      />

      {/* Main Content Area */}
      <main className="w-full pt-[116px] bg-surface min-h-[calc(100vh-116px)] flex-1">
        {currentPath === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenEnroll={handleOpenEnroll}
            onOpenOutline={handleOpenOutline}
          />
        )}

        {currentPath === 'courses' && (
          <CoursesView
            onNavigate={handleNavigate}
            onOpenEnroll={handleOpenEnroll}
            onOpenOutline={handleOpenOutline}
          />
        )}

        {currentPath === 'campuses' && (
          <CampusesView
            onNavigate={handleNavigate}
            onOpenEnroll={handleOpenEnroll}
          />
        )}

        {currentPath === 'placement' && (
          <PlacementView
            onNavigate={handleNavigate}
            onOpenEnroll={handleOpenEnroll}
          />
        )}
      </main>

      {/* Shared Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenVerify={handleOpenVerify}
        onOpenLms={handleOpenLms}
        onOpenInstructor={handleOpenInstructor}
      />

      {/* Fast Track Admissions Modal */}
      <EnrollmentModal
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        initialCourseId={selectedCourseForEnroll}
        initialCampusId={selectedCampusForEnroll}
      />

      {/* Syllabus / Curriculum Detail Modal */}
      <CourseOutlineModal
        isOpen={outlineModalOpen}
        onClose={() => setOutlineModalOpen(false)}
        course={selectedCourseForOutline}
        onEnroll={(courseId) => {
          setOutlineModalOpen(false);
          handleOpenEnroll(courseId);
        }}
      />

      {/* Official Certificate Verification Modal */}
      <VerifyCertificateModal
        isOpen={verifyModalOpen}
        onClose={() => setVerifyModalOpen(false)}
      />

      {/* Student LMS Portal Modal */}
      <StudentLmsModal
        isOpen={lmsModalOpen}
        onClose={() => setLmsModalOpen(false)}
      />

      {/* Quick Access Floating Screen Switcher for Easy Review */}
      <aside aria-label="Demo Screen Switcher" className="fixed bottom-5 right-5 z-40 bg-inverse-surface/90 backdrop-blur-md text-inverse-on-surface p-2 rounded-2xl shadow-2xl flex items-center gap-1.5 border border-surface-container-highest/20">
        <span className="text-[11px] font-bold uppercase tracking-wider text-secondary-fixed-dim px-2 hidden sm:inline">
          Screens:
        </span>
        <button
          onClick={() => handleNavigate('home')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            currentPath === 'home'
              ? 'bg-primary-container text-on-primary shadow-sm'
              : 'hover:bg-surface-container-high/30 text-inverse-on-surface'
          }`}
        >
          1. Home
        </button>
        <button
          onClick={() => handleNavigate('courses')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            currentPath === 'courses'
              ? 'bg-primary-container text-on-primary shadow-sm'
              : 'hover:bg-surface-container-high/30 text-inverse-on-surface'
          }`}
        >
          2. Courses
        </button>
        <button
          onClick={() => handleNavigate('campuses')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            currentPath === 'campuses'
              ? 'bg-primary-container text-on-primary shadow-sm'
              : 'hover:bg-surface-container-high/30 text-inverse-on-surface'
          }`}
        >
          3. Campuses
        </button>
        <button
          onClick={() => handleNavigate('placement')}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            currentPath === 'placement'
              ? 'bg-primary-container text-on-primary shadow-sm'
              : 'hover:bg-surface-container-high/30 text-inverse-on-surface'
          }`}
        >
          4. NexTalent
        </button>
        <div className="h-4 w-[1px] bg-surface-container-highest/30 mx-1 hidden md:block"></div>
        <button
          onClick={handleOpenVerify}
          title="Verify Student Certificate"
          className="p-1.5 rounded-xl hover:bg-surface-container-high/30 text-inverse-on-surface text-xs flex items-center gap-1 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">verified</span>
          <span className="hidden md:inline">Verify</span>
        </button>
        <button
          onClick={handleOpenLms}
          title="Open Student LMS Portal"
          className="p-1.5 rounded-xl hover:bg-surface-container-high/30 text-inverse-on-surface text-xs flex items-center gap-1 cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px] text-primary-fixed">desktop_windows</span>
          <span className="hidden md:inline">LMS</span>
        </button>
      </aside>
    </div>
  );
}
