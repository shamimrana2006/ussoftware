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
    id: "101",
    slug: "python-django-ml",
    title: {
      en: "Python, Django & Machine Learning Mastery",
      bn: "পাইথন, জ্যাঙ্গো ও মেশিন লার্নিং মাস্টারি"
    },
    subtitle: {
      en: "Learn Python programming, Django backend development, REST APIs & Machine Learning models",
      bn: "পাইথন প্রোগ্রামিং, জ্যাঙ্গো ফ্রেমওয়ার্ক, এপিআই এবং মেশিন লার্নিং অ্যালগরিদম শিখুন"
    },
    category: "software",
    categoryLabel: { en: "Software & Web", bn: "সফটওয়্যার ও ওয়েব" },
    badge: { en: "POPULAR", bn: "জনপ্রিয়" },
    mode: { en: "Online & Offline", bn: "অনলাইন ও অফলাইন" },
    modeType: "offline",
    rating: 5,
    ratingsCount: 78,
    enrolledCount: "95+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "9000৳",
    rawFee: 9000,
    originalFee: "15000৳",
    duration: { en: "3 Months", bn: "৩ মাস" },
    classesCount: { en: "26 Classes", bn: "২৬ টি ক্লাস" },
    image: "/images/course thumbnail/python django and machine learning.jpg",
    videoUrl: "https://www.youtube.com/embed/nvWl7GkpHCU?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Python%2C%20Django%20%26%20Machine%20Learning%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Engr. Tanvir Ahmed",
      designation: { en: "Senior Python & ML Engineer", bn: "সিনিয়র পাইথন ও এমএল ইঞ্জিনিয়ার" },
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      bio: { en: "8+ years in Python backend architecture & predictive modeling.", bn: "৮+ বছরের পাইথন ব্যাকএন্ড ও মেশিন লার্নিং অভিজ্ঞতা।" },
      experience: "8+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Complete practical journey from Python programming basics to building enterprise web apps with Django and deploying scikit-learn Machine Learning models.",
      bn: "পাইথন প্রোগ্রামিং থেকে শুরু করে জ্যাঙ্গো দিয়ে ওয়েব অ্যাপ্লিকেশন তৈরি এবং মেশিন লার্নিং মডেল ডিপ্লয়মেন্টের পূর্ণাঙ্গ কোর্স।"
    },
    fullDescription: {
      en: "Master Python syntax, OOP, Django ORM, REST Framework, data analysis with Pandas & NumPy, and AI/ML algorithms.",
      bn: "পাইথন ওবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং, ডেটাবেস ও মেশিন লার্নিং নিয়ে হ্যান্ডস-অন প্রজেক্ট তৈরি শিখবেন।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
    reviews: []
  },
  {
    id: "102",
    slug: "flutter-app-development",
    title: {
      en: "Cross-Platform Flutter & Dart App Development",
      bn: "ক্রস-প্ল্যাটফর্ম ফ্লাটার ও ডার্ট অ্যাপ ডেভেলপমেন্ট"
    },
    subtitle: {
      en: "Build stunning iOS & Android apps with Flutter, Firebase & State Management",
      bn: "ফ্লাটার ও ডার্ট দিয়ে আইওএস এবং অ্যান্ড্রয়েড মোবাইল অ্যাপ তৈরি শিখুন"
    },
    category: "software",
    categoryLabel: { en: "Software & Web", bn: "সফটওয়্যার ও ওয়েব" },
    badge: { en: "TRENDING", bn: "ট্রেন্ডিং" },
    mode: { en: "Online & Offline", bn: "অনলাইন ও অফলাইন" },
    modeType: "offline",
    rating: 5,
    ratingsCount: 65,
    enrolledCount: "80+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "9000৳",
    rawFee: 9000,
    originalFee: "14000৳",
    duration: { en: "3 Months", bn: "৩ মাস" },
    classesCount: { en: "24 Classes", bn: "২৪ টি ক্লাস" },
    image: "/images/course thumbnail/flutter app.jpg",
    videoUrl: "https://www.youtube.com/embed/nvWl7GkpHCU?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Flutter%20App%20Development%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Sabbir Hasan",
      designation: { en: "Lead Mobile Architect", bn: "লিড মোবাইল আর্কিটেক্ট" },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      bio: { en: "Built 30+ production mobile apps published on Play Store & App Store.", bn: "৩০+ প্রোডাকশন মোবাইল অ্যাপ তৈরির অভিজ্ঞ অভিজ্ঞ ট্রেইনার।" },
      experience: "7+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "From Dart fundamentals to complex state management with Bloc/Provider, API integration, and app store deployment.",
      bn: "ডার্ট ল্যাঙ্গুয়েজ, ফ্লাটার ইউআই উইজেটস, ফায়ারবেস এবং প্লে স্টোর পাবলিশিংয়ের পূর্ণাঙ্গ গাইড।"
    },
    fullDescription: {
      en: "Learn to build high-performance native iOS and Android apps with a single codebase using Google Flutter.",
      bn: "একটি সিঙ্গেল কোডবেস দিয়ে আধুনিক ও আকর্ষণীয় মোবাইল অ্যাপ তৈরি করুন।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
    reviews: []
  },
  {
    id: "103",
    slug: "diploma-ai-data-science",
    title: {
      en: "Diploma in AI & Data Science",
      bn: "ডিপ্লোমা ইন এআই ও ডেটা সায়েন্স"
    },
    subtitle: {
      en: "Comprehensive 6-month diploma covering Python, Deep Learning, NLP, Computer Vision & Big Data",
      bn: "৬ মাসের পূর্ণাঙ্গ ডিপ্লোমা কোর্স: ডিপ লার্নিং, এনএলপি, কম্পিউটার ভিশন ও বিগ ডেটা"
    },
    category: "diploma",
    categoryLabel: { en: "Diploma Programs", bn: "ডিপ্লোমা প্রোগ্রামস" },
    badge: { en: "DIPLOMA", bn: "ডিপ্লোমা" },
    mode: { en: "Offline & Online", bn: "অফলাইন ও অনলাইন" },
    modeType: "offline",
    rating: 5,
    ratingsCount: 110,
    enrolledCount: "140+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "18000৳",
    rawFee: 18000,
    originalFee: "28000৳",
    duration: { en: "6 Months", bn: "৬ মাস" },
    classesCount: { en: "48 Classes", bn: "৪৮ টি ক্লাস" },
    image: "/images/course thumbnail/diploma in ai and data science.png",
    videoUrl: "https://www.youtube.com/embed/nvWl7GkpHCU?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Diploma%20in%20AI%20%26%20Data%20Science%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Dr. Kamrul Hasan",
      designation: { en: "Principal AI Scientist", bn: "প্রিন্সিপাল এআই সায়েন্টিস্ট" },
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
      bio: { en: "AI researcher & industry consultant with 12+ years experience.", bn: "১২+ বছরের অভিজ্ঞ এআই রিসার্চার ও ডেটা সায়েন্টিস্ট।" },
      experience: "12+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "The ultimate 6-month industry diploma for aspiring Data Scientists, Machine Learning Engineers, and AI Researchers.",
      bn: "ডেটা সায়েন্টিস্ট ও এআই ইঞ্জিনিয়ার ক্যারিয়ার গড়ার জন্য দেশের সবচেয়ে তথ্যবহুল ডিপ্লোমা প্রোগ্রাম।"
    },
    fullDescription: {
      en: "Master Python, Pandas, Scikit-learn, TensorFlow, PyTorch, LLMs, Neural Networks, and production deployment on Cloud.",
      bn: "টেন্সরফ্লো, পাইটর্চ, এনএলপি এবং ক্লাউড এআই মডেল ডিপ্লয়মেন্ট শিখুন।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
    reviews: []
  },
  {
    id: "104",
    slug: "diploma-cyber-security",
    title: {
      en: "Diploma in Cyber Security & Threat Intelligence",
      bn: "ডিপ্লোমা ইন সাইবার সিকিউরিটি ও থ্রেট ইন্টেলিজেন্স"
    },
    subtitle: {
      en: "6-month intensive diploma covering SOC Operations, CEH, Pen Testing, Cloud Security & Malware Analysis",
      bn: "৬ মাসের অ্যাডভান্সড ডিপ্লোমা: এসওসি অপারেশনস, সিইএইচ, পেন-টেস্টিং ও ক্লাউড সিকিউরিটি"
    },
    category: "diploma",
    categoryLabel: { en: "Diploma Programs", bn: "ডিপ্লোমা প্রোগ্রামস" },
    badge: { en: "DIPLOMA", bn: "ডিপ্লোমা" },
    mode: { en: "Offline & Online", bn: "অফলাইন ও অনলাইন" },
    modeType: "offline",
    rating: 5,
    ratingsCount: 92,
    enrolledCount: "115+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "18000৳",
    rawFee: 18000,
    originalFee: "28000৳",
    duration: { en: "6 Months", bn: "৬ মাস" },
    classesCount: { en: "48 Classes", bn: "৪৮ টি ক্লাস" },
    image: "/images/course thumbnail/diploma in cyber security.png",
    videoUrl: "https://www.youtube.com/embed/nvWl7GkpHCU?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Diploma%20in%20Cyber%20Security%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Mehedi Hassan CISSP",
      designation: { en: "Chief Information Security Officer", bn: "চিফ ইনফরমেশন সিকিউরিটি অফিসার" },
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
      bio: { en: "CISSP, CEH certified cyber defense consultant.", bn: "সিআইএসএসপি ও সিইএইচ সার্টিফাইড সাইবার ডিফেন্স স্পেশালিস্ট।" },
      experience: "11+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Comprehensive diploma designed to take you from security essentials to elite SOC analyst and penetration tester.",
      bn: "সাইবার সিকিউরিটি প্রফেশনাল হিসেবে আন্তর্জাতিক ক্যারিয়ার গড়ার জন্য পূর্ণাঙ্গ ডিপ্লোমা কোর্স।"
    },
    fullDescription: {
      en: "Hands-on labs on Kali Linux, Wireshark, Splunk, Burp Suite, Network penetration testing, and Incident Response.",
      bn: "কালি লিনাক্স, বার্প স্যুট, স্প্লাঙ্ক ও রিয়েল লাইভ অ্যাটাক-ডিফেন্স সিমুলেশন প্র্যাকটিস।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
    reviews: []
  },
  {
    id: "105",
    slug: "product-management",
    title: {
      en: "Agile & Digital Product Management",
      bn: "অ্যাজাইল ও ডিজিটাল প্রোডাক্ট ম্যানেজমেন্ট"
    },
    subtitle: {
      en: "Learn Product Strategy, Roadmapping, Scrum, User Research & Agile Leadership",
      bn: "প্রোডাক্ট স্ট্র্যাটেজি, রোডম্যাপ, স্ক্রাম মেথডলজি ও অ্যাজাইল লিডারশিপ"
    },
    category: "business",
    categoryLabel: { en: "Business & Management", bn: "বিজনেস ও ম্যানেজমেন্ট" },
    badge: { en: "CERTIFIED", bn: "সার্টিফাইড" },
    mode: { en: "Online & Offline", bn: "অনলাইন ও অফলাইন" },
    modeType: "online",
    rating: 5,
    ratingsCount: 52,
    enrolledCount: "60+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "8000৳",
    rawFee: 8000,
    originalFee: "12000৳",
    duration: { en: "2.5 Months", bn: "২.৫ মাস" },
    classesCount: { en: "20 Classes", bn: "২০ টি ক্লাস" },
    image: "/images/course thumbnail/product managment.png",
    videoUrl: "https://www.youtube.com/embed/nvWl7GkpHCU?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Product%20Management%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Rezaul Karim",
      designation: { en: "VP of Product", bn: "ভিপি অফ প্রোডাক্ট" },
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300",
      bio: { en: "Product executive leading fintech & SaaS platforms across Asia.", bn: "ফ্যামিলি টেক ও সাস প্রোডাক্টে ১০+ বছরের এক্সপেরিয়েন্স।" },
      experience: "10+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Transform into an impactful Product Manager capable of driving multi-million dollar tech products from idea to scale.",
      bn: "টেক ইন্ডাস্ট্রিতে হাই-ডিমান্ড প্রোডাক্ট ম্যানেজার বা স্ক্রাম মাস্টার হিসেবে ক্যারিয়ার গড়ুন।"
    },
    fullDescription: {
      en: "Master PRD writing, wireframing, Jira/Confluence, user feedback loops, and metrics-driven product growth.",
      bn: "পিআরডি রাইটিং, জিরা, ইউজার রিসার্চ ও প্রোডাক্ট গ্রোথ স্ট্র্যাটেজি।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
    reviews: []
  },
  {
    id: "106",
    slug: "3d-animation-vfx",
    title: {
      en: "3D Animation, VFX & Motion Design",
      bn: "থ্রিডি অ্যানিমেশন, ভিএফএক্স ও মোশন ডিজাইন"
    },
    subtitle: {
      en: "Master Blender, Maya, After Effects, 3D Character Modeling, Lighting & Rendering",
      bn: "ব্লেন্ডার, মায়া, আফটার ইফেক্টস এবং ৩ডি ক্যারেক্টার মডেলিং ও রেন্ডারিং"
    },
    category: "creative",
    categoryLabel: { en: "Creative Design", bn: "ক্রিয়েটিভ ডিজাইন" },
    badge: { en: "CREATIVE", bn: "ক্রিয়েটিভ" },
    mode: { en: "Offline", bn: "অফলাইন" },
    modeType: "offline",
    rating: 5,
    ratingsCount: 58,
    enrolledCount: "70+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "10000৳",
    rawFee: 10000,
    originalFee: "16000৳",
    duration: { en: "3.5 Months", bn: "৩.৫ মাস" },
    classesCount: { en: "28 Classes", bn: "২৮ টি ক্লাস" },
    image: "/images/course thumbnail/3d animation.jpg",
    videoUrl: "https://www.youtube.com/embed/nvWl7GkpHCU?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%223D%20Animation%20%26%20VFX%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Mahmudur Rahman",
      designation: { en: "Lead 3D & VFX Artist", bn: "লিড ৩ডি ও ভিএফএক্স আর্টিস্ট" },
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300",
      bio: { en: "9+ years in international 3D animation, gaming assets & VFX pipelines.", bn: "আন্তর্জাতিক গেমিং ও অ্যানিমেশন ইন্ডাস্ট্রিতে ৯+ বছরের অভিজ্ঞ আর্টিস্ট।" },
      experience: "9+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "From 3D modeling fundamentals to photorealistic rendering, character rigging, and cinematic motion graphics.",
      bn: "থ্রিডি মডেলিং, টেক্সচারিং, লাইটিং, রিগিং এবং সিনেমাটিক মোশন গ্রাফিক্সের প্রফেশনাল ট্রেনিং।"
    },
    fullDescription: {
      en: "Learn industry-standard Blender and Maya workflows for games, films, advertising, and architectural visualization.",
      bn: "গেমিং, ফিল্ম ও আর্কিটেকচারাল ভিজ্যুয়ালাইজেশনের জন্য রিয়েল ৩ডি অ্যাসেট তৈরি শিখুন।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
    reviews: []
  },
  {
    id: "1035",
    slug: "cpa-nexus-action-based-marketing",
    title: {
      en: "CPA Nexus: The Ultimate Guide to Action-Based Marketing",
      bn: "সিপিএ নেক্সাস: দ্য আল্টিমেট গাইড টু অ্যাকশন-বেসড মার্কেটিং"
    },
    subtitle: {
      en: "Master CPA Fundamentals, High-Converting Funnels, TikTok/Meta/Google Ads & Campaign Optimization for Global Lead Gen",
      bn: "সিপিএ মার্কেটিং, ল্যান্ডিং পেজ ফানেল, টিকটক, ফেসবুক ও গুগল অ্যাডস এবং প্র্যাকটিক্যাল ক্যাম্পেইন অপটিমাইজেশন"
    },
    category: "marketing",
    categoryLabel: { en: "Digital Marketing & CPA", bn: "ডিজিটাল মার্কেটিং ও সিপিএ" },
    badge: { en: "NEW & TRENDING", bn: "নতুন ও ট্রেন্ডিং" },
    mode: { en: "Online & Offline", bn: "অনলাইন ও অফলাইন" },
    modeType: "online",
    rating: 5,
    ratingsCount: 84,
    enrolledCount: "120+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "10,000৳",
    rawFee: 10000,
    originalFee: "16,000৳",
    duration: { en: "3.5 Months", bn: "৩.৫ মাস" },
    classesCount: { en: "28 Live Classes + 10 Projects", bn: "২৮ টি লাইভ ক্লাস + ১০ টি প্রজেক্ট" },
    image: "/images/cpa-nexus-banner.jpg",
    videoUrl: "https://www.youtube.com/embed/nvWl7GkpHCU?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22CPA%20Nexus%3A%20The%20Ultimate%20Guide%20to%20Action-Based%20Marketing%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Tariqul Islam",
      designation: {
        en: "Senior Performance Marketer & CPA Media Buyer",
        bn: "সিনিয়র পারফরম্যান্স মার্কেটার ও সিপিএ মিডিয়া বায়ার"
      },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      bio: {
        en: "8+ years managing $500K+ in global CPA and performance marketing ad spend across Meta, TikTok, and Native ad networks.",
        bn: "ইউএসএ ও ইউরোপের সিপিএ নেটওয়ার্কে ৮+ বছরের অভিজ্ঞতা সম্পন্ন পারফরম্যান্স মিডিয়া বায়ার।"
      },
      experience: "8+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "CPA Nexus is an all-in-one mastery blueprint designed to teach you profitable Action-Based Marketing from scratch to advanced multi-channel paid traffic scaling. You will learn everything from network approvals, high-converting bridge page builders, laser-targeted TikTok/Meta/Google ad funnels, to live campaign tracking and real project executions.",
      bn: "সিপিএ নেক্সাস হলো অ্যাকশন-বেসড মার্কেটিংয়ের একটি পূর্ণাঙ্গ গাইড। সিপিএ একাউন্ট তৈরি ও অ্যাপ্রুভাল থেকে শুরু করে হাই-কনভার্টিং ল্যান্ডিং পেজ তৈরি, ফেসবুক, টিকটক, গুগল ও নেটিভ অ্যাডস চালানো এবং লাইভ প্রজেক্টের মাধ্যমে প্রফিটেবল ক্যাম্পেইন পরিচালনা শিখবেন।"
    },
    fullDescription: {
      en: "Action-Based CPA Marketing is one of the highest-paying monetization avenues in digital marketing. In this intensive course, you will master CPA Network approvals (MaxBounty, CPALead, OGAds, etc.), funnel building, high-converting creative hooks, Tier-1 audience targeting, tracking tools (BeMob, Voluum), and long-term email automation strategies.",
      bn: "সিপিএ মার্কেটিংয়ে সঠিক অফার নির্বাচন এবং প্রফিটেবল ট্রাফিক ক্যাম্পেইন রান করাই সফলতার মূল চাবিকাঠি। এই কোর্সে থিওরির পাশাপাশি সম্পূর্ণ প্র্যাকটিক্যাল প্রজেক্টে বাজাট দিয়ে লাইভ অ্যাড রান এবং কনভার্সন অপটিমাইজেশন শেখানো হবে।"
    },
    coreValues: [
      {
        id: "cv1",
        title: { en: "100% Practical Campaigns", bn: "১০০% প্র্যাকটিক্যাল ক্যাম্পেইন" },
        desc: { en: "Launch live ad campaigns with real budgets and analyze real-time conversions.", bn: "লাইভ বাজাট দিয়ে ক্লাসে সরাসরি লাইভ ক্যাম্পেইন রান ও অপটিমাইজেশন।" },
        icon: "Zap"
      },
      {
        id: "cv2",
        title: { en: "Tier-1 Traffic Mastery", bn: "টিয়ার-১ ট্রাফিক স্ট্র্যাটেজি" },
        desc: { en: "Master TikTok, Google, Meta & Native Ads to target USA, UK, CA, and AU traffic.", bn: "ইউএসএ, ইউকে ও কানাডার হাই-কনভার্টিং অডিয়েন্স টার্গেটিং মেথড।" },
        icon: "TrendingUp"
      },
      {
        id: "cv3",
        title: { en: "Direct CPA Network Approval", bn: "সিপিএ অ্যাকাউন্ট অ্যাপ্রুভাল সাপোর্ট" },
        desc: { en: "Step-by-step guidance to get approved in top global CPA networks.", bn: "টপ গ্লোবাল সিপিএ নেটওয়ার্কগুলোতে সহজে অ্যাপ্রুভাল পাওয়ার সাপোর্ট।" },
        icon: "CheckCircle2"
      }
    ],
    learningOutcomes: [
      { en: "Master CPA Account Creation, Approval & Offer Selection Strategies", bn: "CPA অ্যাকাউন্ট, অফার নির্বাচন ও প্রফিটেবল স্ট্র্যাটেজি" },
      { en: "Build High-Converting Bridge & Landing Pages with Custom Domains", bn: "ওয়েবসাইট সেটআপ ও হাই-কনভার্টিং ল্যান্ডিং পেজ তৈরি" },
      { en: "Run Profitable Facebook, Instagram & TikTok Paid Ad Campaigns", bn: "Facebook, Instagram ও TikTok Ads দিয়ে USA Lead Generation" },
      { en: "Deploy High Buyer-Intent Google Search & YouTube Video Ads", bn: "Google & YouTube Ads — Buyer Intent Keyword Targeting ও Video Ads" },
      { en: "Build Automated High-Inbox-Delivery Email Marketing Funnels", bn: "Email Marketing — Email Funnel ও Marketing Strategy" },
      { en: "Harness Pinterest, Push Notifications & Native Arbitrage Traffic", bn: "Pinterest, Push Notification & Native Ads — বিকল্প Traffic Strategy" },
      { en: "Track & Optimize Conversion Metrics with Professional Trackers", bn: "CPA Campaign Optimization — Traffic, Conversion ও Campaign Optimization" },
      { en: "Launch Real-World CPA Projects with End-to-End Execution", bn: "বাস্তব প্রজেক্টের মাধ্যমে লাইভ CPA Marketing ক্যাম্পেইন শেখানো" }
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: { en: "Module 1: CPA Marketing Fundamentals", bn: "মডিউল ১: CPA মার্কেটিং ফান্ডামেন্টালস" },
        duration: { en: "2 Classes • 4 Hours", bn: "২ টি ক্লাস • ৪ ঘণ্টা" },
        lessonsCount: 4,
        topics: [
          { en: "CPA Account Creation & Approval Secrets in Top Networks", bn: "CPA অ্যাকাউন্ট তৈরি ও টপ নেটওয়ার্কে অ্যাপ্রুভাল নেওয়ার সিক্রেট টেকনিক" },
          { en: "Marketplace Analysis & High-Converting Offer Selection", bn: "মার্কেটপ্লেস অ্যানালাইসিস ও হাই-কনভার্টিং অফার নির্বাচন" },
          { en: "Niche Research & Profit Strategy Blueprint", bn: "নিশ রিসার্চ ও হাই-আরওআই স্ট্র্যাটেজি প্ল্যানিং" }
        ]
      },
      {
        moduleNumber: 2,
        title: { en: "Module 2: Domain, Hosting & Landing Page Builder", bn: "মডিউল ২: Domain, Hosting ও Landing Page" },
        duration: { en: "3 Classes • 6 Hours", bn: "৩ টি ক্লাস • ৬ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "Custom Domain, Fast Hosting & Cloudflare SSL Setup", bn: "ওয়েবসাইট ও ডোমেন-হোস্টিং প্রফেশনাল সেটআপ" },
          { en: "High-Converting Bridge Page & Funnel Design", bn: "হাই-কনভার্টিং ল্যান্ডিং পেজ ও ব্রিজ পেজ তৈরি" },
          { en: "Lead Capture Forms, Countdown Timers & Call-to-Action Triggers", bn: "লিড ক্যাপচার ফর্ম ও হাই-কনভার্টিং সিটিএ ট্রিগার সেটআপ" }
        ]
      },
      {
        moduleNumber: 3,
        title: { en: "Module 3: Facebook & Instagram Ads Mastery", bn: "মডিউল ৩: Facebook & Instagram Ads" },
        duration: { en: "3 Classes • 6 Hours", bn: "৩ টি ক্লাস • ৬ ঘণ্টা" },
        lessonsCount: 6,
        topics: [
          { en: "Meta Ads Manager, Conversions API & Pixel Integration", bn: "মেটা অ্যাডস ম্যানেজার, পিক্সেল ও কনভার্সন এপিআই সেটআপ" },
          { en: "Audience Research, Laser Targeting & Lookalike Scaling", bn: "লেজার টার্গেটেড অডিয়েন্স রিসার্চ ও পেইড ক্যাম্পেইন পরিচালনা" },
          { en: "Ad Copywriting, Creative Hooks & Compliance Guidelines", bn: "অ্যাড কপিরাইটিং, ক্রিয়েটিভ হুক ও অ্যাকাউন্ট সেফটি পলিসি" }
        ]
      },
      {
        moduleNumber: 4,
        title: { en: "Module 4: TikTok Ads — USA Lead Generation", bn: "মডিউল ৪: TikTok Ads — USA Lead Generation" },
        duration: { en: "3 Classes • 6 Hours", bn: "৩ টি ক্লাস • ৬ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "Agency Ad Account Setup & USA / Tier-1 Geography Targeting", bn: "ইউএসএ ও টিয়ার-১ দেশের এজেন্সি অ্যাড অ্যাকাউন্ট সেটআপ" },
          { en: "High-Engagement UGC & Video Creative Production", bn: "হাই-কনভার্টিং ক্রিয়েটিভ ভিডিও তৈরি ও ট্রেন্ডিং অডিও মেথড" },
          { en: "Low CPL Lead Generation & Viral Bidding Strategies", bn: "কম খরচে হাই-কোয়ালিটি ইউএসএ লিড জেনারেশন স্ট্র্যাটেজি" }
        ]
      },
      {
        moduleNumber: 5,
        title: { en: "Module 5: Google & YouTube Ads Funnel", bn: "মডিউল ৫: Google & YouTube Ads" },
        duration: { en: "3 Classes • 6 Hours", bn: "৩ টি ক্লাস • ৬ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "High Buyer-Intent Keyword Research & Google Search Campaigns", bn: "Buyer Intent Keyword Targeting ও গুগল সার্চ অ্যাডস ক্যাম্পেইন" },
          { en: "YouTube In-Stream & Discovery Video Ad Campaigns", bn: "ইউটিউব ইন-স্ট্রিম ভিডিও অ্যাড তৈরি ও টার্গেটিং" },
          { en: "Conversion Tracking, Quality Score & Negative Keyword Filtering", bn: "কনভার্সন ট্র্যাকিং ও নেগেটিভ কিওয়ার্ড অপটিমাইজেশন" }
        ]
      },
      {
        moduleNumber: 6,
        title: { en: "Module 6: High-Converting Email Marketing & Funnels", bn: "মডিউল ৬: Email Marketing & Funnel Strategy" },
        duration: { en: "3 Classes • 6 Hours", bn: "৩ টি ক্লাস • ৬ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "Lead Magnet Creation & Automated Opt-in Funnels", bn: "লিড ম্যাগনেট তৈরি ও ইমেইল কালেক্ট করার অটোমেশন" },
          { en: "Autoresponder Setup, Drip Campaigns & High Inbox Delivery", bn: "অটোরেসপন্ডার ও ড্রিপ ইমেইল সিকোয়েন্স সেটআপ" },
          { en: "Long-term Recurring Monetization Strategies", bn: "ইমেইল ফানেলের মাধ্যমে দীর্ঘমেয়াদী রিকারিং আর্নিং স্ট্র্যাটেজি" }
        ]
      },
      {
        moduleNumber: 7,
        title: { en: "Module 7: Pinterest, Push Notifications & Native Ads", bn: "মডিউল ৭: Pinterest, Push Notifications & Native Ads" },
        duration: { en: "3 Classes • 6 Hours", bn: "৩ টি ক্লাস • ৬ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "Alternative High-Volume Traffic Generation Strategies", bn: "বিকল্প Traffic Generation Strategy ও আরবিট্রেজ মেথড" },
          { en: "Pinterest Viral Idea Pins, Boards & Business Marketing", bn: "পিন্টারেস্ট ভাইরাল পিন ও অরগানিক ট্রাফিক ড্রাইভ" },
          { en: "Taboola/Outbrain Native Ads & Push Notification Networks", bn: "পুশ নেটওয়ার্ক ও নেটিভ বিজ্ঞাপন ক্যাম্পেইন সেটআপ" }
        ]
      },
      {
        moduleNumber: 8,
        title: { en: "Module 8: CPA Campaign Tracking & Optimization", bn: "মডিউল ৮: CPA Campaign Optimization" },
        duration: { en: "3 Classes • 6 Hours", bn: "৩ টি ক্লাস • ৬ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "Click Trackers (BeMob, Voluum, RedTrack) Complete Setup", bn: "ক্লিক ট্র্যাকিং টুলস সেটআপ ও পোস্টব্যাক ইউআরএল ইন্টিগ্রেশন" },
          { en: "Traffic, Conversion & Landing Page Split-Testing (A/B Testing)", bn: "Traffic, Conversion ও ল্যান্ডিং পেজ স্প্লিট-টেস্টিং" },
          { en: "Killing Loser Ads & Scaling Winning Campaigns for 300%+ ROI", bn: "লস ক্যাম্পেইন বাদ দিয়ে উইনার অ্যাড স্কেলিং ও আরওআই বৃদ্ধি" }
        ]
      },
      {
        moduleNumber: 9,
        title: { en: "Module 9: Free & Paid Traffic Strategies", bn: "মডিউল ৯: Free & Paid Traffic Strategies" },
        duration: { en: "2 Classes • 4 Hours", bn: "২ টি ক্লাস • ৪ ঘণ্টা" },
        lessonsCount: 4,
        topics: [
          { en: "Targeted Free Organic Traffic Generation Techniques", bn: "বিভিন্ন মাধ্যমে Targeted Free Traffic সংগ্রহ করার উপায়" },
          { en: "Balancing Paid Ad Spend with High-ROI Free Traffic Channels", bn: "পেইড ট্রাফিকের সাথে ফ্রি ট্রাফিকের সঠিক সমন্বয়" },
          { en: "Ad Account Ban Protection & Safe-Page Cloaking Basics", bn: "অ্যাকাউন্ট ব্যান প্রটেকশন ও পলিসি গাইডলাইন" }
        ]
      },
      {
        moduleNumber: 10,
        title: { en: "Module 10: Practical Campaign Setup & Live Projects", bn: "মডিউল ১০: Practical Campaign Setup & Case Studies" },
        duration: { en: "3 Classes • 6 Hours", bn: "৩ টি ক্লাস • ৬ ঘণ্টা" },
        lessonsCount: 5,
        topics: [
          { en: "Hands-on Live Campaign Launch with Real Ad Budget", bn: "বাস্তব প্রজেক্টের মাধ্যমে লাইভ CPA Marketing ক্যাম্পেইন রান" },
          { en: "Real-time Payout Proofs, Dashboard Analytics & Revenue Withdrawal", bn: "লাইভ পে-আউট ও কনভার্সন অ্যানালাইসিস এবং উইথড্র মেথড" },
          { en: "Direct Advertiser Deals & Freelance Marketplace Roadmap", bn: "ডিরেক্ট ক্লায়েন্ট হান্টিং ও ফ্রিল্যান্স ক্যারিয়ার রোডম্যাপ" }
        ]
      }
    ],
    includedItems: [
      { en: "28 Live Interactive Classes & Screen Recordings", bn: "২৮ টি লাইভ ক্লাস ও ক্লাস রেকর্ডিং" },
      { en: "10 Hands-on Live Campaign Projects & Case Studies", bn: "১০ টি বাস্তব প্রজেক্ট ও লাইভ ক্যাম্পেইন কেস স্টাডি" },
      { en: "Ready-Made High-Converting Landing Page Templates", bn: "তৈরি করা হাই-কনভার্টিং ল্যান্ডিং পেজ টেমপ্লেট" },
      { en: "Dedicated Lifetime Community & Ad Spend Mentorship", bn: "আজীবন মেন্টরশিপ সাপোর্ট ও এক্সক্লুসিভ কমিউনিটি এক্সেস" },
      { en: "Industry Recognized CPA Marketing Certificate", bn: "ইন্ডাস্ট্রি রিকগনাইজড সার্টিফিকেট" }
    ],
    reviews: [
      {
        id: "r-cpa-1",
        name: "Tanvir Ahmed",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120",
        role: { en: "CPA Media Buyer", bn: "সিপিএ মিডিয়া বায়ার" },
        rating: 5,
        comment: {
          en: "The TikTok & Meta ads funnel strategy in this course took my CPA campaigns from break-even to generating $120/day within 3 weeks!",
          bn: "সিপিএ নেক্সাস কোর্সের টিকটক ও মেটা অ্যাডস ফানেল স্ট্র্যাটেজি অনুসরণ করে ৩ সপ্তাহের মাথায় আমি প্রতিদিন চমৎকার প্রফিট করতে পারছি।"
        },
        date: "2026-08-15"
      }
    ]
  },
  {
    id: "1033",
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
    mode: { en: "Offline", bn: "অফলাইন" },
    modeType: "offline",
    rating: 5,
    ratingsCount: 60,
    enrolledCount: "50+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "8000৳",
    rawFee: 8000,
    originalFee: "12000৳",
    duration: { en: "3 Months", bn: "৩ মাস" },
    classesCount: { en: "24 Classes", bn: "২৪ টি ক্লাস" },
    image: "/images/course thumbnail/Generative ai and prompt eng.jpg",
    videoUrl: "https://www.youtube.com/embed/2eWuYf-keXI?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Generative%20AI%20%26%20Prompt%20Engineering%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Ashraf Hossain",
      designation: {
        en: "Lead AI Architect & Prompt Specialist",
        bn: "লিড এআই আর্কিটেক্ট ও প্রম্পট স্পেশালিস্ট"
      },
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      bio: {
        en: "10+ years of enterprise AI engineering experience across global products.",
        bn: "ইউএসএ ও ইউরোপের সফটওয়্যার ইন্ডাস্ট্রিতে ১০+ বছরের অভিজ্ঞতা সম্পন্ন সিনিয়র এআই আর্কিটেক্ট।"
      },
      experience: "10+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "This Generative AI & Prompt Engineering course teaches learners to master modern AI models (ChatGPT, Midjourney, Claude, Gemini). Learn prompt construction, content automation, AI coding pairs, and custom GPT builders.",
      bn: "এই জেনারেটিভ এআই এবং প্রম্পট ইঞ্জিনিয়ারিং কোর্সটি আপনাকে চ্যাটজিপিটি, ক্লদ, জেমিনি ও মিডজার্নির মতো আধুনিক এআই টুলস আয়ত্ত করতে সাহায্য করবে। প্রম্পট আর্কিটেকচার থেকে শুরু করে কোড জেনারেশন ও কন্টেন্ট অটোমেশন শিখবেন।"
    },
    fullDescription: {
      en: "Generative AI is revolutionizing tech and business workflows. In this course, you will learn the exact prompting strategies to write production code, create marketing collateral, build automated workflows, and generate design assets.",
      bn: "জেনারেটিভ এআই বর্তমানে বিশ্বজুড়ে কাজের ধরন বদলে দিচ্ছে। এই কোর্সে লার্জ ল্যাঙ্গুয়েজ মডেল গাইড করা, কাস্টম এআই এজেন্ট তৈরি এবং প্রম্পট ইঞ্জিনিয়ারিং দিয়ে নিজের ভ্যালু বাড়ানো শিখবেন।"
    },
    coreValues: [
      {
        id: "cv1",
        title: { en: "100% Hands-on Practice", bn: "১০০% প্র্যাকটিক্যাল ট্রেনিং" },
        desc: { en: "Live exercises with real AI tools in every session.", bn: "লাইভ ক্লাসে বাস্তবমুখী টুলস নিয়ে কাজ করার সুবিধা।" },
        icon: "CheckCircle2"
      }
    ],
    learningOutcomes: [
      { en: "Master Zero-Shot, Few-Shot, and Chain-of-Thought Prompting", bn: "জিরো-শট, ফিউ-শট এবং চেইন-অব-থট প্রম্পটিং আয়ত্ত করা" },
      { en: "Build Custom GPT Assistants & Automation Workflows", bn: "কাস্টম জিটিপি চ্যাটবট ও এআই অটোমেশন তৈরি" }
    ],
    curriculum: [
      {
        moduleNumber: 1,
        title: { en: "Module 1: Prompt Engineering Foundations", bn: "মডিউল ১: প্রম্পট ইঞ্জিনিয়ারিং বেসিক্স" },
        duration: { en: "6 Classes", bn: "৬ টি ক্লাস" },
        lessonsCount: 6,
        topics: [
          { en: "LLM Architectures & System Prompts", bn: "এলএলএম আর্কিটেকচার ও সিস্টেম প্রম্পট" }
        ]
      }
    ],
    includedItems: [
      { en: "Hands-on Live Classes & Workshops", bn: "লাইভ ক্লাস ও হ্যান্ডস-অন প্র্যাকটিস" },
      { en: "Certificate of Completion", bn: "সার্টিফিকেট অফ কমপ্লিশন" }
    ],
    reviews: []
  },
  {
    id: "135",
    slug: "ai-agentic",
    title: {
      en: "Agentic AI & Business Automation",
      bn: "এজেন্টিক এআই ও বিজনেস অটোমেশন"
    },
    subtitle: {
      en: "Build autonomous multi-agent AI systems, LangGraph workflows & enterprise RAG pipelines",
      bn: "অটোনোমাস এআই এজেন্টস, টুল কলিং ও এন্টারপ্রাইজ অটোমেশন ফ্রেমওয়ার্ক তৈরি শিখুন"
    },
    category: "ai",
    categoryLabel: { en: "AI & Automation", bn: "এআই ও অটোমেশন" },
    badge: { en: "FEATURED", bn: "ফিচার্ড" },
    mode: { en: "Online", bn: "অনলাইন" },
    modeType: "online",
    rating: 5,
    ratingsCount: 45,
    enrolledCount: "50+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "15000৳",
    rawFee: 15000,
    originalFee: "20000৳",
    duration: { en: "3 Months", bn: "৩ মাস" },
    classesCount: { en: "24 Classes", bn: "২৪ টি ক্লাস" },
    image: "/images/course thumbnail/agentic ai & business.png",
    videoUrl: "https://www.youtube.com/embed/2eWuYf-keXI?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Agentic%20AI%20%26%20Business%20Automation%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Ashraf Hossain",
      designation: { en: "Lead AI Engineer", bn: "লিড এআই ইঞ্জিনিয়ার" },
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      bio: { en: "Specializing in Autonomous Agents & Enterprise RAG.", bn: "অটোনোমাস এআই ও এন্টারপ্রাইজ অটোমেশন স্পেশালিস্ট।" },
      experience: "10+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Master Agentic AI architectures including LangGraph, CrewAI, multi-tool function calling, and vector database search.",
      bn: "অটোনোমাস এআই এজেন্টস, টুল কলিং ও এন্টারপ্রাইজ অটোমেশন তৈরি শিখুন।"
    },
    fullDescription: {
      en: "Agentic AI enables software to reason, use tools, search databases, and perform multi-step execution. Build enterprise automation agents with LangChain & LangGraph.",
      bn: "এজেন্টিক এআই সফটওয়্যারকে স্বয়ংক্রিয়ভাবে সিদ্ধান্ত গ্রহণ ও প্রসেস রান করার ক্ষমতা দেয়।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
    reviews: []
  },
  {
    id: "1",
    slug: "mern-stack",
    title: {
      en: "Mastering MERN Stack Web Development",
      bn: "মাস্টারিং মার্ন স্ট্যাক ওয়েব ডেভেলপমেন্ট"
    },
    subtitle: {
      en: "Complete Full-Stack Web Development with React, Node.js, Express & MongoDB",
      bn: "সম্পূর্ণ মঙ্গোডিবি, এক্সপ্রেস, রিঅ্যাক্ট ও নোড.জেএস দিয়ে ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন তৈরি"
    },
    category: "web",
    categoryLabel: { en: "Programming", bn: "প্রোগ্রামিং" },
    badge: { en: "POPULAR", bn: "জনপ্রিয়" },
    mode: { en: "Offline", bn: "অফলাইন" },
    modeType: "offline",
    rating: 5,
    ratingsCount: 85,
    enrolledCount: "50+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "20000৳",
    rawFee: 20000,
    originalFee: "25000৳",
    duration: { en: "3 Months", bn: "৩ মাস" },
    classesCount: { en: "36 Classes", bn: "৩৬ টি ক্লাস" },
    image: "/images/course thumbnail/enterprise full stack next.js 15.jpg",
    videoUrl: "https://www.youtube.com/embed/wm5gMKuwSYk?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Mastering%20MERN%20Stack%20Web%20Development%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Mahmudur Rahman",
      designation: { en: "Senior Full-Stack Developer", bn: "সিনিয়র ফুল-স্ট্যাক ডেভেলপার" },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      bio: { en: "12+ years experience building SaaS applications.", bn: "১২+ বছরের অভিজ্ঞতা সম্পন্ন সফটওয়্যার আর্কিটেক্ট।" },
      experience: "12+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Comprehensive MERN stack bootcamp. Learn modern JavaScript ES6+, React Hooks, Tailwind CSS, Express REST APIs, MongoDB, JWT auth, and deployment.",
      bn: "মঙ্গোডিবি, এক্সপ্রেস, রিঅ্যাক্ট এবং নোড.জেএস দিয়ে কমপ্লিট ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট শিখুন।"
    },
    fullDescription: {
      en: "Master web development with hands-on real-world projects. Build e-commerce sites, admin dashboards, and RESTful microservices.",
      bn: "বাস্তবমুখী প্রজেক্টের মাধ্যমে মার্ন স্ট্যাকের পুঙ্খানুপুঙ্খ ধারণা অর্জন করুন।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
    reviews: []
  },
  {
    id: "12",
    slug: "ielts-prep",
    title: {
      en: "IELTS - International English Language Testing System",
      bn: "আইইএলটিএস - ইন্টারন্যাশনাল ইংলিশ ল্যাঙ্গুয়েজ টেস্টিং সিস্টেম"
    },
    subtitle: {
      en: "Target 7.5+ Band Score with Expert British Council & IDP Certified Trainers",
      bn: "ব্যান্ড ৭.৫+ অর্জনের জন্য মক টেস্ট ও ১-অন-১ স্পিকিং প্র্যাকটিস সহ আইইএলটিএস প্রস্তুতি"
    },
    category: "language",
    categoryLabel: { en: "Language Skills", bn: "ল্যাংগুয়েজ স্কিলস" },
    badge: { en: "HIGH SCORE", bn: "হাই স্কোর" },
    mode: { en: "Offline", bn: "অফলাইন" },
    modeType: "offline",
    rating: 5,
    ratingsCount: 95,
    enrolledCount: "50+ Enrolled",
    languages: { en: "English / Bengali", bn: "ইংরেজি / বাংলা" },
    fee: "2000৳",
    rawFee: 2000,
    originalFee: "5000৳",
    duration: { en: "3 Months", bn: "৩ মাস" },
    classesCount: { en: "30 Classes", bn: "৩০ টি ক্লাস" },
    image: "/images/course thumbnail/ielts complete preparation.jpg",
    videoUrl: "https://www.youtube.com/embed/nU-IIXBWlS4?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22IELTS%20-%20International%20English%20Language%20Testing%20System%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Sabrina Yasmin",
      designation: { en: "IELTS Lead Trainer (Band 8.5)", bn: "আইইএলটিএস লিড ট্রেইনার (ব্যান্ড ৮.৫)" },
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
      bio: { en: "8+ years helping students achieve target band scores for overseas admission.", bn: "উচ্চশিক্ষার জন্য প্রস্তুত হতে ১০০০০+ শিক্ষার্থীকে প্রশিক্ষণ প্রদান করেছেন।" },
      experience: "8+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Comprehensive IELTS Academic & General Training program with listening, reading, writing, and speaking modules plus 1-on-1 mock reviews.",
      bn: "লিসেনিং, রিডিং, রাইটিং ও স্পিকিং মডিউল সহ নিবিড় আইইএলটিএস প্রস্তুতি কোর্স।"
    },
    fullDescription: {
      en: "Achieve your dream score for foreign university admission or immigration.",
      bn: "বিদেশে উচ্চশিক্ষা বা ইমিগ্রেশনের জন্য আপনার কাঙ্ক্ষিত ব্যান্ড স্কোর অর্জন করুন।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
    reviews: []
  },
  {
    id: "4",
    slug: "graphic-design",
    title: {
      en: "Mastering Graphic Design with AI",
      bn: "মাস্টারিং গ্রাফিক ডিজাইন উইথ এআই"
    },
    subtitle: {
      en: "Photoshop, Illustrator, Brand Identity & AI Visual Design Workflows",
      bn: "ফটোশপ ও ইলাস্ট্রেটরে ব্র্যান্ড লোগো, সোশ্যাল মিডিয়া ব্যানার ও এআই ডিজাইন শিখুন"
    },
    category: "uiux",
    categoryLabel: { en: "Art & Design", bn: "আর্ট ও ডিজাইন" },
    badge: { en: "CREATIVE", bn: "ক্রিয়েটিভ" },
    mode: { en: "Offline", bn: "অফলাইন" },
    modeType: "offline",
    rating: 5,
    ratingsCount: 70,
    enrolledCount: "50+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "16000৳",
    rawFee: 16000,
    originalFee: "20000৳",
    duration: { en: "3 Months", bn: "৩ মাস" },
    classesCount: { en: "24 Classes", bn: "২৪ টি ক্লাস" },
    image: "/images/course thumbnail/graphic design.jpg",
    videoUrl: "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Mastering%20Graphic%20Design%20with%20AI%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Tariqul Islam",
      designation: { en: "Creative Art Director", bn: "ক্রিয়েটিভ আর্ট ডিরেক্টর" },
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
      bio: { en: "Expert brand identity designer with 9+ years industry footprint.", bn: "আন্তর্জাতিক সংস্থা ও ব্র্যান্ডের সাথে ৯+ বছর কাজের অভিজ্ঞতা।" },
      experience: "9+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Learn professional Photoshop, Illustrator, typography, logo design, print layouts, and Midjourney image generation.",
      bn: "ফটোশপ, ইলাস্ট্রেটর ও এআই ইমেজ জেনারেশন দিয়ে প্রফেশনাল গ্রাফিক ও কমার্শিয়াল ডিজাইন।"
    },
    fullDescription: {
      en: "Build an impressive creative portfolio to work with global agencies or marketplaces.",
      bn: "মার্কেটপ্লেস ও এজেন্সির কাজের উপযোগী ক্রিয়েটিভ পোর্টফোলিও তৈরি।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
    reviews: []
  },
  {
    id: "5",
    slug: "digital-marketing",
    title: {
      en: "Specialized Certification on Digital Marketing",
      bn: "স্পেশালাইজড সার্টিফিকেশন অন ডিজিটাল মার্কেটিং"
    },
    subtitle: {
      en: "Meta Ads, Google Ads, Technical SEO, Sales Funnels & Analytics",
      bn: "মেটা ও গুগল অ্যাডস, এসইও এবং সেলস ফানেল অপ্টিমাইজেশন শিখে ক্লায়েন্টদের সেলস বাড়ান"
    },
    category: "marketing",
    categoryLabel: { en: "Digital Marketing", bn: "ডিজিটাল মার্কেটিং" },
    badge: { en: "GROWTH", bn: "গ্রোথ" },
    mode: { en: "Offline", bn: "অফলাইন" },
    modeType: "offline",
    rating: 5,
    ratingsCount: 80,
    enrolledCount: "50+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "20000৳",
    rawFee: 20000,
    originalFee: "25000৳",
    duration: { en: "3 Months", bn: "৩ মাস" },
    classesCount: { en: "24 Classes", bn: "২৪ টি ক্লাস" },
    image: "/images/course thumbnail/Digital Marketing.jpg",
    videoUrl: "https://www.youtube.com/embed/nU-IIXBWlS4?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Specialized%20Certification%20on%20Digital%20Marketing%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Rashedul Hasan",
      designation: { en: "Growth Marketing Lead", bn: "গ্রোথ মার্কেটিং লিড" },
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
      bio: { en: "Managed over $1M+ in digital ad spend across e-commerce brands.", bn: "১ মিলিয়ন ডলারের বেশি ডিজিটাল অ্যাড স্পেন্ড পরিচালনার অভিজ্ঞতা।" },
      experience: "7+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Comprehensive performance marketing course covering Meta Business Suite, Google PPC, Technical SEO, and conversion analytics.",
      bn: "মেটা ও গুগল অ্যাডস, সার্চ ইঞ্জিন অপ্টিমাইজেশন এবং পারফরম্যান্স মার্কেটিং বুটক্যাম্প।"
    },
    fullDescription: {
      en: "Scale business revenue and become a sought-after digital strategist.",
      bn: "ডিজিটাল স্ট্র্যাটেজিস্ট হিসেবে ক্যারিয়ার গড়ে ব্যবসায়িক প্রবৃদ্ধি নিশ্চিত করুন।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
    reviews: []
  },
  {
    id: "2",
    slug: "wordpress-dev",
    title: {
      en: "Professional WordPress Development",
      bn: "প্রফেশনাল ওয়ার্ডপ্রেস ডেভেলপমেন্ট"
    },
    subtitle: {
      en: "Custom Theme & Plugin Development, WooCommerce & Elementor Pro",
      bn: "কাস্টম থিম ও প্লাগইন ডেভেলপমেন্ট, উকমার্স এবং এন্টারপ্রাইজ ওয়েবসাইট বিল্ডিং"
    },
    category: "web",
    categoryLabel: { en: "Programming", bn: "প্রোগ্রামিং" },
    badge: { en: "FREELANCING", bn: "ফ্রিল্যান্সিং" },
    mode: { en: "Offline", bn: "অফলাইন" },
    modeType: "offline",
    rating: 5,
    ratingsCount: 65,
    enrolledCount: "50+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "20000৳",
    rawFee: 20000,
    originalFee: "25000৳",
    duration: { en: "3 Months", bn: "৩ মাস" },
    classesCount: { en: "24 Classes", bn: "২৪ টি ক্লাস" },
    image: "/images/course thumbnail/diploma in full stack.png",
    videoUrl: "https://www.youtube.com/embed/wm5gMKuwSYk?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Professional%20WordPress%20Development%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Mahmudur Rahman",
      designation: { en: "Senior WordPress Engineer", bn: "সিনিয়র ওয়ার্ডপ্রেস ইঞ্জিনিয়ার" },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      bio: { en: "Developed 300+ client projects and custom plugins.", bn: "৩০০+ ক্লায়েন্ট প্রজেক্ট ও কাস্টম থিম ডেভেলপার।" },
      experience: "10+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Master WordPress theme building from PHP, HTML/CSS, Elementor customization, WooCommerce setup, and site optimization.",
      bn: "পিএইচপি ও ওয়ার্ডপ্রেস কাস্টমাইজেশন থেকে শুরু করে ই-কমার্স শপ ও এলিমেন্টর কাস্টম থিম তৈরি।"
    },
    fullDescription: {
      en: "Perfect for freelancers and developers looking to build fast client sites.",
      bn: "ফ্রিল্যান্সিং মার্কেটপ্লেসে ওয়ার্ডপ্রেস ক্লায়েন্ট প্রজেক্ট সহজে করার জন্য সেরা কোর্স।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
    reviews: []
  },
  {
    id: "6",
    slug: "uxui-designer",
    title: {
      en: "Certified UX/UI Designer",
      bn: "সার্টিফাইড ইউএক্স/ইউআই ডিজাইনার"
    },
    subtitle: {
      en: "Figma, User Research, Wireframing, Prototyping & Design Systems",
      bn: "ফিগমায় প্রফেশনাল ডিজাইন সিস্টেম, মাইক্রো-ইন্টারঅ্যাকশন ও প্রোটোটাইপিং"
    },
    category: "uiux",
    categoryLabel: { en: "Art & Design", bn: "আর্ট ও ডিজাইন" },
    badge: { en: "TOP RATED", bn: "টপ রেটেড" },
    mode: { en: "Offline", bn: "অফলাইন" },
    modeType: "offline",
    rating: 4.9,
    ratingsCount: 90,
    enrolledCount: "50+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "20000৳",
    rawFee: 20000,
    originalFee: "26000৳",
    duration: { en: "3 Months", bn: "৩ মাস" },
    classesCount: { en: "24 Classes", bn: "২৪ টি ক্লাস" },
    image: "/images/course thumbnail/ui ux design.jpg",
    videoUrl: "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Certified%20UX%2FUI%20Designer%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Tariqul Islam",
      designation: { en: "Lead Product Designer", bn: "লিড প্রোডাক্ট ডিজাইনার" },
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
      bio: { en: "UX Specialist for tech startups.", bn: "টেক স্টার্টআপের অভিজ্ঞ ইউআই/ইউএক্স ডিজাইনার।" },
      experience: "8+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Learn user empathy, wireframing, interactive prototyping in Figma, and design token handoffs for developers.",
      bn: "ফিগমায় প্রফেশনাল মোবাইল ও ওয়েব প্রোডাক্ট ইউআই এবং ইউজার এক্সপেরিয়েন্স ডিজাইন।"
    },
    fullDescription: {
      en: "Design modern digital products that users love.",
      bn: "ডিজিটাল ইন্টারফেস ও ইউজার জার্নি ডিজাইন করার সমস্ত টেকনিক শিখুন।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
    reviews: []
  },
  {
    id: "9",
    slug: "cyber-sec",
    title: {
      en: "Mastering Cyber Security & Penetration Testing",
      bn: "মাস্টারিং সাইবার সিকিউরিটি ও পেনেট্রেশন টেস্টিং"
    },
    subtitle: {
      en: "Kali Linux, Ethical Hacking, Web App Security, OWASP & Network Defense",
      bn: "পেনিট্রেশন টেস্টিং, নেটওয়ার্ক ডিফেন্স ও ওয়েব সিকিউরিটি ভালনারেবিলিটি অ্যানালাইসিস"
    },
    category: "cyber",
    categoryLabel: { en: "Cybersecurity", bn: "সাইবার সিকিউরিটি" },
    badge: { en: "SECURITY", bn: "সিকিউরিটি" },
    mode: { en: "Offline", bn: "অফলাইন" },
    modeType: "offline",
    rating: 5,
    ratingsCount: 50,
    enrolledCount: "50+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "20000৳",
    rawFee: 20000,
    originalFee: "28000৳",
    duration: { en: "3 Months", bn: "৩ মাস" },
    classesCount: { en: "24 Classes", bn: "২৪ টি ক্লাস" },
    image: "/images/course thumbnail/ethical hacking.jpg",
    videoUrl: "https://www.youtube.com/embed/inWWhr5tnEA?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Mastering%20Cyber%20Security%20%26%20Penetration%20Testing%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Shariar Ahmed",
      designation: { en: "CEH Certified Cyber Security Specialist", bn: "সিইএইচ সার্টিফাইড সিকিউরিটি স্পেশালিস্ট" },
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      bio: { en: "Ethical Hacker with SOC operations background.", bn: "এথিক্যাল হ্যাকিং ও সিকিউরিটি অপারেশনে বিশেষজ্ঞ।" },
      experience: "7+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Hands-on cybersecurity bootcamp. Learn Kali Linux penetration tools, OWASP vulnerability scanning, Wireshark, and defensive hardening.",
      bn: "পেনিট্রেশন টেস্টিং, নেটওয়ার্ক ডিফেন্স ও ওয়েব সিকিউরিটি ভালনারেবিলিটি অ্যানালাইসিস।"
    },
    fullDescription: {
      en: "Protect enterprise networks and prepare for CEH & SOC analyst roles.",
      bn: "নেটওয়ার্ক ও ওয়েব অ্যাপ্লিকেশন সুরক্ষিত রাখার কৌশল অর্জন করুন।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
    reviews: []
  },
  {
    id: "10",
    slug: "comptia-networking",
    title: {
      en: "CompTIA A+, CCNA & MTCNA",
      bn: "কম্পটিআইএ এ+, সিসিএনএ ও এমটিসিএনএ"
    },
    subtitle: {
      en: "Hardware, Cisco Routing & Switching, MikroTik RouterOS & Server Management",
      bn: "সিসকো রাউটিং, সুনির্দিষ্ট মাইক্রোটিক রাউটারওএস ও নেটওয়ার্ক সার্ভার কনফিগারেশন"
    },
    category: "cloud",
    categoryLabel: { en: "Networking & Server", bn: "নেটওয়ার্কিং ও সার্ভার" },
    badge: { en: "CERTIFIED", bn: "সার্টিফাইড" },
    mode: { en: "Offline", bn: "অফলাইন" },
    modeType: "offline",
    rating: 5,
    ratingsCount: 40,
    enrolledCount: "50+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "25000৳",
    rawFee: 25000,
    originalFee: "32000৳",
    duration: { en: "3 Months", bn: "৩ মাস" },
    classesCount: { en: "24 Classes", bn: "২৪ টি ক্লাস" },
    image: "/images/course thumbnail/soc analyst.jpg",
    videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22CompTIA%20A%2B%2C%20CCNA%20%26%20MTCNA%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Kamrul Islam",
      designation: { en: "CCIE / MTCNA Senior Network Engineer", bn: "সিনিয়র নেটওয়ার্ক আর্কিটেক্ট" },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      bio: { en: "11+ years managing ISP and corporate infrastructure.", bn: "আইএসপি ও এন্টারপ্রাইজ নেটওয়ার্কিংয়ে ১১+ বছরের অভিজ্ঞতা।" },
      experience: "11+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Comprehensive computer hardware, Cisco CCNA routing/switching, and MikroTik MTCNA certification course with real hardware labs.",
      bn: "কম্পিউটার হার্ডওয়্যার, সিসকো ও মাইক্রোটিক নেটওয়ার্কিং নিয়ে লাইভ ল্যাব সহ ট্রেনিং।"
    },
    fullDescription: {
      en: "Launch your career as a System Administrator or Network Engineer.",
      bn: "নেটওয়ার্ক ইঞ্জিনিয়ার বা সিস্টেম অ্যাডমিনিস্ট্রেটর হিসেবে ক্যারিয়ার গড়ুন।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
    reviews: []
  },
  {
    id: "11",
    slug: "diploma-multimedia",
    title: {
      en: "Diploma in Multimedia",
      bn: "ডিপ্লোমা ইন মাল্টিমিডিয়া"
    },
    subtitle: {
      en: "3D Animation, Motion Graphics, VFX, Video Editing & Digital Arts",
      bn: "ভিডিও এডিটিং, মোশন গ্রাফিক্স, ৩ডি অ্যানিমেশন ও ডিজিটাল মিডিয়া প্রোডাকশন"
    },
    category: "diploma",
    categoryLabel: { en: "Diploma", bn: "ডিপ্লোমা" },
    badge: { en: "DIPLOMA", bn: "ডিপ্লোমা" },
    mode: { en: "Offline", bn: "অফলাইন" },
    modeType: "offline",
    rating: 5,
    ratingsCount: 35,
    enrolledCount: "50+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "80000৳",
    rawFee: 80000,
    originalFee: "100000৳",
    duration: { en: "3 Months", bn: "৩ মাস" },
    classesCount: { en: "36 Classes", bn: "৩৬ টি ক্লাস" },
    image: "/images/course thumbnail/video editing &motion graphics.jpg",
    videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Diploma%20in%20Multimedia%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Tanvir Hasan",
      designation: { en: "3D VFX Director", bn: "৩ডি ভিএফএক্স ডিরেক্টর" },
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
      bio: { en: "Specialist in television commercial visual effects.", bn: "টিভি কমার্শিয়াল ও মিডিয়া প্রোডাকশন বিশেষজ্ঞ।" },
      experience: "10+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Advanced professional diploma track covering Premiere Pro, After Effects, Maya, Blender, and sound design.",
      bn: "৩ডি অ্যানিমেশন, সিনেমাটিক মোশন পিকচার ও ডিজিটাল মিডিয়া প্রোডাকশন প্রোগ্রাম।"
    },
    fullDescription: {
      en: "Master creative visual arts for film, advertising, and gaming.",
      bn: "মাল্টিমিডিয়া ইন্ডাস্ট্রির সর্বোচ্চ মানের স্কিল অর্জনের ডিপ্লোমা প্রোগ্রাম।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
    reviews: []
  },
  {
    id: "13",
    slug: "spoken-english",
    title: {
      en: "Spoken english & Business Communication",
      bn: "স্পোকেন ইংলিশ ও বিজনেস কমিউনিকেশন"
    },
    subtitle: {
      en: "Fluency, Corporate Presentation, Interview Preparation & Business English",
      bn: "জড়তা কাটিয়ে প্রফেশনাল প্রেজেন্টেশন ও আন্তর্জাতিক ক্লায়েন্টদের সাথে কথা বলার কৌশল"
    },
    category: "language",
    categoryLabel: { en: "Language Skills", bn: "ল্যাংগুয়েজ স্কিলস" },
    badge: { en: "CAREER", bn: "ক্যারিয়ার" },
    mode: { en: "Offline/Online", bn: "অফলাইন/অনলাইন" },
    modeType: "offline",
    rating: 5,
    ratingsCount: 110,
    enrolledCount: "50+ Enrolled",
    languages: { en: "English / Bengali", bn: "ইংরেজি / বাংলা" },
    fee: "10000৳",
    rawFee: 10000,
    originalFee: "14000৳",
    duration: { en: "3 Months", bn: "৩ মাস" },
    classesCount: { en: "24 Classes", bn: "২৪ টি ক্লাস" },
    image: "/images/course thumbnail/Speak English Fluently.jpg",
    videoUrl: "https://www.youtube.com/embed/nU-IIXBWlS4?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Spoken%20english%20%26%20Business%20Communication%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Sabrina Yasmin",
      designation: { en: "Corporate Soft Skills Trainer", bn: "কর্পোরেট কমিউনিকেশন ট্রেইনার" },
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
      bio: { en: "Trained 5,000+ professionals for international client facing roles.", bn: "আন্তর্জাতিক ক্লায়েন্ট কমিউনিকেশনে অভিজ্ঞ ট্রেইনার।" },
      experience: "8+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Overcome hesitation, master business emails, corporate negotiations, and fluent English speaking.",
      bn: "জড়তা কাটিয়ে প্রফেশনাল প্রেজেন্টেশন ও আন্তর্জাতিক ক্লায়েন্টদের সাথে অনর্গল কথা বলার কৌশল।"
    },
    fullDescription: {
      en: "Boost your career confidence for global job interviews and presentations.",
      bn: "আন্তর্জাতিক কর্মক্ষেত্রে অনর্গল ইংরেজিতে যোগাযোগের দক্ষতা অর্জন।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
    reviews: []
  },
  {
    id: "14",
    slug: "content-writing-seo",
    title: {
      en: "Content Writing with SEO",
      bn: "কন্টেন্ট রাইটিং উইথ এসইও"
    },
    subtitle: {
      en: "Copywriting, Article Writing, Keyword Research & On-Page SEO Optimization",
      bn: "হাই-কোয়ালিটি কন্টেন্ট রাইটিং, কি-ওয়ার্ড রিসার্চ এবং গুগল র‍্যাংকিং টেকনিক"
    },
    category: "marketing",
    categoryLabel: { en: "Digital Marketing", bn: "ডিজিটাল মার্কেটিং" },
    badge: { en: "ESSENTIAL", bn: "এসেনশিয়াল" },
    mode: { en: "Offline", bn: "অফলাইন" },
    modeType: "offline",
    rating: 5,
    ratingsCount: 55,
    enrolledCount: "50+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "15000৳",
    rawFee: 15000,
    originalFee: "20000৳",
    duration: { en: "3 Months", bn: "৩ মাস" },
    classesCount: { en: "24 Classes", bn: "২৪ টি ক্লাস" },
    image: "/images/course thumbnail/Digital Marketing.jpg",
    videoUrl: "https://www.youtube.com/embed/nU-IIXBWlS4?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Content%20Writing%20with%20SEO%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Rashedul Hasan",
      designation: { en: "Content Strategy Lead", bn: "কন্টেন্ট স্ট্র্যাটেজি লিড" },
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
      bio: { en: "Published 1,000+ SEO articles ranking on Google page 1.", bn: "এসইও কন্টেন্ট স্ট্র্যাটেজিতে অভিজ্ঞ লেখক।" },
      experience: "7+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Learn engaging article writing, blog SEO, keyword analysis, copy structuring, and AI assisted editing.",
      bn: "এসইও ফ্রেন্ডলি কন্টেন্ট রাইটিং, কি-ওয়ার্ড রিসার্চ ও গুগল র‍্যাংকিং স্ট্র্যাটেজি।"
    },
    fullDescription: {
      en: "Build a lucrative freelance writing career or manage content teams.",
      bn: "ফ্রিল্যান্সিং কন্টেন্ট রাইটার হিসেবে গ্লোবাল মার্কেটে কাজ করুন।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
    reviews: []
  },
  {
    id: "15",
    slug: "sap-abap",
    title: {
      en: "SAP (ABAP)",
      bn: "এসএপি (এবিএপি)"
    },
    subtitle: {
      en: "Advanced Business Application Programming for Enterprise ERP Development",
      bn: "এন্টারপ্রাইজ ইআরপি ডেভেলপমেন্ট ও এসএপি এবিএপি প্রোগ্রামিং"
    },
    category: "management",
    categoryLabel: { en: "Management", bn: "ম্যানেজমেন্ট" },
    badge: { en: "ENTERPRISE", bn: "এন্টারপ্রাইজ" },
    mode: { en: "Offline", bn: "অফলাইন" },
    modeType: "offline",
    rating: 5,
    ratingsCount: 30,
    enrolledCount: "50+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "17000৳",
    rawFee: 17000,
    originalFee: "25000৳",
    duration: { en: "3 Months", bn: "৩ মাস" },
    classesCount: { en: "24 Classes", bn: "২৪ টি ক্লাস" },
    image: "/images/course thumbnail/Cloud-Devops.jpg",
    videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22SAP%20(ABAP)%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Anisur Rahman",
      designation: { en: "SAP Technical Consultant", bn: "এসএপি টেকনিক্যাল কনসালটেন্ট" },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      bio: { en: "SAP ABAP Solution Architect with 12+ years in corporate ERP projects.", bn: "এসএপি ইআরপি বাস্তবায়নে ১২+ বছরের অভিজ্ঞতা সম্পন্ন কনসালটেন্ট।" },
      experience: "12+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Learn SAP ABAP syntax, Data Dictionary, SmartForms, ALV Reports, BADIs, and SAP HANA integration.",
      bn: "এসএপি সিস্টেম ডাটাবেস, ডিকশনারি ও কাস্টম রিপোর্ট প্রোগ্রামিং ট্রেনিং।"
    },
    fullDescription: {
      en: "Become a certified SAP ABAP developer for MNCs and large corporate groups.",
      bn: "মাল্টিন্যাশনাল কোম্পানিতে এসএপি ডেভেলপার হিসেবে ক্যারিয়ার শুরু করুন।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
    reviews: []
  },
  {
    id: "16",
    slug: "sap-fico",
    title: {
      en: "SAP (FICO)",
      bn: "এসএপি (এফআইসিও)"
    },
    subtitle: {
      en: "Financial Accounting & Controlling Module for Corporate ERP Management",
      bn: "এন্টারপ্রাইজ ফাইন্যান্সিয়াল অ্যাকাউন্টিং ও কন্ট্রোলিং ইআরপি ম্যানেজমেন্ট"
    },
    category: "management",
    categoryLabel: { en: "Management", bn: "ম্যানেজমেন্ট" },
    badge: { en: "ENTERPRISE", bn: "এন্টারপ্রাইজ" },
    mode: { en: "Offline", bn: "অফলাইন" },
    modeType: "offline",
    rating: 5,
    ratingsCount: 40,
    enrolledCount: "50+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "17000৳",
    rawFee: 17000,
    originalFee: "25000৳",
    duration: { en: "3 Months", bn: "৩ মাস" },
    classesCount: { en: "24 Classes", bn: "২৪ টি ক্লাস" },
    image: "/images/course thumbnail/linux system admin.jpg",
    videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22SAP%20(FICO)%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Anisur Rahman",
      designation: { en: "SAP FICO Lead Consultant", bn: "এসএপি এফআইসিও লিড কনসালটেন্ট" },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      bio: { en: "Implemented SAP Finance in leading MNCs.", bn: "ফাইন্যান্সিয়াল অডিট ও এসএপি এফআইসিও স্পেশালিস্ট।" },
      experience: "12+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Master SAP General Ledger, Accounts Payable, Receivable, Asset Accounting, and Controlling modules.",
      bn: "এসএপি অ্যাকাউন্টিং, ফাইন্যান্সিয়াল রিপোর্ট ও বাজেট কন্ট্রোলিং ট্রেনিং।"
    },
    fullDescription: {
      en: "Essential training for finance managers and ERP consultants.",
      bn: "ফাইন্যান্স ও অ্যাকাউন্টিং পেশাজীবীদের জন্য উপযোগী কোর্স।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
    reviews: []
  },
  {
    id: "17",
    slug: "sap-mm",
    title: {
      en: "SAP (MM)",
      bn: "এসএপি (এমএম)"
    },
    subtitle: {
      en: "Materials Management, Procurement, Inventory & Supply Chain ERP",
      bn: "ম্যাটেরিয়ালস ম্যানেজমেন্ট, প্রকিউরমেন্ট ও সাপ্লাই চেইন ইআরপি সলিউশন"
    },
    category: "management",
    categoryLabel: { en: "Management", bn: "ম্যানেজমেন্ট" },
    badge: { en: "ENTERPRISE", bn: "এন্টারপ্রাইজ" },
    mode: { en: "Offline", bn: "অফলাইন" },
    modeType: "offline",
    rating: 5,
    ratingsCount: 35,
    enrolledCount: "50+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "17000৳",
    rawFee: 17000,
    originalFee: "25000৳",
    duration: { en: "3 Months", bn: "৩ মাস" },
    classesCount: { en: "24 Classes", bn: "২৪ টি ক্লাস" },
    image: "/images/course thumbnail/agile & scrum master.jpg",
    videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22SAP%20(MM)%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Anisur Rahman",
      designation: { en: "SAP Supply Chain Consultant", bn: "এসএপি সাপ্লাই চেইন কনসালটেন্ট" },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      bio: { en: "Expert in supply chain ERP logistics.", bn: "সাপ্লাই চেইন ও প্রকিউরমেন্ট ইআরপি কনসালটেন্ট।" },
      experience: "12+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Learn procurement process, vendor master data, purchase order lifecycle, inventory management, and invoice verification in SAP.",
      bn: "এসএপি প্রকিউরমেন্ট, ইনভেন্টরি ও ম্যাটেরিয়ালস কন্ট্রোল শেখার প্রফেশনাল বুটক্যাম্প।"
    },
    fullDescription: {
      en: "Build expertise in supply chain software operations.",
      bn: "সাপ্লাই চেইন ও ইনভেন্টরি ইন্ডাস্ট্রির সেরা সফটওয়্যার অপারেশনস।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
    reviews: []
  },
  {
    id: "20",
    slug: "oracle-db",
    title: {
      en: "Oracle Database 19c/21c",
      bn: "ওরাকল ডাটাবেস ১৯সি/২১সি"
    },
    subtitle: {
      en: "SQL, PL/SQL, Database Administration (DBA), Backup & High Availability",
      bn: "ওরাকল এসকিউএল, পিএল/এসকিউএল এবং ডাটাবেস অ্যাডমিনিস্ট্রেশন (DBA) ট্র্যাকিং"
    },
    category: "database",
    categoryLabel: { en: "Database", bn: "ডাটাবেস" },
    badge: { en: "DBA CERTIFIED", bn: "ডিবিএ সার্টিফাইড" },
    mode: { en: "Offline", bn: "অফলাইন" },
    modeType: "offline",
    rating: 5,
    ratingsCount: 45,
    enrolledCount: "50+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "20000৳",
    rawFee: 20000,
    originalFee: "28000৳",
    duration: { en: "3 Months", bn: "৩ মাস" },
    classesCount: { en: "24 Classes", bn: "২৪ টি ক্লাস" },
    image: "/images/course thumbnail/postgresql.jpg",
    videoUrl: "https://www.youtube.com/embed/qw--VYLpxG4?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Oracle%20Database%2019c%2F21c%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Kazi Monirul Islam",
      designation: { en: "Oracle Certified Master (OCM)", bn: "ওরাকল সার্টিফাইড মাস্টার ডিবিএ" },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      bio: { en: "15+ years experience in enterprise banking database infrastructure.", bn: "ব্যাংকিং ও টেলিকম ডাটাবেসে ১৫+ বছরের অভিজ্ঞতা।" },
      experience: "15+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Learn Oracle 19c/21c architecture, complex SQL queries, PL/SQL stored procedures, RMAN backups, and Data Guard tuning.",
      bn: "ওরাকল ডাটাবেস অ্যাডমিনিস্ট্রেশন, ব্যাকআপ রিকভারি ও পারফরম্যান্স টিউনিং।"
    },
    fullDescription: {
      en: "Prepare for high-paying Database Administrator (DBA) roles.",
      bn: "এন্টারপ্রাইজ ডাটাবেস অ্যাডমিনিস্ট্রেটর হিসেবে ক্যারিয়ার গড়ে তুলুন।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
    reviews: []
  },
  {
    id: "51",
    slug: "mern-stack-online",
    title: {
      en: "Mastering MERN Stack Web Development (Online)",
      bn: "মাস্টারিং মার্ন স্ট্যাক ওয়েব ডেভেলপমেন্ট (অনলাইন)"
    },
    subtitle: {
      en: "Online Live Interactive MERN Stack Training with Project Reviews",
      bn: "অনলাইন লাইভ ক্লাসের মাধ্যমে মার্ন স্ট্যাক ওয়েব ডেভেলপমেন্ট শিখুন"
    },
    category: "web",
    categoryLabel: { en: "Programming", bn: "প্রোগ্রামিং" },
    badge: { en: "ONLINE LIVE", bn: "অনলাইন লাইভ" },
    mode: { en: "Online", bn: "অনলাইন" },
    modeType: "online",
    rating: 5,
    ratingsCount: 75,
    enrolledCount: "50+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "20000৳",
    rawFee: 20000,
    originalFee: "25000৳",
    duration: { en: "3 Months", bn: "৩ মাস" },
    classesCount: { en: "36 Classes", bn: "৩৬ টি ক্লাস" },
    image: "/images/course thumbnail/diploma in full stack.png",
    videoUrl: "https://www.youtube.com/embed/wm5gMKuwSYk?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Mastering%20MERN%20Stack%20Web%20Development%20(Online)%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Mahmudur Rahman",
      designation: { en: "Senior Full-Stack Developer", bn: "সিনিয়র ফুল-স্ট্যাক ডেভেলপার" },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      bio: { en: "12+ years experience building SaaS applications.", bn: "১২+ বছরের অভিজ্ঞতা সম্পন্ন সফটওয়্যার আর্কিটেক্ট।" },
      experience: "12+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Online live version of our popular MERN stack program. Real-time instructor coding, Q&A, and project reviews.",
      bn: "অনলাইন লাইভ ইন্টারঅ্যাক্টিভ ক্লাসের মাধ্যমে মার্ন স্ট্যাকের পুঙ্খানুপুঙ্খ শিক্ষা।"
    },
    fullDescription: {
      en: "Master React, Node, Express & MongoDB from anywhere.",
      bn: "যে কোনো প্রান্ত থেকে রিঅ্যাক্ট ও নোড.জেএস ডেভেলপমেন্ট শিখুন।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
    reviews: []
  },
  {
    id: "54",
    slug: "graphic-design-online",
    title: {
      en: "Mastering Graphic Design with AI (Online)",
      bn: "মাস্টারিং গ্রাফিক ডিজাইন উইথ এআই (অনলাইন)"
    },
    subtitle: {
      en: "Live Online Class for Photoshop, Illustrator & Generative AI Tools",
      bn: "অনলাইনে লাইভ ক্লাসের মাধ্যমে ফটোশপ, ইলাস্ট্রেটর ও এআই ডিজাইন শিখুন"
    },
    category: "uiux",
    categoryLabel: { en: "Art & Design", bn: "আর্ট ও ডিজাইন" },
    badge: { en: "ONLINE LIVE", bn: "অনলাইন লাইভ" },
    mode: { en: "Online", bn: "অনলাইন" },
    modeType: "online",
    rating: 5,
    ratingsCount: 50,
    enrolledCount: "50+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "10000৳",
    rawFee: 10000,
    originalFee: "15000৳",
    duration: { en: "3 Months", bn: "৩ মাস" },
    classesCount: { en: "24 Classes", bn: "২৪ টি ক্লাস" },
    image: "/images/course thumbnail/graphic design.jpg",
    videoUrl: "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Mastering%20Graphic%20Design%20with%20AI%20(Online)%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Tariqul Islam",
      designation: { en: "Creative Art Director", bn: "ক্রিয়েটিভ আর্ট ডিরেক্টর" },
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
      bio: { en: "Expert brand identity designer.", bn: "আন্তর্জাতিক ডিজাইনার ও আর্ট ডিরেক্টর।" },
      experience: "9+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Online live training for visual graphics, brand assets, and Midjourney AI generation.",
      bn: "অনলাইনে ফটোশপ, ইলাস্ট্রেটর ও এআই ইমেজ ডিজাইন শেখার সেরা প্রোগ্রাম।"
    },
    fullDescription: {
      en: "Learn graphics and freelance from home.",
      bn: "ঘরে বসে গ্রাফিক ডিজাইন ও ফ্রিল্যান্সিং শিখুন।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
    reviews: []
  },
  {
    id: "55",
    slug: "digital-marketing-online",
    title: {
      en: "Specialized Certification on Digital Marketing (Online)",
      bn: "স্পেশালাইজড সার্টিফিকেশন অন ডিজিটাল মার্কেটিং (অনলাইন)"
    },
    subtitle: {
      en: "Live Online Growth Hacking, Facebook Pixel & Google Ads Mastery",
      bn: "অনলাইনে মেটা ও গুগল অ্যাডস সহ কমপ্লিট ডিজিটাল মার্কেটিং"
    },
    category: "marketing",
    categoryLabel: { en: "Digital Marketing", bn: "ডিজিটাল মার্কেটিং" },
    badge: { en: "ONLINE LIVE", bn: "অনলাইন লাইভ" },
    mode: { en: "Online", bn: "অনলাইন" },
    modeType: "online",
    rating: 5,
    ratingsCount: 65,
    enrolledCount: "50+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "10000৳",
    rawFee: 10000,
    originalFee: "15000৳",
    duration: { en: "3 Months", bn: "৩ মাস" },
    classesCount: { en: "24 Classes", bn: "২৪ টি ক্লাস" },
    image: "/images/course thumbnail/Digital Marketing.jpg",
    videoUrl: "https://www.youtube.com/embed/nU-IIXBWlS4?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Specialized%20Certification%20on%20Digital%20Marketing%20(Online)%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Rashedul Hasan",
      designation: { en: "Growth Marketing Lead", bn: "গ্রোথ মার্কেটিং লিড" },
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
      bio: { en: "Managed over $1M+ in ad spend.", bn: "১ মিলিয়ন ডলারের বেশি ডিজিটাল অ্যাড স্পেন্ড পরিচালনার অভিজ্ঞতা।" },
      experience: "7+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Online live bootcamp for Meta Ads, SEO, and client lead generation.",
      bn: "অনলাইনে রিয়েল-টাইম লাইভ ক্লাসের মাধ্যমে সেলস ও লিড জেনারেশন মার্কেটিং।"
    },
    fullDescription: {
      en: "Build a high-paying online marketing practice.",
      bn: "ডিজিটাল মার্কেটার হিসেবে অনলাইন ক্যারিয়ার গঠন করুন।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
    reviews: []
  },
  {
    id: "52",
    slug: "wordpress-dev-online",
    title: {
      en: "Professional WordPress Development (Online)",
      bn: "প্রফেশনাল ওয়ার্ডপ্রেস ডেভেলপমেন্ট (অনলাইন)"
    },
    subtitle: {
      en: "Live Online WordPress Customization, Elementor & WooCommerce",
      bn: "অনলাইনে লাইভ ক্লাসের মাধ্যমে ওয়ার্ডপ্রেস ওয়েবসাইট বিল্ডিং"
    },
    category: "web",
    categoryLabel: { en: "Programming", bn: "প্রোগ্রামিং" },
    badge: { en: "ONLINE LIVE", bn: "অনলাইন লাইভ" },
    mode: { en: "Online", bn: "অনলাইন" },
    modeType: "online",
    rating: 5,
    ratingsCount: 55,
    enrolledCount: "50+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "10000৳",
    rawFee: 10000,
    originalFee: "15000৳",
    duration: { en: "3 Months", bn: "৩ মাস" },
    classesCount: { en: "24 Classes", bn: "২৪ টি ক্লাস" },
    image: "/images/course thumbnail/enterprise full stack next.js 15.jpg",
    videoUrl: "https://www.youtube.com/embed/wm5gMKuwSYk?autoplay=1",
    whatsappLink: "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Professional%20WordPress%20Development%20(Online)%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    instructor: {
      name: "Mahmudur Rahman",
      designation: { en: "Senior WordPress Engineer", bn: "সিনিয়র ওয়ার্ডপ্রেস ইঞ্জিনিয়ার" },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      bio: { en: "Developed 300+ client projects.", bn: "৩০০+ ক্লায়েন্ট প্রজেক্ট ও কাস্টম থিম ডেভেলপার।" },
      experience: "10+ Yrs Exp",
      verified: true
    },
    overview: {
      en: "Live online classes covering custom layouts, plugins, and client project management.",
      bn: "অনলাইনে পিএইচপি ও ওয়ার্ডপ্রেস কাস্টমাইজেশন শেখার পূর্ণাঙ্গ কোর্স।"
    },
    fullDescription: {
      en: "Start offering WordPress development services.",
      bn: "ওয়ার্ডপ্রেস সার্ভিস প্রদান করে ফ্রিল্যান্সিং শুরু করুন।"
    },
    coreValues: [],
    learningOutcomes: [],
    curriculum: [],
    includedItems: [],
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
    mode: { en: "Offline", bn: "অফলাইন" },
    modeType: "offline",
    rating: 5,
    ratingsCount: 60,
    enrolledCount: "50+ Enrolled",
    languages: { en: "Bengali / English", bn: "বাংলা / ইংরেজি" },
    fee: "8000৳",
    rawFee: 8000,
    originalFee: "12000৳",
    duration: { en: "3 Months", bn: "৩ মাস" },
    classesCount: { en: "24 Classes", bn: "২৪ টি ক্লাস" },
    image: "https://i.ibb.co.com/qMCD3bym/Spoken-English-Business-Communication-1-1.jpg",
    videoUrl: "https://www.youtube.com/embed/2eWuYf-keXI?autoplay=1",
    whatsappLink: `https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22${encodeURIComponent(formattedTitle)}%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4`,
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
      en: `This ${formattedTitle} course is designed to help learners master modern tech tools by learning how to design effective architecture, automate content, code, image, and data tasks, and build real-world workflows. Over a duration of 3 months, the course takes students from foundational concepts to advanced, practical applications.`,
      bn: `এই ${formattedTitle} কোর্সটি আপনাকে আধুনিক সফটওয়্যার ও প্রাকটিক্যাল টেকনোলজি আয়ত্ত করতে সাহায্য করবে। ফান্ডামেন্টাল থেকে শুরু করে এডভান্সড রিয়েল-ওয়ার্ল্ড প্রজেক্ট শিখবেন ২৪টি লাইভ ক্লাসের মাধ্যমে।`
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
      }
    ],
    learningOutcomes: [
      { en: "Master Core Principles & Advanced Concepts", bn: "কোর কনসেপ্টস ও এডভান্সড টেকনিক আয়ত্ত করা" },
      { en: "Build Real-World Portfolio Projects", bn: "বাস্তব পোর্টফোলিও প্রজেক্ট তৈরি করা" }
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
      }
    ],
    includedItems: [
      { en: "Hands-on Video Lessons & Live Mentorship", bn: "লাইভ ক্লাস ও ভিডিও লেকচার" },
      { en: "Professional Real-World Projects", bn: "লাইভ প্রফেশনাল প্রজেক্ট" },
      { en: "3 Months Duration (Interactive Training)", bn: "৩ মাসের হ্যান্ডস-অন কোর্স" },
      { en: "Industry Certificate of Completion", bn: "সার্টিফিকেট অফ কমপ্লিটশন" }
    ],
    reviews: []
  };

  return defaultCourse;
}
