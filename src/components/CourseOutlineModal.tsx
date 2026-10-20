import React from 'react';
import { Course } from '../data/coursesData';

interface CourseOutlineModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onEnroll: (courseId: string) => void;
}

export const CourseOutlineModal: React.FC<CourseOutlineModalProps> = ({
  course,
  isOpen,
  onClose,
  onEnroll
}) => {
  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="relative h-48 sm:h-56 w-full shrink-0 overflow-hidden bg-surface-container">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 text-inverse-on-surface">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded-full bg-primary-container text-on-primary-container text-label-sm font-bold shadow-sm">
                {course.badge}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/80 text-on-surface text-label-sm font-bold backdrop-blur-xs">
                {course.accreditation}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-inverse-surface/80 text-inverse-on-surface text-label-sm font-bold">
                {course.durationLabel}
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg font-extrabold text-white leading-tight">
              {course.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Subtitle & Key Stats Strip */}
          <div>
            <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
              {course.subtitle}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              <div className="p-3 rounded-xl bg-surface-container-low text-center">
                <span className="font-label-sm text-label-sm text-secondary block">Duration</span>
                <span className="font-headline-sm font-bold text-on-surface">{course.durationLabel}</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-low text-center">
                <span className="font-label-sm text-label-sm text-secondary block">Commitment</span>
                <span className="font-headline-sm font-bold text-on-surface">{course.hoursPerWeek}</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-low text-center">
                <span className="font-label-sm text-label-sm text-secondary block">Monthly Tuition</span>
                <span className="font-headline-sm font-bold text-primary-container">PKR {course.monthlyFee.toLocaleString()}</span>
              </div>
              <div className="p-3 rounded-xl bg-surface-container-low text-center">
                <span className="font-label-sm text-label-sm text-secondary block">Placement Outcome</span>
                <span className="font-headline-sm font-bold text-tertiary">Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Tools & Tech Stack */}
          <div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">build</span>
              Tools &amp; Tech Stack Mastered
            </h3>
            <div className="flex flex-wrap gap-2">
              {course.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-surface-container font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Comprehensive Curriculum Syllabus */}
          <div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">menu_book</span>
              Comprehensive Syllabus Modules
            </h3>
            <div className="space-y-3">
              {course.curriculum.map((module, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-surface-container-low border border-surface-container"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">
                      {module.week}
                    </span>
                    <span className="text-xs text-secondary font-semibold">Hands-on Labs</span>
                  </div>
                  <h4 className="font-headline-sm text-base font-bold text-on-surface mb-2">
                    {module.title}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {module.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-1.5 text-body-sm text-secondary">
                        <span className="material-symbols-outlined text-tertiary text-[16px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Career Roles Ready For */}
          <div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-[20px]">work</span>
              Target High-Income Career Roles
            </h3>
            <div className="flex flex-wrap gap-2">
              {course.careerRoles.map((role, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-bold"
                >
                  💼 {role}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 bg-surface-container-low border-t border-surface-container flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div>
            <span className="text-xs text-secondary block font-medium">Batch Orientation:</span>
            <span className="font-label-md text-label-md font-bold text-on-surface">
              {course.nextCohort} • Seats 85% Booked
            </span>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-bold cursor-pointer transition-colors"
            >
              Back
            </button>
            <button
              onClick={() => {
                onClose();
                onEnroll(course.id);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary-container font-label-md text-label-md font-bold shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">school</span>
              Enroll in Program
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
