export interface CurriculumModule {
  moduleNumber: number;
  title: { en: string; bn: string };
  duration: { en: string; bn: string };
  lessonsCount: number;
  topics: { en: string; bn: string }[];
}

export interface CoreValue {
  id: string;
  title: { en: string; bn: string };
  desc: { en: string; bn: string };
  icon: string;
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  role: { en: string; bn: string };
  rating: number;
  comment: { en: string; bn: string };
  date: string;
}

export interface CourseDetail {
  id: string;
  slug: string;
  title: { en: string; bn: string };
  subtitle: { en: string; bn: string };
  category: string;
  categoryLabel: { en: string; bn: string };
  badge: { en: string; bn: string };
  mode: { en: string; bn: string };
  modeType: "online" | "offline";
  rating: number;
  ratingsCount: number;
  enrolledCount: string;
  languages: { en: string; bn: string };
  fee: string;
  rawFee: number;
  originalFee?: string;
  duration: { en: string; bn: string };
  classesCount: { en: string; bn: string };
  image: string;
  videoUrl: string;
  whatsappLink?: string;
  instructor: {
    name: string;
    designation: { en: string; bn: string };
    image: string;
    bio: { en: string; bn: string };
    experience: string;
    verified: boolean;
  };
  overview: { en: string; bn: string };
  fullDescription: { en: string; bn: string };
  coreValues: CoreValue[];
  learningOutcomes: { en: string; bn: string }[];
  curriculum: CurriculumModule[];
  includedItems: { en: string; bn: string }[];
  reviews: Review[];
}

export const coursesData: CourseDetail[] = [
  // 1. Full Stack Web Master in Frontend Development (Mern)
  {
    id: "1",
    slug: "frontend-development-mern",
    title: {
      en: "Full Stack Web Master in Frontend Development (Mern)",
      bn: "ফুল স্ট্যাক ওয়েব মাস্টার ইন ফ্রন্টএন্ড ডেভেলপমেন্ট (মার্ন)"
    },
    subtitle: {
      en: "Master modern React.js, Next.js 15, Redux Toolkit, Tailwind CSS, TypeScript & high-performance UI engineering",
      bn: "রিঅ্যাক্ট, নেক্সট.জেএস ১৫, রিডাক্স টুলকিট, টেইলউইন্ড সিএসএস ও আধুনিক ফ্রন্টএন্ড আর্কিটেকচার শিখুন"
    },
    category: "web",
    categoryLabel: {
      en: "Web Development",
      bn: "ওয়েব ডেভেলপমেন্ট"
    },
    badge: {
      en: "POPULAR",
      bn: "জনপ্রিয়"
    },
    mode: {
      en: "Online & Offline",
      bn: "অনলাইন ও অফলাইন"
    },
    modeType: "offline",
    rating: 4.9,
    ratingsCount: 142,
    enrolledCount: "120+ Enrolled",
    languages: {
      en: "Bengali / English",
      bn: "বাংলা / ইংরেজি"
    },
    fee: "12,000৳",
    rawFee: 12000,
    originalFee: "20,000৳",
    duration: {
      en: "3.5 Months",
      bn: "৩.৫ মাস"
    },
    classesCount: {
      en: "28 Classes",
      bn: "২৮ টি ক্লাস"
    },
    image: "/images/course thumbnail/enterprise full stack next.js 15.jpg",
    videoUrl: "https://www.facebook.com/reel/1931942940836268/",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Full%20Stack%20Web%20Master%20in%20Frontend%20Development%20(Mern)%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Engr. Tanvir Hasan",
      designation: {
        en: "Lead Frontend Architect & React Specialist",
        bn: "লিড ফ্রন্টএন্ড আর্কিটেক্ট ও রিঅ্যাক্ট স্পেশালিস্ট"
      },
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      bio: {
        en: "8+ years of engineering robust client-side architectures for international SaaS applications.",
        bn: "৮+ বছরের ফ্রন্টএন্ড আর্কিটেকচার ও আন্তর্জাতিক সাস অ্যাপ্লিকেশন তৈরির অভিজ্ঞতা।"
      },
      experience: "8+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Become an industry-ready Frontend Engineer specializing in the MERN stack. Master modern JavaScript (ES6+), TypeScript, React 19, Next.js 15, Tailwind CSS, state management with Redux Toolkit, and production-level UI performance optimization.",
      bn: "মার্ন স্ট্যাকের ফ্রন্টএন্ড ডেভেলপমেন্টে ক্যারিয়ার গড়ার পূর্ণাঙ্গ কোর্স। মডার্ন জাভাস্ক্রিপ্ট, টাইপস্ক্রিপ্ট, রিঅ্যাক্ট ১৯, নেক্সট.জেএস ১৫, রিডাক্স ও টেইলউইন্ড সিএসএস দিয়ে ইন্ডাস্ট্রি-স্ট্যান্ডার্ড ওয়েব অ্যাপ্লিকেশন তৈরি শিখবেন।"
    },
    fullDescription: {
      en: "This program covers frontend development from fundamental DOM scripting to advanced enterprise architecture. You will build pixel-perfect responsive layouts, integrate REST & GraphQL APIs, manage complex global application states, optimize Core Web Vitals, and deploy to modern platforms like Vercel and Netlify.",
      bn: "এই কোর্সে আধুনিক ওয়েব অ্যাপ্লিকেশনের প্রতিটি ধাপ পুঙ্খানুপুঙ্খভাবে শেখানো হবে। বাস্তবমুখী প্রোজেক্ট তৈরি, এপিআই ইন্টিগ্রেশন, স্টেট ম্যানেজমেন্ট এবং প্রফেশনাল পোর্টফোলিও তৈরির মাধ্যমে আপনাকে চাকরির উপযোগী করে গড়ে তোলা হবে।"
    },
    coreValues: [
      {
        id: "cv1",
        title: { en: "Component-Driven Architecture", bn: "কম্পোনেন্ট-ড্রাইভেন আর্কিটেকচার" },
        desc: { en: "Build clean, reusable, modular React components following SOLID principles.", bn: "ক্লিন ও রিইউজেবল রিঅ্যাক্ট কম্পোনেন্ট তৈরি করা শিখবেন।" },
        icon: "Code2"
      },
      {
        id: "cv2",
        title: { en: "Production Next.js 15", bn: "প্রোডাকশন নেক্সট.জেএস ১৫" },
        desc: { en: "Master Server Components, SSR, SSG, Server Actions & caching strategies.", bn: "নেক্সট.জেএস সার্ভার কম্পোনেন্টস ও এসএসআর মাস্টার করুন।" },
        icon: "Zap"
      },
      {
        id: "cv3",
        title: { en: "TypeScript & State Mastery", bn: "টাইপস্ক্রিপ্ট ও স্টেট ম্যানেজমেন্ট" },
        desc: { en: "Type-safe codebases with TypeScript and Redux Toolkit / TanStack Query.", bn: "টাইপস্ক্রিপ্ট ও রিডাক্স টুলকিট দিয়ে বাগ-মুক্ত কোড তৈরি।" },
        icon: "ShieldCheck"
      }
    ],
    learningOutcomes: [
      { en: "Master modern JavaScript (ES6+) and TypeScript from basics to advanced patterns.", bn: "মডার্ন জাভাস্ক্রিপ্ট (ES6+) ও টাইপস্ক্রিপ্ট পুঙ্খানুপুঙ্খভাবে আয়ত্ত করা।" },
      { en: "Build scalable single-page and multi-page apps with React 19 and Next.js 15.", bn: "রিঅ্যাক্ট ১৯ ও নেক্সট.জেএস ১৫ দিয়ে স্কেলেবল ওয়েব অ্যাপ তৈরি।" },
      { en: "Implement enterprise state management using Redux Toolkit and TanStack Query.", bn: "রিডাক্স টুলকিট ও ট্যানস্ট্যাক কোয়েরি দিয়ে জটিল স্টেট ম্যানেজমেন্ট।" },
      { en: "Create responsive, accessible UI designs with Tailwind CSS and Framer Motion.", bn: "টেইলউইন্ড সিএসএস ও ফ্রেমার মোশন দিয়ে রেসপনসিভ ও আকর্ষণীয় ডিজাইন তৈরি।" },
      { en: "Deploy production web apps with automated CI/CD and Core Web Vitals optimization.", bn: "ভার্সেল ও গিটহাবে সিআই/সিডি সহ লাইভ সার্ভারে ডেপ্লয়মেন্ট।" }
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: { en: "Module 1: Advanced JavaScript & TypeScript Fundamentals", bn: "মডিউল ১: এডভান্সড জাভাস্ক্রিপ্ট ও টাইপস্ক্রিপ্ট ফান্ডামেন্টালস" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "ES6+ Features, Closures, Prototypes & Event Loop", bn: "ইএস৬+ ফিচারস, ক্লোজার, প্রোটোটাইপ ও ইভেন্ট লুপ" },
          { en: "Asynchronous JavaScript: Promises, Async/Await & Fetch API", bn: "অ্যাসিঙ্ক জাভাস্ক্রিপ্ট: প্রমিজেস, অ্যাসিঙ্ক/অ্যাওয়েট ও ফেচ এপিআই" },
          { en: "TypeScript Essentials: Types, Interfaces, Generics & Type Narrowing", bn: "টাইপস্ক্রিপ্ট টাইপস, ইন্টারফেস ও জেনেরিকস" }
        ]
      },
      {
        moduleNumber: 2,
        title: { en: "Module 2: React 19 Core & Modern Hooks Architecture", bn: "মডিউল ২: রিঅ্যাক্ট ১৯ কোর ও মডার্ন হুকস আর্কিটেকচার" },
        duration: { en: "6 Classes • 12 Hours", bn: "৬ টি ক্লাস • ১২ ঘণ্টা" },
        lessonsCount: 7,
        topics: [
          { en: "JSX, Component Lifecycle, Virtual DOM & Reconciliation", bn: "জেএসএক্স, কম্পোনেন্ট লাইফসাইকেল ও ভার্চুয়াল ডম" },
          { en: "Hooks in Depth: useState, useEffect, useMemo, useCallback, useRef", bn: "হুকস ইন ডেপথ: ইউজস্টেট, ইউজিফেক্ট, ইউজম্যামো ও অন্যান্য" },
          { en: "Custom Hooks & Tailwind CSS Component Design System", bn: "কাস্টম হুকস ও টেইলউইন্ড সিএসএস ডিজাইন সিস্টেম" }
        ]
      },
      {
        moduleNumber: 3,
        title: { en: "Module 3: Global State Management (Redux Toolkit & TanStack Query)", bn: "মডিউল ৩: গ্লোবাল স্টেট ম্যানেজমেন্ট (রিডাক্স টুলকিট ও ট্যানস্ট্যাক কোয়েরি)" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Redux Toolkit: Slices, Reducers, Actions & Store Configuration", bn: "রিডাক্স টুলকিট স্লাইস, রিডিউসার ও স্টোর কনফিগারেশন" },
          { en: "Async Thunks & RTK Query for Data Fetching & Caching", bn: "অ্যাসিঙ্ক থাঙ্ক ও আরটিকে কোয়েরি ক্যাশিং" },
          { en: "TanStack Query (React Query) for Server State Management", bn: "সার্ভার স্টেট ম্যানেজমেন্টের জন্য ট্যানস্ট্যাক কোয়েরি" }
        ]
      },
      {
        moduleNumber: 4,
        title: { en: "Module 4: Next.js 15 Full-Stack Frontend & SSR", bn: "মডিউল ৪: নেক্সট.জেএস ১৫ ফুল স্ট্যাক ফ্রন্টএন্ড ও এসএসআর" },
        duration: { en: "6 Classes • 12 Hours", bn: "৬ টি ক্লাস • ১২ ঘণ্টা" },
        lessonsCount: 8,
        topics: [
          { en: "App Router, Dynamic Routing, Layouts & Route Handlers", bn: "অ্যাপ রাউটার, ডাইনামিক রাউটিং ও লেআউটস" },
          { en: "Server Components vs Client Components & Server Actions", bn: "সার্ভার কম্পোনেন্টস, ক্লায়েন্ট কম্পোনেন্টস ও সার্ভার অ্যাকশনস" },
          { en: "SEO Optimization, Metadata API, OpenGraph & Image Optimization", bn: "এসইও অপটিমাইজেশন, মেটাডাটা ও ইমেজ অপটিমাইজেশন" }
        ]
      },
      {
        moduleNumber: 5,
        title: { en: "Module 5: Real-World SaaS Project & Production Deployment", bn: "মডিউল ৫: রিয়েল-ওয়ার্ল্ড সাস প্রজেক্ট ও প্রোডাকশন ডেপ্লয়মেন্ট" },
        duration: { en: "6 Classes • 12 Hours", bn: "৬ টি ক্লাস • ১২ ঘণ্টা" },
        lessonsCount: 7,
        topics: [
          { en: "Building an Enterprise E-Commerce / SaaS Dashboard", bn: "ফুল ফিচারড এন্টারপ্রাইজ ড্যাশবোর্ড প্রজেক্ট তৈরি" },
          { en: "Authentication Integration, Stripe Payments UI & Dark Mode", bn: "অথেনটিকেশন, স্ট্রাইপ পেমেন্ট ও ডার্ক মোড" },
          { en: "Performance Audits (Lighthouse), Vercel Deployment & Portfolio Review", bn: "পারফরম্যান্স অপটিমাইজেশন, ভার্সেল ডেপ্লয়মেন্ট ও পোর্টফোলিও রিভিউ" }
        ]
      }
    ],
    includedItems: [
      { en: "28 Live Interactive Mentorship Classes", bn: "২৮ টি লাইভ ইন্টারঅ্যাক্টিভ মেন্টরশিপ ক্লাস" },
      { en: "5 Real-World Production Projects for Portfolio", bn: "পোর্টফোলিওর জন্য ৫টি বাস্তব প্রোজেক্ট" },
      { en: "Lifetime Access to Class Recordings & Codebases", bn: "লাইফটাইম ক্লাস রেকর্ডিং ও সোর্স কোড অ্যাক্সেস" },
      { en: "Industry-Standard Verified Course Certificate", bn: "ইন্ডাস্ট্রি সার্টিফাইড কোর্স সনদপত্র" }
    ],
    reviews: [
      {
        id: "r1",
        name: "Shakil Ahmed",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120",
        role: { en: "Frontend Developer at Softvibe", bn: "ফ্রন্টএন্ড ডেভেলপার" },
        rating: 5,
        comment: {
          en: "The deep dive into Next.js 15 and Redux Toolkit completely leveled up my skills. I landed my first frontend role right after finishing the capstone project!",
          bn: "নেক্সট.জেএস ১৫ ও রিডাক্স টুলকিটের প্র্যাকটিক্যাল কাজ আমার ক্যারিয়ারে বিশাল ভূমিকা রেখেছে।"
        },
        date: "2 Weeks Ago"
      }
    ]
  },

  // 2. Full Stack Web Master in Backend Development (Mern)
  {
    id: "2",
    slug: "backend-development-mern",
    title: {
      en: "Full Stack Web Master in Backend Development (Mern)",
      bn: "ফুল স্ট্যাক ওয়েব মাস্টার ইন ব্যাকএন্ড ডেভেলপমেন্ট (মার্ন)"
    },
    subtitle: {
      en: "Master Node.js, Express.js, MongoDB, RESTful APIs, JWT Auth, Redis Caching & Microservices",
      bn: "নোড.জেএস, এক্সপ্রেস, মঙ্গোডিবি, রেস্ট এপিআই, জেডব্লিউটি অথেনটিকেশন ও মাইক্রোসার্ভিসেস শিখুন"
    },
    category: "web",
    categoryLabel: {
      en: "Web Development",
      bn: "ওয়েব ডেভেলপমেন্ট"
    },
    badge: {
      en: "CAREER TRACK",
      bn: "ক্যারিয়ার ট্র্যাক"
    },
    mode: {
      en: "Online & Offline",
      bn: "অনলাইন ও অফলাইন"
    },
    modeType: "offline",
    rating: 4.9,
    ratingsCount: 135,
    enrolledCount: "110+ Enrolled",
    languages: {
      en: "Bengali / English",
      bn: "বাংলা / ইংরেজি"
    },
    fee: "12,000৳",
    rawFee: 12000,
    originalFee: "20,000৳",
    duration: {
      en: "3.5 Months",
      bn: "৩.৫ মাস"
    },
    classesCount: {
      en: "28 Classes",
      bn: "২৮ টি ক্লাস"
    },
    image: "/images/course thumbnail/postgresql.jpg",
    videoUrl: "https://www.facebook.com/reel/1931942940836268/",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Full%20Stack%20Web%20Master%20in%20Backend%20Development%20(Mern)%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Ashraf Hossain",
      designation: {
        en: "Principal Backend Engineer & Cloud Architect",
        bn: "প্রিন্সিপাল ব্যাকএন্ড ইঞ্জিনিয়ার ও ক্লাউড আর্কিটেক্ট"
      },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      bio: {
        en: "10+ years designing enterprise-scale microservices, distributed caching, and secure backend systems.",
        bn: "১০+ বছরের ডিস্ট্রিবিউটেড সিস্টেমস, মাইক্রোসার্ভিসেস ও সিকিউর ব্যাকএন্ড আর্কিটেকচার অভিজ্ঞতা।"
      },
      experience: "10+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Master enterprise backend engineering using Node.js, Express, and MongoDB. Learn database design, complex aggregation queries, secure JWT authentication, role-based access control (RBAC), Redis caching, payment gateways, and Dockerized microservice architecture.",
      bn: "নোড.জেএস, এক্সপ্রেস ও মঙ্গোডিবি দিয়ে হাই-স্কেল ব্যাকএন্ড সিস্টেম তৈরির প্রফেশনাল কোর্স। ডাটাবেস ডিজাইন, সিকিউরিটি, জেডব্লিউটি অথেনটিকেশন, ক্যাশিং এবং মাইক্রোসার্ভিসেস আর্কিটেকচার শিখবেন।"
    },
    fullDescription: {
      en: "In this comprehensive backend engineering course, you'll build robust, production-ready RESTful APIs and real-time WebSocket systems. We cover everything from asynchronous I/O and architectural patterns to database indexing, Redis caching, third-party API integrations (Stripe, SSLCommerz), and deployment on cloud servers.",
      bn: "বাস্তব কর্মক্ষেত্রের উপযোগী করে সাজানো এই ব্যাকএন্ড কোর্সে এপিআই ডিজাইন, ডাটা সিকিউরিটি, পেমেন্ট গেটওয়ে ইন্টিগ্রেশন এবং ক্লাউড ডেপ্লয়মেন্টের নিখুঁত দক্ষতা অর্জন করবেন।"
    },
    coreValues: [
      {
        id: "cv1",
        title: { en: "High-Performance APIs", bn: "হাই-পারফরম্যান্স এপিআই" },
        desc: { en: "Design fast, rate-limited, cached RESTful & GraphQL services.", bn: "ফাস্ট ও অপ্টিমাইজড এপিআই তৈরি করা শিখবেন।" },
        icon: "Terminal"
      },
      {
        id: "cv2",
        title: { en: "Enterprise Security & RBAC", bn: "এন্টারপ্রাইজ সিকিউরিটি" },
        desc: { en: "Implement JWT, bcrypt, CORS, OAuth2, and SQL/NoSQL injection defense.", bn: "জেডব্লিউটি, ওঅথ২ ও সাইবার সুরক্ষা বাস্তবায়ন।" },
        icon: "ShieldCheck"
      },
      {
        id: "cv3",
        title: { en: "Scalable Databases & Redis", bn: "স্কেলেবল ডাটাবেস ও রেডিস" },
        desc: { en: "Master MongoDB indexing, aggregation pipelines, and Redis in-memory cache.", bn: "মঙ্গোডিবি ইনডেক্সিং ও রেডিস ক্যাশিং সিস্টেম।" },
        icon: "Database"
      }
    ],
    learningOutcomes: [
      { en: "Build secure, scalable REST APIs using Node.js, Express.js, and TypeScript.", bn: "নোড.জেএস ও এক্সপ্রেস দিয়ে সিকিউর ও স্কেলেবল রেস্ট এপিআই তৈরি।" },
      { en: "Master MongoDB schema design, indexing, transactions, and aggregation pipelines.", bn: "মঙ্গোডিবি স্কিমা ডিজাইন, ইনডেক্সিং ও ট্রানজ্যাকশন আয়ত্ত করা।" },
      { en: "Implement enterprise authentication with JWT, refresh tokens, and RBAC.", bn: "রিফ্রেশ টোকেন ও আরব্যাক সহ এন্টারপ্রাইজ অথেনটিকেশন তৈরি।" },
      { en: "Integrate Redis caching, BullMQ message queues, and WebSockets for real-time features.", bn: "রেডিস ক্যাশিং ও রিয়েল-টাইম ওয়েব সকেট সিস্টেম বাস্তবায়ন।" },
      { en: "Containerize and deploy backend services using Docker, Nginx, and cloud providers.", bn: "ডকার ও এনজিনিক্স দিয়ে ক্লাউড সার্ভারে লাইভ ডেপ্লয়মেন্ট।" }
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: { en: "Module 1: Node.js Core, Asynchronous Architecture & Event Loop", bn: "মডিউল ১: নোড.জেএস কোর ও ইভেন্ট লুপ আর্কিটেকচার" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Node.js Runtime Architecture, Event Loop, Libuv & Thread Pool", bn: "নোড.জেএস আর্কিটেকচার, ইভেন্ট লুপ ও লিবইউভি" },
          { en: "Streams, Buffers, File System & Error Handling Best Practices", bn: "স্ট্রিমস, বাফারস ও ফাইল সিস্টেম হ্যান্ডলিং" },
          { en: "Building HTTP Server from scratch & Node Package Manager (NPM)", bn: "স্ক্র্যাচ থেকে এইচটিটিপি সার্ভার তৈরি ও এনপিএম" }
        ]
      },
      {
        moduleNumber: 2,
        title: { en: "Module 2: Express.js Framework & Clean MVC Architecture", bn: "মডিউল ২: এক্সপ্রেস.জেএস ফ্রেমওয়ার্ক ও এমভিসি আর্কিটেকচার" },
        duration: { en: "6 Classes • 12 Hours", bn: "৬ টি ক্লাস • ১২ ঘণ্টা" },
        lessonsCount: 7,
        topics: [
          { en: "Express Routing, Custom Middleware, Request/Response Pipeline", bn: "এক্সপ্রেস রাউটিং ও কাস্টম মিডলওয়্যার পাইপলাইন" },
          { en: "Data Validation with Zod / Joi & Global Error Handling Middleware", bn: "জড ও জয় দিয়ে ডাটা ভ্যালিডেশন এবং এরর হ্যান্ডলিং" },
          { en: "File Uploads with Multer, Cloudinary Integration & Image Processing", bn: "মাল্টার ও ক্লাউডিনারি দিয়ে ফাইল আপলোড" }
        ]
      },
      {
        moduleNumber: 3,
        title: { en: "Module 3: MongoDB Mastery & Complex Aggregations", bn: "মডিউল ৩: মঙ্গোডিবি মাস্টারি ও জটিল এগ্রিগেশন" },
        duration: { en: "6 Classes • 12 Hours", bn: "৬ টি ক্লাস • ১২ ঘণ্টা" },
        lessonsCount: 8,
        topics: [
          { en: "Mongoose Schema Design, Virtuals, Hooks & Data Modeling", bn: "মঙ্গুজ স্কিমা ডিজাইন, ভার্চুয়ালস ও ডাটা মডেলিং" },
          { en: "MongoDB Aggregation Framework ($match, $lookup, $group, $facet)", bn: "মঙ্গোডিবি এগ্রিগেশন পাইপলাইন ও কুয়েরি অপ্টিমাইজেশন" },
          { en: "Indexing Strategies, Compound Indexes & Database Performance Tuning", bn: "ইনডেক্সিং স্ট্র্যাটেজি ও পারফরম্যান্স টিউনিং" }
        ]
      },
      {
        moduleNumber: 4,
        title: { en: "Module 4: Security, Authentication, Redis & Real-time WebSockets", bn: "মডিউল ৪: সিকিউরিটি, অথেনটিকেশন, রেডিস ও ওয়েব সকেট" },
        duration: { en: "6 Classes • 12 Hours", bn: "৬ টি ক্লাস • ১২ ঘণ্টা" },
        lessonsCount: 7,
        topics: [
          { en: "JWT Access/Refresh Tokens, Cookie Security, Bcrypt Password Hashing", bn: "জেডব্লিউটি এক্সেস/রিফ্রেশ টোকেন ও কুকি সিকিউরিটি" },
          { en: "Rate Limiting, Helmet, CORS, XSS Prevention & Sanity Checks", bn: "রেট লিমিটিং, হেলমেট ও এক্সএসএস প্রিভেনশন" },
          { en: "Redis In-Memory Caching & Socket.IO Real-time Chat/Notification Engine", bn: "রেডিস ক্যাশিং ও সকেট.আইও রিয়েল-টাইম নোটিফিকেশন" }
        ]
      },
      {
        moduleNumber: 5,
        title: { en: "Module 5: Payment Gateways, Docker & Cloud Deployment", bn: "মডিউল ৫: পেমেন্ট গেটওয়ে, ডকার ও ক্লাউড ডেপ্লয়মেন্ট" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Stripe & SSLCommerz Payment Gateway Integration with Webhooks", bn: "স্ট্রাইপ ও এসএসএলকমার্স পেমেন্ট এবং ওয়েবহুক" },
          { en: "Dockerizing Node Applications (Dockerfile & Docker Compose)", bn: "ডকার ও ডকার কম্পোজ দিয়ে ব্যাকএন্ড কন্টেইনারাইজেশন" },
          { en: "Production Deployment on AWS / Render / DigitalOcean with CI/CD", bn: "এডব্লিউএস ও রেন্ডার সার্ভারে লাইভ ডেপ্লয়মেন্ট" }
        ]
      }
    ],
    includedItems: [
      { en: "28 Live Interactive Mentorship Classes", bn: "২৮ টি লাইভ ইন্টারঅ্যাক্টিভ মেন্টরশিপ ক্লাস" },
      { en: "4 Complete Production-Grade Backend APIs", bn: "৪টি প্রোডাকশন-গ্রেড ব্যাকএন্ড এপিআই প্রজেক্ট" },
      { en: "API Security & Microservices Best Practices", bn: "এপিআই সিকিউরিটি ও মাইক্রোসার্ভিসেস গাইড" },
      { en: "Verified Industry-Grade Backend Certificate", bn: "ইন্ডাস্ট্রি সার্টিফাইড ব্যাকএন্ড সনদপত্র" }
    ],
    reviews: [
      {
        id: "r2",
        name: "Farhan Kabir",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
        role: { en: "Backend Engineer at DevsTeam", bn: "ব্যাকএন্ড ইঞ্জিনিয়ার" },
        rating: 5,
        comment: {
          en: "The deep dive into MongoDB aggregation and Redis caching was pure gold. Clear, practical and enterprise-grade lessons.",
          bn: "মঙ্গোডিবি এগ্রিগেশন এবং রেডিস ক্যাশিং শেখার অভিজ্ঞতা দুর্দান্ত ছিল।"
        },
        date: "1 Month Ago"
      }
    ]
  },

  // 3. Digital Marketing with Freelancing
  {
    id: "3",
    slug: "digital-marketing-freelancing",
    title: {
      en: "Digital Marketing with Freelancing",
      bn: "ডিজিটাল মার্কেটিং উইথ ফ্রিল্যান্সিং"
    },
    subtitle: {
      en: "Master SEO, Social Media Marketing, Google Ads, Content Marketing & Marketplace Freelancing Mastery",
      bn: "এসইও, সোশ্যাল মিডিয়া মার্কেটিং, গুগল অ্যাডস ও মার্কেটপ্লেসে সফল ফ্রিল্যান্সিং ক্যারিয়ার গড়ুন"
    },
    category: "marketing",
    categoryLabel: {
      en: "Digital Marketing",
      bn: "ডিজিটাল মার্কেটিং"
    },
    badge: {
      en: "BEST SELLER",
      bn: "বেস্ট সেলার"
    },
    mode: {
      en: "Online & Offline",
      bn: "অনলাইন ও অফলাইন"
    },
    modeType: "offline",
    rating: 4.9,
    ratingsCount: 189,
    enrolledCount: "160+ Enrolled",
    languages: {
      en: "Bengali / English",
      bn: "বাংলা / ইংরেজি"
    },
    fee: "8,000৳",
    rawFee: 8000,
    originalFee: "15,000৳",
    duration: {
      en: "3 Months",
      bn: "৩ মাস"
    },
    classesCount: {
      en: "24 Classes",
      bn: "২৪ টি ক্লাস"
    },
    image: "/images/course thumbnail/Digital Marketing.jpg",
    videoUrl: "https://www.facebook.com/reel/2105617167053909/",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Digital%20Marketing%20with%20Freelancing%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Mahfuzur Rahman",
      designation: {
        en: "Senior Digital Strategist & Top Rated Freelancer",
        bn: "সিনিয়র ডিজিটাল স্ট্র্যাটেজিস্ট ও টপ রেটেড ফ্রিল্যান্সার"
      },
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
      bio: {
        en: "7+ years managing $500k+ in ad spend and mentoring 2,000+ successful freelancers on Upwork & Fiverr.",
        bn: "৭+ বছরের গ্লোবাল অ্যাড স্পেন্ড ম্যানেজমেন্ট ও সফল ফ্রিল্যান্সিং ক্যারিয়ার ট্রেইনার।"
      },
      experience: "7+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "A comprehensive, practical roadmap to mastering Search Engine Optimization (SEO), Social Media Marketing (Meta, LinkedIn, YouTube), Google PPC Ads, Email marketing funnels, and winning high-paying international clients on Upwork and Fiverr.",
      bn: "ডিজিটাল মার্কেটিং ও ফ্রিল্যান্সিংয়ে স্বাবলম্বী হওয়ার পূর্ণাঙ্গ কোর্স। এসইও, ফেসবুক ও ইনস্টাগ্রাম অ্যাডস, গুগল অ্যাডস এবং আপওয়ার্ক ও ফাইভার মার্কেটপ্লেসে সফল প্রোফাইল দাঁড় করানোর বাস্তবমুখী প্রশিক্ষণ।"
    },
    fullDescription: {
      en: "Learn how to build full-funnel digital marketing campaigns that drive measurable sales and conversions. You will gain hands-on expertise in technical SEO, Google Search Console, Meta Ads Manager, Google Analytics 4, email automation, and direct marketplace client acquisition strategies.",
      bn: "এই কোর্সে থিওরি নয়, বরং লাইভ ক্লায়েন্ট প্রজেক্ট ও রিয়েল বাজেট নিয়ে অ্যাড রান এবং এসইও অপ্টিমাইজেশন শেখানো হয়, যাতে কোর্স শেষেই আয় শুরু করা সম্ভব হয়।"
    },
    coreValues: [
      {
        id: "cv1",
        title: { en: "100% Practical Ad Campaigns", bn: "১০০% প্র্যাকটিক্যাল ক্যাম্পেইন" },
        desc: { en: "Set up live Meta & Google Ads campaigns with real budget management.", bn: "রিয়েল বাজেট দিয়ে ফেসবুক ও গুগল অ্যাডস তৈরি শিখবেন।" },
        icon: "Megaphone"
      },
      {
        id: "cv2",
        title: { en: "Marketplace Client Acquisition", bn: "মার্কেটপ্লেস ক্লায়েন্ট একুইজিশন" },
        desc: { en: "Master winning proposals on Upwork, optimized Fiverr Gigs, and direct outreach.", bn: "আপওয়ার্ক কভার লেটার ও ফাইভার গিগ অপ্টিমাইজেশন।" },
        icon: "Award"
      },
      {
        id: "cv3",
        title: { en: "Data-Driven Analytics & SEO", bn: "ডাটা-ড্রাইভেন এনালিটিক্স ও এসইও" },
        desc: { en: "Master Google Analytics 4, Tag Manager, and Advanced On-Page/Off-Page SEO.", bn: "জিএ৪, ট্যাগ ম্যানেজার ও এডভান্সড এসইও টুলস।" },
        icon: "TrendingUp"
      }
    ],
    learningOutcomes: [
      { en: "Execute end-to-end On-Page, Off-Page, and Technical SEO strategies.", bn: "অন-পেইজ, অফ-পেইজ এবং টেকনিক্যাল এসইও সফলভাবে পরিচালনা করা।" },
      { en: "Run high-converting Facebook and Instagram ad campaigns using Meta Pixel & CAPI.", bn: "মেটা পিক্সেল ও কনভার্শন এপিআই সহ ফেসবুক/ইনস্টাগ্রাম অ্যাড রান করা।" },
      { en: "Set up and scale Google Search, Display, and YouTube Video Ad campaigns.", bn: "গুগল সার্চ ও ইউটিউব ভিডিও অ্যাডস ক্যাম্পেইন তৈরি ও স্কেল করা।" },
      { en: "Track and analyze conversion funnels using Google Tag Manager and GA4.", bn: "গুগল ট্যাগ ম্যানেজার ও জিএ৪ দিয়ে কনভার্শন ট্র্যাকিং।" },
      { en: "Build a 5-star profile on Upwork and Fiverr and communicate with international clients.", bn: "আপওয়ার্ক ও ফাইভারে আকর্ষণীয় প্রোফাইল তৈরি ও ক্লায়েন্ট কমিউনিকেশন।" }
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: { en: "Module 1: Complete SEO (Search Engine Optimization) Mastery", bn: "মডিউল ১: কমপ্লিট এসইও (সার্চ ইঞ্জিন অপ্টিমাইজেশন) মাস্টারি" },
        duration: { en: "6 Classes • 12 Hours", bn: "৬ টি ক্লাস • ১২ ঘণ্টা" },
        lessonsCount: 7,
        topics: [
          { en: "Keyword Research (Semrush, Ahrefs, Search Intent Analysis)", bn: "কিওয়ার্ড রিসার্চ ও সার্চ ইনটেন্ট অ্যানালাইসিস" },
          { en: "On-Page SEO: Headings, Schema Markup, Meta Tags & Internal Linking", bn: "অন-পেইজ এসইও, স্কিমা মার্কআপ ও ইন্টারনাল লিংকিং" },
          { en: "Technical SEO & Off-Page Backlink Building Strategies", bn: "টেকনিক্যাল এসইও ও হাই-কোয়ালিটি ব্যাকলিংক তৈরি" }
        ]
      },
      {
        moduleNumber: 2,
        title: { en: "Module 2: Meta Ads (Facebook & Instagram) Campaign Mastery", bn: "মডিউল ২: মেটা অ্যাডস (ফেসবুক ও ইনস্টাগ্রাম) ক্যাম্পেইন মাস্টারি" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Business Manager Setup, Domain Verification & Meta Pixel", bn: "বিজনেস ম্যানেজার ও মেটা পিক্সেল সেটআপ" },
          { en: "Audience Research, Custom Audiences & Lookalike Audiences", bn: "কাস্টম অডিয়েন্স ও লুকঅ্যালাইক অডিয়েন্স তৈরি" },
          { en: "Ad Copywriting, Creative Testing, CBO vs ABO & Retargeting", bn: "অ্যাড কপিরাইটিং, ক্রিয়েটিভ টেস্টিং ও রিটার্গেটিং" }
        ]
      },
      {
        moduleNumber: 3,
        title: { en: "Module 3: Google Ads (PPC, Search & YouTube Ads)", bn: "মডিউল ৩: গুগল অ্যাডস (পিপিসি, সার্চ ও ইউটিউব অ্যাডস)" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Google Ads Account Structure, Bidding Strategies & Quality Score", bn: "গুগল অ্যাকাউন্ট স্ট্রাকচার ও কোয়ালিটি স্কোর" },
          { en: "Search Campaigns, Negative Keywords, Extensions & Conversion Tracking", bn: "সার্চ ক্যাম্পেইন, নেগেটিভ কিওয়ার্ড ও এক্সটেনশন" },
          { en: "YouTube Video Ads, Performance Max Campaigns & Remarketing", bn: "ইউটিউব ভিডিও অ্যাডস ও পারফরম্যান্স ম্যাক্স" }
        ]
      },
      {
        moduleNumber: 4,
        title: { en: "Module 4: Google Analytics 4, Tag Manager & Email Funnels", bn: "মডিউল ৪: জিএ৪, ট্যাগ ম্যানেজার ও ইমেইল ফানেল" },
        duration: { en: "4 Classes • 8 Hours", bn: "৪ টি ক্লাস • ৮ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "Google Tag Manager Event Tracking & GA4 Custom Events", bn: "গুগল ট্যাগ ম্যানেজার ও জিএ৪ ইভেন্ট ট্র্যাকিং" },
          { en: "E-Commerce Purchase Event Tracking & Funnel Visualization", bn: "ই-কমার্স পারচেজ ট্র্যাকিং ও ড্রপ-অফ অ্যানালাইসিস" },
          { en: "Email Marketing Automation with Mailchimp / Klaviyo", bn: "মেইলচিম্প ও ক্লাভিয়ো দিয়ে ইমেইল অটোমেশন" }
        ]
      },
      {
        moduleNumber: 5,
        title: { en: "Module 5: Freelancing Blueprint (Upwork, Fiverr & Direct Clients)", bn: "মডিউল ৫: ফ্রিল্যান্সিং ব্লুপ্রিন্ট (আপওয়ার্ক, ফাইভার ও ক্লায়েন্ট হান্টিং)" },
        duration: { en: "4 Classes • 8 Hours", bn: "৪ টি ক্লাস • ৮ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Fiverr Gig Creation, SEO Ranking & Order Management", bn: "ফাইভার গিগ এসইও ও র‍্যাঙ্কিং ট্রিকস" },
          { en: "Upwork Profile Approval, Winning Proposal Writing & Project Catalog", bn: "আপওয়ার্ক উইনিং কভার লেটার ও প্রপোজাল রাইটিং" },
          { en: "Direct Client Outreach via LinkedIn & Cold Email Strategies", bn: "লিঙ্কডইন ও কোল্ড ইমেইল দিয়ে ডিরেক্ট ক্লায়েন্ট সংগ্রহ" }
        ]
      }
    ],
    includedItems: [
      { en: "24 Live Practical Classes & Q&A Sessions", bn: "২৪ টি লাইভ প্র্যাকটিক্যাল ক্লাস" },
      { en: "Upwork & Fiverr Profile Review & Optimization", bn: "আপওয়ার্ক ও ফাইভার প্রোফাইল অপটিমাইজেশন" },
      { en: "Premium SEO & Marketing Tool Access Guidelines", bn: "প্রিমিয়াম এসইও টুলস গাইডলাইন" },
      { en: "Certificate of Professional Digital Marketing", bn: "প্রফেশনাল ডিজিটাল মার্কেটিং সার্টিফিকেট" }
    ],
    reviews: [
      {
        id: "r3",
        name: "Nahidul Islam",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=120",
        role: { en: "Top Rated Freelancer on Upwork", bn: "টপ রেটেড ফ্রিল্যান্সার" },
        rating: 5,
        comment: {
          en: "The Upwork proposal strategies and Meta ads practical training helped me cross $1,000/month within 4 months of graduation!",
          bn: "কোর্সটি করার পর আমি আপওয়ার্কে প্রথম মাসে ৩টি ক্লায়েন্ট প্রজেক্ট পাই।"
        },
        date: "3 Weeks Ago"
      }
    ]
  },

  // 4. Advanced Digital Marketing with AI
  {
    id: "4",
    slug: "advanced-digital-marketing-ai",
    title: {
      en: "Advanced Digital Marketing with AI",
      bn: "অ্যাডভান্সড ডিজিটাল মার্কেটিং উইথ এআই"
    },
    subtitle: {
      en: "Supercharge marketing campaigns with Generative AI, Meta AI Ads, Predictive Analytics & Automation",
      bn: "জেনারেটিভ এআই, মেটা অ্যাডস এআই, অটোমেশন ও ডাটা-ড্রাইভেন মার্কেটিং দিয়ে ক্যাম্পেইন স্কেল করুন"
    },
    category: "marketing",
    categoryLabel: {
      en: "AI Marketing",
      bn: "এআই মার্কেটিং"
    },
    badge: {
      en: "TRENDING",
      bn: "ট্রেন্ডিং"
    },
    mode: {
      en: "Online & Offline",
      bn: "অনলাইন ও অফলাইন"
    },
    modeType: "offline",
    rating: 4.9,
    ratingsCount: 112,
    enrolledCount: "95+ Enrolled",
    languages: {
      en: "Bengali / English",
      bn: "বাংলা / ইংরেজি"
    },
    fee: "9,000৳",
    rawFee: 9000,
    originalFee: "16,000৳",
    duration: {
      en: "3 Months",
      bn: "৩ মাস"
    },
    classesCount: {
      en: "24 Classes",
      bn: "২৪ টি ক্লাস"
    },
    image: "/images/course thumbnail/meta ads.jpg",
    videoUrl: "https://www.facebook.com/reel/1791500222217262/",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Advanced%20Digital%20Marketing%20with%20AI%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Sabbir Hossain",
      designation: {
        en: "AI Marketing Consultant & Growth Hacker",
        bn: "এআই মার্কেটিং কনসালট্যান্ট ও গ্রোথ হ্যাকার"
      },
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=300",
      bio: {
        en: "Pioneering AI-driven automated funnels and Advantage+ campaign scaling for 50+ international brands.",
        bn: "আন্তর্জাতিক ব্র্যান্ডের জন্য এআই অটোমেশন ও অ্যাড ক্যাম্পেইন বিশেষজ্ঞ।"
      },
      experience: "6+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Take your digital marketing to the cutting edge with AI tools. Master prompt engineering for copywriting, AI-generated video and image ads, Meta Advantage+ AI campaigns, automated lead funnels with Make.com/Zapier, and AI predictive analytics.",
      bn: "কৃত্রিম বুদ্ধিমত্তা (AI) ব্যবহার করে মার্কেটিং ক্যাম্পেইনের কনভার্শন ১০ গুণ বৃদ্ধি করার আধুনিক কোর্স। চ্যাটজিপিটি প্রম্পট ইঞ্জিনিয়ারিং, মেটা এআই অ্যাডস, অটোমেটেড চ্যাটবট এবং এআই ডাটা অ্যানালিটিক্স শিখবেন।"
    },
    fullDescription: {
      en: "Artificial intelligence has transformed digital marketing. In this forward-looking program, you will learn how top agencies deploy ChatGPT, Midjourney, Claude, Make.com, and AI-powered advertising algorithms to automate content production, optimize ad spend, and maximize ROI.",
      bn: "এই কোর্সে এআই দিয়ে কন্টেন্ট তৈরি, ভিডিও স্ক্রিপ্টিং, অটোনোমাস অ্যাড অপটিমাইজেশন এবং হাই-কনভার্টিং ফানেল বিল্ড করার প্রতিটি আধুনিক স্ট্র্যাটেজি হ্যান্ডস-অন প্রজেক্টের মাধ্যমে শেখানো হবে।"
    },
    coreValues: [
      {
        id: "cv1",
        title: { en: "AI Prompt Engineering", bn: "এআই প্রম্পট ইঞ্জিনিয়ারিং" },
        desc: { en: "Generate high-converting ad copy, landing pages, and email sequences.", bn: "চ্যাটজিপিটি ও ক্লড দিয়ে হাই-কনভার্টিং কপিরাইটিং।" },
        icon: "Cpu"
      },
      {
        id: "cv2",
        title: { en: "Autonomous Marketing Automation", bn: "অটোনোমাস মার্কেটিং অটোমেশন" },
        desc: { en: "Build zero-code automated workflows with Make.com, Zapier & AI Chatbots.", bn: "মেক.কম ও চ্যাটবট দিয়ে স্বয়ংক্রিয় লিড ফানেল।" },
        icon: "Zap"
      },
      {
        id: "cv3",
        title: { en: "Meta Advantage+ & AI Ad Scaling", bn: "মেটা এআই ও অ্যাড স্কেলিং" },
        desc: { en: "Leverage machine learning algorithms to lower Cost-Per-Acquisition (CPA).", bn: "মেশিন লার্নিং অ্যালগরিদম দিয়ে বিজ্ঞাপনী খরচ কমান।" },
        icon: "TrendingUp"
      }
    ],
    learningOutcomes: [
      { en: "Master prompt engineering to create sales copy, email sequences, and ad headlines with AI.", bn: "এআই প্রম্পট ইঞ্জিনিয়ারিং দিয়ে সেলস কপি ও অ্যাড হেডলাইন তৈরি।" },
      { en: "Create professional AI-generated ad creatives and video scripts using Midjourney and Runway.", bn: "মিডজার্নি ও রানওয়ে দিয়ে আকর্ষণীয় এআই ভিডিও ও ব্যানার তৈরি।" },
      { en: "Master Meta Advantage+ AI ad campaigns and Google Performance Max machine learning.", bn: "মেটা অ্যাডভান্টেজ+ ও গুগল পারফরম্যান্স ম্যাক্স মাস্টার করা।" },
      { en: "Build automated marketing workflows using Make.com, Zapier, and ManyChat.", bn: "মেক.কম ও মেনিচ্যাট দিয়ে সম্পূর্ণ অটোমেটেড সেলস ফানেল তৈরি।" },
      { en: "Analyze customer churn, lifetime value, and ROAS with AI analytics tools.", bn: "এআই অ্যানালিটিক্স দিয়ে আরওএএস ও আরওআই বৃদ্ধি করা।" }
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: { en: "Module 1: AI Prompt Engineering & Content Strategy for Marketers", bn: "মডিউল ১: মার্কেটারদের জন্য এআই প্রম্পট ইঞ্জিনিয়ারিং" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Advanced ChatGPT & Claude Prompts for Copywriting & Psychology", bn: "চ্যাটজিপিটি ও ক্লড দিয়ে সাইকোলজিক্যাল সেলস কপিরাইটিং" },
          { en: "AI-Powered Buyer Persona Generation & Competitor Reverse Engineering", bn: "এআই বায়ার পার্সোনা ও প্রতিযোগী বিশ্লেষণ" },
          { en: "Creating High-Converting Landing Page Frameworks with AI", bn: "এআই দিয়ে হাই-কনভার্টিং ল্যান্ডিং পেজ তৈরি" }
        ]
      },
      {
        moduleNumber: 2,
        title: { en: "Module 2: AI Visual & Video Creative Production", bn: "মডিউল ২: এআই ভিজ্যুয়াল ও ভিডিও ক্রিয়েটিভ প্রোডাকশন" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Midjourney & Adobe Firefly for Commercial E-Commerce Ad Creatives", bn: "মিডজার্নি ও ফায়ারফ্লাই দিয়ে কমার্শিয়াল অ্যাড ব্যানার" },
          { en: "AI Video Generation & Voice Synthesis (HeyGen, ElevenLabs, Runway)", bn: "হেজেন ও ইলেভেনল্যাবস দিয়ে এআই ভিডিও ও ভয়েসওভার" },
          { en: "Batch Creation of 100+ Social Media Posts with Canva AI & Bulk Create", bn: "ক্যানভা এআই দিয়ে বাল্ক পোস্ট তৈরি" }
        ]
      },
      {
        moduleNumber: 3,
        title: { en: "Module 3: Next-Gen Meta Advantage+ & Google AI Ad Systems", bn: "মডিউল ৩: নেক্সট-জেন মেটা এআই ও গুগল এআই অ্যাড সিস্টেমস" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Meta Advantage+ Shopping Campaigns (ASC) & AI Budget Allocation", bn: "মেটা অ্যাডভান্টেজ+ শপিং ক্যাম্পেইন ও বাজেট অপ্টিমাইজেশন" },
          { en: "Google Performance Max (PMax) AI Bidding & Asset Group Architecture", bn: "গুগল পারফরম্যান্স ম্যাক্স ও এআই বিডিং স্ট্র্যাটেজি" },
          { en: "Dynamic Creative Optimization (DCO) & Predictive Audience Targeting", bn: "ডাইনামিক ক্রিয়েটিভ অপ্টিমাইজেশন ও প্রেডিক্টিভ অডিয়েন্স" }
        ]
      },
      {
        moduleNumber: 4,
        title: { en: "Module 4: Marketing Automation with Make.com, Zapier & AI Chatbots", bn: "মডিউল ৪: মেক.কম ও এআই চ্যাটবট দিয়ে মার্কেটিং অটোমেশন" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Building Multi-Step Workflows in Make.com connecting Ads to CRM", bn: "মেক.কম দিয়ে অ্যাডস থেকে সিআরএম অটোমেশন" },
          { en: "AI WhatsApp & Messenger Chatbots using OpenAI API & ManyChat", bn: "ওপেনএআই এপিআই দিয়ে হোয়াটসঅ্যাপ ও মেসেঞ্জার বট" },
          { en: "Automated Lead Scoring, Nurturing & Dynamic Email Customization", bn: "অটোমেটেড লিড স্কোরিং ও নার্চারিং সিস্টেম" }
        ]
      },
      {
        moduleNumber: 5,
        title: { en: "Module 5: AI Data Analytics, ROAS Scaling & Client Pitching", bn: "মডিউল ৫: এআই ডাটা অ্যানালিটিক্স ও আরওএএস স্কেলিং" },
        duration: { en: "4 Classes • 8 Hours", bn: "৪ টি ক্লাস • ৮ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "AI Analytics Dashboards & Attribution Modeling", bn: "এআই অ্যানালিটিক্স ড্যাশবোর্ড ও অ্যাট্রিবিউশন মডেল" },
          { en: "Scaling Ad Accounts from $50/day to $1,000/day safely", bn: "অ্যাড অ্যাকাউন্ট স্কেলিং স্ট্র্যাটেজি" },
          { en: "Packaging AI Marketing Services for High-Ticket International Retainers", bn: "হাই-টিকিট ক্লায়েন্ট রিটেইনার প্যাকেজ তৈরি" }
        ]
      }
    ],
    includedItems: [
      { en: "24 Live Hands-on AI Marketing Masterclasses", bn: "২৪ টি লাইভ এআই মার্কেটিং মাস্টারক্লাস" },
      { en: "500+ Curated Prompt Library & Automation Blueprints", bn: "৫০০+ প্রিমিয়াম প্রম্পট ও অটোমেশন ব্লুপ্রিন্ট" },
      { en: "Live AI Campaign Audits & Real Budget Scaling", bn: "লাইভ এআই ক্যাম্পেইন অডিট" },
      { en: "Certificate of Mastery in AI Digital Marketing", bn: "এআই ডিজিটাল মার্কেটিং সার্টিফাইড সনদপত্র" }
    ],
    reviews: [
      {
        id: "r4",
        name: "Arif Chowdhury",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
        role: { en: "E-Commerce Brand Owner", bn: "ই-কমার্স উদ্যোক্তা" },
        rating: 5,
        comment: {
          en: "Meta Advantage+ combined with AI ad creatives dropped our customer acquisition cost by 40%. The best modern marketing course!",
          bn: "এআই অ্যাড ক্রিয়েটিভ ব্যবহারের পর আমাদের বিজ্ঞাপনী খরচ ৪০% কমে গেছে।"
        },
        date: "2 Weeks Ago"
      }
    ]
  },

  // 5. CPA Marketing
  {
    id: "5",
    slug: "cpa-marketing",
    title: {
      en: "CPA Marketing",
      bn: "সিপিএ মার্কেটিং"
    },
    subtitle: {
      en: "Master Cost-Per-Action networks, high-converting landing pages, paid traffic funnels & affiliate scaling",
      bn: "সিপিএ নেটওয়ার্ক অনুমোদন, হাই-কনভার্টিং ল্যান্ডিং পেজ ও পেইড ট্রাফিক ফানেল তৈরি শিখুন"
    },
    category: "marketing",
    categoryLabel: {
      en: "CPA Marketing",
      bn: "সিপিএ মার্কেটিং"
    },
    badge: {
      en: "HIGH INCOME",
      bn: "হাই ইনকাম"
    },
    mode: {
      en: "Online & Offline",
      bn: "অনলাইন ও অফলাইন"
    },
    modeType: "offline",
    rating: 4.8,
    ratingsCount: 98,
    enrolledCount: "80+ Enrolled",
    languages: {
      en: "Bengali / English",
      bn: "বাংলা / ইংরেজি"
    },
    fee: "8,000৳",
    rawFee: 8000,
    originalFee: "14,000৳",
    duration: {
      en: "2.5 Months",
      bn: "২.৫ মাস"
    },
    classesCount: {
      en: "20 Classes",
      bn: "২০ টি ক্লাস"
    },
    image: "/images/cpa-nexus-banner.jpg",
    videoUrl: "https://www.facebook.com/reel/2105617167053909/",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22CPA%20Marketing%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Tariqul Islam",
      designation: {
        en: "CPA Affiliate Specialist & Funnel Architect",
        bn: "সিপিএ অ্যাফিলিয়েট স্পেশালিস্ট ও ফানেল আর্কিটেক্ট"
      },
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300",
      bio: {
        en: "8+ years in performance affiliate marketing, managing 6-figure CPA campaigns across USA & European networks.",
        bn: "৮+ বছরের আন্তর্জাতিক সিপিএ নেটওয়ার্ক ও ট্রাফিক আরবিট্রেজ অভিজ্ঞতা।"
      },
      experience: "8+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Learn the secrets of high-yield Cost-Per-Action (CPA) marketing. Discover how to get approved on top global networks (MaxBounty, CPALead, MyLead, OfferVault), build irresistible landing pages, master push and native traffic sources, and scale campaigns profitably.",
      bn: "সিপিএ (Cost-Per-Action) মার্কেটিংয়ের মাধ্যমে আন্তর্জাতিক নেটওয়ার্ক থেকে নিশ্চিত আয়ের বাস্তবমুখী কোর্স। ম্যাক্সবাউন্টি, সিপিএলিড অনুমোদন থেকে শুরু করে ল্যান্ডিং পেজ ডিজাইন এবং পেইড ট্রাফিকের খুঁটিনাটি শিখবেন।"
    },
    fullDescription: {
      en: "CPA Marketing is one of the most lucrative branches of performance marketing. Unlike standard affiliate marketing where you only earn on sales, in CPA you get paid for actions like form fills, app installs, pin submits, and email signups. This course equips you with proven funnel blueprints and traffic strategies.",
      bn: "এই কোর্সে লিড জেনারেশন, মোবাইল অ্যাপ ইন্সটল, গিফট কার্ড ও ডেটিং ফানেল তৈরির পাশাপাশি বিং অ্যাডস, পুশ নোটিফিকেশন ও নেটিভ অ্যাডসের মাধ্যমে ট্রাফিক ড্রাইভ করা শেখানো হবে।"
    },
    coreValues: [
      {
        id: "cv1",
        title: { en: "Top Network Approval Guarantee", bn: "নেটওয়ার্ক অ্যাপ্রুভাল গাইডলাইন" },
        desc: { en: "Proven step-by-step techniques to get approved on premium CPA networks.", bn: "টপ সিপিএ নেটওয়ার্কে দ্রুত অ্যাপ্রুভাল পাওয়ার ট্রিকস।" },
        icon: "ShieldCheck"
      },
      {
        id: "cv2",
        title: { en: "High-Converting Pre-Lander Funnels", bn: "হাই-কনভার্টিং ল্যান্ডিং পেজ" },
        desc: { en: "Design responsive, high-CTR pre-landers that skyrocket EPC and conversion.", bn: "ক্লিক-থ্রু রেট বাড়ানোর জন্য প্রফেশনাল ল্যান্ডিং পেজ।" },
        icon: "Zap"
      },
      {
        id: "cv3",
        title: { en: "Traffic Arbitrage Mastery", bn: "ট্রাফিক আরবিট্রেজ মাস্টারি" },
        desc: { en: "Master Native Ads, Push Ads, and Microsoft Bing Ads for positive ROI.", bn: "বিং অ্যাডস ও নেটিভ অ্যাডস দিয়ে প্রফিটেবল ক্যাম্পেইন।" },
        icon: "TrendingUp"
      }
    ],
    learningOutcomes: [
      { en: "Gain approval on Tier-1 CPA networks including MaxBounty, CPAGrip, CPALead, and MyLead.", bn: "ম্যাক্সবাউন্টি, সিপিএগ্রিপ ও মাইলিড নেটওয়ার্কে অনুমোদন লাভ।" },
      { en: "Select winning, high-EPC CPA offers with low refund rates and high payouts.", bn: "হাই-ইপিসি ও প্রফিটেবল অফার নির্বাচন করা।" },
      { en: "Build custom, high-converting landing pages using Elementor and HTML templates.", bn: "এলিমেন্টর ও এইচটিএমএল দিয়ে আকর্ষণীয় ল্যান্ডিং পেজ তৈরি।" },
      { en: "Run profitable paid traffic campaigns on Bing Ads, Push Notifications, and Native Networks.", bn: "বিং অ্যাডস ও পুশ নোটিফিকেশন অ্যাডস দিয়ে পেইড ক্যাম্পেইন রান করা।" },
      { en: "Track and optimize campaigns using BeMob/Voluum to maximize return on ad spend.", bn: "বিমব ও ভলিউম ট্র্যাকার দিয়ে আরওআই অপটিমাইজেশন।" }
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: { en: "Module 1: CPA Fundamentals & Elite Network Approvals", bn: "মডিউল ১: সিপিএ ফান্ডামেন্টালস ও নেটওয়ার্ক অনুমোদন" },
        duration: { en: "4 Classes • 8 Hours", bn: "৪ টি ক্লাস • ৮ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "What is CPA vs Affiliate Marketing: Payout Models & Terminology", bn: "সিপিএ বনাম অ্যাফিলিয়েট মার্কেটিং ও পে-আউট মডেল" },
          { en: "How to pass Network Interview: MaxBounty, CPALead, MyLead, OfferVault", bn: "ম্যাক্সবাউন্টি ও সিপিএলিড নেটওয়ার্ক ইন্টারভিউ ক্র্যাক করার ট্রিকস" },
          { en: "Understanding EPC, CR, Network Caps & Affiliate Manager Relationships", bn: "ইপিসি, সিআর এবং অ্যাফিলিয়েট ম্যানেজার ম্যানেজমেন্ট" }
        ]
      },
      {
        moduleNumber: 2,
        title: { en: "Module 2: High-Converting Offer Selection & Funnel Architecture", bn: "মডিউল ২: প্রফিটেবল অফার সিলেকশন ও ফানেল ডিজাইন" },
        duration: { en: "4 Classes • 8 Hours", bn: "৪ টি ক্লাস • ৮ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "Vertical Selection: Sweepstakes, E-Commerce, Software & Mobile Installs", bn: "হট ক্যাটাগরি: সুইপস্টেকস, সফটওয়্যার ও মোবাইল অ্যাপস" },
          { en: "Spying on Winning Competitor Ads with Anstrex / AdPlexity", bn: "স্পাই টুলস দিয়ে প্রতিযোগীদের উইনিং অ্যাডস অ্যানালাইসিস" },
          { en: "Designing Pre-Landers & Interactive Quizzes for 30%+ CTR", bn: "হাই-সিটিআর কুইজ ও প্রি-ল্যান্ডার পেজ ডিজাইন" }
        ]
      },
      {
        moduleNumber: 3,
        title: { en: "Module 3: Free Traffic Strategies (Quora, Pinterest & YouTube)", bn: "মডিউল ৩: ফ্রি ট্রাফিক মেথডস (কোরা, পিন্টারেস্ট ও ইউটিউব)" },
        duration: { en: "4 Classes • 8 Hours", bn: "৪ টি ক্লাস • ৮ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "Quora Authority Marketing & Targeted CPA Traffic Funneling", bn: "কোরা মার্কেটিং দিয়ে টার্গেটেড ট্রাফিক ড্রাইভ" },
          { en: "Pinterest Idea Pins & Viral Boards for USA Female Demographics", bn: "পিন্টারেস্ট ভাইরাল পিন ও বোর্ড তৈরি" },
          { en: "YouTube Shorts & Video SEO for Automated CPA Lead Generation", bn: "ইউটিউব শর্টস ও ভিডিও এসইও মেথড" }
        ]
      },
      {
        moduleNumber: 4,
        title: { en: "Module 4: Paid Traffic Mastery (Bing Ads, Push & Native Ads)", bn: "মডিউল ৪: পেইড ট্রাফিক মাস্টারি (বিং অ্যাডস ও পুশ অ্যাডস)" },
        duration: { en: "4 Classes • 8 Hours", bn: "৪ টি ক্লাস • ৮ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "Microsoft Bing Ads Setup, Exact Match Keywords & Direct Linking vs Landing Page", bn: "মাইক্রোসফট বিং অ্যাডস ও কিওয়ার্ড টার্গেটিং" },
          { en: "Push Notification Ads (PropellerAds, RichAds): Micro-Bidding & Blacklisting", bn: "প্রপেলারঅ্যাডস দিয়ে পুশ নোটিফিকেশন ক্যাম্পেইন" },
          { en: "Native Advertising Fundamentals (Taboola / Outbrain / MGID)", bn: "টাবুলা ও এমজিআইডি দিয়ে নেটিভ বিজ্ঞাপন" }
        ]
      },
      {
        moduleNumber: 5,
        title: { en: "Module 5: Campaign Tracking (BeMob), A/B Testing & Scaling", bn: "মডিউল ৫: ট্র্যাকিং (BeMob), এ/বি টেস্টিং ও স্কেলিং" },
        duration: { en: "4 Classes • 8 Hours", bn: "৪ টি ক্লাস • ৮ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "Setting up Postback URLs & Server-to-Server Tracking in BeMob", bn: "পোস্টব্যাক ইউআরএল ও বিমব ট্র্যাকার সেটআপ" },
          { en: "A/B Split Testing Headlines, Angles & Creative Copy", bn: "স্প্লিট টেস্টিং ও ডাটা অ্যানালাইসিস" },
          { en: "Budget Scaling, Payout Negotiations & Cash Flow Management", bn: "বাজেট স্কেলিং ও ক্যাশ ফ্লো ম্যানেজমেন্ট" }
        ]
      }
    ],
    includedItems: [
      { en: "20 Live Step-by-Step CPA Masterclasses", bn: "২০ টি লাইভ স্টেপ-বাই-স্টেপ ক্লাস" },
      { en: "Ready-to-Use High-Converting Landing Page Templates", bn: "রেডিমেড হাই-কনভার্টিং ল্যান্ডিং পেজ টেমপ্লেট" },
      { en: "CPA Network Approval Support & Manager Referrals", bn: "নেটওয়ার্ক অ্যাপ্রুভাল সাপোর্ট ও রেফারেল" },
      { en: "Certificate of Performance CPA Marketing", bn: "পারফরম্যান্স সিপিএ মার্কেটিং সার্টিফিকেট" }
    ],
    reviews: [
      {
        id: "r5",
        name: "Mehedi Hasan",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=120",
        role: { en: "CPA Affiliate Marketer", bn: "সিপিএ অ্যাফিলিয়েট" },
        rating: 5,
        comment: {
          en: "Finally got approved on MaxBounty using the instructor's exact interview techniques! My Bing Ads campaign became profitable in the 2nd week.",
          bn: "ম্যাক্সবাউন্টি অ্যাপ্রুভাল পেয়েছি এবং বিং অ্যাডস দিয়ে অলরেডি আর্নিং শুরু করেছি।"
        },
        date: "1 Month Ago"
      }
    ]
  },

  // 6. Graphics Design with AI Specialist
  {
    id: "6",
    slug: "graphics-design-ai-specialist",
    title: {
      en: "Graphics Design with AI Specialist",
      bn: "গ্রাফিক্স ডিজাইন উইথ এআই স্পেশালিস্ট"
    },
    subtitle: {
      en: "Master Adobe Photoshop, Illustrator, InDesign with Midjourney, Firefly & Stable Diffusion for Generative Art",
      bn: "ফটোশপ, ইলাস্ট্রেটর এবং মিডজার্নি ও ফায়ারফ্লাই এআই দিয়ে আধুনিক গ্রাফিক্স ডিজাইনার হোন"
    },
    category: "creative",
    categoryLabel: {
      en: "Graphics & Design",
      bn: "গ্রাফিক্স ও ডিজাইন"
    },
    badge: {
      en: "POPULAR",
      bn: "জনপ্রিয়"
    },
    mode: {
      en: "Online & Offline",
      bn: "অনলাইন ও অফলাইন"
    },
    modeType: "offline",
    rating: 4.9,
    ratingsCount: 165,
    enrolledCount: "140+ Enrolled",
    languages: {
      en: "Bengali / English",
      bn: "বাংলা / ইংরেজি"
    },
    fee: "8,000৳",
    rawFee: 8000,
    originalFee: "15,000৳",
    duration: {
      en: "3 Months",
      bn: "৩ মাস"
    },
    classesCount: {
      en: "24 Classes",
      bn: "২৪ টি ক্লাস"
    },
    image: "/images/course thumbnail/graphic design.jpg",
    videoUrl: "https://www.facebook.com/reel/889772017529060/",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Graphics%20Design%20with%20AI%20Specialist%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Rifat Al Mamun",
      designation: {
        en: "Lead Visual Designer & Creative AI Artist",
        bn: "লিড ভিজ্যুয়াল ডিজাইনার ও এআই আর্টিস্ট"
      },
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      bio: {
        en: "9+ years creating brand identities for Silicon Valley startups and pioneering AI design workflows.",
        bn: "৯+ বছরের ব্র্যান্ড আইডেন্টিটি ডিজাইন ও এআই জেনারেটিভ আর্ট অভিজ্ঞতা।"
      },
      experience: "9+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Transform into a next-generation graphic designer. Master core industry tools (Adobe Photoshop, Illustrator, InDesign) enhanced with groundbreaking Generative AI technology (Midjourney, Adobe Firefly, DALL-E 3) to create stunning commercial designs in minutes.",
      bn: "আধুনিক গ্রাফিক্স ডিজাইন ও এআই প্রযুক্তির সমন্বয়ে প্রফেশনাল ডিজাইনার হওয়ার কোর্স। অ্যাডবি ফটোশপ, ইলাস্ট্রেটর ছাড়াও মিডজার্নি ও ফায়ারফ্লাই দিয়ে ব্র্যান্ড আইডেন্টিটি, লোগো, প্যাকেজিং ও সোশ্যাল মিডিয়া ক্রিয়েটিভ তৈরি শিখবেন।"
    },
    fullDescription: {
      en: "This program combines traditional design theory (typography, color theory, visual hierarchy) with modern AI productivity. You will learn to generate custom concept art, upscale images, create vectorized logos from AI prompts, design packaging, and build a world-class Behance portfolio.",
      bn: "মার্কেটপ্লেসে ক্লায়েন্টদের দ্রুত ও প্রিমিয়াম কোয়ালিটির ডিজাইন ডেলিভারি করার জন্য এই কোর্সটি বিশেষভাবে সাজানো হয়েছে।"
    },
    coreValues: [
      {
        id: "cv1",
        title: { en: "Adobe Suite Mastery", bn: "অ্যাডবি সুইট মাস্টারি" },
        desc: { en: "Expert training in Photoshop, Illustrator & InDesign tools.", bn: "ফটোশপ ও ইলাস্ট্রেটরের গভীর ব্যবহারিক জ্ঞান।" },
        icon: "Palette"
      },
      {
        id: "cv2",
        title: { en: "Generative AI Art Integration", bn: "জেনারেটিভ এআই আর্ট" },
        desc: { en: "Harness Midjourney & Firefly for rapid asset generation.", bn: "মিডজার্নি ও ফায়ারফ্লাই দিয়ে আর্ট তৈরি।" },
        icon: "Cpu"
      },
      {
        id: "cv3",
        title: { en: "Commercial Branding & Print", bn: "কমার্শিয়াল ব্র্যান্ডিং ও প্রিন্ট" },
        desc: { en: "Create brand identity kits, vector logos, and packaging designs.", bn: "লোগো, ব্র্যান্ডিং কিট ও প্যাকেজিং ডিজাইন।" },
        icon: "Award"
      }
    ],
    learningOutcomes: [
      { en: "Master Adobe Photoshop tools, layers, masking, photo manipulation, and color correction.", bn: "ফটোশপ লেয়ার, মাস্কিং, ফটো ম্যানিপুলেশন ও কালার গ্রেডিং।" },
      { en: "Create scalable vector graphics, custom typography, and logos in Adobe Illustrator.", bn: "ইলাস্ট্রেটরে ভেক্টর আর্ট, টাইপোগ্রাফি ও লোগো ডিজাইন।" },
      { en: "Generate commercial-grade illustrations and concept art using Midjourney and Adobe Firefly.", bn: "মিডজার্নি ও ফায়ারফ্লাই দিয়ে কমার্শিয়াল আর্ট তৈরি।" },
      { en: "Design comprehensive corporate brand identity guidelines, business cards, and packaging.", bn: "কর্পোরেট ব্র্যান্ড আইডেন্টিটি গাইডলাইন ও প্যাকেজিং।" },
      { en: "Build a standout portfolio on Behance and Dribbble to attract high-paying clients.", bn: "বিহ্যান্স ও ড্রিবলে প্রফেশনাল পোর্টফোলিও তৈরি।" }
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: { en: "Module 1: Design Principles & Adobe Photoshop Mastery", bn: "মডিউল ১: ডিজাইন প্রিন্সিপালস ও ফটোশপ মাস্টারি" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Visual Hierarchy, Color Psychology, Typography & Composition", bn: "কালার সাইকোলজি, টাইপোগ্রাফি ও ভিজ্যুয়াল কম্পোজিশন" },
          { en: "Pen Tool, Selection Techniques, Layer Masks & Smart Objects", bn: "পেন টুল, সিলেকশন টেকনিক ও স্মার্ট অবজেক্টস" },
          { en: "Advanced Photo Manipulation, Retouching & Social Media Ad Banners", bn: "ফটো ম্যানিপুলেশন ও সোশ্যাল মিডিয়া ব্যানার" }
        ]
      },
      {
        moduleNumber: 2,
        title: { en: "Module 2: Adobe Illustrator & Vector Logo Design", bn: "মডিউল ২: অ্যাডবি ইলাস্ট্রেটর ও ভেক্টর লোগো ডিজাইন" },
        duration: { en: "6 Classes • 12 Hours", bn: "৬ টি ক্লাস • ১২ ঘণ্টা" },
        lessonsCount: 7,
        topics: [
          { en: "Vector vs Raster, Pathfinder, Shape Builder & Pen Tool Mastery", bn: "পাথফাইন্ডার, শেপ বিল্ডার ও পেন টুল ব্যবহার" },
          { en: "Logo Design Concept Generation, Golden Ratio & Modern Typography", bn: "গোল্ডেন রেশিও লোগো ডিজাইন ও টাইপোগ্রাফি" },
          { en: "Brand Identity Guidelines, Color Palettes & Stationery Kits", bn: "ব্র্যান্ড আইডেন্টিটি গাইডলাইন ও স্টেশনারি কিট" }
        ]
      },
      {
        moduleNumber: 3,
        title: { en: "Module 3: Generative AI for Designers (Midjourney & Firefly)", bn: "মডিউল ৩: ডিজাইনারদের জন্য জেনারেটিভ এআই" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Midjourney Prompt Architecture (Lighting, Styles, Aspect Ratios, Seeds)", bn: "মিডজার্নি প্রম্পট ইঞ্জিনিয়ারিং ও স্টাইল কমান্ড" },
          { en: "Adobe Firefly Generative Fill & Generative Recolor in Illustrator", bn: "অ্যাডবি ফায়ারফ্লাই জেনারেটিভ ফিল ও রিকালার" },
          { en: "Vectorizing AI Art & Cleaning AI-Generated Assets for Print", bn: "এআই আর্ট ভেক্টরাইজেশন ও প্রিন্ট রেডি ফরম্যাট" }
        ]
      },
      {
        moduleNumber: 4,
        title: { en: "Module 4: Packaging, Print Media & T-Shirt Design", bn: "মডিউল ৪: প্যাকেজিং, প্রিন্ট মিডিয়া ও টি-শার্ট ডিজাইন" },
        duration: { en: "4 Classes • 8 Hours", bn: "৪ টি ক্লাস • ৮ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "Dielines, Bleed, CMYK vs RGB & Print Production Standards", bn: "ডাইলাইন, ব্লিড ও সিএমওয়াইকে প্রিন্টিং মেথড" },
          { en: "Product Box Packaging, Label Design & 3D Mockup Presentation", bn: "প্রোডাক্ট বক্স ও লেবেল ডিজাইন এবং ৩ডি মকআপ" },
          { en: "Merchandise & T-Shirt Graphics for Print-on-Demand (POD)", bn: "প্রিন্ট-অন-ডিমান্ডের জন্য টি-শার্ট গ্রাফিক্স" }
        ]
      },
      {
        moduleNumber: 5,
        title: { en: "Module 5: Portfolio on Behance & Freelance Career", bn: "মডিউল ৫: বিহ্যান্স পোর্টফোলিও ও ফ্রিল্যান্স ক্যারিয়ার" },
        duration: { en: "4 Classes • 8 Hours", bn: "৪ টি ক্লাস • ৮ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "Creating World-Class Behance Case Studies with Realistic Mockups", bn: "বিহ্যান্স কেস স্টাডি ও প্রফেশনাল প্রেজেন্টেশন" },
          { en: "Selling on Microstock Platforms (Freepik, Adobe Stock, Creative Market)", bn: "ফ্রিপিক ও অ্যাডবি স্টকে ডিজাইন বিক্রি" },
          { en: "Fiverr Graphic Design Gigs & Direct Client Contracts", bn: "ফাইভার গিগ অপ্টিমাইজেশন ও ক্লায়েন্ট কমিউনিকেশন" }
        ]
      }
    ],
    includedItems: [
      { en: "24 Live Interactive Creative Workshops", bn: "২৪ টি লাইভ প্র্যাকটিক্যাল ওয়ার্কশপ" },
      { en: "10,000+ Premium Design Assets, Fonts & Mockups", bn: "১০,০০০+ প্রিমিয়াম ফন্ট, মকআপ ও রিসোর্স" },
      { en: "Behance Portfolio Review & Mentorship", bn: "বিহ্যান্স পোর্টফোলিও রিভিউ" },
      { en: "Industry Graphic Design Certificate", bn: "ইন্ডাস্ট্রি গ্রাফিক্স ডিজাইন সার্টিফিকেট" }
    ],
    reviews: [
      {
        id: "r6",
        name: "Sumaiya Akter",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120",
        role: { en: "Brand Designer at PixFlow", bn: "ব্র্যান্ড ডিজাইনার" },
        rating: 5,
        comment: {
          en: "The integration of Midjourney with Illustrator has 5x'd my design speed! My Behance portfolio got featured within weeks of finishing this course.",
          bn: "মিডজার্নি ও ইলাস্ট্রেটরের কম্বিনেশন আমার কাজের গতি বহুগুণ বাড়িয়ে দিয়েছে।"
        },
        date: "3 Weeks Ago"
      }
    ]
  },

  // 7. Motion Graphics with Video Editing Specialist
  {
    id: "7",
    slug: "motion-graphics-video-editing",
    title: {
      en: "Motion Graphics with Video Editing Specialist",
      bn: "মোশন গ্রাফিক্স উইথ ভিডিও এডিটিং স্পেশালিস্ট"
    },
    subtitle: {
      en: "Master Adobe Premiere Pro, After Effects, Kinetic Typography, 2D Animation & Visual Effects (VFX)",
      bn: "এডবি প্রিমিয়ার প্রো এবং আফটার ইফেক্টস দিয়ে প্রফেশনাল ভিডিও এডিটিং ও মোশন গ্রাফিক্স শিখুন"
    },
    category: "creative",
    categoryLabel: {
      en: "Motion & Video",
      bn: "মোশন ও ভিডিও"
    },
    badge: {
      en: "TRENDING",
      bn: "ট্রেন্ডিং"
    },
    mode: {
      en: "Online & Offline",
      bn: "অনলাইন ও অফলাইন"
    },
    modeType: "offline",
    rating: 4.9,
    ratingsCount: 128,
    enrolledCount: "105+ Enrolled",
    languages: {
      en: "Bengali / English",
      bn: "বাংলা / ইংরেজি"
    },
    fee: "9,000৳",
    rawFee: 9000,
    originalFee: "16,000৳",
    duration: {
      en: "3 Months",
      bn: "৩ মাস"
    },
    classesCount: {
      en: "24 Classes",
      bn: "২৪ টি ক্লাস"
    },
    image: "/images/course thumbnail/video editing &motion graphics.jpg",
    videoUrl: "https://www.facebook.com/reel/889772017529060/",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Motion%20Graphics%20with%20Video%20Editing%20Specialist%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Hasibul Hasan",
      designation: {
        en: "Senior Motion Director & VFX Artist",
        bn: "সিনিয়র মোশন ডিরেক্টর ও ভিএফএক্স আর্টিস্ট"
      },
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
      bio: {
        en: "8+ years producing commercial motion ads, YouTube shows, and broadcast graphics for top television networks.",
        bn: "৮+ বছরের মোশন ডিজাইন, টিভি কমার্শিয়াল ও ইউটিউব শো প্রোডাকশন অভিজ্ঞতা।"
      },
      experience: "8+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Master the art of visual storytelling. Learn professional timeline editing, cinematic color grading, sound design in Adobe Premiere Pro, and create eye-catching 2D animations, logo reveals, kinetic typography, and visual effects in Adobe After Effects.",
      bn: "ভিডিও এডিটিং ও মোশন গ্রাফিক্সের পূর্ণাঙ্গ ক্যারিয়ার কোর্স। প্রিমিয়ার প্রো দিয়ে স্টোরিটেলিং ও কালার গ্রেডিং এবং আফটার ইফেক্টস দিয়ে কাইনেটিক টাইপোগ্রাফি, লোগো অ্যানিমেশন ও ভিএফএক্স তৈরি শিখবেন।"
    },
    fullDescription: {
      en: "Video content dominates modern marketing, YouTube, TikTok, and social media. In this course, you will work on real footage to master pacing, sound effects (SFX), keyframe easing, camera tracking, green screen keying, and high-energy short-form video editing.",
      bn: "এই কোর্সে রিয়েল ফুটেজ নিয়ে প্র্যাকটিস করার মাধ্যমে ইউটিউব ভিডিও, ফেসবুক রিলস এবং টিভি কমার্শিয়ালের জন্য আধুনিক মোশন গ্রাফিক্স তৈরি শেখানো হয়।"
    },
    coreValues: [
      {
        id: "cv1",
        title: { en: "Cinematic Premiere Pro Editing", bn: "সিনেমাটিক প্রিমিয়ার প্রো এডিটিং" },
        desc: { en: "Master pacing, multi-cam, speed ramping, and Lumetri color grading.", bn: "মাল্টি-ক্যাম এডিটিং ও সিনেমাটিক কালার গ্রেডিং।" },
        icon: "Video"
      },
      {
        id: "cv2",
        title: { en: "Advanced After Effects 2D Animation", bn: "আফটার ইফেক্টস ২ডি অ্যানিমেশন" },
        desc: { en: "Graph editor easing, shape animations, and kinetic typography.", bn: "গ্রাফ এডিটর স্পিড কার্ভ ও শেপ অ্যানিমেশন।" },
        icon: "Play"
      },
      {
        id: "cv3",
        title: { en: "Commercial Short-Form Mastery", bn: "শর্ট-ফর্ম ভিডিও মাস্টারি" },
        desc: { en: "Create viral YouTube Shorts, Instagram Reels & TikTok commercial ads.", bn: "ভাইরাল রিলস ও ইউটিউব শর্টস এডিটিং।" },
        icon: "Zap"
      }
    ],
    learningOutcomes: [
      { en: "Edit commercial videos with professional pacing, cuts, and transitions in Premiere Pro.", bn: "প্রিমিয়ার প্রো দিয়ে প্রফেশনাল ভিডিও এডিটিং ও ট্রানজিশন।" },
      { en: "Apply Hollywood-grade color correction and color grading using Lumetri Color & LUTs.", bn: "লুমেট্রি কালার দিয়ে হলিউড-গ্রেড কালার গ্রেডিং।" },
      { en: "Animate logos, kinetic typography, and infographic motion designs in After Effects.", bn: "আফটার ইফেক্টসে লোগো অ্যানিমেশন ও টাইপোগ্রাফি।" },
      { en: "Master green screen keying, rotoscoping, camera tracking, and VFX compositing.", bn: "গ্রিন স্ক্রিন রিমুভ, রোUpSync ও ক্যামেরা ট্র্যাকিং।" },
      { en: "Craft soundscapes with sound effects (SFX), audio leveling, and background music balancing.", bn: "সাউন্ড এফেক্টস (SFX) ও অডিও মিক্সিং মাস্টারি।" }
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: { en: "Module 1: Adobe Premiere Pro Timeline & Narrative Editing", bn: "মডিউল ১: প্রিমিয়ার প্রো টাইমলাইন ও ন্যারেটিভ এডিটিং" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Premiere Pro Interface, Project Organization & Ingest Workflow", bn: "প্রজেক্ট অর্গানাইজেশন ও ওয়ার্কস্পেস সেটআপ" },
          { en: "Cut Types (J-Cut, L-Cut, Match Cut) & Narrative Storytelling Pacing", bn: "কাট টাইপস (জে-কাট, এল-কাট) ও স্টোরিটেলিং পেসিং" },
          { en: "Multi-Camera Syncing & Speed Ramping / Time Remapping", bn: "মাল্টি-ক্যামেরা সিঙ্ক ও স্পিড র‍্যাম্পিং" }
        ]
      },
      {
        moduleNumber: 2,
        title: { en: "Module 2: Color Grading (Lumetri Color) & Sound Design", bn: "মডিউল ২: কালার গ্রেডিং ও সাউন্ড ডিজাইন" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Scopes (Waveform, Vectorscope), White Balance & Exposure Correction", bn: "কালার স্কোপস, হোয়াইট ব্যালেন্স ও এক্সপোজার ফিক্স" },
          { en: "Creating Cinematic Look, Custom LUTs & Skin Tone Isolation", bn: "সিনেমাটিক লুক তৈরি ও স্কিন টোন প্রটেকশন" },
          { en: "Audio Cleanup (Noise Reduction, EQ, Compression) & Foley SFX Design", bn: "নয়েজ রিডাকশন, অডিও কম্প্রেশন ও এসএফএক্স ডিজাইন" }
        ]
      },
      {
        moduleNumber: 3,
        title: { en: "Module 3: After Effects Core & Graph Editor Animation", bn: "মডিউল ৩: আফটার ইফেক্টস কোর ও গ্রাফ এডিটর অ্যানিমেশন" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Compositions, Null Objects, Parenting, Anchor Points & Spatial Curves", bn: "কম্পোজিশন, নাল অবজেক্টস ও প্যারেন্টিং আর্কিটেকচার" },
          { en: "Graph Editor Value & Speed Curves for Organic, Smooth Motion", bn: "গ্রাফ এডিটর স্পিড কার্ভ ও স্মুথ মোশন" },
          { en: "Shape Layer Morphing, Trim Paths & Liquid Motion Graphics", bn: "শেপ লেয়ার মরফিং ও লিকুইড মোশন" }
        ]
      },
      {
        moduleNumber: 4,
        title: { en: "Module 4: Kinetic Typography, Logo Reveals & Visual Effects (VFX)", bn: "মডিউল ৪: কাইনেটিক টাইপোগ্রাফি, লোগো রিভিল ও ভিএফএক্স" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Kinetic Typography Animations with Text Animators & Expressions", bn: "টেক্সট অ্যানিমেটর ও এক্সপ্রেশনস দিয়ে টাইপোগ্রাফি" },
          { en: "3D Camera Tracking, Screen Replacement & Parallax Effect", bn: "৩ডি ক্যামেরা ট্র্যাকিং ও স্ক্রিন রিপ্লেসমেন্ট" },
          { en: "Keylight Green Screen, Rotobrush & Particle Effects", bn: "গ্রিন স্ক্রিন কিলাইটিং ও পার্টিকেল এফেক্টস" }
        ]
      },
      {
        moduleNumber: 5,
        title: { en: "Module 5: Commercial Ads, Viral Shorts & Client Showreels", bn: "মডিউল ৫: কমার্শিয়াল অ্যাডস, ভাইরাল শর্টস ও শোরিল" },
        duration: { en: "4 Classes • 8 Hours", bn: "৪ টি ক্লাস • ৮ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "Editing High-Retention YouTube Documentaries & Ali Abdaal / Iman Gadzhi Style", bn: "হাই-রিটেনশন ইউটিউব ভিডিও এডিটিং স্টাইল" },
          { en: "Instagram Reels & TikTok Commercial Motion Graphics", bn: "রিলস ও টিকটক কমার্শিয়াল মোশন ডিজাইন" },
          { en: "Building a High-Impact Video Showreel & Freelance Client Hunting", bn: "প্রফেশনাল ভিডিও শোরিল ও ফ্রিল্যান্স ক্লায়েন্ট সংগ্রহ" }
        ]
      }
    ],
    includedItems: [
      { en: "24 Live Hands-on Video Editing & Motion Workshops", bn: "২৪ টি লাইভ প্র্যাকটিক্যাল ওয়ার্কশপ" },
      { en: "50GB+ Cinematic LUTs, Sound FX & Motion Templates", bn: "৫০ জিবি+ প্রিমিয়াম সাউন্ড এফেক্টস ও মোশন টেমপ্লেট" },
      { en: "Personalized Video Showreel Audit", bn: "ভিডিও শোরিল রিভিউ ও ফিডব্যাক" },
      { en: "Certificate of Professional Video & Motion Design", bn: "প্রফেশনাল ভিডিও ও মোশন সার্টিফিকেট" }
    ],
    reviews: [
      {
        id: "r7",
        name: "Tanvir Rahman",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120",
        role: { en: "Video Editor for YouTube Creators", bn: "ভিডিও এডিটর" },
        rating: 5,
        comment: {
          en: "The After Effects graph editor lessons transformed my animations from amateur to broadcast-level. Outstanding mentor support!",
          bn: "আফটার ইফেক্টসে গ্রাফ এডিটর ব্যবহারের পর আমার মোশন অ্যানিমেশনের কোয়ালিটি অনেক উন্নত হয়েছে।"
        },
        date: "1 Month Ago"
      }
    ]
  },

  // 8. Flutter App Development Specialist
  {
    id: "8",
    slug: "flutter-app-development-specialist",
    title: {
      en: "Flutter App Development Specialist",
      bn: "ফ্লাটার অ্যাপ ডেভেলপমেন্ট স্পেশালিস্ট"
    },
    subtitle: {
      en: "Build production-ready iOS & Android apps with Flutter, Dart, Riverpod, Firebase, SQLite & Clean Architecture",
      bn: "ফ্লাটার ও ডার্ট দিয়ে আইওএস এবং অ্যান্ড্রয়েডের জন্য হাই-পারফরম্যান্স মোবাইল অ্যাপ তৈরি শিখুন"
    },
    category: "software",
    categoryLabel: {
      en: "App Development",
      bn: "অ্যাপ ডেভেলপমেন্ট"
    },
    badge: {
      en: "HIGH DEMAND",
      bn: "হাই ডিমান্ড"
    },
    mode: {
      en: "Online & Offline",
      bn: "অনলাইন ও অফলাইন"
    },
    modeType: "offline",
    rating: 4.9,
    ratingsCount: 145,
    enrolledCount: "130+ Enrolled",
    languages: {
      en: "Bengali / English",
      bn: "বাংলা / ইংরেজি"
    },
    fee: "10,000৳",
    rawFee: 10000,
    originalFee: "18,000৳",
    duration: {
      en: "3.5 Months",
      bn: "৩.৫ মাস"
    },
    classesCount: {
      en: "28 Classes",
      bn: "২৮ টি ক্লাস"
    },
    image: "/images/course thumbnail/flutter app.jpg",
    videoUrl: "https://www.facebook.com/reel/1080717277950305/",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Flutter%20App%20Development%20Specialist%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Engr. Nayeem Islam",
      designation: {
        en: "Lead Mobile Architect & Flutter Expert",
        bn: "লিড মোবাইল আর্কিটেক্ট ও ফ্লাটার বিশেষজ্ঞ"
      },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      bio: {
        en: "7+ years developing top-charting mobile applications with 1M+ downloads across App Store & Play Store.",
        bn: "৭+ বছরের ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ ও ফ্লাটার ইকোসিস্টেম অভিজ্ঞতা।"
      },
      experience: "7+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Become a professional Cross-Platform Mobile Engineer. Master the Dart programming language, Flutter UI framework, state management with Riverpod and Bloc, Firebase backend integration, REST API consumption, local caching, and publishing to Google Play Store & Apple App Store.",
      bn: "একক কোডবেস দিয়ে অ্যান্ড্রয়েড ও আইওএস উভয়ের জন্যই আন্তর্জাতিক মানের অ্যাপ তৈরির কোর্স। ডার্ট প্রোগ্রামিং, ফ্লাটার ইউআই, স্টেট ম্যানেজমেন্ট (রিভারপড/ব্লক), ফায়ারবেস ও প্লে স্টোরে অ্যাপ পাবলিশিং শিখবেন।"
    },
    fullDescription: {
      en: "Flutter is Google's UI toolkit for building natively compiled applications. In this course, you will build 4 production-grade mobile applications, implementing clean architecture, offline-first syncing with SQLite/Hive, push notifications, payment gateways, and Google Maps integration.",
      bn: "থিওরির পাশাপাশি ৪টি বাস্তবমুখী ফুল-ফিচারড মোবাইল অ্যাপ তৈরি করে আপনাকে দেশি ও বিদেশি প্রতিষ্ঠানে মোবাইল অ্যাপ ডেভেলপার হিসেবে ক্যারিয়ার গড়ার জন্য প্রস্তুত করা হবে।"
    },
    coreValues: [
      {
        id: "cv1",
        title: { en: "Single Codebase for iOS & Android", bn: "একটি কোডবেস উভয় প্ল্যাটফর্ম" },
        desc: { en: "Write once, run seamlessly on both mobile platforms at native speed.", bn: "একটি কোড দিয়ে আইওএস ও অ্যান্ড্রয়েড উভয় অ্যাপ তৈরি।" },
        icon: "Smartphone"
      },
      {
        id: "cv2",
        title: { en: "State Management & Clean Architecture", bn: "স্টেট ম্যানেজমেন্ট ও ক্লিন আর্কিটেকচার" },
        desc: { en: "Enterprise Riverpod & BLoC state management patterns.", bn: "রিভারপড ও ব্লক প্যাটার্নে স্কেলেবল আর্কিটেকচার।" },
        icon: "Layers"
      },
      {
        id: "cv3",
        title: { en: "Full Backend & Cloud Sync", bn: "ক্লাউড সিঙ্ক ও ফায়ারবেস" },
        desc: { en: "Firebase Auth, Firestore, Cloud Messaging & Offline SQLite storage.", bn: "ফায়ারবেস অথ, ক্লাউড ফায়ারস্টোর ও অফলাইন ডাটাবেস।" },
        icon: "Cloud"
      }
    ],
    learningOutcomes: [
      { en: "Master Dart programming language, OOP principles, Null Safety, and Asynchronous Streams.", bn: "ডার্ট ওওপি, নাল সেফটি ও অ্যাসিঙ্ক স্ট্রিমস আয়ত্ত করা।" },
      { en: "Build pixel-perfect, responsive Flutter UIs with custom animations and widgets.", bn: "কাস্টম অ্যানিমেশন ও উইজেটস দিয়ে আকর্ষণীয় মোবাইল ইউআই তৈরি।" },
      { en: "Architect complex apps using Riverpod and BLoC state management patterns.", bn: "রিভারপড ও ব্লক প্যাটার্ন দিয়ে স্কেলেবল অ্যাপ আর্কিটেকচার।" },
      { en: "Integrate Firebase Authentication, Firestore Database, Push Notifications, and Cloud Storage.", bn: "ফায়ারবেস অথ, ফায়ারস্টোর ডাটাবেস ও পুশ নোটিফিকেশন ইন্টিগ্রেশন।" },
      { en: "Publish and release apps on Google Play Store and Apple App Store.", bn: "গুগল প্লে স্টোর ও অ্যাপ স্টোরে অ্যাপ পাবলিশ করার নিয়মাবলী।" }
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: { en: "Module 1: Dart Programming & Object-Oriented Principles", bn: "মডিউল ১: ডার্ট প্রোগ্রামিং ও ওওপি প্রিন্সিপালস" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Dart Syntax, Data Types, Control Flow & Null Safety In-Depth", bn: "ডার্ট সিনট্যাক্স, ডাটা টাইপস ও নাল সেফটি" },
          { en: "OOP in Dart: Classes, Inheritance, Mixins, Interfaces & Polymorphism", bn: "ডার্ট ওওপি: ক্লাসেস, মিক্সিন্স ও ইন্টারফেস" },
          { en: "Asynchronous Dart: Futures, Streams, Generators & Error Handling", bn: "ফিউচারস, স্ট্রিমস ও অ্যাসিঙ্ক ডাটা হ্যান্ডলিং" }
        ]
      },
      {
        moduleNumber: 2,
        title: { en: "Module 2: Flutter UI Mastery, Layouts & Custom Animations", bn: "মডিউল ২: ফ্লাটার ইউআই, লেআউটস ও কাস্টম অ্যানিমেশন" },
        duration: { en: "6 Classes • 12 Hours", bn: "৬ টি ক্লাস • ১২ ঘণ্টা" },
        lessonsCount: 7,
        topics: [
          { en: "Stateless vs Stateful Widgets, Widget Lifecycle & Element Tree", bn: "স্টেটলেস ও স্টেটফুল উইজেটস এবং উইজেট লাইফসাইকেল" },
          { en: "Responsive Layouts (Flex, Row, Column, Stack, CustomScrollView)", bn: "রেসপনসিভ লেআউটস ও স্ক্রোলভিউ ডিজাইন" },
          { en: "Implicit & Explicit Animations, Hero Transitions & Custom Painters", bn: "ইমপ্লিসিট ও এক্সপ্লিসিট অ্যানিমেশন এবং হিরো ট্রানজিশন" }
        ]
      },
      {
        moduleNumber: 3,
        title: { en: "Module 3: State Management (Riverpod & BLoC Pattern)", bn: "মডিউল ৩: স্টেট ম্যানেজমেন্ট (রিভারপড ও ব্লক প্যাটার্ন)" },
        duration: { en: "6 Classes • 12 Hours", bn: "৬ টি ক্লাস • ১২ ঘণ্টা" },
        lessonsCount: 7,
        topics: [
          { en: "Why State Management? Provider vs Riverpod vs BLoC", bn: "স্টেট ম্যানেজমেন্টের প্রয়োজনীয়তা ও তুলনা" },
          { en: "Riverpod 2.0: StateNotifier, AsyncNotifier, Code Generation & Modifiers", bn: "রিভারপড ২.০: স্টেটনোটিফায়ার ও অ্যাসিনক্রোনাস স্টেট" },
          { en: "Clean Architecture: Data Layer, Domain Layer, Presentation Layer", bn: "ক্লিন আর্কিটেকচার ও ডিপেন্ডেন্সি ইনজেকশন" }
        ]
      },
      {
        moduleNumber: 4,
        title: { en: "Module 4: REST APIs, Firebase Backend & Local SQLite Storage", bn: "মডিউল ৪: রেস্ট এপিআই, ফায়ারবেস ও লোকাল স্টোরেজ" },
        duration: { en: "6 Classes • 12 Hours", bn: "৬ টি ক্লাস • ১২ ঘণ্টা" },
        lessonsCount: 7,
        topics: [
          { en: "Consuming RESTful APIs with Dio, JSON Serialization & Interceptors", bn: "ডিও দিয়ে রেস্ট এপিআই কল ও ইন্টারসেপ্টরস" },
          { en: "Firebase Auth, Cloud Firestore, Cloud Functions & FCM Push Notifications", bn: "ফায়ারবেস অথ, ক্লাউড ফায়ারস্টোর ও পুশ নোটিফিকেশন" },
          { en: "Offline-First Caching with Hive and SQLite (sqflite)", bn: "হাইভ ও এসকিউলাইটের মাধ্যমে অফলাইন ডাটা সিঙ্ক" }
        ]
      },
      {
        moduleNumber: 5,
        title: { en: "Module 5: Real-World E-Commerce App & Store Deployment", bn: "মডিউল ৫: রিয়েল-ওয়ার্ল্ড ই-কমার্স অ্যাপ ও স্টোর পাবলিশিং" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Building a Full-Featured Food Delivery / E-Commerce Mobile App", bn: "ফুল ফিচারড ফুড ডেলিভারি / ই-কমার্স অ্যাপ প্রজেক্ট" },
          { en: "Google Maps Integration, Live Location Tracking & Payment Gateways", bn: "গুগল ম্যাপস ট্র্যাকিং ও পেমেন্ট গেটওয়ে" },
          { en: "App Bundles, Keystore Signing, Google Play Console & Apple App Store Publishing", bn: "অ্যাপ সাইনিং ও প্লে স্টোরে অ্যাপ রিলিজ" }
        ]
      }
    ],
    includedItems: [
      { en: "28 Live Interactive Coding Classes", bn: "২৮ টি লাইভ কোডিং ক্লাস" },
      { en: "4 Complete Production Mobile App Codebases", bn: "৪টি কমপ্লিট মোবাইল অ্যাপ সোর্স কোড" },
      { en: "Play Store & App Store Deployment Guidance", bn: "প্লে স্টোর পাবলিশিং গাইডেন্স" },
      { en: "Verified Flutter App Specialist Certificate", bn: "সার্টিফাইড ফ্লাটার স্পেশালিস্ট সনদপত্র" }
    ],
    reviews: [
      {
        id: "r8",
        name: "Jamil Hossain",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
        role: { en: "Flutter Developer at AppStudio", bn: "ফ্লাটার ডেভেলপার" },
        rating: 5,
        comment: {
          en: "Riverpod state management and Clean Architecture lessons made enterprise app development so straightforward. Published my first app on Play Store!",
          bn: "ক্লিন আর্কিটেকচার ও রিভারপড দিয়ে অ্যাপ বানানোর মেথড অত্যন্ত চমৎকার ছিল।"
        },
        date: "2 Weeks Ago"
      }
    ]
  },

  // 9. Master in ASP.NET Specialist
  {
    id: "9",
    slug: "master-in-asp-net-specialist",
    title: {
      en: "Master in ASP.NET Specialist",
      bn: "মাস্টার ইন এএসপি.নেট স্পেশালিস্ট"
    },
    subtitle: {
      en: "Master C# 12, ASP.NET Core 8 Web API, Entity Framework Core, SQL Server, Clean Architecture & Azure Deployment",
      bn: "সি-শার্প, এএসপি.নেট কোর ওয়েব এপিআই, এন্টিটি ফ্রেমওয়ার্ক ও এসকিউএল সার্ভার দিয়ে এন্টারপ্রাইজ সফটওয়্যার ডেভেলপমেন্ট"
    },
    category: "software",
    categoryLabel: {
      en: "Enterprise .NET",
      bn: "এন্টারপ্রাইজ ডটনেট"
    },
    badge: {
      en: "ENTERPRISE",
      bn: "এন্টারপ্রাইজ"
    },
    mode: {
      en: "Online & Offline",
      bn: "অনলাইন ও অফলাইন"
    },
    modeType: "offline",
    rating: 4.9,
    ratingsCount: 110,
    enrolledCount: "90+ Enrolled",
    languages: {
      en: "Bengali / English",
      bn: "বাংলা / ইংরেজি"
    },
    fee: "12,000৳",
    rawFee: 12000,
    originalFee: "22,000৳",
    duration: {
      en: "3.5 Months",
      bn: "৩.৫ মাস"
    },
    classesCount: {
      en: "28 Classes",
      bn: "২৮ টি ক্লাস"
    },
    image: "/images/course thumbnail/enterprise full stack next.js 15.jpg",
    videoUrl: "https://www.facebook.com/reel/1931942940836268/",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Master%20in%20ASP.NET%20Specialist%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Engr. Moniruzzaman",
      designation: {
        en: "Lead Enterprise .NET Architect",
        bn: "লিড এন্টারপ্রাইজ ডটনেট আর্কিটেক্ট"
      },
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
      bio: {
        en: "11+ years developing high-security banking software and enterprise .NET backends for multinational corporations.",
        bn: "১১+ বছরের এন্টারপ্রাইজ ডটনেট সফটওয়্যার ও ব্যাংকিং সিস্টেমস ডেভেলপমেন্ট অভিজ্ঞতা।"
      },
      experience: "11+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Step into enterprise software engineering. Master C# 12, ASP.NET Core 8 Web APIs, Entity Framework Core (EF Core), Microsoft SQL Server database optimization, Repository Pattern, Clean Architecture, Identity security, and Azure cloud deployment.",
      bn: "মাইক্রোসফট টেকনোলজি স্ট্যাকে প্রফেশনাল সফটওয়্যার ইঞ্জিনিয়ার হওয়ার কমপ্লিট কোর্স। সি-শার্প ১২, এএসপি.নেট কোর ৮, এন্টিটি ফ্রেমওয়ার্ক কোর, এসকিউএল সার্ভার ও ক্লিন আর্কিটেকচার দিয়ে ব্যাংক ও কর্পোরেট লেভেল সফটওয়্যার তৈরি শিখবেন।"
    },
    fullDescription: {
      en: "ASP.NET Core is the gold standard for high-performance enterprise web applications. This curriculum focuses on building maintainable, testable, and secure RESTful services. You'll master dependency injection, LINQ, code-first migrations, JWT/Identity authentication, and Azure DevOps CI/CD pipelines.",
      bn: "কর্পোরেট জব মার্কেটে ডটনেট ডেভেলপারদের আকাশচুম্বী চাহিদা রয়েছে। এই কোর্সে রিয়েল এন্টারপ্রাইজ প্রজেক্টের মাধ্যমে ইন্ডাস্ট্রি স্ট্যান্ডার্ড সফটওয়্যার তৈরি শেখানো হয়।"
    },
    coreValues: [
      {
        id: "cv1",
        title: { en: "Clean Architecture & SOLID", bn: "ক্লিন আর্কিটেকচার ও সলিড" },
        desc: { en: "Enterprise CQRS, Repository Pattern & Dependency Injection.", bn: "ক্লিন আর্কিটেকচার ও সিউকিউআরএস প্যাটার্ন।" },
        icon: "Code2"
      },
      {
        id: "cv2",
        title: { en: "High Performance EF Core & SQL", bn: "ইএফ কোর ও এসকিউএল সার্ভার" },
        desc: { en: "Code-First migrations, optimized LINQ queries, and indexing.", bn: "কোড-ফার্স্ট মাইগ্রেশন ও অপ্টিমাইজড এসকিউএল কুয়েরি।" },
        icon: "Database"
      },
      {
        id: "cv3",
        title: { en: "Enterprise Identity & Azure Cloud", bn: "আইডেন্টিটি ও এজুর ক্লাউড" },
        desc: { en: "ASP.NET Core Identity, JWT, OAuth2, and Microsoft Azure CI/CD.", bn: "জেডব্লিউটি অথেনটিকেশন ও এজুর ডেপ্লয়মেন্ট।" },
        icon: "Cloud"
      }
    ],
    learningOutcomes: [
      { en: "Master C# 12 syntax, OOP, generics, delegates, events, LINQ, and asynchronous tasks.", bn: "সি-শার্প ওওপি, জেনেরিকস, ডেলিগেটস ও লিঙ্ক (LINQ) আয়ত্ত করা।" },
      { en: "Build secure RESTful Web APIs with ASP.NET Core 8 and Swagger documentation.", bn: "এএসপি.নেট কোর ৮ দিয়ে সিকিউর ওয়েব এপিআই তৈরি।" },
      { en: "Master Entity Framework Core (EF Core) Code-First, DbContext, and Migrations.", bn: "এন্টিটি ফ্রেমওয়ার্ক কোড-ফার্স্ট ও মাইগ্রেশনস হ্যান্ডলিং।" },
      { en: "Implement enterprise authentication with ASP.NET Core Identity, JWT, and Claims-based RBAC.", bn: "এএসপি.নেট কোর আইডেন্টিটি ও রোল-বেসড সিকিউরিটি।" },
      { en: "Design enterprise applications using Clean Architecture, CQRS, MediatR, and deploy to Azure.", bn: "ক্লিন আর্কিটেকচার ও মিডিয়াটার প্যাটার্ন দিয়ে প্রজেক্ট তৈরি ও এজুর ডেপ্লয়মেন্ট।" }
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: { en: "Module 1: Advanced C# 12 Programming & OOP Fundamentals", bn: "মডিউল ১: এডভান্সড সি-শার্প ১২ ও ওওপি ফান্ডামেন্টালস" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "C# 12 Language Features, Pattern Matching, Records & Nullable Types", bn: "সি-শার্প ১২ ফিচারস, প্যাটার্ন ম্যাচিং ও রেকর্ডস" },
          { en: "Deep OOP: Interfaces, Abstract Classes, Polymorphism & SOLID Principles", bn: "ওওপি ইন্টারফেস, পলিমরফিজম ও সলিড প্রিন্সিপালস" },
          { en: "LINQ (Language Integrated Query), Collections, Delegates, Events & Lambda", bn: "লিঙ্ক (LINQ) কুয়েরিজ ও ল্যাম্বডা এক্সপ্রেশনস" }
        ]
      },
      {
        moduleNumber: 2,
        title: { en: "Module 2: ASP.NET Core 8 Web API Architecture & Middleware", bn: "মডিউল ২: এএসপি.নেট কোর ৮ ওয়েব এপিআই আর্কিটেকচার" },
        duration: { en: "6 Classes • 12 Hours", bn: "৬ টি ক্লাস • ১২ ঘণ্টা" },
        lessonsCount: 7,
        topics: [
          { en: "ASP.NET Core Request Pipeline, Built-in Dependency Injection (IoC Container)", bn: "রিকোয়েস্ট পাইপলাইন ও ডিপেন্ডেন্সি ইনজেকশন" },
          { en: "Controllers, Action Results, Model Binding & FluentValidation", bn: "কন্ট্রোলারস, মডেল বাইন্ডিং ও ফ্লুয়েন্ট ভ্যালিডেশন" },
          { en: "Global Exception Handling, Custom Middleware & Swagger / OpenAPI Config", bn: "গ্লোবাল এক্সেপশন হ্যান্ডলিং ও সোয়েগার কনফিগারেশন" }
        ]
      },
      {
        moduleNumber: 3,
        title: { en: "Module 3: Microsoft SQL Server & Entity Framework Core (EF Core)", bn: "মডিউল ৩: এসকিউএল সার্ভার ও এন্টিটি ফ্রেমওয়ার্ক কোর" },
        duration: { en: "6 Classes • 12 Hours", bn: "৬ টি ক্লাস • ১২ ঘণ্টা" },
        lessonsCount: 8,
        topics: [
          { en: "SQL Server Relational Design, Stored Procedures, Triggers & Indexing", bn: "রিলেশনাল ডাটাবেস ডিজাইন, স্টোরড প্রসিডিউর ও ইনডেক্সিং" },
          { en: "EF Core Code-First Approach, Fluent API, Relationships (1-1, 1-N, N-M)", bn: "ইএফ কোর কোড-ফার্স্ট অ্যাপ্রোচ ও ফ্লুয়েন্ট এপিআই" },
          { en: "Automated Migrations, Concurrency Handling & Transaction Management", bn: "মাইগ্রেশনস, কনকারেন্সি ও ট্রানজ্যাকশন ম্যানেজমেন্ট" }
        ]
      },
      {
        moduleNumber: 4,
        title: { en: "Module 4: Security (Identity & JWT) & Clean Architecture (CQRS)", bn: "মডিউল ৪: সিকিউরিটি (আইডেন্টিটি ও জেডব্লিউটি) ও ক্লিন আর্কিটেকচার" },
        duration: { en: "6 Classes • 12 Hours", bn: "৬ টি ক্লাস • ১২ ঘণ্টা" },
        lessonsCount: 7,
        topics: [
          { en: "ASP.NET Core Identity Setup, User/Role Management & Claims", bn: "এএসপি.নেট কোর আইডেন্টিটি ও রোল ম্যানেজমেন্ট" },
          { en: "JWT Token Generation, Refresh Tokens & Policy-Based Authorization", bn: "জেডব্লিউটি টোকেন জেনারেশন ও পলিসি-বেসড অথোরাইজেশন" },
          { en: "Clean Architecture Pattern, Onion Architecture, MediatR & CQRS", bn: "ক্লিন আর্কিটেকচার, মিডিয়াটার ও সিউকিউআরএস প্যাটার্ন" }
        ]
      },
      {
        moduleNumber: 5,
        title: { en: "Module 5: Real-World Enterprise ERP Project & Azure Deployment", bn: "মডিউল ৫: এন্টারপ্রাইজ ইআরপি প্রজেক্ট ও এজুর ক্লাউড ডেপ্লয়মেন্ট" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Building an Enterprise Inventory & Billing Management System", bn: "এন্টারপ্রাইজ ইনভেন্টরি ও বিলিং ম্যানেজমেন্ট প্রজেক্ট" },
          { en: "Unit Testing with xUnit and Moq Framework", bn: "এক্স-ইউনিট ও মক ফ্রেমওয়ার্ক দিয়ে ইউনিট টেস্টিং" },
          { en: "Deploying to Microsoft Azure App Services & Azure SQL with CI/CD", bn: "মাইক্রোসফট এজুর অ্যাপ সার্ভিসেস ও এজুর এসকিউএল ডেপ্লয়মেন্ট" }
        ]
      }
    ],
    includedItems: [
      { en: "28 Live Interactive Enterprise .NET Classes", bn: "২৮ টি লাইভ এন্টারপ্রাইজ ডটনেট ক্লাস" },
      { en: "Enterprise ERP Project Source Code & Documentation", bn: "এন্টারপ্রাইজ ইআরপি প্রজেক্ট সোর্স কোড" },
      { en: "Microsoft Certification (AZ-204 / .NET) Prep Guidance", bn: "মাইক্রোসফট সার্টিফিকেশন গাইডলাইন" },
      { en: "Industry ASP.NET Specialist Certificate", bn: "ইন্ডাস্ট্রি এএসপি.নেট স্পেশালিস্ট সনদপত্র" }
    ],
    reviews: [
      {
        id: "r9",
        name: "Mahmudul Karim",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120",
        role: { en: ".NET Developer at GlobalTech", bn: "ডটনেট ডেভেলপার" },
        rating: 5,
        comment: {
          en: "The Clean Architecture and CQRS structure taught in this course is exactly what high-paying enterprise software companies look for.",
          bn: "ক্লিন আর্কিটেকচার ও ইএফ কোরের বাস্তবমুখী কোডিং আমাকে সরাসরি জবে সুযোগ করে দিয়েছে।"
        },
        date: "3 Weeks Ago"
      }
    ]
  },

  // 10. Shopify Development Specialist
  {
    id: "10",
    slug: "shopify-development-specialist",
    title: {
      en: "Shopify Development Specialist",
      bn: "শপিফাই ডেভেলপমেন্ট স্পেশালিস্ট"
    },
    subtitle: {
      en: "Master Liquid templating, custom Shopify theme development, Shopify CLI, App integrations & dropshipping store setup",
      bn: "লিকুইড কোডিং, কাস্টম শপিফাই থিম ডেভেলপমেন্ট, অ্যাপ ইন্টিগ্রেশন ও ড্রপশিপিং স্টোর তৈরি শিখুন"
    },
    category: "web",
    categoryLabel: {
      en: "Shopify & E-Commerce",
      bn: "শপিফাই ও ই-কমার্স"
    },
    badge: {
      en: "FREELANCE SPECIAL",
      bn: "ফ্রিল্যান্স স্পেশাল"
    },
    mode: {
      en: "Online & Offline",
      bn: "অনলাইন ও অফলাইন"
    },
    modeType: "offline",
    rating: 4.8,
    ratingsCount: 104,
    enrolledCount: "85+ Enrolled",
    languages: {
      en: "Bengali / English",
      bn: "বাংলা / ইংরেজি"
    },
    fee: "8,000৳",
    rawFee: 8000,
    originalFee: "15,000৳",
    duration: {
      en: "2.5 Months",
      bn: "২.৫ মাস"
    },
    classesCount: {
      en: "20 Classes",
      bn: "২০ টি ক্লাস"
    },
    image: "/images/course thumbnail/wordpress.jpg",
    videoUrl: "https://www.facebook.com/reel/2302715647232585/",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Shopify%20Development%20Specialist%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Engr. Rezaul Karim",
      designation: {
        en: "Shopify Theme Developer & E-Commerce Expert",
        bn: "শপিফাই থিম ডেভেলপার ও ই-কমার্স এক্সপার্ট"
      },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      bio: {
        en: "6+ years building custom Liquid themes and high-volume Shopify Plus stores for international brands on Upwork & Shopify Experts.",
        bn: "৬+ বছরের শপিফাই প্লাস স্টোর ও কাস্টম লিকুইড থিম ডেভেলপমেন্ট অভিজ্ঞতা।"
      },
      experience: "6+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Become a high-demand Shopify Developer. Learn how to set up e-commerce stores from scratch, customize premium themes with Shopify's Liquid templating engine, build custom theme sections using Shopify CLI, integrate payment gateways, and deliver client projects on Fiverr and Upwork.",
      bn: "আন্তর্জাতিক ই-কমার্স প্ল্যাটফর্ম শপিফাইয়ের কাস্টম থিম ডেভেলপমেন্ট ও স্টোর সেটআপ কোর্স। লিকুইড ল্যাঙ্গুয়েজ, শপিফাই সিএলআই, ড্রপশিপিং কনফিগারেশন এবং ক্লায়েন্ট প্রজেক্ট হ্যান্ডলিং শিখবেন।"
    },
    fullDescription: {
      en: "Millions of global merchants rely on Shopify for online commerce. This course takes you beyond basic store setup into true code-level custom theme development using HTML, Tailwind/CSS, JavaScript, and Liquid. You'll master JSON templates, Dawn theme customization, product metafields, cart Ajax APIs, and dropshipping automation.",
      bn: "কোডিং ছাড়া সাধারণ স্টোর সেটআপের পাশাপাশি কোডিং দিয়ে ক্লায়েন্টের মনের মতো কাস্টম ফিচার বানানোর দক্ষতা অর্জন করবেন।"
    },
    coreValues: [
      {
        id: "cv1",
        title: { en: "Liquid Templating & Shopify CLI", bn: "লিকুইড ও শপিফাই সিএলআই" },
        desc: { en: "Write clean Liquid code and develop with modern Shopify CLI tooling.", bn: "লিকুইড কোডিং ও শপিফাই সিএলআই দিয়ে থিম তৈরি।" },
        icon: "Code2"
      },
      {
        id: "cv2",
        title: { en: "Custom Theme Sections & JSON", bn: "কাস্টম সেকশনস ও জেসন টেমপ্লেট" },
        desc: { en: "Build flexible, schema-driven merchant customizable sections.", bn: "মার্চেন্টদের জন্য কাস্টমাইজযোগ্য সেকশন তৈরি।" },
        icon: "Layers"
      },
      {
        id: "cv3",
        title: { en: "Payment & Dropshipping Automation", bn: "পেমেন্ট ও ড্রপশিপিং সেটআপ" },
        desc: { en: "Integrate Stripe, PayPal, SSLCommerz and CJ Dropshipping/DSers.", bn: "পেমেন্ট গেটওয়ে ও অটোমেটেড ড্রপশিপিং।" },
        icon: "Zap"
      }
    ],
    learningOutcomes: [
      { en: "Master Shopify admin architecture, store settings, collection hierarchies, and navigation.", bn: "শপিফাই অ্যাডমিন আর্কিটেকচার ও কালেকশন ম্যানেজমেন্ট।" },
      { en: "Master the Liquid templating language (objects, tags, filters, variables, and logic).", bn: "লিকুইড টেমপ্লেটিং ল্যাঙ্গুয়েজ (ট্যাগস, ফিল্টার্স ও অবজেক্টস) আয়ত্ত করা।" },
      { en: "Build custom Shopify theme sections, blocks, and schema settings from scratch.", bn: "কাস্টম থিম সেকশনস, ব্লকস ও স্কিমা সেটিংস তৈরি।" },
      { en: "Implement Ajax Cart, slide-out drawer cart, and interactive variant selectors.", bn: "অ্যাজাক্স কার্ট ড্রয়ার ও ভ্যারিয়েন্ট সিলেক্টর ইন্টিগ্রেশন।" },
      { en: "Configure dropshipping apps (DSers, CJ Dropshipping), payment gateways, and launch client stores.", bn: "ড্রপশিপিং অ্যাপস ও পেমেন্ট গেটওয়ে কনফিগারেশন।" }
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: { en: "Module 1: Shopify Ecosystem & Store Setup Fundamentals", bn: "মডিউল ১: শপিফাই ইকোসিস্টেম ও স্টোর সেটআপ" },
        duration: { en: "4 Classes • 8 Hours", bn: "৪ টি ক্লাস • ৮ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "Shopify Partner Account Setup & Development Store Creation", bn: "শপিফাই পার্টনার অ্যাকাউন্ট ও ডেভেলপমেন্ট স্টোর তৈরি" },
          { en: "Products, Collections, Inventory, Shipping Zones & Tax Configurations", bn: "প্রোডাক্টস, কালেকশন, শিপিং জোন ও ট্যাক্স সেটিংস" },
          { en: "Domain Connection, Policies, Menus & Navigation Architecture", bn: "ডোমেন কানেকশন ও নেভিগেশন আর্কিটেকচার" }
        ]
      },
      {
        moduleNumber: 2,
        title: { en: "Module 2: Liquid Templating Engine Mastery", bn: "মডিউল ২: লিকুইড টেমপ্লেটিং ইঞ্জিন মাস্টারি" },
        duration: { en: "4 Classes • 8 Hours", bn: "৪ টি ক্লাস • ৮ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "Liquid Objects (product, collection, cart, customer, shop)", bn: "লিকুইড অবজেক্টস ও ডাটা স্ট্রাকচার" },
          { en: "Liquid Tags (for, if/else, case/when, paginate, render/include)", bn: "লিকুইড ট্যাগস ও কন্ডিশনাল লজিক" },
          { en: "Liquid Filters for Strings, Arrays, Currency & Image Optimization", bn: "লিকুইড ফিল্টার্স ও ইমেজ অপটিমাইজেশন" }
        ]
      },
      {
        moduleNumber: 3,
        title: { en: "Module 3: Shopify CLI & Custom Theme Development (Dawn Theme)", bn: "মডিউল ৩: শপিফাই সিএলআই ও কাস্টম থিম ডেভেলপমেন্ট" },
        duration: { en: "4 Classes • 8 Hours", bn: "৪ টি ক্লাস • ৮ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "Installing Shopify CLI, Git Workflow & Theme Development Workflow", bn: "শপিফাই সিএলআই ও গিট ওয়ার্কফ্লো" },
          { en: "Theme Architecture: Layouts, Templates, Sections, Snippets, Assets, Config", bn: "শপিফাই থিম ফোল্ডার স্ট্রাকচার ও আর্কিটেকচার" },
          { en: "Creating Custom Schema Settings (presets, inputs, blocks, settings)", bn: "কাস্টম স্কিমা সেটিংস ও মার্চেন্ট কাস্টমাইজেশন" }
        ]
      },
      {
        moduleNumber: 4,
        title: { en: "Module 4: Advanced Features (Ajax Cart, Metafields & Custom JS)", bn: "মডিউল ৪: এডভান্সড ফিচারস (অ্যাজাক্স কার্ট ও মেটাফিল্ডস)" },
        duration: { en: "4 Classes • 8 Hours", bn: "৪ টি ক্লাস • ৮ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "Shopify Ajax API: Add to Cart, Update Cart & Live Cart Drawer", bn: "শপিফাই অ্যাজাক্স এপিআই ও স্লাইড-আউট কার্ট" },
          { en: "Custom Metafields & Metaobjects for Dynamic Product Data", bn: "কাস্টম মেটাফিল্ডস ও ডাইনামিক প্রোডাক্ট ডাটা" },
          { en: "Custom Product Page Badges, Countdowns, and Upsell Offers", bn: "কাউন্টডাউন টাইমার ও আপসেল অফার তৈরি" }
        ]
      },
      {
        moduleNumber: 5,
        title: { en: "Module 5: Dropshipping Automation & Upwork/Fiverr Freelancing", bn: "মডিউল ৫: ড্রপশিপিং অটোমেশন ও ফ্রিল্যান্সিং" },
        duration: { en: "4 Classes • 8 Hours", bn: "৪ টি ক্লাস • ৮ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "AliExpress / DSers / CJ Dropshipping Automation Setup", bn: "ডিএসার্স ও সিজে ড্রপশিপিং অটোমেশন" },
          { en: "Payment Gateway Setup (Stripe, PayPal, Local Payment Gateways)", bn: "পেমেন্ট গেটওয়ে ইন্টিগ্রেশন" },
          { en: "Selling Shopify Development Services on Upwork and Fiverr", bn: "আপওয়ার্ক ও ফাইভারে শপিফাই সার্ভিস বিক্রি" }
        ]
      }
    ],
    includedItems: [
      { en: "20 Live Hands-on Shopify Coding Classes", bn: "২০ টি লাইভ শপিফাই কোডিং ক্লাস" },
      { en: "Custom Premium Shopify Theme Source Code", bn: "কাস্টম প্রিমিয়াম শপিফাই থিম সোর্স কোড" },
      { en: "Upwork & Fiverr Shopify Freelance Blueprint", bn: "ফ্রিল্যান্সিং ব্লুপ্রিন্ট ও গিগ গাইড" },
      { en: "Shopify Development Specialist Certificate", bn: "শপিফাই ডেভেলপমেন্ট স্পেশালিস্ট সনদপত্র" }
    ],
    reviews: [
      {
        id: "r10",
        name: "Saiful Islam",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=120",
        role: { en: "Shopify Freelancer on Fiverr", bn: "শপিফাই ফ্রিল্যান্সার" },
        rating: 5,
        comment: {
          en: "Learning Liquid coding and custom section creation helped me build high-ticket custom stores for US dropshippers. Excellent course!",
          bn: "লিকুইড কোডিং শিখে আমি ফাইভারে কাস্টম শপিফাই স্টোর তৈরির কাজ করছি।"
        },
        date: "1 Month Ago"
      }
    ]
  },

  // 11. SAP
  {
    id: "11",
    slug: "sap-enterprise-specialist",
    title: {
      en: "SAP",
      bn: "এসএপি (SAP)"
    },
    subtitle: {
      en: "Enterprise ERP architecture, SAP FICO, SAP MM, Business process mapping & corporate enterprise systems",
      bn: "এসএপি ইআরপি আর্কিটেকচার, এসএপি ফাইকো, এমএম মডিউল ও কর্পোরেট বিজনেস প্রসেস ম্যানেজমেন্ট"
    },
    category: "software",
    categoryLabel: {
      en: "SAP & ERP",
      bn: "এসএপি ও ইআরপি"
    },
    badge: {
      en: "CORPORATE",
      bn: "কর্পোরেট"
    },
    mode: {
      en: "Online & Offline",
      bn: "অনলাইন ও অফলাইন"
    },
    modeType: "offline",
    rating: 4.9,
    ratingsCount: 88,
    enrolledCount: "70+ Enrolled",
    languages: {
      en: "Bengali / English",
      bn: "বাংলা / ইংরেজি"
    },
    fee: "15,000৳",
    rawFee: 15000,
    originalFee: "25,000৳",
    duration: {
      en: "3 Months",
      bn: "৩ মাস"
    },
    classesCount: {
      en: "24 Classes",
      bn: "২৪ টি ক্লাস"
    },
    image: "/images/course thumbnail/agile & scrum master.jpg",
    videoUrl: "https://www.facebook.com/reel/1791500222217262/",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22SAP%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Syed Imran Hossain",
      designation: {
        en: "Lead SAP ERP Consultant & Solution Architect",
        bn: "লিড এসএপি ইআরপি কনসালট্যান্ট ও সলিউশন আর্কিটেক্ট"
      },
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300",
      bio: {
        en: "12+ years deploying SAP S/4HANA, FICO, and MM implementations for Fortune 500 conglomerates and multinational banks.",
        bn: "১২+ বছরের এসএপি এস/৪হানা, ফাইকো ও এমএম ইআরপি কনসালটিং অভিজ্ঞতা।"
      },
      experience: "12+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Launch an executive career in corporate ERP consulting. Master SAP S/4HANA fundamentals, SAP FICO (Financial Accounting & Controlling), SAP MM (Materials Management), enterprise master data, procurement cycles, financial reporting, and end-to-end business process integration.",
      bn: "কর্পোরেট জগতের শীর্ষস্থানীয় ইআরপি সিস্টেম এসএপি (SAP) শেখার প্রফেশনাল কোর্স। এসএপি ফাইকো (ফাইন্যান্স ও কন্ট্রোলিং), এসএপি এমএম (ম্যাটেরিয়ালস ম্যানেজমেন্ট) এবং বিজনেস প্রসেস অটোমেশনের পূর্ণাঙ্গ বাস্তবমুখী প্রশিক্ষণ।"
    },
    fullDescription: {
      en: "SAP powers over 87% of global commerce. In this executive-level course, you will learn the core architecture of SAP ERP, Master Data Management (GL, Vendor, Customer, Material), purchasing cycles (Procure-to-Pay), financial statement generation, and configuration best practices used in real corporate deployments.",
      bn: "দেশি ও বিদেশি বহুজাতিক কোম্পানি, টেলিকম ও ব্যাংকিং সেক্টরে এসএপি প্রফেশনালদের উচ্চ চাহিদার কথা মাথায় রেখে এই কোর্সটি সাজানো হয়েছে।"
    },
    coreValues: [
      {
        id: "cv1",
        title: { en: "SAP S/4HANA Core ERP", bn: "এসএপি এস/৪হানা কোর ইআরপি" },
        desc: { en: "Understand enterprise structure, organizational units & navigation.", bn: "এন্টারপ্রাইজ স্ট্রাকচার ও নেভিগেশন মাস্টারি।" },
        icon: "Server"
      },
      {
        id: "cv2",
        title: { en: "SAP FICO (Finance & Controlling)", bn: "এসএপি ফাইকো মডিউল" },
        desc: { en: "General Ledger, Accounts Payable, Accounts Receivable & Asset Accounting.", bn: "জেনারেল লেজার, একাউন্টস পেয়েবল ও রিসিভেবল।" },
        icon: "DollarSign"
      },
      {
        id: "cv3",
        title: { en: "SAP MM (Materials Management)", bn: "এসএপি এমএম মডিউল" },
        desc: { en: "Procure-to-Pay (P2P), Purchase Orders, Inventory & Master Data.", bn: "প্রকিউরমেন্ট প্রসেস, পারচেজ অর্ডার ও ইনভেন্টরি।" },
        icon: "Briefcase"
      }
    ],
    learningOutcomes: [
      { en: "Understand SAP S/4HANA enterprise architecture, client-server models, and GUI navigation.", bn: "এসএপি এস/৪হানা আর্কিটেকচার ও জিইউআই নেভিগেশন।" },
      { en: "Configure SAP FICO: General Ledger (GL), Accounts Payable (AP), and Accounts Receivable (AR).", bn: "এসএপি ফাইকো জেনারেল লেজার ও একাউন্টস কনফিগারেশন।" },
      { en: "Master SAP MM: Material Master, Vendor Master, Purchase Requisitions (PR), and Purchase Orders (PO).", bn: "এসএপি এমএম ম্যাটেরিয়াল মাস্টার ও পারচেজ অর্ডার ম্যানেজমেন্ট।" },
      { en: "Integrate Procure-to-Pay (P2P) and Order-to-Cash (O2C) cross-module business flows.", bn: "পি২পি ও ও২সি ক্রস-মডিউল বিজনেস ফ্লো ইন্টিগ্রেশন।" },
      { en: "Prepare for official SAP Global Certification and corporate consulting interviews.", bn: "এসএপি সার্টিফিকেশন ও কর্পোরেট ইন্টারভিউ প্রস্তুতি।" }
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: { en: "Module 1: Introduction to SAP S/4HANA & Enterprise Structure", bn: "মডিউল ১: এসএপি এস/৪হানা ও এন্টারপ্রাইজ স্ট্রাকচার" },
        duration: { en: "4 Classes • 8 Hours", bn: "৪ টি ক্লাস • ৮ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "ERP Overview, Evolution of SAP (R/3 to ECC to S/4HANA)", bn: "ইআরপি কনসেপ্ট ও এসএপি এস/৪হানা ইভোলিউশন" },
          { en: "SAP GUI Navigation, Transaction Codes (T-Codes), Favorites & Shortcuts", bn: "এসএপি জিইউআই ও টি-কোডস (T-Codes) নেভিগেশন" },
          { en: "Enterprise Structure: Company Code, Plant, Storage Location, Sales Org", bn: "কোম্পানি কোড, প্ল্যান্ট ও স্টোরেজ লোকেশন কনফিগারেশন" }
        ]
      },
      {
        moduleNumber: 2,
        title: { en: "Module 2: SAP FICO - Financial Accounting Fundamentals", bn: "মডিউল ২: এসএপি ফাইকো - ফাইন্যান্সিয়াল অ্যাকাউন্টিং" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "General Ledger (GL) Master Record Creation & Posting (FB50, FS00)", bn: "জেনারেল লেজার (GL) মাস্টার রেকর্ড তৈরি ও পোস্টিং" },
          { en: "Accounts Payable (AP): Vendor Master, Invoice Verification & Outgoing Payments", bn: "ভেন্ডর মাস্টার, ইনভয়েস ভেরিফিকেশন ও পেমেন্ট প্রসেসিং" },
          { en: "Accounts Receivable (AR): Customer Master, Invoicing & Incoming Payments", bn: "কাস্টমার মাস্টার ও ইনকামিং পেমেন্ট হ্যান্ডলিং" }
        ]
      },
      {
        moduleNumber: 3,
        title: { en: "Module 3: SAP MM - Materials Management & Procurement", bn: "মডিউল ৩: এসএপি এমএম - ম্যাটেরিয়ালস ও প্রকিউরমেন্ট" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Material Master Data (MM01, MM02, MM03) & Purchasing Info Records", bn: "ম্যাটেরিয়াল মাস্টার ডাটা ও ইনফো রেকর্ডস" },
          { en: "Procure-to-Pay (P2P) Cycle: Purchase Requisition (PR) to Purchase Order (PO)", bn: "পারচেজ রিকুইজিশন (PR) থেকে পারচেজ অর্ডার (PO)" },
          { en: "Goods Receipt (MIGO), Stock Overview (MMBE) & Invoice Verification (MIRO)", bn: "গুডস রিসিট (MIGO) ও ইনভেন্টরি ম্যানেজমেন্ট" }
        ]
      },
      {
        moduleNumber: 4,
        title: { en: "Module 4: Cross-Module Integration & Financial Reporting", bn: "মডিউল ৪: ক্রস-মডিউল ইন্টিগ্রেশন ও ফাইন্যান্সিয়াল রিপোর্টিং" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Automatic Account Determination (OBYC) - MM & FI Integration", bn: "এমএম ও এফআই মডিউল ইন্টিগ্রেশন (OBYC)" },
          { en: "Bank Master Data, House Banks & Electronic Bank Statement (EBS)", bn: "ব্যাংক মাস্টার ডাটা ও হাউস ব্যাংক কনফিগারেশন" },
          { en: "Balance Sheet, Profit & Loss (P&L) Reports & Period End Closing", bn: "ব্যালেন্স শিট, পিঅ্যান্ডএল রিপোর্ট ও পিরিয়ড ক্লোজিং" }
        ]
      },
      {
        moduleNumber: 5,
        title: { en: "Module 5: Real-World Case Studies & SAP Certification Blueprint", bn: "মডিউল ৫: রিয়েল-ওয়ার্ল্ড কেস স্টাডি ও সার্টিফিকেশন ব্লুপ্রিন্ট" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "End-to-End Enterprise Implementation Case Study", bn: "এন্ড-টু-এন্ড এন্টারপ্রাইজ ইমপ্লিমেন্টেশন কেস স্টাডি" },
          { en: "SAP Methodology (ASAP / SAP Activate) & Functional Spec Documentation", bn: "এসএপি এক্টিভেট মেথডোলজি ও ফাংশনাল স্পেক্স" },
          { en: "Corporate Interview Preparation & SAP Global Certification Roadmap", bn: "কর্পোরেট ইন্টারভিউ প্রস্তুতি ও সার্টিফিকেশন গাইড" }
        ]
      }
    ],
    includedItems: [
      { en: "24 Live SAP Enterprise Training Sessions", bn: "২৪ টি লাইভ এসএপি এন্টারপ্রাইজ ক্লাস" },
      { en: "SAP S/4HANA Server Access Guidelines & Practice Data", bn: "এসএপি সার্ভার প্র্যাকটিস গাইডলাইন" },
      { en: "End-to-End Implementation Case Study Templates", bn: "ইমপ্লিমেন্টেশন কেস স্টাডি টেমপ্লেটস" },
      { en: "Executive SAP Professional Certificate", bn: "এক্সিকিউটিভ এসএপি প্রফেশনাল সনদপত্র" }
    ],
    reviews: [
      {
        id: "r11",
        name: "Kazi Anisur Rahman",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
        role: { en: "SAP Associate at Beximco", bn: "এসএপি অ্যাসোসিয়েট" },
        rating: 5,
        comment: {
          en: "The integration between SAP MM and FICO was explained brilliantly with live business cases. Helped me crack my first MNC interview!",
          bn: "এসএপি ফাইকো ও এমএম মডিউলের প্র্যাকটিক্যাল ট্রেনিং আমাকে মাল্টিন্যাশনাল কোম্পানিতে জব পেতে সাহায্য করেছে।"
        },
        date: "2 Weeks Ago"
      }
    ]
  },

  // 12. Networking
  {
    id: "12",
    slug: "networking-system-specialist",
    title: {
      en: "Networking",
      bn: "নেটওয়ার্কিং"
    },
    subtitle: {
      en: "Master computer networking, TCP/IP, Cisco CCNA routing & switching, MikroTik RouterOS & Network Security",
      bn: "কম্পিউটার নেটওয়ার্কিং, টিসিপি/আইপি, সিসকো রাউটিং ও সুইচিং, মাইক্রোটিক ও নেটওয়ার্ক সিকিউরিটি"
    },
    category: "cloud",
    categoryLabel: {
      en: "Networking & IT",
      bn: "নেটওয়ার্কিং ও আইটি"
    },
    badge: {
      en: "CORE IT",
      bn: "কোর আইটি"
    },
    mode: {
      en: "Online & Offline",
      bn: "অনলাইন ও অফলাইন"
    },
    modeType: "offline",
    rating: 4.8,
    ratingsCount: 96,
    enrolledCount: "80+ Enrolled",
    languages: {
      en: "Bengali / English",
      bn: "বাংলা / ইংরেজি"
    },
    fee: "8,000৳",
    rawFee: 8000,
    originalFee: "14,000৳",
    duration: {
      en: "3 Months",
      bn: "৩ মাস"
    },
    classesCount: {
      en: "24 Classes",
      bn: "২৪ টি ক্লাস"
    },
    image: "/images/course thumbnail/linux system admin.jpg",
    videoUrl: "https://www.facebook.com/reel/1931942940836268/",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Networking%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Engr. Zahid Hasan (CCNP, MTCNA)",
      designation: {
        en: "Senior Network Engineer & Infrastructure Architect",
        bn: "সিনিয়র নেটওয়ার্ক ইঞ্জিনিয়ার ও ইনফ্রাস্ট্রাকচার আর্কিটেক্ট"
      },
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      bio: {
        en: "10+ years managing nationwide ISP networks, Cisco core switches, data center routing, and enterprise firewall security.",
        bn: "১০+ বছরের আইএসপি নেটওয়ার্কিং, সিসকো কোর রাউটার ও মাইক্রোটিক আর্কিটেকচার অভিজ্ঞতা।"
      },
      experience: "10+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Build a rock-solid foundation in enterprise computer networking. Master the OSI 7-layer model, TCP/IP, IPv4 subnetting & IPv6, Cisco router and switch configurations (CCNA concepts), MikroTik RouterOS bandwidth management, VPNs, and network security hardening.",
      bn: "কম্পিউটার নেটওয়ার্কিং ও সিস্টেম অ্যাডমিনিস্ট্রেশনের পূর্ণাঙ্গ প্রফেশনাল কোর্স। টিসিপি/আইপি, সাবনেটিং, সিসকো সিসিএনএ কনসেপ্টস, মাইক্রোটিক রাউটারওএস ও নেটওয়ার্ক সিকিউরিটি হাতে-কলমে শিখবেন।"
    },
    fullDescription: {
      en: "Every corporate organization, ISP, data center, and cloud provider depends on skilled network engineers. In this hands-on course using Cisco Packet Tracer, GNS3, and physical MikroTik routers, you will learn how to design, configure, troubleshoot, and secure enterprise networks from scratch.",
      bn: "আইএসপি এবং কর্পোরেট প্রতিষ্ঠানে নেটওয়ার্ক ইঞ্জিনিয়ার ও সিস্টেম অ্যাডমিন হিসেবে যোগদানের জন্য প্রয়োজনীয় প্রতিটি প্র্যাকটিক্যাল স্কিল এই কোর্সে অন্তর্ভুক্ত করা হয়েছে।"
    },
    coreValues: [
      {
        id: "cv1",
        title: { en: "Cisco Routing & Switching (CCNA)", bn: "সিসকো রাউটিং ও সুইচিং" },
        desc: { en: "VLANs, Inter-VLAN Routing, OSPF, STP & Access Control Lists (ACL).", bn: "সিসকো রাউটার ও সুইচ কনফিগারেশন।" },
        icon: "Server"
      },
      {
        id: "cv2",
        title: { en: "MikroTik RouterOS Mastery", bn: "মাইক্রোটিক রাউটারওএস" },
        desc: { en: "Bandwidth queueing, hotspot gateway, firewall & load balancing.", bn: "মাইক্রোটিক ব্যান্ডউইথ ম্যানেজমেন্ট ও ফায়ারওয়াল।" },
        icon: "ShieldCheck"
      },
      {
        id: "cv3",
        title: { en: "Enterprise Network Security & VPN", bn: "নেটওয়ার্ক সিকিউরিটি ও ভিপিএন" },
        desc: { en: "IPsec, OpenVPN, WireGuard, Wireshark packet capture & troubleshooting.", bn: "ভিপিএন টানেলিং ও ওয়্যারশার্ক প্যাকেট অ্যানালাইসিস।" },
        icon: "Cloud"
      }
    ],
    learningOutcomes: [
      { en: "Master the OSI 7-Layer and TCP/IP models, packet encapsulation, and IPv4/IPv6 VLSM subnetting.", bn: "ওএসআই মডেল, টিসিপি/আইপি ও আইপিভি৪ সাবনেটিং মাস্টারি।" },
      { en: "Configure Cisco routers and switches: VLANs, Trunks, Inter-VLAN Routing, STP, and OSPF.", bn: "সিসকো রাউটার ও সুইচে ভিএলএএন ও ওএসপিএফ কনফিগারেশন।" },
      { en: "Configure MikroTik RouterOS for ISP & office bandwidth queuing, firewall NAT, and DHCP.", bn: "মাইক্রোটিক ব্যান্ডউইথ কিউ ও ফায়ারওয়াল সেটআপ।" },
      { en: "Set up enterprise site-to-site and client-to-site VPNs (IPsec, L2TP, OpenVPN, WireGuard).", bn: "সাইট-টু-সাইট ভিপিএন ও রিমোট এক্সেস কনফিগারেশন।" },
      { en: "Troubleshoot network issues using Wireshark, Ping, Traceroute, and diagnostic CLI tools.", bn: "ওয়্যারশার্ক ও সিএলআই টুলস দিয়ে নেটওয়ার্ক ট্রাবলশুটিং।" }
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: { en: "Module 1: Networking Fundamentals & IP Addressing (IPv4/IPv6)", bn: "মডিউল ১: নেটওয়ার্কিং ফান্ডামেন্টালস ও সাবনেটিং" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "OSI 7-Layer Reference Model, TCP/IP Protocol Suite & Data Encapsulation", bn: "ওএসআই ৭-লেয়ার মডেল ও ডাটা এনক্যাপসুলেশন" },
          { en: "IPv4 Classes, Subnetting (FLSM & VLSM), CIDR Notation & IPv6 Basics", bn: "আইপিভি৪ সাবনেটিং (VLSM) ও আইপিভি৬ কনসেপ্টস" },
          { en: "Cables, Connectors, NICs, Hubs, Bridges, Switches, Routers & Gateways", bn: "নেটওয়ার্ক কেবলিং ও নেটওয়ার্ক ডিভাইস পরিচিতি" }
        ]
      },
      {
        moduleNumber: 2,
        title: { en: "Module 2: Cisco Switching & Routing (CCNA Curriculum)", bn: "মডিউল ২: সিসকো সুইচিং ও রাউটিং (সিসিএনএ)" },
        duration: { en: "6 Classes • 12 Hours", bn: "৬ টি ক্লাস • ১২ ঘণ্টা" },
        lessonsCount: 7,
        topics: [
          { en: "Cisco IOS CLI Navigation, Basic Configuration, Password Recovery & SSH", bn: "সিসকো আইওএস সিএলআই ও বেসিক সিকিউরিটি কনফিগ" },
          { en: "VLANs, 802.1Q Trunking, VTP, Spanning Tree Protocol (STP) & EtherChannel", bn: "ভিএলএএন, ট্রাঙ্কিং ও স্প্যানিং ট্রি প্রোটোকল" },
          { en: "Inter-VLAN Routing (Router-on-a-Stick), Static Routing & Dynamic OSPF Routing", bn: "ইন্টার-ভিএলএএন রাউটিং ও ওএসপিএফ প্রোটোকল" }
        ]
      },
      {
        moduleNumber: 3,
        title: { en: "Module 3: MikroTik RouterOS Configuration & ISP Setup", bn: "মডিউল ৩: মাইক্রোটিক রাউটারওএস ও আইএসপি সেটআপ" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "MikroTik WinBox GUI, Package Upgrades, Interface & IP Address Setup", bn: "উইনবক্স নেভিগেশন ও আইপি এড্রেসিং সেটআপ" },
          { en: "DHCP Server & Client, DNS Cache, NAT (Masquerade) & Default Gateway", bn: "ডিএইচসিপি সার্ভার, ডিএনএস ও ফায়ারওয়াল ন্যাট" },
          { en: "Bandwidth Management (Simple Queues, Queue Trees, PCQ & Burst Rates)", bn: "ব্যান্ডউইথ ম্যানেজমেন্ট ও কিউ ট্রি কনফিগারেশন" }
        ]
      },
      {
        moduleNumber: 4,
        title: { en: "Module 4: Network Security, Firewall Rules & VPN Systems", bn: "মডিউল ৪: নেটওয়ার্ক সিকিউরিটি, ফায়ারওয়াল ও ভিপিএন" },
        duration: { en: "4 Classes • 8 Hours", bn: "৪ টি ক্লাস • ৮ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "Standard and Extended Access Control Lists (ACLs) on Cisco", bn: "সিসকো স্ট্যান্ডার্ড ও এক্সটেন্ডেড এসিএল (ACL)" },
          { en: "MikroTik Firewall Filter Rules (Drop, Accept, Connection States, Port Forwarding)", bn: "মাইক্রোটিক ফায়ারওয়াল রুলস ও পোর্ট ফরোয়ার্ডিং" },
          { en: "VPN Protocols: PPTP, L2TP/IPsec, OpenVPN, and WireGuard Tunneling", bn: "আইপিসেক ও ওয়্যারগার্ড ভিপিএন টানেলিং" }
        ]
      },
      {
        moduleNumber: 5,
        title: { en: "Module 5: Packet Analysis (Wireshark), Troubleshooting & Labs", bn: "মডিউল ৫: প্যাকেট অ্যানালাইসিস (Wireshark) ও ট্রাবলশুটিং" },
        duration: { en: "4 Classes • 8 Hours", bn: "৪ টি ক্লাস • ৮ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "Deep Packet Capture & Protocol Analysis with Wireshark", bn: "ওয়্যারশার্ক দিয়ে প্যাকেট ক্যাপচার ও প্রটোকল অ্যানালাইসিস" },
          { en: "Diagnosing DNS, DHCP, Loop, and Routing Table Issues", bn: "ডিএনএস, ডিএইচসিপি ও রাউটিং ট্রাবলশুটিং" },
          { en: "Complete Corporate Campus Network Design Lab Examination", bn: "কর্পোরেট ক্যাম্পাস নেটওয়ার্ক ল্যাব প্রজেক্ট" }
        ]
      }
    ],
    includedItems: [
      { en: "24 Live Hands-on Networking Lab Classes", bn: "২৪ টি লাইভ প্র্যাকটিক্যাল ল্যাব ক্লাস" },
      { en: "Packet Tracer & GNS3 Pre-configured Lab Topologies", bn: "সিসকো ল্যাব টপোলজি ফাইলস" },
      { en: "MikroTik RouterOS Practice Configuration Scripts", bn: "মাইক্রোটিক কনফিগারেশন স্ক্রিপ্টস" },
      { en: "Verified Network System Specialist Certificate", bn: "সার্টিফাইড নেটওয়ার্ক স্পেশালিস্ট সনদপত্র" }
    ],
    reviews: [
      {
        id: "r12",
        name: "Raihan Ali",
        avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=120",
        role: { en: "Network Associate at Link3 Technologies", bn: "নেটওয়ার্ক অ্যাসোসিয়েট" },
        rating: 5,
        comment: {
          en: "The combination of Cisco CCNA concepts and MikroTik bandwidth management gave me immediate practical confidence on real corporate ISP switches.",
          bn: "সিসকো ও মাইক্রোটিকের প্র্যাকটিক্যাল ল্যাব আমাকে সরাসরি আইএসপিতে জবের সুযোগ করে দিয়েছে।"
        },
        date: "1 Month Ago"
      }
    ]
  },

  // 13. Master in UX/UI Design
  {
    id: "13",
    slug: "master-in-ux-ui-design",
    title: {
      en: "Master in UX/UI Design",
      bn: "মাস্টার ইন ইউএক্স/ইউআই ডিজাইন"
    },
    subtitle: {
      en: "Master Figma design systems, UX research, wireframing, user psychology, prototyping & usability testing",
      bn: "ফিগমায় প্রফেশনাল ডিজাইন সিস্টেম, ইউজার রিসার্চ, ওয়্যারফ্রেমিং, ইন্টারেক্টিভ প্রোটোটাইপিং ও কেস স্টাডি"
    },
    category: "creative",
    categoryLabel: {
      en: "UX/UI Design",
      bn: "ইউএক্স/ইউআই ডিজাইন"
    },
    badge: {
      en: "POPULAR",
      bn: "জনপ্রিয়"
    },
    mode: {
      en: "Online & Offline",
      bn: "অনলাইন ও অফলাইন"
    },
    modeType: "offline",
    rating: 4.9,
    ratingsCount: 156,
    enrolledCount: "135+ Enrolled",
    languages: {
      en: "Bengali / English",
      bn: "বাংলা / ইংরেজি"
    },
    fee: "9,000৳",
    rawFee: 9000,
    originalFee: "16,000৳",
    duration: {
      en: "3 Months",
      bn: "৩ মাস"
    },
    classesCount: {
      en: "24 Classes",
      bn: "২৪ টি ক্লাস"
    },
    image: "/images/course thumbnail/ui ux design.jpg",
    videoUrl: "https://www.facebook.com/reel/889772017529060/",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Master%20in%20UX/UI%20Design%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Tanzim Ahmed",
      designation: {
        en: "Lead Product Designer & UX Strategist",
        bn: "লিড প্রোডাক্ট ডিজাইনার ও ইউএক্স স্ট্র্যাটেজিস্ট"
      },
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      bio: {
        en: "8+ years crafting user experiences for high-growth SaaS startups and fintech apps across USA, UK, and Singapore.",
        bn: "৮+ বছরের ফিনটেক ও সাস প্রোডাক্ট ডিজাইন এবং ফিগমা ডিজাইন সিস্টেম অভিজ্ঞতা।"
      },
      experience: "8+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Become an elite Product Designer (UX/UI). Master user research, empathy mapping, information architecture, wireframing, advanced Figma design systems (Auto-layout 5.0, variables, tokens, interactive components), high-fidelity prototyping, and developer handoff.",
      bn: "আন্তর্জাতিক মানের ইউআই/ইউএক্স ও প্রোডাক্ট ডিজাইনার হওয়ার পূর্ণাঙ্গ কোর্স। ফিগমায় আধুনিক ডিজাইন সিস্টেম, ইউজার রিসার্চ, ওয়্যারফ্রেমিং, প্রোটোটাইপিং এবং ইন্ডাস্ট্রি-স্ট্যান্ডার্ড পোর্টফোলিও কেস স্টাডি তৈরি শিখবেন।"
    },
    fullDescription: {
      en: "Product design is at the core of every modern digital business. In this intensive program, you will solve real-world user problems. You'll conduct usability tests, master UX psychology laws (Fitts's Law, Hick's Law, Miller's Law), build atomic design systems in Figma, and document full product case studies on Behance and Medium.",
      bn: "থিওরি ও টুলসের পাশাপাশি ২টি কমপ্লিট মোবাইল অ্যাপ ও ১টি সাস ওয়েব অ্যাপ্লিকেশনের এন্ড-টু-এন্ড কেস স্টাডি তৈরি করে আপনাকে আন্তর্জাতিক রিমোট জবের জন্য প্রস্তুত করা হবে।"
    },
    coreValues: [
      {
        id: "cv1",
        title: { en: "Human-Centered UX Research", bn: "ইউজার-সেন্ট্রিক ইউএক্স রিসার্চ" },
        desc: { en: "User personas, customer journey maps, wireframes & usability audits.", bn: "ইউজার ইন্টারভিউ, জার্নি ম্যাপ ও ওয়্যারফ্রেমিং।" },
        icon: "Users"
      },
      {
        id: "cv2",
        title: { en: "Advanced Figma 2025 Architecture", bn: "এডভান্সড ফিগমা সিস্টেমস" },
        desc: { en: "Auto-layout, dynamic variables, design tokens & responsive components.", bn: "অটো-লেআউট, ভ্যারিয়েবলস ও ডিজাইন টোকেনস।" },
        icon: "Palette"
      },
      {
        id: "cv3",
        title: { en: "High-Impact Portfolio Case Studies", bn: "পোর্টফোলিও কেস স্টাডি" },
        desc: { en: "Document complete design rationale for global job recruiters.", bn: "চাকরির উপযোগী প্রফেশনাল কেস স্টাডি।" },
        icon: "Award"
      }
    ],
    learningOutcomes: [
      { en: "Conduct UX research, user interviews, empathy maps, and competitive UX audits.", bn: "ইউজার ইন্টারভিউ, এমপ্যাথি ম্যাপিং ও ইউএক্স অডিট পরিচালনা করা।" },
      { en: "Structure information architecture, user flows, and interactive low-fidelity wireframes.", bn: "ইনফরমেশন আর্কিটেকচার, ইউজার ফ্লো ও ওয়্যারফ্রেম তৈরি।" },
      { en: "Master Figma Auto-layout, nested components, interactive variants, and variables.", bn: "ফিগমা অটো-লেআউট, ভ্যারিয়েন্টস ও ডিজাইন সিস্টেম মাস্টার করা।" },
      { en: "Design micro-interactions, smart animations, and interactive clickable prototypes.", bn: "স্মার্ট অ্যানিমেশন ও ক্লিকেবল প্রোটোটাইপিং তৈরি।" },
      { en: "Create comprehensive product case studies on Behance and Notion for international remote jobs.", bn: "বিহ্যান্স ও নোশনে আন্তর্জাতিক মানের ইউআই/ইউএক্স কেস স্টাডি তৈরি।" }
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: { en: "Module 1: UX Research, User Psychology & Information Architecture", bn: "মডিউল ১: ইউএক্স রিসার্চ, ইউজার সাইকোলজি ও আর্কিটেকচার" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Introduction to Product Design: UX vs UI, Design Thinking 5-Stage Framework", bn: "ডিজাইন থিংকিং প্রসেস ও ইউএক্স বনাম ইউআই" },
          { en: "UX Research Methodologies: User Interviews, Surveys, Empathy Maps & Personas", bn: "ইউজার রিসার্চ মেথডস ও পার্সোনা তৈরি" },
          { en: "Information Architecture (IA), Card Sorting, User Journeys & Site Mapping", bn: "ইনফরমেশন আর্কিটেকচার ও ইউজার জার্নি ম্যাপিং" }
        ]
      },
      {
        moduleNumber: 2,
        title: { en: "Module 2: Wireframing, UX Laws & Low-Fidelity Prototyping", bn: "মডিউল ২: ওয়্যারফ্রেমিং, ইউএক্স লজ ও লো-ফিডেলিটি প্রোটোটাইপিং" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Paper Sketching to Low-Fidelity Wireframing in Figma", bn: "পেপার স্কেচিং থেকে ফিগমায় লো-ফিডেলিটি ওয়্যারফ্রেম" },
          { en: "UX Psychology Laws: Fitts's Law, Hick's Law, Miller's Law, Gestalt Principles", bn: "ইউএক্স সাইকোলজি লজ ও গেস্টাল্ট প্রিন্সিপালস" },
          { en: "Creating User Flow Diagrams & Low-Fidelity Clickable Prototypes", bn: "ইউজার ফ্লো ডায়াগ্রাম ও ক্লিকেবল প্রোটোটাইপ" }
        ]
      },
      {
        moduleNumber: 3,
        title: { en: "Module 3: Advanced Figma Mastery & Design System Architecture", bn: "মডিউল ৩: ফিগমা মাস্টারি ও ডিজাইন সিস্টেম আর্কিটেকচার" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Figma Auto-Layout 5.0 (Resizing, Alignment, Hug vs Fill vs Fixed)", bn: "ফিগমা অটো-লেআউট ও রেসপনসিভ ফ্রেম" },
          { en: "Atomic Design System: Typography Scale, Color Tokens, Spacing & Shadows", bn: "অ্যাটমিক ডিজাইন সিস্টেম ও কালার/টাইপ টোকেনস" },
          { en: "Component Properties, Variants, Nested Components & Slot Architecture", bn: "কম্পোনেন্ট ভ্যারিয়েন্টস ও স্লট আর্কিটেকচার" }
        ]
      },
      {
        moduleNumber: 4,
        title: { en: "Module 4: High-Fidelity UI Design & Micro-Interactions", bn: "মডিউল ৪: হাই-ফিডেলিটি ইউআই ডিজাইন ও প্রোটোটাইপিং" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Mobile App UI Design (iOS Human Interface Guidelines & Material Design 3)", bn: "আইওএস ও অ্যান্ড্রয়েড ম্যাটেরিয়াল ডিজাইন গাইডলাইন" },
          { en: "Web App & SaaS Dashboard UI (Data Tables, Filters, Dark/Light Mode)", bn: "সাস ড্যাশবোর্ড ও ডার্ক মোড ডিজাইন" },
          { en: "Smart Animate, Interactive Components, Delay Triggers & Scroll Animations", bn: "স্মার্ট অ্যানিমেট ও ইন্টারঅ্যাক্টিভ কম্পোনেন্ট প্রোটোটাইপ" }
        ]
      },
      {
        moduleNumber: 5,
        title: { en: "Module 5: Usability Testing, Developer Handoff & Portfolio Case Studies", bn: "মডিউল ৫: ইউজেবিলিটি টেস্টিং ও পোর্টফোলিও কেস স্টাডি" },
        duration: { en: "4 Classes • 8 Hours", bn: "৪ টি ক্লাস • ৮ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "Usability Testing Protocols, Maze Testing & Iterative Design Improvements", bn: "ইউজেবিলিটি টেস্টিং ও ডিজাইন ফিডব্যাক লুপ" },
          { en: "Developer Handoff (Figma Dev Mode, Redlines, Asset Export, Tokens Export)", bn: "ডেভেলপার হ্যান্ডঅফ ও ডেভ মোড" },
          { en: "Publishing a High-Converting Behance & Notion UX Case Study for Remote Jobs", bn: "বিহ্যান্স ও নোশনে কমপ্লিট ইউএক্স কেস স্টাডি পাবলিশিং" }
        ]
      }
    ],
    includedItems: [
      { en: "24 Live Practical UX/UI Masterclasses", bn: "২৪ টি লাইভ প্র্যাকটিক্যাল ক্লাস" },
      { en: "Figma UI Kit & Complete Enterprise Design System File", bn: "কমপ্লিট ফিগমা ডিজাইন সিস্টেম ফাইল" },
      { en: "Full Portfolio Case Study Review & Interview Prep", bn: "ইউআই/ইউএক্স পোর্টফোলিও কেস স্টাডি রিভিউ" },
      { en: "Verified Master in UX/UI Design Certificate", bn: "সার্টিফাইড ইউআই/ইউএক্স ডিজাইন সনদপত্র" }
    ],
    reviews: [
      {
        id: "r13",
        name: "Sadia Afrin",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120",
        role: { en: "Product Designer at Technext", bn: "প্রোডাক্ট ডিজাইনার" },
        rating: 5,
        comment: {
          en: "The Figma Design System and Case Study structuring lessons helped me secure an international remote UI/UX designer position!",
          bn: "ফিগমা ডিজাইন সিস্টেম এবং প্রফেশনাল কেস স্টাডি তৈরির গাইডলাইন অসাধারণ ছিল।"
        },
        date: "2 Weeks Ago"
      }
    ]
  },

  // 14. Mastering WordPress Development
  {
    id: "14",
    slug: "mastering-wordpress-development",
    title: {
      en: "Mastering WordPress Development",
      bn: "মাস্টারিং ওয়ার্ডপ্রেস ডেভেলপমেন্ট"
    },
    subtitle: {
      en: "Build professional e-commerce, custom Elementor Pro & WooCommerce sites with payment gateways and freelancing mastery",
      bn: "কোডিং ছাড়া প্রফেশনাল ই-কমার্স, এলিমেন্টর প্রো, উকমার্স ও পেমেন্ট গেটওয়ে দিয়ে ওয়েবসাইট তৈরি ও ফ্রিল্যান্সিং ক্যারিয়ার"
    },
    category: "web",
    categoryLabel: {
      en: "WordPress & Web",
      bn: "ওয়ার্ডপ্রেস ও ওয়েব"
    },
    badge: {
      en: "BEST SELLER",
      bn: "বেস্ট সেলার"
    },
    mode: {
      en: "Online & Offline",
      bn: "অনলাইন ও অফলাইন"
    },
    modeType: "offline",
    rating: 4.9,
    ratingsCount: 165,
    enrolledCount: "150+ Enrolled",
    languages: {
      en: "Bengali / English",
      bn: "বাংলা / ইংরেজি"
    },
    fee: "8,000৳",
    rawFee: 8000,
    originalFee: "15,000৳",
    duration: {
      en: "3 Months",
      bn: "৩ মাস"
    },
    classesCount: {
      en: "24 Classes",
      bn: "২৪ টি ক্লাস"
    },
    image: "/images/course thumbnail/wordpress.jpg",
    videoUrl: "https://www.facebook.com/reel/2302715647232585/",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Mastering%20WordPress%20Development%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Engr. Rezaul Karim",
      designation: {
        en: "Senior WordPress Engineer & Top Rated Freelancer",
        bn: "সিনিয়র ওয়ার্ডপ্রেস ইঞ্জিনিয়ার ও টপ রেটেড ফ্রিল্যান্সার"
      },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      bio: {
        en: "7+ years designing 300+ custom WordPress, WooCommerce & ACF websites for international clients on Upwork & Fiverr.",
        bn: "৭+ বছরের ওয়ার্ডপ্রেস, উকমার্স ও ফ্রিল্যান্স মার্কেটপ্লেসে ক্লায়েন্ট প্রজেক্ট হ্যান্ডলিং অভিজ্ঞতা।"
      },
      experience: "7+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Master professional WordPress web development from scratch. Learn Elementor Pro, Divi, WooCommerce e-commerce setups with local/global payment gateways (bKash, Nagad, Stripe), dynamic websites using ACF & Crocoblock, speed optimization, and winning freelance clients on Fiverr & Upwork.",
      bn: "কোডিং ছাড়া জিরো লেভেল থেকে প্রফেশনাল ওয়েবসাইট তৈরি ও ফ্রিল্যান্সিং ক্যারিয়ার গড়ার কমপ্লিট কোর্স। এলিমেন্টর প্রো, উকমার্স, বিকাশ-নগদ পেমেন্ট গেটওয়ে, এসিএফ ডাইনামিক ওয়েবসাইট ও মার্কেটপ্লেস গাইডলাইন শিখবেন।"
    },
    fullDescription: {
      en: "WordPress powers over 43% of all websites on the internet. In this project-driven masterclass, you will build responsive landing pages, hotel/service booking portals, high-converting WooCommerce shops, and sales funnels. You will also master speed optimization, security hardening, and complete marketplace bidding strategies.",
      bn: "থিওরির পাশাপাশি প্রতিটি ক্লাসে রিয়েল ক্লায়েন্ট প্রজেক্ট, প্রিমিয়াম প্লাগিন-থিম প্র্যাকটিস ফাইল ও আন্তর্জাতিক মার্কেটপ্লেসে কাজ পাওয়ার টেকনিক শেখানো হবে।"
    },
    coreValues: [
      {
        id: "cv1",
        title: { en: "Elementor Pro & Dynamic ACF", bn: "এলিমেন্টর প্রো ও এসিএফ" },
        desc: { en: "Build pixel-perfect landing pages and custom post type dynamic systems.", bn: "কাস্টম পোস্ট টাইপ ও আধুনিক ল্যান্ডিং পেজ ডিজাইন।" },
        icon: "Code2"
      },
      {
        id: "cv2",
        title: { en: "WooCommerce & Payment Gateway", bn: "উকমার্স ও পেমেন্ট গেটওয়ে" },
        desc: { en: "Full-functional online stores with bKash, Nagad, Stripe & PayPal.", bn: "বিকাশ, নগদ ও স্ট্রাইপ পেমেন্ট গেটওয়ে ইন্টিগ্রেশন।" },
        icon: "Zap"
      },
      {
        id: "cv3",
        title: { en: "Speed, Security & Freelancing", bn: "স্পিড, সিকিউরিটি ও ফ্রিল্যান্সিং" },
        desc: { en: "WP Rocket optimization, Wordfence security & Upwork/Fiverr gigs.", bn: "স্পিড অপটিমাইজেশন ও ফ্রিল্যান্সিং ব্লুপ্রিন্ট।" },
        icon: "Award"
      }
    ],
    learningOutcomes: [
      { en: "Build modern business websites and landing pages using Elementor Pro and Divi builder.", bn: "এলিমেন্টর প্রো ও ডিভি দিয়ে আধুনিক বিজনেস ওয়েবসাইট ও ল্যান্ডিং পেজ তৈরি।" },
      { en: "Create full-featured WooCommerce e-commerce stores with multi-currency and payment gateways.", bn: "উকমার্স দিয়ে কমপ্লিট ই-কমার্স শপ ও পেমেন্ট গেটওয়ে সেটআপ।" },
      { en: "Develop dynamic web portals using ACF (Advanced Custom Fields) and Crocoblock JetEngine.", bn: "এসিএফ ও ক্রোকোব্লক দিয়ে ডাইনামিক ফিল্টার ও কাস্টম পোস্ট টাইপ তৈরি।" },
      { en: "Optimize website speed (90+ Google PageSpeed) and secure WordPress with Wordfence/Cloudflare.", bn: "সাইট স্পিড অপটিমাইজেশন ও সিকিউরিটি হার্ডেনিং।" },
      { en: "Create optimized Fiverr Gigs and winning Upwork proposals for WordPress client jobs.", bn: "ফাইভার গিগ ও আপওয়ার্ক কভার লেটার অপটিমাইজেশন।" }
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: { en: "Module 1: WordPress Core Architecture & Local Server Setup", bn: "মডিউল ১: ওয়ার্ডপ্রেস কোর আর্কিটেকচার ও লোকাল সার্ভার" },
        duration: { en: "4 Classes • 8 Hours", bn: "৪ টি ক্লাস • ৮ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "Domain, Hosting, cPanel, SSL & Local by Flywheel Setup", bn: "ডোমেন, হোস্টিং, সিপ্যানেল ও লোকাল সার্ভার কনফিগারেশন" },
          { en: "WordPress Dashboard, Settings, Permalinks & Gutenberg Editor", bn: "ওয়ার্ডপ্রেস ড্যাশবোর্ড সেটিংস ও গুটেনবার্গ এডিটর" },
          { en: "Theme and Plugin Architecture, Child Themes & Best Practices", bn: "থিম ও প্লাগিন আর্কিটেকচার এবং চাইল্ড থিম তৈরি" }
        ]
      },
      {
        moduleNumber: 2,
        title: { en: "Module 2: Elementor Pro & High-Converting Landing Pages", bn: "মডিউল ২: এলিমেন্টর প্রো ও হাই-কনভার্টিং ল্যান্ডিং পেজ" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Elementor Flexbox Containers, Responsive Breakpoints & Global Design System", bn: "এলিমেন্টর ফ্লেক্সবক্স কন্টেইনার ও রেসপনসিভ ডিজাইন" },
          { en: "Theme Builder: Custom Header, Footer, 404, Single Post & Archive Templates", bn: "কাস্টম হেডার, ফুটার ও সিঙ্গেল পোস্ট টেমপ্লেট" },
          { en: "Popups, Sticky Effects, Motion Effects & Lead Capture Forms", bn: "পপআপ, স্টিকি এফেক্টস ও লিড ক্যাপচার ফর্ম" }
        ]
      },
      {
        moduleNumber: 3,
        title: { en: "Module 3: Full E-Commerce Store with WooCommerce & Payment Gateways", bn: "মডিউল ৩: উকমার্স ই-কমার্স ও পেমেন্ট গেটওয়ে ইন্টিগ্রেশন" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "WooCommerce Setup: Simple, Variable, Digital & Downloadable Products", bn: "সিম্পল ও ভ্যারিয়েবল প্রোডাক্ট সেটআপ" },
          { en: "Custom Checkout & Cart Page Design with Multi-Step Checkout", bn: "কাস্টম কার্ট ও চেকআউট পেজ ডিজাইন" },
          { en: "Local & International Payment Integration: bKash, Nagad, Stripe, PayPal & SSLCommerz", bn: "বিকাশ, নগদ, স্ট্রাইপ ও এসএসএলকমার্স পেমেন্ট গেটওয়ে" }
        ]
      },
      {
        moduleNumber: 4,
        title: { en: "Module 4: Dynamic Websites (ACF, Crocoblock & Custom Post Types)", bn: "মডিউল ৪: ডায়নামিক ওয়েবসাইট (ACF ও Crocoblock)" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Custom Post Types (CPT) & Custom Taxonomies with CPT UI", bn: "কাস্টম পোস্ট টাইপ ও ট্যাক্সোনমি তৈরি" },
          { en: "Advanced Custom Fields (ACF Pro) & Dynamic Content Binding in Elementor", bn: "এসিএফ প্রো দিয়ে ডাইনামিক ফিল্ড বাইন্ডিং" },
          { en: "Building a Real Estate / Hotel Booking & Directory Portal with Crocoblock JetEngine", bn: "হোটেল বুকিং ও ডিরেক্টরি পোর্টাল প্রজেক্ট" }
        ]
      },
      {
        moduleNumber: 5,
        title: { en: "Module 5: Speed Optimization, Security & Freelancing Blueprint", bn: "মডিউল ৫: স্পিড অপটিমাইজেশন, সিকিউরিটি ও ফ্রিল্যান্সিং" },
        duration: { en: "5 Classes • 10 Hours", bn: "৫ টি ক্লাস • ১০ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Speed Optimization (WP Rocket, Perfmatters, Image Compression & Cloudflare CDN)", bn: "সাইটের স্পিড ৯০+ অপটিমাইজেশন" },
          { en: "WordPress Security (Wordfence, Two-Factor Auth, Malware Cleanup & Backups with UpdraftPlus)", bn: "ওয়ার্ডপ্রেস সিকিউরিটি ও ব্যাকআপ সেটআপ" },
          { en: "Upwork Proposals, Fiverr Gig SEO & Winning High-Ticket WordPress Clients", bn: "আপওয়ার্ক ও ফাইভারে সফল ফ্রিল্যান্সিং গাইডলাইন" }
        ]
      }
    ],
    includedItems: [
      { en: "24 Live Practical WordPress Masterclasses", bn: "২৪ টি লাইভ প্র্যাকটিক্যাল ক্লাস" },
      { en: "Premium Themes & Plugins Bundle (Elementor Pro, Crocoblock, WP Rocket)", bn: "প্রিমিয়াম থিম ও প্লাগিন প্র্যাকটিস ফাইলস" },
      { en: "Fiverr & Upwork WordPress Freelance Blueprint", bn: "ফ্রিল্যান্সিং ব্লুপ্রিন্ট ও গিগ গাইড" },
      { en: "Professional WordPress Developer Certificate", bn: "প্রফেশনাল ওয়ার্ডপ্রেস ডেভেলপার সনদপত্র" }
    ],
    reviews: [
      {
        id: "r14",
        name: "Ashraful Alam",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120",
        role: { en: "WordPress Freelancer on Fiverr", bn: "ওয়ার্ডপ্রেস ফ্রিল্যান্সার" },
        rating: 5,
        comment: {
          en: "The WooCommerce payment integration and ACF dynamic site lessons were top-notch. Started getting direct client orders within a month of completion!",
          bn: "উকমার্স পেমেন্ট গেটওয়ে এবং এসিএফ ডাইনামিক ওয়েবসাইট বানানোর গাইডলাইন অসাধারণ ছিল।"
        },
        date: "1 Week Ago"
      }
    ]
  }
];

export function getCourseById(id: string): CourseDetail {
  const match = coursesData.find((c) => c.id === id || c.slug === id);
  if (match) return match;

  // Fallback to first course if not found
  return coursesData[0];
}

export function getVideoMeta(url: string) {
  if (!url) return { embedUrl: "", directUrl: "", isFacebook: false, isYouTube: false };
  
  if (url.includes("facebook.com") || url.includes("fb.watch")) {
    let directUrl = url;
    let embedUrl = url;
    if (url.includes("plugins/video.php")) {
      const match = url.match(/href=([^&]+)/);
      if (match) {
        directUrl = decodeURIComponent(match[1]);
      }
      embedUrl = url;
    } else {
      embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=0`;
    }
    return {
      embedUrl: embedUrl,
      directUrl: directUrl,
      isFacebook: true,
      isYouTube: false
    };
  }

  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    let directUrl = url;
    let embedUrl = url;
    if (url.includes("embed/")) {
      const videoId = url.split("embed/")[1]?.split("?")[0];
      if (videoId) directUrl = `https://www.youtube.com/watch?v=${videoId}`;
    } else if (url.includes("watch?v=")) {
      const videoId = url.split("watch?v=")[1]?.split("&")[0];
      if (videoId) embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    } else if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1]?.split("?")[0];
      if (videoId) embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    return {
      embedUrl: embedUrl,
      directUrl: directUrl,
      isFacebook: false,
      isYouTube: true
    };
  }

  return { embedUrl: url, directUrl: url, isFacebook: false, isYouTube: false };
}
