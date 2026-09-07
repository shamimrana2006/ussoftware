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
  {
    "id": "1",
    "slug": "web-development-with-react",
    "title": {
      "en": "Web Development with React",
      "bn": "ওয়েব ডেভেলপমেন্ট উইথ রিঅ্যাক্ট"
    },
    "subtitle": {
      "en": "Master React, React Router, Tailwind CSS, Firebase, Figma/PSD to React & build portfolio, blog and job portal web apps",
      "bn": "রিঅ্যাক্ট, রিঅ্যাক্ট রাউটার, টেইলউইন্ড সিএসএস, ফায়ারবেস ও ৪টি বাস্তব প্রোজেক্ট সহ প্রফেশনাল ওয়েব ডেভেলপমেন্ট শিখুন"
    },
    "category": "web",
    "categoryLabel": {
      "en": "Web Development",
      "bn": "ওয়েব ডেভেলপমেন্ট"
    },
    "badge": {
      "en": "BESTSELLER",
      "bn": "বেস্টসেলার"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 142,
    "enrolledCount": "120+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "20,000৳",
    "rawFee": 20000,
    "originalFee": "30,000৳",
    "duration": {
      "en": "138 hrs. (4 Months)",
      "bn": "১৩৮ ঘণ্টা (৪ মাস)"
    },
    "classesCount": {
      "en": "46 Classes",
      "bn": "৪৬ টি ক্লাস"
    },
    "image": "/images/course thumbnail/enterprise full stack next.js 15.jpg",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Full%20Stack%20Web%20Master%20in%20Frontend%20Development%20(Mern)%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Engr. Tanvir Hasan",
      "designation": {
        "en": "Lead Frontend Architect & React Specialist",
        "bn": "লিড ফ্রন্টএন্ড আর্কিটেক্ট ও রিঅ্যাক্ট স্পেশালিস্ট"
      },
      "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "8+ years of engineering robust client-side architectures for international SaaS applications.",
        "bn": "৮+ বছরের ফ্রন্টএন্ড আর্কিটেকচার ও আন্তর্জাতিক সাস অ্যাপ্লিকেশন তৈরির অভিজ্ঞতা।"
      },
      "experience": "8+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Become a professional React web developer. Learn HTML, CSS, Tailwind, JavaScript, React Router, Firebase, Figma/PSD to React, and build portfolio, blog, newspaper, and job portal web applications with complete marketplace guidance.",
      "bn": "এইচটিএমএল, সিএসএস, টেইলউইন্ড, জাভাস্ক্রিপ্ট, রিঅ্যাক্ট, রিঅ্যাক্ট রাউটার, ফায়ারবেস, ফিগমা টু রিঅ্যাক্ট এবং পোর্টফোলিও, ব্লগ, নিউজপেপার ও জব পোর্টাল প্রজেক্ট সহ রিঅ্যাক্ট ওয়েব ডেভেলপমেন্টের পূর্ণাঙ্গ কোর্স।"
    },
    "fullDescription": {
      "en": "Master frontend web development with React from ground up to professional deployment. This 138-hour comprehensive curriculum covers core DOM fundamentals, modern React architecture, component-driven development, Firebase backend integrations, and 4 production-grade projects ready for your portfolio.",
      "bn": "এই ১৩৮ ঘণ্টার কোর্সে আপনি এইচটিএমএল, সিএসএস ও আধুনিক জাভাস্ক্রিপ্ট থেকে শুরু করে রিঅ্যাক্ট ১৯, রিঅ্যাক্ট রাউটার, ফায়ারবেস ইন্টিগ্রেশন এবং ফিগমা/পিএসডি ডিজাইনকে কোডে রূপান্তর করা শিখবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Component-Driven Architecture",
          "bn": "কম্পোনেন্ট-ড্রাইভেন আর্কিটেকচার"
        },
        "desc": {
          "en": "Build clean, reusable, modular React components following SOLID principles.",
          "bn": "ক্লিন ও রিইউজেবল রিঅ্যাক্ট কম্পোনেন্ট তৈরি করা শিখবেন।"
        },
        "icon": "Code2"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Production Next.js 15",
          "bn": "প্রোডাকশন নেক্সট.জেএস ১৫"
        },
        "desc": {
          "en": "Master Server Components, SSR, SSG, Server Actions & caching strategies.",
          "bn": "নেক্সট.জেএস সার্ভার কম্পোনেন্টস ও এসএসআর মাস্টার করুন।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv3",
        "title": {
          "en": "TypeScript & State Mastery",
          "bn": "টাইপস্ক্রিপ্ট ও স্টেট ম্যানেজমেন্ট"
        },
        "desc": {
          "en": "Type-safe codebases with TypeScript and Redux Toolkit / TanStack Query.",
          "bn": "টাইপস্ক্রিপ্ট ও রিডাক্স টুলকিট দিয়ে বাগ-মুক্ত কোড তৈরি।"
        },
        "icon": "ShieldCheck"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master modern JavaScript (ES6+) and TypeScript from basics to advanced patterns.",
        "bn": "মডার্ন জাভাস্ক্রিপ্ট (ES6+) ও টাইপস্ক্রিপ্ট পুঙ্খানুপুঙ্খভাবে আয়ত্ত করা।"
      },
      {
        "en": "Build scalable single-page and multi-page apps with React 19 and Next.js 15.",
        "bn": "রিঅ্যাক্ট ১৯ ও নেক্সট.জেএস ১৫ দিয়ে স্কেলেবল ওয়েব অ্যাপ তৈরি।"
      },
      {
        "en": "Implement enterprise state management using Redux Toolkit and TanStack Query.",
        "bn": "রিডাক্স টুলকিট ও ট্যানস্ট্যাক কোয়েরি দিয়ে জটিল স্টেট ম্যানেজমেন্ট।"
      },
      {
        "en": "Create responsive, accessible UI designs with Tailwind CSS and Framer Motion.",
        "bn": "টেইলউইন্ড সিএসএস ও ফ্রেমার মোশন দিয়ে রেসপনসিভ ও আকর্ষণীয় ডিজাইন তৈরি।"
      },
      {
        "en": "Deploy production web apps with automated CI/CD and Core Web Vitals optimization.",
        "bn": "ভার্সেল ও গিটহাবে সিআই/সিডি সহ লাইভ সার্ভারে ডেপ্লয়মেন্ট।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Web Fundamentals & Modern JavaScript",
          "bn": "মডিউল ১: ওয়েব ফান্ডামেন্টালস ও মডার্ন জাভাস্ক্রিপ্ট"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "HTML, CSS & Modern Tailwind CSS",
            "bn": "এইচটিএমএল, সিএসএস ও টেইলউইন্ড সিএসএস"
          },
          {
            "en": "GitHub Version Control & Collaboration",
            "bn": "গিটহাব ভার্সন কন্ট্রোল ও কলাবোরেশন"
          },
          {
            "en": "JavaScript Essentials, DOM Manipulation & JSON",
            "bn": "জাভাস্ক্রিপ্ট ফান্ডামেন্টালস, ডম ম্যানিপুলেশন ও জেএসন"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: React Core, Router & Firebase Backend",
          "bn": "মডিউল ২: রিঅ্যাক্ট কোর, রাউটার ও ফায়ারবেস ব্যাকএন্ড"
        },
        "duration": {
          "en": "12 Classes • 36 Hours",
          "bn": "১২ টি ক্লাস • ৩৬ ঘণ্টা"
        },
        "lessonsCount": 10,
        "topics": [
          {
            "en": "React Components, Props, State & Hooks Architecture",
            "bn": "রিঅ্যাক্ট কম্পোনেন্ট, প্রপ্স, স্টেট ও হুকস আর্কিটেকচার"
          },
          {
            "en": "React Router for Dynamic Multi-Page Web Apps",
            "bn": "ডাইনামিক মাল্টি-পেজ অ্যাপের জন্য রিঅ্যাক্ট রাউটার"
          },
          {
            "en": "Firebase Authentication & Realtime Database",
            "bn": "ফায়ারবেস অথেনটিকেশন ও রিয়েলটাইম ডাটাবেস"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: UI Design Conversion & Production Web Apps",
          "bn": "মডিউল ৩: ইউআই কনভার্সন ও প্রোডাকশন ওয়েব অ্যাপস"
        },
        "duration": {
          "en": "16 Classes • 48 Hours",
          "bn": "১৬ টি ক্লাস • ৪৮ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "Figma to React & PSD to React Pixel-Perfect Conversion",
            "bn": "ফিগমা টু রিঅ্যাক্ট ও পিএসডি টু রিঅ্যাক্ট কনভার্সন"
          },
          {
            "en": "Project 1: Interactive Personal Portfolio Website Design",
            "bn": "প্রজেক্ট ১: পার্সোনাল পোর্টফোলিও ওয়েবসাইট ডিজাইন"
          },
          {
            "en": "Project 2: Dynamic Blog Website Design with Markdown",
            "bn": "প্রজেক্ট ২: ডাইনামিক ব্লগ ওয়েবসাইট ডিজাইন"
          },
          {
            "en": "Project 3: Modern Newspaper & News Portal Website Design",
            "bn": "প্রজেক্ট ৩: নিউজপেপার ও নিউজ পোর্টাল ডিজাইন"
          },
          {
            "en": "Project 4: Full-Featured Job Portal Website Design",
            "bn": "প্রজেক্ট ৪: ফুল-ফিচারড জব পোর্টাল ওয়েবসাইট ডিজাইন"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: Communicative English, Soft Skills & Marketplace",
          "bn": "মডিউল ৪: কমিউনিকেটিভ ইংলিশ, সফট স্কিলস ও মার্কেটপ্লেস"
        },
        "duration": {
          "en": "8 Classes • 24 Hours",
          "bn": "৮ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Communicative English for International Client Communication",
            "bn": "আন্তর্জাতিক ক্লায়েন্ট কমিউনিকেশনের জন্য ইংলিশ"
          },
          {
            "en": "Soft Skills, Interview Preparation & Marketplace Mastery (Fiverr & Upwork)",
            "bn": "সফট স্কিলস, ইন্টারভিউ প্রস্তুতি ও মার্কেটপ্লেস গাইডলাইন"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "28 Live Interactive Mentorship Classes",
        "bn": "২৮ টি লাইভ ইন্টারঅ্যাক্টিভ মেন্টরশিপ ক্লাস"
      },
      {
        "en": "5 Real-World Production Projects for Portfolio",
        "bn": "পোর্টফোলিওর জন্য ৫টি বাস্তব প্রোজেক্ট"
      },
      {
        "en": "Lifetime Access to Class Recordings & Codebases",
        "bn": "লাইফটাইম ক্লাস রেকর্ডিং ও সোর্স কোড অ্যাক্সেস"
      },
      {
        "en": "Industry-Standard Verified Course Certificate",
        "bn": "ইন্ডাস্ট্রি সার্টিফাইড কোর্স সনদপত্র"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Shakil Ahmed",
        "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "Frontend Developer at Softvibe",
          "bn": "ফ্রন্টএন্ড ডেভেলপার"
        },
        "rating": 5,
        "comment": {
          "en": "The deep dive into Next.js 15 and Redux Toolkit completely leveled up my skills. I landed my first frontend role right after finishing the capstone project!",
          "bn": "নেক্সট.জেএস ১৫ ও রিডাক্স টুলকিটের প্র্যাকটিক্যাল কাজ আমার ক্যারিয়ারে বিশাল ভূমিকা রেখেছে।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "2",
    "slug": "mern-stack-development",
    "title": {
      "en": "MERN Stack Development",
      "bn": "মার্ন স্ট্যাক ডেভেলপমেন্ট"
    },
    "subtitle": {
      "en": "Master MongoDB, Express.js, React, Node.js, TypeScript, advanced NoSQL backend & build enterprise full stack applications",
      "bn": "মঙ্গোডিবি, এক্সপ্রেস, রিঅ্যাক্ট, নোড.জেএস, টাইপস্ক্রিপ্ট ও নোএসকিউএল ব্যাকএন্ড সহ ফুল স্ট্যাক সফটওয়্যার তৈরি শিখুন"
    },
    "category": "web",
    "categoryLabel": {
      "en": "Web Development",
      "bn": "ওয়েব ডেভেলপমেন্ট"
    },
    "badge": {
      "en": "ADVANCED",
      "bn": "এডভান্সড"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 135,
    "enrolledCount": "110+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "40,000৳",
    "rawFee": 40000,
    "originalFee": "60,000৳",
    "duration": {
      "en": "150 hrs. (5 Months)",
      "bn": "১৫০ ঘণ্টা (৫ মাস)"
    },
    "classesCount": {
      "en": "50 Classes",
      "bn": "৫০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/postgresql.jpg",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Full%20Stack%20Web%20Master%20in%20Backend%20Development%20(Mern)%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Ashraf Hossain",
      "designation": {
        "en": "Principal Backend Engineer & Cloud Architect",
        "bn": "প্রিন্সিপাল ব্যাকএন্ড ইঞ্জিনিয়ার ও ক্লাউড আর্কিটেক্ট"
      },
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "10+ years designing enterprise-scale microservices, distributed caching, and secure backend systems.",
        "bn": "১০+ বছরের ডিস্ট্রিবিউটেড সিস্টেমস, মাইক্রোসার্ভিসেস ও সিকিউর ব্যাকএন্ড আর্কিটেকচার অভিজ্ঞতা।"
      },
      "experience": "10+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Master end-to-end full stack software development with the MERN stack (MongoDB, Express.js, React, Node.js), TypeScript, advanced NoSQL database architecture, scalable backend microservices, and enterprise production web apps.",
      "bn": "মঙ্গোডিবি, এক্সপ্রেস, রিঅ্যাক্ট, নোড.জেএস (MERN), টাইপস্ক্রিপ্ট, এডভান্সড নোএসকিউএল ব্যাকএন্ড এবং সম্পূর্ণ ফুল স্ট্যাক লাইভ ওয়েবসাইট তৈরির পূর্ণাঙ্গ ইন্ডাস্ট্রি-স্ট্যান্ডার্ড কোর্স।"
    },
    "fullDescription": {
      "en": "This intensive 150-hour program empowers you to design, build, and deploy production-grade full stack applications. You will learn modern frontend development with React & Tailwind, enterprise backend architecture with Node.js & Express, complex NoSQL modeling with MongoDB, and TypeScript integration.",
      "bn": "১৫০ ঘণ্টার এই প্রফেশনাল কোর্সে মডার্ন রিঅ্যাক্ট ফ্রন্টএন্ড থেকে শুরু করে নোড.জেএস ও এক্সপ্রেস ব্যাকএন্ড, মঙ্গোডিবি ডাটাবেস আর্কিটেকচার, টাইপস্ক্রিপ্ট এবং ক্লাউড ডেপ্লয়মেন্টের যাবতীয় বিষয় পুঙ্খানুপুঙ্খভাবে শেখানো হবে।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "High-Performance APIs",
          "bn": "হাই-পারফরম্যান্স এপিআই"
        },
        "desc": {
          "en": "Design fast, rate-limited, cached RESTful & GraphQL services.",
          "bn": "ফাস্ট ও অপ্টিমাইজড এপিআই তৈরি করা শিখবেন।"
        },
        "icon": "Terminal"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Enterprise Security & RBAC",
          "bn": "এন্টারপ্রাইজ সিকিউরিটি"
        },
        "desc": {
          "en": "Implement JWT, bcrypt, CORS, OAuth2, and SQL/NoSQL injection defense.",
          "bn": "জেডব্লিউটি, ওঅথ২ ও সাইবার সুরক্ষা বাস্তবায়ন।"
        },
        "icon": "ShieldCheck"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Scalable Databases & Redis",
          "bn": "স্কেলেবল ডাটাবেস ও রেডিস"
        },
        "desc": {
          "en": "Master MongoDB indexing, aggregation pipelines, and Redis in-memory cache.",
          "bn": "মঙ্গোডিবি ইনডেক্সিং ও রেডিস ক্যাশিং সিস্টেম।"
        },
        "icon": "Database"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Build secure, scalable REST APIs using Node.js, Express.js, and TypeScript.",
        "bn": "নোড.জেএস ও এক্সপ্রেস দিয়ে সিকিউর ও স্কেলেবল রেস্ট এপিআই তৈরি।"
      },
      {
        "en": "Master MongoDB schema design, indexing, transactions, and aggregation pipelines.",
        "bn": "মঙ্গোডিবি স্কিমা ডিজাইন, ইনডেক্সিং ও ট্রানজ্যাকশন আয়ত্ত করা।"
      },
      {
        "en": "Implement enterprise authentication with JWT, refresh tokens, and RBAC.",
        "bn": "রিফ্রেশ টোকেন ও আরব্যাক সহ এন্টারপ্রাইজ অথেনটিকেশন তৈরি।"
      },
      {
        "en": "Integrate Redis caching, BullMQ message queues, and WebSockets for real-time features.",
        "bn": "রেডিস ক্যাশিং ও রিয়েল-টাইম ওয়েব সকেট সিস্টেম বাস্তবায়ন।"
      },
      {
        "en": "Containerize and deploy backend services using Docker, Nginx, and cloud providers.",
        "bn": "ডকার ও এনজিনিক্স দিয়ে ক্লাউড সার্ভারে লাইভ ডেপ্লয়মেন্ট।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Modern Frontend Foundations & TypeScript",
          "bn": "মডিউল ১: মডার্ন ফ্রন্টএন্ড ফাউন্ডেশন ও টাইপস্ক্রিপ্ট"
        },
        "duration": {
          "en": "12 Classes • 36 Hours",
          "bn": "১২ টি ক্লাস • ৩৬ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "HTML5, Modern CSS & Tailwind CSS Framework",
            "bn": "এইচটিএমএল৫, আধুনিক সিএসএস ও টেইলউইন্ড সিএসএস"
          },
          {
            "en": "GitHub Version Control, Git Workflow & Team Collaboration",
            "bn": "গিটহাব ভার্সন কন্ট্রোল ও টিম কলাবোরেশন"
          },
          {
            "en": "React Architecture, Hooks, State & Component Lifecycle",
            "bn": "রিঅ্যাক্ট আর্কিটেকচার, হুকস ও স্টেট ম্যানেজমেন্ট"
          },
          {
            "en": "TypeScript Essentials for Scalable Frontend Systems",
            "bn": "স্কেলেবল ফ্রন্টএন্ডের জন্য টাইপস্ক্রিপ্ট"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Node.js, Express.js & Advanced NoSQL Backend",
          "bn": "মডিউল ২: নোড.জেএস, এক্সপ্রেস ও এডভান্সড নোএসকিউএল ব্যাকএন্ড"
        },
        "duration": {
          "en": "18 Classes • 54 Hours",
          "bn": "১৮ টি ক্লাস • ৫৪ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "Node JS Core Architecture, Asynchronous I/O & Event Loop",
            "bn": "নোড.জেএস আর্কিটেকচার, অ্যাসিঙ্ক আই/ও ও ইভেন্ট লুপ"
          },
          {
            "en": "Express JS RESTful API Design & Middleware Pipeline",
            "bn": "এক্সপ্রেস জেএস রেস্টফুল এপিআই ডিজাইন ও মিডলওয়্যার"
          },
          {
            "en": "MongoDB Database Modeling, Indexes & Complex Aggregations",
            "bn": "মঙ্গোডিবি ডাটাবেস মডেলিং, ইনডেক্স ও জটিল এগ্রিগেশন"
          },
          {
            "en": "Advance NoSQL Backend Architecture & Data Validation",
            "bn": "এডভান্সড নোএসকিউএল ব্যাকএন্ড আর্কিটেকচার ও ডাটা ভ্যালিডেশন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Enterprise Full Stack Projects & Marketplace",
          "bn": "মডিউল ৩: এন্টারপ্রাইজ ফুল স্ট্যাক প্রজেক্ট ও মার্কেটপ্লেস"
        },
        "duration": {
          "en": "20 Classes • 60 Hours",
          "bn": "২০ টি ক্লাস • ৬০ ঘণ্টা"
        },
        "lessonsCount": 14,
        "topics": [
          {
            "en": "Advance Front End Project: Responsive Admin Dashboard",
            "bn": "এডভান্সড ফ্রন্টএন্ড প্রজেক্ট: রেসপনসিভ অ্যাডমিন ড্যাশবোর্ড"
          },
          {
            "en": "Advance Full Stack Website Build: E-Commerce / SaaS Platform",
            "bn": "এডভান্সড ফুল স্ট্যাক ওয়েবসাইট বিল্ড: ই-কমার্স / সাস প্ল্যাটফর্ম"
          },
          {
            "en": "JWT Authentication, Role-Based Access Control & Payment Gateways",
            "bn": "জেডব্লিউটি অথেনটিকেশন, রোল-বেসড এক্সেস ও পেমেন্ট গেটওয়ে"
          },
          {
            "en": "Communicative English for Technical Interviews",
            "bn": "টেকনিক্যাল ইন্টারভিউয়ের জন্য কমিউনিকেটিভ ইংলিশ"
          },
          {
            "en": "Soft Skills, Remote Job Pitching & Marketplace Freelancing",
            "bn": "সফট স্কিলস, রিমোট জব অ্যাপ্লিকেশন ও মার্কেটপ্লেস ক্যারিয়ার"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "28 Live Interactive Mentorship Classes",
        "bn": "২৮ টি লাইভ ইন্টারঅ্যাক্টিভ মেন্টরশিপ ক্লাস"
      },
      {
        "en": "4 Complete Production-Grade Backend APIs",
        "bn": "৪টি প্রোডাকশন-গ্রেড ব্যাকএন্ড এপিআই প্রজেক্ট"
      },
      {
        "en": "API Security & Microservices Best Practices",
        "bn": "এপিআই সিকিউরিটি ও মাইক্রোসার্ভিসেস গাইড"
      },
      {
        "en": "Verified Industry-Grade Backend Certificate",
        "bn": "ইন্ডাস্ট্রি সার্টিফাইড ব্যাকএন্ড সনদপত্র"
      }
    ],
    "reviews": [
      {
        "id": "r2",
        "name": "Farhan Kabir",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "Backend Engineer at DevsTeam",
          "bn": "ব্যাকএন্ড ইঞ্জিনিয়ার"
        },
        "rating": 5,
        "comment": {
          "en": "The deep dive into MongoDB aggregation and Redis caching was pure gold. Clear, practical and enterprise-grade lessons.",
          "bn": "মঙ্গোডিবি এগ্রিগেশন এবং রেডিস ক্যাশিং শেখার অভিজ্ঞতা দুর্দান্ত ছিল।"
        },
        "date": "1 Month Ago"
      }
    ]
  },
  {
    "id": "3",
    "slug": "digital-marketing-with-seo",
    "title": {
      "en": "Digital Marketing with SEO",
      "bn": "ডিজিটাল মার্কেটিং উইথ এসইও"
    },
    "subtitle": {
      "en": "Master Meta Marketing, Google Ads, On-Page, Off-Page, Technical & Local SEO, YouTube & E-commerce SEO, Email Marketing & Affiliate",
      "bn": "মেটা মার্কেটিং, গুগল অ্যাডস, এসইও (অন-পেজ, অফ-পেজ, টেকনিক্যাল ও লোকাল), ইউটিউব এসইও ও ইমেইল মার্কেটিং শিখুন"
    },
    "category": "marketing",
    "categoryLabel": {
      "en": "Digital Marketing",
      "bn": "ডিজিটাল মার্কেটিং"
    },
    "badge": {
      "en": "POPULAR",
      "bn": "জনপ্রিয়"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 189,
    "enrolledCount": "160+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "16,000৳",
    "rawFee": 16000,
    "originalFee": "25,000৳",
    "duration": {
      "en": "90 hrs. (3 Months)",
      "bn": "৯০ ঘণ্টা (৩ মাস)"
    },
    "classesCount": {
      "en": "30 Classes",
      "bn": "৩০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/Digital Marketing.jpg",
    "videoUrl": "https://www.facebook.com/reel/2105617167053909/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Digital%20Marketing%20with%20Freelancing%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Mahfuzur Rahman",
      "designation": {
        "en": "Senior Digital Strategist & Top Rated Freelancer",
        "bn": "সিনিয়র ডিজিটাল স্ট্র্যাটেজিস্ট ও টপ রেটেড ফ্রিল্যান্সার"
      },
      "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "7+ years managing $500k+ in ad spend and mentoring 2,000+ successful freelancers on Upwork & Fiverr.",
        "bn": "৭+ বছরের গ্লোবাল অ্যাড স্পেন্ড ম্যানেজমেন্ট ও সফল ফ্রিল্যান্সিং ক্যারিয়ার ট্রেইনার।"
      },
      "experience": "7+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Become a high-performing digital marketing strategist. Master Meta Marketing, Google Ads, On-Page/Off-Page/Technical/Local SEO, E-commerce & YouTube SEO, Email Marketing and Affiliate Marketing with real client campaigns.",
      "bn": "মেটা মার্কেটিং, গুগল অ্যাডস, এসইও (অন-পেজ, অফ-পেজ, টেকনিক্যাল ও লোকাল), ইউটিউব ও ই-কমার্স এসইও, ইমেইল মার্কেটিং ও অ্যাফিলিয়েট মার্কেটিংয়ের সমন্বয়ে প্রফেশনাল ডিজিটাল মার্কেটিং ক্যারিয়ার গড়ার কোর্স।"
    },
    "fullDescription": {
      "en": "Learn how to build full-funnel digital marketing campaigns that drive measurable sales and conversions. You will gain hands-on expertise in technical SEO, Google Search Console, Meta Ads Manager, Google Analytics 4, email automation, and direct marketplace client acquisition strategies.",
      "bn": "এই কোর্সে থিওরি নয়, বরং লাইভ ক্লায়েন্ট প্রজেক্ট ও রিয়েল বাজেট নিয়ে অ্যাড রান এবং এসইও অপ্টিমাইজেশন শেখানো হয়, যাতে কোর্স শেষেই আয় শুরু করা সম্ভব হয়।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "100% Practical Ad Campaigns",
          "bn": "১০০% প্র্যাকটিক্যাল ক্যাম্পেইন"
        },
        "desc": {
          "en": "Set up live Meta & Google Ads campaigns with real budget management.",
          "bn": "রিয়েল বাজেট দিয়ে ফেসবুক ও গুগল অ্যাডস তৈরি শিখবেন।"
        },
        "icon": "Megaphone"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Marketplace Client Acquisition",
          "bn": "মার্কেটপ্লেস ক্লায়েন্ট একুইজিশন"
        },
        "desc": {
          "en": "Master winning proposals on Upwork, optimized Fiverr Gigs, and direct outreach.",
          "bn": "আপওয়ার্ক কভার লেটার ও ফাইভার গিগ অপ্টিমাইজেশন।"
        },
        "icon": "Award"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Data-Driven Analytics & SEO",
          "bn": "ডাটা-ড্রাইভেন এনালিটিক্স ও এসইও"
        },
        "desc": {
          "en": "Master Google Analytics 4, Tag Manager, and Advanced On-Page/Off-Page SEO.",
          "bn": "জিএ৪, ট্যাগ ম্যানেজার ও এডভান্সড এসইও টুলস।"
        },
        "icon": "TrendingUp"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Execute end-to-end On-Page, Off-Page, and Technical SEO strategies.",
        "bn": "অন-পেইজ, অফ-পেইজ এবং টেকনিক্যাল এসইও সফলভাবে পরিচালনা করা।"
      },
      {
        "en": "Run high-converting Facebook and Instagram ad campaigns using Meta Pixel & CAPI.",
        "bn": "মেটা পিক্সেল ও কনভার্শন এপিআই সহ ফেসবুক/ইনস্টাগ্রাম অ্যাড রান করা।"
      },
      {
        "en": "Set up and scale Google Search, Display, and YouTube Video Ad campaigns.",
        "bn": "গুগল সার্চ ও ইউটিউব ভিডিও অ্যাডস ক্যাম্পেইন তৈরি ও স্কেল করা।"
      },
      {
        "en": "Track and analyze conversion funnels using Google Tag Manager and GA4.",
        "bn": "গুগল ট্যাগ ম্যানেজার ও জিএ৪ দিয়ে কনভার্শন ট্র্যাকিং।"
      },
      {
        "en": "Build a 5-star profile on Upwork and Fiverr and communicate with international clients.",
        "bn": "আপওয়ার্ক ও ফাইভারে আকর্ষণীয় প্রোফাইল তৈরি ও ক্লায়েন্ট কমিউনিকেশন।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Search Engine Optimization (SEO & SEM)",
          "bn": "মডিউল ১: সার্চ ইঞ্জিন অপটিমাইজেশন (এসইও ও এসইএম)"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "SEO & SEM Fundamentals and Keyword Research",
            "bn": "এসইও ও এসইএম ফান্ডামেন্টালস এবং কি-ওয়ার্ড রিসার্চ"
          },
          {
            "en": "On-Page, Off-Page, Technical, and Local SEO Mastery",
            "bn": "অন-পেজ, অফ-পেজ, টেকনিক্যাল ও লোকাল এসইও"
          },
          {
            "en": "E-commerce & YouTube SEO Ranking Strategies",
            "bn": "ই-কমার্স ও ইউটিউব এসইও র‍্যাংকিং স্ট্র্যাটেজি"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Meta Marketing, Google Ads & Affiliate",
          "bn": "মডিউল ২: মেটা মার্কেটিং, গুগল অ্যাডস ও অ্যাফিলিয়েট"
        },
        "duration": {
          "en": "12 Classes • 36 Hours",
          "bn": "১২ টি ক্লাস • ৩৬ ঘণ্টা"
        },
        "lessonsCount": 10,
        "topics": [
          {
            "en": "Meta Marketing (Facebook & Instagram Ad Campaigns)",
            "bn": "মেটা মার্কেটিং (ফেসবুক ও ইনস্টাগ্রাম পেইড অ্যাডস)"
          },
          {
            "en": "Google Ads (Search, Display, Video & Performance Max)",
            "bn": "গুগল অ্যাডস (সার্চ, ডিসপ্লে, ভিডিও ও পি-ম্যাক্স)"
          },
          {
            "en": "Affiliate Marketing Networks & High-Ticket Offers",
            "bn": "অ্যাফিলিয়েট মার্কেটিং নেটওয়ার্ক ও অফার প্রমোশন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Email Marketing, Soft Skills & Marketplace",
          "bn": "মডিউল ৩: ইমেইল মার্কেটিং, সফট স্কিলস ও মার্কেটপ্লেস"
        },
        "duration": {
          "en": "8 Classes • 24 Hours",
          "bn": "৮ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "E-mail Marketing, Sequences and Automation Tools",
            "bn": "ই-মেইল মার্কেটিং, সিকোয়েন্স ও অটোমেশন টুলস"
          },
          {
            "en": "E-commerce Marketing and Growth Tools",
            "bn": "ই-কমার্স মার্কেটিং ও গ্রোথ টুলস"
          },
          {
            "en": "Communicative English for Marketers",
            "bn": "মার্কেটারদের জন্য কমিউনিকেটিভ ইংলিশ"
          },
          {
            "en": "Soft Skills & Marketplace Freelancing (Upwork & Fiverr)",
            "bn": "সফট স্কিলস ও মার্কেটপ্লেস ফ্রিল্যান্সিং"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "24 Live Practical Classes & Q&A Sessions",
        "bn": "২৪ টি লাইভ প্র্যাকটিক্যাল ক্লাস"
      },
      {
        "en": "Upwork & Fiverr Profile Review & Optimization",
        "bn": "আপওয়ার্ক ও ফাইভার প্রোফাইল অপটিমাইজেশন"
      },
      {
        "en": "Premium SEO & Marketing Tool Access Guidelines",
        "bn": "প্রিমিয়াম এসইও টুলস গাইডলাইন"
      },
      {
        "en": "Certificate of Professional Digital Marketing",
        "bn": "প্রফেশনাল ডিজিটাল মার্কেটিং সার্টিফিকেট"
      }
    ],
    "reviews": [
      {
        "id": "r3",
        "name": "Nahidul Islam",
        "avatar": "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "Top Rated Freelancer on Upwork",
          "bn": "টপ রেটেড ফ্রিল্যান্সার"
        },
        "rating": 5,
        "comment": {
          "en": "The Upwork proposal strategies and Meta ads practical training helped me cross $1,000/month within 4 months of graduation!",
          "bn": "কোর্সটি করার পর আমি আপওয়ার্কে প্রথম মাসে ৩টি ক্লায়েন্ট প্রজেক্ট পাই।"
        },
        "date": "3 Weeks Ago"
      }
    ]
  },
  {
    "id": "4",
    "slug": "advanced-digital-marketing-ai",
    "title": {
      "en": "Advanced Digital Marketing with AI",
      "bn": "অ্যাডভান্সড ডিজিটাল মার্কেটিং উইথ এআই"
    },
    "subtitle": {
      "en": "Supercharge marketing campaigns with Generative AI, Meta AI Ads, Predictive Analytics & Automation",
      "bn": "জেনারেটিভ এআই, মেটা অ্যাডস এআই, অটোমেশন ও ডাটা-ড্রাইভেন মার্কেটিং দিয়ে ক্যাম্পেইন স্কেল করুন"
    },
    "category": "marketing",
    "categoryLabel": {
      "en": "AI Marketing",
      "bn": "এআই মার্কেটিং"
    },
    "badge": {
      "en": "TRENDING",
      "bn": "ট্রেন্ডিং"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 112,
    "enrolledCount": "95+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "9,000৳",
    "rawFee": 9000,
    "originalFee": "16,000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "24 Classes",
      "bn": "২৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/meta ads.jpg",
    "videoUrl": "https://www.facebook.com/reel/1791500222217262/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Advanced%20Digital%20Marketing%20with%20AI%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Sabbir Hossain",
      "designation": {
        "en": "AI Marketing Consultant & Growth Hacker",
        "bn": "এআই মার্কেটিং কনসালট্যান্ট ও গ্রোথ হ্যাকার"
      },
      "image": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "Pioneering AI-driven automated funnels and Advantage+ campaign scaling for 50+ international brands.",
        "bn": "আন্তর্জাতিক ব্র্যান্ডের জন্য এআই অটোমেশন ও অ্যাড ক্যাম্পেইন বিশেষজ্ঞ।"
      },
      "experience": "6+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Take your digital marketing to the cutting edge with AI tools. Master prompt engineering for copywriting, AI-generated video and image ads, Meta Advantage+ AI campaigns, automated lead funnels with Make.com/Zapier, and AI predictive analytics.",
      "bn": "কৃত্রিম বুদ্ধিমত্তা (AI) ব্যবহার করে মার্কেটিং ক্যাম্পেইনের কনভার্শন ১০ গুণ বৃদ্ধি করার আধুনিক কোর্স। চ্যাটজিপিটি প্রম্পট ইঞ্জিনিয়ারিং, মেটা এআই অ্যাডস, অটোমেটেড চ্যাটবট এবং এআই ডাটা অ্যানালিটিক্স শিখবেন।"
    },
    "fullDescription": {
      "en": "Artificial intelligence has transformed digital marketing. In this forward-looking program, you will learn how top agencies deploy ChatGPT, Midjourney, Claude, Make.com, and AI-powered advertising algorithms to automate content production, optimize ad spend, and maximize ROI.",
      "bn": "এই কোর্সে এআই দিয়ে কন্টেন্ট তৈরি, ভিডিও স্ক্রিপ্টিং, অটোনোমাস অ্যাড অপটিমাইজেশন এবং হাই-কনভার্টিং ফানেল বিল্ড করার প্রতিটি আধুনিক স্ট্র্যাটেজি হ্যান্ডস-অন প্রজেক্টের মাধ্যমে শেখানো হবে।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "AI Prompt Engineering",
          "bn": "এআই প্রম্পট ইঞ্জিনিয়ারিং"
        },
        "desc": {
          "en": "Generate high-converting ad copy, landing pages, and email sequences.",
          "bn": "চ্যাটজিপিটি ও ক্লড দিয়ে হাই-কনভার্টিং কপিরাইটিং।"
        },
        "icon": "Cpu"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Autonomous Marketing Automation",
          "bn": "অটোনোমাস মার্কেটিং অটোমেশন"
        },
        "desc": {
          "en": "Build zero-code automated workflows with Make.com, Zapier & AI Chatbots.",
          "bn": "মেক.কম ও চ্যাটবট দিয়ে স্বয়ংক্রিয় লিড ফানেল।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Meta Advantage+ & AI Ad Scaling",
          "bn": "মেটা এআই ও অ্যাড স্কেলিং"
        },
        "desc": {
          "en": "Leverage machine learning algorithms to lower Cost-Per-Acquisition (CPA).",
          "bn": "মেশিন লার্নিং অ্যালগরিদম দিয়ে বিজ্ঞাপনী খরচ কমান।"
        },
        "icon": "TrendingUp"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master prompt engineering to create sales copy, email sequences, and ad headlines with AI.",
        "bn": "এআই প্রম্পট ইঞ্জিনিয়ারিং দিয়ে সেলস কপি ও অ্যাড হেডলাইন তৈরি।"
      },
      {
        "en": "Create professional AI-generated ad creatives and video scripts using Midjourney and Runway.",
        "bn": "মিডজার্নি ও রানওয়ে দিয়ে আকর্ষণীয় এআই ভিডিও ও ব্যানার তৈরি।"
      },
      {
        "en": "Master Meta Advantage+ AI ad campaigns and Google Performance Max machine learning.",
        "bn": "মেটা অ্যাডভান্টেজ+ ও গুগল পারফরম্যান্স ম্যাক্স মাস্টার করা।"
      },
      {
        "en": "Build automated marketing workflows using Make.com, Zapier, and ManyChat.",
        "bn": "মেক.কম ও মেনিচ্যাট দিয়ে সম্পূর্ণ অটোমেটেড সেলস ফানেল তৈরি।"
      },
      {
        "en": "Analyze customer churn, lifetime value, and ROAS with AI analytics tools.",
        "bn": "এআই অ্যানালিটিক্স দিয়ে আরওএএস ও আরওআই বৃদ্ধি করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: AI Prompt Engineering & Content Strategy for Marketers",
          "bn": "মডিউল ১: মার্কেটারদের জন্য এআই প্রম্পট ইঞ্জিনিয়ারিং"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Advanced ChatGPT & Claude Prompts for Copywriting & Psychology",
            "bn": "চ্যাটজিপিটি ও ক্লড দিয়ে সাইকোলজিক্যাল সেলস কপিরাইটিং"
          },
          {
            "en": "AI-Powered Buyer Persona Generation & Competitor Reverse Engineering",
            "bn": "এআই বায়ার পার্সোনা ও প্রতিযোগী বিশ্লেষণ"
          },
          {
            "en": "Creating High-Converting Landing Page Frameworks with AI",
            "bn": "এআই দিয়ে হাই-কনভার্টিং ল্যান্ডিং পেজ তৈরি"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: AI Visual & Video Creative Production",
          "bn": "মডিউল ২: এআই ভিজ্যুয়াল ও ভিডিও ক্রিয়েটিভ প্রোডাকশন"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Midjourney & Adobe Firefly for Commercial E-Commerce Ad Creatives",
            "bn": "মিডজার্নি ও ফায়ারফ্লাই দিয়ে কমার্শিয়াল অ্যাড ব্যানার"
          },
          {
            "en": "AI Video Generation & Voice Synthesis (HeyGen, ElevenLabs, Runway)",
            "bn": "হেজেন ও ইলেভেনল্যাবস দিয়ে এআই ভিডিও ও ভয়েসওভার"
          },
          {
            "en": "Batch Creation of 100+ Social Media Posts with Canva AI & Bulk Create",
            "bn": "ক্যানভা এআই দিয়ে বাল্ক পোস্ট তৈরি"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Next-Gen Meta Advantage+ & Google AI Ad Systems",
          "bn": "মডিউল ৩: নেক্সট-জেন মেটা এআই ও গুগল এআই অ্যাড সিস্টেমস"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Meta Advantage+ Shopping Campaigns (ASC) & AI Budget Allocation",
            "bn": "মেটা অ্যাডভান্টেজ+ শপিং ক্যাম্পেইন ও বাজেট অপ্টিমাইজেশন"
          },
          {
            "en": "Google Performance Max (PMax) AI Bidding & Asset Group Architecture",
            "bn": "গুগল পারফরম্যান্স ম্যাক্স ও এআই বিডিং স্ট্র্যাটেজি"
          },
          {
            "en": "Dynamic Creative Optimization (DCO) & Predictive Audience Targeting",
            "bn": "ডাইনামিক ক্রিয়েটিভ অপ্টিমাইজেশন ও প্রেডিক্টিভ অডিয়েন্স"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: Marketing Automation with Make.com, Zapier & AI Chatbots",
          "bn": "মডিউল ৪: মেক.কম ও এআই চ্যাটবট দিয়ে মার্কেটিং অটোমেশন"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Building Multi-Step Workflows in Make.com connecting Ads to CRM",
            "bn": "মেক.কম দিয়ে অ্যাডস থেকে সিআরএম অটোমেশন"
          },
          {
            "en": "AI WhatsApp & Messenger Chatbots using OpenAI API & ManyChat",
            "bn": "ওপেনএআই এপিআই দিয়ে হোয়াটসঅ্যাপ ও মেসেঞ্জার বট"
          },
          {
            "en": "Automated Lead Scoring, Nurturing & Dynamic Email Customization",
            "bn": "অটোমেটেড লিড স্কোরিং ও নার্চারিং সিস্টেম"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: AI Data Analytics, ROAS Scaling & Client Pitching",
          "bn": "মডিউল ৫: এআই ডাটা অ্যানালিটিক্স ও আরওএএস স্কেলিং"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "AI Analytics Dashboards & Attribution Modeling",
            "bn": "এআই অ্যানালিটিক্স ড্যাশবোর্ড ও অ্যাট্রিবিউশন মডেল"
          },
          {
            "en": "Scaling Ad Accounts from $50/day to $1,000/day safely",
            "bn": "অ্যাড অ্যাকাউন্ট স্কেলিং স্ট্র্যাটেজি"
          },
          {
            "en": "Packaging AI Marketing Services for High-Ticket International Retainers",
            "bn": "হাই-টিকিট ক্লায়েন্ট রিটেইনার প্যাকেজ তৈরি"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "24 Live Hands-on AI Marketing Masterclasses",
        "bn": "২৪ টি লাইভ এআই মার্কেটিং মাস্টারক্লাস"
      },
      {
        "en": "500+ Curated Prompt Library & Automation Blueprints",
        "bn": "৫০০+ প্রিমিয়াম প্রম্পট ও অটোমেশন ব্লুপ্রিন্ট"
      },
      {
        "en": "Live AI Campaign Audits & Real Budget Scaling",
        "bn": "লাইভ এআই ক্যাম্পেইন অডিট"
      },
      {
        "en": "Certificate of Mastery in AI Digital Marketing",
        "bn": "এআই ডিজিটাল মার্কেটিং সার্টিফাইড সনদপত্র"
      }
    ],
    "reviews": [
      {
        "id": "r4",
        "name": "Arif Chowdhury",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "E-Commerce Brand Owner",
          "bn": "ই-কমার্স উদ্যোক্তা"
        },
        "rating": 5,
        "comment": {
          "en": "Meta Advantage+ combined with AI ad creatives dropped our customer acquisition cost by 40%. The best modern marketing course!",
          "bn": "এআই অ্যাড ক্রিয়েটিভ ব্যবহারের পর আমাদের বিজ্ঞাপনী খরচ ৪০% কমে গেছে।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "5",
    "slug": "cpa-marketing",
    "title": {
      "en": "CPA Marketing",
      "bn": "সিপিএ মার্কেটিং"
    },
    "subtitle": {
      "en": "Master Cost-Per-Action networks, high-converting landing pages, paid traffic funnels & affiliate scaling",
      "bn": "সিপিএ নেটওয়ার্ক অনুমোদন, হাই-কনভার্টিং ল্যান্ডিং পেজ ও পেইড ট্রাফিক ফানেল তৈরি শিখুন"
    },
    "category": "marketing",
    "categoryLabel": {
      "en": "CPA Marketing",
      "bn": "সিপিএ মার্কেটিং"
    },
    "badge": {
      "en": "HIGH INCOME",
      "bn": "হাই ইনকাম"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.8,
    "ratingsCount": 98,
    "enrolledCount": "80+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "8,000৳",
    "rawFee": 8000,
    "originalFee": "14,000৳",
    "duration": {
      "en": "2.5 Months",
      "bn": "২.৫ মাস"
    },
    "classesCount": {
      "en": "20 Classes",
      "bn": "২০ টি ক্লাস"
    },
    "image": "/images/cpa-nexus-banner.jpg",
    "videoUrl": "https://www.facebook.com/reel/2105617167053909/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22CPA%20Marketing%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Tariqul Islam",
      "designation": {
        "en": "CPA Affiliate Specialist & Funnel Architect",
        "bn": "সিপিএ অ্যাফিলিয়েট স্পেশালিস্ট ও ফানেল আর্কিটেক্ট"
      },
      "image": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "8+ years in performance affiliate marketing, managing 6-figure CPA campaigns across USA & European networks.",
        "bn": "৮+ বছরের আন্তর্জাতিক সিপিএ নেটওয়ার্ক ও ট্রাফিক আরবিট্রেজ অভিজ্ঞতা।"
      },
      "experience": "8+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Learn the secrets of high-yield Cost-Per-Action (CPA) marketing. Discover how to get approved on top global networks (MaxBounty, CPALead, MyLead, OfferVault), build irresistible landing pages, master push and native traffic sources, and scale campaigns profitably.",
      "bn": "সিপিএ (Cost-Per-Action) মার্কেটিংয়ের মাধ্যমে আন্তর্জাতিক নেটওয়ার্ক থেকে নিশ্চিত আয়ের বাস্তবমুখী কোর্স। ম্যাক্সবাউন্টি, সিপিএলিড অনুমোদন থেকে শুরু করে ল্যান্ডিং পেজ ডিজাইন এবং পেইড ট্রাফিকের খুঁটিনাটি শিখবেন।"
    },
    "fullDescription": {
      "en": "CPA Marketing is one of the most lucrative branches of performance marketing. Unlike standard affiliate marketing where you only earn on sales, in CPA you get paid for actions like form fills, app installs, pin submits, and email signups. This course equips you with proven funnel blueprints and traffic strategies.",
      "bn": "এই কোর্সে লিড জেনারেশন, মোবাইল অ্যাপ ইন্সটল, গিফট কার্ড ও ডেটিং ফানেল তৈরির পাশাপাশি বিং অ্যাডস, পুশ নোটিফিকেশন ও নেটিভ অ্যাডসের মাধ্যমে ট্রাফিক ড্রাইভ করা শেখানো হবে।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Top Network Approval Guarantee",
          "bn": "নেটওয়ার্ক অ্যাপ্রুভাল গাইডলাইন"
        },
        "desc": {
          "en": "Proven step-by-step techniques to get approved on premium CPA networks.",
          "bn": "টপ সিপিএ নেটওয়ার্কে দ্রুত অ্যাপ্রুভাল পাওয়ার ট্রিকস।"
        },
        "icon": "ShieldCheck"
      },
      {
        "id": "cv2",
        "title": {
          "en": "High-Converting Pre-Lander Funnels",
          "bn": "হাই-কনভার্টিং ল্যান্ডিং পেজ"
        },
        "desc": {
          "en": "Design responsive, high-CTR pre-landers that skyrocket EPC and conversion.",
          "bn": "ক্লিক-থ্রু রেট বাড়ানোর জন্য প্রফেশনাল ল্যান্ডিং পেজ।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Traffic Arbitrage Mastery",
          "bn": "ট্রাফিক আরবিট্রেজ মাস্টারি"
        },
        "desc": {
          "en": "Master Native Ads, Push Ads, and Microsoft Bing Ads for positive ROI.",
          "bn": "বিং অ্যাডস ও নেটিভ অ্যাডস দিয়ে প্রফিটেবল ক্যাম্পেইন।"
        },
        "icon": "TrendingUp"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Gain approval on Tier-1 CPA networks including MaxBounty, CPAGrip, CPALead, and MyLead.",
        "bn": "ম্যাক্সবাউন্টি, সিপিএগ্রিপ ও মাইলিড নেটওয়ার্কে অনুমোদন লাভ।"
      },
      {
        "en": "Select winning, high-EPC CPA offers with low refund rates and high payouts.",
        "bn": "হাই-ইপিসি ও প্রফিটেবল অফার নির্বাচন করা।"
      },
      {
        "en": "Build custom, high-converting landing pages using Elementor and HTML templates.",
        "bn": "এলিমেন্টর ও এইচটিএমএল দিয়ে আকর্ষণীয় ল্যান্ডিং পেজ তৈরি।"
      },
      {
        "en": "Run profitable paid traffic campaigns on Bing Ads, Push Notifications, and Native Networks.",
        "bn": "বিং অ্যাডস ও পুশ নোটিফিকেশন অ্যাডস দিয়ে পেইড ক্যাম্পেইন রান করা।"
      },
      {
        "en": "Track and optimize campaigns using BeMob/Voluum to maximize return on ad spend.",
        "bn": "বিমব ও ভলিউম ট্র্যাকার দিয়ে আরওআই অপটিমাইজেশন।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: CPA Fundamentals & Elite Network Approvals",
          "bn": "মডিউল ১: সিপিএ ফান্ডামেন্টালস ও নেটওয়ার্ক অনুমোদন"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "What is CPA vs Affiliate Marketing: Payout Models & Terminology",
            "bn": "সিপিএ বনাম অ্যাফিলিয়েট মার্কেটিং ও পে-আউট মডেল"
          },
          {
            "en": "How to pass Network Interview: MaxBounty, CPALead, MyLead, OfferVault",
            "bn": "ম্যাক্সবাউন্টি ও সিপিএলিড নেটওয়ার্ক ইন্টারভিউ ক্র্যাক করার ট্রিকস"
          },
          {
            "en": "Understanding EPC, CR, Network Caps & Affiliate Manager Relationships",
            "bn": "ইপিসি, সিআর এবং অ্যাফিলিয়েট ম্যানেজার ম্যানেজমেন্ট"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: High-Converting Offer Selection & Funnel Architecture",
          "bn": "মডিউল ২: প্রফিটেবল অফার সিলেকশন ও ফানেল ডিজাইন"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Vertical Selection: Sweepstakes, E-Commerce, Software & Mobile Installs",
            "bn": "হট ক্যাটাগরি: সুইপস্টেকস, সফটওয়্যার ও মোবাইল অ্যাপস"
          },
          {
            "en": "Spying on Winning Competitor Ads with Anstrex / AdPlexity",
            "bn": "স্পাই টুলস দিয়ে প্রতিযোগীদের উইনিং অ্যাডস অ্যানালাইসিস"
          },
          {
            "en": "Designing Pre-Landers & Interactive Quizzes for 30%+ CTR",
            "bn": "হাই-সিটিআর কুইজ ও প্রি-ল্যান্ডার পেজ ডিজাইন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Free Traffic Strategies (Quora, Pinterest & YouTube)",
          "bn": "মডিউল ৩: ফ্রি ট্রাফিক মেথডস (কোরা, পিন্টারেস্ট ও ইউটিউব)"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Quora Authority Marketing & Targeted CPA Traffic Funneling",
            "bn": "কোরা মার্কেটিং দিয়ে টার্গেটেড ট্রাফিক ড্রাইভ"
          },
          {
            "en": "Pinterest Idea Pins & Viral Boards for USA Female Demographics",
            "bn": "পিন্টারেস্ট ভাইরাল পিন ও বোর্ড তৈরি"
          },
          {
            "en": "YouTube Shorts & Video SEO for Automated CPA Lead Generation",
            "bn": "ইউটিউব শর্টস ও ভিডিও এসইও মেথড"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: Paid Traffic Mastery (Bing Ads, Push & Native Ads)",
          "bn": "মডিউল ৪: পেইড ট্রাফিক মাস্টারি (বিং অ্যাডস ও পুশ অ্যাডস)"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Microsoft Bing Ads Setup, Exact Match Keywords & Direct Linking vs Landing Page",
            "bn": "মাইক্রোসফট বিং অ্যাডস ও কিওয়ার্ড টার্গেটিং"
          },
          {
            "en": "Push Notification Ads (PropellerAds, RichAds): Micro-Bidding & Blacklisting",
            "bn": "প্রপেলারঅ্যাডস দিয়ে পুশ নোটিফিকেশন ক্যাম্পেইন"
          },
          {
            "en": "Native Advertising Fundamentals (Taboola / Outbrain / MGID)",
            "bn": "টাবুলা ও এমজিআইডি দিয়ে নেটিভ বিজ্ঞাপন"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: Campaign Tracking (BeMob), A/B Testing & Scaling",
          "bn": "মডিউল ৫: ট্র্যাকিং (BeMob), এ/বি টেস্টিং ও স্কেলিং"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Setting up Postback URLs & Server-to-Server Tracking in BeMob",
            "bn": "পোস্টব্যাক ইউআরএল ও বিমব ট্র্যাকার সেটআপ"
          },
          {
            "en": "A/B Split Testing Headlines, Angles & Creative Copy",
            "bn": "স্প্লিট টেস্টিং ও ডাটা অ্যানালাইসিস"
          },
          {
            "en": "Budget Scaling, Payout Negotiations & Cash Flow Management",
            "bn": "বাজেট স্কেলিং ও ক্যাশ ফ্লো ম্যানেজমেন্ট"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "20 Live Step-by-Step CPA Masterclasses",
        "bn": "২০ টি লাইভ স্টেপ-বাই-স্টেপ ক্লাস"
      },
      {
        "en": "Ready-to-Use High-Converting Landing Page Templates",
        "bn": "রেডিমেড হাই-কনভার্টিং ল্যান্ডিং পেজ টেমপ্লেট"
      },
      {
        "en": "CPA Network Approval Support & Manager Referrals",
        "bn": "নেটওয়ার্ক অ্যাপ্রুভাল সাপোর্ট ও রেফারেল"
      },
      {
        "en": "Certificate of Performance CPA Marketing",
        "bn": "পারফরম্যান্স সিপিএ মার্কেটিং সার্টিফিকেট"
      }
    ],
    "reviews": [
      {
        "id": "r5",
        "name": "Mehedi Hasan",
        "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "CPA Affiliate Marketer",
          "bn": "সিপিএ অ্যাফিলিয়েট"
        },
        "rating": 5,
        "comment": {
          "en": "Finally got approved on MaxBounty using the instructor's exact interview techniques! My Bing Ads campaign became profitable in the 2nd week.",
          "bn": "ম্যাক্সবাউন্টি অ্যাপ্রুভাল পেয়েছি এবং বিং অ্যাডস দিয়ে অলরেডি আর্নিং শুরু করেছি।"
        },
        "date": "1 Month Ago"
      }
    ]
  },
  {
    "id": "6",
    "slug": "advanced-graphic-design-with-freelancing",
    "title": {
      "en": "Advanced Graphic Design with Freelancing",
      "bn": "এডভান্সড গ্রাফিক ডিজাইন উইথ ফ্রিল্যান্সিং"
    },
    "subtitle": {
      "en": "Master Photoshop, Illustrator, AI Image Manipulation, Packaging, Behance Portfolio & Freelancing Marketplaces",
      "bn": "ফটোশপ, ইলাস্ট্রেটর, এআই ইমেজ ম্যানিপুলেশন, লোগো ও প্যাকেজিং ডিজাইন এবং বেহ্যান্স পোর্টফোলিও সহ ফ্রিল্যান্সিং শিখুন"
    },
    "category": "creative",
    "categoryLabel": {
      "en": "Design & UI/UX",
      "bn": "গ্রাফিক্স ও ইউআই/ইউএক্স"
    },
    "badge": {
      "en": "POPULAR",
      "bn": "জনপ্রিয়"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 165,
    "enrolledCount": "140+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "15,000৳",
    "rawFee": 15000,
    "originalFee": "25,000৳",
    "duration": {
      "en": "126 hrs. (4 Months)",
      "bn": "১২৬ ঘণ্টা (৪ মাস)"
    },
    "classesCount": {
      "en": "42 Classes",
      "bn": "৪২ টি ক্লাস"
    },
    "image": "/images/course thumbnail/graphic design.jpg",
    "videoUrl": "https://www.facebook.com/reel/889772017529060/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Graphics%20Design%20with%20AI%20Specialist%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Rifat Al Mamun",
      "designation": {
        "en": "Lead Visual Designer & Creative AI Artist",
        "bn": "লিড ভিজ্যুয়াল ডিজাইনার ও এআই আর্টিস্ট"
      },
      "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "9+ years creating brand identities for Silicon Valley startups and pioneering AI design workflows.",
        "bn": "৯+ বছরের ব্র্যান্ড আইডেন্টিটি ডিজাইন ও এআই জেনারেটিভ আর্ট অভিজ্ঞতা।"
      },
      "experience": "9+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Master professional graphic design from Adobe Photoshop and Illustrator to AI image manipulation, advanced blending, hair masking, logo design, packaging, and Behance portfolio building with complete freelancing guidance.",
      "bn": "অ্যাডোবি ফটোশপ, ইলাস্ট্রেটর, এআই ইমেজ ম্যানিপুলেশন, হেয়ার মাস্কিং, লোগো ও প্যাকেজিং ডিজাইন এবং বেহ্যান্স পোর্টফোলিও সহ ফ্রিল্যান্সিং ক্যারিয়ার গড়ার পূর্ণাঙ্গ কোর্স।"
    },
    "fullDescription": {
      "en": "This program combines traditional design theory (typography, color theory, visual hierarchy) with modern AI productivity. You will learn to generate custom concept art, upscale images, create vectorized logos from AI prompts, design packaging, and build a world-class Behance portfolio.",
      "bn": "মার্কেটপ্লেসে ক্লায়েন্টদের দ্রুত ও প্রিমিয়াম কোয়ালিটির ডিজাইন ডেলিভারি করার জন্য এই কোর্সটি বিশেষভাবে সাজানো হয়েছে।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Adobe Suite Mastery",
          "bn": "অ্যাডবি সুইট মাস্টারি"
        },
        "desc": {
          "en": "Expert training in Photoshop, Illustrator & InDesign tools.",
          "bn": "ফটোশপ ও ইলাস্ট্রেটরের গভীর ব্যবহারিক জ্ঞান।"
        },
        "icon": "Palette"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Generative AI Art Integration",
          "bn": "জেনারেটিভ এআই আর্ট"
        },
        "desc": {
          "en": "Harness Midjourney & Firefly for rapid asset generation.",
          "bn": "মিডজার্নি ও ফায়ারফ্লাই দিয়ে আর্ট তৈরি।"
        },
        "icon": "Cpu"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Commercial Branding & Print",
          "bn": "কমার্শিয়াল ব্র্যান্ডিং ও প্রিন্ট"
        },
        "desc": {
          "en": "Create brand identity kits, vector logos, and packaging designs.",
          "bn": "লোগো, ব্র্যান্ডিং কিট ও প্যাকেজিং ডিজাইন।"
        },
        "icon": "Award"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master Adobe Photoshop tools, layers, masking, photo manipulation, and color correction.",
        "bn": "ফটোশপ লেয়ার, মাস্কিং, ফটো ম্যানিপুলেশন ও কালার গ্রেডিং।"
      },
      {
        "en": "Create scalable vector graphics, custom typography, and logos in Adobe Illustrator.",
        "bn": "ইলাস্ট্রেটরে ভেক্টর আর্ট, টাইপোগ্রাফি ও লোগো ডিজাইন।"
      },
      {
        "en": "Generate commercial-grade illustrations and concept art using Midjourney and Adobe Firefly.",
        "bn": "মিডজার্নি ও ফায়ারফ্লাই দিয়ে কমার্শিয়াল আর্ট তৈরি।"
      },
      {
        "en": "Design comprehensive corporate brand identity guidelines, business cards, and packaging.",
        "bn": "কর্পোরেট ব্র্যান্ড আইডেন্টিটি গাইডলাইন ও প্যাকেজিং।"
      },
      {
        "en": "Build a standout portfolio on Behance and Dribbble to attract high-paying clients.",
        "bn": "বিহ্যান্স ও ড্রিবলে প্রফেশনাল পোর্টফোলিও তৈরি।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Adobe Photoshop, Image Manipulation & AI",
          "bn": "মডিউল ১: অ্যাডোবি ফটোশপ, ইমেজ ম্যানিপুলেশন ও এআই"
        },
        "duration": {
          "en": "14 Classes • 42 Hours",
          "bn": "১৪ টি ক্লাস • ৪২ ঘণ্টা"
        },
        "lessonsCount": 10,
        "topics": [
          {
            "en": "Adobe Photoshop Workspace & Tool Fundamentals",
            "bn": "অ্যাডোবি ফটোশপ ওয়ার্কস্পেস ও টুলস পরিচিতি"
          },
          {
            "en": "Image Manipulation & Retouching Techniques",
            "bn": "ইমেজ ম্যানিপুলেশন ও রিটাচিং টেকনিক"
          },
          {
            "en": "Advance Blending Technique & Layer Compositing",
            "bn": "এডভান্সড ব্লেন্ডিং টেকনিক ও লেয়ার কম্পোজিটিং"
          },
          {
            "en": "Hair Masking & Action Work Automation",
            "bn": "হেয়ার মাস্কিং ও অ্যাকশন ওয়ার্ক অটোমেশন"
          },
          {
            "en": "Artificial Intelligence (AI) Design Integration",
            "bn": "ডিজাইনে আর্টিফিশিয়াল ইন্টেলিজেন্স (AI) এর ব্যবহার"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Adobe Illustrator, Branding & Packaging",
          "bn": "মডিউল ২: অ্যাডোবি ইলাস্ট্রেটর, ব্র্যান্ডিং ও প্যাকেজিং"
        },
        "duration": {
          "en": "16 Classes • 48 Hours",
          "bn": "১৬ টি ক্লাস • ৪৮ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "Adobe Illustrator Vector Design & Pen Tool Mastery",
            "bn": "অ্যাডোবি ইলাস্ট্রেটর ভেক্টর ডিজাইন ও পেন টুল"
          },
          {
            "en": "Advance Gradient Technique & Color Harmony",
            "bn": "এডভান্সড গ্রেডিয়েন্ট টেকনিক ও কালার থিওরি"
          },
          {
            "en": "Logo Design & Creative T-Shirt Design",
            "bn": "লোগো ডিজাইন ও টি-শার্ট ডিজাইন"
          },
          {
            "en": "Product Packaging & Label Design for Brands",
            "bn": "প্রোডাক্ট প্যাকেজিং ও লেবেল ডিজাইন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Behance Portfolio, Soft Skills & Freelancing",
          "bn": "মডিউল ৩: বেহ্যান্স পোর্টফোলিও, সফট স্কিলস ও ফ্রিল্যান্সিং"
        },
        "duration": {
          "en": "12 Classes • 36 Hours",
          "bn": "১২ টি ক্লাস • ৩৬ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "Behance Portfolio Creation & Case Studies",
            "bn": "বেহ্যান্স পোর্টফোলিও ও কেস স্টাডি উপস্থাপনা"
          },
          {
            "en": "Communicative English for International Client Pitches",
            "bn": "আন্তর্জাতিক ক্লায়েন্ট পিচিংয়ের জন্য কমিউনিকেটিভ ইংলিশ"
          },
          {
            "en": "Soft Skills & Marketplace Mastery (Upwork & Fiverr)",
            "bn": "সফট স্কিলস ও মার্কেটপ্লেস ফ্রিল্যান্সিং (আপওয়ার্ক ও ফাইভার)"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "24 Live Interactive Creative Workshops",
        "bn": "২৪ টি লাইভ প্র্যাকটিক্যাল ওয়ার্কশপ"
      },
      {
        "en": "10,000+ Premium Design Assets, Fonts & Mockups",
        "bn": "১০,০০০+ প্রিমিয়াম ফন্ট, মকআপ ও রিসোর্স"
      },
      {
        "en": "Behance Portfolio Review & Mentorship",
        "bn": "বিহ্যান্স পোর্টফোলিও রিভিউ"
      },
      {
        "en": "Industry Graphic Design Certificate",
        "bn": "ইন্ডাস্ট্রি গ্রাফিক্স ডিজাইন সার্টিফিকেট"
      }
    ],
    "reviews": [
      {
        "id": "r6",
        "name": "Sumaiya Akter",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "Brand Designer at PixFlow",
          "bn": "ব্র্যান্ড ডিজাইনার"
        },
        "rating": 5,
        "comment": {
          "en": "The integration of Midjourney with Illustrator has 5x'd my design speed! My Behance portfolio got featured within weeks of finishing this course.",
          "bn": "মিডজার্নি ও ইলাস্ট্রেটরের কম্বিনেশন আমার কাজের গতি বহুগুণ বাড়িয়ে দিয়েছে।"
        },
        "date": "3 Weeks Ago"
      }
    ]
  },
  {
    "id": "7",
    "slug": "video-editing-with-motion-graphics",
    "title": {
      "en": "Video Editing with Motion Graphics",
      "bn": "ভিডিও এডিটিং উইথ মোশন গ্রাফিক্স"
    },
    "subtitle": {
      "en": "Master Premiere Pro, After Effects, Event Editing, Audio, CGI, Green Screen & Color Grading",
      "bn": "প্রিমিয়ার প্রো, আফটার ইফেক্টস, অডিও এডিটিং, গ্রিন স্ক্রিন রিমুভ, এআই সিজিআই ও কালার গ্রেডিং শিখুন"
    },
    "category": "creative",
    "categoryLabel": {
      "en": "Design & UI/UX",
      "bn": "গ্রাফিক্স ও ইউআই/ইউএক্স"
    },
    "badge": {
      "en": "TRENDING",
      "bn": "ট্রেন্ডিং"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 128,
    "enrolledCount": "105+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "30,000৳",
    "rawFee": 30000,
    "originalFee": "45,000৳",
    "duration": {
      "en": "90 hrs. (3 Months)",
      "bn": "৯০ ঘণ্টা (৩ মাস)"
    },
    "classesCount": {
      "en": "30 Classes",
      "bn": "৩০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/video editing &motion graphics.jpg",
    "videoUrl": "https://www.facebook.com/reel/889772017529060/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Motion%20Graphics%20with%20Video%20Editing%20Specialist%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Hasibul Hasan",
      "designation": {
        "en": "Senior Motion Director & VFX Artist",
        "bn": "সিনিয়র মোশন ডিরেক্টর ও ভিএফএক্স আর্টিস্ট"
      },
      "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "8+ years producing commercial motion ads, YouTube shows, and broadcast graphics for top television networks.",
        "bn": "৮+ বছরের মোশন ডিজাইন, টিভি কমার্শিয়াল ও ইউটিউব শো প্রোডাকশন অভিজ্ঞতা।"
      },
      "experience": "8+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Master cinematic video editing and high-impact motion graphics using Adobe Premiere Pro and After Effects. Learn event editing, film & story composition, audio mastering, green screen removal, CGI, animation, and color grading.",
      "bn": "অ্যাডোবি প্রিমিয়ার প্রো এবং আফটার ইফেক্টস দিয়ে সিনেমাটিক ভিডিও এডিটিং, মোশন গ্রাফিক্স, সাউন্ড এডিটিং, গ্রিন স্ক্রিন রিমুভাল, অ্যানিমেশন ও কালার গ্রেডিং এর পূর্ণাঙ্গ কোর্স।"
    },
    "fullDescription": {
      "en": "Video content dominates modern marketing, YouTube, TikTok, and social media. In this course, you will work on real footage to master pacing, sound effects (SFX), keyframe easing, camera tracking, green screen keying, and high-energy short-form video editing.",
      "bn": "এই কোর্সে রিয়েল ফুটেজ নিয়ে প্র্যাকটিস করার মাধ্যমে ইউটিউব ভিডিও, ফেসবুক রিলস এবং টিভি কমার্শিয়ালের জন্য আধুনিক মোশন গ্রাফিক্স তৈরি শেখানো হয়।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Cinematic Premiere Pro Editing",
          "bn": "সিনেমাটিক প্রিমিয়ার প্রো এডিটিং"
        },
        "desc": {
          "en": "Master pacing, multi-cam, speed ramping, and Lumetri color grading.",
          "bn": "মাল্টি-ক্যাম এডিটিং ও সিনেমাটিক কালার গ্রেডিং।"
        },
        "icon": "Video"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Advanced After Effects 2D Animation",
          "bn": "আফটার ইফেক্টস ২ডি অ্যানিমেশন"
        },
        "desc": {
          "en": "Graph editor easing, shape animations, and kinetic typography.",
          "bn": "গ্রাফ এডিটর স্পিড কার্ভ ও শেপ অ্যানিমেশন।"
        },
        "icon": "Play"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Commercial Short-Form Mastery",
          "bn": "শর্ট-ফর্ম ভিডিও মাস্টারি"
        },
        "desc": {
          "en": "Create viral YouTube Shorts, Instagram Reels & TikTok commercial ads.",
          "bn": "ভাইরাল রিলস ও ইউটিউব শর্টস এডিটিং।"
        },
        "icon": "Zap"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Edit commercial videos with professional pacing, cuts, and transitions in Premiere Pro.",
        "bn": "প্রিমিয়ার প্রো দিয়ে প্রফেশনাল ভিডিও এডিটিং ও ট্রানজিশন।"
      },
      {
        "en": "Apply Hollywood-grade color correction and color grading using Lumetri Color & LUTs.",
        "bn": "লুমেট্রি কালার দিয়ে হলিউড-গ্রেড কালার গ্রেডিং।"
      },
      {
        "en": "Animate logos, kinetic typography, and infographic motion designs in After Effects.",
        "bn": "আফটার ইফেক্টসে লোগো অ্যানিমেশন ও টাইপোগ্রাফি।"
      },
      {
        "en": "Master green screen keying, rotoscoping, camera tracking, and VFX compositing.",
        "bn": "গ্রিন স্ক্রিন রিমুভ, রোUpSync ও ক্যামেরা ট্র্যাকিং।"
      },
      {
        "en": "Craft soundscapes with sound effects (SFX), audio leveling, and background music balancing.",
        "bn": "সাউন্ড এফেক্টস (SFX) ও অডিও মিক্সিং মাস্টারি।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Premiere Pro & Video Storytelling",
          "bn": "মডিউল ১: প্রিমিয়ার প্রো ও ভিডিও স্টোরিটেলিং"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "Premiere Pro Workspace, Source Panel & all tools",
            "bn": "প্রিমিয়ার প্রো ওয়ার্কস্পেস, সোর্স প্যানেল ও সকল টুলস"
          },
          {
            "en": "Event Editing & Dynamic Timeline Management",
            "bn": "ইভেন্ট এডিটিং ও টাইমলাইন ম্যানেজমেন্ট"
          },
          {
            "en": "Film & Story Composition Techniques",
            "bn": "ফিল্ম ও স্টোরি কম্পোজিশন টেকনিক"
          },
          {
            "en": "Audio Editing & Sound Effects Design",
            "bn": "অডিও এডিটিং ও সাউন্ড এফেক্টস ডিজাইন"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: After Effects, Motion Graphics & Visual Effects",
          "bn": "মডিউল ২: আফটার ইফেক্টস, মোশন গ্রাফিক্স ও ভিজ্যুয়াল ইফেক্টস"
        },
        "duration": {
          "en": "12 Classes • 36 Hours",
          "bn": "১২ টি ক্লাস • ৩৬ ঘণ্টা"
        },
        "lessonsCount": 10,
        "topics": [
          {
            "en": "Adobe After Effect Fundamentals & Keyframing",
            "bn": "অ্যাডোবি আফটার ইফেক্টস ও কি-ফ্রেমিং"
          },
          {
            "en": "Basic to Advanced Animation & Kinetic Typography",
            "bn": "বেসিক টু এডভান্সড অ্যানিমেশন ও টাইপোগ্রাফি"
          },
          {
            "en": "Green Screen Remove & Basic CGI Elements",
            "bn": "গ্রিন স্ক্রিন রিমুভ ও বেসিক সিজিআই এলিমেন্টস"
          },
          {
            "en": "Basic Color Grading & Correction (Lumetri Color)",
            "bn": "বেসিক কালার গ্রেডিং ও কালার কারেকশন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Portfolio, English & Marketplace",
          "bn": "মডিউল ৩: পোর্টফোলিও, ইংলিশ ও মার্কেটপ্লেস"
        },
        "duration": {
          "en": "8 Classes • 24 Hours",
          "bn": "৮ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Communicative English for Video Creators",
            "bn": "ভিডিও ক্রিয়েটরদের জন্য কমিউনিকেটিভ ইংলিশ"
          },
          {
            "en": "Soft Skills & Marketplace Freelancing (YouTube & Upwork)",
            "bn": "সফট স্কিলস ও মার্কেটপ্লেস ফ্রিল্যান্সিং"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "24 Live Hands-on Video Editing & Motion Workshops",
        "bn": "২৪ টি লাইভ প্র্যাকটিক্যাল ওয়ার্কশপ"
      },
      {
        "en": "50GB+ Cinematic LUTs, Sound FX & Motion Templates",
        "bn": "৫০ জিবি+ প্রিমিয়াম সাউন্ড এফেক্টস ও মোশন টেমপ্লেট"
      },
      {
        "en": "Personalized Video Showreel Audit",
        "bn": "ভিডিও শোরিল রিভিউ ও ফিডব্যাক"
      },
      {
        "en": "Certificate of Professional Video & Motion Design",
        "bn": "প্রফেশনাল ভিডিও ও মোশন সার্টিফিকেট"
      }
    ],
    "reviews": [
      {
        "id": "r7",
        "name": "Tanvir Rahman",
        "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "Video Editor for YouTube Creators",
          "bn": "ভিডিও এডিটর"
        },
        "rating": 5,
        "comment": {
          "en": "The After Effects graph editor lessons transformed my animations from amateur to broadcast-level. Outstanding mentor support!",
          "bn": "আফটার ইফেক্টসে গ্রাফ এডিটর ব্যবহারের পর আমার মোশন অ্যানিমেশনের কোয়ালিটি অনেক উন্নত হয়েছে।"
        },
        "date": "1 Month Ago"
      }
    ]
  },
  {
    "id": "8",
    "slug": "app-development-with-flutter",
    "title": {
      "en": "App Development with Flutter",
      "bn": "অ্যাপ ডেভেলপমেন্ট উইথ ফ্লাটার"
    },
    "subtitle": {
      "en": "Build cross-platform iOS & Android mobile apps with Flutter, Dart, state management, REST APIs & Firebase",
      "bn": "ফ্লাটার ও ডার্ট দিয়ে আইওএস ও অ্যান্ড্রয়েড ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ তৈরি শিখুন"
    },
    "category": "software",
    "categoryLabel": {
      "en": "App & Software",
      "bn": "অ্যাপ ও সফটওয়্যার"
    },
    "badge": {
      "en": "POPULAR",
      "bn": "জনপ্রিয়"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 145,
    "enrolledCount": "130+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "20,000৳",
    "rawFee": 20000,
    "originalFee": "30,000৳",
    "duration": {
      "en": "90 hrs. (3 Months)",
      "bn": "৯০ ঘণ্টা (৩ মাস)"
    },
    "classesCount": {
      "en": "30 Classes",
      "bn": "৩০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/flutter app.jpg",
    "videoUrl": "https://www.facebook.com/reel/1080717277950305/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Flutter%20App%20Development%20Specialist%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Engr. Nayeem Islam",
      "designation": {
        "en": "Lead Mobile Architect & Flutter Expert",
        "bn": "লিড মোবাইল আর্কিটেক্ট ও ফ্লাটার বিশেষজ্ঞ"
      },
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "7+ years developing top-charting mobile applications with 1M+ downloads across App Store & Play Store.",
        "bn": "৭+ বছরের ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ ও ফ্লাটার ইকোসিস্টেম অভিজ্ঞতা।"
      },
      "experience": "7+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Develop cross-platform iOS and Android apps with Flutter & Dart. Learn UI widget architecture, routing, state management solutions, form validation, RESTful APIs, local data storage, and authentication.",
      "bn": "ফ্লাটার ও ডার্ট দিয়ে আইওএস এবং অ্যান্ড্রয়েডের জন্য ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ ডেভেলপমেন্ট, স্টেট ম্যানেজমেন্ট, এপিআই ইন্টিগ্রেশন ও ডাটাবেস স্টোরেজের পূর্ণাঙ্গ কোর্স।"
    },
    "fullDescription": {
      "en": "Flutter is Google's UI toolkit for building natively compiled applications. In this course, you will build 4 production-grade mobile applications, implementing clean architecture, offline-first syncing with SQLite/Hive, push notifications, payment gateways, and Google Maps integration.",
      "bn": "থিওরির পাশাপাশি ৪টি বাস্তবমুখী ফুল-ফিচারড মোবাইল অ্যাপ তৈরি করে আপনাকে দেশি ও বিদেশি প্রতিষ্ঠানে মোবাইল অ্যাপ ডেভেলপার হিসেবে ক্যারিয়ার গড়ার জন্য প্রস্তুত করা হবে।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Single Codebase for iOS & Android",
          "bn": "একটি কোডবেস উভয় প্ল্যাটফর্ম"
        },
        "desc": {
          "en": "Write once, run seamlessly on both mobile platforms at native speed.",
          "bn": "একটি কোড দিয়ে আইওএস ও অ্যান্ড্রয়েড উভয় অ্যাপ তৈরি।"
        },
        "icon": "Smartphone"
      },
      {
        "id": "cv2",
        "title": {
          "en": "State Management & Clean Architecture",
          "bn": "স্টেট ম্যানেজমেন্ট ও ক্লিন আর্কিটেকচার"
        },
        "desc": {
          "en": "Enterprise Riverpod & BLoC state management patterns.",
          "bn": "রিভারপড ও ব্লক প্যাটার্নে স্কেলেবল আর্কিটেকচার।"
        },
        "icon": "Layers"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Full Backend & Cloud Sync",
          "bn": "ক্লাউড সিঙ্ক ও ফায়ারবেস"
        },
        "desc": {
          "en": "Firebase Auth, Firestore, Cloud Messaging & Offline SQLite storage.",
          "bn": "ফায়ারবেস অথ, ক্লাউড ফায়ারস্টোর ও অফলাইন ডাটাবেস।"
        },
        "icon": "Cloud"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master Dart programming language, OOP principles, Null Safety, and Asynchronous Streams.",
        "bn": "ডার্ট ওওপি, নাল সেফটি ও অ্যাসিঙ্ক স্ট্রিমস আয়ত্ত করা।"
      },
      {
        "en": "Build pixel-perfect, responsive Flutter UIs with custom animations and widgets.",
        "bn": "কাস্টম অ্যানিমেশন ও উইজেটস দিয়ে আকর্ষণীয় মোবাইল ইউআই তৈরি।"
      },
      {
        "en": "Architect complex apps using Riverpod and BLoC state management patterns.",
        "bn": "রিভারপড ও ব্লক প্যাটার্ন দিয়ে স্কেলেবল অ্যাপ আর্কিটেকচার।"
      },
      {
        "en": "Integrate Firebase Authentication, Firestore Database, Push Notifications, and Cloud Storage.",
        "bn": "ফায়ারবেস অথ, ফায়ারস্টোর ডাটাবেস ও পুশ নোটিফিকেশন ইন্টিগ্রেশন।"
      },
      {
        "en": "Publish and release apps on Google Play Store and Apple App Store.",
        "bn": "গুগল প্লে স্টোর ও অ্যাপ স্টোরে অ্যাপ পাবলিশ করার নিয়মাবলী।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Flutter & Dart UI Architecture",
          "bn": "মডিউল ১: ফ্লাটার ও ডার্ট ইউআই আর্কিটেকচার"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "Introduction to Flutter and Dart",
            "bn": "ফ্লাটার ও ডার্ট পরিচিতি"
          },
          {
            "en": "Widgets and UI Design Systems",
            "bn": "উইজেটস ও রেসপনসিভ ইউআই ডিজাইন"
          },
          {
            "en": "Navigation and Routing Architecture",
            "bn": "নেভিগেশন ও রাউটিং আর্কিটেকচার"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: State Management, Forms & Storage",
          "bn": "মডিউল ২: স্টেট ম্যানেজমেন্ট, ফর্মস ও ডাটা স্টোরেজ"
        },
        "duration": {
          "en": "12 Classes • 36 Hours",
          "bn": "১২ টি ক্লাস • ৩৬ ঘণ্টা"
        },
        "lessonsCount": 10,
        "topics": [
          {
            "en": "Working with Forms and Input Validation",
            "bn": "ফর্মস ও ইউজার ইনপুট ভ্যালিডেশন"
          },
          {
            "en": "State Management & State Management Solutions",
            "bn": "স্টেট ম্যানেজমেন্ট ও সলিউশনস"
          },
          {
            "en": "Integrating APIs and Networking",
            "bn": "এপিআই ইন্টিগ্রেশন ও নেটওয়ার্কিং"
          },
          {
            "en": "Local Data Storage & Persistence",
            "bn": "লোকাল ডাটা স্টোরেজ"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Authentication, English & Marketplace",
          "bn": "মডিউল ৩: অথেনটিকেশন, ইংলিশ ও মার্কেটপ্লেস"
        },
        "duration": {
          "en": "8 Classes • 24 Hours",
          "bn": "৮ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Authentication and Authorization (Firebase & JWT)",
            "bn": "অথেনটিকেশন ও অথরাইজেশন"
          },
          {
            "en": "Communicative English for App Developers",
            "bn": "অ্যাপ ডেভেলপারদের জন্য কমিউনিকেটিভ ইংলিশ"
          },
          {
            "en": "Soft Skills & Marketplace App Publishing",
            "bn": "সফট স্কিলস ও প্লে-স্টোরে অ্যাপ পাবলিশিং"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "28 Live Interactive Coding Classes",
        "bn": "২৮ টি লাইভ কোডিং ক্লাস"
      },
      {
        "en": "4 Complete Production Mobile App Codebases",
        "bn": "৪টি কমপ্লিট মোবাইল অ্যাপ সোর্স কোড"
      },
      {
        "en": "Play Store & App Store Deployment Guidance",
        "bn": "প্লে স্টোর পাবলিশিং গাইডেন্স"
      },
      {
        "en": "Verified Flutter App Specialist Certificate",
        "bn": "সার্টিফাইড ফ্লাটার স্পেশালিস্ট সনদপত্র"
      }
    ],
    "reviews": [
      {
        "id": "r8",
        "name": "Jamil Hossain",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "Flutter Developer at AppStudio",
          "bn": "ফ্লাটার ডেভেলপার"
        },
        "rating": 5,
        "comment": {
          "en": "Riverpod state management and Clean Architecture lessons made enterprise app development so straightforward. Published my first app on Play Store!",
          "bn": "ক্লিন আর্কিটেকচার ও রিভারপড দিয়ে অ্যাপ বানানোর মেথড অত্যন্ত চমৎকার ছিল।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "9",
    "slug": "python-with-django",
    "title": {
      "en": "Python with Django",
      "bn": "পাইথন উইথ জ্যাঙ্গো"
    },
    "subtitle": {
      "en": "Master backend web development with Python, Django ORM, RESTful APIs, authentication & cloud hosting",
      "bn": "পাইথন ও জ্যাঙ্গো ফ্রেমওয়ার্ক দিয়ে ব্যাকএন্ড ওয়েব ডেভেলপমেন্ট, রেস্ট এপিআই ও ক্লাউড ডেপ্লয়মেন্ট শিখুন"
    },
    "category": "web",
    "categoryLabel": {
      "en": "Web Development",
      "bn": "ওয়েব ডেভেলপমেন্ট"
    },
    "badge": {
      "en": "POPULAR",
      "bn": "জনপ্রিয়"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 110,
    "enrolledCount": "90+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "20,000৳",
    "rawFee": 20000,
    "originalFee": "30,000৳",
    "duration": {
      "en": "90 hrs. (3 Months)",
      "bn": "৯০ ঘণ্টা (৩ মাস)"
    },
    "classesCount": {
      "en": "30 Classes",
      "bn": "৩০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/enterprise full stack next.js 15.jpg",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Master%20in%20ASP.NET%20Specialist%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Engr. Moniruzzaman",
      "designation": {
        "en": "Lead Enterprise .NET Architect",
        "bn": "লিড এন্টারপ্রাইজ ডটনেট আর্কিটেক্ট"
      },
      "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "11+ years developing high-security banking software and enterprise .NET backends for multinational corporations.",
        "bn": "১১+ বছরের এন্টারপ্রাইজ ডটনেট সফটওয়্যার ও ব্যাংকিং সিস্টেমস ডেভেলপমেন্ট অভিজ্ঞতা।"
      },
      "experience": "11+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Master backend web development with Python and Django. Learn development environment setup, project structure, models & database management, views & templates, user authentication, Django admin customization, RESTful APIs, middleware, deployment, and testing.",
      "bn": "পাইথন এবং জ্যাঙ্গো ফ্রেমওয়ার্ক দিয়ে ব্যাকএন্ড ওয়েব ডেভেলপমেন্ট, ডাটাবেস ম্যানেজমেন্ট, অথেনটিকেশন, জ্যাঙ্গো অ্যাডমিন, রেস্ট এপিআই ও ক্লাউড ডেপ্লয়মেন্টের পূর্ণাঙ্গ কোর্স।"
    },
    "fullDescription": {
      "en": "ASP.NET Core is the gold standard for high-performance enterprise web applications. This curriculum focuses on building maintainable, testable, and secure RESTful services. You'll master dependency injection, LINQ, code-first migrations, JWT/Identity authentication, and Azure DevOps CI/CD pipelines.",
      "bn": "কর্পোরেট জব মার্কেটে ডটনেট ডেভেলপারদের আকাশচুম্বী চাহিদা রয়েছে। এই কোর্সে রিয়েল এন্টারপ্রাইজ প্রজেক্টের মাধ্যমে ইন্ডাস্ট্রি স্ট্যান্ডার্ড সফটওয়্যার তৈরি শেখানো হয়।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Clean Architecture & SOLID",
          "bn": "ক্লিন আর্কিটেকচার ও সলিড"
        },
        "desc": {
          "en": "Enterprise CQRS, Repository Pattern & Dependency Injection.",
          "bn": "ক্লিন আর্কিটেকচার ও সিউকিউআরএস প্যাটার্ন।"
        },
        "icon": "Code2"
      },
      {
        "id": "cv2",
        "title": {
          "en": "High Performance EF Core & SQL",
          "bn": "ইএফ কোর ও এসকিউএল সার্ভার"
        },
        "desc": {
          "en": "Code-First migrations, optimized LINQ queries, and indexing.",
          "bn": "কোড-ফার্স্ট মাইগ্রেশন ও অপ্টিমাইজড এসকিউএল কুয়েরি।"
        },
        "icon": "Database"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Enterprise Identity & Azure Cloud",
          "bn": "আইডেন্টিটি ও এজুর ক্লাউড"
        },
        "desc": {
          "en": "ASP.NET Core Identity, JWT, OAuth2, and Microsoft Azure CI/CD.",
          "bn": "জেডব্লিউটি অথেনটিকেশন ও এজুর ডেপ্লয়মেন্ট।"
        },
        "icon": "Cloud"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master C# 12 syntax, OOP, generics, delegates, events, LINQ, and asynchronous tasks.",
        "bn": "সি-শার্প ওওপি, জেনেরিকস, ডেলিগেটস ও লিঙ্ক (LINQ) আয়ত্ত করা।"
      },
      {
        "en": "Build secure RESTful Web APIs with ASP.NET Core 8 and Swagger documentation.",
        "bn": "এএসপি.নেট কোর ৮ দিয়ে সিকিউর ওয়েব এপিআই তৈরি।"
      },
      {
        "en": "Master Entity Framework Core (EF Core) Code-First, DbContext, and Migrations.",
        "bn": "এন্টিটি ফ্রেমওয়ার্ক কোড-ফার্স্ট ও মাইগ্রেশনস হ্যান্ডলিং।"
      },
      {
        "en": "Implement enterprise authentication with ASP.NET Core Identity, JWT, and Claims-based RBAC.",
        "bn": "এএসপি.নেট কোর আইডেন্টিটি ও রোল-বেসড সিকিউরিটি।"
      },
      {
        "en": "Design enterprise applications using Clean Architecture, CQRS, MediatR, and deploy to Azure.",
        "bn": "ক্লিন আর্কিটেকচার ও মিডিয়াটার প্যাটার্ন দিয়ে প্রজেক্ট তৈরি ও এজুর ডেপ্লয়মেন্ট।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Python Core & Django Project Architecture",
          "bn": "মডিউল ১: পাইথন কোর ও জ্যাঙ্গো প্রজেক্ট আর্কিটেকচার"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "Python and Django Framework Introduction",
            "bn": "পাইথন ও জ্যাঙ্গো ফ্রেমওয়ার্ক পরিচিতি"
          },
          {
            "en": "Setting Up the Development Environment",
            "bn": "ডেভেলপমেন্ট এনভায়রনমেন্ট সেটআপ"
          },
          {
            "en": "Django Project Structure & Best Practices",
            "bn": "জ্যাঙ্গো প্রজেক্ট স্ট্রাকচার ও বেস্ট প্র্যাকটিস"
          },
          {
            "en": "Models and Database Management (ORM & Migrations)",
            "bn": "মডেলস ও ডাটাবেস ম্যানেজমেন্ট (ORM)"
          },
          {
            "en": "Creating & Managing Views & Templates",
            "bn": "ভিউস ও টেমপ্লেটস তৈরি এবং ম্যানেজমেন্ট"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Security, Admin & RESTful APIs",
          "bn": "মডিউল ২: সিকিউরিটি, অ্যাডমিন ও রেস্টফুল এপিআই"
        },
        "duration": {
          "en": "12 Classes • 36 Hours",
          "bn": "১২ টি ক্লাস • ৩৬ ঘণ্টা"
        },
        "lessonsCount": 10,
        "topics": [
          {
            "en": "User Authentication and Authorization",
            "bn": "ইউজার অথেনটিকেশন ও অথরাইজেশন"
          },
          {
            "en": "Django Admin Customization",
            "bn": "জ্যাঙ্গো অ্যাডমিন কাস্টমাইজেশন"
          },
          {
            "en": "RESTful API Integration with Django REST Framework",
            "bn": "জ্যাঙ্গো রেস্ট ফ্রেমওয়ার্ক দিয়ে এপিআই ইন্টিগ্রেশন"
          },
          {
            "en": "Middleware and Request Handling",
            "bn": "মিডলওয়্যার ও রিকোয়েস্ট হ্যান্ডলিং"
          },
          {
            "en": "Working with Static and Media Files",
            "bn": "স্ট্যাটিক ও মিডিয়া ফাইলস হ্যান্ডলিং"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Testing, Deployment & Marketplace",
          "bn": "মডিউল ৩: টেস্টিং, ডেপ্লয়মেন্ট ও মার্কেটপ্লেস"
        },
        "duration": {
          "en": "8 Classes • 24 Hours",
          "bn": "৮ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Testing and Debugging Django Projects",
            "bn": "জ্যাঙ্গো প্রজেক্ট টেস্টিং ও ডিবাগিং"
          },
          {
            "en": "Deployment & Hosting Django Apps on Cloud",
            "bn": "ক্লাউড সার্ভারে জ্যাঙ্গো অ্যাপ ডেপ্লয়মেন্ট"
          },
          {
            "en": "Communicative English for Backend Engineers",
            "bn": "ব্যাকএন্ড ইঞ্জিনিয়ারদের জন্য কমিউনিকেটিভ ইংলিশ"
          },
          {
            "en": "Soft Skills & Marketplace Career Strategies",
            "bn": "সফট স্কিলস ও মার্কেটপ্লেস ক্যারিয়ার গাইডলাইন"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "28 Live Interactive Enterprise .NET Classes",
        "bn": "২৮ টি লাইভ এন্টারপ্রাইজ ডটনেট ক্লাস"
      },
      {
        "en": "Enterprise ERP Project Source Code & Documentation",
        "bn": "এন্টারপ্রাইজ ইআরপি প্রজেক্ট সোর্স কোড"
      },
      {
        "en": "Microsoft Certification (AZ-204 / .NET) Prep Guidance",
        "bn": "মাইক্রোসফট সার্টিফিকেশন গাইডলাইন"
      },
      {
        "en": "Industry ASP.NET Specialist Certificate",
        "bn": "ইন্ডাস্ট্রি এএসপি.নেট স্পেশালিস্ট সনদপত্র"
      }
    ],
    "reviews": [
      {
        "id": "r9",
        "name": "Mahmudul Karim",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": ".NET Developer at GlobalTech",
          "bn": "ডটনেট ডেভেলপার"
        },
        "rating": 5,
        "comment": {
          "en": "The Clean Architecture and CQRS structure taught in this course is exactly what high-paying enterprise software companies look for.",
          "bn": "ক্লিন আর্কিটেকচার ও ইএফ কোরের বাস্তবমুখী কোডিং আমাকে সরাসরি জবে সুযোগ করে দিয়েছে।"
        },
        "date": "3 Weeks Ago"
      }
    ]
  },
  {
    "id": "10",
    "slug": "shopify-development-specialist",
    "title": {
      "en": "Shopify Development Specialist",
      "bn": "শপিফাই ডেভেলপমেন্ট স্পেশালিস্ট"
    },
    "subtitle": {
      "en": "Master Liquid templating, custom Shopify theme development, Shopify CLI, App integrations & dropshipping store setup",
      "bn": "লিকুইড কোডিং, কাস্টম শপিফাই থিম ডেভেলপমেন্ট, অ্যাপ ইন্টিগ্রেশন ও ড্রপশিপিং স্টোর তৈরি শিখুন"
    },
    "category": "web",
    "categoryLabel": {
      "en": "Shopify & E-Commerce",
      "bn": "শপিফাই ও ই-কমার্স"
    },
    "badge": {
      "en": "FREELANCE SPECIAL",
      "bn": "ফ্রিল্যান্স স্পেশাল"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.8,
    "ratingsCount": 104,
    "enrolledCount": "85+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "8,000৳",
    "rawFee": 8000,
    "originalFee": "15,000৳",
    "duration": {
      "en": "2.5 Months",
      "bn": "২.৫ মাস"
    },
    "classesCount": {
      "en": "20 Classes",
      "bn": "২০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/wordpress.jpg",
    "videoUrl": "https://www.facebook.com/reel/2302715647232585/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Shopify%20Development%20Specialist%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Engr. Rezaul Karim",
      "designation": {
        "en": "Shopify Theme Developer & E-Commerce Expert",
        "bn": "শপিফাই থিম ডেভেলপার ও ই-কমার্স এক্সপার্ট"
      },
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "6+ years building custom Liquid themes and high-volume Shopify Plus stores for international brands on Upwork & Shopify Experts.",
        "bn": "৬+ বছরের শপিফাই প্লাস স্টোর ও কাস্টম লিকুইড থিম ডেভেলপমেন্ট অভিজ্ঞতা।"
      },
      "experience": "6+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Become a high-demand Shopify Developer. Learn how to set up e-commerce stores from scratch, customize premium themes with Shopify's Liquid templating engine, build custom theme sections using Shopify CLI, integrate payment gateways, and deliver client projects on Fiverr and Upwork.",
      "bn": "আন্তর্জাতিক ই-কমার্স প্ল্যাটফর্ম শপিফাইয়ের কাস্টম থিম ডেভেলপমেন্ট ও স্টোর সেটআপ কোর্স। লিকুইড ল্যাঙ্গুয়েজ, শপিফাই সিএলআই, ড্রপশিপিং কনফিগারেশন এবং ক্লায়েন্ট প্রজেক্ট হ্যান্ডলিং শিখবেন।"
    },
    "fullDescription": {
      "en": "Millions of global merchants rely on Shopify for online commerce. This course takes you beyond basic store setup into true code-level custom theme development using HTML, Tailwind/CSS, JavaScript, and Liquid. You'll master JSON templates, Dawn theme customization, product metafields, cart Ajax APIs, and dropshipping automation.",
      "bn": "কোডিং ছাড়া সাধারণ স্টোর সেটআপের পাশাপাশি কোডিং দিয়ে ক্লায়েন্টের মনের মতো কাস্টম ফিচার বানানোর দক্ষতা অর্জন করবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Liquid Templating & Shopify CLI",
          "bn": "লিকুইড ও শপিফাই সিএলআই"
        },
        "desc": {
          "en": "Write clean Liquid code and develop with modern Shopify CLI tooling.",
          "bn": "লিকুইড কোডিং ও শপিফাই সিএলআই দিয়ে থিম তৈরি।"
        },
        "icon": "Code2"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Custom Theme Sections & JSON",
          "bn": "কাস্টম সেকশনস ও জেসন টেমপ্লেট"
        },
        "desc": {
          "en": "Build flexible, schema-driven merchant customizable sections.",
          "bn": "মার্চেন্টদের জন্য কাস্টমাইজযোগ্য সেকশন তৈরি।"
        },
        "icon": "Layers"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Payment & Dropshipping Automation",
          "bn": "পেমেন্ট ও ড্রপশিপিং সেটআপ"
        },
        "desc": {
          "en": "Integrate Stripe, PayPal, SSLCommerz and CJ Dropshipping/DSers.",
          "bn": "পেমেন্ট গেটওয়ে ও অটোমেটেড ড্রপশিপিং।"
        },
        "icon": "Zap"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master Shopify admin architecture, store settings, collection hierarchies, and navigation.",
        "bn": "শপিফাই অ্যাডমিন আর্কিটেকচার ও কালেকশন ম্যানেজমেন্ট।"
      },
      {
        "en": "Master the Liquid templating language (objects, tags, filters, variables, and logic).",
        "bn": "লিকুইড টেমপ্লেটিং ল্যাঙ্গুয়েজ (ট্যাগস, ফিল্টার্স ও অবজেক্টস) আয়ত্ত করা।"
      },
      {
        "en": "Build custom Shopify theme sections, blocks, and schema settings from scratch.",
        "bn": "কাস্টম থিম সেকশনস, ব্লকস ও স্কিমা সেটিংস তৈরি।"
      },
      {
        "en": "Implement Ajax Cart, slide-out drawer cart, and interactive variant selectors.",
        "bn": "অ্যাজাক্স কার্ট ড্রয়ার ও ভ্যারিয়েন্ট সিলেক্টর ইন্টিগ্রেশন।"
      },
      {
        "en": "Configure dropshipping apps (DSers, CJ Dropshipping), payment gateways, and launch client stores.",
        "bn": "ড্রপশিপিং অ্যাপস ও পেমেন্ট গেটওয়ে কনফিগারেশন।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Shopify Ecosystem & Store Setup Fundamentals",
          "bn": "মডিউল ১: শপিফাই ইকোসিস্টেম ও স্টোর সেটআপ"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Shopify Partner Account Setup & Development Store Creation",
            "bn": "শপিফাই পার্টনার অ্যাকাউন্ট ও ডেভেলপমেন্ট স্টোর তৈরি"
          },
          {
            "en": "Products, Collections, Inventory, Shipping Zones & Tax Configurations",
            "bn": "প্রোডাক্টস, কালেকশন, শিপিং জোন ও ট্যাক্স সেটিংস"
          },
          {
            "en": "Domain Connection, Policies, Menus & Navigation Architecture",
            "bn": "ডোমেন কানেকশন ও নেভিগেশন আর্কিটেকচার"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Liquid Templating Engine Mastery",
          "bn": "মডিউল ২: লিকুইড টেমপ্লেটিং ইঞ্জিন মাস্টারি"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Liquid Objects (product, collection, cart, customer, shop)",
            "bn": "লিকুইড অবজেক্টস ও ডাটা স্ট্রাকচার"
          },
          {
            "en": "Liquid Tags (for, if/else, case/when, paginate, render/include)",
            "bn": "লিকুইড ট্যাগস ও কন্ডিশনাল লজিক"
          },
          {
            "en": "Liquid Filters for Strings, Arrays, Currency & Image Optimization",
            "bn": "লিকুইড ফিল্টার্স ও ইমেজ অপটিমাইজেশন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Shopify CLI & Custom Theme Development (Dawn Theme)",
          "bn": "মডিউল ৩: শপিফাই সিএলআই ও কাস্টম থিম ডেভেলপমেন্ট"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Installing Shopify CLI, Git Workflow & Theme Development Workflow",
            "bn": "শপিফাই সিএলআই ও গিট ওয়ার্কফ্লো"
          },
          {
            "en": "Theme Architecture: Layouts, Templates, Sections, Snippets, Assets, Config",
            "bn": "শপিফাই থিম ফোল্ডার স্ট্রাকচার ও আর্কিটেকচার"
          },
          {
            "en": "Creating Custom Schema Settings (presets, inputs, blocks, settings)",
            "bn": "কাস্টম স্কিমা সেটিংস ও মার্চেন্ট কাস্টমাইজেশন"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: Advanced Features (Ajax Cart, Metafields & Custom JS)",
          "bn": "মডিউল ৪: এডভান্সড ফিচারস (অ্যাজাক্স কার্ট ও মেটাফিল্ডস)"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Shopify Ajax API: Add to Cart, Update Cart & Live Cart Drawer",
            "bn": "শপিফাই অ্যাজাক্স এপিআই ও স্লাইড-আউট কার্ট"
          },
          {
            "en": "Custom Metafields & Metaobjects for Dynamic Product Data",
            "bn": "কাস্টম মেটাফিল্ডস ও ডাইনামিক প্রোডাক্ট ডাটা"
          },
          {
            "en": "Custom Product Page Badges, Countdowns, and Upsell Offers",
            "bn": "কাউন্টডাউন টাইমার ও আপসেল অফার তৈরি"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: Dropshipping Automation & Upwork/Fiverr Freelancing",
          "bn": "মডিউল ৫: ড্রপশিপিং অটোমেশন ও ফ্রিল্যান্সিং"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "AliExpress / DSers / CJ Dropshipping Automation Setup",
            "bn": "ডিএসার্স ও সিজে ড্রপশিপিং অটোমেশন"
          },
          {
            "en": "Payment Gateway Setup (Stripe, PayPal, Local Payment Gateways)",
            "bn": "পেমেন্ট গেটওয়ে ইন্টিগ্রেশন"
          },
          {
            "en": "Selling Shopify Development Services on Upwork and Fiverr",
            "bn": "আপওয়ার্ক ও ফাইভারে শপিফাই সার্ভিস বিক্রি"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "20 Live Hands-on Shopify Coding Classes",
        "bn": "২০ টি লাইভ শপিফাই কোডিং ক্লাস"
      },
      {
        "en": "Custom Premium Shopify Theme Source Code",
        "bn": "কাস্টম প্রিমিয়াম শপিফাই থিম সোর্স কোড"
      },
      {
        "en": "Upwork & Fiverr Shopify Freelance Blueprint",
        "bn": "ফ্রিল্যান্সিং ব্লুপ্রিন্ট ও গিগ গাইড"
      },
      {
        "en": "Shopify Development Specialist Certificate",
        "bn": "শপিফাই ডেভেলপমেন্ট স্পেশালিস্ট সনদপত্র"
      }
    ],
    "reviews": [
      {
        "id": "r10",
        "name": "Saiful Islam",
        "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "Shopify Freelancer on Fiverr",
          "bn": "শপিফাই ফ্রিল্যান্সার"
        },
        "rating": 5,
        "comment": {
          "en": "Learning Liquid coding and custom section creation helped me build high-ticket custom stores for US dropshippers. Excellent course!",
          "bn": "লিকুইড কোডিং শিখে আমি ফাইভারে কাস্টম শপিফাই স্টোর তৈরির কাজ করছি।"
        },
        "date": "1 Month Ago"
      }
    ]
  },
  {
    "id": "11",
    "slug": "android-application-development",
    "title": {
      "en": "Android Application Development",
      "bn": "অ্যান্ড্রয়েড অ্যাপ্লিকেশন ডেভেলপমেন্ট"
    },
    "subtitle": {
      "en": "Master native Android development with Android Studio, Java/Kotlin, UI layouts, Room database, APIs & Firebase",
      "bn": "অ্যান্ড্রয়েড স্টুডিও, জাভা/কটলিন, ইউআই লেআউট, ডাটাবেস ও ফায়ারবেস দিয়ে নেটিভ অ্যান্ড্রয়েড অ্যাপ তৈরি শিখুন"
    },
    "category": "software",
    "categoryLabel": {
      "en": "App & Software",
      "bn": "অ্যাপ ও সফটওয়্যার"
    },
    "badge": {
      "en": "POPULAR",
      "bn": "জনপ্রিয়"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 88,
    "enrolledCount": "70+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "20,000৳",
    "rawFee": 20000,
    "originalFee": "30,000৳",
    "duration": {
      "en": "90 hrs. (3 Months)",
      "bn": "৯০ ঘণ্টা (৩ মাস)"
    },
    "classesCount": {
      "en": "30 Classes",
      "bn": "৩০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/agile & scrum master.jpg",
    "videoUrl": "https://www.facebook.com/reel/1791500222217262/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22SAP%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Syed Imran Hossain",
      "designation": {
        "en": "Lead SAP ERP Consultant & Solution Architect",
        "bn": "লিড এসএপি ইআরপি কনসালট্যান্ট ও সলিউশন আর্কিটেক্ট"
      },
      "image": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "12+ years deploying SAP S/4HANA, FICO, and MM implementations for Fortune 500 conglomerates and multinational banks.",
        "bn": "১২+ বছরের এসএপি এস/৪হানা, ফাইকো ও এমএম ইআরপি কনসালটিং অভিজ্ঞতা।"
      },
      "experience": "12+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Build modern, native Android apps using Android Studio, Java/Kotlin, UI layouts, navigation, local data storage, networking with REST APIs, and Firebase integration.",
      "bn": "অ্যান্ড্রয়েড স্টুডিও, জাভা/কটলিন, ইউআই লেআউট, নেভিগেশন, লোকাল ডাটাবেস, এপিআই এবং ফায়ারবেস দিয়ে প্রফেশনাল অ্যান্ড্রয়েড অ্যাপ ডেভেলপমেন্ট শিখুন।"
    },
    "fullDescription": {
      "en": "SAP powers over 87% of global commerce. In this executive-level course, you will learn the core architecture of SAP ERP, Master Data Management (GL, Vendor, Customer, Material), purchasing cycles (Procure-to-Pay), financial statement generation, and configuration best practices used in real corporate deployments.",
      "bn": "দেশি ও বিদেশি বহুজাতিক কোম্পানি, টেলিকম ও ব্যাংকিং সেক্টরে এসএপি প্রফেশনালদের উচ্চ চাহিদার কথা মাথায় রেখে এই কোর্সটি সাজানো হয়েছে।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "SAP S/4HANA Core ERP",
          "bn": "এসএপি এস/৪হানা কোর ইআরপি"
        },
        "desc": {
          "en": "Understand enterprise structure, organizational units & navigation.",
          "bn": "এন্টারপ্রাইজ স্ট্রাকচার ও নেভিগেশন মাস্টারি।"
        },
        "icon": "Server"
      },
      {
        "id": "cv2",
        "title": {
          "en": "SAP FICO (Finance & Controlling)",
          "bn": "এসএপি ফাইকো মডিউল"
        },
        "desc": {
          "en": "General Ledger, Accounts Payable, Accounts Receivable & Asset Accounting.",
          "bn": "জেনারেল লেজার, একাউন্টস পেয়েবল ও রিসিভেবল।"
        },
        "icon": "DollarSign"
      },
      {
        "id": "cv3",
        "title": {
          "en": "SAP MM (Materials Management)",
          "bn": "এসএপি এমএম মডিউল"
        },
        "desc": {
          "en": "Procure-to-Pay (P2P), Purchase Orders, Inventory & Master Data.",
          "bn": "প্রকিউরমেন্ট প্রসেস, পারচেজ অর্ডার ও ইনভেন্টরি।"
        },
        "icon": "Briefcase"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Understand SAP S/4HANA enterprise architecture, client-server models, and GUI navigation.",
        "bn": "এসএপি এস/৪হানা আর্কিটেকচার ও জিইউআই নেভিগেশন।"
      },
      {
        "en": "Configure SAP FICO: General Ledger (GL), Accounts Payable (AP), and Accounts Receivable (AR).",
        "bn": "এসএপি ফাইকো জেনারেল লেজার ও একাউন্টস কনফিগারেশন।"
      },
      {
        "en": "Master SAP MM: Material Master, Vendor Master, Purchase Requisitions (PR), and Purchase Orders (PO).",
        "bn": "এসএপি এমএম ম্যাটেরিয়াল মাস্টার ও পারচেজ অর্ডার ম্যানেজমেন্ট।"
      },
      {
        "en": "Integrate Procure-to-Pay (P2P) and Order-to-Cash (O2C) cross-module business flows.",
        "bn": "পি২পি ও ও২সি ক্রস-মডিউল বিজনেস ফ্লো ইন্টিগ্রেশন।"
      },
      {
        "en": "Prepare for official SAP Global Certification and corporate consulting interviews.",
        "bn": "এসএপি সার্টিফিকেশন ও কর্পোরেট ইন্টারভিউ প্রস্তুতি।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Android Studio & Java/Kotlin Basics",
          "bn": "মডিউল ১: অ্যান্ড্রয়েড স্টুডিও ও জাভা/কটলিন বেসিকস"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "Android Development Intro & Android Architecture",
            "bn": "অ্যান্ড্রয়েড ডেভেলপমেন্ট ও আর্কিটেকচার পরিচিতি"
          },
          {
            "en": "Android Studio Intro, SDK & Emulator Setup",
            "bn": "অ্যান্ড্রয়েড স্টুডিও, এসডিকে ও এমুলেটর সেটআপ"
          },
          {
            "en": "Java/Kotlin Basics for Android Development",
            "bn": "অ্যান্ড্রয়েডের জন্য জাভা/কটলিন ফান্ডামেন্টালস"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: UI Design, Navigation & Storage",
          "bn": "মডিউল ২: ইউআই ডিজাইন, নেভিগেশন ও ডাটাবেস"
        },
        "duration": {
          "en": "12 Classes • 36 Hours",
          "bn": "১২ টি ক্লাস • ৩৬ ঘণ্টা"
        },
        "lessonsCount": 10,
        "topics": [
          {
            "en": "UI Design & Layouts (XML & ConstraintLayout)",
            "bn": "ইউআই ডিজাইন ও লেআউটস"
          },
          {
            "en": "Activities & Navigation Architecture",
            "bn": "অ্যাক্টিভিটি ও নেভিগেশন আর্কিটেকচার"
          },
          {
            "en": "Data Storage & Management (Room & SQLite)",
            "bn": "ডাটা স্টোরেজ ও ম্যানেজমেন্ট (রুম ডাটাবেস)"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: APIs, Firebase & Marketplace Career",
          "bn": "মডিউল ৩: এপিআই, ফায়ারবেস ও মার্কেটপ্লেস"
        },
        "duration": {
          "en": "8 Classes • 24 Hours",
          "bn": "৮ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Networking & APIs Integration (Retrofit)",
            "bn": "নেটওয়ার্কিং ও রেস্ট এপিআই ইন্টিগ্রেশন"
          },
          {
            "en": "Firebase Integration (Authentication & Realtime DB)",
            "bn": "ফায়ারবেস অথেনটিকেশন ও রিয়েলটাইম ডাটাবেস"
          },
          {
            "en": "Communicative English for Mobile Developers",
            "bn": "মোবাইল ডেভেলপারদের জন্য কমিউনিকেটিভ ইংলিশ"
          },
          {
            "en": "Soft Skills & Marketplace App Publishing",
            "bn": "সফট স্কিলস ও গুগল প্লে স্টোরে অ্যাপ পাবলিশিং"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "24 Live SAP Enterprise Training Sessions",
        "bn": "২৪ টি লাইভ এসএপি এন্টারপ্রাইজ ক্লাস"
      },
      {
        "en": "SAP S/4HANA Server Access Guidelines & Practice Data",
        "bn": "এসএপি সার্ভার প্র্যাকটিস গাইডলাইন"
      },
      {
        "en": "End-to-End Implementation Case Study Templates",
        "bn": "ইমপ্লিমেন্টেশন কেস স্টাডি টেমপ্লেটস"
      },
      {
        "en": "Executive SAP Professional Certificate",
        "bn": "এক্সিকিউটিভ এসএপি প্রফেশনাল সনদপত্র"
      }
    ],
    "reviews": [
      {
        "id": "r11",
        "name": "Kazi Anisur Rahman",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "SAP Associate at Beximco",
          "bn": "এসএপি অ্যাসোসিয়েট"
        },
        "rating": 5,
        "comment": {
          "en": "The integration between SAP MM and FICO was explained brilliantly with live business cases. Helped me crack my first MNC interview!",
          "bn": "এসএপি ফাইকো ও এমএম মডিউলের প্র্যাকটিক্যাল ট্রেনিং আমাকে মাল্টিন্যাশনাল কোম্পানিতে জব পেতে সাহায্য করেছে।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "12",
    "slug": "comptia-a-plus-ccna-mtcna",
    "title": {
      "en": "CompTIA A+, CCNA & MTCNA",
      "bn": "কম্পটিয়া এ+, সিসিএনএ অ্যান্ড এমটিসিএনএ"
    },
    "subtitle": {
      "en": "Master computer hardware, operating systems, CC camera, Cisco CCNA routing/switching, and MikroTik RouterOS",
      "bn": "কম্পিউটার হার্ডওয়্যার, ওএস, সিসি ক্যামেরা, সিসকো সিসিএনএ ও মাইক্রোটিক দিয়ে নেটওয়ার্কিং ইঞ্জিনিয়ারিং শিখুন"
    },
    "category": "cloud",
    "categoryLabel": {
      "en": "Networking & IT",
      "bn": "নেটওয়ার্কিং ও আইটি"
    },
    "badge": {
      "en": "FLAGSHIP",
      "bn": "ফ্ল্যাগশিপ"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 165,
    "enrolledCount": "150+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "30,000৳",
    "rawFee": 30000,
    "originalFee": "50,000৳",
    "duration": {
      "en": "200 hrs. (6 Months)",
      "bn": "২০০ ঘণ্টা (৬ মাস)"
    },
    "classesCount": {
      "en": "66 Classes",
      "bn": "৬৬ টি ক্লাস"
    },
    "image": "/images/course thumbnail/ccna-networking.jpg",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Cisco%20CCNA%20(200-301)%20Enterprise%20Routing%20%26%20Switching%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Engr. Zahid Hasan (CCNP Enterprise, CCNA)",
      "designation": {
        "en": "Senior Network Engineer & Cisco Certified Specialist",
        "bn": "সিনিয়র নেটওয়ার্ক ইঞ্জিনিয়ার ও সিসকো সার্টিফাইড স্পেশালিস্ট"
      },
      "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "10+ years architecting enterprise campus networks, Cisco core switches, data center routing, and multi-protocol network security.",
        "bn": "১০+ বছরের সিসকো কোর নেটওয়ার্ক, ডাটা সেন্টার রাউটিং ও এন্টারপ্রাইজ সিকিউরিটি আর্কিটেকচার অভিজ্ঞতা।"
      },
      "experience": "10+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Complete 200-hour Networking & IT Infrastructure Masterclass covering Computer Hardware Fundamentals, Operating Systems, CC Camera Installation, Cisco Certified Network Associate (CCNA Routing & Switching), Wireless Networking, Network Security, and MikroTik RouterOS Essentials (MTCNA).",
      "bn": "কম্পিউটার হার্ডওয়্যার, অপারেটিং সিস্টেমস, সিসি ক্যামেরা সেটআপ, সিসকো সিসিএনএ (CCNA), নেটওয়ার্ক সিকিউরিটি, ওয়্যারলেস এবং মাইক্রোটিক রাউটারওএস (MTCNA) এর সমন্বয়ে পূর্ণাঙ্গ আইটি ও নেটওয়ার্ক ইঞ্জিনিয়ারিং কোর্স।"
    },
    "fullDescription": {
      "en": "Cisco CCNA is the gold standard foundation for IT, Networking, Cloud, and Cybersecurity careers worldwide. In this hands-on course, you will configure real Cisco router and switch models, simulate complex multi-branch enterprise networks, implement robust firewall security, and gain the exact skills required for global enterprise NOC & Network Engineer roles.",
      "bn": "আন্তর্জাতিক ও দেশীয় কর্পোরেট আইটি সেক্টরে নেটওয়ার্ক ইঞ্জিনিয়ার হিসেবে উচ্চ বেতনের ক্যারিয়ার গড়ার সবচেয়ে কার্যকর ও মর্যাদাপূর্ণ কোর্স।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Cisco Enterprise Switching",
          "bn": "সিসকো সুইচিং ও ভিএলএএন"
        },
        "desc": {
          "en": "VLANs, 802.1Q Trunks, STP, RSTP & LACP EtherChannel.",
          "bn": "ভিএলএএন, ট্রাঙ্কিং ও স্প্যানিং ট্রি প্রোটোকল কনফিগারেশন।"
        },
        "icon": "Server"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Dynamic Routing & OSPFv2",
          "bn": "ওএসপিএফ ডায়নামিক রাউটিং"
        },
        "desc": {
          "en": "Single-area & Multi-area OSPF, Inter-VLAN Routing & Default Routes.",
          "bn": "মাল্টি-এরিয়া ওএসপিএফ ও রাউটিং টেবিল অপটিমাইজেশন।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Network Security & Automation",
          "bn": "সিকিউরিটি ও অটোমেশন"
        },
        "desc": {
          "en": "Standard/Extended ACLs, Dynamic NAT, DHCP Snooping & RESTCONF.",
          "bn": "সিসকো এসিএল, ন্যাট ও পাইথন নেটওয়ার্ক অটোমেশন।"
        },
        "icon": "ShieldCheck"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master the OSI 7-Layer and TCP/IP stack, frame formats, and high-speed IPv4/IPv6 VLSM subnetting.",
        "bn": "ওএসআই মডেল, প্যাকেট এনক্যাপসুলেশন ও নিখুঁত আইপিভি৪/আইপিভি৬ সাবনেটিং।"
      },
      {
        "en": "Configure and troubleshoot Cisco Catalyst Switches: VLANs, Trunks, VTP, STP, and Port Security.",
        "bn": "সিসকো সুইচে ভিএলএএন, ট্রাঙ্ক, এসটিপি ও পোর্ট সিকিউরিটি কনফিগারেশন।"
      },
      {
        "en": "Implement enterprise routing protocols including Single/Multi-Area OSPFv2 and static routes.",
        "bn": "ওএসপিএফ ডায়নামিক রাউটিং ও ইন্টার-ভিএলএএন রাউটিং বাস্তবায়ন।"
      },
      {
        "en": "Deploy network services: DHCP, DNS, Dynamic PAT/NAT, NTP, and SNMP monitoring.",
        "bn": "ডিএইচসিপি, ডিএনএস, ডাইনামিক প্যাট/ন্যাট ও এসএনএমপি মনিটরিং সেটআপ।"
      },
      {
        "en": "Configure standard & extended ACLs, Port Security, DHCP Snooping, and Dynamic ARP Inspection.",
        "bn": "সিসকো এসিএল এবং সুইচ সিকিউরিটি হার্ডেনিং।"
      },
      {
        "en": "Understand Cisco DNA Center, REST APIs, JSON data structures, and Python network automation.",
        "bn": "সিসকো ডিএনএ সেন্টার ও নেটওয়ার্ক অটোমেশন বেসিকস।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Hardware, OS & CC Camera Setup",
          "bn": "মডিউল ১: হার্ডওয়্যার, ওএস ও সিসি ক্যামেরা ইনস্টলেশন"
        },
        "duration": {
          "en": "20 Classes • 60 Hours",
          "bn": "২০ টি ক্লাস • ৬০ ঘণ্টা"
        },
        "lessonsCount": 14,
        "topics": [
          {
            "en": "Computer Hardware Fundamentals & Assembly",
            "bn": "কম্পিউটার হার্ডওয়্যার ফান্ডামেন্টালস ও অ্যাসেম্বলি"
          },
          {
            "en": "Operating Systems Installation & Maintenance",
            "bn": "অপারেটিং সিস্টেম ইনস্টলেশন ও রক্ষণাবেক্ষণ"
          },
          {
            "en": "Basic Networking Concepts, Cables & Topologies",
            "bn": "বেসিক নেটওয়ার্কিং ও ক্যাবলিং"
          },
          {
            "en": "CC Camera Installation & DVR/NVR Configuration",
            "bn": "সিসি ক্যামেরা ইনস্টলেশন ও ডিভিআর/এনভিআর সেটআপ"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Cisco Routing, Switching & Security (CCNA)",
          "bn": "মডিউল ২: সিসকো রাউটিং, সুইচিং ও সিকিউরিটি (CCNA)"
        },
        "duration": {
          "en": "30 Classes • 90 Hours",
          "bn": "৩০ টি ক্লাস • ৯০ ঘণ্টা"
        },
        "lessonsCount": 20,
        "topics": [
          {
            "en": "Cisco Certified Network Associate (CCNA) Overview",
            "bn": "সিসকো সিসিএনএ (CCNA) পরিচিতি"
          },
          {
            "en": "Routing and Switching Protocols (OSPF, VLANs, Trunking)",
            "bn": "রাউটিং ও সুইচিং প্রোটোকলস (OSPF, VLANs, ট্রাঙ্কিং)"
          },
          {
            "en": "Network Security, Firewalls & Access Lists (ACL)",
            "bn": "নেটওয়ার্ক সিকিউরিটি, ফায়ারওয়াল ও এসিএল"
          },
          {
            "en": "Wireless Networking & WLAN Configuration",
            "bn": "ওয়্যারলেস নেটওয়ার্কিং ও কনফিগারেশন"
          },
          {
            "en": "Network Services and Protocols (DHCP, DNS, NAT, IPv4/IPv6)",
            "bn": "নেটওয়ার্ক সার্ভিসেস ও প্রোটোকলস"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: MikroTik RouterOS (MTCNA) & Marketplace",
          "bn": "মডিউল ৩: মাইক্রোটিক রাউটারওএস (MTCNA) ও মার্কেটপ্লেস"
        },
        "duration": {
          "en": "16 Classes • 50 Hours",
          "bn": "১৬ টি ক্লাস • ৫০ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "Mikrotik RouterOS Essentials (MTCNA) Setup",
            "bn": "মাইক্রোটিক রাউটারওএস এসেনশিয়ালস (MTCNA) সেটআপ"
          },
          {
            "en": "ISP Bandwidth Management & Queues",
            "bn": "আইএসপি ব্যান্ডউইথ ম্যানেজমেন্ট ও কিউস"
          },
          {
            "en": "Communicative English for IT Engineers",
            "bn": "আইটি ইঞ্জিনিয়ারদের জন্য কমিউনিকেটিভ ইংলিশ"
          },
          {
            "en": "Soft Skills & Marketplace Career Strategies",
            "bn": "সফট স্কিলস ও মার্কেটপ্লেস ক্যারিয়ার গাইডলাইন"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "28 Live Hands-on Cisco Lab Classes with Physical & Virtual Topologies",
        "bn": "২৮ টি লাইভ প্র্যাকটিক্যাল সিসকো ল্যাব ক্লাস"
      },
      {
        "en": "50+ Packet Tracer & GNS3 Enterprise Multi-Router Lab Scenarios",
        "bn": "৫০+ সিসকো ল্যাব টপোলজি ফাইলস"
      },
      {
        "en": "Cisco CCNA 200-301 Official Certification Exam Guide & Question Bank",
        "bn": "সিসিএনএ ২০০-৩০১ অফিসিয়াল এক্সাম গাইড ও প্রশ্নব্যাংক"
      },
      {
        "en": "Verified Cisco Network Specialist Certificate & Job Placement Support",
        "bn": "সার্টিফাইড নেটওয়ার্ক স্পেশালিস্ট সনদপত্র ও জব রেফারেন্স"
      }
    ],
    "reviews": [
      {
        "id": "r12",
        "name": "Engr. Raihan Ali",
        "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "Network Associate at Link3 Technologies",
          "bn": "নেটওয়ার্ক ইঞ্জিনিয়ার"
        },
        "rating": 5,
        "comment": {
          "en": "The CCNA 200-301 lab sessions on OSPF, EtherChannel, and ACLs were practical and directly aligned with the official exam. Cleared my certification on the first attempt!",
          "bn": "সিসিএনএ ২০০-৩০১ কোর্সের ওএসপিএফ ও এসিএল ল্যাবগুলো অসাধারণ ছিল। প্রথম চেষ্টাতেই সার্টিফিকেশন পাস করেছি।"
        },
        "date": "1 Month Ago"
      }
    ]
  },
  {
    "id": "13",
    "slug": "ux-ui-design",
    "title": {
      "en": "UX/UI Design",
      "bn": "ইউএক্স/ইউআই ডিজাইন"
    },
    "subtitle": {
      "en": "Master user research, wireframing, paper prototyping, web/mobile app template design in Figma & design systems",
      "bn": "ইউজার রিসার্চ, ওয়্যারফ্রেমিং, পেপার প্রোটোটাইপিং ও ফিগমা দিয়ে ওয়েব ও মোবাইল অ্যাপ ডিজাইন শিখুন"
    },
    "category": "creative",
    "categoryLabel": {
      "en": "Design & UI/UX",
      "bn": "গ্রাফিক্স ও ইউআই/ইউএক্স"
    },
    "badge": {
      "en": "TRENDING",
      "bn": "ট্রেন্ডিং"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 156,
    "enrolledCount": "135+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "20,000৳",
    "rawFee": 20000,
    "originalFee": "30,000৳",
    "duration": {
      "en": "90 hrs. (3 Months)",
      "bn": "৯০ ঘণ্টা (৩ মাস)"
    },
    "classesCount": {
      "en": "30 Classes",
      "bn": "৩০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/ui ux design.jpg",
    "videoUrl": "https://www.facebook.com/reel/889772017529060/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Master%20in%20UX/UI%20Design%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Tanzim Ahmed",
      "designation": {
        "en": "Lead Product Designer & UX Strategist",
        "bn": "লিড প্রোডাক্ট ডিজাইনার ও ইউএক্স স্ট্র্যাটেজিস্ট"
      },
      "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "8+ years crafting user experiences for high-growth SaaS startups and fintech apps across USA, UK, and Singapore.",
        "bn": "৮+ বছরের ফিনটেক ও সাস প্রোডাক্ট ডিজাইন এবং ফিগমা ডিজাইন সিস্টেম অভিজ্ঞতা।"
      },
      "experience": "8+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Master user experience research and user interface design. Learn typography, iconography, imagery, sketching, wireframing, paper prototyping, app & web template design in Figma, and build a work portfolio that wins global clients.",
      "bn": "ইউজার এক্সপেরিয়েন্স রিসার্চ, টাইপোগ্রাফি, ওয়্যারফ্রেমিং, পেপার প্রোটোটাইপিং, ফিগমা দিয়ে ওয়েব ও মোবাইল অ্যাপ ডিজাইন এবং আন্তর্জাতিক মানের পোর্টফোলিও তৈরির কোর্স।"
    },
    "fullDescription": {
      "en": "Product design is at the core of every modern digital business. In this intensive program, you will solve real-world user problems. You'll conduct usability tests, master UX psychology laws (Fitts's Law, Hick's Law, Miller's Law), build atomic design systems in Figma, and document full product case studies on Behance and Medium.",
      "bn": "থিওরি ও টুলসের পাশাপাশি ২টি কমপ্লিট মোবাইল অ্যাপ ও ১টি সাস ওয়েব অ্যাপ্লিকেশনের এন্ড-টু-এন্ড কেস স্টাডি তৈরি করে আপনাকে আন্তর্জাতিক রিমোট জবের জন্য প্রস্তুত করা হবে।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Human-Centered UX Research",
          "bn": "ইউজার-সেন্ট্রিক ইউএক্স রিসার্চ"
        },
        "desc": {
          "en": "User personas, customer journey maps, wireframes & usability audits.",
          "bn": "ইউজার ইন্টারভিউ, জার্নি ম্যাপ ও ওয়্যারফ্রেমিং।"
        },
        "icon": "Users"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Advanced Figma 2025 Architecture",
          "bn": "এডভান্সড ফিগমা সিস্টেমস"
        },
        "desc": {
          "en": "Auto-layout, dynamic variables, design tokens & responsive components.",
          "bn": "অটো-লেআউট, ভ্যারিয়েবলস ও ডিজাইন টোকেনস।"
        },
        "icon": "Palette"
      },
      {
        "id": "cv3",
        "title": {
          "en": "High-Impact Portfolio Case Studies",
          "bn": "পোর্টফোলিও কেস স্টাডি"
        },
        "desc": {
          "en": "Document complete design rationale for global job recruiters.",
          "bn": "চাকরির উপযোগী প্রফেশনাল কেস স্টাডি।"
        },
        "icon": "Award"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Conduct UX research, user interviews, empathy maps, and competitive UX audits.",
        "bn": "ইউজার ইন্টারভিউ, এমপ্যাথি ম্যাপিং ও ইউএক্স অডিট পরিচালনা করা।"
      },
      {
        "en": "Structure information architecture, user flows, and interactive low-fidelity wireframes.",
        "bn": "ইনফরমেশন আর্কিটেকচার, ইউজার ফ্লো ও ওয়্যারফ্রেম তৈরি।"
      },
      {
        "en": "Master Figma Auto-layout, nested components, interactive variants, and variables.",
        "bn": "ফিগমা অটো-লেআউট, ভ্যারিয়েন্টস ও ডিজাইন সিস্টেম মাস্টার করা।"
      },
      {
        "en": "Design micro-interactions, smart animations, and interactive clickable prototypes.",
        "bn": "স্মার্ট অ্যানিমেশন ও ক্লিকেবল প্রোটোটাইপিং তৈরি।"
      },
      {
        "en": "Create comprehensive product case studies on Behance and Notion for international remote jobs.",
        "bn": "বিহ্যান্স ও নোশনে আন্তর্জাতিক মানের ইউআই/ইউএক্স কেস স্টাডি তৈরি।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: UX/UI Overview & Visual Design Language",
          "bn": "মডিউল ১: ইউএক্স/ইউআই ওভারভিউ ও ভিজ্যুয়াল ডিজাইন ল্যাঙ্গুয়েজ"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "UX/UI Design Overview & Languages",
            "bn": "ইউএক্স/ইউআই ডিজাইন ওভারভিউ ও ভাষা"
          },
          {
            "en": "Typography, Iconography and Imagery Systems",
            "bn": "টাইপোগ্রাফি, আইকনোগ্রাফি ও ইমেজ সিস্টেম"
          },
          {
            "en": "Sketching & Wireframing Fundamentals",
            "bn": "স্কেচিং ও ওয়্যারফ্রেমিং ফান্ডামেন্টালস"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Prototyping & Template Design",
          "bn": "মডিউল ২: প্রোটোটাইপিং ও টেমপ্লেট ডিজাইন"
        },
        "duration": {
          "en": "12 Classes • 36 Hours",
          "bn": "১২ টি ক্লাস • ৩৬ ঘণ্টা"
        },
        "lessonsCount": 10,
        "topics": [
          {
            "en": "Paper Prototyping Process & User Journey Mapping",
            "bn": "পেপার প্রোটোটাইপিং প্রসেস ও ইউজার জার্নি"
          },
          {
            "en": "App & Web Template Design in Figma",
            "bn": "ফিগমায় অ্যাপ ও ওয়েব টেমপ্লেট ডিজাইন"
          },
          {
            "en": "Implementation for Mobile Apps (iOS & Android Guidelines)",
            "bn": "মোবাইল অ্যাপ গাইডলাইন অনুযায়ী ডিজাইন"
          },
          {
            "en": "Prototyping Process for Web & Micro-interactions",
            "bn": "ওয়েবের জন্য প্রোটোটাইপিং ও ইন্টারঅ্যাকশন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Work Portfolio, English & Marketplace",
          "bn": "মডিউল ৩: ওয়ার্ক পোর্টফোলিও, ইংলিশ ও মার্কেটপ্লেস"
        },
        "duration": {
          "en": "8 Classes • 24 Hours",
          "bn": "৮ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Work Portfolio Development (Behance & Dribbble)",
            "bn": "ওয়ার্ক পোর্টফোলিও তৈরি (বেহ্যান্স ও ড্রিবল)"
          },
          {
            "en": "Communicative English for Product Designers",
            "bn": "প্রোডাক্ট ডিজাইনারদের জন্য কমিউনিকেটিভ ইংলিশ"
          },
          {
            "en": "Soft Skills & Marketplace Client Acquisition",
            "bn": "সফট স্কিলস ও মার্কেটপ্লেস ফ্রিল্যান্সিং"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "24 Live Practical UX/UI Masterclasses",
        "bn": "২৪ টি লাইভ প্র্যাকটিক্যাল ক্লাস"
      },
      {
        "en": "Figma UI Kit & Complete Enterprise Design System File",
        "bn": "কমপ্লিট ফিগমা ডিজাইন সিস্টেম ফাইল"
      },
      {
        "en": "Full Portfolio Case Study Review & Interview Prep",
        "bn": "ইউআই/ইউএক্স পোর্টফোলিও কেস স্টাডি রিভিউ"
      },
      {
        "en": "Verified Master in UX/UI Design Certificate",
        "bn": "সার্টিফাইড ইউআই/ইউএক্স ডিজাইন সনদপত্র"
      }
    ],
    "reviews": [
      {
        "id": "r13",
        "name": "Sadia Afrin",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "Product Designer at Technext",
          "bn": "প্রোডাক্ট ডিজাইনার"
        },
        "rating": 5,
        "comment": {
          "en": "The Figma Design System and Case Study structuring lessons helped me secure an international remote UI/UX designer position!",
          "bn": "ফিগমা ডিজাইন সিস্টেম এবং প্রফেশনাল কেস স্টাডি তৈরির গাইডলাইন অসাধারণ ছিল।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "14",
    "slug": "wordpress-specialist",
    "title": {
      "en": "WordPress Specialist",
      "bn": "ওয়ার্ডপ্রেস স্পেশালিস্ট"
    },
    "subtitle": {
      "en": "Master domain & hosting, dashboard, plugins, WooCommerce stores, speed optimization, and freelance marketplaces",
      "bn": "ডোমেইন হোস্টিং, থিম ও প্লাগিন কাস্টমাইজেশন, উকমার্স স্টোর এবং স্পিড অপটিমাইজেশন শিখুন"
    },
    "category": "web",
    "categoryLabel": {
      "en": "Web Development",
      "bn": "ওয়েব ডেভেলপমেন্ট"
    },
    "badge": {
      "en": "POPULAR",
      "bn": "জনপ্রিয়"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 165,
    "enrolledCount": "150+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "18,000৳",
    "rawFee": 18000,
    "originalFee": "25,000৳",
    "duration": {
      "en": "120 hrs. (3.5 Months)",
      "bn": "১২০ ঘণ্টা (৩.৫ মাস)"
    },
    "classesCount": {
      "en": "40 Classes",
      "bn": "৪০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/wordpress.jpg",
    "videoUrl": "https://www.facebook.com/reel/2302715647232585/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Mastering%20WordPress%20Development%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Engr. Rezaul Karim",
      "designation": {
        "en": "Senior WordPress Engineer & Top Rated Freelancer",
        "bn": "সিনিয়র ওয়ার্ডপ্রেস ইঞ্জিনিয়ার ও টপ রেটেড ফ্রিল্যান্সার"
      },
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "7+ years designing 300+ custom WordPress, WooCommerce & ACF websites for international clients on Upwork & Fiverr.",
        "bn": "৭+ বছরের ওয়ার্ডপ্রেস, উকমার্স ও ফ্রিল্যান্স মার্কেটপ্লেসে ক্লায়েন্ট প্রজেক্ট হ্যান্ডলিং অভিজ্ঞতা।"
      },
      "experience": "7+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Become a professional WordPress Specialist. Learn domain and hosting, WordPress dashboard, media, pages & appearance, plugins, user management, WooCommerce e-commerce development, management tools, and SEO & speed optimization.",
      "bn": "ডোমেইন হোস্টিং, থিম কাস্টমাইজেশন, উকমার্স ই-কমার্স ডেভেলপমেন্ট, এসইও ও স্পিড অপটিমাইজেশন শিখে প্রফেশনাল ওয়ার্ডপ্রেস স্পেশালিস্ট হিসেবে ক্যারিয়ার শুরু করার কোর্স।"
    },
    "fullDescription": {
      "en": "WordPress powers over 43% of all websites on the internet. In this project-driven masterclass, you will build responsive landing pages, hotel/service booking portals, high-converting WooCommerce shops, and sales funnels. You will also master speed optimization, security hardening, and complete marketplace bidding strategies.",
      "bn": "থিওরির পাশাপাশি প্রতিটি ক্লাসে রিয়েল ক্লায়েন্ট প্রজেক্ট, প্রিমিয়াম প্লাগিন-থিম প্র্যাকটিস ফাইল ও আন্তর্জাতিক মার্কেটপ্লেসে কাজ পাওয়ার টেকনিক শেখানো হবে।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Elementor Pro & Dynamic ACF",
          "bn": "এলিমেন্টর প্রো ও এসিএফ"
        },
        "desc": {
          "en": "Build pixel-perfect landing pages and custom post type dynamic systems.",
          "bn": "কাস্টম পোস্ট টাইপ ও আধুনিক ল্যান্ডিং পেজ ডিজাইন।"
        },
        "icon": "Code2"
      },
      {
        "id": "cv2",
        "title": {
          "en": "WooCommerce & Payment Gateway",
          "bn": "উকমার্স ও পেমেন্ট গেটওয়ে"
        },
        "desc": {
          "en": "Full-functional online stores with bKash, Nagad, Stripe & PayPal.",
          "bn": "বিকাশ, নগদ ও স্ট্রাইপ পেমেন্ট গেটওয়ে ইন্টিগ্রেশন।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Speed, Security & Freelancing",
          "bn": "স্পিড, সিকিউরিটি ও ফ্রিল্যান্সিং"
        },
        "desc": {
          "en": "WP Rocket optimization, Wordfence security & Upwork/Fiverr gigs.",
          "bn": "স্পিড অপটিমাইজেশন ও ফ্রিল্যান্সিং ব্লুপ্রিন্ট।"
        },
        "icon": "Award"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Build modern business websites and landing pages using Elementor Pro and Divi builder.",
        "bn": "এলিমেন্টর প্রো ও ডিভি দিয়ে আধুনিক বিজনেস ওয়েবসাইট ও ল্যান্ডিং পেজ তৈরি।"
      },
      {
        "en": "Create full-featured WooCommerce e-commerce stores with multi-currency and payment gateways.",
        "bn": "উকমার্স দিয়ে কমপ্লিট ই-কমার্স শপ ও পেমেন্ট গেটওয়ে সেটআপ।"
      },
      {
        "en": "Develop dynamic web portals using ACF (Advanced Custom Fields) and Crocoblock JetEngine.",
        "bn": "এসিএফ ও ক্রোকোব্লক দিয়ে ডাইনামিক ফিল্টার ও কাস্টম পোস্ট টাইপ তৈরি।"
      },
      {
        "en": "Optimize website speed (90+ Google PageSpeed) and secure WordPress with Wordfence/Cloudflare.",
        "bn": "সাইট স্পিড অপটিমাইজেশন ও সিকিউরিটি হার্ডেনিং।"
      },
      {
        "en": "Create optimized Fiverr Gigs and winning Upwork proposals for WordPress client jobs.",
        "bn": "ফাইভার গিগ ও আপওয়ার্ক কভার লেটার অপটিমাইজেশন।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Domain, Hosting & Dashboard Foundations",
          "bn": "মডিউল ১: ডোমেইন, হোস্টিং ও ড্যাশবোর্ড পরিচিতি"
        },
        "duration": {
          "en": "12 Classes • 36 Hours",
          "bn": "১২ টি ক্লাস • ৩৬ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "Domain and Hosting Setup & Nameservers",
            "bn": "ডোমেইন ও হোস্টিং সেটআপ এবং নেমসার্ভার"
          },
          {
            "en": "WordPress Dashboard Overview & Core Configuration",
            "bn": "ওয়ার্ডপ্রেস ড্যাশবোর্ড ও কোর কনফিগারেশন"
          },
          {
            "en": "Media, Pages & Appearance Customization",
            "bn": "মিডিয়া, পেজেস ও অ্যাপিয়ারেন্স কাস্টমাইজেশন"
          },
          {
            "en": "Plugins Installation, Setup & Maintenance",
            "bn": "প্লাগিন ইনস্টলেশন, সেটআপ ও মেইনটেন্যান্স"
          },
          {
            "en": "Users Roles & Security Permissions",
            "bn": "ইউজার রোলস ও সিকিউরিটি পারমিশনস"
          },
          {
            "en": "Settings & Theme Overview (Elementor & Blocks)",
            "bn": "সেটিংস ও থিম পরিচিতি (এলিমেন্টর)"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: WooCommerce & Performance Optimization",
          "bn": "মডিউল ২: উকমার্স ও পারফরম্যান্স অপটিমাইজেশন"
        },
        "duration": {
          "en": "16 Classes • 48 Hours",
          "bn": "১৬ টি ক্লাস • ৪৮ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "WooCommerce & Products Catalog Configuration",
            "bn": "উকমার্স ও প্রোডাক্টস ক্যাটালগ সেটআপ"
          },
          {
            "en": "Payment Gateways & Shipping Methods Integration",
            "bn": "পেমেন্ট গেটওয়ে ও শিপিং মেথড ইন্টিগ্রেশন"
          },
          {
            "en": "WordPress Management Tools & Automated Backups",
            "bn": "ওয়ার্ডপ্রেস ম্যানেজমেন্ট টুলস ও অটোমেটেড ব্যাকআপ"
          },
          {
            "en": "SEO & Speed Optimization (Caching, CDN & Core Web Vitals)",
            "bn": "এসইও ও স্পিড অপটিমাইজেশন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: English, Soft Skills & Marketplace",
          "bn": "মডিউল ৩: ইংলিশ, সফট স্কিলস ও মার্কেটপ্লেস"
        },
        "duration": {
          "en": "12 Classes • 36 Hours",
          "bn": "১২ টি ক্লাস • ৩৬ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "Communicative English for International Client Pitches",
            "bn": "আন্তর্জাতিক ক্লায়েন্ট পিচিংয়ের জন্য ইংলিশ"
          },
          {
            "en": "Soft Skills & Marketplace Success (Fiverr & Upwork)",
            "bn": "সফট স্কিলস ও মার্কেটপ্লেস ফ্রিল্যান্সিং"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "24 Live Practical WordPress Masterclasses",
        "bn": "২৪ টি লাইভ প্র্যাকটিক্যাল ক্লাস"
      },
      {
        "en": "Premium Themes & Plugins Bundle (Elementor Pro, Crocoblock, WP Rocket)",
        "bn": "প্রিমিয়াম থিম ও প্লাগিন প্র্যাকটিস ফাইলস"
      },
      {
        "en": "Fiverr & Upwork WordPress Freelance Blueprint",
        "bn": "ফ্রিল্যান্সিং ব্লুপ্রিন্ট ও গিগ গাইড"
      },
      {
        "en": "Professional WordPress Developer Certificate",
        "bn": "প্রফেশনাল ওয়ার্ডপ্রেস ডেভেলপার সনদপত্র"
      }
    ],
    "reviews": [
      {
        "id": "r14",
        "name": "Ashraful Alam",
        "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "WordPress Freelancer on Fiverr",
          "bn": "ওয়ার্ডপ্রেস ফ্রিল্যান্সার"
        },
        "rating": 5,
        "comment": {
          "en": "The WooCommerce payment integration and ACF dynamic site lessons were top-notch. Started getting direct client orders within a month of completion!",
          "bn": "উকমার্স পেমেন্ট গেটওয়ে এবং এসিএফ ডাইনামিক ওয়েবসাইট বানানোর গাইডলাইন অসাধারণ ছিল।"
        },
        "date": "1 Week Ago"
      }
    ]
  },
  {
    "id": "15",
    "slug": "web-design-using-php-and-laravel",
    "title": {
      "en": "Web Design Using PHP & Laravel",
      "bn": "ওয়েব ডিজাইন ইউজিং পিএইচপি অ্যান্ড লারাভেল"
    },
    "subtitle": {
      "en": "Master HTML, CSS, Bootstrap, Raw PHP, MySQL, OOP Programming, Flutter integration basics & Laravel fundamentals",
      "bn": "এইচটিএমএল, সিএসএস, বুটস্ট্র্যাপ, র পিএইচপি, মাইএসকিউএল, ওওপি ও লারাভেল ফ্রেমওয়ার্ক শিখুন"
    },
    "category": "web",
    "categoryLabel": {
      "en": "Web Development",
      "bn": "ওয়েব ডেভেলপমেন্ট"
    },
    "badge": {
      "en": "POPULAR",
      "bn": "জনপ্রিয়"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 148,
    "enrolledCount": "135+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "20,000৳",
    "rawFee": 20000,
    "originalFee": "30,000৳",
    "duration": {
      "en": "60 hrs. (2 Months)",
      "bn": "৬০ ঘণ্টা (২ মাস)"
    },
    "classesCount": {
      "en": "20 Classes",
      "bn": "২০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/php-laravel.jpg",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Full%20Stack%20PHP%20%26%20Laravel%20Web%20Development%20Mastery%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Engr. Mahmudul Hasan",
      "designation": {
        "en": "Lead Laravel Architect & Full Stack Engineer",
        "bn": "লিড লারাভেল আর্কিটেক্ট ও ফুল স্ট্যাক ইঞ্জিনিয়ার"
      },
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "9+ years of experience building high-scale enterprise ERPs, eCommerce engines, and fintech portals with PHP & Laravel.",
        "bn": "৯+ বছরের এন্টারপ্রাইজ লারাভেল ইআরপি, ই-কমার্স ও ফিনটেক সল্যুশন তৈরির বাস্তব অভিজ্ঞতা।"
      },
      "experience": "9+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Master web design and development starting from HTML, CSS, Bootstrap to Raw PHP, MySQL databases, OOP Programming, Flutter mobile app connection concepts, and Laravel framework fundamentals.",
      "bn": "এইচটিএমএল, সিএসএস, বুটস্ট্র্যাপ থেকে শুরু করে র পিএইচপি, ওওপি, মাইএসকিউএল ডাটাবেস, ফ্লাটার ইন্টিগ্রেশন এবং লারাভেল ফ্রেমওয়ার্ক দিয়ে ফুল স্ট্যাক ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট শিখুন।"
    },
    "fullDescription": {
      "en": "Laravel is the world's most popular, elegant, and secure PHP framework powering millions of enterprise applications, SaaS platforms, and eCommerce ecosystems. In this comprehensive project-based course, you will build real-world web applications from scratch, including a Multi-Vendor E-Commerce Platform, School Management ERP, and Secure REST APIs for Mobile Apps with JWT/Sanctum authentication.",
      "bn": "লারাভেল বর্তমান বিশ্বের সর্বাধিক ব্যবহৃত ও জনপ্রিয় ব্যাকএন্ড ফ্রেমওয়ার্ক। এই কোর্সে থিওরি ছাড়াও প্র্যাকটিক্যাল প্রজেক্ট—যেমন মাল্টি-ভেন্ডর ই-কমার্স, স্কুল ম্যানেজমেন্ট ইআরপি এবং মোবাইল অ্যাপের জন্য সিকিউর রেস্ট এপিআই তৈরির মাধ্যমে আপনাকে ইন্ডাস্ট্রি-রেডি করে গড়ে তোলা হবে।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "PHP 8 & Object Oriented OOP",
          "bn": "পিএইচপি ৮ ও অ্যাডভান্সড ওওপি"
        },
        "desc": {
          "en": "Clean code principles, Design Patterns, SOLID & Composer.",
          "bn": "ক্লিন কোড, সলিড প্রিন্সিপালস ও ওওপি মেথডোলজি।"
        },
        "icon": "Code2"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Laravel 11 & Eloquent ORM",
          "bn": "লারাভেল ১১ ও ইলোকেন্ট ওআরএম"
        },
        "desc": {
          "en": "Modern MVC architecture, complex relationships, migrations & seeders.",
          "bn": "আধুনিক এমভিসি আর্কিটেকচার ও অ্যাডভান্সড ডাটাবেস কোয়েরি।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Payment Gateways & Real SaaS Projects",
          "bn": "পেমেন্ট গেটওয়ে ও লাইভ প্রজেক্ট"
        },
        "desc": {
          "en": "bKash, Nagad, Stripe integration, live VPS deployment & security.",
          "bn": "বিকাশ, নগদ ও স্ট্রাইপ পেমেন্ট গেটওয়ে ও লাইভ সার্ভার ডিপ্লয়মেন্ট।"
        },
        "icon": "Award"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master modern PHP 8.x syntax, OOP concepts, Namespaces, Interfaces, and Composer packages.",
        "bn": "পিএইচপি ৮.x, ওওপি কনসেপ্ট, নেমস্পেস, ইন্টারফেস ও কম্পোজার প্যাকেজ আয়ত্ত করা।"
      },
      {
        "en": "Build secure, scalable backend applications using the latest Laravel 11 framework.",
        "bn": "লেটেস্ট লারাভেল ১১ ফ্রেমওয়ার্ক দিয়ে স্কেলেবল ও সিকিউর ওয়েব ব্যাকএন্ড তৈরি করা।"
      },
      {
        "en": "Design normalized MySQL database architectures, write optimized Eloquent queries and migrations.",
        "bn": "মাইএসকিউএল ডাটাবেস ডিজাইন ও অপটিমাইজড ইলোকেন্ট ওআরএম কোয়েরি তৈরি।"
      },
      {
        "en": "Develop robust RESTful APIs with Sanctum/JWT authentication for web & mobile applications.",
        "bn": "স্যাঙ্কটাম বা জেডব্লিউটি অথেনটিকেশন সহ রেস্টফুল এপিআই আর্কিটেকচার তৈরি।"
      },
      {
        "en": "Integrate local & international payment gateways including bKash, Nagad, SSLCommerz & Stripe.",
        "bn": "বিকাশ, নগদ, এসএসএলকমার্স ও স্ট্রাইপ পেমেন্ট গেটওয়ে ইন্টিগ্রেশন।"
      },
      {
        "en": "Deploy Laravel applications to cPanel, Ubuntu VPS (Nginx), and configure SSL & CI/CD.",
        "bn": "সিপ্যানেল ও উবুন্টু ভিপিএস সার্ভারে লারাভেল অ্যাপ লাইভ ডিপ্লয়মেন্ট ও অপটিমাইজেশন।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: HTML, CSS & Bootstrap UI Design",
          "bn": "মডিউল ১: এইচটিএমএল, সিএসএস ও বুটস্ট্র্যাপ ইউআই ডিজাইন"
        },
        "duration": {
          "en": "6 Classes • 18 Hours",
          "bn": "৬ টি ক্লাস • ১৮ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "HTML Fundamentals & Semantic Structure",
            "bn": "এইচটিএমএল ফান্ডামেন্টালস ও স্ট্রাকচার"
          },
          {
            "en": "CSS Styling, Box Model & Responsive Layouts",
            "bn": "সিএসএস স্টাইলিং ও রেসপনসিভ লেআউটস"
          },
          {
            "en": "Bootstrap Grid System & UI Components",
            "bn": "বুটস্ট্র্যাপ গ্রিড সিস্টেম ও কম্পোনেন্টস"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Raw PHP, MySQL & OOP Programming",
          "bn": "মডিউল ২: র পিএইচপি, মাইএসকিউএল ও ওওপি প্রোগ্রামিং"
        },
        "duration": {
          "en": "8 Classes • 24 Hours",
          "bn": "৮ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "Raw PHP Syntax, Superglobals & Form Processing",
            "bn": "র পিএইচপি সিনট্যাক্স ও ফর্ম প্রসেসিং"
          },
          {
            "en": "My SQL Database Design, Relationships & Queries",
            "bn": "মাইএসকিউএল ডাটাবেস ডিজাইন ও কোয়েরি"
          },
          {
            "en": "OOP Programming in PHP (Classes, Objects, Inheritance)",
            "bn": "পিএইচপিতে ওওপি প্রোগ্রামিং"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Laravel Fundamentals, Flutter APIs & Marketplace",
          "bn": "মডিউল ৩: লারাভেল, ফ্লাটার এপিআই ও মার্কেটপ্লেস"
        },
        "duration": {
          "en": "6 Classes • 18 Hours",
          "bn": "৬ টি ক্লাস • ১৮ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Flutter & Mobile App API Integration Basics",
            "bn": "ফ্লাটার ও মোবাইল অ্যাপ এপিআই বেসিকস"
          },
          {
            "en": "Laravel Fundamentals, MVC Architecture & Blade Engine",
            "bn": "লারাভেল ফান্ডামেন্টালস, এমভিসি ও ব্লেড ইঞ্জিন"
          },
          {
            "en": "Communicative English for Developers",
            "bn": "ডেভেলপারদের জন্য কমিউনিকেটিভ ইংলিশ"
          },
          {
            "en": "Soft Skills & Marketplace Freelance Career",
            "bn": "সফট স্কিলস ও মার্কেটপ্লেস ক্যারিয়ার"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "32 Live Practical Classes with Real Industry Codebase",
        "bn": "৩২ টি লাইভ প্র্যাকটিক্যাল ক্লাস ও রিয়েল প্রজেক্ট কোডবেস"
      },
      {
        "en": "Full Source Code of 3 Production-Grade Web Projects",
        "bn": "৩ টি প্রোডাকশন-রেডি প্রজেক্টের সম্পূর্ণ সোর্স কোড"
      },
      {
        "en": "bKash, Nagad & Stripe Payment Gateway Integration Kits",
        "bn": "বিকাশ, নগদ ও স্ট্রাইপ পেমেন্ট গেটওয়ে ইন্টিগ্রেশন কিট"
      },
      {
        "en": "Industry Recognized Laravel Developer Certificate & Job Placement Support",
        "bn": "লারাভেল ডেভেলপার সার্টিফিকেট ও জব প্লেসমেন্ট সাপোর্ট"
      }
    ],
    "reviews": [
      {
        "id": "r15",
        "name": "Md. Tanvir Hasan",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "Full Stack Laravel Developer at TechValley BD",
          "bn": "লারাভেল ডেভেলপার"
        },
        "rating": 5,
        "comment": {
          "en": "The Laravel 11 course curriculum is exceptionally structured! The payment gateway, Livewire, and SaaS multi-vendor project helped me land my first software engineering job within 2 months.",
          "bn": "লারাভেল ১১ কোর্সের কারিকুলাম ও বিকাশ-নগদ পেমেন্ট গেটওয়ে প্রজেক্টের গাইডলাইন অসাধারণ ছিল। কোর্স শেষ করেই সফটওয়্যার কোম্পানিতে জব পেয়েছি।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "16",
    "slug": "comptia-a-plus-it-support-specialist",
    "title": {
      "en": "CompTIA A+ IT Support & Hardware Engineering",
      "bn": "কম্পটিয়া এ+ আইটি সাপোর্ট ও হার্ডওয়্যার ইঞ্জিনিয়ারিং"
    },
    "subtitle": {
      "en": "Master PC Hardware Assembly, BIOS/UEFI, Motherboards, OS Installation, Troubleshooting, Mobile Devices & Helpdesk Support",
      "bn": "পিসি হার্ডওয়্যার অ্যাসেম্বলি, মাদারবোর্ড, বায়োস, ওএস সেটআপ, হার্ডওয়্যার ট্রাবলশুটিং ও আইটি সাপোর্ট"
    },
    "category": "cloud",
    "categoryLabel": {
      "en": "Networking & IT",
      "bn": "নেটওয়ার্কিং ও আইটি"
    },
    "badge": {
      "en": "IT FOUNDATION",
      "bn": "আইটি ফাউন্ডেশন"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.8,
    "ratingsCount": 112,
    "enrolledCount": "95+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "8,000৳",
    "rawFee": 8000,
    "originalFee": "15,000৳",
    "duration": {
      "en": "2.5 Months",
      "bn": "২.৫ মাস"
    },
    "classesCount": {
      "en": "20 Classes",
      "bn": "২০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/comptia-a-plus.jpg",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22CompTIA%20A%2B%20IT%20Support%20%26%20Hardware%20Engineering%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Engr. Shamim Reza",
      "designation": {
        "en": "Lead IT Infrastructure & Hardware Specialist",
        "bn": "লিড আইটি ইনফ্রাস্ট্রাকচার ও হার্ডওয়্যার স্পেশালিস্ট"
      },
      "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "8+ years managing enterprise IT helpdesks, corporate workstation deployments, component-level hardware repair, and system diagnostics.",
        "bn": "৮+ বছরের এন্টারপ্রাইজ আইটি সাপোর্ট, কর্পোরেট কম্পিউটার হার্ডওয়্যার ও সিস্টেম ডায়াগনস্টিক অভিজ্ঞতা।"
      },
      "experience": "8+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "CompTIA A+ (Core 220-1101 & 220-1102) is the industry benchmark for launching an IT support and helpdesk career. Master computer components, CPU sockets, RAM, NVMe SSDs, motherboards, power supplies, BIOS/UEFI firmware, operating system deployment (Windows 11 & Linux), device drivers, printer maintenance, mobile device repair, networking fundamentals, security hardening, and remote helpdesk ticketing.",
      "bn": "আইটি সাপোর্ট টেকনিশিয়ান, সিস্টেম সাপোর্ট স্পেশালিস্ট ও হার্ডওয়্যার ইঞ্জিনিয়ার হিসেবে ক্যারিয়ার গড়ার আন্তর্জাতিক মানের কোর্স। কম্পিউটার অ্যাসেম্বলিং, ট্রাবলশুটিং, ওএস ইনস্টলেশন, প্রিন্টার রিপেয়ার ও হেল্পডেস্ক অপারেশন হাতে-কলমে শিখবেন।"
    },
    "fullDescription": {
      "en": "Every company requires competent IT support technicians to keep their workstation hardware, local networks, operating systems, and peripheral devices running smoothly. In this hands-on lab course, you will dismantle and assemble desktop PCs, diagnose blue screen errors (BSOD), replace laptop components, configure RAID arrays, and master customer service troubleshooting workflows.",
      "bn": "আন্তর্জাতিক ও দেশীয় কর্পোরেট অফিসে আইটি অফিসার বা সিস্টেম সাপোর্ট এক্সিকিউটিভ পদের জন্য প্রয়োজনীয় প্রতিটি হার্ডওয়্যার ও অপারেটিং সিস্টেম স্কিল প্র্যাকটিক্যাল ল্যাবে শেখানো হয়।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "PC Hardware & Assembly",
          "bn": "পিসি হার্ডওয়্যার ও অ্যাসেম্বলি"
        },
        "desc": {
          "en": "CPU, RAM, Motherboard, NVMe SSD, PSU & thermal paste replacement.",
          "bn": "কম্পিউটার অ্যাসেম্বলিং ও পার্টস রিপ্লেসমেন্ট।"
        },
        "icon": "Server"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Diagnostics & Troubleshooting",
          "bn": "ডায়াগনস্টিক ও ট্রাবলশুটিং"
        },
        "desc": {
          "en": "BSOD debugging, RAM/Disk health checks & POST error beeps.",
          "bn": "হার্ডওয়্যার ফল্ট ডায়াগনসিস ও উইন্ডোজ ক্র্যাশ সমাধান।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv3",
        "title": {
          "en": "OS, Network & Helpdesk Tools",
          "bn": "ওএস, নেটওয়ার্ক ও হেল্পডেস্ক"
        },
        "desc": {
          "en": "Windows/Linux deployment, TCP/IP, IP config, TeamViewer & AnyDesk.",
          "bn": "রিমোট সাপোর্ট ও কর্পোরেট হেল্পডেস্ক অপারেশন।"
        },
        "icon": "ShieldCheck"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Assemble and disassemble modern desktop computers and laptops safely using anti-static precautions.",
        "bn": "নিরাপদে কম্পিউটার ও ল্যাপটপ ডিস-অ্যাসেম্বল এবং অ্যাসেম্বল করা।"
      },
      {
        "en": "Configure BIOS/UEFI settings, Secure Boot, TPM 2.0, Boot order, and RAID storage arrays.",
        "bn": "বায়োস ও ইউইএফআই কনফিগারেশন, সিকিউর বুট ও রেইড সেটআপ।"
      },
      {
        "en": "Install, customize, and troubleshoot Windows 10/11, macOS, and Ubuntu Desktop operating systems.",
        "bn": "উইন্ডোজ এবং লিনাক্স ওএস ইনস্টলেশন ও ড্রাইভার সেটআপ।"
      },
      {
        "en": "Diagnose and resolve hardware malfunctions (power supply failures, RAM errors, overheating).",
        "bn": "পাওয়ার সাপ্লাই, র‍্যাম ও হিটিং জনিত হার্ডওয়্যার সমস্যা দূরীকরণ।"
      },
      {
        "en": "Configure wired and wireless SOHO network routers, network printers, and file sharing permissions.",
        "bn": "ওয়াইফাই রাউটার, নেটওয়ার্ক প্রিন্টার ও ফাইল শেয়ারিং সেটআপ।"
      },
      {
        "en": "Prepare for CompTIA A+ Core 1 (220-1101) and Core 2 (220-1102) certification exams.",
        "bn": "কম্পটিয়া এ+ অফিসিয়াল সার্টিফিকেশন পরীক্ষার সম্পূর্ণ প্রস্তুতি।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Computer Hardware Components & Motherboard Architecture",
          "bn": "মডিউল ১: কম্পিউটার হার্ডওয়্যার ও মাদারবোর্ড আর্কিটেকচার"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "CPUs (Intel Core / AMD Ryzen), Sockets, Architecture, Multi-core & Cooling Solutions",
            "bn": "সিপিইউ প্রসেসর, সকেট ও কুলিং সিস্টেম"
          },
          {
            "en": "RAM Types (DDR4 / DDR5), Dual-channel Setup, Timings & Form Factors",
            "bn": "র‍্যামের ধরন, ডুয়াল চ্যানেল কনফিগারেশন ও স্পিড"
          },
          {
            "en": "Motherboard Form Factors (ATX, Micro-ATX, Mini-ITX), Chipsets, PCIe Slots & Front Panel Headers",
            "bn": "মাদারবোর্ড ফর্ম ফ্যাক্টর, চিপসেট ও ফ্রন্ট প্যানেল কানেকশন"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Storage Drives, Power Supplies & Complete PC Assembly",
          "bn": "মডিউল ২: স্টোরেজ ড্রাইভ, পাওয়ার সাপ্লাই ও পিসি অ্যাসেম্বলি"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Storage Technologies: HDD vs SATA SSD vs M.2 NVMe PCIe Gen 4/5 & RAID 0/1/5/10",
            "bn": "এইচডিডি, এসএসডি, এনভিএমই ও রেইড লেভেল"
          },
          {
            "en": "Power Supply Units (PSU): Wattage Calculation, 80 Plus Efficiency & Modular Cabling",
            "bn": "পাওয়ার সাপ্লাই নির্বাচন ও ওয়াট হিসেব"
          },
          {
            "en": "Hands-on Step-by-Step Desktop PC Assembly & Thermal Paste Application",
            "bn": "হাতে-কলমে পূর্ণাঙ্গ কম্পিউটার অ্যাসেম্বলিং ল্যাব"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: BIOS/UEFI, OS Installation & Windows Administration",
          "bn": "মডিউল ৩: বায়োস/ইউইএফআই ও অপারেটিং সিস্টেম সেটআপ"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "BIOS/UEFI Configuration, Secure Boot, TPM 2.0, Virtualization (VT-x/AMD-V)",
            "bn": "ইউইএফআই বায়োস সেটিংস ও ভার্চুয়ালাইজেশন সক্ষম করা"
          },
          {
            "en": "Bootable USB Creation (Rufus/Ventoy), Clean Installation of Windows 11 & Linux",
            "bn": "বুটেবল পেনড্রাইভ ও উইন্ডোজ ফ্রেশ ইনস্টলেশন"
          },
          {
            "en": "Device Manager, Drivers Installation, Windows Update, Disk Management & Partitions",
            "bn": "ডিভাইস ম্যানেজার ও ডিস্ক পার্টিশন ম্যানেজমেন্ট"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: Hardware Diagnostics, Laptop Repair & Peripheral Devices",
          "bn": "মডিউল ৪: হার্ডওয়্যার ডায়াগনস্টিক, ল্যাপটপ রিপেয়ার ও পেরিফেরাল"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "POST Beep Codes, Multimeter Testing, Memory Diagnostics (MemTest86)",
            "bn": "পোস্ট বিপ কোড ও মাল্টিমিটার টেস্টিং"
          },
          {
            "en": "Laptop Component Replacement: Screen, Keyboard, Battery, Thermal Service & Wi-Fi Card",
            "bn": "ল্যাপটপ ডিসপ্লে, কিবোর্ড ও ব্যাটারি পরিবর্তন"
          },
          {
            "en": "Laser/Inkjet Printers: Maintenance, Toner Replacement, Network Printing & Scanner Setup",
            "bn": "প্রিন্টার ও স্ক্যানার কনফিগারেশন ও ট্রাবলশুটিং"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: Networking, Security Hardening & Remote Helpdesk Support",
          "bn": "মডিউল ৫: নেটওয়ার্কিং, সিকিউরিটি ও রিমোট হেল্পডেস্ক"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "SOHO Router Configuration, DHCP, Wi-Fi SSID, WPA3 Password & Port Forwarding",
            "bn": "ওয়াইফাই রাউটার সেটআপ ও সিকিউরিটি"
          },
          {
            "en": "Malware Removal, Windows Defender, BitLocker Drive Encryption & Data Recovery",
            "bn": "ম্যালওয়্যার ক্লিনআপ ও ডাটা রিকভারি"
          },
          {
            "en": "Remote Desktop (RDP, AnyDesk, TeamViewer), Ticketing Systems & IT Helpdesk Best Practices",
            "bn": "রিমোট হেল্পডেস্ক সাপোর্ট ও প্রফেশনাল কমিউনিকেশন"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "20 Live Hands-on Hardware Assembly & Troubleshooting Labs",
        "bn": "২০ টি প্র্যাকটিক্যাল হার্ডওয়্যার ল্যাব ক্লাস"
      },
      {
        "en": "PC Diagnostics Software Bundle & Bootable Toolkit Guides",
        "bn": "হার্ডওয়্যার ডায়াগনস্টিক সফটওয়্যার বান্ডেল"
      },
      {
        "en": "CompTIA A+ (Core 1 & Core 2) Practice Question Bank",
        "bn": "কম্পটিয়া এ+ এক্সাম প্রিপারেশন প্রশ্নব্যাংক"
      },
      {
        "en": "Certified IT Support Specialist Certificate",
        "bn": "সার্টিফাইড আইটি সাপোর্ট স্পেশালিস্ট সনদপত্র"
      }
    ],
    "reviews": [
      {
        "id": "r16",
        "name": "Arifur Rahman",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "IT Support Executive at Beximco IT",
          "bn": "আইটি সাপোর্ট এক্সিকিউটিভ"
        },
        "rating": 5,
        "comment": {
          "en": "This CompTIA A+ course gave me total confidence in hardware diagnostics, Windows repair, and BIOS setup. Got hired as an IT Executive right after completing the lab classes!",
          "bn": "হার্ডওয়্যার অ্যাসেম্বলি এবং ট্রাবলশুটিংয়ের প্র্যাকটিক্যাল ল্যাব আমাকে সরাসরি আইটি অফিসার পদে চাকরি পেতে সাহায্য করেছে।"
        },
        "date": "3 Weeks Ago"
      }
    ]
  },
  {
    "id": "17",
    "slug": "mikrotik-mtcna-mtcre-routeros-mastery",
    "title": {
      "en": "MikroTik RouterOS & ISP Network Administration (MTCNA & MTCRE)",
      "bn": "মাইক্রোটিক রাউটারওএস ও আইএসপি নেটওয়ার্ক অ্যাডমিনিস্ট্রেশন (MTCNA)"
    },
    "subtitle": {
      "en": "Master MikroTik RouterOS v7, Bandwidth Queuing (PCQ/Tree), Firewall Filters, NAT, Hotspot Billing, PPPoE Server, BGP & Dual WAN Load Balancing",
      "bn": "মাইক্রোটিক রাউটারওএস ৭, ব্যান্ডউইথ কন্ট্রোল, কিউ ট্রি, ফায়ারওয়াল, হটস্পট, পিপিপিওই সার্ভার, বিজিপি ও লোড ব্যালেন্সিং"
    },
    "category": "cloud",
    "categoryLabel": {
      "en": "Networking & IT",
      "bn": "নেটওয়ার্কিং ও আইটি"
    },
    "badge": {
      "en": "ISP SPECIALIST",
      "bn": "আইএসপি স্পেশালিস্ট"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 138,
    "enrolledCount": "125+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "10,000৳",
    "rawFee": 10000,
    "originalFee": "18,000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "24 Classes",
      "bn": "২৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/Cloud-Devops.jpg",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22MikroTik%20RouterOS%20%26%20ISP%20Network%20Administration%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Engr. Zahid Hasan (MTCNA, MTCRE, MTCWE)",
      "designation": {
        "en": "Senior MikroTik Certified Network Consultant",
        "bn": "সিনিয়র মাইক্রোটিক সার্টিফাইড নেটওয়ার্ক কনসালট্যান্ট"
      },
      "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "12+ years deploying enterprise ISP architectures, Cloud Core Routers (CCR), BGP peering with IIGs, and high-density bandwidth traffic shaping.",
        "bn": "১২+ বছরের আইএসপি কোর নেটওয়ার্ক, বিজিপি রাউটিং ও মাইক্রোটিক ব্যান্ডউইথ ম্যানেজমেন্ট অভিজ্ঞতা।"
      },
      "experience": "12+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Master MikroTik RouterOS v7 from beginner to advanced ISP levels. Learn Winbox management, IPv4/IPv6 routing, DHCP server/client, Firewall Filter & NAT tables, Simple Queues, Queue Trees with PCQ bandwidth division, PPPoE server for broadband clients, Hotspot authentication with User Manager billing, Dual/Triple WAN PCC Load Balancing, Failover, VPN tunnels (WireGuard, L2TP/IPsec), and BGP dynamic routing.",
      "bn": "বাংলাদেশ ও আন্তর্জাতিক আইএসপিতে বহুল ব্যবহৃত মাইক্রোটিক রাউটারওএস-এর সম্পূর্ণ কোর্স। ব্যান্ডউইথ শেয়ারিং, কিউ ট্রি, পিসিকিউ, ফায়ারওয়াল, ব্রডব্যান্ড পিপিপিওই সার্ভার, হটস্পট বিলিং ও পিইসিসি লোড ব্যালেন্সিং শিখবেন।"
    },
    "fullDescription": {
      "en": "MikroTik is the backbone of internet service providers (ISPs), corporate head offices, hotels, hospitals, and universities across South Asia. In this course, you will configure real MikroTik hardware (hAP, RB series, CCR), write custom RouterOS scripts, secure networks from DDoS attacks, and prepare for MTCNA and MTCRE certification exams.",
      "bn": "আইএসপি এবং কর্পোরেট প্রতিষ্ঠানে নেটওয়ার্ক ইঞ্জিনিয়ার ও সিস্টেম অ্যাডমিন হিসেবে যোগদানের জন্য প্রয়োজনীয় প্রতিটি প্র্যাকটিক্যাল স্কিল এই কোর্সে অন্তর্ভুক্ত করা হয়েছে।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Bandwidth & Queue Trees (PCQ)",
          "bn": "ব্যান্ডউইথ ও কিউ ট্রি"
        },
        "desc": {
          "en": "Simple Queues, Tree Queues, Mangle marking, PCQ equal bandwidth & burst.",
          "bn": "পিসিকিউ ব্যান্ডউইথ কন্ট্রোল ও স্পিড লিমিটিং।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv2",
        "title": {
          "en": "PPPoE Server & Hotspot Billing",
          "bn": "পিপিপিওই ও হটস্পট বিলিং"
        },
        "desc": {
          "en": "ISP client bandwidth profiles, User Manager radius & voucher printing.",
          "bn": "আইএসপি ব্রডব্যান্ড প্যাকেজ ও হটস্পট ভাউচার সিস্টেম।"
        },
        "icon": "Server"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Firewall, PCC Load Balancing & BGP",
          "bn": "ফায়ারওয়াল ও লোড ব্যালেন্সিং"
        },
        "desc": {
          "en": "Multi-WAN PCC load balance, IPsec/WireGuard VPN & BGP peering.",
          "bn": "ডুয়াল ওয়ান লোড ব্যালেন্সিং ও ফায়ারওয়াল সিকিউরিটি।"
        },
        "icon": "ShieldCheck"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Configure MikroTik RouterOS v7 using Winbox, SSH, and Terminal CLI with proper backup workflows.",
        "bn": "উইনবক্স ও সিএলআই দিয়ে মাইক্রোটিক কনফিগারেশন ও ব্যাকআপ নেওয়া।"
      },
      {
        "en": "Build advanced Firewall rules to block torrents, YouTube during office hours, and prevent SYN attacks.",
        "bn": "ফায়ারওয়াল রুলস দিয়ে সাইট ব্লক ও সাইবার অ্যাটাক প্রতিরোধ।"
      },
      {
        "en": "Implement professional Bandwidth Shaping using Packet Marks, Queue Trees, and PCQ algorithms.",
        "bn": "প্যাকেট মার্কিং ও কিউ ট্রি দিয়ে ব্যান্ডউইথ অপটিমাইজেশন।"
      },
      {
        "en": "Deploy an ISP PPPoE Server with dynamic profile limits, IP pools, and secret database.",
        "bn": "আইএসপি ক্লায়েন্টদের জন্য পিপিপিওই সার্ভার সেটআপ।"
      },
      {
        "en": "Configure a captive portal Hotspot server with customized login page and User Manager billing.",
        "bn": "কাস্টম লগইন পেজ সহ ওয়াইফাই হটস্পট ভাউচার সিস্টেম তৈরি।"
      },
      {
        "en": "Set up Multi-WAN PCC (Per Connection Classifier) Load Balancing and automatic gateway failover.",
        "bn": "একাধিক ইন্টারনেটের পিইসিসি লোড ব্যালেন্সিং ও অটো ফেইলওভার।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: MikroTik RouterOS Architecture & Core Configuration",
          "bn": "মডিউল ১: মাইক্রোটিক আর্কিটেকচার ও বেসিক কনফিগারেশন"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "MikroTik Hardware Overview (hAP, RB750Gr3, Cloud Core Router CCR), RouterOS v7 Installation",
            "bn": "মাইক্রোটিক হার্ডওয়্যার পরিচিতি ও রাউটারওএস ইন্সটলেশন"
          },
          {
            "en": "Winbox Interface, MAC vs IP Connection, Identity, User Accounts & Safe Mode",
            "bn": "উইনবক্স নেভিগেশন ও ইউজার পারমিশন সিকিউরিটি"
          },
          {
            "en": "IP Addressing, Interface Bridging, Default Gateway, DNS Cache & NTP Client",
            "bn": "আইপি এড্রেসিং, ইন্টারফেস ব্রিজ ও ডিএনএস ক্যাশিং"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: DHCP Server, NAT & Firewall Security Filtering",
          "bn": "মডিউল ২: ডিএইচসিপি সার্ভার, ন্যাট ও ফায়ারওয়াল রুলস"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "DHCP Server Setup, IP Pool, Static IP Leases (MAC Binding) & DHCP Snooping",
            "bn": "ডিএইচসিপি সার্ভার ও ম্যাক বাইন্ডিং"
          },
          {
            "en": "Source NAT (Masquerade) vs Destination NAT (Port Forwarding to Web/CCTV Servers)",
            "bn": "সোর্স ন্যাট ও সিসিটিভি/সার্ভারের জন্য পোর্ট ফরোয়ার্ডিং"
          },
          {
            "en": "Firewall Filter Rules: Input, Forward, Output Chains, Connection Tracking & Port Blocking",
            "bn": "ফায়ারওয়াল ফিল্টার রুলস ও ক্ষতিকর পোর্ট ব্লক"
          },
          {
            "en": "Layer 7 Protocol Filtering, Address Lists for IP Blocking & brute-force defense",
            "bn": "লেয়ার ৭ ফিল্টারিং ও ব্রুট-ফোর্স অ্যাটাক ব্লকিং"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Bandwidth Management, Simple Queues & Queue Trees (PCQ)",
          "bn": "মডিউল ৩: ব্যান্ডউইথ কন্ট্রোল, সিম্পল কিউ ও কিউ ট্রি"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Simple Queues: Target IP, Max Limit, Limit At, Burst Threshold & Time-based limits",
            "bn": "সিম্পল কিউ, বার্স্ট রেট ও সময়ভিত্তিক স্পিড লিমিট"
          },
          {
            "en": "Firewall Mangle: Connection Mark, Packet Mark & Routing Mark",
            "bn": "ম্যাঙ্গেল রুলস দিয়ে কানেকশন ও প্যাকেট মার্কিং"
          },
          {
            "en": "Queue Trees with PCQ (Per Connection Queue) for Equal Dynamic Bandwidth Sharing",
            "bn": "পিসিকিউ দিয়ে সব ইউজারের মাঝে সমান স্পিড বন্টন"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: ISP Broadband PPPoE Server & Hotspot Billing System",
          "bn": "মডিউল ৪: পিপিপিওই সার্ভার ও হটস্পট বিলিং সিস্টেম"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "PPPoE Server Configuration, Profiles, IP Pools, Secrets & Client Dial-up Setup",
            "bn": "আইএসপি ব্রডব্যান্ড পিপিপিওই সার্ভার কনফিগারেশন"
          },
          {
            "en": "Captive Portal Hotspot Server Setup, Walled Garden & Custom HTML Login Page",
            "bn": "হটস্পট গেটওয়ে ও কাস্টমাইজড লগইন পেজ"
          },
          {
            "en": "MikroTik User Manager (RADIUS): Generating Time & Data Vouchers for Clients",
            "bn": "ইউজার ম্যানেজার দিয়ে ওয়াইফাই ভাউচার প্রিন্টিং"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: Multi-WAN PCC Load Balancing, VPNs & Routing Protocols",
          "bn": "মডিউল ৫: পিইসিসি লোড ব্যালেন্সিং, ভিপিএন ও বিজিপি"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Dual/Triple WAN Load Balancing using PCC (Per Connection Classifier) & Failover",
            "bn": "মাল্টি-ওয়ান পিইসিসি লোড ব্যালেন্সিং ও অটো ফেইলওভার"
          },
          {
            "en": "VPN Tunnels: WireGuard, L2TP/IPsec Client-to-Site & Site-to-Site Branch Interconnection",
            "bn": "ওয়্যারগার্ড ও আইপিসেক ভিপিএন টানেলিং"
          },
          {
            "en": "Dynamic Routing with OSPF and BGP Peering with Upstream IIG/IXPs",
            "bn": "ওএসপিএফ ও বিজিপি রাউটিং কনসেপ্টস"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "24 Live Hands-on MikroTik Lab Sessions with Real RouterOS Hardware",
        "bn": "২৪ টি লাইভ প্র্যাকটিক্যাল মাইক্রোটিক ল্যাব ক্লাস"
      },
      {
        "en": "Ready-made ISP MikroTik Scripts (Firewall, PCQ, Load Balancing)",
        "bn": "আইএসপি রেডিমেড কনফিগারেশন স্ক্রিপ্টস"
      },
      {
        "en": "MikroTik MTCNA Official Exam Preparation Dumps & Labs",
        "bn": "মাইক্রোটিক এমটিসিএনএ এক্সাম প্রিপারেশন ফাইলস"
      },
      {
        "en": "Verified MikroTik Network Specialist Certificate",
        "bn": "সার্টিফাইড মাইক্রোটিক স্পেশালিস্ট সনদপত্র"
      }
    ],
    "reviews": [
      {
        "id": "r17",
        "name": "Tanvir Ahmed",
        "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "NOC Engineer at AmberIT",
          "bn": "এনওসি ইঞ্জিনিয়ার"
        },
        "rating": 5,
        "comment": {
          "en": "The Queue Tree PCQ shaping and PCC Dual-WAN load balancing modules were pure gold. Easily managed our local ISP client network right after this course.",
          "bn": "মাইক্রোটিকের কিউ ট্রি এবং লোড ব্যালেন্সিং ল্যাব অসাধারণ ছিল। আইএসপিতে কাজ করার পূর্ণ আত্মবিশ্বাস পেয়েছি।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "18",
    "slug": "linux-system-administration-rhcsa",
    "title": {
      "en": "Linux System Administration (RHCSA & Ubuntu Enterprise)",
      "bn": "লিনাক্স সিস্টেম অ্যাডমিনিস্ট্রেশন (RHCSA ও উবুন্টু)"
    },
    "subtitle": {
      "en": "Master Linux CLI, Bash Scripting, User & Group Security, LVM Storage, Systemd, SSH, Nginx/Apache Web Server, FirewallD & Cron Jobs",
      "bn": "লিনাক্স সিএলআই, ব্যাশ স্ক্রিপ্টিং, এলভিএম স্টোরেজ, সিস্টেমডি, এসএসএইচ, এনজিনিক্স ওয়েব সার্ভার ও ফায়ারওয়াল সিকিউরিটি"
    },
    "category": "cloud",
    "categoryLabel": {
      "en": "Networking & IT",
      "bn": "নেটওয়ার্কিং ও আইটি"
    },
    "badge": {
      "en": "SYSADMIN & DEVOPS",
      "bn": "সিসঅ্যাডমিন ও ক্লাউড"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 154,
    "enrolledCount": "140+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "10,000৳",
    "rawFee": 10000,
    "originalFee": "18,000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "24 Classes",
      "bn": "২৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/linux system admin.jpg",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Linux%20System%20Administration%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Engr. Moniruzzaman (RHCE, RHCSA)",
      "designation": {
        "en": "Lead DevOps Architect & Senior Linux Administrator",
        "bn": "লিড ডেভঅপ্স আর্কিটেক্ট ও সিনিয়র লিনাক্স অ্যাডমিনিস্ট্রেটর"
      },
      "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "11+ years managing mission-critical Red Hat Enterprise Linux (RHEL), CentOS, and Ubuntu server farms for telecommunication and cloud data centers.",
        "bn": "১১+ বছরের রেডহ্যাট লিনাক্স, ক্লাউড সার্ভার আর্কিটেকচার ও ডেভঅপ্স সিস্টেম অ্যাডমিনিস্ট্রেশন অভিজ্ঞতা।"
      },
      "experience": "11+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Red Hat Enterprise Linux (RHEL) and Ubuntu Server power over 90% of the world's public clouds, supercomputers, and corporate servers. In this hands-on course aligned with Red Hat RHCSA (EX200) certification, you will master the Linux command line (CLI), filesystem hierarchy (FHS), user/group management, permissions & ACLs, LVM dynamic storage, Systemd service daemon management, SSH hardening, Nginx/Apache web servers, automated Bash shell scripting, and SELinux/FirewallD security.",
      "bn": "বিশ্বের অধিকাংশ ক্লাউড এবং এন্টারপ্রাইজ সার্ভার লিনাক্সে চালিত। এই কোর্সে রেডহ্যাট (RHCSA) কারিকুলাম অনুযায়ী লিনাক্স সিএলআই, এলভিএম স্টোরেজ, সিস্টেমডি সার্ভিস, এনজিনিক্স/অ্যাপাচি ওয়েব সার্ভার, ব্যাশ স্ক্রিপ্টিং ও সিকিউরিটি শিখবেন।"
    },
    "fullDescription": {
      "en": "Whether you want to become a Linux System Administrator, DevOps Engineer, Cloud Architect, or Cybersecurity Specialist, mastering Linux is mandatory. In this course, you will set up virtualization environments with KVM/VirtualBox, manage server network configurations, configure automated cron backups, and troubleshoot real production server outages.",
      "bn": "লিনাক্স সিস্টেম অ্যাডমিন এবং ক্লাউড/ডেভঅপ্স ইঞ্জিনিয়ারিং ক্যারিয়ারের জন্য সবচেয়ে গুরুত্বপূর্ণ ও বেসিক থেকে অ্যাডভান্সড ল্যাব কোর্স।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Linux CLI & Shell Scripting",
          "bn": "লিনাক্স সিএলআই ও ব্যাশ স্ক্রিপ্টিং"
        },
        "desc": {
          "en": "Vim, pipes, grep/sed/awk, bash automation & cron job scheduling.",
          "bn": "কমান্ড লাইন প্রফিসিয়েন্সি ও অটোমেশন স্ক্রিপ্ট তৈরি।"
        },
        "icon": "Code2"
      },
      {
        "id": "cv2",
        "title": {
          "en": "LVM Storage & Systemd",
          "bn": "এলভিএম স্টোরেজ ও সিস্টেমডি"
        },
        "desc": {
          "en": "Logical Volume Manager, resizing partitions, systemctl services & logs.",
          "bn": "ডায়নামিক স্টোরেজ ম্যানেজমেন্ট ও সার্ভিস কনট্রোল।"
        },
        "icon": "Server"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Server Hardening & FirewallD",
          "bn": "সার্ভার হার্ডেনিং ও ফায়ারওয়াল"
        },
        "desc": {
          "en": "SSH key-based auth, SELinux policies, FirewallD zones & SSL certs.",
          "bn": "এসএসএইচ সিকিউরিটি ও ফায়ারওয়াল কনফিগারেশন।"
        },
        "icon": "ShieldCheck"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Execute complex Linux commands, manage text streams with pipes, grep, sed, and awk.",
        "bn": "লিনাক্স কমান্ড লাইন, টেক্সট প্রসেসিং ও পাইপিংয়ে দক্ষতা অর্জন।"
      },
      {
        "en": "Manage Linux users, groups, standard permissions (chmod/chown), SUID/SGID, and POSIX ACLs.",
        "bn": "ইউজার-গ্রুপ ও স্পেশাল পারমিশন (ACL) ম্যানেজমেন্ট।"
      },
      {
        "en": "Configure Logical Volume Management (LVM): Physical Volumes, Volume Groups, and live LV resizing.",
        "bn": "এলভিএম স্টোরেজ পার্টিশন তৈরি ও লাইভ স্পেস বাড়ানো।"
      },
      {
        "en": "Manage background system services using Systemd (systemctl), targets, and analyze journalctl logs.",
        "bn": "সিস্টেমডি দিয়ে ব্যাকগ্রাউন্ড সার্ভিস ও লগ বিশ্লেষণ।"
      },
      {
        "en": "Deploy and secure production Nginx and Apache web servers with custom vhosts and SSL certificates.",
        "bn": "এনজিনিক্স ও অ্যাপাচি ওয়েব সার্ভার হোস্ট ও এসএসএল সার্টিফিকেট সেটআপ।"
      },
      {
        "en": "Write production Bash shell scripts to automate server backups, log rotation, and system monitoring.",
        "bn": "অটোমেটেড ব্যাকআপ ও সার্ভার মনিটরিংয়ের জন্য ব্যাশ স্ক্রিপ্ট তৈরি।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Linux Operating System Architecture & Terminal Mastery",
          "bn": "মডিউল ১: লিনাক্স আর্কিটেকচার ও টার্মিনাল কমান্ডস"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Linux Kernel, Distributions (RHEL, Rocky Linux, Ubuntu Server) & Filesystem Hierarchy (FHS)",
            "bn": "লিনাক্স কার্নেল ও ফাইলসিস্টেম স্ট্রাকচার"
          },
          {
            "en": "Essential Commands: ls, cd, cp, mv, rm, mkdir, find, locate, tar, gzip & rsync",
            "bn": "প্রয়োজনীয় লিনাক্স কমান্ড ও ফাইল অপারেশনস"
          },
          {
            "en": "Vim & Nano Text Editors, Input/Output Redirection, Standard Error & Pipes",
            "bn": "ভিম টেক্সট এডিটর ও আই/ও রিডাইরেকশন"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: User Security, Permissions & Advanced File Control",
          "bn": "মডিউল ২: ইউজার সিকিউরিটি ও ফাইল পারমিশনস"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "User and Group Creation (useradd, groupadd, usermod, /etc/passwd, /etc/shadow)",
            "bn": "ইউজার ও গ্রুপ অ্যাকাউন্ট ম্যানেজমেন্ট"
          },
          {
            "en": "Standard Permissions (Read/Write/Execute, chmod, chown, umask calculation)",
            "bn": "স্ট্যান্ডার্ড ফাইল ও ডিরেক্টরি পারমিশনস"
          },
          {
            "en": "Special Permissions: SUID, SGID, Sticky Bit & POSIX Access Control Lists (setfacl, getfacl)",
            "bn": "স্পেশাল পারমিশনস ও এক্সেস কন্ট্রোল লিস্টস (ACL)"
          },
          {
            "en": "Sudoers Configuration (/etc/sudoers, visudo) for Delegated Root Privileges",
            "bn": "সুডোয়ার্স ফাইল কনফিগারেশন ও রুট প্রিভিলেজ"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Disk Partitioning, File Systems & LVM Storage Management",
          "bn": "মডিউল ৩: ডিস্ক পার্টিশন ও এলভিএম স্টোরেজ"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Disk Partitioning with fdisk and gdisk (MBR vs GPT), mkfs.xfs, mkfs.ext4",
            "bn": "ডিস্ক পার্টিশন ও ফাইলসিস্টেম ফরম্যাটিং"
          },
          {
            "en": "Mounting Filesystems, UUID Identification, Persistent Mounting in /etc/fstab",
            "bn": "পারসিস্টেন্ট ড্রাইভ মাউন্টিং ও fstab সেটআপ"
          },
          {
            "en": "Logical Volume Manager (LVM): Physical Volumes (PV), Volume Groups (VG), Logical Volumes (LV)",
            "bn": "এলভিএম স্টোরেজ পুল তৈরি ও পার্টিশন কনফিগ"
          },
          {
            "en": "Live Online Expansion of Logical Volumes and File System Resizing without Downtime",
            "bn": "সার্ভার না থামিয়ে লাইভ ড্রাইভের স্পেস বৃদ্ধি"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: Systemd Service Management, Networking & SSH Hardening",
          "bn": "মডিউল ৪: সিস্টেমডি, নেটওয়ার্কিং ও সিকিউর এসএসএইচ"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Systemd Service Daemon: systemctl (start, stop, enable, disable, status, mask)",
            "bn": "সিস্টেমডি দিয়ে ব্যাকগ্রাউন্ড সার্ভিস কন্ট্রোল"
          },
          {
            "en": "System Logs Inspection with journalctl, rsyslog & Logrotate Configuration",
            "bn": "লগ পর্যবেক্ষণ ও অটো-লগ রোটেট"
          },
          {
            "en": "Network Configuration (nmcli, nmtui, ip, route, resolving DNS)",
            "bn": "এনএমসিএলআই দিয়ে স্ট্যাটিক আইপি ও গেটওয়ে সেটআপ"
          },
          {
            "en": "OpenSSH Server: Key-based Authentication, Disabling Root Login & Changing Default Ports",
            "bn": "এসএসএইচ কি-বেসড অথেনটিকেশন ও সিকিউরিটি হার্ডেনিং"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: Web Servers (Nginx/Apache), Bash Scripting & FirewallD",
          "bn": "মডিউল ৫: ওয়েব সার্ভার, ব্যাশ স্ক্রিপ্টিং ও ফায়ারওয়াল"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Nginx & Apache Web Server Setup, Virtual Hosts & Free Let's Encrypt SSL/TLS",
            "bn": "এনজিনিক্স ওয়েব সার্ভার ও ফ্রি এসএসএল সেটআপ"
          },
          {
            "en": "FirewallD Security: Zones, Rich Rules, Port Whitelisting & SELinux Contexts",
            "bn": "ফায়ারওয়ালডি ও এসইলিনাক্স সিকিউরিটি মোড"
          },
          {
            "en": "Writing Production Bash Scripts: Variables, Loops, Conditionals, Exit Codes & Automated Backups",
            "bn": "অটোমেটেড ব্যাকআপ স্ক্রিপ্ট ও ক্রন জব শিডিউলিং"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "24 Live Hands-on Linux Terminal Lab Classes",
        "bn": "২৪ টি লাইভ প্র্যাকটিক্যাল লিনাক্স ল্যাব ক্লাস"
      },
      {
        "en": "Complete RHCSA (EX200) Exam Preparation Labs & Guide",
        "bn": "রেডহ্যাট সার্টিফাইড এক্সাম ল্যাব ফাইলস"
      },
      {
        "en": "Production Bash Automation & Backup Scripts Bundle",
        "bn": "রেডিমেড ব্যাশ অটোমেশন স্ক্রিপ্টস"
      },
      {
        "en": "Verified Linux System Administrator Certificate",
        "bn": "সার্টিফাইড লিনাক্স অ্যাডমিনিস্ট্রেটর সনদপত্র"
      }
    ],
    "reviews": [
      {
        "id": "r18",
        "name": "Shakil Ahmed",
        "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "Junior DevOps Engineer at Dynamic Cloud",
          "bn": "ডেভঅপ্স ইঞ্জিনিয়ার"
        },
        "rating": 5,
        "comment": {
          "en": "The LVM storage expansion and Nginx web server deployment modules gave me real enterprise skills. Passed my RHCSA exam on first try!",
          "bn": "লিনাক্স এলভিএম ও সিস্টেমডি সার্ভিস কনফিগারেশনের ক্লাসগুলো অসাধারণ ছিল। প্রথম চেষ্টাতেই আরএইচসিএসএ পাস করেছি।"
        },
        "date": "1 Month Ago"
      }
    ]
  },
  {
    "id": "19",
    "slug": "windows-server-active-directory-mcsa",
    "title": {
      "en": "Windows Server 2022/2025 & Active Directory Administration",
      "bn": "উইন্ডোজ সার্ভার ও অ্যাক্টিভ ডিরেক্টরি অ্যাডমিনিস্ট্রেশন"
    },
    "subtitle": {
      "en": "Master Active Directory Domain Services (AD DS), Group Policy Objects (GPO), DNS, DHCP, Hyper-V Virtualization, Storage Spaces & IIS Web Server",
      "bn": "অ্যাক্টিভ ডিরেক্টরি ডোমেন সার্ভিসেস (AD DS), গ্রুপ পলিসি (GPO), ডিএনএস, ডিএইচসিপি, হাইপার-ভি ভার্চুয়ালাইজেশন ও সার্ভার সিকিউরিটি"
    },
    "category": "cloud",
    "categoryLabel": {
      "en": "Networking & IT",
      "bn": "নেটওয়ার্কিং ও আইটি"
    },
    "badge": {
      "en": "ENTERPRISE IT",
      "bn": "এন্টারপ্রাইজ সার্ভার"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.8,
    "ratingsCount": 120,
    "enrolledCount": "110+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "10,000৳",
    "rawFee": 10000,
    "originalFee": "18,000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "24 Classes",
      "bn": "২৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/postgresql.jpg",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Windows%20Server%20Active%20Directory%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Engr. Zahid Hasan (MCSE, MCSA)",
      "designation": {
        "en": "Enterprise Microsoft Infrastructure Consultant",
        "bn": "এন্টারপ্রাইজ মাইক্রোসফট ইনফ্রাস্ট্রাকচার কনসালট্যান্ট"
      },
      "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "12+ years managing corporate Microsoft Active Directory forests, multi-site domain replication, Hyper-V clustering, and Azure Hybrid AD sync.",
        "bn": "১২+ বছরের অ্যাক্টিভ ডিরেক্টরি, হাইপার-ভি ক্লাস্টারিং ও এন্টারপ্রাইজ উইন্ডোজ সার্ভার আর্কিটেকচার অভিজ্ঞতা।"
      },
      "experience": "12+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Master enterprise Windows Server 2022 and 2025 administration. Learn how to deploy and manage Active Directory Domain Services (AD DS), create organizational units (OUs), configure centralized Group Policy Objects (GPOs), set up enterprise DNS & DHCP servers, manage NTFS permissions and File Server Resource Manager (FSRM), deploy Hyper-V virtual machines, host websites on IIS, and perform bare-metal backup and disaster recovery.",
      "bn": "কর্পোরেট অফিসে কেন্দ্রীয়ভাবে শত শত কম্পিউটার ও ব্যবহারকারী নিয়ন্ত্রণের জন্য মাইক্রোসফট উইন্ডোজ সার্ভার ও অ্যাক্টিভ ডিরেক্টরি কোর্সের বিকল্প নেই। গ্রুপ পলিসি, ডিএনএস, ডিএইচসিপি, হাইপার-ভি ভার্চুয়ালাইজেশন ও সার্ভার ব্যাকআপ বাস্তব ল্যাবে শিখবেন।"
    },
    "fullDescription": {
      "en": "Every bank, multinational corporation, telecom, and enterprise relies on Microsoft Active Directory to secure user logins, restrict USB drives, deploy software silently, and centralize permissions. In this course, you will build a complete enterprise domain network from scratch in VMware/Hyper-V virtual lab environments.",
      "bn": "ব্যাংক, করপোরেট অফিস এবং বহুজাতিক সংস্থায় সিস্টেম অ্যাডমিনিস্ট্রেটর হিসেবে দায়িত্ব পালনের জন্য অত্যন্ত প্রয়োজনীয় প্রফেশনাল কারিকুলাম।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Active Directory & Domain Services",
          "bn": "অ্যাক্টিভ ডিরেক্টরি ও ডোমেন"
        },
        "desc": {
          "en": "Domain Controllers, Forest/Tree trust, Users, Groups & OUs.",
          "bn": "সেন্ট্রাল ডোমেন কন্ট্রোলার ও ইউজার ম্যানেজমেন্ট।"
        },
        "icon": "Server"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Group Policy Objects (GPO)",
          "bn": "গ্রুপ পলিসি অবজেক্টস (GPO)"
        },
        "desc": {
          "en": "USB drive blocking, software deployment, password policies & desktop lock.",
          "bn": "সেন্ট্রাল সিকিউরিটি পলিসি ও সফটওয়্যার ডিপ্লয়।"
        },
        "icon": "ShieldCheck"
      },
      {
        "id": "cv3",
        "title": {
          "en": "DNS, DHCP & Hyper-V",
          "bn": "ডিএনএস, ডিএইচসিপি ও হাইপার-ভি"
        },
        "desc": {
          "en": "Forward/Reverse lookup zones, DHCP failover, Hyper-V virtual machines.",
          "bn": "কোর ইনফ্রাস্ট্রাকচার ও ভার্চুয়ালাইজেশন ল্যাব।"
        },
        "icon": "Zap"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Install and promote Windows Server 2022/2025 to a Primary Domain Controller (DC) and Additional DC.",
        "bn": "প্রাইমারি ও ব্যাকআপ ডোমেন কন্ট্রোলার সেটআপ ও প্রমোট করা।"
      },
      {
        "en": "Create, manage, and automate Active Directory Users, Security Groups, and Organizational Units (OUs).",
        "bn": "অ্যাক্টিভ ডিরেক্টরি ইউজার ও অর্গানাইজেশনাল ইউনিট পরিচালনা।"
      },
      {
        "en": "Enforce strict corporate Group Policy Objects (GPO) for password complexity, USB blocking, and mapped drives.",
        "bn": "গ্রুপ পলিসি দিয়ে পেনড্রাইভ ব্লক ও সেন্ট্রাল ড্রাইভ ম্যাপিং।"
      },
      {
        "en": "Configure enterprise DNS (Forward/Reverse Zones, Records) and DHCP Server with Split-Scope Failover.",
        "bn": "এন্টারপ্রাইজ ডিএনএস জোন ও ডিএইচসিপি ফেইলওভার কনফিগারেশন।"
      },
      {
        "en": "Manage File and Storage Services, NTFS Access Rights, Quotas, and File Screening with FSRM.",
        "bn": "ফাইল সার্ভার কোটা ম্যানেজমেন্ট ও সিকিউর ফাইল শেয়ারিং।"
      },
      {
        "en": "Deploy and manage Hyper-V Virtual Machines, Virtual Switches, and configure Windows Server Backup.",
        "bn": "হাইপার-ভি ভার্চুয়াল মেশিন তৈরি ও সার্ভার ফুল ব্যাকআপ।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Windows Server Installation & Active Directory Deployment",
          "bn": "মডিউল ১: উইন্ডোজ সার্ভার সেটআপ ও অ্যাক্টিভ ডিরেক্টরি"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Windows Server 2022/2025 Editions (Standard vs Datacenter, Desktop Experience vs Server Core)",
            "bn": "উইন্ডোজ সার্ভার এডিশন পরিচিতি ও ইন্সটলেশন"
          },
          {
            "en": "Server Manager Dashboard, Initial Configuration, Renaming & Static IP Setup",
            "bn": "সার্ভার ম্যানেজার ও বেসিক আইপি কনফিগারেশন"
          },
          {
            "en": "Installing Active Directory Domain Services (AD DS) & Promoting to Root Domain Controller",
            "bn": "অ্যাক্টিভ ডিরেক্টরি ইন্সটলেশন ও রুট ডোমেন তৈরি"
          },
          {
            "en": "Joining Windows 10/11 Workstations to the Domain Network",
            "bn": "ক্লায়েন্ট পিসি ডোমেনে যুক্ত করার নিয়ম"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: User, Group, OU Management & Additional Domain Controller",
          "bn": "মডিউল ২: ইউজার-গ্রুপ ম্যানেজমেন্ট ও ব্যাকআপ ডোমেন কন্ট্রোলার"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Creating and Managing Users, Security Groups (Global, Universal, Domain Local) & OUs",
            "bn": "ইউজার অ্যাকাউন্ট, সিকিউরিটি গ্রুপ ও ওইউ তৈরি"
          },
          {
            "en": "Deploying an Additional Domain Controller (ADC) for High Availability and Replication",
            "bn": "অ্যাডিশনাল ডোমেন কন্ট্রোলার ও ডাটা রেপ্লিকেশন"
          },
          {
            "en": "FSMO Roles (Schema Master, Domain Naming, RID, PDC Emulator, Infrastructure Master)",
            "bn": "এফএসএমও রোলস স্থানান্তর ও ম্যানেজমেন্ট"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Group Policy Objects (GPO) & Centralized Enterprise Control",
          "bn": "মডিউল ৩: গ্রুপ পলিসি অবজেক্টস (GPO) ও সেন্ট্রাল কন্ট্রোল"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Group Policy Architecture, Order of Precedence (LSDOU), Inheritance & Enforce",
            "bn": "গ্রুপ পলিসি আর্কিটেকচার ও ইনহেরিটেন্স রুলস"
          },
          {
            "en": "Configuring Password Complexity Policies, Account Lockout & Screen Timeout",
            "bn": "পাসওয়ার্ড সিকিউরিটি ও অটোমেটিক স্ক্রিন লক পলিসি"
          },
          {
            "en": "Blocking USB Storage Drives (Removable Storage Access) across Corporate Desktops",
            "bn": "পেনড্রাইভ ও এক্সটার্নাল স্টোরেজ ব্লক করার পলিসি"
          },
          {
            "en": "Centralized Software Deployment (.MSI), Wallpaper Lockdown & Drive Mapping",
            "bn": "সেন্ট্রাল সফটওয়্যার ইনস্টলেশন ও ড্রাইভ ম্যাপিং"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: Core Network Services: DNS, DHCP & IPAM",
          "bn": "মডিউল ৪: ডিএনএস, ডিএইচসিপি ও নেটওয়ার্ক সার্ভিসেস"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Active Directory Integrated DNS, Forward and Reverse Lookup Zones, DNS Records (A, CNAME, MX, PTR)",
            "bn": "ডিএনএস জোন ও বিভিন্ন রেকর্ডস কনফিগারেশন"
          },
          {
            "en": "DHCP Server Scope Setup, Exclusions, Reservations (MAC-based IP) & DHCP Failover",
            "bn": "ডিএইচসিপি স্কোপ, রিজার্ভেশন ও ফেইলওভার সেটআপ"
          },
          {
            "en": "Configuring Remote Desktop Services (RDP) & Remote Server Administration Tools (RSAT)",
            "bn": "আরডিপি ও রিমোট সার্ভার অ্যাডমিন টুলস (RSAT)"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: Storage Spaces, FSRM, Hyper-V & Disaster Recovery",
          "bn": "মডিউল ৫: ফাইল সার্ভার, হাইপার-ভি ও সার্ভার ব্যাকআপ"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "File Server Resource Manager (FSRM): Hard/Soft Quotas, File Screening (Blocking .mp3/.exe)",
            "bn": "ফাইল সার্ভার কোটা ও নির্দিষ্ট ফাইল ব্লক করা"
          },
          {
            "en": "Hyper-V Role: Creating Virtual Machines, Virtual Switches (External, Internal, Private)",
            "bn": "হাইপার-ভি ভার্চুয়াল মেশিন ও ভার্চুয়াল সুইচ"
          },
          {
            "en": "Windows Server Backup: Full Server Bare-metal Backup, System State Backup & Recovery",
            "bn": "উইন্ডোজ সার্ভার ফুল ব্যাকআপ ও রিস্টোর"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "24 Live Hands-on Windows Server VMware/Hyper-V Lab Classes",
        "bn": "২৪ টি লাইভ প্র্যাকটিক্যাল উইন্ডোজ সার্ভার ল্যাব ক্লাস"
      },
      {
        "en": "Corporate Group Policy (GPO) Templates & Security Baseline Scripts",
        "bn": "কর্পোরেট গ্রুপ পলিসি টেমপ্লেট ফাইলস"
      },
      {
        "en": "Enterprise Active Directory Architecture Blueprint",
        "bn": "অ্যাক্টিভ ডিরেক্টরি আর্কিটেকচার ব্লুপ্রিন্ট"
      },
      {
        "en": "Verified Windows Server Administrator Certificate",
        "bn": "সার্টিফাইড উইন্ডোজ সার্ভার অ্যাডমিন সনদপত্র"
      }
    ],
    "reviews": [
      {
        "id": "r19",
        "name": "Nazmul Haque",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "System Administrator at Prime Bank PLC",
          "bn": "সিস্টেম অ্যাডমিনিস্ট্রেটর"
        },
        "rating": 5,
        "comment": {
          "en": "The Group Policy and Active Directory replication classes were top quality! Working with 500+ corporate domain users became effortless after this course.",
          "bn": "গ্রুপ পলিসি এবং ব্যাকআপ ডোমেন কন্ট্রোলারের প্র্যাকটিক্যাল ল্যাব অত্যন্ত কার্যকর ছিল।"
        },
        "date": "3 Weeks Ago"
      }
    ]
  },
  {
    "id": "20",
    "slug": "ethical-hacking-penetration-testing",
    "title": {
      "en": "Ethical Hacking & Penetration Testing",
      "bn": "ইথিক্যাল হ্যাকিং ও পেনিট্রেশন টেস্টিং"
    },
    "subtitle": {
      "en": "Master Kali Linux, Metasploit, Web App Penetration Testing, Bug Bounty, Wi-Fi Security & CEH v13 Practical Labs",
      "bn": "কালি লিনাক্স, মেটাসপ্লয়েট, ওয়েব সিকিউরিটি, বাগ বাউন্টি ও সিইএইচ (CEH) প্র্যাকটিক্যাল হ্যাকিং ল্যাব"
    },
    "category": "security",
    "categoryLabel": {
      "en": "Security",
      "bn": "সিকিউরিটি"
    },
    "badge": {
      "en": "OFFENSIVE SECURITY",
      "bn": "অফেনসিভ সিকিউরিটি"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 168,
    "enrolledCount": "145+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "12,000৳",
    "rawFee": 12000,
    "originalFee": "22,000৳",
    "duration": {
      "en": "3.5 Months",
      "bn": "৩.৫ মাস"
    },
    "classesCount": {
      "en": "28 Classes",
      "bn": "২৮ টি ক্লাস"
    },
    "image": "/images/course thumbnail/ethical hacking.jpg",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Ethical%20Hacking%20%26%20Penetration%20Testing%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Engr. Kazi Ashikur Rahman (CEH, OSCP)",
      "designation": {
        "en": "Lead Red Team Specialist & Penetration Tester",
        "bn": "লিড রেড টিম স্পেশালিস্ট ও পেনিট্রেশন টেস্টার"
      },
      "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "9+ years conducting vulnerability assessments, offensive cyber operations, bug bounty hunting, and red team penetration tests.",
        "bn": "৯+ বছরের অফেনসিভ সাইবার সিকিউরিটি, রেড টিম সিমুলেশন ও বাগ বাউন্টি হান্টিং অভিজ্ঞতা।"
      },
      "experience": "9+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Step into the shoes of a certified ethical hacker. Learn reconnaissance, vulnerability scanning, network exploitation with Metasploit, OWASP Top 10 web application vulnerabilities (SQLi, XSS, SSRF, CSRF), Wi-Fi WPA3 handshake cracking, privilege escalation, and ethical reporting workflows in legal sandbox environments.",
      "bn": "সার্টিফাইড ইথিক্যাল হ্যাকার ও পেনিট্রেশন টেস্টার হওয়ার বাস্তবমুখী কোর্স। কালি লিনাক্স, মেটাসপ্লয়েট, ওয়েব অ্যাপ্লিকেশন ভালনারেবিলিটি, ওয়াইফাই ক্র্যাকিং ও বাগ বাউন্টি টেকনিকস প্র্যাকটিক্যাল ল্যাবে শিখবেন।"
    },
    "fullDescription": {
      "en": "This intensive hands-on lab program trains you in modern offensive security techniques used by top penetration testers and cyber consultants worldwide. You will exploit simulated real-world enterprise infrastructure, identify critical zero-day misconfigurations, write proof-of-concept exploits, and prepare for industry certifications like CEH Practical and OSCP.",
      "bn": "আন্তর্জাতিক মানের ল্যাব এনভায়রনমেন্টে রিয়েল-ওয়ার্ল্ড সার্ভার ও নেটওয়ার্কের নিরাপত্তা ত্রুটি খুঁজে বের করা এবং তা প্রতিরোধ করার পূর্ণাঙ্গ গাইডলাইন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Offensive Recon & Scanning",
          "bn": "রিকন ও নেটওয়ার্ক স্ক্যানিং"
        },
        "desc": {
          "en": "Nmap, Wireshark, Shodan, Google Dorking & OSINT methodologies.",
          "bn": "ওএসআইএনটি রিকন ও এনম্যাপ দিয়ে নেটওয়ার্ক স্ক্যান।"
        },
        "icon": "ShieldCheck"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Web App Security & OWASP",
          "bn": "ওয়েব অ্যাপ্লিকেশন সিকিউরিটি"
        },
        "desc": {
          "en": "Burp Suite Pro, SQL Injection, XSS, CSRF, IDOR & SSRF exploits.",
          "bn": "বার্প সুইট দিয়ে ওডব্লিউএএসপি শীর্ষ ১০ ত্রুটি শনাক্ত ও হ্যাক।"
        },
        "icon": "Code2"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Privilege Escalation & Red Team",
          "bn": "প্রিভিলেজ এসকেলেশন ও রেড টিম"
        },
        "desc": {
          "en": "Linux/Windows privesc, Metasploit, payload generation & lateral movement.",
          "bn": "লিনাক্স/উইন্ডোজ রুট এক্সেস ও মেটাসপ্লয়েট পেলোড।"
        },
        "icon": "Zap"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master Kali Linux tools for passive and active target reconnaissance and OSINT.",
        "bn": "কালি লিনাক্স ও ওএসআইএনটি দিয়ে টার্গেট নেটওয়ার্কের গোপন তথ্য সংগ্রহ।"
      },
      {
        "en": "Perform advanced port scanning, service enumeration, and vulnerability analysis using Nmap.",
        "bn": "এনম্যাপ দিয়ে সার্ভারের ওপেন পোর্ট ও সিকিউরিটি ত্রুটি খোঁজা।"
      },
      {
        "en": "Exploit web application flaws using Burp Suite: SQL Injection, XSS, CSRF, and IDOR.",
        "bn": "বার্প সুইট দিয়ে এসকিউএল ইনজেকশন ও এক্সএসএস ত্রুটি কাজে লাগানো।"
      },
      {
        "en": "Utilize Metasploit Framework to deliver remote exploits, generate payloads, and bypass AV.",
        "bn": "মেটাসপ্লয়েট দিয়ে রিমোট এক্সপ্লয়েট ও শেল পেলোড ডেলিভারি।"
      },
      {
        "en": "Audit Wi-Fi security, capture WPA2/WPA3 4-way handshakes, and test password resilience.",
        "bn": "ওয়াইফাই সিকিউরিটি অডিট ও পাসওয়ার্ড রেজিলিয়েন্স টেস্টিং।"
      },
      {
        "en": "Write professional vulnerability assessment reports (VAPT) with remediation strategies.",
        "bn": "আন্তর্জাতিক মানের প্রফেশনাল ভিএপিটি পেনিট্রেশন টেস্টিং রিপোর্ট তৈরি।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Ethical Hacking Foundations, Kali Linux & OSINT Recon",
          "bn": "মডিউল ১: ইথিক্যাল হ্যাকিং ফাউন্ডেশন ও ওএসআইএনটি রিকন"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Ethics, Cyber Laws, Legal Scopes, Rules of Engagement & Lab Setup (VirtualBox/VMware)",
            "bn": "সাইবার আইন, এথিক্স ও পারমিশন বেসড ল্যাব সেটআপ"
          },
          {
            "en": "Kali Linux CLI Essentials, Anonymity (Tor, ProxyChains, VPN) & MAC Spoofing",
            "bn": "কালি লিনাক্স কমান্ড ও নেটওয়ার্ক অ্যানোনিমিটি"
          },
          {
            "en": "Passive & Active Reconnaissance: Shodan, WHOIS, DNS Enumeration, Google Dorking & theHarvester",
            "bn": "শোডান, ডিএনএস রিকন ও গুগল ডরকিং মেথডলজি"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Network Scanning, Enumeration & Vulnerability Assessment",
          "bn": "মডিউল ২: নেটওয়ার্ক স্ক্যানিং ও ভালনারেবিলিটি অ্যাসেসমেন্ট"
        },
        "duration": {
          "en": "6 Classes • 12 Hours",
          "bn": "৬ টি ক্লাস • ১২ ঘণ্টা"
        },
        "lessonsCount": 7,
        "topics": [
          {
            "en": "Nmap Advanced Scanning: SYN, TCP Connect, UDP, Script Engine (NSE) & Firewall Evasion",
            "bn": "এনম্যাপ এডভান্সড স্ক্যান ও ফায়ারওয়াল ফাঁকি দেওয়া"
          },
          {
            "en": "Banner Grabbing, SMB/SNMP/FTP Enumeration & Nessus / OpenVAS Vulnerability Scanner",
            "bn": "সার্ভিস এনিউমারেশন ও নেসাস স্ক্যানার পরিচালনা"
          },
          {
            "en": "Wireshark Packet Analysis: Sniffing Credentials, Cleartext Protocols & MITM (Man-in-the-Middle)",
            "bn": "ওয়্যারশার্ক দিয়ে প্যাকেট ক্যাপচার ও এমআইটিএম অ্যাটাক"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: System Exploitation, Metasploit & Payload Crafting",
          "bn": "মডিউল ৩: সিস্টেম এক্সপ্লয়টেশন ও মেটাসপ্লয়েট পেলোড"
        },
        "duration": {
          "en": "6 Classes • 12 Hours",
          "bn": "৬ টি ক্লাস • ১২ ঘণ্টা"
        },
        "lessonsCount": 7,
        "topics": [
          {
            "en": "Metasploit Framework: Auxiliary Modules, Exploits, Payloads (Meterpreter) & Listeners",
            "bn": "মেটাসপ্লয়েট আর্কিটেকচার ও মিটারপ্রিটার শেল এক্সেস"
          },
          {
            "en": "Msfvenom Custom Payloads, Encoding Techniques & Antivirus (AV) Bypass Concepts",
            "bn": "এমএসএফভেনম পেলোড ও এন্টিভাইরাস বাইপাস ট্রিকস"
          },
          {
            "en": "Post-Exploitation: Keylogging, Screen Grabbing, Dumping Hashes & Persistence Mechanisms",
            "bn": "পোস্ট-এক্সপ্লয়টেশন, পাসওয়ার্ড হ্যাশ ডাম্প ও পারসিস্টেন্স"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: Web Application Penetration Testing & OWASP Top 10",
          "bn": "মডিউল ৪: ওয়েব অ্যাপ পেনিট্রেশন টেস্টিং ও ওডব্লিউএএসপি"
        },
        "duration": {
          "en": "6 Classes • 12 Hours",
          "bn": "৬ টি ক্লাস • ১২ ঘণ্টা"
        },
        "lessonsCount": 7,
        "topics": [
          {
            "en": "Burp Suite Proxy Configuration, Target Mapping, Repeater & Intruder Automation",
            "bn": "বার্প সুইট কনফিগারেশন, রিপিটার ও ইন্ট্রুডার অ্যাটাক"
          },
          {
            "en": "SQL Injection (In-Band, Error-Based, Blind SQLi) & SQLMap Automated Exploitation",
            "bn": "এসকিউএল ইনজেকশন ও এসকিউএলম্যাপ টুল চালানো"
          },
          {
            "en": "Cross-Site Scripting (Reflected, Stored, DOM XSS), CSRF, IDOR & Broken Access Control",
            "bn": "এক্সএসএস, আইডিডিওআর ও ব্রোকেন এক্সেস কন্ট্রোল"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: Wireless Hacking, Privilege Escalation & VAPT Capstone",
          "bn": "মডিউল ৫: ওয়্যারলেস সিকিউরিটি, প্রিভস্কেল ও ভিএপিটি রিপোর্ট"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Aircrack-ng Suite: Deauthentication, Capturing WPA2/WPA3 4-Way Handshake & Hashcat Cracking",
            "bn": "ওয়াইফাই হ্যান্ডশেক ক্যাপচার ও হ্যাশক্যাট ক্র্যাকিং"
          },
          {
            "en": "Linux & Windows Privilege Escalation: SUID Binaries, Cron Jobs, Unquoted Service Paths",
            "bn": "লিনাক্স ও উইন্ডোজ রুট/অ্যাডমিন পারমিশন বৃদ্ধি"
          },
          {
            "en": "Writing Comprehensive VAPT Reports, Bug Bounty Submission Guides & CEH Exam Review",
            "bn": "প্রফেশনাল ভিএপিটি রিপোর্ট তৈরি ও বাগ বাউন্টি গাইড"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "28 Live Hands-on Offensive Security Hacking Labs",
        "bn": "২৮ টি লাইভ প্র্যাকটিক্যাল হ্যাকিং ল্যাব ক্লাস"
      },
      {
        "en": "Curated Penetration Testing Scripts & Payload Arsenal",
        "bn": "পেনিট্রেশন টেস্টিং স্ক্রিপ্ট ও এক্সপ্লয়েট বান্ডেল"
      },
      {
        "en": "CEH v13 Practice Exam Question Bank & Dumps",
        "bn": "সিইএইচ ১৩ অফিসিয়াল এক্সাম প্রস্তুতি প্রশ্নব্যাংক"
      },
      {
        "en": "Certified Ethical Hacker (CEH) Course Completion Certificate",
        "bn": "সার্টিফাইড ইথিক্যাল হ্যাকার সনদপত্র"
      }
    ],
    "reviews": [
      {
        "id": "r20",
        "name": "Nazmul Islam",
        "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "Junior Pentester at CyberArmor BD",
          "bn": "পেনিট্রেশন টেস্টার"
        },
        "rating": 5,
        "comment": {
          "en": "The Burp Suite web app and Metasploit privilege escalation labs were incredible. Found my first paid bug on HackerOne within 3 weeks of finishing this course!",
          "bn": "বার্প সুইট ও মেটাসপ্লয়েটের ল্যাবগুলো অসাধারণ ছিল। কোর্স শেষ করেই হ্যাকারওয়ানে বাউন্টি পেয়েছি।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "21",
    "slug": "cyber-security-soc-analyst",
    "title": {
      "en": "Cyber Security & SOC Analyst",
      "bn": "সাইবার সিকিউরিটি ও এসওসি অ্যানালিস্ট"
    },
    "subtitle": {
      "en": "Master Blue Team Defense, SIEM (Splunk & Wazuh), Threat Hunting, Wireshark Network Forensics & Incident Response",
      "bn": "ব্লু টিম ডিফেন্স, এসআইইএম (Splunk ও Wazuh), থ্রেট হান্টিং, ওয়্যারশার্ক নেটওয়ার্ক ফরেনসিক্স ও ইন্সিডেন্ট রেসপন্স"
    },
    "category": "security",
    "categoryLabel": {
      "en": "Security",
      "bn": "সিকিউরিটি"
    },
    "badge": {
      "en": "BLUE TEAM DEFENSE",
      "bn": "ব্লু টিম ডিফেন্স"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 152,
    "enrolledCount": "135+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "10,000৳",
    "rawFee": 10000,
    "originalFee": "20,000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "24 Classes",
      "bn": "২৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/diploma in cyber security.png",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Cyber%20Security%20%26%20SOC%20Analyst%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Engr. Moniruzzaman (CISSP, CySA+)",
      "designation": {
        "en": "Lead Cyber Security Architect & Enterprise SOC Lead",
        "bn": "লিড সাইবার সিকিউরিটি আর্কিটেক্ট ও এসওসি লিড"
      },
      "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "11+ years leading 24/7 Security Operations Centers (SOC), enterprise SIEM deployments, threat hunting, and cyber crisis management.",
        "bn": "১১+ বছরের এন্টারপ্রাইজ এসওসি পরিচালনা, এসআইইএম ডিপ্লয়মেন্ট ও ইন্সিডেন্ট রেসপন্স অভিজ্ঞতা।"
      },
      "experience": "11+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Launch your career as a Tier 1 / Tier 2 SOC Analyst and Cyber Security Specialist. Master threat detection with Splunk SIEM and Wazuh, network traffic packet forensics with Wireshark, endpoint detection and response (EDR), malware triage, MITRE ATT&CK mapping, and enterprise incident response workflows.",
      "bn": "আন্তর্জাতিক মানের এসওসি অ্যানালিস্ট ও ব্লু টিম ডিফেন্ডার হওয়ার প্রফেশনাল কোর্স। স্প্লাঙ্ক (Splunk), ওয়াজুহ (Wazuh), ওয়্যারশার্ক নেটওয়ার্ক ফরেনসিক্স, ইডিআর ও ইন্সিডেন্ট হ্যান্ডলিং বাস্তব ল্যাবে শিখবেন।"
    },
    "fullDescription": {
      "en": "Every bank, telecom, fintech, and tech enterprise operates a Security Operations Center (SOC) to safeguard critical data against cyberattacks. In this lab-oriented course, you will analyze live attack logs, configure automated detection alerts, investigate simulated ransomware infections, and implement zero-trust defense architectures.",
      "bn": "ব্যাংক, করপোরেট ও টেলিকম প্রতিষ্ঠানে সাইবার অ্যাটাক মনিটরিং, থ্রেট ডিটেকশন ও রিয়েল-টাইম সিকিউরিটি ইনসিডেন্ট মোকাবিলার পূর্ণাঙ্গ হ্যান্ডস-অন প্রশিক্ষণ।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "SIEM & Log Analytics",
          "bn": "এসআইইএম ও লগ অ্যানালিটিক্স"
        },
        "desc": {
          "en": "Splunk Enterprise SPL queries, Wazuh Open Source SIEM & alert rules.",
          "bn": "স্প্লাঙ্ক ও ওয়াজুহ দিয়ে সেন্ট্রাল সিকিউরিটি লগ বিশ্লেষণ।"
        },
        "icon": "ShieldCheck"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Network Packet Forensics",
          "bn": "নেটওয়ার্ক ফরেনসিক্স"
        },
        "desc": {
          "en": "Wireshark deep packet inspection, TCP/IP anomalies & Snort IDS.",
          "bn": "ওয়্যারশার্ক দিয়ে ম্যালিসিয়াস ট্র্যাফিক শনাক্তকরণ।"
        },
        "icon": "Server"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Incident Response & EDR",
          "bn": "ইন্সিডেন্ট রেসপন্স ও ইডিআর"
        },
        "desc": {
          "en": "MITRE ATT&CK framework, malware triage, isolation & containment.",
          "bn": "র‍্যানসমওয়্যার ও থ্রেট আইসোলেশন প্রোটোকল।"
        },
        "icon": "Zap"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Operate modern SIEM platforms (Splunk and Wazuh) to ingest, normalize, and monitor security logs.",
        "bn": "স্প্লাঙ্ক ও ওয়াজুহ এসআইইএম দিয়ে সার্ভার ও নেটওয়ার্কের লগ মনিটর করা।"
      },
      {
        "en": "Write advanced Splunk Search Processing Language (SPL) queries and configure alerting rules.",
        "bn": "স্প্লাঙ্ক এসপিএল কুয়েরি দিয়ে সাইবার অ্যাটাকের রিয়েল-টাইম এলার্ট তৈরি।"
      },
      {
        "en": "Perform deep packet inspection (DPI) in Wireshark to isolate malware beacons and DDoS floods.",
        "bn": "ওয়্যারশার্ক দিয়ে ম্যালওয়্যার ট্র্যাফিক ও ডিডস অ্যাটাক বিশ্লেষণ।"
      },
      {
        "en": "Map cyber adversary behavior against the MITRE ATT&CK framework and Cyber Kill Chain.",
        "bn": "মাইটার এটিটিঅ্যান্ডসিকে ফ্রেমওয়ার্ক অনুযায়ী অ্যাটাক ট্যাকটিক্স চিহ্নিত করা।"
      },
      {
        "en": "Execute standard Operating Procedures (SOP) for containing and eradicating security incidents.",
        "bn": "সিকিউরিটি ইন্সিডেন্ট হ্যান্ডলিং ও ম্যালওয়্যার কনটেইনমেন্ট পদ্ধতি প্রয়োগ।"
      },
      {
        "en": "Prepare for CompTIA Security+, CySA+, and SOC Analyst technical interviews.",
        "bn": "কম্পটিয়া সিকিউরিটি+, সাইএসএ+ ও এসওসি অ্যানালিস্ট চাকরির পূর্ণাঙ্গ প্রস্তুতি।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Cyber Threat Landscape, Security Architecture & SOC Roles",
          "bn": "মডিউল ১: সাইবার থ্রেট ও এসওসি আর্কিটেকচার"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Cyber Threat Actors (APTs, Hacktivists, Ransomware Gangs) & Cyber Kill Chain",
            "bn": "সাইবার থ্রেট এক্টর্স ও সাইবার কিল চেইন"
          },
          {
            "en": "SOC Architecture: Tier 1/2/3 Roles, Escalation Paths, Ticketing Systems & SLAs",
            "bn": "এসওসি আর্কিটেকচার, টিয়ার রোলস ও টিকিট সিস্টেম"
          },
          {
            "en": "CIA Triad, Defense-in-Depth, Least Privilege & Zero Trust Security Principles",
            "bn": "সিআইএ ট্রায়াড ও জিরো ট্রাস্ট সিকিউরিটি মডেল"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: SIEM Deployment & Log Analysis (Splunk & Wazuh)",
          "bn": "মডিউল ২: এসআইইএম ও স্প্লাঙ্ক লগ অ্যানালাইসিস"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Splunk Architecture: Forwarders, Indexers, Search Heads & Data Ingestion",
            "bn": "স্প্লাঙ্ক আর্কিটেকচার ও লগ ইনজেশন"
          },
          {
            "en": "Splunk Search Processing Language (SPL): stats, eval, lookup, transaction & timecharts",
            "bn": "স্প্লাঙ্ক এসপিএল কুয়েরি ও ড্যাশবোর্ড তৈরি"
          },
          {
            "en": "Wazuh Open Source SIEM: Agent Deployment, Vulnerability Detector & File Integrity Monitoring",
            "bn": "ওয়াজুহ এজেন্ট সেটআপ ও ফাইল ইন্টিগ্রিটি মনিটরিং"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Network Traffic Forensics with Wireshark & IDS/IPS",
          "bn": "মডিউল ৩: ওয়্যারশার্ক নেটওয়ার্ক ফরেনসিক্স ও আইডিএস"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Wireshark Display Filters, TCP Stream Reconstruction & Protocol Analysis (HTTP, DNS, ARP)",
            "bn": "ওয়্যারশার্ক ডিসপ্লে ফিল্টার ও টিসিপি স্ট্রিম রিকনস্ট্রাকশন"
          },
          {
            "en": "Detecting Network Attacks: Port Scanning, ARP Spoofing, DNS Tunneling & SYN Floods",
            "bn": "নেটওয়ার্ক অ্যাটাক, এআরপি স্পুফিং ও ডিএনএস টানেলিং শনাক্তকরণ"
          },
          {
            "en": "Snort / Suricata IDS Configuration: Writing Custom Detection Signatures and Rules",
            "bn": "স্নোর্ট আইডিএস কাস্টম রুলস লেখা"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: Endpoint Security, Malware Triage & Threat Intelligence",
          "bn": "মডিউল ৪: এন্ডপয়েন্ট সিকিউরিটি ও ম্যালওয়্যার অ্যানালাইসিস"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Windows Event Logs Analysis (Sysmon, Event IDs 4624, 4625, 7045) & PowerShell Auditing",
            "bn": "উইন্ডোজ ইভেন্ট লগ ও সিসমন (Sysmon) অ্যানালাইসিস"
          },
          {
            "en": "Static and Dynamic Malware Triage: VirusTotal, Any.Run Sandbox, Strings & Hash Verification",
            "bn": "ম্যালওয়্যার ট্রায়াজ ও স্যান্ডবক্স অ্যানালাইসিস"
          },
          {
            "en": "Cyber Threat Intelligence (CTI): OpenCTI, MISP, IOCs (Indicators of Compromise) & YARA Rules",
            "bn": "থ্রেট ইন্টেলিজেন্স ও ইয়ারা রুলস"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: Incident Response, MITRE ATT&CK & Mock SOC Drill",
          "bn": "মডিউল ৫: ইন্সিডেন্ট রেসপন্স ও মক এসওসি ড্রিল"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "NIST & SANS Incident Response Lifecycle: Preparation, Identification, Containment & Recovery",
            "bn": "এনআইএসটি ও সানস ইন্সিডেন্ট রেসপন্স সাইকেল"
          },
          {
            "en": "Mapping Enterprise Incidents to MITRE ATT&CK Matrix Techniques",
            "bn": "মাইটার এটিটিঅ্যান্ডসিকে ম্যাপিং"
          },
          {
            "en": "Live Ransomware Containment Mock Drill, Root Cause Analysis & Final Incident Report",
            "bn": "র‍্যানসমওয়্যার হ্যান্ডলিং লাইভ ড্রিল ও চূড়ান্ত রিপোর্ট"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "24 Live Hands-on Blue Team SOC Lab Classes",
        "bn": "২৪ টি লাইভ প্র্যাকটিক্যাল ব্লু টিম এসওসি ল্যাব ক্লাস"
      },
      {
        "en": "Ready-to-use Splunk SPL Queries & Wazuh Detection Rules",
        "bn": "স্প্লাঙ্ক এসপিএল কুয়েরি ও ওয়াজুহ রুলস প্যাক"
      },
      {
        "en": "SOC Analyst Interview Question Bank & Scenario Walkthroughs",
        "bn": "এসওসি অ্যানালিস্ট ইন্টারভিউ প্রস্তুতি গাইড"
      },
      {
        "en": "Certified Cyber Security & SOC Analyst Certificate",
        "bn": "সার্টিফাইড সাইবার সিকিউরিটি ও এসওসি সনদপত্র"
      }
    ],
    "reviews": [
      {
        "id": "r21",
        "name": "Shariar Kabir",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "SOC Analyst Tier 1 at Bank Asia",
          "bn": "এসওসি অ্যানালিস্ট"
        },
        "rating": 5,
        "comment": {
          "en": "The Splunk and Sysmon event log analysis labs were 100% relevant to my current SOC job. Highly recommended for anyone entering cybersecurity!",
          "bn": "স্প্লাঙ্ক ও সিসমন লগ অ্যানালাইসিসের প্র্যাকটিক্যাল জ্ঞান সরাসরি ব্যাংকের এসওসি জবে কাজে লাগছে।"
        },
        "date": "3 Weeks Ago"
      }
    ]
  },
  {
    "id": "22",
    "slug": "cloud-computing-aws-solutions",
    "title": {
      "en": "Cloud Computing & AWS Solutions Architecture",
      "bn": "ক্লাউড কম্পিউটিং ও এডব্লিউএস সলিউশন আর্কিটেকচার"
    },
    "subtitle": {
      "en": "Master AWS Core Services (EC2, S3, VPC, IAM), High Availability, Cloud Security, Terraform IaC & Serverless Architecture",
      "bn": "এডব্লিউএস ক্লাউড সার্ভিসেস (EC2, S3, VPC, IAM), হাই অ্যাভেইলেবিলিটি, ক্লাউড সিকিউরিটি, সার্ভারলেস ও টেরাফর্ম আর্কিটেকচার"
    },
    "category": "security",
    "categoryLabel": {
      "en": "Security",
      "bn": "সিকিউরিটি"
    },
    "badge": {
      "en": "CLOUD ARCHITECT",
      "bn": "ক্লাউড আর্কিটেক্ট"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 140,
    "enrolledCount": "120+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "12,000৳",
    "rawFee": 12000,
    "originalFee": "22,000৳",
    "duration": {
      "en": "3.5 Months",
      "bn": "৩.৫ মাস"
    },
    "classesCount": {
      "en": "28 Classes",
      "bn": "২৮ টি ক্লাস"
    },
    "image": "/images/course thumbnail/Cloud-Devops.jpg",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Cloud%20Computing%20%26%20AWS%20Solutions%20Architecture%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Engr. Sabbir Rahman Chowdhury (AWS Solutions Architect Pro)",
      "designation": {
        "en": "Lead Cloud Infrastructure Architect & DevOps Lead",
        "bn": "লিড ক্লাউড ইনফ্রাস্ট্রাকচার আর্কিটেক্ট ও ডেভঅপ্স লিড"
      },
      "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "10+ years architecting multi-region AWS cloud infrastructure, microservices Kubernetes clusters, Terraform IaC, and zero-downtime telecom platforms.",
        "bn": "১০+ বছরের এডব্লিউএস ক্লাউড আর্কিটেকচার, কুবারনেটিস ও টেরাফর্ম আইএসি অটোমেশন অভিজ্ঞতা।"
      },
      "experience": "10+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Master Amazon Web Services (AWS) and modern cloud computing. Build enterprise-grade, highly available, and cost-effective cloud architectures. Master Amazon EC2, Auto Scaling, Elastic Load Balancing, Amazon S3, Virtual Private Cloud (VPC), IAM security policies, Amazon RDS/DynamoDB, AWS Lambda serverless functions, CloudWatch monitoring, and Terraform Infrastructure as Code (IaC).",
      "bn": "অ্যামাজন ওয়েব সার্ভিসেস (AWS) এবং ক্লাউড কম্পিউটিংয়ের পূর্ণাঙ্গ প্র্যাকটিক্যাল কোর্স। ইসি২ (EC2), এস৩ (S3), ভার্চুয়াল প্রাইভেট ক্লাউড (VPC), আইএএম সিকিউরিটি, সার্ভারলেস ল্যাম্বডা ও টেরাফর্ম দিয়ে ক্লাউড ইনফ্রাস্ট্রাকচার অটোমেশন শিখবেন।"
    },
    "fullDescription": {
      "en": "From small startups to global enterprises, cloud computing powers the world's applications. This course prepares you to design fault-tolerant, scalable architectures on AWS while following the AWS Well-Architected Framework and preparing for the AWS Certified Solutions Architect - Associate (SAA-C03) exam.",
      "bn": "গ্লোবাল ক্লাউড আর্কিটেক্ট ও ডেভঅপ্স ইঞ্জিনিয়ার হিসেবে ক্যারিয়ার গড়ার জন্য বাস্তব প্রজেক্টভিত্তিক সম্পূর্ণ কোর্স।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "AWS Compute & Auto Scaling",
          "bn": "ইসি২ ও অটো স্কেলিং"
        },
        "desc": {
          "en": "EC2 instances, EBS volumes, ALB load balancers & target groups.",
          "bn": "ইসি২ ভার্চুয়াল সার্ভার, লোড ব্যালেন্সার ও অটো স্কেলিং।"
        },
        "icon": "Server"
      },
      {
        "id": "cv2",
        "title": {
          "en": "VPC & Cloud Security",
          "bn": "ভিপিসি ও ক্লাউড সিকিউরিটি"
        },
        "desc": {
          "en": "Custom VPC, public/private subnets, NAT Gateways & IAM policies.",
          "bn": "কাস্টম ভার্চুয়াল ক্লাউড নেটওয়ার্ক ও সিকিউরিটি গ্রুপ।"
        },
        "icon": "ShieldCheck"
      },
      {
        "id": "cv3",
        "title": {
          "en": "IaC with Terraform & Serverless",
          "bn": "টেরাফর্ম ও সার্ভারলেস"
        },
        "desc": {
          "en": "AWS Lambda, API Gateway, S3, RDS & Terraform automation.",
          "bn": "টেরাফর্ম স্ক্রিপ্টিং দিয়ে ১-ক্লিকে ক্লাউড ডিপ্লয়মেন্ট।"
        },
        "icon": "Zap"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Design and deploy multi-tier web architectures across multiple AWS Availability Zones.",
        "bn": "মাল্টিপল অ্যাভেইলেবিলিটি জোনে হাই-অ্যাভেইলেবল ক্লাউড আর্কিটেকচার তৈরি।"
      },
      {
        "en": "Build custom Virtual Private Clouds (VPC) with public/private subnets, Route Tables, and NAT Gateways.",
        "bn": "কাস্টম ভিপিসি, সাবনেট, রাউট টেবিল ও ন্যাট গেটওয়ে সেটআপ।"
      },
      {
        "en": "Implement strict security governance using AWS Identity & Access Management (IAM) and KMS.",
        "bn": "আইএএম পলিসি ও কেএমএস এনক্রিপশন দিয়ে ক্লাউড সিকিউরিটি নিশ্চিত করা।"
      },
      {
        "en": "Deploy and manage managed database clusters using Amazon RDS Multi-AZ and DynamoDB.",
        "bn": "অ্যামাজন আরডিএস ও ডায়নামোডিবি ডাটাবেস ক্লাস্টার কনফিগারেশন।"
      },
      {
        "en": "Develop event-driven serverless backends using AWS Lambda, S3 triggers, and API Gateway.",
        "bn": "এডব্লিউএস ল্যাম্বডা ও এপিআই গেটওয়ে দিয়ে সার্ভারলেস অ্যাপ্লিকেশন তৈরি।"
      },
      {
        "en": "Automate cloud provisioning using Terraform Infrastructure as Code (IaC) and prepare for AWS SAA-C03 exam.",
        "bn": "টেরাফর্ম দিয়ে কোডের মাধ্যমে ক্লাউড ডিপ্লয় এবং এডব্লিউএস সার্টিফিকেশন প্রস্তুতি।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Cloud Computing Fundamentals & AWS Global Infrastructure",
          "bn": "মডিউল ১: ক্লাউড কম্পিউটিং ও এডব্লিউএস গ্লোবাল ইনফ্রাস্ট্রাকচার"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Cloud Models (IaaS, PaaS, SaaS), Regions, Availability Zones & Edge Locations",
            "bn": "ক্লাউড মডেলস, রিজিওন ও অ্যাভেইলেবিলিটি জোন পরিচিতি"
          },
          {
            "en": "AWS Management Console, AWS CLI Setup & Cost Management Budgets",
            "bn": "এডব্লিউএস কনসোল, সিএলআই সেটআপ ও কস্ট এলার্ট"
          },
          {
            "en": "IAM Core: Users, Groups, Roles, Policies, MFA & Least Privilege Principles",
            "bn": "আইএএম ইউজার, গ্রুপ, রোলস ও এমএফএ সিকিউরিটি"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Compute Services (EC2), Elastic Load Balancing & Auto Scaling",
          "bn": "মডিউল ২: ইসি২ সার্ভার, লোড ব্যালেন্সার ও অটো স্কেলিং"
        },
        "duration": {
          "en": "6 Classes • 12 Hours",
          "bn": "৬ টি ক্লাস • ১২ ঘণ্টা"
        },
        "lessonsCount": 7,
        "topics": [
          {
            "en": "EC2 Instance Types, Key Pairs, Security Groups & User Data Bootstrap Scripts",
            "bn": "ইসি২ ভার্চুয়াল মেশিন তৈরি ও বুটস্ট্র্যাপ স্ক্রিপ্ট"
          },
          {
            "en": "EBS Storage Types (gp3, io2), Snapshots, AMI Images & EFS Shared Storage",
            "bn": "ইবিএস স্টোরেজ ভলিউম, স্ন্যাপশট ও এএমআই তৈরি"
          },
          {
            "en": "Application Load Balancer (ALB), Target Groups, Auto Scaling Policies & Health Checks",
            "bn": "অ্যাপ্লিকেশন লোড ব্যালেন্সার ও অটো স্কেলিং পলিসি"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Virtual Private Cloud (VPC) & Hybrid Cloud Networking",
          "bn": "মডিউল ৩: ভার্চুয়াল প্রাইভেট ক্লাউড (VPC) ও নেটওয়ার্কিং"
        },
        "duration": {
          "en": "6 Classes • 12 Hours",
          "bn": "৬ টি ক্লাস • ১২ ঘণ্টা"
        },
        "lessonsCount": 7,
        "topics": [
          {
            "en": "Custom VPC Design: Public/Private Subnets, Internet Gateway & Route Tables",
            "bn": "কাস্টম ভিপিসি, পাবলিক/প্রাইভেট সাবনেট ও আইজিডব্লিউ"
          },
          {
            "en": "NAT Gateway vs NAT Instance, Bastion Host (Jump Box) & Network ACLs vs Security Groups",
            "bn": "ন্যাট গেটওয়ে, ব্যাস্টিয়ন হোস্ট ও নেটওয়ার্ক এসিএল"
          },
          {
            "en": "VPC Peering, Transit Gateway & Site-to-Site VPN Connectivity",
            "bn": "ভিপিসি পিয়ারিং ও সাইট-টু-সাইট ভিপিএন কানেকশন"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: Storage, Databases (S3, RDS, DynamoDB) & Cloud Monitoring",
          "bn": "মডিউল ৪: এস৩ স্টোরেজ, ডাটাবেস ও ক্লাউডওয়াচ"
        },
        "duration": {
          "en": "6 Classes • 12 Hours",
          "bn": "৬ টি ক্লাস • ১২ ঘণ্টা"
        },
        "lessonsCount": 7,
        "topics": [
          {
            "en": "Amazon S3: Bucket Policies, Versioning, Lifecycle Rules, Cross-Region Replication & CloudFront CDN",
            "bn": "অ্যামাজন এস৩ স্টোরেজ, ক্লাউডফ্রন্ট সিডিএন ও ক্যাশিং"
          },
          {
            "en": "Amazon RDS (PostgreSQL/MySQL), Multi-AZ Failover, Read Replicas & DynamoDB NoSQL",
            "bn": "আরডিএস মাল্টি-এজেড ক্লাস্টার ও নোএসকিউএল ডাটাবেস"
          },
          {
            "en": "Amazon CloudWatch Metrics, Alarms, Logs & AWS CloudTrail Audit Trails",
            "bn": "ক্লাউডওয়াচ মনিটরিং ও ক্লাউডট্রেইল অডিট লগ"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: Serverless (Lambda), Terraform IaC & AWS SAA-C03 Prep",
          "bn": "মডিউল ৫: সার্ভারলেস ল্যাম্বডা, টেরাফর্ম ও সার্টিফিকেশন"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "AWS Lambda Serverless Functions, API Gateway REST APIs & EventBridge Triggers",
            "bn": "এডব্লিউএস ল্যাম্বডা ও সার্ভারলেস ব্যাকএন্ড এপিআই"
          },
          {
            "en": "Terraform IaC: Providers, Resources, Variables, State Management & AWS Infrastructure Automation",
            "bn": "টেরাফর্ম দিয়ে স্বয়ংক্রিয় ক্লাউড আর্কিটেকচার তৈরি"
          },
          {
            "en": "AWS Well-Architected Framework 6 Pillars & AWS SAA-C03 Certification Exam Review",
            "bn": "এডব্লিউএস অফিসিয়াল আর্কিটেক্ট সার্টিফিকেশন প্রস্তুতি"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "28 Live Hands-on AWS Cloud Architecture Lab Classes",
        "bn": "২৮ টি লাইভ প্র্যাকটিক্যাল এডব্লিউএস ক্লাউড ল্যাব ক্লাস"
      },
      {
        "en": "Production-ready Terraform AWS Infrastructure Code Templates",
        "bn": "রেডিমেড টেরাফর্ম ক্লাউড স্ক্রিপ্টস"
      },
      {
        "en": "AWS Certified Solutions Architect (SAA-C03) Exam Guide & Dumps",
        "bn": "এডব্লিউএস সার্টিফাইড আর্কিটেক্ট অফিসিয়াল এক্সাম গাইড"
      },
      {
        "en": "Verified Cloud Infrastructure Specialist Certificate",
        "bn": "সার্টিফাইড ক্লাউড ইনফ্রাস্ট্রাকচার স্পেশালিস্ট সনদপত্র"
      }
    ],
    "reviews": [
      {
        "id": "r22",
        "name": "Arif Hossain",
        "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "Cloud Support Engineer at CloudOps BD",
          "bn": "ক্লাউড সাপোর্ট ইঞ্জিনিয়ার"
        },
        "rating": 5,
        "comment": {
          "en": "The VPC peering, multi-tier ALB Auto-Scaling, and Terraform automation modules were top class. Passed AWS SAA-C03 on my first attempt!",
          "bn": "এডব্লিউএস ভিপিসি এবং টেরাফর্মের ক্লাসগুলো চমৎকার ছিল। প্রথম সুযোগেই এডব্লিউএস সার্টিফাইড হয়েছি।"
        },
        "date": "1 Month Ago"
      }
    ]
  },
  {
    "id": "23",
    "slug": "pmp-project-management-agile-scrum",
    "title": {
      "en": "PMP (Project Management Professional) & Agile Scrum",
      "bn": "পিএমপি (প্রজেক্ট ম্যানেজমেন্ট) ও এজাইল স্ক্রাম"
    },
    "subtitle": {
      "en": "Master PMBOK 7th Edition, Agile Methodologies, Scrum Framework, JIRA, Sprint Planning, Risk Management & PMP Exam Prep",
      "bn": "পিএমবক ৭ম সংস্করণ, এজাইল মেথডলজি, স্ক্রাম ফ্রেমওয়ার্ক, জিরা, স্প্রিন্ট প্ল্যানিং ও পিএমপি সার্টিফিকেশন প্রস্তুতি"
    },
    "category": "others",
    "categoryLabel": {
      "en": "Others",
      "bn": "অন্যান্য"
    },
    "badge": {
      "en": "GLOBAL CERTIFICATION",
      "bn": "গ্লোবাল সার্টিফিকেট"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 128,
    "enrolledCount": "115+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "15,000৳",
    "rawFee": 15000,
    "originalFee": "25,000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "24 Classes",
      "bn": "২৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/agile & scrum master.jpg",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22PMP%20Project%20Management%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Engr. Farhan Tanvir (PMP, PMI-ACP, CSM)",
      "designation": {
        "en": "Senior Technical Project Manager & Agile Coach",
        "bn": "সিনিয়র টেকনিক্যাল প্রজেক্ট ম্যানেজার ও এজাইল কোচ"
      },
      "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "12+ years directing multi-million dollar software and infrastructure projects across telecom, banking, and global tech consulting firms.",
        "bn": "১২+ বছরের এন্টারপ্রাইজ সফটওয়্যার প্রজেক্ট ম্যানেজমেন্ট, এজাইল ট্রান্সফরমেশন ও পিএমআই ট্রেইনার অভিজ্ঞতা।"
      },
      "experience": "12+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Prepare to clear the PMI Project Management Professional (PMP) certification exam on your first attempt. Master the 3 core domains: People, Process, and Business Environment based on PMBOK 7th Edition and Agile Practice Guide. Learn practical Agile Scrum sprint management, backlog grooming in Jira, Earned Value Management (EVM), critical path scheduling, and stakeholder communication.",
      "bn": "আন্তর্জাতিক পিএমপি (PMP) ও এজাইল স্ক্রাম মাস্টার সার্টিফিকেশনের সম্পূর্ণ প্রস্তুতি। পিএমবক ৭ম সংস্করণ, স্প্রিন্ট প্ল্যানিং, জিরা প্রজেক্ট ট্র্যাকিং, বাজেট ম্যানেজমেন্ট ও রিক্স অ্যানালাইসিস বাস্তব প্রজেক্টে শিখবেন।"
    },
    "fullDescription": {
      "en": "The PMP credential is the world's leading project management certification. In this comprehensive program, you will work through realistic project simulations, learn predictive and hybrid project delivery frameworks, master modern agile tools (Jira, Confluence, Trello, MS Project), and solve real-world industry case studies.",
      "bn": "দেশী ও আন্তর্জাতিক প্রতিষ্ঠানে প্রজেক্ট ম্যানেজার, স্ক্রাম মাস্টার এবং প্রোডাক্ট ওনার হিসেবে নেতৃত্বের ভূমিকা পালনের জন্য অত্যন্ত মর্যাদাপূর্ণ কোর্স।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "PMBOK 7 & Agile Hybrid",
          "bn": "পিএমবক ও এজাইল হাইব্রিড"
        },
        "desc": {
          "en": "Predictive, Agile & Hybrid project lifecycles and governance.",
          "bn": "ট্রেডিশনাল ও এজাইল হাইব্রিড ফ্রেমওয়ার্ক পরিচালনা।"
        },
        "icon": "Briefcase"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Jira, Scrum & Sprints",
          "bn": "জিরা ও স্ক্রাম স্প্রিন্ট"
        },
        "desc": {
          "en": "Backlog grooming, sprint planning, Kanban boards & burndown charts.",
          "bn": "জিরা দিয়ে রিয়েল-টাইম টাস্ক ট্র্যাকিং ও স্প্রিন্ট ম্যানেজমেন্ট।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Budget, Risk & EVM",
          "bn": "বাজেট ও রিস্ক ম্যানেজমেন্ট"
        },
        "desc": {
          "en": "Earned value analysis, critical path method, budget & risk register.",
          "bn": "কস্ট অপ্টিমাইজেশন, রিস্ক প্ল্যানিং ও টাইমলাইন কন্ট্রোল।"
        },
        "icon": "ShieldCheck"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master the 12 Principles and 8 Performance Domains of PMBOK Guide 7th Edition.",
        "bn": "পিএমবক গাইড ৭ম সংস্করণের সকল পারফরম্যান্স ডোমেন নিখুঁতভাবে আয়ত্ত করা।"
      },
      {
        "en": "Run Agile Scrum ceremonies: Daily Standups, Sprint Planning, Sprint Reviews, and Retrospectives.",
        "bn": "এজাইল স্ক্রাম ইভেন্টস ও স্প্রিন্ট রিভিউ পরিচালনা করা।"
      },
      {
        "en": "Manage real enterprise software backlogs, epics, and user stories inside Jira Software.",
        "bn": "জিরা সফটওয়্যারে এপিক, ইউজার স্টোরি ও ব্যাকলগ ম্যানেজমেন্ট।"
      },
      {
        "en": "Calculate Schedule Variance (SV), Cost Variance (CV), CPI, SPI, and Earned Value Management (EVM).",
        "bn": "প্রজেক্টের কস্ট, টাইম ও আর্নড ভ্যালু অ্যানালাইসিস হিসাব করা।"
      },
      {
        "en": "Develop proactive Risk Management Registers, qualitative risk matrices, and contingency plans.",
        "bn": "রিস্ক রেজিস্টার তৈরি ও সম্ভাব্য ঝুঁকি মোকাবিলার কৌশল বাস্তবায়ন।"
      },
      {
        "en": "Practice 1,000+ realistic PMP exam scenario-based questions with full 35 Contact Hours (PDU) alignment.",
        "bn": "১০০০+ বাস্তব পিএমপি এক্সাম প্রশ্নের প্র্যাকটিস ও ৩৫ কন্টাক্ট আওয়ার্স প্রিপারেশন।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Project Management Fundamentals & PMBOK 7 Architecture",
          "bn": "মডিউল ১: প্রজেক্ট ম্যানেজমেন্ট ও পিএমবক ৭ম সংস্করণ"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Project vs Operations, Project Life Cycles (Predictive, Iterative, Incremental, Agile)",
            "bn": "প্রজেক্ট লাইফসাইকেল পরিচিতি ও মডেলস"
          },
          {
            "en": "PMBOK 7th Edition 12 Principles & Value Delivery System",
            "bn": "পিএমবকের ১২টি মূল প্রিন্সিপালস ও ভ্যালু ডেলিভারি"
          },
          {
            "en": "Developing the Project Charter & Identifying Stakeholders",
            "bn": "প্রজেক্ট চার্টার তৈরি ও স্টেকহোল্ডার এনগেজমেন্ট"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Agile Frameworks, Scrum Mastery & Jira Software",
          "bn": "মডিউল ২: এজাইল মেথডলজি, স্ক্রাম ও জিরা টুল"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Agile Manifesto (4 Values, 12 Principles) vs Waterfall Model",
            "bn": "এজাইল ম্যানিফেস্টো ও ওয়াটারফল মডেলের তুলনা"
          },
          {
            "en": "Scrum Roles (Product Owner, Scrum Master, Developers), Events & Artifacts",
            "bn": "স্ক্রাম রোলস, ইভেন্টস ও আর্টফ্যাক্টস"
          },
          {
            "en": "Hands-on Jira Software: Creating Epics, User Stories, Story Points Estimation, Sprints & Burndown Charts",
            "bn": "জিরায় ইউজার স্টোরি, স্প্রিন্ট বোর্ড ও বার্নডাউন চার্ট তৈরি"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Scope, Schedule (Critical Path) & Cost Management (EVM)",
          "bn": "মডিউল ৩: স্কোপ, শিডিউল ও কস্ট কন্ট্রোল (EVM)"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Work Breakdown Structure (WBS) Creation & Scope Baseline",
            "bn": "ডব্লিউবিএস (WBS) তৈরি ও স্কোপ কন্ট্রোল"
          },
          {
            "en": "Critical Path Method (CPM), Network Diagrams, Lead/Lag, Float & Schedule Compression (Crashing/Fast-Tracking)",
            "bn": "ক্রিটিক্যাল পাথ মেথড ও প্রজেক্ট শিডিউলিং"
          },
          {
            "en": "Earned Value Management (EVM): PV, EV, AC, CV, SV, CPI, SPI, EAC & Cost Baseline",
            "bn": "আর্নড ভ্যালু ম্যানেজমেন্ট ও বাজেট ক্যালকুলেশন"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: Quality, Risk Management & Procurement Contracts",
          "bn": "মডিউল ৪: কোয়ালিটি, রিস্ক অ্যানালাইসিস ও কন্ট্রাক্ট"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Quality Management: Six Sigma, Fishbone Diagrams, Pareto Charts & Control Charts",
            "bn": "কোয়ালিটি কন্ট্রোল টুলস ও রুট কজ অ্যানালাইসিস"
          },
          {
            "en": "Risk Identification, Qualitative & Quantitative Risk Analysis, Risk Response Strategies",
            "bn": "রিস্ক রেজিস্টার ও রিস্ক রেসপন্স প্ল্যানিং"
          },
          {
            "en": "Procurement Types: Fixed-Price, Cost-Reimbursable, Time & Material (T&M) Contracts",
            "bn": "প্রকিউরমেন্ট ও ভেন্ডর কন্ট্রাক্ট ম্যানেজমেন্ট"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: Leadership, Conflict Management & PMP Exam Success Blueprint",
          "bn": "মডিউল ৫: লিডারশিপ, টিম বিল্ডিং ও পিএমপি এক্সাম প্রিপারেশন"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Servant Leadership, Emotional Intelligence, Conflict Resolution Modes (Thomas-Kilmann)",
            "bn": "সার্ভেন্ট লিডারশিপ ও কনফ্লিক্ট ম্যানেজমেন্ট"
          },
          {
            "en": "Ethics and Professional Conduct (PMI Code of Ethics)",
            "bn": "পিএমআই কোড অফ এথিক্স ও প্রফেশনাল স্ট্যান্ডার্ডস"
          },
          {
            "en": "PMP Exam Strategy, Full Mock Exam Simulation & Application Review",
            "bn": "পিএমপি মক টেস্ট সল্যুশন ও অ্যাপ্লিকেশন রিভিউ"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "24 Live Interactive Project Management Masterclasses",
        "bn": "২৪ টি লাইভ প্র্যাকটিক্যাল প্রজেক্ট ম্যানেজমেন্ট ক্লাস"
      },
      {
        "en": "Complete 1,000+ PMP Mock Questions & Situational Question Bank",
        "bn": "১,০০০+ পিএমপি প্র্যাকটিস প্রশ্নব্যাংক"
      },
      {
        "en": "Jira Agile Workspace Setup & Real Enterprise Templates",
        "bn": "জিরা এজাইল প্রজেক্ট টেমপ্লেট ও রিসোর্স"
      },
      {
        "en": "PMP 35 Contact Hours (PDU) Aligned Certificate",
        "bn": "পিএমপি ৩৫ পিডিইউ এলাইন্ড সার্টিফিকেট"
      }
    ],
    "reviews": [
      {
        "id": "r23",
        "name": "Mahbubur Rahman",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "Project Lead at Brain Station 23",
          "bn": "প্রজেক্ট লিড"
        },
        "rating": 5,
        "comment": {
          "en": "The Jira sprint management simulations and situational PMP questions helped me clear the PMP certification with Above Target in all 3 domains!",
          "bn": "জিরা স্প্রিন্ট ল্যাব ও পিএমপি মক টেস্টের প্রস্তুতি অসাধারণ ছিল। প্রথম চেষ্টাতেই ৩টি ডোমেনেই অ্যাবাভ টার্গেট পেয়ে পাস করেছি।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "24",
    "slug": "software-testing-sqa-automation",
    "title": {
      "en": "Software Testing & SQA (Manual & Automation)",
      "bn": "সফটওয়্যার টেস্টিং ও এসকিউএ (ম্যানুয়াল ও অটোমেশন)"
    },
    "subtitle": {
      "en": "Master SDLC/STLC, Test Case Design, Bug Tracking in Jira, Postman API Testing, Selenium WebDriver & Cypress Automation",
      "bn": "ম্যানুয়াল টেস্টিং, টেস্ট কেস ডিজাইন, জিরা বাগ রিপোর্টিং, পোস্টম্যান এপিআই টেস্টিং, সেলিনিয়াম ও সাইপ্রেস অটোমেশন"
    },
    "category": "others",
    "categoryLabel": {
      "en": "Others",
      "bn": "অন্যান্য"
    },
    "badge": {
      "en": "SQA & TESTING",
      "bn": "এসকিউএ ও টেস্টিং"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.8,
    "ratingsCount": 136,
    "enrolledCount": "125+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "10,000৳",
    "rawFee": 10000,
    "originalFee": "18,000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "24 Classes",
      "bn": "২৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/product managment.png",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Software%20Testing%20%26%20SQA%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Engr. Sadia Afrin (ISTQB Certified)",
      "designation": {
        "en": "Lead SQA Engineer & Automation Architect",
        "bn": "লিড এসকিউএ ইঞ্জিনিয়ার ও অটোমেশন আর্কিটেক্ট"
      },
      "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "9+ years building enterprise automated test suites, end-to-end Cypress/Selenium frameworks, performance testing with JMeter, and ISTQB mentoring.",
        "bn": "৯+ বছরের সফটওয়্যার কোয়ালিটি অ্যাসিওরেন্স, এপিআই টেস্টিং ও অটোমেশন ফ্রেমওয়ার্ক তৈরির অভিজ্ঞতা।"
      },
      "experience": "9+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Become an industry-ready Software Quality Assurance (SQA) Engineer. Master both Manual Testing and Automation Testing from fundamentals to advanced enterprise pipelines. Learn Software Testing Life Cycle (STLC), test scenarios/test cases, defect reporting in Jira, Postman REST API testing, Selenium Java/Python, Cypress JavaScript automation, and JMeter load testing.",
      "bn": "সফটওয়্যার টেস্টিং ও এসকিউএ ইঞ্জিনিয়ার হিসেবে সফল ক্যারিয়ার গড়ার পূর্ণাঙ্গ কোর্স। ম্যানুয়াল টেস্টিং, টেস্ট কেস রাইটিং, জিরা বাগ লাইফসাইকেল, পোস্টম্যান এপিআই টেস্টিং ও সাইপ্রেস/সেলিনিয়াম অটোমেশন বাস্তব প্রজেক্টে শিখবেন।"
    },
    "fullDescription": {
      "en": "Software Quality Assurance is crucial for every software company to ensure bug-free production releases. In this lab-centric course, you will write comprehensive test suites for live web and mobile applications, execute regression and smoke tests, automate cross-browser UI testing, and prepare for international ISTQB Foundation certification.",
      "bn": "আইটি কোম্পানিতে সফটওয়্যার কোয়ালিটি নিশ্চিত করতে এবং অটোমেশন টেস্টার হিসেবে দেশে ও বিদেশে হাই-স্যালারি ক্যারিয়ার গড়ার প্র্যাকটিক্যাল গাইডলাইন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Manual Testing & STLC",
          "bn": "ম্যানুয়াল টেস্টিং ও এসটিএলসি"
        },
        "desc": {
          "en": "Test plans, test cases, boundary value analysis, Jira defect lifecycle.",
          "bn": "টেস্ট কেস ডিজাইন ও জিরায় প্রফেশনাল বাগ রিপোর্টিং।"
        },
        "icon": "ShieldCheck"
      },
      {
        "id": "cv2",
        "title": {
          "en": "API Testing with Postman",
          "bn": "পোস্টম্যান এপিআই টেস্টিং"
        },
        "desc": {
          "en": "REST API validation, status codes, JSON assertion scripts & Newman.",
          "bn": "এপিআই ভ্যালিডেশন, অথেনটিকেশন ও অটোমেটেড টেস্ট।"
        },
        "icon": "Terminal"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Automation (Cypress/Selenium)",
          "bn": "অটোমেশন টেস্টিং"
        },
        "desc": {
          "en": "Locators, POM design pattern, Cypress test runner & CI/CD integration.",
          "bn": "সাইপ্রেস ও সেলিনিয়াম দিয়ে ব্রাউজার টেস্ট অটোমেশন।"
        },
        "icon": "Code2"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Design comprehensive Test Scenarios, Test Cases, and Traceability Matrices (RTM).",
        "bn": "টেস্ট সিনারিও, টেস্ট কেস ও আরটিএম ম্যাট্রিক্স তৈরি করা।"
      },
      {
        "en": "Execute functional, regression, smoke, sanity, and usability testing on web/mobile apps.",
        "bn": "ফাংশনাল, রিগ্রেশন ও স্মোক টেস্টিং সফলভাবে পরিচালনা।"
      },
      {
        "en": "Log, track, and manage bugs effectively through the complete Bug Life Cycle using Jira Software.",
        "bn": "জিরা সফটওয়্যারে বাগ লগ করা ও ডিফেক্ট লাইফসাইকেল ম্যানেজমেন্ট।"
      },
      {
        "en": "Automate REST API testing with Postman: assertions, environment variables, and collection runs.",
        "bn": "পোস্টম্যানে রেস্ট এপিআই রেসপন্স ভ্যালিডেশন ও টেস্ট অটোমেশন।"
      },
      {
        "en": "Build end-to-end UI automation suites using modern Cypress and Selenium WebDriver.",
        "bn": "সাইপ্রেস ও সেলিনিয়াম দিয়ে স্বয়ংক্রিয় ব্রাউজার টেস্ট স্ক্রিপ্ট তৈরি।"
      },
      {
        "en": "Prepare thoroughly for the ISTQB Certified Tester Foundation Level (CTFL) examination.",
        "bn": "আইএসটিকিউবি (ISTQB) আন্তর্জাতিক সার্টিফিকেশন পরীক্ষার সম্পূর্ণ প্রস্তুতি।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Software Testing Foundations, SDLC, STLC & Test Design",
          "bn": "মডিউল ১: সফটওয়্যার টেস্টিং বেসিকস ও এসটিএলসি"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "What is SQA? QA vs QC vs Testing, Verification vs Validation",
            "bn": "এসকিউএ পরিচিতি, কিউএ বনাম কিউসি ও টেস্টিং প্রিন্সিপালস"
          },
          {
            "en": "SDLC Models (Waterfall, Agile Scrum) & STLC (Software Testing Life Cycle) Phases",
            "bn": "এসডিএলসি ও এসটিএলসি ধাপসমূহ"
          },
          {
            "en": "Test Design Techniques: Equivalence Partitioning (EP), Boundary Value Analysis (BVA), Decision Table",
            "bn": "বাউন্ডারি ভ্যালু অ্যানালাইসিস ও টেস্ট ডিজাইন টেকনিকস"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Test Case Documentation, Defect Lifecycle & Jira Bug Reporting",
          "bn": "মডিউল ২: টেস্ট কেস রাইটিং ও জিরা বাগ রিপোর্টিং"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Writing Professional Test Cases (Test ID, Pre-conditions, Steps, Expected vs Actual)",
            "bn": "প্রফেশনাল টেস্ট কেস তৈরির স্ট্যান্ডার্ড ফরম্যাট"
          },
          {
            "en": "Requirement Traceability Matrix (RTM) & Test Execution Reports",
            "bn": "রিকোয়ারমেন্ট ট্রেসিবিলিটি ম্যাট্রিক্স (RTM) তৈরি"
          },
          {
            "en": "Defect / Bug Life Cycle, Severity vs Priority, Logging Bugs with Steps & Screenshots in Jira",
            "bn": "জিরায় বাগ ক্রিয়েশন, সেভিয়ারিটি/প্রায়োরিটি ও ডিফেক্ট ট্র্যাকিং"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: API Testing & Automation with Postman",
          "bn": "মডিউল ৩: পোস্টম্যান এপিআই টেস্টিং ও অটোমেশন"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "HTTP Methods (GET, POST, PUT, DELETE, PATCH), Headers, Body & HTTP Status Codes",
            "bn": "এইচটিটিপি মেথডস, হেডারস ও স্ট্যাটাস কোডস"
          },
          {
            "en": "Postman Collections, Environment Variables, Global Variables & Auth (Bearer Token, API Key)",
            "bn": "পোস্টম্যান কালেকশন ও এনভায়রনমেন্ট ভেরিয়েবলস"
          },
          {
            "en": "Writing JavaScript Assertions in Postman (Status Code 200, Response Time, JSON Schema Validation)",
            "bn": "পোস্টম্যানে জাভাস্ক্রিপ্ট টেস্ট অ্যাসারশন ও অটোমেটেড রান"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: Web UI Automation with Cypress & Selenium WebDriver",
          "bn": "মডিউল ৪: সাইপ্রেস ও সেলিনিয়াম টেস্ট অটোমেশন"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Automation Testing Fundamentals: When to Automate, Tool Selection (Selenium vs Cypress vs Playwright)",
            "bn": "অটোমেশন টেস্টিং পরিচিতি ও ফ্রেমওয়ার্ক সিলেকশন"
          },
          {
            "en": "Finding Web Elements: CSS Selectors, XPath Strategies & Inspecting DOM",
            "bn": "সিএসএস সিলেক্টর ও এক্সপাথ (XPath) দিয়ে এলিমেন্ট খোঁজা"
          },
          {
            "en": "Cypress Setup: Writing Automated E2E Tests for Login, Form Fill-up, Cart & Checkout",
            "bn": "সাইপ্রেস দিয়ে অটোমেটেড ই-কমার্স টেস্ট স্ক্রিপ্ট তৈরি"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: Performance Testing (JMeter), ISTQB CTFL Prep & Career Guidelines",
          "bn": "মডিউল ৫: জেমিটার লোড টেস্টিং ও আইএসটিকিউবি প্রস্তুতি"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Apache JMeter: Thread Groups, Samplers, Listeners, Simulating Concurrent Users & Load Tests",
            "bn": "জেমিটার দিয়ে সার্ভারের লোড ও স্ট্রেস টেস্টিং"
          },
          {
            "en": "ISTQB Foundation Level (CTFL) Exam Overview, Sample Dumps & Mock Test",
            "bn": "আইএসটিকিউবি এক্সাম ডাম্পস ও প্রস্তুতি"
          },
          {
            "en": "SQA Engineer Resume Building, Portfolio on GitHub & Technical Interview Q&A",
            "bn": "এসকিউএ রেজুমে ও ইন্টারভিউ প্রস্তুতি"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "24 Live Hands-on SQA & Automation Lab Classes",
        "bn": "২৪ টি লাইভ প্র্যাকটিক্যাল এসকিউএ ল্যাব ক্লাস"
      },
      {
        "en": "Ready-to-use Jira Bug Templates & Cypress Test Repositories",
        "bn": "জিরা বাগ টেমপ্লেট ও সাইপ্রেস টেস্ট কোডবেস"
      },
      {
        "en": "ISTQB Certified Tester (CTFL) Question Bank & Guides",
        "bn": "আইএসটিকিউবি অফিসিয়াল প্রশ্নব্যাংক"
      },
      {
        "en": "Certified Software Quality Assurance Engineer Certificate",
        "bn": "সার্টিফাইড এসকিউএ ইঞ্জিনিয়ার সনদপত্র"
      }
    ],
    "reviews": [
      {
        "id": "r24",
        "name": "Sharmin Sultana",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "SQA Engineer at Dcastalia",
          "bn": "এসকিউএ ইঞ্জিনিয়ার"
        },
        "rating": 5,
        "comment": {
          "en": "The Postman API testing and Cypress automation classes were exceptionally well taught. Secured my job as an SQA Engineer right after completing the capstone project!",
          "bn": "পোস্টম্যান এপিআই টেস্টিং ও সাইপ্রেস অটোমেশনের ক্লাসগুলো আমাকে দ্রুত এসকিউএ জবে প্রবেশ করতে সাহায্য করেছে।"
        },
        "date": "3 Weeks Ago"
      }
    ]
  },
  {
    "id": "25",
    "slug": "diploma-full-stack-web-development",
    "title": {
      "en": "Diploma in Full Stack Web Development",
      "bn": "ডিপ্লোমা ইন ফুল স্ট্যাক ওয়েব ডেভেলপমেন্ট"
    },
    "subtitle": {
      "en": "Comprehensive 6-Month Career Track: Frontend (React 19, Next.js 15), Backend (Node.js, Express), Databases (MongoDB, PostgreSQL), TypeScript, Docker & Live Enterprise Projects",
      "bn": "৬ মাস মেয়াদী সম্পূর্ণ ক্যারিয়ার ট্র্যাক: রিঅ্যাক্ট ১৯, নেক্সট.জেএস ১৫, নোড.জেএস, পোস্টগ্রেসকিউএল, ডকার ও এন্টারপ্রাইজ প্রজেক্টস"
    },
    "category": "diploma",
    "categoryLabel": {
      "en": "Diploma Programs",
      "bn": "ডিপ্লোমা প্রোগ্রাম"
    },
    "badge": {
      "en": "6-MONTH DIPLOMA",
      "bn": "৬ মাস মেয়াদী ডিপ্লোমা"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 210,
    "enrolledCount": "190+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "20,000৳",
    "rawFee": 20000,
    "originalFee": "40,000৳",
    "duration": {
      "en": "6 Months",
      "bn": "৬ মাস"
    },
    "classesCount": {
      "en": "48 Classes",
      "bn": "৪৮ টি ক্লাস"
    },
    "image": "/images/course thumbnail/diploma in full stack.png",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Diploma%20in%20Full%20Stack%20Web%20Development%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Engr. Tanvir Hasan & Ashraf Hossain",
      "designation": {
        "en": "Lead Full Stack & Cloud Solution Architects",
        "bn": "লিড ফুল স্ট্যাক ও ক্লাউড সলিউশন আর্কিটেক্টস"
      },
      "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "12+ combined years building international SaaS products, scalable REST/GraphQL APIs, and mentoring 3,000+ full-stack software engineers.",
        "bn": "১২+ বছরের এন্টারপ্রাইজ ওয়েব আর্কিটেকচার, ডিস্ট্রিবিউটেড সিস্টেমস ও সফল ডেভেলপার তৈরির অভিজ্ঞতা।"
      },
      "experience": "12+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Our flagship 6-Month Professional Diploma covers complete end-to-end software engineering. Master modern JavaScript/TypeScript, React 19, Next.js 15 SSR, Node.js & Express backends, MongoDB, PostgreSQL relational schemas, Prisma ORM, Redis caching, Docker containerization, CI/CD pipelines, and 5 production-grade capstone web projects.",
      "bn": "৬ মাস মেয়াদী সম্পূর্ণ ক্যারিয়ার ওরিয়েন্টেড প্রফেশনাল ডিপ্লোমা কোর্স। ক্লায়েন্ট-সাইড ইউআই থেকে শুরু করে সিকিউর ব্যাকএন্ড, ডাটাবেস ডিজাইন, ডকার এবং ক্লাউড ডেপ্লয়মেন্ট পুঙ্খানুপুঙ্খভাবে শিখে সফটওয়্যার ইঞ্জিনিয়ার হিসেবে ক্যারিয়ার শুরু করুন।"
    },
    "fullDescription": {
      "en": "This intensive diploma is designed to take students from basics to job-ready Full Stack Engineers. Includes dedicated 1-on-1 mentorship, GitHub code reviews, portfolio projects, international interview preparation, and guaranteed job placement support.",
      "bn": "বাস্তব কর্মক্ষেত্রের সম্পূর্ণ উপযোগী দীর্ঘমেয়াদী ডিপ্লোমা প্রোগ্রাম। প্রতিটি মডিউলে রয়েছে ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রজেক্ট, মেন্টরশিপ ও জব প্লেসমেন্ট সেল।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "React 19 & Next.js 15 SSR",
          "bn": "মডার্ন ফ্রন্টএন্ড স্ট্যাক"
        },
        "desc": {
          "en": "Server components, TypeScript, Tailwind CSS & state management.",
          "bn": "নেক্সট.জেএস ১৫ ও টাইপস্ক্রিপ্ট দিয়ে হাই-পারফরম্যান্স ইউআই।"
        },
        "icon": "Code2"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Node, Express & Microservices",
          "bn": "স্কেলেবল ব্যাকএন্ড সিস্টেম"
        },
        "desc": {
          "en": "REST/GraphQL, JWT, Redis cache, WebSockets & Docker.",
          "bn": "এন্টারপ্রাইজ ব্যাকএন্ড ও সিকিউর মাইক্রোসার্ভিসেস।"
        },
        "icon": "Server"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Dual Databases (SQL & NoSQL)",
          "bn": "ডুয়াল ডাটাবেস মাস্টারি"
        },
        "desc": {
          "en": "PostgreSQL, Prisma ORM, MongoDB & complex aggregations.",
          "bn": "পোস্টগ্রেস ও মঙ্গোডিবি দিয়ে অপ্টিমাইজড ডাটা আর্কিটেকচার।"
        },
        "icon": "Database"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Build full-scale enterprise web applications using React 19, Next.js 15, and TypeScript.",
        "bn": "রিঅ্যাক্ট ও নেক্সট.জেএস ১৫ দিয়ে পূর্ণাঙ্গ এন্টারপ্রাইজ ওয়েব অ্যাপ তৈরি।"
      },
      {
        "en": "Design and implement production-ready REST & GraphQL APIs with Node.js and Express.",
        "bn": "নোড.জেএস দিয়ে সিকিউর ও স্কেলেবল এপিআই তৈরি।"
      },
      {
        "en": "Master SQL (PostgreSQL with Prisma) and NoSQL (MongoDB with Mongoose) database architectures.",
        "bn": "পোস্টগ্রেসকিউএল ও মঙ্গোডিবি ডাটাবেস ডিজাইন ও ট্রানজ্যাকশন।"
      },
      {
        "en": "Implement enterprise authentication (JWT, OAuth2, RBAC) and payment gateways (Stripe, bKash).",
        "bn": "জেডব্লিউটি অথেনটিকেশন ও পেমেন্ট গেটওয়ে ইন্টিগ্রেশন।"
      },
      {
        "en": "Containerize applications with Docker, write CI/CD workflows, and deploy to AWS and Vercel.",
        "bn": "ডকার ও এডব্লিউএস ক্লাউডে অটোমেটেড লাইভ ডেপ্লয়মেন্ট।"
      },
      {
        "en": "Complete 5 portfolio-ready capstone applications and pass technical coding interviews.",
        "bn": "৫টি রিয়েল-ওয়ার্ল্ড প্রজেক্ট পোর্টফোলিও ও টেকনিক্যাল ইন্টারভিউ প্রস্তুতি।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Advanced Frontend Engineering (React 19, Next.js 15 & TypeScript)",
          "bn": "মডিউল ১: এডভান্সড ফ্রন্টএন্ড ইঞ্জিনিয়ারিং"
        },
        "duration": {
          "en": "10 Classes • 20 Hours",
          "bn": "১০ টি ক্লাস • ২০ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "Modern TypeScript, ES6+, Clean Architecture & Component Design",
            "bn": "টাইপস্ক্রিপ্ট, ইএস৬+ ও মডার্ন কম্পোনেন্ট আর্কিটেকচার"
          },
          {
            "en": "React 19 Hooks, Custom Hooks, Redux Toolkit & TanStack Query",
            "bn": "রিঅ্যাক্ট ১৯ কোর, রিডাক্স টুলকিট ও ট্যানস্ট্যাক কোয়েরি"
          },
          {
            "en": "Next.js 15 App Router, Server Components, Server Actions & Core Web Vitals",
            "bn": "নেক্সট.জেএস ১৫ সার্ভার কম্পোনেন্টস ও এসইও অপটিমাইজেশন"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Scalable Backend Architecture & Microservices (Node.js & Express)",
          "bn": "মডিউল ২: স্কেলেবল ব্যাকএন্ড ও মাইক্রোসার্ভিসেস"
        },
        "duration": {
          "en": "10 Classes • 20 Hours",
          "bn": "১০ টি ক্লাস • ২০ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "Node.js Event Loop, Streams, Buffers & Asynchronous Architecture",
            "bn": "নোড.জেএস ইভেন্ট লুপ ও অ্যাসিনক্রোনাস ডিজাইন"
          },
          {
            "en": "Express.js MVC Pattern, Clean Controllers, Zod Validation & Global Error Handlers",
            "bn": "এক্সপ্রেস এমভিসি আর্কিটেকচার ও ডাটা ভ্যালিডেশন"
          },
          {
            "en": "JWT Refresh Tokens, RBAC Authorization & Socket.IO Real-time Engine",
            "bn": "জেডব্লিউটি অথেনটিকেশন ও রিয়েল-টাইম ওয়েব সকেট"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Database Engineering (PostgreSQL, Prisma ORM & MongoDB)",
          "bn": "মডিউল ৩: ডাটাবেস ইঞ্জিনিয়ারিং (এসকিউএল ও নোএসকিউএল)"
        },
        "duration": {
          "en": "10 Classes • 20 Hours",
          "bn": "১০ টি ক্লাস • ২০ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "PostgreSQL Relational Schema Design, Normalization, Foreign Keys & Indexes",
            "bn": "পোস্টগ্রেসকিউএল স্কিমা ডিজাইন ও ইনডেক্সিং"
          },
          {
            "en": "Prisma ORM: Migrations, Relations, Transactions & Query Optimization",
            "bn": "প্রিজমা ওআরএম মাইগ্রেশন ও ট্রানজ্যাকশন"
          },
          {
            "en": "MongoDB Aggregation Pipelines, Sharding & Redis In-Memory Caching",
            "bn": "মঙ্গোডিবি এগ্রিগেশন ও রেডিস ক্যাশিং"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: DevOps, Docker, AWS Cloud Deployment & CI/CD Pipelines",
          "bn": "মডিউল ৪: ডেভঅপ্স, ডকার ও এডব্লিউএস ডেপ্লয়মেন্ট"
        },
        "duration": {
          "en": "10 Classes • 20 Hours",
          "bn": "১০ টি ক্লাস • ২০ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "Dockerizing Full Stack Applications with Multi-stage Builds & Docker Compose",
            "bn": "ডকার ও ডকার কম্পোজ দিয়ে কন্টেইনারাইজেশন"
          },
          {
            "en": "GitHub Actions Automated CI/CD Pipelines (Test, Build, Deploy)",
            "bn": "গিটহাব অ্যাকশনস স্বয়ংক্রিয় সিআই/সিডি পাইপলাইন"
          },
          {
            "en": "Deploying on AWS EC2, S3, Nginx Reverse Proxy & SSL Certificates",
            "bn": "এডব্লিউএস ইসি২ ও এনজিনিক্স রিভার্স প্রক্সি কনফিগারেশন"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: Enterprise Capstone SaaS Projects & Job Placement Coaching",
          "bn": "মডিউল ৫: এন্টারপ্রাইজ ক্যাপস্টোন প্রজেক্ট ও জব প্লেসমেন্ট"
        },
        "duration": {
          "en": "8 Classes • 16 Hours",
          "bn": "৮ টি ক্লাস • ১৬ ঘণ্টা"
        },
        "lessonsCount": 10,
        "topics": [
          {
            "en": "Building Multi-Vendor SaaS Marketplace with Stripe & bKash Gateways",
            "bn": "মাল্টি-ভেন্ডর সাস মার্কেটপ্লেস প্রজেক্ট তৈরি"
          },
          {
            "en": "Resume Building, GitHub Portfolio Polish & Mock Technical Coding Interviews",
            "bn": "প্রফেশনাল রেজুমে, গিটহাব পোর্টফোলিও ও মক ইন্টারভিউ"
          },
          {
            "en": "Direct Company Referrals & Job Placement Assistance",
            "bn": "সরাসরি সফটওয়্যার কোম্পানিতে চাকরির সুপারিশ ও প্লেসমেন্ট"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "48 Live Intensive Full Stack Classes with Real Project Codebases",
        "bn": "৪৮ টি লাইভ প্র্যাকটিক্যাল ডিপ্লোমা ক্লাস"
      },
      {
        "en": "5 Production-Grade SaaS Projects Source Code & Architecture Blueprints",
        "bn": "৫টি প্রোডাকশন-রেডি প্রজেক্টের সম্পূর্ণ সোর্স কোড"
      },
      {
        "en": "1-on-1 Code Review & Dedicated Career Placement Assistance",
        "bn": "১-অন-১ কোড রিভিউ ও ডেডিকেটেড জব প্লেসমেন্ট"
      },
      {
        "en": "Verified Professional Diploma in Full Stack Engineering Certificate",
        "bn": "প্রফেশনাল ফুল স্ট্যাক ডিপ্লোমা সনদপত্র"
      }
    ],
    "reviews": [
      {
        "id": "r25",
        "name": "Sabbir Ahmed",
        "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "Software Engineer at Brain Station 23",
          "bn": "সফটওয়্যার ইঞ্জিনিয়ার"
        },
        "rating": 5,
        "comment": {
          "en": "This 6-month diploma changed my career! The depth of Next.js 15, PostgreSQL, and Docker was unmatched. Secured a Software Engineer role before even completing the final project.",
          "bn": "৬ মাসের এই ডিপ্লোমা কোর্সটি আমার ক্যারিয়ার বদলে দিয়েছে। কোর্স চলাকালীনই টপ সফটওয়্যার কোম্পানিতে জব অফার পেয়েছি।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "26",
    "slug": "diploma-ai-data-science",
    "title": {
      "en": "Diploma in AI & Data Science",
      "bn": "ডিপ্লোমা ইন এআই ও ডাটা সায়েন্স"
    },
    "subtitle": {
      "en": "Comprehensive 6-Month Career Track: Python, NumPy, Pandas, Scikit-Learn, Deep Learning (PyTorch), LLMs, RAG Pipelines & AI Product Deployment",
      "bn": "৬ মাস মেয়াদী প্রফেশনাল ডিপ্লোমা: পাইথন, ডাটা অ্যানালাইসিস, মেশিন লার্নিং, ডিপ লার্নিং, এলএলএম ও এআই প্রজেক্টস"
    },
    "category": "diploma",
    "categoryLabel": {
      "en": "Diploma Programs",
      "bn": "ডিপ্লোমা প্রোগ্রাম"
    },
    "badge": {
      "en": "6-MONTH DIPLOMA",
      "bn": "৬ মাস মেয়াদী ডিপ্লোমা"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 185,
    "enrolledCount": "165+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "22,000৳",
    "rawFee": 22000,
    "originalFee": "45,000৳",
    "duration": {
      "en": "6 Months",
      "bn": "৬ মাস"
    },
    "classesCount": {
      "en": "48 Classes",
      "bn": "৪৮ টি ক্লাস"
    },
    "image": "/images/course thumbnail/diploma in ai and data science.png",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Diploma%20in%20AI%20%26%20Data%20Science%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Dr. Asif Mahmud & Engr. Zahid Hasan",
      "designation": {
        "en": "Principal AI Researchers & Data Science Leads",
        "bn": "প্রিন্সিপাল এআই রিসার্চার ও ডাটা সায়েন্স লিডস"
      },
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "11+ years leading enterprise generative AI initiatives, NLP transformer architectures, computer vision, and machine learning production pipelines.",
        "bn": "১১+ বছরের মেশিন লার্নিং, জেনারেটিভ এআই, এলএলএম এবং ডাটা সায়েন্স প্রজেক্ট আর্কিটেকচার অভিজ্ঞতা।"
      },
      "experience": "11+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Launch your career as an Artificial Intelligence & Data Science Specialist. Master Python for data science, NumPy, Pandas, Matplotlib/Seaborn, statistical machine learning with Scikit-Learn, Deep Neural Networks with PyTorch, Natural Language Processing (NLP), Large Language Models (LLMs), LangChain, RAG Vector Search, and production AI API deployment with FastAPI and Docker.",
      "bn": "এআই এবং ডাটা সায়েন্সে গ্লোবাল ক্যারিয়ার গড়ার ৬ মাস মেয়াদী সম্পূর্ণ ডিপ্লোমা কোর্স। পাইথন ডাটা সায়েন্স, মেশিন লার্নিং, ডিপ লার্নিং (PyTorch), এলএলএম ফাইন-টিউনিং, র‍্যাগ (RAG) ও জেনারেটিভ এআই অ্যাপ্লিকেশন তৈরি শিখবেন।"
    },
    "fullDescription": {
      "en": "This program blends rigorous foundational data science with cutting-edge Generative AI and autonomous agent engineering. You will train custom models on real-world datasets, build enterprise AI assistants with Retrieval-Augmented Generation (RAG), and deploy scalable inference servers.",
      "bn": "হ্যান্ডস-অন কোডিং ও ইন্ডাস্ট্রি প্রজেক্ট নির্ভর ডিপ্লোমা প্রোগ্রাম যা আপনাকে আন্তর্জাতিক এআই ইঞ্জিনিয়ার ও ডাটা সায়েন্টিস্ট পদে চাকরির যোগ্য করে তুলবে।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Data Science & Machine Learning",
          "bn": "ডাটা সায়েন্স ও এমএল"
        },
        "desc": {
          "en": "Pandas, NumPy, EDA, Regression, Classification & Scikit-Learn.",
          "bn": "ডাটা ক্লিনিং, ফিচার ইঞ্জিনিয়ারিং ও এমএল অ্যালগরিদম।"
        },
        "icon": "Database"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Deep Learning with PyTorch",
          "bn": "ডিপ লার্নিং (PyTorch)"
        },
        "desc": {
          "en": "CNNs, RNNs, Vision Transformers & GPU accelerated training.",
          "bn": "নিউরাল নেটওয়ার্ক, কম্পিউটার ভিশন ও ডিপ লার্নিং।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv3",
        "title": {
          "en": "LLMs, RAG & GenAI Products",
          "bn": "এলএলএম, র‍্যাগ ও জেনএআই"
        },
        "desc": {
          "en": "LangChain, Vector DBs, OpenAI APIs & FastAPI deployment.",
          "bn": "কাস্টম এআই চ্যাটবট, ভেক্টর সার্চ ও প্রোডাকশন এআই এপিআই।"
        },
        "icon": "Code2"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Perform exploratory data analysis and predictive modeling using Python, Pandas, and Scikit-Learn.",
        "bn": "পাইথন ও পান্ডাস দিয়ে ডাটা অ্যানালাইসিস ও প্রেডিক্টিভ মডেল তৈরি।"
      },
      {
        "en": "Train and optimize deep learning neural networks with PyTorch for vision and NLP tasks.",
        "bn": "পাইটর্চ দিয়ে ডিপ লার্নিং নিউরাল নেটওয়ার্ক ট্রেনিং।"
      },
      {
        "en": "Build custom Retrieval-Augmented Generation (RAG) pipelines with Vector Databases (Qdrant/Pinecone).",
        "bn": "ভেক্টর ডাটাবেস ও র‍্যাগ দিয়ে কাস্টম এআই অ্যাসিস্ট্যান্ট তৈরি।"
      },
      {
        "en": "Fine-tune open-source Large Language Models (Llama 3, Mistral) using LoRA / QLoRA.",
        "bn": "ওপেন সোর্স এলএলএম ফাইন-টিউনিং ও অপ্টিমাইজেশন।"
      },
      {
        "en": "Deploy machine learning models as production REST APIs using FastAPI and Docker.",
        "bn": "ফাস্টএপিআই ও ডকার দিয়ে ক্লাউডে এআই মডেল ডেপ্লয়মেন্ট।"
      },
      {
        "en": "Complete 4 capstone AI projects for your verified portfolio and international job applications.",
        "bn": "৪টি রিয়েল-ওয়ার্ল্ড এআই প্রজেক্ট পোর্টফোলিও ও ইন্টারভিউ প্রস্তুতি।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Python for Data Science, Statistics & Exploratory Data Analysis",
          "bn": "মডিউল ১: ডাটা সায়েন্সের জন্য পাইথন ও ডাটা অ্যানালাইসিস"
        },
        "duration": {
          "en": "10 Classes • 20 Hours",
          "bn": "১০ টি ক্লাস • ২০ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "Advanced Python OOP, Functional Programming, NumPy Arrays & Vectorization",
            "bn": "পাইথন ওওপি ও নামপাই ভেক্টরাইজেশন"
          },
          {
            "en": "Data Wrangling with Pandas: Indexing, Groupby, Merging & Handling Missing Data",
            "bn": "পান্ডাস দিয়ে ডাটা প্রসেসিং ও ক্লিনিং"
          },
          {
            "en": "Exploratory Data Analysis (EDA) with Matplotlib, Seaborn & Statistical Inferences",
            "bn": "ম্যাটপ্লটলিব ও সিবর্ন দিয়ে ডাটা ভিজ্যুয়ালাইজেশন"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Supervised & Unsupervised Machine Learning (Scikit-Learn)",
          "bn": "মডিউল ২: মেশিন লার্নিং অ্যালগরিদম ও মডেল ট্রেনিং"
        },
        "duration": {
          "en": "10 Classes • 20 Hours",
          "bn": "১০ টি ক্লাস • ২০ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "Linear/Logistic Regression, Decision Trees, Random Forests & XGBoost",
            "bn": "রিগ্রেশন, ডিসিশন ট্রি ও এক্সজিবুস্ট অ্যালগরিদম"
          },
          {
            "en": "Unsupervised Learning: K-Means Clustering, PCA Dimensionality Reduction",
            "bn": "কে-মিন্স ক্লাস্টারিং ও পিসিএ ডাইমেনশনালিটি রিডাকশন"
          },
          {
            "en": "Model Evaluation: Cross-Validation, Hyperparameter Tuning & ROC-AUC",
            "bn": "হাইপারপ্যারামিটার টিউনিং ও মডেল ইভ্যালুয়েশন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Deep Learning, Computer Vision & NLP with PyTorch",
          "bn": "মডিউল ৩: ডিপ লার্নিং ও কম্পিউটার ভিশন (PyTorch)"
        },
        "duration": {
          "en": "10 Classes • 20 Hours",
          "bn": "১০ টি ক্লাস • ২০ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "Neural Network Architectures, Forward/Backpropagation, Loss Functions & Optimizers",
            "bn": "নিউরাল নেটওয়ার্ক আর্কিটেকচার ও ব্যাকপ্রপাগেশন"
          },
          {
            "en": "Convolutional Neural Networks (CNNs), ResNet & Transfer Learning for Image Classification",
            "bn": "সিএনএন ও ট্রান্সফার লার্নিং দিয়ে ইমেজ ক্লাসিফিকেশন"
          },
          {
            "en": "Recurrent Networks, LSTMs & Transformer Attention Mechanisms",
            "bn": "এলএসটিএম ও ট্রান্সফরমার অ্যাটেনশন মেকানিজম"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: Large Language Models (LLMs), LangChain & RAG Pipelines",
          "bn": "মডিউল ৪: এলএলএম, ল্যাংচেইন ও র‍্যাগ সিস্টেমস"
        },
        "duration": {
          "en": "10 Classes • 20 Hours",
          "bn": "১০ টি ক্লাস • ২০ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "OpenAI API, Anthropic Claude & Open-Source LLMs (Llama 3, Mistral)",
            "bn": "এলএলএম এপিআই ও প্রম্পট ইঞ্জিনিয়ারিং"
          },
          {
            "en": "LangChain & LlamaIndex: Text Chunking, Embeddings & Vector Databases (Qdrant/Pinecone)",
            "bn": "ল্যাংচেইন ও ভেক্টর ডাটাবেস দিয়ে র‍্যাগ (RAG) পাইপলাইন"
          },
          {
            "en": "Multi-Agent Systems with CrewAI, Tool Calling & Structured Output Extraction",
            "bn": "মাল্টি-এজেন্ট সিস্টেমস ও অটোনোমাস এআই এজেন্টস"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: Production AI Deployment (FastAPI, Docker & Cloud)",
          "bn": "মডিউল ৫: প্রোডাকশন এআই ডেপ্লয়মেন্ট ও ক্যাপস্টোন"
        },
        "duration": {
          "en": "8 Classes • 16 Hours",
          "bn": "৮ টি ক্লাস • ১৬ ঘণ্টা"
        },
        "lessonsCount": 10,
        "topics": [
          {
            "en": "Building Scalable AI Microservices with FastAPI and Async Endpoints",
            "bn": "ফাস্টএপিআই দিয়ে এআই মাইক্রোসার্ভিস তৈরি"
          },
          {
            "en": "Containerizing AI Models with Docker and Deploying on AWS GPU Instances",
            "bn": "ডকার ও এডব্লিউএস ক্লাউডে এআই সার্ভার ডেপ্লয়"
          },
          {
            "en": "End-to-End Enterprise AI Capstone Project & Technical Portfolio Showcase",
            "bn": "কমপ্লিট এন্টারপ্রাইজ এআই প্রজেক্ট ও ক্যারিয়ার গাইড"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "48 Live Hands-on AI & Data Science Masterclasses",
        "bn": "৪৮ টি লাইভ প্র্যাকটিক্যাল এআই ল্যাব ক্লাস"
      },
      {
        "en": "Full Jupyter Notebooks, PyTorch Models & Production Codebases",
        "bn": "সম্পূর্ণ কোডবেস, জুপিটার নোটবুক ও মডেলস"
      },
      {
        "en": "GPU Cloud Computing Practice Credits & Lab Setup Guides",
        "bn": "জিপিইউ ক্লাউড কম্পিউটিং ল্যাব গাইড"
      },
      {
        "en": "Verified Professional Diploma in Artificial Intelligence Certificate",
        "bn": "প্রফেশনাল ডিপ্লোমা ইন এআই সনদপত্র"
      }
    ],
    "reviews": [
      {
        "id": "r26",
        "name": "Mahir Faysal",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "AI Engineer at DataCraft AI",
          "bn": "এআই ইঞ্জিনিয়ার"
        },
        "rating": 5,
        "comment": {
          "en": "The LangChain RAG pipeline and PyTorch deep learning modules were phenomenal. I built my company's custom AI support agent right during this diploma.",
          "bn": "ল্যাংচেইন র‍্যাগ পাইপলাইন এবং পাইটর্চের ক্লাসগুলো অসাধারণ ছিল। কোর্স চলাকালীনই কাস্টম এআই প্রজেক্ট তৈরি করতে পেরেছি।"
        },
        "date": "3 Weeks Ago"
      }
    ]
  },
  {
    "id": "27",
    "slug": "diploma-cyber-security-ethical-hacking",
    "title": {
      "en": "Diploma in Cyber Security & Ethical Hacking",
      "bn": "ডিপ্লোমা ইন সাইবার সিকিউরিটি ও ইথিক্যাল হ্যাকিং"
    },
    "subtitle": {
      "en": "Comprehensive 6-Month Career Track: Kali Linux, Network Penetration, Web App VAPT (OWASP Top 10), Blue Team SOC Defense (Splunk SIEM) & Cloud Security",
      "bn": "৬ মাস মেয়াদী ডিপ্লোমা: কালি লিনাক্স, রেড টিম পেনিট্রেশন টেস্টিং, বার্প সুইট, এসওসি ব্লু টিম ও ক্লাউড সিকিউরিটি"
    },
    "category": "diploma",
    "categoryLabel": {
      "en": "Diploma Programs",
      "bn": "ডিপ্লোমা প্রোগ্রাম"
    },
    "badge": {
      "en": "6-MONTH DIPLOMA",
      "bn": "৬ মাস মেয়াদী ডিপ্লোমা"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 175,
    "enrolledCount": "150+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "22,000৳",
    "rawFee": 22000,
    "originalFee": "45,000৳",
    "duration": {
      "en": "6 Months",
      "bn": "৬ মাস"
    },
    "classesCount": {
      "en": "48 Classes",
      "bn": "৪৮ টি ক্লাস"
    },
    "image": "/images/course thumbnail/diploma in cyber security.png",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Diploma%20in%20Cyber%20Security%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Engr. Kazi Ashikur Rahman & Moniruzzaman",
      "designation": {
        "en": "Lead Red Team Pentester & Enterprise SOC Architects",
        "bn": "লিড রেড টিম পেনিট্রেশন টেস্টার ও এসওসি আর্কিটেক্টস"
      },
      "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "12+ combined years conducting bank cyber security audits, offensive penetration testing, incident response, and SOC center operations.",
        "bn": "১২+ বছরের ব্যাংক ও মাল্টিন্যাশনাল সাইবার সিকিউরিটি অডিট, পেনিট্রেশন টেস্টিং ও ডিফেন্সিভ সিকিউরিটি অভিজ্ঞতা।"
      },
      "experience": "12+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "The complete 6-Month Professional Diploma in Cyber Security covering both Offensive Security (Ethical Hacking / Red Teaming) and Defensive Security (SOC Blue Teaming). Master Kali Linux, Nmap, Metasploit, Burp Suite Pro, OWASP Top 10, Splunk SIEM log monitoring, Wireshark forensics, malware triage, and corporate security governance.",
      "bn": "রেড টিম (অফেনসিভ হ্যাকিং) এবং ব্লু টিম (ডিফেনসিভ এসওসি) সমন্বয়ে গঠিত ৬ মাস মেয়াদী সম্পূর্ণ সাইবার সিকিউরিটি ডিপ্লোমা। ব্যাংক, টেলিকম ও আন্তর্জাতিক প্রতিষ্ঠানে সাইবার ডিফেন্ডার বা পেনিট্রেশন টেস্টার হিসেবে নিশ্চিত ক্যারিয়ার গড়ুন।"
    },
    "fullDescription": {
      "en": "With cyber threats rising exponentially, enterprises are investing heavily in offensive vulnerability assessment and 24/7 SOC operations. This hands-on diploma provides virtual lab environments, live target attacks, digital forensics, and preparation for globally recognized certifications (CEH, OSCP, CompTIA Security+, CySA+).",
      "bn": "বাস্তব ল্যাব ও সিমুলেশনের মাধ্যমে সার্ভার ও নেটওয়ার্কের ত্রুটি খোঁজা, হ্যাকিং প্রতিরোধ এবং রিয়েল-টাইম থ্রেট মনিটরিংয়ের পূর্ণাঙ্গ প্র্যাকটিক্যাল ডিপ্লোমা।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Red Team & Pentesting",
          "bn": "রেড টিম ও হ্যাকিং"
        },
        "desc": {
          "en": "Kali Linux, Metasploit, Burp Suite, SQLi & XSS exploitation.",
          "bn": "সার্ভার ও ওয়েব অ্যাপ্লিকেশনের নিরাপত্তা ত্রুটি হ্যাক ও টেস্ট।"
        },
        "icon": "ShieldCheck"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Blue Team & SIEM (Splunk)",
          "bn": "ব্লু টিম ও এসআইইএম"
        },
        "desc": {
          "en": "Splunk SIEM, Wazuh, Wireshark packet forensics & incident response.",
          "bn": "স্প্লাঙ্ক দিয়ে সাইবার অ্যাটাক মনিটর ও প্রতিরোধ।"
        },
        "icon": "Server"
      },
      {
        "id": "cv3",
        "title": {
          "en": "VAPT & Bug Bounty",
          "bn": "ভিএপিটি ও বাগ বাউন্টি"
        },
        "desc": {
          "en": "Professional VAPT reports, HackerOne bounty hunting & CEH labs.",
          "bn": "প্রফেশনাল ভিএপিটি অডিট রিপোর্ট ও আন্তর্জাতিক বাগ বাউন্টি।"
        },
        "icon": "Zap"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Execute professional Vulnerability Assessment & Penetration Testing (VAPT) across enterprise networks.",
        "bn": "এন্টারপ্রাইজ নেটওয়ার্কে প্রফেশনাল ভিএপিটি পেনিট্রেশন টেস্টিং পরিচালনা।"
      },
      {
        "en": "Exploit and remediate critical OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF, IDOR, SSRF).",
        "bn": "ওয়েব অ্যাপ্লিকেশনের শীর্ষ ১০ নিরাপত্তা ত্রুটি শনাক্ত ও সমাধান।"
      },
      {
        "en": "Operate enterprise SIEM platforms (Splunk, Wazuh) to detect intrusion attempts in real-time.",
        "bn": "স্প্লাঙ্ক ও ওয়াজুহ এসআইইএম দিয়ে রিয়েল-টাইম সাইবার অ্যাটাক শনাক্তকরণ।"
      },
      {
        "en": "Analyze malware samples and perform network traffic forensic packet captures with Wireshark.",
        "bn": "ম্যালওয়্যার ট্রায়াজ ও ওয়্যারশার্ক দিয়ে নেটওয়ার্ক ফরেনসিক্স বিশ্লেষণ।"
      },
      {
        "en": "Write executive-ready cyber security audit reports with concrete remediation blueprints.",
        "bn": "আন্তর্জাতিক মানের সাইবার সিকিউরিটি অডিট রিপোর্ট তৈরি।"
      },
      {
        "en": "Prepare thoroughly for CEH Practical, OSCP, and SOC Analyst Tier 1/2 interviews.",
        "bn": "সিইএইচ, ওএসসিপি ও এসওসি অ্যানালিস্ট চাকরির সম্পূর্ণ প্রস্তুতি।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Ethical Hacking Foundations, Networking & OSINT Reconnaissance",
          "bn": "মডিউল ১: ইথিক্যাল হ্যাকিং ফাউন্ডেশন ও ওএসআইএনটি"
        },
        "duration": {
          "en": "10 Classes • 20 Hours",
          "bn": "১০ টি ক্লাস • ২০ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "Cyber Laws, Ethical Scopes, Kali Linux CLI, Tor, ProxyChains & Anonymity",
            "bn": "সাইবার আইন, এথিক্স ও কালি লিনাক্স অ্যানোনিমিটি"
          },
          {
            "en": "Active/Passive OSINT: Shodan, WHOIS, DNS Enumeration & Google Dorking",
            "bn": "শোডান ও ডিএনএস দিয়ে টার্গেটের তথ্য সংগ্রহ"
          },
          {
            "en": "Nmap Port Scanning, Firewall Evasion & Nessus Vulnerability Scanning",
            "bn": "এনম্যাপ এডভান্সড স্ক্যান ও নেসাস স্ক্যানার পরিচালনা"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Network Exploitation, Metasploit & Payload Crafting",
          "bn": "মডিউল ২: নেটওয়ার্ক এক্সপ্লয়টেশন ও মেটাসপ্লয়েট"
        },
        "duration": {
          "en": "10 Classes • 20 Hours",
          "bn": "১০ টি ক্লাস • ২০ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "Metasploit Framework: Auxiliary Modules, Exploits, Payloads & Meterpreter Shells",
            "bn": "মেটাসপ্লয়েট আর্কিটেকচার ও রিমোট শেল এক্সেস"
          },
          {
            "en": "Msfvenom Custom Payloads, Encoding & Antivirus (AV) Bypass Techniques",
            "bn": "এমএসএফভেনম পেলোড ও এন্টিভাইরাস বাইপাস"
          },
          {
            "en": "Wi-Fi WPA2/WPA3 Handshake Cracking, Evil Twin Attacks & Hashcat",
            "bn": "ওয়াইফাই সিকিউরিটি অডিট ও হ্যাশক্যাট পাসওয়ার্ড ক্র্যাকিং"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Web Application Security, Burp Suite & OWASP Top 10",
          "bn": "মডিউল ৩: ওয়েব অ্যাপ সিকিউরিটি ও ওডব্লিউএএসপি"
        },
        "duration": {
          "en": "10 Classes • 20 Hours",
          "bn": "১০ টি ক্লাস • ২০ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "Burp Suite Pro: Target Mapping, Repeater, Intruder & Automated Extensions",
            "bn": "বার্প সুইট দিয়ে ওয়েব অ্যাপ সিকিউরিটি অডিট"
          },
          {
            "en": "SQL Injection, Cross-Site Scripting (XSS), CSRF, IDOR & SSRF Exploitation",
            "bn": "এসকিউএল ইনজেকশন, এক্সএসএস ও আইডিডিওআর ত্রুটি কাজে লাগানো"
          },
          {
            "en": "Bug Bounty Hunting Strategies on HackerOne & Bugcrowd",
            "bn": "হ্যাকারওয়ান ও বাগক্রাউডে সফল বাগ হান্টিং কৌশল"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: Blue Team Defense, SIEM (Splunk & Wazuh) & Traffic Forensics",
          "bn": "মডিউল ৪: এসওসি ব্লু টিম ডিফেন্স ও স্প্লাঙ্ক এসআইইএম"
        },
        "duration": {
          "en": "10 Classes • 20 Hours",
          "bn": "১০ টি ক্লাস • ২০ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "Splunk SIEM Architecture, SPL Query Mastery & Real-time Alerting Rules",
            "bn": "স্প্লাঙ্ক এসপিএল কুয়েরি ও সাইবার অ্যালার্ট তৈরি"
          },
          {
            "en": "Wazuh Open Source SIEM: Agent Deployment & File Integrity Monitoring",
            "bn": "ওয়াজুহ এজেন্ট ও ফাইল ইন্টিগ্রিটি মনিটরিং"
          },
          {
            "en": "Wireshark Packet Forensics, Deep Packet Inspection & Snort IDS Rules",
            "bn": "ওয়্যারশার্ক নেটওয়ার্ক ফরেনসিক্স ও স্নোর্ট আইডিএস"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: Incident Response, Malware Triage & VAPT Audit Capstone",
          "bn": "মডিউল ৫: ইন্সিডেন্ট রেসপন্স ও ভিএপিটি অডিট ক্যাপস্টোন"
        },
        "duration": {
          "en": "8 Classes • 16 Hours",
          "bn": "৮ টি ক্লাস • ১৬ ঘণ্টা"
        },
        "lessonsCount": 10,
        "topics": [
          {
            "en": "NIST & SANS Incident Response Lifecycle, Live Ransomware Containment Drill",
            "bn": "র‍্যানসমওয়্যার কনটেইনমেন্ট ও ইন্সিডেন্ট রেসপন্স ড্রিল"
          },
          {
            "en": "Static & Dynamic Malware Triage with Sandbox Analysis & YARA Rules",
            "bn": "ম্যালওয়্যার ট্রায়াজ ও স্যান্ডবক্স অ্যানালাইসিস"
          },
          {
            "en": "Writing Comprehensive VAPT Audit Reports & Technical Interview Coaching",
            "bn": "প্রফেশনাল ভিএপিটি অডিট রিপোর্ট ও ইন্টারভিউ প্রস্তুতি"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "48 Live Hands-on Offensive & Defensive Cyber Security Labs",
        "bn": "৪৮ টি লাইভ প্র্যাকটিক্যাল সাইবার সিকিউরিটি ল্যাব ক্লাস"
      },
      {
        "en": "Complete Penetration Testing Arsenal & SIEM Splunk Rule Packs",
        "bn": "পেনিট্রেশন টেস্টিং স্ক্রিপ্টস ও স্প্লাঙ্ক রুলস বান্ডেল"
      },
      {
        "en": "CEH & SOC Analyst Official Exam Question Banks & Dumps",
        "bn": "সিইএইচ ও এসওসি অফিসিয়াল প্রশ্নব্যাংক"
      },
      {
        "en": "Verified Professional Diploma in Cyber Security Certificate",
        "bn": "প্রফেশনাল সাইবার সিকিউরিটি ডিপ্লোমা সনদপত্র"
      }
    ],
    "reviews": [
      {
        "id": "r27",
        "name": "Tanvir Hasan",
        "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "Cyber Security Specialist at BRAC Bank",
          "bn": "সাইবার সিকিউরিটি অফিসার"
        },
        "rating": 5,
        "comment": {
          "en": "The combination of Red Team pentesting and Blue Team Splunk SOC labs made this diploma truly unique. Cleared my interview at a leading bank within weeks of graduation!",
          "bn": "রেড টিম ও ব্লু টিমের সমন্বয়ে এত চমৎকার প্র্যাকটিক্যাল ল্যাব আর কোথাও পাইনি। ব্যাংকের সাইবার সিকিউরিটি জবে সরাসরি নির্বাচিত হয়েছি।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "28",
    "slug": "diploma-digital-marketing-growth",
    "title": {
      "en": "Diploma in Digital Marketing & Growth Hacking",
      "bn": "ডিপ্লোমা ইন ডিজিটাল মার্কেটিং ও গ্রোথ হ্যাকিং"
    },
    "subtitle": {
      "en": "Comprehensive 6-Month Career Track: Advanced Technical SEO, Meta AI Ads, Google Ads (Search/PMax/YouTube), GA4 Analytics & Global Marketplace Freelancing",
      "bn": "৬ মাস মেয়াদী ডিপ্লোমা: এডভান্সড এসইও, ফেসবুক ও ইনস্টাগ্রাম অ্যাডস, গুগল অ্যাডস, জিএ৪ অ্যানালিটিক্স ও ফ্রিল্যান্সিং"
    },
    "category": "diploma",
    "categoryLabel": {
      "en": "Diploma Programs",
      "bn": "ডিপ্লোমা প্রোগ্রাম"
    },
    "badge": {
      "en": "6-MONTH DIPLOMA",
      "bn": "৬ মাস মেয়াদী ডিপ্লোমা"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 195,
    "enrolledCount": "175+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "18,000৳",
    "rawFee": 18000,
    "originalFee": "35,000৳",
    "duration": {
      "en": "6 Months",
      "bn": "৬ মাস"
    },
    "classesCount": {
      "en": "48 Classes",
      "bn": "৪৮ টি ক্লাস"
    },
    "image": "/images/course thumbnail/Digital Marketing.jpg",
    "videoUrl": "https://www.facebook.com/reel/2105617167053909/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Diploma%20in%20Digital%20Marketing%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Mahfuzur Rahman & Sabbir Hossain",
      "designation": {
        "en": "Senior Digital Strategists & Performance Marketing Leads",
        "bn": "সিনিয়র ডিজিটাল স্ট্র্যাটেজিস্ট ও পারফরম্যান্স মার্কেটিং লিডস"
      },
      "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "10+ years managing $1M+ in global performance ad spend, viral organic growth funnels, and mentoring 4,000+ successful freelancers.",
        "bn": "১০+ বছরের গ্লোবাল পারফরম্যান্স মার্কেটিং, এসইও অপটিমাইজেশন ও ফ্রিল্যান্সিং ক্যারিয়ার ট্রেইনার।"
      },
      "experience": "10+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Master end-to-end digital marketing and growth hacking in this 6-Month Professional Diploma. Learn Technical SEO, Keyword Research with Semrush, Meta Ads Advantage+ AI campaigns, Google PPC Search/Performance Max, GA4 custom conversion tracking, Google Tag Manager server-side tracking, email funnels, and winning $1,000+ monthly contracts on Upwork & Fiverr.",
      "bn": "ডিজিটাল মার্কেটিং ও গ্রোথ হ্যাকিংয়ে স্বাবলম্বী হওয়ার পূর্ণাঙ্গ ৬ মাস মেয়াদী ডিপ্লোমা কোর্স। এসইও, ফেসবুক-ইনস্টাগ্রাম অ্যাডস, গুগল অ্যাডস, জিএ৪ অ্যানালিটিক্স এবং আপওয়ার্ক ও ফাইভার মার্কেটপ্লেসে সফল ক্যারিয়ার গড়ার প্র্যাকটিক্যাল গাইডলাইন।"
    },
    "fullDescription": {
      "en": "Whether you want to work as a Digital Marketing Manager, Performance Marketer, or build a high-income freelance business, this diploma teaches data-driven growth strategies with real advertising budgets and live client case studies.",
      "bn": "রিয়েল বাজেট দিয়ে লাইভ ক্যাম্পেইন রান, ডাটা অ্যানালাইসিস এবং ক্লায়েন্ট একুইজিশনের বাস্তব প্রশিক্ষণ।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Technical SEO & Ranking",
          "bn": "টেকনিক্যাল এসইও"
        },
        "desc": {
          "en": "Semrush, Ahrefs, Schema markup, On-Page, Off-Page & backlink authority.",
          "bn": "গুগল টপ র‍্যাঙ্কিং ও অর্গানিক ট্র্যাফিক বৃদ্ধি।"
        },
        "icon": "TrendingUp"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Meta & Google Ads Scale",
          "bn": "মেটা ও গুগল অ্যাডস"
        },
        "desc": {
          "en": "Advantage+ AI, Meta Pixel, Google PMax & high-ROI funnels.",
          "bn": "রিয়েল বাজেটে ফেসবুক ও গুগল কনভার্শন অ্যাডস।"
        },
        "icon": "Megaphone"
      },
      {
        "id": "cv3",
        "title": {
          "en": "GA4, GTM & Upwork Mastery",
          "bn": "জিএ৪ ও ফ্রিল্যান্সিং"
        },
        "desc": {
          "en": "Server-side tracking, e-commerce funnels & top-rated Upwork profiles.",
          "bn": "কনভার্শন ট্র্যাকিং ও আপওয়ার্ক উইনিং প্রপোজাল।"
        },
        "icon": "Award"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Execute advanced On-Page, Off-Page, and Technical SEO audits using Semrush and Ahrefs.",
        "bn": "এসইও অডিট, কিওয়ার্ড রিসার্চ ও গুগল ফার্স্ট পেজ র‍্যাঙ্কিং।"
      },
      {
        "en": "Run scalable Meta Ads (Facebook & Instagram) campaigns with Meta Pixel & Conversion API.",
        "bn": "মেটা পিক্সেল ও সিএপিআই দিয়ে হাই-কনভার্টিং ফেসবুক অ্যাডস রান।"
      },
      {
        "en": "Manage Google Search, Display, YouTube, and Performance Max ad accounts efficiently.",
        "bn": "গুগল সার্চ ও পারফরম্যান্স ম্যাক্স অ্যাডস ক্যাম্পেইন তৈরি ও স্কেল।"
      },
      {
        "en": "Configure Google Tag Manager (GTM) server-side tracking and GA4 customized e-commerce funnels.",
        "bn": "গুগল ট্যাগ ম্যানেজার ও জিএ৪ দিয়ে ই-কমার্স ডাটা ট্র্যাকিং।"
      },
      {
        "en": "Build high-converting email marketing automation funnels using Klaviyo and Mailchimp.",
        "bn": "ক্লাভিয়ো ও মেইলচিম্প দিয়ে স্বয়ংক্রিয় ইমেইল ফানেল তৈরি।"
      },
      {
        "en": "Establish a 5-star profile on Upwork/Fiverr and secure long-term international clients.",
        "bn": "আপওয়ার্ক ও ফাইভারে টপ রেটেড প্রোফাইল ও আন্তর্জাতিক ক্লায়েন্ট হান্টিং।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Advanced Search Engine Optimization (SEO) & Content Strategy",
          "bn": "মডিউল ১: এডভান্সড এসইও ও কন্টেন্ট স্ট্র্যাটেজি"
        },
        "duration": {
          "en": "10 Classes • 20 Hours",
          "bn": "১০ টি ক্লাস • ২০ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "Advanced Keyword Intent Analysis, Semrush/Ahrefs Competitor Research",
            "bn": "কিওয়ার্ড রিসার্চ ও কম্পিটিটর অ্যানালাইসিস"
          },
          {
            "en": "Technical SEO Audits, Core Web Vitals, Schema.org Structured Data & Crawlability",
            "bn": "টেকনিক্যাল এসইও অডিট ও স্কিমা মার্কআপ"
          },
          {
            "en": "High-Authority Link Building, Digital PR & Programmatic SEO Strategies",
            "bn": "হাই-অথরিটি ব্যাকলিংক ও লিঙ্ক বিল্ডিং"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Meta Ads (Facebook & Instagram) & Advantage+ AI Campaigns",
          "bn": "মডিউল ২: মেটা অ্যাডস ও অ্যাডভান্টেজ+ এআই ক্যাম্পেইন"
        },
        "duration": {
          "en": "10 Classes • 20 Hours",
          "bn": "১০ টি ক্লাস • ২০ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "Meta Business Manager Setup, Domain Verification & Conversions API (CAPI)",
            "bn": "মেটা বিজনেস ম্যানেজার ও কনভার্শন এপিআই সেটআপ"
          },
          {
            "en": "High-ROI Audience Targeting, Lookalike Audiences & Creative Testing Frameworks",
            "bn": "কাস্টম ও লুকঅ্যালাইক অডিয়েন্স টেস্টিং"
          },
          {
            "en": "Advantage+ Shopping Campaigns, Retargeting Funnels & Scaling Ad Spend",
            "bn": "রিটার্গেটিং ফানেল ও ক্যাম্পেইন স্কেলিং"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Google Ads (Search, Display, Performance Max & YouTube)",
          "bn": "মডিউল ৩: গুগল অ্যাডস (সার্চ, ইউটিউব ও পি-ম্যাক্স)"
        },
        "duration": {
          "en": "10 Classes • 20 Hours",
          "bn": "১০ টি ক্লাস • ২০ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "Google Ads Account Structure, Smart Bidding Strategies & Negative Keywords",
            "bn": "গুগল অ্যাডস স্ট্রাকচার ও বিডিং স্ট্র্যাটেজি"
          },
          {
            "en": "Performance Max Campaigns, Asset Groups & YouTube Video Ads",
            "bn": "পারফরম্যান্স ম্যাক্স ও ইউটিউব ভিডিও অ্যাডস"
          },
          {
            "en": "Google Merchant Center Setup, Shopping Ads & Dynamic Remarketing",
            "bn": "গুগল মার্চেন্ট সেন্টার ও শপিং অ্যাডস"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: Google Analytics 4 (GA4), Server-Side GTM & Email Automation",
          "bn": "মডিউল ৪: জিএ৪, সার্ভার-সাইড ট্র্যাকিং ও ইমেইল ফানেল"
        },
        "duration": {
          "en": "10 Classes • 20 Hours",
          "bn": "১০ টি ক্লাস • ২০ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "Server-Side Google Tag Manager Tracking & First-Party Data Collection",
            "bn": "সার্ভার-সাইড ট্যাগ ম্যানেজার কনফিগারেশন"
          },
          {
            "en": "GA4 Custom Dimensions, E-Commerce Event Triggers & Exploration Reports",
            "bn": "জিএ৪ ই-কমার্স ট্র্যাকিং ও ডাটা রিপোর্ট"
          },
          {
            "en": "Automated Email Drip Sequences with Klaviyo / Mailchimp & Abandoned Cart Recovery",
            "bn": "ইমেইল ড্রিপ সিকোয়েন্স ও সেলস ফানেল"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: Global Freelancing (Upwork, Fiverr, Agency Scaling) & Placement",
          "bn": "মডিউল ৫: গ্লোবাল ফ্রিল্যান্সিং ও এজেন্সি গ্রোথ"
        },
        "duration": {
          "en": "8 Classes • 16 Hours",
          "bn": "৮ টি ক্লাস • ১৬ ঘণ্টা"
        },
        "lessonsCount": 10,
        "topics": [
          {
            "en": "Winning Upwork Proposal Writing, Interview Tactics & Project Catalogs",
            "bn": "আপওয়ার্ক উইনিং প্রপোজাল ও ক্লায়েন্ট ইন্টারভিউ"
          },
          {
            "en": "Fiverr Gig SEO Optimization, Video Promos & Level-2/Top Rated Roadmaps",
            "bn": "ফাইভার গিগ এসইও ও র‍্যাঙ্কিং ট্রিকস"
          },
          {
            "en": "Direct International Client Outreach via LinkedIn & Cold Emailing Systems",
            "bn": "লিঙ্কডইন ও কোল্ড ইমেইল দিয়ে ক্লায়েন্ট হান্টিং"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "48 Live Hands-on Performance Marketing & SEO Masterclasses",
        "bn": "৪৮ টি লাইভ প্র্যাকটিক্যাল ডিজিটাল মার্কেটিং ক্লাস"
      },
      {
        "en": "Premium SEO Tool Guidelines, Ad Templates & Proposal Blueprints",
        "bn": "প্রিমিয়াম এসইও টুলস গাইডলাইন ও প্রপোজাল টেমপ্লেট"
      },
      {
        "en": "Upwork & Fiverr Profile Optimization with 1-on-1 Portfolio Reviews",
        "bn": "আপওয়ার্ক ও ফাইভার ১-অন-১ প্রোফাইল অপটিমাইজেশন"
      },
      {
        "en": "Verified Professional Diploma in Digital Marketing Certificate",
        "bn": "প্রফেশনাল ডিজিটাল মার্কেটিং ডিপ্লোমা সনদপত্র"
      }
    ],
    "reviews": [
      {
        "id": "r28",
        "name": "Farhana Akter",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "Performance Marketer at TechGen Ltd",
          "bn": "ডিজিটাল মার্কেটার"
        },
        "rating": 5,
        "comment": {
          "en": "The deep dive into Meta Advantage+ ads, GA4 server-side tracking, and Upwork proposals helped me earn $1,500/month as a remote performance marketer.",
          "bn": "মেটা অ্যাডস ও জিএ৪ ট্র্যাকিংয়ের প্র্যাকটিক্যাল ল্যাব আমাকে রিমোট জবে চমৎকার ক্যারিয়ার গড়তে সাহায্য করেছে।"
        },
        "date": "3 Weeks Ago"
      }
    ]
  },
  {
    "id": "29",
    "slug": "diploma-graphic-design-ui-ux",
    "title": {
      "en": "Diploma in Graphic Design & UI/UX",
      "bn": "ডিপ্লোমা ইন গ্রাফিক ডিজাইন ও ইউআই/ইউএক্স"
    },
    "subtitle": {
      "en": "Comprehensive 6-Month Career Track: Adobe Photoshop, Illustrator, Brand Identity, Figma UX/UI, Wireframing, Prototyping & Motion Graphics",
      "bn": "৬ মাস মেয়াদী ডিপ্লোমা: ফটোশপ, ইলাস্ট্রেটর, ব্র্যান্ড আইডেন্টিটি, ফিগমা ইউআই/ইউএক্স ডিজাইন ও মোশন গ্রাফিক্স"
    },
    "category": "diploma",
    "categoryLabel": {
      "en": "Diploma Programs",
      "bn": "ডিপ্লোমা প্রোগ্রাম"
    },
    "badge": {
      "en": "6-MONTH DIPLOMA",
      "bn": "৬ মাস মেয়াদী ডিপ্লোমা"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 180,
    "enrolledCount": "160+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "18,000৳",
    "rawFee": 18000,
    "originalFee": "35,000৳",
    "duration": {
      "en": "6 Months",
      "bn": "৬ মাস"
    },
    "classesCount": {
      "en": "48 Classes",
      "bn": "৪৮ টি ক্লাস"
    },
    "image": "/images/course thumbnail/graphic design.jpg",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Diploma%20in%20Graphic%20Design%20%26%20UI/UX%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Engr. Nayeem Islam & Sarah Rahman",
      "designation": {
        "en": "Lead Product Designers & Creative Art Directors",
        "bn": "লিড প্রোডাক্ট ডিজাইনার ও ক্রিয়েটিভ আর্ট ডিরেক্টরস"
      },
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "10+ combined years designing global mobile apps, web dashboards, corporate brand identities, and mentoring award-winning creative designers.",
        "bn": "১০+ বছরের আন্তর্জাতিক প্রোডাক্ট ডিজাইন, ফিগমা ইউআই/ইউএক্স ও ক্রিয়েটিভ ব্র্যান্ডিং অভিজ্ঞতা।"
      },
      "experience": "10+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Become a versatile Creative Designer and Product UI/UX Designer. In this comprehensive 6-Month Diploma, master Adobe Photoshop, Adobe Illustrator, brand visual identity, typography, Figma UI/UX design systems, user research, wireframing, interactive prototyping, micro-animations, and building a world-class Behance & Dribbble portfolio.",
      "bn": "ক্রিয়েটিভ গ্রাফিক ডিজাইন এবং আধুনিক ফিগমা ইউআই/ইউএক্স ডিজাইনার হওয়ার ৬ মাস মেয়াদী সম্পূর্ণ ডিপ্লোমা কোর্স। ফটোশপ, ইলাস্ট্রেটর, লোগো ডিজাইন, ব্র্যান্ডিং, ফিগমা অ্যাপ ডিজাইন ও বেহান্স পোর্টফোলিও তৈরি বাস্তব প্রজেক্টে শিখবেন।"
    },
    "fullDescription": {
      "en": "Modern digital companies demand designers who understand both striking visual branding and seamless user experience (UI/UX). This diploma covers the complete spectrum: from vector graphics and photo manipulation to user journey mapping, design systems in Figma, and design-to-development handoffs.",
      "bn": "আন্তর্জাতিক ও দেশীয় সফটওয়্যার কোম্পানিতে ইউআই/ইউএক্স ডিজাইনার ও ক্রিয়েটিভ ডিজাইনার হিসেবে ক্যারিয়ার গড়ার সম্পূর্ণ ব্যবহারিক ডিপ্লোমা।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Adobe Suite & Brand Identity",
          "bn": "ফটোশপ, ইলাস্ট্রেটর ও ব্র্যান্ডিং"
        },
        "desc": {
          "en": "Vector logos, brand guidelines, packaging & social media kits.",
          "bn": "প্রফেশনাল লোগো ডিজাইন, প্রিন্ট ও ব্র্যান্ড আইডেন্টিটি।"
        },
        "icon": "Palette"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Figma UI/UX & Design Systems",
          "bn": "ফিগমা ইউআই/ইউএক্স ও ডিজাইন সিস্টেম"
        },
        "desc": {
          "en": "Auto layout, variants, responsive web/mobile apps & UX research.",
          "bn": "ফিগমা দিয়ে মোবাইল অ্যাপ ও ওয়েবসাইট ইউআই ডিজাইন।"
        },
        "icon": "Smartphone"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Prototyping & Dribbble Portfolio",
          "bn": "প্রোটোটাইপ ও পোর্টফোলিও"
        },
        "desc": {
          "en": "Interactive micro-interactions, Behance case studies & client projects.",
          "bn": "বেহান্স ও ড্রিবলে আকর্ষণীয় কেস স্টাডি পোর্টফোলিও তৈরি।"
        },
        "icon": "Award"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master Adobe Photoshop for high-end photo manipulation, retouching, and commercial visuals.",
        "bn": "ফটোশপ দিয়ে প্রফেশনাল ফটো ম্যানিপুলেশন ও রিটাচিং।"
      },
      {
        "en": "Create vector logos, typography, iconography, and complete corporate identity kits in Illustrator.",
        "bn": "ইলাস্ট্রেটরে ভেক্টর লোগো ও কর্পোরেট ব্র্যান্ড গাইডলাইন তৈরি।"
      },
      {
        "en": "Conduct thorough UX research: user personas, user journey maps, and information architecture.",
        "bn": "ইউজার রিসার্চ, পারসোনা ও ইনফরমেশন আর্কিটেকচার তৈরি।"
      },
      {
        "en": "Design responsive web and mobile app interfaces in Figma using Auto Layout and Design Systems.",
        "bn": "ফিগমায় অটো লেআউট ও ডিজাইন সিস্টেম দিয়ে অ্যাপ ডিজাইন।"
      },
      {
        "en": "Build advanced interactive prototypes with smart animations and developer handoff specs.",
        "bn": "স্মার্ট অ্যানিমেশন সহ ইন্টারেক্টিভ প্রোটোটাইপ তৈরি।"
      },
      {
        "en": "Publish 4 polished UI/UX and Graphic Design case studies on Behance and Dribbble.",
        "bn": "বেহান্স ও ড্রিবলে ৪টি প্রফেশনাল কেস স্টাডি পাবলিশ করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Visual Design Principles, Adobe Photoshop & Photo Manipulation",
          "bn": "মডিউল ১: ভিজ্যুয়াল ডিজাইন প্রিন্সিপালস ও ফটোশপ"
        },
        "duration": {
          "en": "10 Classes • 20 Hours",
          "bn": "১০ টি ক্লাস • ২০ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "Design Fundamentals: Color Theory, Typography, Contrast, Hierarchy & Composition",
            "bn": "কালার থিওরি, টাইপোগ্রাফি ও কম্পোজিশন রুলস"
          },
          {
            "en": "Photoshop Pen Tool, Layer Masks, Blending Modes & Advanced Selections",
            "bn": "পেন টুল, লেয়ার মাস্ক ও ফটোশপ সিলেকশন"
          },
          {
            "en": "High-End Photo Manipulation, Product Retouching & Social Media Ad Creatives",
            "bn": "প্রোডাক্ট রিটাচিং ও সোশ্যাল মিডিয়া পোস্ট ডিজাইন"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Vector Graphics, Logo Design & Brand Identity (Illustrator)",
          "bn": "মডিউল ২: ভেক্টর গ্রাফিক্স, লোগো ডিজাইন ও ব্র্যান্ডিং"
        },
        "duration": {
          "en": "10 Classes • 20 Hours",
          "bn": "১০ টি ক্লাস • ২০ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "Illustrator Shape Builder, Pathfinder, Gradient Meshes & Vector Illustrations",
            "bn": "শেপ বিল্ডার, পাথফাইন্ডার ও ভেক্টর ইলাস্ট্রেশন"
          },
          {
            "en": "Logo Design Methodologies: Grid Systems, Wordmarks, Monograms & Mascots",
            "bn": "লোগো ডিজাইন মেথডলজি ও গোল্ডেন রেশিও গ্রিড"
          },
          {
            "en": "Complete Brand Identity Guidelines: Stationery, Packaging & Billboard Design",
            "bn": "কর্পোরেট ব্র্যান্ড আইডেন্টিটি ও প্যাকেজিং ডিজাইন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: UX Research, Information Architecture & Wireframing",
          "bn": "মডিউল ৩: ইউএক্স রিসার্চ ও ওয়্যারফ্রেম ডিজাইন"
        },
        "duration": {
          "en": "10 Classes • 20 Hours",
          "bn": "১০ টি ক্লাস • ২০ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "User-Centered Design (UCD) Process & Design Thinking Framework",
            "bn": "ডিজাইন থিংকিং ও ইউজার-সেন্ট্রিক ডিজাইন প্রসেস"
          },
          {
            "en": "User Personas, Empathy Maps, User Journeys & Competitive Audits",
            "bn": "ইউজার পারসোনা ও কম্পিটিটর অডিট"
          },
          {
            "en": "Low-Fidelity Wireframing, Information Architecture (IA) & User Flows",
            "bn": "ইনফরমেশন আর্কিটেকচার ও লো-ফিডেলিটি ওয়্যারফ্রেম"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: High-Fidelity UI Design & Design Systems (Figma)",
          "bn": "মডিউল ৪: ফিগমা ইউআই ডিজাইন ও ডিজাইন সিস্টেম"
        },
        "duration": {
          "en": "10 Classes • 20 Hours",
          "bn": "১০ টি ক্লাস • ২০ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "Figma Interface, Frame Nesting, Constraints & Auto Layout 5.0 Mastery",
            "bn": "ফিগমা অটো লেআউট ও রেসপনসিভ কনস্ট্রেইন্টস"
          },
          {
            "en": "Building Scalable Design Systems: Typography Tokens, Color Variables & Component Sets",
            "bn": "ডিজাইন সিস্টেম, কম্পোনেন্ট ভ্যারিয়েন্টস ও ভেরিয়েবলস"
          },
          {
            "en": "Designing Complete iOS & Android Mobile Apps and Modern Web SaaS Dashboards",
            "bn": "মোবাইল অ্যাপ ও ওয়েব ড্যাশবোর্ড ইউআই ডিজাইন"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: Interactive Prototyping, Behance Case Studies & Portfolio",
          "bn": "মডিউল ৫: প্রোটোটাইপিং, বেহান্স কেস স্টাডি ও ক্যারিয়ার"
        },
        "duration": {
          "en": "8 Classes • 16 Hours",
          "bn": "৮ টি ক্লাস • ১৬ ঘণ্টা"
        },
        "lessonsCount": 10,
        "topics": [
          {
            "en": "Figma Smart Animate, Interactive Components & Micro-interactions",
            "bn": "স্মার্ট অ্যানিমেট ও ইন্টারেক্টিভ কম্পোনেন্টস"
          },
          {
            "en": "Writing In-Depth UX Case Studies and Creating Behance / Dribbble Presentations",
            "bn": "বেহান্স কেস স্টাডি প্রেজেন্টেশন তৈরি"
          },
          {
            "en": "Freelancing Blueprint for Designers (Fiverr, Upwork & Direct Client Gigs)",
            "bn": "ডিজাইনারদের জন্য ফ্রিল্যান্সিং ও ইন্টারভিউ গাইড"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "48 Live Interactive Creative Design & Figma UI/UX Masterclasses",
        "bn": "৪৮ টি লাইভ প্র্যাকটিক্যাল ডিজাইন ক্লাস"
      },
      {
        "en": "Premium Design Asset Packs (Icons, Mockups, UI Kits & Fonts)",
        "bn": "প্রিমিয়াম ইউআই কিটস, মকআপ ও ফন্ট বান্ডেল"
      },
      {
        "en": "Behance & Dribbble Portfolio Polish with 1-on-1 Design Mentorship",
        "bn": "বেহান্স ও ড্রিবল ১-অন-১ পোর্টফোলিও রিভিউ"
      },
      {
        "en": "Verified Professional Diploma in Graphic Design & UI/UX Certificate",
        "bn": "প্রফেশনাল গ্রাফিক ও ইউআই/ইউএক্স ডিপ্লোমা সনদপত্র"
      }
    ],
    "reviews": [
      {
        "id": "r29",
        "name": "Mehedi Hasan",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "UI/UX Designer at Sheba.xyz",
          "bn": "ইউআই/ইউএক্স ডিজাইনার"
        },
        "rating": 5,
        "comment": {
          "en": "The Figma auto layout and design system modules were top notch! My Behance portfolio got me hired as a UI/UX Designer right after this 6-month diploma.",
          "bn": "ফিগমা অটো লেআউট ও ডিজাইন সিস্টেমের কাজগুলো অসাধারণ ছিল। বেহান্সে প্রজেক্ট আপলোড করেই কোম্পানিতে ডিজাইনার হিসেবে ডাক পেয়েছি।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "30",
    "slug": "diploma-network-cloud-engineering",
    "title": {
      "en": "Diploma in Network & Cloud Engineering",
      "bn": "ডিপ্লোমা ইন নেটওয়ার্ক ও ক্লাউড ইঞ্জিনিয়ারিং"
    },
    "subtitle": {
      "en": "Comprehensive 6-Month Career Track: Cisco CCNA (200-301), MikroTik RouterOS v7, Linux Enterprise Administration & AWS Cloud Architecture",
      "bn": "৬ মাস মেয়াদী ডিপ্লোমা: সিসকো সিসিএনএ, মাইক্রোটিক রাউটারওএস, লিনাক্স এন্টারপ্রাইজ ও এডব্লিউএস ক্লাউড"
    },
    "category": "diploma",
    "categoryLabel": {
      "en": "Diploma Programs",
      "bn": "ডিপ্লোমা প্রোগ্রাম"
    },
    "badge": {
      "en": "6-MONTH DIPLOMA",
      "bn": "৬ মাস মেয়াদী ডিপ্লোমা"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 165,
    "enrolledCount": "140+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "20,000৳",
    "rawFee": 20000,
    "originalFee": "40,000৳",
    "duration": {
      "en": "6 Months",
      "bn": "৬ মাস"
    },
    "classesCount": {
      "en": "48 Classes",
      "bn": "৪৮ টি ক্লাস"
    },
    "image": "/images/course thumbnail/ccna-networking.jpg",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Diploma%20in%20Network%20%26%20Cloud%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Engr. Zahid Hasan & Sabbir Rahman",
      "designation": {
        "en": "Lead Cisco CCNP & AWS Cloud Infrastructure Specialists",
        "bn": "লিড সিসকো সিসিএনপি ও এডব্লিউএস ক্লাউড স্পেশালিস্টস"
      },
      "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "12+ combined years designing ISP core networks, multi-region AWS cloud architectures, data center switching, and Linux server clusters.",
        "bn": "১২+ বছরের সিসকো কোর নেটওয়ার্কিং, আইএসপি মাইক্রোটিক রাউটারওএস ও এডব্লিউএস ক্লাউড আর্কিটেকচার অভিজ্ঞতা।"
      },
      "experience": "12+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "The ultimate 6-Month Professional Diploma for Network Engineers, System Administrators, and Cloud DevOps Architects. Master Cisco CCNA (200-301) enterprise routing & switching, MikroTik RouterOS v7 ISP bandwidth shaping, Red Hat Linux server administration, and AWS Cloud Infrastructure (EC2, VPC, S3, IAM, Terraform IaC).",
      "bn": "নেটওয়ার্ক ইঞ্জিনিয়ার ও ক্লাউড সিস্টেম অ্যাডমিন হিসেবে কর্পোরেট ও আইএসপিতে ক্যারিয়ার গড়ার ৬ মাস মেয়াদী সম্পূর্ণ ডিপ্লোমা। সিসকো সিসিএনএ, মাইক্রোটিক, লিনাক্স এবং এডব্লিউএস ক্লাউড ইনফ্রাস্ট্রাকচার বাস্তব ল্যাবে শিখবেন।"
    },
    "fullDescription": {
      "en": "Modern IT infrastructure bridges physical networks, enterprise Linux servers, and hyper-scale public clouds like AWS. In this extensive diploma, you will configure physical Cisco/MikroTik lab hardware, build secure virtual networks, automate server tasks with Bash, and manage multi-region cloud deployments.",
      "bn": "টেলিকম, ব্যাংক ও মাল্টিন্যাশনাল প্রতিষ্ঠানে নেটওয়ার্ক ও ক্লাউড ইনফ্রাস্ট্রাকচার আর্কিটেক্ট হিসেবে উচ্চ বেতনের চাকরির জন্য প্রয়োজনীয় সকল দক্ষতা এই কোর্সে শেখানো হয়।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Cisco CCNA (200-301)",
          "bn": "সিসকো সিসিএনএ"
        },
        "desc": {
          "en": "OSPF, VLANs, Trunks, EtherChannel, ACLs, NAT & Cisco CLI.",
          "bn": "সিসকো রাউটিং, সুইচিং ও সিকিউরিটি কনফিগারেশন।"
        },
        "icon": "Server"
      },
      {
        "id": "cv2",
        "title": {
          "en": "MikroTik & Linux SysAdmin",
          "bn": "মাইক্রোটিক ও লিনাক্স"
        },
        "desc": {
          "en": "Queue Trees (PCQ), PPPoE, LVM storage, Systemd & SSH security.",
          "bn": "আইএসপি ব্যান্ডউইথ কন্ট্রোল ও লিনাক্স সার্ভার ম্যানেজমেন্ট।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv3",
        "title": {
          "en": "AWS Cloud & Terraform IaC",
          "bn": "এডব্লিউএস ক্লাউড ও টেরাফর্ম"
        },
        "desc": {
          "en": "VPC networking, EC2 Auto Scaling, S3, IAM & Terraform automation.",
          "bn": "এডব্লিউএস ক্লাউড আর্কিটেকচার ও স্বয়ংক্রিয় ক্লাউড ডিপ্লয়।"
        },
        "icon": "ShieldCheck"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Configure Cisco routers and switches for enterprise routing (OSPF), VLANs, and STP.",
        "bn": "সিসকো রাউটার ও সুইচে ওএসপিএফ এবং ভিএলএএন কনফিগারেশন।"
      },
      {
        "en": "Deploy ISP-grade MikroTik RouterOS: Bandwidth Queue Trees (PCQ), PPPoE, and Dual WAN PCC.",
        "bn": "মাইক্রোটিক কিউ ট্রি ও ডুয়াল-ওয়ান লোড ব্যালেন্সিং বাস্তবায়ন।"
      },
      {
        "en": "Administer Red Hat / Ubuntu Linux servers: LVM dynamic storage, Systemd, Nginx, and Bash scripts.",
        "bn": "লিনাক্স এলভিএম স্টোরেজ, এনজিনিক্স সার্ভার ও ব্যাশ স্ক্রিপ্টিং।"
      },
      {
        "en": "Design multi-tier fault-tolerant cloud architectures on Amazon Web Services (AWS VPC, EC2, ALB).",
        "bn": "এডব্লিউএস ক্লাউডে হাই-অ্যাভেইলেবল ভার্চুয়াল ক্লাউড আর্কিটেকচার তৈরি।"
      },
      {
        "en": "Automate infrastructure provisioning using Terraform Infrastructure as Code (IaC).",
        "bn": "টেরাফর্ম দিয়ে কোডের মাধ্যমে সম্পূর্ণ ক্লাউড ইনফ্রাস্ট্রাকচার ডিপ্লয়।"
      },
      {
        "en": "Prepare for Cisco CCNA, MikroTik MTCNA, and AWS Certified Solutions Architect exams.",
        "bn": "সিসকো সিসিএনএ, মাইক্রোটিক ও এডব্লিউএস অফিসিয়াল সার্টিফিকেশন প্রস্তুতি।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Cisco CCNA (200-301) Enterprise Routing & Switching",
          "bn": "মডিউল ১: সিসকো সিসিএনএ রাউটিং ও সুইচিং"
        },
        "duration": {
          "en": "10 Classes • 20 Hours",
          "bn": "১০ টি ক্লাস • ২০ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "OSI Model, IPv4/IPv6 VLSM Subnetting & Cisco IOS CLI Navigation",
            "bn": "আইপি সাবনেটিং ও সিসকো সিএলআই নেভিগেশন"
          },
          {
            "en": "VLANs, 802.1Q Trunks, Rapid Spanning Tree (RSTP) & EtherChannel Aggregation",
            "bn": "ভিএলএএন, ট্রাঙ্কিং ও ইথারচ্যানেল কনফিগারেশন"
          },
          {
            "en": "Single/Multi-Area OSPFv2 Dynamic Routing, Inter-VLAN Routing & ACL Security",
            "bn": "ওএসপিএফ ডায়নামিক রাউটিং ও সিসকো এসিএল"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: MikroTik RouterOS v7 & ISP Network Administration",
          "bn": "মডিউল ২: মাইক্রোটিক রাউটারওএস ও আইএসপি নেটওয়ার্কিং"
        },
        "duration": {
          "en": "10 Classes • 20 Hours",
          "bn": "১০ টি ক্লাস • ২০ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "Winbox Interface, IP Addressing, DHCP Server/Leases & Firewall Filter Rules",
            "bn": "উইনবক্স ও মাইক্রোটিক ফায়ারওয়াল ফিল্টারিং"
          },
          {
            "en": "Bandwidth Shaping: Simple Queues, Mangle Marking & Queue Trees with PCQ",
            "bn": "প্যাকেট মার্কিং ও পিসিকিউ ব্যান্ডউইথ কন্ট্রোল"
          },
          {
            "en": "ISP PPPoE Server, Captive Hotspot Billing & Multi-WAN PCC Load Balancing",
            "bn": "পিপিপিওই ব্রডব্যান্ড সার্ভার ও পিইসিসি লোড ব্যালেন্সিং"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Enterprise Linux System Administration (RHCSA / Ubuntu)",
          "bn": "মডিউল ৩: লিনাক্স এন্টারপ্রাইজ সিস্টেম অ্যাডমিনিস্ট্রেশন"
        },
        "duration": {
          "en": "10 Classes • 20 Hours",
          "bn": "১০ টি ক্লাস • ২০ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "Linux CLI, FHS Hierarchy, User/Group Permissions & POSIX ACLs",
            "bn": "লিনাক্স কমান্ড লাইন ও ইউজার পারমিশনস"
          },
          {
            "en": "Disk Partitioning (fdisk/gdisk), /etc/fstab & LVM Dynamic Storage Resizing",
            "bn": "এলভিএম ডাইনামিক স্টোরেজ ম্যানেজমেন্ট"
          },
          {
            "en": "Systemd Services (systemctl), journalctl Logs, SSH Hardening & FirewallD",
            "bn": "সিস্টেমডি ব্যাকগ্রাউন্ড সার্ভিস ও এসএসএইচ সিকিউরিটি"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: AWS Cloud Architecture & Infrastructure as Code (Terraform)",
          "bn": "মডিউল ৪: এডব্লিউএস ক্লাউড ও টেরাফর্ম অটোমেশন"
        },
        "duration": {
          "en": "10 Classes • 20 Hours",
          "bn": "১০ টি ক্লাস • ২০ ঘণ্টা"
        },
        "lessonsCount": 12,
        "topics": [
          {
            "en": "Custom AWS VPC Design: Public/Private Subnets, NAT Gateways & Route Tables",
            "bn": "কাস্টম এডব্লিউএস ভিপিসি নেটওয়ার্কিং"
          },
          {
            "en": "Amazon EC2, EBS Storage, Application Load Balancers & Auto Scaling Groups",
            "bn": "ইসি২ সার্ভার, লোড ব্যালেন্সার ও অটো স্কেলিং"
          },
          {
            "en": "Amazon S3, IAM Security Governance, RDS Multi-AZ & Terraform Cloud IaC",
            "bn": "এস৩ বাকেট, আইএএম পলিসি ও টেরাফর্ম স্ক্রিপ্টস"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: Hybrid Enterprise Capstone & Multi-Vendor Network Labs",
          "bn": "মডিউল ৫: এন্টারপ্রাইজ ক্যাপস্টোন ও সার্টিফিকেশন ল্যাব"
        },
        "duration": {
          "en": "8 Classes • 16 Hours",
          "bn": "৮ টি ক্লাস • ১৬ ঘণ্টা"
        },
        "lessonsCount": 10,
        "topics": [
          {
            "en": "Building Multi-Site Branch VPN Interconnection (IPsec / WireGuard)",
            "bn": "মাল্টি-ব্রাঞ্চ আইপিসেক ও ওয়্যারগার্ড ভিপিএন"
          },
          {
            "en": "Full Topology Network & Cloud Infrastructure Capstone Audit",
            "bn": "পূর্ণাঙ্গ নেটওয়ার্ক ও ক্লাউড ক্যাপস্টোন পরীক্ষা"
          },
          {
            "en": "Official Certification Prep (CCNA, MTCNA, AWS SAA-C03) & Interview Coaching",
            "bn": "সিসকো ও এডব্লিউএস এক্সাম ডাম্পস ও ইন্টারভিউ প্রস্তুতি"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "48 Live Hands-on Cisco, MikroTik, Linux & AWS Lab Classes",
        "bn": "৪৮ টি লাইভ প্র্যাকটিক্যাল ল্যাব ক্লাস"
      },
      {
        "en": "Ready-made ISP MikroTik Scripts, Terraform Blueprints & GNS3 Labs",
        "bn": "রেডিমেড স্ক্রিপ্টস ও নেটওয়ার্ক ল্যাব ফাইলস"
      },
      {
        "en": "Official CCNA, MTCNA & AWS SAA-C03 Exam Question Banks",
        "bn": "অফিসিয়াল এক্সাম প্রিপারেশন প্রশ্নব্যাংক"
      },
      {
        "en": "Verified Professional Diploma in Network & Cloud Engineering Certificate",
        "bn": "প্রফেশনাল নেটওয়ার্ক ও ক্লাউড ডিপ্লোমা সনদপত্র"
      }
    ],
    "reviews": [
      {
        "id": "r30",
        "name": "Engr. Shakib Al Hasan",
        "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "NOC & Cloud Engineer at Link3",
          "bn": "এনওসি ও ক্লাউড ইঞ্জিনিয়ার"
        },
        "rating": 5,
        "comment": {
          "en": "The combination of Cisco CCNA, MikroTik PCQ queues, and AWS Terraform automation gave me complete infrastructure confidence. Landed my dream NOC job right after graduation!",
          "bn": "সিসকো, মাইক্রোটিক এবং এডব্লিউএস ক্লাউডের সমন্বয়ে এত সমৃদ্ধ কারিকুলাম আর কোথাও নেই। কোর্স শেষেই এনওসি ইঞ্জিনিয়ার হিসেবে চাকরি পেয়েছি।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  }
];

export function getCourseBySlug(slug: string): CourseDetail | undefined {
  return coursesData.find((course) => course.slug === slug);
}

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
