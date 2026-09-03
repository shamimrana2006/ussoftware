export interface Mentor {
  id: string;
  name: string;
  nameBn: string;
  role: string;
  roleBn: string;
  specialty: "web" | "marketing" | "graphic" | "ux" | "ai" | "cloud";
  department: string;
  departmentBn: string;
  trainingExp: string;
  trainingExpBn: string;
  workExperiences: string[];
  workExperiencesBn: string[];
  avatar: string;
  rating: number;
  reviewsCount: number;
  menteesCount: string;
  nextSlot: string;
  nextSlotBn: string;
  bio: string;
  bioBn: string;
  skills: string[];
  education: { degree: string; institution: string; year: string }[];
  achievements: string[];
  coursesTaught: { title: string; students: string; rating: number }[];
  socialLinks: { linkedin?: string; github?: string; website?: string };
}

export const mentorsData: Mentor[] = [
  {
    id: "mahmudul-hasan",
    name: "Mahmudul Hasan Tanvir",
    nameBn: "মাহমুদুল হাসান তানভীর",
    role: "Department Head • Web Architecture",
    roleBn: "ডিপার্টমেন্ট হেড • ওয়েব আর্কিটেকচার",
    specialty: "web",
    department: "Department of Web & Software Engineering",
    departmentBn: "ওয়েব ও সফটওয়্যার ইঞ্জিনিয়ারিং বিভাগ",
    trainingExp: "7 Years of Training Experience",
    trainingExpBn: "৭ বছরের প্রশিক্ষণ অভিজ্ঞতা",
    workExperiences: [
      "Principal Software Engineer at Brain Station 23",
      "Former Lead Web Development Trainer at National ICT Project",
      "Senior Full-Stack Architect for European FinTech Applications",
      "Mentored 3,500+ Web Developers into Top IT Companies",
      "Specialized in Next.js 15, PostgreSQL & Scalable Microservices"
    ],
    workExperiencesBn: [
      "প্রিন্সিপাল সফটওয়্যার ইঞ্জিনিয়ার, ব্রেন স্টেশন ২৩",
      "সাবেক লিড ওয়েব ট্রেইনার, ন্যাশনাল আইসিটি প্রজেক্ট",
      "সিনিয়র ফুল-স্ট্যাক আর্কিটেক্ট, ইউরোপিয়ান ফিনটেক প্রজেক্ট",
      "৩,৫০০+ ডেভেলপারকে আন্তর্জাতিক ক্যারিয়ারে প্রতিষ্ঠিত করেছেন",
      "নেক্সট.জেএস ১৫, পোস্টগ্রেএসকিউএল ও মাইক্রোসার্ভিসেস বিশেষজ্ঞ"
    ],
    avatar: "/images/default-avatar.svg",
    rating: 4.98,
    reviewsCount: 245,
    menteesCount: "3,500+ Students",
    nextSlot: "Today, 7:00 PM",
    nextSlotBn: "আজ, সন্ধ্যা ৭:০০",
    bio: "Passionate Full-Stack Architect and Department Head with extensive expertise in modern JavaScript ecosystems, Next.js 15, distributed backend architecture, and PostgreSQL query tuning. Dedicated to preparing students for high-ticket global freelancing and enterprise software roles.",
    bioBn: "আধুনিক জাভাস্ক্রিপ্ট ইকোসিস্টেম, নেক্সট.জেএস ১৫, ডিস্ট্রিবিউটেড ব্যাকএন্ড আর্কিটেকচার ও ডাটাবেস অপ্টিমাইজেশনে দক্ষ ফুল-স্ট্যাক আর্কিটেক্ট ও ডিপার্টমেন্ট হেড। শিক্ষার্থীদের আন্তর্জাতিক জব মার্কেট ও এন্টারপ্রাইজ ক্যারিয়ারের জন্য প্রস্তুত করতে নিবেদিত।",
    skills: ["Next.js 15", "React", "Node.js", "TypeScript", "PostgreSQL", "Kafka", "Docker", "Tailwind CSS", "REST & GraphQL"],
    education: [
      { degree: "B.Sc. in Computer Science & Engineering", institution: "BUET", year: "2017" },
      { degree: "NSDA Certified Master Trainer (Level-3)", institution: "National Skills Development Authority", year: "2020" }
    ],
    achievements: [
      "Architect of high-scale enterprise banking web platforms in Bangladesh",
      "Authored curriculum for national level web engineering programs",
      "Keynote speaker on Modern Web Architecture at DevCon BD"
    ],
    coursesTaught: [
      { title: "Enterprise Full-Stack Web Development Mastery", students: "1,800+ Enrolled", rating: 4.98 },
      { title: "MERN Stack & Next.js 15 Bootcamp", students: "1,250+ Enrolled", rating: 4.97 },
      { title: "NSDA Certified Professional Web Track", students: "980+ Enrolled", rating: 4.99 }
    ],
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: "nusrat-jahan",
    name: "Nusrat Jahan Shifa",
    nameBn: "নুসরাত জাহান শিফা",
    role: "Lead Product Designer • UX/UI & Systems",
    roleBn: "লিড প্রোডাক্ট ডিজাইনার • ইউএক্স/ইউআই ও সিস্টেমস",
    specialty: "ux",
    department: "Department of Product Experience & Interaction",
    departmentBn: "প্রোডাক্ট এক্সপেরিয়েন্স ও ইন্টারঅ্যাকশন বিভাগ",
    trainingExp: "6 Years of Training Experience",
    trainingExpBn: "৬ বছরের প্রশিক্ষণ অভিজ্ঞতা",
    workExperiences: [
      "Senior Product Designer at Optimizely Bangladesh",
      "Design System Lead for Mobile Banking Apps (1M+ Active Users)",
      "Former Lead UX Mentor at Dribbble Bangladesh Community",
      "User Research & Micro-interaction Usability Specialist",
      "Consultant for Multi-Platform Enterprise Design Systems"
    ],
    workExperiencesBn: [
      "সিনিয়র প্রোডাক্ট ডিজাইনার, অপটিমাইজলি বাংলাদেশ",
      "ডিজাইন সিস্টেম লিড, মোবাইল ব্যাংকিং অ্যাপ (১ মিলিয়ন+ ব্যবহারকারী)",
      "সাবেক লিড ইউএক্স মেন্টর, ড্রিবল বাংলাদেশ কমিউনিটি",
      "ইউজার রিসার্চ ও মাইক্রো-ইন্টারঅ্যাকশন ইউজেবিলিটি স্পেশালিস্ট",
      "মাল্টি-প্ল্যাটফর্ম এন্টারপ্রাইজ ডিজাইন সিস্টেম কনসালট্যান্ট"
    ],
    avatar: "/images/default-avatar.svg",
    rating: 4.99,
    reviewsCount: 195,
    menteesCount: "2,800+ Students",
    nextSlot: "Tomorrow, 6:00 PM",
    nextSlotBn: "আগামীকাল, সন্ধ্যা ৬:০০",
    bio: "Accomplished Lead Product Designer with over 6 years of experience building scalable enterprise design systems in Figma, user psychology journeys, and friction-free developer token handoffs.",
    bioBn: "ফিগমায় স্কেলেবল এন্টারপ্রাইজ ডিজাইন সিস্টেম, ইউজার সাইকোলজি ও স্মুথ ডেভেলপার হ্যান্ডঅফ তৈরিতে ৬ বছরেরও বেশি অভিজ্ঞতাসম্পন্ন লিড প্রোডাক্ট ডিজাইনার।",
    skills: ["Figma Enterprise", "Design Systems", "Design Tokens", "User Research", "Wireframing", "Interactive Prototyping", "Usability Testing"],
    education: [
      { degree: "BFA in Graphic Design & Visual Communication", institution: "Faculty of Fine Arts, DU", year: "2018" },
      { degree: "Certified Usability Analyst (CUA)", institution: "Human Factors International", year: "2021" }
    ],
    achievements: [
      "Spearheaded redesign of leading fintech mobile apps in South Asia",
      "Top-rated design mentor with over 2,800 alumni worldwide",
      "Keynote Speaker at National UX/UI Design Summit"
    ],
    coursesTaught: [
      { title: "Enterprise UX/UI & Design Systems Masterclass", students: "1,600+ Enrolled", rating: 4.99 },
      { title: "Mobile App Interaction & Prototyping in Figma", students: "1,200+ Enrolled", rating: 4.98 }
    ],
    socialLinks: {
      linkedin: "https://linkedin.com",
      website: "https://dribbble.com"
    }
  },
  {
    id: "kazi-fahim",
    name: "Engr. Kazi Fahim Ahmed",
    nameBn: "ইঞ্জি. কাজী ফাহিম আহমেদ",
    role: "Department Head • AI & Machine Learning",
    roleBn: "ডিপার্টমেন্ট হেড • এআই ও মেশিন লার্নিং",
    specialty: "ai",
    department: "Department of Artificial Intelligence & Data Science",
    departmentBn: "কৃত্রিম বুদ্ধিমত্তা ও ডাটা সায়েন্স বিভাগ",
    trainingExp: "10 Years of Research & Training Experience",
    trainingExpBn: "১০ বছরের গবেষণা ও প্রশিক্ষণ অভিজ্ঞতা",
    workExperiences: [
      "Senior AI Researcher at Samsung R&D Institute Bangladesh",
      "Lead Architect on Enterprise Autonomous Agents & RAG Systems",
      "Published Author of 8+ International AI Papers in IEEE & Springer",
      "Consultant for Computer Vision Automation & OCR Pipelines",
      "Pioneer in Fine-Tuning Open-Source LLMs for Industry Workflows"
    ],
    workExperiencesBn: [
      "সিনিয়র এআই গবেষক, স্যামসাং আরঅ্যান্ডডি ইনস্টিটিউট বাংলাদেশ",
      "এন্টারপ্রাইজ অটোনোমাস এজেন্ট ও র্যাগ আর্কিটেকচার লিড",
      "আইইইই ও স্প্রিঞ্জারে ৮+ আন্তর্জাতিক গবেষণা নিবন্ধের লেখক",
      "কম্পিউটার ভিশন অটোমেশন ও ওসিআর পাইপলাইন কনসালট্যান্ট",
      "ওপেন-সোর্স এলএলএম ফাইন-টিউনিং ও ডিপ্লয়মেন্ট বিশেষজ্ঞ"
    ],
    avatar: "/images/default-avatar.svg",
    rating: 4.99,
    reviewsCount: 310,
    menteesCount: "2,900+ Students",
    nextSlot: "Today, 8:30 PM",
    nextSlotBn: "আজ, রাত ৮:৩০",
    bio: "Pioneering AI Scientist and Department Head specializing in Generative AI, Large Language Models (LLMs), Autonomous Agentic Workflows, LangChain/LlamaIndex RAG pipelines, and PyTorch production infrastructure.",
    bioBn: "জেনারেটিভ এআই, লার্জ ল্যাঙ্গুয়েজ মডেল (LLM), অটোনোমাস এজেনটিক ফ্রেমওয়ার্ক, র্যাগ পাইপলাইন এবং পাইটর্চ প্রোডাকশন ইনফ্রাস্ট্রাকচারে ১০ বছরের অভিজ্ঞতাসম্পন্ন খ্যাতনামা এআই গবেষক।",
    skills: ["Generative AI", "PyTorch", "LangChain", "LLMs & RAG", "Vector DBs", "Python", "Computer Vision", "Agentic Workflows"],
    education: [
      { degree: "M.Sc. in Computer Science & Engineering", institution: "BUET", year: "2015" },
      { degree: "Specialization in Deep Learning & LLMs", institution: "Stanford Online", year: "2019" }
    ],
    achievements: [
      "8+ Peer-reviewed research papers in top-tier IEEE journals",
      "Led development of national award-winning AI OCR vision system",
      "Advisor for multiple Silicon Valley & regional AI startups"
    ],
    coursesTaught: [
      { title: "Generative AI & Autonomous LLM Agents Mastery", students: "1,500+ Enrolled", rating: 4.99 },
      { title: "Machine Learning & Deep Learning with PyTorch", students: "1,100+ Enrolled", rating: 4.98 }
    ],
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: "sabbir-rahman",
    name: "Sabbir Rahman Chowdhury",
    nameBn: "সাব্বির রহমান চৌধুরী",
    role: "Lead Cloud Architect • DevOps & SRE",
    roleBn: "লিড ক্লাউড আর্কিটেক্ট • ডেভঅপ্স ও এসআরই",
    specialty: "cloud",
    department: "Department of Cloud Infrastructure & Site Reliability",
    departmentBn: "ক্লাউড ইনফ্রাস্ট্রাকচার ও সাইট রিলায়াবিলিটি বিভাগ",
    trainingExp: "9 Years of Industry Experience",
    trainingExpBn: "৯ বছরের ইন্ডাস্ট্রি ও প্রশিক্ষণ অভিজ্ঞতা",
    workExperiences: [
      "Lead Cloud Architect at Grameenphone & Telenor Group",
      "AWS Certified Solutions Architect Professional & CKA Certified",
      "Specialized in Multi-Region Kubernetes & Terraform GitOps",
      "Architect of 99.999% High Availability Telecom Microservices",
      "Site Reliability Engineer Managing 20M+ Daily API Transactions"
    ],
    workExperiencesBn: [
      "লিড ক্লাউড আর্কিটেক্ট, গ্রামীণফোন ও টেলিনর গ্রুপ",
      "এডব্লিউএস সলিউশন আর্কিটেক্ট প্রো ও সিকেএ সার্টিফাইড",
      "মাল্টি-রিজিয়ন কুবারনেটিস ও টেরাফর্ম গিটঅপ্স বিশেষজ্ঞ",
      "৯৯.৯৯৯% হাই-অ্যাভেইলেবিলিটি টেলিকম মাইক্রোসার্ভিস আর্কিটেক্ট",
      "দৈনিক ২০ মিলিয়ন+ এপিআই লেনদেন পরিচালনাকারী এসআরই"
    ],
    avatar: "/images/default-avatar.svg",
    rating: 4.97,
    reviewsCount: 175,
    menteesCount: "2,200+ Students",
    nextSlot: "Tomorrow, 5:00 PM",
    nextSlotBn: "আগামীকাল, বিকাল ৫:০০",
    bio: "Senior Infrastructure Architect with extensive background in hyper-scale cloud deployments, multi-region Kubernetes clusters, Docker containerization, Terraform Infrastructure-as-Code, and ArgoCD automated GitOps.",
    bioBn: "হাইপার-স্কেল ক্লাউড প্ল্যাটফর্ম, মাল্টি-রিজিয়ন কুবারনেটিস ক্লাস্টার, ডকার, টেরাফর্ম আইএসি এবং অটোমেটেড সিআই/সিডি পাইপলাইনে ৯ বছরের অভিজ্ঞতাসম্পন্ন সিনিয়র ইনফ্রাস্ট্রাকচার আর্কিটেক্ট।",
    skills: ["AWS Cloud", "Kubernetes", "Docker", "Terraform", "CI/CD GitOps", "ArgoCD", "Linux", "Prometheus & Grafana", "Go"],
    education: [
      { degree: "B.Sc. in Computer Science & Engineering", institution: "IUT", year: "2016" },
      { degree: "AWS Certified Solutions Architect Professional", institution: "Amazon Web Services", year: "2019" }
    ],
    achievements: [
      "Architected zero-downtime microservices infrastructure for 20M+ users",
      "CKA (Certified Kubernetes Administrator) Certified",
      "Keynote Speaker at AWS Community Day Bangladesh"
    ],
    coursesTaught: [
      { title: "Cloud Engineering & Kubernetes Cluster Mastery", students: "1,200+ Enrolled", rating: 4.98 },
      { title: "DevOps Automation with Terraform & ArgoCD", students: "950+ Enrolled", rating: 4.96 }
    ],
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: "farhan-kabir",
    name: "Farhan Kabir Chowdhury",
    nameBn: "ফারহান কবির চৌধুরী",
    role: "Department Head • Performance Marketing",
    roleBn: "ডিপার্টমেন্ট হেড • পারফরম্যান্স মার্কেটিং",
    specialty: "marketing",
    department: "Department of Digital Strategy & Growth",
    departmentBn: "ডিজিটাল স্ট্র্যাটেজি ও গ্রোথ বিভাগ",
    trainingExp: "8 Years of Training Experience",
    trainingExpBn: "৮ বছরের প্রশিক্ষণ অভিজ্ঞতা",
    workExperiences: [
      "Former Growth Marketing Lead at Pathao",
      "Managed $1.5M+ in Meta & Google Ads for Global E-Commerce Brands",
      "Conversion Rate Optimization (CRO) & Funnel Architecture Expert",
      "Trained 4,200+ Digital Marketers & Media Buyers",
      "Certified Google Ads & Meta Certified Media Planning Professional"
    ],
    workExperiencesBn: [
      "সাবেক গ্রোথ মার্কেটিং লিড, পাঠাও",
      "গ্লোবাল ই-কমার্সের জন্য $১.৫M+ মেটা ও গুগল অ্যাডস পরিচালনা",
      "কনভার্সন রেট অপ্টিমাইজেশন (CRO) ও ফানেল আর্কিটেক্ট",
      "৪,২০০+ ডিজিটাল মার্কেটার ও মিডিয়া বায়ারকে প্রশিক্ষণ দিয়েছেন",
      "সার্টিফাইড গুগল ও মেটা মিডিয়া প্ল্যানিং প্রফেশনাল"
    ],
    avatar: "/images/default-avatar.svg",
    rating: 4.98,
    reviewsCount: 260,
    menteesCount: "4,200+ Students",
    nextSlot: "Monday, 6:00 PM",
    nextSlotBn: "সোমবার, সন্ধ্যা ৬:০০",
    bio: "Accomplished Performance Marketing Leader and Department Head with proven track record in scaling global e-commerce and SaaS brands. Expert in multi-channel paid acquisition, Google Analytics 4, and conversion funnel strategies.",
    bioBn: "গ্লোবাল ই-কমার্স ও সাস ব্র্যান্ড স্কেলিংয়ে অভিজ্ঞ পারফরম্যান্স মার্কেটিং লিডার ও ডিপার্টমেন্ট হেড। পেইড ট্রাফিক অ্যাকুইজিশন, গুগল অ্যানালিটিক্স ৪ এবং কনভার্সন ফানেল অপ্টিমাইজেশনে বিশেষজ্ঞ।",
    skills: ["Performance Marketing", "Meta Ads Manager", "Google Ads", "Technical SEO", "Google Analytics 4", "Conversion Funnels", "CRO Strategy"],
    education: [
      { degree: "BBA in Marketing & Finance", institution: "Institute of Business Administration (IBA), DU", year: "2016" },
      { degree: "Meta Certified Media Planning Professional", institution: "Meta Blueprint", year: "2020" }
    ],
    achievements: [
      "Scaled startup customer acquisition from 10k to 500k active users",
      "Top-Rated Plus Marketing Strategist on International Platforms",
      "Mentor to over 4,200 successful digital marketing entrepreneurs"
    ],
    coursesTaught: [
      { title: "Advanced Performance Marketing & Media Buying", students: "2,200+ Enrolled", rating: 4.99 },
      { title: "Technical SEO & Data-Driven Growth Analytics", students: "1,400+ Enrolled", rating: 4.97 }
    ],
    socialLinks: {
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: "tahsin-ahmed",
    name: "Tahsin Ahmed Alif",
    nameBn: "তাহসিন আহমেদ আলিফ",
    role: "Department Head • Brand Identity & Graphic",
    roleBn: "ডিপার্টমেন্ট হেড • ব্র্যান্ড আইডেন্টিটি ও গ্রাফিক",
    specialty: "graphic",
    department: "Department of Visual Arts & Brand Design",
    departmentBn: "ভিজ্যুয়াল আর্টস ও ব্র্যান্ড ডিজাইন বিভাগ",
    trainingExp: "11 Years of Training Experience",
    trainingExpBn: "১১ বছরের প্রশিক্ষণ অভিজ্ঞতা",
    workExperiences: [
      "Senior Art Director at Adcomm Global Advertising Agency",
      "National CBT&A Certified Assessor in Graphic Design (BTEB & NSDA)",
      "Master Trainer in Adobe Creative Suite & Commercial Packaging",
      "Crafted Visual Brand Identities for 80+ Corporate & FMCG Brands",
      "Guided 3,800+ Graphic Designers into International Marketplaces"
    ],
    workExperiencesBn: [
      "সিনিয়র আর্ট ডিরেক্টর, অ্যাডকম গ্লোবাল অ্যাডভার্টাইজিং এজেন্সি",
      "গ্রাফিক ডিজাইনে জাতীয় সিবিটিঅ্যান্ডএ সার্টিফাইড অ্যাসেসর (বিটিইবি ও এনএসডিএ)",
      "মাস্টার ট্রেইনার, অ্যাডোব ক্রিয়েটিভ ক্লাউড ও কমার্শিয়াল প্যাকেজিং",
      "৮০+ কর্পোরেট ও এফএমসিজি ব্র্যান্ডের ভিজ্যুয়াল আইডেন্টিটি তৈরি",
      "৩,৮০০+ ডিজাইনারকে আন্তর্জাতিক মার্কেটপ্লেসে সফল করেছেন"
    ],
    avatar: "/images/default-avatar.svg",
    rating: 4.96,
    reviewsCount: 280,
    menteesCount: "3,800+ Students",
    nextSlot: "Today, 9:00 PM",
    nextSlotBn: "আজ, রাত ৯:০০",
    bio: "Veteran Art Director, Brand Designer, and official National CBT&A Assessor with over 11 years of experience in visual brand strategy, typography, packaging design, and creative design pedagogy.",
    bioBn: "১১ বছরের অভিজ্ঞতাসম্পন্ন প্রবীণ আর্ট ডিরেক্টর, ব্র্যান্ড ডিজাইনার ও জাতীয় সিবিটিঅ্যান্ডএ অ্যাসেসর। আন্তর্জাতিক ব্র্যান্ড আইডেন্টিটি, টাইপোগ্রাফি ও প্যাকেজিং ডিজাইনে অনন্য বিশেষজ্ঞ।",
    skills: ["Brand Identity", "Adobe Illustrator", "Adobe Photoshop", "InDesign", "Packaging Design", "Print Production", "Typography", "Visual Arts"],
    education: [
      { degree: "MFA in Graphic Design & Visual Communication", institution: "Faculty of Fine Arts, DU", year: "2014" },
      { degree: "Certified CBT&A Level-4 Assessor", institution: "Bangladesh Technical Education Board", year: "2018" }
    ],
    achievements: [
      "Official Assessor for BTEB & NSDA National Skill Qualification Framework",
      "Designed visual identity for top national conglomerates",
      "Winner of National Creative Design Excellence Award"
    ],
    coursesTaught: [
      { title: "Professional Graphic & Brand Identity Masterclass", students: "2,400+ Enrolled", rating: 4.97 },
      { title: "Commercial Print Production & Packaging Design", students: "1,200+ Enrolled", rating: 4.95 }
    ],
    socialLinks: {
      linkedin: "https://linkedin.com",
      website: "https://behance.net"
    }
  },
  {
    id: "abrar-hossain",
    name: "Abrar Hossain Rifat",
    nameBn: "আবরার হোসেন রিফাত",
    role: "Staff Mobile Engineer • Flutter & iOS",
    roleBn: "স্টাফ মোবাইল ইঞ্জিনিয়ার • ফ্লাটার ও আইওএস",
    specialty: "web",
    department: "Department of Mobile Application Engineering",
    departmentBn: "মোবাইল অ্যাপ্লিকেশন ইঞ্জিনিয়ারিং বিভাগ",
    trainingExp: "6 Years of Training Experience",
    trainingExpBn: "৬ বছরের প্রশিক্ষণ অভিজ্ঞতা",
    workExperiences: [
      "Staff Mobile Engineer at Shohoz SuperApp",
      "Published 20+ Cross-Platform Apps on Google Play & Apple App Store",
      "Specialized in Clean Architecture, Riverpod & WebRTC Audio/Video",
      "Mentored 1,800+ Mobile Engineers across Bangladesh & South Asia",
      "Architect of Offline SQLite Data Sync for Low-Bandwidth Networks"
    ],
    workExperiencesBn: [
      "স্টাফ মোবাইল ইঞ্জিনিয়ার, সহজ সুপারঅ্যাপ",
      "গুগল প্লে ও অ্যাপল অ্যাপ স্টোরে ২০+ মোবাইল অ্যাপ প্রকাশ",
      "ক্লিন আর্কিটেকচার, রিভারপড ও ওয়েবআরটিসি অডিও/ভিডিও বিশেষজ্ঞ",
      "বাংলাদেশ ও দক্ষিণ এশিয়ার ১,৮০০+ মোবাইল ইঞ্জিনিয়ারকে মেন্টর করেছেন",
      "লো-ব্যান্ডউইথের জন্য অফলাইন এসকিউলাইট ডাটা সিঙ্ক আর্কিটেক্ট"
    ],
    avatar: "/images/default-avatar.svg",
    rating: 4.95,
    reviewsCount: 160,
    menteesCount: "1,800+ Students",
    nextSlot: "Thursday, 7:00 PM",
    nextSlotBn: "বৃহস্পতিবার, সন্ধ্যা ৭:০০",
    bio: "High-performance Mobile Architect specializing in Flutter, Dart, iOS Swift, Clean Architecture, and real-time WebRTC communications for million-user apps.",
    bioBn: "ফ্লাটার, ডার্ট, আইওএস সুইফট এবং ক্লিন আর্কিটেকচারে দক্ষ সিনিয়র মোবাইল আর্কিটেক্ট। রিয়েল-টাইম অডিও/ভিডিও ও হাই-কনকারেন্সি মোবাইল অ্যাপ ডেভেলপমেন্টে অভিজ্ঞ।",
    skills: ["Flutter 3.x", "Dart", "Clean Architecture", "Riverpod", "WebRTC", "Firebase", "iOS Swift", "SQLite", "GraphQL"],
    education: [
      { degree: "B.Sc. in Software Engineering", institution: "SUST", year: "2018" },
      { degree: "Google Certified Flutter Developer", institution: "Google Developers", year: "2021" }
    ],
    achievements: [
      "Architected core mobile ride-sharing engine serving 5M+ passengers",
      "Top contributor to open-source Flutter UI ecosystem",
      "Speaker at Flutter Bangladesh Community Meetups"
    ],
    coursesTaught: [
      { title: "Complete Flutter & Dart Mobile App Bootcamp", students: "1,400+ Enrolled", rating: 4.96 },
      { title: "Advanced Clean Architecture in Mobile Apps", students: "800+ Enrolled", rating: 4.94 }
    ],
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: "syeda-tanzina",
    name: "Syeda Tanzina Akter",
    nameBn: "সৈয়দা তানজিনা আক্তার",
    role: "Lead Cyber Security Analyst • Red Team",
    roleBn: "লিড সাইবার সিকিউরিটি অ্যানালিস্ট • রেড টিম",
    specialty: "cloud",
    department: "Department of Information Security & Cyber Defense",
    departmentBn: "তথ্য নিরাপত্তা ও সাইবার ডিফেন্স বিভাগ",
    trainingExp: "7 Years of Training Experience",
    trainingExpBn: "৭ বছরের প্রশিক্ষণ অভিজ্ঞতা",
    workExperiences: [
      "Senior Security Consultant & Penetration Tester at Therap BD",
      "CEH (Certified Ethical Hacker) & OSCP Certified Consultant",
      "SOC Operations & Cloud Vulnerability Assessment Lead",
      "Speaker at National Cyber Security & Privacy Awareness Summits",
      "Conducted 100+ Enterprise Web & API Penetration Tests"
    ],
    workExperiencesBn: [
      "সিনিয়র সিকিউরিটি কনসালট্যান্ট ও পেনিট্রেশন টেস্টার, থেরাপ বিডি",
      "সিইএইচ (সার্টিফাইড এথিক্যাল হ্যাকার) ও ওএসসিপি সার্টিফাইড",
      "এসওসি অপারেশনস ও ক্লাউড ভালনারেবিলিটি অ্যাসেসমেন্ট লিড",
      "জাতীয় সাইবার নিরাপত্তা ও প্রাইভেসি কনফারেন্সের স্পিকার",
      "১০০+ এন্টারপ্রাইজ ওয়েব ও এপিআই পেনিট্রেশন টেস্ট সম্পন্নকারী"
    ],
    avatar: "/images/default-avatar.svg",
    rating: 4.97,
    reviewsCount: 140,
    menteesCount: "1,500+ Students",
    nextSlot: "Friday, 6:00 PM",
    nextSlotBn: "শুক্রবার, সন্ধ্যা ৬:০০",
    bio: "Distinguished Cyber Defense and Penetration Testing Specialist with 7 years of active consulting for multinational healthcare, banking, and fintech platforms. Expert in zero-trust architectures, OWASP top 10 defense, and DevSecOps pipelines.",
    bioBn: "মাল্টিন্যাশনাল হেলথকেয়ার, ব্যাংকিং ও ফিনটেক প্ল্যাটফর্মের জন্য ৭ বছরের অভিজ্ঞতাসম্পন্ন খ্যাতনামা সাইবার সিকিউরিটি ও পেনিট্রেশন টেস্টিং বিশেষজ্ঞ। এথিক্যাল হ্যাকিং ও ক্লাউড ডিফেন্সে পারদর্শী।",
    skills: ["Ethical Hacking", "OWASP Top 10", "Penetration Testing", "SOC Operations", "Burp Suite Pro", "Network Security", "DevSecOps", "Linux Hardening"],
    education: [
      { degree: "B.Sc. in Computer Science & Engineering", institution: "East West University", year: "2017" },
      { degree: "OSCP (Offensive Security Certified Professional)", institution: "OffSec", year: "2021" }
    ],
    achievements: [
      "Reported critical CVE security vulnerabilities in enterprise platforms",
      "Leader of Women in CyberSecurity (WiCyS) Bangladesh Chapter",
      "Trained 1,500+ students in defensive and offensive security certifications"
    ],
    coursesTaught: [
      { title: "Practical Ethical Hacking & Cyber Defense Bootcamp", students: "1,100+ Enrolled", rating: 4.98 },
      { title: "Web Application Penetration Testing & OWASP Top 10", students: "750+ Enrolled", rating: 4.96 }
    ],
    socialLinks: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  }
];
