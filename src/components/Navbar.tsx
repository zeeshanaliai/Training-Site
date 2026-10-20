import React, { useState } from 'react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenEnroll: (courseId?: string) => void;
  onOpenLms: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  onOpenEnroll,
  onOpenLms
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Courses & Micro-Degrees' },
    { id: 'placement', label: 'Job Placement & NexTalent' },
    { id: 'campuses', label: 'Campuses & Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
      {/* Top Notification Strip */}
      <div className="bg-inverse-surface text-inverse-on-surface">
        <div className="max-w-7xl mx-auto px-margin flex items-center justify-between h-9 font-label-sm text-label-sm">
          <div className="flex items-center gap-space-md">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary-container text-on-primary-container font-bold tracking-wider uppercase animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-surface-container-lowest"></span>
              LIVE: Job Ready Bootcamps 2026 Admissions Open
            </span>
            <span className="hidden lg:inline text-secondary-fixed-dim">|</span>
            <a
              href="tel:+923096663330"
              className="hidden lg:flex items-center gap-1 text-inverse-on-surface/90 hover:text-surface-container-lowest transition-colors"
            >
              <span className="material-symbols-outlined text-[14px] text-tertiary-fixed">call</span>
              +92 309 666 3330
            </a>
            <a
              href="mailto:trainings@nexskill.com"
              className="hidden xl:flex items-center gap-1 text-inverse-on-surface/90 hover:text-surface-container-lowest transition-colors"
            >
              <span className="material-symbols-outlined text-[14px] text-tertiary-fixed">mail</span>
              trainings@nexskill.com
            </a>
          </div>
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-1 text-inverse-on-surface/80">
              <span className="material-symbols-outlined text-[14px] text-tertiary-fixed">location_on</span>
              <span className="hidden sm:inline">Campuses:</span>
              <span className="text-inverse-on-surface font-semibold text-xs sm:text-[11px]">
                Lahore (Arfa Tower &amp; Garden Town) • Karachi • Mian Channu
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Row */}
      <div className="max-w-7xl mx-auto px-margin">
        <div className="flex items-center justify-between h-20">
          {/* Brand Lockup */}
          <div className="flex items-center gap-space-lg">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 group cursor-pointer text-left focus:outline-none"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container font-headline-md font-extrabold shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
                <span className="text-2xl font-black">N</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-headline-sm font-extrabold tracking-tight text-on-surface leading-none">
                  NexSkill
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary mt-1 font-bold text-[10px]">
                  NAVTTC | PSDF | TEVTA
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = currentPath === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`px-3.5 py-2 font-label-md text-label-md transition-all cursor-pointer rounded-lg ${
                    isActive
                      ? 'bg-surface-container-high text-on-surface font-semibold shadow-xs'
                      : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action Hub */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              className="hidden xl:flex items-center gap-1.5 px-3 py-2 rounded-lg bg-tertiary-container text-on-tertiary font-label-md text-label-md hover:bg-tertiary transition-colors"
              href="https://wa.me/923096663330?text=Hello%20NexSkill%20Admissions%2C%20I%20want%20to%20inquire%20about%20upcoming%20batches"
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              WhatsApp
            </a>

            <a
              className="hidden md:flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors"
              href="tel:+923096663330"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">phone_in_talk</span>
              Call Now
            </a>

            <button
              onClick={() => onOpenEnroll()}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md hover:bg-primary transition-all shadow-sm active:scale-95 cursor-pointer font-bold"
            >
              <span className="material-symbols-outlined text-[18px]">school</span>
              Enroll Now
            </button>

            {/* Student LMS Profile Avatar */}
            <button
              onClick={onOpenLms}
              title="Student LMS Portal"
              className="pl-2 ml-1 flex items-center cursor-pointer focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full bg-surface-container-high border-2 border-primary-container/30 flex items-center justify-center overflow-hidden hover:ring-2 hover:ring-primary-container transition-all">
                <img
                  alt="Student Portal"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1VyhI-2slivG8oCNrRB0gNM3LhkJF8Le7rehNQWKmaiSLhD3zm5FouWNawDRVGoLsBDx9PmvA-JpbY9-3WOl92SccNXESUegrEzBorNcrVL8rwTRMeKvW72wWzlRw9q_-Ee2U_RsjzClpWio8j7YMBxV7dQs8oKd02uRw_rWhe05jtwEW1zSZQrgqaxHjJySHLFq8Zhdczmjc-9ZI-vc-zleaovhP8Vz7a7qEVZdXh0-diKb5ZEBgsNSKIX"
                />
              </div>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-on-surface hover:bg-surface-container cursor-pointer ml-1"
              aria-label="Toggle Navigation Menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-t border-surface-container px-margin py-4 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const isActive = currentPath === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 rounded-lg font-label-md text-label-md transition-colors ${
                  isActive
                    ? 'bg-surface-container-high text-on-surface font-bold'
                    : 'text-on-surface hover:bg-surface-container'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-3 border-t border-surface-container flex flex-col gap-2">
            <a
              href="tel:+923096663330"
              className="w-full py-2.5 px-4 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">phone_in_talk</span>
              Call Hotline: +92 309 666 3330
            </a>
            <a
              href="https://wa.me/923096663330"
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 px-4 rounded-lg bg-tertiary-container text-on-tertiary font-label-md text-label-md flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              WhatsApp Counselor
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
