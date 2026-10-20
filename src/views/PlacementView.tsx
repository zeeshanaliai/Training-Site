import React, { useState } from 'react';
import { TESTIMONIALS, HIRING_PARTNERS, JOB_EVENTS } from '../data/placementData';

interface PlacementViewProps {
  onNavigate: (path: string) => void;
  onOpenEnroll: (courseId?: string) => void;
}

export const PlacementView: React.FC<PlacementViewProps> = ({
  onNavigate,
  onOpenEnroll
}) => {
  // Modal / Form states
  const [showRecruiterForm, setShowRecruiterForm] = useState(false);
  const [showAlumniForm, setShowAlumniForm] = useState(false);
  
  // Recruiter form state
  const [recruiterData, setRecruiterData] = useState({
    companyName: '',
    rolesToFill: '',
    phone: '',
    email: ''
  });
  const [recruiterSubmitted, setRecruiterSubmitted] = useState(false);

  // Alumni form state
  const [alumniData, setAlumniData] = useState({
    rollNumber: '',
    program: 'Full Stack AI',
    portfolioUrl: '',
    city: 'Lahore (On-site)'
  });
  const [alumniSubmitted, setAlumniSubmitted] = useState(false);

  // Counseling form state
  const [counselingData, setCounselingData] = useState({
    name: '',
    phone: '',
    background: 'Non-Tech Background / Fresh Graduate',
    targetRole: 'Artificial Intelligence & Data',
    campus: 'arfa-tower'
  });
  const [counselingSubmitted, setCounselingSubmitted] = useState(false);

  const handleRecruiterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRecruiterSubmitted(true);
    setTimeout(() => {
      setShowRecruiterForm(false);
      setRecruiterSubmitted(false);
    }, 4000);
  };

  const handleAlumniSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAlumniSubmitted(true);
    setTimeout(() => {
      setShowAlumniForm(false);
      setAlumniSubmitted(false);
    }, 4000);
  };

  const handleCounselingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCounselingSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Hero & Impact Matrix Section */}
      <section className="relative w-full bg-gradient-to-b from-surface-container-low via-surface to-surface overflow-hidden py-16 lg:py-24">
        {/* Ambient geometric background accents */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-container/5 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-tertiary-container/5 blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-margin">
          {/* Overline & Status Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md font-semibold">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              NexTalent Career Cell • Official Placement Hub
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-semibold">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              Verified NAVTTC &amp; PSDF Employer Network
            </span>
          </div>

          {/* Main Headline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-tight">
                NexTalent — Bridging Pakistan's Top Tech Talent with <span className="text-primary-container">Global Industry</span>
              </h1>
              <p className="font-body-lg text-body-lg text-secondary max-w-3xl leading-relaxed">
                Our dedicated Job Placement Cell connects 18,000+ skilled graduates directly with 200+ industry hiring partners, achieving an 85% verified career placement rate within 90 days of graduation.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setShowRecruiterForm(!showRecruiterForm)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md shadow-md hover:bg-primary transition-all active:scale-95 cursor-pointer font-bold"
                >
                  <span className="material-symbols-outlined text-[20px]">person_search</span>
                  Hire NexSkill Graduates
                </button>
                <button
                  onClick={() => setShowAlumniForm(!showAlumniForm)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-surface-container transition-all cursor-pointer font-semibold border border-outline-variant/30"
                >
                  <span className="material-symbols-outlined text-[20px] text-tertiary">send</span>
                  Submit Alumni Resume
                </button>
                <a 
                  className="inline-flex items-center gap-1.5 text-secondary hover:text-on-surface font-label-md text-label-md px-3 py-2 transition-colors font-medium" 
                  href="#counseling-booking"
                >
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                  Book Career Advisory
                </a>
              </div>
            </div>

            {/* Metric Highlight Bento Card */}
            <div className="lg:col-span-4 mt-8 lg:mt-0">
              <div className="rounded-2xl bg-inverse-surface text-inverse-on-surface p-7 shadow-xl space-y-6 relative overflow-hidden border border-surface-container-highest/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-xl pointer-events-none"></div>
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed-dim">NexTalent Engine</span>
                  <span className="inline-flex items-center gap-1 text-tertiary-fixed font-label-sm text-label-sm font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed"></span>Live Cycle 2026
                  </span>
                </div>
                {/* Mini Live Counter Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-surface-container-high/10">
                    <div className="font-metric-display text-metric-display text-tertiary-fixed font-bold leading-none">85%</div>
                    <div className="font-label-sm text-label-sm text-secondary-fixed-dim mt-2">Placement Success Rate</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface-container-high/10">
                    <div className="font-metric-display text-metric-display text-on-primary-container font-bold leading-none">200+</div>
                    <div className="font-label-sm text-label-sm text-secondary-fixed-dim mt-2">Hiring Corporate Partners</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface-container-high/10">
                    <div className="font-metric-display text-metric-display text-inverse-on-surface font-bold leading-none">7K+</div>
                    <div className="font-label-sm text-label-sm text-secondary-fixed-dim mt-2">Documented Placements</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-surface-container-high/10">
                    <div className="font-metric-display text-metric-display text-tertiary-fixed-dim font-bold leading-none">90%</div>
                    <div className="font-label-sm text-label-sm text-secondary-fixed-dim mt-2">Interview Pass Success</div>
                  </div>
                </div>
                {/* In-card Verification Note */}
                <div className="pt-2 flex items-center gap-2 text-inverse-on-surface/80 font-body-sm text-body-sm">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[18px]">workspace_premium</span>
                  Backed by Arfa Tower, Karachi, and Garden Town Job Fests
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruiter Quick Form Dropdown Drawer */}
      {showRecruiterForm && (
        <section className="max-w-7xl mx-auto px-margin w-full -mt-4 mb-8">
          <div className="p-6 md:p-8 rounded-2xl bg-surface-container-lowest shadow-xl border border-primary/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-primary-container text-on-primary font-bold material-symbols-outlined">business_center</span>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">Employer Talent Request Desk</h4>
                  <p className="text-xs text-secondary">Tell us your hiring stack and receive curated student portfolios within 48 hours.</p>
                </div>
              </div>
              <button 
                onClick={() => setShowRecruiterForm(false)}
                className="p-1.5 rounded-full hover:bg-surface-container text-secondary"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {recruiterSubmitted ? (
              <div className="p-6 rounded-xl bg-tertiary-container text-on-tertiary flex items-center gap-4">
                <span className="material-symbols-outlined text-3xl">check_circle</span>
                <div>
                  <h5 className="font-bold text-base">Inquiry Submitted Successfully!</h5>
                  <p className="text-sm opacity-90">Our Corporate Placement Officer will contact {recruiterData.companyName || 'your company'} within 2 business hours with candidate shortlists.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRecruiterSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block font-label-sm text-label-sm text-secondary mb-1">Company / Organization Name *</label>
                  <input 
                    className="w-full h-11 px-3.5 rounded-lg bg-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary-container text-on-surface font-body-md" 
                    placeholder="e.g. Systems Ltd, Mindstorm Studios" 
                    required 
                    type="text"
                    value={recruiterData.companyName}
                    onChange={(e) => setRecruiterData({ ...recruiterData, companyName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-secondary mb-1">Roles to Fill *</label>
                  <input 
                    className="w-full h-11 px-3.5 rounded-lg bg-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary-container text-on-surface font-body-md" 
                    placeholder="e.g. 3x Full Stack AI, 1x Cyber Security" 
                    required 
                    type="text"
                    value={recruiterData.rolesToFill}
                    onChange={(e) => setRecruiterData({ ...recruiterData, rolesToFill: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-secondary mb-1">Official WhatsApp or Phone *</label>
                  <input 
                    className="w-full h-11 px-3.5 rounded-lg bg-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary-container text-on-surface font-body-md" 
                    placeholder="+92 300 000 0000" 
                    required 
                    type="tel"
                    value={recruiterData.phone}
                    onChange={(e) => setRecruiterData({ ...recruiterData, phone: e.target.value })}
                  />
                </div>
                <div className="md:col-span-3 flex justify-end gap-3 pt-2">
                  <button 
                    type="button" 
                    onClick={() => setShowRecruiterForm(false)}
                    className="px-4 py-2.5 rounded-lg text-secondary hover:bg-surface-container font-label-md"
                  >
                    Cancel
                  </button>
                  <button 
                    className="px-6 py-2.5 rounded-lg bg-primary-container text-on-primary-container font-label-md font-bold hover:bg-primary transition-colors cursor-pointer" 
                    type="submit"
                  >
                    Broadcast Candidate Profiles
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      )}

      {/* Alumni Quick Form Dropdown Drawer */}
      {showAlumniForm && (
        <section className="max-w-7xl mx-auto px-margin w-full -mt-4 mb-8">
          <div className="p-6 md:p-8 rounded-2xl bg-surface-container-lowest shadow-xl border border-tertiary/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-tertiary-container text-on-tertiary font-bold material-symbols-outlined">badge</span>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">NexSkill Alumni Placement Registration</h4>
                  <p className="text-xs text-secondary">Submit your verified certificate number or portfolio for direct referral to 200+ partner companies.</p>
                </div>
              </div>
              <button 
                onClick={() => setShowAlumniForm(false)}
                className="p-1.5 rounded-full hover:bg-surface-container text-secondary"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {alumniSubmitted ? (
              <div className="p-6 rounded-xl bg-tertiary-container text-on-tertiary flex items-center gap-4">
                <span className="material-symbols-outlined text-3xl">check_circle</span>
                <div>
                  <h5 className="font-bold text-base">Alumni Profile Enrolled in NexTalent Pool!</h5>
                  <p className="text-sm opacity-90">Our career advisor will review your GitHub commits and match you to current open vacancies.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleAlumniSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block font-label-sm text-label-sm text-secondary mb-1">Student Roll / Cert # *</label>
                  <input 
                    className="w-full h-11 px-3.5 rounded-lg bg-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-tertiary-container text-on-surface font-body-md" 
                    placeholder="NX-2025-XXXX" 
                    required 
                    type="text"
                    value={alumniData.rollNumber}
                    onChange={(e) => setAlumniData({ ...alumniData, rollNumber: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-secondary mb-1">Specialization Completed</label>
                  <select 
                    className="w-full h-11 px-3.5 rounded-lg bg-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-tertiary-container text-on-surface font-body-md"
                    value={alumniData.program}
                    onChange={(e) => setAlumniData({ ...alumniData, program: e.target.value })}
                  >
                    <option>Full Stack AI</option>
                    <option>Advance Cyber Security</option>
                    <option>Software Engineering with AI</option>
                    <option>Digital Growth Marketing</option>
                    <option>Advance UI/UX with AI</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-secondary mb-1">GitHub / Portfolio Link *</label>
                  <input 
                    className="w-full h-11 px-3.5 rounded-lg bg-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-tertiary-container text-on-surface font-body-md" 
                    placeholder="https://github.com/yourhandle" 
                    required 
                    type="url"
                    value={alumniData.portfolioUrl}
                    onChange={(e) => setAlumniData({ ...alumniData, portfolioUrl: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-secondary mb-1">Preferred Location</label>
                  <select 
                    className="w-full h-11 px-3.5 rounded-lg bg-surface border border-outline-variant focus:outline-none focus:ring-2 focus:ring-tertiary-container text-on-surface font-body-md"
                    value={alumniData.city}
                    onChange={(e) => setAlumniData({ ...alumniData, city: e.target.value })}
                  >
                    <option>Lahore (On-site)</option>
                    <option>Karachi (On-site)</option>
                    <option>Remote (Pakistan / Global)</option>
                  </select>
                </div>
                <div className="md:col-span-4 flex justify-end gap-3 pt-2">
                  <button 
                    type="button" 
                    onClick={() => setShowAlumniForm(false)}
                    className="px-4 py-2.5 rounded-lg text-secondary hover:bg-surface-container font-label-md"
                  >
                    Cancel
                  </button>
                  <button 
                    className="px-6 py-2.5 rounded-lg bg-tertiary-container text-on-tertiary font-label-md font-bold hover:bg-tertiary transition-colors cursor-pointer" 
                    type="submit"
                  >
                    Submit for Interview Scheduling
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      )}

      {/* High-Density Quick Stats Bar */}
      <section className="w-full bg-surface-container-high py-8">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-3 p-3">
              <div className="w-12 h-12 rounded-xl bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[26px]">trending_up</span>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-on-surface font-extrabold">95%</div>
                <div className="font-body-sm text-body-sm text-secondary">Confidence &amp; Mock Readiness</div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-3 p-3">
              <div className="w-12 h-12 rounded-xl bg-surface-container-highest text-on-surface flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[26px]">apartment</span>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-on-surface font-extrabold">170+</div>
                <div className="font-body-sm text-body-sm text-secondary">Active Tech Incubators &amp; MOUs</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3 p-3">
              <div className="w-12 h-12 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[26px]">groups</span>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-on-surface font-extrabold">18,000+</div>
                <div className="font-body-sm text-body-sm text-secondary">Trained Alumni Network</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3 p-3">
              <div className="w-12 h-12 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed-variant flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[26px]">verified</span>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm text-on-surface font-extrabold">4.8 / 5.0</div>
                <div className="font-body-sm text-body-sm text-secondary">Employer &amp; Student Trust Score</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stage Career Launch Process */}
      <section className="w-full py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="max-w-2xl mb-14">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold block mb-2">Systematic Career Acceleration</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">The 4-Stage NexTalent Launch Blueprint</h2>
            <p className="font-body-md text-body-md text-secondary mt-3">From raw curiosity to boardroom ready. How our intensive incubation model prepares candidates for competitive local and remote technology roles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Step 1 */}
            <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-sm hover:shadow-md transition-shadow relative group">
              <div className="flex items-center justify-between mb-5">
                <span className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container font-headline-sm text-headline-sm font-bold flex items-center justify-center">1</span>
                <span className="font-label-sm text-label-sm uppercase font-bold text-secondary">Weeks 1 - 8</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-3">Technical Mastery &amp; Capstone</h3>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed mb-4">
                Hands-on deep dive with production-level stacks. Students develop complete, end-to-end cloud, full stack AI, or cybersecurity projects reviewed by lead architects.
              </p>
              <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                <li className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span> Industry-grade GitHub commits</li>
                <li className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span> Real dataset modeling &amp; testing</li>
                <li className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span> NAVTTC certified competencies</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-sm hover:shadow-md transition-shadow relative group">
              <div className="flex items-center justify-between mb-5">
                <span className="w-10 h-10 rounded-xl bg-surface-container-highest text-on-surface font-headline-sm text-headline-sm font-bold flex items-center justify-center">2</span>
                <span className="font-label-sm text-label-sm uppercase font-bold text-secondary">Weeks 9 - 10</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-3">Executive Soft Skills Bootcamp</h3>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed mb-4">
                Bridging technical brilliance with corporate presence. Intense verbal communication, business English, remote team culture, and Agile sprint rituals.
              </p>
              <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                <li className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span> 95% Confidence boost metrics</li>
                <li className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span> Client handling &amp; presentation</li>
                <li className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span> Jira &amp; Scrum management flows</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-sm hover:shadow-md transition-shadow relative group">
              <div className="flex items-center justify-between mb-5">
                <span className="w-10 h-10 rounded-xl bg-surface-container-highest text-on-surface font-headline-sm text-headline-sm font-bold flex items-center justify-center">3</span>
                <span className="font-label-sm text-label-sm uppercase font-bold text-secondary">Weeks 11 - 12</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-3">Portfolio &amp; Mock Trials</h3>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed mb-4">
                1-on-1 resume optimization for ATS scanning, LinkedIn professional positioning, and grueling technical coding interviews with senior engineering mentors.
              </p>
              <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                <li className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span> 90% First-round interview rate</li>
                <li className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span> Tailored algorithmic challenges</li>
                <li className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span> Salary negotiation coaching</li>
              </ul>
            </div>

            {/* Step 4 */}
            <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-sm hover:shadow-md transition-shadow relative group">
              <div className="flex items-center justify-between mb-5">
                <span className="w-10 h-10 rounded-xl bg-tertiary-container text-on-tertiary font-headline-sm text-headline-sm font-bold flex items-center justify-center">4</span>
                <span className="font-label-sm text-label-sm uppercase font-bold text-tertiary">Post-Grad</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-3">Direct Pipeline &amp; Job Fests</h3>
              <p className="font-body-sm text-body-sm text-secondary leading-relaxed mb-4">
                Exclusive on-campus interviews at Arfa Software Technology Park, closed-door hiring drives with 200+ partner software houses, and verified job offers.
              </p>
              <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
                <li className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span> Direct HR fast-track referrals</li>
                <li className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span> Bi-annual massive Job Fests</li>
                <li className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span> Continuous alumni career mobility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Dual Gateway (Employers vs Alumni) */}
      <section className="w-full py-12 bg-surface-container-low" id="hiring-pipeline">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
            {/* For Employers */}
            <div className="rounded-2xl bg-surface-container-lowest p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold mb-4">
                  FOR TECH RECRUITERS &amp; ENTERPRISES
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-extrabold mb-3">Hire Pre-Vetted, Job-Ready Tech Talent</h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed mb-6">
                  Skip hundreds of unqualified resumes. NexTalent provides instant access to certified software engineers, AI developers, cybersecurity associates, and growth marketers rigorously trained on real-world industry tools.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-surface-container-low">
                    <span className="font-label-md text-label-md font-bold text-on-surface block">Zero Recruitment Fee</span>
                    <span className="font-body-sm text-body-sm text-secondary">Free talent placement service</span>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-low">
                    <span className="font-label-md text-label-md font-bold text-on-surface block">48-Hour Shortlisting</span>
                    <span className="font-body-sm text-body-sm text-secondary">Matched to exact job descriptions</span>
                  </div>
                </div>
              </div>
              <button 
                className="w-full py-3.5 px-4 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center justify-center gap-2 cursor-pointer font-bold" 
                onClick={() => setShowRecruiterForm(!showRecruiterForm)}
              >
                <span className="material-symbols-outlined text-[18px]">business_center</span>
                Request Graduate Portfolios
              </button>
            </div>

            {/* For Alumni & Students */}
            <div className="rounded-2xl bg-surface-container-lowest p-8 shadow-sm flex flex-col justify-between" id="alumni-placement">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-bold mb-4">
                  FOR NEXSKILL STUDENTS &amp; GRADUATES
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-extrabold mb-3">Unlock Exclusive NexTalent Placement Pool</h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed mb-6">
                  Graduating from a micro-degree, certification, or bootcamp? Register your completed credentials with the placement cell to receive exclusive interview invites, salary guidance, and campus recruitment fast-passes.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-surface-container-low">
                    <span className="font-label-md text-label-md font-bold text-on-surface block">1-on-1 Profile Polish</span>
                    <span className="font-body-sm text-body-sm text-secondary">Tailored by senior recruiters</span>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-low">
                    <span className="font-label-md text-label-md font-bold text-on-surface block">Direct Interview Slots</span>
                    <span className="font-body-sm text-body-sm text-secondary">Skip initial screening rounds</span>
                  </div>
                </div>
              </div>
              <button 
                className="w-full py-3.5 px-4 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md hover:bg-primary transition-all flex items-center justify-center gap-2 cursor-pointer font-bold" 
                onClick={() => setShowAlumniForm(!showAlumniForm)}
              >
                <span className="material-symbols-outlined text-[18px]">badge</span>
                Register for Job Placement Assistance
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Corporate & Academic Hiring Partners */}
      <section className="w-full py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary font-bold block mb-2">Ecosystem Collaboration</span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">
              Partnering for Success: 200+ Industry &amp; Academia Leaders
            </h2>
            <p className="font-body-md text-body-md text-secondary mt-3">
              Our graduates are regularly hired by top multinational technology conglomerates, software houses, national banks, and incubated ventures across Pakistan and overseas.
            </p>
          </div>

          {/* Partner Logos Interactive Bento Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {HIRING_PARTNERS.map((partner) => (
              <div key={partner.name} className="flex flex-col items-center justify-center p-5 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all group border border-outline-variant/20">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-on-surface font-bold group-hover:scale-105 transition-transform">
                  <span className={`material-symbols-outlined text-[24px] ${partner.badgeColor}`}>
                    {partner.icon}
                  </span>
                </div>
                <span className="font-label-md text-label-md font-bold text-on-surface mt-3 text-center">{partner.name}</span>
                <span className="font-label-sm text-label-sm text-secondary text-center">{partner.category}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 p-5 rounded-xl bg-surface-container-high flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary text-2xl">handshake</span>
              <span className="font-body-md text-body-md text-on-surface font-medium">Looking to establish an institutional hiring partnership or internship pipeline?</span>
            </div>
            <a 
              className="px-5 py-2 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md hover:bg-surface-container-highest hover:text-on-surface transition-colors whitespace-nowrap" 
              href="mailto:trainings@nexskill.com?subject=Partner%20MOU%20Inquiry"
            >
              Sign Corporate MOU
            </a>
          </div>
        </div>
      </section>

      {/* Real Alumni Success Stories & Verified Case Studies */}
      <section className="w-full py-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold block mb-2">Verified Transformations</span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">Recent Graduate Placements &amp; Case Studies</h2>
              <p className="font-body-md text-body-md text-secondary mt-2">See how our alumni transitioned from non-technical disciplines into high-paying modern tech positions.</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-semibold">100% Salary Verified</span>
              <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-bold">7,000+ Alumni</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {TESTIMONIALS.map((testi) => (
              <div key={testi.name} className="rounded-2xl bg-surface-container-lowest p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">{testi.tag}</span>
                    <span className="text-tertiary font-label-md text-label-md font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">trending_up</span>{testi.hike}
                    </span>
                  </div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <img 
                      className="w-14 h-14 rounded-full object-cover shadow-sm border-2 border-primary/20" 
                      alt={testi.name} 
                      src={testi.image}
                    />
                    <div>
                      <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">{testi.name}</h4>
                      <p className="font-body-sm text-body-sm text-secondary">{testi.role} at <span className="text-on-surface font-semibold">{testi.company}</span></p>
                    </div>
                  </div>
                  <blockquote className="font-body-md text-body-md text-on-surface-variant italic mb-6 leading-relaxed">
                    "{testi.quote}"
                  </blockquote>
                </div>
                <div className="pt-4 bg-surface-container-low/50 -mx-6 -mb-6 p-6 rounded-b-2xl border-t border-surface-container-high">
                  <div className="flex items-center justify-between font-label-sm text-label-sm">
                    <span className="text-secondary">Program Track:</span>
                    <span className="font-bold text-on-surface">{testi.program}</span>
                  </div>
                  <div className="flex items-center justify-between font-label-sm text-label-sm mt-1.5">
                    <span className="text-secondary">Campus:</span>
                    <span className="font-bold text-on-surface">{testi.campus}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Job Fests Schedule & Direct Counseling Booking Form */}
      <section className="w-full py-20 bg-surface" id="counseling-booking">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Left: Upcoming Job Fests & Hiring Days */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Live Career Expos</span>
                <h3 className="font-headline-lg text-headline-lg text-on-surface font-extrabold tracking-tight">Upcoming Job Fests &amp; Speed Hiring Drives</h3>
                <p className="font-body-md text-body-md text-secondary">NexSkill hosts regular campus recruitment days in Lahore, Karachi, and Mian Channu where registered students interview on the spot.</p>
              </div>

              {/* Event 1 */}
              <div className="p-5 rounded-2xl bg-surface-container-lowest shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow border border-outline-variant/20">
                <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-primary-container text-on-primary-container w-16 text-center shrink-0">
                  <span className="font-label-sm text-label-sm uppercase font-bold">MAR</span>
                  <span className="font-headline-md text-headline-md font-extrabold leading-none mt-1">28</span>
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm mb-1.5 font-bold">
                    Arfa Tower Lahore
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">LIVE Job Ready Tech Fest 2026</h4>
                  <p className="font-body-sm text-body-sm text-secondary mt-1">Over 45+ software houses conducting walk-in assessments for Full Stack AI, MERN, and Cyber Security.</p>
                  <div className="mt-3 flex items-center gap-3 text-secondary font-label-sm text-label-sm">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span> 10:00 AM - 5:00 PM</span>
                    <span>•</span>
                    <span className="text-tertiary font-bold">120 Seats Left</span>
                  </div>
                </div>
              </div>

              {/* Event 2 */}
              <div className="p-5 rounded-2xl bg-surface-container-lowest shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow border border-outline-variant/20">
                <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-surface-container-highest text-on-surface w-16 text-center shrink-0">
                  <span className="font-label-sm text-label-sm uppercase font-bold">APR</span>
                  <span className="font-headline-md text-headline-md font-extrabold leading-none mt-1">14</span>
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm mb-1.5 font-bold">
                    Karachi Executive Hub
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">Fintech &amp; Cloud Systems Hiring Drive</h4>
                  <p className="font-body-sm text-body-sm text-secondary mt-1">Exclusive panel with commercial banks and venture-backed SaaS startups hiring Cloud &amp; SQA talent.</p>
                  <div className="mt-3 flex items-center gap-3 text-secondary font-label-sm text-label-sm">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span> 11:00 AM - 4:00 PM</span>
                    <span>•</span>
                    <span className="text-on-surface font-bold">Registration Open</span>
                  </div>
                </div>
              </div>

              {/* Event 3 */}
              <div className="p-5 rounded-2xl bg-surface-container-lowest shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow border border-outline-variant/20">
                <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-tertiary-container text-on-tertiary w-16 text-center shrink-0">
                  <span className="font-label-sm text-label-sm uppercase font-bold">MAY</span>
                  <span className="font-headline-md text-headline-md font-extrabold leading-none mt-1">05</span>
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm mb-1.5 font-bold">
                    Online / Virtual
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">Global Remote Freelance &amp; Contract Summit</h4>
                  <p className="font-body-sm text-body-sm text-secondary mt-1">Connecting remote developers with overseas agencies in the UK, UAE, and North America.</p>
                  <div className="mt-3 flex items-center gap-3 text-secondary font-label-sm text-label-sm">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span> 4:00 PM - 8:00 PM</span>
                    <span>•</span>
                    <span className="text-tertiary font-bold">Free for NexSkill Alumni</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Career Counselor Direct Booking Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-surface-container-lowest p-8 sm:p-10 shadow-lg border border-outline-variant/30">
                <div className="flex items-center justify-between mb-6 pb-4 bg-surface-container-low -mx-8 sm:-mx-10 -mt-8 sm:-mt-10 p-8 sm:p-10 rounded-t-3xl">
                  <div>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">Free Guidance</span>
                    <h3 className="font-headline-md text-headline-md text-on-surface font-bold mt-1">Book 1-on-1 Career Counseling</h3>
                    <p className="text-xs text-secondary mt-0.5">Custom career roadmaps for students, graduates &amp; switchers.</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-2xl">support_agent</span>
                  </div>
                </div>

                {counselingSubmitted ? (
                  <div className="p-6 rounded-2xl bg-tertiary-container text-on-tertiary">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="material-symbols-outlined text-3xl">verified</span>
                      <h4 className="font-headline-sm font-bold text-lg">Counseling Appointment Confirmed!</h4>
                    </div>
                    <p className="text-sm opacity-90 leading-relaxed">
                      Thank you, {counselingData.name || 'Applicant'}. Our Senior Academic Counselor will reach out to you at +92 {counselingData.phone || '3096663330'} to schedule your personalized career assessment session.
                    </p>
                    <button
                      onClick={() => setCounselingSubmitted(false)}
                      className="mt-4 px-4 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md font-semibold text-xs"
                    >
                      Book Another Session
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleCounselingSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-label-sm text-label-sm text-secondary mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-md border border-transparent focus:border-primary focus:bg-surface-container-lowest outline-none transition-all"
                          placeholder="e.g. Usman Tariq"
                          value={counselingData.name}
                          onChange={(e) => setCounselingData({ ...counselingData, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block font-label-sm text-label-sm text-secondary mb-1">WhatsApp / Contact Number *</label>
                        <div className="relative">
                          <span className="absolute left-3.5 top-2.5 text-secondary text-sm font-medium">+92</span>
                          <input
                            type="tel"
                            required
                            pattern="[0-9]{10}"
                            className="w-full pl-12 pr-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-md border border-transparent focus:border-primary focus:bg-surface-container-lowest outline-none transition-all"
                            placeholder="3001234567"
                            value={counselingData.phone}
                            onChange={(e) => setCounselingData({ ...counselingData, phone: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block font-label-sm text-label-sm text-secondary mb-1">Current Academic / Professional Background</label>
                      <select
                        className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-md border border-transparent focus:border-primary focus:bg-surface-container-lowest outline-none transition-all cursor-pointer"
                        value={counselingData.background}
                        onChange={(e) => setCounselingData({ ...counselingData, background: e.target.value })}
                      >
                        <option>Non-Tech Background / Fresh Graduate</option>
                        <option>Computer Science / Software Engineering Student</option>
                        <option>Working Professional seeking Tech Transition</option>
                        <option>FSc / Intermediate Student looking for Vocational Skills</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-label-sm text-label-sm text-secondary mb-1">Target Tech Track</label>
                        <select
                          className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-md border border-transparent focus:border-primary focus:bg-surface-container-lowest outline-none transition-all cursor-pointer"
                          value={counselingData.targetRole}
                          onChange={(e) => setCounselingData({ ...counselingData, targetRole: e.target.value })}
                        >
                          <option>Artificial Intelligence &amp; Data</option>
                          <option>Full Stack Web &amp; Software Engineering</option>
                          <option>Cyber Security &amp; Cloud</option>
                          <option>Product &amp; UI/UX Design</option>
                          <option>Digital Growth Marketing</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-label-sm text-label-sm text-secondary mb-1">Preferred Counseling Hub</label>
                        <select
                          className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-md border border-transparent focus:border-primary focus:bg-surface-container-lowest outline-none transition-all cursor-pointer"
                          value={counselingData.campus}
                          onChange={(e) => setCounselingData({ ...counselingData, campus: e.target.value })}
                        >
                          <option value="arfa-tower">Lahore - Arfa Tower</option>
                          <option value="garden-town">Lahore - Garden Town</option>
                          <option value="karachi">Karachi - PARSA Tower</option>
                          <option value="mian-channu">Mian Channu Hub</option>
                          <option value="online">Online Video Counseling</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-primary-container text-on-primary-container font-label-md text-label-md font-bold hover:bg-primary transition-all shadow-md active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 mt-4"
                    >
                      <span className="material-symbols-outlined text-xl">event_available</span>
                      Schedule My Diagnostic Career Session
                    </button>
                    <p className="text-center text-xs text-secondary mt-2">
                      100% Free Consultation. No enrollment obligation.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
