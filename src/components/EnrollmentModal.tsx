import React, { useState, useEffect } from 'react';
import { COURSES, Course } from '../data/coursesData';
import { CAMPUSES } from '../data/campusesData';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourseId?: string;
  initialCampusId?: string;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  initialCourseId,
  initialCampusId
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [courseId, setCourseId] = useState(initialCourseId || 'full-stack-ai');
  const [campusId, setCampusId] = useState(initialCampusId || 'lahore-arfa');
  const [shift, setShift] = useState('evening');
  const [needScholarship, setNeedScholarship] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  useEffect(() => {
    if (initialCourseId) setCourseId(initialCourseId);
    if (initialCampusId) setCampusId(initialCampusId);
    if (isOpen) {
      setSubmitted(false);
    }
  }, [initialCourseId, initialCampusId, isOpen]);

  if (!isOpen) return null;

  const selectedCourse = COURSES.find((c) => c.id === courseId) || COURSES[0];
  const selectedCampus = CAMPUSES.find((c) => c.id === campusId) || CAMPUSES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomTicket = 'NX-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(randomTicket);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-surface-container-low px-6 py-4 flex items-center justify-between border-b border-surface-container">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-xl">school</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                Fast-Track Admissions 2026
              </h3>
              <p className="font-body-sm text-body-sm text-secondary">
                NAVTTC, PSDF &amp; TEVTA Approved Tech Bootcamps
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-surface-container text-secondary hover:text-on-surface transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Modal Body */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Muhammad"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container border border-surface-container"
                />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">
                  Last Name *
                </label>
                <input
                  type="text"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Ali"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container border border-surface-container"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">
                  Phone / WhatsApp Number *
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 font-label-sm text-label-sm text-secondary font-bold">
                    +92
                  </span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="309 6663330"
                    className="w-full pl-12 pr-3 py-2.5 rounded-lg bg-surface font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container border border-surface-container"
                  />
                </div>
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@gmail.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container border border-surface-container"
                />
              </div>
            </div>

            <div>
              <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">
                Select Program / Specialization *
              </label>
              <select
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-surface font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container border border-surface-container cursor-pointer"
              >
                {COURSES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title} ({c.durationLabel} - PKR {c.monthlyFee.toLocaleString()}/mo)
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">
                  Preferred Campus *
                </label>
                <select
                  value={campusId}
                  onChange={(e) => setCampusId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container border border-surface-container cursor-pointer"
                >
                  <option value="lahore-arfa">Lahore - Arfa Software Technology Park</option>
                  <option value="lahore-garden-town">Lahore - 14 Babar Block, Garden Town</option>
                  <option value="karachi-parsa">Karachi - PARSA Tower, Shahrah-e-Faisal</option>
                  <option value="mian-channu">Mian Channu - Sanaullah Complex</option>
                  <option value="online">100% Online Interactive Live Labs</option>
                </select>
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">
                  Cohort Shift Timing
                </label>
                <select
                  value={shift}
                  onChange={(e) => setShift(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container border border-surface-container cursor-pointer"
                >
                  <option value="morning">Morning (10:00 AM - 1:00 PM)</option>
                  <option value="afternoon">Afternoon (2:00 PM - 5:00 PM)</option>
                  <option value="evening">Evening (6:00 PM - 9:00 PM)</option>
                  <option value="weekend">Weekend Executive (Sat &amp; Sun)</option>
                </select>
              </div>
            </div>

            {/* Tuition Breakdown Card */}
            <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-3 border border-surface-container">
              <div>
                <div className="font-label-sm text-label-sm text-secondary">Tuition Fee Plan:</div>
                <div className="font-headline-sm text-headline-sm font-extrabold text-on-surface">
                  PKR {selectedCourse.monthlyFee.toLocaleString()}{' '}
                  <span className="font-body-sm text-body-sm font-normal text-secondary">/month</span>
                </div>
              </div>
              <div className="text-right sm:text-right">
                <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant text-label-sm font-bold inline-block">
                  Next Batch: {selectedCourse.nextCohort}
                </span>
                <p className="font-body-sm text-body-sm text-secondary mt-1">
                  Flexible 3-month or monthly installment options available
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 pt-1">
              <input
                id="scholarship"
                type="checkbox"
                checked={needScholarship}
                onChange={(e) => setNeedScholarship(e.target.checked)}
                className="mt-1 rounded accent-primary-container cursor-pointer"
              />
              <label htmlFor="scholarship" className="font-body-sm text-body-sm text-secondary cursor-pointer leading-tight">
                Consider my application for Government-Sponsored NAVTTC &amp; PSDF Need-Based Financial Grants.
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-primary-container hover:bg-primary text-on-primary-container font-label-md text-label-md font-bold shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
                Submit Application &amp; Reserve Seat
              </button>
            </div>
            <p className="text-center font-label-sm text-label-sm text-secondary">
              🔒 100% Safe &amp; Protected under NexSkill Student Privacy Charter.
            </p>
          </form>
        ) : (
          /* Success Pass Generator State */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 mx-auto rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant">
              <span className="material-symbols-outlined text-3xl">verified</span>
            </div>
            <div>
              <span className="px-3 py-1 rounded-full bg-primary-container text-on-primary-container text-label-sm font-bold uppercase tracking-wider">
                Seat Reserved • Spring 2026 Batch
              </span>
              <h4 className="font-headline-lg text-headline-lg font-bold text-on-surface mt-2">
                Congratulations, {firstName}!
              </h4>
              <p className="font-body-md text-body-md text-secondary mt-1 max-w-md mx-auto">
                Your fast-track application for <strong className="text-on-surface">{selectedCourse.title}</strong> at{' '}
                <strong className="text-on-surface">{selectedCampus.name}</strong> has been confirmed.
              </p>
            </div>

            {/* Generated Student Admission Slip */}
            <div className="p-5 rounded-2xl bg-surface-container-low border-2 border-dashed border-primary-container/40 text-left max-w-md mx-auto">
              <div className="flex items-center justify-between pb-3 border-b border-surface-container">
                <div>
                  <span className="text-[10px] uppercase font-bold text-secondary">Student Roll / Admission Pass</span>
                  <div className="font-headline-sm font-extrabold text-primary-container">{ticketId}</div>
                </div>
                <div className="w-12 h-12 bg-surface-container-lowest rounded-lg border border-surface-container flex items-center justify-center font-mono font-bold text-xs text-on-surface">
                  QR
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 py-3 text-body-sm text-secondary">
                <div>
                  <span className="block text-[11px] font-bold text-on-surface">Applicant:</span>
                  <span>{firstName} {lastName}</span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-on-surface">Contact (WhatsApp):</span>
                  <span>+92 {phone}</span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-on-surface">Selected Shift:</span>
                  <span className="capitalize">{shift} Cohort</span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold text-on-surface">Orientation Date:</span>
                  <span className="text-primary font-bold">{selectedCourse.nextCohort}</span>
                </div>
              </div>
              {needScholarship && (
                <div className="pt-2 border-t border-surface-container text-xs text-tertiary font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  Nominated for NAVTTC / PSDF Grant Evaluation
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/923096663330?text=Hi%20NexSkill%2C%20I%20have%20registered%20for%20${encodeURIComponent(selectedCourse.title)}%20with%20Admission%20Pass%20${ticketId}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-tertiary-container hover:bg-tertiary text-on-tertiary font-label-md text-label-md font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                Confirm on WhatsApp (+92 309 666 3330)
              </a>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-bold transition-colors cursor-pointer"
              >
                Close Pass
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
