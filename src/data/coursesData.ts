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
  originalFee?: string;
  duration: { en: string; bn: string };
  classesCount: { en: string; bn: string };
  image: string;
  videoUrl: string;
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
    id: "ai-prompt",
    slug: "ai-prompt",
    title: {
      en: "Generative AI & Prompt Engineering",
      bn: "জেনারেটিভ এআই ও প্রম্পট ইঞ্জিনিয়ারিং"
    },
    subtitle: {
      en: "Master ChatGPT, Claude, Gemini & Midjourney for high-speed workflow & business automation",
      bn: "চ্যাটজিপিটি, ক্লদ, জেমিনি এবং মিডজার্নি ব্যবহারের মাধ্যমে ক্যারিয়ার ও কাজের গতি ১০ গুণ বাড়ান"
    },
    category: "ai",
    categoryLabel: { en: "AI & Automation", bn: "এআই ও অটোমেশন" },
    badge: { en: "BEST SELLER", bn: "বেস্ট সেলার" },
    mode: { en: "OFFLINE LEARNING", bn: "অফলাইন লার্নিং" },
    modeType: "offline",
    rating: 5,
    ratingsCount: 60,
    enrolledCount: "120+",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "8000৳",
    originalFee: "12000৳",
    duration: { en: "1.5 Months", bn: "১.৫ মাস" },
    classesCount: { en: "18 Classes", bn: "১৮ টি ক্লাস" },
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://www.youtube.com/embed/2eWuYf-keXI?autoplay=1",
    instructor: {
      name: "Ashraf Hossain",
      designation: {
        en: "Lead AI Systems Engineer & Prompt Specialist",
        bn: "লিড এআই সিস্টেমস ইঞ্জিনিয়ার ও প্রম্পট স্পেশালিস্ট"
      },
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      bio: {
        en: "10+ years of experience in enterprise software development and AI integration across USA and Europe based products.",
        bn: "ইউএসএ ও ইউরোপের সফটওয়্যার ইন্ডাস্ট্রিতে ১০+ বছরের অভিজ্ঞতা সম্পন্ন সিনিয়র এআই আর্কিটেক্ট।"
      },
      experience: "10+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "This Generative AI & Prompt Engineering course is designed to help learners master modern AI tools like ChatGPT, Claude, and Gemini by learning how to design effective prompts, automate content, code, image, and data tasks, and build real-world AI workflows. Over a duration of 1.5 months with 18 classes, the course takes students from foundational concepts to advanced, practical applications, enabling them to use AI professionally for freelancing, jobs, and business productivity while building hands-on experience and an AI-focused portfolio.",
      bn: "এই জেনারেটিভ এআই এবং প্রম্পট ইঞ্জিনিয়ারিং কোর্সটি আপনাকে চ্যাটজিপিটি, ক্লদ, জেমিনি ও মিডজার্নির মতো আধুনিক এআই টুলস আয়ত্ত করতে সাহায্য করবে। প্রম্পট আর্কিটেকচার থেকে শুরু করে কোড জেনারেশন, কন্টেন্ট অটোমেশন, ইমেজ ক্রিয়েশন এবং এআই ড্রাইভেন অটোমেশন শিখবেন ১.৫ মাসে ১৮টি লাইভ ক্লাসের মাধ্যমে।"
    },
    fullDescription: {
      en: "Generative AI is revolutionizing every industry from software engineering to marketing. In this intensive course, you will learn the exact techniques used by elite prompt engineers to guide Large Language Models (LLMs), build custom GPTs, automate complex business processes, generate hyper-realistic assets, and integrate AI APIs into modern applications.",
      bn: "জেনারেটিভ এআই বর্তমানে বিশ্বজুড়ে সমস্ত ইন্ডাস্ট্রির কাজের ধরন বদলে দিচ্ছে। এই কোর্সে আপনি শিখবেন কীভাবে লার্জ ল্যাঙ্গুয়েজ মডেল (LLM) সঠিকভাবে গাইড করতে হয়, কাস্টম এআই এজেন্ট তৈরি করতে হয়, এবং প্রম্পট ইঞ্জিনিয়ারিং এর মাধ্যমে ফ্রিল্যান্সিং ও জবে নিজের ভ্যালু বাড়াতে হয়।"
    },
    coreValues: [
      {
        id: "cv1",
        title: { en: "100% Hands-on Practice", bn: "১০০% প্র্যাকটিক্যাল ট্রেনিং" },
        desc: { en: "Professional guidance and real-world tools with live exercises in every class.", bn: "লাইভ ক্লাসে বাস্তবমুখী টুলস নিয়ে কাজ করার সুবিধা।" },
        icon: "CheckCircle2"
      },
      {
        id: "cv2",
        title: { en: "Industry Grade AI Projects", bn: "ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রজেক্ট" },
        desc: { en: "Build real portfolio deliverables using Claude API, ChatGPT Plus, and Midjourney.", bn: "কোর্স চলাকালীনই বাস্তব পোর্টফোলিও প্রজেক্ট তৈরি।" },
        icon: "Zap"
      },
      {
        id: "cv3",
        title: { en: "Lifetime Support & Community", bn: "লাইফটাইম সাপোর্ট ও কমিউনিটি" },
        desc: { en: "Access to private developer Discord/WhatsApp group and continuous updates.", bn: "কোর্স শেষের পরেও প্রাইভেট ফোরামের মাধ্যমে গাইডলাইন।" },
        icon: "ShieldCheck"
      }
    ],
    learningOutcomes: [
      { en: "Master Zero-Shot, Few-Shot, and Chain-of-Thought Prompting Strategies", bn: "জিরো-শট, ফিউ-শট এবং চেইন-অব-থট প্রম্পটিং আয়ত্ত করা" },
      { en: "Automate Business Content, Email Copywriting, & Social Marketing", bn: "বিজনেস কন্টেন্ট, কপিরাইটিং ও ইমেইল অটোমেশন" },
      { en: "Build Custom GPT Assistants & Knowledge Base Bots", bn: "কাস্টম জিটিপি চ্যাটবট ও এআই অ্যাসিস্ট্যান্ট তৈরি" },
      { en: "Generate Hyper-Realistic Images & UI Concepts with Midjourney & DALL-E", bn: "মিডজার্নি ও ডাল-ই এর মাধ্যমে হাই-কোয়ালিটি ডিজাইন জেনারেট" },
      { en: "Code Faster with GitHub Copilot, Cursor AI & ChatGPT", bn: "কার্সার এআই ও গিটহাব কোপাইলট দিয়ে দ্রুত কোডিং" },
      { en: "Integrate OpenAI APIs & LangChain in Next.js / Python", bn: "ওপেন-এআই এপিআই এবং প্যালেন্ট দিয়ে কোড ও এআই অটোমেশন" }
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: { en: "Module 1: Foundations of Generative AI & Prompt Engineering", bn: "মডিউল ১: জেনারেটিভ এআই ও প্রম্পট ইঞ্জিনিয়ারিং বেসিক্স" },
        duration: { en: "3 Classes • 6 Hours", bn: "৩ টি ক্লাস • ৬ ঘণ্টা" },
        lessonsCount: 4,
        topics: [
          { en: "Understanding LLMs (GPT-4, Claude 3.5, Gemini 1.5)", bn: "লার্জ ল্যাঙ্গুয়েজ মডেল (GPT-4, Claude, Gemini) পরিচিতি" },
          { en: "The Science of Prompt Construction: Role, Context, Task & Output Format", bn: "সঠিক প্রম্পট গঠনের মূল নিয়ম ও কৌশল" },
          { en: "Overcoming AI Hallucinations and Prompt Injection Security", bn: "এআই ভুল তথ্য এড়ানো ও প্রম্পট সিকিউরিটি" }
        ]
      },
      {
        moduleNumber: 2,
        title: { en: "Module 2: Advanced Text & Logic Prompting Techniques", bn: "মডিউল ২: এডভান্সড টেক্সট ও লজিক প্রম্পটিং টেকনিক" },
        duration: { en: "4 Classes • 8 Hours", bn: "৪ টি ক্লাস • ৮ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "Chain-of-Thought (CoT) and Tree-of-Thoughts (ToT) Frameworks", bn: "চেইন-অব-থট ও লজিক্যাল থিংকিং ফ্রেমওয়ার্ক" },
          { en: "Automating Complex Documentation & Research Analysis", bn: "ডকুমেন্টেশন ও রিসার্চ এনালাইসিস অটোমেশন" },
          { en: "Creating Custom GPTs & System Instructions", bn: "কাস্টম জিপিটি ও সিস্টেম প্রম্পট মেকিং" }
        ]
      },
      {
        moduleNumber: 3,
        title: { en: "Module 3: AI Media Generation (Midjourney, Stable Diffusion)", bn: "মডিউল ৩: মিডজার্নি ও ভিয্যুয়াল এআই জেনারেশন" },
        duration: { en: "4 Classes • 8 Hours", bn: "৪ টি ক্লাস • ৮ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Midjourney v6 Parameters, Camera Styles & Lighting Prompts", bn: "মিডজার্নি ক্যামেরা এঙ্গেল, লাইটিং ও স্টাইল প্রম্পটিং" },
          { en: "Creating Photorealistic Portraits, Logos, & Web UI Layouts", bn: "ফটো-রিয়েলিস্টিক ছবি, লোগো ও ওয়েব ইউআই ডিজাইন" },
          { en: "Consistent Character Creation & Brand Asset Workflows", bn: "ব্র্যান্ড এসেট ও কার্টুন ক্যারেক্টার কনসিসটেন্সি" }
        ]
      },
      {
        moduleNumber: 4,
        title: { en: "Module 4: AI Assisted Coding & Workflow Automation", bn: "মডিউল ৪: এআই কোডিং ও বিজনেস অটোমেশন" },
        duration: { en: "4 Classes • 8 Hours", bn: "৪ টি ক্লাস • ৮ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "Pair Programming with Cursor AI, ChatGPT & Claude Code", bn: "কার্সার এআই ও ক্লদ দিয়ে প্রোগ্রামিং" },
          { en: "Integrating OpenAI API with Make.com & Zapier", bn: "মেক.কম এবং জ্যাপিয়ারের মাধ্যমে নো-কোড অটোমেশন" },
          { en: "Building a Live AI-Powered Application Portfolio", bn: "লাইভ এআই অ্যাপ পোর্টফোলিও বিল্ডিং" }
        ]
      }
    ],
    includedItems: [
      { en: "18+ Video Lessons & Live Mentorship", bn: "১৮+ লাইভ ক্লাস ও ভিডিও লেকচার" },
      { en: "5+ Professional Real-World Projects", bn: "৫+ লাইভ প্রফেশনাল প্রজেক্ট" },
      { en: "1.5 Months Duration (Interactive Training)", bn: "১.৫ মাসের হ্যান্ডস-অন কোর্স" },
      { en: "Industry Certificate of Completion", bn: "সার্টিফিকেট অফ কমপ্লিশন" },
      { en: "Lifetime Access to Class Materials & Prompts Library", bn: "লাইফটাইম এক্সেস ও প্রম্পট ব্যাংক" },
      { en: "Dedicated One-on-One Support Sessions", bn: "ওয়ান-টু-ওয়ান প্রাইভেট সাপোর্ট" }
    ],
    reviews: [
      {
        id: "r1",
        name: "Tanvir Rahman",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150",
        role: { en: "Software Engineer at Brain Station 23", bn: "সফটওয়্যার ইঞ্জিনিয়ার, ব্রেইন স্টেশন ২৩" },
        rating: 5,
        comment: {
          en: "This course completely changed the way I code and write documentation. Cursor AI and prompt engineering saved me 15+ hours every week!",
          bn: "এই কোর্সটি আমার কাজের স্পিড ৩ গুণ বাড়িয়ে দিয়েছে। প্রম্পট ইঞ্জিনিয়ারিং এর টেকনিকগুলো সত্যিই অবিশ্বাস্য!"
        },
        date: "2 weeks ago"
      },
      {
        id: "r2",
        name: "Nusrat Jahan",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
        role: { en: "Digital Marketer & Freelancer", bn: "ডিজিটাল মার্কেটার ও ফ্রিল্যান্সার" },
        rating: 5,
        comment: {
          en: "The Midjourney and content automation modules helped me get 3 new international client contracts on Upwork within a month of completion.",
          bn: "মিডজার্নি এবং কন্টেন্ট অটোমেশন অংশটি আমার ফ্রিল্যান্সিং ক্যারিয়ারে দুর্দান্ত মোড় এনে দিয়েছে।"
        },
        date: "1 month ago"
      }
    ]
  },
  {
    id: "full-stack",
    slug: "full-stack",
    title: {
      en: "Full-Stack Web Development (Next.js & Node.js)",
      bn: "ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট (Next.js ও Node.js)"
    },
    subtitle: {
      en: "Build enterprise scalable web applications with React, Next.js, Node.js, Express & MongoDB",
      bn: "Next.js, React, Node.js এবং MongoDB দিয়ে রিয়েল-ওয়ার্ল্ড এন্টারপ্রাইজ ওয়েব অ্যাপ বানান"
    },
    category: "programming",
    categoryLabel: { en: "Programming", bn: "প্রোগ্রামিং" },
    badge: { en: "POPULAR", bn: "জনপ্রিয়" },
    mode: { en: "OFFLINE & ONLINE", bn: "অনলাইন ও অফলাইন" },
    modeType: "offline",
    rating: 5,
    ratingsCount: 85,
    enrolledCount: "250+",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "15000৳",
    originalFee: "20000৳",
    duration: { en: "6 Months", bn: "৬ মাস" },
    classesCount: { en: "48 Classes", bn: "৪৮ টি ক্লাস" },
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://www.youtube.com/embed/2eWuYf-keXI?autoplay=1",
    instructor: {
      name: "Mahmudur Rahman",
      designation: {
        en: "Senior Principal Software Engineer",
        bn: "সিনিয়র প্রিন্সিপাল সফটওয়্যার ইঞ্জিনিয়ার"
      },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      bio: {
        en: "Ex-Lead Architect with 12+ years of enterprise JavaScript & Cloud computing expertise.",
        bn: "১২+ বছরের এক্সপেরিয়েন্স সম্পন্ন সিনিয়র ফুল-স্ট্যাক আর্কিটেক্ট।"
      },
      experience: "12+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Master modern full-stack web development from scratch to deployment. Learn HTML5, CSS3, Tailwind CSS, JavaScript ES6+, React 19, Next.js App Router, TypeScript, Node.js, Express, MongoDB, Prisma ORM, and AWS Deployment with hands-on real-world projects.",
      bn: "এইচটিএমএল, সিএসএস, টেলউইন্ড থেকে শুরু করে আধুনিক রিয়েক্ট, নেক্সট.জেএস এবং নোড.জেএস দিয়ে কমপ্লিট ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট শিখুন।"
    },
    fullDescription: {
      en: "This 6-month comprehensive program prepares you for job roles as Full-Stack Engineer, Frontend React Developer, or Backend Node Developer. You will complete 8 production-grade projects including eCommerce platforms, LMS portals, and SaaS dashboards.",
      bn: "এই ৬ মাসের বিস্তৃত বুটক্যাম্পের মাধ্যমে আপনি ফুল-স্ট্যাক রিঅ্যাক্ট ও নোড সফটওয়্যার ইঞ্জিনিয়ার হিসেবে গ্লোবাল জব মার্কেটে প্রবেশের যোগ্য হয়ে উঠবেন।"
    },
    coreValues: [
      {
        id: "cv1",
        title: { en: "Production Code Base", bn: "প্রোডাকশন গ্রেড কোডবেস" },
        desc: { en: "Learn clean architecture, TypeScript types, and git workflows.", bn: "ক্লিন আর্কিটেকচার ও টাইপস্ক্রিপ্ট ফ্রেমওয়ার্ক শিখুন।" },
        icon: "Code2"
      },
      {
        id: "cv2",
        title: { en: "Guaranteed Placement Support", bn: "প্লেসমেন্ট সাপোর্ট ও ইন্টার্নশিপ" },
        desc: { en: "Mock interviews, resume building, and direct partner company referrals.", bn: "মক ইন্টারভিউ ও দেশের শীর্ষ আইটি ফার্মে রেফারেল।" },
        icon: "Award"
      }
    ],
    learningOutcomes: [
      { en: "Build responsive UI layouts with Tailwind CSS v4 & Framer Motion", bn: "রেসপন্সিভ টেলউইন্ড ইউআই ও ফ্রেমার মোশন এনিমেশন" },
      { en: "Develop secure REST & GraphQL APIs with Node.js, Express & JWT", bn: "নোড এবং এক্সপ্রেস দিয়ে সিকিউর রেস্ট এপিআই মেকিং" },
      { en: "Master Next.js Server Components, Server Actions & SSR/SSG", bn: "নেক্সট.জেএস সার্ভার কম্পোনেন্ট ও সার্ভার অ্যাকশন" },
      { en: "Database Modeling with MongoDB, PostgreSQL & Prisma ORM", bn: "মঙ্গোডিবি ও প্রিজমা দিয়ে ডাটাবেস ডিজাইন" }
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: { en: "Module 1: Modern Frontend Foundations (React & Tailwind)", bn: "মডিউল ১: রিয়েক্ট ও টেলউইন্ড সিএসএস বেসিক্স" },
        duration: { en: "12 Classes • 24 Hours", bn: "১২ টি ক্লাস • ২৪ ঘণ্টা" },
        lessonsCount: 12,
        topics: [
          { en: "HTML5 Semantic Markup & CSS Flexbox/Grid Layouts", bn: "এইচটিএমএল৫ ও সিএসএস গ্রিড লেআউট" },
          { en: "JavaScript Async/Await, ES6+, & DOM Manipulation", bn: "জাভাস্ক্রিপ্ট এসিনক্রোনাস কোডিং ও ডম" }
        ]
      }
    ],
    includedItems: [
      { en: "48+ Live Interactive Classes", bn: "৪৮+ লাইভ ইন্টারেক্টিভ ক্লাস" },
      { en: "8 Production Grade Projects", bn: "৮টি প্রোডাকশন গ্রেড প্রজেক্ট" },
      { en: "6 Months Intensive Bootcamp", bn: "৬ মাসের হ্যান্ডস-অন কোর্স" },
      { en: "Job Assistance & Mock Interview Sessions", bn: "জব এসিস্টেন্স ও প্র্যাকটিস ইন্টারভিউ" }
    ],
    reviews: []
  }
];

export function getCourseById(id: string): CourseDetail {
  const match = coursesData.find((c) => c.id === id || c.slug === id);
  if (match) return match;

  // Format readable title from id
  const formattedTitle = id
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const defaultCourse: CourseDetail = {
    id: id,
    slug: id,
    title: {
      en: formattedTitle || "Generative AI & Prompt Engineering",
      bn: formattedTitle || "জেনারেটিভ এআই ও প্রম্পট ইঞ্জিনিয়ারিং"
    },
    subtitle: {
      en: "Master modern industry technologies & build real-world production-grade software applications.",
      bn: "আধুনিক প্রযুক্তি শিখে রিয়েল-ওয়ার্ল্ড এন্টারপ্রাইজ অ্যাপ্লিকেশন তৈরি করুন।"
    },
    category: "ai",
    categoryLabel: { en: "AI & Technology", bn: "এআই ও প্রযুক্তি" },
    badge: { en: "BEST SELLER", bn: "বেস্ট সেলার" },
    mode: { en: "OFFLINE LEARNING", bn: "অফলাইন লার্নিং" },
    modeType: "offline",
    rating: 5,
    ratingsCount: 60,
    enrolledCount: "120+",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "8000৳",
    originalFee: "12000৳",
    duration: { en: "1.5 Months", bn: "১.৫ মাস" },
    classesCount: { en: "18 Classes", bn: "১৮ টি ক্লাস" },
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://www.youtube.com/embed/2eWuYf-keXI?autoplay=1",
    instructor: {
      name: "Ashraf Hossain",
      designation: {
        en: "Lead Software Architect & AI Specialist",
        bn: "লিড সফটওয়্যার আর্কিটেক্ট ও এআই স্পেশালিস্ট"
      },
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      bio: {
        en: "10+ years of enterprise software engineering experience across global products.",
        bn: "ইউএসএ ও ইউরোপের সফটওয়্যার ইন্ডাস্ট্রিতে ১০+ বছরের অভিজ্ঞতা সম্পন্ন সিনিয়র ইঞ্জিনিয়ার।"
      },
      experience: "10+ Yrs Exp",
      verified: true
    },
    overview: {
      en: `This ${formattedTitle} course is designed to help learners master modern tech tools by learning how to design effective architecture, automate content, code, image, and data tasks, and build real-world workflows. Over a duration of 1.5 months with 18 classes, the course takes students from foundational concepts to advanced, practical applications.`,
      bn: `এই ${formattedTitle} কোর্সটি আপনাকে আধুনিক সফটওয়্যার ও প্রাকটিক্যাল টেকনোলজি আয়ত্ত করতে সাহায্য করবে। ফান্ডামেন্টাল থেকে শুরু করে এডভান্সড রিয়েল-ওয়ার্ল্ড প্রজেক্ট শিখবেন ১৮টি লাইভ ক্লাসের মাধ্যমে।`
    },
    fullDescription: {
      en: "Technology is revolutionizing every industry. In this intensive course, you will learn the exact techniques used by elite engineers to build production-grade applications, automate complex business processes, generate hyper-realistic assets, and integrate modern APIs.",
      bn: "প্রযুক্তি বর্তমানে বিশ্বজুড়ে সমস্ত ইন্ডাস্ট্রির কাজের ধরন বদলে দিচ্ছে। এই কোর্সে আপনি শিখবেন কীভাবে বাস্তবমুখী প্রজেক্ট তৈরি করতে হয় এবং ক্যারিয়ারে নিজেকে অন্যদের চেয়ে এগিয়ে রাখতে হয়।"
    },
    coreValues: [
      {
        id: "cv1",
        title: { en: "100% Hands-on Practice", bn: "১০০% প্র্যাকটিক্যাল ট্রেনিং" },
        desc: { en: "Professional guidance and real-world tools with live exercises in every class.", bn: "লাইভ ক্লাসে বাস্তবমুখী টুলস নিয়ে কাজ করার সুবিধা।" },
        icon: "CheckCircle2"
      },
      {
        id: "cv2",
        title: { en: "Industry Grade Projects", bn: "ইন্ডাস্ট্রি স্ট্যান্ডার্ড প্রজেক্ট" },
        desc: { en: "Build real portfolio deliverables and live production web apps.", bn: "কোর্স চলাকালীনই বাস্তব পোর্টফোলিও প্রজেক্ট তৈরি।" },
        icon: "Zap"
      },
      {
        id: "cv3",
        title: { en: "Lifetime Support & Community", bn: "লাইফটাইম সাপোর্ট ও কমিউনিটি" },
        desc: { en: "Access to private developer Discord/WhatsApp group and continuous updates.", bn: "কোর্স শেষের পরেও প্রাইভেট ফোরামের মাধ্যমে গাইডলাইন।" },
        icon: "ShieldCheck"
      }
    ],
    learningOutcomes: [
      { en: "Master Core Principles & Advanced Concepts", bn: "কোর কনসেপ্টস ও এডভান্সড টেকনিক আয়ত্ত করা" },
      { en: "Build Real-World Portfolio Projects", bn: "বাস্তব পোর্টফোলিও প্রজেক্ট তৈরি করা" },
      { en: "Automate Workflows & Increase Productivity 10x", bn: "ওয়ার্কফ্লো অটোমেশন ও প্রোডাক্টিভিটি ১০ গুণ বাড়ানো" },
      { en: "Deploy Applications to Cloud Infrastructure", bn: "ক্লাউড পরিকাঠামোয় অ্যাপ্লিকেশন লাইভ ডেপ্লয় করা" }
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: { en: "Module 1: Foundations & Architecture", bn: "মডিউল ১: বেসিক্স ও সিস্টেম আর্কিটেকচার" },
        duration: { en: "4 Classes • 8 Hours", bn: "৪ টি ক্লাস • ৮ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "Introduction to Industry Fundamentals", bn: "ইন্ডাস্ট্রি স্ট্যান্ডার্ড পরিচিতি" },
          { en: "Setup Environment & Tooling Config", bn: "কোডিং এনভায়রনমেন্ট ও টুলস সেটআপ" }
        ]
      },
      {
        moduleNumber: 2,
        title: { en: "Module 2: Real-World Implementation", bn: "মডিউল ২: রিয়েল-ওয়ার্ল্ড ইমপ্লিমেন্টেশন" },
        duration: { en: "6 Classes • 12 Hours", bn: "৬ টি ক্লাস • ১২ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Building Production Assets & Workflows", bn: "প্রোডাকশন এসেটস ও ওয়ার্কফ্লো ডেভেলপমেন্ট" },
          { en: "Live Portfolio Project Integration", bn: "লাইভ প্রজেক্ট ডেভেলপমেন্ট ও ডেপ্লয়মেন্ট" }
        ]
      }
    ],
    includedItems: [
      { en: "18+ Video Lessons & Live Mentorship", bn: "১৮+ লাইভ ক্লাস ও ভিডিও লেকচার" },
      { en: "5+ Professional Real-World Projects", bn: "৫+ লাইভ প্রফেশনাল প্রজেক্ট" },
      { en: "1.5 Months Duration (Interactive Training)", bn: "১.৫ মাসের হ্যান্ডস-অন কোর্স" },
      { en: "Industry Certificate of Completion", bn: "সার্টিফিকেট অফ কমপ্লিটশন" },
      { en: "Lifetime Access to Materials & Support", bn: "লাইফটাইম এক্সেস ও মেম্বারশিপ" }
    ],
    reviews: [
      {
        id: "r1",
        name: "Tanvir Rahman",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150",
        role: { en: "Software Engineer", bn: "সফটওয়্যার ইঞ্জিনিয়ার" },
        rating: 5,
        comment: {
          en: "This course completely changed the way I work. Highly recommended!",
          bn: "এই কোর্সটি আমার কাজের স্পিড ৩ গুণ বাড়িয়ে দিয়েছে। দারুণ এক্সপেরিয়েন্স!"
        },
        date: "2 weeks ago"
      }
    ]
  };

  return defaultCourse;
}
