export interface Course {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai' | 'dev' | 'security' | 'design' | 'marketing' | 'cloud';
  duration: '2-months' | '4-months' | '6-months';
  durationLabel: string;
  hoursPerWeek: string;
  monthlyFee: number;
  totalFee: number;
  rating: number;
  reviewsCount: number;
  badge: string;
  badgeType: 'popular' | 'high-placement' | 'defense' | 'portfolio' | 'revenue' | 'mobile' | 'creative' | 'cloud';
  accreditation: string;
  modes: string[];
  image: string;
  highlights: string[];
  nextCohort: string;
  placementHighlight: string;
  tools: string[];
  curriculum: {
    week: string;
    title: string;
    topics: string[];
  }[];
  careerRoles: string[];
}

export const COURSES: Course[] = [
  {
    id: 'full-stack-ai',
    title: 'Full Stack Artificial Intelligence',
    subtitle: 'Master Large Language Models (LLMs), Agentic AI architectures, Deep Learning, PyTorch, LangChain, and production-grade model deployment.',
    category: 'ai',
    duration: '6-months',
    durationLabel: '6 Months (Intensive)',
    hoursPerWeek: '12 Hrs/Wk',
    monthlyFee: 14500,
    totalFee: 87000,
    rating: 4.9,
    reviewsCount: 840,
    badge: '⭐ Most Popular',
    badgeType: 'popular',
    accreditation: 'NAVTTC & TEVTA Aligned',
    modes: ['arfa', 'garden', 'online'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCin3ONBSnq8ODDn3sEJlAIqUd_CceJBiXrFiJIqJmpuanDBAEiw1Id3D3YDZRenoETBGFh25bIlxjG5jwj46yNkJnp6GcNbFHaUjbq8VEToRc8ETMKyqNMpWc4ERXmCCFt7-EjQ9JZpgAvsjF5EP-Hz8IVkJ44eF7_r7KVKv3uggOQnUtqy3qutPNyoT_OYZJFTRdjqip3cqsxoHRxA_Pm8gQ9dXVklDke9keHJHDmelYhTD8ns68GCA',
    highlights: [
      'Agentic AI, RAG & LangChain Multi-Agents',
      'Computer Vision & Advanced Deep Learning',
      'FastAPI + AWS Cloud AI Inference Deployment'
    ],
    nextCohort: '15th March 2026',
    placementHighlight: '85% Placement Record',
    tools: ['Python 3.12', 'PyTorch', 'LangChain', 'LlamaIndex', 'Hugging Face', 'FastAPI', 'Docker', 'AWS Bedrock'],
    curriculum: [
      {
        week: 'Weeks 1-4',
        title: 'Modern Python for AI & Numerical Mathematics',
        topics: ['Advanced Python OOP', 'Vector math with NumPy', 'Pandas data engineering', 'Data visualization with Matplotlib & Seaborn']
      },
      {
        week: 'Weeks 5-10',
        title: 'Deep Learning & Neural Architectures',
        topics: ['Neural network math & backprop', 'PyTorch fundamentals', 'CNNs for computer vision', 'RNNs & LSTMs sequence modeling']
      },
      {
        week: 'Weeks 11-16',
        title: 'Transformers, LLMs & Retrieval Augmented Gen (RAG)',
        topics: ['Self-attention & Transformer architecture', 'Vector databases (Pinecone, ChromaDB)', 'Advanced chunking & semantic search', 'Hybrid retrieval systems']
      },
      {
        week: 'Weeks 17-24',
        title: 'Agentic Workflows, Evaluation & Production Ops',
        topics: ['LangGraph & Multi-agent orchestration', 'Fine-tuning with LoRA / QLoRA', 'Model quantizations & ONNX runtime', 'Deploying on AWS GPU cluster with FastAPI']
      }
    ],
    careerRoles: ['AI Engineer', 'Machine Learning Engineer', 'LLM Solutions Architect', 'Data Scientist']
  },
  {
    id: 'software-engineering-ai',
    title: 'Software Engineering with AI',
    subtitle: 'Complete full stack MERN stack mastery enhanced with Copilot/Claude CLI, microservices, containerization, and modern CI/CD automation pipelines.',
    category: 'dev',
    duration: '6-months',
    durationLabel: '6 Months (300+ Hours)',
    hoursPerWeek: '14 Hrs/Wk',
    monthlyFee: 12000,
    totalFee: 72000,
    rating: 4.9,
    reviewsCount: 1200,
    badge: '💼 High Placement',
    badgeType: 'high-placement',
    accreditation: 'PSDF Certified',
    modes: ['arfa', 'garden', 'karachi', 'online'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8Bb0vtWsnYK1WXHqXjcZwgokR5eWYn5aV4CIf7AtyOXeuDUL6440Lq5QvQ_0WRiRTSeO50BpGGBUzYMDbltakToJlsxap_hol9r6LoYewKNfKHRgADO8siHBA_mXruOTIsMrjan_m_mSF3rEK74MAPCeOI8qFUMobvYMAWBYmWkfA_Ly35C8NttwBtZspRSGv0OkV4nKR6wL2PjJvznACZcoJpCUGgxejvbEvze4dKVZsHjU0DyeBbA',
    highlights: [
      'Next.js 15, TypeScript, React Server Components',
      'Node.js, Express, Nest.js & PostgreSQL ORM',
      'AI Pair Programming & Automated Unit Testing'
    ],
    nextCohort: '1st of Next Month',
    placementHighlight: 'Avg Starting: PKR 95,000 - 160,000',
    tools: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'Docker'],
    curriculum: [
      {
        week: 'Weeks 1-4',
        title: 'Modern TypeScript & Frontend Engineering',
        topics: ['Strict TypeScript', 'React 19 Hooks & State', 'Tailwind CSS system architecture', 'Component testing with Vitest']
      },
      {
        week: 'Weeks 5-10',
        title: 'Next.js 15 Full Stack Architecture',
        topics: ['App Router & Server Actions', 'SSR, SSG, ISR caching strategies', 'Authentication with Auth.js / Clerk', 'State management with Zustand']
      },
      {
        week: 'Weeks 11-16',
        title: 'Backend Systems, Databases & Microservices',
        topics: ['Node.js & Express / Nest.js', 'PostgreSQL schemas & indexing', 'Prisma & Drizzle ORMs', 'Redis caching & Redis queues']
      },
      {
        week: 'Weeks 17-24',
        title: 'Cloud Deployment, DevOps & AI Coding CLI',
        topics: ['Dockerizing full-stack apps', 'GitHub Actions CI/CD pipeline', 'Deploying to AWS ECS / Vercel', 'AI pair programming CLI workflows']
      }
    ],
    careerRoles: ['Full Stack Developer', 'MERN Stack Engineer', 'Next.js Frontend Architect', 'Backend API Specialist']
  },
  {
    id: 'cyber-security',
    title: 'Advanced Cyber Security & Pen Testing',
    subtitle: 'Hands-on red team exercises, Bug Bounty methodologies, OWASP Top 10 vulnerabilities, Kali Linux exploitation, and enterprise threat hunting.',
    category: 'security',
    duration: '4-months',
    durationLabel: '4 Months (Hands-on)',
    hoursPerWeek: '10 Hrs/Wk',
    monthlyFee: 13500,
    totalFee: 54000,
    rating: 4.8,
    reviewsCount: 620,
    badge: '🛡️ Industry Defense',
    badgeType: 'defense',
    accreditation: 'CEH & OSCP Pathway',
    modes: ['arfa', 'garden', 'online'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA36ENgf6lZZyn90kezFcp5lVzWEniTyydKwBA01b_QeffPbS1ccoTVhaAb76r3PKR4_b15KwjVSbGq_DwdVS9YxDW3gBkb_NrSHot8eNhtCrMFaHFzOMuBIp9TVlk3x5bIpHMRiyZtNehJ5Vna71-rWCJPvmIGufqd2-BXKXXegFVrGFZBVxIYSE2u2tG4KJfYERo1wa1vo2cCToSblt4-cfUiDrMzbMne2gwin9xQ8iRzL6zhjVPhzA',
    highlights: [
      'Web Application Pentesting & Bug Bounty',
      'Active Directory & Network Infrastructure Defense',
      'SOC Analyst Tools: Splunk, Wireshark, Metasploit'
    ],
    nextCohort: '15th March 2026',
    placementHighlight: 'CEH Ready + NAVTTC Diploma',
    tools: ['Kali Linux', 'Burp Suite Pro', 'Metasploit', 'Wireshark', 'Nmap', 'Splunk', 'BloodHound', 'OWASP ZAP'],
    curriculum: [
      {
        week: 'Weeks 1-4',
        title: 'Networking Foundations & Kali Linux Setup',
        topics: ['TCP/IP, subnetting & packet capture', 'Linux shell scripting & permissions', 'Reconnaissance & OSINT techniques', 'Active & passive scanning']
      },
      {
        week: 'Weeks 5-8',
        title: 'Web Application Pentesting (OWASP Top 10)',
        topics: ['SQL Injection, XSS, CSRF exploitation', 'Authentication bypass & JWT attacks', 'Burp Suite Pro automation', 'Bug bounty hunting on HackerOne']
      },
      {
        week: 'Weeks 9-12',
        title: 'Network Attacks & Active Directory Exploitation',
        topics: ['Privilege escalation (Windows & Linux)', 'Active Directory penetration testing', 'Pass-the-hash & Kerberoasting', 'Wireless hacking & defense']
      },
      {
        week: 'Weeks 13-16',
        title: 'SOC Operations, Blue Team Defense & CTF Labs',
        topics: ['SIEM monitoring with Splunk', 'Incident response workflows', 'Digital forensics & malware triage', 'Live capture-the-flag (CTF) tournament']
      }
    ],
    careerRoles: ['SOC Analyst', 'Penetration Tester', 'Information Security Officer', 'Bug Bounty Hunter']
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Designing with AI & Figma',
    subtitle: 'Comprehensive product design track covering design systems, micro-interactions, Figma variables, generative AI user testing, and portfolio creation.',
    category: 'design',
    duration: '4-months',
    durationLabel: '4 Months (8 Hrs/Wk)',
    hoursPerWeek: '8 Hrs/Wk',
    monthlyFee: 11500,
    totalFee: 46000,
    rating: 4.9,
    reviewsCount: 950,
    badge: '🎨 Portfolio First',
    badgeType: 'portfolio',
    accreditation: 'TEVTA Recognized',
    modes: ['arfa', 'garden', 'karachi', 'online'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAf8Fq_4pnLd9yInOGqOeHG2sTBTDfo3zwOtaeanZQ9HVlQd2wRAR5eV_NvjSfjKwH4hAAoruxohP-ePQZcbA7q0ej-yY4S50jpvCDBDSzvV28ug5j9asZzI4iw1bF_8pOG8YUoiDDPARrXGyCElFkAku2oehCIZCGf6i0jNkRwxiOIitjrMYdYx9PBxWYXljrT5FNhztcDKUc7qm2CWuvLuouzVApsQD4VGSUrr9PjfMP3bru1HcqbEQ',
    highlights: [
      'Figma Variables, Component Tokens & Auto-Layout',
      'UX Research, Journey Mapping & Usability Tests',
      'Midjourney & Claude for Rapid Prototyping'
    ],
    nextCohort: '1st of Next Month',
    placementHighlight: '5 Production Case Studies for Dribbble',
    tools: ['Figma', 'Adobe Photoshop', 'Illustrator', 'FigJam', 'Midjourney v6', 'Claude Sonnet', 'Framer', 'Protopie'],
    curriculum: [
      {
        week: 'Weeks 1-4',
        title: 'Design Foundations & Visual Hierarchy',
        topics: ['Color theory & optical contrast', 'Typography scales & baseline grids', 'Information architecture & wireframing', 'Gestalt principles in UI']
      },
      {
        week: 'Weeks 5-8',
        title: 'Advanced Figma Mastery & Design Systems',
        topics: ['Auto-layout 5.0 & smart components', 'Design tokens & multi-brand variables', 'Interactive component prototyping', 'Developer handoff specs']
      },
      {
        week: 'Weeks 9-12',
        title: 'User Experience (UX) Research & Gen-AI Workflows',
        topics: ['User interviews & heuristic reviews', 'Empathy maps & user persona generation', 'Generative UI ideation with AI', 'Usability testing & heatmap analysis']
      },
      {
        week: 'Weeks 13-16',
        title: 'Portfolio Polishing & Freelance Launch',
        topics: ['Building interactive Framer site', 'Publishing on Behance & Dribbble', 'Client proposal writing on Upwork', 'Mock design challenge interviews']
      }
    ],
    careerRoles: ['UI/UX Designer', 'Product Designer', 'Design System Lead', 'Freelance Interface Specialist']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Growth Marketing & E-Commerce',
    subtitle: 'Performance marketing on Meta and TikTok, Shopify store setup, search engine and AI optimization (AIO), plus high-converting funnels.',
    category: 'marketing',
    duration: '4-months',
    durationLabel: '4 Months (8 Hrs/Wk)',
    hoursPerWeek: '8 Hrs/Wk',
    monthlyFee: 10000,
    totalFee: 40000,
    rating: 4.8,
    reviewsCount: 1400,
    badge: '📈 Revenue Focus',
    badgeType: 'revenue',
    accreditation: 'NAVTTC Approved',
    modes: ['arfa', 'garden', 'mianchannu', 'online'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAg0EEY9wbREtQCFRrb1CiMOlYH78erSGd-F6SyrrZEc5m945ShpcYW3Jtfr77jDnyPZd6aZ-lLUL4RqaLTUZvbZZMorckVvpilo31R0cwLn3kUi2ZQ4zx4NSkFhBleW4Uhu3CpcloUn-lpbcH3jzIzN_567w5tr4K9Fdj3GTkql4MkiBTSE80swHP5hBZyDgvp8zaLa-jbdDvrhXr6ufg0vcITl6Jpa2l-n0Br5MULnz_OW0P1soCc0g',
    highlights: [
      'Meta Ads Manager, Pixel & TikTok ROAS Scaling',
      'Shopify Dropshipping & Local E-Commerce Incubation',
      'SEO, AEO, and AI Content Systems'
    ],
    nextCohort: '1st of Next Month',
    placementHighlight: 'Includes $50 Live Ad Spend Budget',
    tools: ['Meta Ads Manager', 'Google Ads', 'Shopify', 'TikTok Ads', 'SEMrush', 'Google Analytics 4', 'Klaviyo', 'Canva Pro'],
    curriculum: [
      {
        week: 'Weeks 1-4',
        title: 'Shopify Store Architecture & Local E-Commerce',
        topics: ['Winning product research', 'High-converting store setup', 'Payment gateway integrations', 'Order fulfillment & COD logistics in Pakistan']
      },
      {
        week: 'Weeks 5-8',
        title: 'Paid Acquisition: Meta & TikTok Ads Scaling',
        topics: ['Audience targeting & CBO scaling', 'Creative UGC strategies', 'TikTok pixel & catalog sync', 'ROAS calculation & ad fatigue management']
      },
      {
        week: 'Weeks 9-12',
        title: 'Search Engine Optimization & AI Engine Optimization (AEO)',
        topics: ['On-page & technical SEO', 'Content clustering & keyword intent', 'Ranking in Perplexity & SearchGPT', 'Building authority backlinks']
      },
      {
        week: 'Weeks 13-16',
        title: 'Email Automation, Retention & Agency Scaling',
        topics: ['Klaviyo email flows & abandoned cart', 'LTV optimization & bundle offers', 'Pitching clients as an agency owner', 'Contract drafting & monthly retainers']
      }
    ],
    careerRoles: ['Growth Marketer', 'Meta Media Buyer', 'Shopify Store Manager', 'SEO & AEO Specialist']
  },
  {
    id: 'flutter-mobile-app',
    title: 'Advance Flutter & Mobile App with AI',
    subtitle: 'Build high-performance native iOS and Android apps using Flutter, Dart, Riverpod state management, Supabase backends, and on-device AI integration.',
    category: 'dev',
    duration: '4-months',
    durationLabel: '4 Months (10 Hrs/Wk)',
    hoursPerWeek: '10 Hrs/Wk',
    monthlyFee: 12500,
    totalFee: 50000,
    rating: 4.8,
    reviewsCount: 510,
    badge: '📱 iOS & Android',
    badgeType: 'mobile',
    accreditation: 'PSDF Endorsed',
    modes: ['arfa', 'garden', 'online'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe8HYu4dPwP7fztI8dh7bWZlwSwJs6p1Wf45Gde4rnPioYSWV1t7itJsak1sOc_3tpPlwPgxKRSfquGKlUZcOZzXB0svKFe9oXYT8M2qZEFGyh_qovguAbScN1VVnddDZb0333KGDww4bJ70i8CzGLemR06sTkECJYqVomOEdVjVcGDBlO9IKiSXZXz_vyL_3rFS-94V1YCC9Xk2Jl4SsLL6PiNt48k3T6oEdw0L3UEUwUuElVkqdG7g',
    highlights: [
      'Flutter 3.x, Clean Architecture & Riverpod 2.0',
      'Firebase Authentication & Stripe Payment Gateways',
      'Publishing to Google Play Store & Apple App Store'
    ],
    nextCohort: '15th March 2026',
    placementHighlight: '3 Live Apps Published to App Stores',
    tools: ['Flutter 3.x', 'Dart 3', 'Riverpod', 'Supabase', 'Firebase', 'Google Play Console', 'Xcode', 'Postman'],
    curriculum: [
      {
        week: 'Weeks 1-4',
        title: 'Dart 3 Fundamentals & Flutter Widget Tree',
        topics: ['Null safety & asynchronous Dart', 'Core layout widgets & responsive UI', 'Custom animations & gesture detectors', 'Local storage with Hive & Isar']
      },
      {
        week: 'Weeks 5-8',
        title: 'State Management & Clean Architecture',
        topics: ['Riverpod 2.0 state management', 'Repository pattern & dependency injection', 'Offline caching & SQLite sync', 'Error handling & network interceptors']
      },
      {
        week: 'Weeks 9-12',
        title: 'Backend Integration & Cloud AI SDKs',
        topics: ['Firebase Auth, Firestore & Cloud Functions', 'Supabase realtime database', 'Integrating AI models & voice APIs', 'In-app purchases & Stripe checkout']
      },
      {
        week: 'Weeks 13-16',
        title: 'Testing, CI/CD & App Store Release',
        topics: ['Unit, widget, and integration tests', 'Fastlane deployment automation', 'Google Play store policy compliance', 'App Store review guidelines preparation']
      }
    ],
    careerRoles: ['Flutter Developer', 'Mobile Application Architect', 'Cross-Platform App Specialist']
  },
  {
    id: '3d-animation-vfx',
    title: '3D Animation & VFX / Motion Graphics',
    subtitle: 'Industry pipeline in Blender 4, Cinema 4D, After Effects, dynamic simulation, texturing, Unreal Engine cinematics, and viral CGI commercial ads.',
    category: 'design',
    duration: '4-months',
    durationLabel: '4 Months (8 Hrs/Wk)',
    hoursPerWeek: '8 Hrs/Wk',
    monthlyFee: 11000,
    totalFee: 44000,
    rating: 4.7,
    reviewsCount: 380,
    badge: '🎬 CGI & Games',
    badgeType: 'creative',
    accreditation: 'TEVTA Certified',
    modes: ['arfa', 'garden', 'online'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCgVL_wS4-NyxSKa89ezcMhCkxnJkt_nKdgt_nt0Qd8bd8pDo0WYyQsdOLd-KKKQ3NHACBxywxQItARQIql1QRCCtAujF2D3z7VDY9mYReTA4rVPf-3IDF0Jy0skc7rKTk19caLST93euqWZQmitIoQQCsFixR9nJYKU3j7nHxBa5HK6nMiJhQynvcz-IW1sbAN-vTEh8NQZc5pvlu9oFkf5CKRUrx8y3x22GPQTUGPRFAqXS1JscZgQ',
    highlights: [
      'Blender 3D Modeling, Rigging, & Character Rig',
      'After Effects Kinetic Typography & CGI Ads',
      'Real-Time Unreal Engine 5 Environments'
    ],
    nextCohort: '1st of Next Month',
    placementHighlight: 'Showreel Preparation for VFX Studios',
    tools: ['Blender 4.x', 'Cinema 4D', 'After Effects', 'Substance Painter', 'Unreal Engine 5', 'Premiere Pro'],
    curriculum: [
      {
        week: 'Weeks 1-4',
        title: 'Hard Surface Modeling & Texturing in Blender',
        topics: ['Poly modeling workflows', 'Topology & UV unwrapping', 'PBR texturing & procedural shaders', 'Lighting setups for studio renders']
      },
      {
        week: 'Weeks 5-8',
        title: 'Character Rigging & Motion Animation',
        topics: ['Armature rigging & weight painting', 'Inverse kinematics & walk cycles', 'Camera blocking & cinematic pacing', 'Physics simulations (cloth & fluid)']
      },
      {
        week: 'Weeks 9-12',
        title: 'VFX & Social Commercial CGI in After Effects',
        topics: ['3D camera camera tracking', 'Compositing CG elements into real footage', 'Particle effects & motion typography', 'Color grading & sound design']
      },
      {
        week: 'Weeks 13-16',
        title: 'Unreal Engine 5 Cinematics & Showreel Delivery',
        topics: ['Nanite & Lumen global illumination', 'Sequencer cinematics & render queues', 'Assembling a competitive 60-second showreel', 'Client pricing for VFX agencies']
      }
    ],
    careerRoles: ['3D Generalist', 'Motion Graphics Artist', 'VFX Compositor', 'CGI Commercial Director']
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Computing & DevOps Engineering',
    subtitle: 'Infrastructure as Code with Terraform, container orchestration via Kubernetes, AWS cloud architectures, and production GitOps with GitHub Actions.',
    category: 'cloud',
    duration: '6-months',
    durationLabel: '6 Months (12 Hrs/Wk)',
    hoursPerWeek: '12 Hrs/Wk',
    monthlyFee: 14000,
    totalFee: 84000,
    rating: 4.9,
    reviewsCount: 460,
    badge: '☁️ Enterprise Cloud',
    badgeType: 'cloud',
    accreditation: 'AWS & CKA Aligned',
    modes: ['arfa', 'garden', 'online'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXr3L3qbXhUPlEy7LR3IBBjfH-8PvoFJGAxFXsP6RYhPBbSPRHFaku_xCDh3LYQIXSjbtiPUjEfeFOo7pBYgyATUTrISYyFt7BcrOCKBYTlIFezgkTABLJpO6hglEwfhGUNSx5J78YOnGsSamyuZlTeJ51bvfcMV0rJITWGW1A7g6FTzBI0gSNOHJFWWSUWfXXAmhsZZOR0kzin6CIeudOg-jsFCmJvpiebTj4OTKzeB_YMaj1_HLwqw',
    highlights: [
      'AWS Certified Solutions Architect Curriculum',
      'Docker Containers & Kubernetes (K8s) Clusters',
      'Terraform, Prometheus & Grafana Observability'
    ],
    nextCohort: '15th March 2026',
    placementHighlight: 'Certified Kubernetes Administrator Ready',
    tools: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Prometheus', 'Grafana', 'Ansible', 'Linux'],
    curriculum: [
      {
        week: 'Weeks 1-4',
        title: 'Linux Systems Administration & Shell Automation',
        topics: ['Linux kernel internals & systemd', 'Bash scripting & cron automation', 'SSH security & firewall iptables', 'Networking & DNS configuration']
      },
      {
        week: 'Weeks 5-10',
        title: 'AWS Cloud Infrastructure Architecture',
        topics: ['VPC subnetting, NAT gateways & routing', 'EC2 auto-scaling & load balancing (ALB)', 'S3 storage lifecycle policies', 'IAM roles, policies & AWS KMS encryption']
      },
      {
        week: 'Weeks 11-16',
        title: 'Docker & Kubernetes (K8s) Cluster Management',
        topics: ['Multi-stage Docker builds', 'K8s pods, deployments, services & ingress', 'ConfigMaps & Secrets management', 'Persistent volumes & StatefulSets']
      },
      {
        week: 'Weeks 17-24',
        title: 'Terraform IaC, GitOps & Production Observability',
        topics: ['Terraform state management & modules', 'GitHub Actions deployment workflows', 'Prometheus metrics & Grafana dashboards', 'Zero-downtime rolling updates']
      }
    ],
    careerRoles: ['DevOps Engineer', 'Cloud Solutions Architect', 'Site Reliability Engineer (SRE)', 'Platform Engineer']
  }
];
