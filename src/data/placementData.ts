export interface Testimonial {
  name: string;
  role: string;
  company: string;
  program: string;
  campus: string;
  salary: string;
  hike: string;
  tag: string;
  quote: string;
  image: string;
  rating: number;
}

export interface JobEvent {
  id: string;
  month: string;
  day: string;
  locationTag: string;
  title: string;
  description: string;
  time: string;
  statusText: string;
  statusType: 'success' | 'warning' | 'primary';
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Hamza Tariq',
    role: 'Full Stack AI Engineer',
    company: 'PureLogics',
    program: 'Full Stack Artificial Intelligence',
    campus: 'Arfa Tower, Lahore',
    salary: 'PKR 140,000/mo',
    hike: '+180% Hike',
    tag: 'Non-Tech to AI Dev',
    quote: '"I had a traditional commerce background with no coding knowledge. NexSkill\'s AI Bootcamp gave me structured GitHub projects and direct mock interview prep with tech leads. Within 3 weeks of graduation, I signed my offer letter."',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD09ZHMer08dhC1v39YTWpfjsIRQyTLCwXnVLZZrpm5e4MWrcPAbu0MutidwqNGu1V1qijA2z3CLxKydjJ251L4CvBmJGGimshNrRG2amFzXGJR3A2Cwrti8jcdQOPfMjJAhwiX0xYUZ3_4DwGoKqF9JG-SQFARLkqhEcB2bLKypP-Eb7VcbO-0c5h6L8kidGccKLR5CKJw6xSuOJI02OdFCo1mIXel27rAVs9VW59h0k_fmKpFEyT1zQ',
    rating: 5.0
  },
  {
    name: 'Ayesha Farooq',
    role: 'Senior Product Designer',
    company: 'Neksogix',
    program: 'Advance UI/UX Designing with AI',
    campus: 'Garden Town, Lahore',
    salary: 'Upwork Top-Rated: $2,400/mo',
    hike: '+140% Hike',
    tag: 'Designer to UI/UX Lead',
    quote: '"Moving from flat print design to Figma design systems and AI-assisted prototyping seemed intimidating. NexTalent not only upgraded my design vocabulary but introduced me to hiring partners directly on Job Fest day."',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD46jcgcOIu9fzUCdJJftspujKHFljfKR6LhjojClAG_5DRoSJgBkjQ8yjr_4a4QEecxTFS_HZeM0_g-9m79Zac1w6x65ou_WLLM0cokfYMiC6Oqm6Ip3yH1aru0syaRwloaCA18Za6MtPg4swdl3ps2_rp9DpfX8XLUYdX1owf0L7Wd-4N7c6DDNnLxultVxblQvovSRxzXwoHq13vQAQRoZlXckY_dvslg50QwrPjme66DMWr29y-_g',
    rating: 5.0
  },
  {
    name: 'Zain Bilal',
    role: 'InfoSec Analyst',
    company: 'HBL Fintech Division',
    program: 'Advance Cyber Security',
    campus: 'Karachi Executive Hub',
    salary: 'PKR 175,000/mo',
    hike: 'Fast-Tracked',
    tag: 'Fresh Grad to Cyber Sec',
    quote: '"The hands-on penetration testing and live lab scenarios at NexSkill were exactly what the technical interview panel tested me on. The credential verification by NAVTTC gave my resume instant institutional authority."',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA33kKrvHnh-sSzb7tWr_-cxh_eBgX2gsPk22UNJUEadvVA53XtleMSWLRV9R2OAczmJTx0GVeYu3YB3CHLFs1opWMgg8ZrFkrBl55-IstsTDHKUKkqf37a3ZAZ5vS9yiYe19rww2AzDa2XvKhAI_HR5CSaNvh5MG6PEvB4ebY0aSZkvRwmpALYHP-DHaD5MYqV7JMKw91ubl6lpdGZktNMqBfqoF4zMqMkeZDiE1759SFUg-7Aw1NXmg',
    rating: 5.0
  }
];

export const JOB_EVENTS: JobEvent[] = [
  {
    id: 'event-1',
    month: 'MAR',
    day: '28',
    locationTag: 'Arfa Tower Lahore',
    title: 'LIVE Job Ready Tech Fest 2026',
    description: 'Over 45+ software houses conducting walk-in assessments for Full Stack AI, MERN, and Cyber Security.',
    time: '10:00 AM - 5:00 PM',
    statusText: '120 Seats Left',
    statusType: 'warning'
  },
  {
    id: 'event-2',
    month: 'APR',
    day: '14',
    locationTag: 'Karachi Executive Hub',
    title: 'Fintech & Cloud Systems Hiring Drive',
    description: 'Exclusive panel with commercial banks and venture-backed SaaS startups hiring Cloud & SQA talent.',
    time: '11:00 AM - 4:00 PM',
    statusText: 'Registration Open',
    statusType: 'primary'
  },
  {
    id: 'event-3',
    month: 'MAY',
    day: '05',
    locationTag: 'Online / Virtual',
    title: 'Global Remote Freelance & Contract Summit',
    description: 'Connecting remote developers with overseas agencies in the UK, UAE, and North America.',
    time: '4:00 PM - 8:00 PM',
    statusText: 'Free for NexSkill Alumni',
    statusType: 'success'
  }
];

export interface HiringPartner {
  name: string;
  category: string;
  icon: string;
  badgeColor?: string;
}

export const HIRING_PARTNERS: HiringPartner[] = [
  { name: 'HBL', category: 'Fintech Division', icon: 'account_balance', badgeColor: 'text-primary' },
  { name: 'PITB', category: 'Govt of Punjab', icon: 'hub', badgeColor: 'text-tertiary' },
  { name: 'LUMS', category: 'Research & Tech', icon: 'school', badgeColor: 'text-primary-container' },
  { name: 'PureLogics', category: 'Enterprise Web', icon: 'code', badgeColor: 'text-secondary' },
  { name: 'Prog. Force', category: 'AI Systems', icon: 'terminal', badgeColor: 'text-primary' },
  { name: 'Game Storm', category: 'Gaming Studios', icon: 'sports_esports', badgeColor: 'text-tertiary' },
  { name: 'OziPub', category: 'Mobile Publishing', icon: 'rocket_launch', badgeColor: 'text-on-surface' },
  { name: 'Pentabit Labs', category: 'Cloud Engineering', icon: 'memory', badgeColor: 'text-primary-container' },
  { name: 'Neksogix', category: 'SaaS Platforms', icon: 'domain', badgeColor: 'text-tertiary' },
  { name: 'Alkhidmat', category: 'Digital Welfare', icon: 'volunteer_activism', badgeColor: 'text-primary' },
  { name: 'SSUET', category: 'Engineering Uni', icon: 'school', badgeColor: 'text-secondary' },
  { name: 'UCP & UMT', category: 'Academia MoUs', icon: 'local_library', badgeColor: 'text-primary' }
];

export const PARTNERS = HIRING_PARTNERS.map(p => ({
  name: p.name,
  sub: p.category,
  icon: p.icon
}));

