import React, { useState, useMemo } from 'react';
import { COURSES, Course } from '../data/coursesData';

interface CoursesViewProps {
  onNavigate: (path: string) => void;
  onOpenEnroll: (courseId?: string) => void;
  onOpenOutline: (courseId: string) => void;
}

export const CoursesView: React.FC<CoursesViewProps> = ({
  onNavigate,
  onOpenEnroll,
  onOpenOutline
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMode, setSelectedMode] = useState<string>('all');
  const [selectedDuration, setSelectedDuration] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Programs (100+)' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'dev', label: 'Full Stack Development' },
    { id: 'security', label: 'Cybersecurity & SQA' },
    { id: 'design', label: 'Creative Design & UI/UX' },
    { id: 'marketing', label: 'Digital Marketing & E-Com' },
    { id: 'cloud', label: 'Cloud & DevOps' }
  ];

  const filteredCourses = useMemo(() => {
    return COURSES.filter((c) => {
      // Category filter
      if (selectedCategory !== 'all' && c.category !== selectedCategory) {
        return false;
      }
      // Mode filter
      if (selectedMode !== 'all' && !c.modes.includes(selectedMode)) {
        return false;
      }
      // Duration filter
      if (selectedDuration !== 'all' && c.duration !== selectedDuration) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = c.title.toLowerCase().includes(q);
        const matchesSubtitle = c.subtitle.toLowerCase().includes(q);
        const matchesTools = c.tools.some((t) => t.toLowerCase().includes(q));
        const matchesHighlight = c.highlights.some((h) => h.toLowerCase().includes(q));
        if (!matchesTitle && !matchesSubtitle && !matchesTools && !matchesHighlight) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedMode, selectedDuration, searchQuery]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedMode('all');
    setSelectedDuration('all');
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Breadcrumb & Live Notice Pill */}
      <section className="bg-surface-container-low py-space-sm border-b border-surface-container">
        <div className="max-w-7xl mx-auto px-margin flex flex-wrap items-center justify-between gap-space-sm font-label-md text-label-md">
          <div className="flex items-center gap-2 text-secondary">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            <span className="text-on-surface font-semibold">Courses &amp; Micro-Degrees</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-error-container text-on-error-container text-label-sm font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              Spring 2026 Batch: 85% Seats Filled Across Lahore &amp; Karachi
            </span>
          </div>
        </div>
      </section>

      {/* Hero & Directory Search Engine */}
      <section className="relative bg-surface-container-lowest py-space-xl overflow-hidden">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="max-w-3xl mb-space-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-label-sm font-bold uppercase tracking-wide mb-3">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              NAVTTC • PSDF • TEVTA Recognized Programs
            </div>
            <h1 className="font-headline-xl text-headline-xl font-extrabold text-on-surface tracking-tight mb-2">
              Explore Career-Ready IT &amp; AI Programs
            </h1>
            <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
              Choose from 100+ industry-certified courses, tech bootcamps, and government-approved micro-degrees with hands-on labs, live capstone projects, and guaranteed NexTalent placement support.
            </p>
          </div>

          {/* Live Search & Interactive Filter Box */}
          <div className="bg-surface-container-low rounded-xl p-space-md shadow-sm mb-space-md border border-surface-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-sm">
              {/* Primary Keyword Search */}
              <div className="lg:col-span-5 relative">
                <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary text-[22px]">
                  search
                </span>
                <input
                  className="w-full h-11 pl-11 pr-4 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-secondary font-body-md text-body-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container border border-surface-container"
                  placeholder="Search courses e.g. Full Stack AI, Cyber Security, Flutter, UI/UX..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Mode Select */}
              <div className="lg:col-span-3">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
                    location_on
                  </span>
                  <select
                    className="w-full h-11 pl-10 pr-8 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md appearance-none shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container border border-surface-container cursor-pointer"
                    value={selectedMode}
                    onChange={(e) => setSelectedMode(e.target.value)}
                  >
                    <option value="all">All Delivery Modes</option>
                    <option value="arfa">On-Campus: Arfa Tower Lahore</option>
                    <option value="garden">On-Campus: Garden Town Lahore</option>
                    <option value="karachi">On-Campus: Karachi Parsa Tower</option>
                    <option value="mianchannu">On-Campus: Mian Channu</option>
                    <option value="online">Live Interactive Online (Zoom + LMS)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-secondary pointer-events-none text-[20px]">
                    expand_more
                  </span>
                </div>
              </div>

              {/* Track Duration */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary text-[20px]">
                    schedule
                  </span>
                  <select
                    className="w-full h-11 pl-10 pr-8 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md appearance-none shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-container border border-surface-container cursor-pointer"
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                  >
                    <option value="all">Any Duration</option>
                    <option value="2-months">Fast Track (2 Months)</option>
                    <option value="4-months">Bootcamp (4 Months)</option>
                    <option value="6-months">Micro-Degree (6 Months)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-secondary pointer-events-none text-[20px]">
                    expand_more
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="lg:col-span-2">
                <button
                  onClick={handleResetFilters}
                  className="w-full h-11 rounded-lg bg-primary-container hover:bg-primary text-on-primary-container font-label-md text-label-md font-bold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[18px]">tune</span>
                  Reset Filters
                </button>
              </div>
            </div>

            {/* Category Horizontal Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pt-space-sm mt-space-xs no-scrollbar">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg font-label-md text-label-md whitespace-nowrap shadow-xs transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-inverse-surface text-inverse-on-surface font-bold'
                        : 'bg-surface-container-lowest text-on-surface hover:bg-surface-container-highest'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm pt-space-xs">
            <div className="bg-surface-container p-3.5 rounded-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">trending_up</span>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm font-extrabold text-on-surface leading-tight">
                  85%
                </div>
                <div className="font-body-sm text-body-sm text-secondary">Verified Job Placement</div>
              </div>
            </div>

            <div className="bg-surface-container p-3.5 rounded-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-tertiary-container text-on-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">groups</span>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm font-extrabold text-on-surface leading-tight">
                  18,000+
                </div>
                <div className="font-body-sm text-body-sm text-secondary">Graduates Trained</div>
              </div>
            </div>

            <div className="bg-surface-container p-3.5 rounded-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-[22px]">hub</span>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm font-extrabold text-on-surface leading-tight">
                  200+
                </div>
                <div className="font-body-sm text-body-sm text-secondary">MOU Hiring Partners</div>
              </div>
            </div>

            <div className="bg-surface-container p-3.5 rounded-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-surface-container-highest text-on-surface flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-[22px] text-amber-500"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
              </div>
              <div>
                <div className="font-headline-sm text-headline-sm font-extrabold text-on-surface leading-tight">
                  4.8 / 5.0
                </div>
                <div className="font-body-sm text-body-sm text-secondary">Google &amp; Facebook Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Flagship Career Programs Grid */}
      <section className="py-space-xl bg-surface">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
            <div>
              <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                Accredited Career Pathways
              </span>
              <h2 className="font-headline-lg text-headline-lg font-extrabold text-on-surface">
                Flagship Career Programs
              </h2>
              <p className="font-body-md text-body-md text-secondary mt-1">
                Intensive multi-tier curriculums designed to transition students directly into global freelance or in-house roles.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-secondary font-label-md text-label-md">
                Showing: <strong className="text-on-surface">{filteredCourses.length} Programs Available</strong>
              </span>
            </div>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-surface-container-lowest border border-surface-container space-y-3">
              <span className="material-symbols-outlined text-4xl text-secondary">search_off</span>
              <h3 className="font-headline-sm font-bold text-on-surface">No courses match your filter</h3>
              <p className="font-body-md text-secondary">Try clearing your search keyword or switching category tabs.</p>
              <button
                onClick={handleResetFilters}
                className="px-4 py-2 rounded-lg bg-primary-container text-on-primary-container font-semibold cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {filteredCourses.map((c) => (
                <div
                  key={c.id}
                  className="group bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-surface-container/60"
                >
                  <div>
                    <div className="relative overflow-hidden rounded-lg mb-space-md aspect-[16/9] bg-surface-container">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt={c.title}
                        src={c.image}
                      />
                      <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
                        <span className="px-2.5 py-1 rounded-full bg-primary-container text-on-primary-container text-label-sm font-bold shadow-sm">
                          {c.badge}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-on-surface text-label-sm font-bold">
                          {c.duration === '6-months' ? 'Micro-Degree' : 'Tech Bootcamp'}
                        </span>
                      </div>
                      <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-inverse-surface/90 text-inverse-on-surface text-label-sm font-semibold">
                        {c.durationLabel} • {c.hoursPerWeek}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary font-bold">
                        <span className="material-symbols-outlined text-[16px]">verified</span> {c.accreditation}
                      </span>
                      <div className="flex items-center gap-1 text-label-sm font-bold text-on-surface">
                        <span
                          className="material-symbols-outlined text-primary-container text-[16px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>{' '}
                        {c.rating} ({c.reviewsCount}+ enrolled)
                      </div>
                    </div>

                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                      {c.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary mb-space-sm line-clamp-2">
                      {c.subtitle}
                    </p>

                    {/* Syllabus Highlights */}
                    <ul className="space-y-1.5 mb-space-md font-body-sm text-body-sm text-on-surface">
                      {c.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[16px] text-tertiary shrink-0">
                            check_circle
                          </span>
                          <span className="line-clamp-1">{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="p-2.5 rounded-lg bg-surface-container-low mb-space-sm flex items-center justify-between font-label-sm text-label-sm">
                      <span className="text-secondary">
                        Next Cohort: <strong className="text-on-surface font-semibold">{c.nextCohort}</strong>
                      </span>
                      <span className="text-primary font-bold">{c.placementHighlight}</span>
                    </div>
                  </div>

                  <div className="pt-space-sm border-t border-surface-container-high flex items-center justify-between gap-2">
                    <div>
                      <span className="font-label-sm text-label-sm text-secondary block">Tuition / Month</span>
                      <span className="font-headline-sm text-headline-sm font-extrabold text-on-surface">
                        PKR {c.monthlyFee.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenOutline(c.id)}
                        className="px-3.5 py-2 rounded-lg bg-surface-container hover:bg-surface-container-highest text-on-surface font-label-md text-label-md font-semibold transition-colors cursor-pointer"
                      >
                        Outline
                      </button>
                      <button
                        onClick={() => onOpenEnroll(c.id)}
                        className="px-4 py-2 rounded-lg bg-primary-container hover:bg-primary text-on-primary-container font-label-md text-label-md font-bold shadow-sm transition-all active:scale-95 cursor-pointer"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Learning Models Comparison Section */}
      <section className="py-space-xl bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="text-center max-w-2xl mx-auto mb-space-xl">
            <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
              Structured For Every Goal
            </span>
            <h2 className="font-headline-lg text-headline-lg font-extrabold text-on-surface">
              Compare Our Learning Models
            </h2>
            <p className="font-body-md text-body-md text-secondary mt-1">
              Whether you need rapid skill upgrades or a complete career transformation, NexSkill has a track built for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Model 1: Fast Track */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between border border-surface-container">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold mb-space-md">
                  <span className="material-symbols-outlined text-[16px]">bolt</span> Rapid Upskilling
                </div>
                <h3 className="font-headline-sm text-headline-sm font-extrabold text-on-surface mb-2">
                  Fast Track Certifications
                </h3>
                <p className="font-body-md text-body-md text-secondary mb-space-md">
                  Targeted 2-month sprints focusing on high-demand micro-skills to immediately boost your freelance rates or team performance.
                </p>
                <div className="space-y-3 font-body-sm text-body-sm text-on-surface mb-space-lg">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">timelapse</span>
                    <span><strong>Duration:</strong> 8 Weeks (2 Months)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">school</span>
                    <span><strong>Focus:</strong> Hands-on tool mastery (Shopify, SEO, Canva AI)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">workspace_premium</span>
                    <span><strong>Certification:</strong> NexSkill Professional Certificate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">work_history</span>
                    <span><strong>Placement:</strong> Upwork &amp; Fiverr Freelance Coaching</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedDuration('2-months');
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                className="w-full py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-highest text-on-surface font-label-md text-label-md text-center transition-colors cursor-pointer font-bold"
              >
                View Fast-Track Courses
              </button>
            </div>

            {/* Model 2: Tech Power Bootcamps */}
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between border border-surface-container">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-bold mb-space-md">
                  <span className="material-symbols-outlined text-[16px]">terminal</span> Industry Ready
                </div>
                <h3 className="font-headline-sm text-headline-sm font-extrabold text-on-surface mb-2">
                  Tech Power Bootcamps
                </h3>
                <p className="font-body-md text-body-md text-secondary mb-space-md">
                  Rigorous 4-month practical programs with daily lab drills, code reviews, soft skills coaching, and resume revamps.
                </p>
                <div className="space-y-3 font-body-sm text-body-sm text-on-surface mb-space-lg">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">timelapse</span>
                    <span><strong>Duration:</strong> 16 Weeks (4 Months)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">school</span>
                    <span><strong>Focus:</strong> Production engineering &amp; client simulations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">workspace_premium</span>
                    <span><strong>Certification:</strong> PSDF &amp; NAVTTC Approved Certificate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary text-[18px]">work_history</span>
                    <span><strong>Placement:</strong> NexTalent Direct Interview Shortlists</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedDuration('4-months');
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                className="w-full py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-highest text-on-surface font-label-md text-label-md text-center transition-colors cursor-pointer font-bold"
              >
                Explore Tech Bootcamps
              </button>
            </div>

            {/* Model 3: Micro-Degrees (Featured) */}
            <div className="bg-inverse-surface text-inverse-on-surface rounded-xl p-space-lg shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold mb-space-md shadow-sm">
                  <span className="material-symbols-outlined text-[16px]">stars</span> Career Replacement
                </div>
                <h3 className="font-headline-sm text-headline-sm font-extrabold text-inverse-on-surface mb-2">
                  Micro-Degree Programs
                </h3>
                <p className="font-body-md text-body-md text-inverse-on-surface/80 mb-space-md">
                  Our premier 6-month curriculum combining computer science fundamentals, generative AI tools, and enterprise internships.
                </p>
                <div className="space-y-3 font-body-sm text-body-sm text-inverse-on-surface/90 mb-space-lg">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary-fixed text-[18px]">timelapse</span>
                    <span><strong>Duration:</strong> 24 Weeks (6 Months)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary-fixed text-[18px]">school</span>
                    <span><strong>Focus:</strong> System architecture, capstone, enterprise labs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary-fixed text-[18px]">workspace_premium</span>
                    <span><strong>Certification:</strong> TEVTA Registered + NAVTTC Recognized</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-tertiary-fixed text-[18px]">work_history</span>
                    <span><strong>Placement:</strong> Guaranteed 85% Placement Pipeline Support</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  setSelectedDuration('6-months');
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                className="w-full py-2.5 rounded-lg bg-primary-container hover:bg-primary text-on-primary-container font-label-md text-label-md text-center shadow-md transition-all cursor-pointer font-bold"
              >
                Browse Flagship Micro-Degrees
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Course Catalog Table Accordion / Directory Index */}
      <section className="py-space-xl bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
            <div>
              <span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-wider">
                Curriculum Catalog
              </span>
              <h2 className="font-headline-lg text-headline-lg font-extrabold text-on-surface">
                All Available Training Tracks (2026)
              </h2>
              <p className="font-body-md text-body-md text-secondary mt-1">
                Select from our complete range of certified technical, creative, and business courses.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-label-md text-label-md text-secondary">
              <span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
              <span>Admissions open for on-campus and online</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/* AI & Data */}
            <div className="p-space-md rounded-xl bg-surface-container-low border border-surface-container">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="material-symbols-outlined text-primary text-[24px]">psychology</span>
                <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">AI &amp; Data Science</h4>
              </div>
              <ul className="space-y-2 font-body-sm text-body-sm text-secondary">
                <li className="flex items-center justify-between hover:text-on-surface">
                  <button onClick={() => onOpenOutline('full-stack-ai')} className="hover:underline text-left cursor-pointer">
                    LLM &amp; Agentic AI Master Program
                  </button>{' '}
                  <span className="text-tertiary font-bold">New</span>
                </li>
                <li className="flex items-center justify-between hover:text-on-surface">
                  <button onClick={() => onOpenOutline('full-stack-ai')} className="hover:underline text-left cursor-pointer">
                    Full Stack Artificial Intelligence
                  </button>{' '}
                  <span className="text-primary font-bold">Hot</span>
                </li>
                <li className="flex items-center justify-between hover:text-on-surface">
                  <button onClick={() => onOpenEnroll('full-stack-ai')} className="hover:underline text-left cursor-pointer">
                    Data Analytics &amp; Power BI
                  </button>
                </li>
                <li className="flex items-center justify-between hover:text-on-surface">
                  <button onClick={() => onOpenEnroll('full-stack-ai')} className="hover:underline text-left cursor-pointer">
                    Python for Data Science
                  </button>
                </li>
                <li className="flex items-center justify-between hover:text-on-surface">
                  <button onClick={() => onOpenEnroll('full-stack-ai')} className="hover:underline text-left cursor-pointer">
                    Generative AI for Professionals
                  </button>
                </li>
              </ul>
            </div>

            {/* Software Development */}
            <div className="p-space-md rounded-xl bg-surface-container-low border border-surface-container">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="material-symbols-outlined text-primary text-[24px]">code</span>
                <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">Software &amp; Web</h4>
              </div>
              <ul className="space-y-2 font-body-sm text-body-sm text-secondary">
                <li className="flex items-center justify-between hover:text-on-surface">
                  <button onClick={() => onOpenOutline('software-engineering-ai')} className="hover:underline text-left cursor-pointer">
                    MERN Stack Development
                  </button>{' '}
                  <span className="text-tertiary font-bold">Top</span>
                </li>
                <li className="flex items-center justify-between hover:text-on-surface">
                  <button onClick={() => onOpenOutline('flutter-mobile-app')} className="hover:underline text-left cursor-pointer">
                    Flutter Dart Mobile Development
                  </button>
                </li>
                <li className="flex items-center justify-between hover:text-on-surface">
                  <button onClick={() => onOpenEnroll('software-engineering-ai')} className="hover:underline text-left cursor-pointer">
                    Fullstack Python Development
                  </button>
                </li>
                <li className="flex items-center justify-between hover:text-on-surface">
                  <button onClick={() => onOpenOutline('software-engineering-ai')} className="hover:underline text-left cursor-pointer">
                    Software Engineering with AI
                  </button>
                </li>
                <li className="flex items-center justify-between hover:text-on-surface">
                  <button onClick={() => onOpenEnroll('software-engineering-ai')} className="hover:underline text-left cursor-pointer">
                    Web Development Bootcamp
                  </button>
                </li>
              </ul>
            </div>

            {/* Design & Animation */}
            <div className="p-space-md rounded-xl bg-surface-container-low border border-surface-container">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="material-symbols-outlined text-primary text-[24px]">palette</span>
                <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">Design &amp; Media</h4>
              </div>
              <ul className="space-y-2 font-body-sm text-body-sm text-secondary">
                <li className="flex items-center justify-between hover:text-on-surface">
                  <button onClick={() => onOpenOutline('ui-ux-design')} className="hover:underline text-left cursor-pointer">
                    Advance UI UX Designing with AI
                  </button>{' '}
                  <span className="text-primary font-bold">Hot</span>
                </li>
                <li className="flex items-center justify-between hover:text-on-surface">
                  <button onClick={() => onOpenOutline('3d-animation-vfx')} className="hover:underline text-left cursor-pointer">
                    3D Animation &amp; 3ds MAX
                  </button>
                </li>
                <li className="flex items-center justify-between hover:text-on-surface">
                  <button onClick={() => onOpenEnroll('ui-ux-design')} className="hover:underline text-left cursor-pointer">
                    CGI Ads Production Bootcamp
                  </button>
                </li>
                <li className="flex items-center justify-between hover:text-on-surface">
                  <button onClick={() => onOpenOutline('3d-animation-vfx')} className="hover:underline text-left cursor-pointer">
                    Motion Graphics &amp; Video Editing
                  </button>
                </li>
                <li className="flex items-center justify-between hover:text-on-surface">
                  <button onClick={() => onOpenEnroll('ui-ux-design')} className="hover:underline text-left cursor-pointer">
                    Full Stack Graphic Designer
                  </button>
                </li>
              </ul>
            </div>

            {/* Marketing & Business */}
            <div className="p-space-md rounded-xl bg-surface-container-low border border-surface-container">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="material-symbols-outlined text-primary text-[24px]">storefront</span>
                <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">E-Com &amp; Growth</h4>
              </div>
              <ul className="space-y-2 font-body-sm text-body-sm text-secondary">
                <li className="flex items-center justify-between hover:text-on-surface">
                  <button onClick={() => onOpenOutline('digital-marketing')} className="hover:underline text-left cursor-pointer">
                    Shopify E-Commerce Mastery
                  </button>{' '}
                  <span className="text-tertiary font-bold">Top</span>
                </li>
                <li className="flex items-center justify-between hover:text-on-surface">
                  <button onClick={() => onOpenOutline('digital-marketing')} className="hover:underline text-left cursor-pointer">
                    Digital Growth Marketing with AI
                  </button>
                </li>
                <li className="flex items-center justify-between hover:text-on-surface">
                  <button onClick={() => onOpenEnroll('digital-marketing')} className="hover:underline text-left cursor-pointer">
                    SEO / AEO / AIO Search Engine
                  </button>
                </li>
                <li className="flex items-center justify-between hover:text-on-surface">
                  <button onClick={() => onOpenEnroll('digital-marketing')} className="hover:underline text-left cursor-pointer">
                    TikTok Shop &amp; Social Commerce
                  </button>
                </li>
                <li className="flex items-center justify-between hover:text-on-surface">
                  <button onClick={() => onOpenEnroll('digital-marketing')} className="hover:underline text-left cursor-pointer">
                    Freelancing &amp; Client Acquisition
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile LMS App Integration Banner */}
      <section className="py-space-xl bg-inverse-surface text-inverse-on-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-margin relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-highest/20 text-tertiary-fixed text-label-sm font-bold mb-space-md">
                <span className="material-symbols-outlined text-[16px]">phone_iphone</span> Official Mobile Learning Platform
              </div>
              <h2 className="font-headline-lg text-headline-lg font-extrabold text-inverse-on-surface mb-2">
                Learn On-The-Go with the NexSkill LMS App
              </h2>
              <p className="font-body-md text-body-md text-inverse-on-surface/80 mb-space-lg leading-relaxed">
                Never miss a lecture or assignment deadline. Download our mobile app powered by P2P Clouds to stream live lab recordings, test code in sandboxes, chat directly with instructors, and download offline lesson modules.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm mb-space-lg">
                <div className="bg-surface-container-lowest/5 backdrop-blur-sm p-3.5 rounded-xl border border-surface-container-lowest/10">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[24px] mb-1">offline_pin</span>
                  <div className="font-label-md text-label-md font-bold text-inverse-on-surface">Offline Mode</div>
                  <div className="font-body-sm text-body-sm text-inverse-on-surface/70">
                    Download full courses &amp; watch anywhere
                  </div>
                </div>
                <div className="bg-surface-container-lowest/5 backdrop-blur-sm p-3.5 rounded-xl border border-surface-container-lowest/10">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[24px] mb-1">trending_up</span>
                  <div className="font-label-md text-label-md font-bold text-inverse-on-surface">Progress Tracking</div>
                  <div className="font-body-sm text-body-sm text-inverse-on-surface/70">
                    Real-time attendance &amp; quiz performance
                  </div>
                </div>
                <div className="bg-surface-container-lowest/5 backdrop-blur-sm p-3.5 rounded-xl border border-surface-container-lowest/10">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[24px] mb-1">chat</span>
                  <div className="font-label-md text-label-md font-bold text-inverse-on-surface">Trainer 1-on-1</div>
                  <div className="font-body-sm text-body-sm text-inverse-on-surface/70">
                    Direct messaging with lab engineers
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-space-md">
                <a
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface transition-all shadow-md active:scale-95"
                  href="https://play.google.com/store/apps/details?id=com.p2pclouds.nexskill_lms"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="material-symbols-outlined text-[28px] text-primary">play_arrow</span>
                  <div className="text-left">
                    <span className="text-[11px] uppercase tracking-wider block font-bold text-secondary">
                      Get it on
                    </span>
                    <span className="font-bold text-[16px] leading-none">Google Play Store</span>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-inverse-on-surface/80 font-label-md text-label-md">
                  <div className="flex items-center gap-1 text-tertiary-fixed font-bold">
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>{' '}
                    4.5
                  </div>
                  <span>• 1,000+ Active Student Downloads</span>
                </div>
              </div>
            </div>

            {/* LMS App Card / QR Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm bg-surface-container-lowest text-on-surface p-space-lg rounded-2xl shadow-2xl flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary-container text-on-primary-container flex items-center justify-center font-headline-md font-extrabold mb-space-sm shadow-md">
                  N
                </div>
                <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                  NexSkill LMS Mobile
                </h4>
                <p className="font-body-sm text-body-sm text-secondary mb-space-md">
                  Scan QR code with your phone camera to download instantly
                </p>

                {/* Styled SVG QR Code Simulation */}
                <div className="p-3 bg-surface-container-low rounded-xl mb-space-md">
                  <svg className="w-40 h-40 text-on-surface" fill="currentColor" viewBox="0 0 100 100">
                    <rect fill="none" height="24" rx="2" stroke="currentColor" strokeWidth="4" width="24" x="10" y="10"></rect>
                    <rect height="12" width="12" x="16" y="16"></rect>
                    <rect fill="none" height="24" rx="2" stroke="currentColor" strokeWidth="4" width="24" x="66" y="10"></rect>
                    <rect height="12" width="12" x="72" y="16"></rect>
                    <rect fill="none" height="24" rx="2" stroke="currentColor" strokeWidth="4" width="24" x="10" y="66"></rect>
                    <rect height="12" width="12" x="16" y="72"></rect>
                    <rect height="6" width="16" x="42" y="12"></rect>
                    <rect height="12" width="8" x="42" y="24"></rect>
                    <rect height="8" width="4" x="56" y="24"></rect>
                    <rect height="14" width="8" x="12" y="44"></rect>
                    <rect height="6" width="12" x="26" y="44"></rect>
                    <rect height="12" width="12" x="44" y="44"></rect>
                    <rect height="8" width="8" x="62" y="44"></rect>
                    <rect height="12" width="12" x="76" y="44"></rect>
                    <rect height="22" width="10" x="42" y="66"></rect>
                    <rect height="10" width="12" x="58" y="62"></rect>
                    <rect height="6" width="12" x="76" y="66"></rect>
                    <rect height="10" width="26" x="60" y="78"></rect>
                  </svg>
                </div>

                <span className="inline-flex items-center gap-1.5 text-label-sm font-bold text-tertiary">
                  <span className="w-2 h-2 rounded-full bg-tertiary"></span> Free for Enrolled NexSkill Students
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Counseling & Hotline Banner */}
      <section className="py-space-xl bg-surface-container">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm border border-surface-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 text-primary font-label-md text-label-md font-bold mb-1">
                  <span className="material-symbols-outlined text-[20px]">support_agent</span>
                  <span>1-on-1 Academic Counseling Available</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg font-extrabold text-on-surface mb-2">
                  Unsure Which Tech Career Path Fits You?
                </h2>
                <p className="font-body-md text-body-md text-secondary leading-relaxed mb-4">
                  Speak directly with our senior industry mentors at Arfa Tower or Garden Town. We analyze your academic background, coding experience, and career goals to recommend the right program.
                </p>
                <div className="flex flex-wrap items-center gap-space-md">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant">
                      <span className="material-symbols-outlined text-[18px]">phone</span>
                    </span>
                    <div>
                      <span className="font-label-sm text-label-sm text-secondary block">Admissions Hotline</span>
                      <a
                        className="font-headline-sm text-headline-sm font-extrabold text-on-surface hover:text-primary transition-colors"
                        href="tel:+923096663330"
                      >
                        +92 309 666 3330
                      </a>
                    </div>
                  </div>
                  <div className="h-8 w-px bg-surface-container-high hidden sm:block"></div>
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface">
                      <span className="material-symbols-outlined text-[18px]">schedule</span>
                    </span>
                    <div>
                      <span className="font-label-sm text-label-sm text-secondary block">Walk-In Counseling Hours</span>
                      <span className="font-label-md text-label-md font-bold text-on-surface">
                        Mon - Sun: 10:00 AM - 9:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-2.5">
                <a
                  className="w-full py-3 px-4 rounded-xl bg-tertiary-container hover:bg-tertiary text-on-tertiary font-label-md text-label-md font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                  href="https://wa.me/923096663330?text=Hello%20NexSkill%20Admissions%2C%20I%20want%20to%20inquire%20about%20courses"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span> Chat with Advisor on WhatsApp
                </a>
                <button
                  onClick={() => onOpenEnroll()}
                  className="w-full py-3 px-4 rounded-xl bg-primary-container hover:bg-primary text-on-primary-container font-label-md text-label-md font-bold flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">how_to_reg</span> Book Free Campus Tour &amp; Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
