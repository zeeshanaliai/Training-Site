export interface Campus {
  id: string;
  name: string;
  city: string;
  address: string;
  timing: string;
  phone: string;
  mapUrl: string;
  isFlagship?: boolean;
  highlightTag: string;
  locationNote: string;
  image: string;
  amenities: string[];
  keyPrograms: string[];
}

export const CAMPUSES: Campus[] = [
  {
    id: 'lahore-arfa',
    name: 'Lahore Arfa Tower Campus',
    city: 'Lahore',
    address: 'Arfa Tower, 2nd Floor, Ferozepur Road, Nishtar Town, Lahore',
    timing: 'Mon - Sun: 10:00 AM - 9:00 PM',
    phone: '+92 309 666 3330',
    mapUrl: 'https://maps.app.goo.gl/eScw8ScfL5m1ojsY8',
    isFlagship: true,
    highlightTag: 'Flagship AI Campus',
    locationNote: 'Metro Bus Connected (Chungi Amar Sidhu)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVGTiAu4s6ErcfuA27Ozqrv7QI8uFln83_Dq1XHflx7MOlMlHJ4yOYfGbSywx7TpCuhV1X3llKbBD80i9sq9DtGUDWWcsITtSfynNlTdwoFeaW8y0gwm_lQU5xX_6Dc4V2qqt_s6BIvO4DVychBVdxIGwvfRNzUR0NoobWj140pXaJVNdbKeI28rOymzlbA_2jjNPHzoSNAEgPeC5tfCdkia3RJeWqVYjShwxrwOJ1Aj5UmUHZBTZ5fQ',
    amenities: [
      'High-end GPU AI Labs',
      '1Gbps Dedicated Fiber',
      'Reserved Parking',
      'Metro Access'
    ],
    keyPrograms: [
      'Full Stack Artificial Intelligence',
      'Advanced Cyber Security',
      'Software Engineering with AI',
      'Data Science'
    ]
  },
  {
    id: 'lahore-garden-town',
    name: 'Lahore New Garden Town Campus',
    city: 'Lahore',
    address: '14 Baber Block, New Garden Town (Near Barkat Market), Lahore',
    timing: 'Mon - Sun: 10:00 AM - 9:00 PM',
    phone: '+92 309 666 3331',
    mapUrl: 'https://maps.app.goo.gl/RJpXJkd3ziQbBwe5A',
    isFlagship: false,
    highlightTag: 'Design & E-Com Hub',
    locationNote: 'Barkat Market Commercial Area',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCdMADKiCSC-zF_PHMDdP_lzXv5odHjicf2-CQMea6WtZIjjkMK7VtoFB5LBHt4vmjNkbxfsAq88GEn2bFgNqmMznvqvKxfbcI_ziR3PBMlKD_nffCvKpQ52KJO7cuzai05AqAtt1E8fff-BpSlh_xhe6jCJnpSYVUUopVjgElQmWAgurA_IFqgD7z32Fn1pRszgZaNe9ielkAlVpyRW9PaMY3HROw5AhWpGFc6jmy-qzCxZPQTNi84g',
    amenities: [
      'Design Studio Labs',
      'Executive Classrooms',
      'Free High-Speed WiFi',
      'Secure Parking'
    ],
    keyPrograms: [
      'UI/UX Design with AI',
      'Digital Growth Marketing',
      'Web Development Bootcamp',
      'MERN Stack'
    ]
  },
  {
    id: 'karachi-parsa',
    name: 'Karachi Campus (Main Hub)',
    city: 'Karachi',
    address: 'Office #608, PARSA Tower, Main Shahrah-e-Faisal, Karachi',
    timing: 'Mon - Sun: 10:00 AM - 9:00 PM',
    phone: '+92 300 8565056',
    mapUrl: 'https://maps.app.goo.gl/KW6Pj3u2dBxDFXSm8',
    isFlagship: false,
    highlightTag: 'City of Lights Branch',
    locationNote: 'Shahrah-e-Faisal Executive Hub',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGHHUZwpd2QNFviSnXBFIfqiZRbMa2CWI4LGfvRn0xnpGpm3FVR9T_hwUAgDwMyT4lBD0fJoWCx7FCN_FgtWbkWdtRiPFvUDNi16YPaVe5wHBphAbP-6bfvPspSE2Rvywswac5GKPzw6-ZvlrUpMKHTJhHLEWwIZsN6BPbO8sNe4KDjaeWrudhY9U87err0CUCm6zuBVdBVVABeZUZ2OslM_-p4j5_9epRzG7Uqm9nygC5E9EfCEUyHw',
    amenities: [
      'Advanced IT Labs',
      'Counseling Suite',
      'Fast Fiber WiFi',
      'English & Urdu Support'
    ],
    keyPrograms: [
      'Full Stack Web Dev',
      'Cybersecurity & Ethical Hacking',
      'Cloud Computing & DevOps',
      'AI Agents'
    ]
  },
  {
    id: 'mian-channu',
    name: 'Mian Channu Campus',
    city: 'Mian Channu',
    address: 'Sanaullah Educational Complex, Bodla Memorial Hospital Rd, Mian Channu',
    timing: 'Mon - Sun: 10:00 AM - 9:00 PM',
    phone: '+92 308 1186660',
    mapUrl: 'https://maps.app.goo.gl/WoYXUPDoryQjvXN27',
    isFlagship: false,
    highlightTag: 'Punjab Industrial Corridor',
    locationNote: 'Sanaullah Educational Complex',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuU7ITeAQrpurepO0yN5PhJF6fcAvWsp4vCw_uYecianB1BYFhxtZrODnXGD_9kSczXFA8u4EjQ03XDk0v5BRIaWilbMW_SLMvNyQMmgysbnH5HW8AV94d0X9p-syeH3BKWozrdAXW6C8N5eqT_ge6h7yhTmUV6C5goGfqh-nlnHJNmixDsGx8oeQY7NPzNf4JWRiP9m6Rni37PZMN7rbjcMtNDbA2ke3R-yn3LvWrb0M9f07ae2LKjQ',
    amenities: [
      'Tech Innovation Hub',
      'Training Labs',
      'Free High-Speed WiFi',
      'Freelancing Incubation'
    ],
    keyPrograms: [
      'Freelancing Mastery',
      'E-commerce & Shopify',
      'Graphics Design & UI',
      'Mobile App Dev'
    ]
  }
];
