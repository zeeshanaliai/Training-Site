import React, { useState } from 'react';
import { CAMPUSES } from '../data/campusesData';

interface CampusesViewProps {
  onNavigate: (path: string) => void;
  onOpenEnroll: (courseId?: string, campusId?: string) => void;
}

export const CampusesView: React.FC<CampusesViewProps> = ({
  onNavigate,
  onOpenEnroll
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    campus: 'lahore-arfa',
    program: 'ai',
    time: 'morning',
    scholarship: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeCampusTab, setActiveCampusTab] = useState<string>('all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const filteredCampuses = activeCampusTab === 'all'
    ? CAMPUSES
    : CAMPUSES.filter(c => c.id === activeCampusTab || c.city.toLowerCase().includes(activeCampusTab));

  return (
    <div className="flex flex-col w-full">
      {/* Top Visual Hero / Page Header */}
      <section className="relative w-full bg-inverse-surface text-inverse-on-surface overflow-hidden py-16 md:py-24">
        {/* Ambient glowing backdrop circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-container/20 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-tertiary-container/20 blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-margin relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-lowest/10 backdrop-blur-sm text-tertiary-fixed font-label-sm text-label-sm uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim animate-ping"></span>
              State-of-the-Art Physical &amp; Remote Campuses
            </span>
            <span className="text-secondary-fixed-dim text-label-sm font-label-sm">NAVTTC • PSDF • TEVTA Recognized Facilities</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-headline-xl text-headline-xl lg:text-headline-xl text-on-primary tracking-tight font-extrabold max-w-4xl">
                Visit Our Campuses &amp; Begin Your Tech Journey
              </h1>
              <p className="mt-4 font-body-lg text-body-lg text-inverse-on-surface/80 max-w-2xl leading-relaxed">
                Modern hi-tech campuses located in Lahore, Karachi, and Mian Channu equipped with state-of-the-art computer labs, high-speed fiber internet, and dedicated career counseling suites.
              </p>
            </div>
            
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <div className="p-4 rounded-xl bg-surface-container-lowest/10 backdrop-blur-md flex items-center justify-between">
                <div>
                  <div className="font-metric-display text-metric-display font-extrabold text-tertiary-fixed leading-none">85%</div>
                  <div className="font-label-md text-label-md text-inverse-on-surface/80 mt-1">Verified Placement Rate</div>
                </div>
                <span className="material-symbols-outlined text-tertiary-fixed text-4xl">workspace_premium</span>
              </div>
              <div className="p-4 rounded-xl bg-surface-container-lowest/10 backdrop-blur-md flex items-center justify-between">
                <div>
                  <div className="font-headline-md text-headline-md font-bold text-on-primary leading-none">18,000+</div>
                  <div className="font-label-md text-label-md text-inverse-on-surface/80 mt-1">Graduates Across 4 Campuses</div>
                </div>
                <span className="material-symbols-outlined text-primary-fixed text-4xl">domain</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quick-Action Banner Bar */}
      <section className="w-full bg-surface-container-high py-4">
        <div className="max-w-7xl mx-auto px-margin flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">support_agent</span>
            <div>
              <span className="font-label-md text-label-md text-on-surface font-bold block">Need Instant Guidance or Campus Walk-In Pass?</span>
              <span className="font-body-sm text-body-sm text-secondary">Our Senior Academic Advisors are available Mon–Sun 10:00 AM – 9:00 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a 
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-tertiary-container text-on-tertiary font-label-md text-label-md hover:opacity-95 shadow-sm transition-all" 
              href="https://wa.me/923096663330" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              WhatsApp Admission Desk
            </a>
            <a 
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:opacity-95 shadow-sm transition-all" 
              href="tel:+923096663330"
            >
              <span className="material-symbols-outlined text-[18px]">call</span>
              +92 309 666 3330
            </a>
          </div>
        </div>
      </section>

      {/* Main Split: Campus Directory (8 cols) & Admissions Form (4 cols) */}
      <section className="max-w-7xl mx-auto px-margin py-12 md:py-16 w-full">
        {/* City Filter Pills */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          <span className="text-secondary font-label-sm uppercase font-bold shrink-0 mr-2">Filter City:</span>
          {[
            { id: 'all', label: 'All Campuses (4)' },
            { id: 'lahore', label: 'Lahore (2 Hubs)' },
            { id: 'karachi', label: 'Karachi PARSA' },
            { id: 'mian-channu', label: 'Mian Channu Complex' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCampusTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-all ${
                activeCampusTab === tab.id
                  ? 'bg-primary-container text-on-primary-container font-bold shadow-sm'
                  : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Campuses Directory */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase font-bold tracking-wider">
                <span className="material-symbols-outlined text-base">pin_drop</span>
                Physical Presence &amp; Labs
              </div>
              <h2 className="font-headline-lg text-headline-lg font-extrabold text-on-surface mt-1">
                Explore NexSkill Campus Facilities
              </h2>
              <p className="font-body-md text-body-md text-secondary mt-2">
                Each branch is purpose-built to deliver immersive project sprints, corporate networking events, and direct interview pipelines. Select a campus to view specialized labs and connectivity.
              </p>
            </div>

            {/* Campus 1: Lahore Arfa Software Technology Park */}
            <article className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary-container text-on-primary px-4 py-1.5 rounded-bl-xl font-label-sm text-label-sm uppercase font-bold flex items-center gap-1.5 shadow-sm">
                <span className="material-symbols-outlined text-sm">stars</span> Flagship AI Campus
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-5/12 flex flex-col gap-3">
                  <div className="w-full h-48 rounded-xl overflow-hidden relative bg-surface-container">
                    <img 
                      className="w-full h-full object-cover" 
                      alt="NexSkill advanced AI training lab inside Arfa Software Technology Park Lahore with rows of modern high performance desktop workstations" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVGTiAu4s6ErcfuA27Ozqrv7QI8uFln83_Dq1XHflx7MOlMlHJ4yOYfGbSywx7TpCuhV1X3llKbBD80i9sq9DtGUDWWcsITtSfynNlTdwoFeaW8y0gwm_lQU5xX_6Dc4V2qqt_s6BIvO4DVychBVdxIGwvfRNzUR0NoobWj140pXaJVNdbKeI28rOymzlbA_2jjNPHzoSNAEgPeC5tfCdkia3RJeWqVYjShwxrwOJ1Aj5UmUHZBTZ5fQ"
                    />
                    <span className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-inverse-surface/85 text-inverse-on-surface text-label-sm font-label-sm">
                      Arfa Tower Level 2
                    </span>
                  </div>
                  {/* Interactive Map Visual */}
                  <div className="w-full h-24 rounded-lg bg-surface-container overflow-hidden relative shadow-inner p-3 flex items-center justify-between border border-outline-variant/30">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-xl">map</span>
                      <div className="text-xs">
                        <span className="font-bold block text-on-surface">Arfa Software Park</span>
                        <span className="text-secondary text-[11px]">Ferozepur Rd, Lahore</span>
                      </div>
                    </div>
                    <a 
                      href="https://maps.app.goo.gl/eScw8ScfL5m1ojsY8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-primary hover:underline flex items-center gap-0.5"
                    >
                      Open <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  </div>
                </div>

                <div className="w-full md:w-7/12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-tertiary-container/15 text-tertiary font-label-sm text-label-sm font-bold">Open Mon - Sun: 10:00 AM - 9:00 PM</span>
                      <span className="text-xs text-secondary font-medium">• Metro Bus Connected</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md font-extrabold text-on-surface">Lahore Arfa Tower Campus</h3>
                    <p className="font-body-sm text-body-sm text-secondary mt-1 flex items-start gap-1">
                      <span className="material-symbols-outlined text-base text-primary shrink-0 mt-0.5">location_on</span>
                      Arfa Tower, 2nd Floor, Ferozepur Road, Nishtar Town, Lahore
                    </p>

                    {/* Amenities Badges */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-sm text-primary">memory</span> High-end GPU AI Labs
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-sm text-tertiary">wifi</span> 1Gbps Dedicated Fiber
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-sm text-secondary">local_parking</span> Reserved Parking
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-sm text-on-surface">directions_bus</span> Metro Access
                      </span>
                    </div>

                    <div className="mt-4 p-3 rounded-lg bg-surface-container-low">
                      <div className="font-label-sm text-label-sm uppercase font-bold text-secondary mb-1">Key Programs Taught Here:</div>
                      <div className="font-body-sm text-body-sm text-on-surface font-medium">Full Stack Artificial Intelligence, Advanced Cyber Security, Software Engineering with AI, Data Science.</div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-surface-container-high">
                    <div className="text-body-sm text-on-surface font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-base text-primary">phone</span>
                      +92 309 666 3330
                    </div>
                    <div className="flex items-center gap-2">
                      <a 
                        className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors inline-flex items-center gap-1" 
                        href="https://maps.app.goo.gl/eScw8ScfL5m1ojsY8" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <span className="material-symbols-outlined text-sm">directions</span> Get Directions
                      </a>
                      <a 
                        className="px-3.5 py-1.5 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm hover:opacity-90 transition-opacity" 
                        href="#booking-form"
                        onClick={() => setFormData(prev => ({ ...prev, campus: 'lahore-arfa' }))}
                      >
                        Schedule Tour
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Campus 2: Lahore New Garden Town Campus */}
            <article className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-5/12 flex flex-col gap-3">
                  <div className="w-full h-48 rounded-xl overflow-hidden relative bg-surface-container">
                    <img 
                      className="w-full h-full object-cover" 
                      alt="Modern creative tech design studio and UI UX classroom at NexSkill Garden Town Lahore with students collaborating" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCdMADKiCSC-zF_PHMDdP_lzXv5odHjicf2-CQMea6WtZIjjkMK7VtoFB5LBHt4vmjNkbxfsAq88GEn2bFgNqmMznvqvKxfbcI_ziR3PBMlKD_nffCvKpQ52KJO7cuzai05AqAtt1E8fff-BpSlh_xhe6jCJnpSYVUUopVjgElQmWAgurA_IFqgD7z32Fn1pRszgZaNe9ielkAlVpyRW9PaMY3HROw5AhWpGFc6jmy-qzCxZPQTNi84g"
                    />
                    <span className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-inverse-surface/85 text-inverse-on-surface text-label-sm font-label-sm">
                      14 Baber Block
                    </span>
                  </div>
                  <div className="w-full h-24 rounded-lg bg-surface-container overflow-hidden relative shadow-inner p-3 flex items-center justify-between border border-outline-variant/30">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-xl">map</span>
                      <div className="text-xs">
                        <span className="font-bold block text-on-surface">Garden Town Branch</span>
                        <span className="text-secondary text-[11px]">Near Barkat Market</span>
                      </div>
                    </div>
                    <a 
                      href="https://maps.app.goo.gl/RJpXJkd3ziQbBwe5A" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-primary hover:underline flex items-center gap-0.5"
                    >
                      Open <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  </div>
                </div>

                <div className="w-full md:w-7/12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold">Open Mon - Sun: 10:00 AM - 9:00 PM</span>
                      <span className="text-xs text-secondary font-medium">• Barkat Market Hub</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md font-extrabold text-on-surface">Lahore New Garden Town Campus</h3>
                    <p className="font-body-sm text-body-sm text-secondary mt-1 flex items-start gap-1">
                      <span className="material-symbols-outlined text-base text-primary shrink-0 mt-0.5">location_on</span>
                      14 Baber Block, New Garden Town (Near Barkat Market), Lahore
                    </p>

                    {/* Amenities Badges */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-sm text-primary">palette</span> Design Studio Labs
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-sm text-tertiary">co_present</span> Executive Classrooms
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-sm text-secondary">wifi</span> Free High-Speed WiFi
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-sm text-on-surface">local_parking</span> Secure Parking
                      </span>
                    </div>

                    <div className="mt-4 p-3 rounded-lg bg-surface-container-low">
                      <div className="font-label-sm text-label-sm uppercase font-bold text-secondary mb-1">Key Programs Taught Here:</div>
                      <div className="font-body-sm text-body-sm text-on-surface font-medium">UI/UX Design with AI, Digital Growth Marketing, Web Development Bootcamp, MERN Stack.</div>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-surface-container-high">
                    <div className="text-body-sm text-on-surface font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-base text-primary">phone</span>
                      +92 309 666 3331
                    </div>
                    <div className="flex items-center gap-2">
                      <a 
                        className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors inline-flex items-center gap-1" 
                        href="https://maps.app.goo.gl/RJpXJkd3ziQbBwe5A" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <span className="material-symbols-outlined text-sm">directions</span> Get Directions
                      </a>
                      <a 
                        className="px-3.5 py-1.5 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm hover:opacity-90 transition-opacity" 
                        href="#booking-form"
                        onClick={() => setFormData(prev => ({ ...prev, campus: 'lahore-garden-town' }))}
                      >
                        Schedule Tour
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Two Column Sub-Grid: Karachi & Mian Channu */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Campus 3: Karachi Office */}
              <article className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="w-full h-40 rounded-xl overflow-hidden relative bg-surface-container mb-4">
                    <img 
                      className="w-full h-full object-cover" 
                      alt="IT seminar room at PARSA Tower Shahrah-e-Faisal Karachi for NexSkill technology lectures" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGHHUZwpd2QNFviSnXBFIfqiZRbMa2CWI4LGfvRn0xnpGpm3FVR9T_hwUAgDwMyT4lBD0fJoWCx7FCN_FgtWbkWdtRiPFvUDNi16YPaVe5wHBphAbP-6bfvPspSE2Rvywswac5GKPzw6-ZvlrUpMKHTJhHLEWwIZsN6BPbO8sNe4KDjaeWrudhY9U87err0CUCm6zuBVdBVVABeZUZ2OslM_-p4j5_9epRzG7Uqm9nygC5E9EfCEUyHw"
                    />
                    <span className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded bg-inverse-surface/85 text-inverse-on-surface text-label-sm font-label-sm">
                      City of Lights Branch
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold">10:00 AM - 9:00 PM</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Karachi Campus (Main Hub)</h3>
                  <p className="font-body-sm text-body-sm text-secondary mt-1 flex items-start gap-1">
                    <span className="material-symbols-outlined text-base text-primary shrink-0">location_on</span>
                    Office #608, PARSA Tower, Main Shahrah-e-Faisal, Karachi
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-xs font-semibold">Advanced IT Labs</span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-xs font-semibold">Counseling Suite</span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-xs font-semibold">Fast Fiber WiFi</span>
                  </div>
                  <div className="mt-4 p-2.5 rounded-lg bg-surface-container-low font-body-sm text-body-sm">
                    <span className="font-semibold text-on-surface">Popular:</span> Full Stack Web Dev, Cybersecurity, Cloud Computing &amp; AI Agents.
                  </div>
                </div>
                <div className="pt-4 mt-4 flex items-center justify-between border-t border-surface-container-high">
                  <span className="text-body-sm font-semibold text-on-surface">+92 300 8565056</span>
                  <a 
                    className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors inline-flex items-center gap-1" 
                    href="https://maps.app.goo.gl/KW6Pj3u2dBxDFXSm8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-sm">directions</span> Map
                  </a>
                </div>
              </article>

              {/* Campus 4: Mian Channu Campus */}
              <article className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="w-full h-40 rounded-xl overflow-hidden relative bg-surface-container mb-4">
                    <img 
                      className="w-full h-full object-cover" 
                      alt="Vocational IT and software training facility at NexSkill Mian Channu campus" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuU7ITeAQrpurepO0yN5PhJF6fcAvWsp4vCw_uYecianB1BYFhxtZrODnXGD_9kSczXFA8u4EjQ03XDk0v5BRIaWilbMW_SLMvNyQMmgysbnH5HW8AV94d0X9p-syeH3BKWozrdAXW6C8N5eqT_ge6h7yhTmUV6C5goGfqh-nlnHJNmixDsGx8oeQY7NPzNf4JWRiP9m6Rni37PZMN7rbjcMtNDbA2ke3R-yn3LvWrb0M9f07ae2LKjQ"
                    />
                    <span className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded bg-inverse-surface/85 text-inverse-on-surface text-label-sm font-label-sm">
                      Punjab Industrial Corridor
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-bold">10:00 AM - 9:00 PM</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">Mian Channu Campus</h3>
                  <p className="font-body-sm text-body-sm text-secondary mt-1 flex items-start gap-1">
                    <span className="material-symbols-outlined text-base text-primary shrink-0">location_on</span>
                    Sanaullah Educational Complex, Bodla Memorial Hospital Rd, Mian Channu
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-xs font-semibold">Tech Innovation Hub</span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-xs font-semibold">Training Labs</span>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-xs font-semibold">Free High-Speed WiFi</span>
                  </div>
                  <div className="mt-4 p-2.5 rounded-lg bg-surface-container-low font-body-sm text-body-sm">
                    <span className="font-semibold text-on-surface">Popular:</span> Freelancing Mastery, E-commerce, Graphics Design, Mobile App Dev.
                  </div>
                </div>
                <div className="pt-4 mt-4 flex items-center justify-between border-t border-surface-container-high">
                  <span className="text-body-sm font-semibold text-on-surface">+92 308 1186660</span>
                  <a 
                    className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors inline-flex items-center gap-1" 
                    href="https://maps.app.goo.gl/WoYXUPDoryQjvXN27" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-sm">directions</span> Map
                  </a>
                </div>
              </article>
            </div>
          </div>

          {/* Right Column: Interactive Admission & Inquiry Booking Form */}
          <aside className="lg:col-span-4 sticky top-28 bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-md" id="booking-form">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-lg">edit_calendar</span>
                </div>
                <div>
                  <span className="font-label-md text-label-md font-bold text-on-surface block leading-tight">Admissions 2026</span>
                  <span className="font-label-sm text-label-sm text-tertiary font-semibold">Free Counseling Session</span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">Seats Limited</span>
            </div>

            <h3 className="font-headline-sm text-headline-sm font-extrabold text-on-surface">Book Campus Visit &amp; Interview</h3>
            <p className="font-body-sm text-body-sm text-secondary mt-1 mb-6">
              Meet with a certified career counselor, test our lab setups in person, and learn about PSDF &amp; NAVTTC fee waivers.
            </p>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">First Name *</label>
                  <input 
                    className="w-full px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container outline-none transition-all" 
                    placeholder="e.g. Ali" 
                    required 
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">Last Name *</label>
                  <input 
                    className="w-full px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container outline-none transition-all" 
                    placeholder="e.g. Khan" 
                    required 
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">WhatsApp / Phone Number *</label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 font-label-md text-label-md text-secondary">+92</span>
                  <input 
                    className="w-full pl-12 pr-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container outline-none transition-all" 
                    pattern="[0-9]{10}" 
                    placeholder="3096663330" 
                    required 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <span className="text-xs text-secondary mt-1 block">We'll text your campus visitor gate pass to WhatsApp</span>
              </div>

              <div>
                <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">Email Address *</label>
                <input 
                  className="w-full px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container outline-none transition-all" 
                  placeholder="you@domain.com" 
                  required 
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">Select Preferred Campus *</label>
                <select 
                  className="w-full px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container outline-none transition-all cursor-pointer" 
                  required
                  value={formData.campus}
                  onChange={(e) => setFormData({ ...formData, campus: e.target.value })}
                >
                  <option value="">-- Choose Campus Location --</option>
                  <option value="lahore-arfa">Lahore - Arfa Software Technology Park</option>
                  <option value="lahore-garden-town">Lahore - 14 Baber Block, New Garden Town</option>
                  <option value="karachi">Karachi - PARSA Tower, Shahrah-e-Faisal</option>
                  <option value="mian-channu">Mian Channu - Sanaullah Complex</option>
                  <option value="online">Online / Interactive Live Learning</option>
                </select>
              </div>

              <div>
                <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">Target Tech Program *</label>
                <select 
                  className="w-full px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container outline-none transition-all cursor-pointer" 
                  required
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                >
                  <option value="">-- Select Course / Micro-Degree --</option>
                  <option value="ai">Full Stack Artificial Intelligence (Flagship)</option>
                  <option value="software-engineering">Software Engineering with AI</option>
                  <option value="cyber-security">Advance Cyber Security &amp; Ethical Hacking</option>
                  <option value="web-dev">Web Development with AI (Full Stack)</option>
                  <option value="ui-ux">Advance UI/UX Designing with AI</option>
                  <option value="digital-marketing">Digital Growth Marketing with AI</option>
                  <option value="flutter">Flutter &amp; Dart Mobile App Development</option>
                  <option value="cloud">Cloud Computing &amp; DevOps Engineering</option>
                </select>
              </div>

              <div>
                <label className="block font-label-sm text-label-sm text-on-surface font-semibold mb-1">Preferred Time of Visit</label>
                <select 
                  className="w-full px-3 py-2 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container outline-none transition-all cursor-pointer"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                >
                  <option value="morning">Morning (10:00 AM - 1:00 PM)</option>
                  <option value="afternoon">Afternoon (2:00 PM - 5:00 PM)</option>
                  <option value="evening">Evening (5:00 PM - 8:30 PM)</option>
                  <option value="weekend">Saturday / Sunday Special Walk-In</option>
                </select>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input 
                  className="mt-1 rounded accent-primary" 
                  id="scholarship-check" 
                  type="checkbox"
                  checked={formData.scholarship}
                  onChange={(e) => setFormData({ ...formData, scholarship: e.target.checked })}
                />
                <label className="font-body-sm text-body-sm text-secondary cursor-pointer leading-tight" htmlFor="scholarship-check">
                  Evaluate me for Government &amp; NAVTTC / PSDF Sponsored Need-Based Grants.
                </label>
              </div>

              <button 
                className="w-full py-3.5 px-4 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md font-bold hover:bg-primary shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer" 
                type="submit"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                Confirm Campus Visit &amp; Counseling
              </button>

              {submitted && (
                <div className="p-4 rounded-xl bg-tertiary-container text-on-tertiary mt-2">
                  <div className="font-bold flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-base">check_circle</span>
                    Visit Request Registered!
                  </div>
                  <p className="text-xs text-on-tertiary/90 mt-1">
                    Your inquiry has been routed to our Senior Counselor. You will receive an SMS and WhatsApp confirmation pass within 15 minutes at +92 {formData.phone || '3096663330'}.
                  </p>
                </div>
              )}
            </form>

            <div className="mt-6 pt-4 bg-surface-container-low p-4 rounded-xl flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary text-3xl">verified_user</span>
              <div>
                <div className="font-label-md text-label-md font-bold text-on-surface">Zero Obligation Counseling</div>
                <p className="font-body-sm text-body-sm text-secondary leading-snug">
                  Every prospective applicant receives a 30-minute free diagnostic roadmap session.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Interactive Campus Lab Features Grid */}
      <section className="w-full bg-surface-container-low py-16">
        <div className="max-w-7xl mx-auto px-margin">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-label-sm text-label-sm uppercase font-bold text-primary tracking-wider">World-Class Infrastructure</span>
            <h2 className="font-headline-lg text-headline-lg font-extrabold text-on-surface mt-1">What to Expect When You Step In</h2>
            <p className="font-body-md text-body-md text-secondary mt-2">
              NexSkill centers are crafted to replicate silicon-valley tech enterprise labs, avoiding generic classrooms in favor of sprint-focused product bays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">memory</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">Dedicated GPU Rigs</h4>
                <p className="font-body-sm text-body-sm text-secondary mt-2 leading-relaxed">
                  Run large language models, agentic workflows, and 3D simulations locally without paying cloud compute fees during your study terms.
                </p>
              </div>
              <span className="font-label-sm text-label-sm font-bold text-primary mt-4 flex items-center gap-1">Available at all hubs <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-tertiary/10 text-tertiary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">router</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">Zero-Latency Fiber</h4>
                <p className="font-body-sm text-body-sm text-secondary mt-2 leading-relaxed">
                  Dual-redundant optical internet feeds ensure zero lag while pushing code repositories, running live deployments, or streaming hackathons.
                </p>
              </div>
              <span className="font-label-sm text-label-sm font-bold text-tertiary mt-4 flex items-center gap-1">Dual ISP Backup <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container text-on-surface flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">person_pin</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">NexTalent Suite</h4>
                <p className="font-body-sm text-body-sm text-secondary mt-2 leading-relaxed">
                  Quiet interview booths equipped with 4K cameras and studio lighting for conducting direct screening interviews with overseas employers.
                </p>
              </div>
              <span className="font-label-sm text-label-sm font-bold text-on-surface mt-4 flex items-center gap-1">Job Placement Cell <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
            </div>

            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-container text-on-surface flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-2xl">local_cafe</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm font-bold text-on-surface">Student Lounges</h4>
                <p className="font-body-sm text-body-sm text-secondary mt-2 leading-relaxed">
                  Breakout collaboration zones, free coffee stations, and peer discussion lounges to brainstorm startup ideas with fellow batchmates.
                </p>
              </div>
              <span className="font-label-sm text-label-sm font-bold text-on-surface mt-4 flex items-center gap-1">Community Driven <span className="material-symbols-outlined text-sm">arrow_forward</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="w-full bg-gradient-to-r from-inverse-surface to-inverse-surface/95 text-inverse-on-surface py-12">
        <div className="max-w-7xl mx-auto px-margin flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-headline-md text-headline-md font-bold">Ready to Start Your Career at NexSkill?</h3>
            <p className="font-body-md text-body-md text-inverse-on-surface/80 mt-1">Admissions are open for the new quarter. Apply online or visit our closest branch today.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenEnroll()}
              className="px-6 py-3 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md font-bold hover:bg-primary shadow-lg transition-all"
            >
              Apply Online Now
            </button>
            <button
              onClick={() => onNavigate('courses')}
              className="px-5 py-3 rounded-lg bg-surface-container-lowest/10 text-inverse-on-surface font-label-md text-label-md hover:bg-surface-container-lowest/20 transition-all"
            >
              Browse All Courses
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
