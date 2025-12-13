import { Course, Service } from './types';

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Embedded Systems Design',
    slug: 'embedded-systems-design',
    category: 'Embedded Systems',
    shortDescription: 'Master microcontrollers, RTOS, and firmware development.',
    fullDescription: 'This comprehensive course takes you from basic electronics to advanced embedded architecture. Learn to program ARM Cortex-M microcontrollers, interface sensors, and implement Real-Time Operating Systems.',
    level: 'Intermediate',
    duration: '12 Weeks',
    thumbnailUrl: 'https://images.unsplash.com/photo-1631553127974-279c05c03c80?q=80&w=400&auto=format&fit=crop',
    techStack: ['C/C++', 'ARM Cortex', 'FreeRTOS', 'I2C/SPI'],
    modules: [
      { title: 'Architecture Basics', duration: '2 Weeks', topics: ['Digital Logic', 'Microprocessor Arch'] },
      { title: 'Firmware Development', duration: '6 Weeks', topics: ['GPIO', 'Interrupts', 'Bare-metal C'] },
      { title: 'RTOS & IoT', duration: '4 Weeks', topics: ['Task Scheduling', 'WiFi/BLE Integration'] }
    ]
  },
  {
    id: 'c2',
    title: 'Full Stack React & Node',
    slug: 'react-node-fullstack',
    category: 'Software Development',
    shortDescription: 'Build scalable web apps with the MERN stack.',
    fullDescription: 'Become a complete web developer. From responsive UI design with React and Tailwind to scalable backend services using Node.js and MongoDB.',
    level: 'Beginner',
    duration: '16 Weeks',
    thumbnailUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=400&auto=format&fit=crop',
    techStack: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    modules: [
      { title: 'Frontend Fundamentals', duration: '6 Weeks', topics: ['React Hooks', 'State Management', 'Tailwind'] },
      { title: 'Backend API', duration: '6 Weeks', topics: ['Express', 'REST', 'JWT Auth'] },
      { title: 'Deployment', duration: '4 Weeks', topics: ['Docker', 'CI/CD', 'AWS'] }
    ]
  },
  {
    id: 'c3',
    title: 'VLSI Physical Design',
    slug: 'vlsi-physical-design',
    category: 'VLSI',
    shortDescription: 'Deep dive into chip layout, routing, and verification.',
    fullDescription: 'An industry-aligned course for electronics engineers focusing on the physical design flow of ASICs using industry-standard tools.',
    level: 'Advanced',
    duration: '24 Weeks',
    thumbnailUrl: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=400&auto=format&fit=crop',
    techStack: ['Verilog', 'SystemVerilog', 'Tcl Scripting', 'Linux'],
    modules: [
      { title: 'CMOS Basics', duration: '4 Weeks', topics: ['MOSFET', 'Inverter Characteristics'] },
      { title: 'RTL to GDSII', duration: '12 Weeks', topics: ['Floorplanning', 'Placement', 'Routing'] },
      { title: 'Signoff', duration: '8 Weeks', topics: ['Timing Analysis', 'DRC/LVS'] }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'SEO Optimization',
    slug: 'seo-optimization',
    description: 'Data-driven strategies to rank your brand on the first page of search results.',
    iconName: 'Search',
    features: ['Keyword Research', 'Technical Audit', 'Backlink Strategy', 'Content Optimization']
  },
  {
    id: 's2',
    title: 'Performance Marketing',
    slug: 'performance-marketing',
    description: 'High-ROI PPC campaigns across Google, Meta, and LinkedIn ads.',
    iconName: 'TrendingUp',
    features: ['Ad Copywriting', 'A/B Testing', 'Conversion Tracking', 'Audience Segmentation']
  },
  {
    id: 's3',
    title: 'Brand Identity',
    slug: 'brand-identity',
    description: 'Crafting visual stories that resonate with your target audience.',
    iconName: 'Palette',
    features: ['Logo Design', 'Brand Guidelines', 'Social Media Kits', 'UI/UX Design']
  }
];