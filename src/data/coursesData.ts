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
    "id": "101",
    "slug": "python-django-ml",
    "title": {
      "en": "Python, Django & Machine Learning Mastery",
      "bn": "পাইথন, জ্যাঙ্গো ও মেশিন লার্নিং মাস্টারি"
    },
    "subtitle": {
      "en": "Learn Python programming, Django backend development, REST APIs & Machine Learning models",
      "bn": "পাইথন প্রোগ্রামিং, জ্যাঙ্গো ফ্রেমওয়ার্ক, এপিআই এবং মেশিন লার্নিং অ্যালগরিদম শিখুন"
    },
    "category": "software",
    "categoryLabel": {
      "en": "Software & Web",
      "bn": "সফটওয়্যার ও ওয়েব"
    },
    "badge": {
      "en": "POPULAR",
      "bn": "জনপ্রিয়"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 78,
    "enrolledCount": "95+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "9000৳",
    "rawFee": 9000,
    "originalFee": "15000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "26 Classes",
      "bn": "২৬ টি ক্লাস"
    },
    "image": "/images/course thumbnail/python django and machine learning.jpg",
    "videoUrl": "https://www.youtube.com/embed/nvWl7GkpHCU?autoplay=1",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Python%2C%20Django%20%26%20Machine%20Learning%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Engr. Tanvir Ahmed",
      "designation": {
        "en": "Senior Python & ML Engineer",
        "bn": "সিনিয়র পাইথন ও এমএল ইঞ্জিনিয়ার"
      },
      "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "8+ years in Python backend architecture & predictive modeling.",
        "bn": "৮+ বছরের পাইথন ব্যাকএন্ড ও মেশিন লার্নিং অভিজ্ঞতা।"
      },
      "experience": "8+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Complete practical journey from Python programming basics to building enterprise web apps with Django and deploying scikit-learn Machine Learning models.",
      "bn": "পাইথন প্রোগ্রামিং থেকে শুরু করে জ্যাঙ্গো দিয়ে ওয়েব অ্যাপ্লিকেশন তৈরি এবং মেশিন লার্নিং মডেল ডিপ্লয়মেন্টের পূর্ণাঙ্গ কোর্স।"
    },
    "fullDescription": {
      "en": "Master Python syntax, OOP, Django ORM, REST Framework, data analysis with Pandas & NumPy, and AI/ML algorithms.",
      "bn": "পাইথন ওবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং, ডেটাবেস ও মেশিন লার্নিং নিয়ে হ্যান্ডস-অন প্রজেক্ট তৈরি শিখবেন।"
    },
    "coreValues": [],
    "learningOutcomes": [],
    "curriculum": [],
    "includedItems": [],
    "reviews": []
  },
  {
    "id": "102",
    "slug": "flutter-app-development",
    "title": {
      "en": "Cross-Platform Flutter & Dart App Development",
      "bn": "ক্রস-প্ল্যাটফর্ম ফ্লাটার ও ডার্ট অ্যাপ ডেভেলপমেন্ট"
    },
    "subtitle": {
      "en": "Build stunning iOS & Android apps with Flutter, Firebase & State Management",
      "bn": "ফ্লাটার ও ডার্ট দিয়ে আইওএস এবং অ্যান্ড্রয়েড মোবাইল অ্যাপ তৈরি শিখুন"
    },
    "category": "software",
    "categoryLabel": {
      "en": "Software & Web",
      "bn": "সফটওয়্যার ও ওয়েব"
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
    "rating": 5,
    "ratingsCount": 65,
    "enrolledCount": "80+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "9000৳",
    "rawFee": 9000,
    "originalFee": "14000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "24 Classes",
      "bn": "২৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/flutter app.jpg",
    "videoUrl": "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1080717277950305%2F&show_text=0",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Flutter%20App%20Development%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Sabbir Hasan",
      "designation": {
        "en": "Lead Mobile Architect",
        "bn": "লিড মোবাইল আর্কিটেক্ট"
      },
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "Built 30+ production mobile apps published on Play Store & App Store.",
        "bn": "৩০+ প্রোডাকশন মোবাইল অ্যাপ তৈরির অভিজ্ঞ অভিজ্ঞ ট্রেইনার।"
      },
      "experience": "7+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Build high-performance cross-platform Android and iOS applications with a single codebase using Google Flutter and Dart. Master modern UI widgets, responsive layouts, Firebase backend, REST API integration, state management, and Play Store / App Store deployment.",
      "bn": "১ বার কোড করলেই Android এবং iOS—দুই প্ল্যাটফর্মের জন্যই অ্যাপ তৈরি হয়ে যায়! সময় কম, কাজ সহজ, আয় বেশি! কোনো পূর্ব অভিজ্ঞতা ছাড়াই মাত্র কয়েক মাসে Flutter শিখে গড়ে তুলুন আপনার স্মার্ট আইটি ক্যারিয়ার। U S Software Ltd নিয়ে এলো প্র্যাকটিক্যাল প্রজেক্ট-ভিত্তিক Flutter App Development কোর্স।"
    },
    "fullDescription": {
      "en": "Hands-on Flutter bootcamp designed to take you from foundational Dart object-oriented programming to architecting scalable, production-grade mobile applications. Integrate REST APIs, cloud databases, push notifications, and monetization systems.",
      "bn": "পড়াশোনা বা চাকরির পাশাপাশি ঘরে বসেই হাই-ডিমান্ডিং স্কিল শিখে নিজের ক্যারিয়ার বদলে ফেলার সেরা সময় এখনই! কোডিং নিয়ে কোনো ভয় নেই! জিরো লেভেল থেকে লাইভ প্রজেক্ট ভিত্তিক ক্লাস, Dart Programming & Flutter Basics, UI/UX Design, Firebase & REST API Integration, মার্কেটপ্লেস ও রিমোট জব গাইডলাইন এবং লাইফটাইম মেন্টর সাপোর্ট পাবেন।"
    },
    "coreValues": [
      {
        "id": "cv-fl-1",
        "title": {
          "en": "Single Codebase for iOS & Android",
          "bn": "এক কোডে অ্যান্ড্রয়েড ও আইওএস"
        },
        "desc": {
          "en": "Write once in Flutter and deploy natively to both Android and iOS app stores.",
          "bn": "একটি সিঙ্গেল কোডবেস দিয়ে উভয় প্ল্যাটফর্মের জন্য ফাস্ট ও ন্যাটিভ পারফরম্যান্স অ্যাপ তৈরি।"
        },
        "icon": "Smartphone"
      },
      {
        "id": "cv-fl-2",
        "title": {
          "en": "Live Project-Based Learning",
          "bn": "জিরো থেকে লাইভ প্রজেক্ট"
        },
        "desc": {
          "en": "Build real-world production mobile apps from scratch during interactive classes.",
          "bn": "হাতে-কলমে বাস্তবমুখী মোবাইল অ্যাপ্লিকেশন তৈরির প্র্যাকটিক্যাল ক্লাস।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv-fl-3",
        "title": {
          "en": "Firebase & REST API Integration",
          "bn": "ফায়ারবেস ও ব্যাকএন্ড এপিআই"
        },
        "desc": {
          "en": "Integrate cloud authentication, real-time databases, and cloud push notifications.",
          "bn": "রিয়েলটাইম ক্লাউড ডাটাবেজ, পুশ নোটিফিকেশন এবং এপিআই নেটওয়ার্কিং।"
        },
        "icon": "CheckCircle2"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master Dart Object-Oriented Programming (OOP), Null Safety & Asynchronous Streams",
        "bn": "ডার্ট ল্যাঙ্গুয়েজ, ওওপি কনসেপ্ট ও অ্যাসিঙ্ক প্রোগ্রামিং দক্ষতা"
      },
      {
        "en": "Build Responsive & Beautiful Mobile UI from Figma Prototypes",
        "bn": "ফিগমা ডিজাইন থেকে রেসপনসিভ ও আধুনিক ফ্লুইড মোবাইল ইউআই তৈরি"
      },
      {
        "en": "Implement Robust State Management with Provider, Riverpod & Bloc",
        "bn": "প্রোভাইডার, রিভারপড ও ব্লক আর্কিটেকচারের মাধ্যমে স্কেলেবল স্টেট ম্যানেজমেন্ট"
      },
      {
        "en": "Integrate RESTful APIs, JSON Serialization & Offline Caching",
        "bn": "রেস্টফুল এপিআই ইন্টিগ্রেশন, জেসন পার্সিং ও অফলাইন ক্যাশিং ডাটাবেজ"
      },
      {
        "en": "Implement Firebase Authentication, Cloud Firestore & Push Notifications",
        "bn": "ফায়ারবেস অথেন্টিকেশন, ক্লাউড ফায়ারস্টোর ও পুশ নোটিফিকেশন সেটআপ"
      },
      {
        "en": "Local Persistence with SQLite Database & Hive Storage",
        "bn": "এসকিউলাইট (SQLite) ও হাইভ (Hive) দিয়ে অফলাইন স্টোরেজ ম্যানেজমেন্ট"
      },
      {
        "en": "Publish Production Apps to Google Play Store & Apple App Store",
        "bn": "গুগল প্লে স্টোর ও অ্যাপল অ্যাপ স্টোরে প্রোডাকশন অ্যাপ পাবলিশিং ও সাইনিং"
      },
      {
        "en": "Fiverr, Upwork Freelance Profiles & Remote Flutter Job Readiness",
        "bn": "ফাইভার, আপওয়ার্ক মার্কেটপ্লেস ও আন্তর্জাতিক রিমোট জবের প্রস্তুতি"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Dart Programming Core & OOP Fundamentals",
          "bn": "মডিউল ১: Dart প্রোগ্রামিং ও অবজেক্ট ওরিয়েন্টেড বেসিকস"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Dart Syntax, Variables, Data Types & Control Flow",
            "bn": "ডার্ট সিনট্যাক্স, ভ্যারিয়েবল, ডেটা টাইপ ও কন্ডিশনাল লজিক"
          },
          {
            "en": "Functions, Parameters, Collections (Lists, Maps, Sets)",
            "bn": "ফাংশনস, প্যারামিটারস ও কালেকশনস (লিস্ট, ম্যাপ, সেট)"
          },
          {
            "en": "Object-Oriented Programming (Classes, Inheritance, Mixins, Interfaces)",
            "bn": "ক্লাস, ইনহেরিটেন্স, মিক্সিন ও ইন্টারফেসেস"
          },
          {
            "en": "Null Safety, Exception Handling & Async Programming (Futures, Streams)",
            "bn": "নাল সেফটি, এক্সেপশন হ্যান্ডলিং ও অ্যাসিঙ্ক্রোনাস স্ট্রিমস"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Flutter UI Architecture & Core Widgets",
          "bn": "মডিউল ২: ফ্লাটার ইউআই আর্কিটেকচার ও কোর উইজেটস"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Stateless vs Stateful Widgets Lifecycle & Tree Architecture",
            "bn": "স্টেটলেস ও স্টেটফুল উইজেটের লাইফসাইকেল ও ট্রি স্ট্রাকচার"
          },
          {
            "en": "Layout Widgets: Container, Row, Column, Stack, Flex & Expanded",
            "bn": "লেআউট উইজেটস: কনটেইনার, রো, কলাম, স্ট্যাক ও ফ্লেক্সিবল গ্রিড"
          },
          {
            "en": "Scrollable Views: ListView.builder, GridView, CustomScrollView",
            "bn": "লিস্টভিউ বিল্ডার, গ্রিডভিউ ও কাস্টম স্ক্রোলেবল ভিউ"
          },
          {
            "en": "Forms, TextFields, Validations & User Input Controls",
            "bn": "ফর্ম ইনপুটস, টেক্সটফিল্ড ভ্যালিডেশন ও কন্ট্রোলারস"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Figma to Flutter & Advanced UI/UX Animations",
          "bn": "মডিউল ৩: Figma থেকে ফ্লুইড ফ্লাটার UI ও অ্যানিমেশনস"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Converting Pixel-Perfect Figma Mobile Designs to Flutter Code",
            "bn": "ফিগমা মোবাইল ডিজাইনকে নিখুঁত ফ্লাটার কোডে কনভার্ট করা"
          },
          {
            "en": "Responsive Layouts for Different Screen Densities & Tablets",
            "bn": "বিভিন্ন মোবাইল স্ক্রিন সাইজ ও ট্যাবলেটের জন্য রেসপনসিভ লেআউট"
          },
          {
            "en": "Custom Theme, Dark/Light Mode & Typography Styling",
            "bn": "কাস্টম থিম, ডার্ক ও লাইট মোড এবং ফন্ট স্টাইলিং"
          },
          {
            "en": "Explicit & Implicit Animations, Hero Transitions & Lottie Assets",
            "bn": "হিরো ট্রানজিশন, কাস্টম অ্যানিমেশন ও লোটি ভেক্টর অ্যানিমেশন"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: Scalable State Management (Provider & Riverpod / Bloc)",
          "bn": "মডিউল ৪: স্টেট ম্যানেজমেন্ট (Provider, Riverpod ও Bloc)"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Understanding App State vs Ephemeral State in Mobile Apps",
            "bn": "অ্যাপ স্টেট ও লোকাল স্টেটের পার্থক্য এবং আর্কিটেকচারাল প্যাটার্ন"
          },
          {
            "en": "Provider Architecture: ChangeNotifier, MultiProvider & Consumer",
            "bn": "প্রোভাইডার স্টেট ম্যানেজমেন্ট: চেঞ্জনোটিফায়ার ও কনজিউমার প্যাটার্ন"
          },
          {
            "en": "Riverpod / Bloc State Management for Enterprise Grade Apps",
            "bn": "অ্যাডভান্সড রিভারপড ও ব্লক স্টেট ম্যানেজমেন্ট ফ্রেমওয়ার্ক"
          },
          {
            "en": "Dependency Injection & Clean Separation of Concerns",
            "bn": "ডিপেন্ডেন্সি ইনজেকশন ও বিজনেস লজিক সেপারেশন"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: REST API Integration, JSON Parsing & Networking",
          "bn": "মডিউল ৫: REST API ইন্টিগ্রেশন ও নেটওয়ার্কিং"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "HTTP Client & Dio Package Setup with Interceptors",
            "bn": "এইচটিটিপি ও ডিও প্যাকেজ সেটআপ এবং ইন্টারসেপ্টরস"
          },
          {
            "en": "JSON Serialization & Auto-Generated Models (json_serializable)",
            "bn": "জেসন সিরিয়ালাইজেশন ও ডেটা মডেলিং"
          },
          {
            "en": "Handling GET, POST, PUT, DELETE Network Requests & Pagination",
            "bn": "এপিআই রিকোয়েস্ট হ্যান্ডলিং ও পেজিনেশন ডাটা ফেচিং"
          },
          {
            "en": "Error Handling, Connectivity Checks & Retry Mechanisms",
            "bn": "নেটওয়ার্ক এরর হ্যান্ডলিং ও ইন্টারনেট কানেক্টিভিটি চেক"
          }
        ]
      },
      {
        "moduleNumber": 6,
        "title": {
          "en": "Module 6: Firebase Backend, Authentication & Cloud Firestore",
          "bn": "মডিউল ৬: Firebase ব্যাকএন্ড, অথেন্টিকেশন ও ক্লাউড ডাটাবেজ"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Firebase Project Setup & FlutterFire CLI Configuration",
            "bn": "ফ্লাটারফায়ার সিএলআই ও ফায়ারবেস কনফিগারেশন"
          },
          {
            "en": "Firebase Auth (Email, Google Sign-in & OTP Verification)",
            "bn": "ইমেইল, গুগল সাইন-ইন ও ওটিপি ভেরিফিকেশন সিস্টেম"
          },
          {
            "en": "Cloud Firestore Real-Time Queries, CRUD & Subcollections",
            "bn": "ক্লাউড ফায়ারস্টোরে রিয়েল-টাইম কুয়েরি ও সিআরইউডি অপারেশনস"
          },
          {
            "en": "Firebase Cloud Messaging (FCM) & Push Notification Triggers",
            "bn": "এফসিএম পুশ নোটিফিকেশন এবং ক্লাউড স্টোরেজ ফাইল আপলোড"
          }
        ]
      },
      {
        "moduleNumber": 7,
        "title": {
          "en": "Module 7: Local Storage, SQLite Database & Offline Support",
          "bn": "মডিউল ৭: লোকাল স্টোরেজ, SQLite ও অফলাইন ডাটাবেজ"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "SharedPreferences for Lightweight Key-Value App Settings",
            "bn": "শেয়ার্ড প্রেফারেন্স দিয়ে লোকাল সেটিংস ও ইউজার স্টেট সংরক্ষণ"
          },
          {
            "en": "SQLite (sqflite) Database Integration with Raw Queries & Helpers",
            "bn": "এসকিউলাইট দিয়ে অফলাইন ডেটাবেজ ম্যানেজমেন্ট ও সিঙ্ক"
          },
          {
            "en": "Hive NoSQL Fast Key-Value Database for Mobile Apps",
            "bn": "হাইভ (Hive) নো-এসকিউএল ফাস্ট লোকাল ডাটাবেজ"
          },
          {
            "en": "Secure Token Storage & Data Encryption Best Practices",
            "bn": "টোকেন সিকিউরিটি ও ডাটা এনক্রিপশন মেথডোলজি"
          }
        ]
      },
      {
        "moduleNumber": 8,
        "title": {
          "en": "Module 8: Full Production App, App Store Publishing & Freelancing",
          "bn": "মডিউল ৮: ফুল প্রোডাকশন অ্যাপ, স্টোর পাবলিশিং ও ফ্রিল্যান্সিং"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Building a Full-Scale E-Commerce / Delivery Mobile App Capstone",
            "bn": "কমপ্লিট ই-কমার্স বা সার্ভিস বুকিং মোবাইল অ্যাপ প্রজেক্ট"
          },
          {
            "en": "App Signing, ProGuard, Android AAB & iOS Archive Builds",
            "bn": "অ্যাপ সাইনিং, প্রো-গার্ড ও প্রোডাকশন রিলিজ বান্ডল তৈরি"
          },
          {
            "en": "Google Play Console & Apple App Store Connect Publishing Process",
            "bn": "গুগল প্লে স্টোর ও অ্যাপল অ্যাপ স্টোরে অ্যাপ আপলোড ও পলিসি"
          },
          {
            "en": "Freelancing on Fiverr/Upwork, Remote Flutter Jobs & Client Pitching",
            "bn": "মার্কেটপ্লেসে গিগ তৈরি, ক্লায়েন্ট হান্টিং ও রিমোট জবের কমপ্লিট গাইডলাইন"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "24 Live Interactive Classes & Screen Recordings",
        "bn": "২৪ টি লাইভ ক্লাস ও লাইফটাইম ভিডিও রেকর্ডিং"
      },
      {
        "en": "5 Real-World Production Mobile App Projects",
        "bn": "৫ টি বাস্তবমুখী মোবাইল অ্যাপ্লিকেশন প্রজেক্ট"
      },
      {
        "en": "Figma UI Kits & Production Source Code Repository",
        "bn": "ফিগমা ইউআই কিটস ও সম্পূর্ণ সোর্স কোড রিপোজিটরি"
      },
      {
        "en": "Play Store & App Store Publishing Support",
        "bn": "প্লে স্টোর ও অ্যাপ স্টোর পাবলিশিং গাইডেন্স"
      },
      {
        "en": "Lifetime Mentor Support & Career Placement",
        "bn": "আজীবন মেন্টর সাপোর্ট ও রিমোট জব প্লেসমেন্ট সহায়তা"
      }
    ],
    "reviews": [
      {
        "id": "r-fl-1",
        "name": "Arifur Rahman",
        "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "Flutter App Developer",
          "bn": "ফ্লাটার অ্যাপ ডেভেলপার"
        },
        "rating": 5,
        "comment": {
          "en": "The single codebase workflow with Flutter and practical Firebase projects helped me build my first client app in just 2 months!",
          "bn": "ফ্লাটার কোর্সের প্র্যাকটিক্যাল প্রজেক্ট ও ফায়ারবেস ইন্টিগ্রেশন শিখে মাত্র ২ মাসের মধ্যে আমি আমার প্রথম ক্লায়েন্ট অ্যাপ ডেলিভার করেছি।"
        },
        "date": "2026-08-18"
      }
    ]
  },
  {
    "id": "103",
    "slug": "diploma-ai-data-science",
    "title": {
      "en": "Diploma in AI & Data Science",
      "bn": "ডিপ্লোমা ইন এআই ও ডেটা সায়েন্স"
    },
    "subtitle": {
      "en": "Comprehensive 6-month diploma covering Python, Deep Learning, NLP, Computer Vision & Big Data",
      "bn": "৬ মাসের পূর্ণাঙ্গ ডিপ্লোমা কোর্স: ডিপ লার্নিং, এনএলপি, কম্পিউটার ভিশন ও বিগ ডেটা"
    },
    "category": "diploma",
    "categoryLabel": {
      "en": "Diploma Programs",
      "bn": "ডিপ্লোমা প্রোগ্রামস"
    },
    "badge": {
      "en": "DIPLOMA",
      "bn": "ডিপ্লোমা"
    },
    "mode": {
      "en": "Offline & Online",
      "bn": "অফলাইন ও অনলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 110,
    "enrolledCount": "140+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "18000৳",
    "rawFee": 18000,
    "originalFee": "28000৳",
    "duration": {
      "en": "6 Months",
      "bn": "৬ মাস"
    },
    "classesCount": {
      "en": "48 Classes",
      "bn": "৪৮ টি ক্লাস"
    },
    "image": "/images/course thumbnail/diploma in ai and data science.png",
    "videoUrl": "https://www.youtube.com/embed/nvWl7GkpHCU?autoplay=1",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Diploma%20in%20AI%20%26%20Data%20Science%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Dr. Kamrul Hasan",
      "designation": {
        "en": "Principal AI Scientist",
        "bn": "প্রিন্সিপাল এআই সায়েন্টিস্ট"
      },
      "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "AI researcher & industry consultant with 12+ years experience.",
        "bn": "১২+ বছরের অভিজ্ঞ এআই রিসার্চার ও ডেটা সায়েন্টিস্ট।"
      },
      "experience": "12+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "The ultimate 6-month industry diploma for aspiring Data Scientists, Machine Learning Engineers, and AI Researchers.",
      "bn": "ডেটা সায়েন্টিস্ট ও এআই ইঞ্জিনিয়ার ক্যারিয়ার গড়ার জন্য দেশের সবচেয়ে তথ্যবহুল ডিপ্লোমা প্রোগ্রাম।"
    },
    "fullDescription": {
      "en": "Master Python, Pandas, Scikit-learn, TensorFlow, PyTorch, LLMs, Neural Networks, and production deployment on Cloud.",
      "bn": "টেন্সরফ্লো, পাইটর্চ, এনএলপি এবং ক্লাউড এআই মডেল ডিপ্লয়মেন্ট শিখুন।"
    },
    "coreValues": [],
    "learningOutcomes": [],
    "curriculum": [],
    "includedItems": [],
    "reviews": []
  },
  {
    "id": "104",
    "slug": "diploma-cyber-security",
    "title": {
      "en": "Diploma in Cyber Security & Threat Intelligence",
      "bn": "ডিপ্লোমা ইন সাইবার সিকিউরিটি ও থ্রেট ইন্টেলিজেন্স"
    },
    "subtitle": {
      "en": "6-month intensive diploma covering SOC Operations, CEH, Pen Testing, Cloud Security & Malware Analysis",
      "bn": "৬ মাসের অ্যাডভান্সড ডিপ্লোমা: এসওসি অপারেশনস, সিইএইচ, পেন-টেস্টিং ও ক্লাউড সিকিউরিটি"
    },
    "category": "diploma",
    "categoryLabel": {
      "en": "Diploma Programs",
      "bn": "ডিপ্লোমা প্রোগ্রামস"
    },
    "badge": {
      "en": "DIPLOMA",
      "bn": "ডিপ্লোমা"
    },
    "mode": {
      "en": "Offline & Online",
      "bn": "অফলাইন ও অনলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 92,
    "enrolledCount": "115+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "18000৳",
    "rawFee": 18000,
    "originalFee": "28000৳",
    "duration": {
      "en": "6 Months",
      "bn": "৬ মাস"
    },
    "classesCount": {
      "en": "48 Classes",
      "bn": "৪৮ টি ক্লাস"
    },
    "image": "/images/course thumbnail/diploma in cyber security.png",
    "videoUrl": "https://www.youtube.com/embed/nvWl7GkpHCU?autoplay=1",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Diploma%20in%20Cyber%20Security%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Mehedi Hassan CISSP",
      "designation": {
        "en": "Chief Information Security Officer",
        "bn": "চিফ ইনফরমেশন সিকিউরিটি অফিসার"
      },
      "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "CISSP, CEH certified cyber defense consultant.",
        "bn": "সিআইএসএসপি ও সিইএইচ সার্টিফাইড সাইবার ডিফেন্স স্পেশালিস্ট।"
      },
      "experience": "11+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Comprehensive diploma designed to take you from security essentials to elite SOC analyst and penetration tester.",
      "bn": "সাইবার সিকিউরিটি প্রফেশনাল হিসেবে আন্তর্জাতিক ক্যারিয়ার গড়ার জন্য পূর্ণাঙ্গ ডিপ্লোমা কোর্স।"
    },
    "fullDescription": {
      "en": "Hands-on labs on Kali Linux, Wireshark, Splunk, Burp Suite, Network penetration testing, and Incident Response.",
      "bn": "কালি লিনাক্স, বার্প স্যুট, স্প্লাঙ্ক ও রিয়েল লাইভ অ্যাটাক-ডিফেন্স সিমুলেশন প্র্যাকটিস।"
    },
    "coreValues": [],
    "learningOutcomes": [],
    "curriculum": [],
    "includedItems": [],
    "reviews": []
  },
  {
    "id": "105",
    "slug": "product-management",
    "title": {
      "en": "Agile & Digital Product Management",
      "bn": "অ্যাজাইল ও ডিজিটাল প্রোডাক্ট ম্যানেজমেন্ট"
    },
    "subtitle": {
      "en": "Learn Product Strategy, Roadmapping, Scrum, User Research & Agile Leadership",
      "bn": "প্রোডাক্ট স্ট্র্যাটেজি, রোডম্যাপ, স্ক্রাম মেথডলজি ও অ্যাজাইল লিডারশিপ"
    },
    "category": "business",
    "categoryLabel": {
      "en": "Business & Management",
      "bn": "বিজনেস ও ম্যানেজমেন্ট"
    },
    "badge": {
      "en": "CERTIFIED",
      "bn": "সার্টিফাইড"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "online",
    "rating": 5,
    "ratingsCount": 52,
    "enrolledCount": "60+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "8000৳",
    "rawFee": 8000,
    "originalFee": "12000৳",
    "duration": {
      "en": "2.5 Months",
      "bn": "২.৫ মাস"
    },
    "classesCount": {
      "en": "20 Classes",
      "bn": "২০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/product managment.png",
    "videoUrl": "https://www.youtube.com/embed/nvWl7GkpHCU?autoplay=1",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Product%20Management%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Rezaul Karim",
      "designation": {
        "en": "VP of Product",
        "bn": "ভিপি অফ প্রোডাক্ট"
      },
      "image": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "Product executive leading fintech & SaaS platforms across Asia.",
        "bn": "ফ্যামিলি টেক ও সাস প্রোডাক্টে ১০+ বছরের এক্সপেরিয়েন্স।"
      },
      "experience": "10+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Transform into an impactful Product Manager capable of driving multi-million dollar tech products from idea to scale.",
      "bn": "টেক ইন্ডাস্ট্রিতে হাই-ডিমান্ড প্রোডাক্ট ম্যানেজার বা স্ক্রাম মাস্টার হিসেবে ক্যারিয়ার গড়ুন।"
    },
    "fullDescription": {
      "en": "Master PRD writing, wireframing, Jira/Confluence, user feedback loops, and metrics-driven product growth.",
      "bn": "পিআরডি রাইটিং, জিরা, ইউজার রিসার্চ ও প্রোডাক্ট গ্রোথ স্ট্র্যাটেজি।"
    },
    "coreValues": [],
    "learningOutcomes": [],
    "curriculum": [],
    "includedItems": [],
    "reviews": []
  },
  {
    "id": "106",
    "slug": "3d-animation-vfx",
    "title": {
      "en": "3D Animation, VFX & Motion Design",
      "bn": "থ্রিডি অ্যানিমেশন, ভিএফএক্স ও মোশন ডিজাইন"
    },
    "subtitle": {
      "en": "Master Blender, Maya, After Effects, 3D Character Modeling, Lighting & Rendering",
      "bn": "ব্লেন্ডার, মায়া, আফটার ইফেক্টস এবং ৩ডি ক্যারেক্টার মডেলিং ও রেন্ডারিং"
    },
    "category": "creative",
    "categoryLabel": {
      "en": "Creative Design",
      "bn": "ক্রিয়েটিভ ডিজাইন"
    },
    "badge": {
      "en": "CREATIVE",
      "bn": "ক্রিয়েটিভ"
    },
    "mode": {
      "en": "Offline",
      "bn": "অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 58,
    "enrolledCount": "70+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "10000৳",
    "rawFee": 10000,
    "originalFee": "16000৳",
    "duration": {
      "en": "3.5 Months",
      "bn": "৩.৫ মাস"
    },
    "classesCount": {
      "en": "28 Classes",
      "bn": "২৮ টি ক্লাস"
    },
    "image": "/images/course thumbnail/3d animation.jpg",
    "videoUrl": "https://www.youtube.com/embed/nvWl7GkpHCU?autoplay=1",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%223D%20Animation%20%26%20VFX%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Mahmudur Rahman",
      "designation": {
        "en": "Lead 3D & VFX Artist",
        "bn": "লিড ৩ডি ও ভিএফএক্স আর্টিস্ট"
      },
      "image": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "9+ years in international 3D animation, gaming assets & VFX pipelines.",
        "bn": "আন্তর্জাতিক গেমিং ও অ্যানিমেশন ইন্ডাস্ট্রিতে ৯+ বছরের অভিজ্ঞ আর্টিস্ট।"
      },
      "experience": "9+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "From 3D modeling fundamentals to photorealistic rendering, character rigging, and cinematic motion graphics.",
      "bn": "থ্রিডি মডেলিং, টেক্সচারিং, লাইটিং, রিগিং এবং সিনেমাটিক মোশন গ্রাফিক্সের প্রফেশনাল ট্রেনিং।"
    },
    "fullDescription": {
      "en": "Learn industry-standard Blender and Maya workflows for games, films, advertising, and architectural visualization.",
      "bn": "গেমিং, ফিল্ম ও আর্কিটেকচারাল ভিজ্যুয়ালাইজেশনের জন্য রিয়েল ৩ডি অ্যাসেট তৈরি শিখুন।"
    },
    "coreValues": [],
    "learningOutcomes": [],
    "curriculum": [],
    "includedItems": [],
    "reviews": []
  },
  {
    "id": "1035",
    "slug": "cpa-nexus-action-based-marketing",
    "title": {
      "en": "CPA Nexus: The Ultimate Guide to Action-Based Marketing",
      "bn": "সিপিএ নেক্সাস: দ্য আল্টিমেট গাইড টু অ্যাকশন-বেসড মার্কেটিং"
    },
    "subtitle": {
      "en": "Master CPA Fundamentals, High-Converting Funnels, TikTok/Meta/Google Ads & Campaign Optimization for Global Lead Gen",
      "bn": "সিপিএ মার্কেটিং, ল্যান্ডিং পেজ ফানেল, টিকটক, ফেসবুক ও গুগল অ্যাডস এবং প্র্যাকটিক্যাল ক্যাম্পেইন অপটিমাইজেশন"
    },
    "category": "marketing",
    "categoryLabel": {
      "en": "Digital Marketing & CPA",
      "bn": "ডিজিটাল মার্কেটিং ও সিপিএ"
    },
    "badge": {
      "en": "NEW & TRENDING",
      "bn": "নতুন ও ট্রেন্ডিং"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "online",
    "rating": 5,
    "ratingsCount": 84,
    "enrolledCount": "120+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "10,000৳",
    "rawFee": 10000,
    "originalFee": "16,000৳",
    "duration": {
      "en": "3.5 Months",
      "bn": "৩.৫ মাস"
    },
    "classesCount": {
      "en": "28 Live Classes + 10 Projects",
      "bn": "২৮ টি লাইভ ক্লাস + ১০ টি প্রজেক্ট"
    },
    "image": "/images/cpa-nexus-banner.jpg",
    "videoUrl": "https://www.youtube.com/embed/nvWl7GkpHCU?autoplay=1",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22CPA%20Nexus%3A%20The%20Ultimate%20Guide%20to%20Action-Based%20Marketing%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Tariqul Islam",
      "designation": {
        "en": "Senior Performance Marketer & CPA Media Buyer",
        "bn": "সিনিয়র পারফরম্যান্স মার্কেটার ও সিপিএ মিডিয়া বায়ার"
      },
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "8+ years managing $500K+ in global CPA and performance marketing ad spend across Meta, TikTok, and Native ad networks.",
        "bn": "ইউএসএ ও ইউরোপের সিপিএ নেটওয়ার্কে ৮+ বছরের অভিজ্ঞতা সম্পন্ন পারফরম্যান্স মিডিয়া বায়ার।"
      },
      "experience": "8+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "CPA Nexus is an all-in-one mastery blueprint designed to teach you profitable Action-Based Marketing from scratch to advanced multi-channel paid traffic scaling. You will learn everything from network approvals, high-converting bridge page builders, laser-targeted TikTok/Meta/Google ad funnels, to live campaign tracking and real project executions.",
      "bn": "সিপিএ নেক্সাস হলো অ্যাকশন-বেসড মার্কেটিংয়ের একটি পূর্ণাঙ্গ গাইড। সিপিএ একাউন্ট তৈরি ও অ্যাপ্রুভাল থেকে শুরু করে হাই-কনভার্টিং ল্যান্ডিং পেজ তৈরি, ফেসবুক, টিকটক, গুগল ও নেটিভ অ্যাডস চালানো এবং লাইভ প্রজেক্টের মাধ্যমে প্রফিটেবল ক্যাম্পেইন পরিচালনা শিখবেন।"
    },
    "fullDescription": {
      "en": "Action-Based CPA Marketing is one of the highest-paying monetization avenues in digital marketing. In this intensive course, you will master CPA Network approvals (MaxBounty, CPALead, OGAds, etc.), funnel building, high-converting creative hooks, Tier-1 audience targeting, tracking tools (BeMob, Voluum), and long-term email automation strategies.",
      "bn": "সিপিএ মার্কেটিংয়ে সঠিক অফার নির্বাচন এবং প্রফিটেবল ট্রাফিক ক্যাম্পেইন রান করাই সফলতার মূল চাবিকাঠি। এই কোর্সে থিওরির পাশাপাশি সম্পূর্ণ প্র্যাকটিক্যাল প্রজেক্টে বাজাট দিয়ে লাইভ অ্যাড রান এবং কনভার্সন অপটিমাইজেশন শেখানো হবে।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "100% Practical Campaigns",
          "bn": "১০০% প্র্যাকটিক্যাল ক্যাম্পেইন"
        },
        "desc": {
          "en": "Launch live ad campaigns with real budgets and analyze real-time conversions.",
          "bn": "লাইভ বাজাট দিয়ে ক্লাসে সরাসরি লাইভ ক্যাম্পেইন রান ও অপটিমাইজেশন।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Tier-1 Traffic Mastery",
          "bn": "টিয়ার-১ ট্রাফিক স্ট্র্যাটেজি"
        },
        "desc": {
          "en": "Master TikTok, Google, Meta & Native Ads to target USA, UK, CA, and AU traffic.",
          "bn": "ইউএসএ, ইউকে ও কানাডার হাই-কনভার্টিং অডিয়েন্স টার্গেটিং মেথড।"
        },
        "icon": "TrendingUp"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Direct CPA Network Approval",
          "bn": "সিপিএ অ্যাকাউন্ট অ্যাপ্রুভাল সাপোর্ট"
        },
        "desc": {
          "en": "Step-by-step guidance to get approved in top global CPA networks.",
          "bn": "টপ গ্লোবাল সিপিএ নেটওয়ার্কগুলোতে সহজে অ্যাপ্রুভাল পাওয়ার সাপোর্ট।"
        },
        "icon": "CheckCircle2"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master CPA Account Creation, Approval & Offer Selection Strategies",
        "bn": "CPA অ্যাকাউন্ট, অফার নির্বাচন ও প্রফিটেবল স্ট্র্যাটেজি"
      },
      {
        "en": "Build High-Converting Bridge & Landing Pages with Custom Domains",
        "bn": "ওয়েবসাইট সেটআপ ও হাই-কনভার্টিং ল্যান্ডিং পেজ তৈরি"
      },
      {
        "en": "Run Profitable Facebook, Instagram & TikTok Paid Ad Campaigns",
        "bn": "Facebook, Instagram ও TikTok Ads দিয়ে USA Lead Generation"
      },
      {
        "en": "Deploy High Buyer-Intent Google Search & YouTube Video Ads",
        "bn": "Google & YouTube Ads — Buyer Intent Keyword Targeting ও Video Ads"
      },
      {
        "en": "Build Automated High-Inbox-Delivery Email Marketing Funnels",
        "bn": "Email Marketing — Email Funnel ও Marketing Strategy"
      },
      {
        "en": "Harness Pinterest, Push Notifications & Native Arbitrage Traffic",
        "bn": "Pinterest, Push Notification & Native Ads — বিকল্প Traffic Strategy"
      },
      {
        "en": "Track & Optimize Conversion Metrics with Professional Trackers",
        "bn": "CPA Campaign Optimization — Traffic, Conversion ও Campaign Optimization"
      },
      {
        "en": "Launch Real-World CPA Projects with End-to-End Execution",
        "bn": "বাস্তব প্রজেক্টের মাধ্যমে লাইভ CPA Marketing ক্যাম্পেইন শেখানো"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: CPA Marketing Fundamentals",
          "bn": "মডিউল ১: CPA মার্কেটিং ফান্ডামেন্টালস"
        },
        "duration": {
          "en": "2 Classes • 4 Hours",
          "bn": "২ টি ক্লাস • ৪ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "CPA Account Creation & Approval Secrets in Top Networks",
            "bn": "CPA অ্যাকাউন্ট তৈরি ও টপ নেটওয়ার্কে অ্যাপ্রুভাল নেওয়ার সিক্রেট টেকনিক"
          },
          {
            "en": "Marketplace Analysis & High-Converting Offer Selection",
            "bn": "মার্কেটপ্লেস অ্যানালাইসিস ও হাই-কনভার্টিং অফার নির্বাচন"
          },
          {
            "en": "Niche Research & Profit Strategy Blueprint",
            "bn": "নিশ রিসার্চ ও হাই-আরওআই স্ট্র্যাটেজি প্ল্যানিং"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Domain, Hosting & Landing Page Builder",
          "bn": "মডিউল ২: Domain, Hosting ও Landing Page"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Custom Domain, Fast Hosting & Cloudflare SSL Setup",
            "bn": "ওয়েবসাইট ও ডোমেন-হোস্টিং প্রফেশনাল সেটআপ"
          },
          {
            "en": "High-Converting Bridge Page & Funnel Design",
            "bn": "হাই-কনভার্টিং ল্যান্ডিং পেজ ও ব্রিজ পেজ তৈরি"
          },
          {
            "en": "Lead Capture Forms, Countdown Timers & Call-to-Action Triggers",
            "bn": "লিড ক্যাপচার ফর্ম ও হাই-কনভার্টিং সিটিএ ট্রিগার সেটআপ"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Facebook & Instagram Ads Mastery",
          "bn": "মডিউল ৩: Facebook & Instagram Ads"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Meta Ads Manager, Conversions API & Pixel Integration",
            "bn": "মেটা অ্যাডস ম্যানেজার, পিক্সেল ও কনভার্সন এপিআই সেটআপ"
          },
          {
            "en": "Audience Research, Laser Targeting & Lookalike Scaling",
            "bn": "লেজার টার্গেটেড অডিয়েন্স রিসার্চ ও পেইড ক্যাম্পেইন পরিচালনা"
          },
          {
            "en": "Ad Copywriting, Creative Hooks & Compliance Guidelines",
            "bn": "অ্যাড কপিরাইটিং, ক্রিয়েটিভ হুক ও অ্যাকাউন্ট সেফটি পলিসি"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: TikTok Ads — USA Lead Generation",
          "bn": "মডিউল ৪: TikTok Ads — USA Lead Generation"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Agency Ad Account Setup & USA / Tier-1 Geography Targeting",
            "bn": "ইউএসএ ও টিয়ার-১ দেশের এজেন্সি অ্যাড অ্যাকাউন্ট সেটআপ"
          },
          {
            "en": "High-Engagement UGC & Video Creative Production",
            "bn": "হাই-কনভার্টিং ক্রিয়েটিভ ভিডিও তৈরি ও ট্রেন্ডিং অডিও মেথড"
          },
          {
            "en": "Low CPL Lead Generation & Viral Bidding Strategies",
            "bn": "কম খরচে হাই-কোয়ালিটি ইউএসএ লিড জেনারেশন স্ট্র্যাটেজি"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: Google & YouTube Ads Funnel",
          "bn": "মডিউল ৫: Google & YouTube Ads"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "High Buyer-Intent Keyword Research & Google Search Campaigns",
            "bn": "Buyer Intent Keyword Targeting ও গুগল সার্চ অ্যাডস ক্যাম্পেইন"
          },
          {
            "en": "YouTube In-Stream & Discovery Video Ad Campaigns",
            "bn": "ইউটিউব ইন-স্ট্রিম ভিডিও অ্যাড তৈরি ও টার্গেটিং"
          },
          {
            "en": "Conversion Tracking, Quality Score & Negative Keyword Filtering",
            "bn": "কনভার্সন ট্র্যাকিং ও নেগেটিভ কিওয়ার্ড অপটিমাইজেশন"
          }
        ]
      },
      {
        "moduleNumber": 6,
        "title": {
          "en": "Module 6: High-Converting Email Marketing & Funnels",
          "bn": "মডিউল ৬: Email Marketing & Funnel Strategy"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Lead Magnet Creation & Automated Opt-in Funnels",
            "bn": "লিড ম্যাগনেট তৈরি ও ইমেইল কালেক্ট করার অটোমেশন"
          },
          {
            "en": "Autoresponder Setup, Drip Campaigns & High Inbox Delivery",
            "bn": "অটোরেসপন্ডার ও ড্রিপ ইমেইল সিকোয়েন্স সেটআপ"
          },
          {
            "en": "Long-term Recurring Monetization Strategies",
            "bn": "ইমেইল ফানেলের মাধ্যমে দীর্ঘমেয়াদী রিকারিং আর্নিং স্ট্র্যাটেজি"
          }
        ]
      },
      {
        "moduleNumber": 7,
        "title": {
          "en": "Module 7: Pinterest, Push Notifications & Native Ads",
          "bn": "মডিউল ৭: Pinterest, Push Notifications & Native Ads"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Alternative High-Volume Traffic Generation Strategies",
            "bn": "বিকল্প Traffic Generation Strategy ও আরবিট্রেজ মেথড"
          },
          {
            "en": "Pinterest Viral Idea Pins, Boards & Business Marketing",
            "bn": "পিন্টারেস্ট ভাইরাল পিন ও অরগানিক ট্রাফিক ড্রাইভ"
          },
          {
            "en": "Taboola/Outbrain Native Ads & Push Notification Networks",
            "bn": "পুশ নেটওয়ার্ক ও নেটিভ বিজ্ঞাপন ক্যাম্পেইন সেটআপ"
          }
        ]
      },
      {
        "moduleNumber": 8,
        "title": {
          "en": "Module 8: CPA Campaign Tracking & Optimization",
          "bn": "মডিউল ৮: CPA Campaign Optimization"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Click Trackers (BeMob, Voluum, RedTrack) Complete Setup",
            "bn": "ক্লিক ট্র্যাকিং টুলস সেটআপ ও পোস্টব্যাক ইউআরএল ইন্টিগ্রেশন"
          },
          {
            "en": "Traffic, Conversion & Landing Page Split-Testing (A/B Testing)",
            "bn": "Traffic, Conversion ও ল্যান্ডিং পেজ স্প্লিট-টেস্টিং"
          },
          {
            "en": "Killing Loser Ads & Scaling Winning Campaigns for 300%+ ROI",
            "bn": "লস ক্যাম্পেইন বাদ দিয়ে উইনার অ্যাড স্কেলিং ও আরওআই বৃদ্ধি"
          }
        ]
      },
      {
        "moduleNumber": 9,
        "title": {
          "en": "Module 9: Free & Paid Traffic Strategies",
          "bn": "মডিউল ৯: Free & Paid Traffic Strategies"
        },
        "duration": {
          "en": "2 Classes • 4 Hours",
          "bn": "২ টি ক্লাস • ৪ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Targeted Free Organic Traffic Generation Techniques",
            "bn": "বিভিন্ন মাধ্যমে Targeted Free Traffic সংগ্রহ করার উপায়"
          },
          {
            "en": "Balancing Paid Ad Spend with High-ROI Free Traffic Channels",
            "bn": "পেইড ট্রাফিকের সাথে ফ্রি ট্রাফিকের সঠিক সমন্বয়"
          },
          {
            "en": "Ad Account Ban Protection & Safe-Page Cloaking Basics",
            "bn": "অ্যাকাউন্ট ব্যান প্রটেকশন ও পলিসি গাইডলাইন"
          }
        ]
      },
      {
        "moduleNumber": 10,
        "title": {
          "en": "Module 10: Practical Campaign Setup & Live Projects",
          "bn": "মডিউল ১০: Practical Campaign Setup & Case Studies"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Hands-on Live Campaign Launch with Real Ad Budget",
            "bn": "বাস্তব প্রজেক্টের মাধ্যমে লাইভ CPA Marketing ক্যাম্পেইন রান"
          },
          {
            "en": "Real-time Payout Proofs, Dashboard Analytics & Revenue Withdrawal",
            "bn": "লাইভ পে-আউট ও কনভার্সন অ্যানালাইসিস এবং উইথড্র মেথড"
          },
          {
            "en": "Direct Advertiser Deals & Freelance Marketplace Roadmap",
            "bn": "ডিরেক্ট ক্লায়েন্ট হান্টিং ও ফ্রিল্যান্স ক্যারিয়ার রোডম্যাপ"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "28 Live Interactive Classes & Screen Recordings",
        "bn": "২৮ টি লাইভ ক্লাস ও ক্লাস রেকর্ডিং"
      },
      {
        "en": "10 Hands-on Live Campaign Projects & Case Studies",
        "bn": "১০ টি বাস্তব প্রজেক্ট ও লাইভ ক্যাম্পেইন কেস স্টাডি"
      },
      {
        "en": "Ready-Made High-Converting Landing Page Templates",
        "bn": "তৈরি করা হাই-কনভার্টিং ল্যান্ডিং পেজ টেমপ্লেট"
      },
      {
        "en": "Dedicated Lifetime Community & Ad Spend Mentorship",
        "bn": "আজীবন মেন্টরশিপ সাপোর্ট ও এক্সক্লুসিভ কমিউনিটি এক্সেস"
      },
      {
        "en": "Industry Recognized CPA Marketing Certificate",
        "bn": "ইন্ডাস্ট্রি রিকগনাইজড সার্টিফিকেট"
      }
    ],
    "reviews": [
      {
        "id": "r-cpa-1",
        "name": "Tanvir Ahmed",
        "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "CPA Media Buyer",
          "bn": "সিপিএ মিডিয়া বায়ার"
        },
        "rating": 5,
        "comment": {
          "en": "The TikTok & Meta ads funnel strategy in this course took my CPA campaigns from break-even to generating $120/day within 3 weeks!",
          "bn": "সিপিএ নেক্সাস কোর্সের টিকটক ও মেটা অ্যাডস ফানেল স্ট্র্যাটেজি অনুসরণ করে ৩ সপ্তাহের মাথায় আমি প্রতিদিন চমৎকার প্রফিট করতে পারছি।"
        },
        "date": "2026-08-15"
      }
    ]
  },
  {
    "id": "1033",
    "slug": "ai-prompt",
    "title": {
      "en": "Generative AI & Prompt Engineering",
      "bn": "জেনারেটিভ এআই ও প্রম্পট ইঞ্জিনিয়ারিং"
    },
    "subtitle": {
      "en": "Master ChatGPT, Claude, Gemini & Midjourney for high-speed workflow & business automation",
      "bn": "চ্যাটজিপিটি, ক্লদ, জেমিনি এবং মিডজার্নি ব্যবহারের মাধ্যমে ক্যারিয়ার ও কাজের গতি ১০ গুণ বাড়ান"
    },
    "category": "ai",
    "categoryLabel": {
      "en": "AI & Automation",
      "bn": "এআই ও অটোমেশন"
    },
    "badge": {
      "en": "BEST SELLER",
      "bn": "বেস্ট সেলার"
    },
    "mode": {
      "en": "Offline",
      "bn": "অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 60,
    "enrolledCount": "50+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "8000৳",
    "rawFee": 8000,
    "originalFee": "12000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "24 Classes",
      "bn": "২৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/Generative ai and prompt eng.jpg",
    "videoUrl": "https://www.youtube.com/embed/2eWuYf-keXI?autoplay=1",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Generative%20AI%20%26%20Prompt%20Engineering%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Ashraf Hossain",
      "designation": {
        "en": "Lead AI Architect & Prompt Specialist",
        "bn": "লিড এআই আর্কিটেক্ট ও প্রম্পট স্পেশালিস্ট"
      },
      "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "10+ years of enterprise AI engineering experience across global products.",
        "bn": "ইউএসএ ও ইউরোপের সফটওয়্যার ইন্ডাস্ট্রিতে ১০+ বছরের অভিজ্ঞতা সম্পন্ন সিনিয়র এআই আর্কিটেক্ট।"
      },
      "experience": "10+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "This Generative AI & Prompt Engineering course teaches learners to master modern AI models (ChatGPT, Midjourney, Claude, Gemini). Learn prompt construction, content automation, AI coding pairs, and custom GPT builders.",
      "bn": "এই জেনারেটিভ এআই এবং প্রম্পট ইঞ্জিনিয়ারিং কোর্সটি আপনাকে চ্যাটজিপিটি, ক্লদ, জেমিনি ও মিডজার্নির মতো আধুনিক এআই টুলস আয়ত্ত করতে সাহায্য করবে। প্রম্পট আর্কিটেকচার থেকে শুরু করে কোড জেনারেশন ও কন্টেন্ট অটোমেশন শিখবেন।"
    },
    "fullDescription": {
      "en": "Generative AI is revolutionizing tech and business workflows. In this course, you will learn the exact prompting strategies to write production code, create marketing collateral, build automated workflows, and generate design assets.",
      "bn": "জেনারেটিভ এআই বর্তমানে বিশ্বজুড়ে কাজের ধরন বদলে দিচ্ছে। এই কোর্সে লার্জ ল্যাঙ্গুয়েজ মডেল গাইড করা, কাস্টম এআই এজেন্ট তৈরি এবং প্রম্পট ইঞ্জিনিয়ারিং দিয়ে নিজের ভ্যালু বাড়ানো শিখবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "100% Hands-on Practice",
          "bn": "১০০% প্র্যাকটিক্যাল ট্রেনিং"
        },
        "desc": {
          "en": "Live exercises with real AI tools in every session.",
          "bn": "লাইভ ক্লাসে বাস্তবমুখী টুলস নিয়ে কাজ করার সুবিধা।"
        },
        "icon": "CheckCircle2"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master Zero-Shot, Few-Shot, and Chain-of-Thought Prompting",
        "bn": "জিরো-শট, ফিউ-শট এবং চেইন-অব-থট প্রম্পটিং আয়ত্ত করা"
      },
      {
        "en": "Build Custom GPT Assistants & Automation Workflows",
        "bn": "কাস্টম জিটিপি চ্যাটবট ও এআই অটোমেশন তৈরি"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Prompt Engineering Foundations",
          "bn": "মডিউল ১: প্রম্পট ইঞ্জিনিয়ারিং বেসিক্স"
        },
        "duration": {
          "en": "6 Classes",
          "bn": "৬ টি ক্লাস"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "LLM Architectures & System Prompts",
            "bn": "এলএলএম আর্কিটেকচার ও সিস্টেম প্রম্পট"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Hands-on Live Classes & Workshops",
        "bn": "লাইভ ক্লাস ও হ্যান্ডস-অন প্র্যাকটিস"
      },
      {
        "en": "Certificate of Completion",
        "bn": "সার্টিফিকেট অফ কমপ্লিশন"
      }
    ],
    "reviews": []
  },
  {
    "id": "135",
    "slug": "ai-agentic",
    "title": {
      "en": "Agentic AI & Business Automation",
      "bn": "এজেন্টিক এআই ও বিজনেস অটোমেশন"
    },
    "subtitle": {
      "en": "Build autonomous multi-agent AI systems, LangGraph workflows & enterprise RAG pipelines",
      "bn": "অটোনোমাস এআই এজেন্টস, টুল কলিং ও এন্টারপ্রাইজ অটোমেশন ফ্রেমওয়ার্ক তৈরি শিখুন"
    },
    "category": "ai",
    "categoryLabel": {
      "en": "AI & Automation",
      "bn": "এআই ও অটোমেশন"
    },
    "badge": {
      "en": "FEATURED",
      "bn": "ফিচার্ড"
    },
    "mode": {
      "en": "Online",
      "bn": "অনলাইন"
    },
    "modeType": "online",
    "rating": 5,
    "ratingsCount": 45,
    "enrolledCount": "50+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "15000৳",
    "rawFee": 15000,
    "originalFee": "20000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "24 Classes",
      "bn": "২৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/agentic ai & business.png",
    "videoUrl": "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1791500222217262%2F&show_text=0",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Agentic%20AI%20%26%20Business%20Automation%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Ashraf Hossain",
      "designation": {
        "en": "Lead AI Engineer",
        "bn": "লিড এআই ইঞ্জিনিয়ার"
      },
      "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "Specializing in Autonomous Agents & Enterprise RAG.",
        "bn": "অটোনোমাস এআই ও এন্টারপ্রাইজ অটোমেশন স্পেশালিস্ট।"
      },
      "experience": "10+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "In 2026, AI is a must-learn skill for everyone—job holders, students, and freelancers alike. Learn to harness AI as a powerful superpower: AI content creation, no-code & low-code business automation, autonomous multi-agent systems (CrewAI, LangGraph), enterprise CRM integration, and online income & freelancing.",
      "bn": "চাকরিজীবী হন, শিক্ষার্থী হন, বা ঘরে বসে income করতে চান—২০২৬ সালে AI শেখাটা এখন সবার জন্য must! Meta, Google, Amazon যেখানে কর্মী ছাটাই করছে এআই-এর কারণে, সেখানে এই পরিবর্তন আপনার জন্য সবচেয়ে বড় ক্যারিয়ার সুযোগ হতে পারে যদি আপনি AI-কে সঠিক tool হিসেবে ব্যবহার করতে পারেন। আমাদের 'AI Content Creation & Business Mastery' কোর্সে শিখুন AI দিয়ে content তৈরি, Business automation এবং Freelancing ও online income।"
    },
    "fullDescription": {
      "en": "Comprehensive Masterclass in Agentic AI and Business Workflow Automation. Master prompt engineering, synthetic media creation, Make.com / Zapier / n8n pipelines, autonomous multi-agent architectures, function calling, vector database RAG search, and building a high-ticket AI automation agency (AAA).",
      "bn": "বিশ্বজুড়ে টেক ইন্ডাস্ট্রিতে এখন সবচেয়ে বড় বিপ্লব হচ্ছে এজেন্টিক এআই ও বিজনেস অটোমেশন। এই কোর্সে আপনি শিখবেন কীভাবে জটিল বিজনেস প্রসেস অটোমেট করতে হয়, স্বয়ংক্রিয় এআই এজেন্ট তৈরি করে ডেটাবেজ ও এপিআই কানেক্ট করতে হয় এবং দেশি-বিদেশি ক্লায়েন্টদের এআই কনসাল্টিং সার্ভিস দিয়ে ঘরে বসে হাই-টিকিট ইনকাম করতে হয়।"
    },
    "coreValues": [
      {
        "id": "cv-ai-1",
        "title": {
          "en": "Autonomous Multi-Agent Systems",
          "bn": "অটোনোমাস মাল্টি-এজেন্ট সিস্টেম"
        },
        "desc": {
          "en": "Build self-reasoning AI agents that can browse the web, run tools, and execute workflows.",
          "bn": "স্বয়ংক্রিয়ভাবে সিদ্ধান্ত গ্রহণ ও কাজ সম্পন্ন করতে সক্ষম এআই এজেন্ট তৈরি।"
        },
        "icon": "Sparkles"
      },
      {
        "id": "cv-ai-2",
        "title": {
          "en": "No-Code & Low-Code Automation",
          "bn": "বিজনেস অটোমেশন ওয়ার্কফ্লো"
        },
        "desc": {
          "en": "Automate real business pipelines with Make.com, Zapier, and self-hosted n8n.",
          "bn": "Make, Zapier ও n8n দিয়ে কোম্পানির পুরো বিজনেস প্রসেস অটোমেশন।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv-ai-3",
        "title": {
          "en": "AI Agency & Online Income Blueprint",
          "bn": "এআই এজেন্সি ও ফ্রিল্যান্সিং"
        },
        "desc": {
          "en": "Monetize AI skills, offer AI consulting, and land high-ticket international clients.",
          "bn": "এআই স্কিল কাজে লাগিয়ে ফ্রিল্যান্সিং ও অনলাইন ইনকামের প্র্যাকটিক্যাল গাইডলাইন।"
        },
        "icon": "TrendingUp"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master Large Language Model (LLM) Foundations, Context Windows & Advanced Prompt Engineering",
        "bn": "লার্জ ল্যাঙ্গুয়েজ মডেলস (LLMs) ও অ্যাডভান্সড প্রম্পট ইঞ্জিনিয়ারিং"
      },
      {
        "en": "AI Content Creation Suite: Automated Copywriting, Synthetic Voiceovers & AI Video Production",
        "bn": "এআই দিয়ে হাই-কোয়ালিটি কনটেন্ট, ভয়েসওভার ও ভিডিও তৈরি"
      },
      {
        "en": "No-Code & Low-Code Business Workflow Automation with Make.com, Zapier & n8n",
        "bn": "Make.com, Zapier ও n8n দিয়ে বিজনেস ওয়ার্কফ্লো অটোমেশন"
      },
      {
        "en": "Autonomous Multi-Agent Architecture with CrewAI, LangChain & LangGraph",
        "bn": "CrewAI ও LangGraph ফ্রেমওয়ার্কে অটোনোমাস মাল্টি-এজেন্ট তৈরি"
      },
      {
        "en": "Tool Calling, Custom Function Execution & Enterprise Vector RAG Pipelines",
        "bn": "এআই টুল কলিং, এপিআই অর্কেস্ট্রেশন ও ভেক্টর ডাটাবেজ RAG পাইপলাইন"
      },
      {
        "en": "Autonomous WhatsApp, Messenger & Web Chatbots with Live CRM Integration",
        "bn": "হোয়াটসঅ্যাপ ও সোশ্যাল মিডিয়া অটোমেটেড কাস্টমার সাপোর্ট চ্যাটবট"
      },
      {
        "en": "Multi-Step Automated Sales Pipelines, Lead Scoring & Cold Outreach Agents",
        "bn": "অটোমেটেড সেলস পাইপলাইন ও লিড কোয়ালিফিকেশন সিস্টেম"
      },
      {
        "en": "Launch an AI Automation Agency (AAA), High-Ticket Pricing & Freelance Roadmap",
        "bn": "এআই অটোমেশন এজেন্সি (AAA) গঠন, প্রাইসিং ও আন্তর্জাতিক ক্লায়েন্ট হান্টিং"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Generative AI, LLMs & Advanced Prompt Engineering",
          "bn": "মডিউল ১: Generative AI, LLMs ও প্রম্পট ইঞ্জিনিয়ারিং"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Generative AI Architecture: GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro & DeepSeek",
            "bn": "আধুনিক এআই মডেলস পরিচিতি ও তাদের কার্যপদ্ধতি"
          },
          {
            "en": "System Prompts, Few-Shot Prompting, Chain-of-Thought & Tree-of-Thoughts",
            "bn": "চেইন-অফ-থট ও অ্যাডভান্সড প্রম্পট ফ্রেমওয়ার্কস"
          },
          {
            "en": "Context Windows, Token Economics & Optimizing API Costs",
            "bn": "কনটেক্সট উইন্ডো ও এপিআই টোকেন অপটিমাইজেশন"
          },
          {
            "en": "Building Custom GPTs & Knowledge-Base Enabled Assistants",
            "bn": "কাস্টম জিপিটি ও নলেজ-বেসড এআই অ্যাসিস্ট্যান্ট তৈরি"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: AI Content Creation Suite (Text, Visuals, Voice & Video)",
          "bn": "মডিউল ২: AI Content Creation Suite"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Automated SEO Blog, Social Media & Copywriting Engines with AI",
            "bn": "এআই দিয়ে অটোমেটেড কপিরাইটিং ও ব্লগ জেনারেশন"
          },
          {
            "en": "Commercial Visual Generation with Midjourney v6, DALL-E & Ideogram",
            "bn": "মিডজার্নি ও এআই ইমেজ টুলস দিয়ে কমার্শিয়াল ভিজ্যুয়াল তৈরি"
          },
          {
            "en": "Hyper-Realistic Synthetic Voice Cloning with ElevenLabs",
            "bn": "ইলেভেনল্যাবস দিয়ে রিয়েলিস্টিক ভয়েস ক্লোনিং ও ভয়েসওভার"
          },
          {
            "en": "AI Video Production with Runway Gen-3, Luma Dream Machine & HeyGen Avatars",
            "bn": "এআই ভিডিও জেনারেশন ও ডিজিটাল অবতার ক্রিয়েশন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Business Workflow Automation (Make.com, Zapier & n8n)",
          "bn": "মডিউল ৩: Make.com, Zapier ও n8n দিয়ে বিজনেস অটোমেশন"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Fundamentals of Business Process Automation & API Webhooks",
            "bn": "ওয়েবহুকস ও এপিআই আর্কিটেকচার ফান্ডামেন্টালস"
          },
          {
            "en": "Make.com (Integromat) Complex Multi-Branch Automation Scenarios",
            "bn": "Make.com দিয়ে মাল্টি-স্টেপ ডাটা রাউটিং ও অটোমেশন"
          },
          {
            "en": "Self-Hosting n8n Workflows with Docker on VPS for Zero Recurring Tool Costs",
            "bn": "n8n অটোমেশন ইঞ্জিন নিজস্ব সার্ভারে সেটআপ ও পরিচালনা"
          },
          {
            "en": "Connecting Google Sheets, Airtable, Notion, Gmail & Slack Automations",
            "bn": "গুগল শিটস, এয়ারটেবিল, নোশন ও স্ল্যাক সিঙ্ক অটোমেশন"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: Autonomous Multi-Agent Architectures (CrewAI & LangGraph)",
          "bn": "মডিউল ৪: Autonomous AI Agents (CrewAI ও LangGraph)"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Agent Architecture: Roles, Goals, Backstories, Tools & Memory",
            "bn": "এজেন্টিক এআই আর্কিটেকচার ও রোল-বেসড কনফিগারেশন"
          },
          {
            "en": "CrewAI Multi-Agent Collaboration (Researcher, Writer, Quality Reviewer)",
            "bn": "CrewAI দিয়ে একসাথে একাধিক এজেন্টের সমন্বিত কাজ পরিচালনা"
          },
          {
            "en": "LangGraph State Machines for Looping & Human-in-the-Loop Approval Workflows",
            "bn": "ল্যাংগ্রাফ স্টেট মেশিন ও হিউম্যান-ইন-দ্য-লুপ অ্যাপ্রুভাল"
          },
          {
            "en": "Autonomous Web Scraping & Market Intelligence Gathering Agents",
            "bn": "স্বয়ংক্রিয় ওয়েব স্ক্র্যাপিং ও রিসার্চ এজেন্ট তৈরি"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: Tool Calling, Function Execution & Enterprise Vector RAG",
          "bn": "মডিউল ৫: Function Calling ও Vector Database RAG"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "OpenAI & Anthropic Function Calling for Real-Time Tool Execution",
            "bn": "এআই ফাংশন কলিং ও এক্সটার্নাল এপিআই এক্সিকিউশন"
          },
          {
            "en": "Text Embeddings, Semantic Search & Chunking Strategies",
            "bn": "ভেক্টর এমবেডিংস ও সিম্যান্টিক সার্চ অপটিমাইজেশন"
          },
          {
            "en": "Vector Databases: Pinecone, ChromaDB & Supabase pgvector Setup",
            "bn": "ভেক্টর ডাটাবেজ সেটআপ ও নলেজ স্টোরেজ"
          },
          {
            "en": "Building Enterprise Retrieval-Augmented Generation (RAG) Systems",
            "bn": "কোম্পানির নিজস্ব ডকুমেন্টের ওপর কাস্টম RAG সিস্টেম তৈরি"
          }
        ]
      },
      {
        "moduleNumber": 6,
        "title": {
          "en": "Module 6: AI Customer Support Chatbots & CRM Automation",
          "bn": "মডিউল ৬: AI কাস্টমার সাপোর্ট ও CRM অটোমেশন"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Building WhatsApp & Messenger AI Chatbots with ManyChat & Open Source APIs",
            "bn": "হোয়াটসঅ্যাপ ও ফেসবুক মেসেঞ্জার এআই চ্যাটবট তৈরি"
          },
          {
            "en": "Knowledge Base Grounding to Prevent Hallucinations in Customer Service",
            "bn": "নির্ভুল তথ্য প্রদানের জন্য নলেজ বেস ফিল্টারিং"
          },
          {
            "en": "HubSpot, Zoho & GoHighLevel (GHL) CRM Integration",
            "bn": "সিআরএম সফটওয়্যারের সাথে এআই লিড ক্যাপচার ইন্টিগ্রেশন"
          },
          {
            "en": "Automated Ticket Creation, Sentiment Analysis & Smart Escalation",
            "bn": "সাপোর্ট টিকিট তৈরি ও জটিল বিষয়ে মানুষের কাছে হ্যান্ডওভার"
          }
        ]
      },
      {
        "moduleNumber": 7,
        "title": {
          "en": "Module 7: Multi-Step Sales & Autonomous Marketing Pipelines",
          "bn": "মডিউল ৭: সেলস পাইপলাইন ও মার্কেটিং অটোমেশন"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Autonomous Lead Enrichment from LinkedIn & Company Websites",
            "bn": "কোম্পানি ওয়েবসাইট থেকে অটোমেটিক লিড ইনফরমেশন সংগ্রহ"
          },
          {
            "en": "Hyper-Personalized Cold Email & Video Outreach with AI",
            "bn": "পার্সোনালাইজড কোল্ড ইমেইল ও ভিডিও মেসেজ তৈরি"
          },
          {
            "en": "Automated Social Media Content Generation, Approval & Auto-Posting",
            "bn": "সোশ্যাল মিডিয়ায় স্বয়ংক্রিয় পোস্ট শিডিউলিং এজেন্ট"
          },
          {
            "en": "End-to-End AI Driven E-Commerce & Lead Generation System",
            "bn": "সম্পূর্ণ স্বয়ংক্রিয় ই-কমার্স ও সেলস অটোমেশন সিস্টেম"
          }
        ]
      },
      {
        "moduleNumber": 8,
        "title": {
          "en": "Module 8: AI Automation Agency (AAA) Blueprint & High-Ticket Income",
          "bn": "মডিউল ৮: AI এজেন্সি ব্লুপ্রিন্ট ও অনলাইন ইনকাম"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Structuring High-Ticket AI Automation Services ($1,500 - $5,000 / Client)",
            "bn": "এআই কনসাল্টিং সার্ভিস প্যাকেজ ও প্রাইসিং মডেল"
          },
          {
            "en": "Creating Proof of Concept (PoC) Demos for Prospective Clients",
            "bn": "ক্লায়েন্টদের দেখানোর জন্য লাইভ প্রজেক্ট ডেমো তৈরি"
          },
          {
            "en": "Upwork & Direct LinkedIn Outreach for AI Automation Contracts",
            "bn": "আপওয়ার্ক ও লিঙ্কডইনে এআই কাজের ক্লায়েন্ট হান্টিং"
          },
          {
            "en": "Managing Client Delivery, Retainer Contracts & Agency Scaling Roadmap",
            "bn": "ক্লায়েন্ট ম্যানেজমেন্ট ও রিকারিং মান্থলি ইনকাম মডেল"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "24 Live Interactive Classes & Screen Recordings",
        "bn": "২৪ টি লাইভ ক্লাস ও আজীবন রেকর্ডিং এক্সেস"
      },
      {
        "en": "Ready-to-Deploy Make.com & n8n Automation Blueprints",
        "bn": "রেডিমেড Make ও n8n অটোমেশন ব্লুপ্রিন্টস"
      },
      {
        "en": "CrewAI & LangGraph Multi-Agent Starter Kits",
        "bn": "CrewAI ও ল্যাংগ্রাফ এজেন্ট স্টার্টার কোড কিটস"
      },
      {
        "en": "AI Automation Agency (AAA) Proposal & Contract Templates",
        "bn": "এআই এজেন্সি ক্লায়েন্ট প্রপোজাল ও কন্ট্রাক্ট টেমপ্লেট"
      },
      {
        "en": "Industry-Recognized Agentic AI Certificate",
        "bn": "প্রফেশনাল কোর্স কমপ্লিশন সার্টিফিকেট"
      }
    ],
    "reviews": [
      {
        "id": "r-ai-1",
        "name": "Tanvir Hasan",
        "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "AI Automation Consultant",
          "bn": "এআই অটোমেশন কনসালট্যান্ট"
        },
        "rating": 5,
        "comment": {
          "en": "Learning Make.com and CrewAI completely changed how I deliver tech solutions. I closed a $2,500 business automation project with a US client right after completing the course!",
          "bn": "Make.com ও CrewAI-এর সাহায্যে বিজনেস প্রসেস অটোমেশন শিখে আমি সরাসরি ইউএস ক্লায়েন্টের সাথে একটি হাই-ভ্যালু অটোমেশন প্রজেক্ট সম্পন্ন করেছি।"
        },
        "date": "2026-08-21"
      }
    ]
  },
  {
    "id": "1",
    "slug": "mern-stack",
    "title": {
      "en": "Mastering MERN Stack Web Development",
      "bn": "মাস্টারিং মার্ন স্ট্যাক ওয়েব ডেভেলপমেন্ট"
    },
    "subtitle": {
      "en": "Complete Full-Stack Web Development with React, Node.js, Express & MongoDB",
      "bn": "সম্পূর্ণ মঙ্গোডিবি, এক্সপ্রেস, রিঅ্যাক্ট ও নোড.জেএস দিয়ে ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন তৈরি"
    },
    "category": "web",
    "categoryLabel": {
      "en": "Programming",
      "bn": "প্রোগ্রামিং"
    },
    "badge": {
      "en": "POPULAR",
      "bn": "জনপ্রিয়"
    },
    "mode": {
      "en": "Offline",
      "bn": "অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 85,
    "enrolledCount": "50+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "20000৳",
    "rawFee": 20000,
    "originalFee": "25000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "36 Classes",
      "bn": "৩৬ টি ক্লাস"
    },
    "image": "/images/course thumbnail/enterprise full stack next.js 15.jpg",
    "videoUrl": "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1931942940836268%2F&show_text=0",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Mastering%20MERN%20Stack%20Web%20Development%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Mahmudur Rahman",
      "designation": {
        "en": "Senior Full-Stack Developer",
        "bn": "সিনিয়র ফুল-স্ট্যাক ডেভেলপার"
      },
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "12+ years experience building SaaS applications.",
        "bn": "১২+ বছরের অভিজ্ঞতা সম্পন্ন সফটওয়্যার আর্কিটেক্ট।"
      },
      "experience": "12+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Learn how to build modern, high-performance web applications like Facebook, Netflix, and YouTube from scratch. Master HTML5, CSS3, Tailwind CSS, Modern JavaScript (ES6+), React.js components & hooks, React Router, Node.js, Express.js, MongoDB, REST APIs, and full-stack deployment with real projects and portfolio development.",
      "bn": "Facebook, Netflix, YouTube-এর মতো আধুনিক ও প্রফেশনাল ওয়েবসাইট তৈরি করার দক্ষতা অর্জন করুন! জিরো লেভেল থেকে শুরু করে HTML5, CSS3, JavaScript (ES6+), Tailwind CSS, React.js, Node.js, Express.js এবং MongoDB দিয়ে কমপ্লিট ফুল-স্ট্যাক ও ফ্রন্টএন্ড ওয়েব ডেভেলপমেন্ট শিখুন। রিয়েল প্রজেক্ট, পোর্টফোলিও এবং ফ্রিল্যান্সিং গাইডলাইন অন্তর্ভুক্ত।"
    },
    "fullDescription": {
      "en": "Frontend Web Development is currently one of the most high-demand skills worldwide, opening endless opportunities in IT jobs, remote careers, and freelancing. Even if you are an absolute beginner, you will learn step-by-step with hands-on practice, assignments, and real-life projects in every class so you can build a stand-out portfolio and launch your tech career.",
      "bn": "Frontend Web Development বর্তমানে বিশ্বের অন্যতম চাহিদাসম্পন্ন স্কিল। এই একটি দক্ষতাই খুলে দিতে পারে IT Job, Remote Career এবং Freelancing-এর অসংখ্য সুযোগ। একেবারেই নতুন হলেও কোনো সমস্যা নেই—একদম বেসিক থেকে শুরু করে ধাপে ধাপে শেখানো হবে। প্রতিটি ক্লাসে থাকবে হাতে-কলমে প্র্যাকটিস, অ্যাসাইনমেন্ট এবং বাস্তব প্রজেক্ট, যাতে কোর্স শেষে আত্মবিশ্বাসের সঙ্গে নিজের Portfolio তৈরি করে ক্যারিয়ার শুরু করতে পারেন।"
    },
    "coreValues": [
      {
        "id": "cv-mern-1",
        "title": {
          "en": "Zero to Hero Structured Curriculum",
          "bn": "একদম বেসিক থেকে অ্যাডভান্সড"
        },
        "desc": {
          "en": "No prior coding background required. Learn step-by-step from foundations to advanced architecture.",
          "bn": "কোনো পূর্ব কোডিং অভিজ্ঞতা ছাড়াই বেসিক থেকে ধাপে ধাপে প্রফেশনাল লেভেলে পৌঁছান।"
        },
        "icon": "CheckCircle2"
      },
      {
        "id": "cv-mern-2",
        "title": {
          "en": "Real-World Project & Portfolio",
          "bn": "বাস্তব প্রজেক্ট ও পোর্টফোলিও"
        },
        "desc": {
          "en": "Build full-scale interactive web apps and showcase your live code repository to employers.",
          "bn": "ক্লাসে সরাসরি ফেসবুক, নেটফ্লিক্স ও ই-কমার্সের মতো রিয়েল প্রজেক্ট ডেভেলপমেন্ট।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv-mern-3",
        "title": {
          "en": "IT Job & Freelancing Support",
          "bn": "আইটি জব ও ফ্রিল্যান্সিং গাইডলাইন"
        },
        "desc": {
          "en": "Dedicated guidance for remote IT jobs, Fiverr/Upwork marketplace setup, and tech interviews.",
          "bn": "দেশি-বিদেশি IT কোম্পানিতে জব ও ফ্রিল্যান্সিংয়ে কাজ পাওয়ার পূর্ণাঙ্গ গাইডলাইন।"
        },
        "icon": "TrendingUp"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master HTML5 Semantic Architecture, CSS3 Modern Layouts, Flexbox & CSS Grid",
        "bn": "HTML5 ও CSS3 দিয়ে রেসপনসিভ ও আধুনিক ওয়েব লেআউট তৈরি"
      },
      {
        "en": "Modern JavaScript (ES6+), DOM Manipulation, Async/Await & Fetch API",
        "bn": "JavaScript (ES6+) ফান্ডামেন্টালস, অ্যাসিঙ্ক প্রোগ্রামিং ও এপিআই ফেচিং"
      },
      {
        "en": "Rapid & Fluid UI Styling with Utility-First Tailwind CSS",
        "bn": "Tailwind CSS দিয়ে মডার্ন, মোবাইল-ফার্স্ট ও ক্লিন ইউজার ইন্টারফেস ডিজাইন"
      },
      {
        "en": "React.js Mastery: JSX, Components, Props, State & Modern React Hooks",
        "bn": "React.js কোর আর্কিটেকচার, কম্পোনেন্ট, প্রপস, স্টেট ও কাস্টম হুক্স"
      },
      {
        "en": "React Router DOM Dynamic Multi-Page Navigation & REST API Integration",
        "bn": "React Router দিয়ে ডায়নামিক নেভিগেশন ও ব্যাকএন্ড এপিআই ইন্টিগ্রেশন"
      },
      {
        "en": "Convert Figma UI/UX Designs into Pixel-Perfect Responsive Websites",
        "bn": "Figma Design থেকে Professional Responsive Website তৈরি করার টেকনিক"
      },
      {
        "en": "Backend Development with Node.js, Express.js & MongoDB Database",
        "bn": "Node.js, Express.js ও MongoDB দিয়ে সিকিউর ব্যাকএন্ড RESTful API তৈরি"
      },
      {
        "en": "Full-Stack Authentication (JWT, bcrypt), Deployment on Vercel & Render",
        "bn": "জেডাব্লিউটি অথেন্টিকেশন, প্রটেক্টেড রাউটস ও ক্লাউড ডিপ্লয়মেন্ট"
      },
      {
        "en": "Standout Developer Portfolio Building on GitHub & Live Hosting",
        "bn": "গিটহাব রিপোজিটরি ও লাইভ ডোমেনে প্রফেশনাল পোর্টফোলিও তৈরি"
      },
      {
        "en": "Freelance Marketplace Client Acquisition Blueprint (Fiverr & Upwork)",
        "bn": "ফাইভার ও আপওয়ার্কে ক্লায়েন্ট হান্টিং ও রিমোট জব ক্র্যাক করার কৌশল"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: HTML5, Modern CSS3 & Responsive Web Design",
          "bn": "মডিউল ১: HTML5, CSS3 ও রেসপনসিভ ডিজাইন"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "HTML5 Semantic Tags, Document Structure & SEO Best Practices",
            "bn": "এইচটিএমএল৫ সেমান্টিক ট্যাগস ও এসইও ফ্রেন্ডলি পেজ স্ট্রাকচার"
          },
          {
            "en": "CSS3 Box Model, Typography, Colors, Gradients & Pseudo-Classes",
            "bn": "সিএসএস৩ বক্স মডেল, টাইপোগ্রাফি ও স্টাইলিং টেকনিক"
          },
          {
            "en": "Flexbox Layout Architecture & CSS Grid Deep Dive",
            "bn": "ফ্লেক্সবক্স ও সিএসএস গ্রিড লেআউট মাস্টারি"
          },
          {
            "en": "Media Queries & Mobile-First Responsive Website Design",
            "bn": "মোবাইল-ফার্স্ট রেসপনসিভ ওয়েব পেজ তৈরি"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Modern JavaScript (ES6+) & Async Programming",
          "bn": "মডিউল ২: আধুনিক JavaScript (ES6+) ও অ্যাসিঙ্ক প্রোগ্রামিং"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "Variables (let, const), Data Types, Operators & Control Flow",
            "bn": "জাভাস্ক্রিপ্ট ভ্যারিয়েবল, ডেটা টাইপ ও কন্ডিশনাল লজিক"
          },
          {
            "en": "ES6+ Arrow Functions, Template Literals, Destructuring & Rest/Spread",
            "bn": "অ্যারো ফাংশনস, ডিস্ট্রাকচারিং ও স্প্রেড অপারেটর"
          },
          {
            "en": "Array Methods (map, filter, reduce, find, forEach) Deep Dive",
            "bn": "অ্যারে মেথডস ও ডেটা ম্যানিপুলেশন"
          },
          {
            "en": "DOM Manipulation, Event Listeners & Interactive UI Logic",
            "bn": "ডম ম্যানিপুলেশন ও ইন্টারেক্টিভ ইভেন্ট হ্যান্ডলিং"
          },
          {
            "en": "Promises, Async/Await, Fetch API & JSON Handling",
            "bn": "প্রমিজেস, অ্যাসিঙ্ক/অ্যাওয়েট ও এপিআই রিকোয়েস্ট হ্যান্ডলিং"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Tailwind CSS & Pixel-Perfect Figma-to-Web Conversion",
          "bn": "মডিউল ৩: Tailwind CSS ও Figma থেকে ওয়েব ডিজাইন"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Tailwind CSS Setup, Configuration, Utility Classes & Custom Themes",
            "bn": "টেইলউইন্ড সিএসএস ইনস্টলেশন ও কাস্টম থিম কনফিগারেশন"
          },
          {
            "en": "Responsive Layouts, Dark Mode Integration & Micro-Animations",
            "bn": "রেসপনসিভ ব্রেকপয়েন্টস, ডার্ক মোড ও ট্রানজিশন ইফেক্টস"
          },
          {
            "en": "Inspecting Figma Designs, Extracting Assets, Fonts & Color Tokens",
            "bn": "ফিগমা থেকে অ্যাসেট, ফন্ট ও কালার কোড এক্সট্রাক্ট করা"
          },
          {
            "en": "Building a Production-Ready Responsive Landing Page from Figma",
            "bn": "ফিগমা ডিজাইন থেকে সম্পূর্ণ রেসপনসিভ ল্যান্ডিং পেজ তৈরি"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: React.js Fundamentals (JSX, Components & State)",
          "bn": "মডিউল ৪: React.js ফান্ডামেন্টালস, কম্পোনেন্টস ও স্টেট"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 7,
        "topics": [
          {
            "en": "Why React? Virtual DOM, React 19 Ecosystem & Vite Setup",
            "bn": "রিঅ্যাক্ট কী এবং কেন? ভার্চুয়াল ডম ও প্রজেক্ট সেটআপ"
          },
          {
            "en": "JSX Syntax, Conditional Rendering & Rendering Lists with Keys",
            "bn": "জেএসএক্স সিনট্যাক্স, কন্ডিশনাল রেন্ডারিং ও লিস্ট রেন্ডারিং"
          },
          {
            "en": "Component Architecture, Props Passing, Children & Component Reusability",
            "bn": "কম্পোনেন্ট হায়ারার্কি, প্রপস ড্রিলিং ও রিউজেবল কম্পোনেন্টস"
          },
          {
            "en": "State Management with useState Hook & Event Handling in React",
            "bn": "ইউজস্টেট হুক দিয়ে ডায়নামিক স্টেট ম্যানেজমেন্ট"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: React Hooks, React Router DOM & REST API Integration",
          "bn": "মডিউল ৫: React Hooks, Router ও API Integration"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 7,
        "topics": [
          {
            "en": "Side Effects with useEffect Hook & Clean-up Functions",
            "bn": "ইউজএফেক্ট হুক দিয়ে লাইফসাইকেল ও ডেটা ফেচিং"
          },
          {
            "en": "React Router DOM v6: Dynamic Routes, Nested Routes, Links & NavLink",
            "bn": "রিঅ্যাক্ট রাউটার দিয়ে মাল্টি-পেজ অ্যাপ্লিকেশন তৈরি"
          },
          {
            "en": "Global State Management with Context API & useContext",
            "bn": "কনটেক্সট এপিআই ও গ্লোবাল অথেন্টিকেশন স্টেট"
          },
          {
            "en": "Consuming REST APIs with Axios/Fetch, Loading & Error States",
            "bn": "অ্যাক্সিওস দিয়ে এপিআই ইন্টিগ্রেশন ও এরর হ্যান্ডলিং"
          }
        ]
      },
      {
        "moduleNumber": 6,
        "title": {
          "en": "Module 6: Node.js, Express.js & MongoDB Backend Architecture",
          "bn": "মডিউল ৬: Node.js, Express.js ও MongoDB ব্যাকএন্ড"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 7,
        "topics": [
          {
            "en": "Node.js Runtime Environment, NPM Packages & Modular Architecture",
            "bn": "নোড.জেএস রানটাইম, এনপিএম প্যাকেজ ও মডিউল সিস্টেম"
          },
          {
            "en": "Express.js Server Setup, REST API Routing & Custom Middlewares",
            "bn": "এক্সপ্রেস.জেএস দিয়ে রেস্টফুল এপিআই রাউট তৈরি"
          },
          {
            "en": "MongoDB Atlas Cloud Setup, Mongoose Schemas & Models",
            "bn": "মঙ্গোডিবি ক্লাউড ডাটাবেজ কানেকশন ও মাঙ্গুজ স্কিমা"
          },
          {
            "en": "Full CRUD Operations (Create, Read, Update, Delete) with MongoDB",
            "bn": "মঙ্গোডিবির মাধ্যমে সম্পূর্ণ সিআরইউডি ডেটাবেজ অপারেশন"
          }
        ]
      },
      {
        "moduleNumber": 7,
        "title": {
          "en": "Module 7: JWT Authentication & Full-Stack MERN Project",
          "bn": "মডিউল ৭: JWT অথেন্টিকেশন ও ফুল-স্ট্যাক প্রজেক্ট"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "User Registration, Password Hashing with bcrypt & JWT Token Auth",
            "bn": "ইউজার সাইন-আপ, পাসওয়ার্ড এনক্রিপশন ও জেডাব্লিউটি সিকিউরিটি"
          },
          {
            "en": "Protected Routes in React & Backend Auth Verification Middleware",
            "bn": "রিঅ্যাক্টে প্রটেক্টেড রাউটস ও সিকিউর সেশন হ্যান্ডলিং"
          },
          {
            "en": "Building a Full-Stack Web App (E-Commerce / Streaming Portal)",
            "bn": "কমপ্লিট ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন তৈরি"
          },
          {
            "en": "Cloudinary Image & Media File Upload Integration",
            "bn": "ক্লাউডিনারি দিয়ে ইমেজ ও মিডিয়া আপলোড সিস্টেম"
          }
        ]
      },
      {
        "moduleNumber": 8,
        "title": {
          "en": "Module 8: Production Deployment, Portfolio & Freelancing Roadmap",
          "bn": "মডিউল ৮: ডিপ্লয়মেন্ট, পোর্টফোলিও ও ফ্রিল্যান্সিং"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Deploying Frontend to Vercel/Netlify & Backend to Render/Railway",
            "bn": "ভার্সেল ও রেন্ডারে লাইভ সার্ভার ডিপ্লয়মেন্ট ও ডোমেন সেটআপ"
          },
          {
            "en": "Creating an Impressive GitHub Profile & Live Portfolio Website",
            "bn": "গিটহাব প্রোফাইল ও লাইভ প্রফেশনাল পোর্টফোলিও রেডি করা"
          },
          {
            "en": "Fiverr & Upwork Gig Setup, Proposal Writing & Client Communication",
            "bn": "ফাইভার ও আপওয়ার্কে হাই-কনভার্টিং গিগ ও প্রপোজাল তৈরি"
          },
          {
            "en": "Preparing for Local & International Frontend/MERN Developer Interviews",
            "bn": "দেশি ও বিদেশি আইটি কোম্পানিতে ইন্টারভিউ প্রস্তুতির গাইডলাইন"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "36 Live Interactive Classes & Screen Recordings",
        "bn": "৩৬ টি লাইভ ক্লাস ও আজীবন ভিডিও রেকর্ডিং এক্সেস"
      },
      {
        "en": "8 Real-World Industry Projects & Source Code",
        "bn": "৮ টি রিয়েল-লাইফ প্রজেক্ট ও সম্পূর্ণ সোর্স কোড"
      },
      {
        "en": "Figma UI Kits, Premium Templates & Cheatsheets",
        "bn": "ফিগমা ডিজাইন ফাইলস ও কোডিং চিটশিট"
      },
      {
        "en": "Dedicated IT Job Placement & Freelancing Support",
        "bn": "ডেডিকেটেড জব প্লেসমেন্ট ও ফ্রিল্যান্সিং গাইডলাইন"
      },
      {
        "en": "Industry-Recognized Certificate of Completion",
        "bn": "ইন্ডাস্ট্রি রিকগনাইজড কোর্স সার্টিফিকেট"
      }
    ],
    "reviews": [
      {
        "id": "r-mern-1",
        "name": "Shakil Ahmed",
        "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "Frontend React Developer",
          "bn": "ফ্রন্টএন্ড রিঅ্যাক্ট ডেভেলপার"
        },
        "rating": 5,
        "comment": {
          "en": "The step-by-step approach from HTML/CSS to building full-stack MERN apps helped me land my first software company job as a React Developer!",
          "bn": "একদম জিরো থেকে শুরু করে রিঅ্যাক্ট ও মার্ন স্ট্যাকের রিয়েল প্রজেক্ট শিখেই আমি একটি আইটি কোম্পানিতে ফ্রন্টএন্ড ডেভেলপার হিসেবে জয়েন করেছি।"
        },
        "date": "2026-08-20"
      }
    ]
  },
  {
    "id": "12",
    "slug": "ielts-prep",
    "title": {
      "en": "IELTS - International English Language Testing System",
      "bn": "আইইএলটিএস - ইন্টারন্যাশনাল ইংলিশ ল্যাঙ্গুয়েজ টেস্টিং সিস্টেম"
    },
    "subtitle": {
      "en": "Target 7.5+ Band Score with Expert British Council & IDP Certified Trainers",
      "bn": "ব্যান্ড ৭.৫+ অর্জনের জন্য মক টেস্ট ও ১-অন-১ স্পিকিং প্র্যাকটিস সহ আইইএলটিএস প্রস্তুতি"
    },
    "category": "language",
    "categoryLabel": {
      "en": "Language Skills",
      "bn": "ল্যাংগুয়েজ স্কিলস"
    },
    "badge": {
      "en": "HIGH SCORE",
      "bn": "হাই স্কোর"
    },
    "mode": {
      "en": "Offline",
      "bn": "অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 95,
    "enrolledCount": "50+ Enrolled",
    "languages": {
      "en": "English / Bengali",
      "bn": "ইংরেজি / বাংলা"
    },
    "fee": "2000৳",
    "rawFee": 2000,
    "originalFee": "5000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "30 Classes",
      "bn": "৩০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/ielts complete preparation.jpg",
    "videoUrl": "https://www.youtube.com/embed/nU-IIXBWlS4?autoplay=1",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22IELTS%20-%20International%20English%20Language%20Testing%20System%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Sabrina Yasmin",
      "designation": {
        "en": "IELTS Lead Trainer (Band 8.5)",
        "bn": "আইইএলটিএস লিড ট্রেইনার (ব্যান্ড ৮.৫)"
      },
      "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "8+ years helping students achieve target band scores for overseas admission.",
        "bn": "উচ্চশিক্ষার জন্য প্রস্তুত হতে ১০০০০+ শিক্ষার্থীকে প্রশিক্ষণ প্রদান করেছেন।"
      },
      "experience": "8+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Comprehensive IELTS Academic & General Training program with listening, reading, writing, and speaking modules plus 1-on-1 mock reviews.",
      "bn": "লিসেনিং, রিডিং, রাইটিং ও স্পিকিং মডিউল সহ নিবিড় আইইএলটিএস প্রস্তুতি কোর্স।"
    },
    "fullDescription": {
      "en": "Achieve your dream score for foreign university admission or immigration.",
      "bn": "বিদেশে উচ্চশিক্ষা বা ইমিগ্রেশনের জন্য আপনার কাঙ্ক্ষিত ব্যান্ড স্কোর অর্জন করুন।"
    },
    "coreValues": [],
    "learningOutcomes": [],
    "curriculum": [],
    "includedItems": [],
    "reviews": []
  },
  {
    "id": "4",
    "slug": "graphic-design",
    "title": {
      "en": "Mastering Graphic Design with AI",
      "bn": "মাস্টারিং গ্রাফিক ডিজাইন উইথ এআই"
    },
    "subtitle": {
      "en": "Photoshop, Illustrator, Brand Identity & AI Visual Design Workflows",
      "bn": "ফটোশপ ও ইলাস্ট্রেটরে ব্র্যান্ড লোগো, সোশ্যাল মিডিয়া ব্যানার ও এআই ডিজাইন শিখুন"
    },
    "category": "uiux",
    "categoryLabel": {
      "en": "Art & Design",
      "bn": "আর্ট ও ডিজাইন"
    },
    "badge": {
      "en": "CREATIVE",
      "bn": "ক্রিয়েটিভ"
    },
    "mode": {
      "en": "Offline",
      "bn": "অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 70,
    "enrolledCount": "50+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "16000৳",
    "rawFee": 16000,
    "originalFee": "20000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "24 Classes",
      "bn": "২৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/graphic design.jpg",
    "videoUrl": "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F889772017529060%2F&show_text=0",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Mastering%20Graphic%20Design%20with%20AI%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Tariqul Islam",
      "designation": {
        "en": "Creative Art Director",
        "bn": "ক্রিয়েটিভ আর্ট ডিরেক্টর"
      },
      "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "Expert brand identity designer with 9+ years industry footprint.",
        "bn": "আন্তর্জাতিক সংস্থা ও ব্র্যান্ডের সাথে ৯+ বছর কাজের অভিজ্ঞতা।"
      },
      "experience": "9+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Master industry-standard design software (Adobe Photoshop, Adobe Illustrator) combined with cutting-edge Generative AI tools (Midjourney, Firefly, DALL-E). Create stunning brand identities, commercial advertising creatives, social media campaigns, and print media for high-paying clients.",
      "bn": "ভবিষ্যতের ক্যারিয়ার গড়তে প্রস্তুত তো? বর্তমান যুগে শুধু ডিগ্রি নয়, প্রয়োজন সময়োপযোগী দক্ষতা। চাকরি কিংবা ফ্রিল্যান্সিং—উভয় ক্ষেত্রেই সফল হতে চাইলে এখনই নিজেকে দক্ষ করে তোলার সময়। ফটোশপ, ইলাস্ট্রেটর এবং অত্যাধুনিক জেনারেটিভ এআই টুলস দিয়ে প্রফেশনাল লোগো, ব্র্যান্ড আইডেন্টিটি, সোশ্যাল মিডিয়া ব্যানার ও প্রিন্ট ডিজাইন শিখে লোকাল ও আন্তর্জাতিক মার্কেটে ক্যারিয়ার গড়ুন।"
    },
    "fullDescription": {
      "en": "Learn industry-standard visual design from experienced mentors. Work on real agency client projects and prepare yourself for local & global job markets. Complete with dedicated job placement and freelancing support on Fiverr, Upwork, and Behance.",
      "bn": "অভিজ্ঞ মেন্টরদের সরাসরি গাইডলাইনে শিখুন ইন্ডাস্ট্রি-স্ট্যান্ডার্ড স্কিল, কাজ করুন রিয়েল-লাইফ প্রজেক্টে এবং প্রস্তুত করুন নিজেকে লোকাল ও আন্তর্জাতিক জব মার্কেটের জন্য। কোর্স শেষে থাকছে Dedicated Job Placement ও Freelancing Support। আপনার স্বপ্নের ক্যারিয়ার শুরু হতে পারে আজই।"
    },
    "coreValues": [
      {
        "id": "cv-gd-1",
        "title": {
          "en": "Adobe Suite & AI Synergy",
          "bn": "ফটোশপ, ইলাস্ট্রেটর ও এআই"
        },
        "desc": {
          "en": "Master Photoshop, Illustrator and accelerate your creative workflow 10x with Generative AI tools.",
          "bn": "ফটোশপ ও ইলাস্ট্রেটরের পাশাপাশি মিডজার্নি ও ফায়ারফ্লাই এআই দিয়ে ফাস্ট ডিজাইন।"
        },
        "icon": "Sparkles"
      },
      {
        "id": "cv-gd-2",
        "title": {
          "en": "Real Agency Brand Projects",
          "bn": "রিয়েল ব্র্যান্ড ডিজাইন প্রজেক্ট"
        },
        "desc": {
          "en": "Create commercial brand identities, packaging, and advertising campaigns for real companies.",
          "bn": "বাস্তব কোম্পানি ও ব্র্যান্ডের জন্য লোগো, প্যাকেজিং ও সোশ্যাল মিডিয়া ব্যানার তৈরি।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv-gd-3",
        "title": {
          "en": "Behance Portfolio & Job Placement",
          "bn": "পোর্টফোলিও ও জব সাপোর্ট"
        },
        "desc": {
          "en": "Build an international Behance portfolio and get direct freelancing and job placement support.",
          "bn": "আন্তর্জাতিক মানের পোর্টফোলিও তৈরি এবং ডেডিকেটেড ফ্রিল্যান্সিং গাইডলাইন।"
        },
        "icon": "CheckCircle2"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master Design Foundations: Typography Hierarchy, Color Psychology & Visual Composition",
        "bn": "ডিজাইন থিওরি, কালার সাইকোলজি ও টাইপোগ্রাফি রুলস"
      },
      {
        "en": "Advanced Adobe Photoshop Manipulation, Retouching, Layer Masks & Digital Art",
        "bn": "অ্যাডোব ফটোশপে অ্যাডভান্সড ফটো ম্যানিপুলেশন ও রিটাচিং"
      },
      {
        "en": "Adobe Illustrator Vector Mastery: Custom Logo Design, Brand Toolkits & Badges",
        "bn": "অ্যাডোব ইলাস্ট্রেটরে ভেক্টর লোগো ডিজাইন ও ব্র্যান্ড আইডেন্টিটি"
      },
      {
        "en": "Generative AI Design Mastery (Midjourney, DALL-E, Adobe Firefly & Prompt Engineering)",
        "bn": "জেনারেটিভ এআই (Midjourney, Firefly) দিয়ে কমার্শিয়াল ডিজাইন"
      },
      {
        "en": "High-Converting Social Media Creatives, Ad Carousels & YouTube Thumbnails",
        "bn": "সোশ্যাল মিডিয়া ব্যানার, ফেসবুক ও ইনস্টাগ্রাম অ্যাড ক্রিয়েটিভস"
      },
      {
        "en": "Commercial Print Media: Corporate Stationery, Brochures, Flyers & Billboards",
        "bn": "করপোরেট স্টেশনারি, ব্রোশিওর, ব্যানার ও প্রিন্ট-রেডি ডিজাইন"
      },
      {
        "en": "Product Packaging Design, Labeling & Photorealistic 3D Mockups",
        "bn": "পণ্য প্যাকেজিং, লেবেল ডিজাইন ও ৩ডি মকআপ প্রেজেন্টেশন"
      },
      {
        "en": "Standout Behance/Dribbble Case Studies & Freelancing on Fiverr & Upwork",
        "bn": "বিহ্যান্স ও ড্রিবল পোর্টফোলিও এবং ফাইভার-আপওয়ার্কে ফ্রিল্যান্সিং"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Visual Design Foundations, Color Theory & Typography",
          "bn": "মডিউল ১: ডিজাইন ফান্ডামেন্টালস, কালার থিওরি ও টাইপোগ্রাফি"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Design Principles: Balance, Contrast, Alignment, Proximity & White Space",
            "bn": "ডিজাইন প্রিন্সিপলস ও ভিজ্যুয়াল ব্যালেন্স"
          },
          {
            "en": "Color Harmony, RGB vs CMYK Color Spaces & Psychology of Colors",
            "bn": "কালার সাইকোলজি, কালার প্যালেট ও প্রিন্ট বনাম ওয়েব কালার"
          },
          {
            "en": "Typography: Font Classification, Pairing, Kerning & Hierarchy",
            "bn": "টাইপোগ্রাফি সিলেকশন, ফন্ট পেয়ারিং ও টেক্সট হায়ারার্কি"
          },
          {
            "en": "Grid Systems, Layout Compositions & Golden Ratio Rules",
            "bn": "গ্রিড সিস্টেম ও গোল্ডেন রেশিও কম্পোজিশন"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Adobe Photoshop Mastery & Photo Manipulation",
          "bn": "মডিউল ২: Photoshop মাস্টারি ও ফটো ম্যানিপুলেশন"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Photoshop Interface, Selection Tools, Layer Masks & Smart Objects",
            "bn": "ফটোশপ ইন্টারফেস, লেয়ার মাস্কিং ও স্মার্ট অবজেক্টস"
          },
          {
            "en": "Commercial Skin Retouching, Frequency Separation & Dodge/Burn",
            "bn": "প্রফেশনাল স্কিন রিটাচিং ও ফ্রিকোয়েন্সি সেপারেশন"
          },
          {
            "en": "Advanced Photo Manipulation, Background Removal & Blending",
            "bn": "ফটো ম্যানিপুলেশন ও ব্যাকগ্রাউন্ড ব্লেন্ডিং আর্ট"
          },
          {
            "en": "Color Grading, Camera Raw Filter & Lighting Adjustment Techniques",
            "bn": "ক্যামেরা র ফিল্টার ও সিনেমাটিক কালার গ্রেডিং"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Adobe Illustrator Vector Design & Brand Identity",
          "bn": "মডিউল ৩: Illustrator ভেক্টর ডিজাইন ও লোগো মাস্টারি"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Pen Tool Precision, Shape Builder, Pathfinder & Vector Tools",
            "bn": "পেন টুল প্রিসিশন, শেপ বিল্ডার ও পাথফাইন্ডার টুলস"
          },
          {
            "en": "Logo Design Types (Wordmark, Lettermark, Mascot, Abstract, Emblem)",
            "bn": "বিভিন্ন ক্যাটাগরির প্রফেশনাল লোগো ডিজাইন কনসেপ্ট"
          },
          {
            "en": "Brand Identity Systems: Color Guides, Typography Rules & Brandbooks",
            "bn": "কমপ্লিট ব্র্যান্ড গাইডলাইন ও ব্র্যান্ডবুক তৈরি"
          },
          {
            "en": "Custom Iconography, Vector Badges & Mascot Illustration",
            "bn": "কাস্টম আইকন ও ভেক্টর ইলাস্ট্রেশন আর্ট"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: Generative AI for Designers (Midjourney & Firefly)",
          "bn": "মডিউল ৪: জেনারেটিভ AI ডিজাইন (Midjourney, Firefly, DALL-E)"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Midjourney v6: Prompt Engineering for Commercial Graphics & Concept Art",
            "bn": "মিডজার্নি দিয়ে ফটো-রিয়েলিস্টিক ইমেজ ও কনসেপ্ট আর্ট তৈরি"
          },
          {
            "en": "Adobe Firefly Generative Fill, Generative Recolor & Vector AI",
            "bn": "অ্যাডোব ফায়ারফ্লাই জেনারেটিভ ফিল ও ভেক্টর এআই"
          },
          {
            "en": "Combining AI-Generated Assets with Photoshop & Illustrator Layouts",
            "bn": "এআই আর্টের সাথে ফটোশপ-ইলাস্ট্রেটর ডিজাইনের নিখুঁত সমন্বয়"
          },
          {
            "en": "Ethical AI Usage, Commercial Rights & Upscaling AI Artwork",
            "bn": "এআই আর্ট আপস্কেলিং ও কমার্শিয়াল লাইসেন্সিং"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: Social Media Branding & High-Converting Ad Creatives",
          "bn": "মডিউল ৫: সোশ্যাল মিডিয়া ব্যানার ও অ্যাড ক্রিয়েটিভস"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Facebook & Instagram Ad Banner Design (Single Post, Carousel & Story)",
            "bn": "ফেসবুক ও ইনস্টাগ্রাম হাই-কনভার্টিং অ্যাড ব্যানার ডিজাইন"
          },
          {
            "en": "Click-Worthy YouTube Thumbnail Design & Viral CTR Strategies",
            "bn": "হাই-সিটিআর ইউটিউব থাম্বনেইল ডিজাইন টেকনিক"
          },
          {
            "en": "LinkedIn Corporate Banners, Twitter Headers & Web Sliders",
            "bn": "লিঙ্কডইন ও ওয়েবসাইট ব্যানার স্লাইডার তৈরি"
          },
          {
            "en": "GIF Animations & Motion Banner Basics in Photoshop",
            "bn": "ফটোশপে অ্যানিমেটেড জিআইএফ ও মোশন ব্যানার"
          }
        ]
      },
      {
        "moduleNumber": 6,
        "title": {
          "en": "Module 6: Commercial Print Design & Corporate Stationery",
          "bn": "মডিউল ৬: প্রিন্ট ডিজাইন ও করপোরেট স্টেশনারি"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Corporate Identity: Business Cards, Letterheads, Envelopes & ID Cards",
            "bn": "বিজনেস কার্ড, লেটারহেড ও আইডি কার্ড ডিজাইন"
          },
          {
            "en": "Tri-Fold, Bi-Fold Brochures & Marketing Flyers",
            "bn": "মার্কেটিং ব্রোশিওর ও লিফলেট ডিজাইন"
          },
          {
            "en": "Roll-Up Banners, Billboards & Exhibition Standees",
            "bn": "রোল-আপ ব্যানার ও বিলবোর্ড সাইনেজ ডিজাইন"
          },
          {
            "en": "Print Pre-Press: Bleed Lines, Trim Marks, CMYK Exporting & Die-Cuts",
            "bn": "প্রিন্টিং প্রেসের জন্য ডাই-কাট ও সিএমওয়াইকে ফাইল এক্সপোর্ট"
          }
        ]
      },
      {
        "moduleNumber": 7,
        "title": {
          "en": "Module 7: Packaging, Merchandise & Product Mockup Creation",
          "bn": "মডিউল ৭: প্যাকেজিং, মার্চেন্ডাইজ ও ৩ডি মকআপ"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Product Box Packaging Dieline Design & Measurements",
            "bn": "প্রোডাক্ট বক্স প্যাকেজিং ডাইলাইন ও মেজারমেন্ট"
          },
          {
            "en": "Bottle & Pouch Label Design with Nutrition & Barcode Placeholders",
            "bn": "বোতল ও ফুড পাউচ লেবেল ডিজাইন"
          },
          {
            "en": "T-Shirt, Apparel & Merchandise Vector Graphics",
            "bn": "টি-শার্ট ও মার্চেন্ডাইজ ভেক্টর গ্রাফিক্স"
          },
          {
            "en": "Creating Photorealistic 3D Mockup Presentations in Photoshop",
            "bn": "ফটোশপে কাস্টম ৩ডি স্মার্ট অবজেক্ট মকআপ তৈরি"
          }
        ]
      },
      {
        "moduleNumber": 8,
        "title": {
          "en": "Module 8: Behance/Dribbble Portfolio Mastery & Freelancing Roadmap",
          "bn": "মডিউল ৮: বিহ্যান্স পোর্টফোলিও ও ফ্রিল্যান্সিং"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Crafting Professional Behance Case Studies with Engaging Presentation",
            "bn": "বিহ্যান্সে কেস স্টাডি আকারে প্রজেক্ট প্রেজেন্টেশন"
          },
          {
            "en": "Fiverr Graphic Design Gig Setup, SEO Keywords & Client Orders",
            "bn": "ফাইভারে গ্রাফিক ডিজাইন গিগ অপটিমাইজেশন ও অর্ডার টেকনিক"
          },
          {
            "en": "Upwork Proposals, Direct Client Outreach & International Pricing",
            "bn": "আপওয়ার্কে ক্লায়েন্ট প্রপোজাল ও ইন্টারন্যাশনাল প্রাইসিং"
          },
          {
            "en": "Job Placement Preparation, Mock Interviews & Agency Resume Building",
            "bn": "লোকাল ও রিমোট এজেন্সির জন্য রেজুমি ও ইন্টারভিউ গাইড"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "24 Live Interactive Classes & Screen Recordings",
        "bn": "২৪ টি লাইভ ক্লাস ও লাইফটাইম ভিডিও রেকর্ডিং"
      },
      {
        "en": "15+ Agency-Standard Design Projects & Case Studies",
        "bn": "১৫+ টি প্রফেশনাল এজেন্সি স্ট্যান্ডার্ড ডিজাইন প্রজেক্ট"
      },
      {
        "en": "Commercial Fonts, Stock Photos & Mockup Bundle",
        "bn": "প্রিমিয়াম ফন্টস, স্টক ফটো ও ৩ডি মকআপ বান্ডল"
      },
      {
        "en": "Dedicated Job Placement & Freelancing Mentorship",
        "bn": "ডেডিকেটেড জব প্লেসমেন্ট ও মার্কেটপ্লেস সাপোর্ট"
      },
      {
        "en": "Industry-Recognized Graphic Design Certificate",
        "bn": "প্রফেশনাল কোর্স সার্টিফিকেট"
      }
    ],
    "reviews": [
      {
        "id": "r-gd-1",
        "name": "Farhana Akter",
        "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "Brand Identity Designer",
          "bn": "ব্র্যান্ড ডিজাইনার"
        },
        "rating": 5,
        "comment": {
          "en": "The integration of AI tools with Photoshop & Illustrator gave my design portfolio an unmatched edge. I landed 4 international clients in my first month!",
          "bn": "ফটোশপ ও ইলাস্ট্রেটরের পাশাপাশি মিডজার্নি এআই শেখার কারণে আমার কাজের স্পিড অনেক বেড়েছে। প্রথম মাসেই আন্তর্জাতিক ক্লায়েন্ট পেয়েছি।"
        },
        "date": "2026-08-16"
      }
    ]
  },
  {
    "id": "5",
    "slug": "digital-marketing",
    "title": {
      "en": "Specialized Certification on Digital Marketing",
      "bn": "স্পেশালাইজড সার্টিফিকেশন অন ডিজিটাল মার্কেটিং"
    },
    "subtitle": {
      "en": "Meta Ads, Google Ads, Technical SEO, Sales Funnels & Analytics",
      "bn": "মেটা ও গুগল অ্যাডস, এসইও এবং সেলস ফানেল অপ্টিমাইজেশন শিখে ক্লায়েন্টদের সেলস বাড়ান"
    },
    "category": "marketing",
    "categoryLabel": {
      "en": "Digital Marketing",
      "bn": "ডিজিটাল মার্কেটিং"
    },
    "badge": {
      "en": "GROWTH",
      "bn": "গ্রোথ"
    },
    "mode": {
      "en": "Offline",
      "bn": "অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 80,
    "enrolledCount": "50+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "20000৳",
    "rawFee": 20000,
    "originalFee": "25000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "24 Classes",
      "bn": "২৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/Digital Marketing.jpg",
    "videoUrl": "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2105617167053909%2F&show_text=0",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Specialized%20Certification%20on%20Digital%20Marketing%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Rashedul Hasan",
      "designation": {
        "en": "Growth Marketing Lead",
        "bn": "গ্রোথ মার্কেটিং লিড"
      },
      "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "Managed over $1M+ in digital ad spend across e-commerce brands.",
        "bn": "১ মিলিয়ন ডলারের বেশি ডিজিটাল অ্যাড স্পেন্ড পরিচালনার অভিজ্ঞতা।"
      },
      "experience": "7+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Master advanced digital marketing from fundamentals to high-ROI scaling. Dominate Meta Ads Manager, Conversions API, Google Ads & Search PPC, Technical & Local SEO, Google Analytics 4, B2B Lead Generation, and AI-powered marketing automation for global client acquisition.",
      "bn": "চাকরি খুঁজছেন নাকি ফ্রিল্যান্সিং করতে চান? ক্যারিয়ারের গ্রাফ বদলে দিতে ডিজিটাল মার্কেটিং অন্যতম সেরা স্কিল! দেশি ও বিদেশি ক্লায়েন্টদের জন্য রেজাল্ট-ড্রিভেন প্রফেশনাল মার্কেটার হিসেবে নিজেকে গড়ে তুলুন। সোশ্যাল মিডিয়া মার্কেটিং, মেটা পিক্সেল ও কনভার্সন এপিআই, গুগল অ্যাডস, এসইও, জিএ৪ ট্র্যাকিং, বিটুবি লিড জেনারেশন এবং এআই অটোমেশন শিখে নিশ্চিত ক্যারিয়ার গড়ুন।"
    },
    "fullDescription": {
      "en": "Only watching old tutorials or basic boosting is not enough to win in today's competitive landscape. In this Premium Masterclass, you will learn real project-based ad optimization, server-side data tracking, high-converting copy strategies with AI, and complete Fiverr/Upwork client acquisition secrets.",
      "bn": "শুধু সাধারণ বুস্টিং শিখে আজকের প্রতিযোগিতামূলক মার্কেটে সফল হওয়া অসম্ভব। তাই নিজেকে জিরো লেভেল থেকে একদম অ্যাডভান্সড এক্সপার্ট হিসেবে গড়ে তুলতে জয়েন করুন আমাদের Premium Digital Marketing Masterclass-এ। শুধু স্কিল শেখানোই নয়, কীভাবে লোকাল ও ইন্টারন্যাশনাল ক্লায়েন্টের সঙ্গে কাজ করবেন তার কমপ্লিট গাইডলাইন ও লাইফটাইম সাপোর্ট পাবেন।"
    },
    "coreValues": [
      {
        "id": "cv-dm-1",
        "title": {
          "en": "100% Practical Ad Budget Execution",
          "bn": "লাইভ বাজেটে বিজ্ঞাপন পরিচালনা"
        },
        "desc": {
          "en": "Run live campaigns with real ad budgets on Meta and Google Ads during class.",
          "bn": "ক্লাসে সরাসরি লাইভ বাজেট দিয়ে রিয়েল ক্যাম্পেইন পরিচালনা ও অপটিমাইজেশন।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv-dm-2",
        "title": {
          "en": "Advanced Tracking & Analytics",
          "bn": "পিক্সেল, CAPI ও GA4 ট্র্যাকিং"
        },
        "desc": {
          "en": "Master server-side tracking, Google Tag Manager, GA4 event modeling, and ROAS attribution.",
          "bn": "কনভার্সন এপিআই, সার্ভার-সাইড ট্র্যাকিং ও গুগল অ্যানালিটিক্স ৪ মাস্টারি।"
        },
        "icon": "TrendingUp"
      },
      {
        "id": "cv-dm-3",
        "title": {
          "en": "AI Automation & Client Hunting",
          "bn": "AI অটোমেশন ও ক্লায়েন্ট হান্টিং"
        },
        "desc": {
          "en": "Leverage ChatGPT & AI tools for marketing + secrets to land direct foreign clients.",
          "bn": "এআই দিয়ে দ্রুত ক্যাম্পেইন পরিচালনা এবং ফাইভার, আপওয়ার্ক ও কোল্ড আউটরিচ।"
        },
        "icon": "CheckCircle2"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Advanced Social Media Marketing (Sales Funnels, Custom Audiences, Pixel & CAPI Setup)",
        "bn": "অ্যাডভান্সড সোশ্যাল মিডিয়া মার্কেটিং, সেলস ফানেল, পিক্সেল ও কনভার্সন এপিআই"
      },
      {
        "en": "Google Ads & High-Converting PPC Search, Display, Video & Performance Max Campaigns",
        "bn": "গুগল সার্চ ও পিপিসি ক্যাম্পেইন দিয়ে হাই-কনভার্টিং সেলস জেনারেশন"
      },
      {
        "en": "Search Engine Optimization (Technical, On-Page, Off-Page Link Building & Local SEO)",
        "bn": "এসইও (টেকনিক্যাল, লোকাল ও ই-কমার্স সার্চ ইঞ্জিন অপটিমাইজেশন)"
      },
      {
        "en": "Data Tracking & Analytics (Google Analytics 4, Google Tag Manager & Server-Side Tracking)",
        "bn": "ডেটা ট্র্যাকিং ও অ্যানালিটিক্স (GA4, GTM ও সার্ভার-সাইড ট্র্যাকিং)"
      },
      {
        "en": "B2B Lead Generation & High-Inbox-Delivery Cold Email Outreach Pipelines",
        "bn": "B2B লিড জেনারেশন ও অটোমেটেড কোল্ড ইমেইল মার্কেটিং"
      },
      {
        "en": "AI Automation Techniques (ChatGPT & AI Tools for High-Converting Ad Copy & Assets)",
        "bn": "এআই অটোমেশন টেকনিক্স (ChatGPT ও AI টুলস ব্যবহার করে মার্কেটিং)"
      },
      {
        "en": "Live Portfolio Building & Real E-Commerce / SaaS Campaign Case Studies",
        "bn": "লাইভ পোর্টফোলিও তৈরি ও বাস্তব প্রজেক্টভিত্তিক কেস স্টাডি"
      },
      {
        "en": "Advanced Client Hunting Strategy on Fiverr, Upwork, LinkedIn & Direct Outreach",
        "bn": "ফাইভার ও আপওয়ার্কে ক্লায়েন্ট পাওয়ার সিক্রেট স্ট্র্যাটেজি ও লাইফটাইম সাপোর্ট"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Digital Marketing Ecosystem & Sales Funnels",
          "bn": "মডিউল ১: ডিজিটাল মার্কেটিং ইকোসিস্টেম ও সেলস ফানেল"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Digital Marketing Landscape, Inbound vs Outbound & Customer Journey",
            "bn": "ডিজিটাল মার্কেটিং পরিচিতি ও কাস্টমার জার্নি ম্যাপিং"
          },
          {
            "en": "AIDA & TOFU-MOFU-BOFU Sales Funnel Architecture",
            "bn": "সেলস ফানেল ডিজাইন ও বায়ার পারসোনা রিসার্চ"
          },
          {
            "en": "Competitor Analysis, Market Research & Value Proposition",
            "bn": "মার্কেট ও কম্পিটিটর রিসার্চ এবং অফার ক্রিয়েশন"
          },
          {
            "en": "Landing Page Architecture for High Conversion Rates (CRO)",
            "bn": "কনভার্সন অপটিমাইজেশনের জন্য ল্যান্ডিং পেজ স্ট্র্যাটেজি"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Advanced Meta Ads & Funnel Optimization",
          "bn": "মডিউল ২: Meta Ads (Facebook & Instagram) মাস্টারি"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Meta Business Suite, Ad Account Hierarchy & Agency Setup",
            "bn": "মেটা বিজনেস ম্যানেজার ও অ্যাড অ্যাকাউন্ট স্ট্রাকচার"
          },
          {
            "en": "Meta Pixel Setup, Domain Verification & Aggregated Event Measurement",
            "bn": "মেটা পিক্সেল ও ইভেন্ট সেটআপ"
          },
          {
            "en": "Server-Side Tracking with Meta Conversions API (CAPI) & Stape/Cloud",
            "bn": "কনভার্সন এপিআই (CAPI) ও সার্ভার-সাইড ট্র্যাকিং"
          },
          {
            "en": "Laser Audience Targeting, Custom Audiences & Lookalike Scaling (LAL)",
            "bn": "কাস্টম ও লুকঅ্যালাইক অডিয়েন্স ক্রিয়েশন এবং স্কেলিং"
          },
          {
            "en": "High-ROI Creative Testing (ABO vs CBO) & Ad Copy Formulas",
            "bn": "এবিও বনাম সিবিও বাজেট অপটিমাইজেশন ও অ্যাড কপি"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Google Ads & YouTube PPC Campaign Mastery",
          "bn": "মডিউল ৩: Google Ads ও PPC ক্যাম্পেইন মাস্টারি"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Google Ads Account Setup, Billing & Quality Score Mechanics",
            "bn": "গুগল অ্যাডস অ্যাকাউন্ট ও কোয়ালিটি স্কোর ফ্যাক্টর্স"
          },
          {
            "en": "High Buyer-Intent Keyword Research (Broad, Phrase, Exact & Negative)",
            "bn": "বায়ার ইন্টেন্ট কিওয়ার্ড রিসার্চ ও নেগেটিভ কিওয়ার্ড ফিল্টারিং"
          },
          {
            "en": "Google Search Text Ads, Responsive Search Ads & Ad Assets / Extensions",
            "bn": "রেসপনসিভ সার্চ অ্যাডস ও এক্সটেনশন অপটিমাইজেশন"
          },
          {
            "en": "YouTube Video Ads (In-Stream, Bumper) & Google Display Network (GDN)",
            "bn": "ইউটিউব ভিডিও বিজ্ঞাপন ও গুগল ডিসপ্লে ক্যাম্পেইন"
          },
          {
            "en": "Performance Max (PMax) Campaigns & Conversion Tracking Setup",
            "bn": "পারফরম্যান্স ম্যাক্স ক্যাম্পেইন ও কনভার্সন ট্র্যাকিং"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: Search Engine Optimization (Technical, On-Page & Local)",
          "bn": "মডিউল ৪: Search Engine Optimization (SEO)"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Search Engine Algorithms, Crawling, Indexing & Ranking Factors",
            "bn": "গুগল অ্যালগরিদম ও ক্রলিং-ইনডেক্সিং ফান্ডামেন্টালস"
          },
          {
            "en": "Keyword Research, Search Intent & Competitor Content Gap Analysis",
            "bn": "কিওয়ার্ড রিসার্চ ও কনটেন্ট গ্যাপ অ্যানালাইসিস"
          },
          {
            "en": "On-Page SEO: Title Tags, Meta Descriptions, Headings, Internal Links & Schema",
            "bn": "অন-পেজ এসইও, মেটা ডেটা ও স্কিমা মার্কআপ"
          },
          {
            "en": "Technical SEO: Core Web Vitals, XML Sitemaps, Robots.txt & Page Speed",
            "bn": "টেকনিক্যাল এসইও ও সাইট অডিট"
          },
          {
            "en": "Off-Page SEO: High-Authority Backlink Strategies & Digital PR",
            "bn": "অফ-পেজ এসইও ও কোয়ালিটি ব্যাকলিংক বিল্ডিং"
          },
          {
            "en": "Local SEO: Google Business Profile Optimization & Map Rankings",
            "bn": "লোকাল এসইও ও গুগল ম্যাপ র‍্যাংকিং স্ট্র্যাটেজি"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: Data Tracking, GTM & Server-Side GA4 Analytics",
          "bn": "মডিউল ৫: Data Tracking ও GA4 Analytics"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Google Tag Manager (GTM) Container, Tags, Triggers & Variables Setup",
            "bn": "গুগল ট্যাগ ম্যানেজার (GTM) কনফিগারেশন"
          },
          {
            "en": "Google Analytics 4 (GA4) Event Modeling, E-Commerce DataLayer & Funnels",
            "bn": "GA4 ইভেন্ট মডেলিং ও ই-কমার্স ডেটালেয়ার ট্র্যাকিং"
          },
          {
            "en": "Server-Side Tracking Setup with Cloudflare & Google Cloud",
            "bn": "সার্ভার-সাইড ট্র্যাকিং সেটআপ"
          },
          {
            "en": "Custom Attribution Modeling, UTM Tracking & Looker Studio Dashboards",
            "bn": "লুকার স্টুডিও দিয়ে লাইভ ক্লায়েন্ট রিপোর্টিং ড্যাশবোর্ড"
          }
        ]
      },
      {
        "moduleNumber": 6,
        "title": {
          "en": "Module 6: B2B Lead Generation & Cold Email Funnels",
          "bn": "মডিউল ৬: B2B Lead Generation ও কোল্ড ইমেইল"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "LinkedIn Sales Navigator Advanced Filters for Decision Makers",
            "bn": "লিঙ্কডইন সেলস নেভিগেটর দিয়ে টার্গেটেড লিড স্ক্র্যাপিং"
          },
          {
            "en": "B2B Data Scraping, Email Verification & Cleaning Tools (Apollo, Hunter)",
            "bn": "অ্যাপোলো ও হান্টার দিয়ে ইমেইল ভেরিফিকেশন"
          },
          {
            "en": "Cold Email Copywriting, Personalization & Inbox Deliverability (SPF, DKIM, DMARC)",
            "bn": "কোল্ড ইমেইল কপিরাইটিং ও ইনবক্স ডেলিভারিবিলিটি"
          },
          {
            "en": "Automated Drip Outreach Campaigns (Instantly, Smartlead)",
            "bn": "অটোমেটেড ড্রিপ ইমেইল ক্যাম্পেইন সেটআপ"
          }
        ]
      },
      {
        "moduleNumber": 7,
        "title": {
          "en": "Module 7: AI Automation for Marketing (ChatGPT & AI Tools)",
          "bn": "মডিউল ৭: AI Automation Techniques in Marketing"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "ChatGPT Prompt Frameworks for High-Converting Ad Copy & Video Hooks",
            "bn": "ChatGPT দিয়ে হাই-কনভার্টিং অ্যাড কপি ও হুক তৈরি"
          },
          {
            "en": "AI-Powered SEO Blog Writing, Content Outlining & Keyword Clusters",
            "bn": "এআই কনটেন্ট প্ল্যানিং ও এসইও অপটিমাইজড ব্লগ রাইটিং"
          },
          {
            "en": "AI Tools for Ad Visuals, Creative Iterations & Voiceovers",
            "bn": "এআই দিয়ে ক্রিয়েটিভ ব্যানার ও ভয়েসওভার প্রোডাকশন"
          },
          {
            "en": "Automating Social Media Calendars & Marketing CRM Workflows",
            "bn": "সোশ্যাল মিডিয়া অটোমেশন ও সিআরএম পাইপলাইন"
          }
        ]
      },
      {
        "moduleNumber": 8,
        "title": {
          "en": "Module 8: Fiverr/Upwork Mastery & Direct International Client Hunting",
          "bn": "মডিউল ৮: ফ্রিল্যান্সিং ও আন্তর্জাতিক ক্লায়েন্ট হান্টিং"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Building a Live Performance Marketing Portfolio & Client Proofs",
            "bn": "লাইভ ক্যাম্পেইন কেস স্টাডি ও পোর্টফোলিও তৈরি"
          },
          {
            "en": "Fiverr Gig SEO Optimization for Meta Ads, Google Ads & SEO Services",
            "bn": "ফাইভারে ডিজিটাল মার্কেটিং গিগ অপটিমাইজেশন"
          },
          {
            "en": "Upwork Profile Setup, Proposal Writing & Video Pitch Strategies",
            "bn": "আপওয়ার্কে ক্লায়েন্ট উইনিং প্রপোজাল তৈরি"
          },
          {
            "en": "Direct Client Hunting on LinkedIn & Closing $1,000+/Month Retainers",
            "bn": "মার্কেটপ্লেসের বাইরে হাই-টিকিট বিদেশি ক্লায়েন্ট ক্লোজিং"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "24 Live Interactive Classes & Screen Recordings",
        "bn": "২৪ টি লাইভ ক্লাস ও আজীবন রেকর্ডিং এক্সেস"
      },
      {
        "en": "Live Real Ad Budget Practice in Class",
        "bn": "ক্লাসে সরাসরি লাইভ বাজেটে বিজ্ঞাপন পরিচালনা"
      },
      {
        "en": "Ready-Made Funnel Templates & Ad Copy Cheatsheets",
        "bn": "তৈরি করা ফানেল টেমপ্লেট ও কপিরাইটিং ফর্মুলা"
      },
      {
        "en": "Fiverr, Upwork & Direct Client Hunting Mentorship",
        "bn": "মার্কেটপ্লেস ও ডিরেক্ট ক্লায়েন্ট হান্টিং লাইফটাইম সাপোর্ট"
      },
      {
        "en": "Industry-Recognized Digital Marketing Certificate",
        "bn": "প্রফেশনাল ডিজিটাল মার্কেটিং সার্টিফিকেট"
      }
    ],
    "reviews": [
      {
        "id": "r-dm-1",
        "name": "Mehedi Hasan",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "Performance Marketer",
          "bn": "পারফরম্যান্স মার্কেটার"
        },
        "rating": 5,
        "comment": {
          "en": "The Meta Ads Funnel and Server-Side Tracking modules were game changing. Today I manage ad accounts for 3 international e-commerce stores with 4.5x ROAS!",
          "bn": "মেটা অ্যাডস ফানেল ও সিএপিআই ট্র্যাকিংয়ের প্র্যাকটিক্যাল কাজ শেখার পর বর্তমানে আমি ৩টি বিদেশি ই-কমার্স স্টোরের অ্যাড ক্যাম্পেইন সফলভাবে চালাচ্ছি।"
        },
        "date": "2026-08-19"
      }
    ]
  },
  {
    "id": "2",
    "slug": "wordpress-dev",
    "title": {
      "en": "Professional WordPress Development",
      "bn": "প্রফেশনাল ওয়ার্ডপ্রেস ডেভেলপমেন্ট"
    },
    "subtitle": {
      "en": "Custom Theme & Plugin Development, WooCommerce & Elementor Pro",
      "bn": "কাস্টম থিম ও প্লাগইন ডেভেলপমেন্ট, উকমার্স এবং এন্টারপ্রাইজ ওয়েবসাইট বিল্ডিং"
    },
    "category": "web",
    "categoryLabel": {
      "en": "Programming",
      "bn": "প্রোগ্রামিং"
    },
    "badge": {
      "en": "FREELANCING",
      "bn": "ফ্রিল্যান্সিং"
    },
    "mode": {
      "en": "Offline",
      "bn": "অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 65,
    "enrolledCount": "50+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "20000৳",
    "rawFee": 20000,
    "originalFee": "25000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "24 Classes",
      "bn": "২৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/wordpress.jpg",
    "videoUrl": "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2302715647232585%2F&show_text=0",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Professional%20WordPress%20Development%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Mahmudur Rahman",
      "designation": {
        "en": "Senior WordPress Engineer",
        "bn": "সিনিয়র ওয়ার্ডপ্রেস ইঞ্জিনিয়ার"
      },
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "Developed 300+ client projects and custom plugins.",
        "bn": "৩০০+ ক্লায়েন্ট প্রজেক্ট ও কাস্টম থিম ডেভেলপার।"
      },
      "experience": "10+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Build professional e-commerce stores, business websites, and dynamic portals without complex coding. Master Elementor Pro, Divi Builder, WooCommerce, local & international payment gateways (bKash, Nagad, Stripe), ACF, Crocoblock, booking systems, speed optimization, and high-ticket freelancing.",
      "bn": "কোডিং ছাড়া প্রফেশনাল ই-কমার্স ওয়েবসাইট তৈরি এবং ফ্রিল্যান্সিং ও বিজনেস শুরু করুন! জিরো কোডিং ব্যাকগ্রাউন্ড থেকে শুরু করে প্রফেশনাল ওয়েবসাইট ডেভেলপমেন্ট এবং ফ্রিল্যান্সিংয়ের পুরো প্রক্রিয়া শিখবেন। এলিমেন্টর প্রো ও ডিভি (Divi) দিয়ে আধুনিক ল্যান্ডিং পেজ, উকমার্স (WooCommerce) দিয়ে ফুল-ফাংশনাল ই-কমার্স শপ এবং বিকাশ-নগদসহ দেশি-বিদেশি পেমেন্ট গেটওয়ে ইন্টিগ্রেশন অন্তর্ভুক্ত।"
    },
    "fullDescription": {
      "en": "Comprehensive WordPress Development Bootcamp covering high-converting landing page design, full-scale WooCommerce architecture with multi-currency and gateway integrations, hotel and appointment booking engines, ACF/JetEngine dynamic listings, sales funnels, speed optimization, and Fiverr/Upwork marketplace strategies.",
      "bn": "হোটেল ও সার্ভিস বুকিং সিস্টেম, এসিএফ (ACF) ও ক্রোকোব্লক দিয়ে ডায়নামিক ওয়েবসাইট তৈরি, সেলস ফানেল এবং মার্কেটিং অটোমেশন সেটআপ করার পদ্ধতি শিখবেন। সাথে থাকছে প্রফেশনাল পোর্টফোলিও তৈরি, সাইটের স্পিড ও সিকিউরিটি অপটিমাইজেশন এবং ফাইভার ও আপওয়ার্কে সফল ফ্রিল্যান্সিং ক্যারিয়ার গড়ার কমপ্লিট গাইডলাইন। বিশেষ আকর্ষণ: লাইভ প্রজেক্ট, প্রিমিয়াম থিম-প্লাগিন প্র্যাকটিস ফাইল, লাইফটাইম রেকর্ডিং এবং প্রফেশনাল সার্টিফিকেট!"
    },
    "coreValues": [
      {
        "id": "cv-wp-1",
        "title": {
          "en": "Zero-Coding to Pro Websites",
          "bn": "কোডিং ছাড়া প্রফেশনাল ওয়েবসাইট"
        },
        "desc": {
          "en": "Design stunning landing pages and dynamic portals using visual builders like Elementor Pro & Divi.",
          "bn": "জিরো কোডিংয়েও আধুনিক ল্যান্ডিং পেজ ও বিজনেস ওয়েবসাইট তৈরির পূর্ণাঙ্গ দক্ষতা।"
        },
        "icon": "LayoutGrid"
      },
      {
        "id": "cv-wp-2",
        "title": {
          "en": "WooCommerce & Payment Gateways",
          "bn": "উকমার্স ও পেমেন্ট ইন্টিগ্রেশন"
        },
        "desc": {
          "en": "Complete e-commerce store with bKash, Nagad, Stripe, PayPal and automated checkout flows.",
          "bn": "বিকাশ, নগদ, রকেট ও আন্তর্জাতিক পেমেন্ট গেটওয়ে সহ ফুল ই-কমার্স শপ সেটআপ।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv-wp-3",
        "title": {
          "en": "Premium Plugins & Freelance Roadmap",
          "bn": "প্রিমিয়াম টুলস ও ফ্রিল্যান্সিং"
        },
        "desc": {
          "en": "Get access to premium themes/plugins and step-by-step client hunting guidance on Fiverr & Upwork.",
          "bn": "প্রিমিয়াম থিম-প্লাগিন প্র্যাকটিস ফাইল এবং মার্কেটপ্লেসে সফল ক্যারিয়ার গাইডলাইন।"
        },
        "icon": "CheckCircle2"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Zero-Coding Background to Professional Website Development & Freelancing",
        "bn": "জিরো কোডিং ব্যাকগ্রাউন্ড থেকে প্রফেশনাল ওয়েবসাইট ডেভেলপমেন্ট"
      },
      {
        "en": "Modern Landing Page & Business Site Design with Elementor Pro & Divi",
        "bn": "এলিমেন্টর প্রো ও ডিভি দিয়ে আধুনিক ল্যান্ডিং পেজ ও বিজনেস ওয়েবসাইট ডিজাইন"
      },
      {
        "en": "Full-Functional WooCommerce E-Commerce Shop Setup & Configuration",
        "bn": "উকমার্স দিয়ে ফুল-ফাংশনাল ই-কমার্স শপ ও ইনভেন্টরি ম্যানেজমেন্ট"
      },
      {
        "en": "bKash, Nagad, Rocket, Stripe & PayPal Payment Gateway Integrations",
        "bn": "বিকাশ, নগদ, রকেট ও আন্তর্জাতিক পেমেন্ট গেটওয়ে ইন্টিগ্রেশন"
      },
      {
        "en": "Dynamic Websites with ACF (Advanced Custom Fields) & Crocoblock / JetEngine",
        "bn": "এসিএফ (ACF) ও ক্রোকোব্লক দিয়ে ডায়নামিক ওয়েবসাইট ও কাস্টম পোস্ট তৈরি"
      },
      {
        "en": "Hotel, Restaurant & Service Appointment Booking Systems",
        "bn": "হোটেল, রেস্টুরেন্ট ও সার্ভিস বুকিং সিস্টেম সেটআপ"
      },
      {
        "en": "Sales Funnel, Checkout Optimization & Marketing Automation Workflows",
        "bn": "সেলস ফানেল এবং মার্কেটিং অটোমেশন সেটআপ করার পদ্ধতি"
      },
      {
        "en": "Speed Optimization (Core Web Vitals 90+ Score) & Website Security",
        "bn": "প্রফেশনাল পোর্টফোলিও তৈরি, সাইটের স্পিড ও সিকিউরিটি অপটিমাইজেশন"
      },
      {
        "en": "Complete Fiverr & Upwork Freelancing Blueprint for High-Ticket Orders",
        "bn": "ফাইভার ও আপওয়ার্কে সফল ফ্রিল্যান্সিং ক্যারিয়ার গড়ার কমপ্লিট গাইডলাইন"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: WordPress Core, Domain & Hosting Environment Setup",
          "bn": "মডিউল ১: WordPress বেসিকস, ডোমেন ও হোস্টিং সেটআপ"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Domain Name, DNS Configuration & Fast Cloud Hosting Setup",
            "bn": "ডোমেন নেম, ডিএনএস কনফিগারেশন ও ক্লাউড হোস্টিং সেটআপ"
          },
          {
            "en": "cPanel Navigation, MySQL Database Creation & WordPress Installation",
            "bn": "সিপ্যানেল, মাইএসকিউএল ডাটাবেজ ও ওয়ার্ডপ্রেস ইনস্টলেশন"
          },
          {
            "en": "WordPress Dashboard Tour, General Settings, Permalinks & Media Library",
            "bn": "ওয়ার্ডপ্রেস ড্যাশবোর্ড পরিচিতি, পারমালিংক ও মিডিয়া সেটিংস"
          },
          {
            "en": "Free vs Premium Themes & Plugins Installation and Management",
            "bn": "থিম ও প্লাগইন ইন্সটলেশন এবং লাইসেন্স ম্যানেজমেন্ট"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Elementor Pro & Divi Visual Design Mastery",
          "bn": "মডিউল ২: Elementor Pro ও Divi দিয়ে আধুনিক ডিজাইন"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Elementor Pro Layouts, Flexbox Containers & Modern Grids",
            "bn": "এলিমেন্টর ফ্লেক্সবক্স কন্টেইনার ও রেসপনসিভ গ্রিড লেআউট"
          },
          {
            "en": "Building Custom Headers, Footers & Single Post Templates with Theme Builder",
            "bn": "থিম বিল্ডার দিয়ে কাস্টম হেডার, ফুটার ও ব্লগ টেমপ্লেট তৈরি"
          },
          {
            "en": "Divi Builder Modules, Visual Presets & Interactive Hover Effects",
            "bn": "ডিভি বিল্ডার দিয়ে বিজনেস ওয়েবসাইট ও ইন্টারঅ্যাক্টিভ ডিজাইন"
          },
          {
            "en": "Designing Pixel-Perfect Responsive Landing Pages from Scratch",
            "bn": "মোবাইল ও ট্যাবলেট ফ্রেন্ডলি হাই-কনভার্টিং ল্যান্ডিং পেজ ডিজাইন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: WooCommerce Full-Scale E-Commerce Store Development",
          "bn": "মডিউল ৩: WooCommerce দিয়ে ফুল-ফাংশনাল ই-কমার্স শপ"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "WooCommerce Setup Wizard, Currency, Location & Shipping Zones",
            "bn": "উকমার্স সেটআপ, কারেন্সি ও শিপিং জোন কনফিগারেশন"
          },
          {
            "en": "Adding Simple, Variable, Grouped & Digital Downloadable Products",
            "bn": "সিম্পল ও ভ্যারিয়েবল প্রোডাক্ট লিস্টিং ও ইনভেন্টরি ম্যানেজমেন্ট"
          },
          {
            "en": "Customizing Shop Page, Single Product Page & Cart/Checkout Layouts",
            "bn": "এলিমেন্টর দিয়ে শপ পেজ ও সিঙ্গেল প্রোডাক্ট পেজ কাস্টমাইজেশন"
          },
          {
            "en": "Coupons, Discount Rules, Tax Configurations & Order Invoicing",
            "bn": "কুপন কোড, ডিসকাউন্ট রুলস ও অটোমেটেড পিডিএফ ইনভয়েস"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: Payment Gateway Integrations (bKash, Nagad, Stripe)",
          "bn": "মডিউল ৪: বিকাশ, নগদ, রকেট ও স্ট্রাইপ পেমেন্ট গেটওয়ে"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Integrating bKash, Nagad & Rocket Automated Merchant Gateways",
            "bn": "বিকাশ ও নগদ অটোমেটেড পেমেন্ট গেটওয়ে ইন্টিগ্রেশন"
          },
          {
            "en": "SSLCommerz / Aamarpay Local Multi-Gateway Integration",
            "bn": "এসএসএলকমার্জ ও দেশীয় মাল্টি-পেমেন্ট গেটওয়ে সেটআপ"
          },
          {
            "en": "International Stripe Credit Card & PayPal Payment Gateway Setup",
            "bn": "স্ট্রাইপ ও পেপ্যাল আন্তর্জাতিক ক্রেডিট কার্ড পেমেন্ট সেটআপ"
          },
          {
            "en": "Cash on Delivery (COD), OTP Order Verification & WhatsApp Alerts",
            "bn": "ক্যাশ অন ডেলিভারি, ওটিপি ভেরিফিকেশন ও হোয়াটসঅ্যাপ অর্ডার নোটিফিকেশন"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: Dynamic Websites with ACF & Crocoblock / JetEngine",
          "bn": "মডিউল ৫: ACF ও Crocoblock দিয়ে ডায়নামিক ওয়েবসাইট"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Custom Post Types (CPT UI) & Taxonomy Architecture",
            "bn": "কাস্টম পোস্ট টাইপ ও ট্যাক্সোনমি তৈরি"
          },
          {
            "en": "Advanced Custom Fields (ACF Pro) Dynamic Fields & Repeaters",
            "bn": "এসিএফ প্রো দিয়ে ডায়নামিক ফিল্ডস ও রিপিটার সেটআপ"
          },
          {
            "en": "JetEngine Listing Grids, Custom Post Relations & Query Builder",
            "bn": "জেটইঞ্জিন লিস্টিং গ্রিডস ও রিলেশনাল ডেটাবেজ ম্যানেজমেন্ট"
          },
          {
            "en": "Building Dynamic Real Estate, Directory & Portfolio Portals",
            "bn": "রিয়েল এস্টেট ও প্রফেশনাল ডিরেক্টরি পোর্টাল তৈরি"
          }
        ]
      },
      {
        "moduleNumber": 6,
        "title": {
          "en": "Module 6: Hotel, Restaurant & Service Booking Systems",
          "bn": "মডিউল ৬: হোটেল ও সার্ভিস বুকিং সিস্টেম সেটআপ"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Hotel Room Availability Calendars, Pricing Rules & Booking Engine",
            "bn": "হোটেল রুম বুকিং ও লাইভ ক্যালেন্ডার রিজার্ভেশন সিস্টেম"
          },
          {
            "en": "Doctor / Salon / Consultant Appointment Booking System (Amelia / Bookly)",
            "bn": "সার্ভিস ও ডক্টর অ্যাপয়েন্টমেন্ট বুকিং সিস্টেম"
          },
          {
            "en": "Multi-step Booking Forms & Automated Email/SMS Reminders",
            "bn": "মাল্টি-স্টেপ বুকিং ফর্ম ও অটোমেটিক কনফার্মেশন মেসেজ"
          },
          {
            "en": "Client Management Dashboard & Booking Cancellation Flows",
            "bn": "ক্লায়েন্ট বুকিং ম্যানেজমেন্ট ও অ্যাডমিন ড্যাশবোর্ড"
          }
        ]
      },
      {
        "moduleNumber": 7,
        "title": {
          "en": "Module 7: Sales Funnels, Speed Optimization & Security",
          "bn": "মডিউল ৭: সেলস ফানেল, স্পিড ও সিকিউরিটি অপটিমাইজেশন"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Sales Funnel Setup with WPFunnels / CartFlows & One-Click Upsells",
            "bn": "সেলস ফানেল, আপসেল ও ডাউনসেল স্ট্র্যাটেজি সেটআপ"
          },
          {
            "en": "Website Speed Optimization for 90+ Score on Google PageSpeed",
            "bn": "ডব্লিউপি রকেট ও ইমেজ অপটিমাইজেশন দিয়ে সাইট স্পিড বৃদ্ধি"
          },
          {
            "en": "WordPress Security Hardening, Wordfence & Malware Protection",
            "bn": "ওয়ার্ডপ্রেস সিকিউরিটি ও ম্যালওয়্যার প্রটেকশন"
          },
          {
            "en": "Automated Cloud Backups, Migration & Domain Transfer Techniques",
            "bn": "অটোমেটেড ব্যাকআপ ও ওয়েবসাইট মাইগ্রেশন টেকনিক"
          }
        ]
      },
      {
        "moduleNumber": 8,
        "title": {
          "en": "Module 8: Fiverr & Upwork Freelancing Blueprint + Live Projects",
          "bn": "মডিউল ৮: ফাইভার-আপওয়ার্ক ফ্রিল্যান্সিং ও লাইভ প্রজেক্ট"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Creating a Professional WordPress Freelancer Portfolio Website",
            "bn": "প্রফেশনাল ওয়ার্ডপ্রেস পোর্টফোলিও ওয়েবসাইট তৈরি"
          },
          {
            "en": "Fiverr WordPress Gig SEO, Keyword Research & First Order Strategy",
            "bn": "ফাইভার গিগ এসইও ও প্রথম অর্ডার পাওয়ার সিক্রেট মেথড"
          },
          {
            "en": "Upwork Profile Setup, Winning Proposal Writing & Client Communication",
            "bn": "আপওয়ার্কে ক্লায়েন্ট উইনিং প্রপোজাল রাইটিং কৌশল"
          },
          {
            "en": "Handling International Client Orders, Pricing & Long-Term Contracts",
            "bn": "ইন্টারন্যাশনাল ক্লায়েন্ট হ্যান্ডলিং ও লং-টার্ম কন্ট্রাক্ট তৈরি"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "24 Live Interactive Classes & Screen Recordings",
        "bn": "২৪ টি লাইভ ক্লাস ও লাইফটাইম ভিডিও রেকর্ডিং"
      },
      {
        "en": "Premium Themes & Plugins Practice Files Included",
        "bn": "প্রিমিয়াম থিম-প্লাগইন প্র্যাকটিস ফাইলস ও রিসোর্স"
      },
      {
        "en": "Live E-Commerce & Dynamic Booking Projects",
        "bn": "লাইভ ই-কমার্স ও বুকিং পোর্টাল প্রজেক্টস"
      },
      {
        "en": "Dedicated Freelancing Support on Fiverr & Upwork",
        "bn": "ফাইভার ও আপওয়ার্কে ফ্রিল্যান্সিং গাইডলাইন ও সাপোর্ট"
      },
      {
        "en": "Industry-Recognized WordPress Certificate",
        "bn": "প্রফেশনাল কোর্স কমপ্লিশন সার্টিফিকেট"
      }
    ],
    "reviews": [
      {
        "id": "r-wp-1",
        "name": "Nazmul Huda",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "WordPress Freelancer",
          "bn": "ওয়ার্ডপ্রেস ফ্রিল্যান্সার"
        },
        "rating": 5,
        "comment": {
          "en": "The WooCommerce and payment gateway modules were super practical. I started receiving client projects on Fiverr within 2 months of enrolling!",
          "bn": "উকমার্স ও পেমেন্ট গেটওয়ের কাজগুলো একদম প্র্যাকটিক্যাল শেখানো হয়েছে। কোর্স চলাকালীনই ফাইভারে আমার প্রথম ক্লায়েন্ট প্রজেক্ট কমপ্লিট করেছি।"
        },
        "date": "2026-08-14"
      }
    ]
  },
  {
    "id": "6",
    "slug": "uxui-designer",
    "title": {
      "en": "Certified UX/UI Designer",
      "bn": "সার্টিফাইড ইউএক্স/ইউআই ডিজাইনার"
    },
    "subtitle": {
      "en": "Figma, User Research, Wireframing, Prototyping & Design Systems",
      "bn": "ফিগমায় প্রফেশনাল ডিজাইন সিস্টেম, মাইক্রো-ইন্টারঅ্যাকশন ও প্রোটোটাইপিং"
    },
    "category": "uiux",
    "categoryLabel": {
      "en": "Art & Design",
      "bn": "আর্ট ও ডিজাইন"
    },
    "badge": {
      "en": "TOP RATED",
      "bn": "টপ রেটেড"
    },
    "mode": {
      "en": "Offline",
      "bn": "অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 90,
    "enrolledCount": "50+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "20000৳",
    "rawFee": 20000,
    "originalFee": "26000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "24 Classes",
      "bn": "২৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/ui ux design.jpg",
    "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Certified%20UX%2FUI%20Designer%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Tariqul Islam",
      "designation": {
        "en": "Lead Product Designer",
        "bn": "লিড প্রোডাক্ট ডিজাইনার"
      },
      "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "UX Specialist for tech startups.",
        "bn": "টেক স্টার্টআপের অভিজ্ঞ ইউআই/ইউএক্স ডিজাইনার।"
      },
      "experience": "8+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Learn user empathy, wireframing, interactive prototyping in Figma, and design token handoffs for developers.",
      "bn": "ফিগমায় প্রফেশনাল মোবাইল ও ওয়েব প্রোডাক্ট ইউআই এবং ইউজার এক্সপেরিয়েন্স ডিজাইন।"
    },
    "fullDescription": {
      "en": "Design modern digital products that users love.",
      "bn": "ডিজিটাল ইন্টারফেস ও ইউজার জার্নি ডিজাইন করার সমস্ত টেকনিক শিখুন।"
    },
    "coreValues": [],
    "learningOutcomes": [],
    "curriculum": [],
    "includedItems": [],
    "reviews": []
  },
  {
    "id": "9",
    "slug": "cyber-sec",
    "title": {
      "en": "Mastering Cyber Security & Penetration Testing",
      "bn": "মাস্টারিং সাইবার সিকিউরিটি ও পেনেট্রেশন টেস্টিং"
    },
    "subtitle": {
      "en": "Kali Linux, Ethical Hacking, Web App Security, OWASP & Network Defense",
      "bn": "পেনিট্রেশন টেস্টিং, নেটওয়ার্ক ডিফেন্স ও ওয়েব সিকিউরিটি ভালনারেবিলিটি অ্যানালাইসিস"
    },
    "category": "cyber",
    "categoryLabel": {
      "en": "Cybersecurity",
      "bn": "সাইবার সিকিউরিটি"
    },
    "badge": {
      "en": "SECURITY",
      "bn": "সিকিউরিটি"
    },
    "mode": {
      "en": "Offline",
      "bn": "অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 50,
    "enrolledCount": "50+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "20000৳",
    "rawFee": 20000,
    "originalFee": "28000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "24 Classes",
      "bn": "২৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/ethical hacking.jpg",
    "videoUrl": "https://www.youtube.com/embed/inWWhr5tnEA?autoplay=1",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Mastering%20Cyber%20Security%20%26%20Penetration%20Testing%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Shariar Ahmed",
      "designation": {
        "en": "CEH Certified Cyber Security Specialist",
        "bn": "সিইএইচ সার্টিফাইড সিকিউরিটি স্পেশালিস্ট"
      },
      "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "Ethical Hacker with SOC operations background.",
        "bn": "এথিক্যাল হ্যাকিং ও সিকিউরিটি অপারেশনে বিশেষজ্ঞ।"
      },
      "experience": "7+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Hands-on cybersecurity bootcamp. Learn Kali Linux penetration tools, OWASP vulnerability scanning, Wireshark, and defensive hardening.",
      "bn": "পেনিট্রেশন টেস্টিং, নেটওয়ার্ক ডিফেন্স ও ওয়েব সিকিউরিটি ভালনারেবিলিটি অ্যানালাইসিস।"
    },
    "fullDescription": {
      "en": "Protect enterprise networks and prepare for CEH & SOC analyst roles.",
      "bn": "নেটওয়ার্ক ও ওয়েব অ্যাপ্লিকেশন সুরক্ষিত রাখার কৌশল অর্জন করুন।"
    },
    "coreValues": [],
    "learningOutcomes": [],
    "curriculum": [],
    "includedItems": [],
    "reviews": []
  },
  {
    "id": "10",
    "slug": "comptia-networking",
    "title": {
      "en": "CompTIA A+, CCNA & MTCNA",
      "bn": "কম্পটিআইএ এ+, সিসিএনএ ও এমটিসিএনএ"
    },
    "subtitle": {
      "en": "Hardware, Cisco Routing & Switching, MikroTik RouterOS & Server Management",
      "bn": "সিসকো রাউটিং, সুনির্দিষ্ট মাইক্রোটিক রাউটারওএস ও নেটওয়ার্ক সার্ভার কনফিগারেশন"
    },
    "category": "cloud",
    "categoryLabel": {
      "en": "Networking & Server",
      "bn": "নেটওয়ার্কিং ও সার্ভার"
    },
    "badge": {
      "en": "CERTIFIED",
      "bn": "সার্টিফাইড"
    },
    "mode": {
      "en": "Offline",
      "bn": "অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 40,
    "enrolledCount": "50+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "25000৳",
    "rawFee": 25000,
    "originalFee": "32000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "24 Classes",
      "bn": "২৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/soc analyst.jpg",
    "videoUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22CompTIA%20A%2B%2C%20CCNA%20%26%20MTCNA%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Kamrul Islam",
      "designation": {
        "en": "CCIE / MTCNA Senior Network Engineer",
        "bn": "সিনিয়র নেটওয়ার্ক আর্কিটেক্ট"
      },
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "11+ years managing ISP and corporate infrastructure.",
        "bn": "আইএসপি ও এন্টারপ্রাইজ নেটওয়ার্কিংয়ে ১১+ বছরের অভিজ্ঞতা।"
      },
      "experience": "11+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Comprehensive computer hardware, Cisco CCNA routing/switching, and MikroTik MTCNA certification course with real hardware labs.",
      "bn": "কম্পিউটার হার্ডওয়্যার, সিসকো ও মাইক্রোটিক নেটওয়ার্কিং নিয়ে লাইভ ল্যাব সহ ট্রেনিং।"
    },
    "fullDescription": {
      "en": "Launch your career as a System Administrator or Network Engineer.",
      "bn": "নেটওয়ার্ক ইঞ্জিনিয়ার বা সিস্টেম অ্যাডমিনিস্ট্রেটর হিসেবে ক্যারিয়ার গড়ুন।"
    },
    "coreValues": [],
    "learningOutcomes": [],
    "curriculum": [],
    "includedItems": [],
    "reviews": []
  },
  {
    "id": "11",
    "slug": "diploma-multimedia",
    "title": {
      "en": "Diploma in Multimedia",
      "bn": "ডিপ্লোমা ইন মাল্টিমিডিয়া"
    },
    "subtitle": {
      "en": "3D Animation, Motion Graphics, VFX, Video Editing & Digital Arts",
      "bn": "ভিডিও এডিটিং, মোশন গ্রাফিক্স, ৩ডি অ্যানিমেশন ও ডিজিটাল মিডিয়া প্রোডাকশন"
    },
    "category": "diploma",
    "categoryLabel": {
      "en": "Diploma",
      "bn": "ডিপ্লোমা"
    },
    "badge": {
      "en": "DIPLOMA",
      "bn": "ডিপ্লোমা"
    },
    "mode": {
      "en": "Offline",
      "bn": "অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 35,
    "enrolledCount": "50+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "80000৳",
    "rawFee": 80000,
    "originalFee": "100000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "36 Classes",
      "bn": "৩৬ টি ক্লাস"
    },
    "image": "/images/course thumbnail/video editing &motion graphics.jpg",
    "videoUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Diploma%20in%20Multimedia%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Tanvir Hasan",
      "designation": {
        "en": "3D VFX Director",
        "bn": "৩ডি ভিএফএক্স ডিরেক্টর"
      },
      "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "Specialist in television commercial visual effects.",
        "bn": "টিভি কমার্শিয়াল ও মিডিয়া প্রোডাকশন বিশেষজ্ঞ।"
      },
      "experience": "10+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Advanced professional diploma track covering Premiere Pro, After Effects, Maya, Blender, and sound design.",
      "bn": "৩ডি অ্যানিমেশন, সিনেমাটিক মোশন পিকচার ও ডিজিটাল মিডিয়া প্রোডাকশন প্রোগ্রাম।"
    },
    "fullDescription": {
      "en": "Master creative visual arts for film, advertising, and gaming.",
      "bn": "মাল্টিমিডিয়া ইন্ডাস্ট্রির সর্বোচ্চ মানের স্কিল অর্জনের ডিপ্লোমা প্রোগ্রাম।"
    },
    "coreValues": [],
    "learningOutcomes": [],
    "curriculum": [],
    "includedItems": [],
    "reviews": []
  },
  {
    "id": "13",
    "slug": "spoken-english",
    "title": {
      "en": "Spoken english & Business Communication",
      "bn": "স্পোকেন ইংলিশ ও বিজনেস কমিউনিকেশন"
    },
    "subtitle": {
      "en": "Fluency, Corporate Presentation, Interview Preparation & Business English",
      "bn": "জড়তা কাটিয়ে প্রফেশনাল প্রেজেন্টেশন ও আন্তর্জাতিক ক্লায়েন্টদের সাথে কথা বলার কৌশল"
    },
    "category": "language",
    "categoryLabel": {
      "en": "Language Skills",
      "bn": "ল্যাংগুয়েজ স্কিলস"
    },
    "badge": {
      "en": "CAREER",
      "bn": "ক্যারিয়ার"
    },
    "mode": {
      "en": "Offline/Online",
      "bn": "অফলাইন/অনলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 110,
    "enrolledCount": "50+ Enrolled",
    "languages": {
      "en": "English / Bengali",
      "bn": "ইংরেজি / বাংলা"
    },
    "fee": "10000৳",
    "rawFee": 10000,
    "originalFee": "14000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "24 Classes",
      "bn": "২৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/Speak English Fluently.jpg",
    "videoUrl": "https://www.youtube.com/embed/nU-IIXBWlS4?autoplay=1",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Spoken%20english%20%26%20Business%20Communication%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Sabrina Yasmin",
      "designation": {
        "en": "Corporate Soft Skills Trainer",
        "bn": "কর্পোরেট কমিউনিকেশন ট্রেইনার"
      },
      "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "Trained 5,000+ professionals for international client facing roles.",
        "bn": "আন্তর্জাতিক ক্লায়েন্ট কমিউনিকেশনে অভিজ্ঞ ট্রেইনার।"
      },
      "experience": "8+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Overcome hesitation, master business emails, corporate negotiations, and fluent English speaking.",
      "bn": "জড়তা কাটিয়ে প্রফেশনাল প্রেজেন্টেশন ও আন্তর্জাতিক ক্লায়েন্টদের সাথে অনর্গল কথা বলার কৌশল।"
    },
    "fullDescription": {
      "en": "Boost your career confidence for global job interviews and presentations.",
      "bn": "আন্তর্জাতিক কর্মক্ষেত্রে অনর্গল ইংরেজিতে যোগাযোগের দক্ষতা অর্জন।"
    },
    "coreValues": [],
    "learningOutcomes": [],
    "curriculum": [],
    "includedItems": [],
    "reviews": []
  },
  {
    "id": "14",
    "slug": "content-writing-seo",
    "title": {
      "en": "Content Writing with SEO",
      "bn": "কন্টেন্ট রাইটিং উইথ এসইও"
    },
    "subtitle": {
      "en": "Copywriting, Article Writing, Keyword Research & On-Page SEO Optimization",
      "bn": "হাই-কোয়ালিটি কন্টেন্ট রাইটিং, কি-ওয়ার্ড রিসার্চ এবং গুগল র‍্যাংকিং টেকনিক"
    },
    "category": "marketing",
    "categoryLabel": {
      "en": "Digital Marketing",
      "bn": "ডিজিটাল মার্কেটিং"
    },
    "badge": {
      "en": "ESSENTIAL",
      "bn": "এসেনশিয়াল"
    },
    "mode": {
      "en": "Offline",
      "bn": "অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 55,
    "enrolledCount": "50+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "15000৳",
    "rawFee": 15000,
    "originalFee": "20000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "24 Classes",
      "bn": "২৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/Digital Marketing.jpg",
    "videoUrl": "https://www.youtube.com/embed/nU-IIXBWlS4?autoplay=1",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Content%20Writing%20with%20SEO%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Rashedul Hasan",
      "designation": {
        "en": "Content Strategy Lead",
        "bn": "কন্টেন্ট স্ট্র্যাটেজি লিড"
      },
      "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "Published 1,000+ SEO articles ranking on Google page 1.",
        "bn": "এসইও কন্টেন্ট স্ট্র্যাটেজিতে অভিজ্ঞ লেখক।"
      },
      "experience": "7+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Learn engaging article writing, blog SEO, keyword analysis, copy structuring, and AI assisted editing.",
      "bn": "এসইও ফ্রেন্ডলি কন্টেন্ট রাইটিং, কি-ওয়ার্ড রিসার্চ ও গুগল র‍্যাংকিং স্ট্র্যাটেজি।"
    },
    "fullDescription": {
      "en": "Build a lucrative freelance writing career or manage content teams.",
      "bn": "ফ্রিল্যান্সিং কন্টেন্ট রাইটার হিসেবে গ্লোবাল মার্কেটে কাজ করুন।"
    },
    "coreValues": [],
    "learningOutcomes": [],
    "curriculum": [],
    "includedItems": [],
    "reviews": []
  },
  {
    "id": "15",
    "slug": "sap-abap",
    "title": {
      "en": "SAP (ABAP)",
      "bn": "এসএপি (এবিএপি)"
    },
    "subtitle": {
      "en": "Advanced Business Application Programming for Enterprise ERP Development",
      "bn": "এন্টারপ্রাইজ ইআরপি ডেভেলপমেন্ট ও এসএপি এবিএপি প্রোগ্রামিং"
    },
    "category": "management",
    "categoryLabel": {
      "en": "Management",
      "bn": "ম্যানেজমেন্ট"
    },
    "badge": {
      "en": "ENTERPRISE",
      "bn": "এন্টারপ্রাইজ"
    },
    "mode": {
      "en": "Offline",
      "bn": "অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 30,
    "enrolledCount": "50+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "17000৳",
    "rawFee": 17000,
    "originalFee": "25000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "24 Classes",
      "bn": "২৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/Cloud-Devops.jpg",
    "videoUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22SAP%20(ABAP)%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Anisur Rahman",
      "designation": {
        "en": "SAP Technical Consultant",
        "bn": "এসএপি টেকনিক্যাল কনসালটেন্ট"
      },
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "SAP ABAP Solution Architect with 12+ years in corporate ERP projects.",
        "bn": "এসএপি ইআরপি বাস্তবায়নে ১২+ বছরের অভিজ্ঞতা সম্পন্ন কনসালটেন্ট।"
      },
      "experience": "12+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Learn SAP ABAP syntax, Data Dictionary, SmartForms, ALV Reports, BADIs, and SAP HANA integration.",
      "bn": "এসএপি সিস্টেম ডাটাবেস, ডিকশনারি ও কাস্টম রিপোর্ট প্রোগ্রামিং ট্রেনিং।"
    },
    "fullDescription": {
      "en": "Become a certified SAP ABAP developer for MNCs and large corporate groups.",
      "bn": "মাল্টিন্যাশনাল কোম্পানিতে এসএপি ডেভেলপার হিসেবে ক্যারিয়ার শুরু করুন।"
    },
    "coreValues": [],
    "learningOutcomes": [],
    "curriculum": [],
    "includedItems": [],
    "reviews": []
  },
  {
    "id": "16",
    "slug": "sap-fico",
    "title": {
      "en": "SAP (FICO)",
      "bn": "এসএপি (এফআইসিও)"
    },
    "subtitle": {
      "en": "Financial Accounting & Controlling Module for Corporate ERP Management",
      "bn": "এন্টারপ্রাইজ ফাইন্যান্সিয়াল অ্যাকাউন্টিং ও কন্ট্রোলিং ইআরপি ম্যানেজমেন্ট"
    },
    "category": "management",
    "categoryLabel": {
      "en": "Management",
      "bn": "ম্যানেজমেন্ট"
    },
    "badge": {
      "en": "ENTERPRISE",
      "bn": "এন্টারপ্রাইজ"
    },
    "mode": {
      "en": "Offline",
      "bn": "অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 40,
    "enrolledCount": "50+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "17000৳",
    "rawFee": 17000,
    "originalFee": "25000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "24 Classes",
      "bn": "২৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/linux system admin.jpg",
    "videoUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22SAP%20(FICO)%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Anisur Rahman",
      "designation": {
        "en": "SAP FICO Lead Consultant",
        "bn": "এসএপি এফআইসিও লিড কনসালটেন্ট"
      },
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "Implemented SAP Finance in leading MNCs.",
        "bn": "ফাইন্যান্সিয়াল অডিট ও এসএপি এফআইসিও স্পেশালিস্ট।"
      },
      "experience": "12+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Master SAP General Ledger, Accounts Payable, Receivable, Asset Accounting, and Controlling modules.",
      "bn": "এসএপি অ্যাকাউন্টিং, ফাইন্যান্সিয়াল রিপোর্ট ও বাজেট কন্ট্রোলিং ট্রেনিং।"
    },
    "fullDescription": {
      "en": "Essential training for finance managers and ERP consultants.",
      "bn": "ফাইন্যান্স ও অ্যাকাউন্টিং পেশাজীবীদের জন্য উপযোগী কোর্স।"
    },
    "coreValues": [],
    "learningOutcomes": [],
    "curriculum": [],
    "includedItems": [],
    "reviews": []
  },
  {
    "id": "17",
    "slug": "sap-mm",
    "title": {
      "en": "SAP (MM)",
      "bn": "এসএপি (এমএম)"
    },
    "subtitle": {
      "en": "Materials Management, Procurement, Inventory & Supply Chain ERP",
      "bn": "ম্যাটেরিয়ালস ম্যানেজমেন্ট, প্রকিউরমেন্ট ও সাপ্লাই চেইন ইআরপি সলিউশন"
    },
    "category": "management",
    "categoryLabel": {
      "en": "Management",
      "bn": "ম্যানেজমেন্ট"
    },
    "badge": {
      "en": "ENTERPRISE",
      "bn": "এন্টারপ্রাইজ"
    },
    "mode": {
      "en": "Offline",
      "bn": "অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 35,
    "enrolledCount": "50+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "17000৳",
    "rawFee": 17000,
    "originalFee": "25000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "24 Classes",
      "bn": "২৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/agile & scrum master.jpg",
    "videoUrl": "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22SAP%20(MM)%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Anisur Rahman",
      "designation": {
        "en": "SAP Supply Chain Consultant",
        "bn": "এসএপি সাপ্লাই চেইন কনসালটেন্ট"
      },
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "Expert in supply chain ERP logistics.",
        "bn": "সাপ্লাই চেইন ও প্রকিউরমেন্ট ইআরপি কনসালটেন্ট।"
      },
      "experience": "12+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Learn procurement process, vendor master data, purchase order lifecycle, inventory management, and invoice verification in SAP.",
      "bn": "এসএপি প্রকিউরমেন্ট, ইনভেন্টরি ও ম্যাটেরিয়ালস কন্ট্রোল শেখার প্রফেশনাল বুটক্যাম্প।"
    },
    "fullDescription": {
      "en": "Build expertise in supply chain software operations.",
      "bn": "সাপ্লাই চেইন ও ইনভেন্টরি ইন্ডাস্ট্রির সেরা সফটওয়্যার অপারেশনস।"
    },
    "coreValues": [],
    "learningOutcomes": [],
    "curriculum": [],
    "includedItems": [],
    "reviews": []
  },
  {
    "id": "20",
    "slug": "oracle-db",
    "title": {
      "en": "Oracle Database 19c/21c",
      "bn": "ওরাকল ডাটাবেস ১৯সি/২১সি"
    },
    "subtitle": {
      "en": "SQL, PL/SQL, Database Administration (DBA), Backup & High Availability",
      "bn": "ওরাকল এসকিউএল, পিএল/এসকিউএল এবং ডাটাবেস অ্যাডমিনিস্ট্রেশন (DBA) ট্র্যাকিং"
    },
    "category": "database",
    "categoryLabel": {
      "en": "Database",
      "bn": "ডাটাবেস"
    },
    "badge": {
      "en": "DBA CERTIFIED",
      "bn": "ডিবিএ সার্টিফাইড"
    },
    "mode": {
      "en": "Offline",
      "bn": "অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 45,
    "enrolledCount": "50+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "20000৳",
    "rawFee": 20000,
    "originalFee": "28000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "24 Classes",
      "bn": "২৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/postgresql.jpg",
    "videoUrl": "https://www.youtube.com/embed/qw--VYLpxG4?autoplay=1",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Oracle%20Database%2019c%2F21c%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Kazi Monirul Islam",
      "designation": {
        "en": "Oracle Certified Master (OCM)",
        "bn": "ওরাকল সার্টিফাইড মাস্টার ডিবিএ"
      },
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "15+ years experience in enterprise banking database infrastructure.",
        "bn": "ব্যাংকিং ও টেলিকম ডাটাবেসে ১৫+ বছরের অভিজ্ঞতা।"
      },
      "experience": "15+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Learn Oracle 19c/21c architecture, complex SQL queries, PL/SQL stored procedures, RMAN backups, and Data Guard tuning.",
      "bn": "ওরাকল ডাটাবেস অ্যাডমিনিস্ট্রেশন, ব্যাকআপ রিকভারি ও পারফরম্যান্স টিউনিং।"
    },
    "fullDescription": {
      "en": "Prepare for high-paying Database Administrator (DBA) roles.",
      "bn": "এন্টারপ্রাইজ ডাটাবেস অ্যাডমিনিস্ট্রেটর হিসেবে ক্যারিয়ার গড়ে তুলুন।"
    },
    "coreValues": [],
    "learningOutcomes": [],
    "curriculum": [],
    "includedItems": [],
    "reviews": []
  },
  {
    "id": "51",
    "slug": "mern-stack-online",
    "title": {
      "en": "Mastering MERN Stack Web Development (Online)",
      "bn": "মাস্টারিং মার্ন স্ট্যাক ওয়েব ডেভেলপমেন্ট (অনলাইন)"
    },
    "subtitle": {
      "en": "Online Live Interactive MERN Stack Training with Project Reviews",
      "bn": "অনলাইন লাইভ ক্লাসের মাধ্যমে মার্ন স্ট্যাক ওয়েব ডেভেলপমেন্ট শিখুন"
    },
    "category": "web",
    "categoryLabel": {
      "en": "Programming",
      "bn": "প্রোগ্রামিং"
    },
    "badge": {
      "en": "ONLINE LIVE",
      "bn": "অনলাইন লাইভ"
    },
    "mode": {
      "en": "Online",
      "bn": "অনলাইন"
    },
    "modeType": "online",
    "rating": 5,
    "ratingsCount": 75,
    "enrolledCount": "50+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "20000৳",
    "rawFee": 20000,
    "originalFee": "25000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "36 Classes",
      "bn": "৩৬ টি ক্লাস"
    },
    "image": "/images/course thumbnail/diploma in full stack.png",
    "videoUrl": "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1931942940836268%2F&show_text=0",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Mastering%20MERN%20Stack%20Web%20Development%20(Online)%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Mahmudur Rahman",
      "designation": {
        "en": "Senior Full-Stack Developer",
        "bn": "সিনিয়র ফুল-স্ট্যাক ডেভেলপার"
      },
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "12+ years experience building SaaS applications.",
        "bn": "১২+ বছরের অভিজ্ঞতা সম্পন্ন সফটওয়্যার আর্কিটেক্ট।"
      },
      "experience": "12+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Live Online interactive version of our popular MERN stack bootcamp. Real-time instructor coding, Q&A, and full project reviews covering HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), React.js, Node.js, Express, MongoDB, and REST APIs.",
      "bn": "অনলাইন লাইভ ক্লাসের মাধ্যমে মার্ন স্ট্যাকের পুঙ্খানুপুঙ্খ শিক্ষা! Facebook, Netflix, YouTube-এর মতো আধুনিক ওয়েবসাইট তৈরির দক্ষতা অর্জন করুন। HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), React.js, Node.js, Express ও MongoDB দিয়ে বাস্তব প্রজেক্ট তৈরি ও ফ্রিল্যান্সিং গাইডলাইন অন্তর্ভুক্ত।"
    },
    "fullDescription": {
      "en": "Learn from anywhere with interactive live classes, code reviews, and dedicated mentorship. Master React component architecture, state management, REST API development, JWT authentication, and build an impressive portfolio.",
      "bn": "অনলাইনে ঘরে বসেই লাইভ ইন্টারঅ্যাক্টিভ ক্লাসের মাধ্যমে মার্ন স্ট্যাক ওয়েব ডেভেলপমেন্ট শিখুন। প্রতিটি ক্লাসে থাকবে হাতে-কলমে প্র্যাকটিস, অ্যাসাইনমেন্ট এবং বাস্তব প্রজেক্ট, যাতে কোর্স শেষে আত্মবিশ্বাসের সঙ্গে নিজের Portfolio তৈরি করে ক্যারিয়ার শুরু করতে পারেন।"
    },
    "coreValues": [
      {
        "id": "cv-mern-1",
        "title": {
          "en": "Zero to Hero Structured Curriculum",
          "bn": "একদম বেসিক থেকে অ্যাডভান্সড"
        },
        "desc": {
          "en": "No prior coding background required. Learn step-by-step from foundations to advanced architecture.",
          "bn": "কোনো পূর্ব কোডিং অভিজ্ঞতা ছাড়াই বেসিক থেকে ধাপে ধাপে প্রফেশনাল লেভেলে পৌঁছান।"
        },
        "icon": "CheckCircle2"
      },
      {
        "id": "cv-mern-2",
        "title": {
          "en": "Real-World Project & Portfolio",
          "bn": "বাস্তব প্রজেক্ট ও পোর্টফোলিও"
        },
        "desc": {
          "en": "Build full-scale interactive web apps and showcase your live code repository to employers.",
          "bn": "ক্লাসে সরাসরি ফেসবুক, নেটফ্লিক্স ও ই-কমার্সের মতো রিয়েল প্রজেক্ট ডেভেলপমেন্ট।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv-mern-3",
        "title": {
          "en": "IT Job & Freelancing Support",
          "bn": "আইটি জব ও ফ্রিল্যান্সিং গাইডলাইন"
        },
        "desc": {
          "en": "Dedicated guidance for remote IT jobs, Fiverr/Upwork marketplace setup, and tech interviews.",
          "bn": "দেশি-বিদেশি IT কোম্পানিতে জব ও ফ্রিল্যান্সিংয়ে কাজ পাওয়ার পূর্ণাঙ্গ গাইডলাইন।"
        },
        "icon": "TrendingUp"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master HTML5 Semantic Architecture, CSS3 Modern Layouts, Flexbox & CSS Grid",
        "bn": "HTML5 ও CSS3 দিয়ে রেসপনসিভ ও আধুনিক ওয়েব লেআউট তৈরি"
      },
      {
        "en": "Modern JavaScript (ES6+), DOM Manipulation, Async/Await & Fetch API",
        "bn": "JavaScript (ES6+) ফান্ডামেন্টালস, অ্যাসিঙ্ক প্রোগ্রামিং ও এপিআই ফেচিং"
      },
      {
        "en": "Rapid & Fluid UI Styling with Utility-First Tailwind CSS",
        "bn": "Tailwind CSS দিয়ে মডার্ন, মোবাইল-ফার্স্ট ও ক্লিন ইউজার ইন্টারফেস ডিজাইন"
      },
      {
        "en": "React.js Mastery: JSX, Components, Props, State & Modern React Hooks",
        "bn": "React.js কোর আর্কিটেকচার, কম্পোনেন্ট, প্রপস, স্টেট ও কাস্টম হুক্স"
      },
      {
        "en": "React Router DOM Dynamic Multi-Page Navigation & REST API Integration",
        "bn": "React Router দিয়ে ডায়নামিক নেভিগেশন ও ব্যাকএন্ড এপিআই ইন্টিগ্রেশন"
      },
      {
        "en": "Convert Figma UI/UX Designs into Pixel-Perfect Responsive Websites",
        "bn": "Figma Design থেকে Professional Responsive Website তৈরি করার টেকনিক"
      },
      {
        "en": "Backend Development with Node.js, Express.js & MongoDB Database",
        "bn": "Node.js, Express.js ও MongoDB দিয়ে সিকিউর ব্যাকএন্ড RESTful API তৈরি"
      },
      {
        "en": "Full-Stack Authentication (JWT, bcrypt), Deployment on Vercel & Render",
        "bn": "জেডাব্লিউটি অথেন্টিকেশন, প্রটেক্টেড রাউটস ও ক্লাউড ডিপ্লয়মেন্ট"
      },
      {
        "en": "Standout Developer Portfolio Building on GitHub & Live Hosting",
        "bn": "গিটহাব রিপোজিটরি ও লাইভ ডোমেনে প্রফেশনাল পোর্টফোলিও তৈরি"
      },
      {
        "en": "Freelance Marketplace Client Acquisition Blueprint (Fiverr & Upwork)",
        "bn": "ফাইভার ও আপওয়ার্কে ক্লায়েন্ট হান্টিং ও রিমোট জব ক্র্যাক করার কৌশল"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: HTML5, Modern CSS3 & Responsive Web Design",
          "bn": "মডিউল ১: HTML5, CSS3 ও রেসপনসিভ ডিজাইন"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "HTML5 Semantic Tags, Document Structure & SEO Best Practices",
            "bn": "এইচটিএমএল৫ সেমান্টিক ট্যাগস ও এসইও ফ্রেন্ডলি পেজ স্ট্রাকচার"
          },
          {
            "en": "CSS3 Box Model, Typography, Colors, Gradients & Pseudo-Classes",
            "bn": "সিএসএস৩ বক্স মডেল, টাইপোগ্রাফি ও স্টাইলিং টেকনিক"
          },
          {
            "en": "Flexbox Layout Architecture & CSS Grid Deep Dive",
            "bn": "ফ্লেক্সবক্স ও সিএসএস গ্রিড লেআউট মাস্টারি"
          },
          {
            "en": "Media Queries & Mobile-First Responsive Website Design",
            "bn": "মোবাইল-ফার্স্ট রেসপনসিভ ওয়েব পেজ তৈরি"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Modern JavaScript (ES6+) & Async Programming",
          "bn": "মডিউল ২: আধুনিক JavaScript (ES6+) ও অ্যাসিঙ্ক প্রোগ্রামিং"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "Variables (let, const), Data Types, Operators & Control Flow",
            "bn": "জাভাস্ক্রিপ্ট ভ্যারিয়েবল, ডেটা টাইপ ও কন্ডিশনাল লজিক"
          },
          {
            "en": "ES6+ Arrow Functions, Template Literals, Destructuring & Rest/Spread",
            "bn": "অ্যারো ফাংশনস, ডিস্ট্রাকচারিং ও স্প্রেড অপারেটর"
          },
          {
            "en": "Array Methods (map, filter, reduce, find, forEach) Deep Dive",
            "bn": "অ্যারে মেথডস ও ডেটা ম্যানিপুলেশন"
          },
          {
            "en": "DOM Manipulation, Event Listeners & Interactive UI Logic",
            "bn": "ডম ম্যানিপুলেশন ও ইন্টারেক্টিভ ইভেন্ট হ্যান্ডলিং"
          },
          {
            "en": "Promises, Async/Await, Fetch API & JSON Handling",
            "bn": "প্রমিজেস, অ্যাসিঙ্ক/অ্যাওয়েট ও এপিআই রিকোয়েস্ট হ্যান্ডলিং"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Tailwind CSS & Pixel-Perfect Figma-to-Web Conversion",
          "bn": "মডিউল ৩: Tailwind CSS ও Figma থেকে ওয়েব ডিজাইন"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Tailwind CSS Setup, Configuration, Utility Classes & Custom Themes",
            "bn": "টেইলউইন্ড সিএসএস ইনস্টলেশন ও কাস্টম থিম কনফিগারেশন"
          },
          {
            "en": "Responsive Layouts, Dark Mode Integration & Micro-Animations",
            "bn": "রেসপনসিভ ব্রেকপয়েন্টস, ডার্ক মোড ও ট্রানজিশন ইফেক্টস"
          },
          {
            "en": "Inspecting Figma Designs, Extracting Assets, Fonts & Color Tokens",
            "bn": "ফিগমা থেকে অ্যাসেট, ফন্ট ও কালার কোড এক্সট্রাক্ট করা"
          },
          {
            "en": "Building a Production-Ready Responsive Landing Page from Figma",
            "bn": "ফিগমা ডিজাইন থেকে সম্পূর্ণ রেসপনসিভ ল্যান্ডিং পেজ তৈরি"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: React.js Fundamentals (JSX, Components & State)",
          "bn": "মডিউল ৪: React.js ফান্ডামেন্টালস, কম্পোনেন্টস ও স্টেট"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 7,
        "topics": [
          {
            "en": "Why React? Virtual DOM, React 19 Ecosystem & Vite Setup",
            "bn": "রিঅ্যাক্ট কী এবং কেন? ভার্চুয়াল ডম ও প্রজেক্ট সেটআপ"
          },
          {
            "en": "JSX Syntax, Conditional Rendering & Rendering Lists with Keys",
            "bn": "জেএসএক্স সিনট্যাক্স, কন্ডিশনাল রেন্ডারিং ও লিস্ট রেন্ডারিং"
          },
          {
            "en": "Component Architecture, Props Passing, Children & Component Reusability",
            "bn": "কম্পোনেন্ট হায়ারার্কি, প্রপস ড্রিলিং ও রিউজেবল কম্পোনেন্টস"
          },
          {
            "en": "State Management with useState Hook & Event Handling in React",
            "bn": "ইউজস্টেট হুক দিয়ে ডায়নামিক স্টেট ম্যানেজমেন্ট"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: React Hooks, React Router DOM & REST API Integration",
          "bn": "মডিউল ৫: React Hooks, Router ও API Integration"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 7,
        "topics": [
          {
            "en": "Side Effects with useEffect Hook & Clean-up Functions",
            "bn": "ইউজএফেক্ট হুক দিয়ে লাইফসাইকেল ও ডেটা ফেচিং"
          },
          {
            "en": "React Router DOM v6: Dynamic Routes, Nested Routes, Links & NavLink",
            "bn": "রিঅ্যাক্ট রাউটার দিয়ে মাল্টি-পেজ অ্যাপ্লিকেশন তৈরি"
          },
          {
            "en": "Global State Management with Context API & useContext",
            "bn": "কনটেক্সট এপিআই ও গ্লোবাল অথেন্টিকেশন স্টেট"
          },
          {
            "en": "Consuming REST APIs with Axios/Fetch, Loading & Error States",
            "bn": "অ্যাক্সিওস দিয়ে এপিআই ইন্টিগ্রেশন ও এরর হ্যান্ডলিং"
          }
        ]
      },
      {
        "moduleNumber": 6,
        "title": {
          "en": "Module 6: Node.js, Express.js & MongoDB Backend Architecture",
          "bn": "মডিউল ৬: Node.js, Express.js ও MongoDB ব্যাকএন্ড"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 7,
        "topics": [
          {
            "en": "Node.js Runtime Environment, NPM Packages & Modular Architecture",
            "bn": "নোড.জেএস রানটাইম, এনপিএম প্যাকেজ ও মডিউল সিস্টেম"
          },
          {
            "en": "Express.js Server Setup, REST API Routing & Custom Middlewares",
            "bn": "এক্সপ্রেস.জেএস দিয়ে রেস্টফুল এপিআই রাউট তৈরি"
          },
          {
            "en": "MongoDB Atlas Cloud Setup, Mongoose Schemas & Models",
            "bn": "মঙ্গোডিবি ক্লাউড ডাটাবেজ কানেকশন ও মাঙ্গুজ স্কিমা"
          },
          {
            "en": "Full CRUD Operations (Create, Read, Update, Delete) with MongoDB",
            "bn": "মঙ্গোডিবির মাধ্যমে সম্পূর্ণ সিআরইউডি ডেটাবেজ অপারেশন"
          }
        ]
      },
      {
        "moduleNumber": 7,
        "title": {
          "en": "Module 7: JWT Authentication & Full-Stack MERN Project",
          "bn": "মডিউল ৭: JWT অথেন্টিকেশন ও ফুল-স্ট্যাক প্রজেক্ট"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "User Registration, Password Hashing with bcrypt & JWT Token Auth",
            "bn": "ইউজার সাইন-আপ, পাসওয়ার্ড এনক্রিপশন ও জেডাব্লিউটি সিকিউরিটি"
          },
          {
            "en": "Protected Routes in React & Backend Auth Verification Middleware",
            "bn": "রিঅ্যাক্টে প্রটেক্টেড রাউটস ও সিকিউর সেশন হ্যান্ডলিং"
          },
          {
            "en": "Building a Full-Stack Web App (E-Commerce / Streaming Portal)",
            "bn": "কমপ্লিট ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন তৈরি"
          },
          {
            "en": "Cloudinary Image & Media File Upload Integration",
            "bn": "ক্লাউডিনারি দিয়ে ইমেজ ও মিডিয়া আপলোড সিস্টেম"
          }
        ]
      },
      {
        "moduleNumber": 8,
        "title": {
          "en": "Module 8: Production Deployment, Portfolio & Freelancing Roadmap",
          "bn": "মডিউল ৮: ডিপ্লয়মেন্ট, পোর্টফোলিও ও ফ্রিল্যান্সিং"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Deploying Frontend to Vercel/Netlify & Backend to Render/Railway",
            "bn": "ভার্সেল ও রেন্ডারে লাইভ সার্ভার ডিপ্লয়মেন্ট ও ডোমেন সেটআপ"
          },
          {
            "en": "Creating an Impressive GitHub Profile & Live Portfolio Website",
            "bn": "গিটহাব প্রোফাইল ও লাইভ প্রফেশনাল পোর্টফোলিও রেডি করা"
          },
          {
            "en": "Fiverr & Upwork Gig Setup, Proposal Writing & Client Communication",
            "bn": "ফাইভার ও আপওয়ার্কে হাই-কনভার্টিং গিগ ও প্রপোজাল তৈরি"
          },
          {
            "en": "Preparing for Local & International Frontend/MERN Developer Interviews",
            "bn": "দেশি ও বিদেশি আইটি কোম্পানিতে ইন্টারভিউ প্রস্তুতির গাইডলাইন"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "36 Live Interactive Classes & Screen Recordings",
        "bn": "৩৬ টি লাইভ ক্লাস ও আজীবন ভিডিও রেকর্ডিং এক্সেস"
      },
      {
        "en": "8 Real-World Industry Projects & Source Code",
        "bn": "৮ টি রিয়েল-লাইফ প্রজেক্ট ও সম্পূর্ণ সোর্স কোড"
      },
      {
        "en": "Figma UI Kits, Premium Templates & Cheatsheets",
        "bn": "ফিগমা ডিজাইন ফাইলস ও কোডিং চিটশিট"
      },
      {
        "en": "Dedicated IT Job Placement & Freelancing Support",
        "bn": "ডেডিকেটেড জব প্লেসমেন্ট ও ফ্রিল্যান্সিং গাইডলাইন"
      },
      {
        "en": "Industry-Recognized Certificate of Completion",
        "bn": "ইন্ডাস্ট্রি রিকগনাইজড কোর্স সার্টিফিকেট"
      }
    ],
    "reviews": [
      {
        "id": "r-mern-1",
        "name": "Shakil Ahmed",
        "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "Frontend React Developer",
          "bn": "ফ্রন্টএন্ড রিঅ্যাক্ট ডেভেলপার"
        },
        "rating": 5,
        "comment": {
          "en": "The step-by-step approach from HTML/CSS to building full-stack MERN apps helped me land my first software company job as a React Developer!",
          "bn": "একদম জিরো থেকে শুরু করে রিঅ্যাক্ট ও মার্ন স্ট্যাকের রিয়েল প্রজেক্ট শিখেই আমি একটি আইটি কোম্পানিতে ফ্রন্টএন্ড ডেভেলপার হিসেবে জয়েন করেছি।"
        },
        "date": "2026-08-20"
      }
    ]
  },
  {
    "id": "54",
    "slug": "graphic-design-online",
    "title": {
      "en": "Mastering Graphic Design with AI (Online)",
      "bn": "মাস্টারিং গ্রাফিক ডিজাইন উইথ এআই (অনলাইন)"
    },
    "subtitle": {
      "en": "Live Online Class for Photoshop, Illustrator & Generative AI Tools",
      "bn": "অনলাইনে লাইভ ক্লাসের মাধ্যমে ফটোশপ, ইলাস্ট্রেটর ও এআই ডিজাইন শিখুন"
    },
    "category": "uiux",
    "categoryLabel": {
      "en": "Art & Design",
      "bn": "আর্ট ও ডিজাইন"
    },
    "badge": {
      "en": "ONLINE LIVE",
      "bn": "অনলাইন লাইভ"
    },
    "mode": {
      "en": "Online",
      "bn": "অনলাইন"
    },
    "modeType": "online",
    "rating": 5,
    "ratingsCount": 50,
    "enrolledCount": "50+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "10000৳",
    "rawFee": 10000,
    "originalFee": "15000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "24 Classes",
      "bn": "২৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/graphic design.jpg",
    "videoUrl": "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F889772017529060%2F&show_text=0",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Mastering%20Graphic%20Design%20with%20AI%20(Online)%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Tariqul Islam",
      "designation": {
        "en": "Creative Art Director",
        "bn": "ক্রিয়েটিভ আর্ট ডিরেক্টর"
      },
      "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "Expert brand identity designer.",
        "bn": "আন্তর্জাতিক ডিজাইনার ও আর্ট ডিরেক্টর।"
      },
      "experience": "9+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Live Online training for visual graphic design, brand identity, and Generative AI workflows with Photoshop, Illustrator, and Midjourney. Build a standout Behance portfolio from home.",
      "bn": "অনলাইনে লাইভ ক্লাসের মাধ্যমে ফটোশপ, ইলাস্ট্রেটর এবং অত্যাধুনিক জেনারেটিভ এআই টুলস দিয়ে প্রফেশনাল লোগো, ব্র্যান্ড আইডেন্টিটি ও সোশ্যাল মিডিয়া ক্রিয়েটিভস তৈরি শিখুন।"
    },
    "fullDescription": {
      "en": "Transform your creativity into a high-paying freelancing career from home. Learn advanced photo manipulation, vector branding, commercial print design, and get dedicated job placement support.",
      "bn": "ঘরে বসেই অভিজ্ঞ মেন্টরদের সরাসরি গাইডলাইনে শিখুন ইন্ডাস্ট্রি-স্ট্যান্ডার্ড স্কিল, কাজ করুন রিয়েল-লাইফ ক্লায়েন্ট প্রজেক্টে এবং নিজেকে প্রস্তুত করুন ফ্রিল্যান্সিং ও জব মার্কেটের জন্য।"
    },
    "coreValues": [
      {
        "id": "cv-gd-1",
        "title": {
          "en": "Adobe Suite & AI Synergy",
          "bn": "ফটোশপ, ইলাস্ট্রেটর ও এআই"
        },
        "desc": {
          "en": "Master Photoshop, Illustrator and accelerate your creative workflow 10x with Generative AI tools.",
          "bn": "ফটোশপ ও ইলাস্ট্রেটরের পাশাপাশি মিডজার্নি ও ফায়ারফ্লাই এআই দিয়ে ফাস্ট ডিজাইন।"
        },
        "icon": "Sparkles"
      },
      {
        "id": "cv-gd-2",
        "title": {
          "en": "Real Agency Brand Projects",
          "bn": "রিয়েল ব্র্যান্ড ডিজাইন প্রজেক্ট"
        },
        "desc": {
          "en": "Create commercial brand identities, packaging, and advertising campaigns for real companies.",
          "bn": "বাস্তব কোম্পানি ও ব্র্যান্ডের জন্য লোগো, প্যাকেজিং ও সোশ্যাল মিডিয়া ব্যানার তৈরি।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv-gd-3",
        "title": {
          "en": "Behance Portfolio & Job Placement",
          "bn": "পোর্টফোলিও ও জব সাপোর্ট"
        },
        "desc": {
          "en": "Build an international Behance portfolio and get direct freelancing and job placement support.",
          "bn": "আন্তর্জাতিক মানের পোর্টফোলিও তৈরি এবং ডেডিকেটেড ফ্রিল্যান্সিং গাইডলাইন।"
        },
        "icon": "CheckCircle2"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master Design Foundations: Typography Hierarchy, Color Psychology & Visual Composition",
        "bn": "ডিজাইন থিওরি, কালার সাইকোলজি ও টাইপোগ্রাফি রুলস"
      },
      {
        "en": "Advanced Adobe Photoshop Manipulation, Retouching, Layer Masks & Digital Art",
        "bn": "অ্যাডোব ফটোশপে অ্যাডভান্সড ফটো ম্যানিপুলেশন ও রিটাচিং"
      },
      {
        "en": "Adobe Illustrator Vector Mastery: Custom Logo Design, Brand Toolkits & Badges",
        "bn": "অ্যাডোব ইলাস্ট্রেটরে ভেক্টর লোগো ডিজাইন ও ব্র্যান্ড আইডেন্টিটি"
      },
      {
        "en": "Generative AI Design Mastery (Midjourney, DALL-E, Adobe Firefly & Prompt Engineering)",
        "bn": "জেনারেটিভ এআই (Midjourney, Firefly) দিয়ে কমার্শিয়াল ডিজাইন"
      },
      {
        "en": "High-Converting Social Media Creatives, Ad Carousels & YouTube Thumbnails",
        "bn": "সোশ্যাল মিডিয়া ব্যানার, ফেসবুক ও ইনস্টাগ্রাম অ্যাড ক্রিয়েটিভস"
      },
      {
        "en": "Commercial Print Media: Corporate Stationery, Brochures, Flyers & Billboards",
        "bn": "করপোরেট স্টেশনারি, ব্রোশিওর, ব্যানার ও প্রিন্ট-রেডি ডিজাইন"
      },
      {
        "en": "Product Packaging Design, Labeling & Photorealistic 3D Mockups",
        "bn": "পণ্য প্যাকেজিং, লেবেল ডিজাইন ও ৩ডি মকআপ প্রেজেন্টেশন"
      },
      {
        "en": "Standout Behance/Dribbble Case Studies & Freelancing on Fiverr & Upwork",
        "bn": "বিহ্যান্স ও ড্রিবল পোর্টফোলিও এবং ফাইভার-আপওয়ার্কে ফ্রিল্যান্সিং"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Visual Design Foundations, Color Theory & Typography",
          "bn": "মডিউল ১: ডিজাইন ফান্ডামেন্টালস, কালার থিওরি ও টাইপোগ্রাফি"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Design Principles: Balance, Contrast, Alignment, Proximity & White Space",
            "bn": "ডিজাইন প্রিন্সিপলস ও ভিজ্যুয়াল ব্যালেন্স"
          },
          {
            "en": "Color Harmony, RGB vs CMYK Color Spaces & Psychology of Colors",
            "bn": "কালার সাইকোলজি, কালার প্যালেট ও প্রিন্ট বনাম ওয়েব কালার"
          },
          {
            "en": "Typography: Font Classification, Pairing, Kerning & Hierarchy",
            "bn": "টাইপোগ্রাফি সিলেকশন, ফন্ট পেয়ারিং ও টেক্সট হায়ারার্কি"
          },
          {
            "en": "Grid Systems, Layout Compositions & Golden Ratio Rules",
            "bn": "গ্রিড সিস্টেম ও গোল্ডেন রেশিও কম্পোজিশন"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Adobe Photoshop Mastery & Photo Manipulation",
          "bn": "মডিউল ২: Photoshop মাস্টারি ও ফটো ম্যানিপুলেশন"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Photoshop Interface, Selection Tools, Layer Masks & Smart Objects",
            "bn": "ফটোশপ ইন্টারফেস, লেয়ার মাস্কিং ও স্মার্ট অবজেক্টস"
          },
          {
            "en": "Commercial Skin Retouching, Frequency Separation & Dodge/Burn",
            "bn": "প্রফেশনাল স্কিন রিটাচিং ও ফ্রিকোয়েন্সি সেপারেশন"
          },
          {
            "en": "Advanced Photo Manipulation, Background Removal & Blending",
            "bn": "ফটো ম্যানিপুলেশন ও ব্যাকগ্রাউন্ড ব্লেন্ডিং আর্ট"
          },
          {
            "en": "Color Grading, Camera Raw Filter & Lighting Adjustment Techniques",
            "bn": "ক্যামেরা র ফিল্টার ও সিনেমাটিক কালার গ্রেডিং"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Adobe Illustrator Vector Design & Brand Identity",
          "bn": "মডিউল ৩: Illustrator ভেক্টর ডিজাইন ও লোগো মাস্টারি"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Pen Tool Precision, Shape Builder, Pathfinder & Vector Tools",
            "bn": "পেন টুল প্রিসিশন, শেপ বিল্ডার ও পাথফাইন্ডার টুলস"
          },
          {
            "en": "Logo Design Types (Wordmark, Lettermark, Mascot, Abstract, Emblem)",
            "bn": "বিভিন্ন ক্যাটাগরির প্রফেশনাল লোগো ডিজাইন কনসেপ্ট"
          },
          {
            "en": "Brand Identity Systems: Color Guides, Typography Rules & Brandbooks",
            "bn": "কমপ্লিট ব্র্যান্ড গাইডলাইন ও ব্র্যান্ডবুক তৈরি"
          },
          {
            "en": "Custom Iconography, Vector Badges & Mascot Illustration",
            "bn": "কাস্টম আইকন ও ভেক্টর ইলাস্ট্রেশন আর্ট"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: Generative AI for Designers (Midjourney & Firefly)",
          "bn": "মডিউল ৪: জেনারেটিভ AI ডিজাইন (Midjourney, Firefly, DALL-E)"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Midjourney v6: Prompt Engineering for Commercial Graphics & Concept Art",
            "bn": "মিডজার্নি দিয়ে ফটো-রিয়েলিস্টিক ইমেজ ও কনসেপ্ট আর্ট তৈরি"
          },
          {
            "en": "Adobe Firefly Generative Fill, Generative Recolor & Vector AI",
            "bn": "অ্যাডোব ফায়ারফ্লাই জেনারেটিভ ফিল ও ভেক্টর এআই"
          },
          {
            "en": "Combining AI-Generated Assets with Photoshop & Illustrator Layouts",
            "bn": "এআই আর্টের সাথে ফটোশপ-ইলাস্ট্রেটর ডিজাইনের নিখুঁত সমন্বয়"
          },
          {
            "en": "Ethical AI Usage, Commercial Rights & Upscaling AI Artwork",
            "bn": "এআই আর্ট আপস্কেলিং ও কমার্শিয়াল লাইসেন্সিং"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: Social Media Branding & High-Converting Ad Creatives",
          "bn": "মডিউল ৫: সোশ্যাল মিডিয়া ব্যানার ও অ্যাড ক্রিয়েটিভস"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Facebook & Instagram Ad Banner Design (Single Post, Carousel & Story)",
            "bn": "ফেসবুক ও ইনস্টাগ্রাম হাই-কনভার্টিং অ্যাড ব্যানার ডিজাইন"
          },
          {
            "en": "Click-Worthy YouTube Thumbnail Design & Viral CTR Strategies",
            "bn": "হাই-সিটিআর ইউটিউব থাম্বনেইল ডিজাইন টেকনিক"
          },
          {
            "en": "LinkedIn Corporate Banners, Twitter Headers & Web Sliders",
            "bn": "লিঙ্কডইন ও ওয়েবসাইট ব্যানার স্লাইডার তৈরি"
          },
          {
            "en": "GIF Animations & Motion Banner Basics in Photoshop",
            "bn": "ফটোশপে অ্যানিমেটেড জিআইএফ ও মোশন ব্যানার"
          }
        ]
      },
      {
        "moduleNumber": 6,
        "title": {
          "en": "Module 6: Commercial Print Design & Corporate Stationery",
          "bn": "মডিউল ৬: প্রিন্ট ডিজাইন ও করপোরেট স্টেশনারি"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Corporate Identity: Business Cards, Letterheads, Envelopes & ID Cards",
            "bn": "বিজনেস কার্ড, লেটারহেড ও আইডি কার্ড ডিজাইন"
          },
          {
            "en": "Tri-Fold, Bi-Fold Brochures & Marketing Flyers",
            "bn": "মার্কেটিং ব্রোশিওর ও লিফলেট ডিজাইন"
          },
          {
            "en": "Roll-Up Banners, Billboards & Exhibition Standees",
            "bn": "রোল-আপ ব্যানার ও বিলবোর্ড সাইনেজ ডিজাইন"
          },
          {
            "en": "Print Pre-Press: Bleed Lines, Trim Marks, CMYK Exporting & Die-Cuts",
            "bn": "প্রিন্টিং প্রেসের জন্য ডাই-কাট ও সিএমওয়াইকে ফাইল এক্সপোর্ট"
          }
        ]
      },
      {
        "moduleNumber": 7,
        "title": {
          "en": "Module 7: Packaging, Merchandise & Product Mockup Creation",
          "bn": "মডিউল ৭: প্যাকেজিং, মার্চেন্ডাইজ ও ৩ডি মকআপ"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Product Box Packaging Dieline Design & Measurements",
            "bn": "প্রোডাক্ট বক্স প্যাকেজিং ডাইলাইন ও মেজারমেন্ট"
          },
          {
            "en": "Bottle & Pouch Label Design with Nutrition & Barcode Placeholders",
            "bn": "বোতল ও ফুড পাউচ লেবেল ডিজাইন"
          },
          {
            "en": "T-Shirt, Apparel & Merchandise Vector Graphics",
            "bn": "টি-শার্ট ও মার্চেন্ডাইজ ভেক্টর গ্রাফিক্স"
          },
          {
            "en": "Creating Photorealistic 3D Mockup Presentations in Photoshop",
            "bn": "ফটোশপে কাস্টম ৩ডি স্মার্ট অবজেক্ট মকআপ তৈরি"
          }
        ]
      },
      {
        "moduleNumber": 8,
        "title": {
          "en": "Module 8: Behance/Dribbble Portfolio Mastery & Freelancing Roadmap",
          "bn": "মডিউল ৮: বিহ্যান্স পোর্টফোলিও ও ফ্রিল্যান্সিং"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Crafting Professional Behance Case Studies with Engaging Presentation",
            "bn": "বিহ্যান্সে কেস স্টাডি আকারে প্রজেক্ট প্রেজেন্টেশন"
          },
          {
            "en": "Fiverr Graphic Design Gig Setup, SEO Keywords & Client Orders",
            "bn": "ফাইভারে গ্রাফিক ডিজাইন গিগ অপটিমাইজেশন ও অর্ডার টেকনিক"
          },
          {
            "en": "Upwork Proposals, Direct Client Outreach & International Pricing",
            "bn": "আপওয়ার্কে ক্লায়েন্ট প্রপোজাল ও ইন্টারন্যাশনাল প্রাইসিং"
          },
          {
            "en": "Job Placement Preparation, Mock Interviews & Agency Resume Building",
            "bn": "লোকাল ও রিমোট এজেন্সির জন্য রেজুমি ও ইন্টারভিউ গাইড"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "24 Live Interactive Classes & Screen Recordings",
        "bn": "২৪ টি লাইভ ক্লাস ও লাইফটাইম ভিডিও রেকর্ডিং"
      },
      {
        "en": "15+ Agency-Standard Design Projects & Case Studies",
        "bn": "১৫+ টি প্রফেশনাল এজেন্সি স্ট্যান্ডার্ড ডিজাইন প্রজেক্ট"
      },
      {
        "en": "Commercial Fonts, Stock Photos & Mockup Bundle",
        "bn": "প্রিমিয়াম ফন্টস, স্টক ফটো ও ৩ডি মকআপ বান্ডল"
      },
      {
        "en": "Dedicated Job Placement & Freelancing Mentorship",
        "bn": "ডেডিকেটেড জব প্লেসমেন্ট ও মার্কেটপ্লেস সাপোর্ট"
      },
      {
        "en": "Industry-Recognized Graphic Design Certificate",
        "bn": "প্রফেশনাল কোর্স সার্টিফিকেট"
      }
    ],
    "reviews": [
      {
        "id": "r-gd-1",
        "name": "Farhana Akter",
        "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "Brand Identity Designer",
          "bn": "ব্র্যান্ড ডিজাইনার"
        },
        "rating": 5,
        "comment": {
          "en": "The integration of AI tools with Photoshop & Illustrator gave my design portfolio an unmatched edge. I landed 4 international clients in my first month!",
          "bn": "ফটোশপ ও ইলাস্ট্রেটরের পাশাপাশি মিডজার্নি এআই শেখার কারণে আমার কাজের স্পিড অনেক বেড়েছে। প্রথম মাসেই আন্তর্জাতিক ক্লায়েন্ট পেয়েছি।"
        },
        "date": "2026-08-16"
      }
    ]
  },
  {
    "id": "55",
    "slug": "digital-marketing-online",
    "title": {
      "en": "Specialized Certification on Digital Marketing (Online)",
      "bn": "স্পেশালাইজড সার্টিফিকেশন অন ডিজিটাল মার্কেটিং (অনলাইন)"
    },
    "subtitle": {
      "en": "Live Online Growth Hacking, Facebook Pixel & Google Ads Mastery",
      "bn": "অনলাইনে মেটা ও গুগল অ্যাডস সহ কমপ্লিট ডিজিটাল মার্কেটিং"
    },
    "category": "marketing",
    "categoryLabel": {
      "en": "Digital Marketing",
      "bn": "ডিজিটাল মার্কেটিং"
    },
    "badge": {
      "en": "ONLINE LIVE",
      "bn": "অনলাইন লাইভ"
    },
    "mode": {
      "en": "Online",
      "bn": "অনলাইন"
    },
    "modeType": "online",
    "rating": 5,
    "ratingsCount": 65,
    "enrolledCount": "50+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "10000৳",
    "rawFee": 10000,
    "originalFee": "15000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "24 Classes",
      "bn": "২৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/Digital Marketing.jpg",
    "videoUrl": "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2105617167053909%2F&show_text=0",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Specialized%20Certification%20on%20Digital%20Marketing%20(Online)%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Rashedul Hasan",
      "designation": {
        "en": "Growth Marketing Lead",
        "bn": "গ্রোথ মার্কেটিং লিড"
      },
      "image": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "Managed over $1M+ in ad spend.",
        "bn": "১ মিলিয়ন ডলারের বেশি ডিজিটাল অ্যাড স্পেন্ড পরিচালনার অভিজ্ঞতা।"
      },
      "experience": "7+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Live Online Masterclass covering Meta Ads, Conversions API, Google PPC, Technical SEO, GA4 Tracking, B2B Lead Gen, and AI Marketing Automation for global client acquisition.",
      "bn": "অনলাইনে লাইভ ক্লাসের মাধ্যমে সোশ্যাল মিডিয়া মার্কেটিং, মেটা পিক্সেল ও কনভার্সন এপিআই, গুগল অ্যাডস, এসইও, জিএ৪ ট্র্যাকিং, বিটুবি লিড জেনারেশন এবং এআই অটোমেশন শিখে নিশ্চিত ক্যারিয়ার গড়ুন।"
    },
    "fullDescription": {
      "en": "Online live bootcamp with practical ad spend demonstrations, live campaign audits, and dedicated mentorship for landing high-paying clients on Fiverr, Upwork, and LinkedIn.",
      "bn": "অনলাইনে লাইভ বাজেটে বিজ্ঞাপন পরিচালনা ও অপটিমাইজেশন শিখুন। লোকাল ও ইন্টারন্যাশনাল ক্লায়েন্টের সঙ্গে কাজ করার কমপ্লিট গাইডলাইন ও লাইফটাইম সাপোর্ট পাবেন।"
    },
    "coreValues": [
      {
        "id": "cv-dm-1",
        "title": {
          "en": "100% Practical Ad Budget Execution",
          "bn": "লাইভ বাজেটে বিজ্ঞাপন পরিচালনা"
        },
        "desc": {
          "en": "Run live campaigns with real ad budgets on Meta and Google Ads during class.",
          "bn": "ক্লাসে সরাসরি লাইভ বাজেট দিয়ে রিয়েল ক্যাম্পেইন পরিচালনা ও অপটিমাইজেশন।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv-dm-2",
        "title": {
          "en": "Advanced Tracking & Analytics",
          "bn": "পিক্সেল, CAPI ও GA4 ট্র্যাকিং"
        },
        "desc": {
          "en": "Master server-side tracking, Google Tag Manager, GA4 event modeling, and ROAS attribution.",
          "bn": "কনভার্সন এপিআই, সার্ভার-সাইড ট্র্যাকিং ও গুগল অ্যানালিটিক্স ৪ মাস্টারি।"
        },
        "icon": "TrendingUp"
      },
      {
        "id": "cv-dm-3",
        "title": {
          "en": "AI Automation & Client Hunting",
          "bn": "AI অটোমেশন ও ক্লায়েন্ট হান্টিং"
        },
        "desc": {
          "en": "Leverage ChatGPT & AI tools for marketing + secrets to land direct foreign clients.",
          "bn": "এআই দিয়ে দ্রুত ক্যাম্পেইন পরিচালনা এবং ফাইভার, আপওয়ার্ক ও কোল্ড আউটরিচ।"
        },
        "icon": "CheckCircle2"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Advanced Social Media Marketing (Sales Funnels, Custom Audiences, Pixel & CAPI Setup)",
        "bn": "অ্যাডভান্সড সোশ্যাল মিডিয়া মার্কেটিং, সেলস ফানেল, পিক্সেল ও কনভার্সন এপিআই"
      },
      {
        "en": "Google Ads & High-Converting PPC Search, Display, Video & Performance Max Campaigns",
        "bn": "গুগল সার্চ ও পিপিসি ক্যাম্পেইন দিয়ে হাই-কনভার্টিং সেলস জেনারেশন"
      },
      {
        "en": "Search Engine Optimization (Technical, On-Page, Off-Page Link Building & Local SEO)",
        "bn": "এসইও (টেকনিক্যাল, লোকাল ও ই-কমার্স সার্চ ইঞ্জিন অপটিমাইজেশন)"
      },
      {
        "en": "Data Tracking & Analytics (Google Analytics 4, Google Tag Manager & Server-Side Tracking)",
        "bn": "ডেটা ট্র্যাকিং ও অ্যানালিটিক্স (GA4, GTM ও সার্ভার-সাইড ট্র্যাকিং)"
      },
      {
        "en": "B2B Lead Generation & High-Inbox-Delivery Cold Email Outreach Pipelines",
        "bn": "B2B লিড জেনারেশন ও অটোমেটেড কোল্ড ইমেইল মার্কেটিং"
      },
      {
        "en": "AI Automation Techniques (ChatGPT & AI Tools for High-Converting Ad Copy & Assets)",
        "bn": "এআই অটোমেশন টেকনিক্স (ChatGPT ও AI টুলস ব্যবহার করে মার্কেটিং)"
      },
      {
        "en": "Live Portfolio Building & Real E-Commerce / SaaS Campaign Case Studies",
        "bn": "লাইভ পোর্টফোলিও তৈরি ও বাস্তব প্রজেক্টভিত্তিক কেস স্টাডি"
      },
      {
        "en": "Advanced Client Hunting Strategy on Fiverr, Upwork, LinkedIn & Direct Outreach",
        "bn": "ফাইভার ও আপওয়ার্কে ক্লায়েন্ট পাওয়ার সিক্রেট স্ট্র্যাটেজি ও লাইফটাইম সাপোর্ট"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Digital Marketing Ecosystem & Sales Funnels",
          "bn": "মডিউল ১: ডিজিটাল মার্কেটিং ইকোসিস্টেম ও সেলস ফানেল"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Digital Marketing Landscape, Inbound vs Outbound & Customer Journey",
            "bn": "ডিজিটাল মার্কেটিং পরিচিতি ও কাস্টমার জার্নি ম্যাপিং"
          },
          {
            "en": "AIDA & TOFU-MOFU-BOFU Sales Funnel Architecture",
            "bn": "সেলস ফানেল ডিজাইন ও বায়ার পারসোনা রিসার্চ"
          },
          {
            "en": "Competitor Analysis, Market Research & Value Proposition",
            "bn": "মার্কেট ও কম্পিটিটর রিসার্চ এবং অফার ক্রিয়েশন"
          },
          {
            "en": "Landing Page Architecture for High Conversion Rates (CRO)",
            "bn": "কনভার্সন অপটিমাইজেশনের জন্য ল্যান্ডিং পেজ স্ট্র্যাটেজি"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Advanced Meta Ads & Funnel Optimization",
          "bn": "মডিউল ২: Meta Ads (Facebook & Instagram) মাস্টারি"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Meta Business Suite, Ad Account Hierarchy & Agency Setup",
            "bn": "মেটা বিজনেস ম্যানেজার ও অ্যাড অ্যাকাউন্ট স্ট্রাকচার"
          },
          {
            "en": "Meta Pixel Setup, Domain Verification & Aggregated Event Measurement",
            "bn": "মেটা পিক্সেল ও ইভেন্ট সেটআপ"
          },
          {
            "en": "Server-Side Tracking with Meta Conversions API (CAPI) & Stape/Cloud",
            "bn": "কনভার্সন এপিআই (CAPI) ও সার্ভার-সাইড ট্র্যাকিং"
          },
          {
            "en": "Laser Audience Targeting, Custom Audiences & Lookalike Scaling (LAL)",
            "bn": "কাস্টম ও লুকঅ্যালাইক অডিয়েন্স ক্রিয়েশন এবং স্কেলিং"
          },
          {
            "en": "High-ROI Creative Testing (ABO vs CBO) & Ad Copy Formulas",
            "bn": "এবিও বনাম সিবিও বাজেট অপটিমাইজেশন ও অ্যাড কপি"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Google Ads & YouTube PPC Campaign Mastery",
          "bn": "মডিউল ৩: Google Ads ও PPC ক্যাম্পেইন মাস্টারি"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Google Ads Account Setup, Billing & Quality Score Mechanics",
            "bn": "গুগল অ্যাডস অ্যাকাউন্ট ও কোয়ালিটি স্কোর ফ্যাক্টর্স"
          },
          {
            "en": "High Buyer-Intent Keyword Research (Broad, Phrase, Exact & Negative)",
            "bn": "বায়ার ইন্টেন্ট কিওয়ার্ড রিসার্চ ও নেগেটিভ কিওয়ার্ড ফিল্টারিং"
          },
          {
            "en": "Google Search Text Ads, Responsive Search Ads & Ad Assets / Extensions",
            "bn": "রেসপনসিভ সার্চ অ্যাডস ও এক্সটেনশন অপটিমাইজেশন"
          },
          {
            "en": "YouTube Video Ads (In-Stream, Bumper) & Google Display Network (GDN)",
            "bn": "ইউটিউব ভিডিও বিজ্ঞাপন ও গুগল ডিসপ্লে ক্যাম্পেইন"
          },
          {
            "en": "Performance Max (PMax) Campaigns & Conversion Tracking Setup",
            "bn": "পারফরম্যান্স ম্যাক্স ক্যাম্পেইন ও কনভার্সন ট্র্যাকিং"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: Search Engine Optimization (Technical, On-Page & Local)",
          "bn": "মডিউল ৪: Search Engine Optimization (SEO)"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Search Engine Algorithms, Crawling, Indexing & Ranking Factors",
            "bn": "গুগল অ্যালগরিদম ও ক্রলিং-ইনডেক্সিং ফান্ডামেন্টালস"
          },
          {
            "en": "Keyword Research, Search Intent & Competitor Content Gap Analysis",
            "bn": "কিওয়ার্ড রিসার্চ ও কনটেন্ট গ্যাপ অ্যানালাইসিস"
          },
          {
            "en": "On-Page SEO: Title Tags, Meta Descriptions, Headings, Internal Links & Schema",
            "bn": "অন-পেজ এসইও, মেটা ডেটা ও স্কিমা মার্কআপ"
          },
          {
            "en": "Technical SEO: Core Web Vitals, XML Sitemaps, Robots.txt & Page Speed",
            "bn": "টেকনিক্যাল এসইও ও সাইট অডিট"
          },
          {
            "en": "Off-Page SEO: High-Authority Backlink Strategies & Digital PR",
            "bn": "অফ-পেজ এসইও ও কোয়ালিটি ব্যাকলিংক বিল্ডিং"
          },
          {
            "en": "Local SEO: Google Business Profile Optimization & Map Rankings",
            "bn": "লোকাল এসইও ও গুগল ম্যাপ র‍্যাংকিং স্ট্র্যাটেজি"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: Data Tracking, GTM & Server-Side GA4 Analytics",
          "bn": "মডিউল ৫: Data Tracking ও GA4 Analytics"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Google Tag Manager (GTM) Container, Tags, Triggers & Variables Setup",
            "bn": "গুগল ট্যাগ ম্যানেজার (GTM) কনফিগারেশন"
          },
          {
            "en": "Google Analytics 4 (GA4) Event Modeling, E-Commerce DataLayer & Funnels",
            "bn": "GA4 ইভেন্ট মডেলিং ও ই-কমার্স ডেটালেয়ার ট্র্যাকিং"
          },
          {
            "en": "Server-Side Tracking Setup with Cloudflare & Google Cloud",
            "bn": "সার্ভার-সাইড ট্র্যাকিং সেটআপ"
          },
          {
            "en": "Custom Attribution Modeling, UTM Tracking & Looker Studio Dashboards",
            "bn": "লুকার স্টুডিও দিয়ে লাইভ ক্লায়েন্ট রিপোর্টিং ড্যাশবোর্ড"
          }
        ]
      },
      {
        "moduleNumber": 6,
        "title": {
          "en": "Module 6: B2B Lead Generation & Cold Email Funnels",
          "bn": "মডিউল ৬: B2B Lead Generation ও কোল্ড ইমেইল"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "LinkedIn Sales Navigator Advanced Filters for Decision Makers",
            "bn": "লিঙ্কডইন সেলস নেভিগেটর দিয়ে টার্গেটেড লিড স্ক্র্যাপিং"
          },
          {
            "en": "B2B Data Scraping, Email Verification & Cleaning Tools (Apollo, Hunter)",
            "bn": "অ্যাপোলো ও হান্টার দিয়ে ইমেইল ভেরিফিকেশন"
          },
          {
            "en": "Cold Email Copywriting, Personalization & Inbox Deliverability (SPF, DKIM, DMARC)",
            "bn": "কোল্ড ইমেইল কপিরাইটিং ও ইনবক্স ডেলিভারিবিলিটি"
          },
          {
            "en": "Automated Drip Outreach Campaigns (Instantly, Smartlead)",
            "bn": "অটোমেটেড ড্রিপ ইমেইল ক্যাম্পেইন সেটআপ"
          }
        ]
      },
      {
        "moduleNumber": 7,
        "title": {
          "en": "Module 7: AI Automation for Marketing (ChatGPT & AI Tools)",
          "bn": "মডিউল ৭: AI Automation Techniques in Marketing"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "ChatGPT Prompt Frameworks for High-Converting Ad Copy & Video Hooks",
            "bn": "ChatGPT দিয়ে হাই-কনভার্টিং অ্যাড কপি ও হুক তৈরি"
          },
          {
            "en": "AI-Powered SEO Blog Writing, Content Outlining & Keyword Clusters",
            "bn": "এআই কনটেন্ট প্ল্যানিং ও এসইও অপটিমাইজড ব্লগ রাইটিং"
          },
          {
            "en": "AI Tools for Ad Visuals, Creative Iterations & Voiceovers",
            "bn": "এআই দিয়ে ক্রিয়েটিভ ব্যানার ও ভয়েসওভার প্রোডাকশন"
          },
          {
            "en": "Automating Social Media Calendars & Marketing CRM Workflows",
            "bn": "সোশ্যাল মিডিয়া অটোমেশন ও সিআরএম পাইপলাইন"
          }
        ]
      },
      {
        "moduleNumber": 8,
        "title": {
          "en": "Module 8: Fiverr/Upwork Mastery & Direct International Client Hunting",
          "bn": "মডিউল ৮: ফ্রিল্যান্সিং ও আন্তর্জাতিক ক্লায়েন্ট হান্টিং"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Building a Live Performance Marketing Portfolio & Client Proofs",
            "bn": "লাইভ ক্যাম্পেইন কেস স্টাডি ও পোর্টফোলিও তৈরি"
          },
          {
            "en": "Fiverr Gig SEO Optimization for Meta Ads, Google Ads & SEO Services",
            "bn": "ফাইভারে ডিজিটাল মার্কেটিং গিগ অপটিমাইজেশন"
          },
          {
            "en": "Upwork Profile Setup, Proposal Writing & Video Pitch Strategies",
            "bn": "আপওয়ার্কে ক্লায়েন্ট উইনিং প্রপোজাল তৈরি"
          },
          {
            "en": "Direct Client Hunting on LinkedIn & Closing $1,000+/Month Retainers",
            "bn": "মার্কেটপ্লেসের বাইরে হাই-টিকিট বিদেশি ক্লায়েন্ট ক্লোজিং"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "24 Live Interactive Classes & Screen Recordings",
        "bn": "২৪ টি লাইভ ক্লাস ও আজীবন রেকর্ডিং এক্সেস"
      },
      {
        "en": "Live Real Ad Budget Practice in Class",
        "bn": "ক্লাসে সরাসরি লাইভ বাজেটে বিজ্ঞাপন পরিচালনা"
      },
      {
        "en": "Ready-Made Funnel Templates & Ad Copy Cheatsheets",
        "bn": "তৈরি করা ফানেল টেমপ্লেট ও কপিরাইটিং ফর্মুলা"
      },
      {
        "en": "Fiverr, Upwork & Direct Client Hunting Mentorship",
        "bn": "মার্কেটপ্লেস ও ডিরেক্ট ক্লায়েন্ট হান্টিং লাইফটাইম সাপোর্ট"
      },
      {
        "en": "Industry-Recognized Digital Marketing Certificate",
        "bn": "প্রফেশনাল ডিজিটাল মার্কেটিং সার্টিফিকেট"
      }
    ],
    "reviews": [
      {
        "id": "r-dm-1",
        "name": "Mehedi Hasan",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "Performance Marketer",
          "bn": "পারফরম্যান্স মার্কেটার"
        },
        "rating": 5,
        "comment": {
          "en": "The Meta Ads Funnel and Server-Side Tracking modules were game changing. Today I manage ad accounts for 3 international e-commerce stores with 4.5x ROAS!",
          "bn": "মেটা অ্যাডস ফানেল ও সিএপিআই ট্র্যাকিংয়ের প্র্যাকটিক্যাল কাজ শেখার পর বর্তমানে আমি ৩টি বিদেশি ই-কমার্স স্টোরের অ্যাড ক্যাম্পেইন সফলভাবে চালাচ্ছি।"
        },
        "date": "2026-08-19"
      }
    ]
  },
  {
    "id": "52",
    "slug": "wordpress-dev-online",
    "title": {
      "en": "Professional WordPress Development (Online)",
      "bn": "প্রফেশনাল ওয়ার্ডপ্রেস ডেভেলপমেন্ট (অনলাইন)"
    },
    "subtitle": {
      "en": "Live Online WordPress Customization, Elementor & WooCommerce",
      "bn": "অনলাইনে লাইভ ক্লাসের মাধ্যমে ওয়ার্ডপ্রেস ওয়েবসাইট বিল্ডিং"
    },
    "category": "web",
    "categoryLabel": {
      "en": "Programming",
      "bn": "প্রোগ্রামিং"
    },
    "badge": {
      "en": "ONLINE LIVE",
      "bn": "অনলাইন লাইভ"
    },
    "mode": {
      "en": "Online",
      "bn": "অনলাইন"
    },
    "modeType": "online",
    "rating": 5,
    "ratingsCount": 55,
    "enrolledCount": "50+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "10000৳",
    "rawFee": 10000,
    "originalFee": "15000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "24 Classes",
      "bn": "২৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/wordpress.jpg",
    "videoUrl": "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2302715647232585%2F&show_text=0",
    "whatsappLink": "https://wa.me/8801995852964?text=%E0%A6%86%E0%A6%AE%E0%A6%BF%20%22Professional%20WordPress%20Development%20(Online)%22%20%E0%A6%95%E0%A7%8B%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%9F%E0%A6%BF%20%E0%A6%95%E0%A6%B0%E0%A6%A4%E0%A7%87%20%E0%A6%9A%E0%A6%BE%E0%A6%87%E0%A5%A4",
    "instructor": {
      "name": "Mahmudur Rahman",
      "designation": {
        "en": "Senior WordPress Engineer",
        "bn": "সিনিয়র ওয়ার্ডপ্রেস ইঞ্জিনিয়ার"
      },
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
      "bio": {
        "en": "Developed 300+ client projects.",
        "bn": "৩০০+ ক্লায়েন্ট প্রজেক্ট ও কাস্টম থিম ডেভেলপার।"
      },
      "experience": "10+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Live Online WordPress Bootcamp covering Elementor Pro, Divi, WooCommerce, local (bKash/Nagad) & global payment gateways, dynamic ACF/JetEngine systems, sales funnels, and Fiverr/Upwork freelancing.",
      "bn": "অনলাইনে লাইভ ক্লাসের মাধ্যমে কোডিং ছাড়াই প্রফেশনাল ই-কমার্স ওয়েবসাইট ও ডায়নামিক পোর্টাল তৈরি শিখুন। এলিমেন্টর প্রো, ডিভি, উকমার্স, বিকাশ-নগদ পেমেন্ট গেটওয়ে, এসিএফ ও ক্রোকোব্লক এবং ফ্রিল্যান্সিং ক্যারিয়ার গাইডলাইন।"
    },
    "fullDescription": {
      "en": "Master WordPress development from anywhere in Bangladesh or abroad. Complete with live project reviews, premium theme-plugin practice files, and dedicated freelancing guidance.",
      "bn": "অনলাইনে লাইভ ক্লাসের মাধ্যমে হোটেল ও সার্ভিস বুকিং সিস্টেম, সেলস ফানেল, মার্কেটিং অটোমেশন, স্পিড অপটিমাইজেশন এবং ফাইভার ও আপওয়ার্কে ফ্রিল্যান্সিংয়ের কমপ্লিট গাইডলাইন পাবেন।"
    },
    "coreValues": [
      {
        "id": "cv-wp-1",
        "title": {
          "en": "Zero-Coding to Pro Websites",
          "bn": "কোডিং ছাড়া প্রফেশনাল ওয়েবসাইট"
        },
        "desc": {
          "en": "Design stunning landing pages and dynamic portals using visual builders like Elementor Pro & Divi.",
          "bn": "জিরো কোডিংয়েও আধুনিক ল্যান্ডিং পেজ ও বিজনেস ওয়েবসাইট তৈরির পূর্ণাঙ্গ দক্ষতা।"
        },
        "icon": "LayoutGrid"
      },
      {
        "id": "cv-wp-2",
        "title": {
          "en": "WooCommerce & Payment Gateways",
          "bn": "উকমার্স ও পেমেন্ট ইন্টিগ্রেশন"
        },
        "desc": {
          "en": "Complete e-commerce store with bKash, Nagad, Stripe, PayPal and automated checkout flows.",
          "bn": "বিকাশ, নগদ, রকেট ও আন্তর্জাতিক পেমেন্ট গেটওয়ে সহ ফুল ই-কমার্স শপ সেটআপ।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv-wp-3",
        "title": {
          "en": "Premium Plugins & Freelance Roadmap",
          "bn": "প্রিমিয়াম টুলস ও ফ্রিল্যান্সিং"
        },
        "desc": {
          "en": "Get access to premium themes/plugins and step-by-step client hunting guidance on Fiverr & Upwork.",
          "bn": "প্রিমিয়াম থিম-প্লাগিন প্র্যাকটিস ফাইল এবং মার্কেটপ্লেসে সফল ক্যারিয়ার গাইডলাইন।"
        },
        "icon": "CheckCircle2"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Zero-Coding Background to Professional Website Development & Freelancing",
        "bn": "জিরো কোডিং ব্যাকগ্রাউন্ড থেকে প্রফেশনাল ওয়েবসাইট ডেভেলপমেন্ট"
      },
      {
        "en": "Modern Landing Page & Business Site Design with Elementor Pro & Divi",
        "bn": "এলিমেন্টর প্রো ও ডিভি দিয়ে আধুনিক ল্যান্ডিং পেজ ও বিজনেস ওয়েবসাইট ডিজাইন"
      },
      {
        "en": "Full-Functional WooCommerce E-Commerce Shop Setup & Configuration",
        "bn": "উকমার্স দিয়ে ফুল-ফাংশনাল ই-কমার্স শপ ও ইনভেন্টরি ম্যানেজমেন্ট"
      },
      {
        "en": "bKash, Nagad, Rocket, Stripe & PayPal Payment Gateway Integrations",
        "bn": "বিকাশ, নগদ, রকেট ও আন্তর্জাতিক পেমেন্ট গেটওয়ে ইন্টিগ্রেশন"
      },
      {
        "en": "Dynamic Websites with ACF (Advanced Custom Fields) & Crocoblock / JetEngine",
        "bn": "এসিএফ (ACF) ও ক্রোকোব্লক দিয়ে ডায়নামিক ওয়েবসাইট ও কাস্টম পোস্ট তৈরি"
      },
      {
        "en": "Hotel, Restaurant & Service Appointment Booking Systems",
        "bn": "হোটেল, রেস্টুরেন্ট ও সার্ভিস বুকিং সিস্টেম সেটআপ"
      },
      {
        "en": "Sales Funnel, Checkout Optimization & Marketing Automation Workflows",
        "bn": "সেলস ফানেল এবং মার্কেটিং অটোমেশন সেটআপ করার পদ্ধতি"
      },
      {
        "en": "Speed Optimization (Core Web Vitals 90+ Score) & Website Security",
        "bn": "প্রফেশনাল পোর্টফোলিও তৈরি, সাইটের স্পিড ও সিকিউরিটি অপটিমাইজেশন"
      },
      {
        "en": "Complete Fiverr & Upwork Freelancing Blueprint for High-Ticket Orders",
        "bn": "ফাইভার ও আপওয়ার্কে সফল ফ্রিল্যান্সিং ক্যারিয়ার গড়ার কমপ্লিট গাইডলাইন"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: WordPress Core, Domain & Hosting Environment Setup",
          "bn": "মডিউল ১: WordPress বেসিকস, ডোমেন ও হোস্টিং সেটআপ"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Domain Name, DNS Configuration & Fast Cloud Hosting Setup",
            "bn": "ডোমেন নেম, ডিএনএস কনফিগারেশন ও ক্লাউড হোস্টিং সেটআপ"
          },
          {
            "en": "cPanel Navigation, MySQL Database Creation & WordPress Installation",
            "bn": "সিপ্যানেল, মাইএসকিউএল ডাটাবেজ ও ওয়ার্ডপ্রেস ইনস্টলেশন"
          },
          {
            "en": "WordPress Dashboard Tour, General Settings, Permalinks & Media Library",
            "bn": "ওয়ার্ডপ্রেস ড্যাশবোর্ড পরিচিতি, পারমালিংক ও মিডিয়া সেটিংস"
          },
          {
            "en": "Free vs Premium Themes & Plugins Installation and Management",
            "bn": "থিম ও প্লাগইন ইন্সটলেশন এবং লাইসেন্স ম্যানেজমেন্ট"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Elementor Pro & Divi Visual Design Mastery",
          "bn": "মডিউল ২: Elementor Pro ও Divi দিয়ে আধুনিক ডিজাইন"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Elementor Pro Layouts, Flexbox Containers & Modern Grids",
            "bn": "এলিমেন্টর ফ্লেক্সবক্স কন্টেইনার ও রেসপনসিভ গ্রিড লেআউট"
          },
          {
            "en": "Building Custom Headers, Footers & Single Post Templates with Theme Builder",
            "bn": "থিম বিল্ডার দিয়ে কাস্টম হেডার, ফুটার ও ব্লগ টেমপ্লেট তৈরি"
          },
          {
            "en": "Divi Builder Modules, Visual Presets & Interactive Hover Effects",
            "bn": "ডিভি বিল্ডার দিয়ে বিজনেস ওয়েবসাইট ও ইন্টারঅ্যাক্টিভ ডিজাইন"
          },
          {
            "en": "Designing Pixel-Perfect Responsive Landing Pages from Scratch",
            "bn": "মোবাইল ও ট্যাবলেট ফ্রেন্ডলি হাই-কনভার্টিং ল্যান্ডিং পেজ ডিজাইন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: WooCommerce Full-Scale E-Commerce Store Development",
          "bn": "মডিউল ৩: WooCommerce দিয়ে ফুল-ফাংশনাল ই-কমার্স শপ"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "WooCommerce Setup Wizard, Currency, Location & Shipping Zones",
            "bn": "উকমার্স সেটআপ, কারেন্সি ও শিপিং জোন কনফিগারেশন"
          },
          {
            "en": "Adding Simple, Variable, Grouped & Digital Downloadable Products",
            "bn": "সিম্পল ও ভ্যারিয়েবল প্রোডাক্ট লিস্টিং ও ইনভেন্টরি ম্যানেজমেন্ট"
          },
          {
            "en": "Customizing Shop Page, Single Product Page & Cart/Checkout Layouts",
            "bn": "এলিমেন্টর দিয়ে শপ পেজ ও সিঙ্গেল প্রোডাক্ট পেজ কাস্টমাইজেশন"
          },
          {
            "en": "Coupons, Discount Rules, Tax Configurations & Order Invoicing",
            "bn": "কুপন কোড, ডিসকাউন্ট রুলস ও অটোমেটেড পিডিএফ ইনভয়েস"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 4: Payment Gateway Integrations (bKash, Nagad, Stripe)",
          "bn": "মডিউল ৪: বিকাশ, নগদ, রকেট ও স্ট্রাইপ পেমেন্ট গেটওয়ে"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Integrating bKash, Nagad & Rocket Automated Merchant Gateways",
            "bn": "বিকাশ ও নগদ অটোমেটেড পেমেন্ট গেটওয়ে ইন্টিগ্রেশন"
          },
          {
            "en": "SSLCommerz / Aamarpay Local Multi-Gateway Integration",
            "bn": "এসএসএলকমার্জ ও দেশীয় মাল্টি-পেমেন্ট গেটওয়ে সেটআপ"
          },
          {
            "en": "International Stripe Credit Card & PayPal Payment Gateway Setup",
            "bn": "স্ট্রাইপ ও পেপ্যাল আন্তর্জাতিক ক্রেডিট কার্ড পেমেন্ট সেটআপ"
          },
          {
            "en": "Cash on Delivery (COD), OTP Order Verification & WhatsApp Alerts",
            "bn": "ক্যাশ অন ডেলিভারি, ওটিপি ভেরিফিকেশন ও হোয়াটসঅ্যাপ অর্ডার নোটিফিকেশন"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 5: Dynamic Websites with ACF & Crocoblock / JetEngine",
          "bn": "মডিউল ৫: ACF ও Crocoblock দিয়ে ডায়নামিক ওয়েবসাইট"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Custom Post Types (CPT UI) & Taxonomy Architecture",
            "bn": "কাস্টম পোস্ট টাইপ ও ট্যাক্সোনমি তৈরি"
          },
          {
            "en": "Advanced Custom Fields (ACF Pro) Dynamic Fields & Repeaters",
            "bn": "এসিএফ প্রো দিয়ে ডায়নামিক ফিল্ডস ও রিপিটার সেটআপ"
          },
          {
            "en": "JetEngine Listing Grids, Custom Post Relations & Query Builder",
            "bn": "জেটইঞ্জিন লিস্টিং গ্রিডস ও রিলেশনাল ডেটাবেজ ম্যানেজমেন্ট"
          },
          {
            "en": "Building Dynamic Real Estate, Directory & Portfolio Portals",
            "bn": "রিয়েল এস্টেট ও প্রফেশনাল ডিরেক্টরি পোর্টাল তৈরি"
          }
        ]
      },
      {
        "moduleNumber": 6,
        "title": {
          "en": "Module 6: Hotel, Restaurant & Service Booking Systems",
          "bn": "মডিউল ৬: হোটেল ও সার্ভিস বুকিং সিস্টেম সেটআপ"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Hotel Room Availability Calendars, Pricing Rules & Booking Engine",
            "bn": "হোটেল রুম বুকিং ও লাইভ ক্যালেন্ডার রিজার্ভেশন সিস্টেম"
          },
          {
            "en": "Doctor / Salon / Consultant Appointment Booking System (Amelia / Bookly)",
            "bn": "সার্ভিস ও ডক্টর অ্যাপয়েন্টমেন্ট বুকিং সিস্টেম"
          },
          {
            "en": "Multi-step Booking Forms & Automated Email/SMS Reminders",
            "bn": "মাল্টি-স্টেপ বুকিং ফর্ম ও অটোমেটিক কনফার্মেশন মেসেজ"
          },
          {
            "en": "Client Management Dashboard & Booking Cancellation Flows",
            "bn": "ক্লায়েন্ট বুকিং ম্যানেজমেন্ট ও অ্যাডমিন ড্যাশবোর্ড"
          }
        ]
      },
      {
        "moduleNumber": 7,
        "title": {
          "en": "Module 7: Sales Funnels, Speed Optimization & Security",
          "bn": "মডিউল ৭: সেলস ফানেল, স্পিড ও সিকিউরিটি অপটিমাইজেশন"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Sales Funnel Setup with WPFunnels / CartFlows & One-Click Upsells",
            "bn": "সেলস ফানেল, আপসেল ও ডাউনসেল স্ট্র্যাটেজি সেটআপ"
          },
          {
            "en": "Website Speed Optimization for 90+ Score on Google PageSpeed",
            "bn": "ডব্লিউপি রকেট ও ইমেজ অপটিমাইজেশন দিয়ে সাইট স্পিড বৃদ্ধি"
          },
          {
            "en": "WordPress Security Hardening, Wordfence & Malware Protection",
            "bn": "ওয়ার্ডপ্রেস সিকিউরিটি ও ম্যালওয়্যার প্রটেকশন"
          },
          {
            "en": "Automated Cloud Backups, Migration & Domain Transfer Techniques",
            "bn": "অটোমেটেড ব্যাকআপ ও ওয়েবসাইট মাইগ্রেশন টেকনিক"
          }
        ]
      },
      {
        "moduleNumber": 8,
        "title": {
          "en": "Module 8: Fiverr & Upwork Freelancing Blueprint + Live Projects",
          "bn": "মডিউল ৮: ফাইভার-আপওয়ার্ক ফ্রিল্যান্সিং ও লাইভ প্রজেক্ট"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Creating a Professional WordPress Freelancer Portfolio Website",
            "bn": "প্রফেশনাল ওয়ার্ডপ্রেস পোর্টফোলিও ওয়েবসাইট তৈরি"
          },
          {
            "en": "Fiverr WordPress Gig SEO, Keyword Research & First Order Strategy",
            "bn": "ফাইভার গিগ এসইও ও প্রথম অর্ডার পাওয়ার সিক্রেট মেথড"
          },
          {
            "en": "Upwork Profile Setup, Winning Proposal Writing & Client Communication",
            "bn": "আপওয়ার্কে ক্লায়েন্ট উইনিং প্রপোজাল রাইটিং কৌশল"
          },
          {
            "en": "Handling International Client Orders, Pricing & Long-Term Contracts",
            "bn": "ইন্টারন্যাশনাল ক্লায়েন্ট হ্যান্ডলিং ও লং-টার্ম কন্ট্রাক্ট তৈরি"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "24 Live Interactive Classes & Screen Recordings",
        "bn": "২৪ টি লাইভ ক্লাস ও লাইফটাইম ভিডিও রেকর্ডিং"
      },
      {
        "en": "Premium Themes & Plugins Practice Files Included",
        "bn": "প্রিমিয়াম থিম-প্লাগইন প্র্যাকটিস ফাইলস ও রিসোর্স"
      },
      {
        "en": "Live E-Commerce & Dynamic Booking Projects",
        "bn": "লাইভ ই-কমার্স ও বুকিং পোর্টাল প্রজেক্টস"
      },
      {
        "en": "Dedicated Freelancing Support on Fiverr & Upwork",
        "bn": "ফাইভার ও আপওয়ার্কে ফ্রিল্যান্সিং গাইডলাইন ও সাপোর্ট"
      },
      {
        "en": "Industry-Recognized WordPress Certificate",
        "bn": "প্রফেশনাল কোর্স কমপ্লিশন সার্টিফিকেট"
      }
    ],
    "reviews": [
      {
        "id": "r-wp-1",
        "name": "Nazmul Huda",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
        "role": {
          "en": "WordPress Freelancer",
          "bn": "ওয়ার্ডপ্রেস ফ্রিল্যান্সার"
        },
        "rating": 5,
        "comment": {
          "en": "The WooCommerce and payment gateway modules were super practical. I started receiving client projects on Fiverr within 2 months of enrolling!",
          "bn": "উকমার্স ও পেমেন্ট গেটওয়ের কাজগুলো একদম প্র্যাকটিক্যাল শেখানো হয়েছে। কোর্স চলাকালীনই ফাইভারে আমার প্রথম ক্লায়েন্ট প্রজেক্ট কমপ্লিট করেছি।"
        },
        "date": "2026-08-14"
      }
    ]
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
    whatsappLink: `https://wa.me/8801995852964?text=${encodeURIComponent("আমি " + formattedTitle + " কোর্সটি করতে চাই।")}`,
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

export function getVideoMeta(url: string) {
  if (!url) return { embedUrl: "", directUrl: "", isFacebook: false, isYouTube: false };
  
  if (url.includes("facebook.com")) {
    let directUrl = url;
    if (url.includes("plugins/video.php")) {
      const match = url.match(/href=([^&]+)/);
      if (match) {
        directUrl = decodeURIComponent(match[1]);
      }
    }
    return {
      embedUrl: url,
      directUrl: directUrl,
      isFacebook: true,
      isYouTube: false
    };
  }

  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    let directUrl = url;
    if (url.includes("embed/")) {
      const videoId = url.split("embed/")[1]?.split("?")[0];
      if (videoId) directUrl = `https://www.youtube.com/watch?v=${videoId}`;
    }
    return {
      embedUrl: url,
      directUrl: directUrl,
      isFacebook: false,
      isYouTube: true
    };
  }

  return { embedUrl: url, directUrl: url, isFacebook: false, isYouTube: false };
}
