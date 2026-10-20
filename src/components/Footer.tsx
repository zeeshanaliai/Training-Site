import React from 'react';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenVerify: () => void;
  onOpenLms: () => void;
  onOpenInstructor: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenVerify,
  onOpenLms,
  onOpenInstructor
}) => {
  return (
    <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_12px_rgba(0,0,0,0.04)]">
      {/* Official Accreditation Ribbon */}
      <div className="bg-surface-container-low py-space-md">
        <div className="max-w-7xl mx-auto px-margin flex flex-wrap items-center justify-between gap-space-md">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary text-2xl">verified_user</span>
            <span className="font-label-md text-label-md text-on-surface font-bold">
              Official Accreditation &amp; Affiliations:
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-space-lg font-label-md text-label-md text-secondary">
            <span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface font-semibold text-xs">
              NAVTTC Approved
            </span>
            <span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface font-semibold text-xs">
              PSDF Partner
            </span>
            <span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface font-semibold text-xs">
              TEVTA Registered
            </span>
            <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-bold text-xs">
              170+ Industry Hiring Partners
            </span>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-margin py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-space-md">
              <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container font-headline-md font-bold">
                N
              </div>
              <span className="font-headline-sm text-headline-sm font-bold text-on-surface">
                NexSkill
              </span>
            </div>
            <p className="font-body-md text-body-md text-secondary mb-space-lg leading-relaxed">
              NexSkill is Pakistan&apos;s premier IT and vocational training powerhouse. Affiliated with NAVTTC, PSDF, and TEVTA, we prepare thousands of university students and career switchers for high-impact roles in Artificial Intelligence, Software Engineering, Cloud Systems, and Digital Marketing.
            </p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container font-label-sm text-label-sm font-bold text-on-surface">
                <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                ISO 9001:2015 Certified
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container font-label-sm text-label-sm font-bold text-on-surface">
                <span className="material-symbols-outlined text-tertiary text-[18px]">stars</span>
                98.4% Employment Rate
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3">
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-space-md">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 font-body-md text-body-md">
              <li>
                <button
                  onClick={() => onNavigate('courses')}
                  className="text-secondary hover:text-primary transition-colors flex items-center gap-2 cursor-pointer text-left"
                >
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  Courses &amp; Micro-Degrees
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('placement')}
                  className="text-secondary hover:text-primary transition-colors flex items-center gap-2 cursor-pointer text-left"
                >
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  Job Placement Cell (NexTalent)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('campuses')}
                  className="text-secondary hover:text-primary transition-colors flex items-center gap-2 cursor-pointer text-left"
                >
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  Campus Locations &amp; Labs
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenVerify}
                  className="text-secondary hover:text-primary transition-colors flex items-center gap-2 cursor-pointer text-left font-semibold text-primary"
                >
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  Verify Certificate Online
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenLms}
                  className="text-secondary hover:text-primary transition-colors flex items-center gap-2 cursor-pointer text-left font-medium"
                >
                  <span className="material-symbols-outlined text-[16px]">terminal</span>
                  Student LMS Portal Login
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenInstructor}
                  className="text-secondary hover:text-primary transition-colors flex items-center gap-2 cursor-pointer text-left"
                >
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  Become an Instructor
                </button>
              </li>
            </ul>
          </div>

          {/* Our Campuses & Support */}
          <div className="lg:col-span-5">
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-space-md">
              Our Campuses &amp; Support
            </h3>
            <div className="space-y-space-md font-body-sm text-body-sm">
              <div className="p-3.5 rounded-xl bg-surface-container-low">
                <div className="font-label-md text-label-md text-on-surface font-bold flex items-center gap-1.5 mb-1">
                  <span className="material-symbols-outlined text-[18px] text-primary">domain</span>
                  Lahore - Arfa Software Technology Park
                </div>
                <p className="text-secondary">Level 3, Software Technology Park, Ferozepur Road, Nishtar Town, Lahore</p>
                <p className="text-on-surface font-medium mt-1">
                  Hotline: +92 309 666 3330 • Hours: Mon-Sun: 10:00 AM - 9:00 PM
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-container-low">
                <div className="font-label-md text-label-md text-on-surface font-bold flex items-center gap-1.5 mb-1">
                  <span className="material-symbols-outlined text-[18px] text-primary">location_city</span>
                  Lahore - Garden Town Campus
                </div>
                <p className="text-secondary">Barkat Market Commercial Area, New Garden Town, Lahore</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                <div className="p-3 rounded-xl bg-surface-container-low">
                  <span className="font-label-md text-label-md text-on-surface font-bold block mb-1">Karachi Campus</span>
                  <p className="text-secondary">Shahrah-e-Faisal Executive Hub, Karachi</p>
                  <p className="text-on-surface text-xs font-semibold mt-1">+92 300 8565056</p>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-low">
                  <span className="font-label-md text-label-md text-on-surface font-bold block mb-1">Mian Channu Campus</span>
                  <p className="text-secondary">College Road Industrial Corridor, Mian Channu</p>
                  <p className="text-on-surface text-xs font-semibold mt-1">+92 308 1186660</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Sub-footer */}
      <div className="bg-surface-container-high py-space-md">
        <div className="max-w-7xl mx-auto px-margin flex flex-col sm:flex-row items-center justify-between gap-space-sm font-body-sm text-body-sm text-secondary">
          <p>Copyright © 2026 NexSkill Pakistan (Pvt.) Ltd. All rights reserved.</p>
          <div className="flex items-center gap-space-lg">
            <button
              onClick={() => alert('NexSkill Privacy Policy: Student information is strictly safeguarded under the NAVTTC and NexSkill Data Security Charter.')}
              className="hover:text-on-surface transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => alert('Terms of Admission: Admissions are merit-and-capacity governed. Subsidized seats are allocated per PSDF and NAVTTC guidelines.')}
              className="hover:text-on-surface transition-colors cursor-pointer"
            >
              Terms of Admission
            </button>
            <button
              onClick={onOpenVerify}
              className="hover:text-on-surface transition-colors cursor-pointer text-tertiary font-bold"
            >
              Accreditation Verification
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
