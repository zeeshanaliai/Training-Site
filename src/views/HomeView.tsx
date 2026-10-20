import React, { useState } from 'react';
import { COURSES } from '../data/coursesData';
import { CAMPUSES } from '../data/campusesData';

interface HomeViewProps {
  onNavigate: (path: string) => void;
  onOpenEnroll: (courseId?: string, campusId?: string) => void;
  onOpenOutline: (courseId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenEnroll,
  onOpenOutline
}) => {
  // Hero Fast-Track Enrollment Form state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  const [campus, setCampus] = useState('arfa');
  const [email, setEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleHeroFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const flagshipCourses = COURSES.slice(0, 6);

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION & FAST-TRACK APPLICATION */}
      <section className="relative w-full bg-surface-container-low overflow-hidden py-space-xl lg:py-24">
        {/* Ambient tech grid decor */}
        <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#b70011_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="relative max-w-7xl mx-auto px-margin">
          {/* High-authority Proof Pill Ribbon */}
          <div className="flex flex-wrap items-center gap-2 mb-space-md">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm shadow-sm font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">military_tech</span>
              #1 IT Institute in Pakistan
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-bold">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              NAVTTC, PSDF &amp; TEVTA Approved
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
              <span
                className="material-symbols-outlined text-[15px] text-amber-500"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              4.8 / 5.0 (3,400+ Reviews)
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
            {/* Left Column: Hero Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-center pt-2">
              <h1 className="font-headline-xl text-headline-xl font-extrabold text-on-surface tracking-tight leading-tight mb-space-md">
                Pakistan&apos;s #1 IT Institute <br className="hidden sm:inline" />
                <span className="text-primary-container">Transform Your Career</span> With AI-Powered Tech Education
              </h1>
              <p className="font-body-lg text-body-lg text-secondary mb-space-lg leading-relaxed max-w-2xl">
                Master cutting-edge tech domains with industry-aligned curriculum, hands-on computer labs, NAVTTC/PSDF certifications, and guaranteed <strong className="text-on-surface font-semibold">85% job placement support</strong> across 200+ top software houses.
              </p>

              {/* Core Stat Tickers */}
              <div className="grid grid-cols-3 gap-space-sm mb-space-lg p-space-md rounded-xl bg-surface-container-lowest shadow-sm max-w-xl">
                <div className="flex flex-col">
                  <span className="font-metric-display text-metric-display text-primary-container font-extrabold leading-none">
                    85%
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary mt-1">Placement Rate</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-metric-display text-metric-display text-on-surface font-extrabold leading-none">
                    18K+
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary mt-1">Graduated Alumni</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-metric-display text-metric-display text-tertiary-container font-extrabold leading-none">
                    200+
                  </span>
                  <span className="font-label-sm text-label-sm text-secondary mt-1">Hiring Partners</span>
                </div>
              </div>

              {/* Dual Hero CTAs */}
              <div className="flex flex-wrap items-center gap-space-md">
                <button
                  onClick={() => onNavigate('courses')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md shadow-md hover:bg-primary transition-all active:scale-95 cursor-pointer font-bold"
                >
                  <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                  Explore Job Ready Bootcamps
                </button>
                <a
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md hover:bg-surface-container transition-all"
                  href="tel:+923096663330"
                >
                  <span className="material-symbols-outlined text-[20px] text-primary">phone_in_talk</span>
                  Book Free Counseling: +92 309 666 3330
                </a>
              </div>

              {/* Feature micro-perks */}
              <div className="flex flex-wrap items-center gap-space-lg mt-space-lg text-secondary font-body-sm text-body-sm">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-tertiary text-[18px]">laptop_mac</span>
                  High-Spec In-House Labs
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-tertiary text-[18px]">badge</span>
                  Government Verified Diploma
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-tertiary text-[18px]">groups</span>
                  1-on-1 Senior Mentorship
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Fast-Track Enrollment Form */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative bg-surface-container-lowest rounded-2xl p-space-lg shadow-xl">
                {/* Form Header */}
                <div className="flex items-center justify-between pb-space-sm mb-space-md border-b border-surface-container">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
                      <span className="material-symbols-outlined text-[18px]">how_to_reg</span>
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight">
                        Sign Up for IT Training
                      </h3>
                      <p className="font-body-sm text-body-sm text-secondary">
                        Free Consultation • Fast-Track Seat Reservation
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold animate-pulse">
                    2026 Batch
                  </span>
                </div>

                {!formSubmitted ? (
                  <form className="space-y-3.5" onSubmit={handleHeroFormSubmit}>
                    <div className="grid grid-cols-2 gap-space-sm">
                      <div>
                        <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">
                          First Name *
                        </label>
                        <input
                          className="w-full px-3 py-2.5 rounded-lg bg-surface font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container placeholder:text-secondary/50 border border-surface-container"
                          placeholder="Muhammad"
                          required
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">
                          Last Name *
                        </label>
                        <input
                          className="w-full px-3 py-2.5 rounded-lg bg-surface font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container placeholder:text-secondary/50 border border-surface-container"
                          placeholder="Ali"
                          required
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">
                        Phone Number (WhatsApp) *
                      </label>
                      <div className="relative flex items-center">
                        <span className="absolute left-3 font-label-sm text-label-sm text-secondary font-bold">
                          +92
                        </span>
                        <input
                          className="w-full pl-12 pr-3 py-2.5 rounded-lg bg-surface font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container placeholder:text-secondary/50 border border-surface-container"
                          pattern="[0-9]{10}"
                          placeholder="309 6663330"
                          required
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">
                        Select Specialization / Course *
                      </label>
                      <select
                        className="w-full px-3 py-2.5 rounded-lg bg-surface font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container border border-surface-container cursor-pointer"
                        required
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                      >
                        <option disabled value="">
                          -- Choose Industry Track --
                        </option>
                        <option value="full-stack-ai">Full Stack Artificial Intelligence (Agentic AI &amp; LLMs)</option>
                        <option value="software-engineering-ai">Software Engineering with AI (Full Stack MERN)</option>
                        <option value="cyber-security">Advance Cyber Security &amp; Ethical Hacking</option>
                        <option value="ui-ux-design">Graphic Designing &amp; UI/UX with AI</option>
                        <option value="digital-marketing">Digital Growth Marketing with AI (SEO/AEO)</option>
                        <option value="flutter-mobile-app">Flutter &amp; Mobile App Dev with AI</option>
                        <option value="cloud-devops">Cloud Computing &amp; DevOps Engineering</option>
                        <option value="3d-animation-vfx">3D Animation &amp; VFX / Motion Graphics</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-space-sm">
                      <div>
                        <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">
                          Campus Location *
                        </label>
                        <select
                          className="w-full px-3 py-2.5 rounded-lg bg-surface font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container border border-surface-container cursor-pointer"
                          required
                          value={campus}
                          onChange={(e) => setCampus(e.target.value)}
                        >
                          <option value="arfa">Lahore - Arfa Tower</option>
                          <option value="garden">Lahore - Garden Town</option>
                          <option value="karachi">Karachi - PARSA Tower</option>
                          <option value="mianchannu">Mian Channu Campus</option>
                          <option value="online">100% Online Live Labs</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">
                          Email Address
                        </label>
                        <input
                          className="w-full px-3 py-2.5 rounded-lg bg-surface font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container placeholder:text-secondary/50 border border-surface-container"
                          placeholder="student@gmail.com"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        className="w-full py-3 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md font-bold hover:bg-primary shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                        type="submit"
                      >
                        <span className="material-symbols-outlined text-[18px]">send</span>
                        Submit Application &amp; Reserve Seat
                      </button>
                    </div>

                    <p className="text-center font-label-sm text-label-sm text-secondary">
                      🔒 Your data is protected under NexSkill Student Privacy Charter.
                    </p>
                  </form>
                ) : (
                  <div className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant">
                      <span className="material-symbols-outlined text-2xl">check_circle</span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                      Application Received!
                    </h4>
                    <p className="font-body-md text-body-md text-secondary">
                      Thank you, <strong className="text-on-surface">{firstName}</strong>! A NexSkill Senior Career Advisor will connect with you within 2 hours on WhatsApp (+92 {phone}) to confirm your batch allotment and orientation schedule.
                    </p>
                    <div className="p-3 bg-surface-container-low rounded-xl text-xs font-mono font-bold text-primary">
                      Registration Reference: NX-APP-{Math.floor(10000 + Math.random() * 90000)}
                    </div>
                    <button
                      className="px-4 py-2 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface font-semibold hover:bg-surface-container-high transition-colors cursor-pointer"
                      onClick={() => setFormSubmitted(false)}
                    >
                      Submit Another Application
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ACCREDITATIONS & GOVT APPROVAL STRIP */}
      <section className="w-full bg-surface-container-lowest py-space-md shadow-sm">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="flex flex-col md:flex-row items-center justify-between gap-space-md">
            <div className="flex items-center gap-2 text-on-surface font-label-md text-label-md font-bold">
              <span className="material-symbols-outlined text-primary-container">workspace_premium</span>
              <span>Government Certified Accreditations &amp; Technology Partners:</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface font-bold">
                <span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
                NAVTTC Approved
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface font-bold">
                <span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
                PSDF Certified
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface font-bold">
                <span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
                TEVTA Recognized
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-surface-container font-label-sm text-label-sm text-on-surface font-bold">
                <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                Powered by P2P Clouds
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-bold">
                <span className="material-symbols-outlined text-[15px]">verified</span>
                170+ Signed Industry MOUs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FLAGSHIP AI-POWERED MICRO-DEGREES & TOP PROGRAMS */}
      <section className="w-full py-space-xl bg-surface" id="featured-programs">
        <div className="max-w-7xl mx-auto px-margin">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
            <div>
              <div className="flex items-center gap-2 font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider mb-2">
                <span className="material-symbols-outlined text-[18px]">psychology</span>
                Industry Standard Curriculum
              </div>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                Flagship AI Micro-Degrees &amp; Job-Ready Bootcamps
              </h2>
              <p className="font-body-md text-body-md text-secondary mt-1">
                Accelerated, practical training designed by lead architects to convert novices into high-earning tech talent.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-surface-container-high font-label-sm text-label-sm text-on-surface font-semibold">
                Next Cohort Starts: 1st of Next Month
              </span>
            </div>
          </div>

          {/* 6 Flagship Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {flagshipCourses.map((c) => (
              <div
                key={c.id}
                className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 w-full overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={c.title}
                    src={c.image}
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-md bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold shadow-sm">
                      {c.badge}
                    </span>
                    <span className="px-2 py-1 rounded-md bg-inverse-surface/85 backdrop-blur text-inverse-on-surface font-label-sm text-label-sm">
                      Job Guarantee
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-surface-container-lowest/90 backdrop-blur font-label-sm text-label-sm text-on-surface font-bold flex items-center gap-1">
                    <span
                      className="material-symbols-outlined text-[14px] text-amber-500"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>{' '}
                    {c.rating} ({c.reviewsCount}+)
                  </div>
                </div>

                <div className="p-space-lg flex flex-col flex-1">
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary mb-space-md line-clamp-2">
                    {c.subtitle}
                  </p>

                  <div className="space-y-2 font-body-sm text-body-sm text-on-surface-variant mb-space-lg bg-surface-container-low p-3 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-primary">schedule</span> Duration:
                      </span>
                      <span className="font-bold text-on-surface">{c.durationLabel}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-primary">meeting_room</span> Mode:
                      </span>
                      <span className="font-semibold text-on-surface">On-Campus Labs + Live Hybrid</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-tertiary">work</span> Placement:
                      </span>
                      <span className="font-bold text-tertiary">{c.placementHighlight}</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-space-sm flex items-center justify-between gap-2">
                    <div>
                      <span className="font-label-sm text-label-sm text-secondary block">Tuition / Month</span>
                      <span className="font-headline-sm text-headline-sm font-bold text-primary-container">
                        PKR {c.monthlyFee.toLocaleString()}{' '}
                        <span className="font-body-sm text-body-sm font-normal text-secondary">/mo</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => onOpenOutline(c.id)}
                        className="px-3 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold transition-colors cursor-pointer"
                      >
                        Outline
                      </button>
                      <button
                        onClick={() => onOpenEnroll(c.id)}
                        className="px-4 py-2 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md font-bold hover:bg-primary transition-colors shadow-sm cursor-pointer"
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Action */}
          <div className="mt-space-xl p-space-lg rounded-2xl bg-surface-container-high flex flex-col sm:flex-row items-center justify-between gap-space-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-xl">auto_stories</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  Explore Over 100+ Specialized Short Courses
                </h4>
                <p className="font-body-sm text-body-sm text-secondary">
                  From 3D Animation, DevOps, SQA, Shopify, to Prompt Engineering.
                </p>
              </div>
            </div>
            <button
              onClick={() => onNavigate('courses')}
              className="px-5 py-2.5 rounded-lg bg-on-surface text-surface font-label-md text-label-md font-bold hover:bg-on-surface/90 transition-colors whitespace-nowrap cursor-pointer"
            >
              View Complete Course Catalog
            </button>
          </div>
        </div>
      </section>

      {/* 4. NEXSKILL ADVANTAGE (6 VALUE PILLARS) */}
      <section className="w-full py-space-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="text-center max-w-2xl mx-auto mb-space-xl">
            <span className="px-3 py-1 rounded-full bg-primary-container/10 text-primary-container font-label-sm text-label-sm font-bold uppercase tracking-wider">
              The NexSkill Standard
            </span>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mt-2">
              Why 18,000+ Students Choose NexSkill
            </h2>
            <p className="font-body-md text-body-md text-secondary mt-1">
              We don&apos;t teach abstract slides. We prepare students to be immediately billable in actual engineering teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary-container flex items-center justify-center mb-space-md">
                <span className="material-symbols-outlined text-2xl">developer_mode</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                Industry-Driven Curriculum
              </h3>
              <p className="font-body-md text-body-md text-secondary leading-relaxed">
                Curriculum vetted quarterly with CTOs from leading Lahore and Karachi software companies to reflect real 2026 stack requirements, agentic workflows, and modern cloud deployment.
              </p>
            </div>

            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed-variant flex items-center justify-center mb-space-md">
                <span className="material-symbols-outlined text-2xl">business_center</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                Guaranteed Internship Pool
              </h3>
              <p className="font-body-md text-body-md text-secondary leading-relaxed">
                Every top-tier bootcamp includes direct routing to NexTalent job portal and fast-tracked internship interviews at over 200+ partner tech companies.
              </p>
            </div>

            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center mb-space-md">
                <span className="material-symbols-outlined text-2xl">record_voice_over</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                Soft Skills &amp; Leadership Lab
              </h3>
              <p className="font-body-md text-body-md text-secondary leading-relaxed">
                Dedicated modules for technical English fluency, mock client presentations, resume crafting, LinkedIn optimization, and international freelance negotiation.
              </p>
            </div>

            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 text-primary-container flex items-center justify-center mb-space-md">
                <span className="material-symbols-outlined text-2xl">terminal</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                Hands-On Real Client Projects
              </h3>
              <p className="font-body-md text-body-md text-secondary leading-relaxed">
                Students build fully functioning production applications deployed to AWS/Vercel rather than sandbox toy examples, guaranteeing a credible GitHub portfolio.
              </p>
            </div>

            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed-variant flex items-center justify-center mb-space-md">
                <span className="material-symbols-outlined text-2xl">install_mobile</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                24/7 Mobile LMS App Access
              </h3>
              <p className="font-body-md text-body-md text-secondary leading-relaxed">
                Rewatch live recorded lectures anytime, download offline code snippets, take automated quizzes, and track project milestones through the official NexSkill LMS App.
              </p>
            </div>

            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center mb-space-md">
                <span className="material-symbols-outlined text-2xl">diversity_3</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2">
                Lifetime Alumni Network
              </h3>
              <p className="font-body-md text-body-md text-secondary leading-relaxed">
                Gain perpetual access to our private Discord &amp; WhatsApp developer groups, hackathons, job referrers, and monthly founder AMAs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. JOB PLACEMENT CELL & INDUSTRY PARTNERS */}
      <section className="w-full py-space-xl bg-inverse-surface text-inverse-on-surface overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-margin relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center mb-space-xl">
            <div className="lg:col-span-6">
              <span className="px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold uppercase tracking-wider">
                NexTalent Placement Cell
              </span>
              <h2 className="font-headline-lg text-headline-lg font-bold text-inverse-on-surface mt-2 mb-space-sm">
                Bridging The Gap Between Classroom &amp; Top Tech Employment
              </h2>
              <p className="font-body-md text-body-md text-inverse-on-surface/80 leading-relaxed mb-space-md">
                Our placement cell operates full-time to bridge the gap between fresh trainees and enterprise tech companies. With 170+ active MOUs, we don&apos;t just teach you; we place you.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('placement')}
                  className="px-5 py-3 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md font-bold hover:bg-primary transition-all cursor-pointer"
                >
                  Join Placement Track
                </button>
                <span className="font-body-sm text-body-sm text-inverse-on-surface/70">
                  ⚡ Over 7,000+ verified career placements across Pakistan &amp; Middle East.
                </span>
              </div>
            </div>

            {/* Placement Metric Bento */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-space-sm">
              <div className="p-space-lg rounded-2xl bg-surface-container-highest/10 backdrop-blur">
                <span className="font-metric-display text-metric-display text-tertiary-fixed-dim font-black block">
                  85%
                </span>
                <span className="font-headline-sm text-headline-sm font-bold text-inverse-on-surface mt-1 block">
                  Placement Rate
                </span>
                <p className="font-body-sm text-body-sm text-inverse-on-surface/70 mt-1">
                  Hired within 90 days of graduation
                </p>
              </div>

              <div className="p-space-lg rounded-2xl bg-surface-container-highest/10 backdrop-blur">
                <span className="font-metric-display text-metric-display text-primary-fixed font-black block">
                  7,000+
                </span>
                <span className="font-headline-sm text-headline-sm font-bold text-inverse-on-surface mt-1 block">
                  Students Placed
                </span>
                <p className="font-body-sm text-body-sm text-inverse-on-surface/70 mt-1">
                  Across 200+ partner software houses
                </p>
              </div>

              <div className="p-space-lg rounded-2xl bg-surface-container-highest/10 backdrop-blur">
                <span className="font-metric-display text-metric-display text-secondary-fixed font-black block">
                  95%
                </span>
                <span className="font-headline-sm text-headline-sm font-bold text-inverse-on-surface mt-1 block">
                  Interview Success
                </span>
                <p className="font-body-sm text-body-sm text-inverse-on-surface/70 mt-1">
                  Backed by soft skills and mock drills
                </p>
              </div>

              <div className="p-space-lg rounded-2xl bg-surface-container-highest/10 backdrop-blur">
                <span className="font-metric-display text-metric-display text-tertiary-fixed font-black block">
                  PKR 125K
                </span>
                <span className="font-headline-sm text-headline-sm font-bold text-inverse-on-surface mt-1 block">
                  Avg Starting Pay
                </span>
                <p className="font-body-sm text-body-sm text-inverse-on-surface/70 mt-1">
                  For AI &amp; Full Stack specialized tracks
                </p>
              </div>
            </div>
          </div>

          {/* Partner Logos Strip */}
          <div className="pt-space-md border-t border-inverse-on-surface/10">
            <p className="text-center font-label-sm text-label-sm uppercase tracking-widest text-inverse-on-surface/60 font-bold mb-space-md">
              Partnering for Success: Leading Tech Employers &amp; Academia
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 text-center">
              {[
                'PITB',
                'PureLogics',
                'Programmers Force',
                'HBL Tech Hub',
                'LUMS Tech Incubator',
                'Game Storm Studios',
                'Pentabit Labs',
                'OziPub',
                'Neksogix',
                'UMT Lahore',
                'Superior Tech Hub',
                'UCP Tech Cell'
              ].map((partner, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-inverse-on-surface/5 font-label-md text-label-md font-bold text-inverse-on-surface/90 hover:bg-inverse-on-surface/10 transition-colors"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. MULTI-CAMPUS LOCATIONS & INTERACTIVE FINDER */}
      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="text-center max-w-2xl mx-auto mb-space-xl">
            <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold uppercase tracking-wider">
              Physical Presence
            </span>
            <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mt-2">
              Find Your Nearest NexSkill Campus
            </h2>
            <p className="font-body-md text-body-md text-secondary mt-1">
              State-of-the-art computer labs, ultra-fast fiber WiFi, and active mentor desks in Pakistan&apos;s primary economic centers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {CAMPUSES.map((camp) => (
              <div
                key={camp.id}
                className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-space-sm">
                    <span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-bold">
                      Open Mon-Sun
                    </span>
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      {camp.isFlagship ? 'domain' : 'location_city'}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-1">
                    {camp.name}
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary mb-space-md">
                    {camp.address}
                  </p>
                  <div className="space-y-1.5 font-label-sm text-label-sm text-on-surface-variant mb-space-md">
                    {camp.amenities.map((amenity, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-tertiary">check</span>
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="font-body-sm text-body-sm text-secondary mb-2">
                    <strong className="text-on-surface">Call:</strong> {camp.phone}
                  </div>
                  <a
                    className="w-full py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold flex items-center justify-center gap-1 transition-colors"
                    href={camp.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="material-symbols-outlined text-[16px]">navigation</span> Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. STUDENT SUCCESS STORIES & SALARY TRANSFORMATIONS */}
      <section className="w-full py-space-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
            <div>
              <span className="px-3 py-1 rounded-full bg-primary-container/10 text-primary-container font-label-sm text-label-sm font-bold uppercase tracking-wider">
                Verified Outcomes
              </span>
              <h2 className="font-headline-lg text-headline-lg font-bold text-on-surface mt-2">
                Student Transformations That Speak For Themselves
              </h2>
              <p className="font-body-md text-body-md text-secondary mt-1">
                Read how non-technical learners and university graduates pivoted into high-paying software careers.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-label-md text-label-md font-bold text-tertiary flex items-center gap-1">
                <span className="material-symbols-outlined text-[20px]">verified</span> 100% Verified Placements
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Story 1 */}
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-space-md">
                  <img
                    className="w-14 h-14 rounded-full object-cover"
                    alt="Hamza Tariq"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw3P2jgTy476nCwo4N1w-Rlot339bbOZzwy3pp2YAjIvPhdIGT1LOwUcGqporUMySFb3gOaFPNr0oFup18NawzKwnHTfwodqDFFrir9vYgVH9kkF3xyHO9VuY5XBjYeZbMbHG85EUYzSE1N4jy3qqckwPsTIjmsl36yR8jEWL8Za5wK06j6RiqM0x_JFEp0NrQ0xNZ4VjFzSAvonE4zpOPaJnlkisqAEHHRqxV4iUP-SiTU-S_nxrGDw"
                  />
                  <div>
                    <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">Hamza Tariq</h4>
                    <p className="font-body-sm text-body-sm text-secondary">Former B.Com Student → AI Engineer</p>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-tertiary-fixed/30 text-on-tertiary-fixed-variant mb-space-md font-label-sm text-label-sm flex items-center justify-between font-bold">
                  <span>Hired at: PureLogics</span>
                  <span className="text-tertiary-container">Salary: PKR 140,000/mo</span>
                </div>
                <p className="font-body-md text-body-md text-secondary italic mb-space-md">
                  &quot;I had zero coding experience coming from a commerce background. The Full Stack AI Bootcamp at Arfa Tower gave me real Python projects and model fine-tuning skills that blew my interviewers away.&quot;
                </p>
              </div>
              <div className="pt-space-sm border-t border-surface-container flex items-center justify-between text-secondary font-label-sm text-label-sm">
                <span>Program: Full Stack AI</span>
                <span className="text-amber-500 flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>{' '}
                  5.0
                </span>
              </div>
            </div>

            {/* Story 2 */}
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-space-md">
                  <img
                    className="w-14 h-14 rounded-full object-cover"
                    alt="Ayesha Noor"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaEEbVMdh6p4j24CWc-Z-o_MoxkoajJBsQxbdD_awFrbb3fJEKsc0oRz5nr9Z6VKEa-n32uaFABUx1_c3oyWL3TlQWan5809U__qjBnLNxtuHKpbyIh0BuVG_Ji8i3Ksd52tfk8GMelG8q7hrjv3gRBKnePqwsqYkzs0bZ4yc7P60dB1kmUCjL68MKOTcuG5DQXLNZicaj2MkR30fc68Sdns1feClh3sAXHYL0JMZiIF0u3gFOEwTMQQ"
                  />
                  <div>
                    <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">Ayesha Noor</h4>
                    <p className="font-body-sm text-body-sm text-secondary">Figma &amp; Generative AI Specialist</p>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-tertiary-fixed/30 text-on-tertiary-fixed-variant mb-space-md font-label-sm text-label-sm flex items-center justify-between font-bold">
                  <span>Upwork Top-Rated: $2,400/mo</span>
                  <span className="text-tertiary-container">Freelance Alum</span>
                </div>
                <p className="font-body-md text-body-md text-secondary italic mb-space-md">
                  &quot;NexSkill didn&apos;t just teach me buttons inside Figma; they walked us through international design systems, UX psychology, and how to price our freelance gigs to land US clients.&quot;
                </p>
              </div>
              <div className="pt-space-sm border-t border-surface-container flex items-center justify-between text-secondary font-label-sm text-label-sm">
                <span>Program: UI/UX &amp; AI Design</span>
                <span className="text-amber-500 flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>{' '}
                  5.0
                </span>
              </div>
            </div>

            {/* Story 3 */}
            <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-space-md">
                  <img
                    className="w-14 h-14 rounded-full object-cover"
                    alt="Bilal Shahid"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrUAw8ysUm2tvHFYjJoHBYbzf1TR9cmuT2t369baIjWokBmsuU0W9DuI8tPMmvgBe-WHs4KzBAtXorbIxxZMAI4-v20Dw3MWNdcR7bPnaCLETT5Hcsg8YgtecN_UnzB_Fr00lHa4psjJqwfZmQ0fGzv3GgHktMYSRN3jczZA37xBR2KkfiMlbfQmzLLwTA2JyFflhEEUWShXVikWg5t2VIpRiZu1Xs94DX-7fJE-RO44mkXS4fM2H9cg"
                  />
                  <div>
                    <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">Bilal Shahid</h4>
                    <p className="font-body-sm text-body-sm text-secondary">SOC Analyst at Banking Firm</p>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-tertiary-fixed/30 text-on-tertiary-fixed-variant mb-space-md font-label-sm text-label-sm flex items-center justify-between font-bold">
                  <span>Hired at: HBL Cyber Cell</span>
                  <span className="text-tertiary-container">Salary: PKR 175,000/mo</span>
                </div>
                <p className="font-body-md text-body-md text-secondary italic mb-space-md">
                  &quot;The practical vulnerability assessment and ethical penetration testing labs gave me real scenarios. NexSkill&apos;s placement team arranged 3 interviews before my diploma was even officially awarded.&quot;
                </p>
              </div>
              <div className="pt-space-sm border-t border-surface-container flex items-center justify-between text-secondary font-label-sm text-label-sm">
                <span>Program: Cyber Security</span>
                <span className="text-amber-500 flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>{' '}
                  5.0
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INSTRUCTOR & FRANCHISE OPPORTUNITY BENTO */}
      <section className="w-full py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {/* Become an Instructor */}
            <div className="p-space-xl rounded-3xl bg-surface-container-low flex flex-col justify-between relative overflow-hidden">
              <div>
                <span className="w-10 h-10 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center font-bold mb-space-md">
                  <span className="material-symbols-outlined">cast_for_education</span>
                </span>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">
                  Become a NexSkill Instructor
                </h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed mb-space-lg">
                  Are you a senior engineer, architect, or agency owner? Join Pakistan&apos;s elite tech teaching faculty. Share your practical experience, mentor the next generation, and earn premium compensation with flexible evening or weekend cohorts.
                </p>
              </div>
              <a
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-on-surface text-surface font-label-md text-label-md font-bold hover:bg-on-surface/90 transition-colors w-fit"
                href="mailto:trainings@nexskill.com?subject=Instructor%20Application"
              >
                Apply as Instructor <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>

            {/* Start a Franchise */}
            <div className="p-space-xl rounded-3xl bg-secondary-container/50 flex flex-col justify-between relative overflow-hidden">
              <div>
                <span className="w-10 h-10 rounded-xl bg-tertiary-container text-on-tertiary flex items-center justify-center font-bold mb-space-md">
                  <span className="material-symbols-outlined">storefront</span>
                </span>
                <h3 className="font-headline-md text-headline-md font-bold text-on-surface mb-2">
                  Launch a NexSkill Campus Franchise
                </h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed mb-space-lg">
                  Bring Pakistan&apos;s top tech curriculum to your district or city. Benefit from our complete turnkey academic model, government affiliations (NAVTTC &amp; PSDF), student acquisition engine, and LMS tech stack.
                </p>
              </div>
              <a
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-tertiary-container text-on-tertiary font-label-md text-label-md font-bold hover:bg-tertiary transition-colors w-fit"
                href="tel:+923096663330"
              >
                Inquire Franchise Opportunities <span className="material-symbols-outlined text-[18px]">phone</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. READY TO LAUNCH YOUR CAREER CTA BANNER */}
      <section className="w-full bg-primary-container text-on-primary-container py-space-xl overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-margin relative z-10 text-center">
          <h2 className="font-headline-xl text-headline-xl font-extrabold tracking-tight mb-space-sm text-on-primary-container">
            Ready to Launch Your High-Income Tech Career?
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary-container/90 max-w-2xl mx-auto mb-space-lg leading-relaxed">
            Admissions are now open for the upcoming 2026 Batch across Lahore, Karachi, Mian Channu, and Online Live Labs. Limited seats per batch for personalized attention.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-space-md">
            <button
              onClick={() => onOpenEnroll()}
              className="px-8 py-4 rounded-xl bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm font-bold shadow-xl hover:bg-surface-container-low transition-all active:scale-95 cursor-pointer"
            >
              Enroll Now &amp; Claim Seat
            </button>
            <a
              className="px-6 py-4 rounded-xl bg-inverse-surface text-inverse-on-surface font-label-md text-label-md font-bold hover:bg-on-surface transition-all flex items-center gap-2"
              href="https://wa.me/923096663330?text=Hi%20NexSkill,%20I%20want%20to%20know%20more%20about%20admissions"
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined text-[20px] text-tertiary-fixed">chat</span>
              WhatsApp Admission Counselor
            </a>
          </div>
          <p className="mt-space-md font-label-sm text-label-sm text-on-primary-container/80">
            Hotline: +92 309 666 3330 • Visit Us: Arfa Software Technology Park, Lahore
          </p>
        </div>
      </section>
    </div>
  );
};
