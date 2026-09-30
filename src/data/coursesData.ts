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
    "slug": "advanced-graphic-design-with-freelancing",
    "title": {
      "en": "Advanced Graphic Design with Freelancing",
      "bn": "অ্যাডভান্সড গ্রাফিক ডিজাইন উইথ ফ্রিল্যান্সিং"
    },
    "subtitle": {
      "en": "Master Photoshop, Illustrator, AI generative tools, branding, packaging & international freelancing marketplaces",
      "bn": "ফটোশপ, ইলাস্ট্রেটর, এআই টুলস, ব্র্যান্ড আইডেন্টিটি, প্যাকেজিং ও মার্কেটপ্লেস ক্যারিয়ার"
    },
    "category": "creative",
    "categoryLabel": {
      "en": "Design & UI/UX",
      "bn": "ডিজাইন ও ইউআই/ইউএক্স"
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
    "ratingsCount": 198,
    "enrolledCount": "420+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "17,000৳",
    "rawFee": 17000,
    "originalFee": "25,000৳",
    "duration": {
      "en": "90 hrs. (3 Months)",
      "bn": "৯০ ঘণ্টা (৩ মাস)"
    },
    "classesCount": {
      "en": "30 Classes",
      "bn": "৩০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/graphic design.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Sabrina Rahman",
      "designation": {
        "en": "Senior Visual Designer & Behance Top Creator",
        "bn": "সিনিয়র ভিজ্যুয়াল ডিজাইনার ও বেহ্যান্স টপ ক্রিয়েটর"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "7+ years experience in brand identity, packaging design and top-rated freelancing.",
        "bn": "ব্র্যান্ড আইডেন্টিটি, প্যাকেজিং ডিজাইন ও টপ-রেটেড ফ্রিল্যান্সিংয়ে ৭+ বছরের অভিজ্ঞতা।"
      },
      "experience": "7+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "A complete professional graphic design mastery program. Learn Adobe Photoshop, advanced image manipulation, blend techniques, hair masking & action work, AI tools, Adobe Illustrator, vector logo design, t-shirt design, product packaging, Behance portfolio curation, communicative English and freelancing skills.",
      "bn": "একটি পূর্ণাঙ্গ প্রফেশনাল গ্রাফিক ডিজাইন কোর্স। এতে ফটোশপ, ইমেজ ম্যানিপুলেশন, ব্লেন্ড টেকনিক, হেয়ার মাস্কিং, এআই ডিজাইন, ইলাস্ট্রেটর, লোগো ডিজাইন, টি-শার্ট ডিজাইন, প্যাকেজিং, বেহ্যান্স পোর্টফোলিও এবং ফ্রিল্যান্সিং মার্কেটপ্লেস শেখানো হয়।"
    },
    "fullDescription": {
      "en": "This 90-hour hands-on graphic design course covers Adobe Photoshop and Adobe Illustrator from fundamental principles to cutting-edge AI-assisted workflows. You will design commercial brand identities, product packaging, t-shirts, social media campaigns and build a world-class Behance portfolio to earn from Fiverr, Upwork and local agencies.",
      "bn": "৯০ ঘণ্টার এই বাস্তবভিত্তিক কোর্সে আপনি ফটোশপ ও ইলাস্ট্রেটরের অ্যাডভান্সড টুলস, এআই টেকনোলজি, লোগো ও ব্র্যান্ডিং, টি-শার্ট ডিজাইন, প্রোডাক্ট প্যাকেজিং এবং আন্তর্জাতিক মার্কেটপ্লেসে কাজ পাওয়ার যাবতীয় স্কিল শিখবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Professional Brand Identity",
          "bn": "প্রফেশনাল ব্র্যান্ড আইডেন্টিটি"
        },
        "desc": {
          "en": "Create industry-grade vector logos, stationery and comprehensive brand guidelines.",
          "bn": "ভেক্টর লোগো ও ব্র্যান্ড গাইডলাইন তৈরিতে দক্ষতা।"
        },
        "icon": "Palette"
      },
      {
        "id": "cv2",
        "title": {
          "en": "AI-Powered Workflows",
          "bn": "এআই পাওয়ারড ডিজাইন"
        },
        "desc": {
          "en": "Leverage Midjourney, Firefly and Photoshop AI generative tools for 10x faster output.",
          "bn": "ফায়ারফ্লাই ও ফটোশপ এআই দিয়ে দ্রুত আধুনিক ডিজাইন।"
        },
        "icon": "Sparkles"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Marketplace Mastery",
          "bn": "মার্কেটপ্লেস ও ক্যারিয়ার"
        },
        "desc": {
          "en": "Fiverr & Upwork account setup, gig optimization, bidding, client communication and Behance portfolio.",
          "bn": "বেহ্যান্স পোর্টফোলিও ও মার্কেটপ্লেসে সফল ক্যারিয়ার।"
        },
        "icon": "Award"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master Adobe Photoshop tools, layers, blending modes and advanced hair masking.",
        "bn": "ফটোশপ টুলস, লেয়ার ও অ্যাডভান্সড হেয়ার মাস্কিংয়ে পারদর্শী হওয়া।"
      },
      {
        "en": "Create ultra-realistic image manipulation and photo compositing with dynamic lighting.",
        "bn": "ফটোরিয়ালিস্টিক ইমেজ ম্যানিপুলেশন ও কম্পোজিটিং তৈরি করা।"
      },
      {
        "en": "Master Adobe Illustrator for vector logo design, typography and t-shirt graphics.",
        "bn": "ভেক্টর লোগো ডিজাইন, টাইপোগ্রাফি ও টি-শার্ট গ্রাফিক্সে দক্ষতা অর্জন।"
      },
      {
        "en": "Design commercial 3D packaging mockups, die-lines and print-ready files.",
        "bn": "প্রিন্ট-রেডি প্রোডাক্ট প্যাকেজিং ও ডাই-লাইন ডিজাইন তৈরি করা।"
      },
      {
        "en": "Build an international Behance portfolio and succeed on Fiverr, Upwork & Freelancer.",
        "bn": "বেহ্যান্স পোর্টফোলিও তৈরি এবং আন্তর্জাতিক ফ্রিল্যান্সিং মার্কেটপ্লেসে সফল হওয়া।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Adobe Photoshop & Advanced Photo Manipulation",
          "bn": "মডিউল ১: অ্যাডোবি ফটোশপ ও অ্যাডভান্সড ইমেজ ম্যানিপুলেশন"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Adobe Photoshop Interface, Layers, Smart Objects & Selection Tools",
            "bn": "ফটোশপ ইন্টারফেস, লেয়ার্স, স্মার্ট অবজেক্টস ও সিলেকশন টুলস"
          },
          {
            "en": "Image Manipulation, Background Removal & Pen Tool Precision",
            "bn": "ইমেজ ম্যানিপুলেশন, ব্যাকগ্রাউন্ড রিমুভাল ও পেন টুল মাস্টারি"
          },
          {
            "en": "Advance Blend Technique, Layer Masks & Clipping Masks",
            "bn": "অ্যাডভান্স ব্লেন্ড টেকনিক, লেয়ার মাস্ক ও ক্লিপিং মাস্ক"
          },
          {
            "en": "Hair Masking, Frequency Separation & Action Work Automation",
            "bn": "হেয়ার মাস্কিং, ফ্রিকোয়েন্সি সেপারেশন ও অ্যাকশন ওয়ার্ক অটোমেশন"
          },
          {
            "en": "Artificial Intelligence (AI) Generative Fill & Neural Filters",
            "bn": "আর্টিফিশিয়াল ইন্টেলিজেন্স (AI) জেনারেটিভ ফিল ও নিউরাল ফিল্টার"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Adobe Illustrator, Vector Graphics & Branding",
          "bn": "মডিউল ২: অ্যাডোবি ইলাস্ট্রেটর, ভেক্টর গ্রাফিক্স ও ব্র্যান্ডিং"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Adobe Illustrator Tools, Pathfinders & Vector Fundamentals",
            "bn": "ইলাস্ট্রেটর টুলস, পাথফাইন্ডার ও ভেক্টর ফান্ডামেন্টালস"
          },
          {
            "en": "Advance Gradient Technique, Mesh Tool & Color Palettes",
            "bn": "অ্যাডভান্স গ্রেডিয়েন্ট টেকনিক, মেশ টুল ও কালার প্যালেট"
          },
          {
            "en": "Logo Design (Minimalist, Mascot, Monogram, Emblem, Abstract)",
            "bn": "লোগো ডিজাইন (মিনিমালিস্ট, মাসকট, মনোগ্রাম ও অ্যাবস্ট্রাক্ট)"
          },
          {
            "en": "T-shirt Design (Typography, Vintage, Screen Print Preparation)",
            "bn": "টি-শার্ট ডিজাইন (টাইপোগ্রাফি, ভিন্টেজ, স্ক্রিন প্রিন্ট প্রিপারেশন)"
          },
          {
            "en": "Product Packaging Design, Labeling & 3D Mockup Presentation",
            "bn": "প্রোডাক্ট প্যাকেজিং ডিজাইন, লেবেলিং ও থ্রিডি মকআপ প্রেজেন্টেশন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Portfolio, Marketplace & Soft Skills",
          "bn": "মডিউল ৩: পোর্টফোলিও, মার্কেটপ্লেস ও সফট স্কিলস"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Behance Portfolio Setup & High-Converting Case Studies",
            "bn": "বেহ্যান্স পোর্টফোলিও সেটআপ ও কেস স্টাডি ডিজাইন"
          },
          {
            "en": "Communicative English for Client Interaction & Negotiation",
            "bn": "ক্লায়েন্ট কমিউনিকেশনের জন্য প্রয়োজনীয় ইংরেজি ও নেগোসিয়েশন"
          },
          {
            "en": "Soft Skills, Professional Ethics & Time Management",
            "bn": "সফট স্কিলস, প্রফেশনাল এথিক্স ও টাইম ম্যানেজমেন্ট"
          },
          {
            "en": "Fiverr Gig Creation, SEO, Ranking Strategies & Order Fulfillment",
            "bn": "ফাইবার গিগ তৈরি, এসইও, র‍্যাংকিং ও অর্ডার ডেলিভারি"
          },
          {
            "en": "Upwork Profile Approval, Proposal Writing & Direct Client Acquisition",
            "bn": "আপওয়ার্ক প্রোফাইল, প্রপোজাল রাইটিং ও ডিরেক্ট ক্লায়েন্ট অ্যাকুইজিশন"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Government Endorsed Certificate",
        "bn": "সরকারি অনুমোদিত সার্টিফিকেট"
      },
      {
        "en": "100+ GB Premium Design Assets & Fonts",
        "bn": "১০০+ জিবি প্রিমিয়াম ডিজাইন অ্যাসেট ও ফন্টস"
      },
      {
        "en": "1-on-1 Portfolio & Marketplace Mentorship",
        "bn": "১-অন-১ পোর্টফোলিও ও মার্কেটপ্লেস মেন্টরশিপ"
      },
      {
        "en": "Lifetime Access to Class Recordings & Community",
        "bn": "ক্লাস রেকর্ডিং ও প্রাইভেট কমিউনিটিতে আজীবন অ্যাক্সেস"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Tanvir Ahmed",
        "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
        "role": {
          "en": "Freelance Graphic Designer",
          "bn": "ফ্রিল্যান্স গ্রাফিক ডিজাইনার"
        },
        "rating": 5,
        "comment": {
          "en": "The AI design techniques and hair masking sessions were incredible. I earned $450 in my first month on Fiverr!",
          "bn": "কোর্সের হেয়ার মাস্কিং ও এআই ট্রিকস অসাধারণ ছিল। ফাইবার থেকে প্রথম মাসেই আয় শুরু করেছি।"
        },
        "date": "1 Week Ago"
      }
    ]
  },
  {
    "id": "2",
    "slug": "mastering-wordpress-development",
    "title": {
      "en": "Mastering WordPress Development",
      "bn": "মাস্টারিং ওয়ার্ডপ্রেস ডেভেলপমেন্ট"
    },
    "subtitle": {
      "en": "From custom themes, WooCommerce & plugins to speed optimization, security & freelance marketplaces",
      "bn": "ডোমেইন হোস্টিং, থিম কাস্টমাইজেশন, উকমার্স, স্পিড অপ্টিমাইজেশন ও প্রফেশনাল ক্লায়েন্ট প্রজেক্ট"
    },
    "category": "web",
    "categoryLabel": {
      "en": "Programming & Web",
      "bn": "প্রোগ্রামিং ও ওয়েব"
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
    "enrolledCount": "380+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "18,000৳",
    "rawFee": 18000,
    "originalFee": "26,000৳",
    "duration": {
      "en": "120 hrs. (3.5 Months)",
      "bn": "১২০ ঘণ্টা (৩.৫ মাস)"
    },
    "classesCount": {
      "en": "40 Classes",
      "bn": "৪০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/wordpress.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "MD Shamim Rana",
      "designation": {
        "en": "WordPress Architect & Full-Stack Developer",
        "bn": "ওয়ার্ডপ্রেস আর্কিটেক্ট ও ফুল-স্ট্যাক ডেভেলপার"
      },
      "image": "/mentors/shamim-rana.png",
      "bio": {
        "en": "2.5+ years building enterprise WordPress, WooCommerce, custom themes/plugins and full-stack web solutions.",
        "bn": "এন্টারপ্রাইজ ওয়ার্ডপ্রেস ও উকমার্স সলিউশনে ২.৫+ বছরের অভিজ্ঞতা।"
      },
      "experience": "2.5+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "A comprehensive 120-hour WordPress development program covering domain & hosting, dashboard architecture, media & pages, theme customization, essential & custom plugins, user roles, WooCommerce store building, management tools, SEO & speed optimization, communicative English and freelancing marketplaces.",
      "bn": "১২০ ঘণ্টার পূর্ণাঙ্গ ওয়ার্ডপ্রেস ডেভেলপমেন্ট কোর্স। এতে ডোমেইন ও হোস্টিং, ওয়ার্ডপ্রেস ড্যাশবোর্ড, থিম ও প্লাগিন কাস্টমাইজেশন, উকমার্স অনলাইন শপ তৈরি, স্পিড ও এসইও অপ্টিমাইজেশন এবং আন্তর্জাতিক মার্কেটপ্লেসে ক্লায়েন্ট হ্যান্ডলিং শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Learn how to build any dynamic, high-performance website without coding or with custom code. From corporate portals and news magazines to full-featured WooCommerce e-commerce stores with automated payment gateways, speed optimization and malware protection.",
      "bn": "এই কোর্সে আপনি যেকোনো ডায়নামিক ওয়েবসাইট ও ই-কমার্স প্ল্যাটফর্ম তৈরি, বিকাশ/নগদ পেমেন্ট গেটওয়ে ইন্টিগ্রেশন, রকেট-ফাস্ট স্পিড অপ্টিমাইজেশন এবং আন্তর্জাতিক ক্লায়েন্টদের জন্য কাস্টম ওয়ার্ডপ্রেস সলিউশন তৈরি করা শিখবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "WooCommerce & Payments",
          "bn": "উকমার্স ও পেমেন্ট গেটওয়ে"
        },
        "desc": {
          "en": "Build full multi-vendor and retail stores with bKash, Nagad, Stripe and PayPal.",
          "bn": "সম্পূর্ণ অনলাইন স্টোর এবং লোকাল ও গ্লোবাল পেমেন্ট গেটওয়ে সেটআপ।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Page Builders & Customization",
          "bn": "পেজ বিল্ডার ও থিম কাস্টমাইজেশন"
        },
        "desc": {
          "en": "Master Elementor Pro, Gutenberg, Astra, Divi and theme options inside out.",
          "bn": "এলিমেন্টর প্রো ও আধুনিক পেজ বিল্ডারে পূর্ণাঙ্গ দক্ষতা।"
        },
        "icon": "Code2"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Speed, Security & SEO",
          "bn": "স্পিড, সিকিউরিটি ও এসইও"
        },
        "desc": {
          "en": "Achieve 95+ Google PageSpeed score, setup Wordfence security & RankMath SEO.",
          "bn": "ওয়েবসাইটের সর্বোচ্চ স্পিড অপ্টিমাইজেশন ও সিকিউরিটি রক্ষা।"
        },
        "icon": "ShieldCheck"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Configure CPanel, domain, SSL, database and local development environments.",
        "bn": "সিপ্যানেল, ডোমেইন হোস্টিং ও লোকাল সার্ভার কনফিগারেশন করা।"
      },
      {
        "en": "Build responsive corporate websites, portfolios, blogs and real estate portals.",
        "bn": "কর্পোরেট ওয়েবসাইট, পোর্টফোলিও ও ম্যাগাজিন পোর্টাল ডিজাইন করা।"
      },
      {
        "en": "Develop complete WooCommerce e-commerce stores with checkout customization.",
        "bn": "উকমার্স ই-কমার্স স্টোর ও ডায়নামিক চেকআউট তৈরি করা।"
      },
      {
        "en": "Perform 90+ PageSpeed optimizations, cache setups and firewall security hardening.",
        "bn": "ওয়েবসাইটের স্পিড বাড়ানো এবং হ্যাকিং প্রতিরোধে সিকিউরিটি হার্ডেনিং।"
      },
      {
        "en": "Win and deliver high-ticket WordPress projects on Fiverr and Upwork.",
        "bn": "ফাইবার ও আপওয়ার্কে ওয়ার্ডপ্রেস প্রজেক্ট পেয়ে সফলভাবে ডেলিভারি করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Domain, Hosting & WordPress Core Architecture",
          "bn": "মডিউল ১: ডোমেইন, হোস্টিং ও ওয়ার্ডপ্রেস কোর আর্কিটেকচার"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Domain and Hosting Setup, CPanel & Local Server (XAMPP/LocalWP)",
            "bn": "ডোমেইন ও হোস্টিং সেটআপ, সিপ্যানেল ও লোকাল সার্ভার"
          },
          {
            "en": "WordPress Dashboard Overview & Core File System (wp-config, htaccess)",
            "bn": "ওয়ার্ডপ্রেস ড্যাশবোর্ড পরিচিতি ও কোর ফাইল সিস্টেম"
          },
          {
            "en": "Media, Pages, Posts, Categories, Tags & Navigation Menus",
            "bn": "মিডিয়া, পেজ, পোস্ট, ক্যাটাগরি ও মেনু ব্যবস্থাপনা"
          },
          {
            "en": "Settings, Permalinks, Discussion & User Roles & Permissions",
            "bn": "সেটিংস, পারমালিঙ্ক ও ইউজার রোল ব্যবস্থাপনা"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Themes, Elementor Pro & WooCommerce Mastery",
          "bn": "মডিউল ২: থিম, এলিমেন্টর প্রো ও উকমার্স মাস্টারি"
        },
        "duration": {
          "en": "15 Classes • 45 Hours",
          "bn": "১৫ টি ক্লাস • ৪৫ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "Settings & Theme Overview: Premium Themes (Astra, Hello, OceanWP)",
            "bn": "সেটিংস ও থিম ওভারভিউ: প্রিমিয়াম থিম কনফিগারেশন"
          },
          {
            "en": "Elementor Pro Visual Page Builder, Header/Footer & Dynamic Templates",
            "bn": "এলিমেন্টর প্রো পেজ বিল্ডার ও ডাইনামিক টেমপ্লেট ডিজাইন"
          },
          {
            "en": "Plugins Architecture: Essential, Custom & Addon Plugins",
            "bn": "প্লাগিন আর্কিটেকচার: প্রয়োজনীয় প্লাগিন সেটআপ"
          },
          {
            "en": "WooCommerce & Products: Simple, Variable, Affiliate & Digital Products",
            "bn": "উকমার্স ও প্রোডাক্টস: সিম্পল, ভেরিয়েবল ও ডিজিটাল প্রোডাক্ট সেটআপ"
          },
          {
            "en": "Payment Gateways (bKash, Nagad, Stripe, PayPal) & Tax/Shipping Rules",
            "bn": "পেমেন্ট গেটওয়ে (বিকাশ, নগদ, স্ট্রাইপ) ও শিপিং ক্যালকুলেশন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Speed Optimization, SEO, Maintenance & Marketplace",
          "bn": "মডিউল ৩: স্পিড অপ্টিমাইজেশন, এসইও, মেইনটেন্যান্স ও মার্কেটপ্লেস"
        },
        "duration": {
          "en": "15 Classes • 45 Hours",
          "bn": "১৫ টি ক্লাস • ৪৫ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "WordPress Management Tools, Migration (All-in-One, Duplicator) & Backups",
            "bn": "ওয়ার্ডপ্রেস ম্যানেজমেন্ট টুলস, মাইগ্রেশন ও অটো ব্যাকআপ"
          },
          {
            "en": "SEO & Speed Optimization: WP Rocket, LiteSpeed Cache, Image Compression & RankMath",
            "bn": "এসইও ও স্পিড অপ্টিমাইজেশন: ক্যাশ ও র‍্যাঙ্কম্যাথ এসইও"
          },
          {
            "en": "WordPress Security Hardening, Wordfence, SSL & Malware Removal",
            "bn": "ওয়ার্ডপ্রেস সিকিউরিটি ও ম্যালওয়্যার ক্লিনআপ"
          },
          {
            "en": "Communicative English & Client Requirement Gathering",
            "bn": "কমিউনিকেটিভ ইংলিশ ও ক্লায়েন্ট রিকোয়ারমেন্ট অ্যানালাইসিস"
          },
          {
            "en": "Soft Skills, Freelance Marketplaces (Fiverr, Upwork) & Portfolio Showcase",
            "bn": "সফট স্কিলস, ফ্রিল্যান্স মার্কেটপ্লেস ও পোর্টফোলিও শোকেস"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Government Endorsed Certificate",
        "bn": "সরকারি অনুমোদিত সার্টিফিকেট"
      },
      {
        "en": "Elementor Pro & Premium Theme Pack (Worth $500+)",
        "bn": "এলিমেন্টর প্রো ও প্রিমিয়াম থিম প্যাক"
      },
      {
        "en": "Live Client Projects Portfolio",
        "bn": "লাইভ ক্লায়েন্ট প্রজেক্টস পোর্টফোলিও"
      },
      {
        "en": "1-on-1 Freelancing & Marketplace Mentorship",
        "bn": "১-অন-১ মার্কেটপ্লেস মেন্টরশিপ"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Sabbir Hossain",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "role": {
          "en": "WordPress Freelancer",
          "bn": "ওয়ার্ডপ্রেস ফ্রিল্যান্সার"
        },
        "rating": 5,
        "comment": {
          "en": "Learned WooCommerce & speed optimization thoroughly. Completed 12 client websites in 3 months!",
          "bn": "উকমার্স ও স্পিড অপ্টিমাইজেশন অসাধারণ শেখানো হয়েছে। ৩ মাসেই ১২টি সাইট তৈরি করেছি।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "3",
    "slug": "android-application-development",
    "title": {
      "en": "Android Application Development",
      "bn": "অ্যান্ড্রয়েড অ্যাপ্লিকেশন ডেভেলপমেন্ট"
    },
    "subtitle": {
      "en": "Build modern native Android apps using Kotlin, Jetpack Compose, Room, REST APIs & Firebase",
      "bn": "কোটলিন, জেটপ্যাক কম্পোজ, রেস্ট এপিআই ও ফায়ারবেস সহ প্রফেশনাল অ্যান্ড্রয়েড অ্যাপ ডেভেলপমেন্ট"
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
    "ratingsCount": 130,
    "enrolledCount": "290+ Enrolled",
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
    "image": "/images/course thumbnail/android application development.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Engr. Zahidul Islam",
      "designation": {
        "en": "Lead Android Developer at Pathao Tech",
        "bn": "লিড অ্যান্ড্রয়েড ডেভেলপার, পাঠাও টেক"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "6+ years building high-scale Android applications with 1M+ downloads on Google Play.",
        "bn": "গুগল প্লেতে ১ মিলিয়নের বেশি ডাউনলোড হওয়া অ্যান্ড্রয়েড অ্যাপ তৈরির ৬+ বছরের অভিজ্ঞতা।"
      },
      "experience": "6+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Learn native Android development from scratch to Google Play Store deployment. Covers Android Studio, Java/Kotlin basics, UI design & layouts, Activities & Navigation, Data Storage & SQLite/Room, Networking & Retrofit APIs, Firebase Integration, MVVM architecture, Communicative English and freelancing marketplace skills.",
      "bn": "অ্যান্ড্রয়েড স্টুডিও, কোটলিন, ইউআই লেআউটস, অ্যাক্টিভিটিজ ও নেভিগেশন, রুম ডাটাবেস, রেট্রোফিট এপিআই, ফায়ারবেস ইন্টিগ্রেশন ও প্লে স্টোরে অ্যাপ পাবলিশিং শেখার পূর্ণাঙ্গ কোর্স।"
    },
    "fullDescription": {
      "en": "Dive into industry-standard Android app development. You will build real-world native apps with modern Kotlin, Jetpack Compose, Material 3 Design, asynchronous Coroutines, Retrofit REST APIs, push notifications and Firebase backend.",
      "bn": "এই কোর্সে আপনি কোটলিন ও জেটপ্যাক কম্পোজ ব্যবহার করে চমৎকার ইউআই, এপিআই ডেটা ফেচিং, অফলাইন ক্যাশিং, ফায়ারবেস অথেনটিকেশন ও গুগল প্লে স্টোরে অ্যাপ রিলিজ দেওয়ার পূর্ণাঙ্গ প্রক্রিয়া শিখবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Modern Kotlin & MVVM",
          "bn": "মডার্ন কোটলিন ও এমভিভিএম"
        },
        "desc": {
          "en": "Write clean, testable, reactive code using MVVM architecture and Kotlin Flow.",
          "bn": "এমভিভিএম আর্কিটেকচার ও ক্লিন কোড প্র্যাকটিস।"
        },
        "icon": "Code2"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Networking & Cloud Backend",
          "bn": "নেটওয়ার্কিং ও ফায়ারবেস"
        },
        "desc": {
          "en": "Connect apps with REST APIs using Retrofit and real-time cloud data with Firebase.",
          "bn": "রেস্ট এপিআই ও রিয়েলটাইম ফায়ারবেস ব্যাকএন্ড।"
        },
        "icon": "Cloud"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Play Store Deployment",
          "bn": "গুগল প্লে স্টোর রিলিজ"
        },
        "desc": {
          "en": "Build APK/AAB packages, sign apps and publish live to the Google Play Store.",
          "bn": "প্রোডাকশন অ্যাপ সাইন করে গুগল প্লে স্টোরে পাবলিশ করা।"
        },
        "icon": "Smartphone"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master Android Studio IDE, project structure and Gradle build system.",
        "bn": "অ্যান্ড্রয়েড স্টুডিও ও গ্রেডল বিল্ড সিস্টেম আয়ত্ত করা।"
      },
      {
        "en": "Write clean object-oriented and functional Kotlin code for Android.",
        "bn": "কোটলিন প্রোগ্রামিং ভাষায় পারদর্শী হয়ে অ্যাপ তৈরি করা।"
      },
      {
        "en": "Design intuitive Material 3 UI layouts and implement multi-screen navigation.",
        "bn": "মডার্ন মেটেরিয়াল ডিজাইন ও স্মুথ স্ক্রিন নেভিগেশন তৈরি করা।"
      },
      {
        "en": "Manage offline-first persistence using Room Database & Shared Preferences.",
        "bn": "রুম ডাটাবেস দিয়ে অফলাইন ডাটা স্টোরেজ ও ক্যাশিং তৈরি করা।"
      },
      {
        "en": "Integrate Firebase auth, cloud messaging, crashlytics and publish on Google Play.",
        "bn": "ফায়ারবেস নোটিফিকেশন ও প্লে স্টোরে অ্যাপ রিলিজ করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Android Studio, Kotlin Core & UI Layouts",
          "bn": "মডিউল ১: অ্যান্ড্রয়েড স্টুডিও, কোটলিন কোর ও ইউআই লেআউটস"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Android Development Intro & Android Studio Setup",
            "bn": "অ্যান্ড্রয়েড ডেভেলপমেন্ট পরিচিতি ও অ্যান্ড্রয়েড স্টুডিও সেটআপ"
          },
          {
            "en": "Java/Kotlin Basics for Android: Variables, OOP, Lambdas & Coroutines",
            "bn": "জাভা/কোটলিন বেসিকস: ভ্যারিয়েবল, ওওপি ও কো-রুটিনস"
          },
          {
            "en": "UI Design & Layouts: ConstraintLayout, ViewBinding & Jetpack Compose",
            "bn": "ইউআই ডিজাইন ও লেআউটস: কনস্ট্রেইন্ট লেআউট ও জেটপ্যাক কম্পোজ"
          },
          {
            "en": "Activities & Navigation: Lifecycle, Intents, Fragments & Navigation Component",
            "bn": "অ্যাক্টিভিটিজ ও নেভিগেশন: লাইফসাইকেল, ইনটেন্টস ও ফ্র্যাগমেন্টস"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Data Storage, Networking & APIs",
          "bn": "মডিউল ২: ডাটা স্টোরেজ, নেটওয়ার্কিং ও এপিআই"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Data Storage & Management: SharedPreferences, DataStore & Room Database",
            "bn": "ডাটা স্টোরেজ ও ম্যানেজমেন্ট: রুম ডাটাবেস ও ডাটা স্টোর"
          },
          {
            "en": "Networking & APIs: Retrofit, OkHttp, GSON / Moshi Serialization",
            "bn": "নেটওয়ার্কিং ও এপিআই: রেট্রোফিট ও জেসন পার্সিং"
          },
          {
            "en": "MVVM Architecture, Repository Pattern & LiveData/StateFlow",
            "bn": "এমভিভিএম আর্কিটেকচার, রিপোজিটরি প্যাটার্ন ও স্টেটফ্লো"
          },
          {
            "en": "Firebase Integration: Authentication, Firestore, Realtime DB & FCM Push Notifications",
            "bn": "ফায়ারবেস অথেনটিকেশন, ফায়ারস্টোর ও পুশ নোটিফিকেশন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Production Projects, Play Store & Freelancing",
          "bn": "মডিউল ৩: প্রোডাকশন প্রজেক্টস, প্লে স্টোর ও ফ্রিল্যান্সিং"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Building an E-Commerce / Food Delivery App with Payment Integration",
            "bn": "পেমেন্ট গেটওয়ে সহ ফুল ই-কমার্স বা ফুড ডেলিভারি অ্যাপ প্রজেক্ট"
          },
          {
            "en": "Google Play Console Account, App Signing (AAB) & Store Optimization (ASO)",
            "bn": "প্লে কনসোল অ্যাকাউন্ট, অ্যাপ বান্ডেল ও এএসও"
          },
          {
            "en": "Communicative English & Soft Skills for Tech Interviews",
            "bn": "কমিউনিকেটিভ ইংলিশ ও টেকনিক্যাল ইন্টারভিউ প্রিপারেশন"
          },
          {
            "en": "Marketplace Guidance: Fiverr, Upwork & Remote Android Job Strategy",
            "bn": "মার্কেটপ্লেস ও রিমোট অ্যান্ড্রয়েড জবের স্ট্র্যাটেজি"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Government Endorsed Certificate",
        "bn": "সরকারি অনুমোদিত সার্টিফিকেট"
      },
      {
        "en": "Full Source Code of 4 Production Apps",
        "bn": "৪টি প্রোডাকশন অ্যাপের সম্পূর্ণ সোর্স কোড"
      },
      {
        "en": "Google Play Console Publishing Guidance",
        "bn": "গুগল প্লে স্টোরে পাবলিশিং সাপোর্ট"
      },
      {
        "en": "1-on-1 Code Review & Debugging Support",
        "bn": "১-অন-১ কোড রিভিউ ও লাইভ সাপোর্ট"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Rashedul Karim",
        "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100",
        "role": {
          "en": "Junior Android Developer",
          "bn": "জুনিয়র অ্যান্ড্রয়েড ডেভেলপার"
        },
        "rating": 5,
        "comment": {
          "en": "Best Android course in BD! The Retrofit and Room database projects helped me land my first software job.",
          "bn": "বাংলাদেশের সেরা অ্যান্ড্রয়েড কোর্স! রেট্রোফিট ও রুমের প্রজেক্টের জন্যই প্রথম চাকরি পেয়েছি।"
        },
        "date": "3 Weeks Ago"
      }
    ]
  },
  {
    "id": "4",
    "slug": "ux-ui-design",
    "title": {
      "en": "UX/UI Design",
      "bn": "ইউএক্স/ইউআই ডিজাইন"
    },
    "subtitle": {
      "en": "Design intuitive digital products with Figma: user research, wireframing, interactive prototyping & design systems",
      "bn": "ফিগমা, ইউজার রিসার্চ, ওয়্যারফ্রেমিং, প্রোটোটাইপিং ও ডিজাইন সিস্টেম সহ কমপ্লিট প্রোডাক্ট ডিজাইন"
    },
    "category": "creative",
    "categoryLabel": {
      "en": "Design & UI/UX",
      "bn": "ডিজাইন ও ইউআই/ইউএক্স"
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
    "ratingsCount": 172,
    "enrolledCount": "350+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "20,000৳",
    "rawFee": 20000,
    "originalFee": "28,000৳",
    "duration": {
      "en": "90 hrs. (3 Months)",
      "bn": "৯০ ঘণ্টা (৩ মাস)"
    },
    "classesCount": {
      "en": "30 Classes",
      "bn": "৩০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/ui ux design.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Nahid Hasan",
      "designation": {
        "en": "Lead Product Designer at FinTech Global",
        "bn": "লিড প্রোডাক্ট ডিজাইনার, ফিনটেক গ্লোবাল"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "7+ years designing mobile apps, SaaS dashboards and design systems for European and US clients.",
        "bn": "ইউরোপ ও আমেরিকার ক্লায়েন্টদের জন্য মোবাইল অ্যাপ ও সাস ড্যাশবোর্ড ডিজাইনে ৭+ বছরের অভিজ্ঞতা।"
      },
      "experience": "7+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Comprehensive UX/UI design masterclass. Topics include UX/UI design overview & languages, typography, iconography & imagery, sketching & wireframing, paper prototyping, app & web template design, implementation for mobile apps, prototyping process for web, work portfolio, communicative English and marketplace strategies.",
      "bn": "ইউএক্স/ইউআই ডিজাইনের পূর্ণাঙ্গ মাস্টারক্লাস। এতে ইউজার রিসার্চ, টাইপোগ্রাফি, স্কেচিং, ওয়্যারফ্রেমিং, পেপার প্রোটোটাইপিং, ফিগমাতে মোবাইল ও ওয়েব অ্যাপ ডিজাইন, ইন্টারঅ্যাক্টিভ প্রোটোটাইপ, পোর্টফোলিও ও মার্কেটপ্লেস ক্যারিয়ার শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Transform into an industry-ready Product (UX/UI) Designer. Learn how to conduct empathetic user research, create user personas, build wireframes, design atomic design systems in Figma and build advanced interactive prototypes with smart animations.",
      "bn": "এই কোর্সে আপনি ফিগমা ব্যবহার করে আন্তর্জাতিক মানের মোবাইল অ্যাপ ও ওয়েব ড্যাশবোর্ড ডিজাইন, ইউজার এক্সপেরিয়েন্স অডিট, ভ্যারিয়েন্টস, অটো-লেআউট এবং ইন্টারঅ্যাক্টিভ মাইক্রো-অ্যানিমেশন তৈরি শিখবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "User-Centered Research",
          "bn": "ইউজার রিসার্চ ও স্ট্র্যাটেজি"
        },
        "desc": {
          "en": "Conduct user interviews, surveys, empathy mapping and data-backed UX audits.",
          "bn": "ইউজার জার্নি ও ইনফরমেশন আর্কিটেকচার তৈরি।"
        },
        "icon": "Users"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Figma Design Systems",
          "bn": "ফিগমা ডিজাইন সিস্টেম"
        },
        "desc": {
          "en": "Build production design systems with auto-layout, variables and responsive components.",
          "bn": "অটো-লেআউট ও কম্পোনেন্ট লাইব্রেরি তৈরি।"
        },
        "icon": "Palette"
      },
      {
        "id": "cv3",
        "title": {
          "en": "High-Fidelity Prototyping",
          "bn": "ইন্টারঅ্যাক্টিভ প্রোটোটাইপিং"
        },
        "desc": {
          "en": "Create clickable smart-animate prototypes for mobile and web user testing.",
          "bn": "বাস্তবধর্মী ক্লিকেবল প্রোটোটাইপ তৈরি।"
        },
        "icon": "Layers"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Understand UX psychology, user mental models and design thinking methodology.",
        "bn": "ইউএক্স সাইকোলজি ও ডিজাইন থিংকিং মেথডোলজি বোঝা।"
      },
      {
        "en": "Master Figma: Auto-layout, component variants, design tokens and constraints.",
        "bn": "ফিগমা অটো-লেআউট ও ভ্যারিয়েন্টস ব্যবহারে শতভাগ দক্ষতা।"
      },
      {
        "en": "Create low-fidelity wireframes and high-fidelity pixel-perfect visual designs.",
        "bn": "ওয়্যারফ্রেম থেকে পিক্সেল-পারফেক্ট ফাইনাল ডিজাইন তৈরি।"
      },
      {
        "en": "Build advanced interactive prototypes with micro-interactions and smart animate.",
        "bn": "স্মার্ট অ্যানিমেট ও মাইক্রো-ইন্টারঅ্যাকশন প্রোটোটাইপ তৈরি।"
      },
      {
        "en": "Create Behance & Dribbble case studies and land high-paying UX/UI roles.",
        "bn": "বেহ্যান্স ও ড্রিবলে আকর্ষণীয় কেস স্টাডি বানিয়ে কাজ পাওয়া।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: UX Fundamentals, Research & Wireframing",
          "bn": "মডিউল ১: ইউএক্স ফান্ডামেন্টালস, রিসার্চ ও ওয়্যারফ্রেমিং"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "UX/UI Design Overview, Design Thinking & Product Lifecycle",
            "bn": "ইউএক্স/ইউআই ডিজাইন পরিচিতি, ডিজাইন থিংকিং ও প্রোডাক্ট লাইফসাইকেল"
          },
          {
            "en": "Typography, Iconography, Imagery & Color Theory for Digital Screens",
            "bn": "টাইপোগ্রাফি, আইকনোগ্রাফি, কালার থিওরি ও ভিজ্যুয়াল হায়ারার্কি"
          },
          {
            "en": "Sketching & Wireframing: Low-Fidelity Layouts & Information Architecture (IA)",
            "bn": "স্কেচিং, ওয়্যারফ্রেমিং ও ইনফরমেশন আর্কিটেকচার (IA)"
          },
          {
            "en": "Paper Prototyping Process & User Journey Mapping",
            "bn": "পেপার প্রোটোটাইপিং প্রসেস ও ইউজার জার্নি ম্যাপিং"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Figma Mastery & UI Design for Mobile/Web",
          "bn": "মডিউল ২: ফিগমা মাস্টারি ও মোবাইল/ওয়েব ইউআই ডিজাইন"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Figma Masterclass: Auto-layout 5.0, Components, Variants & Design Tokens",
            "bn": "ফিগমা মাস্টারক্লাস: অটো-লেআউট, কম্পোনেন্টস ও ভ্যারিয়েন্টস"
          },
          {
            "en": "App & Web Template Design: Responsive SaaS Dashboard & Landing Pages",
            "bn": "অ্যাপ ও ওয়েব টেমপ্লেট ডিজাইন: রেসপনসিভ ড্যাশবোর্ড ও ল্যান্ডিং পেজ"
          },
          {
            "en": "Implementation For Mobile Apps (iOS Human Interface & Android Material 3)",
            "bn": "মোবাইল অ্যাপস ইমপ্লিমেন্টেশন (আইওএস ও মেটেরিয়াল ৩ গাইডলাইন)"
          },
          {
            "en": "Prototyping Process For Web & Mobile: Smart Animate & Interactions",
            "bn": "ওয়েব ও মোবাইলের জন্য ইন্টারেক্টিভ প্রোটোটাইপিং ও অ্যানিমেশন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Design Systems, Portfolio & Freelancing",
          "bn": "মডিউল ৩: ডিজাইন সিস্টেমস, পোর্টফোলিও ও ফ্রিল্যান্সিং"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Building a Scalable Design System & Developer Handoff with Zeplin/Figma",
            "bn": "স্কেলেবল ডিজাইন সিস্টেম তৈরি ও ডেভেলপার হ্যান্ডঅফ"
          },
          {
            "en": "Work Portfolio Creation on Behance & Dribbble (Complete UX Case Study)",
            "bn": "বেহ্যান্স ও ড্রিবলে প্রফেশনাল ইউএক্স কেস স্টাডি পোর্টফোলিও"
          },
          {
            "en": "Communicative English for Design Critiques & Client Pitches",
            "bn": "ডিজাইন প্রেজেন্টেশন ও ক্লায়েন্ট পিচিংয়ের জন্য ইংরেজি"
          },
          {
            "en": "Soft Skills & Marketplace Mastery (Upwork, Fiverr, Toptal & LinkedIn)",
            "bn": "সফট স্কিলস ও রিমোট জব মার্কেটপ্লেস স্ট্র্যাটেজি"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Government Endorsed Certificate",
        "bn": "সরকারি অনুমোদিত সার্টিফিকেট"
      },
      {
        "en": "Comprehensive UI Kit & Design System Assets",
        "bn": "কমপ্রিহেনসিভ ইউআই কিট ও ডিজাইন সিস্টেম অ্যাসেট"
      },
      {
        "en": "3 Complete UX Case Studies for Portfolio",
        "bn": "পোর্টফোলিওর জন্য ৩টি কমপ্লিট ইউএক্স কেস স্টাডি"
      },
      {
        "en": "1-on-1 Portfolio Reviews by Senior Designers",
        "bn": "সিনিয়র ডিজাইনারদের দ্বারা ১-অন-১ পোর্টফোলিও রিভিউ"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Anika Tabassum",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
        "role": {
          "en": "Product Designer",
          "bn": "প্রোডাক্ট ডিজাইনার"
        },
        "rating": 5,
        "comment": {
          "en": "The case study preparation was top-tier. I got 3 remote client interview calls from my Behance case study!",
          "bn": "কেস স্টাডি মডিউল অসাধারণ ছিল। বেহ্যান্স পোর্টফোলিও দেখেই ক্লায়েন্টরা কাজ দিচ্ছে।"
        },
        "date": "1 Month Ago"
      }
    ]
  },
  {
    "id": "5",
    "slug": "digital-marketing-with-seo",
    "title": {
      "en": "Digital Marketing with SEO",
      "bn": "ডিজিটাল মার্কেটিং উইথ এসইও"
    },
    "subtitle": {
      "en": "Master Meta ads, Google Ads, On-Page & Technical SEO, E-commerce growth, Email marketing & YouTube SEO",
      "bn": "মেটা অ্যাডস, গুগল অ্যাডস, অন-পেজ ও টেকনিক্যাল এসইও, ইউটিউব ও ই-কমার্স মার্কেটিংয়ে ক্যারিয়ার গড়ুন"
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
    "ratingsCount": 210,
    "enrolledCount": "480+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "16,000৳",
    "rawFee": 16000,
    "originalFee": "24,000৳",
    "duration": {
      "en": "90 hrs. (3 Months)",
      "bn": "৯০ ঘণ্টা (৩ মাস)"
    },
    "classesCount": {
      "en": "30 Classes",
      "bn": "৩০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/Digital Marketing.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Tareq Mahmud",
      "designation": {
        "en": "Digital Growth Strategist & Google Certified Marketer",
        "bn": "ডিজিটাল গ্রোথ স্ট্র্যাটেজিস্ট ও গুগল সার্টিফাইড মার্কেটার"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "Managed $1.5M+ in ad spend for international e-commerce brands with 5x+ average ROAS.",
        "bn": "আন্তর্জাতিক ই-কমার্স ব্র্যান্ডের জন্য $১.৫ মিলিয়নের বেশি অ্যাড স্পেন্ড ম্যানেজ করার অভিজ্ঞতা।"
      },
      "experience": "8+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Master high-ROI digital marketing. Topics include Meta Marketing (Facebook & Instagram Ads), SEO & SEM, On-Page, Off-Page, Technical & Local SEO, E-commerce & YouTube SEO, E-mail Marketing & automation tools, Affiliate Marketing, Google Ads (Search, Display, Performance Max), Communicative English and freelancing marketplaces.",
      "bn": "মেটা মার্কেটিং, ফেসবুক ও ইনস্টাগ্রাম পেইড অ্যাডস, সার্চ ইঞ্জিন অপ্টিমাইজেশন (অন-পেজ, অফ-পেজ, টেকনিক্যাল ও লোকাল এসইও), ইউটিউব এসইও, ই-মেইল অটোমেশন, গুগল অ্যাডস ও ফ্রিল্যান্সিং মার্কেটপ্লেস মাস্টারি কোর্স।"
    },
    "fullDescription": {
      "en": "Become a full-funnel digital marketer capable of generating massive traffic and sales. Learn modern pixel setup, Conversions API, lookalike audiences, Google Analytics 4 (GA4), Search Console, Ahrefs/Semrush keyword research, backlink acquisition and Mailchimp/Klaviyo automation.",
      "bn": "এই কোর্সে আপনি ডেটা-ড্রাইভেন মার্কেটিং, ফেসবুক সিএপিআই, জিএ৪ ট্র্যাকিং, গুগল সার্চ ও শপিং অ্যাডস, এফিলিয়েট মার্কেটিং এবং গুগল ফার্স্ট পেজ র‍্যাংকিংয়ের বাস্তব কৌশল শিখবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Meta & Google Ads Mastery",
          "bn": "মেটা ও গুগল অ্যাডস মাস্টারি"
        },
        "desc": {
          "en": "Run high-converting paid campaigns with Pixel, CAPI, Custom Audiences & GA4.",
          "bn": "হাই আরওএএস পেইড অ্যাড ক্যাম্পেইন রান করার দক্ষতা।"
        },
        "icon": "TrendingUp"
      },
      {
        "id": "cv2",
        "title": {
          "en": "1st Page Google SEO",
          "bn": "গুগল ফার্স্ট পেজ এসইও"
        },
        "desc": {
          "en": "Master keyword research, technical audits, content optimization & high-DA backlinks.",
          "bn": "কি-ওয়ার্ড রিসার্চ, টেকনিক্যাল অডিট ও র‍্যাংকিং।"
        },
        "icon": "Search"
      },
      {
        "id": "cv3",
        "title": {
          "en": "E-Commerce & Email Automation",
          "bn": "ই-কমার্স ও ই-মেইল অটোমেশন"
        },
        "desc": {
          "en": "Scale Shopify and WooCommerce stores with Klaviyo email flows and YouTube growth.",
          "bn": "ক্লেভিয়ো অটোমেশন ও ই-কমার্স স্কেলিং।"
        },
        "icon": "Zap"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Create and scale profitable Meta (Facebook/Instagram) ad campaigns with high ROAS.",
        "bn": "ফেসবুক ও ইনস্টাগ্রামে লাভজনক অ্যাড ক্যাম্পেইন তৈরি ও স্কেল করা।"
      },
      {
        "en": "Execute On-Page, Off-Page, Technical and Local Google SEO strategies.",
        "bn": "অন-পেজ, অফ-পেজ ও টেকনিক্যাল এসইও অডিট ও অপ্টিমাইজ করা।"
      },
      {
        "en": "Run Google Search, Display, Video (YouTube) and Performance Max Ads.",
        "bn": "গুগল সার্চ ও ইউটিউব ভিডিও অ্যাডস পরিচালনা করা।"
      },
      {
        "en": "Setup automated email marketing flows with Klaviyo and Mailchimp.",
        "bn": "ইমেইল মার্কেটিং ও অটোমেটেড সেলস ফানেল তৈরি করা।"
      },
      {
        "en": "Secure high-paying digital marketing clients on Upwork, Fiverr & LinkedIn.",
        "bn": "আপওয়ার্ক, ফাইবার ও লিংকডইন থেকে ক্লায়েন্ট অ্যাকুইজিশন করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Meta Marketing (Facebook & Instagram Ads)",
          "bn": "মডিউল ১: মেটা মার্কেটিং (ফেসবুক ও ইনস্টাগ্রাম অ্যাডস)"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Meta Marketing Fundamentals, Business Manager & Ad Account Setup",
            "bn": "মেটা মার্কেটিং ফান্ডামেন্টালস, বিজনেস ম্যানেজার ও অ্যাড অ্যাকাউন্ট সেটআপ"
          },
          {
            "en": "Meta Pixel, Conversions API (CAPI), Server-Side Tracking & Events",
            "bn": "মেটা পিক্সেল, কনভার্সন এপিআই (CAPI) ও সার্ভার-সাইড ট্র্যাকিং"
          },
          {
            "en": "Custom Audiences, Lookalike Audiences & Funnel-Based Retargeting",
            "bn": "কাস্টম অডিয়েন্স, লুকঅ্যালাইক অডিয়েন্স ও ফানেল রিটার্গেটিং"
          },
          {
            "en": "Ad Copywriting, Creative Testing, Budget Optimization & Scaling Strategies",
            "bn": "অ্যাড কপিরাইটিং, ক্রিয়েটিভ টেস্টিং ও স্কেলিং স্ট্র্যাটেজি"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: SEO & SEM (Google Ranking & Google Ads)",
          "bn": "মডিউল ২: এসইও ও এসইএম (গুগল র‍্যাংকিং ও গুগল অ্যাডস)"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "SEO & SEM Overview, Search Intent & Competitor Analysis",
            "bn": "এসইও ও এসইএম ওভারভিউ, সার্চ ইনটেন্ট ও প্রতিযোগী বিশ্লেষণ"
          },
          {
            "en": "On-Page, Off-Page, Technical and Local SEO (Google My Business)",
            "bn": "অন-পেজ, অফ-পেজ, টেকনিক্যাল ও লোকাল এসইও (গুগল মাই বিজনেস)"
          },
          {
            "en": "E-commerce & YouTube SEO: Video Ranking, Tags & Channel Optimization",
            "bn": "ই-কমার্স ও ইউটিউব এসইও: ভিডিও র‍্যাংকিং ও চ্যানেল অপ্টিমাইজেশন"
          },
          {
            "en": "Google Ads (Search, Display, Shopping, YouTube Ads) & GA4 Analytics",
            "bn": "গুগল অ্যাডস (সার্চ, ডিসপ্লে, শপিং) ও জিএ৪ অ্যানালিটিক্স"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Email Marketing, Affiliate & Marketplace",
          "bn": "মডিউল ৩: ই-মেইল মার্কেটিং, অ্যাফিলিয়েট ও মার্কেটপ্লেস"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "E-mail Marketing and Tools (Klaviyo, Mailchimp, Lead Capture Forms)",
            "bn": "ই-মেইল মার্কেটিং ও টুলস (ক্লেভিয়ো, মেইলচিম্প, অটোমেশন ফ্লো)"
          },
          {
            "en": "E-commerce Marketing and Tools (Shopify/WooCommerce Sales Boost)",
            "bn": "ই-কমার্স মার্কেটিং ও সেলস বুস্টিং টুলস"
          },
          {
            "en": "Affiliate Marketing Networks, Amazon Associates & Link Monetization",
            "bn": "অ্যাফিলিয়েট মার্কেটিং নেটওয়ার্কস ও লিংক মনিটাইজেশন"
          },
          {
            "en": "Communicative English, Soft Skills & Freelance Marketplace Mastery",
            "bn": "কমিউনিকেটিভ ইংলিশ, সফট স্কিলস ও মার্কেটপ্লেস গাইডলাইন"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Government Endorsed Certificate",
        "bn": "সরকারি অনুমোদিত সার্টিফিকেট"
      },
      {
        "en": "Access to Premium SEO Tools (Semrush, Ahrefs, Moz)",
        "bn": "প্রিমিয়াম এসইও টুলস অ্যাক্সেস"
      },
      {
        "en": "Live Ad Budget Practice on Real Campaigns",
        "bn": "রিয়েল ক্যাম্পেইনে লাইভ অ্যাড বাজেট প্র্যাকটিস"
      },
      {
        "en": "1-on-1 Client Acquisition Mentorship",
        "bn": "১-অন-১ ক্লায়েন্ট অ্যাকুইজিশন মেন্টরশিপ"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Farhan Hossain",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
        "role": {
          "en": "Digital Marketer",
          "bn": "ডিজিটাল মার্কেটার"
        },
        "rating": 5,
        "comment": {
          "en": "The Facebook Pixel and CAPI lessons are top-notch. I run ads for 3 e-commerce shops now.",
          "bn": "পিক্সেল ও সিএপিআই এর ক্লাসগুলো অসাধারণ ছিল। বর্তমানে ৩টি ই-কমার্সের অ্যাড চালাচ্ছি।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "6",
    "slug": "cpa-nexus-marketing",
    "title": {
      "en": "CPA Nexus Marketing",
      "bn": "সিপিএ নেক্সাস মার্কেটিং"
    },
    "subtitle": {
      "en": "Master CPA marketing networks, high-converting landing pages, TikTok, Meta, Native & Push ads arbitrage",
      "bn": "সিপিএ নেটওয়ার্কস, হাই-কনভার্টিং ল্যান্ডিং পেজ, টিকটক, মেটা, নেটিভ ও পুশ অ্যাডস দিয়ে আন্তর্জাতিক ইনকাম"
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
    "rating": 4.8,
    "ratingsCount": 140,
    "enrolledCount": "310+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "14,000৳",
    "rawFee": 14000,
    "originalFee": "20,000৳",
    "duration": {
      "en": "60 hrs. (2 Months)",
      "bn": "৬০ ঘণ্টা (২ মাস)"
    },
    "classesCount": {
      "en": "20 Classes",
      "bn": "২০ টি ক্লাস"
    },
    "image": "/images/cpa-nexus-banner.jpg",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Imran Hossain",
      "designation": {
        "en": "Super Affiliate & CPA Media Buyer",
        "bn": "সুপার অ্যাফিলিয়েট ও সিপিএ মিডিয়া বায়ার"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "6+ years in CPA marketing, generating $500k+ revenue from MaxBounty, CPAGrip & LosPollos.",
        "bn": "ম্যাক্সবাউন্টি, সিপিএগ্রিপ ও লসপলোস থেকে $৫০০k+ আয় করা অভিজ্ঞ সিপিএ মার্কেটার।"
      },
      "experience": "6+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "High-income CPA marketing blueprint. Topics include CPA marketing fundamentals, domain, hosting & landing pages, TikTok Ads, Facebook & Instagram Ads, Google & YouTube Ads, E-mail marketing, Pinterest, Push & Native Ads, campaign optimization, communicative English and soft skills.",
      "bn": "সিপিএ মার্কেটিং ফান্ডামেন্টালস, টপ নেটওয়ার্ক অ্যাকাউন্ট অ্যাপ্রুভাল, ডোমেইন হোস্টিং ও প্রি-ল্যান্ডার পেজ ডিজাইন, টিকটক অ্যাডস, ফেসবুক অ্যাডস, পুশ ও নেটিভ ট্রাফিক এবং ক্যাম্পেইন ট্র্যাকিং ও অপ্টিমাইজেশন শেখার স্পেশালাইজড কোর্স।"
    },
    "fullDescription": {
      "en": "Learn the secrets of modern CPA affiliate marketing. Master top CPA networks (MaxBounty, CPAGrip, LosPollos), create spy-tested high-converting landing pages, set up advanced trackers (Voluum, RedTrack) and run profitable paid traffic across TikTok, Meta, Bing and Native ad networks.",
      "bn": "এই কোর্সে আপনি কস্ট-পার-অ্যাকশন (CPA) অফার নির্বাচন, প্রি-ল্যান্ডার তৈরি, ভলিউম ট্র্যাকার দিয়ে ডেটা অপ্টিমাইজেশন এবং টিকটক ও পুশ অ্যাডস দিয়ে উচ্চ কনভার্সন পাওয়ার সিক্রেট স্ট্র্যাটেজি শিখবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Approved CPA Networks",
          "bn": "টপ নেটওয়ার্ক অ্যাপ্রুভাল"
        },
        "desc": {
          "en": "Get 100% account approval on MaxBounty, CPAGrip, ClickDealer & AdWorkMedia.",
          "bn": "টপ সিপিএ নেটওয়ার্কে অ্যাকাউন্ট অ্যাপ্রুভালের গ্যারান্টি।"
        },
        "icon": "ShieldCheck"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Spy Tools & Landing Pages",
          "bn": "স্পাই টুলস ও ল্যান্ডিং পেজ"
        },
        "desc": {
          "en": "Rip, clean and host high-converting pre-landers with custom domains.",
          "bn": "কনভার্টিং ল্যান্ডিং পেজ ও ট্র্যাকার সেটআপ।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Multi-Channel Paid Ads",
          "bn": "মাল্টি-চ্যানেল ট্রাফিক"
        },
        "desc": {
          "en": "Run TikTok, Facebook, Google, Bing, Pinterest & Native Push campaigns.",
          "bn": "টিকটক, মেটা ও পুশ অ্যাড ক্যাম্পেইন অপ্টিমাইজেশন।"
        },
        "icon": "TrendingUp"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Get approved on Tier-1 CPA networks and choose winning evergreen offers.",
        "bn": "টিয়ার-১ সিপিএ নেটওয়ার্কে অ্যাকাউন্ট তৈরি ও অফার নির্বাচন করা।"
      },
      {
        "en": "Build and host fast, high-converting pre-landing pages and lead funnels.",
        "bn": "হাই-কনভার্টিং প্রি-ল্যান্ডিং পেজ ও লিড ফানেল ডিজাইন করা।"
      },
      {
        "en": "Run high-CTR campaigns on TikTok Ads and Facebook Ads with stealth tactics.",
        "bn": "টিকটক ও মেটাতে হাই-সিটিআর বিজ্ঞাপন ক্যাম্পেইন চালানো।"
      },
      {
        "en": "Leverage low-cost high-volume Push & Native traffic (PropellerAds, Taboola).",
        "bn": "পুশ ও নেটিভ অ্যাডস (প্রপেলার অ্যাডস) দিয়ে সস্তায় ট্রাফিক আনা।"
      },
      {
        "en": "Track every click and conversion using trackers and maximize ROI.",
        "bn": "ক্যাম্পেইন ট্র্যাকিং করে সর্বোচ্চ লাভ নিশ্চিত করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: CPA Fundamentals, Networks & Landing Pages",
          "bn": "মডিউল ১: সিপিএ ফান্ডামেন্টালস, নেটওয়ার্কস ও ল্যান্ডিং পেজ"
        },
        "duration": {
          "en": "6 Classes • 18 Hours",
          "bn": "৬ টি ক্লাস • ১৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "CPA Marketing Fundamentals & High-Payout Vertical Selection",
            "bn": "সিপিএ মার্কেটিং ফান্ডামেন্টালস ও হাই-পেআউট নিশ নির্বাচন"
          },
          {
            "en": "Top CPA Network Account Approval Strategy (MaxBounty, CPAGrip, etc.)",
            "bn": "টপ সিপিএ নেটওয়ার্ক অ্যাকাউন্ট অ্যাপ্রুভাল স্ট্র্যাটেজি"
          },
          {
            "en": "Domain, Hosting & High-Converting Landing Page Architecture",
            "bn": "ডোমেইন, হোস্টিং ও হাই-কনভার্টিং ল্যান্ডিং পেজ ডিজাইন"
          },
          {
            "en": "Content Locking, Smartlinks & Affiliate Link Masking",
            "bn": "কনটেন্ট লকিং, স্মার্টলিংক ও লিংক মাস্কিং"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Paid Traffic (TikTok, Meta, Google & YouTube)",
          "bn": "মডিউল ২: পেইড ট্রাফিক (টিকটক, মেটা, গুগল ও ইউটিউব)"
        },
        "duration": {
          "en": "8 Classes • 24 Hours",
          "bn": "৮ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Tik-Tok Ads: Account Warmup, Video Creatives & Campaign Launch",
            "bn": "টিকটক অ্যাডস: অ্যাকাউন্ট সেটআপ, ক্রিয়েটিভ ও ক্যাম্পেইন"
          },
          {
            "en": "Facebook & Instagram Ads for CPA Lead Generation",
            "bn": "ফেসবুক ও ইনস্টাগ্রাম অ্যাডস দিয়ে লিড জেনারেশন"
          },
          {
            "en": "Google & YouTube Ads: Search Arbitrage & Discovery Ads",
            "bn": "গুগল ও ইউটিউব অ্যাডস: সার্চ আরবিট্রেজ ও ডিসকভারি"
          },
          {
            "en": "E-mail Marketing & Lead Nurturing for CPA Offers",
            "bn": "সিপিএ অফারের জন্য ই-মেইল মার্কেটিং ও লিড নার্চারিং"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Push, Native Ads, Optimization & Scale",
          "bn": "মডিউল ৩: পুশ, নেটিভ অ্যাডস, অপ্টিমাইজেশন ও স্কেলিং"
        },
        "duration": {
          "en": "6 Classes • 18 Hours",
          "bn": "৬ টি ক্লাস • ১৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Pinterest, Push & Native Ads (PropellerAds, RichAds, Outbrain)",
            "bn": "পিন্টারেস্ট, পুশ ও নেটিভ অ্যাডস (প্রপেলারঅ্যাডস, রিচঅ্যাডস)"
          },
          {
            "en": "Campaign Optimization, Blacklisting Bad Placements & Scaling Winners",
            "bn": "ক্যাম্পেইন অপ্টিমাইজেশন, ব্ল্যাকলিস্টিং ও উইনিং ক্যাম্পেইন স্কেল"
          },
          {
            "en": "Communicative English & Network Manager Negotiation",
            "bn": "অ্যাফিলিয়েট ম্যানেজার নেগোসিয়েশনের জন্য ইংরেজি"
          },
          {
            "en": "Soft Skills, Payment Withdrawals (Payoneer, Wire, Crypto) & Best Practices",
            "bn": "সফট স্কিলস ও ইন্টারন্যাশনাল পেমেন্ট উইথড্রয়াল মেথডস"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Government Endorsed Certificate",
        "bn": "সরকারি অনুমোদিত সার্টিফিকেট"
      },
      {
        "en": "Ready-to-Use 20+ High-Converting Landing Pages",
        "bn": "২০+ রেডিমেড কনভার্টিং ল্যান্ডিং পেজ"
      },
      {
        "en": "Direct Network Manager Skype / Telegram Intros",
        "bn": "নেটওয়ার্ক ম্যানেজারের সাথে ডিরেক্ট কানেকশন"
      },
      {
        "en": "Secret Ad Spy Tools Access Guide",
        "bn": "অ্যাড স্পাই টুলস ব্যবহারের কমপ্লিট গাইড"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Rakibul Islam",
        "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
        "role": {
          "en": "CPA Media Buyer",
          "bn": "সিপিএ মিডিয়া বায়ার"
        },
        "rating": 5,
        "comment": {
          "en": "Got MaxBounty approved on my first try with the trainer's reference. Made $380 in 2 weeks!",
          "bn": "ট্রেইনারের রেফারেন্সে প্রথমবারেই ম্যাক্সবাউন্টি অ্যাপ্রুভ পেয়েছি। ২ সপ্তাহেই দারুণ ইনকাম!"
        },
        "date": "2 Weeks Ago"
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
      "en": "Master Premiere Pro, After Effects, film storytelling, CGI basics, green screen & color grading",
      "bn": "প্রিমিয়ার প্রো, আফটার ইফেক্টস, সিনেমাটিক কালার গ্রেডিং, সিজিআই ও মোশন গ্রাফিক্সে প্রফেশনাল ক্যারিয়ার"
    },
    "category": "creative",
    "categoryLabel": {
      "en": "Design & UI/UX",
      "bn": "ডিজাইন ও ইউআই/ইউএক্স"
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
    "ratingsCount": 180,
    "enrolledCount": "370+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "30,000৳",
    "rawFee": 30000,
    "originalFee": "42,000৳",
    "duration": {
      "en": "90 hrs. (3 Months)",
      "bn": "৯০ ঘণ্টা (৩ মাস)"
    },
    "classesCount": {
      "en": "30 Classes",
      "bn": "৩০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/video editing &motion graphics.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Sabbir Hossain",
      "designation": {
        "en": "Senior Motion Designer & Commercial Film Editor",
        "bn": "সিনিয়র মোশন ডিজাইনার ও কমার্শিয়াল ফিল্ম এডিটর"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "8+ years creating television commercials, YouTube channel branding and visual effects.",
        "bn": "টিভি বিজ্ঞাপন, ইউটিউব ব্রান্ডিং ও ভিজ্যুয়াল ইফেক্টসে ৮+ বছরের অভিজ্ঞতা।"
      },
      "experience": "8+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Professional filmmaking and visual effects mastery. Topics include Premiere Pro, event editing, film & story composition, source panel & all editing tools, audio editing, basic CGI, green screen removal, Adobe After Effects, basic to advanced animation, basic color grading & correction, communicative English and marketplace strategies.",
      "bn": "অ্যাডোবি প্রিমিয়ার প্রো, আফটার ইফেক্টস, অডিও এডিটিং, গ্রিন স্ক্রিন রিমুভাল, বেসিক সিজিআই, সিনেমাটিক কালার গ্রেডিং, লুমিত্রি কালার, ৩ডি মোশন গ্রাফিক্স ও ফ্রিল্যান্স মার্কেটপ্লেস শেখার সম্পূর্ণ কোর্স।"
    },
    "fullDescription": {
      "en": "Turn your passion for storytelling into a lucrative career. Master Adobe Premiere Pro timeline editing, multi-cam switching, sound design, dialogue cleanup, green screen keying, Lumetri color grading and dynamic title/logo animations in Adobe After Effects.",
      "bn": "এই কোর্সে আপনি সোশ্যাল মিডিয়া রিলস, ইউটিউব ভিডিও, ডকুমেন্টারি ও কর্পোরেট প্রমোর জন্য হাই-এন্ড ভিডিও এডিটিং, মোশন গ্রাফিক্স ও সিনেমাটিক কালার কারেকশন তৈরি করা শিখবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Cinematic Storytelling",
          "bn": "সিনেমাটিক স্টোরিটেলিং"
        },
        "desc": {
          "en": "Master pacing, rhythm, J/L cuts, sound effects and emotional storytelling.",
          "bn": "ভিডিও এডিটিংয়ের রিদম, সাউন্ড ডিজাইন ও সিনেমাটিক লুক।"
        },
        "icon": "Video"
      },
      {
        "id": "cv2",
        "title": {
          "en": "After Effects Motion",
          "bn": "আফটার ইফেক্টস মোশন"
        },
        "desc": {
          "en": "Create 2D/3D title sequences, logo reveals, lower thirds and particle effects.",
          "bn": "টাইটেল সিকোয়েন্স, লোগো অ্যানিমেশন ও স্পেশাল ইফেক্টস।"
        },
        "icon": "Sparkles"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Color & Sound Mastery",
          "bn": "কালার ও সাউন্ড মাস্টারি"
        },
        "desc": {
          "en": "Lumetri color correction, LUTs, noise reduction and audio mastering.",
          "bn": "লুমিত্রি কালার গ্রেডিং ও ক্রিস্টাল ক্লিয়ার অডিও এডিটিং।"
        },
        "icon": "Palette"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Edit commercial videos, YouTube content and documentary films in Premiere Pro.",
        "bn": "প্রিমিয়ার প্রোতে কমার্শিয়াল ভিডিও ও ইউটিউব কনটেন্ট এডিট করা।"
      },
      {
        "en": "Master audio post-production: voice denoising, EQ, compression & sound effects.",
        "bn": "নয়েজ রিমুভাল, সাউন্ড ইফেক্টস ও ব্যাকগ্রাউন্ড মিউজিক মিক্সিং।"
      },
      {
        "en": "Execute clean green screen removal (Ultra Key) and basic CGI compositing.",
        "bn": "গ্রিন স্ক্রিন রিমুভ ও সিজিআই কম্পোজিটিং তৈরি করা।"
      },
      {
        "en": "Create advanced motion graphics, kinetic typography and transitions in After Effects.",
        "bn": "আফটার ইফেক্টসে মোশন গ্রাফিক্স ও টাইপোগ্রাফি অ্যানিমেশন তৈরি।"
      },
      {
        "en": "Grade video footage like Hollywood films and get clients on Fiverr/Upwork.",
        "bn": "সিনেমাটিক কালার গ্রেডিং ও মার্কেটপ্লেসে ক্লায়েন্ট কাজ সম্পন্ন করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Adobe Premiere Pro & Storytelling Fundamentals",
          "bn": "মডিউল ১: অ্যাডোবি প্রিমিয়ার প্রো ও স্টোরিটেলিং ফান্ডামেন্টালস"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Premiere Pro Interface, Project Setup, Sequences & Timeline Navigation",
            "bn": "প্রিমিয়ার প্রো ইন্টারফেস, প্রজেক্ট সেটআপ ও টাইমলাইন নেভিগেশন"
          },
          {
            "en": "Source Panel & All Essential Editing Tools (Razor, Slip, Slide, Ripple)",
            "bn": "সোর্স প্যানেল ও প্রয়োজনীয় সব এডিটিং টুলস পরিচিতি"
          },
          {
            "en": "Film & Story Composition, J-Cuts, L-Cuts & Cinematic Pacing",
            "bn": "ফিল্ম ও স্টোরি কম্পোজিশন, জে-কাট, এল-কাট ও সিনেমাটিক পেসিং"
          },
          {
            "en": "Event Editing: Weddings, Corporate Promos, Music Videos & YouTube Vlogs",
            "bn": "ইভেন্ট এডিটিং: ওয়েডিং, কর্পোরেট প্রোমো ও ইউটিউব ভ্লগ"
          },
          {
            "en": "Audio Editing: Equalization, Compression, Noise Reduction & Sound FX",
            "bn": "অডিও এডিটিং: নয়েজ রিডাকশন, সাউন্ড এফএক্স ও অডিও মিক্সিং"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Visual Effects, CGI, Green Screen & Color Grading",
          "bn": "মডিউল ২: ভিজ্যুয়াল ইফেক্টস, সিজিআই, গ্রিন স্ক্রিন ও কালার গ্রেডিং"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Green Screen Removal (Ultra Key, Alpha Channels & Spill Suppression)",
            "bn": "গ্রিন স্ক্রিন রিমুভ (আল্ট্রা কি ও স্পিল সাপ্রেশন)"
          },
          {
            "en": "Basic CGI Compositing, Tracking & Background Replacement",
            "bn": "বেসিক সিজিআই কম্পোজিটিং, মোশন ট্র্যাকিং ও ব্যাকগ্রাউন্ড রিপ্লেসমেন্ট"
          },
          {
            "en": "Basic Color Grading & Correction: Lumetri Scopes, Curves & LUTs",
            "bn": "কালার গ্রেডিং ও কারেকশন: লুমিত্রি স্কোপস, কার্ভস ও এলইউটি"
          },
          {
            "en": "Export Presets for YouTube 4K, Reels, TikTok & Broadcast Standards",
            "bn": "ইউটিউব ৪কে, রিলস, টিকটক ও টিভির জন্য সেরা এক্সপোর্ট সেটিংস"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Adobe After Effects, Motion Graphics & Marketplace",
          "bn": "মডিউল ৩: অ্যাডোবি আফটার ইফেক্টস, মোশন গ্রাফিক্স ও মার্কেটপ্লেস"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Adobe After Effects Workspace, Keyframes & Graph Editor Speed Curves",
            "bn": "আফটার ইফেক্টস ওয়ার্কস্পেস, কি-ফ্রেম ও গ্রাফ এডিটর"
          },
          {
            "en": "Basic to Advanced Animation: Kinetic Typography & Logo Reveals",
            "bn": "বেসিক টু অ্যাডভান্সড অ্যানিমেশন: কাইনেটিক টাইপোগ্রাফি ও লোগো অ্যানিমেশন"
          },
          {
            "en": "Lower Thirds, Shape Layer Animations & Dynamic Link with Premiere Pro",
            "bn": "লোয়ার থার্ডস, শেপ অ্যানিমেশন ও ডাইনামিক লিংক"
          },
          {
            "en": "Communicative English, Soft Skills & Freelance Marketplace Strategy",
            "bn": "কমিউনিকেটিভ ইংলিশ, সফট স্কিলস ও ফ্রিল্যান্স ভিডিও এডিটিং জবস"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Government Endorsed Certificate",
        "bn": "সরকারি অনুমোদিত সার্টিফিকেট"
      },
      {
        "en": "500+ GB Video Assets (LUTs, SFX, Transitions, Overlays)",
        "bn": "৫০০+ জিবি ভিডিও অ্যাসেটস, এলইউটি ও সাউন্ড ইফেক্টস"
      },
      {
        "en": "Commercial Showreel for Client Pitches",
        "bn": "ক্লায়েন্টদের দেখানোর জন্য প্রফেশনাল শোরিল"
      },
      {
        "en": "1-on-1 Marketplace Mentorship",
        "bn": "১-অন-১ মার্কেটপ্লেস মেন্টরশিপ"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Ashfaqur Rahman",
        "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100",
        "role": {
          "en": "Video Editor & Motion Designer",
          "bn": "ভিডিও এডিটর ও মোশন ডিজাইনার"
        },
        "rating": 5,
        "comment": {
          "en": "The Lumetri color grading and After Effects animation modules are worth every penny!",
          "bn": "কালার গ্রেডিং ও আফটার ইফেক্টস এর ক্লাসগুলো এক কথায় সেরা ছিল!"
        },
        "date": "3 Weeks Ago"
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
      "en": "Build stunning cross-platform apps for iOS, Android & Web using Dart, Bloc/Provider & Firebase",
      "bn": "ডার্ট, ফ্লাটার, ব্লক/প্রোভাইডার স্টেট ম্যানেজমেন্ট ও ফায়ারবেস সহ ক্রস-প্ল্যাটফর্ম অ্যাপ ডেভেলপমেন্ট"
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
    "ratingsCount": 155,
    "enrolledCount": "340+ Enrolled",
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
    "image": "/images/course thumbnail/flutter app.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Nazmul Haque",
      "designation": {
        "en": "Senior Mobile Architect & Google Developer Expert",
        "bn": "সিনিয়র মোবাইল আর্কিটেক্ট ও গুগল ডেভেলপার এক্সপার্ট"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "7+ years architecting enterprise cross-platform mobile apps for iOS and Android.",
        "bn": "আইওএস ও অ্যান্ড্রয়েডের জন্য এন্টারপ্রাইজ ক্রস-প্ল্যাটফর্ম অ্যাপে ৭+ বছরের অভিজ্ঞতা।"
      },
      "experience": "7+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Complete cross-platform app development masterclass with Google Flutter & Dart. Topics include introduction to Flutter & Dart, widgets & UI design, navigation & routing, state management, forms & input, integrating APIs & networking, local data storage, authentication & authorization, state management solutions (Bloc, Riverpod, Provider), communicative English and freelancing marketplaces.",
      "bn": "গুগল ফ্লাটার ও ডার্ট দিয়ে আইওএস এবং অ্যান্ড্রয়েড অ্যাপ তৈরির পূর্ণাঙ্গ কোর্স। এতে ইউআই উইজেটস, রাউটিং, স্টেট ম্যানেজমেন্ট (ব্লক/প্রোভাইডার), রেস্ট এপিআই, লোকাল স্টোরেজ (হাইভ/এসকিউফ্লাইট), ফায়ারবেস অথ ও গুগল প্লে/অ্যাপ স্টোর রিলিজ শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Write once and deploy everywhere with 60 FPS silky smooth performance. You will build modern, pixel-perfect iOS and Android apps with Dart 3, Flutter 3, Bloc pattern, RESTful API integration, push notifications and local offline caching.",
      "bn": "এই কোর্সে আপনি ডার্ট প্রোগ্রামিং থেকে শুরু করে রিয়েল-ওয়ার্ল্ড ই-কমার্স, চ্যাট অ্যাপ ও ফুড ডেলিভারি অ্যাপ প্রজেক্ট বানাবেন এবং অ্যাপ স্টোর ও গুগল প্লেতে পাবলিশ করবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Single Codebase iOS/Android",
          "bn": "সিঙ্গেল কোডবেস আইওএস/অ্যান্ড্রয়েড"
        },
        "desc": {
          "en": "Build native-performance apps for both Apple iOS and Google Android simultaneously.",
          "bn": "একই কোডে আইওএস ও অ্যান্ড্রয়েড দুটি অ্যাপ তৈরি।"
        },
        "icon": "Smartphone"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Enterprise State Management",
          "bn": "ব্লক ও রিভারপড স্টেট"
        },
        "desc": {
          "en": "Master BLoC and Riverpod patterns for clean, scalable, maintainable architectures.",
          "bn": "ব্লক ও রিভারপড দিয়ে স্কেলেবল আর্কিটেকচার তৈরি।"
        },
        "icon": "Layers"
      },
      {
        "id": "cv3",
        "title": {
          "en": "API & Cloud Realtime",
          "bn": "এপিআই ও ক্লাউড ডেটাবেস"
        },
        "desc": {
          "en": "Seamlessly integrate REST APIs, Dio networking and Firebase cloud services.",
          "bn": "রেস্ট এপিআই ও ফায়ারবেস রিয়েলটাইম ডেটাবেস ইন্টিগ্রেশন।"
        },
        "icon": "Cloud"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master the Dart 3 programming language and object-oriented paradigms.",
        "bn": "ডার্ট ৩ প্রোগ্রামিং ও অবজেক্ট ওরিয়েন্টেড কনসেপ্টে দক্ষতা।"
      },
      {
        "en": "Design responsive, adaptive Flutter UIs following Material 3 & Cupertino styles.",
        "bn": "মেটেরিয়াল ও কিউপারটিনো ডিজাইনের আধুনিক ইউআই তৈরি।"
      },
      {
        "en": "Manage complex application state using BLoC, Riverpod and Provider.",
        "bn": "ব্লক ও রিভারপড দিয়ে স্টেট ম্যানেজমেন্ট পরিচালনা।"
      },
      {
        "en": "Connect apps to backend REST APIs with Dio, interceptors and error handling.",
        "bn": "ডিও লাইব্রেরি দিয়ে রেস্ট এপিআই ও টোকেন ম্যানেজমেন্ট।"
      },
      {
        "en": "Build and publish production apps to Google Play Store and Apple App Store.",
        "bn": "প্লে স্টোর ও অ্যাপল অ্যাপ স্টোরে প্রোডাকশন অ্যাপ পাবলিশ করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Dart Fundamentals, Flutter Widgets & UI Design",
          "bn": "মডিউল ১: ডার্ট ফান্ডামেন্টালস, ফ্লাটার উইজেটস ও ইউআই ডিজাইন"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Introduction to Flutter and Dart: Setup, SDK, VS Code & Emulators",
            "bn": "ফ্লাটার ও ডার্ট পরিচিতি: এসডিকে ও এমুলেটর সেটআপ"
          },
          {
            "en": "Dart Programming: OOP, Async/Await, Futures & Streams",
            "bn": "ডার্ট প্রোগ্রামিং: ওওপি, অ্যাসিঙ্ক/অ্যাওয়েট ও স্ট্রিমস"
          },
          {
            "en": "Widgets and UI Design: Stateless vs Stateful, Layouts & Custom Components",
            "bn": "উইজেটস ও ইউআই ডিজাইন: স্টেটলেস বনাম স্টেটফুল উইজেটস"
          },
          {
            "en": "Navigation and Routing: Named Routes, Deep Linking & GoRouter",
            "bn": "নেভিগেশন ও রাউটিং: গো-রাউটার ও ডিপ লিংকিং"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: State Management, APIs & Local Storage",
          "bn": "মডিউল ২: স্টেট ম্যানেজমেন্ট, এপিআই ও লোকাল স্টোরেজ"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "State Management Solutions: Provider, Riverpod & BLoC Pattern",
            "bn": "স্টেট ম্যানেজমেন্ট সলিউশনস: প্রোভাইডার, রিভারপড ও ব্লক"
          },
          {
            "en": "Working with Forms and Input: Validation, FormFields & FocusNodes",
            "bn": "ফর্ম ও ইনপুট: ভ্যালিডেশন ও কাস্টম টেক্সট ফিল্ডস"
          },
          {
            "en": "Integrating APIs and Networking: Dio, HTTP, JSON Serialization & Error Handling",
            "bn": "এপিআই ইন্টিগ্রেশন: ডিও, এইচটিটিপি ও জেসন সিরিয়ালাইজেশন"
          },
          {
            "en": "Local Data Storage: Shared Preferences, Hive & SQLite / Isar Database",
            "bn": "লোকাল ডাটা স্টোরেজ: শেয়ার্ড প্রেফারেন্সেস, হাইভ ও এসকিউফ্লাইট"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Firebase, Capstone App & Freelancing",
          "bn": "মডিউল ৩: ফায়ারবেস, ক্যাপস্টোন অ্যাপ ও ফ্রিল্যান্সিং"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Authentication and Authorization: Firebase Auth, Google Sign-In & JWT",
            "bn": "অথেনটিকেশন ও অথরাইজেশন: ফায়ারবেস অথ ও গুগল সাইন-ইন"
          },
          {
            "en": "Building a Full E-Commerce App Project with Payment Gateway",
            "bn": "পেমেন্ট গেটওয়ে সহ সম্পূর্ণ ই-কমার্স মোবাইল অ্যাপ প্রজেক্ট"
          },
          {
            "en": "Google Play Store & Apple App Store Deployment Guidelines",
            "bn": "গুগল প্লে ও অ্যাপল অ্যাপ স্টোরে পাবলিশিং গাইডলাইন"
          },
          {
            "en": "Communicative English, Soft Skills & Freelance App Projects",
            "bn": "কমিউনিকেটিভ ইংলিশ, সফট স্কিলস ও ফ্রিল্যান্স অ্যাপ প্রজেক্টস"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Government Endorsed Certificate",
        "bn": "সরকারি অনুমোদিত সার্টিফিকেট"
      },
      {
        "en": "3 Production Flutter App Repositories on GitHub",
        "bn": "গিটহাবে ৩টি প্রোডাকশন অ্যাপের সম্পূর্ণ সোর্স কোড"
      },
      {
        "en": "App Store & Play Store Release Support",
        "bn": "প্লে স্টোর ও অ্যাপ স্টোর রিলিজ সাপোর্ট"
      },
      {
        "en": "1-on-1 Code Mentorship & Architecture Reviews",
        "bn": "১-অন-১ কোড ও আর্কিটেকচার মেন্টরশিপ"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Sohail Rana",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "role": {
          "en": "Flutter Developer",
          "bn": "ফ্লাটার ডেভেলপার"
        },
        "rating": 5,
        "comment": {
          "en": "The BLoC state management and Dio networking explanations were crystal clear. Got hired as a remote Flutter dev!",
          "bn": "ব্লক স্টেট ম্যানেজমেন্টের ব্যাখ্যা এক কথায় দারুণ ছিল। রিমোট ফ্লাটার ডেভেলপার হিসেবে চাকরি পেয়েছি।"
        },
        "date": "1 Month Ago"
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
      "en": "Build robust backend architectures, RESTful APIs, Django ORM, authentication & cloud deployment",
      "bn": "পাইথন, জ্যাঙ্গো ফ্রেমওয়ার্ক, ডিআরএফ এপিআই, ডাটাবেস ম্যানেজমেন্ট ও ক্লাউড ডেপ্লয়মেন্ট"
    },
    "category": "web",
    "categoryLabel": {
      "en": "Programming & Web",
      "bn": "প্রোগ্রামিং ও ওয়েব"
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
    "ratingsCount": 160,
    "enrolledCount": "330+ Enrolled",
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
    "image": "/images/course thumbnail/python django and machine learning.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Dr. Asif Mahmud",
      "designation": {
        "en": "Principal Python Architect & Backend Consultant",
        "bn": "প্রিন্সিপাল পাইথন আর্কিটেক্ট ও ব্যাকএন্ড কনসালট্যান্ট"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "9+ years engineering scalable Python backends, Django REST APIs and microservices.",
        "bn": "স্কেলেবল পাইথন ব্যাকএন্ড ও জ্যাঙ্গো এপিআই তৈরিতে ৯+ বছরের অভিজ্ঞতা।"
      },
      "experience": "9+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Enterprise Python & Django backend engineering. Topics include Python and Django framework intro, setting up development environment, Django project structure & best practices, models and database management, creating & managing views & templates, user authentication and authorization, Django admin customization, RESTful API integration (DRF), middleware and request handling, deployment & hosting Django apps, testing and debugging, communicative English and soft skills.",
      "bn": "পাইথন ও জ্যাঙ্গো ব্যাকএন্ড ইঞ্জিনিয়ারিংয়ের পূর্ণাঙ্গ কোর্স। এতে পাইথন ওওপি, জ্যাঙ্গো ওআরএম, পোস্টগ্রেএসকিউএল, ভিউজ ও টেমপ্লেটস, ইউজার অথেনটিকেশন, জ্যাঙ্গো রেস্ট ফ্রেমওয়ার্ক (DRF) এপিআই, এডব্লিউএস/ভিডিএস ডেপ্লয়মেন্ট ও মার্কেটপ্লেস ক্যারিয়ার শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Learn Python from the ground up to advanced object-oriented design, then harness the power of the Django web framework. You will build secure, production-grade web applications, e-commerce backends with SSLCommerz/Stripe, scalable RESTful APIs with Django REST Framework and deploy with Gunicorn, NGINX and Docker.",
      "bn": "এই কোর্সে আপনি পাইথন ৩.১২, জ্যাঙ্গো এমভিটি আর্কিটেকচার, কাস্টম অ্যাডমিন প্যানেল, ডিআরএফ টোকেন অথেনটিকেশন, ব্যাকগ্রাউন্ড টাস্ক ও সার্ভার কনফিগারেশন পুঙ্খানুপুঙ্খভাবে শিখবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Python OOP Mastery",
          "bn": "পাইথন ওওপি মাস্টারি"
        },
        "desc": {
          "en": "Master data structures, algorithms, functional programming and OOP in Python.",
          "bn": "পাইথনের ফান্ডামেন্টালস ও অবজেক্ট-ওরিয়েন্টেড ডিজাইন।"
        },
        "icon": "Code2"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Django ORM & Security",
          "bn": "জ্যাঙ্গো ওআরএম ও সিকিউরিটি"
        },
        "desc": {
          "en": "Secure database models, transactions, migrations and built-in CSRF/XSS defense.",
          "bn": "সিকিউর ডেটাবেস মডেল ও ওআরএম কোয়েরিজ।"
        },
        "icon": "ShieldCheck"
      },
      {
        "id": "cv3",
        "title": {
          "en": "REST API & Production Deploy",
          "bn": "ডিআরএফ এপিআই ও ডেপ্লয়মেন্ট"
        },
        "desc": {
          "en": "Build Django REST Framework APIs and deploy to Ubuntu VPS with Nginx/Gunicorn.",
          "bn": "ডিআরএফ এপিআই ও লাইভ লিনাক্স সার্ভার ডেপ্লয়মেন্ট।"
        },
        "icon": "Server"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Write clean, idiomatic Python code with data structures and OOP principles.",
        "bn": "ক্লিন পাইথন কোড লেখা এবং ওওপি প্রিন্সিপালস আয়ত্ত করা।"
      },
      {
        "en": "Build complex multi-app Django projects following MVC/MVT architecture.",
        "bn": "জ্যাঙ্গো ফ্রেমওয়ার্ক দিয়ে স্কেলেবল ওয়েব অ্যাপ্লিকেশন তৈরি করা।"
      },
      {
        "en": "Design and optimize PostgreSQL / MySQL databases using Django ORM.",
        "bn": "জ্যাঙ্গো ওআরএম দিয়ে পোস্টগ্রেএসকিউএল ডেটাবেস পরিচালনা করা।"
      },
      {
        "en": "Develop high-performance RESTful APIs using Django REST Framework (DRF).",
        "bn": "জ্যাঙ্গো রেস্ট ফ্রেমওয়ার্ক (DRF) দিয়ে সিকিউর এপিআই তৈরি।"
      },
      {
        "en": "Deploy Django applications to Linux VPS with Nginx, Gunicorn and SSL.",
        "bn": "লিনাক্স ভিপিএস সার্ভারে জিনিক্স ও গানিকর্ন দিয়ে অ্যাপ ডেপ্লয় করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Python Core, OOP & Django Setup",
          "bn": "মডিউল ১: পাইথন কোর, ওওপি ও জ্যাঙ্গো সেটআপ"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Python and Django Framework Intro: Data Types, Flow Control & Functions",
            "bn": "পাইথন ও জ্যাঙ্গো ফ্রেমওয়ার্ক পরিচিতি: ডাটা টাইপস ও ফাংশনস"
          },
          {
            "en": "Setting Up the Development Environment (Virtualenv, Pip, Git, VS Code)",
            "bn": "ডেভেলপমেন্ট এনভায়রনমেন্ট সেটআপ (ভার্চুয়ালেনভ ও গিট)"
          },
          {
            "en": "Object-Oriented Programming (OOP): Classes, Inheritance & Polymorphism",
            "bn": "অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং (ক্লাসেস ও ইনহেরিট্যান্স)"
          },
          {
            "en": "Django Project Structure & Best Practices: Settings, URLs & Apps",
            "bn": "জ্যাঙ্গো প্রজেক্ট আর্কিটেকচার ও বেস্ট প্র্যাকটিসেস"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Django Models, Views, Templates & Auth",
          "bn": "মডিউল ২: জ্যাঙ্গো মডেলস, ভিউজ, টেমপ্লেটস ও অথেনটিকেশন"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Models and Database Management: Migrations, Relationships & Django ORM",
            "bn": "মডেলস ও ডাটাবেস ম্যানেজমেন্ট: মাইগ্রেশনস ও জ্যাঙ্গো ওআরএম"
          },
          {
            "en": "Creating & Managing Views & Templates: Jinja Syntax, Forms & CBVs",
            "bn": "ভিউ ও টেমপ্লেটস তৈরি: ক্লাস-বেসড ভিউজ ও ফর্মস"
          },
          {
            "en": "User Authentication and Authorization: Custom User Models, Login/Register",
            "bn": "ইউজার অথেনটিকেশন ও কাস্টম ইউজার মডেল"
          },
          {
            "en": "Django Admin Customization: Inline Models, Filters & Search Actions",
            "bn": "জ্যাঙ্গো অ্যাডমিন কাস্টমাইজেশন ও ফিল্টারিং"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: DRF APIs, Deployment, Testing & Freelancing",
          "bn": "মডিউল ৩: ডিআরএফ এপিআই, ডেপ্লয়মেন্ট, টেস্টিং ও মার্কেটপ্লেস"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "RESTful API Integration: Django REST Framework (DRF), Serializers & JWT Auth",
            "bn": "রেস্ট এপিআই ইন্টিগ্রেশন: ডিআরএফ সিরিয়ালাইজার ও জেডব্লিউটি"
          },
          {
            "en": "Middleware and Request Handling, Signals & Background Tasks (Celery/Redis)",
            "bn": "মিডলওয়্যার, রিকোয়েস্ট হ্যান্ডলিং ও স্যালারি ব্যাকগ্রাউন্ড টাস্ক"
          },
          {
            "en": "Deployment & Hosting Django Apps on Ubuntu VPS (Nginx, Gunicorn, SSL)",
            "bn": "উবুন্টু ভিপিএস-এ জ্যাঙ্গো অ্যাপ ডেপ্লয়মেন্ট ও এসএসএল"
          },
          {
            "en": "Testing and Debugging Django Projects, Communicative English & Soft Skills",
            "bn": "টেস্টিং, ডিবাগিং, কমিউনিকেটিভ ইংলিশ ও মার্কেটপ্লেস"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Government Endorsed Certificate",
        "bn": "সরকারি অনুমোদিত সার্টিফিকেট"
      },
      {
        "en": "Complete Source Code of 3 Enterprise Django Projects",
        "bn": "৩টি এন্টারপ্রাইজ জ্যাঙ্গো প্রজেক্টের সম্পূর্ণ সোর্স কোড"
      },
      {
        "en": "VPS Server Deployment Practice Access",
        "bn": "ভিপিএস সার্ভার ডেপ্লয়মেন্ট প্র্যাকটিস অ্যাক্সেস"
      },
      {
        "en": "1-on-1 Backend Career & Interview Mentorship",
        "bn": "১-অন-১ ব্যাকএন্ড ক্যারিয়ার ও ইন্টারভিউ মেন্টরশিপ"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Shahriar Kabir",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
        "role": {
          "en": "Django Backend Developer",
          "bn": "জ্যাঙ্গো ব্যাকএন্ড ডেভেলপার"
        },
        "rating": 5,
        "comment": {
          "en": "The DRF serializers and VPS deployment sessions were top-class. Built my first SaaS backend within weeks.",
          "bn": "ডিআরএফ এবং সার্ভার ডেপ্লয়মেন্টের ক্লাসগুলো এক কথায় অসাধারণ ছিল।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "10",
    "slug": "web-development",
    "title": {
      "en": "Web Development",
      "bn": "ওয়েব ডেভেলপমেন্ট"
    },
    "subtitle": {
      "en": "Learn HTML, CSS, Tailwind, JS, React, Firebase, Figma to React & build 4 production projects",
      "bn": "এইচটিএমএল, সিএসএস, টেইলউইন্ড, জাভাস্ক্রিপ্ট, রিঅ্যাক্ট, ফায়ারবেস ও ৪টি লাইভ প্রোজেক্ট সহ পূর্ণাঙ্গ কোর্স"
    },
    "category": "web",
    "categoryLabel": {
      "en": "Programming & Web",
      "bn": "প্রোগ্রামিং ও ওয়েব"
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
    "ratingsCount": 225,
    "enrolledCount": "520+ Enrolled",
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
    "image": "/images/course thumbnail/web development.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "MD Shamim Rana",
      "designation": {
        "en": "Lead Web Developer & Frontend Specialist",
        "bn": "লিড ওয়েব ডেভেলপার ও ফ্রন্টএন্ড স্পেশালিস্ট"
      },
      "image": "/mentors/shamim-rana.png",
      "bio": {
        "en": "2.5+ years engineering robust web applications, responsive architectures and mentoring students.",
        "bn": "আন্তর্জাতিক ক্লায়েন্টদের জন্য আধুনিক ওয়েব অ্যাপ তৈরিতে ২.৫+ বছরের অভিজ্ঞতা।"
      },
      "experience": "2.5+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Complete frontend and web application development curriculum. Topics include HTML, CSS, Tailwind, GitHub, JavaScript, DOM, JSON, React, React Router, Firebase, Figma to React, PSD to React, Portfolio Website Design, Blog Website Design, Newspaper Website Design, Job Portal Website Design, Communicative English, Soft Skills & Marketplace.",
      "bn": "এইচটিএমএল, সিএসএস, টেইলউইন্ড, গিটহাব, জাভাস্ক্রিপ্ট, ডম, রিঅ্যাক্ট, রিঅ্যাক্ট রাউটার, ফায়ারবেস, ফিগমা/পিএসডি টু রিঅ্যাক্ট এবং ৪টি পূর্ণাঙ্গ বাস্তব প্রজেক্ট (পোর্টফোলিও, ব্লগ, সংবাদপত্র ও জব পোর্টাল) সহ ওয়েব ডেভেলপমেন্টের সম্পূর্ণ কোর্স।"
    },
    "fullDescription": {
      "en": "From basic HTML markup to advanced interactive React web applications. This 138-hour extensive training ensures you master modern JavaScript, component design, responsive styling with Tailwind CSS, state management, Firebase backend integration and building 4 enterprise-grade web applications.",
      "bn": "এই কোর্সে আপনি কোনো পূর্ব অভিজ্ঞতা ছাড়াই শুরু করে আধুনিক ওয়েব অ্যাপ্লিকেশন তৈরিতে দক্ষ হবেন। গিটহাব রিপোজিটরি, ক্লিন কোড প্র্যাকটিস এবং ফ্রিল্যান্স মার্কেটপ্লেস ও লোকাল সফটওয়্যার কোম্পানিতে চাকরির প্রস্তুতি নিশ্চিত করা হয়।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "React & Modern JS",
          "bn": "রিঅ্যাক্ট ও আধুনিক জেএস"
        },
        "desc": {
          "en": "Master React Hooks, props, state, React Router and clean architecture.",
          "bn": "রিঅ্যাক্ট হুকস, প্রপ্স ও রাউটিংয়ে শতভাগ পারদর্শিতা।"
        },
        "icon": "Code2"
      },
      {
        "id": "cv2",
        "title": {
          "en": "4 Live Real-World Projects",
          "bn": "৪টি লাইভ রিয়েল প্রজেক্ট"
        },
        "desc": {
          "en": "Build Portfolio, Blog, Newspaper and Job Portal apps ready for portfolio.",
          "bn": "পোর্টফোলিও, ব্লগ, নিউজপেপার ও জব পোর্টাল ওয়েব অ্যাপ।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Figma to Code & Firebase",
          "bn": "ফিগমা টু কোড ও ফায়ারবেস"
        },
        "desc": {
          "en": "Convert Figma/PSD pixel-perfect to React with Firebase auth & database.",
          "bn": "ফিগমা ডিজাইনকে সরাসরি রিঅ্যাক্ট কোডে রূপান্তর।"
        },
        "icon": "Layers"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master HTML5, CSS3, Tailwind CSS and GitHub version control.",
        "bn": "এইচটিএমএল৫, সিএসএস৩, টেইলউইন্ড সিএসএস ও গিটহাবে পূর্ণ দক্ষতা।"
      },
      {
        "en": "Understand JavaScript ES6+, DOM manipulation, fetch API and JSON handling.",
        "bn": "জাভাস্ক্রিপ্ট ফান্ডামেন্টালস ও ডম ম্যানিপুলেশন আয়ত্ত করা।"
      },
      {
        "en": "Build modular, high-performance React single-page applications.",
        "bn": "মডার্ন রিঅ্যাক্ট ১৯ ও রিঅ্যাক্ট রাউটার দিয়ে স্কেলেবল ওয়েব অ্যাপ তৈরি।"
      },
      {
        "en": "Convert Figma and PSD design mockups into pixel-perfect responsive React code.",
        "bn": "ফিগমা ও পিএসডি ডিজাইন ফাইলকে পারফেক্ট কোডে রূপান্তর করা।"
      },
      {
        "en": "Deploy production web apps with Firebase authentication and cloud hosting.",
        "bn": "ফায়ারবেস অথেনটিকেশন ও ডাটাবেস সহ লাইভ সার্ভারে অ্যাপ ডেপ্লয় করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Web Fundamentals, Tailwind & JavaScript DOM",
          "bn": "মডিউল ১: ওয়েব ফান্ডামেন্টালস, টেইলউইন্ড ও জাভাস্ক্রিপ্ট ডম"
        },
        "duration": {
          "en": "15 Classes • 45 Hours",
          "bn": "১৫ টি ক্লাস • ৪৫ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "HTML5 Semantic Tags, Forms & Modern CSS Layouts (Flexbox & Grid)",
            "bn": "এইচটিএমএল৫ সিমান্টিক ট্যাগস, ফর্মস ও আধুনিক সিএসএস লেআউটস"
          },
          {
            "en": "Tailwind CSS Utility-First Framework & Responsive Design",
            "bn": "টেইলউইন্ড সিএসএস ও রেসপনসিভ ওয়েব ডিজাইন"
          },
          {
            "en": "GitHub Version Control, Commits, Branches & Collaborative Workflows",
            "bn": "গিটহাব ভার্সন কন্ট্রোল, কমিট, ব্রাঞ্চ ও টিম কলাবোরেশন"
          },
          {
            "en": "JavaScript Core (Variables, Functions, Arrays, Objects, Loops, ES6+)",
            "bn": "জাভাস্ক্রিপ্ট কোর: ভ্যারিয়েবল, ফাংশন, অবজেক্ট ও ES6+"
          },
          {
            "en": "DOM Manipulation, Event Listeners, JSON Handling & Fetch API",
            "bn": "ডম ম্যানিপুলেশন, ইভেন্ট লিসেনার, জেএসন ও ফেচ এপিআই"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: React Core, React Router & Firebase Backend",
          "bn": "মডিউল ২: রিঅ্যাক্ট কোর, রিঅ্যাক্ট রাউটার ও ফায়ারবেস ব্যাকএন্ড"
        },
        "duration": {
          "en": "15 Classes • 45 Hours",
          "bn": "১৫ টি ক্লাস • ৪৫ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "React Fundamentals: JSX, Components, Props & State Management",
            "bn": "রিঅ্যাক্ট ফান্ডামেন্টালস: জেএসএক্স, কম্পোনেন্টস, প্রপ্স ও স্টেট"
          },
          {
            "en": "React Hooks (useState, useEffect, useRef, useMemo, custom hooks)",
            "bn": "রিঅ্যাক্ট হুকস: ইউজস্টেট, ইউজইফেক্ট ও কাস্টম হুকস"
          },
          {
            "en": "React Router for Dynamic Multi-Page Navigation & Nested Layouts",
            "bn": "মাল্টি-পেজ অ্যাপের জন্য রিঅ্যাক্ট রাউটার ও নেস্টেড লেআউটস"
          },
          {
            "en": "Firebase Authentication (Google, Email/Pass) & Realtime Database / Firestore",
            "bn": "ফায়ারবেস অথেনটিকেশন ও ফায়ারস্টোর ক্লাউড ডেটাবেস"
          },
          {
            "en": "Figma to React & PSD to React Conversion Techniques",
            "bn": "ফিগমা টু রিঅ্যাক্ট ও পিএসডি টু রিঅ্যাক্ট কনভার্সন মেথড"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: 4 Production Projects & Freelance Career",
          "bn": "মডিউল ৩: ৪টি প্রোডাকশন প্রজেক্ট ও ফ্রিল্যান্স ক্যারিয়ার"
        },
        "duration": {
          "en": "16 Classes • 48 Hours",
          "bn": "১৬ টি ক্লাস • ৪৮ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "Project 1: Modern Interactive Developer Portfolio Website Design",
            "bn": "প্রজেক্ট ১: মডার্ন ইন্টারঅ্যাক্টিভ পোর্টফোলিও ওয়েবসাইট ডিজাইন"
          },
          {
            "en": "Project 2: Full Featured CMS Blog Website Design",
            "bn": "প্রজেক্ট ২: পূর্ণাঙ্গ ফিচার সমৃদ্ধ সিএমএস ব্লগ ওয়েবসাইট ডিজাইন"
          },
          {
            "en": "Project 3: Live Breaking Newspaper / Media Portal Website Design",
            "bn": "প্রজেক্ট ৩: লাইভ নিউজপেপার ও মিডিয়া পোর্টাল ওয়েবসাইট ডিজাইন"
          },
          {
            "en": "Project 4: Enterprise Job Portal Website Design with Application Tracking",
            "bn": "প্রজেক্ট ৪: এন্টারপ্রাইজ জব পোর্টাল ওয়েবসাইট ডিজাইন ও ট্র্যাকিং"
          },
          {
            "en": "Communicative English, Soft Skills, Fiverr/Upwork Gigs & Job Placement",
            "bn": "কমিউনিকেটিভ ইংলিশ, সফট স্কিলস, মার্কেটপ্লেস ও জব প্লেসমেন্ট সাপোর্ট"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Government Endorsed Certificate",
        "bn": "সরকারি অনুমোদিত সার্টিফিকেট"
      },
      {
        "en": "4 Complete Production Web Projects Source Code",
        "bn": "৪টি কমপ্লিট ওয়েব প্রজেক্টের সম্পূর্ণ সোর্স কোড"
      },
      {
        "en": "Lifetime Access to Recordings & Mentorship Group",
        "bn": "রেকর্ডিং ও প্রাইভেট মেন্টরশিপ গ্রুপে আজীবন অ্যাক্সেস"
      },
      {
        "en": "Direct Resume Review & IT Placement Assistance",
        "bn": "রিজিউমে রিভিউ ও লোকাল আইটি জব প্লেসমেন্ট সহায়তা"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Mahmud Hasan",
        "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
        "role": {
          "en": "Frontend Developer",
          "bn": "ফ্রন্টএন্ড ডেভেলপার"
        },
        "rating": 5,
        "comment": {
          "en": "The 4 real projects (especially the Job Portal) gave me immense confidence. I got hired within 1 month of finishing!",
          "bn": "৪টি রিয়েল প্রজেক্ট পোর্টফোলিওতে থাকায় খুব সহজেই সফটওয়্যার কোম্পানিতে চাকরি পেয়েছি।"
        },
        "date": "1 Week Ago"
      }
    ]
  },
  {
    "id": "11",
    "slug": "mern-stack-development",
    "title": {
      "en": "MERN Stack Development",
      "bn": "মার্ন স্ট্যাক ডেভেলপমেন্ট"
    },
    "subtitle": {
      "en": "Master MongoDB, Express.js, React, Node.js, TypeScript & build enterprise full stack applications",
      "bn": "মঙ্গোডিবি, এক্সপ্রেস.জেএস, রিঅ্যাক্ট, নোড.জেএস, টাইপস্ক্রিপ্ট ও ফুল স্ট্যাক আর্কিটেকচার"
    },
    "category": "web",
    "categoryLabel": {
      "en": "Programming & Web",
      "bn": "প্রোগ্রামিং ও ওয়েব"
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
    "ratingsCount": 240,
    "enrolledCount": "510+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "40,000৳",
    "rawFee": 40000,
    "originalFee": "55,000৳",
    "duration": {
      "en": "72 hrs. (3 Months)",
      "bn": "৭২ ঘণ্টা (৩ মাস)"
    },
    "classesCount": {
      "en": "36 Classes",
      "bn": "৩৬ টি ক্লাস"
    },
    "image": "/images/course thumbnail/diploma in full stack.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "MD Shamim Rana",
      "designation": {
        "en": "Lead Full-Stack Web Developer & MERN Specialist",
        "bn": "লিড ফুল-স্ট্যাক ওয়েব ডেভেলপার ও মার্ন স্পেশালিস্ট"
      },
      "image": "/mentors/shamim-rana.png",
      "bio": {
        "en": "2.5+ years engineering enterprise SaaS platforms, microservices, and full-stack MERN web applications.",
        "bn": "এন্টারপ্রাইজ সাস প্ল্যাটফর্ম, মাইক্রোসার্ভিসেস ও মার্ন স্ট্যাক ওয়েব অ্যাপ্লিকেশনে ২.৫+ বছরের অভিজ্ঞতা।"
      },
      "experience": "2.5+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Comprehensive MERN full-stack software engineering program covering 7 modules, 36 sessions and 72 hours of hands-on training. Topics include Web Development & JavaScript Foundation, React.js & Tailwind CSS, Node.js & Express.js, MongoDB & Mongoose, Authentication & API Security, MERN E-Commerce and MERN Service Marketplace projects.",
      "bn": "৭টি মডিউল, ৩৬টি সেশন ও ৭২ ঘণ্টার হ্যান্ডস-অন মার্ন স্ট্যাক ডেভেলপমেন্ট কোর্স। এতে রয়েছে জাভাস্ক্রিপ্ট ফাউন্ডেশন, রিঅ্যাক্ট.জেএস, টেইলউইন্ড সিএসএস, নোড.জেএস, এক্সপ্রেস.জেএস, মঙ্গোডিবি, অথেনটিকেশন ও সিকিউরিটি এবং ২টি পূর্ণাঙ্গ ফুল স্ট্যাক লাইভ প্রজেক্ট (ই-কমার্স ও সার্ভিস মার্কেটপ্লেস)।"
    },
    "fullDescription": {
      "en": "Step into the most in-demand software engineering stack in the global IT market. Master modern JavaScript, React.js, Tailwind CSS, Node.js, Express.js, and MongoDB. Build 2 industry-standard full stack projects from scratch with authentication, payment workflows, admin dashboards, deployment, and marketplace preparation.",
      "bn": "এই কোর্সে আপনি আধুনিক জাভাস্ক্রিপ্ট, রিঅ্যাক্ট.জেএস, টেইলউইন্ড সিএসএস, নোড.জেএস ব্যাকএন্ড, মঙ্গোডিবি ডাটাবেস আর্কিটেকচার, সিকিউর অথেনটিকেশন এবং ২টি কমপ্লিট এন্টারপ্রাইজ প্রজেক্ট তৈরির মাধ্যমে প্রফেশনাল মার্ন স্ট্যাক ডেভেলপার হওয়ার পূর্ণাঙ্গ গাইডলাইন পাবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Modern Frontend & Backend",
          "bn": "মডার্ন ফ্রন্টএন্ড ও ব্যাকএন্ড"
        },
        "desc": {
          "en": "Complete full stack mastery with React.js, Tailwind CSS, Node.js, Express.js and MongoDB.",
          "bn": "রিঅ্যাক্ট, টেইলউইন্ড, নোড, এক্সপ্রেস ও মঙ্গোডিবি দিয়ে সম্পূর্ণ ফুল স্ট্যাক ডেভেলপমেন্ট।"
        },
        "icon": "Code2"
      },
      {
        "id": "cv2",
        "title": {
          "en": "REST API & Security",
          "bn": "রেস্ট এপিআই ও সিকিউরিটি"
        },
        "desc": {
          "en": "JWT authentication, protected routes, data validation and professional backend architecture.",
          "bn": "জেডব্লিউটি অথেনটিকেশন, ডাটা ভ্যালিডেশন ও প্রফেশনাল ব্যাকএন্ড আর্কিটেকচার।"
        },
        "icon": "ShieldCheck"
      },
      {
        "id": "cv3",
        "title": {
          "en": "2 Full Stack Projects",
          "bn": "২টি ফুল স্ট্যাক লাইভ প্রজেক্ট"
        },
        "desc": {
          "en": "Build MERN E-Commerce and MERN Service Marketplace with complete live deployment.",
          "bn": "মার্ন ই-কমার্স ও মার্ন সার্ভিস মার্কেটপ্লেস প্রজেক্ট তৈরি ও লাইভ ডেপ্লয়মেন্ট।"
        },
        "icon": "Server"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master JavaScript ES6+ fundamentals, DOM manipulation, asynchronous programming and API handling.",
        "bn": "মডার্ন জাভাস্ক্রিপ্ট (ES6+), অ্যাসিঙ্ক্রোনাস প্রোগ্রামিং ও এপিআই হ্যান্ডলিংয়ে দক্ষতা।"
      },
      {
        "en": "Build responsive, dynamic user interfaces with React, React Router, Tailwind CSS, Context API & Redux Toolkit.",
        "bn": "রিঅ্যাক্ট, টেইলউইন্ড, রিঅ্যাক্ট রাউটার ও রিডাক্স টুলকিট দিয়ে আধুনিক ইউআই ডিজাইন।"
      },
      {
        "en": "Architect secure REST APIs with Node.js, Express.js, JWT authentication & protected routes.",
        "bn": "নোড.জেএস ও এক্সপ্রেস দিয়ে সিকিউর ব্যাকএন্ড এপিআই ও জেডব্লিউটি অথেনটিকেশন তৈরি।"
      },
      {
        "en": "Design and optimize MongoDB databases using Mongoose schemas, relations and advanced queries.",
        "bn": "মঙ্গোডিবি ডাটাবেস ও মাঙ্গুস দিয়ে ডেটা মডেলিং, স্কিমা ডিজাইন ও কুয়েরি অপ্টিমাইজেশন।"
      },
      {
        "en": "Build, deploy and present 2 complete production-ready MERN projects (E-Commerce & Service Marketplace).",
        "bn": "২টি পূর্ণাঙ্গ মার্ন প্রজেক্ট (ই-কমার্স ও সার্ভিস মার্কেটপ্লেস) তৈরি, ডেপ্লয়মেন্ট ও পোর্টফোলিও প্রেজেন্টেশন।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 01: Web Development & JavaScript Foundation",
          "bn": "মডিউল ০১: ওয়েব ডেভেলপমেন্ট ও জাভাস্ক্রিপ্ট ফাউন্ডেশন"
        },
        "duration": {
          "en": "6 Classes • 12 Hours",
          "bn": "৬ টি ক্লাস • ১২ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Session 01: Web Development Fundamentals",
            "bn": "সেশন ০১: ওয়েব ডেভেলপমেন্ট ফান্ডামেন্টালস"
          },
          {
            "en": "Session 02: HTML, CSS & Tailwind CSS",
            "bn": "সেশন ০২: এইচটিএমএল, সিএসএস ও টেইলউইন্ড সিএসএস"
          },
          {
            "en": "Session 03: JavaScript Fundamentals",
            "bn": "সেশন ০৩: জাভাস্ক্রিপ্ট ফান্ডামেন্টালস"
          },
          {
            "en": "Session 04: Modern JavaScript (ES6+)",
            "bn": "সেশন ০৪: মডার্ন জাভাস্ক্রিপ্ট (ES6+)"
          },
          {
            "en": "Session 05: JavaScript Array & Object",
            "bn": "সেশন ০৫: জাভাস্ক্রিপ্ট অ্যারে ও অবজেক্ট"
          },
          {
            "en": "Session 06: Asynchronous JavaScript & API",
            "bn": "সেশন ০৬: অ্যাসিঙ্ক্রোনাস জাভাস্ক্রিপ্ট ও এপিআই"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 02: React.js & Tailwind CSS",
          "bn": "মডিউল ০২: রিঅ্যাক্ট.জেএস ও টেইলউইন্ড সিএসএস"
        },
        "duration": {
          "en": "9 Classes • 18 Hours",
          "bn": "৯ টি ক্লাস • ১৮ ঘণ্টা"
        },
        "lessonsCount": 9,
        "topics": [
          {
            "en": "Session 07: React Fundamentals",
            "bn": "সেশন ০৭: রিঅ্যাক্ট ফান্ডামেন্টালস"
          },
          {
            "en": "Session 08: Props & Component Architecture",
            "bn": "সেশন ০৮: প্রপস ও কম্পোনেন্ট আর্কিটেকচার"
          },
          {
            "en": "Session 09: State & Events",
            "bn": "সেশন ০৯: স্টেট ও ইভেন্টস"
          },
          {
            "en": "Session 10: Forms & Lists",
            "bn": "সেশন ১০: ফর্মস ও লিস্টস"
          },
          {
            "en": "Session 11: useEffect & API Integration",
            "bn": "সেশন ১১: useEffect ও এপিআই ইন্টিগ্রেশন"
          },
          {
            "en": "Session 12: React Router",
            "bn": "সেশন ১২: রিঅ্যাক্ট রাউটার"
          },
          {
            "en": "Session 13: Context API & Custom Hooks",
            "bn": "সেশন ১৩: কনটেক্সট এপিআই ও কাস্টম হুকস"
          },
          {
            "en": "Session 14: Redux Toolkit",
            "bn": "সেশন ১৪: রিডাক্স টুলকিট"
          },
          {
            "en": "Session 15: Advanced React & API Architecture",
            "bn": "সেশন ১৫: অ্যাডভান্সড রিঅ্যাক্ট ও এপিআই আর্কিটেকচার"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 03: Node.js & Express.js",
          "bn": "মডিউল ০৩: নোড.জেএস ও এক্সপ্রেস.জেএস"
        },
        "duration": {
          "en": "4 Classes • 8 Hours",
          "bn": "৪ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Session 16: Node.js Fundamentals",
            "bn": "সেশন ১৬: নোড.জেএস ফান্ডামেন্টালস"
          },
          {
            "en": "Session 17: Express.js",
            "bn": "সেশন ১৭: এক্সপ্রেস.জেএস"
          },
          {
            "en": "Session 18: REST API & CRUD",
            "bn": "সেশন ১৮: রেস্ট এপিআই ও ক্রাড (CRUD)"
          },
          {
            "en": "Session 19: Professional Backend Architecture",
            "bn": "সেশন ১৯: প্রফেশনাল ব্যাকএন্ড আর্কিটেকচার"
          }
        ]
      },
      {
        "moduleNumber": 4,
        "title": {
          "en": "Module 04: MongoDB & Mongoose",
          "bn": "মডিউল ০৪: মঙ্গোডিবি ও মাঙ্গুস"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 3,
        "topics": [
          {
            "en": "Session 20: MongoDB Fundamentals",
            "bn": "সেশন ২০: মঙ্গোডিবি ফান্ডামেন্টালস"
          },
          {
            "en": "Session 21: Mongoose & Schema Design",
            "bn": "সেশন ২১: মাঙ্গুস ও স্কিমা ডিজাইন"
          },
          {
            "en": "Session 22: Practical MongoDB & Advanced Queries",
            "bn": "সেশন ২২: প্র্যাকটিক্যাল মঙ্গোডিবি ও অ্যাডভান্সড কোয়েরিজ"
          }
        ]
      },
      {
        "moduleNumber": 5,
        "title": {
          "en": "Module 05: Authentication & API Security",
          "bn": "মডিউল ০৫: অথেনটিকেশন ও এপিআই সিকিউরিটি"
        },
        "duration": {
          "en": "3 Classes • 6 Hours",
          "bn": "৩ টি ক্লাস • ৬ ঘণ্টা"
        },
        "lessonsCount": 3,
        "topics": [
          {
            "en": "Session 23: User Authentication & JWT",
            "bn": "সেশন ২৩: ইউজার অথেনটিকেশন ও জেডব্লিউটি (JWT)"
          },
          {
            "en": "Session 24: Authorization & Protected Routes",
            "bn": "সেশন ২৪: অথরাইজেশন ও প্রোটেক্টেড রাউটস"
          },
          {
            "en": "Session 25: Validation & API Security",
            "bn": "সেশন ২৫: ভ্যালিডেশন ও এপিআই সিকিউরিটি"
          }
        ]
      },
      {
        "moduleNumber": 6,
        "title": {
          "en": "Module 06: Full Stack Project 01 — MERN E-Commerce",
          "bn": "মডিউল ০৬: ফুল স্ট্যাক প্রজেক্ট ০১ — মার্ন ই-কমার্স"
        },
        "duration": {
          "en": "6 Classes • 12 Hours",
          "bn": "৬ টি ক্লাস • ১২ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Session 26: Project Planning & Setup",
            "bn": "সেশন ২৬: প্রজেক্ট প্ল্যানিং ও সেটআপ"
          },
          {
            "en": "Session 27: Authentication System",
            "bn": "সেশন ২৭: অথেনটিকেশন সিস্টেম"
          },
          {
            "en": "Session 28: Product Management",
            "bn": "সেশন ২৮: প্রোডাক্ট ম্যানেজমেন্ট"
          },
          {
            "en": "Session 29: Search, Filter & Shopping Cart",
            "bn": "সেশন ২৯: সার্চ, ফিল্টার ও শপিং কার্ট"
          },
          {
            "en": "Session 30: Checkout & Order Management",
            "bn": "সেশন ৩০: চেকআউট ও অর্ডার ম্যানেজমেন্ট"
          },
          {
            "en": "Session 31: Admin Dashboard & Deployment",
            "bn": "সেশন ৩১: অ্যাডমিন ড্যাশবোর্ড ও ডেপ্লয়মেন্ট"
          }
        ]
      },
      {
        "moduleNumber": 7,
        "title": {
          "en": "Module 07: Full Stack Project 02 — MERN Service Marketplace",
          "bn": "মডিউল ০৭: ফুল স্ট্যাক প্রজেক্ট ০২ — মার্ন সার্ভিস মার্কেটপ্লেস"
        },
        "duration": {
          "en": "5 Classes • 10 Hours",
          "bn": "৫ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Session 32: Project Planning & Setup",
            "bn": "সেশন ৩২: প্রজেক্ট প্ল্যানিং ও সেটআপ"
          },
          {
            "en": "Session 33: Service / Gig Management",
            "bn": "সেশন ৩৩: সার্ভিস / গিগ ম্যানেজমেন্ট"
          },
          {
            "en": "Session 34: Order & Review System",
            "bn": "সেশন ৩৪: অর্ডার ও রিভিউ সিস্টেম"
          },
          {
            "en": "Session 35: Advanced Features & Project Finalization",
            "bn": "সেশন ৩৫: অ্যাডভান্সড ফিচার্স ও প্রজেক্ট ফাইনালাইজেশন"
          },
          {
            "en": "Session 36: Deployment, Portfolio & Final Presentation",
            "bn": "সেশন ৩৬: ডেপ্লয়মেন্ট, পোর্টফোলিও ও ফাইনাল প্রেজেন্টেশন"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Government Endorsed Certificate",
        "bn": "সরকারি অনুমোদিত সার্টিফিকেট"
      },
      {
        "en": "Full Source Code of 2 Full Stack Enterprise Projects",
        "bn": "২টি এন্টারপ্রাইজ ফুল স্ট্যাক প্রজেক্টের সম্পূর্ণ সোর্স কোড"
      },
      {
        "en": "AWS Cloud Deployment Infrastructure Access",
        "bn": "এডব্লিউএস ক্লাউড ডেপ্লয়মেন্ট প্র্যাকটিস অ্যাক্সেস"
      },
      {
        "en": "Dedicated 1-on-1 Job Placement Support",
        "bn": "সফটওয়্যার কোম্পানিতে ডেডিকেটেড জব প্লেসমেন্ট সাপোর্ট"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Jubayer Hossain",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "role": {
          "en": "MERN Stack Engineer",
          "bn": "মার্ন স্ট্যাক ইঞ্জিনিয়ার"
        },
        "rating": 5,
        "comment": {
          "en": "Tanvir sir's architectural depth is unmatched. Landed a high-paying software engineer role before finishing the course!",
          "bn": "তানভীর স্যারের গাইডলাইনে কোর্স শেষ হওয়ার আগেই সফটওয়্যার কোম্পানিতে চাকরি পেয়েছি!"
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
      "bn": "কম্পটিয়া এ+, সিসিএনএ ও এমটিসিএনএ"
    },
    "subtitle": {
      "en": "Triple networking certification program: hardware engineering, Cisco routing & switching, MikroTik ISP config & CC camera",
      "bn": "কম্পিউটার হার্ডওয়্যার, সিসকো সিসিএনএ, মিক্রোটিক রাউটারওএস ও সিসি ক্যামেরা ইনস্টলেশন মাস্টারক্লাস"
    },
    "category": "cloud",
    "categoryLabel": {
      "en": "Networking & IT",
      "bn": "নেটওয়ার্কিং ও আইটি"
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
    "ratingsCount": 195,
    "enrolledCount": "430+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "30,000৳",
    "rawFee": 30000,
    "originalFee": "45,000৳",
    "duration": {
      "en": "200 hrs. (6 Months)",
      "bn": "২০০ ঘণ্টা (৬ মাস)"
    },
    "classesCount": {
      "en": "60 Classes",
      "bn": "৬০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/comptia-a-plus.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Engr. M. A. Wahid",
      "designation": {
        "en": "CCIE Certified Principal Network Consultant",
        "bn": "সিসিআইই সার্টিফাইড প্রিন্সিপাল নেটওয়ার্ক কনসালট্যান্ট"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "12+ years designing ISP, enterprise Cisco networks and data center infrastructures.",
        "bn": "আইএসপি, সিসকো এন্টারপ্রাইজ নেটওয়ার্ক ও ডাটা সেন্টারে ১২+ বছরের অভিজ্ঞতা।"
      },
      "experience": "12+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "All-in-one professional networking and IT engineering combo. Topics include computer hardware fundamentals, operating systems, basic networking concepts, routing and switching (CCNA), network security, network troubleshooting, CC camera installation, CISCO Certified Network Associate (CCNA), wireless networking, MikroTik RouterOS essentials, network services & protocols, communicative English and soft skills.",
      "bn": "কম্পিউটার হার্ডওয়্যার ফান্ডামেন্টালস, অপারেটিং সিস্টেমস, সিসকো সিসিএনএ ২০০-৩০১ রাউটিং ও সুইচিং, নেটওয়ার্ক সিকিউরিটি ও ট্রাবলশুটিং, সিসি ক্যামেরা ও এনভিআর ইনস্টলেশন, মিক্রোটিক রাউটারওএস (MTCNA) আইএসপি কনফিগারেশন এবং আন্তর্জাতিক নেটওয়ার্কিং ক্যারিয়ারের পূর্ণাঙ্গ কোর্স।"
    },
    "fullDescription": {
      "en": "Become an elite IT Infrastructure, System & Network Engineer. This flagship 200-hour hands-on program combines three top international certifications: CompTIA A+ (Hardware & OS), Cisco CCNA 200-301 (Routing, Switching & Security) and MikroTik MTCNA (ISP Bandwidth, Queue & Firewalls) alongside IP surveillance & CC camera deployment.",
      "bn": "এই ২০০ ঘণ্টার কোর্সে আপনি ফিজিক্যাল কম্পিউটার অ্যাসেম্বলিং, ট্রাবলশুটিং, সিসকো সুইচ-রাউটার কনফিগারেশন, ভি-ল্যান, ওএসপিএফ, মিক্রোটিক ব্যান্ডউইথ ম্যানেজমেন্ট, আইপি সিসি ক্যামেরা ইনস্টলেশন ও আইএসপি নেটওয়ার্ক সেটআপ প্র্যাকটিক্যাল ল্যাবে শিখবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Cisco CCNA 200-301",
          "bn": "সিসকো সিসিএনএ ২০০-৩০১"
        },
        "desc": {
          "en": "Enterprise routing, switching, VLANs, OSPF, ACLs and NAT configuration.",
          "bn": "সিসকো রাউটার ও সুইচ কনফিগারেশন এবং ল্যাব।"
        },
        "icon": "Server"
      },
      {
        "id": "cv2",
        "title": {
          "en": "MikroTik ISP & Bandwidth",
          "bn": "মিক্রোটিক আইএসপি নেটওয়ার্ক"
        },
        "desc": {
          "en": "MTCNA setup, queue management, PPPoE server, firewall filter & NAT rules.",
          "bn": "মিক্রোটিক আইএসপি ব্যান্ডউইথ ও কিউ ম্যানেজমেন্ট।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Hardware & CC Camera",
          "bn": "হার্ডওয়্যার ও সিসি ক্যামেরা"
        },
        "desc": {
          "en": "PC hardware troubleshooting, OS deployment and IP camera / NVR installation.",
          "bn": "হার্ডওয়্যার রিপেয়ার ও আইপি সিসি ক্যামেরা সেটআপ।"
        },
        "icon": "ShieldCheck"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Diagnose, repair and assemble computer hardware and enterprise operating systems.",
        "bn": "কম্পিউটার হার্ডওয়্যার ডায়াগনোসিস ও অ্যাসেম্বলিং করতে পারা।"
      },
      {
        "en": "Configure Cisco routers and switches for complex enterprise networks (CCNA).",
        "bn": "সিসকো রাউটার ও সুইচে রাউটিং প্রটোকল ও ভি-ল্যান কনফিগার করা।"
      },
      {
        "en": "Deploy and manage MikroTik RouterOS for ISP bandwidth control, PPPoE & firewalls.",
        "bn": "মিক্রোটিক রাউটারে ব্যান্ডউইথ কন্ট্রোল ও ফায়ারওয়াল কনফিগারেশন।"
      },
      {
        "en": "Install and manage analog/IP CC cameras, NVR/DVR systems and remote viewing.",
        "bn": "সিসি ক্যামেরা, ডিভিআর ও এনভিআর ইনস্টলেশন ও কনফিগারেশন করা।"
      },
      {
        "en": "Qualify for Network Administrator, System Support and ISP Engineer positions.",
        "bn": "আইটি সাপোর্ট ও নেটওয়ার্ক ইঞ্জিনিয়ার হিসেবে চাকরির জন্য প্রস্তুত হওয়া।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: CompTIA A+ Hardware, OS & CC Camera Installation",
          "bn": "মডিউল ১: কম্পটিয়া এ+ হার্ডওয়্যার, ওএস ও সিসি ক্যামেরা ইনস্টলেশন"
        },
        "duration": {
          "en": "20 Classes • 60 Hours",
          "bn": "২০ টি ক্লাস • ৬০ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "Computer Hardware Fundamentals: Motherboard, CPU, RAM, Storage & Power",
            "bn": "কম্পিউটার হার্ডওয়্যার ফান্ডামেন্টালস: মাদারবোর্ড, র‍্যাম ও প্রসেসর"
          },
          {
            "en": "Operating Systems Installation, BIOS/UEFI, Partitioning & Recovery",
            "bn": "অপারেটিং সিস্টেম ইনস্টলেশন, বায়োস ও পার্টিশনিং"
          },
          {
            "en": "Hardware Troubleshooting, Preventative Maintenance & Toolkits",
            "bn": "হার্ডওয়্যার ট্রাবলশুটিং ও মেইনটেন্যান্স"
          },
          {
            "en": "CC Camera Installation: Analog, IP Cameras, NVR/DVR, Cabling & Remote Monitoring",
            "bn": "সিসি ক্যামেরা ইনস্টলেশন: এনভিআর/ডিভিআর, ক্যাবলিং ও রিমোট ভিউ"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Cisco CCNA (Routing, Switching & Security)",
          "bn": "মডিউল ২: সিসকো সিসিএনএ (রাউটিং, সুইচিং ও সিকিউরিটি)"
        },
        "duration": {
          "en": "20 Classes • 60 Hours",
          "bn": "২০ টি ক্লাস • ৬০ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "Basic Networking Concepts: OSI Model, TCP/IP, IPv4 Subnetting & IPv6",
            "bn": "বেসিক নেটওয়ার্কিং: ওএসআই মডেল, আইপি সাবনেটিং ও আইপিভি৬"
          },
          {
            "en": "Routing and Switching (CCNA): Static Routing, OSPFv2, VLANs, Trunking & STP",
            "bn": "রাউটিং ও সুইচিং: ওএসপিএফ, ভি-ল্যান, ট্রাংকিং ও এসটিপি"
          },
          {
            "en": "Network Security: Access Control Lists (ACL), Port Security & DHCP Snooping",
            "bn": "নেটওয়ার্ক সিকিউরিটি: এসিএল, পোর্ট সিকিউরিটি ও ডিএইচসিপি স্নুপিং"
          },
          {
            "en": "Wireless Networking Fundamentals & Cisco Packet Tracer / GNS3 Labs",
            "bn": "ওয়্যারলেস নেটওয়ার্কিং ও প্যাকেট ট্রেসার লাইভ ল্যাব"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: MikroTik RouterOS (MTCNA), Protocols & Career",
          "bn": "মডিউল ৩: মিক্রোটিক রাউটারওএস (MTCNA), প্রোটোকলস ও ক্যারিয়ার"
        },
        "duration": {
          "en": "20 Classes • 60 Hours",
          "bn": "২০ টি ক্লাস • ৬০ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "Mikrotik RouterOS Essentials: Winbox, Initial Setup, Bridges & IP Addressing",
            "bn": "মিক্রোটিক রাউটারওএস বেসিকস: উইনবক্স, ব্রিজ ও আইপি সেটআপ"
          },
          {
            "en": "ISP Bandwidth Management: Simple Queue, Queue Tree & PCQ Strategies",
            "bn": "আইএসপি ব্যান্ডউইথ ম্যানেজমেন্ট: কিউ ও পিসিকিউ রুলস"
          },
          {
            "en": "PPPoE Server/Client, Hotspot Server, Firewall Filter & NAT Configuration",
            "bn": "পিপিপিওই সার্ভার, হটস্পট ও ফায়ারওয়াল কনফিগারেশন"
          },
          {
            "en": "Network Services and Protocols (DNS, DHCP, NTP, SNMP, VPN)",
            "bn": "নেটওয়ার্ক সার্ভিসেস ও প্রোটোকলস (ডিএনএস, ভিপিএন)"
          },
          {
            "en": "Network Troubleshooting, Communicative English, Soft Skills & Job Placement",
            "bn": "নেটওয়ার্ক ট্রাবলশুটিং, কমিউনিকেটিভ ইংলিশ ও জব প্লেসমেন্ট"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Triple Training Certificate (CompTIA, CCNA, MTCNA)",
        "bn": "ট্রিপল ট্রেনিং সার্টিফিকেট (CompTIA, CCNA, MTCNA)"
      },
      {
        "en": "Hands-on Physical Lab Access with Cisco & MikroTik Routers",
        "bn": "সিসকো ও মিক্রোটিক রাউটার সমৃদ্ধ ফিজিক্যাল ল্যাব প্র্যাকটিস"
      },
      {
        "en": "CCNA 200-301 & MTCNA Exam Dumps & Prep Material",
        "bn": "সিসিএনএ ও এমটিসিএনএ এক্সাম প্রিপারেশন ম্যাটেরিয়াল"
      },
      {
        "en": "Guaranteed Placement Assistance in ISPs & Corporate IT",
        "bn": "আইএসপি ও কর্পোরেট আইটি সেক্টরে প্লেসমেন্ট সহায়তা"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Imtiaz Ahmed",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
        "role": {
          "en": "Network Support Engineer",
          "bn": "নেটওয়ার্ক সাপোর্ট ইঞ্জিনিয়ার"
        },
        "rating": 5,
        "comment": {
          "en": "Hands-down the best networking course. The real Cisco and MikroTik physical labs prepared me for my ISP job.",
          "bn": "ফিজিক্যাল ল্যাবে সিসকো ও মিক্রোটিক কনফিগারেশন করার সুযোগ পাওয়ায় চাকরি পাওয়া সহজ হয়েছে।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "13",
    "slug": "certified-web-design-and-development",
    "title": {
      "en": "Certified Web Design and Development",
      "bn": "সার্টিফাইড ওয়েব ডিজাইন অ্যান্ড ডেভেলপমেন্ট"
    },
    "subtitle": {
      "en": "Professional front-end web design: HTML5, CSS3, JavaScript, Bootstrap, Tailwind & responsive UI projects",
      "bn": "এইচটিএমএল৫, সিএসএস৩, বুটস্ট্র্যাপ, টেইলউইন্ড ও জাভাস্ক্রিপ্ট দিয়ে আধুনিক রেসপনসিভ ওয়েব ডিজাইন"
    },
    "category": "web",
    "categoryLabel": {
      "en": "Programming & Web",
      "bn": "প্রোগ্রামিং ও ওয়েব"
    },
    "badge": {
      "en": "CERTIFIED",
      "bn": "সার্টিফাইড"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.8,
    "ratingsCount": 110,
    "enrolledCount": "260+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "15,000৳",
    "rawFee": 15000,
    "originalFee": "22,000৳",
    "duration": {
      "en": "132 hrs. (4 Months)",
      "bn": "১৩২ ঘণ্টা (৪ মাস)"
    },
    "classesCount": {
      "en": "44 Classes",
      "bn": "৪৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/enterprise full stack next.js 15.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "MD Shamim Rana",
      "designation": {
        "en": "Senior Web Developer & UI Architect",
        "bn": "সিনিয়র ওয়েব ডেভেলপার ও ইউআই আর্কিটেক্ট"
      },
      "image": "/mentors/shamim-rana.png",
      "bio": {
        "en": "2.5+ years in professional web design & development, building high-converting client websites.",
        "bn": "প্রফেশনাল ওয়েব ডিজাইন ও ডেভেলপমেন্টে ২.৫+ বছরের অভিজ্ঞতা।"
      },
      "experience": "2.5+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Certified Web Design and Development course covering HTML5 semantic structure, CSS3 styling, Flexbox & Grid layouts, Bootstrap 5, Tailwind CSS, JavaScript DOM interactivity, jQuery effects, PSD/Figma to HTML conversion, Git/GitHub and freelance portfolio creation.",
      "bn": "১৩২ ঘণ্টার প্রফেশনাল ওয়েব ডিজাইন ও ডেভেলপমেন্ট কোর্স। এতে এইচটিএমএল৫, সিএসএস৩, বুটস্ট্র্যাপ ৫, টেইলউইন্ড, জাভাস্ক্রিপ্ট ডম, ফিগমা টু এইচটিএমএল কনভার্সন এবং রেসপনসিভ ক্লায়েন্ট ওয়েবসাইট তৈরি শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Master the art of creating pixel-perfect, mobile-friendly websites that look gorgeous on all devices. You will build 5+ complete responsive client websites from scratch, learn cross-browser compatibility, web accessibility standards and deploy live on Netlify/Vercel.",
      "bn": "এই কোর্সে আপনি একদম বেসিক থেকে শুরু করে রেসপনসিভ ওয়েবসাইট ডিজাইন, অ্যানিমেশন, আধুনিক সিএসএস ফ্রেমওয়ার্ক এবং মার্কেটপ্লেসে ওয়েব ডিজাইনার হিসেবে কাজ করার পূর্ণাঙ্গ দক্ষতা অর্জন করবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Pixel-Perfect Responsive",
          "bn": "পিক্সেল-পারফেক্ট রেসপনসিভ"
        },
        "desc": {
          "en": "Ensure 100% responsiveness across mobile, tablet, laptop and 4K screens.",
          "bn": "সব ডিভাইসে পারফেক্ট মোবাইল রেসপনসিভ ডিজাইন।"
        },
        "icon": "Code2"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Tailwind & Bootstrap 5",
          "bn": "টেইলউইন্ড ও বুটস্ট্র্যাপ"
        },
        "desc": {
          "en": "Build rapid UI prototypes and enterprise-grade designs using modern frameworks.",
          "bn": "আধুনিক সিএসএস ফ্রেমওয়ার্কে পূর্ণ পারদর্শিতা।"
        },
        "icon": "Palette"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Figma to Code",
          "bn": "ফিগমা টু কোড"
        },
        "desc": {
          "en": "Convert complex Figma and PSD templates into semantic clean HTML/CSS code.",
          "bn": "ফিগমা ডিজাইন থেকে ক্লিন এইচটিএমএল কোড তৈরি।"
        },
        "icon": "Zap"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Write clean, semantic HTML5 markup and modern CSS3 stylesheets.",
        "bn": "ক্লিন ও সিমান্টিক এইচটিএমএল৫ এবং সিএসএস৩ কোড লেখা।"
      },
      {
        "en": "Master Flexbox, CSS Grid, animations, transitions and media queries.",
        "bn": "ফ্লেক্সবক্স, সিএসএস গ্রিড ও মিডিয়া কোয়েরিজ আয়ত্ত করা।"
      },
      {
        "en": "Build interactive UI elements using JavaScript and DOM manipulation.",
        "bn": "জাভাস্ক্রিপ্ট দিয়ে ইন্টারঅ্যাক্টিভ ওয়েব কম্পোনেন্ট তৈরি করা।"
      },
      {
        "en": "Convert Figma/PSD designs into fully functional responsive websites.",
        "bn": "ফিগমা ডিজাইনকে সরাসরি রেসপনসিভ ওয়েবসাইটে রূপান্তর করা।"
      },
      {
        "en": "Create a professional portfolio and earn on Fiverr, Upwork & local agencies.",
        "bn": "প্রফেশনাল পোর্টফোলিও বানিয়ে ফ্রিল্যান্সিং ক্যারিয়ার শুরু করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: HTML5, CSS3 & Responsive Design Fundamentals",
          "bn": "মডিউল ১: এইচটিএমএল৫, সিএসএস৩ ও রেসপনসিভ ডিজাইন"
        },
        "duration": {
          "en": "14 Classes • 42 Hours",
          "bn": "১৪ টি ক্লাস • ৪২ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "HTML5 Semantic Tags, Document Structure, Tables & Multi-step Forms",
            "bn": "এইচটিএমএল৫ সিমান্টিক ট্যাগস, টেবিলস ও মাল্টি-স্টেপ ফর্মস"
          },
          {
            "en": "CSS3 Typography, Colors, Box Model, Borders & Shadows",
            "bn": "সিএসএস৩ টাইপোগ্রাফি, বক্স মডেল ও শ্যাডোজ"
          },
          {
            "en": "CSS Flexbox & CSS Grid Mastery for Modern Layouts",
            "bn": "মডার্ন লেআউটের জন্য সিএসএস ফ্লেক্সবক্স ও গ্রিড মাস্টারি"
          },
          {
            "en": "Media Queries & Mobile-First Responsive Web Design",
            "bn": "মিডিয়া কোয়েরিজ ও মোবাইল-ফার্স্ট রেসপনসিভ ডিজাইন"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Bootstrap 5, Tailwind CSS & JavaScript Interactivity",
          "bn": "মডিউল ২: বুটস্ট্র্যাপ ৫, টেইলউইন্ড সিএসএস ও জাভাস্ক্রিপ্ট"
        },
        "duration": {
          "en": "15 Classes • 45 Hours",
          "bn": "১৫ টি ক্লাস • ৪৫ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Bootstrap 5 Components, Grid System & Utilities",
            "bn": "বুটস্ট্র্যাপ ৫ কম্পোনেন্টস ও গ্রিড সিস্টেম"
          },
          {
            "en": "Tailwind CSS Utility-First Architecture, Custom Config & Plugins",
            "bn": "টেইলউইন্ড সিএসএস ইউটিলিটি আর্কিটেকচার ও কাস্টমাইজেশন"
          },
          {
            "en": "JavaScript Essentials: Variables, Functions, Arrays, Objects & Events",
            "bn": "জাভাস্ক্রিপ্ট বেসিকস: ভ্যারিয়েবল, ফাংশন ও ইভেন্টস"
          },
          {
            "en": "DOM Manipulation, Sliders, Modals, Accordions & Form Validation",
            "bn": "ডম ম্যানিপুলেশন, স্লাইডার, মোডাল ও ফর্ম ভ্যালিডেশন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Figma to HTML, Live Projects & Freelancing",
          "bn": "মডিউল ৩: ফিগমা টু এইচটিএমএল, লাইভ প্রজেক্টস ও ফ্রিল্যান্সিং"
        },
        "duration": {
          "en": "15 Classes • 45 Hours",
          "bn": "১৫ টি ক্লাস • ৪৫ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Figma to HTML / PSD to HTML Pixel-Perfect Conversion Practice",
            "bn": "ফিগমা টু এইচটিএমএল পিক্সেল-পারফেক্ট কনভার্সন"
          },
          {
            "en": "Building 3 Full Responsive Client Websites (Agency, Restaurant, E-Commerce)",
            "bn": "৩টি ফুল রেসপনসিভ ক্লায়েন্ট ওয়েবসাইট তৈরি"
          },
          {
            "en": "Git, GitHub & Live Deployment on Netlify / Vercel with Custom Domains",
            "bn": "গিটহাব ও নেটলিফাইতে লাইভ ডেপ্লয়মেন্ট"
          },
          {
            "en": "Portfolio Creation, Fiverr Gigs & Client Communication English",
            "bn": "পোর্টফোলিও তৈরি, ফাইবার গিগ ও ক্লায়েন্ট কমিউনিকেশন"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Certified Web Designer Certificate",
        "bn": "সার্টিফাইড ওয়েব ডিজাইনার সার্টিফিকেট"
      },
      {
        "en": "Source Code of 5 Commercial Responsive Websites",
        "bn": "৫টি কমার্শিয়াল রেসপনসিভ ওয়েবসাইটের সোর্স কোড"
      },
      {
        "en": "Premium UI Kits, Icons & Templates Pack",
        "bn": "প্রিমিয়াম ইউআই কিট, আইকন ও টেমপ্লেট প্যাক"
      },
      {
        "en": "1-on-1 Freelancing & Marketplace Mentorship",
        "bn": "১-অন-১ ফ্রিল্যান্সিং মেন্টরশিপ"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Kamrul Hasan",
        "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
        "role": {
          "en": "Frontend Web Designer",
          "bn": "ফ্রন্টএন্ড ওয়েব ডিজাইনার"
        },
        "rating": 5,
        "comment": {
          "en": "The Figma to HTML conversion sessions gave me real confidence. Completed 6 projects on Fiverr!",
          "bn": "ফিগমা টু এইচটিএমএল এর ক্লাসগুলো অসাধারণ ছিল। ফাইবারে ৬টি প্রজেক্ট শেষ করেছি।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "14",
    "slug": "certified-shopify-specialist",
    "title": {
      "en": "Certified Shopify Specialist",
      "bn": "সার্টিফাইড শপিফাই স্পেশালিস্ট"
    },
    "subtitle": {
      "en": "Build high-converting Shopify stores, dropshipping, Liquid theme customization, apps & speed optimization",
      "bn": "শপিফাই স্টোর সেটআপ, ড্রপশিপিং, লিকুইড থিম কাস্টমাইজেশন, পেজফ্লাই ও ক্লায়েন্ট মার্কেটপ্লেস"
    },
    "category": "web",
    "categoryLabel": {
      "en": "Programming & Web",
      "bn": "প্রোগ্রামিং ও ওয়েব"
    },
    "badge": {
      "en": "CERTIFIED",
      "bn": "সার্টিফাইড"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 145,
    "enrolledCount": "320+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "18,000৳",
    "rawFee": 18000,
    "originalFee": "26,000৳",
    "duration": {
      "en": "110 hrs. (3.5 Months)",
      "bn": "১১০ ঘণ্টা (৩.৫ মাস)"
    },
    "classesCount": {
      "en": "36 Classes",
      "bn": "৩৬ টি ক্লাস"
    },
    "image": "/images/course thumbnail/certified shopify specialist.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Sajjad Hossain",
      "designation": {
        "en": "Official Shopify Partner & E-Commerce Consultant",
        "bn": "অফিসিয়াল শপিফাই পার্টনার ও ই-কমার্স কনসালট্যান্ট"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "Built 150+ high-revenue Shopify stores generating millions for global clients.",
        "bn": "আন্তর্জাতিক ক্লায়েন্টদের জন্য ১৫০+ সফল শপিফাই স্টোর তৈরির অভিজ্ঞতা।"
      },
      "experience": "7+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Certified Shopify Specialist mastery course. Learn Shopify store setup, navigation & catalog management, Liquid templating & code customization, dropshipping setup (DSers, CJ Dropshipping), app integrations, high-converting landing page builders (PageFly, GemPages), payment gateways, Shopify SEO & speed optimization and freelance client acquisition.",
      "bn": "শপিফাই স্টোর সেটআপ, প্রফেশনাল থিম কাস্টমাইজেশন, লিকুইড কোডিং, ড্রপশিপিং অটোমেশন, পেজফ্লাই ল্যান্ডিং পেজ ডিজাইন, পেমেন্ট গেটওয়ে, স্পিড অপ্টিমাইজেশন ও আন্তর্জাতিক মার্কেটপ্লেসে শপিফাই এক্সপার্ট হিসেবে ক্যারিয়ার গড়ার কমপ্লিট কোর্স।"
    },
    "fullDescription": {
      "en": "Become a certified in-demand Shopify expert. Learn how to launch branded e-commerce stores from scratch, customize premium Shopify 2.0 themes with Liquid and CSS, install sales-boosting apps, optimize checkout funnels and earn high-ticket earnings on Upwork and Fiverr.",
      "bn": "এই কোর্সে আপনি শপিফাই ২.০ আর্কিটেকচার, ডোমেইন কানেকশন, ড্রপশিপিং প্রোডাক্ট রিসার্চ, স্ট্রাইপ/পেপাল পেমেন্ট গেটওয়ে, রকেট স্পিড অপ্টিমাইজেশন এবং ক্লায়েন্টদের হাই-কনভার্টিং ই-কমার্স স্টোর তৈরি করে দেওয়ার যাবতীয় কৌশল শিখবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Shopify 2.0 & Liquid",
          "bn": "শপিফাই ২.০ ও লিকুইড কোডিং"
        },
        "desc": {
          "en": "Master Shopify theme sections, custom Liquid code, JSON templates & CSS.",
          "bn": "শপিফাই লিকুইড কোড ও সেকশন কাস্টমাইজেশন।"
        },
        "icon": "Code2"
      },
      {
        "id": "cv2",
        "title": {
          "en": "High-Converting PageFly",
          "bn": "পেজফ্লাই ল্যান্ডিং পেজ"
        },
        "desc": {
          "en": "Design modern product pages, upsells, cross-sells and bundles with PageFly.",
          "bn": "হাই-কনভার্টিং প্রোডাক্ট ও ল্যান্ডিং পেজ ডিজাইন।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Dropshipping & Global Setup",
          "bn": "ড্রপশিপিং ও গ্লোবাল পেমেন্ট"
        },
        "desc": {
          "en": "Automate fulfillment with DSers, CJ, Stripe, PayPal and multi-currency.",
          "bn": "ড্রপশিপিং অটোমেশন ও ইন্টারন্যাশনাল পেমেন্ট গেটওয়ে।"
        },
        "icon": "Award"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Build full-featured, responsive Shopify online stores from scratch.",
        "bn": "শুরু থেকে সম্পূর্ণ রেসপনসিভ শপিফাই অনলাইন স্টোর তৈরি করা।"
      },
      {
        "en": "Customize Shopify 2.0 themes using Liquid, JSON templates and CSS.",
        "bn": "লিকুইড ও সিএসএস দিয়ে শপিফাই প্রিমিয়াম থিম কাস্টমাইজ করা।"
      },
      {
        "en": "Design high-converting landing pages using PageFly and GemPages.",
        "bn": "পেজফ্লাই ও জেমপেজেস দিয়ে কনভার্টিং প্রোডাক্ট পেজ তৈরি।"
      },
      {
        "en": "Integrate dropshipping suppliers, automated fulfillment and payment gateways.",
        "bn": "ড্রপশিপিং অটোমেশন ও পেমেন্ট গেটওয়ে ইন্টিগ্রেশন সম্পন্ন করা।"
      },
      {
        "en": "Win Shopify store setup and maintenance gigs on Fiverr & Upwork.",
        "bn": "মার্কেটপ্লেসে শপিফাই স্পেশালিস্ট হিসেবে ক্লায়েন্ট কাজ করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Shopify Store Setup, Catalog & Settings",
          "bn": "মডিউল ১: শপিফাই স্টোর সেটআপ, ক্যাটালগ ও সেটিংস"
        },
        "duration": {
          "en": "12 Classes • 36 Hours",
          "bn": "১২ টি ক্লাস • ৩৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Shopify Partner Account Setup & Store Dashboard Architecture",
            "bn": "শপিফাই পার্টনার অ্যাকাউন্ট সেটআপ ও ড্যাশবোর্ড পরিচিতি"
          },
          {
            "en": "Domain, SSL, Taxes, Shipping Zones & Multi-Currency Setup",
            "bn": "ডোমেইন, এসএসএল, ট্যাক্স, শিপিং জোন ও মাল্টি-কারেন্সি সেটিংস"
          },
          {
            "en": "Product Management: Collections, Variants, Inventory & Metafields",
            "bn": "প্রোডাক্ট ম্যানেজমেন্ট: কালেকশন, ভ্যারিয়েন্টস ও মেটাফিল্ডস"
          },
          {
            "en": "Payment Gateways (Shopify Payments, Stripe, PayPal, Local Gateways)",
            "bn": "পেমেন্ট গেটওয়ে (স্ট্রাইপ, পেপাল, লোকাল মেথডস) ইন্টিগ্রেশন"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Shopify 2.0 Themes, Liquid & Page Builders",
          "bn": "মডিউল ২: শপিফাই ২.০ থিমস, লিকুইড ও পেজ বিল্ডার্স"
        },
        "duration": {
          "en": "12 Classes • 36 Hours",
          "bn": "১২ টি ক্লাস • ৩৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Shopify 2.0 Premium Themes (Dawn, Prestige, Impulse) Customization",
            "bn": "শপিফাই ২.০ প্রিমিয়াম থিম কাস্টমাইজেশন"
          },
          {
            "en": "Liquid Templating Language: Objects, Tags, Filters & Custom Sections",
            "bn": "লিকুইড টেমপ্লেটিং ল্যাঙ্গুয়েজ ও কাস্টম সেকশন কোডিং"
          },
          {
            "en": "PageFly & GemPages Masterclass: High-Converting Sales Funnel Design",
            "bn": "পেজফ্লাই ও জেমপেজেস দিয়ে সেলস ফানেল ও ল্যান্ডিং পেজ ডিজাইন"
          },
          {
            "en": "Essential Shopify Apps (Reviews, Upsells, Abandoned Cart, Live Chat)",
            "bn": "প্রয়োজনীয় শপিফাই অ্যাপস ও রিভিউজ ইন্টিগ্রেশন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Dropshipping, SEO, Speed & Freelance Marketplace",
          "bn": "মডিউল ৩: ড্রপশিপিং, এসইও, স্পিড ও ফ্রিল্যান্স মার্কেটপ্লেস"
        },
        "duration": {
          "en": "12 Classes • 36 Hours",
          "bn": "১২ টি ক্লাস • ৩৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Dropshipping Setup with DSers, CJ Dropshipping & Auto-Fulfillment",
            "bn": "ড্রপশিপিং সেটআপ ও অটোমেটেড অর্ডার ফুলফিলমেন্ট"
          },
          {
            "en": "Shopify Store Speed Optimization (90+ Mobile Score) & Technical SEO",
            "bn": "শপিফাই স্টোর স্পিড অপ্টিমাইজেশন ও টেকনিক্যাল এসইও"
          },
          {
            "en": "Client Store Handover Process, Security & Maintenance Retainers",
            "bn": "ক্লায়েন্ট স্টোর হ্যান্ডওভার প্রসেস ও সিকিউরিটি"
          },
          {
            "en": "Fiverr/Upwork Profile Building, High-Ticket Proposals & Client English",
            "bn": "মার্কেটপ্লেসে শপিফাই গিগ তৈরি, প্রপোজাল রাইটিং ও ক্লায়েন্ট কমিউনিকেশন"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Shopify Certified Specialist Certificate",
        "bn": "শপিফাই সার্টিফাইড স্পেশালিস্ট সার্টিফিকেট"
      },
      {
        "en": "5 Premium Shopify 2.0 Themes Pack ($1,000+ Value)",
        "bn": "৫টি প্রিমিয়াম শপিফাই ২.০ থিম প্যাক"
      },
      {
        "en": "High-Converting PageFly Templates Library",
        "bn": "হাই-কনভার্টিং পেজফ্লাই টেমপ্লেট লাইব্রেরি"
      },
      {
        "en": "1-on-1 Store Review & Marketplace Guidance",
        "bn": "১-অন-১ স্টোর রিভিউ ও মার্কেটপ্লেস গাইডেন্স"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Nazmul Karim",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
        "role": {
          "en": "Shopify Expert",
          "bn": "শপিফাই এক্সপার্ট"
        },
        "rating": 5,
        "comment": {
          "en": "The Liquid customization and PageFly design lessons helped me land a full-time store management contract on Upwork!",
          "bn": "লিকুইড কোডিং ও পেজফ্লাই ডিজাইনের জন্য আপওয়ার্কে ফুল-টাইম ক্লায়েন্ট পেয়েছি।"
        },
        "date": "3 Weeks Ago"
      }
    ]
  },
  {
    "id": "15",
    "slug": "web-development-using-php-laravel",
    "title": {
      "en": "Web Development Using PHP Laravel",
      "bn": "ওয়েব ডেভেলপমেন্ট ইউজিং পিএইচপি লারাভেল"
    },
    "subtitle": {
      "en": "Master Core PHP, MySQL, OOP, Laravel 11 MVC architecture, REST APIs & full e-commerce deployment",
      "bn": "কোর পিএইচপি, মাইএসকিউএল, ওওপি, লারাভেল ১১ এমভিসি ফ্রেমওয়ার্ক ও ফুল প্রজেক্ট ডেভেলপমেন্ট"
    },
    "category": "web",
    "categoryLabel": {
      "en": "Programming & Web",
      "bn": "প্রোগ্রামিং ও ওয়েব"
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
    "ratingsCount": 168,
    "enrolledCount": "380+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "20,000৳",
    "rawFee": 20000,
    "originalFee": "28,000৳",
    "duration": {
      "en": "120 hrs. (3.5 Months)",
      "bn": "১২০ ঘণ্টা (৩.৫ মাস)"
    },
    "classesCount": {
      "en": "40 Classes",
      "bn": "৪০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/php-laravel.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Engr. Monirul Islam",
      "designation": {
        "en": "Principal Laravel Architect & Enterprise Backend Lead",
        "bn": "প্রিন্সিপাল লারাভেল আর্কিটেক্ট ও এন্টারপ্রাইজ ব্যাকএন্ড লিড"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "9+ years developing robust ERP, FinTech and custom Laravel applications for global companies.",
        "bn": "ইআরপি, ফিনটেক ও কাস্টম লারাভেল অ্যাপ্লিকেশনে ৯+ বছরের অভিজ্ঞতা।"
      },
      "experience": "9+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Professional Web Development Using PHP Laravel. Learn Core PHP & Object-Oriented Programming (OOP), MySQL relational database design, Laravel 11 architecture, Blade templating & controllers, Eloquent ORM & migrations, authentication & authorization (Breeze/Sanctum), RESTful API development, full e-commerce project with payment gateway, CPanel & VPS server deployment.",
      "bn": "কোর পিএইচপি, ওওপি, মাইএসকিউএল ডাটাবেস ডিজাইন, লারাভেল ১১ এমভিসি আর্কিটেকচার, ব্লেড টেমপ্লেট, ইলোকেন্ট ওআরএম, অথেনটিকেশন, রেস্ট এপিআই, বিকাশ/নগদ পেমেন্ট গেটওয়ে সহ পূর্ণাঙ্গ ই-কমার্স প্রজেক্ট এবং সার্ভার ডেপ্লয়মেন্ট শেখার প্রফেশনাল কোর্স।"
    },
    "fullDescription": {
      "en": "PHP and Laravel power millions of robust business web applications worldwide. This course takes you from fundamental PHP programming to architecting enterprise-grade web portals, multi-auth systems, payment integrations and high-performance REST APIs.",
      "bn": "এই কোর্সে আপনি পিএইচপি ও লারাভেলের বেসিক থেকে শুরু করে ডাটাবেস অপ্টিমাইজেশন, এপিআই ডেভেলপমেন্ট, সিকিউরিটি এবং লোকাল ও আন্তর্জাতিক সফটওয়্যার কোম্পানিতে লারাভেল ডেভেলপার হিসেবে চাকরির সম্পূর্ণ প্রস্তুতি পাবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Core PHP & OOP",
          "bn": "কোর পিএইচপি ও ওওপি"
        },
        "desc": {
          "en": "Master object-oriented programming, design patterns, PDO and MVC basics.",
          "bn": "অবজেক্ট ওরিয়েন্টেড পিএইচপি ও এমভিসি প্যাটার্ন।"
        },
        "icon": "Code2"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Laravel 11 & Eloquent",
          "bn": "লারাভেল ১১ ও ইলোকেন্ট ওআরএম"
        },
        "desc": {
          "en": "Eloquent relationships, migrations, seeders, queues, events and Sanctum APIs.",
          "bn": "লারাভেল আর্কিটেকচার ও ডেটাবেস রিলেশনশিপ।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Full E-Commerce Project",
          "bn": "কমপ্লিট ই-কমার্স প্রজেক্ট"
        },
        "desc": {
          "en": "Build a complete multi-vendor store with payment gateways, PDF invoices & admin panel.",
          "bn": "পেমেন্ট গেটওয়ে ও ইনভয়েস সহ ফুল ই-কমার্স প্রজেক্ট।"
        },
        "icon": "Server"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Write clean object-oriented PHP and design normalized MySQL databases.",
        "bn": "ক্লিন ওওপি পিএইচপি কোড লেখা এবং মাইএসকিউএল ডেটাবেস ডিজাইন করা।"
      },
      {
        "en": "Develop modular web applications using the Laravel 11 MVC framework.",
        "bn": "লারাভেল ১১ ফ্রেমওয়ার্ক দিয়ে স্কেলেবল ওয়েব অ্যাপ তৈরি করা।"
      },
      {
        "en": "Implement multi-guard authentication, role-based access control (RBAC) and policies.",
        "bn": "রোল-বেসড ইউজার এক্সেস ও পারমিশন সিস্টেম তৈরি করা।"
      },
      {
        "en": "Build secure RESTful APIs and integrate frontend React or mobile apps.",
        "bn": "লারাভেল স্যাঙ্কটাম দিয়ে সিকিউর রেস্ট এপিআই তৈরি করা।"
      },
      {
        "en": "Deploy Laravel applications to CPanel and Ubuntu Linux VPS with SSL.",
        "bn": "সিপ্যানেল ও লিনাক্স ভিপিএস সার্ভারে লাইভ ডেপ্লয়মেন্ট সম্পন্ন করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Core PHP, MySQL & OOP Architecture",
          "bn": "মডিউল ১: কোর পিএইচপি, মাইএসকিউএল ও ওওপি আর্কিটেকচার"
        },
        "duration": {
          "en": "12 Classes • 36 Hours",
          "bn": "১২ টি ক্লাস • ৩৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Core PHP Fundamentals: Syntax, Superglobals, Sessions, Cookies & Forms",
            "bn": "কোর পিএইচপি বেসিকস: সেশন, কুকিজ ও ফর্ম প্রসেসিং"
          },
          {
            "en": "MySQL Database Design: Normalization, Joins, Indexing & PDO Prepared Statements",
            "bn": "মাইএসকিউএল ডাটাবেস ডিজাইন: জয়েনস ও পিডিও সিকিউরিটি"
          },
          {
            "en": "Object-Oriented PHP: Classes, Inheritance, Polymorphism, Traits & Namespaces",
            "bn": "অবজেক্ট ওরিয়েন্টেড পিএইচপি: ক্লাসেস, ইনহেরিট্যান্স ও ট্রেটস"
          },
          {
            "en": "MVC Design Pattern from Scratch with Composer Autoloading",
            "bn": "কম্পোজার অটোলোডিং সহ কাস্টম এমভিসি প্যাটার্ন তৈরি"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Laravel 11 Core, Routing, Blade & Eloquent ORM",
          "bn": "মডিউল ২: লারাভেল ১১ কোর, রাউটিং, ব্লেড ও ইলোকেন্ট ওআরএম"
        },
        "duration": {
          "en": "14 Classes • 42 Hours",
          "bn": "১৪ টি ক্লাস • ৪২ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Laravel 11 Architecture, Directory Structure, Artisan CLI & Environment",
            "bn": "লারাভেল ১১ আর্কিটেকচার ও আর্টিসান সিএলআই"
          },
          {
            "en": "Routing, Controllers, Middleware & Request Validation",
            "bn": "রাউটিং, কন্ট্রোলারস, মিডলওয়্যার ও রিকোয়েস্ট ভ্যালিডেশন"
          },
          {
            "en": "Blade Templating Engine, Components, Layouts & Assets Bundling",
            "bn": "ব্লেড টেমপ্লেটিং ইঞ্জিন, কম্পোনেন্টস ও ভাইট এসেটস"
          },
          {
            "en": "Eloquent ORM: Migrations, Relationships (One-to-Many, Many-to-Many), Seeders & Factories",
            "bn": "ইলোকেন্ট ওআরএম: মাইগ্রেশনস, ডেটাবেস রিলেশনস ও সিডার্স"
          },
          {
            "en": "Authentication & Authorization (Laravel Breeze, Jetstream, Roles & Permissions)",
            "bn": "অথেনটিকেশন ও রোল-বেসড এক্সেস কন্ট্রোল (RBAC)"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Full E-Commerce Project, APIs & Deployment",
          "bn": "মডিউল ৩: ফুল ই-কমার্স প্রজেক্ট, এপিআই ও ডেপ্লয়মেন্ট"
        },
        "duration": {
          "en": "14 Classes • 42 Hours",
          "bn": "১৪ টি ক্লাস • ৪২ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Building a Full E-Commerce Platform with Cart, Checkout & Admin Dashboard",
            "bn": "কার্ট, চেকআউট ও অ্যাডমিন প্যানেল সহ ফুল ই-কমার্স প্ল্যাটফর্ম"
          },
          {
            "en": "Payment Gateway Integration (bKash, SSLCommerz, Stripe) & PDF Invoices",
            "bn": "পেমেন্ট গেটওয়ে ইন্টিগ্রেশন (বিকাশ, এসএসএলকমার্জ, স্ট্রাইপ)"
          },
          {
            "en": "REST API Development with Laravel Sanctum & Postman Testing",
            "bn": "লারাভেল স্যাঙ্কটাম দিয়ে রেস্ট এপিআই ডেভেলপমেন্ট"
          },
          {
            "en": "Deployment to CPanel & Ubuntu VPS (Nginx, MySQL, SSL, Queue Workers)",
            "bn": "সিপ্যানেল ও উবুন্টু ভিপিএস সার্ভারে লাইভ ডেপ্লয়মেন্ট"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Government Endorsed Certificate",
        "bn": "সরকারি অনুমোদিত সার্টিফিকেট"
      },
      {
        "en": "Complete Source Code of Full E-Commerce Project",
        "bn": "ফুল ই-কমার্স প্রজেক্টের সম্পূর্ণ সোর্স কোড"
      },
      {
        "en": "CPanel & VPS Server Deployment Practical Access",
        "bn": "সিপ্যানেল ও ভিপিএস সার্ভার ডেপ্লয়মেন্ট এক্সেস"
      },
      {
        "en": "Job Preparation & IT Company Placement Assistance",
        "bn": "সফটওয়্যার কোম্পানিতে চাকরি প্রস্তুতির সহায়তা"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Arifur Rahman",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "role": {
          "en": "Laravel Developer",
          "bn": "লারাভেল ডেভেলপার"
        },
        "rating": 5,
        "comment": {
          "en": "The e-commerce and payment gateway modules are so detailed. Got hired as a junior backend engineer right after graduation.",
          "bn": "ই-কমার্স ও পেমেন্ট গেটওয়ের ক্লাসগুলো অসাধারণ ছিল। কোর্স শেষেই ব্যাকএন্ড ডেভেলপার হিসেবে চাকরি পেয়েছি।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "16",
    "slug": "ccna-routing-switching",
    "title": {
      "en": "CCNA (Cisco Certified Network Associate)",
      "bn": "সিসিএনএ (সিসকো সার্টিফাইড নেটওয়ার্ক অ্যাসোসিয়েট)"
    },
    "subtitle": {
      "en": "Master Cisco 200-301: Routing, Switching, IP Services, Network Security & Automation",
      "bn": "সিসকো ২০০-৩০১ রাউটিং, সুইচিং, আইপিভি৪/আইপিভি৬, এসিএল ও নেটওয়ার্ক অটোমেশন"
    },
    "category": "cloud",
    "categoryLabel": {
      "en": "Networking & IT",
      "bn": "নেটওয়ার্কিং ও আইটি"
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
    "enrolledCount": "340+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "12,000৳",
    "rawFee": 12000,
    "originalFee": "18,000৳",
    "duration": {
      "en": "90 hrs. (3 Months)",
      "bn": "৯০ ঘণ্টা (৩ মাস)"
    },
    "classesCount": {
      "en": "30 Classes",
      "bn": "৩০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/cisco certified network associate.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Engr. M. A. Wahid",
      "designation": {
        "en": "CCIE Certified Principal Network Consultant",
        "bn": "সিসিআইই সার্টিফাইড প্রিন্সিপাল নেটওয়ার্ক কনসালট্যান্ট"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "12+ years in enterprise Cisco network design and data center management.",
        "bn": "সিসকো এন্টারপ্রাইজ নেটওয়ার্কে ১২+ বছরের অভিজ্ঞতা।"
      },
      "experience": "12+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Official Cisco CCNA 200-301 curriculum covering network fundamentals, IPv4/IPv6 addressing & subnetting, routing protocols (OSPF), switching technologies (VLAN, Trunking, STP, EtherChannel), IP services (DHCP, NAT, DNS), network security fundamentals, VPNs and network programmability/automation.",
      "bn": "সিসকো সিসিএনএ ২০০-৩০১ এক্সাম প্রিপারেশন ও প্র্যাকটিক্যাল ল্যাব কোর্স। এতে আইপি সাবনেটিং, ওএসপিএফ রাউটিং, ভি-ল্যান, এসটিপি, পোর্ট সিকিউরিটি, এসিএল এবং এন্টারপ্রাইজ নেটওয়ার্ক আর্কিটেকচার শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Prepare for the globally recognized Cisco CCNA 200-301 certification. Through extensive hands-on labs with Cisco Packet Tracer, GNS3 and real physical Cisco routers/switches, you will master enterprise networking concepts and pass the exam on your first attempt.",
      "bn": "এই কোর্সে আপনি সিসকো সার্টিফাইড নেটওয়ার্ক অ্যাসোসিয়েট হওয়ার জন্য প্রয়োজনীয় থিওরি ও প্র্যাকটিক্যাল ল্যাব সম্পন্ন করবেন এবং কর্পোরেট আইটি ও আইএসপি সেক্টরে নেটওয়ার্ক ইঞ্জিনিয়ার হিসেবে ক্যারিয়ার শুরু করবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "CCNA 200-301 Syllabus",
          "bn": "সিসিএনএ ২০০-৩০১ সিলেবাস"
        },
        "desc": {
          "en": "100% aligned with Cisco official exam blueprint and live lab scenarios.",
          "bn": "সিসকোর অফিসিয়াল সিলেবাস অনুযায়ী পূর্ণাঙ্গ প্রশিক্ষণ।"
        },
        "icon": "Server"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Routing & Switching Labs",
          "bn": "রাউটিং ও সুইচিং ল্যাবস"
        },
        "desc": {
          "en": "Hands-on configuration of OSPF, VLANs, Inter-VLAN routing and Spanning Tree.",
          "bn": "প্যাকেট ট্রেসার ও ফিজিক্যাল ডিভাইসে রিয়েল ল্যাব।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Enterprise Security & ACLs",
          "bn": "এন্টারপ্রাইজ সিকিউরিটি"
        },
        "desc": {
          "en": "Configure Standard/Extended ACLs, Port Security, DHCP Snooping & NAT.",
          "bn": "নেটওয়ার্ক ফায়ারওয়াল ও এক্সেস কন্ট্রোল লিস্ট কনফিগারেশন।"
        },
        "icon": "ShieldCheck"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master IPv4 subnetting (FLSM & VLSM) and IPv6 address architecture.",
        "bn": "আইপিভি৪ সাবনেটিং ও আইপিভি৬ অ্যাড্রেসিংয়ে শতভাগ দক্ষতা।"
      },
      {
        "en": "Configure and troubleshoot Cisco Routers using Single-Area OSPFv2.",
        "bn": "সিসকো রাউটারে ওএসপিএফ রাউটিং প্রটোকল কনফিগার ও ট্রাবলশুট করা।"
      },
      {
        "en": "Implement VLANs, 802.1Q Trunking, VTP, STP and EtherChannel on Switches.",
        "bn": "সিসকো সুইচে ভি-ল্যান, ট্রাংকিং ও এসটিপি কনফিগার করা।"
      },
      {
        "en": "Secure enterprise networks using ACLs, Port Security and Dynamic ARP Inspection.",
        "bn": "এসিএল ও পোর্ট সিকিউরিটি দিয়ে নেটওয়ার্ক সুরক্ষিত রাখা।"
      },
      {
        "en": "Pass the Cisco CCNA 200-301 exam and land network engineer jobs.",
        "bn": "সিসিএনএ ২০০-৩০১ পরীক্ষায় উত্তীর্ণ হয়ে জবে যোগ দেওয়া।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Network Fundamentals & IP Subnetting",
          "bn": "মডিউল ১: নেটওয়ার্ক ফান্ডামেন্টালস ও আইপি সাবনেটিং"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "OSI 7-Layer Model, TCP/IP Protocol Suite & Cabling Types",
            "bn": "ওএসআই ৭-লেয়ার মডেল, টিসিপি/আইপি প্রোটোকল ও ক্যাবলিং"
          },
          {
            "en": "IPv4 Addressing, Binary Math, Classful vs Classless & Subnetting (FLSM/VLSM)",
            "bn": "আইপিভি৪ সাবনেটিং, বাইনারি ও ভিএলএসএম ক্যালকুলেশন"
          },
          {
            "en": "IPv6 Addressing, Global Unicast, Link-Local & SLAAC Configuration",
            "bn": "আইপিভি৬ অ্যাড্রেসিং ও কনফিগারেশন"
          },
          {
            "en": "Cisco IOS CLI Navigation, Basic Router/Switch Configuration & Backups",
            "bn": "সিসকো আইওএস সিএলআই পরিচিতি ও বেসিক রাউটার কনফিগারেশন"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Routing Technologies & Switching Protocols",
          "bn": "মডিউল ২: রাউটিং টেকনোলজিস ও সুইচিং প্রোটোকলস"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Static Routing, Default Routing & Floating Static Routes",
            "bn": "স্ট্যাটিক রাউটিং ও ডিফল্ট রাউটিং কনফিগারেশন"
          },
          {
            "en": "Dynamic Routing with OSPFv2 (Neighbor States, Cost, Metric & DR/BDR)",
            "bn": "ওএসপিএফ রাউটিং প্রটোকল ও নেইবার রিলেশনশিপ"
          },
          {
            "en": "Switching Operations, VLANs, 802.1Q Trunks & Inter-VLAN Routing (ROAS)",
            "bn": "সুইচিং, ভি-ল্যান, ট্রাংকিং ও ইন্টার-ভিল্যান রাউটিং"
          },
          {
            "en": "Spanning Tree Protocol (STP, RSTP, PVST+) & EtherChannel (LACP/PAGP)",
            "bn": "স্প্যানিং ট্রি প্রটোকল (STP) ও ইথারচ্যানেল কনফিগারেশন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: IP Services, Security & Network Automation",
          "bn": "মডিউল ৩: আইপি সার্ভিসেস, সিকিউরিটি ও নেটওয়ার্ক অটোমেশন"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "IP Services: DHCP Server/Relay, DNS, NTP, SNMP & Syslog",
            "bn": "আইপি সার্ভিসেস: ডিএইচসিপি সার্ভার, ডিএনএস ও এসএনএমপি"
          },
          {
            "en": "Network Address Translation (Static NAT, Dynamic NAT & PAT)",
            "bn": "নেটওয়ার্ক অ্যাড্রেস ট্রান্সলেশন (NAT/PAT) কনফিগারেশন"
          },
          {
            "en": "Network Security: Standard & Extended ACLs, Port Security & AAA",
            "bn": "নেটওয়ার্ক সিকিউরিটি: এসিএল, পোর্ট সিকিউরিটি ও এএএ"
          },
          {
            "en": "Network Programmability, REST APIs, JSON, Ansible & CCNA Exam Prep",
            "bn": "নেটওয়ার্ক অটোমেশন, রেস্ট এপিআই ও সিসিএনএ এক্সাম প্রিপারেশন"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Cisco Training Completion Certificate",
        "bn": "সিসকো ট্রেনিং কমপ্লিশন সার্টিফিকেট"
      },
      {
        "en": "CCNA 200-301 Exam Dumps & Practice Simulator",
        "bn": "সিসিএনএ এক্সাম ডাম্পস ও প্র্যাকটিস সিমুলেটর"
      },
      {
        "en": "Physical Cisco Rack Lab Access",
        "bn": "ফিজিক্যাল সিসকো র‍্যাক ল্যাব অ্যাক্সেস"
      },
      {
        "en": "ISP & Enterprise IT Placement Assistance",
        "bn": "আইএসপি ও এন্টারপ্রাইজ আইটি প্লেসমেন্ট সহায়তা"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Zubair Rahman",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
        "role": {
          "en": "Junior Network Engineer",
          "bn": "জুনিয়র নেটওয়ার্ক ইঞ্জিনিয়ার"
        },
        "rating": 5,
        "comment": {
          "en": "Passed my CCNA exam with a 920 score! The lab sessions were identical to the real exam scenarios.",
          "bn": "৯২০ মার্ক পেয়ে সিসিএনএ পাস করেছি! ল্যাব সেশনগুলো অনেক হেল্প করেছে।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "17",
    "slug": "ccnp-enterprise-networking",
    "title": {
      "en": "CCNP (Cisco Certified Network Professional)",
      "bn": "সিসিএনপি (সিসকো সার্টিফাইড নেটওয়ার্ক প্রফেশনাল)"
    },
    "subtitle": {
      "en": "Master Cisco ENCOR 350-401 & ENARSI: Advanced BGP, OSPF, MPLS, SD-WAN, QoS & Automation",
      "bn": "অ্যাডভান্সড বিজিপি, ওএসপিএফ, এমপিএলএস, এসডি-ওয়ান ও সিসকো এন্টারপ্রাইজ কোর আর্কিটেকচার"
    },
    "category": "cloud",
    "categoryLabel": {
      "en": "Networking & IT",
      "bn": "নেটওয়ার্কিং ও আইটি"
    },
    "badge": {
      "en": "ADVANCED",
      "bn": "অ্যাডভান্সড"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 88,
    "enrolledCount": "160+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "40,000৳",
    "rawFee": 40000,
    "originalFee": "55,000৳",
    "duration": {
      "en": "120 hrs. (4 Months)",
      "bn": "১২০ ঘণ্টা (৪ মাস)"
    },
    "classesCount": {
      "en": "40 Classes",
      "bn": "৪০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/cisco certified network professional.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Engr. M. A. Wahid",
      "designation": {
        "en": "CCIE Certified Principal Network Consultant",
        "bn": "সিসিআইই সার্টিফাইড প্রিন্সিপাল নেটওয়ার্ক কনসালট্যান্ট"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "12+ years designing ISP, enterprise Cisco networks and data center infrastructures.",
        "bn": "আইএসপি ও এন্টারপ্রাইজ নেটওয়ার্কে ১২+ বছরের অভিজ্ঞতা।"
      },
      "experience": "12+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Advanced enterprise routing and core architecture program covering Cisco ENCOR 350-401 and ENARSI 300-410. Master dual-stack IPv4/IPv6 enterprise architecture, Advanced OSPF, Multi-protocol BGP (MP-BGP), MPLS VPNs, DMVPN, QoS, Cisco SD-WAN fundamentals and Python network automation.",
      "bn": "সিসকো সিসিএনপি এনকোর ও এনার্সি এক্সাম কারিকুলাম। এতে অ্যাডভান্সড বিজিপি, এমপিএলএস ভিপিএন, ডিএমভিপিএন, কিউওএস, এসডি-ওয়ান এবং এন্টারপ্রাইজ লেভেল ট্রাবলশুটিং শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Step into senior network engineering roles. This 120-hour intensive program equips you with deep enterprise routing knowledge, service provider technologies, high availability protocols (VRRP, HSRP), advanced security infrastructure and programmatic network management.",
      "bn": "এই কোর্সে আপনি টেলিকম ও বড় কর্পোরেট নেটওয়ার্কের কোর রাউটিং, ট্রাফিক ইঞ্জিনিয়ারিং, বিজিপি পলিসি এবং পাইথন অটোমেশন হ্যান্ডস-অন ল্যাবে শিখে সিসকো প্রফেশনাল লেভেল সার্টিফাইড হবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Advanced BGP & MPLS",
          "bn": "অ্যাডভান্সড বিজিপি ও এমপিএলএস"
        },
        "desc": {
          "en": "eBGP, iBGP, route reflectors, AS path manipulation and MPLS Layer 3 VPNs.",
          "bn": "বিজিপি রাউট পলিসি ও এমপিএলএস লেয়ার ৩ ভিপিএন।"
        },
        "icon": "Server"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Cisco SD-WAN & QoS",
          "bn": "সিসকো এসডি-ওয়ান ও কিউওএস"
        },
        "desc": {
          "en": "Software-Defined WAN architecture, vManage, vEdge and QoS queue scheduling.",
          "bn": "এসডি-ওয়ান ও কোয়ালিটি অফ সার্ভিস কনফিগারেশন।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Python Network Automation",
          "bn": "পাইথন নেটওয়ার্ক অটোমেশন"
        },
        "desc": {
          "en": "Automate Cisco IOS-XE devices using Netmiko, RESTCONF and Ansible playbooks.",
          "bn": "নেটমিকো ও আনসিবল দিয়ে নেটওয়ার্ক কনফিগ অটোমেশন।"
        },
        "icon": "Code2"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Architect scalable multi-area OSPF and multi-homed enterprise BGP networks.",
        "bn": "মাল্টি-হোমড এন্টারপ্রাইজ বিজিপি নেটওয়ার্ক আর্কিটেকচার ডিজাইন করা।"
      },
      {
        "en": "Deploy MPLS L3VPNs, DMVPN with IPsec encryption and GRE tunnels.",
        "bn": "এমপিএলএস এল৩ ভিপিএন ও আইপিসেক ডিএমভিপিএন কনফিগার করা।"
      },
      {
        "en": "Implement high availability (HSRP/VRRP), EtherChannel and QoS traffic policies.",
        "bn": "হাই অ্যাভেইলেবিলিটি ও কিউওএস ট্রাফিক পলিসি তৈরি করা।"
      },
      {
        "en": "Understand Cisco SD-WAN components (vManage, vSmart, vBond, vEdge).",
        "bn": "সিসকো এসডি-ওয়ান আর্কিটেকচার ও পলিসি বাস্তবায়ন করা।"
      },
      {
        "en": "Pass Cisco ENCOR (350-401) and ENARSI (300-410) certification exams.",
        "bn": "সিসকো এনকোর ও এনার্সি সার্টিফিকেশন পরীক্ষায় পাস করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Advanced Routing (OSPFv3, EIGRP & Redistribution)",
          "bn": "মডিউল ১: অ্যাডভান্সড রাউটিং (ওএসপিএফ, ইআইজিআরপি ও রিডিস্ট্রিবিউশন)"
        },
        "duration": {
          "en": "12 Classes • 36 Hours",
          "bn": "১২ টি ক্লাস • ৩৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Enterprise Network Architecture & High Availability (HSRP, VRRP, GLBP)",
            "bn": "এন্টারপ্রাইজ নেটওয়ার্ক আর্কিটেকচার ও হাই অ্যাভেইলেবিলিটি"
          },
          {
            "en": "Advanced OSPFv2 & OSPFv3: Multi-Area, LSA Types, Summarization & Authentication",
            "bn": "মাল্টি-এরিয়া ওএসপিএফ, এলএসএ টাইপস ও সামারাইজেশন"
          },
          {
            "en": "Route Redistribution, Route Filtering with Route-Maps, Prefix-Lists & Tags",
            "bn": "রাউট রিডিস্ট্রিবিউশন ও রুট-ম্যাপ ফিল্টারিং"
          },
          {
            "en": "Policy-Based Routing (PBR) & IP SLA Tracking",
            "bn": "পলিসি বেসড রাউটিং (PBR) ও আইপি এসএলএ ট্র্যাকিং"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Border Gateway Protocol (BGP) & MPLS VPNs",
          "bn": "মডিউল ২: বর্ডার গেটওয়ে প্রোটোকল (BGP) ও এমপিএলএস ভিপিএন"
        },
        "duration": {
          "en": "14 Classes • 42 Hours",
          "bn": "১৪ টি ক্লাস • ৪২ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "BGP Fundamentals: eBGP, iBGP, Peering, Path Attributes & Best Path Selection",
            "bn": "বিজিপি ফান্ডামেন্টালস, পিয়ারিং ও পাথ সিলেকশন অ্যালগরিদম"
          },
          {
            "en": "Advanced BGP: Route Reflectors, Confederations, Communities & AS-Path Prepending",
            "bn": "অ্যাডভান্সড বিজিপি: রাউট রিফ্লেক্টর্স ও কমিউনিটিস"
          },
          {
            "en": "MPLS Architecture: Label Distribution Protocol (LDP), VRF & MP-BGP",
            "bn": "এমপিএলএস আর্কিটেকচার, এলডিপি ও ভিআরএফ"
          },
          {
            "en": "MPLS Layer 3 VPN Deployment & Internet Access Configuration",
            "bn": "এমপিএলএস লেয়ার ৩ ভিপিএন ডেপ্লয়মেন্ট"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: VPNs, SD-WAN, QoS & Programmability",
          "bn": "মডিউল ৩: ভিপিএন, এসডি-ওয়ান, কিউওএস ও অটোমেশন"
        },
        "duration": {
          "en": "14 Classes • 42 Hours",
          "bn": "১৪ টি ক্লাস • ৪২ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "DMVPN (Dynamic Multipoint VPN) with IPsec Crypto Profiles",
            "bn": "ডিএমভিপিএন ও আইপিসেক এনক্রিপশন"
          },
          {
            "en": "Cisco SD-WAN Overlay, Control Plane & Data Plane Architecture",
            "bn": "সিসকো এসডি-ওয়ান আর্কিটেকচার ও পলিসি"
          },
          {
            "en": "Quality of Service (QoS): Classification, Marking, Queuing & Policing",
            "bn": "কোয়ালিটি অফ সার্ভিস (QoS) কনফিগারেশন"
          },
          {
            "en": "Python for Network Engineers: Netmiko, RESTCONF, YANG Models & ENCOR Prep",
            "bn": "পাইথন নেটওয়ার্ক অটোমেশন ও এনকোর এক্সাম প্রিপারেশন"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "CCNP Enterprise Course Completion Certificate",
        "bn": "সিসকো সিসিএনপি কোর্স কমপ্লিশন সার্টিফিকেট"
      },
      {
        "en": "GNS3 / EVE-NG Advanced Lab Topology Files",
        "bn": "ইভ-এনজি অ্যাডভান্সড ল্যাব টপোলজি ফাইলস"
      },
      {
        "en": "ENCOR 350-401 & ENARSI 300-410 Dumps",
        "bn": "এনকোর ও এনার্সি এক্সাম ডাম্পস"
      },
      {
        "en": "Senior Network Engineer Interview Coaching",
        "bn": "সিনিয়র নেটওয়ার্ক ইঞ্জিনিয়ার জব ইন্টারভিউ কোচিং"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Faridur Islam",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
        "role": {
          "en": "Senior Network Specialist",
          "bn": "সিনিয়র নেটওয়ার্ক স্পেশালিস্ট"
        },
        "rating": 5,
        "comment": {
          "en": "The BGP and MPLS sessions on EVE-NG were world class. Helped me land a Team Lead role at an ISP.",
          "bn": "ইভ-এনজিতে বিজিপি ও এমপিএলএস এর ল্যাবগুলো বিশ্বমানের ছিল। আইএসপিতে টিম লিড হিসেবে জয়েন করেছি।"
        },
        "date": "1 Month Ago"
      }
    ]
  },
  {
    "id": "18",
    "slug": "red-hat-linux-rhcsa",
    "title": {
      "en": "Red Hat Linux (RHCSA)",
      "bn": "রেড হ্যাট লিনাক্স (RHCSA)"
    },
    "subtitle": {
      "en": "Master Red Hat Enterprise Linux 9 (RHEL 9): RHCSA EX200, system administration, storage, SELinux & bash",
      "bn": "রেড হ্যাট এন্টারপ্রাইজ লিনাক্স ৯, সিস্টেম অ্যাডমিনিস্ট্রেশন, এলভিএম, এসইলিনাক্স ও ব্যাশ স্ক্রিপ্টিং"
    },
    "category": "cloud",
    "categoryLabel": {
      "en": "Networking & IT",
      "bn": "নেটওয়ার্কিং ও আইটি"
    },
    "badge": {
      "en": "CERTIFIED",
      "bn": "সার্টিফাইড"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 140,
    "enrolledCount": "290+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "18,000৳",
    "rawFee": 18000,
    "originalFee": "25,000৳",
    "duration": {
      "en": "90 hrs. (3 Months)",
      "bn": "৯০ ঘণ্টা (৩ মাস)"
    },
    "classesCount": {
      "en": "30 Classes",
      "bn": "৩০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/red hat lynux.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Engr. Monjurul Karim",
      "designation": {
        "en": "Red Hat Certified Architect (RHCA) & DevOps Lead",
        "bn": "রেড হ্যাট সার্টিফাইড আর্কিটেক্ট ও ডেভঅপ্স লিড"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "10+ years managing enterprise Red Hat Linux, cloud infrastructure and automation.",
        "bn": "এন্টারপ্রাইজ লিনাক্স ও ক্লাউড ইনফ্রাস্ট্রাকচারে ১০+ বছরের অভিজ্ঞতা।"
      },
      "experience": "10+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Official Red Hat Certified System Administrator (RHCSA EX200) course on RHEL 9. Learn command-line navigation, file permissions, users & groups, LVM storage management, process control (systemd), networking, firewall-cmd, SELinux security, shell scripting and automated package management with DNF.",
      "bn": "রেড হ্যাট এন্টারপ্রাইজ লিনাক্স ৯ (RHEL 9) ও আরএইচসিএসএ EX200 এক্সাম প্রিপারেশন কোর্স। এতে লিনাক্স সিএলআই, ইউজার পারমিশনস, এলভিএম স্টোরেজ, সিস্টেমডি সার্ভিসেস, এসইলিনাক্স ও ব্যাশ অটোমেশন শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Linux powers over 90% of the world's cloud servers, supercomputers and enterprise infrastructures. This 90-hour hands-on training prepares you to become an industry-ready Linux System Administrator capable of managing mission-critical RHEL, CentOS, Rocky Linux and Ubuntu servers.",
      "bn": "এই কোর্সে আপনি রিয়েল সার্ভার এনভায়রনমেন্টে লিনাক্স ইনস্টলেশন, ইউজার ম্যানেজমেন্ট, ডিস্ক পার্টিশন ও এলভিএম, ফায়ারওয়াল, এসএসএইচ হার্ডেনিং এবং ব্যাশ স্ক্রিপ্টিং দিয়ে সিস্টেম অটোমেশন শিখবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "RHCSA EX200 Syllabus",
          "bn": "আরএইচসিএসএ EX200 সিলেবাস"
        },
        "desc": {
          "en": "100% hands-on training aligned with Red Hat official practical exam tasks.",
          "bn": "রেড হ্যাটের অফিসিয়াল প্র্যাকটিক্যাল সিলেবাস অনুযায়ী ল্যাব।"
        },
        "icon": "Server"
      },
      {
        "id": "cv2",
        "title": {
          "en": "LVM Storage & SELinux",
          "bn": "এলভিএম স্টোরেজ ও এসইলিনাক্স"
        },
        "desc": {
          "en": "Create volume groups, logical volumes, file systems and enforce SELinux policies.",
          "bn": "লজিক্যাল ভলিউম স্টোরেজ ও সিকিউরিটি কনফিগারেশন।"
        },
        "icon": "ShieldCheck"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Bash Scripting & Automation",
          "bn": "ব্যাশ স্ক্রিপ্টিং ও অটোমেশন"
        },
        "desc": {
          "en": "Automate system monitoring, log rotation, cron jobs and backup pipelines.",
          "bn": "ক্রন জবস ও ব্যাশ স্ক্রিপ্টিং দিয়ে কাজ অটোমেশন।"
        },
        "icon": "Code2"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master the Linux command line interface (CLI) and file system hierarchy.",
        "bn": "লিনাক্স টার্মিনাল ও ফাইল সিস্টেমে সম্পূর্ণ কমান্ড দক্ষতা।"
      },
      {
        "en": "Manage user accounts, group policies, ACLs and sudo access controls.",
        "bn": "ইউজার অ্যাকাউন্ট, পারমিশনস ও সুডো এক্সেস পরিচালনা করা।"
      },
      {
        "en": "Configure Logical Volume Management (LVM), Stratis and VDO storage.",
        "bn": "এলভিএম দিয়ে ডাইনামিক স্টোরেজ ম্যানেজমেন্ট কনফিগার করা।"
      },
      {
        "en": "Secure servers with Firewalld, SSH key hardening and SELinux boolean rules.",
        "bn": "ফায়ারওয়াল ও এসইলিনাক্স দিয়ে লিনাক্স সার্ভার সিকিউর করা।"
      },
      {
        "en": "Pass the Red Hat RHCSA EX200 exam and work as a Linux System Admin.",
        "bn": "আরএইচসিএসএ পরীক্ষায় পাস করে লিনাক্স অ্যাডমিন হিসেবে জব পাওয়া।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: RHEL 9 Installation, CLI & User Management",
          "bn": "মডিউল ১: লিনাক্স ইনস্টলেশন, সিএলআই ও ইউজার ম্যানেজমেন্ট"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "RHEL 9 Installation, Cockpit Web Console & Terminal Navigation",
            "bn": "আরএইচইএল ৯ ইনস্টলেশন ও টার্মিনাল নেভিগেশন"
          },
          {
            "en": "File Management, Standard I/O Redirection, Pipes & Grep/Awk Basics",
            "bn": "ফাইল ম্যানেজমেন্ট ও পাইপ/গ্রেপ কমান্ডস"
          },
          {
            "en": "User and Group Administration, Password Aging & Sudo Configuration",
            "bn": "ইউজার ও গ্রুপ অ্যাডমিনিস্ট্রেশন এবং সুডো সেটিংস"
          },
          {
            "en": "Linux File Permissions (Chmod, Chown, SUID, SGID, Sticky Bit) & ACLs",
            "bn": "ফাইল পারমিশনস, স্পেশাল পারমিশনস ও এসিএল"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Storage (LVM), Processes & Software Packages",
          "bn": "মডিউল ২: এলভিএম স্টোরেজ, প্রসেস ও প্যাকেজ ম্যানেজমেন্ট"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Disk Partitioning (MBR/GPT), File Systems (XFS, Ext4) & Mounting (/etc/fstab)",
            "bn": "ডিস্ক পার্টিশনিং, ফাইল সিস্টেম ও অটো মাউন্টিং"
          },
          {
            "en": "Logical Volume Management (LVM): Physical Volumes, Volume Groups & Logical Volumes",
            "bn": "এলভিএম: ফিজিক্যাল ভলিউম, ভলিউম গ্রুপ ও রিসাইজিং"
          },
          {
            "en": "Process Management, Systemd Targets, Services & Cron / At Automation",
            "bn": "সিস্টেমডি সার্ভিসেস ও ক্রন জবস অটোমেশন"
          },
          {
            "en": "Package Management: RPM, DNF, Repositories & AppStreams",
            "bn": "প্যাকেজ ম্যানেজমেন্ট: আরপিএম ও ডিএনএফ রিপোজিটরি"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Networking, Firewalls, SELinux & RHCSA Exam Prep",
          "bn": "মডিউল ৩: নেটওয়ার্কিং, ফায়ারওয়াল, এসইলিনাক্স ও আরএইচসিএসএ এক্সাম"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Network Configuration (nmcli, nmtui), Hostname, DNS & SSH Hardening",
            "bn": "নেটওয়ার্ক কনফিগারেশন ও এসএসএইচ হার্ডেনিং"
          },
          {
            "en": "Firewall Management: Firewall-cmd Zones, Ports, Rich Rules & NAT",
            "bn": "ফায়ারওয়াল-সিএমডি ও রিচ রুলস কনফিগারেশন"
          },
          {
            "en": "SELinux Security: Enforcing, Permissive, Contexts, Booleans & Port Labeling",
            "bn": "এসইলিনাক্স সিকিউরিটি ও কনটেক্সট ট্রাবলশুটিং"
          },
          {
            "en": "Bash Shell Scripting for System Tasks & Full RHCSA EX200 Mock Exam",
            "bn": "ব্যাশ স্ক্রিপ্টিং ও আরএইচসিএসএ EX200 মক টেস্ট"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Red Hat Training Certificate",
        "bn": "রেড হ্যাট ট্রেনিং সার্টিফিকেট"
      },
      {
        "en": "RHCSA EX200 Full Exam Simulation Labs",
        "bn": "আরএইচসিএসএ ফুল এক্সাম সিমুলেশন ল্যাবস"
      },
      {
        "en": "RHEL 9 Virtual Machine ISO & Config Scripts",
        "bn": "ভার্চুয়াল মেশিন আইএসও ও কনফিগ স্ক্রিপ্টস"
      },
      {
        "en": "Linux System Admin Job Referral Program",
        "bn": "লিনাক্স সিস্টেম অ্যাডমিন জব রেফারেল"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Saiful Islam",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "role": {
          "en": "Linux System Admin",
          "bn": "লিনাক্স সিস্টেম অ্যাডমিন"
        },
        "rating": 5,
        "comment": {
          "en": "Passed the RHCSA 9 exam on my first attempt with 283/300! The LVM and SELinux classes were exact.",
          "bn": "প্রথমবারেই আরএইচসিএসএ ৯ পরীক্ষায় ২৮৩ নম্বর পেয়ে পাস করেছি।"
        },
        "date": "3 Weeks Ago"
      }
    ]
  },
  {
    "id": "19",
    "slug": "azure-cloud-solutions",
    "title": {
      "en": "Microsoft Azure Cloud",
      "bn": "মাইক্রোসফট অ্যাজুর ক্লাউড"
    },
    "subtitle": {
      "en": "Master Microsoft Azure (AZ-900 & AZ-104): Cloud architecture, Virtual Machines, VNets, Entra ID & Storage",
      "bn": "মাইক্রোসফট অ্যাজুর ক্লাউড আর্কিটেকচার, ভার্চুয়াল মেশিন, ভি-নেট, এন্ট্রা আইডি ও এজেড-১০৪"
    },
    "category": "cloud",
    "categoryLabel": {
      "en": "Networking & IT",
      "bn": "নেটওয়ার্কিং ও আইটি"
    },
    "badge": {
      "en": "CERTIFIED",
      "bn": "সার্টিফাইড"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 120,
    "enrolledCount": "250+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "30,000৳",
    "rawFee": 30000,
    "originalFee": "42,000৳",
    "duration": {
      "en": "90 hrs. (3 Months)",
      "bn": "৯০ ঘণ্টা (৩ মাস)"
    },
    "classesCount": {
      "en": "30 Classes",
      "bn": "৩০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/microsoft azure cloud.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Engr. Towhidul Alam",
      "designation": {
        "en": "Microsoft Certified Azure Solutions Architect Expert",
        "bn": "মাইক্রোসফট সার্টিফাইড অ্যাজুর সলিউশনস আর্কিটেক্ট"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "8+ years migrating enterprise workloads to Microsoft Azure cloud infrastructure.",
        "bn": "মাইক্রোসফট অ্যাজুর ক্লাউড মাইগ্রেশন ও আর্কিটেকচারে ৮+ বছরের অভিজ্ঞতা।"
      },
      "experience": "8+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Comprehensive Microsoft Azure Cloud Administration (AZ-900 & AZ-104). Learn Azure subscriptions & resource groups, Azure Virtual Machines & Scale Sets, Azure Virtual Networks (VNet) & Peering, Azure Active Directory / Microsoft Entra ID, Azure Blob & File Storage, Azure App Services, Monitoring & Cost Governance.",
      "bn": "মাইক্রোসফট অ্যাজুর ক্লাউড অ্যাডমিনিস্ট্রেশন (AZ-900 ও AZ-104) কোর্স। এতে অ্যাজুর ভার্চুয়াল মেশিন, ভার্চুয়াল নেটওয়ার্কিং, এন্ট্রা আইডি আইএএম, অ্যাজুর স্টোরেজ, লোড ব্যালেন্সার এবং ব্যাকআপ ও ক্লাউড সিকিউরিটি শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Become an in-demand Microsoft Azure Cloud Administrator. Learn how to manage compute, networking, storage, identity and security across the global Microsoft Azure cloud platform with live Azure Portal and PowerShell / CLI labs.",
      "bn": "এই কোর্সে আপনি মাইক্রোসফট অ্যাজুরের গ্লোবাল ইনফ্রাস্ট্রাকচারে হাই-অ্যাভেইলেবল ভার্চুয়াল মেশিন তৈরি, ক্লাউড নেটওয়ার্কিং, এন্টারপ্রাইজ সিকিউরিটি এবং এজেড-১০৪ সার্টিফিকেশন পরীক্ষার প্রস্তুতি সম্পন্ন করবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "AZ-104 Certified Admin",
          "bn": "এজেড-১০৪ সার্টিফাইড অ্যাডমিন"
        },
        "desc": {
          "en": "Complete coverage of Azure Administrator Associate exam domains and scenarios.",
          "bn": "মাইক্রোসফট অ্যাজুর এজেড-১০৪ পরীক্ষার পূর্ণ সিলেবাস।"
        },
        "icon": "Cloud"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Virtual Networks & Security",
          "bn": "ভার্চুয়াল নেটওয়ার্কিং ও সিকিউরিটি"
        },
        "desc": {
          "en": "Configure VNets, Subnets, NSGs, Azure Firewall, VPN Gateway & VNet Peering.",
          "bn": "ভি-নেট, এনএসজি ও অ্যাজুর ফায়ারওয়াল কনফিগারেশন।"
        },
        "icon": "ShieldCheck"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Entra ID & Identity Access",
          "bn": "এন্ট্রা আইডি ও আইএএম"
        },
        "desc": {
          "en": "Manage RBAC roles, MFA, Conditional Access and hybrid directory sync.",
          "bn": "রোল-বেসড এক্সেস কন্ট্রোল ও ইউজার সিকিউরিটি।"
        },
        "icon": "Users"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Manage Azure subscriptions, governance policies and cost optimization.",
        "bn": "অ্যাজুর সাবস্ক্রিপশন, পলিসিজ ও কস্ট ম্যানেজমেন্ট পরিচালনা করা।"
      },
      {
        "en": "Deploy and configure Azure Virtual Machines, Storage Accounts & App Services.",
        "bn": "অ্যাজুর ভিএম, স্টোরেজ অ্যাকাউন্ট ও অ্যাপ সার্ভিসেস ডেপ্লয় করা।"
      },
      {
        "en": "Design and implement secure Azure Virtual Networks with VPN Gateways.",
        "bn": "অ্যাজুর ভি-নেট ও ভিপিএন গেটওয়ে দিয়ে সিকিউর ক্লাউড নেটওয়ার্ক তৈরি।"
      },
      {
        "en": "Configure Microsoft Entra ID (Azure AD), users, groups and RBAC permissions.",
        "bn": "মাইক্রোসফট এন্ট্রা আইডি ও আরব্যাক পারমিশনস কনফিগার করা।"
      },
      {
        "en": "Pass the Microsoft AZ-104 Azure Administrator exam.",
        "bn": "মাইক্রোসফট AZ-104 সার্টিফিকেশন পরীক্ষায় উত্তীর্ণ হওয়া।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Azure Governance, Identity (Entra ID) & Subscriptions",
          "bn": "মডিউল ১: অ্যাজুর গভর্নেন্স, এন্ট্রা আইডি ও সাবস্ক্রিপশনস"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Cloud Computing Fundamentals, Azure Architecture & Datacenter Regions",
            "bn": "ক্লাউড কম্পিউটিং বেসিকস ও অ্যাজুর রিজিয়নস"
          },
          {
            "en": "Microsoft Entra ID (Azure AD): Users, Groups, MFA & Self-Service Password Reset",
            "bn": "এন্ট্রা আইডি: ইউজার্স, গ্রুপস ও এমএফএ সেটআপ"
          },
          {
            "en": "Role-Based Access Control (RBAC), Custom Roles & Access Reviews",
            "bn": "রোল-বেসড এক্সেস কন্ট্রোল (RBAC) ও পারমিশনস"
          },
          {
            "en": "Azure Resource Manager (ARM), Resource Groups, Tags & Azure Policy",
            "bn": "অ্যাজুর রিসোর্স ম্যানেজার ও পলিসি গভর্নেন্স"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Azure Compute, Virtual Machines & Storage",
          "bn": "মডিউল ২: অ্যাজুর কম্পিউট, ভার্চুয়াল মেশিন ও স্টোরেজ"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Azure Virtual Machines Deployment (Windows & Linux), Sizing & Disks",
            "bn": "অ্যাজুর ভার্চুয়াল মেশিন ক্রিয়েশন ও ডিস্ক ম্যানেজমেন্ট"
          },
          {
            "en": "Virtual Machine Scale Sets (VMSS), Availability Zones & Auto-scaling",
            "bn": "ভার্চুয়াল মেশিন স্কেল সেটস ও অটো-স্কেলিং"
          },
          {
            "en": "Azure Storage Accounts: Blob, File Shares, Tables, Queues & Lifecycle Management",
            "bn": "অ্যাজুর স্টোরেজ অ্যাকাউন্টস ও ব্লব লাইফসাইকেল"
          },
          {
            "en": "Azure Files, Storage Explorer & Azure Backup / Disaster Recovery",
            "bn": "অ্যাজুর ফাইল শেয়ার্স ও ডিজাস্টার রিকভারি"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Virtual Networking, Security & AZ-104 Exam Prep",
          "bn": "মডিউল ৩: ভার্চুয়াল নেটওয়ার্কিং, সিকিউরিটি ও এজেড-১০৪ এক্সাম"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Azure Virtual Networks (VNet), Subnets, IP Addressing & Route Tables",
            "bn": "অ্যাজুর ভার্চুয়াল নেটওয়ার্কস, সাবনেটস ও রুট টেবিলস"
          },
          {
            "en": "Network Security Groups (NSG), Application Security Groups (ASG) & Azure Firewall",
            "bn": "নেটওয়ার্ক সিকিউরিটি গ্রুপস (NSG) ও ফায়ারওয়াল"
          },
          {
            "en": "VNet Peering, Azure VPN Gateway (Point-to-Site & Site-to-Site) & ExpressRoute",
            "bn": "ভি-নেট পিয়ারিং ও ভিপিএন গেটওয়ে কনফিগারেশন"
          },
          {
            "en": "Azure Monitor, Log Analytics, Alerts & AZ-104 Certification Practice Exam",
            "bn": "অ্যাজুর মনিটর ও AZ-104 সার্টিফিকেশন মক টেস্ট"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Microsoft Azure Training Certificate",
        "bn": "মাইক্রোসফট অ্যাজুর ট্রেনিং সার্টিফিকেট"
      },
      {
        "en": "AZ-104 & AZ-900 Exam Dumps & Lab Scenarios",
        "bn": "AZ-104 এক্সাম ডাম্পস ও ল্যাব গাইড"
      },
      {
        "en": "Azure Free Tier Lab Setup Assistance",
        "bn": "অ্যাজুর ফ্রি টিয়ার ল্যাব অ্যাকাউন্ট সেটআপ সাপোর্ট"
      },
      {
        "en": "Cloud Engineer Job Placement Assistance",
        "bn": "ক্লাউড ইঞ্জিনিয়ার জব প্লেসমেন্ট সাপোর্ট"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Hasibul Hasan",
        "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100",
        "role": {
          "en": "Azure Cloud Administrator",
          "bn": "অ্যাজুর ক্লাউড অ্যাডমিনিস্ট্রেটর"
        },
        "rating": 5,
        "comment": {
          "en": "The VNet Peering and Entra ID RBAC labs made the AZ-104 exam effortless to pass!",
          "bn": "ভি-নেট ও এন্ট্রা আইডির ল্যাবগুলো অসাধারণ ছিল। AZ-104 পরীক্ষায় সহজেই পাস করেছি।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "20",
    "slug": "aws-cloud-architect",
    "title": {
      "en": "AWS (Amazon Web Services)",
      "bn": "এডব্লিউএস (আমাজন ওয়েব সার্ভিসেস)"
    },
    "subtitle": {
      "en": "Master AWS Solutions Architect: EC2, S3, VPC, IAM, RDS, Lambda, CloudWatch & Auto Scaling",
      "bn": "আমাজন ওয়েব সার্ভিসেস ক্লাউড আর্কিটেকচার, ইসি২, এস৩, ভিপিসি ও সার্ভারলেস"
    },
    "category": "cloud",
    "categoryLabel": {
      "en": "Networking & IT",
      "bn": "নেটওয়ার্কিং ও আইটি"
    },
    "badge": {
      "en": "CERTIFIED",
      "bn": "সার্টিফাইড"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 150,
    "enrolledCount": "310+ Enrolled",
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
    "image": "/images/course thumbnail/amazon web services.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Engr. Towhidul Alam",
      "designation": {
        "en": "AWS Certified Solutions Architect Professional",
        "bn": "এডব্লিউএস সার্টিফাইড সলিউশনস আর্কিটেক্ট প্রফেশনাল"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "8+ years architecting high-traffic cloud infrastructure on Amazon Web Services.",
        "bn": "আমাজন ওয়েব সার্ভিসেস ক্লাউড আর্কিটেকচারে ৮+ বছরের অভিজ্ঞতা।"
      },
      "experience": "8+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "AWS Solutions Architect Associate (SAA-C03) certification training. Learn AWS global infrastructure, IAM identity & policies, EC2 compute & autoscaling, S3 object storage & lifecycle policies, VPC custom networking, RDS & DynamoDB databases, Route 53, CloudFront CDN and AWS Lambda serverless computing.",
      "bn": "আমাজন ওয়েব সার্ভিসেস (AWS SAA-C03) সলিউশনস আর্কিটেক্ট কোর্স। এতে ইসি২ সার্ভার, এস৩ স্টোরেজ, কাস্টম ভিপিসি নেটওয়ার্কিং, আইএএম পারমিশনস, আরডিএস ডাটাবেস ও ল্যাম্বডা সার্ভারলেস শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Master the world's #1 public cloud computing platform. Build highly resilient, fault-tolerant, scalable and secure cloud architectures on Amazon Web Services following the AWS Well-Architected Framework.",
      "bn": "এই কোর্সে আপনি হ্যান্ডস-অন ল্যাবে এডব্লিউএস ক্লাউড আর্কিটেকচার ডিজাইন, অটো-স্কেলিং ও লোড ব্যালেন্সার কনফিগারেশন এবং আন্তর্জাতিক সার্টিফাইড এডব্লিউএস সলিউশনস আর্কিটেক্ট হওয়ার প্রস্তুতি সম্পন্ন করবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "AWS SAA-C03 Syllabus",
          "bn": "এডব্লিউএস SAA-C03 সিলেবাস"
        },
        "desc": {
          "en": "Complete exam preparation for AWS Certified Solutions Architect Associate.",
          "bn": "এডব্লিউএস সলিউশনস আর্কিটেক্ট অফিসিয়াল সিলেবাস।"
        },
        "icon": "Cloud"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Custom VPC Networking",
          "bn": "কাস্টম ভিপিসি নেটওয়ার্কিং"
        },
        "desc": {
          "en": "Build secure VPCs with public/private subnets, NAT gateways & internet gateways.",
          "bn": "পাবলিক ও প্রাইভেট সাবনেট সহ ভিপিসি নেটওয়ার্ক তৈরি।"
        },
        "icon": "Server"
      },
      {
        "id": "cv3",
        "title": {
          "en": "High Availability Architecture",
          "bn": "হাই অ্যাভেইলেবিলিটি"
        },
        "desc": {
          "en": "Elastic Load Balancer (ALB), Auto Scaling Groups across multiple Availability Zones.",
          "bn": "মাল্টি-এরিয়া অটো-স্কেলিং ও লোড ব্যালেন্সার আর্কিটেকচার।"
        },
        "icon": "Zap"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Design multi-tier web applications on AWS with high availability and fault tolerance.",
        "bn": "এডব্লিউএসে হাই-অ্যাভেইলেবল মাল্টি-টিয়ার ওয়েব আর্কিটেকচার ডিজাইন করা।"
      },
      {
        "en": "Configure custom VPCs, subnets, route tables, security groups and NAT Gateways.",
        "bn": "কাস্টম ভিপিসি, সাবনেটস, সিকিউরিটি গ্রুপস ও ন্যাট গেটওয়ে তৈরি করা।"
      },
      {
        "en": "Manage S3 storage classes, bucket policies, encryption and lifecycle management.",
        "bn": "এস৩ বাকেট পলিসি ও লাইফসাইকেল ম্যানেজমেন্ট কনফিগার করা।"
      },
      {
        "en": "Deploy scalable relational databases with Amazon RDS and DynamoDB NoSQL.",
        "bn": "আমাজন আরডিএস ও ডায়নামোডিবি ডাটাবেস ডেপ্লয় করা।"
      },
      {
        "en": "Pass the AWS Solutions Architect Associate (SAA-C03) certification exam.",
        "bn": "এডব্লিউএস সলিউশনস আর্কিটেক্ট সার্টিফিকেশন পরীক্ষায় পাস করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: AWS Core, IAM & Compute (EC2 & Auto Scaling)",
          "bn": "মডিউল ১: এডব্লিউএস কোর, আইএএম ও ইসি২ কম্পিউট"
        },
        "duration": {
          "en": "6 Classes • 18 Hours",
          "bn": "৬ টি ক্লাস • ১৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "AWS Global Infrastructure: Regions, Availability Zones & Edge Locations",
            "bn": "এডব্লিউএস গ্লোবাল ইনফ্রাস্ট্রাকচার ও রিজিয়নস"
          },
          {
            "en": "Identity and Access Management (IAM): Users, Groups, Roles & Policies",
            "bn": "আইএএম: ইউজার্স, গ্রুপস, রোলস ও পলিসিজ"
          },
          {
            "en": "Amazon EC2 Instances: AMI, Instance Types, Key Pairs, Security Groups & UserData",
            "bn": "আমাজন ইসি২ ইনস্ট্যান্স ও সিকিউরিটি গ্রুপস"
          },
          {
            "en": "Elastic Block Store (EBS), Elastic Load Balancing (ALB) & Auto Scaling Groups",
            "bn": "ইবিএস ভলিউম, লোড ব্যালেন্সার ও অটো-স্কেলিং"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Custom VPC Networking, Storage (S3) & Databases",
          "bn": "মডিউল ২: কাস্টম ভিপিসি, এস৩ স্টোরেজ ও ডাটাবেস"
        },
        "duration": {
          "en": "8 Classes • 24 Hours",
          "bn": "৮ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Amazon VPC Mastery: Public/Private Subnets, Internet Gateways & NAT Gateways",
            "bn": "কাস্টম ভিপিসি: সাবনেটস, ইন্টারনেট ও ন্যাট গেটওয়ে"
          },
          {
            "en": "Amazon S3 Object Storage: Storage Classes, Versioning, Cross-Region Replication & Policies",
            "bn": "আমাজন এস৩: স্টোরেজ ক্লাসেস, ভার্সনিং ও বাকেট পলিসিজ"
          },
          {
            "en": "Amazon RDS (MySQL/PostgreSQL), Multi-AZ Failover, Read Replicas & DynamoDB",
            "bn": "আমাজন আরডিএস, মাল্টি-এজেড ফেইলওভার ও ডায়নামোডিবি"
          },
          {
            "en": "Amazon Route 53 DNS Routing Policies & CloudFront CDN Integration",
            "bn": "রুট ৫৩ ডিএনএস ও ক্লাউডফ্রন্ট সিডিএন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Serverless, Monitoring & SAA-C03 Exam Prep",
          "bn": "মডিউল ৩: সার্ভারলেস, মনিটরিং ও এসএএ-সি০৩ এক্সাম"
        },
        "duration": {
          "en": "6 Classes • 18 Hours",
          "bn": "৬ টি ক্লাস • ১৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Serverless Computing with AWS Lambda & API Gateway",
            "bn": "এডব্লিউএস ল্যাম্বডা ও এপিআই গেটওয়ে সার্ভারলেস আর্কিটেকচার"
          },
          {
            "en": "Monitoring & Governance: Amazon CloudWatch, CloudTrail & AWS Config",
            "bn": "ক্লাউডওয়াচ ও ক্লাউডট্রেইল দিয়ে সিস্টেম মনিটরিং"
          },
          {
            "en": "AWS Well-Architected Framework: 6 Pillars for Cloud Architecture",
            "bn": "এডব্লিউএস ওয়েল-আর্কিটেক্টেড ফ্রেমওয়ার্ক"
          },
          {
            "en": "AWS Solutions Architect Associate (SAA-C03) Exam Review & Mock Tests",
            "bn": "SAA-C03 সার্টিফিকেশন এক্সাম রিভিও ও মক টেস্ট"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "AWS Training Completion Certificate",
        "bn": "এডব্লিউএস ট্রেনিং কমপ্লিশন সার্টিফিকেট"
      },
      {
        "en": "AWS SAA-C03 Exam Practice Simulator & Dumps",
        "bn": "এডব্লিউএস এক্সাম প্র্যাকটিস সিমুলেটর"
      },
      {
        "en": "Real-World Cloud Architecture Blueprints",
        "bn": "বাস্তবমুখী ক্লাউড আর্কিটেকচার ব্লুপ্রিন্টস"
      },
      {
        "en": "Cloud Solutions Architect Interview Prep",
        "bn": "ক্লাউড সলিউশনস আর্কিটেক্ট ইন্টারভিউ প্রিপারেশন"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Mahfuzur Rahman",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
        "role": {
          "en": "Cloud Solutions Architect",
          "bn": "ক্লাউড সলিউশনস আর্কিটেক্ট"
        },
        "rating": 5,
        "comment": {
          "en": "Passed the AWS Solutions Architect exam with 890! The VPC subnetting and Auto-scaling labs were spot on.",
          "bn": "৮৯০ মার্ক নিয়ে এডব্লিউএস সলিউশনস আর্কিটেক্ট পরীক্ষায় পাস করেছি।"
        },
        "date": "1 Month Ago"
      }
    ]
  },
  {
    "id": "21",
    "slug": "swift-ios-app-development",
    "title": {
      "en": "Swift iOS App Development",
      "bn": "সুইফট আইওএস অ্যাপ ডেভেলপমেন্ট"
    },
    "subtitle": {
      "en": "Build native iPhone & iPad apps using Swift 5, SwiftUI, UIKit, CoreData, REST APIs & App Store release",
      "bn": "সুইফট ৫, সুইফটইউআই, ইউআইকিট, কোরডেটা ও অ্যাপল অ্যাপ স্টোরে আইওএস অ্যাপ পাবলিশিং"
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
    "ratingsCount": 115,
    "enrolledCount": "240+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "20,000৳",
    "rawFee": 20000,
    "originalFee": "30,000৳",
    "duration": {
      "en": "80 hrs. (2.5 Months)",
      "bn": "৮০ ঘণ্টা (২.৫ মাস)"
    },
    "classesCount": {
      "en": "26 Classes",
      "bn": "২৬ টি ক্লাস"
    },
    "image": "/images/course thumbnail/swift ios app development.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Engr. Zahidul Islam",
      "designation": {
        "en": "Lead Mobile Architect & Apple Developer",
        "bn": "লিড মোবাইল আর্কিটেক্ট ও অ্যাপল ডেভেলপার"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "7+ years engineering native iOS apps with millions of downloads on Apple App Store.",
        "bn": "অ্যাপল অ্যাপ স্টোরের জন্য নেটিভ আইওএস অ্যাপ তৈরিতে ৭+ বছরের অভিজ্ঞতা।"
      },
      "experience": "7+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Comprehensive native Apple iOS development program. Learn Swift 5 language fundamentals, Xcode IDE, Auto Layout, UIKit & modern SwiftUI, MVVM architecture, CoreData & SQLite persistence, RESTful API networking with URLSession/Alamofire, Firebase integration and Apple App Store deployment.",
      "bn": "সুইফট ৫, এক্সকোড, সুইফটইউআই, ইউআইকিট, এমভিভিএম আর্কিটেকচার, রেস্ট এপিআই, কোরডেটা এবং অ্যাপল অ্যাপ স্টোরে অ্যাপ পাবলিশিং শেখার পূর্ণাঙ্গ নেটিভ আইওএস কোর্স।"
    },
    "fullDescription": {
      "en": "Enter the lucrative world of Apple iOS development. You will build 4 production-grade native iOS apps for iPhone and iPad, mastering modern SwiftUI reactive UI, smooth gestures, async/await networking and publishing apps live to the Apple App Store.",
      "bn": "এই কোর্সে আপনি আইওএস অ্যাপ ডিজাইনের আন্তর্জাতিক গাইডলাইন, সুইফট প্রোগ্রামিং, ডেটাবেস ক্যাশিং এবং অ্যাপল ডেভেলপার অ্যাকাউন্টে অ্যাপ সাবমিশন করার প্র্যাকটিক্যাল জ্ঞান অর্জন করবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Swift 5 & SwiftUI",
          "bn": "সুইফট ৫ ও সুইফটইউআই"
        },
        "desc": {
          "en": "Modern declarative UI programming with state management and smooth animations.",
          "bn": "সুইফটইউআই দিয়ে আধুনিক ও আকর্ষণীয় আইওএস অ্যাপ তৈরি।"
        },
        "icon": "Smartphone"
      },
      {
        "id": "cv2",
        "title": {
          "en": "MVVM & Async Networking",
          "bn": "এমভিভিএম ও নেটওয়ার্কিং"
        },
        "desc": {
          "en": "Clean code with async/await, URLSession, Combine framework and Codable JSON.",
          "bn": "ক্লিন এমভিভিএম কোড ও রেস্ট এপিআই ফেচিং।"
        },
        "icon": "Code2"
      },
      {
        "id": "cv3",
        "title": {
          "en": "App Store Publishing",
          "bn": "অ্যাপ স্টোর পাবলিশিং"
        },
        "desc": {
          "en": "TestFlight beta testing, App Store Connect setup and Apple guidelines review.",
          "bn": "টেস্টফ্লাইট ও অ্যাপ স্টোরে সফল অ্যাপ রিলিজ।"
        },
        "icon": "Award"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master the Swift 5 programming language: Optionals, Protocols, Structs & Enums.",
        "bn": "সুইফট ৫ প্রোগ্রামিং ভাষায় শতভাগ দক্ষতা অর্জন করা।"
      },
      {
        "en": "Build responsive iOS user interfaces using SwiftUI and UIKit Auto Layout.",
        "bn": "সুইফটইউআই দিয়ে রেসপনসিভ আইওএস স্ক্রিন ডিজাইন করা।"
      },
      {
        "en": "Implement MVVM architecture for scalable, testable iOS mobile applications.",
        "bn": "এমভিভিএম আর্কিটেকচার ফলো করে প্রজেক্ট তৈরি করা।"
      },
      {
        "en": "Persist offline data using CoreData, SwiftData and UserDefaults.",
        "bn": "কোরডেটা দিয়ে অফলাইন ডাটা স্টোরেজ তৈরি করা।"
      },
      {
        "en": "Publish iOS apps to the Apple App Store with TestFlight beta distribution.",
        "bn": "অ্যাপল অ্যাপ স্টোরে লাইভ অ্যাপ পাবলিশ করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Swift 5 Fundamentals & Xcode UI",
          "bn": "মডিউল ১: সুইফট ৫ ফান্ডামেন্টালস ও এক্সকোড ইউআই"
        },
        "duration": {
          "en": "8 Classes • 24 Hours",
          "bn": "৮ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Swift Language: Variables, Optionals, Control Flow, Functions & Closures",
            "bn": "সুইফট ল্যাঙ্গুয়েজ: ভ্যারিয়েবল, অপশনালস ও ক্লোজার্স"
          },
          {
            "en": "Object-Oriented & Protocol-Oriented Programming (Structs, Classes, Protocols)",
            "bn": "প্রোটোকল-ওরিয়েন্টেড প্রোগ্রামিং ও ওওপি"
          },
          {
            "en": "Xcode IDE Overview, Simulators, Interface Builder & Storyboards",
            "bn": "এক্সকোড ইন্টারফেস, সিমুলেটর ও স্টোরিবোর্ড"
          },
          {
            "en": "UIKit Auto Layout, Constraints, Stack Views & Safe Areas",
            "bn": "অটো লেআউট ও কনস্ট্রেইন্টস ম্যানেজমেন্ট"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: SwiftUI Reactive UI, Navigation & MVVM",
          "bn": "মডিউল ২: সুইফটইউআই, নেভিগেশন ও এমভিভিএম"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "SwiftUI Fundamentals: Views, Modifiers, @State, @Binding & @ObservableObject",
            "bn": "সুইফটইউআই: ভিউজ, মডিফায়ার্স ও স্টেট প্রোপার্টিজ"
          },
          {
            "en": "NavigationStack, TabView, Lists, Grids & Custom Animations",
            "bn": "নেভিগেশন স্ট্যাক, ট্যাব ভিউ ও কাস্টম অ্যানিমেশনস"
          },
          {
            "en": "MVVM Design Pattern Implementation in SwiftUI",
            "bn": "সুইফটইউআই-তে এমভিভিএম আর্কিটেকচার ইমপ্লিমেন্টেশন"
          },
          {
            "en": "Networking: URLSession, Async/Await, Codable Protocols & Error Handling",
            "bn": "রেস্ট এপিআই ও অ্যাসিঙ্ক/অ্যাওয়েট নেটওয়ার্কিং"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: CoreData, Production App & App Store",
          "bn": "মডিউল ৩: কোরডেটা, প্রোডাকশন অ্যাপ ও অ্যাপ স্টোর"
        },
        "duration": {
          "en": "8 Classes • 24 Hours",
          "bn": "৮ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Local Persistence: CoreData, SwiftData & Keychain Security",
            "bn": "লোকাল পারসিস্টেন্স: কোরডেটা ও কি-চেইন সিকিউরিটি"
          },
          {
            "en": "Building a Production E-Commerce / News iOS App Project",
            "bn": "একটি পূর্ণাঙ্গ প্রোডাকশন আইওএস অ্যাপ প্রজেক্ট তৈরি"
          },
          {
            "en": "Firebase Integration: Auth, Firestore & Push Notifications (APNs)",
            "bn": "ফায়ারবেস অথ ও পুশ নোটিফিকেশন (APNs)"
          },
          {
            "en": "Apple Developer Program, TestFlight, App Store Connect & Release",
            "bn": "অ্যাপল ডেভেলপার অ্যাকাউন্ট, টেস্টফ্লাইট ও অ্যাপ স্টোর রিলিজ"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "iOS App Developer Certificate",
        "bn": "আইওএস অ্যাপ ডেভেলপার সার্টিফিকেট"
      },
      {
        "en": "4 Complete iOS Production Repositories",
        "bn": "৪টি কমপ্লিট আইওএস অ্যাপের সোর্স কোড"
      },
      {
        "en": "App Store Submission Assistance",
        "bn": "অ্যাপ স্টোর সাবমিশন ও রিভিউ সহায়তা"
      },
      {
        "en": "Remote iOS Developer Interview Guidance",
        "bn": "রিমোট আইওএস ডেভেলপার ইন্টারভিউ গাইডেন্স"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Fahim Shahriar",
        "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
        "role": {
          "en": "iOS App Developer",
          "bn": "আইওএস অ্যাপ ডেভেলপার"
        },
        "rating": 5,
        "comment": {
          "en": "The SwiftUI and async/await lessons are top tier. Published my first iOS app on the App Store!",
          "bn": "সুইফটইউআই এর ক্লাসগুলো চমৎকার ছিল। আমার প্রথম অ্যাপ অ্যাপল স্টোরে পাবলিশ হয়েছে!"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "22",
    "slug": "asp-net-mvc-core",
    "title": {
      "en": "ASP.NET MVC Core",
      "bn": "এএসপি.নেট এমভিসি কোর"
    },
    "subtitle": {
      "en": "Master enterprise C# .NET 8, ASP.NET Core MVC, Entity Framework Core, Web APIs & SQL Server",
      "bn": "সি-শার্প .নেট ৮, এএসপি.নেট কোর এমভিসি, এন্টিটি ফ্রেমওয়ার্ক কোর ও এসকিউএল সার্ভার"
    },
    "category": "software",
    "categoryLabel": {
      "en": "App & Software",
      "bn": "অ্যাপ ও সফটওয়্যার"
    },
    "badge": {
      "en": "ENTERPRISE",
      "bn": "এন্টারপ্রাইজ"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.8,
    "ratingsCount": 105,
    "enrolledCount": "220+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "18,000৳",
    "rawFee": 18000,
    "originalFee": "26,000৳",
    "duration": {
      "en": "110 hrs. (3.5 Months)",
      "bn": "১১০ ঘণ্টা (৩.৫ মাস)"
    },
    "classesCount": {
      "en": "36 Classes",
      "bn": "৩৬ টি ক্লাস"
    },
    "image": "/images/course thumbnail/asp.net mvc core.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Engr. Masud Rana",
      "designation": {
        "en": "Principal .NET Architect & Enterprise Consultant",
        "bn": "প্রিন্সিপাল .নেট আর্কিটেক্ট ও এন্টারপ্রাইজ কনসালট্যান্ট"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "11+ years engineering banking, telecom and ERP systems with Microsoft .NET Core.",
        "bn": "মাইক্রোসফট .নেট কোর দিয়ে ব্যাংকিং ও ইআরপি সিস্টেমে ১১+ বছরের অভিজ্ঞতা।"
      },
      "experience": "11+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Enterprise software development with Microsoft .NET 8 and ASP.NET Core MVC. Learn C# advanced OOP, Entity Framework Core (EF Core), LINQ queries, SQL Server database design, Repository pattern & Dependency Injection (DI), ASP.NET Core Identity security, Web API with Swagger and Azure deployment.",
      "bn": "মাইক্রোসফট .নেট ৮ এবং এএসপি.নেট কোর এমভিসি দিয়ে এন্টারপ্রাইজ সফটওয়্যার ডেভেলপমেন্ট। এতে সি-শার্প ওওপি, এন্টিটি ফ্রেমওয়ার্ক কোর, এসকিউএল সার্ভার, রেপোজিটরি প্যাটার্ন, আইডেন্টিটি অথেনটিকেশন ও রেস্ট এপিআই শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Build robust, scalable, enterprise-grade business applications that power Fortune 500 banks and multinational corporations. Master full-stack .NET development with C#, EF Core, SQL Server, Razor Pages, Web APIs and automated Azure cloud hosting.",
      "bn": "এই কোর্সে আপনি কর্পোরেট লেভেল ইআরপি ও ব্যাংকিং সফটওয়্যার তৈরির জন্য সি#, ডিপেন্ডেন্সি ইনজেকশন, এন্টিটি ফ্রেমওয়ার্ক মাইগ্রেশনস, রোল পারমিশন এবং অ্যাজুর ক্লাউডে ডেপ্লয়মেন্ট শিখবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": ".NET 8 & Clean Architecture",
          "bn": ".নেট ৮ ও ক্লিন আর্কিটেকচার"
        },
        "desc": {
          "en": "Master Dependency Injection, Repository Pattern & onion architecture.",
          "bn": "ডিপেন্ডেন্সি ইনজেকশন ও ক্লিন আর্কিটেকচার।"
        },
        "icon": "Code2"
      },
      {
        "id": "cv2",
        "title": {
          "en": "EF Core & SQL Server",
          "bn": "ইএফ কোর ও এসকিউএল সার্ভার"
        },
        "desc": {
          "en": "Code-first migrations, complex LINQ queries and relational data modeling.",
          "bn": "কোড-ফার্স্ট মাইগ্রেশন ও লিঙ্ক কোয়েরিজ।"
        },
        "icon": "Database"
      },
      {
        "id": "cv3",
        "title": {
          "en": "ASP.NET Identity & APIs",
          "bn": "আইডেন্টিটি ও ওয়েব এপিআই"
        },
        "desc": {
          "en": "Role-based authentication, claims, JWT tokens and RESTful Web APIs.",
          "bn": "সিকিউর ইউজার রোলস ও রেস্টফুল ওয়েব এপিআই।"
        },
        "icon": "ShieldCheck"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Write clean, object-oriented, asynchronous C# code using .NET 8 features.",
        "bn": "সি-শার্প ওওপি ও অ্যাসিঙ্ক প্রোগ্রামিংয়ে দক্ষতা অর্জন করা।"
      },
      {
        "en": "Develop modular web applications using ASP.NET Core MVC framework.",
        "bn": "এএসপি.নেট কোর এমভিসি দিয়ে স্কেলেবল ওয়েব অ্যাপ তৈরি করা।"
      },
      {
        "en": "Manage databases using Entity Framework Core Code-First approach.",
        "bn": "এন্টিটি ফ্রেমওয়ার্ক কোর দিয়ে কোড-ফার্স্ট ডেটাবেস পরিচালনা করা।"
      },
      {
        "en": "Build secure RESTful Web APIs with JWT authentication and Swagger UI.",
        "bn": "জেডব্লিউটি অথ সহ সিকিউর ওয়েব এপিআই তৈরি করা।"
      },
      {
        "en": "Deploy .NET Core applications to Microsoft Azure and IIS Servers.",
        "bn": "মাইক্রোসফট অ্যাজুর ও আইআইএস সার্ভারে অ্যাপ্লিকেশন ডেপ্লয় করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: C# OOP Core & .NET 8 Fundamentals",
          "bn": "মডিউল ১: সি-শার্প ওওপি কোর ও .নেট ৮ ফান্ডামেন্টালস"
        },
        "duration": {
          "en": "12 Classes • 36 Hours",
          "bn": "১২ টি ক্লাস • ৩৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "C# Language Syntax, Data Types, Control Flow, Methods & Memory Management",
            "bn": "সি-শার্প সিনট্যাক্স, মেথডস ও মেমোরি ম্যানেজমেন্ট"
          },
          {
            "en": "Object-Oriented Programming (Classes, Inheritance, Interfaces, Polymorphism)",
            "bn": "অবজেক্ট ওরিয়েন্টেড সি-শার্প: ইন্টারফেস ও পলিমরফিজম"
          },
          {
            "en": "Generics, Collections, Delegates, Events & Lambda Expressions",
            "bn": "জেনেরিকস, কালেকশনস ও ল্যাম্বডা এক্সপ্রেশনস"
          },
          {
            "en": "LINQ (Language Integrated Query) Queries & Asynchronous Programming (async/await)",
            "bn": "লিঙ্ক (LINQ) কোয়েরিজ ও অ্যাসিঙ্ক প্রোগ্রামিং"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: ASP.NET Core MVC & Entity Framework Core",
          "bn": "মডিউল ২: এএসপি.নেট কোর এমভিসি ও এন্টিটি ফ্রেমওয়ার্ক কোর"
        },
        "duration": {
          "en": "12 Classes • 36 Hours",
          "bn": "১২ টি ক্লাস • ৩৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "ASP.NET Core Architecture, Middleware Pipeline & Dependency Injection (DI)",
            "bn": "এএসপি.নেট কোর আর্কিটেকচার ও ডিপেন্ডেন্সি ইনজেকশন"
          },
          {
            "en": "Controllers, Action Methods, Routing & Razor Views / Tag Helpers",
            "bn": "কন্ট্রোলারস, অ্যাকশন মেথডস ও রেজর ভিউজ"
          },
          {
            "en": "Entity Framework Core (EF Core): DbContext, Code-First Migrations & Relationships",
            "bn": "ইএফ কোর: ডিবিকনটেক্সট ও কোড-ফার্স্ট মাইগ্রেশনস"
          },
          {
            "en": "Repository Pattern, Unit of Work & ViewModels / DTOs",
            "bn": "রেপোজিটরি প্যাটার্ন ও ইউনিট অফ ওয়ার্ক"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Security, Web APIs, ERP Project & Azure Deploy",
          "bn": "মডিউল ৩: সিকিউরিটি, ওয়েব এপিআই, ইআরপি প্রজেক্ট ও ডেপ্লয়মেন্ট"
        },
        "duration": {
          "en": "12 Classes • 38 Hours",
          "bn": "১২ টি ক্লাস • ৩৮ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "ASP.NET Core Identity: User Registration, Login, Role-Based Access (RBAC)",
            "bn": "এএসপি.নেট আইডেন্টিটি ও রোল-বেসড অথেনটিকেশন"
          },
          {
            "en": "ASP.NET Core Web API Development, DTOs & Swagger Documentation",
            "bn": "ওয়েব এপিআই ডেভেলপমেন্ট ও সোয়েগার ডকুমেনটেশন"
          },
          {
            "en": "Building a Full Enterprise Inventory & ERP Management System Project",
            "bn": "ফুল এন্টারপ্রাইজ ইনভেন্টরি ও ইআরপি সিস্টেম প্রজেক্ট"
          },
          {
            "en": "Deployment to Microsoft Azure App Services, SQL Azure & IIS Server",
            "bn": "অ্যাজুর অ্যাপ সার্ভিসেস ও আইআইএস সার্ভারে ডেপ্লয়মেন্ট"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Microsoft .NET Specialist Certificate",
        "bn": "মাইক্রোসফট .নেট স্পেশালিস্ট সার্টিফিকেট"
      },
      {
        "en": "Complete Source Code of Enterprise ERP System",
        "bn": "এন্টারপ্রাইজ ইআরপি সিস্টেমের সম্পূর্ণ সোর্স কোড"
      },
      {
        "en": "SQL Server & Azure Cloud Deployment Access",
        "bn": "এসকিউএল সার্ভার ও ক্লাউড ডেপ্লয়মেন্ট এক্সেস"
      },
      {
        "en": "Corporate .NET Software Engineer Placement Support",
        "bn": "কর্পোরেট .নেট সফটওয়্যার ইঞ্জিনিয়ার জব প্লেসমেন্ট সাপোর্ট"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Anisur Rahman",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
        "role": {
          "en": ".NET Software Engineer",
          "bn": ".নেট সফটওয়্যার ইঞ্জিনিয়ার"
        },
        "rating": 5,
        "comment": {
          "en": "The Clean Architecture and Entity Framework Core modules prepared me for my software engineer role at a bank.",
          "bn": "ক্লিন আর্কিটেকচার ও ইএফ কোরের গভীর শিক্ষার কারণে ব্যাংকে সফটওয়্যার ইঞ্জিনিয়ার হিসেবে চাকরি পেয়েছি।"
        },
        "date": "3 Weeks Ago"
      }
    ]
  },
  {
    "id": "23",
    "slug": "c-cpp-programming",
    "title": {
      "en": "C / C++ Programming",
      "bn": "সি ও সি++ প্রোগ্রামিং"
    },
    "subtitle": {
      "en": "Master fundamental programming logic, memory pointers, data structures, OOP & competitive problem solving",
      "bn": "প্রোগ্রামিং লজিক, পয়েন্টারস, ডাইনামিক মেমোরি, ডাটা স্ট্রাকচার্স ও ওওপি"
    },
    "category": "web",
    "categoryLabel": {
      "en": "Programming & Web",
      "bn": "প্রোগ্রামিং ও ওয়েব"
    },
    "badge": {
      "en": "FOUNDATION",
      "bn": "ফাউন্ডেশন"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 95,
    "enrolledCount": "210+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "12,000৳",
    "rawFee": 12000,
    "originalFee": "18,000৳",
    "duration": {
      "en": "40 hrs. (1.5 Months)",
      "bn": "৪০ ঘণ্টা (১.৫ মাস)"
    },
    "classesCount": {
      "en": "14 Classes",
      "bn": "১৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/c-cpp programming.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Dr. Asif Mahmud",
      "designation": {
        "en": "Competitive Programmer & CS Faculty",
        "bn": "কম্পিটিটিভ প্রোগ্রামার ও সিএস ফ্যাকাল্টি"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "Former ACM-ICPC regionalist with 10+ years teaching algorithms and computer architecture.",
        "bn": "সাবেক আইসিপিসি প্রতিযোগী ও ১০+ বছরের প্রোগ্রামিং শিক্ষক।"
      },
      "experience": "10+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Foundational computer science programming in C and C++. Topics include variables & data types, control flow (if-else, loops), functions & recursion, arrays, strings, pointer arithmetic & dynamic memory allocation (malloc/free, new/delete), Object-Oriented Programming (OOP) in C++, Standard Template Library (STL) and competitive programming fundamentals.",
      "bn": "সি ও সি++ প্রোগ্রামিংয়ের শক্তিশালী ফাউন্ডেশন কোর্স। এতে ডাটা টাইপস, লুপস, ফাংশন ও রিকার্সন, পয়েন্টার মেমোরি ম্যানেজমেন্ট, সি++ অবজেক্ট ওরিয়েন্টেড কনসেপ্টস, এসটিএল ভেক্টর/ম্যাপ এবং প্রবলেম সলভিং শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Build rock-solid computer science fundamentals. Master how computers execute code at the memory level, conquer pointers and dynamic arrays, understand Object-Oriented principles and write blazing-fast algorithms using the C++ Standard Template Library (STL).",
      "bn": "এই কোর্সে আপনি যেকোনো জটিল প্রোগ্রামিং ল্যাঙ্গুয়েজের মূল ভিত্তি সি ও সি++ শিখে কোডিং লজিক ডেভেলপ করবেন, যা ইউনিভার্সিটি কোর্স এবং সফটওয়্যার ক্যারিয়ারের জন্য অপরিহার্য।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Memory & Pointers",
          "bn": "পয়েন্টার ও মেমোরি"
        },
        "desc": {
          "en": "Deep understanding of heap/stack memory, pointer arithmetic and reference passing.",
          "bn": "পয়েন্টার ও ডাইনামিক মেমোরি অ্যালোকেশন।"
        },
        "icon": "Cpu"
      },
      {
        "id": "cv2",
        "title": {
          "en": "C++ OOP & STL",
          "bn": "সি++ ওওপি ও এসটিএল"
        },
        "desc": {
          "en": "Classes, operator overloading, templates, vectors, sets, maps and algorithms.",
          "bn": "সি++ এসটিএল লাইব্রেরি ও অবজেক্ট ওরিয়েন্টেড ডিজাইন।"
        },
        "icon": "Code2"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Problem Solving",
          "bn": "প্রবলেম সলভিং"
        },
        "desc": {
          "en": "Solve 100+ algorithmic problems on Codeforces, LeetCode and HackerRank.",
          "bn": "অনলাইন জাজে ১০০+ অ্যালগোরিদমিক প্রবলেম সমাধান।"
        },
        "icon": "Zap"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Understand computer architecture, compilation process and memory management.",
        "bn": "কম্পিউটার মেমোরি আর্কিটেকচার ও কম্পাইলেশন প্রসেস বোঝা।"
      },
      {
        "en": "Master pointers, dynamic memory allocation and array manipulation.",
        "bn": "পয়েন্টার ও ডাইনামিক মেমোরি অ্যালোকেশনে পারদর্শী হওয়া।"
      },
      {
        "en": "Write object-oriented programs in C++ using classes, inheritance & polymorphism.",
        "bn": "সি++ দিয়ে অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং করা।"
      },
      {
        "en": "Utilize the C++ Standard Template Library (vector, stack, queue, map, sort).",
        "bn": "সি++ এসটিএল দিয়ে দ্রুত ডেটা স্ট্রাকচার পরিচালনা করা।"
      },
      {
        "en": "Build strong problem-solving skills for competitive programming and coding interviews.",
        "bn": "কোডিং ইন্টারভিউ ও প্রবলেম সলভিংয়ের শক্তিশালী ভিত্তি গড়া।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: C Language Core & Flow Control",
          "bn": "মডিউল ১: সি ল্যাঙ্গুয়েজ কোর ও ফ্লো কন্ট্রোল"
        },
        "duration": {
          "en": "4 Classes • 12 Hours",
          "bn": "৪ টি ক্লাস • ১২ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Introduction to C: Variables, Data Types, Operators & Standard I/O (printf/scanf)",
            "bn": "সি প্রোগ্রামিং বেসিকস: ভ্যারিয়েবলস, ডাটা টাইপস ও ইনপুট/আউটপুট"
          },
          {
            "en": "Control Structures: If-Else, Switch-Case & Logical Operators",
            "bn": "কন্ট্রোল স্ট্রাকচার্স: ইফ-এলস ও সুইচ-কেস"
          },
          {
            "en": "Loops (For, While, Do-While), Nested Loops & Pattern Printing",
            "bn": "লুপস ও বিভিন্ন প্যাটার্ন প্রিন্টিং প্রবলেমস"
          },
          {
            "en": "Functions, Scope, Parameter Passing by Value & Recursion",
            "bn": "ফাংশনস, স্কোপ ও রিকার্সন কনসেপ্ট"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Arrays, Strings, Pointers & Dynamic Memory",
          "bn": "মডিউল ২: অ্যারে, স্ট্রিং, পয়েন্টার ও ডাইনামিক মেমোরি"
        },
        "duration": {
          "en": "5 Classes • 14 Hours",
          "bn": "৫ টি ক্লাস • ১৪ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "1D & 2D Arrays, Matrix Operations & String Manipulation (string.h)",
            "bn": "ওয়ান-ডি ও টু-ডি অ্যারে এবং স্ট্রিং অপারেশনস"
          },
          {
            "en": "Pointers Fundamentals, Pointer Arithmetic, Dereferencing & Arrays vs Pointers",
            "bn": "পয়েন্টার ফান্ডামেন্টালস ও মেমোরি অ্যাড্রেসিং"
          },
          {
            "en": "Dynamic Memory Allocation (malloc, calloc, realloc, free) & Memory Leaks",
            "bn": "ডাইনামিক মেমোরি অ্যালোকেশন (ম্যালক ও ফ্রি)"
          },
          {
            "en": "Structures, Unions, Typedef & File Handling (fopen, fread, fwrite)",
            "bn": "স্ট্রাকচার্স, ইউনিয়ন ও ফাইল হ্যান্ডলিং"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: C++ OOP, STL & Competitive Problem Solving",
          "bn": "মডিউল ৩: সি++ ওওপি, এসটিএল ও প্রবলেম সলভিং"
        },
        "duration": {
          "en": "5 Classes • 14 Hours",
          "bn": "৫ টি ক্লাস • ১৪ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "C++ Basics, Fast I/O, References vs Pointers & Function Overloading",
            "bn": "সি++ বেসিকস, রেফারেন্সেস ও ফাংশন ওভারলোডিং"
          },
          {
            "en": "C++ OOP: Classes, Constructors, Destructors, Encapsulation, Inheritance & Polymorphism",
            "bn": "সি++ অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং (ক্লাস ও ইনহেরিট্যান্স)"
          },
          {
            "en": "Standard Template Library (STL): Vector, Pair, Set, Map, Queue, Stack & Sort",
            "bn": "সি++ এসটিএল: ভেক্টর, পেয়ার, সেট ও ম্যাপ"
          },
          {
            "en": "Problem Solving Practice on Online Judges & Coding Interview Logic",
            "bn": "অনলাইন জাজে প্রবলেম সলভিং ও কোডিং ইন্টারভিউ প্র্যাকটিস"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "C/C++ Programming Certification",
        "bn": "সি/সি++ প্রোগ্রামিং সার্টিফিকেট"
      },
      {
        "en": "100+ Problem Solving Repository with Solutions",
        "bn": "১০০+ প্রবলেম সলভিং সলিউশন কোডবেস"
      },
      {
        "en": "Visual Memory Execution Diagrams",
        "bn": "ভিজ্যুয়াল মেমোরি এক্সিকিউশন ডায়াগ্রামস"
      },
      {
        "en": "1-on-1 Code Debugging Support",
        "bn": "১-অন-১ কোড ডিবাগিং সাপোর্ট"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Sifat Ullah",
        "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
        "role": {
          "en": "CSE Student",
          "bn": "সিএসই শিক্ষার্থী"
        },
        "rating": 5,
        "comment": {
          "en": "Pointers and recursion were explained so clearly. Aced my university data structures course!",
          "bn": "পয়েন্টার ও রিকার্সনের ধারণা একদম ক্লিয়ার হয়েছে। ইউনিভার্সিটির পরীক্ষায় সর্বোচ্চ গ্রেড পেয়েছি।"
        },
        "date": "1 Month Ago"
      }
    ]
  },
  {
    "id": "24",
    "slug": "c-sharp-programming",
    "title": {
      "en": "C# Programming",
      "bn": "সি-শার্প প্রোগ্রামিং"
    },
    "subtitle": {
      "en": "Master modern C# 12: Object-Oriented Architecture, LINQ, Async/Await, Generics & Desktop App Development",
      "bn": "সি-শার্প ১২, অবজেক্ট ওরিয়েন্টেড ডিজাইন, লিঙ্ক কোয়েরিজ, অ্যাসিঙ্ক ও ডেক্সটপ অ্যাপ ডেভেলপমেন্ট"
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
    "rating": 4.8,
    "ratingsCount": 90,
    "enrolledCount": "190+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "12,000৳",
    "rawFee": 12000,
    "originalFee": "18,000৳",
    "duration": {
      "en": "48 hrs. (1.5 Months)",
      "bn": "৪৮ ঘণ্টা (১.৫ মাস)"
    },
    "classesCount": {
      "en": "16 Classes",
      "bn": "১৬ টি ক্লাস"
    },
    "image": "/images/course thumbnail/c-sharp programming.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Engr. Masud Rana",
      "designation": {
        "en": "Principal .NET Architect",
        "bn": "প্রিন্সিপাল .নেট আর্কিটেক্ট"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "11+ years developing enterprise business applications using C# and .NET technologies.",
        "bn": "সি# ও .নেট টেকনোলজিতে ১১+ বছরের অভিজ্ঞতা।"
      },
      "experience": "11+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Comprehensive modern C# programming course covering C# 12 syntax, OOP fundamentals (classes, interfaces, inheritance, polymorphism), Generics & Collections, LINQ data querying, Exception handling & File I/O, Asynchronous programming with async/await, Delegates, Events & Lambda expressions and Windows desktop GUI development.",
      "bn": "সি-শার্প ১২ প্রোগ্রামিং কোর্স। এতে সি# বেসিকস, অবজেক্ট ওরিয়েন্টেড কনসেপ্টস, জেনেরিকস, লিঙ্ক ডাটা কোয়েরি, অ্যাসিঙ্ক/অ্যাওয়েট, ফাইল আই/ও এবং উইন্ডোজ ডেস্কটপ অ্যাপ্লিকেশন তৈরি শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Master one of the most versatile and high-paying programming languages in the world. C# powers enterprise web apps, desktop software, game development with Unity and cloud systems on Microsoft Azure.",
      "bn": "এই কোর্সে আপনি সি# ভাষার আধুনিক ফিচারস আয়ত্ত করে সফটওয়্যার ডেভেলপমেন্টের জন্য প্রস্তুতি নেবেন, যা ওয়েব ব্যাকএন্ড, ডেক্সটপ অ্যাপ এবং ইউনিটি গেম ডেভেলপমেন্টের মূল ভিত্তি।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Modern C# 12 OOP",
          "bn": "মডার্ন সি# ১২ ওওপি"
        },
        "desc": {
          "en": "Master encapsulation, polymorphism, abstraction and interface-driven design.",
          "bn": "ইন্টারফেস ও অবজেক্ট ওরিয়েন্টেড সফটওয়্যার ডিজাইন।"
        },
        "icon": "Code2"
      },
      {
        "id": "cv2",
        "title": {
          "en": "LINQ & Collections",
          "bn": "লিঙ্ক ও কালেকশনস"
        },
        "desc": {
          "en": "Filter, map, aggregate and query in-memory collections effortlessly.",
          "bn": "লিঙ্ক কোয়েরি দিয়ে দ্রুত ডেটা প্রসেসিং।"
        },
        "icon": "Database"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Desktop GUI App",
          "bn": "ডেস্কটপ জিইউআই অ্যাপ"
        },
        "desc": {
          "en": "Build and deploy full Windows desktop management software with SQL database.",
          "bn": "এসকিউএল ডাটাবেস সহ সম্পূর্ণ ডেস্কটপ সফটওয়্যার তৈরি।"
        },
        "icon": "Server"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Write clean, type-safe C# 12 applications with modern syntax and patterns.",
        "bn": "টাইপ-সেফ ও ক্লিন সি# কোড লেখা।"
      },
      {
        "en": "Design reusable class hierarchies following SOLID design principles.",
        "bn": "সলিড প্রিন্সিপালস মেনে রিইউজেবল ক্লাস ডিজাইন করা।"
      },
      {
        "en": "Query and manipulate complex datasets using powerful LINQ expressions.",
        "bn": "লিঙ্ক এক্সপ্রেশনস দিয়ে জটিল ডেটাসেট ফিল্টার করা।"
      },
      {
        "en": "Implement multi-threading and non-blocking I/O using async/await.",
        "bn": "অ্যাসিঙ্ক/অ্যাওয়েট দিয়ে মাল্টি-থ্রেডেড প্রোগ্রামিং করা।"
      },
      {
        "en": "Build and connect a Windows desktop application to a database.",
        "bn": "ডাটাবেস কানেক্টিভিটি সহ উইন্ডোজ ডেস্কটপ অ্যাপ তৈরি করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: C# Syntax, Types & OOP Architecture",
          "bn": "মডিউল ১: সি# সিনট্যাক্স, টাইপস ও ওওপি আর্কিটেকচার"
        },
        "duration": {
          "en": "5 Classes • 15 Hours",
          "bn": "৫ টি ক্লাস • ১৫ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "C# Fundamentals: Variables, Data Types, Nullable Types & Type Casting",
            "bn": "সি# ফান্ডামেন্টালস: ভ্যারিয়েবল ও ডাটা টাইপস"
          },
          {
            "en": "Object-Oriented Programming: Classes, Objects, Fields, Properties & Methods",
            "bn": "অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং: ক্লাসেস ও প্রোপার্টিজ"
          },
          {
            "en": "Constructors, Method Overloading, Inheritance & Abstract Classes",
            "bn": "কনস্ট্রাক্টর্স, ইনহেরিট্যান্স ও অ্যাবস্ট্রাক্ট ক্লাস"
          },
          {
            "en": "Interfaces, Polymorphism & SOLID Design Principles",
            "bn": "ইন্টারফেস, পলিমরফিজম ও সলিড প্রিন্সিপালস"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Generics, LINQ, Delegates & Async/Await",
          "bn": "মডিউল ২: জেনেরিকস, লিঙ্ক, ডেলিগেটস ও অ্যাসিঙ্ক"
        },
        "duration": {
          "en": "6 Classes • 18 Hours",
          "bn": "৬ টি ক্লাস • ১৮ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Generics (List<T>, Dictionary<K,V>, HashSet<T>) & Custom Generic Classes",
            "bn": "জেনেরিক কালেকশনস ও কাস্টম জেনেরিক ক্লাস"
          },
          {
            "en": "Delegates, Anonymous Methods, Func/Action & Lambda Expressions",
            "bn": "ডেলিগেটস, ইভেন্টস ও ল্যাম্বডা এক্সপ্রেশনস"
          },
          {
            "en": "LINQ (Language Integrated Query): Select, Where, OrderBy, GroupBy & Join",
            "bn": "লিঙ্ক কোয়েরিজ: সিলেক্ট, হোয়ার, গ্রুপবাই ও জয়েনস"
          },
          {
            "en": "Asynchronous Programming with Tasks, Async/Await & Exception Handling (try-catch)",
            "bn": "অ্যাসিঙ্ক/অ্যাওয়েট ও এক্সেপশন হ্যান্ডলিং"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: File I/O, Database & Windows Desktop App Project",
          "bn": "মডিউল ৩: ফাইল আই/ও, ডাটাবেস ও ডেস্কটপ অ্যাপ প্রজেক্ট"
        },
        "duration": {
          "en": "5 Classes • 15 Hours",
          "bn": "৫ টি ক্লাস • ১৫ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "File I/O Streams, JSON Serialization & Configuration Files",
            "bn": "ফাইল স্ট্রিমস ও জেএসন সিরিয়ালাইজেশন"
          },
          {
            "en": "Database Connectivity with ADO.NET / Dapper (CRUD Operations)",
            "bn": "ডাটাবেস কানেক্টিভিটি ও ক্রাড অপারেশনস"
          },
          {
            "en": "Building a Windows Desktop Management Software Project (WPF / WinForms)",
            "bn": "উইন্ডোজ ডেক্সটপ সফটওয়্যার প্রজেক্ট তৈরি"
          },
          {
            "en": "Unit Testing Basics & Publishing Standalone Executables",
            "bn": "ইউনিট টেস্টিং ও সফটওয়্যার এক্সিকিউটেবল বিল্ড"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "C# Programming Specialist Certificate",
        "bn": "সি-শার্প প্রোগ্রামিং স্পেশালিস্ট সার্টিফিকেট"
      },
      {
        "en": "Complete Source Code of Desktop Management Software",
        "bn": "ডেস্কটপ ম্যানেজমেন্ট সফটওয়্যারের সম্পূর্ণ সোর্স কোড"
      },
      {
        "en": "Visual Studio 2022 Architecture Setup Guide",
        "bn": "ভিজ্যুয়াল স্টুডিও ২০২২ আর্কিটেকচার গাইড"
      },
      {
        "en": "1-on-1 Code Mentorship Support",
        "bn": "১-অন-১ কোড মেন্টরশিপ সাপোর্ট"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Tariqul Islam",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
        "role": {
          "en": "Junior Software Developer",
          "bn": "জুনিয়র সফটওয়্যার ডেভেলপার"
        },
        "rating": 5,
        "comment": {
          "en": "The LINQ and async/await sessions made everything click. Great foundation for moving into ASP.NET Core.",
          "bn": "লিঙ্ক এবং অ্যাসিঙ্ক প্রোগ্রামিংয়ের ক্লাসগুলো দারুণ ছিল। .নেট কোর শেখার জন্য সেরা ভিত্তি।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "25",
    "slug": "java-se-programming",
    "title": {
      "en": "Java SE Programming",
      "bn": "জাভা এসই প্রোগ্রামিং"
    },
    "subtitle": {
      "en": "Master Java 21: OOP architecture, Collections Framework, Multithreading, JDBC & Desktop GUI Applications",
      "bn": "জাভা ২১, অবজেক্ট ওরিয়েন্টেড ডিজাইন, কালেকশন ফ্রেমওয়ার্ক, মাল্টিথ্রেডিং ও জেডিবিসি ডাটাবেস"
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
    "rating": 4.8,
    "ratingsCount": 110,
    "enrolledCount": "230+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "15,000৳",
    "rawFee": 15000,
    "originalFee": "22,000৳",
    "duration": {
      "en": "80 hrs. (2.5 Months)",
      "bn": "৮০ ঘণ্টা (২.৫ মাস)"
    },
    "classesCount": {
      "en": "26 Classes",
      "bn": "২৬ টি ক্লাস"
    },
    "image": "/images/course thumbnail/java se programming.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Engr. Zahidul Islam",
      "designation": {
        "en": "Senior Java & Android Architect",
        "bn": "সিনিয়র জাভা ও অ্যান্ড্রয়েড আর্কিটেক্ট"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "8+ years building enterprise Java systems, Spring Boot backends and Android applications.",
        "bn": "এন্টারপ্রাইজ জাভা সিস্টেম ও স্প্রিং বুট ব্যাকএন্ডে ৮+ বছরের অভিজ্ঞতা।"
      },
      "experience": "8+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Complete Java Standard Edition (Java SE 21) programming course. Topics include JDK/JVM architecture, Object-Oriented Programming (OOP) principles, Java Collections Framework (List, Set, Map), Exception Handling, Multithreading & Concurrency, Java I/O Streams, JDBC database connectivity, JavaFX desktop application development and software design patterns.",
      "bn": "জাভা স্ট্যান্ডার্ড এডিশন (Java SE) প্রোগ্রামিং কোর্স। এতে জেভিএম আর্কিটেকচার, ওওপি কনসেপ্টস, কালেকশন ফ্রেমওয়ার্ক, মাল্টিথ্রেডিং, এক্সেপশন হ্যান্ডলিং, জেডিবিসি ডাটাবেস কানেক্টিভিটি ও জাভাএফএক্স ডেক্সটপ অ্যাপ ডেভেলপমেন্ট শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Java is the backbone of global enterprise banking, Android applications and large-scale cloud services. Master object-oriented principles, robust exception handling, multi-threaded algorithms and database connectivity to build scalable Java software.",
      "bn": "এই কোর্সে আপনি একদম বেসিক থেকে শুরু করে আধুনিক জাভা ২১, কালেকশনস, মাল্টিথ্রেডিং ও ডাটাবেস প্রোগ্রামিং শিখে স্প্রিং বুট বা অ্যান্ড্রয়েড ডেভেলপমেন্টের জন্য সম্পূর্ণ প্রস্তুত হবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Deep Java OOP",
          "bn": "জাভা ওওপি মাস্টারি"
        },
        "desc": {
          "en": "Master encapsulation, inheritance, polymorphism, abstraction and interfaces.",
          "bn": "অবজেক্ট ওরিয়েন্টেড ডিজাইন ও ক্লিন কোড প্র্যাকটিস।"
        },
        "icon": "Code2"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Collections & Streams",
          "bn": "কালেকশনস ও স্ট্রিমস"
        },
        "desc": {
          "en": "ArrayList, HashMap, HashSet and functional stream operations.",
          "bn": "কালেকশন ফ্রেমওয়ার্ক ও ল্যাম্বডা স্ট্রিমস।"
        },
        "icon": "Database"
      },
      {
        "id": "cv3",
        "title": {
          "en": "JDBC & Desktop GUI",
          "bn": "জেডিবিসি ও ডেস্কটপ জিইউআই"
        },
        "desc": {
          "en": "Connect MySQL databases with JDBC and build JavaFX desktop software.",
          "bn": "মাইএসকিউএল ডাটাবেস ও জাভাএফএক্স সফটওয়্যার তৈরি।"
        },
        "icon": "Server"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Understand JVM, JRE, JDK, bytecode execution and garbage collection.",
        "bn": "জেভিএম আর্কিটেকচার ও মেমোরি ম্যানেজমেন্ট বোঝা।"
      },
      {
        "en": "Write robust object-oriented code following industry design patterns.",
        "bn": "ওওপি ডিজাইন প্যাটার্নস মেনে জাভা কোড লেখা।"
      },
      {
        "en": "Manage complex data structures using the Java Collections Framework.",
        "bn": "জাভা কালেকশন ফ্রেমওয়ার্ক দিয়ে ডাটা হ্যান্ডলিং করা।"
      },
      {
        "en": "Implement multi-threaded programs and handle thread synchronization.",
        "bn": "মাল্টিথ্রেডিং ও কনকারেন্সি ম্যানেজমেন্ট বাস্তবায়ন করা।"
      },
      {
        "en": "Build database-driven desktop applications with JDBC and JavaFX.",
        "bn": "জেডিবিসি ও জাভাএফএক্স দিয়ে সম্পূর্ণ সফটওয়্যার প্রজেক্ট তৈরি।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Java Basics, JVM & Object-Oriented Principles",
          "bn": "মডিউল ১: জাভা বেসিকস, জেভিএম ও ওওপি প্রিন্সিপালস"
        },
        "duration": {
          "en": "8 Classes • 24 Hours",
          "bn": "৮ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Java Environment (JDK, JVM, JRE), Bytecode, IntelliJ IDEA & Syntax",
            "bn": "জাভা এনভায়রনমেন্ট সেটআপ, জেভিএম ও সিনট্যাক্স"
          },
          {
            "en": "Data Types, Operators, Flow Control (If-Else, Switch, Loops) & Arrays",
            "bn": "ডাটা টাইপস, লুপস ও অ্যারে ম্যানিপুলেশন"
          },
          {
            "en": "OOP Principles: Classes, Objects, Constructors, 'this' Keyword & Packages",
            "bn": "ওওপি প্রিন্সিপালস: ক্লাসেস, অবজেক্টস ও প্যাকেজেস"
          },
          {
            "en": "Inheritance, Method Overriding, 'super' Keyword, Polymorphism & Abstract Classes",
            "bn": "ইনহেরিট্যান্স, পলিমরফিজম ও অ্যাবস্ট্রাক্ট ক্লাস"
          },
          {
            "en": "Interfaces, Multiple Inheritance & Java Access Modifiers",
            "bn": "ইন্টারফেস ও জাভা এক্সেস মডিফায়ার্স"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Exception Handling, Collections & Multithreading",
          "bn": "মডিউল ২: এক্সেপশন হ্যান্ডলিং, কালেকশনস ও মাল্টিথ্রেডিং"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Exception Handling: Try-Catch-Finally, Custom Exceptions & Throw/Throws",
            "bn": "এক্সেপশন হ্যান্ডলিং ও কাস্টম এক্সেপশন"
          },
          {
            "en": "Java Collections Framework: List (ArrayList, LinkedList), Set (HashSet, TreeSet)",
            "bn": "কালেকশন ফ্রেমওয়ার্ক: লিস্ট ও সেট"
          },
          {
            "en": "Map (HashMap, TreeMap), Generics & Iterator Pattern",
            "bn": "ম্যাপ, জেনেরিকস ও ইটারেটর প্যাটার্ন"
          },
          {
            "en": "Java 8+ Features: Lambda Expressions, Functional Interfaces & Stream API",
            "bn": "ল্যাম্বডা এক্সপ্রেশনস ও স্ট্রিম এপিআই"
          },
          {
            "en": "Multithreading: Thread Class, Runnable Interface, Synchronization & Deadlocks",
            "bn": "মাল্টিথ্রেডিং ও সিঙ্ক্রোনাইজেশন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Java I/O, JDBC & JavaFX Desktop Project",
          "bn": "মডিউল ৩: জাভা আই/ও, জেডিবিসি ও জাভাএফএক্স প্রজেক্ট"
        },
        "duration": {
          "en": "8 Classes • 26 Hours",
          "bn": "৮ টি ক্লাস • ২৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Java File I/O: Byte & Character Streams, Serialization (Serializable)",
            "bn": "ফাইল আই/ও ও সিরিয়ালাইজেশন"
          },
          {
            "en": "JDBC (Java Database Connectivity): Driver, Connection, Statement & PreparedStatement",
            "bn": "জেডিবিসি ডাটাবেস কানেক্টিভিটি ও প্রিপেয়ার্ড স্টেটমেন্ট"
          },
          {
            "en": "Building a Full Desktop Management System with JavaFX / Swing & MySQL",
            "bn": "জাভাএফএক্স ও মাইএসকিউএল দিয়ে ডেক্সটপ সফটওয়্যার প্রজেক্ট"
          },
          {
            "en": "Maven Build Tool, Unit Testing (JUnit 5) & Packaging Executable JARs",
            "bn": "মাভেন বিল্ড টুল, জেইউনিট ৫ ও এক্সিকিউটেবল জার"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Java SE Programming Specialist Certificate",
        "bn": "জাভা এসই প্রোগ্রামিং স্পেশালিস্ট সার্টিফিকেট"
      },
      {
        "en": "Full Desktop Management System Source Code",
        "bn": "ডেস্কটপ ম্যানেজমেন্ট সিস্টেমের সম্পূর্ণ সোর্স কোড"
      },
      {
        "en": "OCA / OCP Java Certification Study Guide",
        "bn": "জাভা সার্টিফিকেশন স্টাডি গাইড"
      },
      {
        "en": "Spring Boot & Android Career Roadmap Mentorship",
        "bn": "স্প্রিং বুট ও অ্যান্ড্রয়েড ক্যারিয়ার রোডম্যাপ মেন্টরশিপ"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Tanmoy Roy",
        "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
        "role": {
          "en": "Software Engineering Student",
          "bn": "সফটওয়্যার ইঞ্জিনিয়ারিং শিক্ষার্থী"
        },
        "rating": 5,
        "comment": {
          "en": "The Collections Framework and multithreading sessions were explained with real-world examples. Loved it!",
          "bn": "কালেকশনস ও মাল্টিথ্রেডিংয়ের ক্লাসগুলো খুব সহজ ও প্রাঞ্জল ছিল।"
        },
        "date": "3 Weeks Ago"
      }
    ]
  },
  {
    "id": "26",
    "slug": "programming-for-kids",
    "title": {
      "en": "Programming for Kids",
      "bn": "বাচ্চাদের জন্য কোডিং ও প্রোগ্রামিং"
    },
    "subtitle": {
      "en": "Interactive coding for young innovators: Scratch 3.0, block coding, animation, game design & Python basics",
      "bn": "স্ক্র্যাচ ৩.০, ব্লক কোডিং, অ্যানিমেশন, ২ডি গেম মেকিং ও পাইথন প্রোগ্রামিং"
    },
    "category": "others",
    "categoryLabel": {
      "en": "Others",
      "bn": "অন্যান্য"
    },
    "badge": {
      "en": "KIDS SPECIAL",
      "bn": "বাচ্চাদের স্পেশাল"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 85,
    "enrolledCount": "180+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "10,000৳",
    "rawFee": 10000,
    "originalFee": "15,000৳",
    "duration": {
      "en": "60 hrs. (2 Months)",
      "bn": "৬০ ঘণ্টা (২ মাস)"
    },
    "classesCount": {
      "en": "20 Classes",
      "bn": "২০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/programming for kids.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Tahsina Akter",
      "designation": {
        "en": "Lead STEM & Kids Coding Educator",
        "bn": "লিড স্টেম ও কিডস কোডিং এডুকেটর"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "6+ years teaching Scratch, robotics and creative programming to kids aged 8-15.",
        "bn": "৮-১৫ বছর বয়সী শিশুদের প্রোগ্রামিং ও রোবোটিক্সে ৬+ বছরের শিক্ষকতা।"
      },
      "experience": "6+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Fun, engaging and highly creative programming course for kids (ages 8 to 16). Topics include computational thinking, block-based coding with MIT Scratch 3.0, interactive storytelling & animations, 2D game development (Maze, Catch, Flappy Bird), logic puzzles, introduction to Python with Turtle graphics and building fun interactive mini apps.",
      "bn": "৮ থেকে ১৬ বছর বয়সী বাচ্চাদের জন্য আনন্দময় কোডিং কোর্স। এতে স্ক্র্যাচ ৩.০ ব্লক কোডিং, কার্টুন অ্যানিমেশন তৈরি, মেজ গেম ও ফ্ল্যাপি বার্ড গেম বানানো, লজিক পাজল এবং পাইথন টার্টল দিয়ে মজার মজার ছবি আঁকা শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Turn screen time into creative skill-building! Kids learn essential problem-solving, algorithmic thinking and creativity through visual block programming and interactive game creation before transitioning smoothly into beginner-friendly Python code.",
      "bn": "বাচ্চারা মোবাইল ও কম্পিউটারে শুধু গেম না খেলে নিজেই কীভাবে গেম ও অ্যানিমেশন বানাতে পারে তা শিখবে। এতে তাদের লজিক্যাল থিংকিং, গণিতের ভয় দূর হওয়া এবং ভবিষ্যতের প্রযুক্তি দক্ষতায় এগিয়ে থাকা নিশ্চিত হবে।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "MIT Scratch 3.0 Games",
          "bn": "স্ক্র্যাচ ৩.০ গেম মেকিং"
        },
        "desc": {
          "en": "Build 8+ fun arcade games, animations and interactive stories.",
          "bn": "৮টিরও বেশি আর্কেড গেম ও অ্যানিমেশন তৈরি।"
        },
        "icon": "Sparkles"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Computational Thinking",
          "bn": "লজিক ও প্রবলেম সলভিং"
        },
        "desc": {
          "en": "Develop logic, loops, conditionals, variables and creative problem solving.",
          "bn": "লজিক, লুপস ও কন্ডিশনাল চিন্তাভাবনা বৃদ্ধি।"
        },
        "icon": "Cpu"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Python Turtle Graphics",
          "bn": "পাইথন টার্টল গ্রাফিক্স"
        },
        "desc": {
          "en": "Smooth transition from blocks to real Python syntax with visual art.",
          "bn": "ভিজ্যুয়াল আর্টের মাধ্যমে রিয়েল পাইথন কোডিংয়ের হাতেখড়ি।"
        },
        "icon": "Code2"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Understand core programming concepts: sequences, loops, variables and events.",
        "bn": "প্রোগ্রামিংয়ের মূল ধারণা: সিকোয়েন্স, লুপস ও ভ্যারিয়েবলস বোঝা।"
      },
      {
        "en": "Create interactive cartoons, animated stories and music with Scratch.",
        "bn": "স্ক্র্যাচ দিয়ে কার্টুন অ্যানিমেশন ও মিউজিক্যাল স্টোরি তৈরি করা।"
      },
      {
        "en": "Design and code full 2D games with scoring, lives and collision detection.",
        "bn": "স্কোর ও লেভেল সহ সম্পূর্ণ ২ডি গেম তৈরি করা।"
      },
      {
        "en": "Draw geometric shapes, mandalas and colorful patterns with Python Turtle.",
        "bn": "পাইথন টার্টল দিয়ে আকর্ষণীয় জ্যামিতিক নকশা আঁকা।"
      },
      {
        "en": "Boost cognitive problem-solving confidence and present final creative projects.",
        "bn": "আত্মবিশ্বাস বৃদ্ধি এবং ফাইনাল প্রজেক্ট প্রদর্শন করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Scratch 3.0 & Creative Animation",
          "bn": "মডিউল ১: স্ক্র্যাচ ৩.০ ও ক্রিয়েটিভ অ্যানিমেশন"
        },
        "duration": {
          "en": "6 Classes • 18 Hours",
          "bn": "৬ টি ক্লাস • ১৮ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Introduction to Coding & MIT Scratch 3.0 Interface (Sprites, Costumes, Sounds)",
            "bn": "কোডিং পরিচিতি ও স্ক্র্যাচ ইন্টারফেস"
          },
          {
            "en": "Motion, Looks & Sound Blocks: Making Characters Dance & Speak",
            "bn": "ক্যারেক্টার মুভমেন্ট, ডায়ালগ ও সাউন্ড ইফেক্টস"
          },
          {
            "en": "Events & Loops (Repeat, Forever): Creating Animated Stories",
            "bn": "ইভেন্টস ও লুপস দিয়ে অ্যানিমেটেড গল্প তৈরি"
          },
          {
            "en": "Variables & Sensing Blocks: Interactive Quizzes & Calculator",
            "bn": "ভ্যারিয়েবলস ও সেন্সিং দিয়ে ইন্টারঅ্যাক্টিভ কুইজ"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: 2D Game Development in Scratch",
          "bn": "মডিউল ২: স্ক্র্যাচে ২ডি গেম ডেভেলপমেন্ট"
        },
        "duration": {
          "en": "8 Classes • 24 Hours",
          "bn": "৮ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Game 1: Catch the Fruit Falling Game (Score, Timers & Lives)",
            "bn": "গেম ১: ফ্রুট ক্যাচিং গেম (স্কোর ও টাইমার সহ)"
          },
          {
            "en": "Game 2: Maze Runner & Obstacle Avoidance Game",
            "bn": "গেম ২: মেজ রানার ও অবস্ট্যাকল এভয়েড গেম"
          },
          {
            "en": "Game 3: Ping Pong 2-Player Ball Game with Physics Bounce",
            "bn": "গেম ৩: পিং পং টু-প্লেয়ার বল গেম"
          },
          {
            "en": "Game 4: Flappy Bird Clone with Gravity & Jumping Mechanics",
            "bn": "গেম ৪: গ্র্যাভিটি ও জাম্পিং সহ ফ্ল্যাপি বার্ড গেম"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Introduction to Python Turtle & Project Showcase",
          "bn": "মডিউল ৩: পাইথন টার্টল ও প্রজেক্ট শোকেস"
        },
        "duration": {
          "en": "6 Classes • 18 Hours",
          "bn": "৬ টি ক্লাস • ১৮ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Transition to Real Text Code: Python Installation & IDLE",
            "bn": "টেক্সট কোডিং শুরু: পাইথন ও আইডল পরিচিতি"
          },
          {
            "en": "Python Turtle Graphics: Drawing Lines, Circles, Stars & Colors",
            "bn": "পাইথন টার্টল দিয়ে লাইন, সার্কেল ও তারা আঁকা"
          },
          {
            "en": "Loops in Python: Creating Beautiful Mandalas & Colorful Spirals",
            "bn": "পাইথনে লুপ ব্যবহার করে কালারফুল স্পাইরাল ডিজাইন"
          },
          {
            "en": "Final Kid Innovator Showcase Project & Young Coder Certificate",
            "bn": "ফাইনাল ইনোভেটর প্রজেক্ট প্রেজেন্টেশন ও সার্টিফিকেট"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Young Innovator Junior Coder Certificate",
        "bn": "ইয়াং ইনোভেটর জুনিয়র কোডার সার্টিফিকেট"
      },
      {
        "en": "8 Scratch Games & Python Turtle Project Files",
        "bn": "৮টি স্ক্র্যাচ গেম ও পাইথন প্রজেক্ট ফাইলস"
      },
      {
        "en": "Fun Interactive Activity Worksheets",
        "bn": "মজার মজার কালারফুল অ্যাক্টিভিটি ওয়ার্কশিট"
      },
      {
        "en": "Kid-Friendly Mentorship & Demo Day Presentation",
        "bn": "শিশুবান্ধব মেন্টরশিপ ও ফাইনাল ডেমো ডে"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Dr. Nazneen Akhter (Parent)",
        "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
        "role": {
          "en": "Parent of 10-year-old student",
          "bn": "১০ বছর বয়সী শিক্ষার্থীর অভিভাবক"
        },
        "rating": 5,
        "comment": {
          "en": "My 10-year-old son created 4 games on Scratch and now loves Python! Tahsina teacher is wonderful.",
          "bn": "আমার ছেলে নিজেই স্ক্র্যাচে গেম তৈরি করেছে। শিক্ষক অনেক ধৈর্য নিয়ে শিখিয়েছেন।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "27",
    "slug": "oracle-dba",
    "title": {
      "en": "Oracle DBA (Database Administrator)",
      "bn": "ওরাকল ডিবিএ (ডাটাবেস অ্যাডমিনিস্ট্রেটর)"
    },
    "subtitle": {
      "en": "Master Oracle Database 19c/21c administration, architecture, PL/SQL, RMAN backup, recovery & Data Guard",
      "bn": "ওরাকল ডাটাবেস ১৯সি অ্যাডমিনিস্ট্রেশন, আর্কিটেকচার, পিএল/এসকিউএল, আরম্যান ব্যাকআপ ও ডাটা গার্ড"
    },
    "category": "database",
    "categoryLabel": {
      "en": "Database",
      "bn": "ডাটাবেস"
    },
    "badge": {
      "en": "ENTERPRISE",
      "bn": "এন্টারপ্রাইজ"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 92,
    "enrolledCount": "190+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "20,000৳",
    "rawFee": 20000,
    "originalFee": "30,000৳",
    "duration": {
      "en": "100 hrs. (3 Months)",
      "bn": "১০০ ঘণ্টা (৩ মাস)"
    },
    "classesCount": {
      "en": "34 Classes",
      "bn": "৩৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/oracle dba.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Engr. Rezaul Karim",
      "designation": {
        "en": "Senior Oracle DBA & Data Center Consultant",
        "bn": "সিনিয়র ওরাকল ডিবিএ ও ডাটা সেন্টার কনসালট্যান্ট"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "12+ years managing multi-terabyte mission-critical Oracle databases for banks and telecom.",
        "bn": "ব্যাংক ও টেলিকমের ওরাকল ডাটাবেস পরিচালনায় ১২+ বছরের অভিজ্ঞতা।"
      },
      "experience": "12+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Oracle Database Administrator (OCA / OCP 19c) professional program. Learn Oracle memory structures (SGA, PGA), background processes, storage management (Tablespaces, Datafiles, ASM), user administration & privileges, RMAN automated backup & disaster recovery, performance tuning with AWR/ADDM and Oracle Data Guard high availability.",
      "bn": "ওরাকল ডাটাবেস ১৯সি ডিবিএ ও ওসিপি সার্টিফিকেশন কোর্স। এতে ওরাকল মেমোরি আর্কিটেকচার, টেবিলস্পেস, ইউজার সিকিউরিটি, আরম্যান ব্যাকআপ ও রিকভারি, পারফরম্যান্স টিউনিং এবং ডাটা গার্ড হাই অ্যাভেইলেবিলিটি শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Oracle is the undisputed database engine powering the world's leading financial institutions, telecommunications giants and national registries. Master enterprise database architecture, automated backup strategies with RMAN, disaster recovery and query optimization.",
      "bn": "এই কোর্সে আপনি ব্যাংকিং ও কর্পোরেট সেক্টরে ব্যবহৃত ওরাকল ডাটাবেস হ্যান্ডস-অন লিনাক্স সার্ভার ল্যাবে ইনস্টলেশন, সিকিউরিটি হার্ডেনিং, ব্যাকআপ-রিস্টোর এবং পারফরম্যান্স অপ্টিমাইজেশন শিখবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Oracle 19c Architecture",
          "bn": "ওরাকল ১৯সি আর্কিটেকচার"
        },
        "desc": {
          "en": "Master Multitenant CDB/PDB architecture, SGA, PGA and background processes.",
          "bn": "মাল্টিটেন্যান্ট আর্কিটেকচার ও মেমোরি ম্যানেজমেন্ট।"
        },
        "icon": "Database"
      },
      {
        "id": "cv2",
        "title": {
          "en": "RMAN Backup & Recovery",
          "bn": "আরম্যান ব্যাকআপ ও রিকভারি"
        },
        "desc": {
          "en": "Complete disaster recovery, point-in-time recovery, Flashback and cloning.",
          "bn": "কমপ্লিট আরম্যান ডিজাস্টার রিকভারি ও ফ্ল্যাশব্যাক।"
        },
        "icon": "ShieldCheck"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Data Guard & Tuning",
          "bn": "ডাটা গার্ড ও টিউনিং"
        },
        "desc": {
          "en": "Physical standby databases, Data Guard failover, AWR and ASH reports.",
          "bn": "ডাটা গার্ড ফেইলওভার ও এডব্লিউআর পারফরম্যান্স রিপোর্ট।"
        },
        "icon": "Server"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Install and configure Oracle Database 19c on Enterprise Linux servers.",
        "bn": "লিনাক্স সার্ভারে ওরাকল ডাটাবেস ১৯সি ইনস্টল ও কনফিগার করা।"
      },
      {
        "en": "Manage multitenant container (CDB) and pluggable databases (PDB).",
        "bn": "মাল্টিটেন্যান্ট সিডিবি ও পিডিবি পরিচালনা করা।"
      },
      {
        "en": "Execute backup, restoration and point-in-time recovery using Oracle RMAN.",
        "bn": "আরম্যান দিয়ে অটোমেটেড ব্যাকআপ ও রিকভারি সম্পন্ন করা।"
      },
      {
        "en": "Diagnose and optimize database performance using AWR, ADDM and ASH reports.",
        "bn": "এডব্লিউআর ও এডিডিএম দিয়ে ডাটাবেস পারফরম্যান্স টিউন করা।"
      },
      {
        "en": "Configure Oracle Data Guard for zero-data-loss disaster recovery.",
        "bn": "জিরো-ডাটা-লস ডিজাস্টার রিকভারির জন্য ডাটা গার্ড সেটআপ করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Oracle 19c Architecture, Installation & Storage",
          "bn": "মডিউল ১: ওরাকল ১৯সি আর্কিটেকচার, ইনস্টলেশন ও স্টোরেজ"
        },
        "duration": {
          "en": "11 Classes • 33 Hours",
          "bn": "১১ টি ক্লাস • ৩৩ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Oracle Database Architecture: Instance (SGA, PGA), Background Processes & Physical Files",
            "bn": "ওরাকল ইন্সট্যান্স, মেমোরি ও ফিজিক্যাল ফাইল আর্কিটেকচার"
          },
          {
            "en": "Installing Oracle Database 19c on Oracle Linux with Prerequisites & Database Configuration Assistant (DBCA)",
            "bn": "লিনাক্সে ওরাকল ১৯সি ইনস্টলেশন ও ডিবিসিএ"
          },
          {
            "en": "Managing Storage: Tablespaces, Datafiles, Segments, Extents & Undo Management",
            "bn": "টেবিলস্পেস ও ডাটাফাইল স্টোরেজ ম্যানেজমেন্ট"
          },
          {
            "en": "Multitenant Architecture: Managing CDBs and Creating/Plugging PDBs",
            "bn": "মাল্টিটেন্যান্ট সিডিবি ও পিডিবি ক্রিয়েশন"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Security, User Privileges & RMAN Backup/Recovery",
          "bn": "মডিউল ২: সিকিউরিটি, ইউজার প্রিভিলেজ ও আরম্যান ব্যাকআপ"
        },
        "duration": {
          "en": "12 Classes • 35 Hours",
          "bn": "১২ টি ক্লাস • ৩৫ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "User Administration: Profiles, Passwords, System/Object Privileges & Roles",
            "bn": "ইউজার অ্যাডমিনিস্ট্রেশন, রোলস ও প্রিভিলেজেস"
          },
          {
            "en": "Oracle Networking: Listener Configuration, TNSNAMES.ORA & Dynamic Service Registration",
            "bn": "ওরাকল নেটওয়ার্কিং ও লিসেনার কনফিগারেশন"
          },
          {
            "en": "RMAN (Recovery Manager) Fundamentals: Full, Incremental Backups & Archivelog Mode",
            "bn": "আরম্যান ব্যাকআপ: ফুল ও ইনক্রিমেন্টাল ব্যাকআপ"
          },
          {
            "en": "Disaster Recovery Scenarios: Complete/Incomplete Recovery & Flashback Technology",
            "bn": "ডিজাস্টার রিকভারি ও ওরাকল ফ্ল্যাশব্যাক"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Performance Tuning, Data Guard & Enterprise Tools",
          "bn": "মডিউল ৩: পারফরম্যান্স টিউনিং, ডাটা গার্ড ও এন্টারপ্রাইজ টুলস"
        },
        "duration": {
          "en": "11 Classes • 32 Hours",
          "bn": "১১ টি ক্লাস • ৩২ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Performance Monitoring: AWR, ADDM, ASH Reports & Execution Plans (EXPLAIN PLAN)",
            "bn": "এডব্লিউআর, এডিডিএম ও এক্সিকিউশন প্ল্যান বিশ্লেষণ"
          },
          {
            "en": "Oracle Data Guard Setup: Primary and Physical Standby Database Sync",
            "bn": "ওরাকল ডাটা গার্ড ও স্ট্যান্ডবাই ডাটাবেস সিঙ্ক"
          },
          {
            "en": "Oracle Enterprise Manager (OEM) Cloud Control & Data Pump Export/Import (expdp/impdp)",
            "bn": "ওরাকল ডাটা পাম্প ও ইএম ক্লাউড কন্ট্রোল"
          },
          {
            "en": "Oracle OCP Certification Roadmap & Banking Interview Preparation",
            "bn": "ওরাকল ওসিপি সার্টিফিকেশন ও ব্যাংকিং ডিবিএ ইন্টারভিউ প্রিপারেশন"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Oracle Certified DBA Training Certificate",
        "bn": "ওরাকল সার্টিফাইড ডিবিএ ট্রেনিং সার্টিফিকেট"
      },
      {
        "en": "Oracle 19c Enterprise Linux VM Lab Environment",
        "bn": "ওরাকল ১৯সি লিনাক্স ভিএম ল্যাব এনভায়রনমেন্ট"
      },
      {
        "en": "OCP Exam Dumps & Real Bank Scenario Lab Scripts",
        "bn": "ওসিপি এক্সাম ডাম্পস ও রিয়েল ব্যাংক ল্যাব স্ক্রিপ্টস"
      },
      {
        "en": "Banking & Enterprise DBA Job Referral Support",
        "bn": "ব্যাংক ও এন্টারপ্রাইজ ডিবিএ জব রেফারেল সাপোর্ট"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Kamruzzaman",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
        "role": {
          "en": "Oracle DBA at Commercial Bank",
          "bn": "বাণিজ্যিক ব্যাংকের ওরাকল ডিবিএ"
        },
        "rating": 5,
        "comment": {
          "en": "The RMAN restore labs and Data Guard configuration helped me secure a Senior DBA position in a private bank.",
          "bn": "আরম্যান রিস্টোর ও ডাটা গার্ডের ল্যাবগুলো ব্যাংকে সিনিয়র ডিবিএ পজিশনে চাকরি পেতে সাহায্য করেছে।"
        },
        "date": "1 Month Ago"
      }
    ]
  },
  {
    "id": "28",
    "slug": "oracle-apex",
    "title": {
      "en": "Oracle APEX (Application Express)",
      "bn": "ওরাকল অ্যাপেক্স"
    },
    "subtitle": {
      "en": "Low-code enterprise web development: SQL, PL/SQL, Interactive Grids, REST APIs & ERP Business Apps",
      "bn": "লো-কোড এন্টারপ্রাইজ ওয়েব ডেভেলপমেন্ট: এসকিউএল, পিএল/এসকিউএল, ইন্টারঅ্যাক্টিভ গ্রিডস ও ইআরপি অ্যাপস"
    },
    "category": "database",
    "categoryLabel": {
      "en": "Database",
      "bn": "ডাটাবেস"
    },
    "badge": {
      "en": "ENTERPRISE",
      "bn": "এন্টারপ্রাইজ"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 80,
    "enrolledCount": "170+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "25,000৳",
    "rawFee": 25000,
    "originalFee": "35,000৳",
    "duration": {
      "en": "100 hrs. (3 Months)",
      "bn": "১০০ ঘণ্টা (৩ মাস)"
    },
    "classesCount": {
      "en": "34 Classes",
      "bn": "৩৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/oracle apex.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Engr. Rezaul Karim",
      "designation": {
        "en": "Oracle APEX Architect & ERP Consultant",
        "bn": "ওরাকল অ্যাপেক্স আর্কিটেক্ট ও ইআরপি কনসালট্যান্ট"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "10+ years architecting enterprise ERP, Supply Chain and HR software on Oracle APEX.",
        "bn": "ওরাকল অ্যাপেক্সে ইআরপি ও এইচআরএম সফটওয়্যার তৈরিতে ১০+ বছরের অভিজ্ঞতা।"
      },
      "experience": "10+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Enterprise Low-Code Rapid Application Development with Oracle APEX. Topics include Oracle APEX architecture, SQL & Advanced PL/SQL scripting, Workspace administration, Page Designer, Interactive Grids & Interactive Reports, Forms & Master-Detail relationships, Dynamic Actions, JavaScript integration, RESTful Web Services, security authentication and full ERP application development.",
      "bn": "ওরাকল অ্যাপেক্স দিয়ে আধুনিক এন্টারপ্রাইজ ওয়েব অ্যাপ্লিকেশন ও ইআরপি তৈরির কোর্স। এতে এসকিউএল, পিএল/এসকিউএল, ইন্টারঅ্যাক্টিভ গ্রিডস, ডায়নামিক অ্যাকশনস, রেস্ট এপিআই ও সিকিউর বিজনেস পোর্টাল ডেভেলপমেন্ট শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Oracle APEX is the world's most powerful enterprise low-code application platform. Learn how to build responsive, data-driven web applications 20x faster with SQL, PL/SQL, interactive reports, charts and modern universal themes.",
      "bn": "এই কোর্সে আপনি সরকারি প্রতিষ্ঠান, বহুজাতিক কোম্পানি ও ব্যাংকিং সেক্টরে বহুল ব্যবহৃত ওরাকল অ্যাপেক্স ব্যবহার করে রিয়েল-ওয়ার্ল্ড একাউন্টিং, ইনভেন্টরি ও এইচআরএম ইআরপি সফটওয়্যার তৈরি শিখবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "20x Faster Low-Code",
          "bn": "২০ গুণ দ্রুত লো-কোড"
        },
        "desc": {
          "en": "Build responsive enterprise apps rapidly on top of Oracle database.",
          "bn": "ওরাকল ডাটাবেসের উপর দ্রুত রেসপনসিভ ওয়েব অ্যাপ্লিকেশন তৈরি।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Interactive Grids & Reports",
          "bn": "ইন্টারঅ্যাক্টিভ গ্রিডস ও রিপোর্টস"
        },
        "desc": {
          "en": "Faceted search, master-detail grids, pivot charts and PDF reporting.",
          "bn": "ফ্যাসেটেড সার্চ ও অ্যাডভান্সড ইন্টারঅ্যাক্টিভ রিপোর্টস।"
        },
        "icon": "Database"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Full ERP Project",
          "bn": "পূর্ণাঙ্গ ইআরপি প্রজেক্ট"
        },
        "desc": {
          "en": "Design and deploy a complete commercial ERP system with role-based access.",
          "bn": "রোল-বেসড সিকিউরিটি সহ সম্পূর্ণ কমার্শিয়াল ইআরপি সিস্টেম।"
        },
        "icon": "Server"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Administer Oracle APEX workspaces, schemas, users and web credentials.",
        "bn": "ওরাকল অ্যাপেক্স ওয়ার্কস্পেস ও স্কিমা পরিচালনা করা।"
      },
      {
        "en": "Write advanced SQL queries, PL/SQL stored procedures, packages and triggers.",
        "bn": "পিএল/এসকিউএল প্রসিডিউর, প্যাকেজ ও ট্রিগার তৈরি করা।"
      },
      {
        "en": "Design interactive reports, editable interactive grids and master-detail forms.",
        "bn": "এডিটেবল ইন্টারঅ্যাক্টিভ গ্রিড ও ফর্মস ডিজাইন করা।"
      },
      {
        "en": "Implement Dynamic Actions, AJAX callbacks and client-side JavaScript.",
        "bn": "ডায়নামিক অ্যাকশনস ও এজেক্স কলব্যাকস তৈরি করা।"
      },
      {
        "en": "Publish enterprise applications with custom authentication and REST APIs.",
        "bn": "কাস্টম অথেনটিকেশন ও রেস্ট এপিআই সহ অ্যাপ পাবলিশ করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: SQL/PL-SQL Core & APEX Architecture",
          "bn": "মডিউল ১: এসকিউএল/পিএল-এসকিউএল ও অ্যাপেক্স আর্কিটেকচার"
        },
        "duration": {
          "en": "11 Classes • 33 Hours",
          "bn": "১১ টি ক্লাস • ৩৩ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Oracle APEX Architecture, ORDS (REST Data Services) & Workspace Setup",
            "bn": "ওরাকল অ্যাপেক্স ও ওআরডিএস আর্কিটেকচার সেটআপ"
          },
          {
            "en": "Advanced SQL: Analytical Functions, Subqueries, Joins & Views",
            "bn": "অ্যাডভান্সড এসকিউএল: অ্যানালিটিক্যাল ফাংশনস ও জয়েনস"
          },
          {
            "en": "PL/SQL Mastery: Anonymous Blocks, Procedures, Functions, Packages & Triggers",
            "bn": "পিএল/এসকিউএল: প্রসিডিউরস, ফাংশনস ও ট্রিগার্স"
          },
          {
            "en": "SQL Workshop: Object Browser, SQL Commands, Scripts & Utilities",
            "bn": "এসকিউএল ওয়ার্কশপ ও অবজেক্ট ব্রাউজার"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Page Designer, Interactive Grids & Dynamic Actions",
          "bn": "মডিউল ২: পেজ ডিজাইনার, ইন্টারঅ্যাক্টিভ গ্রিডস ও ডায়নামিক অ্যাকশনস"
        },
        "duration": {
          "en": "12 Classes • 35 Hours",
          "bn": "১২ টি ক্লাস • ৩৫ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Page Designer Architecture, Component View & Universal Theme 42",
            "bn": "পেজ ডিজাইনার ও ইউনিভার্সাল থিম কাস্টমাইজেশন"
          },
          {
            "en": "Interactive Reports (IR) & Faceted Search with Custom Filtering",
            "bn": "ইন্টারঅ্যাক্টিভ রিপোর্টস ও ফ্যাসেটেড সার্চ"
          },
          {
            "en": "Interactive Grids (IG): Editable Cells, Validations, Processes & Master-Detail",
            "bn": "ইন্টারঅ্যাক্টিভ গ্রিডস ও মাস্টার-ডিটেইল রিলেশনস"
          },
          {
            "en": "Dynamic Actions: Events, Conditions, True/False Actions & Client-Side JavaScript",
            "bn": "ডায়নামিক অ্যাকশনস ও জাভাস্ক্রিপ্ট ইন্টিগ্রেশন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: REST APIs, Full ERP Project & Enterprise Security",
          "bn": "মডিউল ৩: রেস্ট এপিআই, ফুল ইআরপি প্রজেক্ট ও সিকিউরিটি"
        },
        "duration": {
          "en": "11 Classes • 32 Hours",
          "bn": "১১ টি ক্লাস • ৩২ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Authentication Schemes (Custom PL/SQL, LDAP, OAuth) & Authorization Schemes",
            "bn": "কাস্টম অথেনটিকেশন ও অথরাইজেশন স্কিমস"
          },
          {
            "en": "RESTful Web Services: Consuming and Publishing REST APIs in APEX",
            "bn": "রেস্ট এপিআই কনজিউম ও পাবলিশিং"
          },
          {
            "en": "Building a Full Enterprise ERP System (Inventory, Sales, Invoicing & PDF Reports)",
            "bn": "পূর্ণাঙ্গ এন্টারপ্রাইজ ইআরপি ও ইনভয়েস সিস্টেম প্রজেক্ট"
          },
          {
            "en": "Application Deployment, Patching & Oracle APEX Developer Job Strategy",
            "bn": "অ্যাপ্লিকেশন ডেপ্লয়মেন্ট ও জব স্ট্র্যাটেজি"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Oracle APEX Certified Developer Certificate",
        "bn": "ওরাকল অ্যাপেক্স সার্টিফাইড ডেভেলপার সার্টিফিকেট"
      },
      {
        "en": "Complete Source Code of Full Enterprise ERP Project",
        "bn": "সম্পূর্ণ এন্টারপ্রাইজ ইআরপি প্রজেক্টের সোর্স কোড"
      },
      {
        "en": "Oracle Cloud Free Tier Workspace Setup Guide",
        "bn": "ওরাকল ক্লাউড ফ্রি টিয়ার ওয়ার্কস্পেস গাইড"
      },
      {
        "en": "Corporate ERP Developer Job Placement Support",
        "bn": "কর্পোরেট ইআরপি ডেভেলপার জব প্লেসমেন্ট সাপোর্ট"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Shahnewaz Khan",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "role": {
          "en": "Oracle APEX Consultant",
          "bn": "ওরাকল অ্যাপেক্স কনসালট্যান্ট"
        },
        "rating": 5,
        "comment": {
          "en": "The Interactive Grid customization and PL/SQL package integrations are unmatched. Built my company's ERP easily!",
          "bn": "ইন্টারঅ্যাক্টিভ গ্রিড ও পিএল/এসকিউএল প্যাকেজের ক্লাসগুলো এক কথায় সেরা ছিল।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "29",
    "slug": "data-analysis-with-macro",
    "title": {
      "en": "Data Analysis with Macro",
      "bn": "ডাটা অ্যানালাইসিস উইথ ম্যাক্রো"
    },
    "subtitle": {
      "en": "Master Advanced Excel, VBA Macro Automation, Power Query, Dynamic Dashboards & Business Analytics",
      "bn": "অ্যাডভান্সড এক্সেল, ভিবিএ ম্যাক্রো অটোমেশন, পাওয়ার কোয়েরি ও ডাইনামিক বিজনেস ড্যাশবোর্ড"
    },
    "category": "database",
    "categoryLabel": {
      "en": "Database",
      "bn": "ডাটাবেস"
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
    "enrolledCount": "260+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "18,000৳",
    "rawFee": 18000,
    "originalFee": "25,000৳",
    "duration": {
      "en": "40 hrs. (1.5 Months)",
      "bn": "৪০ ঘণ্টা (১.৫ মাস)"
    },
    "classesCount": {
      "en": "14 Classes",
      "bn": "১৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/data analysis with macro.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Mahfuz Ahmed",
      "designation": {
        "en": "Lead Financial Analyst & BI Specialist",
        "bn": "লিড ফিন্যান্সিয়াল অ্যানালিস্ট ও বিআই স্পেশালিস্ট"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "8+ years in corporate financial modeling, automated data pipelines and business intelligence.",
        "bn": "কর্পোরেট ফিন্যান্সিয়াল মডেলিং ও অটোমেশনে ৮+ বছরের অভিজ্ঞতা।"
      },
      "experience": "8+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "High-impact business analytics and automation course. Topics include Advanced Excel functions (XLOOKUP, INDEX/MATCH, dynamic arrays), Power Query ETL & data transformation, interactive KPI dashboards, VBA programming fundamentals & syntax, automating repetitive reporting tasks with Macros, UserForms and database integration.",
      "bn": "অ্যাডভান্সড এক্সেল, ভিবিএ ম্যাক্রো কোডিং, পাওয়ার কোয়েরি, ডাইনামিক ড্যাশবোর্ড এবং বিজনেস ডাটা অটোমেশনের কমপ্লিট কোর্স। এতে ঘণ্টার কাজ সেকেন্ডে অটোমেট করা এবং আকর্ষণীয় এক্সিকিউটিভ রিপোর্ট তৈরি শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Eliminate repetitive manual spreadsheet work and transform into a high-value Business Data Analyst. Learn how to clean messy data with Power Query, write custom VBA scripts to automate reports with 1 click and create executive KPI dashboards.",
      "bn": "এই কোর্সে আপনি এক্সেলের অ্যাডভান্সড ফর্মুলা, পাওয়ার কোয়েরি দিয়ে ডাটা ক্লিনজিং, ভিবিএ ম্যাক্রো প্রোগ্রামিং এবং সি-লেভেল এক্সিকিউটিভদের জন্য আকর্ষণীয় বিজনেস অ্যানালিটিক্স ড্যাশবোর্ড তৈরি শিখবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "1-Click VBA Automation",
          "bn": "১-ক্লিক ভিবিএ অটোমেশন"
        },
        "desc": {
          "en": "Automate hours of repetitive daily reports into single-click macros.",
          "bn": "দৈনিক রিপোর্টিং কাজ এক ক্লিকে সম্পন্ন করার ম্যাক্রো কোড।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Power Query ETL",
          "bn": "পাওয়ার কোয়েরি ইটিএল"
        },
        "desc": {
          "en": "Extract, transform and clean multi-source data without formulas.",
          "bn": "মাল্টিপল সোর্স থেকে ডেটা অটোমেটেড ক্লিনজিং।"
        },
        "icon": "Database"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Interactive KPI Dashboards",
          "bn": "ইন্টারঅ্যাক্টিভ কেপিআই ড্যাশবোর্ড"
        },
        "desc": {
          "en": "Design C-suite executive dashboards with slicers, pivot charts & trends.",
          "bn": "স্লাইসার ও পিভট চার্ট সহ আকর্ষণীয় ড্যাশবোর্ড।"
        },
        "icon": "TrendingUp"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master advanced formulas: XLOOKUP, INDEX/MATCH, SUMIFS, FILTER, UNIQUE.",
        "bn": "অ্যাডভান্সড এক্সেল ফর্মুলা ব্যবহারে পূর্ণ দক্ষতা অর্জন।"
      },
      {
        "en": "Clean, transform and merge millions of rows using Power Query.",
        "bn": "পাওয়ার কোয়েরি দিয়ে বিশাল ডাটা ক্লিন ও মার্জ করা।"
      },
      {
        "en": "Write custom VBA macros to automate data extraction, formatting & emailing.",
        "bn": "ভিবিএ ম্যাক্রো কোড লিখে অটোমেটেড রিপোর্টিং সিস্টেম তৈরি করা।"
      },
      {
        "en": "Build custom UserForms for automated data entry and validations.",
        "bn": "ডাটা এন্ট্রির জন্য কাস্টম ইউজারফর্মস তৈরি করা।"
      },
      {
        "en": "Create dynamic financial and sales KPI executive dashboards.",
        "bn": "বিজনেস ও সেলসের জন্য ডাইনামিক কেপিআই ড্যাশবোর্ড তৈরি।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Advanced Excel Functions & Dynamic Formulas",
          "bn": "মডিউল ১: অ্যাডভান্সড এক্সেল ফাংশনস ও ডাইনামিক ফর্মুলা"
        },
        "duration": {
          "en": "4 Classes • 12 Hours",
          "bn": "৪ টি ক্লাস • ১২ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Mastering Modern Formulas: XLOOKUP, INDEX/MATCH, FILTER, SORT & UNIQUE",
            "bn": "মডার্ন ফর্মুলা: এক্সলুকআপ, ইনডেক্স/ম্যাচ ও ফিল্টার"
          },
          {
            "en": "Nested Logical Functions (IFS, SWITCH AND OR) & Error Handling (IFERROR)",
            "bn": "লজিক্যাল ফাংশনস ও এরর হ্যান্ডলিং"
          },
          {
            "en": "Data Validation, Dynamic Dependent Dropdowns & Conditional Formatting Rules",
            "bn": "ডাটা ভ্যালিডেশন ও ডিপেন্ডেন্ট ড্রপডাউন"
          },
          {
            "en": "Advanced Pivot Tables, Calculated Fields, Slicers & Timelines",
            "bn": "অ্যাডভান্সড পিভট টেবিলস ও স্লাইসার্স"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Power Query ETL & Interactive KPI Dashboards",
          "bn": "মডিউল ২: পাওয়ার কোয়েরি ইটিএল ও কেপিআই ড্যাশবোর্ড"
        },
        "duration": {
          "en": "5 Classes • 14 Hours",
          "bn": "৫ টি ক্লাস • ১৪ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Power Query Overview: Importing Data from Multiple Excel, CSV & Database Files",
            "bn": "পাওয়ার কোয়েরি দিয়ে মাল্টি-ফাইল ডাটা ইমপোর্ট"
          },
          {
            "en": "Data Cleaning: Unpivoting Columns, Splitting, Merging & Appending Queries",
            "bn": "ডাটা ক্লিনজিং: আনপিভট ও কোয়েরি মার্জ"
          },
          {
            "en": "Building Interactive Sales & Financial KPI Dashboards with Dynamic Charts",
            "bn": "ইন্টারঅ্যাক্টিভ সেলস ও ফিন্যান্সিয়াল ড্যাশবোর্ড ডিজাইন"
          },
          {
            "en": "Data Modeling, Relationships & What-If Analysis (Goal Seek, Solver)",
            "bn": "ডাটা মডেলিং ও হোয়াট-ইফ অ্যানালাইসিস"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: VBA Macro Programming & Automation Workflows",
          "bn": "মডিউল ৩: ভিবিএ ম্যাক্রো প্রোগ্রামিং ও অটোমেশন"
        },
        "duration": {
          "en": "5 Classes • 14 Hours",
          "bn": "৫ টি ক্লাস • ১৪ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Macro Recording, Developer Tab & Visual Basic Editor (VBE) Interface",
            "bn": "ম্যাক্রো রেকর্ডিং ও ভিবিএ এডিটর পরিচিতি"
          },
          {
            "en": "VBA Fundamentals: Variables, Data Types, If-Then-Else & For-Each / Do-While Loops",
            "bn": "ভিবিএ সিনট্যাক্স: ভ্যারিয়েবল ও লুপস"
          },
          {
            "en": "Automating Worksheets: Copying Data, Formatting & Auto-Generating PDF Invoices",
            "bn": "অটোমেটেড ডাটা ফরম্যাটিং ও পিডিএফ ইনভয়েস তৈরি"
          },
          {
            "en": "Creating Custom UserForms & Auto-Sending Email Reports via Outlook VBA",
            "bn": "কাস্টম ইউজারফর্ম তৈরি ও আউটলুক অটো-ইমেইল"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Certified Data Analyst with Macro Certificate",
        "bn": "ডাটা অ্যানালিস্ট উইথ ম্যাক্রো সার্টিফিকেট"
      },
      {
        "en": "25+ Ready-to-Use VBA Automation Macro Templates",
        "bn": "২৫+ রেডিমেড ভিবিএ ম্যাক্রো টেমপ্লেটস"
      },
      {
        "en": "Executive Dashboard Master Templates Pack",
        "bn": "এক্সিকিউটিভ ড্যাশবোর্ড মাস্টার টেমপ্লেট প্যাক"
      },
      {
        "en": "1-on-1 Automation Problem Solving Support",
        "bn": "১-অন-১ অটোমেশন প্রবলেম সলভিং সাপোর্ট"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Sharmin Sultana",
        "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
        "role": {
          "en": "Senior Operations Executive",
          "bn": "সিনিয়র অপারেশনস এক্সিকিউটিভ"
        },
        "rating": 5,
        "comment": {
          "en": "My daily 4-hour manual reporting was reduced to a 10-second button click with VBA Macro!",
          "bn": "আমার প্রতিদিনের ৪ ঘণ্টার কাজ এখন মাত্র ১০ সেকেন্ডে ম্যাক্রো দিয়ে শেষ হয়!"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "30",
    "slug": "certified-ethical-hacking-ceh",
    "title": {
      "en": "Certified Ethical Hacking (CEH)",
      "bn": "সার্টিফাইড এথিক্যাল হ্যাকিং (CEH)"
    },
    "subtitle": {
      "en": "Master CEH v12: Kali Linux, network scanning, vulnerability assessment, system hacking & web security",
      "bn": "কালি লিনাক্স, নেটওয়ার্ক স্ক্যানিং, ভালনারেবিলিটি অ্যাসেসমেন্ট, সিস্টেম হ্যাকিং ও ওয়েব সিকিউরিটি"
    },
    "category": "security",
    "categoryLabel": {
      "en": "Security",
      "bn": "সিকিউরিটি"
    },
    "badge": {
      "en": "CERTIFIED",
      "bn": "সার্টিফাইড"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 155,
    "enrolledCount": "340+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "18,000৳",
    "rawFee": 18000,
    "originalFee": "28,000৳",
    "duration": {
      "en": "80 hrs. (2.5 Months)",
      "bn": "৮০ ঘণ্টা (২.৫ মাস)"
    },
    "classesCount": {
      "en": "26 Classes",
      "bn": "২৬ টি ক্লাস"
    },
    "image": "/images/course thumbnail/ethical hacking.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Engr. Salman Farsi",
      "designation": {
        "en": "Lead Penetration Tester & Certified Ethical Hacker",
        "bn": "লিড পেনিট্রেশন টেস্টার ও সার্টিফাইড এথিক্যাল হ্যাকার"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "8+ years conducting red teaming, vulnerability assessments and bug bounty hunting.",
        "bn": "রেড টিমিং ও ভালনারেবিলিটি অ্যাসেসমেন্টে ৮+ বছরের অভিজ্ঞতা।"
      },
      "experience": "8+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Official Certified Ethical Hacker (CEH v12) certification curriculum. Topics include introduction to ethical hacking & footprinting, network scanning & enumeration (Nmap, Wireshark), vulnerability assessment & Nessus, system hacking & privilege escalation, malware threats & social engineering, web application attacks & SQL injection, wireless security and Kali Linux penetration testing labs.",
      "bn": "সার্টিফাইড এথিক্যাল হ্যাকার (CEH v12) কোর্স। এতে ফুটপ্রিন্টিং, এনম্যাপ স্ক্যানিং, ভালনারেবিলিটি অ্যাসেসমেন্ট, সিস্টেম হ্যাকিং, ম্যালওয়্যার থ্রেটস, এসকিউএল ইনজেকশন, ওয়াইফাই সিকিউরিটি এবং কালি লিনাক্স ল্যাব প্র্যাকটিস শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Learn how to think like a hacker to defend enterprise networks. Master the 5 phases of ethical hacking (Reconnaissance, Scanning, Gaining Access, Maintaining Access, Covering Tracks) in isolated virtual cybersecurity labs.",
      "bn": "এই কোর্সে আপনি সম্পূর্ণ লিগ্যাল উপায়ে হ্যাকারদের মতো চিন্তা করে প্রতিষ্ঠানের সাইবার নিরাপত্তা নিশ্চিত করা, সিস্টেমের ত্রুটি খুঁজে বের করা (Penetration Testing) এবং CEH সার্টিফিকেশন পরীক্ষার প্রস্তুতি শিখবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "CEH v12 Blueprint",
          "bn": "সিইএইচ ভি১২ সিলেবাস"
        },
        "desc": {
          "en": "100% aligned with EC-Council official exam domains and practical scenarios.",
          "bn": "ইসি-কাউন্সিল অফিসিয়াল সিলেবাস অনুযায়ী পূর্ণ প্রশিক্ষণ।"
        },
        "icon": "ShieldCheck"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Kali Linux Hands-on Labs",
          "bn": "কালি লিনাক্স লাইভ ল্যাবস"
        },
        "desc": {
          "en": "Master Metasploit, Nmap, Burp Suite, Wireshark, Hydras and John the Ripper.",
          "bn": "টপ সাইবার সিকিউরিটি টুলস ব্যবহারে গভীর দক্ষতা।"
        },
        "icon": "Code2"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Web & System Pentesting",
          "bn": "ওয়েব ও সিস্টেম পেন্টেস্টিং"
        },
        "desc": {
          "en": "OWASP Top 10 exploits, SQLi, XSS, CSRF, privilege escalation & payload delivery.",
          "bn": "ওওয়াস্প টপ ১০ অ্যাটাক ও সিকিউরিটি প্যাচিং।"
        },
        "icon": "Zap"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Execute advanced reconnaissance, OSINT and network footprinting.",
        "bn": "ওসিন্ট ও নেটওয়ার্ক ফুটপ্রিন্টিং করতে পারা।"
      },
      {
        "en": "Scan and enumerate live networks using Nmap, Masscan and Wireshark.",
        "bn": "এনম্যাপ ও ওয়্যারশার্ক দিয়ে নেটওয়ার্ক স্ক্যান ও অ্যানালাইজ করা।"
      },
      {
        "en": "Perform vulnerability assessments using Nessus and OpenVAS scanners.",
        "bn": "নেসাস দিয়ে সিস্টেমের নিরাপত্তা ত্রুটি খুঁজে বের করা।"
      },
      {
        "en": "Exploit system vulnerabilities with Metasploit and elevate privileges.",
        "bn": "মেটাসপ্লয়েট দিয়ে ভালনারেবিলিটি এক্সপ্লয়েট ও প্রিভিলেজ এসকেলেশন করা।"
      },
      {
        "en": "Pass the EC-Council CEH v12 examination.",
        "bn": "ইসি-কাউন্সিল CEH v12 পরীক্ষায় উত্তীর্ণ হওয়া।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Reconnaissance, Footprinting & Network Scanning",
          "bn": "মডিউল ১: ফুটপ্রিন্টিং ও নেটওয়ার্ক স্ক্যানিং"
        },
        "duration": {
          "en": "8 Classes • 24 Hours",
          "bn": "৮ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Ethical Hacking Fundamentals, Cyber Kill Chain & Legal Laws",
            "bn": "এথিক্যাল হ্যাকিং বেসিকস ও সাইবার ল"
          },
          {
            "en": "Footprinting & Reconnaissance: OSINT, Google Dorking, Shodan & Whois",
            "bn": "ফুটপ্রিন্টিং ও ওসিন্ট রিকন টেকনিকস"
          },
          {
            "en": "Network Scanning: Nmap Port Scanning, Host Discovery & OS Detection",
            "bn": "এনম্যাপ স্ক্যানিং ও ওএস ডিটেকশন"
          },
          {
            "en": "Network Enumeration: NetBIOS, SNMP, LDAP, SMTP & RPC Enumeration",
            "bn": "এসএনএমপি, এলড্যাপ ও এসএমটিপি এনুমারেশন"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Vulnerability Analysis, System Hacking & Malware",
          "bn": "মডিউল ২: ভালনারেবিলিটি অ্যানালাইসিস ও সিস্টেম হ্যাকিং"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Vulnerability Assessment with Nessus, OpenVAS & Risk Scoring (CVSS)",
            "bn": "নেসাস ও ওপেনভাস দিয়ে ভালনারেবিলিটি স্ক্যান"
          },
          {
            "en": "System Hacking: Password Cracking, Hash Extraction & Metasploit Payloads",
            "bn": "পাসওয়ার্ড ক্র্যাকিং ও মেটাসপ্লয়েট পেলোডস"
          },
          {
            "en": "Privilege Escalation on Windows & Linux Systems",
            "bn": "উইন্ডোজ ও লিনাক্স প্রিভিলেজ এসকেলেশন"
          },
          {
            "en": "Malware Threats: Trojans, Ransomware, Keyloggers & Social Engineering",
            "bn": "ম্যালওয়্যার থ্রেটস, র‍্যানসমওয়্যার ও সোশ্যাল ইঞ্জিনিয়ারিং"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Web App Attacks, Wireless Security & CEH Exam",
          "bn": "মডিউল ৩: ওয়েব অ্যাপ অ্যাটাকস, ওয়াইফাই ও সিইএইচ এক্সাম"
        },
        "duration": {
          "en": "8 Classes • 26 Hours",
          "bn": "৮ টি ক্লাস • ২৬ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Web App Hacking: OWASP Top 10, SQL Injection, XSS & CSRF with Burp Suite",
            "bn": "ওওয়াস্প টপ ১০, এসকিউএল ইনজেকশন ও বার্প সুইট"
          },
          {
            "en": "Wireless Network Security: WPA2/WPA3 Handshake Cracking & Evil Twin Attacks",
            "bn": "ওয়্যারলেস নেটওয়ার্ক সিকিউরিটি ও ওয়াইফাই অডিট"
          },
          {
            "en": "Evading IDS, Firewalls & Honeypots; Clearing Tracks & Incident Logs",
            "bn": "ফায়ারওয়াল ইভেশন ও ক্লিয়ারিং ট্র্যাকস"
          },
          {
            "en": "EC-Council CEH v12 Practice Exam Simulator & Certification Preparation",
            "bn": "CEH v12 এক্সাম প্র্যাকটিস সিমুলেটর ও মক টেস্ট"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Ethical Hacking Training Certificate",
        "bn": "এথিক্যাল হ্যাকিং ট্রেনিং সার্টিফিকেট"
      },
      {
        "en": "CEH v12 Exam Dumps & Official Review Guide",
        "bn": "CEH v12 এক্সাম ডাম্পস ও স্টাডি গাইড"
      },
      {
        "en": "Custom Virtual Hacking Lab Setup (Kali + Targets)",
        "bn": "কাস্টম ভার্চুয়াল হ্যাকিং ল্যাব সেটআপ"
      },
      {
        "en": "Cyber Security Job Placement Assistance",
        "bn": "সাইবার সিকিউরিটি জব প্লেসমেন্ট সাপোর্ট"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Tanvir Ahmed",
        "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
        "role": {
          "en": "Junior Security Analyst",
          "bn": "জুনিয়র সিকিউরিটি অ্যানালিস্ট"
        },
        "rating": 5,
        "comment": {
          "en": "The hands-on labs with Metasploit and Burp Suite were phenomenal. Cleared CEH on my first try!",
          "bn": "মেটাসপ্লয়েট ও বার্প সুইটের ল্যাবগুলো অসাধারণ ছিল। প্রথমবারেই সিইএইচ পাস করেছি।"
        },
        "date": "3 Weeks Ago"
      }
    ]
  },
  {
    "id": "31",
    "slug": "cyber-security-specialist",
    "title": {
      "en": "Cyber Security Specialist",
      "bn": "সাইবার সিকিউরিটি স্পেশালিস্ট"
    },
    "subtitle": {
      "en": "Master Defensive Cyber Security: SOC Analyst, SIEM (Splunk, Wazuh), Incident Response & Threat Hunting",
      "bn": "ডিফেন্সিভ সাইবার সিকিউরিটি, এসওসি অ্যানালিস্ট, স্প্লাঙ্ক এসআইইএম ও ইন্সিডেন্স রেসপন্স"
    },
    "category": "security",
    "categoryLabel": {
      "en": "Security",
      "bn": "সিকিউরিটি"
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
    "ratingsCount": 140,
    "enrolledCount": "310+ Enrolled",
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
    "image": "/images/course thumbnail/cyber security specialist.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Engr. Salman Farsi",
      "designation": {
        "en": "Lead SOC Architect & Cyber Security Consultant",
        "bn": "লিড এসওসি আর্কিটেক্ট ও সাইবার সিকিউরিটি কনসালট্যান্ট"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "8+ years managing enterprise Security Operations Centers (SOC) and incident response.",
        "bn": "এন্টারপ্রাইজ এসওসি ও সাইবার সিকিউরিটিতে ৮+ বছরের অভিজ্ঞতা।"
      },
      "experience": "8+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Comprehensive Blue Team Defensive Cyber Security and SOC Analyst program. Topics include cybersecurity fundamentals & threat landscapes, network security & firewall architectures, SIEM tools & log analysis (Splunk, Wazuh, Elastic), incident detection & triage, malware analysis fundamentals, vulnerability management and SOC Tier 1/2 operations.",
      "bn": "ব্লু টিম ডিফেন্সিভ সাইবার সিকিউরিটি ও এসওসি অ্যানালিস্ট কোর্স। এতে এন্টারপ্রাইজ থ্রেট ল্যান্ডস্কেপ, ফায়ারওয়াল আর্কিটেকচার, স্প্লাঙ্ক ও ওয়াজু এসআইইএম লগ অ্যানালাইসিস, ইন্সিডেন্ট হ্যান্ডলিং এবং ম্যালওয়্যার ডিটেকশন শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Protect enterprise organizations from modern cyber threats and ransomware attacks. Learn how to work inside a 24/7 Security Operations Center (SOC), configure SIEM platforms, analyze network logs, detect unauthorized intrusions and lead incident response playbooks.",
      "bn": "এই কোর্সে আপনি কর্পোরেট সিকিউরিটি অপারেশন্স সেন্টারে (SOC) একজন প্রফেশনাল অ্যানালিস্ট হিসেবে লগ অ্যানালাইসিস, রিয়েলটাইম সাইবার অ্যাটাক মনিটরিং ও থ্রেট হান্টিংয়ের বাস্তব প্রশিক্ষণ পাবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "SIEM & Log Analysis",
          "bn": "এসআইইএম ও লগ অ্যানালাইসিস"
        },
        "desc": {
          "en": "Configure Splunk, Wazuh and Elastic SIEM for real-time security alerting.",
          "bn": "স্প্লাঙ্ক ও ওয়াজু দিয়ে রিয়েলটাইম লগ অ্যানালাইসিস।"
        },
        "icon": "ShieldCheck"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Incident Response Playbooks",
          "bn": "ইন্সিডেন্ট রেসপন্স প্লেবুকস"
        },
        "desc": {
          "en": "NIST & SANS incident response frameworks, containment and root cause analysis.",
          "bn": "এনআইএসটি ফ্রেমওয়ার্ক অনুযায়ী সাইবার হামলার প্রতিরোধ।"
        },
        "icon": "Server"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Threat Intelligence & MITRE",
          "bn": "থ্রেট ইন্টেলিজেন্স ও মিট্রে"
        },
        "desc": {
          "en": "Map cyber adversary tactics using MITRE ATT&CK and threat intelligence feeds.",
          "bn": "মিট্রে অ্যাটাক ফ্রেমওয়ার্ক ও থ্রেট হান্টিং।"
        },
        "icon": "Zap"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Understand enterprise cybersecurity architecture and defensive frameworks.",
        "bn": "এন্টারপ্রাইজ সাইবার সিকিউরিটি আর্কিটেকচার বোঝা।"
      },
      {
        "en": "Monitor, correlate and analyze security logs using Splunk & Wazuh SIEM.",
        "bn": "স্প্লাঙ্ক ও ওয়াজু এসআইইএম দিয়ে সিকিউরিটি লগ বিশ্লেষণ করা।"
      },
      {
        "en": "Investigate security alerts and execute incident response procedures.",
        "bn": "সিকিউরিটি অ্যালার্ট তদন্ত ও ইন্সিডেন্ট রেসপন্স করা।"
      },
      {
        "en": "Perform static and dynamic basic malware analysis to extract IOCs.",
        "bn": "ম্যালওয়্যার বিশ্লেষণ করে থ্রেট আইওসি খুঁজে বের করা।"
      },
      {
        "en": "Land high-paying SOC Analyst Tier-1 and Cyber Security Engineer positions.",
        "bn": "এসওসি অ্যানালিস্ট ও সাইবার সিকিউরিটি পদে চাকরি পাওয়া।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Cyber Threats, Network Defense & SOC Fundamentals",
          "bn": "মডিউল ১: সাইবার থ্রেটস, নেটওয়ার্ক ডিফেন্স ও এসওসি"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Cyber Security Fundamentals, Attack Vectors & The CIA Triad",
            "bn": "সাইবার সিকিউরিটি ফান্ডামেন্টালস ও অ্যাটাক ভেক্টরস"
          },
          {
            "en": "Enterprise Network Security: Firewalls, IDS/IPS, Proxies & VPNs",
            "bn": "ফায়ারওয়াল, আইডিএস/আইপিএস ও প্রক্সি সিকিউরিটি"
          },
          {
            "en": "SOC Architecture: Roles, Responsibilities, Shift Workflows & Tier-1 Operations",
            "bn": "এসওসি আর্কিটেকচার ও টিয়ার-১ অপারেশনস"
          },
          {
            "en": "MITRE ATT&CK Framework & Cyber Threat Intelligence (CTI)",
            "bn": "মিট্রে অ্যাটাক ফ্রেমওয়ার্ক ও সাইবার থ্রেট ইন্টেলিজেন্স"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: SIEM Platforms (Splunk & Wazuh) & Log Analysis",
          "bn": "মডিউল ২: এসআইইএম (স্প্লাঙ্ক ও ওয়াজু) ও লগ অ্যানালাইসিস"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Introduction to SIEM (Security Information and Event Management) Architecture",
            "bn": "এসআইইএম আর্কিটেকচার ও ডেটা কালেকশন"
          },
          {
            "en": "Splunk Setup, SPL (Search Processing Language), Dashboards & Alert Rules",
            "bn": "স্প্লাঙ্ক এসপিএল কুয়েরি, ড্যাশবোর্ড ও অ্যালার্ট রুলস"
          },
          {
            "en": "Wazuh Open Source SIEM & XDR Deployment on Linux & Windows Agents",
            "bn": "ওয়াজু ওপেন সোর্স এসআইইএম ও এজেন্ট কনফিগারেশন"
          },
          {
            "en": "Windows Event Logs Analysis (Sysmon) & Linux Auth/Syslog Investigation",
            "bn": "উইন্ডোজ ইভেন্ট লগ ও লিনাক্স সিসলগ অ্যানালাইসিস"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Incident Response, Malware Analysis & Career",
          "bn": "মডিউল ৩: ইন্সিডেন্ট রেসপন্স, ম্যালওয়্যার ও ক্যারিয়ার"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Incident Response Lifecycles (Preparation, Detection, Containment, Eradication)",
            "bn": "ইন্সিডেন্ট রেসপন্স লাইফসাইকেল ও প্লেবুকস"
          },
          {
            "en": "Basic Malware Analysis: Static & Dynamic Analysis (VirusTotal, Any.Run, PEStudio)",
            "bn": "বেসিক ম্যালওয়্যার অ্যানালাইসিস ও স্যান্ডবক্সিং"
          },
          {
            "en": "Network Packet Analysis with Wireshark & Network Forensic Artifacts",
            "bn": "ওয়্যারশার্ক দিয়ে নেটওয়ার্ক ফরেনসিক তদন্ত"
          },
          {
            "en": "SOC Analyst Technical Interview Preparation & Resume Guidance",
            "bn": "এসওসি অ্যানালিস্ট টেকনিক্যাল ইন্টারভিউ প্রিপারেশন"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Cyber Security Specialist Certificate",
        "bn": "সাইবার সিকিউরিটি স্পেশালিস্ট সার্টিফিকেট"
      },
      {
        "en": "Splunk & Wazuh Hands-on Virtual SOC Lab",
        "bn": "স্প্লাঙ্ক ও ওয়াজু ভার্চুয়াল এসওসি ল্যাব"
      },
      {
        "en": "SOC Analyst Technical Interview Q&A Bank",
        "bn": "এসওসি অ্যানালিস্ট টেকনিক্যাল ইন্টারভিউ প্রশ্ন ব্যাংক"
      },
      {
        "en": "Corporate SOC Placement Assistance",
        "bn": "কর্পোরেট এসওসি প্লেসমেন্ট সহায়তা"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Mahfuzur Rahman",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
        "role": {
          "en": "SOC Analyst Tier 1",
          "bn": "এসওসি অ্যানালিস্ট টিয়ার ১"
        },
        "rating": 5,
        "comment": {
          "en": "The Splunk search queries and Sysmon log investigation labs directly landed me my SOC job!",
          "bn": "স্প্লাঙ্ক ও সিসমন লগ অ্যানালাইসিস ল্যাবের জন্যই এসওসি অ্যানালিস্ট হিসেবে চাকরি পেয়েছি।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "32",
    "slug": "computer-hacking-forensic-investigator-chfi",
    "title": {
      "en": "Computer Hacking Forensic Investigator (CHFI)",
      "bn": "কম্পিউটার হ্যাকিং ফরেনসিক ইনভেস্টিগেটর (CHFI)"
    },
    "subtitle": {
      "en": "Master Digital Forensics: Evidence acquisition, Disk Imaging, Memory Forensics, Network Forensics & Anti-Forensics",
      "bn": "ডিজিটাল ফরেনসিকস, মেমোরি ফরেনসিকস, ডিস্ক ইমেজিং, নেটওয়ার্ক ইনভেস্টিগেশন ও সিএইচএফআই"
    },
    "category": "security",
    "categoryLabel": {
      "en": "Security",
      "bn": "সিকিউরিটি"
    },
    "badge": {
      "en": "ADVANCED",
      "bn": "অ্যাডভান্সড"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 75,
    "enrolledCount": "140+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "30,000৳",
    "rawFee": 30000,
    "originalFee": "42,000৳",
    "duration": {
      "en": "90 hrs. (3 Months)",
      "bn": "৯০ ঘণ্টা (৩ মাস)"
    },
    "classesCount": {
      "en": "30 Classes",
      "bn": "৩০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/computer hacking forensic investigator.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Engr. Salman Farsi",
      "designation": {
        "en": "Lead Digital Forensics Investigator & CHFI",
        "bn": "লিড ডিজিটাল ফরেনসিক ইনভেস্টিগেটর ও সিএইচএফআই"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "8+ years investigating cyber crimes, financial fraud and digital forensic evidence.",
        "bn": "সাইবার ক্রাইম তদন্ত ও ডিজিটাল ফরেনসিকে ৮+ বছরের অভিজ্ঞতা।"
      },
      "experience": "8+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Official EC-Council Computer Hacking Forensic Investigator (CHFI v10) curriculum. Learn digital forensics principles, legal chain of custody, evidence acquisition & write blockers (FTK Imager), file system forensics (FAT, NTFS, Ext4), RAM memory analysis (Volatility), registry forensics, email & network forensics and anti-forensics detection.",
      "bn": "ইসি-কাউন্সিল সার্টিফাইড ফরেনসিক ইনভেস্টিগেটর (CHFI v10) কোর্স। এতে ডিজিটাল এভিডেন্স সংগ্রহ, চেইন অফ কাস্টডি, এফটিকে ইমেজার, উইন্ডোজ ও লিনাক্স ফাইল সিস্টেম ফরেনসিক্স, র‍্যাম মেমোরি অ্যানালাইসিস ও কোর্টরুম রিপোর্ট তৈরি শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Become a licensed Cyber Crime & Digital Forensics Investigator. Learn the methodologies used by law enforcement and enterprise security teams to uncover digital evidence from compromised hard drives, memory dumps, cloud platforms and mobile devices.",
      "bn": "এই কোর্সে আপনি সাইবার অপরাধ তদন্ত, হ্যাকিংয়ের ডিজিটাল প্রমাণ সংগ্রহ ও বিশ্লেষণ, ডাটা রিকভারি এবং আইনগতভাবে গ্রহণযোগ্য ফরেনসিক রিপোর্ট তৈরি করার আন্তর্জাতিক দক্ষতা অর্জন করবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "CHFI v10 Certified",
          "bn": "সিএইচএফআই ভি১০ সার্টিফাইড"
        },
        "desc": {
          "en": "100% aligned with EC-Council Digital Forensics Investigator exam.",
          "bn": "ইসি-কাউন্সিলের অফিসিয়াল ফরেনসিক সিলেবাস অনুযায়ী প্রশিক্ষণ।"
        },
        "icon": "ShieldCheck"
      },
      {
        "id": "cv2",
        "title": {
          "en": "FTK & Volatility Memory",
          "bn": "এফটিকে ও ভোলাটিলিটি মেমোরি"
        },
        "desc": {
          "en": "Acquire bit-stream images and extract malware payloads from volatile RAM.",
          "bn": "বিট-বাই-বিট ডিস্ক ইমেজ ও র‍্যাম মেমোরি বিশ্লেষণ।"
        },
        "icon": "Database"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Courtroom Investigation",
          "bn": "লিগ্যাল ফরেনসিক ইনভেস্টিগেশন"
        },
        "desc": {
          "en": "Chain of custody, forensic hash validation (MD5/SHA256) and expert reporting.",
          "bn": "চেইন অফ কাস্টডি ও লিগ্যাল ফরেনসিক রিপোর্ট তৈরি।"
        },
        "icon": "Award"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Follow legal digital evidence acquisition and chain-of-custody protocols.",
        "bn": "আইনসম্মত ডিজিটাল প্রমাণ সংগ্রহ ও চেইন অফ কাস্টডি বজায় রাখা।"
      },
      {
        "en": "Perform bit-by-bit hard drive imaging using FTK Imager and write blockers.",
        "bn": "এফটিকে ইমেজার দিয়ে হুবহু ডিস্ক ইমেজ তৈরি ও ভেরিফাই করা।"
      },
      {
        "en": "Analyze Windows Registry, Prefetch, Shellbags and Event Log artifacts.",
        "bn": "উইন্ডোজ রেজিস্ট্রি ও সিস্টেম আর্টিফ্যাক্টস তদন্ত করা।"
      },
      {
        "en": "Extract running processes, passwords and injected code using Volatility.",
        "bn": "ভোলাটিলিটি দিয়ে র‍্যাম মেমোরি থেকে ম্যালওয়্যার কোড বের করা।"
      },
      {
        "en": "Pass the EC-Council CHFI v10 examination.",
        "bn": "ইসি-কাউন্সিল CHFI v10 সার্টিফিকেশন পরীক্ষায় পাস করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Forensics Fundamentals, Evidence Acquisition & Imaging",
          "bn": "মডিউল ১: ফরেনসিক ফান্ডামেন্টালস ও এভিডেন্স অ্যাকুইজিশন"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Computer Forensics Overview, Legal Procedures & Chain of Custody",
            "bn": "ডিজিটাল ফরেনসিকস ও চেইন অফ কাস্টডি রুলস"
          },
          {
            "en": "Forensics Lab Setup, Write Blockers & Evidence Preservation",
            "bn": "রাইট ব্লকার ও ফরেনসিক ল্যাব সেটআপ"
          },
          {
            "en": "Disk Imaging: FTK Imager, Guymager, Raw/DD vs E01 Formats & Hashing Verification",
            "bn": "ডিস্ক ইমেজিং: এফটিকে ইমেজার ও হ্যাশ ভেরিফিকেশন"
          },
          {
            "en": "File Systems Architecture: FAT16/32, NTFS (MFT, Alternate Data Streams), Ext4",
            "bn": "এনটিএফএস ও লিনাক্স ফাইল সিস্টেম ফরেনসিক্স"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Memory Forensics, Windows Artifacts & File Carving",
          "bn": "মডিউল ২: মেমোরি ফরেনসিকস ও উইন্ডোজ আর্টিফ্যাক্টস"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Volatile Memory (RAM) Acquisition: DumpIt, LiME & Memory Analysis with Volatility 3",
            "bn": "র‍্যাম মেমোরি ডাম্প ও ভোলাটিলিটি ৩ ফ্রেমওয়ার্ক"
          },
          {
            "en": "Windows Artifacts: Registry Hive Analysis, USB Forensics, Jump Lists & Shellbags",
            "bn": "উইন্ডোজ রেজিস্ট্রি ও ইউএসবি ফরেনসিক্স"
          },
          {
            "en": "File Carving & Data Recovery: Deleted File Recovery with Autopsy & Scalpel",
            "bn": "অটপসি দিয়ে ডিলিট হওয়া ফাইল রিকভারি"
          },
          {
            "en": "Browser Forensics (Chrome, Firefox History, Cookies, Cache) & Timeline Analysis",
            "bn": "ব্রাউজার ফরেনসিকস ও টাইমলাইন অ্যানালাইসিস"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Network/Email Forensics, Anti-Forensics & CHFI Exam",
          "bn": "মডিউল ৩: নেটওয়ার্ক ফরেনসিকস, অ্যান্টি-ফরেনসিকস ও সিএইচএফআই"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Network Forensics: Packet Analysis, Log Correlation & Intrusion Tracing",
            "bn": "নেটওয়ার্ক ফরেনসিকস ও ট্রাফিক অ্যানালাইসিস"
          },
          {
            "en": "Email Forensics: Header Analysis, Phishing Investigation & Spool Inspection",
            "bn": "ই-মেইল হেডার অ্যানালাইসিস ও ফিশিং ইনভেস্টিগেশন"
          },
          {
            "en": "Detecting Anti-Forensics: Steganography, Data Hiding, Wiping & Timestomping",
            "bn": "অ্যান্টি-ফরেনসিকস ও স্টেগানোগ্রাফি ডিটেকশন"
          },
          {
            "en": "Forensic Investigation Report Writing & EC-Council CHFI v10 Exam Prep",
            "bn": "ফরেনসিক ইনভেস্টিগেশন রিপোর্ট ও CHFI এক্সাম প্রিপারেশন"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "CHFI Forensic Investigator Training Certificate",
        "bn": "সিএইচএফআই ফরেনসিক ইনভেস্টিগেটর সার্টিফিকেট"
      },
      {
        "en": "CHFI v10 Exam Dumps & Practice Questions",
        "bn": "CHFI v10 এক্সাম ডাম্পস ও প্র্যাকটিস টেস্ট"
      },
      {
        "en": "Autopsy & FTK Hands-on Digital Forensic Labs",
        "bn": "অটপসি ও এফটিকে ডিজিটাল ফরেনসিক ল্যাবস"
      },
      {
        "en": "Digital Forensics & Law Enforcement Career Guidance",
        "bn": "ডিজিটাল ফরেনসিকস ক্যারিয়ার গাইডেন্স"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Ziaur Rahman",
        "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100",
        "role": {
          "en": "Cyber Forensics Specialist",
          "bn": "সাইবার ফরেনসিক স্পেশালিস্ট"
        },
        "rating": 5,
        "comment": {
          "en": "The Volatility RAM dump and Autopsy file carving sessions gave me real-world investigative skills.",
          "bn": "ভোলাটিলিটি দিয়ে মেমোরি ফরেনসিক্সের ক্লাসগুলো অসাধারণ ছিল।"
        },
        "date": "1 Month Ago"
      }
    ]
  },
  {
    "id": "33",
    "slug": "certified-information-systems-security-professional-cissp",
    "title": {
      "en": "CISSP (Certified Information Systems Security Professional)",
      "bn": "সিআইএসএসপি (CISSP)"
    },
    "subtitle": {
      "en": "Master (ISC)² CISSP: 8 Security Domains, Governance, Risk Management, Architecture & Operations",
      "bn": "আইএসসি-টু সিআইএসএসপি ৮টি সিকিউরিটি ডোমেন, গভর্নেন্স, রিস্ক ম্যানেজমেন্ট ও এন্টারপ্রাইজ সিকিউরিটি"
    },
    "category": "security",
    "categoryLabel": {
      "en": "Security",
      "bn": "সিকিউরিটি"
    },
    "badge": {
      "en": "GOLD STANDARD",
      "bn": "গোল্ড স্ট্যান্ডার্ড"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 70,
    "enrolledCount": "120+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "40,000৳",
    "rawFee": 40000,
    "originalFee": "55,000৳",
    "duration": {
      "en": "90 hrs. (3 Months)",
      "bn": "৯০ ঘণ্টা (৩ মাস)"
    },
    "classesCount": {
      "en": "30 Classes",
      "bn": "৩০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/cissp.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Engr. Salman Farsi",
      "designation": {
        "en": "CISSP Certified Chief Information Security Officer (CISO)",
        "bn": "সিআইএসএসপি সার্টিফাইড চিফ ইনফরমেশন সিকিউরিটি অফিসার"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "12+ years in executive cyber security governance, compliance and enterprise risk management.",
        "bn": "সাইবার সিকিউরিটি গভর্নেন্স ও এন্টারপ্রাইজ রিস্ক ম্যানেজমেন্টে ১২+ বছরের অভিজ্ঞতা।"
      },
      "experience": "12+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "The world's premier cybersecurity leadership certification by (ISC)². Comprehensive coverage of all 8 Common Body of Knowledge (CBK) domains: Security & Risk Management, Asset Security, Security Architecture & Engineering, Communication & Network Security, Identity & Access Management (IAM), Security Assessment & Testing, Security Operations and Software Development Security.",
      "bn": "বিশ্বের এক নম্বর ইনফরমেশন সিকিউরিটি লিডারশিপ সার্টিফিকেশন (ISC)² CISSP কোর্স। এতে ৮টি কোর সিকিউরিটি ডোমেন, এন্টারপ্রাইজ গভর্নেন্স, রিস্ক ম্যানেজমেন্ট, সিকিউরিটি আর্কিটেকচার, আইএএম এবং সিআইএসএসপি এক্সাম স্ট্র্যাটেজি শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Achieve the gold standard in cybersecurity. This program prepares senior security professionals, architects and IT managers to design, implement and manage a world-class cybersecurity program, passing the rigorous (ISC)² CISSP exam.",
      "bn": "এই কোর্সে আপনি সিআইএসও এবং সিনিয়র সিকিউরিটি লিডারদের দৃষ্টিভঙ্গি থেকে এন্টারপ্রাইজ সাইবার সিকিউরিটি পলিসি তৈরি, রিস্ক অ্যাসেসমেন্ট এবং গ্লোবাল সিআইএসএসপি সার্টিফিকেশনের পূর্ণ প্রস্তুতি সম্পন্ন করবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "8 (ISC)² CBK Domains",
          "bn": "৮টি সিআইএসএসপি ডোমেন"
        },
        "desc": {
          "en": "Comprehensive deep-dive into all official (ISC)² Common Body of Knowledge domains.",
          "bn": "অফিসিয়াল সিআইএসএসপি ৮টি ডোমেনের পুঙ্খানুপুঙ্খ আলোচনা।"
        },
        "icon": "ShieldCheck"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Executive Risk & Governance",
          "bn": "গভর্নেন্স ও রিস্ক ম্যানেজমেন্ট"
        },
        "desc": {
          "en": "Master ISO 27001, NIST CSF, GDPR, quantitative/qualitative risk analysis & BCP/DR.",
          "bn": "আইএসও ২৭০০১, জিডিপিআর ও বিজনেস কন্টিনিউটি প্ল্যানিং।"
        },
        "icon": "Award"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Exam Strategy & Mindset",
          "bn": "এক্সাম স্ট্র্যাটেজি ও মাইন্ডসেট"
        },
        "desc": {
          "en": "Develop the 'Think Like a Manager' mindset to master adaptive CISSP CAT exams.",
          "bn": "ম্যানেজারিয়াল মাইন্ডসেট ও সিআইএসএসপি এক্সাম ক্র্যাক স্ট্র্যাটেজি।"
        },
        "icon": "Zap"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Align information security strategy with enterprise business goals and risk tolerance.",
        "bn": "বিজনেস লক্ষ্যের সাথে সাইবার সিকিউরিটি স্ট্র্যাটেজি সমন্বয় করা।"
      },
      {
        "en": "Implement robust access controls, cryptographic standards and network architecture.",
        "bn": "ক্রিপ্টোগ্রাফিক স্ট্যান্ডার্ড ও এক্সেস কন্ট্রোল বাস্তবায়ন করা।"
      },
      {
        "en": "Develop Business Continuity (BCP) and Disaster Recovery (DRP) strategies.",
        "bn": "বিজনেস কন্টিনিউটি ও ডিজাস্টার রিকভারি প্ল্যান তৈরি করা।"
      },
      {
        "en": "Conduct vulnerability assessments, audits and security operations management.",
        "bn": "সিকিউরিটি অডিট ও অপারেশনস পরিচালনা করা।"
      },
      {
        "en": "Pass the (ISC)² CISSP CAT examination and attain CISSP credential.",
        "bn": "(ISC)² CISSP পরীক্ষায় পাস করে গ্লোবাল ক্রেডেনশিয়াল অর্জন করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Security Risk Management, Asset Security & Architecture",
          "bn": "মডিউল ১: সিকিউরিটি রিস্ক ম্যানেজমেন্ট ও আর্কিটেকচার"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Domain 1: Security and Risk Management (Policies, Compliance, Threat Modeling, BCP)",
            "bn": "ডোমেন ১: সিকিউরিটি অ্যান্ড রিস্ক ম্যানেজমেন্ট"
          },
          {
            "en": "Domain 2: Asset Security (Data Classification, Privacy, Retention & Destruction)",
            "bn": "ডোমেন ২: অ্যাসেট সিকিউরিটি ও ডাটা প্রাইভেসি"
          },
          {
            "en": "Domain 3: Security Architecture and Engineering (Cryptography, Symmetric/Asymmetric, PKI)",
            "bn": "ডোমেন ৩: সিকিউরিটি আর্কিটেকচার ও ক্রিপ্টোগ্রাফি"
          },
          {
            "en": "Security Models (Bell-LaPadula, Biba) & Secure Design Principles",
            "bn": "সিকিউরিটি মডেলস ও ট্রাস্টেড কম্পিউটিং বেস"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Network Security, Identity (IAM) & Security Assessment",
          "bn": "মডিউল ২: নেটওয়ার্ক সিকিউরিটি, আইএএম ও অ্যাসেসমেন্ট"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Domain 4: Communication and Network Security (Secure Protocols, Wireless, Segmentation)",
            "bn": "ডোমেন ৪: নেটওয়ার্ক সিকিউরিটি ও মাইক্রো-সেগমেন্টেশন"
          },
          {
            "en": "Domain 5: Identity and Access Management (Authentication, MFA, SSO, Federated IAM, SAML)",
            "bn": "ডোমেন ৫: আইডেন্টিটি অ্যান্ড এক্সেস ম্যানেজমেন্ট"
          },
          {
            "en": "Domain 6: Security Assessment and Testing (Audits, Penetration Testing, Log Reviews)",
            "bn": "ডোমেন ৬: সিকিউরিটি অ্যাসেসমেন্ট অ্যান্ড টেস্টিং"
          },
          {
            "en": "Vulnerability Management Programs & Third-Party Security Governance",
            "bn": "থার্ড-পার্টি রিস্ক ও ভালনারেবিলিটি ম্যানেজমেন্ট"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Security Operations, App Security & CISSP Exam Strategy",
          "bn": "মডিউল ৩: সিকিউরিটি অপারেশনস, সফটওয়্যার সিকিউরিটি ও এক্সাম"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Domain 7: Security Operations (Incident Management, Forensics, Disaster Recovery)",
            "bn": "ডোমেন ৭: সিকিউরিটি অপারেশনস ও ইন্সিডেন্ট হ্যান্ডলিং"
          },
          {
            "en": "Domain 8: Software Development Security (SDLC, DevSecOps, Code Review, OWASP)",
            "bn": "ডোমেন ৮: সফটওয়্যার ডেভেলপমেন্ট সিকিউরিটি ও DevSecOps"
          },
          {
            "en": "'Think Like a Manager' Decision Framework for CISSP Scenario Questions",
            "bn": "ম্যানেজারিয়াল ডিসিশন মেকিং ও সিনারিও অ্যানালাইসিস"
          },
          {
            "en": "(ISC)² CISSP Adaptive CAT Exam Simulation & Full Mock Exams",
            "bn": "সিআইএসএসপি অ্যাডাপ্টিভ ক্যাট এক্সাম সিমুলেশন"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "CISSP Training Completion Certificate",
        "bn": "সিআইএসএসপি ট্রেনিং কমপ্লিশন সার্টিফিকেট"
      },
      {
        "en": "Official (ISC)² CISSP CBK Reference Guides",
        "bn": "অফিসিয়াল সিআইএসএসপি স্টাডি গাইড ও রেফারেন্স"
      },
      {
        "en": "1,500+ CISSP Practice Questions Bank",
        "bn": "১,৫০০+ সিআইএসএসপি প্র্যাকটিস প্রশ্ন ব্যাংক"
      },
      {
        "en": "CISO & Senior Security Executive Mentorship",
        "bn": "সিআইএসও ও সিনিয়র সিকিউরিটি এক্সিকিউটিভ মেন্টরশিপ"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Golam Mostafa",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
        "role": {
          "en": "Information Security Manager",
          "bn": "ইনফরমেশন সিকিউরিটি ম্যানেজার"
        },
        "rating": 5,
        "comment": {
          "en": "The 'Think Like a Manager' methodology was the exact key to passing the CISSP exam at 125 questions!",
          "bn": "ম্যানেজারিয়াল মাইন্ডসেটের গাইডলাইনের কারণেই প্রথমবারেই সিআইএসএসপি পাস করেছি!"
        },
        "date": "1 Month Ago"
      }
    ]
  },
  {
    "id": "34",
    "slug": "diploma-in-multimedia",
    "title": {
      "en": "Diploma in Multimedia",
      "bn": "ডিপ্লোমা ইন মাল্টিমিডিয়া"
    },
    "subtitle": {
      "en": "6-Month Professional Diploma: Graphic Design, 3D Animation, Video Editing, Motion Graphics & Audio Production",
      "bn": "৬ মাসের ডিপ্লোমা: গ্রাফিক্স ডিজাইন, ৩ডি অ্যানিমেশন, ভিডিও এডিটিং, মোশন গ্রাফিক্স ও অডিও প্রোডাকশন"
    },
    "category": "diploma",
    "categoryLabel": {
      "en": "Diploma Programs",
      "bn": "ডিপ্লোমা প্রোগ্রাম"
    },
    "badge": {
      "en": "DIPLOMA",
      "bn": "ডিপ্লোমা"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 112,
    "enrolledCount": "280+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "85,000৳",
    "rawFee": 85000,
    "originalFee": "1,10,000৳",
    "duration": {
      "en": "252 hrs. (6 Months)",
      "bn": "২৫২ ঘণ্টা (৬ মাস)"
    },
    "classesCount": {
      "en": "84 Classes",
      "bn": "৮৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/diploma in multimedia.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Sabbir Hossain",
      "designation": {
        "en": "Creative Director & Lead Multimedia Architect",
        "bn": "ক্রিয়েটিভ ডিরেক্টর ও লিড মাল্টিমিডিয়া আর্কিটেক্ট"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "10+ years directing commercial television animations, films and digital multimedia studios.",
        "bn": "কমার্শিয়াল টিভি অ্যানিমেশন ও ফিল্ম প্রোডাকশনে ১০+ বছরের অভিজ্ঞতা।"
      },
      "experience": "10+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Comprehensive 6-Month professional Diploma in Multimedia. Curriculum includes graphic design & brand identity (Photoshop, Illustrator), audio engineering & sound design (Audition), video editing & film composition (Premiere Pro), motion graphics & visual effects (After Effects), 3D modeling & animation (Blender / Maya), digital broadcasting and international creative studio portfolio creation.",
      "bn": "৬ মাসের পূর্ণাঙ্গ ডিপ্লোমা ইন মাল্টিমিডিয়া কোর্স। এতে গ্রাফিক ডিজাইন, অডিও সাউন্ড ডিজাইন, সিনেমাটিক ভিডিও এডিটিং, মোশন গ্রাফিক্স, ব্লেন্ডার ৩ডি অ্যানিমেশন ও কমার্শিয়াল শোরিল তৈরি শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Master all facets of modern creative digital media. This flagship 252-hour diploma transforms you into a complete Multimedia Specialist capable of working in broadcast television, advertising agencies, game studios, VFX production houses and high-ticket freelance platforms.",
      "bn": "এই ডিপ্লোমা প্রোগ্রামে আপনি ফটোশপ, ইলাস্ট্রেটর, প্রিমিয়ার প্রো, আফটার ইফেক্টস এবং ৩ডি ব্লেন্ডার সফটওয়্যারে কাজ করে সম্পূর্ণ মাল্টিমিডিয়া ও ক্রিয়েটিভ ইন্ডাস্ট্রিতে ক্যারিয়ার গড়ার সুযোগ পাবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Full Creative Suite",
          "bn": "সম্পূর্ণ ক্রিয়েটিভ স্যুট"
        },
        "desc": {
          "en": "Master Photoshop, Illustrator, Premiere Pro, After Effects and Blender 3D.",
          "bn": "ডিজাইন, ভিডিও, মোশন ও ৩ডি অ্যানিমেশনের পূর্ণ প্যাকেজ।"
        },
        "icon": "Palette"
      },
      {
        "id": "cv2",
        "title": {
          "en": "3D Animation & VFX",
          "bn": "৩ডি অ্যানিমেশন ও ভিএফএক্স"
        },
        "desc": {
          "en": "3D modeling, lighting, texturing, rigging, animation and green screen CGI.",
          "bn": "ব্লেন্ডার ৩ডি মডেলিং ও স্পেশাল ভিজ্যুয়াল ইফেক্টস।"
        },
        "icon": "Sparkles"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Broadcast Quality Showreel",
          "bn": "ব্রডকাস্ট কোয়ালিটি শোরিল"
        },
        "desc": {
          "en": "Graduate with a stunning commercial multimedia showreel that commands premium clients.",
          "bn": "আন্তর্জাতিক ক্লায়েন্ট ও এজেন্সির জন্য আকর্ষণীয় শোরিল।"
        },
        "icon": "Award"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Create vector brand identities, packaging and commercial graphic designs.",
        "bn": "কমার্শিয়াল গ্রাফিক ডিজাইন ও ব্র্যান্ড আইডেন্টিটি তৈরি করা।"
      },
      {
        "en": "Edit commercial films, documentary videos and social media reels professionally.",
        "bn": "প্রফেশনাল ফিল্ম ও কমার্শিয়াল ভিডিও এডিট করা।"
      },
      {
        "en": "Design advanced 2D/3D motion graphics and kinetic typography in After Effects.",
        "bn": "আফটার ইফেক্টসে আকর্ষণীয় মোশন গ্রাফিক্স তৈরি করা।"
      },
      {
        "en": "Model, texture, light and animate 3D assets and characters in Blender.",
        "bn": "ব্লেন্ডারে ৩ডি ক্যারেক্টার ও অবজেক্ট মডেলিং ও অ্যানিমেশন করা।"
      },
      {
        "en": "Graduate with a 6-Month Government Endorsed Professional Diploma.",
        "bn": "৬ মাসের সরকারি অনুমোদিত প্রফেশনাল ডিপ্লোমা সার্টিফিকেট অর্জন।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Graphic Design, Branding & Digital Illustration",
          "bn": "মডিউল ১: গ্রাফিক ডিজাইন, ব্র্যান্ডিং ও ইলাস্ট্রেশন"
        },
        "duration": {
          "en": "28 Classes • 84 Hours",
          "bn": "২৮ টি ক্লাস • ৮৪ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "Adobe Photoshop Masterclass: Photo Manipulation, Retouching & AI Tools",
            "bn": "ফটোশপ মাস্টারক্লাস: ইমেজ ম্যানিপুলেশন ও এআই টুলস"
          },
          {
            "en": "Adobe Illustrator Masterclass: Vector Illustration, Logos & Typography",
            "bn": "ইলাস্ট্রেটর মাস্টারক্লাস: ভেক্টর আর্ট ও ব্র্যান্ডিং"
          },
          {
            "en": "Product Packaging Design, Die-Lines & 3D Mockup Presentation",
            "bn": "প্রোডাক্ট প্যাকেজিং ডিজাইন ও ডাই-লাইন"
          },
          {
            "en": "Social Media Campaign Visuals, Ad Creatives & Billboard Banners",
            "bn": "সোশ্যাল মিডিয়া ক্যাম্পেইন ও বিলবোর্ড ডিজাইন"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Audio Production, Premiere Pro & Film Editing",
          "bn": "মডিউল ২: অডিও প্রোডাকশন, প্রিমিয়ার প্রো ও ফিল্ম এডিটিং"
        },
        "duration": {
          "en": "28 Classes • 84 Hours",
          "bn": "২৮ টি ক্লাস • ৮৪ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "Adobe Audition: Sound Design, Foley, Voice Denoising & Multi-track Audio",
            "bn": "অ্যাডোবি অডিশন: সাউন্ড ডিজাইন ও ভয়েস ক্লিনিং"
          },
          {
            "en": "Adobe Premiere Pro: Timeline Mastery, Film Narrative & Multi-Cam Editing",
            "bn": "প্রিমিয়ার প্রো: টাইমলাইন ও মাল্টি-ক্যাম এডিটিং"
          },
          {
            "en": "Lumetri Color Grading, LUTs, Curves & Cinematic Film Looks",
            "bn": "লুমিত্রি কালার গ্রেডিং ও সিনেমাটিক লুক"
          },
          {
            "en": "Green Screen Removal (Ultra Key), Compositing & Broadcast Export",
            "bn": "গ্রিন স্ক্রিন রিমুভ ও ব্রডকাস্ট এক্সপোর্ট সেটিংস"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: After Effects Motion Graphics & Blender 3D Animation",
          "bn": "মডিউল ৩: আফটার ইফেক্টস মোশন ও ব্লেন্ডার ৩ডি অ্যানিমেশন"
        },
        "duration": {
          "en": "28 Classes • 84 Hours",
          "bn": "২৮ টি ক্লাস • ৮৪ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "Adobe After Effects: Keyframe Animation, Speed Curves, Lower Thirds & Titles",
            "bn": "আফটার ইফেক্টস: কি-ফ্রেম ও টাইটেল অ্যানিমেশন"
          },
          {
            "en": "Visual Effects (VFX): Particle Systems, Motion Tracking & Rotoscoping",
            "bn": "ভিজ্যুয়াল ইফেক্টস (VFX) ও মোশন ট্র্যাকিং"
          },
          {
            "en": "Blender 3D: Hard-Surface Modeling, Materials, Lighting (Cycles/Eevee) & Rigging",
            "bn": "ব্লেন্ডার ৩ডি: মডেলিং, মেটেরিয়ালস ও লাইটিং"
          },
          {
            "en": "3D Camera Animation, Rendering & Compiling Final Master Diploma Showreel",
            "bn": "৩ডি অ্যানিমেশন রেন্ডারিং ও ফাইনাল ডিপ্লোমা শোরিল"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "6-Month Government Endorsed Diploma Certificate",
        "bn": "৬ মাসের সরকারি অনুমোদিত প্রফেশনাল ডিপ্লোমা"
      },
      {
        "en": "1 TB Premium Multimedia Assets, Sound FX & 3D Models",
        "bn": "১ টেরাবাইট প্রিমিয়াম অ্যাসেটস ও ৩ডি মডেল লাইব্রেরি"
      },
      {
        "en": "High-End Media Studio Lab Access",
        "bn": "হাই-এন্ড মিডিয়া স্টুডিও ল্যাব প্র্যাকটিস এক্সেস"
      },
      {
        "en": "Direct Agency & Broadcast Media Placement Assistance",
        "bn": "টিভি চ্যানেল ও ক্রিয়েটিভ এজেন্সিতে জব প্লেসমেন্ট"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Mahfuzur Rahman",
        "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
        "role": {
          "en": "Creative Director at Ad Agency",
          "bn": "বিজ্ঞাপন সংস্থার ক্রিয়েটিভ ডিরেক্টর"
        },
        "rating": 5,
        "comment": {
          "en": "The 6-month journey covered everything from design to 3D Blender. Best multimedia training in Bangladesh.",
          "bn": "গ্রাফিক্স থেকে শুরু করে ৩ডি ব্লেন্ডার পর্যন্ত সব দারুণভাবে শেখানো হয়েছে।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "35",
    "slug": "diploma-in-web-technology",
    "title": {
      "en": "Diploma in Web Technology",
      "bn": "ডিপ্লোমা ইন ওয়েব টেকনোলজি"
    },
    "subtitle": {
      "en": "6-Month Full Stack Engineering Diploma: React, Next.js, Node.js, PHP Laravel, PostgreSQL & DevOps",
      "bn": "৬ মাসের ডিপ্লোমা: রিঅ্যাক্ট, নেক্সট.জেএস, নোড.জেএস, পিএইচপি লারাভেল, পোস্টগ্রেএসকিউএল ও ডেভঅপ্স"
    },
    "category": "diploma",
    "categoryLabel": {
      "en": "Diploma Programs",
      "bn": "ডিপ্লোমা প্রোগ্রাম"
    },
    "badge": {
      "en": "DIPLOMA",
      "bn": "ডিপ্লোমা"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 135,
    "enrolledCount": "320+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "90,000৳",
    "rawFee": 90000,
    "originalFee": "1,20,000৳",
    "duration": {
      "en": "252 hrs. (6 Months)",
      "bn": "২৫২ ঘণ্টা (৬ মাস)"
    },
    "classesCount": {
      "en": "84 Classes",
      "bn": "৮৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/diploma in web technology.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "MD Shamim Rana",
      "designation": {
        "en": "Lead Full-Stack Software Architect",
        "bn": "লিড ফুল-স্ট্যাক সফটওয়্যার আর্কিটেক্ট"
      },
      "image": "/mentors/shamim-rana.png",
      "bio": {
        "en": "2.5+ years architecting multi-tenant SaaS platforms, full-stack microservices and web engineering.",
        "bn": "এন্টারপ্রাইজ সাস ও ফুল স্ট্যাক ইঞ্জিনিয়ারিংয়ে ২.৫+ বছরের অভিজ্ঞতা।"
      },
      "experience": "2.5+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Premier 6-Month Diploma in Full Stack Web Technology. Covers modern frontend (HTML5, Tailwind, JavaScript ESNext, React 19, Next.js 15), multi-stack backend (Node.js/Express & PHP Laravel 11), databases (PostgreSQL, MongoDB, Redis), Docker containerization, CI/CD pipelines, AWS cloud hosting and enterprise SaaS capstone projects.",
      "bn": "৬ মাসের পূর্ণাঙ্গ ডিপ্লোমা ইন ফুল স্ট্যাক ওয়েব টেকনোলজি কোর্স। এতে আধুনিক ফ্রন্টএন্ড (রিঅ্যাক্ট ১৯, নেক্সট.জেএস ১৫, টেইলউইন্ড), ব্যাকএন্ড (নোড.জেএস ও পিএইচপি লারাভেল), ডাটাবেস (পোস্টগ্রেএসকিউএল, মঙ্গোডিবি), ডকার এবং এডব্লিউএস ক্লাউড ডেপ্লয়মেন্ট শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Graduate as an elite Full-Stack Software Engineer. This 252-hour intensive curriculum trains you across both modern JavaScript/TypeScript ecosystems and enterprise PHP Laravel architectures, preparing you for senior software engineer roles globally.",
      "bn": "এই ডিপ্লোমা প্রোগ্রামে আপনি ক্লায়েন্ট-সাইড আর্কিটেকচার থেকে শুরু করে হাই-পারফরম্যান্স ব্যাকএন্ড এপিআই, মাইক্রোসার্ভিসেস, ক্যাশিং ও ডেভঅপ্স অটোমেশন শিখে দেশি ও আন্তর্জাতিক আইটি কোম্পানিতে উচ্চ বেতনের চাকরির জন্য প্রস্তুত হবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Dual Stack Mastery",
          "bn": "ডুয়াল স্ট্যাক মাস্টারি"
        },
        "desc": {
          "en": "Master both React/Next.js/Node.js ecosystem and PHP Laravel enterprise stack.",
          "bn": "জাভাস্ক্রিপ্ট ফুল স্ট্যাক ও পিএইচপি লারাভেল দুটোতেই পারদর্শিতা।"
        },
        "icon": "Code2"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Docker & Cloud DevOps",
          "bn": "ডকার ও ক্লাউড ডেভঅপ্স"
        },
        "desc": {
          "en": "Containerize apps with Docker, configure CI/CD pipelines and deploy to AWS.",
          "bn": "ডকার কন্টেইনারাইজেশন ও এডব্লিউএস ক্লাউড ডেপ্লয়মেন্ট।"
        },
        "icon": "Server"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Enterprise Capstone SaaS",
          "bn": "এন্টারপ্রাইজ ক্যাপস্টোন সাস"
        },
        "desc": {
          "en": "Build and deploy production multi-tenant SaaS software with payment gateway.",
          "bn": "লাইভ মাল্টি-টেন্যান্ট সাস সফটওয়্যার প্রজেক্ট।"
        },
        "icon": "Zap"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Build high-performance web applications with React 19, Next.js 15 and TypeScript.",
        "bn": "রিঅ্যাক্ট ১৯ ও নেক্সট.জেএস ১৫ দিয়ে স্কেলেবল ওয়েব অ্যাপ তৈরি।"
      },
      {
        "en": "Architect RESTful and GraphQL APIs using Node.js/Express and PHP Laravel 11.",
        "bn": "নোড.জেএস ও লারাভেল দিয়ে সিকিউর ব্যাকএন্ড এপিআই ডিজাইন করা।"
      },
      {
        "en": "Design and optimize relational (PostgreSQL) and NoSQL (MongoDB) databases.",
        "bn": "পোস্টগ্রেএসকিউএল ও মঙ্গোডিবি ডাটাবেস অপ্টিমাইজেশন করা।"
      },
      {
        "en": "Implement Docker containers, Redis caching and automated CI/CD pipelines.",
        "bn": "ডকার ও রেডিস ক্যাশিং দিয়ে সিস্টেম পারফরম্যান্স বাড়ানো।"
      },
      {
        "en": "Graduate with a 6-Month Government Endorsed Professional Web Diploma.",
        "bn": "৬ মাসের সরকারি অনুমোদিত প্রফেশনাল ডিপ্লোমা সার্টিফিকেট অর্জন।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Advanced Frontend Engineering (React 19 & Next.js 15)",
          "bn": "মডিউল ১: অ্যাডভান্সড ফ্রন্টএন্ড ইঞ্জিনিয়ারিং (রিঅ্যাক্ট ও নেক্সট.জেএস)"
        },
        "duration": {
          "en": "28 Classes • 84 Hours",
          "bn": "২৮ টি ক্লাস • ৮৪ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "HTML5, CSS3, Tailwind CSS & Responsive Design Patterns",
            "bn": "এইচটিএমএল৫, সিএসএস৩ ও টেইলউইন্ড সিএসএস"
          },
          {
            "en": "JavaScript ESNext & TypeScript Deep-Dive: Generics, Interfaces & Type Safety",
            "bn": "জাভাস্ক্রিপ্ট ও টাইপস্ক্রিপ্ট ফান্ডামেন্টালস"
          },
          {
            "en": "React 19 Architecture: Server/Client Components, Custom Hooks & State Management",
            "bn": "রিঅ্যাক্ট ১৯ আর্কিটেকচার ও কাস্টম হুকস"
          },
          {
            "en": "Next.js 15 App Router: Server Actions, SSR, SSG, Dynamic Routes & SEO",
            "bn": "নেক্সট.জেএস ১৫ অ্যাপ রাউটার ও সার্ভার অ্যাকশনস"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Enterprise Backends (Node.js & PHP Laravel 11)",
          "bn": "মডিউল ২: এন্টারপ্রাইজ ব্যাকএন্ড (নোড.জেএস ও লারাভেল ১১)"
        },
        "duration": {
          "en": "28 Classes • 84 Hours",
          "bn": "২৮ টি ক্লাস • ৮৪ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "Node.js & Express Architecture, Event Loop & RESTful Microservices",
            "bn": "নোড.জেএস ও এক্সপ্রেস রেস্ট এপিআই"
          },
          {
            "en": "PHP 8.3 & Laravel 11 MVC: Eloquent ORM, Blade, Migrations & Sanctum APIs",
            "bn": "পিএইচপি ও লারাভেল ১১ এমভিসি আর্কিটেকচার"
          },
          {
            "en": "PostgreSQL & MongoDB Database Design, Indexing, Transactions & Aggregation",
            "bn": "পোস্টগ্রেএসকিউএল ও মঙ্গোডিবি ডাটাবেস ডিজাইন"
          },
          {
            "en": "Authentication: JWT, OAuth2, Session Guards & Role-Based Access Control (RBAC)",
            "bn": "জেডব্লিউটি ও রোল-বেসড সিকিউরিটি"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: DevOps, Cloud Deployment & Capstone SaaS Build",
          "bn": "মডিউল ৩: ডেভঅপ্স, ক্লাউড ডেপ্লয়মেন্ট ও ক্যাপস্টোন সাস"
        },
        "duration": {
          "en": "28 Classes • 84 Hours",
          "bn": "২৮ টি ক্লাস • ৮৪ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "Docker Containerization: Dockerfiles, Docker Compose & Multi-Container Setup",
            "bn": "ডকার কন্টেইনারাইজেশন ও ডকার কম্পোজ"
          },
          {
            "en": "Redis Caching, BullMQ Message Queues & WebSockets Realtime Events",
            "bn": "রেডিস ক্যাশিং ও ওয়েব সকেট রিয়েলটাইম কমিউনিকেশন"
          },
          {
            "en": "Building Multi-Tenant SaaS Capstone Project with bKash/Stripe Payment Gateway",
            "bn": "মাল্টি-টেন্যান্ট সাস ক্যাপস্টোন প্রজেক্ট বিল্ড"
          },
          {
            "en": "AWS EC2/S3 Cloud Deployment, Nginx Reverse Proxy, SSL & GitHub Actions CI/CD",
            "bn": "এডব্লিউএস ক্লাউড ডেপ্লয়মেন্ট ও সিআই/সিডি অটোমেশন"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "6-Month Government Endorsed Professional Web Diploma",
        "bn": "৬ মাসের সরকারি অনুমোদিত প্রফেশনাল ওয়েব ডিপ্লোমা"
      },
      {
        "en": "Full Source Code of 4 Enterprise Projects",
        "bn": "৪টি এন্টারপ্রাইজ প্রজেক্টের সম্পূর্ণ সোর্স কোড"
      },
      {
        "en": "Dedicated AWS Cloud & Linux Server Practice Infrastructure",
        "bn": "এডব্লিউএস ও লিনাক্স সার্ভার প্র্যাকটিস অ্যাক্সেস"
      },
      {
        "en": "Guaranteed Software Engineer Placement Assistance",
        "bn": "সফটওয়্যার কোম্পানিতে নিশ্চিত জব প্লেসমেন্ট সাপোর্ট"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Jubayer Ahmed",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "role": {
          "en": "Full Stack Software Engineer",
          "bn": "ফুল স্ট্যাক সফটওয়্যার ইঞ্জিনিয়ার"
        },
        "rating": 5,
        "comment": {
          "en": "The depth of Next.js and Laravel together gave me a massive edge. Hired as a Software Engineer at a top IT firm!",
          "bn": "নেক্সট.জেএস এবং লারাভেল একসাথে শেখায় খুব দ্রুত টপ আইটি ফার্মে সফটওয়্যার ইঞ্জিনিয়ার হিসেবে জয়েন করেছি।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "36",
    "slug": "diploma-in-networking",
    "title": {
      "en": "Diploma in Networking",
      "bn": "ডিপ্লোমা ইন নেটওয়ার্কিং"
    },
    "subtitle": {
      "en": "6-Month Enterprise Network Engineering Diploma: Cisco CCNA/CCNP, MikroTik MTCNA, Linux, Windows Server & Security",
      "bn": "৬ মাসের ডিপ্লোমা: সিসকো সিসিএনএ/সিসিএনপি, মিক্রোটিক, লিনাক্স সার্ভার, উইন্ডোজ সার্ভার ও সিকিউরিটি"
    },
    "category": "diploma",
    "categoryLabel": {
      "en": "Diploma Programs",
      "bn": "ডিপ্লোমা প্রোগ্রাম"
    },
    "badge": {
      "en": "DIPLOMA",
      "bn": "ডিপ্লোমা"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 125,
    "enrolledCount": "300+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "90,000৳",
    "rawFee": 90000,
    "originalFee": "1,20,000৳",
    "duration": {
      "en": "252 hrs. (6 Months)",
      "bn": "২৫২ ঘণ্টা (৬ মাস)"
    },
    "classesCount": {
      "en": "84 Classes",
      "bn": "৮৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/diploma in networking.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Engr. M. A. Wahid",
      "designation": {
        "en": "CCIE Certified Principal Network Consultant",
        "bn": "সিসিআইই সার্টিফাইড প্রিন্সিপাল নেটওয়ার্ক কনসালট্যান্ট"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "12+ years designing ISP, enterprise Cisco networks and data center infrastructures.",
        "bn": "আইএসপি ও এন্টারপ্রাইজ নেটওয়ার্কে ১২+ বছরের অভিজ্ঞতা।"
      },
      "experience": "12+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "6-Month Premier Diploma in Network & Systems Engineering. Covers PC hardware engineering, Cisco enterprise routing & switching (CCNA & CCNP concepts), MikroTik RouterOS (MTCNA/MTCRE), Red Hat Linux system administration, Windows Server 2022 Active Directory, network security & firewalls and ISP deployment capstones.",
      "bn": "৬ মাসের পূর্ণাঙ্গ ডিপ্লোমা ইন নেটওয়ার্ক ও সিস্টেমস ইঞ্জিনিয়ারিং কোর্স। এতে সিসকো সিসিএনএ ও সিসিএনপি রাউটিং-সুইচিং, মিক্রোটিক আইএসপি নেটওয়ার্ক, রেড হ্যাট লিনাক্স, উইন্ডোজ সার্ভার অ্যাক্টিভ ডিরেক্টরি এবং এন্টারপ্রাইজ সিকিউরিটি প্র্যাকটিক্যাল ল্যাবে শেখানো হয়।"
    },
    "fullDescription": {
      "en": "The most complete network engineering diploma in Bangladesh. Master the physical and logical layers of modern networking, ISP bandwidth distribution, enterprise domain controllers, Linux server administration and cybersecurity defense with physical Cisco racks and MikroTik hardware.",
      "bn": "এই ডিপ্লোমা প্রোগ্রামে আপনি ডাটা সেন্টার, আইএসপি ও মাল্টিন্যাশনাল কর্পোরেশনের নেটওয়ার্ক ইনফ্রাস্ট্রাকচার ডিজাইন ও পরিচালনা করার জন্য প্রয়োজনীয় সকল আন্তর্জাতিক সার্টিফিকেশন স্কিল অর্জন করবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Cisco + MikroTik + Linux",
          "bn": "সিসকো + মিক্রোটিক + লিনাক্স"
        },
        "desc": {
          "en": "Master the 3 pillars of modern enterprise networking and ISP administration.",
          "bn": "আধুনিক নেটওয়ার্কিংয়ের শীর্ষ ৩টি প্ল্যাটফর্মে পূর্ণ পারদর্শিতা।"
        },
        "icon": "Server"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Active Directory & Windows Server",
          "bn": "অ্যাক্টিভ ডিরেক্টরি ও উইন্ডোজ সার্ভার"
        },
        "desc": {
          "en": "Manage domain controllers, group policies (GPO), DNS, DHCP and file servers.",
          "bn": "ডোমেইন কন্ট্রোলার ও গ্রুপ পলিসি ম্যানেজমেন্ট।"
        },
        "icon": "ShieldCheck"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Physical Cisco Rack Labs",
          "bn": "ফিজিক্যাল সিসকো র‍্যাক ল্যাব"
        },
        "desc": {
          "en": "Hands-on configuration on real Cisco routers, switches and MikroTik CCR hardware.",
          "bn": "রিয়েল সিসকো ও মিক্রোটিক ডিভাইসে লাইভ কনফিগারেশন।"
        },
        "icon": "Cpu"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Configure enterprise Cisco routers and switches (OSPF, BGP, VLANs, STP).",
        "bn": "সিসকো রাউটার ও সুইচে এন্টারপ্রাইজ রাউটিং প্রটোকল কনফিগার করা।"
      },
      {
        "en": "Deploy MikroTik RouterOS for ISP bandwidth queues, PPPoE and firewalls.",
        "bn": "মিক্রোটিক দিয়ে আইএসপি ব্যান্ডউইথ ও ফায়ারওয়াল পরিচালনা করা।"
      },
      {
        "en": "Administer Red Hat Linux servers (storage, permissions, security, services).",
        "bn": "রেড হ্যাট লিনাক্স সার্ভার পরিচালনা ও কনফিগার করা।"
      },
      {
        "en": "Manage Windows Server 2022 Active Directory Domain Services and GPOs.",
        "bn": "উইন্ডোজ সার্ভার অ্যাক্টিভ ডিরেক্টরি ও গ্রুপ পলিসি পরিচালনা করা।"
      },
      {
        "en": "Graduate with a 6-Month Government Endorsed Professional Network Diploma.",
        "bn": "৬ মাসের সরকারি অনুমোদিত প্রফেশনাল নেটওয়ার্কিং ডিপ্লোমা অর্জন।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Cisco Routing, Switching & Enterprise Networking",
          "bn": "মডিউল ১: সিসকো রাউটিং, সুইচিং ও এন্টারপ্রাইজ নেটওয়ার্কিং"
        },
        "duration": {
          "en": "28 Classes • 84 Hours",
          "bn": "২৮ টি ক্লাস • ৮৪ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "TCP/IP Architecture, Subnetting (FLSM/VLSM) & Cisco IOS CLI",
            "bn": "টিসিপি/আইপি আর্কিটেকচার, সাবনেটিং ও সিসকো সিএলআই"
          },
          {
            "en": "Routing Protocols: Static, Dynamic OSPFv2/v3 & Advanced BGP Peering",
            "bn": "ওএসপিএফ ও বিজিপি রাউটিং কনফিগারেশন"
          },
          {
            "en": "Switching: VLANs, 802.1Q Trunks, Inter-VLAN Routing, STP & EtherChannel",
            "bn": "ভি-ল্যান, ট্রাংকিং, ইন্টার-ভিল্যান ও স্প্যানিং ট্রি"
          },
          {
            "en": "Access Control Lists (ACLs), NAT/PAT, Port Security & DHCP Snooping",
            "bn": "এসিএল, ন্যাট ও পোর্ট সিকিউরিটি কনফিগারেশন"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: MikroTik RouterOS & ISP Network Engineering",
          "bn": "মডিউল ২: মিক্রোটিক রাউটারওএস ও আইএসপি ইঞ্জিনিয়ারিং"
        },
        "duration": {
          "en": "28 Classes • 84 Hours",
          "bn": "২৮ টি ক্লাস • ৮৪ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "MikroTik Winbox Setup, Interface Bridges & IP Addressing",
            "bn": "মিক্রোটিক উইনবক্স ও ব্রিজ কনফিগারেশন"
          },
          {
            "en": "Bandwidth Management: Simple Queue, Queue Tree & PCQ Strategies",
            "bn": "ব্যান্ডউইথ ম্যানেজমেন্ট: কিউ ট্রি ও পিসিকিউ"
          },
          {
            "en": "PPPoE Server, Radius Server, Hotspot Gateway & Firewall Filters",
            "bn": "পিপিপিওই সার্ভার, রেডিয়াস ও ফায়ারওয়াল রুলস"
          },
          {
            "en": "BGP Peering with Upstream / IIG & Multi-WAN Load Balancing (PCC)",
            "bn": "আইআইজি বিজিপি পিয়ারিং ও লোড ব্যালেন্সিং"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Linux System Admin, Windows Server & Capstone",
          "bn": "মডিউল ৩: লিনাক্স সিস্টেম, উইন্ডোজ সার্ভার ও ক্যাপস্টোন"
        },
        "duration": {
          "en": "28 Classes • 84 Hours",
          "bn": "২৮ টি ক্লাস • ৮৪ ঘণ্টা"
        },
        "lessonsCount": 8,
        "topics": [
          {
            "en": "Red Hat Linux Administration: CLI, LVM Storage, Users & SSH Hardening",
            "bn": "রেড হ্যাট লিনাক্স: এলভিএম স্টোরেজ ও ইউজার্স"
          },
          {
            "en": "Windows Server 2022: Active Directory (AD DS), DNS, DHCP & Group Policies (GPO)",
            "bn": "উইন্ডোজ সার্ভার: অ্যাক্টিভ ডিরেক্টরি ও জিপিও"
          },
          {
            "en": "Network Monitoring Tools (Zabbix, MRTG, Cacti) & CC Camera / NVR Setup",
            "bn": "জ্যাববিক্স মনিটরিং ও সিসি ক্যামেরা কনফিগারেশন"
          },
          {
            "en": "Enterprise Network Infrastructure Deployment Capstone Project",
            "bn": "এন্টারপ্রাইজ নেটওয়ার্ক ডেপ্লয়মেন্ট ক্যাপস্টোন প্রজেক্ট"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "6-Month Government Endorsed Professional Network Diploma",
        "bn": "৬ মাসের সরকারি অনুমোদিত প্রফেশনাল নেটওয়ার্কিং ডিপ্লোমা"
      },
      {
        "en": "Cisco, MikroTik & Red Hat Training Certificates",
        "bn": "সিসকো, মিক্রোটিক ও রেড হ্যাট ট্রেনিং সার্টিফিকেটস"
      },
      {
        "en": "Full Physical Lab Rack Access with Cisco & MikroTik Routers",
        "bn": "ফিজিক্যাল সিসকো ও মিক্রোটিক র‍্যাক ল্যাব অ্যাক্সেস"
      },
      {
        "en": "Guaranteed Placement in Leading ISPs & Corporate IT",
        "bn": "টপ আইএসপি ও কর্পোরেট আইটি সেক্টরে প্লেসমেন্ট সহায়তা"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Tanvir Ahmed",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
        "role": {
          "en": "Network Operations Engineer",
          "bn": "নেটওয়ার্ক অপারেশনস ইঞ্জিনিয়ার"
        },
        "rating": 5,
        "comment": {
          "en": "The 6-month diploma gave me complete mastery over Cisco, MikroTik and Linux. Landed a Network Engineer job easily!",
          "bn": "সিসকো, মিক্রোটিক ও লিনাক্স একসাথে শেখায় খুব সহজেই নেটওয়ার্ক ইঞ্জিনিয়ার হিসেবে চাকরি পেয়েছি।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "37",
    "slug": "japanese-language",
    "title": {
      "en": "Japanese Language Program (N5 & N4)",
      "bn": "জাপানিজ ল্যাঙ্গুয়েজ প্রোগ্রাম (N5 ও N4)"
    },
    "subtitle": {
      "en": "Master Japanese for higher studies and SSW work visas: Hiragana, Katakana, Kanji, Grammar & JLPT N5/N4 prep",
      "bn": "হিরাগানা, কাতাকানা, কাঞ্জি, কথোপকথন ও জেএলপিটি N5/N4 এক্সাম প্রিপারেশন"
    },
    "category": "language",
    "categoryLabel": {
      "en": "Language",
      "bn": "ভাষা শিক্ষা"
    },
    "badge": {
      "en": "VISA SPECIAL",
      "bn": "ভিসা স্পেশাল"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 130,
    "enrolledCount": "350+ Enrolled",
    "languages": {
      "en": "Bengali / Japanese",
      "bn": "বাংলা / জাপানিজ"
    },
    "fee": "10,000৳",
    "rawFee": 10000,
    "originalFee": "15,000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "36 Classes",
      "bn": "৩৬ টি ক্লাস"
    },
    "image": "/images/course thumbnail/japanese languase program.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Sensei Rashedul Islam",
      "designation": {
        "en": "JLPT N1 Certified Lead Japanese Instructor",
        "bn": "জেএলপিটি এন১ সার্টিফাইড লিড জাপানিজ ইনস্ট্রাক্টর"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "Graduated from Tokyo University with 8+ years teaching Japanese language and culture.",
        "bn": "টোকিও ইউনিভার্সিটির গ্র্যাজুয়েট ও ৮+ বছরের জাপানিজ ভাষা শিক্ষক।"
      },
      "experience": "8+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Complete Japanese language mastery program for students and job seekers targeting Japan. Topics include Hiragana & Katakana writing mastery, 150+ essential Kanji characters, Minna no Nihongo grammar patterns, daily conversational fluency, listening comprehension (Choukai), Japanese workplace business etiquette and complete JLPT N5 / NAT-TEST preparation.",
      "bn": "জাপানে উচ্চশিক্ষা ও এসএসডব্লিউ ওয়ার্ক ভিসার জন্য পূর্ণাঙ্গ জাপানিজ ভাষা কোর্স। এতে হিরাগানা, কাতাকানা, কাঞ্জি, মিন্না নো নিহোঙ্গো ব্যাকরণ, লিসেনিং এবং জেএলপিটি N5 ও NAT-TEST পরীক্ষার পূর্ণ প্রস্তুতি শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Learn Japanese from native-level certified instructors. This comprehensive 3-month course covers reading, writing, listening and speaking with authentic Minna no Nihongo curriculum, preparing you 100% to pass the official JLPT N5 or NAT-TEST exam.",
      "bn": "এই কোর্সে আপনি জাপানি বর্ণমালা থেকে শুরু করে দৈনন্দিন সাবলীল কথোপকথন, ইন্টারভিউ কৌশল এবং জাপানের জব বা স্টুডেন্ট ভিসার জন্য প্রয়োজনীয় ল্যাঙ্গুয়েজ প্রফিসিয়েন্সি সার্টিফিকেট অর্জন করবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "JLPT N5/N4 Guaranteed",
          "bn": "জেএলপিটি N5/N4 প্রস্তুতি"
        },
        "desc": {
          "en": "Complete coverage of vocabulary, grammar, reading & listening for JLPT N5.",
          "bn": "জেএলপিটি ও ন্যাট টেস্টের ১০০% কমন উপযোগী প্রস্তুতি।"
        },
        "icon": "Globe2"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Conversational Fluency",
          "bn": "সাবলীল কথোপকথন"
        },
        "desc": {
          "en": "Interactive Japanese speaking sessions with native accent and pronunciation drills.",
          "bn": "সঠিক উচ্চারণ ও সাবলীল স্পোকেন প্র্যাকটিস।"
        },
        "icon": "Users"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Visa & Embassy Prep",
          "bn": "ভিসা ও অ্যাম্বাসি ইন্টারভিউ"
        },
        "desc": {
          "en": "Mock interview practice for Japanese student and SSW working visa processing.",
          "bn": "জাপান দূতাবাস ও ওয়ার্ক ভিসা ইন্টারভিউ প্রস্তুতি।"
        },
        "icon": "Award"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Read and write Hiragana, Katakana and 150+ essential Kanji characters fluently.",
        "bn": "হিরাগানা, কাতাকানা ও ১৫০টি কাঞ্জি পড়তে ও লিখতে পারা।"
      },
      {
        "en": "Understand and use daily Japanese conversational expressions and grammar.",
        "bn": "দৈনন্দিন জাপানিজ বাক্য গঠন ও ব্যাকরণ আয়ত্ত করা।"
      },
      {
        "en": "Score high marks in JLPT N5 / NAT-TEST listening (Choukai) and reading (Dokkai).",
        "bn": "জেএলপিটি লিসেনিং ও রিডিং সেকশনে ভালো স্কোর করা।"
      },
      {
        "en": "Confidently attend Japanese Embassy and Visa processing interviews.",
        "bn": "জাপান অ্যাম্বাসি ও ভিসা ইন্টারভিউতে আত্মবিশ্বাসের সাথে অংশ নেওয়া।"
      },
      {
        "en": "Pass the JLPT N5 / N4 / NAT-TEST exam on first attempt.",
        "bn": "প্রথমবারেই জেএলপিটি N5 বা N4 পরীক্ষায় পাস করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Hiragana, Katakana & Basic Pronunciation",
          "bn": "মডিউল ১: হিরাগানা, কাতাকানা ও উচ্চারণ"
        },
        "duration": {
          "en": "12 Classes • 24 Hours",
          "bn": "১২ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Japanese Writing System Overview: Hiragana 46 Characters & Stroke Order",
            "bn": "জাপানি বর্ণমালা: হিরাগানা ৪৬টি বর্ণ ও স্ট্রোক অর্ডার"
          },
          {
            "en": "Dakuon, Handakuon, Yoon Combinations & Double Consonants (Sokuon)",
            "bn": "ডাকুওন, হান্দাকুওন ও যুক্তবর্ণ উচ্চারণ"
          },
          {
            "en": "Katakana 46 Characters, Foreign Loan Words & Writing Practice",
            "bn": "কাতাকানা বর্ণমালা ও বিদেশি শব্দের ব্যবহার"
          },
          {
            "en": "Basic Greetings (Aisatsu), Numbers (1-1000), Days, Months & Self Introduction (Jikoshoukai)",
            "bn": "অভিবাদন, সংখ্যা গণনা ও নিজের পরিচয় দেওয়া"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Minna no Nihongo Grammar & Essential Kanji",
          "bn": "মডিউল ২: ব্যাকরণ (মিন্না নো নিহোঙ্গো) ও কাঞ্জি"
        },
        "duration": {
          "en": "12 Classes • 24 Hours",
          "bn": "১২ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Minna no Nihongo Lessons 1-12: Particles (Wa, Ga, O, Ni, De, To, Mo, Kara, Made)",
            "bn": "পার্টিকেলস ও বাক্য গঠন নিয়মাবলী"
          },
          {
            "en": "Verb Conjugations: Masu-Form, Te-Form, Nai-Form, Ta-Form & Dict-Form",
            "bn": "ভার্ব কনজুগেশন: মাছু ও তে-ফর্ম"
          },
          {
            "en": "Adjectives (I-Adjectives vs Na-Adjectives) & Time Expressions",
            "bn": "বিশেষণ ও সময় প্রকাশ করার নিয়ম"
          },
          {
            "en": "Essential N5 Kanji Characters (Radicals, Onyomi, Kunyomi & Stroke Order)",
            "bn": "প্রয়োজনীয় N5 কাঞ্জি ও রিডিং প্র্যাকটিস"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Listening Comprehension & JLPT N5 Mock Exams",
          "bn": "মডিউল ৩: লিসেনিং ও জেএলপিটি N5 মক টেস্ট"
        },
        "duration": {
          "en": "12 Classes • 24 Hours",
          "bn": "১২ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Listening Comprehension (Choukai) Strategies with Audio CD Drills",
            "bn": "অডিও লিসেনিং প্র্যাকটিস ও প্রশ্ন সমাধানের কৌশল"
          },
          {
            "en": "Reading Comprehension (Dokkai) Speed Tactics & Contextual Clues",
            "bn": "প্যাসেজ রিডিং ও দ্রুত উত্তর খুঁজে পাওয়ার কৌশল"
          },
          {
            "en": "Japanese Business Etiquette, Workplace Communication & Visa Interview Prep",
            "bn": "জাপানিজ বিজনেস এটিকেট ও ভিসা ইন্টারভিউ প্রস্তুতি"
          },
          {
            "en": "Full-Length JLPT N5 / NAT-TEST Official Mock Examination Simulation",
            "bn": "পূর্ণাঙ্গ জেএলপিটি N5 ও ন্যাট টেস্ট মক এক্সাম"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Japanese Language Course Completion Certificate",
        "bn": "জাপানিজ ল্যাঙ্গুয়েজ কোর্স সার্টিফিকেট"
      },
      {
        "en": "Minna no Nihongo 1 & 2 PDF Books + Audio Tracks",
        "bn": "মিন্না নো নিহোঙ্গো বই ও অডিও ফাইলস"
      },
      {
        "en": "JLPT N5 & NAT-TEST Past 10 Years Question Papers",
        "bn": "বিগত ১০ বছরের জেএলপিটি প্রশ্ন সমাধান"
      },
      {
        "en": "Japan Visa Processing & Higher Studies Consultation",
        "bn": "জাপান স্টুডেন্ট ও ওয়ার্ক ভিসা কনসাল্টেশন"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Sajid Hasan",
        "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
        "role": {
          "en": "Student Visa Candidate (Tokyo)",
          "bn": "স্টুডেন্ট ভিসা প্রার্থী (টোকিও)"
        },
        "rating": 5,
        "comment": {
          "en": "Passed the NAT-TEST on my first attempt and got my COE approved for Japan! Sensei is amazing.",
          "bn": "প্রথমবারেই ন্যাট টেস্ট পাস করেছি এবং জাপানের ভিসা সিওই পেয়েছি!"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "38",
    "slug": "korean-language",
    "title": {
      "en": "Korean Language Program (EPS-TOPIK)",
      "bn": "কোরিয়ান ল্যাঙ্গুয়েজ প্রোগ্রাম (EPS-TOPIK)"
    },
    "subtitle": {
      "en": "Master Korean for South Korea EPS employment & higher studies: Hangul script, Grammar, Vocabulary & EPS-TOPIK prep",
      "bn": "হাঙ্গুল বর্ণমালা, ব্যাকরণ, শব্দভাণ্ডার ও ইপিএস-টপিক সরকারি চাকরির শতভাগ প্রস্তুতি"
    },
    "category": "language",
    "categoryLabel": {
      "en": "Language",
      "bn": "ভাষা শিক্ষা"
    },
    "badge": {
      "en": "GOVT JOB PREP",
      "bn": "সরকারি জব প্রিপ"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 145,
    "enrolledCount": "380+ Enrolled",
    "languages": {
      "en": "Bengali / Korean",
      "bn": "বাংলা / কোরিয়ান"
    },
    "fee": "12,000৳",
    "rawFee": 12000,
    "originalFee": "18,000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "36 Classes",
      "bn": "৩৬ টি ক্লাস"
    },
    "image": "/images/course thumbnail/korean language program.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Seonsaengnim M. Alam",
      "designation": {
        "en": "TOPIK Level 6 Certified Korean Expert",
        "bn": "টপিক লেভেল ৬ সার্টিফাইড কোরিয়ান এক্সপার্ট"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "7+ years preparing candidates for BOESL South Korea EPS-TOPIK government jobs.",
        "bn": "বোয়েসেল দক্ষিণ কোরিয়া ইপিএস-টপিক সরকারি চাকরির ৭+ বছরের অভিজ্ঞ শিক্ষক।"
      },
      "experience": "7+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Comprehensive Korean language program specialized for South Korea EPS-TOPIK employment (BOESL government lottery & exam) and TOPIK I. Topics include Hangul alphabet mastery, Korean grammar particles, daily conversations, workplace manufacturing/agriculture vocabulary, listening & reading drills, Korean culture and UBT/CBT computer exam simulations.",
      "bn": "দক্ষিণ কোরিয়ায় সরকারিভাবে বোয়েসেলের মাধ্যমে ইপিএস কর্মী নিয়োগ এবং স্টুডেন্ট ভিসার জন্য পূর্ণাঙ্গ কোরিয়ান ভাষা কোর্স। এতে হাঙ্গুল বর্ণমালা, ব্যাকরণ, শব্দার্থ, লিসেনিং, রিডিং এবং ইউবিটি/সিবিটি কম্পিউটার পরীক্ষার পূর্ণ প্রস্তুতি শেখানো হয়।"
    },
    "fullDescription": {
      "en": "South Korea offers the highest-earning government employment opportunities for Bangladeshi youth through the EPS system. Master the official HRD Korea textbook, memorize essential workplace vocabulary and practice on simulated UBT/CBT software to score 180+ out of 200.",
      "bn": "এই কোর্সে আপনি একদম শূন্য থেকে কোরিয়ান বর্ণমালা উচ্চারণ, এইচআরডি কোরিয়ার অফিসিয়াল টেক্সটবুক, কারখানার কাজের জন্য প্রয়োজনীয় শব্দভাণ্ডার এবং কম্পিউটার ভিত্তিক ইউবিটি মক টেস্ট দিয়ে সর্বোচ্চ স্কোর নিশ্চিত করবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "HRD Korea EPS-TOPIK",
          "bn": "ইপিএস-টপিক সিলেবাস"
        },
        "desc": {
          "en": "Complete coverage of standard HRD Korea Textbook (Chapters 1 to 60).",
          "bn": "এইচআরডি কোরিয়া টেক্সটবুকের ৬০টি অধ্যায় সম্পূর্ণ শেষ করা।"
        },
        "icon": "Award"
      },
      {
        "id": "cv2",
        "title": {
          "en": "UBT / CBT Software Practice",
          "bn": "ইউবিটি / সিবিটি সফটওয়্যার ল্যাব"
        },
        "desc": {
          "en": "Unlimited practice on actual touchscreen UBT test software used by BOESL.",
          "bn": "বোয়েসেলের আসল পরীক্ষার মতো টাচস্ক্রিন ইউবিটি প্র্যাকটিস।"
        },
        "icon": "Laptop"
      },
      {
        "id": "cv3",
        "title": {
          "en": "High Passing Rate",
          "bn": "সর্বোচ্চ পাসের রেকর্ড"
        },
        "desc": {
          "en": "Proven track record of students securing 170-195+ scores in EPS-TOPIK.",
          "bn": "বিগত ব্যাচগুলোতে শিক্ষার্থীদের সর্বোচ্চ নম্বর পাওয়ার নিশ্চয়তা।"
        },
        "icon": "TrendingUp"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Read, write and pronounce the Korean Hangul script with perfect batchim rules.",
        "bn": "কোরিয়ান হাঙ্গুল বর্ণমালা ও বাচ্ছিম নিয়ম নিখুঁতভাবে পড়া ও লেখা।"
      },
      {
        "en": "Master all grammar particles and 2,000+ vocabulary words from HRD Korea book.",
        "bn": "এইচআরডি কোরিয়া বইয়ের ২০০০+ শব্দার্থ ও ব্যাকরণ আয়ত্ত করা।"
      },
      {
        "en": "Score 180+ on the official EPS-TOPIK reading (Ilgi) and listening (Deudgi) test.",
        "bn": "ইপিএস-টপিক পরীক্ষায় ১৮০+ মার্কস নিশ্চিত করা।"
      },
      {
        "en": "Pass the Skill Test and Color Blindness testing successfully.",
        "bn": "স্কিল টেস্ট ও ভাইভা পরীক্ষায় উত্তীর্ণ হওয়া।"
      },
      {
        "en": "Achieve the South Korea E-9 government work visa qualification.",
        "bn": "দক্ষিণ কোরিয়ায় সরকারি কাজের যোগ্যতা অর্জন করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Hangul Alphabet, Vowels, Consonants & Batchim",
          "bn": "মডিউল ১: হাঙ্গুল বর্ণমালা ও বাচ্ছিম নিয়ম"
        },
        "duration": {
          "en": "10 Classes • 20 Hours",
          "bn": "১০ টি ক্লাস • ২০ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Hangul Basics: 10 Basic Vowels, 11 Compound Vowels & Pronunciation Rules",
            "bn": "হাঙ্গুল স্বরবর্ণ (বেসিক ও যৌগিক) এবং উচ্চারণ"
          },
          {
            "en": "Consonants: 14 Basic Consonants & 5 Double Consonants",
            "bn": "হাঙ্গুল ব্যঞ্জনবর্ণ ও দ্বৈত ব্যঞ্জনবর্ণ"
          },
          {
            "en": "Batchim (Final Consonant) Rules, Sound Shifts & Nasalization",
            "bn": "বাচ্ছিম বা নিচের বর্ণের উচ্চারণ পরিবর্তনের সূত্র"
          },
          {
            "en": "Basic Vocabulary: Numbers (Sino-Korean & Native Korean), Days & Months",
            "bn": "সংখ্যা গণনা (চীন-কোরিয়ান ও পিওর কোরিয়ান) এবং দিন-তারিখ"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Standard Textbook Grammar & Vocabulary (Ch. 1-30)",
          "bn": "মডিউল ২: মূল পাঠ্যবই ও শব্দার্থ (অধ্যায় ১-৩০)"
        },
        "duration": {
          "en": "14 Classes • 28 Hours",
          "bn": "১৪ টি ক্লাস • ২৮ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Grammar Particles (Eun/Neun, I/Ga, Eul/Reul, E, Eso, Ro/Uro, Gwa/Wa)",
            "bn": "কোরিয়ান ব্যাকরণ পার্টিকেলস ও বাক্য গঠন"
          },
          {
            "en": "Daily Situations: Shopping, Directions, Hospital, Bank & Appointments",
            "bn": "দৈনন্দিন কাজের কথোপকথন: বাজার, ব্যাংক ও হাসপাতাল"
          },
          {
            "en": "Workplace Safety, Manufacturing Tools, Machinery & Protection Equipment Vocabulary",
            "bn": "কারখানার কাজের যন্ত্রপাতি ও নিরাপত্তা সরঞ্জাম পরিচিতি"
          },
          {
            "en": "Honorific Expressions, Formal (Imnida) vs Informal (Ayo/Oyo) Speech",
            "bn": "সম্মানসূচক ও ইনফরমাল কথপোকথন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Advanced Chapters (31-60) & UBT Exam Drills",
          "bn": "মডিউল ৩: অ্যাডভান্সড অধ্যায় (৩১-৬০) ও ইউবিটি পরীক্ষা"
        },
        "duration": {
          "en": "12 Classes • 24 Hours",
          "bn": "১২ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Standard Textbook Chapters 31 to 60: Labor Law, Contracts & Workplace Ethics",
            "bn": "শ্রম আইন, চুক্তি ও কোরিয়ান কর্মসংস্কৃতি"
          },
          {
            "en": "Listening (Deudgi) Audio Practice: Dialogues, Questions & Image Identification",
            "bn": "লিসেনিং অডিও প্র্যাকটিস ও সঠিক ছবি নির্বাচন"
          },
          {
            "en": "Reading (Ilgi) Strategies: Signboards, Charts, Short Paragraphs & Grammar Fillers",
            "bn": "সাইনবোর্ড, গ্রাফ চার্ট ও শূন্যস্থান পূরণ"
          },
          {
            "en": "Computerized UBT/CBT Mock Exam Simulations on Real Touchscreen Software",
            "bn": "আসল ইউবিটি সফটওয়্যারে মক টেস্ট ও স্কোর অ্যানালাইসিস"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Korean Language Course Completion Certificate",
        "bn": "কোরিয়ান ল্যাঙ্গুয়েজ কোর্স সার্টিফিকেট"
      },
      {
        "en": "Official HRD Korea 1 & 2 Textbooks + Audio Files",
        "bn": "এইচআরডি কোরিয়া টেক্সটবুক ১ ও ২ + অডিও ফাইলস"
      },
      {
        "en": "Unlimited Access to Computer UBT Exam Software",
        "bn": "কম্পিউটার ইউবিটি এক্সাম সফটওয়্যার অ্যাক্সেস"
      },
      {
        "en": "BOESL Registration, Lottery & Visa Guidance",
        "bn": "বোয়েসেল লটারি রেজিস্ট্রেশন ও ভিসা প্রসেসিং গাইডেন্স"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Shariful Islam",
        "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100",
        "role": {
          "en": "EPS Selected Candidate (South Korea)",
          "bn": "ইপিএস নির্বাচিত প্রার্থী (দক্ষিণ কোরিয়া)"
        },
        "rating": 5,
        "comment": {
          "en": "Scored 185 in the EPS-TOPIK exam! The UBT software practice made the real exam feel so easy.",
          "bn": "ইপিএস পরীক্ষায় ১৮৫ পেয়েছি! ইউবিটি ল্যাব প্র্যাকটিসের কারণে আসল পরীক্ষা খুব সহজ লেগেছে।"
        },
        "date": "3 Weeks Ago"
      }
    ]
  },
  {
    "id": "39",
    "slug": "german-language",
    "title": {
      "en": "German Language Program (Goethe A1/A2)",
      "bn": "জার্মান ল্যাঙ্গুয়েজ প্রোগ্রাম (Goethe A1/A2)"
    },
    "subtitle": {
      "en": "Master German for higher studies and Ausbildung in Germany: Grammar, Speaking, Listening & Goethe-Zertifikat prep",
      "bn": "জার্মানিতে উচ্চশিক্ষা ও আউসবিল্ডুংয়ের জন্য গ্যোথে সার্টিফিকাট A1/A2 এর পূর্ণ প্রস্তুতি"
    },
    "category": "language",
    "categoryLabel": {
      "en": "Language",
      "bn": "ভাষা শিক্ষা"
    },
    "badge": {
      "en": "VISA SPECIAL",
      "bn": "ভিসা স্পেশাল"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 115,
    "enrolledCount": "290+ Enrolled",
    "languages": {
      "en": "Bengali / German",
      "bn": "বাংলা / জার্মান"
    },
    "fee": "12,000৳",
    "rawFee": 12000,
    "originalFee": "18,000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "36 Classes",
      "bn": "৩৬ টি ক্লাস"
    },
    "image": "/images/course thumbnail/german language program.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Herr Tanvir Ahmed",
      "designation": {
        "en": "Goethe Certified C1 German Specialist",
        "bn": "গ্যোথে সার্টিফাইড সি১ জার্মান স্পেশালিস্ট"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "Studied in Munich, Germany with 8+ years preparing students for Goethe-Institut exams.",
        "bn": "জার্মানির মিউনিখে পড়ালেখা করা ও গ্যোথে পরীক্ষার ৮+ বছরের অভিজ্ঞ শিক্ষক।"
      },
      "experience": "8+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Comprehensive German Language mastery for Goethe-Zertifikat A1 and A2. Topics include German alphabet, phonetics & pronunciation, A1 grammar (articles Der/Die/Das, Nominative, Accusative, Dative cases, modal verbs), everyday vocabulary & conversations, listening (Hören), reading (Lesen), writing (Schreiben), speaking (Sprechen) and higher studies in Germany consultation.",
      "bn": "জার্মানিতে টিউশন-ফি ফ্রি উচ্চশিক্ষা ও আউসবিল্ডুং ভিসার জন্য গ্যোথে A1 ও A2 সার্টিফিকেশন কোর্স। এতে সঠিক জার্মান উচ্চারণ, আর্টিকেল (Der/Die/Das), আকুসাটিভ ও ডাটিভ কারক, স্পিকিং, লিসেনিং এবং গ্যোথে পরীক্ষার মক টেস্ট শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Germany is the #1 destination for tuition-free world-class European higher education and paid Ausbildung vocational training. Master the German language across all 4 CEFR skills (Reading, Writing, Listening, Speaking) to easily pass the official Goethe-Institut exam.",
      "bn": "এই কোর্সে আপনি জার্মান বর্ণমালা থেকে শুরু করে দৈনন্দিন ফ্লুয়েন্ট স্পিকিং, ইমেইল রাইটিং, লিসেনিং ও জার্মান দূতাবাস ইন্টারভিউয়ের পূর্ণাঙ্গ প্রস্তুতি পাবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Goethe A1/A2 Certified",
          "bn": "গ্যোথে A1/A2 প্রস্তুতি"
        },
        "desc": {
          "en": "100% aligned with official Goethe-Institut and ÖSD examination modules.",
          "bn": "গ্যোথে-ইনস্টিটিউট অফিসিয়াল মডিউল অনুযায়ী প্রস্তুতি।"
        },
        "icon": "Globe2"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Interactive Speaking Drills",
          "bn": "ইন্টারঅ্যাক্টিভ স্পিকিং"
        },
        "desc": {
          "en": "Daily 1-on-1 and group speaking practice for flawless German pronunciation.",
          "bn": "প্রতিটি ক্লাসে স্পিকিং ও ডায়ালগ প্র্যাকটিস।"
        },
        "icon": "Users"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Ausbildung & Visa Guidance",
          "bn": "আউসবিল্ডুং ও ভিসা সাপোর্ট"
        },
        "desc": {
          "en": "Complete guidance on German university admissions, blocked accounts & visa.",
          "bn": "জার্মান ইউনিভার্সিটি অ্যাডমিশন ও ভিসা ইন্টারভিউ গাইডেন্স।"
        },
        "icon": "Award"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Understand and pronounce German phonetics, umlauts (ä, ö, ü) and letter blends.",
        "bn": "জার্মান বর্ণ ও উমলাউটের সঠিক উচ্চারণ আয়ত্ত করা।"
      },
      {
        "en": "Master German genders (Der, Die, Das) and case systems (Nominativ, Akkusativ, Dativ).",
        "bn": "আর্টিকেল ও কারক পরিবর্তন সঠিকভাবে ব্যবহার করতে পারা।"
      },
      {
        "en": "Write formal emails, letters and fill out official registration forms in German.",
        "bn": "জার্মান ভাষায় ফরমাল ইমেইল ও চিঠি লিখতে পারা।"
      },
      {
        "en": "Speak confidently in everyday German dialogues (shopping, travel, doctor, work).",
        "bn": "দৈনন্দিন জীবনে সাবলীলভাবে জার্মান ভাষায় কথা বলা।"
      },
      {
        "en": "Pass the Goethe-Zertifikat A1 / A2 exam on your first attempt.",
        "bn": "প্রথমবারেই গ্যোথে A1 বা A2 পরীক্ষায় পাস করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: German Alphabet, Phonetics & Present Tense",
          "bn": "মডিউল ১: জার্মান বর্ণমালা, উচ্চারণ ও বর্তমান কাল"
        },
        "duration": {
          "en": "12 Classes • 24 Hours",
          "bn": "১২ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "German Alphabet, Special Characters (Ä, Ö, Ü, ß) & Phonetic Rules",
            "bn": "জার্মান বর্ণমালা, উমলাউট ও উচ্চারণ সূত্র"
          },
          {
            "en": "Self-Introduction (Sich vorstellen), Greetings, Numbers, Days & Months",
            "bn": "নিজের পরিচয় দেওয়া, অভিবাদন ও দিন-তারিখ"
          },
          {
            "en": "Definite and Indefinite Articles (Der, Die, Das / Ein, Eine, Ein) & Negation (Kein, Nicht)",
            "bn": "আর্টিকেলস ও নেগেশন নিয়ম"
          },
          {
            "en": "Regular and Irregular Verb Conjugation in Present Tense (Präsens)",
            "bn": "রেগুলার ও ইরেগুলার ভার্ব কনজুগেশন"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Cases (Akkusativ, Dativ), Modal Verbs & Daily Life",
          "bn": "মডিউল ২: আকুসাটিভ ও ডাটিভ কারক ও মোডাল ভার্বস"
        },
        "duration": {
          "en": "12 Classes • 24 Hours",
          "bn": "১২ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Akkusativ and Dativ Cases with Prepositions (mit, nach, in, auf, zu)",
            "bn": "আকুসাটিভ ও ডাটিভ প্রিপজিশনস"
          },
          {
            "en": "Modal Verbs (Können, Müssen, Wollen, Dürfen, Sollen, Möchten)",
            "bn": "মোডাল ভার্বসের সঠিক ব্যবহার"
          },
          {
            "en": "Possessive Pronouns (Mein, Dein, Sein, Ihr, Unser, Euer)",
            "bn": "পজেসিভ প্রোনাউনস"
          },
          {
            "en": "Past Tense (Perfekt) with Haben / Sein & Conversational Fluency",
            "bn": "অতীত কাল (পারফেক্ট) ও স্পিকিং ফ্লুয়েন্সি"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: 4 Skills Mastery (Lesen, Hören, Schreiben, Sprechen) & Exam",
          "bn": "মডিউল ৩: চার দক্ষতা ও গ্যোথে এক্সাম প্রিপারেশন"
        },
        "duration": {
          "en": "12 Classes • 24 Hours",
          "bn": "১২ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Listening (Hören): Announcements, Phone Messages & Conversational Audio",
            "bn": "লিসেনিং প্র্যাকটিস ও অডিও ট্র্যাক সমাধান"
          },
          {
            "en": "Reading (Lesen): Advertisements, Notices, Emails & Short Articles",
            "bn": "প্যাসেজ রিডিং ও শর্ট আর্টিকেলস"
          },
          {
            "en": "Writing (Schreiben): Formal Emails, SMS & Filling Registration Forms",
            "bn": "ফরমাল ইমেইল ও চিঠি লেখা"
          },
          {
            "en": "Speaking (Sprechen): Picture Descriptions, Asking Questions & Goethe Mock Exams",
            "bn": "স্পিকিং ইন্টারভিউ ও পূর্ণাঙ্গ গ্যোথে A1 মক টেস্ট"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "German Language Course Completion Certificate",
        "bn": "জার্মান ল্যাঙ্গুয়েজ কোর্স সার্টিফিকেট"
      },
      {
        "en": "Netzwerk / Studio d A1 Complete PDF Books & Audio",
        "bn": "নেটজওয়ার্ক A1 বই ও অডিও ফাইলস"
      },
      {
        "en": "Goethe-Zertifikat A1 Official Past Papers & Mock Exams",
        "bn": "গ্যোথে A1 অফিসিয়াল অতীতের প্রশ্ন সমাধান"
      },
      {
        "en": "Germany University Admission & Ausbildung Guidance",
        "bn": "জার্মানি বিশ্ববিদ্যালয় ভর্তি ও আউসবিল্ডুং গাইডেন্স"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Mushfiqur Rahman",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
        "role": {
          "en": "Ausbildung Candidate (Frankfurt)",
          "bn": "আউসবিল্ডুং প্রার্থী (ফ্রাঙ্কফুর্ট)"
        },
        "rating": 5,
        "comment": {
          "en": "Scored 94% on my Goethe A1 exam! The speaking partner sessions gave me tremendous confidence.",
          "bn": "গ্যোথে A1 পরীক্ষায় ৯৪% মার্ক পেয়েছি! স্পিকিং সেশনগুলো অসাধারণ ছিল।"
        },
        "date": "3 Weeks Ago"
      }
    ]
  },
  {
    "id": "40",
    "slug": "ielts-mastery",
    "title": {
      "en": "IELTS Comprehensive Preparation",
      "bn": "আইইএলটিএস কমপ্রিহেনসিভ প্রেপারেশন"
    },
    "subtitle": {
      "en": "Target Band 7.5+: Academic & General Training: Listening, Reading, Writing Task 1/2 & Speaking Mock Tests",
      "bn": "ব্যান্ড ৭.৫+ অর্জনের পূর্ণাঙ্গ কোর্স: লিসেনিং, রিডিং, রাইটিং ও স্পিকিং মক টেস্ট"
    },
    "category": "language",
    "categoryLabel": {
      "en": "Language",
      "bn": "ভাষা শিক্ষা"
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
    "ratingsCount": 220,
    "enrolledCount": "540+ Enrolled",
    "languages": {
      "en": "English / Bengali",
      "bn": "ইংরেজি / বাংলা"
    },
    "fee": "12,000৳",
    "rawFee": 12000,
    "originalFee": "18,000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "36 Classes",
      "bn": "৩৬ টি ক্লাস"
    },
    "image": "/images/course thumbnail/ielts complete preparation.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Dr. Farzana Yasmin",
      "designation": {
        "en": "IELTS Band 8.5 Lead Trainer & British Council Certified",
        "bn": "আইইএলটিএস ব্যান্ড ৮.৫ ট্রেইনার ও ব্রিটিশ কাউন্সিল সার্টিফাইড"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "10+ years mentoring 4,000+ students achieve Band 7.0 to 8.5 for study in UK, USA, Canada & Australia.",
        "bn": "ইউকে, কানাডা ও অস্ট্রেলিয়ায় উচ্চশিক্ষার জন্য ৪,০০০+ শিক্ষার্থীকে ব্যান্ড ৭-৮.৫ পাওয়ানোর অভিজ্ঞতা।"
      },
      "experience": "10+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Complete IELTS Academic & General Training masterclass. Topics include Listening note-taking & map labeling strategies, Academic/General Reading skimming & scanning techniques, Writing Task 1 (Charts, Maps, Processes / Letters), Writing Task 2 (Opinion, Discussion, Problem-Solution Essays), 1-on-1 Speaking interviews, vocabulary booster and full-length computer-delivered & paper mock tests.",
      "bn": "আইইএলটিএস একাডেমিক ও জেনারেল ট্রেনিংয়ের কমপ্লিট মাস্টারক্লাস। এতে লিসেনিং, রিডিং স্কিমিং-স্ক্যানিং, রাইটিং টাস্ক ১ ও টাস্ক ২ রচনা লিখন, ১-অন-১ স্পিকিং ইন্টারভিউ এবং ফুল মক টেস্ট নেওয়া হয়।"
    },
    "fullDescription": {
      "en": "Achieve Band 7.5+ on your first attempt. Master the exact question types, time management techniques and scoring criteria evaluated by British Council and IDP examiners for both Paper-Based and Computer-Delivered IELTS.",
      "bn": "এই কোর্সে আপনি আন্তর্জাতিক মানদণ্ড অনুযায়ী প্রতিটি মডিউলে সর্বোচ্চ স্কোর তোলার কৌশল, ক্যামব্রিজ বিগত বছরের প্রশ্ন সমাধান, ব্যক্তিগত কোহিসন-কোহেরেন্স ফিডব্যাক এবং নিয়মিত স্পিকিং মক টেস্ট পাবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Band 7.5+ Proven Strategies",
          "bn": "ব্যান্ড ৭.৫+ স্ট্র্যাটেজি"
        },
        "desc": {
          "en": "Proven frameworks for Writing Task 1 & 2 and fluent Speaking Part 1, 2 & 3.",
          "bn": "রাইটিং ও স্পিকিংয়ে ব্যান্ড ৭.৫+ পাওয়ার পরীক্ষিত কৌশল।"
        },
        "icon": "Award"
      },
      {
        "id": "cv2",
        "title": {
          "en": "1-on-1 Speaking Mocks",
          "bn": "১-অন-১ স্পিকিং মক টেস্ট"
        },
        "desc": {
          "en": "Regular individual mock interviews with detailed examiner scoring and feedback.",
          "bn": "এক্সামিনারদের দ্বারা ব্যক্তিগত স্পিকিং মক টেস্ট।"
        },
        "icon": "Users"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Cambridge Tests 1-19",
          "bn": "ক্যামব্রিজ ১-১৯ সলিউশন"
        },
        "desc": {
          "en": "Exhaustive practice on official Cambridge IELTS authentic examination papers.",
          "bn": "ক্যামব্রিজের সব অফিসিয়াল টেস্ট পেপার প্র্যাকটিস।"
        },
        "icon": "BookOpen"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Score Band 8.0+ in Listening through predictive listening and keyword mapping.",
        "bn": "লিসেনিংয়ে প্রেডিক্টিভ টেকনিক দিয়ে ব্যান্ড ৮+ স্কোর করা।"
      },
      {
        "en": "Master True/False/Not Given and Headings matching in Reading within 60 minutes.",
        "bn": "রিডিংয়ে সময় বাঁচিয়ে সঠিক উত্তর খুঁজে বের করা।"
      },
      {
        "en": "Write structured 250+ word essays with academic vocabulary and grammatical range.",
        "bn": "উচ্চমানের ভোকাবুলারি দিয়ে আকর্ষণীয় রচনা লেখা।"
      },
      {
        "en": "Speak fluently and coherently with natural idioms and confident pronunciation.",
        "bn": "ন্যাচারাল উচ্চারণে স্পিকিং পার্ট ১, ২ ও ৩ এ সাবলীল উত্তর দেওয়া।"
      },
      {
        "en": "Achieve the desired overall band score for university admission or immigration.",
        "bn": "বিশ্ববিদ্যালয়ে ভর্তি বা ইমিগ্রেশনের জন্য কাঙ্ক্ষিত ব্যান্ড স্কোর অর্জন করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Listening & Reading Master Strategies",
          "bn": "মডিউল ১: লিসেনিং ও রিডিং স্ট্র্যাটেজি"
        },
        "duration": {
          "en": "12 Classes • 24 Hours",
          "bn": "১২ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "IELTS Listening: Form Completion, Multiple Choice, Map Labeling & Flow Charts",
            "bn": "লিসেনিং: ফরম পূরণ, এমসিকিউ ও ম্যাপ লেবেলিং"
          },
          {
            "en": "Handling Distractors, Accents (British, Australian, American) & Spelling Rules",
            "bn": "অ্যাকসেন্ট হ্যান্ডলিং ও স্পেলিং নিয়ম"
          },
          {
            "en": "IELTS Reading: Skimming, Scanning & Deep Paragraph Analysis",
            "bn": "রিডিং: স্কিমিং ও স্ক্যানিং কৌশল"
          },
          {
            "en": "Conquering Tough Question Types: True/False/Not Given, Matching Headings & Summary Completion",
            "bn": "ট্রু/ফলস/নট গিভেন ও ম্যাচিং হেডিংস মাস্টারক্লাস"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Academic & General Writing (Task 1 & Task 2)",
          "bn": "মডিউল ২: রাইটিং টাস্ক ১ ও টাস্ক ২"
        },
        "duration": {
          "en": "12 Classes • 24 Hours",
          "bn": "১২ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Writing Task 1 (Academic): Line Graphs, Bar Charts, Pie Charts, Tables, Processes & Maps",
            "bn": "রাইটিং টাস্ক ১: গ্রাফ, চার্ট ও প্রসেস ডায়ালগ"
          },
          {
            "en": "Writing Task 1 (General): Formal, Semi-Formal & Informal Letters",
            "bn": "জেনারেল রাইটিং: ফরমাল ও ইনফরমাল লেটার"
          },
          {
            "en": "Writing Task 2: Essay Structures (Opinion, Discussion, Advantage/Disadvantage, Causes/Solutions)",
            "bn": "রাইটিং টাস্ক ২: বিভিন্ন ধরনের রচনার সঠিক ফরম্যাট"
          },
          {
            "en": "Cohesion, Coherence, Lexical Resource & Complex Grammatical Structures",
            "bn": "কোহিসন, কানেক্টিং ওয়ার্ডস ও অ্যাডভান্সড গ্রামার"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Speaking Mastery, Vocabulary & Full Mock Tests",
          "bn": "মডিউল ৩: স্পিকিং মাস্টারি ও ফুল মক টেস্ট"
        },
        "duration": {
          "en": "12 Classes • 24 Hours",
          "bn": "১২ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Speaking Part 1: Fluency, Everyday Topics & Eliminating Fillers",
            "bn": "স্পিকিং পার্ট ১: সাবলীল উত্তর দেওয়ার কৌশল"
          },
          {
            "en": "Speaking Part 2 (Cue Card): 1-Minute Note-Taking & 2-Minute Speaking Flow",
            "bn": "স্পিকিং পার্ট ২: কিউ কার্ডে ২ মিনিট কথা বলার উপায়"
          },
          {
            "en": "Speaking Part 3: Abstract Discussion, Expressing Opinions & Speculation",
            "bn": "স্পিকিং পার্ট ৩: গভীর বিশ্লেষণমূলক উত্তর দেওয়া"
          },
          {
            "en": "5 Full-Length Complete Mock Tests (Listening, Reading, Writing, Speaking)",
            "bn": "৫টি পূর্ণাঙ্গ কম্পিউটার/পেপার মক টেস্ট ও রেজাল্ট বিশ্লেষণ"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "IELTS Course Completion Certificate",
        "bn": "আইইএলটিএস কোর্স সার্টিফিকেট"
      },
      {
        "en": "Cambridge IELTS Books 1-19 PDF + Audio",
        "bn": "ক্যামব্রিজ আইইএলটিএস ১-১৯ বই ও অডিও"
      },
      {
        "en": "5 Full-Length Complete Mock Examinations",
        "bn": "৫টি কমপ্লিট ফুল মক টেস্ট"
      },
      {
        "en": "Free Study Abroad & University Visa Consultation",
        "bn": "উচ্চশিক্ষা ও স্টুডেন্ট ভিসা কনসাল্টেশন"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Nabila Tabassum",
        "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
        "role": {
          "en": "IELTS Overall Band 8.0 Scorer",
          "bn": "আইইএলটিএস ব্যান্ড ৮.০ অর্জনকারী"
        },
        "rating": 5,
        "comment": {
          "en": "Scored Band 8.0 overall (L: 8.5, R: 8.5, W: 7.0, S: 7.5)! The writing feedback was invaluable.",
          "bn": "ওভারঅল ব্যান্ড ৮.০ পেয়েছি! রাইটিংয়ের ব্যক্তিগত ফিডব্যাক অনেক সাহায্য করেছে।"
        },
        "date": "1 Week Ago"
      }
    ]
  },
  {
    "id": "41",
    "slug": "spoken-english",
    "title": {
      "en": "Spoken English for Professionals",
      "bn": "স্পোকেন ইংলিশ ফর প্রফেশনালস"
    },
    "subtitle": {
      "en": "Overcome hesitation, master neutral accent, workplace communication, presentations & fluent English speaking",
      "bn": "ভয় ও জড়তা কাটিয়ে প্রফেশনাল স্পোকেন ইংলিশ, প্রেজেন্টেশন ও সাবলীল কথোপকথন"
    },
    "category": "language",
    "categoryLabel": {
      "en": "Language",
      "bn": "ভাষা শিক্ষা"
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
    "ratingsCount": 230,
    "enrolledCount": "580+ Enrolled",
    "languages": {
      "en": "English / Bengali",
      "bn": "ইংরেজি / বাংলা"
    },
    "fee": "8,000৳",
    "rawFee": 8000,
    "originalFee": "12,000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "36 Classes",
      "bn": "৩৬ টি ক্লাস"
    },
    "image": "/images/course thumbnail/spoken english.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Dr. Farzana Yasmin",
      "designation": {
        "en": "Lead Corporate Communication & Spoken English Coach",
        "bn": "লিড কর্পোরেট কমিউনিকেশন ও স্পোকেন ইংলিশ কোচ"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "10+ years training executives, students and job seekers in fluent English communication.",
        "bn": "কর্পোরেট কর্মকর্তা ও শিক্ষার্থীদের সাবলীল ইংরেজি শেখানোর ১০+ বছরের অভিজ্ঞতা।"
      },
      "experience": "10+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Practical and interactive Spoken English program designed to eliminate hesitation and build natural fluency. Topics include phonetics & clear neutral accent, everyday practical conversations, vocabulary building & idioms, overcoming nervousness, public speaking practice, corporate email & workplace communication, debates and group discussions.",
      "bn": "ইংরেজি বলার জড়তা ও ভয় দূর করে সাবলীলভাবে কথা বলার প্র্যাকটিক্যাল কোর্স। এতে সঠিক উচ্চারণ, দৈনন্দিন ডায়ালগ, বিজনেস কমিউনিকেশন, পাবলিক স্পিকিং, প্রেজেন্টেশন ও গ্রুপ ডিসকাশন শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Speak English with natural confidence in any professional or social situation. Through hundreds of interactive role-playing conversations, pronunciation drills, debates and presentation sessions, you will transform into a fluent English speaker.",
      "bn": "এই কোর্সে আপনি গ্রামারের অতিরিক্ত জটিলতা ছাড়া বাস্তব কথোপকথন ও নিয়মিত স্পিকিং প্র্যাকটিসের মাধ্যমে যেকোনো ইন্টারভিউ, মিটিং বা ক্লায়েন্টের সাথে আত্মবিশ্বাসের সাথে ইংরেজিতে কথা বলা শিখবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Zero Hesitation Speaking",
          "bn": "জড়তাহীন সাবলীল ইংরেজি"
        },
        "desc": {
          "en": "Eliminate stage fright, mother-tongue influence (MTI) and speaking nervousness.",
          "bn": "ইংরেজি বলার ভয় ও আঞ্চলিকতার টান দূর করা।"
        },
        "icon": "Users"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Corporate Communication",
          "bn": "কর্পোরেট কমিউনিকেশন"
        },
        "desc": {
          "en": "Master business meetings, elevator pitches, professional emails and negotiation.",
          "bn": "অফিসিয়াল মিটিং, প্রেজেন্টেশন ও ইমেইল রাইটিং।"
        },
        "icon": "Briefcase"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Interactive Debates & Roleplays",
          "bn": "লাইভ ডিবেট ও স্পিকিং ক্লাব"
        },
        "desc": {
          "en": "Weekly debate sessions, role-playing scenarios and live club conversations.",
          "bn": "প্রতি সপ্তাহে লাইভ ডিবেট ও স্পিকিং ক্লাবে অংশ নেওয়া।"
        },
        "icon": "Award"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Speak English fluently and confidently without pausing to translate from Bengali.",
        "bn": "মনে মনে বাংলা অনুবাদ না করে সরাসরি ইংরেজিতে কথা বলা।"
      },
      {
        "en": "Master clear pronunciation, phonetic sounds, word stress and intonation.",
        "bn": "সঠিক উচ্চারণ ও শব্দে স্ট্রেস দেওয়ার নিয়ম জানা।"
      },
      {
        "en": "Deliver impressive professional presentations and corporate pitches.",
        "bn": "অফিসে বা ক্লাসে চমৎকার প্রেজেন্টেশন দেওয়া।"
      },
      {
        "en": "Handle job interviews, client meetings and international calls effortlessly.",
        "bn": "চাকরির ইন্টারভিউ ও ক্লায়েন্ট মিটিং সফলভাবে সম্পন্ন করা।"
      },
      {
        "en": "Expand active vocabulary with idioms, phrasal verbs and smart expressions.",
        "bn": "প্রয়োজনীয় শব্দভাণ্ডার ও আধুনিক স্মার্ট এক্সপ্রেশনস ব্যবহার করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Pronunciation, Phonetics & Overcoming Hesitation",
          "bn": "মডিউল ১: সঠিক উচ্চারণ ও জড়তা দূরীকরণ"
        },
        "duration": {
          "en": "12 Classes • 24 Hours",
          "bn": "১২ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Phonetics & Pronunciation: Vowel Sounds, Consonant Clusters & Word Stress",
            "bn": "ফোনেটিক্স ও সঠিক ইংরেজি উচ্চারণ"
          },
          {
            "en": "Overcoming Hesitation & Stage Fright: Mindset & Daily Speaking Habits",
            "bn": "ইংরেজি বলার ভয় ও জড়তা দূর করার কৌশল"
          },
          {
            "en": "Self-Introduction, Family, Hobbies & Everyday Small Talk Scenarios",
            "bn": "নিজের পরিচয় ও দৈনন্দিন সাধারণ কথপোকথন"
          },
          {
            "en": "Essential Tenses for Speaking: Simple Present, Past & Continuous in Action",
            "bn": "স্পিকিংয়ের জন্য প্রয়োজনীয় সহজ টেন্স"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Real-World Situations & Vocabulary Building",
          "bn": "মডিউল ২: বাস্তব জীবনের ডায়ালগ ও শব্দভাণ্ডার"
        },
        "duration": {
          "en": "12 Classes • 24 Hours",
          "bn": "১২ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Situational Roleplays: Restaurant, Shopping, Airport, Hospital & Hotel Bookings",
            "bn": "বিভিন্ন পরিস্থিতিতে প্রয়োজনীয় ডায়ালগ ও রোল-প্লে"
          },
          {
            "en": "Phrasal Verbs, Smart Idioms & Collocations for Natural Speaking",
            "bn": "ন্যাচারাল ইংরেজির জন্য ইডিয়মস ও ফ্রেজাল ভার্বস"
          },
          {
            "en": "Expressing Opinions, Agreement, Polite Disagreement & Storytelling Flow",
            "bn": "মতামত প্রকাশ ও গল্প বলার সাবলীল কৌশল"
          },
          {
            "en": "Telephone Etiquette, Asking Questions & Active Listening Skills",
            "bn": "ফোন কলে কথা বলার নিয়ম ও প্রশ্ন করার কৌশল"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Public Speaking, Business Meetings & Interview Prep",
          "bn": "মডিউল ৩: পাবলিক স্পিকিং, মিটিং ও ইন্টারভিউ"
        },
        "duration": {
          "en": "12 Classes • 24 Hours",
          "bn": "১২ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Public Speaking & Presentation Skills: Body Language, Eye Contact & Voice Modulation",
            "bn": "পাবলিক স্পিকিং ও প্রেজেন্টেশন স্কিলস"
          },
          {
            "en": "Corporate Meeting Participation, Brainstorming & Professional Email Writing",
            "bn": "কর্পোরেট মিটিং ও প্রফেশনাল ইমেইল রাইটিং"
          },
          {
            "en": "Job Interview Mastery: Tackling Common & Tough Interview Questions",
            "bn": "চাকরির ইন্টারভিউতে সেরা উত্তর দেওয়ার কৌশল"
          },
          {
            "en": "Extempore Speeches, Group Debates & Final Spoken Graduation Showcase",
            "bn": "উপস্থিত বক্তৃতা, ডিবেট ও ফাইনাল স্পিকিং টেস্ট"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Spoken English Fluency Certificate",
        "bn": "স্পোকেন ইংলিশ ফ্লুয়েন্সি সার্টিফিকেট"
      },
      {
        "en": "Exclusive Spoken English Guidebook & Vocabulary Sheets",
        "bn": "এক্সক্লুসিভ স্পোকেন ইংলিশ গাইড ও শিটস"
      },
      {
        "en": "Lifetime Free Access to Weekly English Speaking Club",
        "bn": "সাপ্তাহিক স্পিকিং ক্লাবে আজীবন ফ্রি অ্যাক্সেস"
      },
      {
        "en": "Corporate Interview & CV Grooming Support",
        "bn": "চাকরির ইন্টারভিউ ও সিভি গ্রুমিং সাপোর্ট"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Tanzim Ahmed",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "role": {
          "en": "Sales & Marketing Officer",
          "bn": "সেলস ও মার্কেটিং অফিসার"
        },
        "rating": 5,
        "comment": {
          "en": "I used to freeze while speaking English. After this course, I host meetings with foreign clients effortlessly!",
          "bn": "আগে ইংরেজিতে কথা বলতে অনেক ভয় পেতাম। এখন বিদেশি ক্লায়েন্টদের সাথে মিটিং করি কোনো দ্বিধা ছাড়া।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "42",
    "slug": "spoken-english-for-kids",
    "title": {
      "en": "Spoken English for Kids",
      "bn": "বাচ্চাদের জন্য স্পোকেন ইংলিশ"
    },
    "subtitle": {
      "en": "Fun & Interactive English for children: Phonics, vocabulary games, cartoon storytelling, songs & confidence",
      "bn": "মজার খেলা, গান, কার্টুন গল্প ও ফোনিক্সের মাধ্যমে শিশুদের সাবলীল ইংরেজি"
    },
    "category": "language",
    "categoryLabel": {
      "en": "Language",
      "bn": "ভাষা শিক্ষা"
    },
    "badge": {
      "en": "KIDS SPECIAL",
      "bn": "বাচ্চাদের স্পেশাল"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 95,
    "enrolledCount": "210+ Enrolled",
    "languages": {
      "en": "English / Bengali",
      "bn": "ইংরেজি / বাংলা"
    },
    "fee": "10,000৳",
    "rawFee": 10000,
    "originalFee": "15,000৳",
    "duration": {
      "en": "4 Months",
      "bn": "৪ মাস"
    },
    "classesCount": {
      "en": "36 Classes",
      "bn": "৩৬ টি ক্লাস"
    },
    "image": "/images/course thumbnail/Speak English Fluently.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Tahsina Akter",
      "designation": {
        "en": "Lead Early Childhood English Specialist",
        "bn": "লিড চাইল্ডহুড ইংলিশ স্পেশালিস্ট"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "8+ years developing phonics and creative English speaking curricula for children aged 5-14.",
        "bn": "৫-১৪ বছর বয়সী শিশুদের আনন্দময় ইংরেজি শিক্ষাদানে ৮+ বছরের অভিজ্ঞতা।"
      },
      "experience": "8+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Joyful and activity-based Spoken English program for kids (ages 5 to 14). Topics include British/American phonics, word pronunciation games, picture storytelling, daily social expressions & manners, rhymes & songs, public speaking without hesitation and building an active English-speaking habit at home and school.",
      "bn": "৫ থেকে ১৪ বছর বয়সী শিশুদের জন্য আনন্দদায়ক স্পোকেন ইংলিশ কোর্স। এতে ফোনিক্স সাউন্ড, ছবির মাধ্যমে গল্প বলা, গান, সঠিক উচ্চারণ, আত্মবিশ্বাস বৃদ্ধি এবং ক্লাসরুমে ইংরেজি বলার অভ্যাস গড়ে তোলা হয়।"
    },
    "fullDescription": {
      "en": "Help your child speak English naturally and fearlessly from an early age! Using gamified interactive teaching, colorful flashcards, moral animated stories and fun speaking challenges, children build native-like pronunciation and rich vocabulary.",
      "bn": "ছোটবেলা থেকেই শিশুর ইংরেজির ভয় দূর করে আকর্ষণীয় উচ্চারণ ও শব্দভাণ্ডার গড়ে তুলতে এই কোর্সটি তৈরি করা হয়েছে। কোনো মুখস্থ বিদ্যা নয়, বরং খেলার ছলে শিশুরা ইংরেজিতে কথা বলতে শিখে।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Jolly Phonics Mastery",
          "bn": "জলি ফোনিক্স সাউন্ডস"
        },
        "desc": {
          "en": "Master 42 letter sounds, blending and correct pronunciation without memorizing.",
          "bn": "মুখস্থ ছাড়া সঠিক ফোনিক্স নিয়মে শব্দ উচ্চারণ।"
        },
        "icon": "Sparkles"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Interactive Storytelling",
          "bn": "কার্টুন গল্প ও উপস্থাপনা"
        },
        "desc": {
          "en": "Encourage imagination through storytelling, rhymes and cartoon role-plays.",
          "bn": "গল্প ও নাটকের মাধ্যমে কথা বলার জড়তা দূরীকরণ।"
        },
        "icon": "Users"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Confidence & Presentation",
          "bn": "শিশুর আত্মবিশ্বাস বৃদ্ধি"
        },
        "desc": {
          "en": "Build self-confidence to speak in front of classes, relatives and school events.",
          "bn": "স্কুল ও যেকোনো অনুষ্ঠানে নির্ভয়ে কথা বলার আত্মবিশ্বাস।"
        },
        "icon": "Award"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Read and pronounce English words accurately using phonics rules.",
        "bn": "ফোনিক্স নিয়মে যেকোনো নতুন ইংরেজি শব্দ সঠিকভাবে উচ্চারণ করা।"
      },
      {
        "en": "Speak complete English sentences about daily routines, school and hobbies.",
        "bn": "স্কুল ও দৈনন্দিন কাজের ব্যাপারে ইংরেজিতে কথা বলা।"
      },
      {
        "en": "Overcome shyness and speak cheerfully in front of audiences.",
        "bn": "লাজুকতা দূর করে সবার সামনে আনন্দচিত্তে কথা বলা।"
      },
      {
        "en": "Understand spoken English from cartoons, teachers and storybooks.",
        "bn": "কার্টুন ও টিচারদের ইংরেজি কথা সহজে বুঝতে পারা।"
      },
      {
        "en": "Deliver a final creative show-and-tell presentation in English.",
        "bn": "ফাইনাল ক্লাসে প্রজেক্ট প্রেজেন্টেশন সম্পন্ন করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Phonics, Letter Sounds & Word Magic",
          "bn": "মডিউল ১: ফোনিক্স ও সঠিক বর্ণ উচ্চারণ"
        },
        "duration": {
          "en": "12 Classes • 24 Hours",
          "bn": "১২ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Alphabet Sounds (Jolly Phonics 42 Sounds), Vowels & Blending Sounds",
            "bn": "বর্ণমালার ফোনিক্স সাউন্ড ও ব্লেন্ডিং"
          },
          {
            "en": "Magic 'e' Rule, Digraphs (sh, ch, th, ph, wh) & Clear Pronunciation",
            "bn": "ম্যাজিক ই রুল ও যুক্তবর্ণ উচ্চারণ"
          },
          {
            "en": "Greetings, Good Manners, Magic Words (Please, Thank You, Sorry)",
            "bn": "ম্যাজিক ওয়ার্ডস ও ম্যানার্স"
          },
          {
            "en": "Vocabulary Fun: Colors, Shapes, Animals, Fruits & Family Members",
            "bn": "রং, পশুপাখি, ফলমূল ও পরিবারের সদস্যদের নাম"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Sentence Making, Songs & Everyday Dialogues",
          "bn": "মডিউল ২: বাক্য তৈরি, গান ও দৈনন্দিন ডায়ালগ"
        },
        "duration": {
          "en": "12 Classes • 24 Hours",
          "bn": "১২ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Simple Sentence Building: 'This is', 'I like', 'I can', 'I have'",
            "bn": "সহজ বাক্য তৈরির প্যাটার্ন"
          },
          {
            "en": "Action Verbs & Daily Routine (Waking up, School, Playing, Sleeping)",
            "bn": "অ্যাকশন ভার্বস ও সারাদিনের রুটিন"
          },
          {
            "en": "Interactive Rhymes, Rhythm Songs & Action Singing",
            "bn": "মজার ইংরেজি গান ও অ্যাকশন ছড়া"
          },
          {
            "en": "Expressing Feelings: Happy, Sad, Hungry, Excited & Asking for Help",
            "bn": "অনুভূতি প্রকাশ ও সাহায্য চাওয়া"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Picture Storytelling, Roleplay & Show-and-Tell",
          "bn": "মডিউল ৩: ছবি দেখে গল্প বলা ও প্রেজেন্টেশন"
        },
        "duration": {
          "en": "12 Classes • 24 Hours",
          "bn": "১২ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Picture Description: Describing Favorite Toys, Pets & Classrooms",
            "bn": "প্রিয় খেলনা ও ছবির বর্ণনা দেওয়া"
          },
          {
            "en": "Moral Storytelling & Cartoon Character Role-playing",
            "bn": "কার্টুন ক্যারেক্টার সেজে গল্প বলা"
          },
          {
            "en": "Show-and-Tell Activity: Speaking 2 Minutes About Any Favorite Object",
            "bn": "শো-অ্যান্ড-টেল প্রেজেন্টেশন প্র্যাকটিস"
          },
          {
            "en": "Kids English Public Speaking Showcase & Graduation Ceremony",
            "bn": "ফাইনাল কিডস স্পিকিং শোকেস ও সার্টিফিকেট প্রদান"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Young Star Junior Spoken English Certificate",
        "bn": "ইয়াং স্টার জুনিয়র স্পোকেন ইংলিশ সার্টিফিকেট"
      },
      {
        "en": "Colorful Phonics Workbook & Flashcards Pack",
        "bn": "কালারফুল ফোনিক্স ওয়ার্কবুক ও ফ্ল্যাশকার্ডস"
      },
      {
        "en": "Interactive Video Rhymes & Storybook Library",
        "bn": "ভিডিও রাইমস ও অডিও স্টোরিবুক লাইব্রেরি"
      },
      {
        "en": "Fun Kid-Friendly Atmosphere & Parent-Teacher Review",
        "bn": "শিশুবান্ধব পরিবেশ ও অভিভাবক মিটিং"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Sadia Afrin (Parent)",
        "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
        "role": {
          "en": "Mother of 8-year-old student",
          "bn": "৮ বছর বয়সী শিক্ষার্থীর মা"
        },
        "rating": 5,
        "comment": {
          "en": "My daughter now confidently speaks English at home and got 1st prize in her school recitation!",
          "bn": "আমার মেয়ে এখন বাসায় সুন্দর ইংরেজিতে কথা বলে এবং স্কুলে পুরস্কার পেয়েছে!"
        },
        "date": "1 Month Ago"
      }
    ]
  },
  {
    "id": "43",
    "slug": "caregiver-training-program",
    "title": {
      "en": "Caregiver Training Program",
      "bn": "কেয়ারগিভার ট্রেনিং প্রোগ্রাম"
    },
    "subtitle": {
      "en": "Certified Professional Caregiving for UK, Canada & Japan: Elderly care, Child care, First Aid, CPR & Medical English",
      "bn": "ইউকে, কানাডা ও জাপানের জন্য সার্টিফাইড কেয়ারগিভার: বয়স্ক ও শিশু যত্ন, সিপিআর, ফার্স্ট এইড ও মেডিকেল ইংলিশ"
    },
    "category": "others",
    "categoryLabel": {
      "en": "Others",
      "bn": "অন্যান্য"
    },
    "badge": {
      "en": "GLOBAL VISA",
      "bn": "গ্লোবাল ভিসা"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 160,
    "enrolledCount": "410+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "15,000৳",
    "rawFee": 15000,
    "originalFee": "22,000৳",
    "duration": {
      "en": "3 Months",
      "bn": "৩ মাস"
    },
    "classesCount": {
      "en": "36 Classes",
      "bn": "৩৬ টি ক্লাস"
    },
    "image": "/images/course thumbnail/caregiver training program.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Dr. Salma Begum (MBBS, MPH)",
      "designation": {
        "en": "Lead Healthcare & Caregiver Master Trainer",
        "bn": "লিড হেলথকেয়ার ও কেয়ারগিভার মাস্টার ট্রেইনার"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "12+ years training certified caregivers and healthcare assistants for UK, Canada, Australia and Japan.",
        "bn": "ইউকে, কানাডা ও জাপানের জন্য আন্তর্জাতিক মানের কেয়ারগিভার তৈরির ১২+ বছরের অভিজ্ঞতা।"
      },
      "experience": "12+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "International Professional Caregiver certification course. Topics include fundamentals of caregiving & ethics, elderly care (Geriatric care) & mobility assistance, child care & special needs support (Pediatric care), vital signs monitoring (BP, Pulse, Glucose), First Aid & CPR life support, hygiene, nutrition & infection control, medical terminology & documentation and overseas caregiver visa interview preparation.",
      "bn": "ইউকে, কানাডা, জাপান ও মধ্যপ্রাচ্যে কেয়ারগিভার ও হেলথকেয়ার অ্যাসিস্ট্যান্ট জবের জন্য আন্তর্জাতিক মানের কোর্স। এতে বয়স্ক ও শিশুর সেবা, ভাইটাল সাইনস (ব্লাড প্রেশার, ডায়াবেটিস), ফার্স্ট এইড ও সিপিআর, ইনফেকশন কন্ট্রোল এবং মেডিকেল ইংরেজি শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Caregiving is one of the highest-demand global visa categories with rapid pathways to residency in Canada, the UK, Europe and Japan. Learn compassionate patient care, emergency life-saving procedures, medication management and medical English communication in practical healthcare lab settings.",
      "bn": "এই কোর্সে আপনি থিওরিটিক্যাল ও প্র্যাকটিক্যাল ল্যাবে আধুনিক কেয়ারগিভিং যন্ত্রপাতি ব্যবহার, বয়স্ক ও পক্ষাঘাতগ্রস্ত রোগীদের যত্ন, ফার্স্ট এইড এবং আন্তর্জাতিক ভিসা ইন্টারভিউয়ের শতভাগ প্রস্তুতি সম্পন্ন করবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "International Standards",
          "bn": "আন্তর্জাতিক মানসম্পন্ন"
        },
        "desc": {
          "en": "Curriculum aligned with UK NHS, Canada Home Care and Japanese Kaigo standards.",
          "bn": "ইউকে ও কানাডা হোম কেয়ারের আন্তর্জাতিক স্ট্যান্ডার্ড অনুযায়ী প্রশিক্ষণ।"
        },
        "icon": "Award"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Hands-on First Aid & CPR",
          "bn": "ফার্স্ট এইড ও সিপিআর ল্যাব"
        },
        "desc": {
          "en": "Live practical training on CPR manikins, BP monitors, glucometers & wheelchairs.",
          "bn": "সিপিআর ম্যানিকিন ও মেডিকেল যন্ত্রপাতিতে লাইভ ল্যাব।"
        },
        "icon": "ShieldCheck"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Overseas Visa Assistance",
          "bn": "বিদেশে ভিসা ও চাকরি"
        },
        "desc": {
          "en": "Specialized grooming for UK Health & Care Visa, Canada Caregiver Pilot & Japan SSW.",
          "bn": "ইউকে ও কানাডা কেয়ারগিভার ভিসা ইন্টারভিউ সাপোর্ট।"
        },
        "icon": "Globe2"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Provide safe, empathetic daily care for elderly, disabled and recovering patients.",
        "bn": "বয়স্ক ও অসুস্থ রোগীদের নিরাপদ ও সহানুভূতিশীল যত্ন প্রদান করা।"
      },
      {
        "en": "Measure and record vital signs accurately (Blood Pressure, Pulse, Oxygen, Sugar).",
        "bn": "ব্লাড প্রেশার, পালস, অক্সিজেন ও ডায়াবেটিস সঠিকভাবে মাপা ও রেকর্ড করা।"
      },
      {
        "en": "Perform emergency First Aid, CPR, choking relief and patient transfer safely.",
        "bn": "জরুরি ফার্স্ট এইড, সিপিআর ও রোগী স্থানান্তর সম্পন্ন করা।"
      },
      {
        "en": "Communicate fluently using healthcare English and documentation forms.",
        "bn": "মেডিকেল ইংরেজি ও রোগীর কেয়ার প্ল্যান তৈরি করতে পারা।"
      },
      {
        "en": "Qualify for overseas Caregiver Visa programs (UK, Canada, Japan Kaigo).",
        "bn": "বিদেশে কেয়ারগিভার ভিসায় চাকরির আবেদন করার যোগ্যতা অর্জন।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Caregiving Fundamentals, Ethics & Elderly Care",
          "bn": "মডিউল ১: কেয়ারগিভিং বেসিকস ও বয়স্কদের যত্ন"
        },
        "duration": {
          "en": "12 Classes • 24 Hours",
          "bn": "১২ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Introduction to Caregiving: Roles, Legal Rights, Patient Dignity & Ethics",
            "bn": "কেয়ারগিভিং পরিচিতি, নৈতিকতা ও রোগীর অধিকার"
          },
          {
            "en": "Elderly Care (Gerontology): Aging Process, Dementia & Alzheimer's Support",
            "bn": "বয়স্কদের যত্ন: ডিমেনশিয়া ও আলঝেইমার্স রোগীর সেবা"
          },
          {
            "en": "Personal Hygiene: Bed Baths, Oral Care, Grooming & Pressure Ulcer Prevention",
            "bn": "রোগীর ব্যক্তিগত পরিচ্ছন্নতা ও বেড সোর প্রতিরোধ"
          },
          {
            "en": "Mobility Assistance: Wheelchair Transfer, Walkers & Safe Lifting Techniques",
            "bn": "হুইলচেয়ার ব্যবহার ও রোগীকে নিরাপদ স্থানান্তর কৌশল"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Vital Signs, Medication & First Aid / CPR",
          "bn": "মডিউল ২: ভাইটাল সাইনস, ফার্স্ট এইড ও সিপিআর"
        },
        "duration": {
          "en": "12 Classes • 24 Hours",
          "bn": "১২ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Vital Signs Monitoring: Blood Pressure (Sphygmomanometer), Pulse, Temp & Glucometer",
            "bn": "ব্লাড প্রেশার, পালস ও ডায়াবেটিস মাপার প্র্যাকটিক্যাল ল্যাব"
          },
          {
            "en": "First Aid & CPR Certification Training: Choking (Heimlich Maneuver), Burns, Fractures",
            "bn": "ফার্স্ট এইড, চোকিং ও সিপিআর লাইভ ট্রেনিং"
          },
          {
            "en": "Medication Administration: 5 Rights of Medication, Dosages & Storage",
            "bn": "ঔষধ দেওয়ার সঠিক নিয়ম ও রুটিন মেনে চলা"
          },
          {
            "en": "Infection Control: PPE (Gloves, Masks), Hand Hygiene & Waste Disposal",
            "bn": "ইনফেকশন কন্ট্রোল ও পিপিই ব্যবহারের নিয়ম"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Child Care, Medical English & Overseas Visa Prep",
          "bn": "মডিউল ৩: শিশু যত্ন, মেডিকেল ইংরেজি ও ভিসা প্রস্তুতি"
        },
        "duration": {
          "en": "12 Classes • 24 Hours",
          "bn": "১২ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Child & Infant Care (Pediatrics): Feeding, Safety, Special Needs & Autism",
            "bn": "শিশু যত্ন: নবজাতক ও স্পেশাল চাইল্ড কেয়ার"
          },
          {
            "en": "Nutrition & Diet Planning for Diabetic, Cardiac & Renal Patients",
            "bn": "বিভিন্ন রোগীর জন্য ডায়েট ও পুষ্টিকর খাবার পরিকল্পনা"
          },
          {
            "en": "Medical English Terminology, Shift Handovers & Patient Care Reports",
            "bn": "মেডিকেল ইংরেজি ও রোগীর শিফট হ্যান্ডওভার রিপোর্ট"
          },
          {
            "en": "UK Health & Care Worker / Canada Caregiver Visa Interview Mock Sessions",
            "bn": "ইউকে ও কানাডা কেয়ারগিভার ভিসা ইন্টারভিউ প্রস্তুতি"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Government & Internationally Endorsed Caregiver Certificate",
        "bn": "আন্তর্জাতিক মানসম্পন্ন প্রফেশনাল কেয়ারগিভার সার্টিফিকেট"
      },
      {
        "en": "First Aid & CPR Practical Training Badge",
        "bn": "ফার্স্ট এইড ও সিপিআর প্র্যাকটিক্যাল ব্যাজ"
      },
      {
        "en": "Medical Equipment Practical Hands-on Lab Access",
        "bn": "মেডিকেল ইকুইপমেন্ট লাইভ ল্যাব প্র্যাকটিস"
      },
      {
        "en": "Abroad Caregiver Visa & Job Application Assistance",
        "bn": "বিদেশে কেয়ারগিভার জব ও ভিসা প্রসেসিং সহায়তা"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Nasima Akter",
        "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
        "role": {
          "en": "Certified Caregiver in UK",
          "bn": "ইউকে সার্টিফাইড কেয়ারগিভার"
        },
        "rating": 5,
        "comment": {
          "en": "The CPR and elderly dementia care training helped me pass the UK NHS homecare interview effortlessly!",
          "bn": "সিপিআর ও ডিমেনশিয়া কেয়ারের ল্যাব ট্রেনিংয়ের জন্য ইউকে ভিসা ইন্টারভিউতে খুব সহজেই চান্স পেয়েছি।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "44",
    "slug": "prince2-project-management",
    "title": {
      "en": "PRINCE2® Project Management",
      "bn": "প্রিন্স২ প্রজেক্ট ম্যানেজমেন্ট"
    },
    "subtitle": {
      "en": "Master PRINCE2 7th Edition: 7 Principles, 7 Practices, 7 Processes, Business Case & Foundation/Practitioner prep",
      "bn": "প্রিন্স২ ৭ম সংস্করণ: ৭টি প্রিন্সিপাল, প্র্যাকটিস, প্রসেস ও প্রজেক্ট ম্যানেজমেন্ট"
    },
    "category": "management",
    "categoryLabel": {
      "en": "Management",
      "bn": "ম্যানেজমেন্ট"
    },
    "badge": {
      "en": "CERTIFIED",
      "bn": "সার্টিফাইড"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 65,
    "enrolledCount": "130+ Enrolled",
    "languages": {
      "en": "English / Bengali",
      "bn": "ইংরেজি / বাংলা"
    },
    "fee": "30,000৳",
    "rawFee": 30000,
    "originalFee": "42,000৳",
    "duration": {
      "en": "60 hrs. (2 Months)",
      "bn": "৬০ ঘণ্টা (২ মাস)"
    },
    "classesCount": {
      "en": "20 Classes",
      "bn": "২০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/prince project management.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Engr. Zahid Hasan (PMP, PRINCE2)",
      "designation": {
        "en": "Principal Project Director & PRINCE2 Practitioner",
        "bn": "প্রিন্সিপাল প্রজেক্ট ডিরেক্টর ও প্রিন্স২ প্র্যাকটিশনার"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "12+ years directing multi-million dollar international IT and government projects.",
        "bn": "আন্তর্জাতিক ও সরকারি মেগা প্রজেক্ট পরিচালনায় ১২+ বছরের অভিজ্ঞতা।"
      },
      "experience": "12+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Official PRINCE2 (Projects IN Controlled Environments) 7th Edition certification curriculum. Learn the 7 Principles, 7 Practices (Business Case, Organizing, Plans, Quality, Risk, Issues, Progress) and 7 Processes from Starting Up a Project (SU) to Closing a Project (CP), tailoring PRINCE2 and passing both Foundation and Practitioner exams.",
      "bn": "বিশ্বখ্যাত ব্রিটিশ প্রজেক্ট ম্যানেজমেন্ট মেথডোলজি PRINCE2 ৭ম সংস্করণ কোর্স। এতে প্রজেক্টের শুরু থেকে সমাপ্তি পর্যন্ত ৭টি মূল নীতি, বিজনেস কেস, রিস্ক ও কোয়ালিটি ম্যানেজমেন্ট এবং ফাউন্ডেশন ও প্র্যাকটিশনার এক্সাম প্রিপারেশন শেখানো হয়।"
    },
    "fullDescription": {
      "en": "PRINCE2 is the de facto standard project management methodology utilized by the UK government, United Nations (UN), NGOs and multinational corporate enterprises worldwide. Master step-by-step governance, role delegation, stage boundaries and project risk control.",
      "bn": "এই কোর্সে আপনি আন্তর্জাতিক প্রজেক্ট ম্যানেজমেন্টের স্বীকৃত পদ্ধতি আয়ত্ত করে প্রজেক্টের বাজেট, সময় ও কোয়ালিটি নিয়ন্ত্রণ করা এবং গ্লোবাল প্রজেক্ট ম্যানেজার হিসেবে ক্যারিয়ার গড়ার পূর্ণাঙ্গ জ্ঞান অর্জন করবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "PRINCE2 7th Edition",
          "bn": "প্রিন্স২ ৭ম সংস্করণ"
        },
        "desc": {
          "en": "100% aligned with PeopleCert / Axelos official syllabus and case studies.",
          "bn": "অফিসিয়াল এক্সেলস সিলেবাস অনুযায়ী পূর্ণ প্রশিক্ষণ।"
        },
        "icon": "Briefcase"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Business Case & Risk",
          "bn": "বিজনেস কেস ও রিস্ক কন্ট্রোল"
        },
        "desc": {
          "en": "Learn continuous business justification, risk registers and quality review techniques.",
          "bn": "বিজনেস জাস্টিফিকেশন ও রিস্ক রেজিস্টার তৈরি।"
        },
        "icon": "ShieldCheck"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Foundation & Practitioner",
          "bn": "ফাউন্ডেশন ও প্র্যাকটিশনার"
        },
        "desc": {
          "en": "Exhaustive scenario-based question practice to pass both certification levels.",
          "bn": "উভয় লেভেলের পরীক্ষায় পাস করার ১০০% প্রস্তুতি।"
        },
        "icon": "Award"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Understand the core structure of PRINCE2: principles, practices, processes and project context.",
        "bn": "প্রিন্স২ মেথডোলজির কোর স্ট্রাকচার আয়ত্ত করা।"
      },
      {
        "en": "Create comprehensive Project Initiation Documentation (PID) and Business Cases.",
        "bn": "প্রজেক্ট ইনিশিয়েশন ডকুমেন্ট (PID) তৈরি করতে পারা।"
      },
      {
        "en": "Manage stage boundaries, product delivery, issues and change control.",
        "bn": "প্রজেক্ট স্টেজ বাউন্ডারি ও চেঞ্জ কন্ট্রোল পরিচালনা করা।"
      },
      {
        "en": "Tailor PRINCE2 methodology to agile, hybrid and small-to-large project scales.",
        "bn": "অ্যাজাইল ও হাইব্রিড এনভায়রনমেন্টে প্রিন্স২ বাস্তবায়ন করা।"
      },
      {
        "en": "Pass the PRINCE2 Foundation and Practitioner certification examinations.",
        "bn": "প্রিন্স২ ফাউন্ডেশন ও প্র্যাকটিশনার পরীক্ষায় উত্তীর্ণ হওয়া।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: PRINCE2 Principles & Project Initiation",
          "bn": "মডিউল ১: প্রিন্স২ মূলনীতি ও প্রজেক্ট ইনিশিয়েশন"
        },
        "duration": {
          "en": "6 Classes • 18 Hours",
          "bn": "৬ টি ক্লাস • ১৮ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Introduction to PRINCE2 7th Edition & The 7 Guiding Principles",
            "bn": "প্রিন্স২ পরিচিতি ও ৭টি মূল নীতি"
          },
          {
            "en": "Project Organization & Roles (Project Board, Project Manager, Team Manager)",
            "bn": "প্রজেক্ট অর্গানাইজেশন ও দায়িত্ব বণ্টন"
          },
          {
            "en": "Starting Up a Project (SU) & Initiating a Project (IP)",
            "bn": "প্রজেক্টের সূচনা ও অনুমোদন প্রক্রিয়া"
          },
          {
            "en": "Developing the Business Case & Project Brief",
            "bn": "বিজনেস কেস তৈরি ও প্রজেক্ট ব্রিফ"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: The 7 Practices (Risk, Quality, Plans & Progress)",
          "bn": "মডিউল ২: ৭টি প্র্যাকটিস (রিস্ক, কোয়ালিটি ও প্ল্যানিং)"
        },
        "duration": {
          "en": "8 Classes • 24 Hours",
          "bn": "৮ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Plans Practice: Product-Based Planning & Work Breakdown Structure (WBS)",
            "bn": "প্রোডাক্ট-বেসড প্ল্যানিং ও ডব্লিউবিএস"
          },
          {
            "en": "Quality Practice: Quality Planning, Control and Quality Review Techniques",
            "bn": "কোয়ালিটি প্ল্যানিং ও রিভিউ টেকনিকস"
          },
          {
            "en": "Risk Practice: Risk Identification, Assessment, Responses & Risk Register",
            "bn": "রিস্ক ম্যানেজমেন্ট ও রিস্ক রেজিস্টার"
          },
          {
            "en": "Issues Practice (Change Control) & Progress Tracking (Tolerances, Exception Reports)",
            "bn": "চেঞ্জ কন্ট্রোল ও এক্সেপশন রিপোর্টস"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Controlling Stages, Closing & Exam Practice",
          "bn": "মডিউল ৩: স্টেজ কন্ট্রোল, সমাপ্তি ও এক্সাম"
        },
        "duration": {
          "en": "6 Classes • 18 Hours",
          "bn": "৬ টি ক্লাস • ১৮ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Controlling a Stage (CS) & Managing Product Delivery (MP)",
            "bn": "স্টেজ কন্ট্রোল ও প্রোডাক্ট ডেলিভারি"
          },
          {
            "en": "Managing a Stage Boundary (SB) & Closing a Project (CP)",
            "bn": "স্টেজ বাউন্ডারি ও প্রজেক্ট সমাপ্তি"
          },
          {
            "en": "Tailoring PRINCE2 to Agile, Scrum & Organizational Contexts",
            "bn": "অ্যাজাইল ও স্ক্রামে প্রিন্স২ প্রয়োগের কৌশল"
          },
          {
            "en": "PRINCE2 Foundation & Practitioner Official Mock Exams & Dumps Review",
            "bn": "প্রিন্স২ অফিসিয়াল মক টেস্ট ও এক্সাম প্রস্তুতি"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "PRINCE2 Training Completion Certificate",
        "bn": "প্রিন্স২ ট্রেনিং কমপ্লিশন সার্টিফিকেট"
      },
      {
        "en": "Official PRINCE2 7th Edition PDF Manual & Templates",
        "bn": "অফিসিয়াল প্রিন্স২ ম্যানুয়াল ও টেমপ্লেটস"
      },
      {
        "en": "Foundation & Practitioner Practice Exam Bank",
        "bn": "ফাউন্ডেশন ও প্র্যাকটিশনার প্রশ্ন ব্যাংক"
      },
      {
        "en": "UN & NGO Project Manager Career Consultation",
        "bn": "ইউএন ও এনজিও প্রজেক্ট ম্যানেজার ক্যারিয়ার গাইড"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Sikder Monirul",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
        "role": {
          "en": "Project Lead at INGO",
          "bn": "আন্তর্জাতিক এনজিওর প্রজেক্ট লিড"
        },
        "rating": 5,
        "comment": {
          "en": "Passed both PRINCE2 Foundation and Practitioner in one week. The stage boundary concepts were crystal clear.",
          "bn": "এক সপ্তাহেই প্রিন্স২ এর দুটি লেভেলই পাস করেছি। অসাধারণ ট্রেনিং!"
        },
        "date": "1 Month Ago"
      }
    ]
  },
  {
    "id": "45",
    "slug": "pmp-project-management-professional",
    "title": {
      "en": "PMP® (Project Management Professional)",
      "bn": "পিএমপি (প্রজেক্ট ম্যানেজমেন্ট প্রফেশনাল)"
    },
    "subtitle": {
      "en": "Master PMI PMP: PMBOK 7th Guide, Predictive, Agile & Hybrid Methodologies + 35 Contact Hours",
      "bn": "পিএমআই পিএমপি: পিএমবক ৭ম গাইড, অ্যাজাইল ও হাইব্রিড মেথডোলজি এবং ৩৫ কন্টাক্ট আওয়ার্স"
    },
    "category": "management",
    "categoryLabel": {
      "en": "Management",
      "bn": "ম্যানেজমেন্ট"
    },
    "badge": {
      "en": "GOLD STANDARD",
      "bn": "গোল্ড স্ট্যান্ডার্ড"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 88,
    "enrolledCount": "190+ Enrolled",
    "languages": {
      "en": "English / Bengali",
      "bn": "ইংরেজি / বাংলা"
    },
    "fee": "30,000৳",
    "rawFee": 30000,
    "originalFee": "42,000৳",
    "duration": {
      "en": "30 hrs. (1 Month)",
      "bn": "৩০ ঘণ্টা (১ মাস)"
    },
    "classesCount": {
      "en": "10 Classes",
      "bn": "১০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/pmp project management professional.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Engr. Zahid Hasan (PMP, PRINCE2)",
      "designation": {
        "en": "PMP Certified Project Director & PMI Mentor",
        "bn": "পিএমপি সার্টিফাইড প্রজেক্ট ডিরেক্টর ও পিএমআই মেন্টর"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "14+ years directing enterprise digital transformation and coaching 1,000+ certified PMPs.",
        "bn": "১,০০০+ প্রজেক্ট ম্যানেজারকে পিএমপি পাস করানোর ১৪+ বছরের অভিজ্ঞতা।"
      },
      "experience": "14+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Authorized PMI PMP (Project Management Professional) certification prep course based on PMBOK Guide 7th Edition and Agile Practice Guide. Covers the 3 core domains (People 42%, Process 50%, Business Environment 8%), predictive waterfall, Scrum, Kanban, hybrid lifecycles and provides the mandatory 35 Contact Hours PDUs certificate.",
      "bn": "আমেরিকার প্রজেক্ট ম্যানেজমেন্ট ইনস্টিটিউটের (PMI) পিএমপি সার্টিফিকেশন কোর্স। এতে পিএমবক ৭ম গাইড অনুযায়ী পিপল, প্রসেস ও বিজনেস এনভায়রনমেন্ট ডোমেন, অ্যাজাইল স্ক্রাম এবং আন্তর্জাতিক ৩৫ কন্টাক্ট আওয়ার্স পিডিইউ সার্টিফিকেট দেওয়া হয়।"
    },
    "fullDescription": {
      "en": "PMP is the gold standard of project management recognized in 200+ countries. Gain mastery over team leadership, stakeholder engagement, earned value analysis (EVA), critical path method (CPM) and agile delivery to pass the PMP exam on your first try.",
      "bn": "এই কোর্সে আপনি কর্পোরেট প্রজেক্ট লিডার হিসেবে টিম ম্যানেজমেন্ট, আর্নড ভ্যালু ম্যানেজমেন্ট, রিস্ক মিটিগেশন এবং পিএমআই এক্সাম ক্র্যাক করার 'PMP Mindset' আয়ত্ত করবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "35 Contact Hours Certificate",
          "bn": "৩৫ কন্টাক্ট আওয়ার্স সার্টিফিকেট"
        },
        "desc": {
          "en": "Mandatory official certificate required to apply for the PMI PMP examination.",
          "bn": "পিএমআই পরীক্ষায় আবেদনের জন্য আবশ্যকীয় অফিসিয়াল সার্টিফিকেট।"
        },
        "icon": "Award"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Predictive + Agile + Hybrid",
          "bn": "প্রেডিক্টিভ + অ্যাজাইল + হাইব্রিড"
        },
        "desc": {
          "en": "Master traditional Waterfall and modern Scrum/Kanban project lifecycles.",
          "bn": "ওয়াটারফল ও আধুনিক অ্যাজাইল স্ক্রাম প্রজেক্ট ম্যানেজমেন্ট।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv3",
        "title": {
          "en": "PMP Mindset & 1,000+ Mocks",
          "bn": "পিএমপি মাইন্ডসেট ও মক টেস্ট"
        },
        "desc": {
          "en": "Master situational questions with the official PMI mindset methodology.",
          "bn": "সিনারিও ভিত্তিক জটিল প্রশ্নের সঠিক সমাধান কৌশল।"
        },
        "icon": "Briefcase"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Lead high-performing cross-functional predictive and agile project teams.",
        "bn": "হাই-পারফর্মিং অ্যাজাইল ও প্রেডিক্টিভ টিম পরিচালনা করা।"
      },
      {
        "en": "Master Earned Value Management (EVM), Schedule Variance (SV) and Cost Index (CPI).",
        "bn": "আর্নড ভ্যালু ও প্রজেক্ট কস্ট ম্যানেজমেন্ট ক্যালকুলেশন।"
      },
      {
        "en": "Implement Scrum ceremonies: Sprint Planning, Daily Standup, Review & Retrospective.",
        "bn": "স্ক্রাম ফ্রেমওয়ার্ক ও স্প্রিন্ট বাস্তবায়ন করা।"
      },
      {
        "en": "Manage project governance, organizational compliance and value delivery.",
        "bn": "প্রজেক্ট গভর্নেন্স ও কমপ্লায়েন্স নিশ্চিত করা।"
      },
      {
        "en": "Pass the PMI PMP exam with 'Above Target' (AT) score on first attempt.",
        "bn": "প্রথমবারেই পিএমপি পরীক্ষায় অ্যাবাভ টার্গেট স্কোর অর্জন।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: People Domain (42%) & Team Leadership",
          "bn": "মডিউল ১: পিপল ডোমেন ও টিম লিডারশিপ"
        },
        "duration": {
          "en": "3 Classes • 10 Hours",
          "bn": "৩ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "PMP Exam Blueprint & The PMBOK Guide 7th Edition 12 Principles",
            "bn": "পিএমপি এক্সাম আউটলাইন ও ১২টি মূল নীতি"
          },
          {
            "en": "Building & Leading Teams: Forming, Storming, Norming, Performing (Tuckman)",
            "bn": "টিম বিল্ডিং ও টিম লিডারশিপ"
          },
          {
            "en": "Conflict Management (Thomas-Kilmann Model) & Stakeholder Engagement",
            "bn": "কনফ্লিক্ট ম্যানেজমেন্ট ও স্টেকহোল্ডার এনগেজমেন্ট"
          },
          {
            "en": "Emotional Intelligence, Servant Leadership & Virtual Team Collaboration",
            "bn": "সার্ভেন্ট লিডারশিপ ও ভার্চুয়াল টিম ম্যানেজমেন্ট"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Process Domain (50%) - Predictive & Agile Life Cycles",
          "bn": "মডিউল ২: প্রসেস ডোমেন - ওয়াটারফল ও অ্যাজাইল"
        },
        "duration": {
          "en": "4 Classes • 12 Hours",
          "bn": "৪ টি ক্লাস • ১২ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Scope, Schedule & Critical Path Method (CPM), Float/Slack Calculation",
            "bn": "স্কোপ, শিডিউল ও ক্রিটিক্যাল পাথ মেথড"
          },
          {
            "en": "Cost Management & Earned Value Analysis (EVM: PV, EV, AC, CV, SV, CPI, SPI)",
            "bn": "কস্ট ম্যানেজমেন্ট ও আর্নড ভ্যালু অ্যানালাইসিস"
          },
          {
            "en": "Agile & Scrum Framework: User Stories, Velocity, Burndown Charts & Sprints",
            "bn": "অ্যাজাইল ও স্ক্রাম: ইউজার স্টোরিজ ও স্প্রিন্টস"
          },
          {
            "en": "Risk Management: Quantitative/Qualitative Analysis & Quality Audits",
            "bn": "রিস্ক ম্যানেজমেন্ট ও কোয়ালিটি অডিট"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Business Environment (8%), PMP Mindset & Mocks",
          "bn": "মডিউল ৩: বিজনেস এনভায়রনমেন্ট, মাইন্ডসেট ও মক টেস্ট"
        },
        "duration": {
          "en": "3 Classes • 8 Hours",
          "bn": "৩ টি ক্লাস • ৮ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Business Environment: Compliance, Value Delivery & Organizational Change",
            "bn": "কমপ্লায়েন্স ও ভ্যালু ডেলিভারি ম্যানেজমেন্ট"
          },
          {
            "en": "The Essential 'PMP Mindset' for Eliminating Distractor Options",
            "bn": "পিএমপি মাইন্ডসেট ও অপশন এলিমিনেশন কৌশল"
          },
          {
            "en": "PMI Application Audit Support & Experience Documentation Guidance",
            "bn": "পিএমআই অ্যাপ্লিকেশন সাবমিশন ও অডিট সাপোর্ট"
          },
          {
            "en": "Full-Length 180-Question PMP Simulation Exam & Performance Review",
            "bn": "১৮০ নম্বরের পূর্ণাঙ্গ পিএমপি মক টেস্ট ও বিশ্লেষণ"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "35 Contact Hours Official PMP Eligibility Certificate",
        "bn": "৩৫ কন্টাক্ট আওয়ার্স অফিসিয়াল পিএমপি সার্টিফিকেট"
      },
      {
        "en": "PMBOK 7th Edition & Agile Practice Guide Summaries",
        "bn": "পিএমবক ৭ম সংস্করণ সামারি শিট"
      },
      {
        "en": "1,800+ High-Quality PMP Exam Simulator Questions",
        "bn": "১,৮০০+ পিএমপি এক্সাম সিমুলেটর প্রশ্ন"
      },
      {
        "en": "PMI Application Writing & Audit Guidance",
        "bn": "পিএমআই অ্যাপ্লিকেশন রিভিউ ও সাপোর্ট"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Engr. Nazmul Huda",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "role": {
          "en": "PMP Certified Project Manager",
          "bn": "পিএমপি সার্টিফাইড প্রজেক্ট ম্যানেজার"
        },
        "rating": 5,
        "comment": {
          "en": "Passed with 3 Above Targets (3x AT)! The PMP mindset frameworks were the golden key.",
          "bn": "তিনটি ডোমেনেই Above Target পেয়ে পাস করেছি! পিএমপি মাইন্ডসেট এক কথায় জাদুকরী।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "46",
    "slug": "cisa-certified-information-systems-auditor",
    "title": {
      "en": "CISA (Certified Information Systems Auditor)",
      "bn": "সিআইএসএ (সার্টিফাইড ইনফরমেশন সিস্টেমস অডিটর)"
    },
    "subtitle": {
      "en": "Master ISACA CISA: 5 Auditing Domains, IT Governance, Acquisition, Operations & Asset Protection",
      "bn": "আইসাকা সিআইএসএ: ৫টি অডিটিং ডোমেন, আইটি গভর্নেন্স, সিস্টেম সিকিউরিটি অডিট ও রিস্ক কন্ট্রোল"
    },
    "category": "management",
    "categoryLabel": {
      "en": "Management",
      "bn": "ম্যানেজমেন্ট"
    },
    "badge": {
      "en": "GOLD STANDARD",
      "bn": "গোল্ড স্ট্যান্ডার্ড"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 60,
    "enrolledCount": "110+ Enrolled",
    "languages": {
      "en": "English / Bengali",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "30,000৳",
    "rawFee": 30000,
    "originalFee": "42,000৳",
    "duration": {
      "en": "40 hrs. (1.5 Months)",
      "bn": "৪০ ঘণ্টা (১.৫ মাস)"
    },
    "classesCount": {
      "en": "14 Classes",
      "bn": "১৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/cisa.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Engr. Salman Farsi (CISA, CISSP)",
      "designation": {
        "en": "Principal IT Auditor & ISACA Certified Mentor",
        "bn": "প্রিন্সিপাল আইটি অডিটর ও আইসাকা মেন্টর"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "10+ years conducting banking, telecom and government IT systems security audits.",
        "bn": "ব্যাংক ও টেলিকম আইটি সিস্টেমস অডিটে ১০+ বছরের অভিজ্ঞতা।"
      },
      "experience": "10+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Official ISACA Certified Information Systems Auditor (CISA) certification training. Comprehensive coverage of all 5 CISA domains: Information System Auditing Process (21%), Governance & Management of IT (17%), Information Systems Acquisition, Development & Implementation (12%), Information Systems Operations & Business Resilience (23%) and Protection of Information Assets (27%).",
      "bn": "আইসাকা (ISACA) সার্টিফাইড ইনফরমেশন সিস্টেমস অডিটর (CISA) কোর্স। এতে আইটি অডিটিং প্রসেস, আইটি গভর্নেন্স, সিস্টেম ডেভেলপমেন্ট অডিট, বিজনেস রেজিলিয়েন্স ও ডাটা সিকিউরিটি অডিট শেখানো হয়।"
    },
    "fullDescription": {
      "en": "CISA is the globally recognized benchmark for professionals who audit, control, monitor and assess an enterprise's information technology and business systems. Master IT compliance, control frameworks (COBIT, ISO 27001) and pass the ISACA CISA exam.",
      "bn": "এই কোর্সে আপনি ব্যাংকিং ও আর্থিক প্রতিষ্ঠানের আইটি অডিটর হিসেবে নিরাপত্তা ত্রুটি মূল্যায়ন, নিয়ন্ত্রক কমপ্লায়েন্স ও আইসাকা সিআইএসএ পরীক্ষার শতভাগ প্রস্তুতি সম্পন্ন করবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "5 ISACA CISA Domains",
          "bn": "৫টি আইসাকা ডোমেন"
        },
        "desc": {
          "en": "Comprehensive coverage aligned with ISACA CISA Review Manual (CRM).",
          "bn": "আইসাকা অফিসিয়াল রিভিউ ম্যানুয়াল অনুযায়ী পূর্ণাঙ্গ প্রস্তুতি।"
        },
        "icon": "ShieldCheck"
      },
      {
        "id": "cv2",
        "title": {
          "en": "COBIT & ISO 27001",
          "bn": "কোবিট ও আইএসও ২৭০০১"
        },
        "desc": {
          "en": "Master IT governance frameworks, risk-based audit planning and testing.",
          "bn": "রিস্ক-বেসড আইটি অডিট প্ল্যানিং ও টেস্টিং।"
        },
        "icon": "Award"
      },
      {
        "id": "cv3",
        "title": {
          "en": "1,000+ QAE Practice",
          "bn": "১০০০+ কিউএই প্রশ্ন ব্যাংক"
        },
        "desc": {
          "en": "Extensive practice on ISACA official Questions, Answers & Explanations (QAE).",
          "bn": "আইসাকার অফিসিয়াল প্রশ্ন ও ব্যাখ্যাসহ সলিউশন।"
        },
        "icon": "BookOpen"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Execute risk-based IT audits adhering to international IS audit standards.",
        "bn": "আন্তর্জাতিক মানদণ্ড অনুযায়ী রিস্ক-বেসড আইটি অডিট পরিচালনা করা।"
      },
      {
        "en": "Evaluate enterprise IT governance structures and management strategies.",
        "bn": "এন্টারপ্রাইজ আইটি গভর্নেন্স ও ম্যানেজমেন্ট মূল্যায়ন করা।"
      },
      {
        "en": "Audit system development lifecycles (SDLC) and project management controls.",
        "bn": "সফটওয়্যার ডেভেলপমেন্ট লাইফসাইকেল অডিট করা।"
      },
      {
        "en": "Assess business continuity, disaster recovery and IT operations resilience.",
        "bn": "বিজনেস কন্টিনিউটি ও ডিজাস্টার রিকভারি অডিট করা।"
      },
      {
        "en": "Pass the ISACA CISA certification exam on your first attempt.",
        "bn": "প্রথমবারেই আইসাকা সিআইএসএ পরীক্ষায় পাস করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Auditing Process & Governance of Enterprise IT",
          "bn": "মডিউল ১: অডিটিং প্রসেস ও এন্টারপ্রাইজ আইটি গভর্নেন্স"
        },
        "duration": {
          "en": "5 Classes • 14 Hours",
          "bn": "৫ টি ক্লাস • ১৪ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Domain 1: Information System Auditing Process (Audit Charter, Planning, Evidence)",
            "bn": "ডোমেন ১: ইনফরমেশন সিস্টেম অডিটিং প্রসেস"
          },
          {
            "en": "Audit Risk Assessment, Control Self-Assessment (CSA) & Continuous Auditing",
            "bn": "অডিট রিস্ক অ্যাসেসমেন্ট ও কন্টিনিউয়াস অডিটিং"
          },
          {
            "en": "Domain 2: Governance and Management of IT (IT Strategy, Policies & COBIT)",
            "bn": "ডোমেন ২: গভর্নেন্স অ্যান্ড ম্যানেজমেন্ট অফ আইটি"
          },
          {
            "en": "IT Resource Management, Sourcing Strategies & Risk Management Frameworks",
            "bn": "আইটি রিসোর্স ম্যানেজমেন্ট ও রিস্ক ফ্রেমওয়ার্ক"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Systems Acquisition, Operations & Business Resilience",
          "bn": "মডিউল ২: সিস্টেম একুইজিশন, অপারেশনস ও রেজিলিয়েন্স"
        },
        "duration": {
          "en": "5 Classes • 14 Hours",
          "bn": "৫ টি ক্লাস • ১৪ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Domain 3: Information Systems Acquisition, Development & Implementation (SDLC)",
            "bn": "ডোমেন ৩: সিস্টেম একুইজিশন ও এসডিএলসি অডিট"
          },
          {
            "en": "Project Governance, Change Management & Post-Implementation Reviews",
            "bn": "চেঞ্জ ম্যানেজমেন্ট ও পোস্ট-ইমপ্লিমেন্টেশন রিভিউ"
          },
          {
            "en": "Domain 4: Information Systems Operations & Business Resilience (Hardware, Network)",
            "bn": "ডোমেন ৪: সিস্টেম অপারেশনস ও বিজনেস রেজিলিয়েন্স"
          },
          {
            "en": "Business Continuity Planning (BCP), Disaster Recovery Testing (DRP) & Backups",
            "bn": "বিজনেস কন্টিনিউটি ও ডিজাস্টার রিকভারি টেস্টিং"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Protection of Information Assets & CISA Exam Prep",
          "bn": "মডিউল ৩: ইনফরমেশন অ্যাসেট প্রটেকশন ও সিআইএসএ এক্সাম"
        },
        "duration": {
          "en": "4 Classes • 12 Hours",
          "bn": "৪ টি ক্লাস • ১২ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Domain 5: Protection of Information Assets (Logical Access, Cryptography, Network Security)",
            "bn": "ডোমেন ৫: ইনফরমেশন অ্যাসেট প্রটেকশন"
          },
          {
            "en": "Security Awareness, Incident Management & Physical/Environmental Controls",
            "bn": "সিকিউরিটি অ্যাওয়ারনেস ও ফিজিক্যাল কন্ট্রোলস"
          },
          {
            "en": "ISACA CISA 'Think Like an Auditor' Methodology & Question Breakdown",
            "bn": "সিআইএসএ অডিটর মাইন্ডসেট ও প্রশ্ন বিশ্লেষণ"
          },
          {
            "en": "Full-Length 150-Question CISA Simulation Practice Examination",
            "bn": "১৫০ নম্বরের পূর্ণাঙ্গ সিআইএসএ মক টেস্ট"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "CISA Training Completion Certificate",
        "bn": "সিআইএসএ ট্রেনিং কমপ্লিশন সার্টিফিকেট"
      },
      {
        "en": "ISACA CISA Review Manual Summaries",
        "bn": "আইসাকা সিআইএসএ রিভিউ ম্যানুয়াল সামারি"
      },
      {
        "en": "1,200+ CISA QAE Practice Questions Bank",
        "bn": "১,২০০+ সিআইএসএ কিউএই প্রশ্ন ব্যাংক"
      },
      {
        "en": "Banking & Financial IT Auditor Career Mentorship",
        "bn": "ব্যাংক ও ফিন্যান্সিয়াল আইটি অডিটর মেন্টরশিপ"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Saadman Sakib",
        "avatar": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100",
        "role": {
          "en": "IT Auditor at Multinational Bank",
          "bn": "মাল্টিন্যাশনাল ব্যাংকের আইটি অডিটর"
        },
        "rating": 5,
        "comment": {
          "en": "Passed CISA with a top percentile! The domain 4 & 5 explanations made all the difference.",
          "bn": "সিআইএসএ পরীক্ষায় টপ পার্সেন্টাইল পেয়ে পাস করেছি। ডোমেন ৪ ও ৫ এর ব্যাখ্যা দারুণ ছিল।"
        },
        "date": "3 Weeks Ago"
      }
    ]
  },
  {
    "id": "47",
    "slug": "itil-service-management",
    "title": {
      "en": "ITIL® 4 Foundation Service Management",
      "bn": "আইটিআইএল ৪ সার্ভিস ম্যানেজমেন্ট"
    },
    "subtitle": {
      "en": "Master ITIL 4: Service Value System (SVS), Four Dimensions, 34 Management Practices & Foundation Certification",
      "bn": "আইটিআইএল ৪ সার্ভিস ভ্যালু সিস্টেম, ৪টি ডাইমেনশন ও আইটি সার্ভিস ম্যানেজমেন্ট"
    },
    "category": "management",
    "categoryLabel": {
      "en": "Management",
      "bn": "ম্যানেজমেন্ট"
    },
    "badge": {
      "en": "CERTIFIED",
      "bn": "সার্টিফাইড"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.8,
    "ratingsCount": 75,
    "enrolledCount": "160+ Enrolled",
    "languages": {
      "en": "English / Bengali",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "26,000৳",
    "rawFee": 26000,
    "originalFee": "35,000৳",
    "duration": {
      "en": "32 hrs. (1 Month)",
      "bn": "৩২ ঘণ্টা (১ মাস)"
    },
    "classesCount": {
      "en": "10 Classes",
      "bn": "১০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/itil 4 foundation service management.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Engr. Zahid Hasan (ITIL Managing Professional)",
      "designation": {
        "en": "ITSM Lead & ITIL 4 Managing Professional",
        "bn": "আইটিএসএম লিড ও আইটিআইএল ৪ ম্যানেজিং প্রফেশনাল"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "11+ years transforming enterprise IT service management and operations across global telecom.",
        "bn": "টেলিকম ও আইটিতে আইটি সার্ভিস ম্যানেজমেন্টে ১১+ বছরের অভিজ্ঞতা।"
      },
      "experience": "11+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Official ITIL 4 Foundation certification training course by Axelos/PeopleCert. Learn the ITIL 4 Framework, Key Concepts of Service Management (value, co-creation, stakeholders), The Four Dimensions of Service Management, The Service Value System (SVS), The Service Value Chain, 7 Guiding Principles and key ITIL management practices (Incident, Problem, Change Enablement, Service Desk).",
      "bn": "আইটিআইএল ৪ ফাউন্ডেশন সার্টিফিকেশন কোর্স। এতে আইটি সার্ভিস ম্যানেজমেন্ট, সার্ভিস ভ্যালু সিস্টেম, ভ্যালু চেইন, ৭টি গাইডিং প্রিন্সিপাল, ইনসিডেন্ট ম্যানেজমেন্ট ও চেঞ্জ এনেবলমেন্ট শেখানো হয়।"
    },
    "fullDescription": {
      "en": "ITIL 4 is the globally accepted standard for IT Service Management (ITSM). Learn how to align modern IT services with business digital transformation, Agile, DevOps and cloud environments, passing the official ITIL 4 Foundation exam.",
      "bn": "এই কোর্সে আপনি আধুনিক আইটি সার্ভিস অপারেশন পরিচালনা, সার্ভিস লেভেল এগ্রিমেন্ট (SLA) ম্যানেজমেন্ট, ইনসিডেন্ট রেসপন্স এবং আইটিআইএল ৪ ফাউন্ডেশন সার্টিফিকেশন অর্জনের সম্পূর্ণ প্রস্তুতি পাবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "ITIL 4 Foundation Syllabus",
          "bn": "আইটিআইএল ৪ সিলেবাস"
        },
        "desc": {
          "en": "100% aligned with Axelos official ITIL 4 Foundation exam blueprint.",
          "bn": "অফিসিয়াল আইটিআইএল ৪ সিলেবাস অনুযায়ী পূর্ণ প্রশিক্ষণ।"
        },
        "icon": "Briefcase"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Service Value System (SVS)",
          "bn": "সার্ভিস ভ্যালু সিস্টেম"
        },
        "desc": {
          "en": "Master the 4 dimensions, 7 guiding principles and Service Value Chain.",
          "bn": "সার্ভিস ভ্যালু চেইন ও ৭টি গাইডিং প্রিন্সিপাল।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv3",
        "title": {
          "en": "ITSM Best Practices",
          "bn": "আইটিএসএম বেস্ট প্র্যাকটিসেস"
        },
        "desc": {
          "en": "Incident, Problem, Service Desk, Change Enablement & Continual Improvement.",
          "bn": "ইনসিডেন্ট, প্রবলেম ও সার্ভিস ডেস্ক ম্যানেজমেন্ট।"
        },
        "icon": "Award"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Understand key concepts of IT service management and value co-creation.",
        "bn": "আইটি সার্ভিস ম্যানেজমেন্ট ও ভ্যালু কো-ক্রিয়েশন বোঝা।"
      },
      {
        "en": "Apply the 7 ITIL Guiding Principles to modern IT operations.",
        "bn": "৭টি গাইডিং প্রিন্সিপাল আইটি অপারেশনে প্রয়োগ করা।"
      },
      {
        "en": "Understand the Four Dimensions of Service Management (Organizations, People, Partners).",
        "bn": "সার্ভিস ম্যানেজমেন্টের ৪টি ডাইমেনশন বিশ্লেষণ করা।"
      },
      {
        "en": "Master key ITIL management practices including Incident, Change & Service Desk.",
        "bn": "ইনসিডেন্ট ও চেঞ্জ ম্যানেজমেন্ট প্র্যাকটিস আয়ত্ত করা।"
      },
      {
        "en": "Pass the PeopleCert ITIL 4 Foundation certification exam.",
        "bn": "পিপলসার্ট আইটিআইএল ৪ ফাউন্ডেশন পরীক্ষায় পাস করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Service Management Concepts & 4 Dimensions",
          "bn": "মডিউল ১: সার্ভিস ম্যানেজমেন্ট ও ৪টি ডাইমেনশন"
        },
        "duration": {
          "en": "3 Classes • 10 Hours",
          "bn": "৩ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Introduction to ITIL 4: History, Value, Outcomes, Costs & Risks",
            "bn": "আইটিআইএল ৪ পরিচিতি, ভ্যালু ও রিস্কস"
          },
          {
            "en": "Service Relationships: Service Provision, Consumption & Co-creation",
            "bn": "সার্ভিস রিলেশনশিপ ও ভ্যালু কো-ক্রিয়েশন"
          },
          {
            "en": "The Four Dimensions: Organizations & People, Information & Technology",
            "bn": "৪টি ডাইমেনশন: অর্গানাইজেশন ও টেকনোলজি"
          },
          {
            "en": "The Four Dimensions: Partners & Suppliers, Value Streams & Processes",
            "bn": "পার্টনার্স, ভ্যালু স্ট্রিমস ও প্রসেসেস"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Service Value System (SVS) & 7 Guiding Principles",
          "bn": "মডিউল ২: সার্ভিস ভ্যালু সিস্টেম ও ৭টি প্রিন্সিপাল"
        },
        "duration": {
          "en": "4 Classes • 12 Hours",
          "bn": "৪ টি ক্লাস • ১২ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "The ITIL Service Value System (SVS) Architecture & Governance",
            "bn": "সার্ভিস ভ্যালু সিস্টেম আর্কিটেকচার"
          },
          {
            "en": "The 7 ITIL Guiding Principles (Focus on value, Start where you are, Progress iteratively...)",
            "bn": "৭টি গাইডিং প্রিন্সিপাল ও বাস্তব প্রয়োগ"
          },
          {
            "en": "The Service Value Chain Activities: Plan, Improve, Engage, Design, Build, Deliver",
            "bn": "সার্ভিস ভ্যালু চেইন অ্যাক্টিভিটিজ"
          },
          {
            "en": "Continual Improvement Model & Continual Improvement Register (CIR)",
            "bn": "কন্টিনিউয়াল ইমপ্রুভমেন্ট মডেল"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: 34 ITIL Practices & ITIL 4 Foundation Exam",
          "bn": "মডিউল ৩: আইটিআইএল প্র্যাকটিসেস ও এক্সাম"
        },
        "duration": {
          "en": "3 Classes • 10 Hours",
          "bn": "৩ টি ক্লাস • ১০ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Key Management Practices: Incident Management, Problem Management & Service Desk",
            "bn": "ইনসিডেন্ট, প্রবলেম ও সার্ভিস ডেস্ক"
          },
          {
            "en": "Service Request Management, Service Level Management (SLA, OLA) & Monitoring",
            "bn": "সার্ভিস রিকোয়েস্ট ও এসএলএ ম্যানেজমেন্ট"
          },
          {
            "en": "Change Enablement, Release Management & Service Configuration Management",
            "bn": "চেঞ্জ এনেবলমেন্ট ও রিলিজ ম্যানেজমেন্ট"
          },
          {
            "en": "Official ITIL 4 Foundation Mock Exams, Dumps Review & Certification Strategy",
            "bn": "অফিসিয়াল আইটিআইএল ৪ মক টেস্ট ও সমাধান"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "ITIL 4 Foundation Course Certificate",
        "bn": "আইটিআইএল ৪ ফাউন্ডেশন কোর্স সার্টিফিকেট"
      },
      {
        "en": "Axelos Official ITIL 4 Foundation Manual Summary",
        "bn": "অফিসিয়াল আইটিআইএল ৪ ম্যানুয়াল সামারি"
      },
      {
        "en": "600+ Official ITIL 4 Practice Questions Bank",
        "bn": "৬০০+ আইটিআইএল ৪ প্র্যাকটিস প্রশ্ন ব্যাংক"
      },
      {
        "en": "ITSM & Service Delivery Manager Career Guidance",
        "bn": "আইটিএসএম ও সার্ভিস ডেলিভারি ক্যারিয়ার গাইড"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Mirza Galib",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
        "role": {
          "en": "IT Service Delivery Manager",
          "bn": "আইটি সার্ভিস ডেলিভারি ম্যানেজার"
        },
        "rating": 5,
        "comment": {
          "en": "Scored 38/40 in the ITIL 4 Foundation exam! Excellent real-life ITSM process explanations.",
          "bn": "আইটিআইএল ৪ পরীক্ষায় ৩৮/৪০ পেয়ে পাস করেছি! চমৎকার ট্রেনিং।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "48",
    "slug": "microsoft-project",
    "title": {
      "en": "Microsoft Project (MS Project)",
      "bn": "মাইক্রোসফট প্রজেক্ট (এমএস প্রজেক্ট)"
    },
    "subtitle": {
      "en": "Master MS Project Professional: Work Breakdown Structure (WBS), Gantt Charts, Resource Levelling, Cost & Baseline Tracking",
      "bn": "এমএস প্রজেক্ট প্রফেশনাল: ডব্লিউবিএস, গ্যান্ট চার্ট, রিসোর্স ব্যালেন্সিং, কস্ট ও প্রজেক্ট ট্র্যাকিং"
    },
    "category": "management",
    "categoryLabel": {
      "en": "Management",
      "bn": "ম্যানেজমেন্ট"
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
    "rating": 4.8,
    "ratingsCount": 85,
    "enrolledCount": "200+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "25,000৳",
    "rawFee": 25000,
    "originalFee": "35,000৳",
    "duration": {
      "en": "40 hrs. (1.5 Months)",
      "bn": "৪০ ঘণ্টা (১.৫ মাস)"
    },
    "classesCount": {
      "en": "14 Classes",
      "bn": "১৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/product managment.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Engr. Zahid Hasan (PMP)",
      "designation": {
        "en": "Principal Project Planner & Scheduling Consultant",
        "bn": "প্রিন্সিপাল প্রজেক্ট প্ল্যানার ও শিডিউলিং কনসালট্যান্ট"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "12+ years creating complex project schedules for construction, software and engineering.",
        "bn": "কনস্ট্রাকশন ও আইটি মেগা প্রজেক্টের শিডিউলিংয়ে ১২+ বছরের অভিজ্ঞতা।"
      },
      "experience": "12+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Practical project planning, scheduling and control using Microsoft Project Professional. Topics include project calendar configuration, Work Breakdown Structure (WBS), task dependencies & link types (FS, SS, FF, SF), Critical Path Method (CPM), resource allocation & leveling, cost management, baseline setting, variance analysis and visual dashboard reporting.",
      "bn": "মাইক্রোসফট প্রজেক্ট প্রফেশনাল দিয়ে প্রজেক্ট প্ল্যানিং ও শিডিউলিং কোর্স। এতে ক্যালেন্ডার কনফিগারেশন, ডব্লিউবিএস, গ্যান্ট চার্ট, ক্রিটিক্যাল পাথ মেথড, রিসোর্স ব্যালেন্সিং, কস্ট ট্র্যাকিং এবং এক্সিকিউটিভ ড্যাশবোর্ড রিপোর্ট তৈরি শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Transform into an expert Project Scheduler & Planning Engineer. Learn how to manage project timelines, optimize resource utilization without over-allocation, track progress against baseline budgets and deliver construction or IT projects on time.",
      "bn": "এই কোর্সে আপনি বাস্তব প্রজেক্টের গ্যান্ট চার্ট তৈরি, রিসোর্স শিডিউলিং, আর্নড ভ্যালু অ্যানালাইসিস এবং ক্লায়েন্টদের জন্য প্রজেক্ট প্রগ্রেস রিপোর্ট তৈরির বাস্তবমুখী প্রশিক্ষণ পাবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "WBS & Gantt Charts",
          "bn": "ডব্লিউবিএস ও গ্যান্ট চার্ট"
        },
        "desc": {
          "en": "Build detailed task hierarchies, milestones, summary tasks and dependency links.",
          "bn": "টাস্ক হায়ারার্কি, মাইলস্টোন ও গ্যান্ট চার্ট তৈরি।"
        },
        "icon": "Briefcase"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Resource & Cost Control",
          "bn": "রিসোর্স ও কস্ট কন্ট্রোল"
        },
        "desc": {
          "en": "Assign work/material/cost resources, resolve over-allocation with leveling.",
          "bn": "রিসোর্স ওভার-অ্যালোকেশন সমাধান ও বাজেট কন্ট্রোল।"
        },
        "icon": "TrendingUp"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Baseline Tracking",
          "bn": "বেসলাইন ও ভ্যারিয়েন্স ট্র্যাকিং"
        },
        "desc": {
          "en": "Set project baselines, track variance in actual vs planned schedule and costs.",
          "bn": "প্ল্যান বনাম বাস্তব কাজের তুলনা ও ট্র্যাকিং।"
        },
        "icon": "Award"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Set up project calendars, working hours, exceptions and project start dates.",
        "bn": "প্রজেক্ট ক্যালেন্ডার ও ওয়ার্কিং আওয়ার্স সেটআপ করা।"
      },
      {
        "en": "Build structured Work Breakdown Structures (WBS) with task dependencies.",
        "bn": "টাস্ক ডিপেন্ডেন্সি সহ কমপ্লিট ডব্লিউবিএস তৈরি করা।"
      },
      {
        "en": "Identify the Critical Path and manage schedule float to prevent delays.",
        "bn": "ক্রিটিক্যাল পাথ ও ফ্লোট বিশ্লেষণ করে সময় বাঁচানো।"
      },
      {
        "en": "Allocate resources, manage hourly rates and execute resource leveling.",
        "bn": "রিসোর্স বাজেট নির্ধারণ ও রিসোর্স লেভেলিং করা।"
      },
      {
        "en": "Generate visual status reports, S-Curves and executive dashboards.",
        "bn": "ভিজ্যুয়াল প্রজেক্ট স্ট্যাটাস ও এস-কার্ভ রিপোর্ট তৈরি করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Project Setup, WBS & Task Scheduling",
          "bn": "মডিউল ১: প্রজেক্ট সেটআপ, ডব্লিউবিএস ও টাস্ক শিডিউলিং"
        },
        "duration": {
          "en": "4 Classes • 12 Hours",
          "bn": "৪ টি ক্লাস • ১২ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Microsoft Project Interface, Project Calendars, Working Times & Start Dates",
            "bn": "এমএস প্রজেক্ট ইন্টারফেস ও ক্যালেন্ডার সেটিংস"
          },
          {
            "en": "Creating Work Breakdown Structure (WBS), Summary Tasks & Milestones",
            "bn": "ডব্লিউবিএস, সামারি টাস্ক ও মাইলস্টোন তৈরি"
          },
          {
            "en": "Task Dependencies: Finish-to-Start (FS), Start-to-Start (SS), Lead & Lag Time",
            "bn": "টাস্ক ডিপেন্ডেন্সি ও লিড/ল্যাগ টাইম"
          },
          {
            "en": "Auto-Scheduled vs Manually Scheduled Tasks & Task Constraints",
            "bn": "অটো বনাম ম্যানুয়াল শিডিউলিং ও কনস্ট্রেইন্টস"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Resource Allocation, Costing & Critical Path",
          "bn": "মডিউল ২: রিসোর্স, কস্ট ও ক্রিটিক্যাল পাথ"
        },
        "duration": {
          "en": "5 Classes • 14 Hours",
          "bn": "৫ টি ক্লাস • ১৪ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Resource Sheet: Work, Material & Cost Resources with Standard/Overtime Rates",
            "bn": "রিসোর্স শিট তৈরি ও ওভারটাইম রেট"
          },
          {
            "en": "Assigning Resources to Tasks, Effort-Driven Scheduling & Fixed Duration Tasks",
            "bn": "টাস্কে রিসোর্স অ্যাসাইন ও ডিউরেশন"
          },
          {
            "en": "Resolving Resource Over-Allocations using Resource Leveling & Split Tasks",
            "bn": "রিসোর্স লেভেলিং ও ওভার-অ্যালোকেশন সমাধান"
          },
          {
            "en": "Critical Path Method (CPM): Identifying Critical Tasks, Total Slack & Free Slack",
            "bn": "ক্রিটিক্যাল পাথ মেথড ও স্ল্যাক ক্যালকুলেশন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Baseline Setting, Tracking & Visual Reports",
          "bn": "মডিউল ৩: বেসলাইন, ট্র্যাকিং ও ভিজ্যুয়াল রিপোর্টস"
        },
        "duration": {
          "en": "5 Classes • 14 Hours",
          "bn": "৫ টি ক্লাস • ১৪ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Setting the Project Baseline & Understanding Baseline vs Actual Data",
            "bn": "প্রজেক্ট বেসলাইন সেট করা ও প্ল্যান সংরক্ষণ"
          },
          {
            "en": "Tracking Project Progress: % Complete, Actual Work, Remaining Duration & Slippage",
            "bn": "প্রজেক্ট প্রগ্রেস ট্র্যাকিং ও কাজ মনিটরিং"
          },
          {
            "en": "Earned Value Analysis in MS Project: BCWS (PV), BCWP (EV), ACWP (AC), CV, SV",
            "bn": "আর্নড ভ্যালু অ্যানালাইসিস ও কস্ট ভ্যারিয়েন্স"
          },
          {
            "en": "Visual Dashboard Reports, S-Curve Generation, Custom Tables & PDF Export",
            "bn": "ভিজ্যুয়াল ড্যাশবোর্ড, এস-কার্ভ ও পিডিএফ রিপোর্ট"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Microsoft Project Specialist Certificate",
        "bn": "মাইক্রোসফট প্রজেক্ট স্পেশালিস্ট সার্টিফিকেট"
      },
      {
        "en": "Ready-to-Use Real-World MS Project Templates (Construction, IT, Engineering)",
        "bn": "রেডিমেড এমএস প্রজেক্ট টেমপ্লেটস"
      },
      {
        "en": "Planning Engineer & Scheduler Interview Guide",
        "bn": "প্ল্যানিং ইঞ্জিনিয়ার ইন্টারভিউ গাইড"
      },
      {
        "en": "1-on-1 Project Scheduling Mentorship",
        "bn": "১-অন-১ প্রজেক্ট শিডিউলিং মেন্টরশিপ"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Engr. Asaduzzaman",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
        "role": {
          "en": "Planning Engineer (Construction Mega-Project)",
          "bn": "প্ল্যানিং ইঞ্জিনিয়ার (কনস্ট্রাকশন মেগা-প্রজেক্ট)"
        },
        "rating": 5,
        "comment": {
          "en": "The resource leveling and S-curve reporting techniques directly improved our project tracking.",
          "bn": "রিসোর্স লেভেলিং ও এস-কার্ভ রিপোর্টিংয়ের ক্লাসগুলো অসাধারণ ছিল।"
        },
        "date": "3 Weeks Ago"
      }
    ]
  },
  {
    "id": "49",
    "slug": "microsoft-office-specialist",
    "title": {
      "en": "Microsoft Office Specialist (MOS)",
      "bn": "মাইক্রোসফট অফিস স্পেশালিস্ট (MOS)"
    },
    "subtitle": {
      "en": "Complete Office Mastery: Microsoft Word, Advanced Excel, PowerPoint, Outlook, Access & Bengali Typing",
      "bn": "মাইক্রোসফট ওয়ার্ড, এক্সেল, পাওয়ারপয়েন্ট, আউটলুক ও বাংলা-ইংরেজি টাইপিং স্পিড"
    },
    "category": "others",
    "categoryLabel": {
      "en": "Others",
      "bn": "অন্যান্য"
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
    "rating": 4.8,
    "ratingsCount": 210,
    "enrolledCount": "530+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "10,000৳",
    "rawFee": 10000,
    "originalFee": "15,000৳",
    "duration": {
      "en": "80 hrs. (2.5 Months)",
      "bn": "৮০ ঘণ্টা (২.৫ মাস)"
    },
    "classesCount": {
      "en": "26 Classes",
      "bn": "২৬ টি ক্লাস"
    },
    "image": "/images/course thumbnail/microsoft office specialist.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Mahfuz Ahmed",
      "designation": {
        "en": "Certified Microsoft Office Specialist Master",
        "bn": "সার্টিফাইড মাইক্রোসফট অফিস স্পেশালিস্ট মাস্টার"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "8+ years training corporate executives and administrative officers in Microsoft Office suite.",
        "bn": "কর্পোরেট কর্মকর্তা ও চাকরিপ্রার্থীদের মাইক্রোসফট অফিস প্রশিক্ষণে ৮+ বছরের অভিজ্ঞতা।"
      },
      "experience": "8+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Complete Microsoft Office Specialist (MOS) certification course. Topics include Microsoft Word (formatting, tables, mail merge, official letters, thesis formatting), Microsoft Excel (formulas, functions, charts, pivot tables, data sorting), Microsoft PowerPoint (slide design, transitions, animations, pitch decks), Microsoft Outlook & Teams and high-speed Bengali (Bijoy & Avro) + English typing.",
      "bn": "মাইক্রোসফট অফিস অ্যাপ্লিকেশনের পূর্ণাঙ্গ কোর্স। এতে মাইক্রোসফট ওয়ার্ড (অফিসিয়াল চিঠি, টেবিল, মেইল মার্জ), এক্সেল (হিসাব-নিকাশ, ফর্মুলা, পিভট টেবিল), পাওয়ারপয়েন্ট (অ্যানিমেটেড প্রেজেন্টেশন), আউটলুক এবং বাংলা ও ইংরেজি টাইপিং স্পিড বৃদ্ধি শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Master the essential computer office productivity suite required for every corporate, government, bank and administrative job. Learn professional document formatting, automated calculations, executive presentation design and speed typing.",
      "bn": "এই কোর্সে আপনি সরকারি ও বেসরকারি চাকরির কম্পিউটার পরীক্ষার শতভাগ প্রস্তুতি এবং দৈনন্দিন অফিসের সমস্ত ডকুমেন্টেশন ও প্রেজেন্টেশনের কাজ দ্রুত ও নিখুঁতভাবে করার দক্ষতা অর্জন করবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Official Documentation",
          "bn": "অফিসিয়াল ডকুমেন্টেশন"
        },
        "desc": {
          "en": "Master official memo writing, mail merge, table formatting and header/footer styling.",
          "bn": "অফিসিয়াল চিঠি, মেমো ও মেইল মার্জ তৈরিতে পূর্ণ দক্ষতা।"
        },
        "icon": "BookOpen"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Excel Calculations & Charts",
          "bn": "এক্সেল হিসাব ও চার্টস"
        },
        "desc": {
          "en": "Automate financial payrolls, salary sheets, inventory and dynamic charts.",
          "bn": "বেতন শিট ও ইনভেন্টরি হিসাব তৈরির ফর্মুলা।"
        },
        "icon": "Database"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Typing & Speed Mastery",
          "bn": "বাংলা ও ইংরেজি টাইপিং"
        },
        "desc": {
          "en": "Touch typing in Bijoy Bayanno, Avro and English with 40+ WPM speed.",
          "bn": "বিজয় ও অভ্রতে দ্রুত টাইপিং স্পিড অর্জন।"
        },
        "icon": "Zap"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Create professional formatted reports, books and official letters in MS Word.",
        "bn": "মাইক্রোসফট ওয়ার্ডে প্রফেশনাল ডকুমেন্ট ও চিঠি তৈরি করা।"
      },
      {
        "en": "Perform complex calculations and data analysis using formulas in MS Excel.",
        "bn": "মাইক্রোসফট এক্সেলে ফর্মুলা দিয়ে হিসাব-নিকাশ করা।"
      },
      {
        "en": "Design modern, animated, visually appealing slide presentations in PowerPoint.",
        "bn": "পাওয়ারপয়েন্টে আকর্ষণীয় অ্যানিমেটেড স্লাইড তৈরি করা।"
      },
      {
        "en": "Manage corporate emails, calendar meetings and contacts in MS Outlook.",
        "bn": "আউটলুক দিয়ে প্রফেশনাল ইমেইল ও মিটিং শিডিউল পরিচালনা করা।"
      },
      {
        "en": "Type fluently in English (40+ WPM) and Bengali Bijoy/Avro (30+ WPM).",
        "bn": "বাংলা ও ইংরেজিতে দ্রুত গতিতে টাইপ করতে পারা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Microsoft Word & Fast Typing Techniques",
          "bn": "মডিউল ১: মাইক্রোসফট ওয়ার্ড ও টাইপিং স্পিড"
        },
        "duration": {
          "en": "9 Classes • 28 Hours",
          "bn": "৯ টি ক্লাস • ২৮ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "MS Word Interface, Ribbon, Page Setup, Margins & Typography Formatting",
            "bn": "এমএস ওয়ার্ড ইন্টারফেস ও পেজ সেটআপ"
          },
          {
            "en": "Tables, Shapes, SmartArt, Watermark & Header/Footer Numbering",
            "bn": "টেবিল, স্মার্টআর্ট ও হেডার/ফুটার ফরম্যাটিং"
          },
          {
            "en": "Mail Merge for Mass Official Letter & Certificate Generation",
            "bn": "মেইল মার্জ দিয়ে হাজারো চিঠি ও সার্টিফিকেট তৈরি"
          },
          {
            "en": "English Touch Typing & Bengali (Bijoy Bayanno / Avro) Keyboard Mastery",
            "bn": "বিজয় ও অভ্র কিবোর্ডে দ্রুত টাইপিং অনুশীলন"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Microsoft Excel (Formulas, Pivot Tables & Charts)",
          "bn": "মডিউল ২: মাইক্রোসফট এক্সেল (ফর্মুলা ও চার্টস)"
        },
        "duration": {
          "en": "9 Classes • 28 Hours",
          "bn": "৯ টি ক্লাস • ২৮ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Excel Grid, Cell Formatting, Data Types & Basic Math Operations",
            "bn": "এক্সেল গ্রিড, সেল ফরম্যাটিং ও বেসিক হিসাব"
          },
          {
            "en": "Essential Functions: SUM, AVERAGE, COUNT, MIN, MAX, IF, VLOOKUP & XLOOKUP",
            "bn": "প্রয়োজনীয় ফর্মুলা: ইফ, সামইফ ও ভি-লুকআপ"
          },
          {
            "en": "Automated Salary Sheet, Payroll, Student Grade Sheet & Invoicing",
            "bn": "অটোমেটেড স্যালারি শিট ও ইনভয়েস তৈরি"
          },
          {
            "en": "Data Sorting, Filtering, Conditional Formatting & Dynamic Charts",
            "bn": "ডাটা ফিল্টারিং ও ডায়নামিক পাই/বার চার্টস"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: PowerPoint Presentations, Outlook & MOS Exam",
          "bn": "মডিউল ৩: পাওয়ারপয়েন্ট, আউটলুক ও এমওএস এক্সাম"
        },
        "duration": {
          "en": "8 Classes • 24 Hours",
          "bn": "৮ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "PowerPoint Masterclass: Slide Layouts, Infographics & Corporate Themes",
            "bn": "পাওয়ারপয়েন্ট: স্লাইড ডিজাইন ও ইনফোগ্রাফিক্স"
          },
          {
            "en": "Transitions, Custom Animations, Audio/Video Integration & Presenter View",
            "bn": "ট্রানজিশন, অ্যানিমেশন ও ভিডিও যুক্ত করা"
          },
          {
            "en": "Microsoft Outlook: Email Composition, Signatures, Rules & Calendar Scheduling",
            "bn": "আউটলুক: ইমেইল সিগনেচার ও মিটিং ক্যালেন্ডার"
          },
          {
            "en": "Govt Computer Test / MOS Certification Mock Practical Examination",
            "bn": "সরকারি কম্পিউটার পরীক্ষা ও এমওএস মক টেস্ট"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Microsoft Office Specialist (MOS) Certificate",
        "bn": "মাইক্রোসফট অফিস স্পেশালিস্ট সার্টিফিকেট"
      },
      {
        "en": "100+ Professional Word & Excel Office Templates",
        "bn": "১০০+ প্রফেশনাল ওয়ার্ড ও এক্সেল অফিস টেমপ্লেটস"
      },
      {
        "en": "Typing Speed Booster Software & Drills",
        "bn": "টাইপিং স্পিড সফটওয়্যার ও গাইডলাইন"
      },
      {
        "en": "Government Job Computer Practical Exam Preparation",
        "bn": "সরকারি চাকরির কম্পিউটার ব্যবহারিক পরীক্ষার প্রস্তুতি"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Nurul Islam",
        "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
        "role": {
          "en": "Administrative Officer",
          "bn": "প্রশাসনিক কর্মকর্তা"
        },
        "rating": 5,
        "comment": {
          "en": "Passed the government computer practical test with full marks! Mail merge and Excel formulas were crucial.",
          "bn": "সরকারি কম্পিউটার পরীক্ষায় ফুল মার্কস পেয়েছি। মেইল মার্জ ও এক্সেলের ক্লাসগুলো অনেক কাজে লেগেছে।"
        },
        "date": "1 Week Ago"
      }
    ]
  },
  {
    "id": "50",
    "slug": "big-data-engineering",
    "title": {
      "en": "Big Data Engineering & Analytics",
      "bn": "বিগ ডাটা ইঞ্জিনিয়ারিং ও অ্যানালিটিক্স"
    },
    "subtitle": {
      "en": "Master Apache Spark, PySpark, Hadoop HDFS, Kafka Streaming, Data Warehousing & Cloud Lakehouses",
      "bn": "অ্যাপাচি স্পার্ক, পাইস্পার্ক, হাডুপ, কাফকা রিয়েলটাইম স্ট্রিমিং ও ক্লাউড ডাটা লেকহাউস"
    },
    "category": "others",
    "categoryLabel": {
      "en": "Others",
      "bn": "অন্যান্য"
    },
    "badge": {
      "en": "ADVANCED",
      "bn": "অ্যাডভান্সড"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 65,
    "enrolledCount": "130+ Enrolled",
    "languages": {
      "en": "English / Bengali",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "40,000৳",
    "rawFee": 40000,
    "originalFee": "55,000৳",
    "duration": {
      "en": "120 hrs. (4 Months)",
      "bn": "১২০ ঘণ্টা (৪ মাস)"
    },
    "classesCount": {
      "en": "40 Classes",
      "bn": "৪০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/diploma in ai and data science.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Dr. Asif Mahmud",
      "designation": {
        "en": "Principal Big Data Architect & Data Engineer",
        "bn": "প্রিন্সিপাল বিগ ডাটা আর্কিটেক্ট ও ডাটা ইঞ্জিনিয়ার"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "10+ years architecting petabyte-scale distributed data pipelines for telecom and fin-tech.",
        "bn": "পেটাবাইট-স্কেল বিগ ডাটা আর্কিটেকচারে ১০+ বছরের অভিজ্ঞতা।"
      },
      "experience": "10+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Complete distributed Big Data Engineering curriculum. Topics include Big Data architecture overview, Apache Hadoop ecosystem (HDFS, MapReduce, YARN), Apache Spark & PySpark for large-scale data processing, Spark SQL & DataFrames, Apache Kafka real-time streaming, Hive & Snowflake data warehousing and AWS EMR cloud pipelines.",
      "bn": "বিশাল পরিমাণ ডেটা প্রসেসিংয়ের জন্য কমপ্লিট বিগ ডাটা কোর্স। এতে হাডুপ এইচডিএফএস, অ্যাপাচি স্পার্ক, পাইস্পার্ক, কাফকা রিয়েলটাইম স্ট্রিমিং, স্নোফ্লেক এবং ক্লাউড ডাটা পাইপলাইন তৈরি শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Learn how modern tech giants process billions of data records in real time. Master distributed data storage, parallel compute algorithms, ETL data pipelines, stream analytics and data lakehouse architecture.",
      "bn": "এই কোর্সে আপনি পেটাবাইট ডেটা স্টোরেজ, পাইস্পার্ক দিয়ে মিলিসেকেন্ডে ডেটা প্রসেসিং, কাফকা দিয়ে রিয়েলটাইম ইভেন্ট স্ট্রিমিং এবং ক্লাউড বিগ ডাটা সলিউশন তৈরির বাস্তব দক্ষতা অর্জন করবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Apache Spark & PySpark",
          "bn": "অ্যাপাচি স্পার্ক ও পাইস্পার্ক"
        },
        "desc": {
          "en": "Master RDDs, DataFrames, Spark SQL and in-memory parallel computation.",
          "bn": "মেমোরি-স্পিড প্যারালাল ডাটা প্রসেসিং ও পাইস্পার্ক।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Kafka Real-Time Streaming",
          "bn": "কাফকা রিয়েলটাইম স্ট্রিমিং"
        },
        "desc": {
          "en": "Build event-driven real-time data ingestion pipelines with Kafka topics.",
          "bn": "রিয়েলটাইম ইভেন্ট স্ট্রিমিং ও মেসেজ ব্রোকার।"
        },
        "icon": "Server"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Data Lakehouse & Warehousing",
          "bn": "ডাটা লেকহাউস ও স্নোফ্লেক"
        },
        "desc": {
          "en": "Modern data warehousing with Snowflake, Delta Lake and AWS EMR.",
          "bn": "স্নোফ্লেক ও ডেল্টা লেক আর্কিটেকচার।"
        },
        "icon": "Database"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Understand distributed systems, CAP theorem and Big Data architecture.",
        "bn": "ডিস্ট্রিবিউটেড সিস্টেম ও বিগ ডাটা আর্কিটেকচার বোঝা।"
      },
      {
        "en": "Process massive datasets in parallel using PySpark and Spark SQL.",
        "bn": "পাইস্পার্ক দিয়ে কোটি কোটি ডেটা নিমেষে প্রসেস করা।"
      },
      {
        "en": "Ingest and process live streaming data using Apache Kafka and Spark Streaming.",
        "bn": "কাফকা ও স্পার্ক দিয়ে লাইভ স্ট্রিমিং ডেটা হ্যান্ডল করা।"
      },
      {
        "en": "Design and optimize dimensional data warehouses with Hive and Snowflake.",
        "bn": "স্নোফ্লেক ও হাইভ দিয়ে ডাটা ওয়্যারহাউস ডিজাইন করা।"
      },
      {
        "en": "Deploy production data pipelines to AWS cloud big data platforms.",
        "bn": "এডব্লিউএস ক্লাউডে প্রোডাকশন বিগ ডাটা পাইপলাইন তৈরি করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Big Data Architecture & Hadoop HDFS",
          "bn": "মডিউল ১: বিগ ডাটা আর্কিটেকচার ও হাডুপ এইচডিএফএস"
        },
        "duration": {
          "en": "12 Classes • 36 Hours",
          "bn": "১২ টি ক্লাস • ৩৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Introduction to Big Data (Volume, Velocity, Variety, Veracity, Value) & CAP Theorem",
            "bn": "বিগ ডাটা পরিচিতি ও সিএপি থিওরেম"
          },
          {
            "en": "Apache Hadoop Architecture: HDFS (NameNode, DataNode) & Replication",
            "bn": "হাডুপ আর্কিটেকচার ও এইচডিএফএস স্টোরেজ"
          },
          {
            "en": "YARN Resource Manager, MapReduce Paradigm & Distributed Computing",
            "bn": "ইয়ার্ন রিসোর্স ম্যানেজার ও ম্যাপরিডিউস"
          },
          {
            "en": "Apache Hive: Data Warehousing, HiveQL, Partitions & Bucketing",
            "bn": "অ্যাপাচি হাইভ ও হাইভ-কিউএল কুয়েরি"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Apache Spark & PySpark Parallel Processing",
          "bn": "মডিউল ২: অ্যাপাচি স্পার্ক ও পাইস্পার্ক প্রসেসিং"
        },
        "duration": {
          "en": "14 Classes • 42 Hours",
          "bn": "১৪ টি ক্লাস • ৪২ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Apache Spark Architecture: Driver, Executors, DAG & In-Memory Compute",
            "bn": "স্পার্ক আর্কিটেকচার ও ইন-মেমোরি কম্পিউটেশন"
          },
          {
            "en": "PySpark Fundamentals: Resilient Distributed Datasets (RDDs) & Transformations/Actions",
            "bn": "পাইস্পার্ক আরডিডি ও ট্রান্সফর্মেশনস"
          },
          {
            "en": "PySpark DataFrames, Spark SQL, Catalyst Optimizer & Window Functions",
            "bn": "পাইস্পার্ক ডেটাফ্রেম ও স্পার্ক এসকিউএল"
          },
          {
            "en": "Performance Tuning: Caching, Persistence, Partitioning & Shuffle Operations",
            "bn": "পারফরম্যান্স টিউনিং ও ক্যাশিং মেথডস"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Kafka Streaming, Snowflake & Cloud Pipelines",
          "bn": "মডিউল ৩: কাফকা স্ট্রিমিং, স্নোফ্লেক ও ক্লাউড পাইপলাইন"
        },
        "duration": {
          "en": "14 Classes • 42 Hours",
          "bn": "১৪ টি ক্লাস • ৪২ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Apache Kafka Architecture: Producers, Consumers, Brokers, Topics & Zookeeper",
            "bn": "অ্যাপাচি কাফকা আর্কিটেকচার ও টপিকস"
          },
          {
            "en": "Spark Structured Streaming: Processing Real-Time IoT & Financial Feeds",
            "bn": "স্পার্ক রিয়েলটাইম স্ট্রিমিং ডাটা প্রসেসিং"
          },
          {
            "en": "Modern Cloud Data Warehousing with Snowflake (Virtual Warehouses, Zero-Copy Cloning)",
            "bn": "স্নোফ্লেক ক্লাউড ডাটা ওয়্যারহাউস"
          },
          {
            "en": "End-to-End Enterprise Big Data Pipeline Project on AWS (EMR / S3 / Athena)",
            "bn": "এডব্লিউএসে সম্পূর্ণ এন্টারপ্রাইজ বিগ ডাটা প্রজেক্ট বিল্ড"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Big Data Engineer Professional Certificate",
        "bn": "বিগ ডাটা ইঞ্জিনিয়ার প্রফেশনাল সার্টিফিকেট"
      },
      {
        "en": "Distributed Hadoop & Spark Cluster Practice Lab Access",
        "bn": "হাডুপ ও স্পার্ক ক্লাস্টার প্র্যাকটিস ল্যাব"
      },
      {
        "en": "Complete Source Code of 3 Enterprise Big Data Pipelines",
        "bn": "৩টি এন্টারপ্রাইজ বিগ ডাটা পাইপলাইনের সোর্স কোড"
      },
      {
        "en": "Data Engineer Technical Interview Preparation",
        "bn": "ডাটা ইঞ্জিনিয়ার টেক ইন্টারভিউ প্রিপারেশন"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Faisal Ahmed",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
        "role": {
          "en": "Big Data Engineer",
          "bn": "বিগ ডাটা ইঞ্জিনিয়ার"
        },
        "rating": 5,
        "comment": {
          "en": "The PySpark and Kafka streaming integration modules are top notch. Landed a Data Engineer job at a telecom company!",
          "bn": "পাইস্পার্ক ও কাফকার ল্যাবগুলো অসাধারণ ছিল। টেলিকম কোম্পানিতে ডাটা ইঞ্জিনিয়ার হিসেবে জয়েন করেছি।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "51",
    "slug": "spss-data-analysis",
    "title": {
      "en": "SPSS Statistical Data Analysis",
      "bn": "এসপিএসএস স্ট্যাটিস্টিক্যাল ডাটা অ্যানালাইসিস"
    },
    "subtitle": {
      "en": "Master IBM SPSS: Hypothesis Testing, Regression, ANOVA, Factor Analysis & Research Thesis Statistics",
      "bn": "আইবিএম এসপিএসএস: হাইপোথিসিস টেস্টিং, রিগ্রেশন, আনোভা, ফ্যাক্টর অ্যানালাইসিস ও থিসিস ডাটা"
    },
    "category": "others",
    "categoryLabel": {
      "en": "Others",
      "bn": "অন্যান্য"
    },
    "badge": {
      "en": "RESEARCH",
      "bn": "রিসার্চ স্পেশাল"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 90,
    "enrolledCount": "220+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "25,000৳",
    "rawFee": 25000,
    "originalFee": "35,000৳",
    "duration": {
      "en": "40 hrs. (1.5 Months)",
      "bn": "৪০ ঘণ্টা (১.৫ মাস)"
    },
    "classesCount": {
      "en": "14 Classes",
      "bn": "১৪ টি ক্লাস"
    },
    "image": "/images/course thumbnail/spss statistical data analysis.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Dr. Farzana Yasmin",
      "designation": {
        "en": "Senior Research Methodologist & Statistical Analyst",
        "bn": "সিনিয়র রিসার্চ মেথডোলজিস্ট ও স্ট্যাটিস্টিক্যাল অ্যানালিস্ট"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "12+ years conducting quantitative research, statistical modeling and thesis data analysis.",
        "bn": "কোয়ান্টিটেটিভ রিসার্চ ও থিসিস ডাটা অ্যানালাইসিসে ১২+ বছরের অভিজ্ঞতা।"
      },
      "experience": "12+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Comprehensive IBM SPSS Statistics course for researchers, university students and data analysts. Topics include SPSS interface & variable view, data cleaning & transformation, descriptive statistics & charts, parametric & non-parametric hypothesis tests (t-tests, Chi-square), ANOVA & MANOVA, correlation & multiple linear regression, exploratory factor analysis (EFA), reliability testing (Cronbach's Alpha) and APA format output interpretation.",
      "bn": "গবেষক ও শিক্ষার্থীদের জন্য আইবিএম এসপিএসএস স্ট্যাটিস্টিক্যাল ডাটা অ্যানালাইসিস কোর্স। এতে ভ্যারিয়েবল কোডিং, ডেসক্রিপটিভ স্ট্যাটিসটিক্স, টি-টেস্ট, কাই-স্কয়ার, আনোভা, রিগ্রেশন, ফ্যাক্টর অ্যানালাইসিস ও থিসিস পেপারের জন্য এপিএ ফরম্যাট ব্যাখ্যা শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Master quantitative research methodology and data analysis with IBM SPSS. Learn how to design research questionnaires, code survey responses, choose the correct statistical tests, verify assumptions (normality, multicollinearity) and write publication-ready academic reports.",
      "bn": "এই কোর্সে আপনি মাস্টার্স ও পিএইচডি থিসিস, সামাজিক বিজ্ঞান, মেডিকেল ও বিজনেস রিসার্চের জন্য এসপিএসএস সফটওয়্যার ব্যবহার করে নির্ভুল পরিসংখ্যান বিশ্লেষণ ও জার্নাল পেপারের রিপোর্ট তৈরি শিখবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Hypothesis Testing Mastery",
          "bn": "হাইপোথিসিস টেস্টিং"
        },
        "desc": {
          "en": "Master One-sample, Independent, Paired t-tests, Chi-square & ANOVA.",
          "bn": "টি-টেস্ট, আনোভা ও কাই-স্কয়ারের নিখুঁত প্রয়োগ।"
        },
        "icon": "BookOpen"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Regression & Factor Analysis",
          "bn": "রিগ্রেশন ও ফ্যাক্টর অ্যানালাইসিস"
        },
        "desc": {
          "en": "Linear/logistic regression, Exploratory Factor Analysis & Cronbach's Alpha.",
          "bn": "মাল্টিপল রিগ্রেশন ও রিলায়েবিলিটি টেস্টিং।"
        },
        "icon": "TrendingUp"
      },
      {
        "id": "cv3",
        "title": {
          "en": "APA Format Interpretation",
          "bn": "এপিএ ফরম্যাট ইন্টারপ্রিটেশন"
        },
        "desc": {
          "en": "Convert SPSS output tables and graphs directly into publication-ready APA thesis text.",
          "bn": "থিসিসের জন্য এপিএ ফরম্যাটে এসপিএসএস রিপোর্ট লেখা।"
        },
        "icon": "Award"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Code survey questionnaires, variables and clean missing values in SPSS.",
        "bn": "সার্ভে ডেটা কোডিং ও ক্লিনজিং সম্পন্ন করা।"
      },
      {
        "en": "Check statistical assumptions: normality (Shapiro-Wilk), linearity and homoscedasticity.",
        "bn": "নরমালিটি ও স্ট্যাটিস্টিক্যাল অ্যাজাম্পশন চেক করা।"
      },
      {
        "en": "Conduct parametric and non-parametric hypothesis tests and interpret p-values.",
        "bn": "হাইপোথিসিস টেস্ট করে পি-ভ্যালুর সঠিক ব্যাখ্যা দেওয়া।"
      },
      {
        "en": "Perform multiple regression modeling and mediation/moderation analysis.",
        "bn": "মাল্টিপল রিগ্রেশন মডেলিং ও প্রিডিকশন করা।"
      },
      {
        "en": "Write complete quantitative methodology and findings chapters for academic theses.",
        "bn": "থিসিসের জন্য কমপ্লিট ডাটা অ্যানালাইসিস চ্যাপ্টার তৈরি করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: SPSS Data Setup & Descriptive Statistics",
          "bn": "মডিউল ১: এসপিএসএস ডাটা সেটআপ ও বর্ণনামূলক পরিসংখ্যান"
        },
        "duration": {
          "en": "4 Classes • 12 Hours",
          "bn": "৪ টি ক্লাস • ১২ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "IBM SPSS Interface: Data View, Variable View, Scales of Measurement (Nominal, Ordinal, Scale)",
            "bn": "এসপিএসএস ইন্টারফেস ও মেজারমেন্ট স্কেলস"
          },
          {
            "en": "Data Entry, Questionnaire Coding, Recoding Variables & Handling Missing Data",
            "bn": "ডাটা এন্ট্রি ও ভ্যারিয়েবল রিকোডিং"
          },
          {
            "en": "Descriptive Statistics: Mean, Median, Mode, Standard Deviation, Skewness & Kurtosis",
            "bn": "ডেসক্রিপটিভ স্ট্যাটিসটিক্স ও স্ট্যান্ডার্ড ডেভিয়েশন"
          },
          {
            "en": "Data Visualization: Histograms, Box Plots, Bar Charts & Normality Tests (Shapiro-Wilk)",
            "bn": "হিস্টোগ্রাম ও নরমালিটি টেস্ট"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Hypothesis Testing (t-tests, Chi-Square & ANOVA)",
          "bn": "মডিউল ২: হাইপোথিসিস টেস্টিং (টি-টেস্ট, কাই-স্কয়ার ও আনোভা)"
        },
        "duration": {
          "en": "5 Classes • 14 Hours",
          "bn": "৫ টি ক্লাস • ১৪ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Hypothesis Testing Principles (Null/Alternative, Type I/II Errors, p-value & Alpha)",
            "bn": "হাইপোথিসিস টেস্টিং ও পি-ভ্যালু কনসেপ্ট"
          },
          {
            "en": "Comparing Means: One-Sample t-test, Independent Samples t-test & Paired Samples t-test",
            "bn": "ইন্ডিপেন্ডেন্ট ও পেয়ার্ড টি-টেস্ট"
          },
          {
            "en": "Chi-Square Test of Independence & Cross-tabulation Analysis",
            "bn": "কাই-স্কয়ার টেস্ট ও ক্রস-ট্যাব অ্যানালাইসিস"
          },
          {
            "en": "One-Way ANOVA, Two-Way ANOVA & Post-Hoc Tests (Tukey, Bonferroni)",
            "bn": "ওয়ান-ওয়ে ও টু-ওয়ে আনোভা অ্যানালাইসিস"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Correlation, Regression, Factor Analysis & Thesis Prep",
          "bn": "মডিউল ৩: রিগ্রেশন, ফ্যাক্টর অ্যানালাইসিস ও থিসিস"
        },
        "duration": {
          "en": "5 Classes • 14 Hours",
          "bn": "৫ টি ক্লাস • ১৪ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Correlation Analysis: Pearson's r & Spearman's Rho with Scatter Plots",
            "bn": "পিয়ারসন ও স্পিয়ারম্যান কোরিলেশন অ্যানালাইসিস"
          },
          {
            "en": "Simple and Multiple Linear Regression (R-Square, ANOVA F-test, Beta Coefficients)",
            "bn": "মাল্টিপল লিনিয়ার রিগ্রেশন মডেলিং"
          },
          {
            "en": "Reliability Analysis (Cronbach's Alpha) & Exploratory Factor Analysis (EFA / PCA)",
            "bn": "ক্রনবাকস আলফা ও ফ্যাক্টর অ্যানালাইসিস"
          },
          {
            "en": "Interpreting SPSS Output Tables & Writing Research Thesis Results in APA 7th Format",
            "bn": "এপিএ ৭ম সংস্করণে এসপিএসএস রেজাল্ট লিখন"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "SPSS Statistical Analyst Certificate",
        "bn": "এসপিএসএস স্ট্যাটিস্টিক্যাল অ্যানালিস্ট সার্টিফিকেট"
      },
      {
        "en": "Complete SPSS Research Datasets for Practice",
        "bn": "প্র্যাকটিসের জন্য রিয়েল রিসার্চ ডেটাসেট"
      },
      {
        "en": "APA 7th Format Results Writing Template Guide",
        "bn": "এপিএ ৭ম ফরম্যাট রেজাল্টস রাইটিং গাইড"
      },
      {
        "en": "Master's & PhD Thesis Statistical Consultation",
        "bn": "মাস্টার্স ও পিএইচডি থিসিস স্ট্যাটিস্টিক্স সাপোর্ট"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Dr. Shafiul Islam",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
        "role": {
          "en": "PhD Researcher",
          "bn": "পিএইচডি গবেষক"
        },
        "rating": 5,
        "comment": {
          "en": "Learned how to run ANOVA and Multiple Regression and wrote my entire dissertation findings in 1 week!",
          "bn": "আনোভা ও রিগ্রেশনের ক্লাসগুলোর সাহায্যে মাত্র ১ সপ্তাহে থিসিসের ডাটা বিশ্লেষণ শেষ করেছি।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "52",
    "slug": "machine-learning-ai",
    "title": {
      "en": "Machine Learning & Artificial Intelligence",
      "bn": "মেশিন লার্নিং ও আর্টিফিশিয়াল ইন্টেলিজেন্স"
    },
    "subtitle": {
      "en": "Master Python Data Science, Scikit-Learn, Supervised/Unsupervised ML, Deep Learning & TensorFlow",
      "bn": "পাইথন ডাটা সায়েন্স, সুপারভাইজড/আনসুপারভাইজড মেশিন লার্নিং, ডিপ লার্নিং ও টেনসরফ্লো"
    },
    "category": "others",
    "categoryLabel": {
      "en": "Others",
      "bn": "অন্যান্য"
    },
    "badge": {
      "en": "IN DEMAND",
      "bn": "ইন ডিমান্ড"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.9,
    "ratingsCount": 165,
    "enrolledCount": "380+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "30,000৳",
    "rawFee": 30000,
    "originalFee": "42,000৳",
    "duration": {
      "en": "90 hrs. (3 Months)",
      "bn": "৯০ ঘণ্টা (৩ মাস)"
    },
    "classesCount": {
      "en": "30 Classes",
      "bn": "৩০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/Generative ai and prompt eng.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Dr. Asif Mahmud",
      "designation": {
        "en": "Lead AI Scientist & Machine Learning Architect",
        "bn": "লিড এআই সায়েন্টিস্ট ও মেশিন লার্নিং আর্কিটেক্ট"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "10+ years deploying predictive AI algorithms, computer vision models and NLP systems.",
        "bn": "প্রেডিক্টিভ এআই অ্যালগরিদম ও ডিপ লার্নিংয়ে ১০+ বছরের অভিজ্ঞতা।"
      },
      "experience": "10+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Comprehensive Machine Learning and Deep Learning engineering masterclass. Topics include Python for Data Science (NumPy, Pandas, Matplotlib, Seaborn), Supervised Learning (Linear/Logistic Regression, Decision Trees, Random Forests, SVM, XGBoost), Unsupervised Learning (K-Means, PCA), Neural Networks & Deep Learning with TensorFlow/Keras, Natural Language Processing (NLP), Computer Vision with OpenCV and ML model deployment with Streamlit.",
      "bn": "মেশিন লার্নিং ও ডিপ লার্নিংয়ের কমপ্লিট ইঞ্জিনিয়ারিং কোর্স। এতে পাইথন ডাটা সায়েন্স, ক্লাসিফিকেশন ও রিগ্রেশন মডেল, র‍্যান্ডম ফরেস্ট, এক্সজিবুস্ট, কে-মিনস ক্লাস্টারিং, টেনসরফ্লো ডিপ লার্নিং, এনএলপি ও স্ট্রিমলিট দিয়ে লাইভ মডেল ডেপ্লয়মেন্ট শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Step into the most revolutionary field of modern technology. Learn the mathematical foundations and code implementation of modern ML algorithms, train deep neural networks on real-world datasets and build AI applications ready for production.",
      "bn": "এই কোর্সে আপনি ডেটা প্রিপ্রসেসিং থেকে শুরু করে মেশিন লার্নিং মডেল ট্রেইনিং, হাইপারপ্যারামিটার টিউনিং, নিউরাল নেটওয়ার্ক এবং প্রেডিক্টিভ এআই ওয়েব অ্যাপ তৈরি শিখবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Supervised & Unsupervised ML",
          "bn": "মেশিন লার্নিং অ্যালগরিদম"
        },
        "desc": {
          "en": "Master Regression, Classification, Random Forests, XGBoost and Clustering.",
          "bn": "রিগ্রেশন, ক্লাসিফিকেশন ও ক্লাস্টারিং অ্যালগরিদম।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Deep Learning & TensorFlow",
          "bn": "ডিপ লার্নিং ও টেনসরফ্লো"
        },
        "desc": {
          "en": "Build Artificial Neural Networks (ANN), CNN for images and RNN/LSTM.",
          "bn": "নিউরাল নেটওয়ার্ক ও কম্পিউটার ভিশন সিএনএন।"
        },
        "icon": "Cpu"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Production Model Deploy",
          "bn": "প্রোডাকশন মডেল ডেপ্লয়"
        },
        "desc": {
          "en": "Deploy ML models as interactive web apps using Streamlit, FastAPI & Docker.",
          "bn": "স্ট্রিমলিট ও ফাস্টএপিআই দিয়ে লাইভ এআই ওয়েব অ্যাপ ডেপ্লয়।"
        },
        "icon": "Server"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Master Python data science libraries: NumPy arrays, Pandas DataFrames and Seaborn.",
        "bn": "নামপাই, পান্ডাস ও সিবর্ন দিয়ে ডাটা প্রসেসিং ও ভিজ্যুয়ালাইজেশন।"
      },
      {
        "en": "Train, evaluate and tune machine learning models with Scikit-Learn.",
        "bn": "সাইকিট-লার্ন দিয়ে মেশিন লার্নিং মডেল ট্রেইন ও টিউন করা।"
      },
      {
        "en": "Implement deep learning neural networks using TensorFlow and Keras.",
        "bn": "টেনসরফ্লো ও কেরাস দিয়ে ডিপ লার্নিং আর্কিটেকচার তৈরি।"
      },
      {
        "en": "Build Computer Vision image classifiers and NLP text sentiment models.",
        "bn": "কম্পিউটার ভিশন ও ন্যাচারাল ল্যাঙ্গুয়েজ প্রসেসিং তৈরি করা।"
      },
      {
        "en": "Deploy trained AI models to cloud platforms with interactive Streamlit web UIs.",
        "bn": "ক্লাউড প্ল্যাটফর্মে লাইভ এআই অ্যাপ্লিকেশন ডেপ্লয় করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Python Data Science & Exploratory Data Analysis (EDA)",
          "bn": "মডিউল ১: পাইথন ডাটা সায়েন্স ও ইডিএ"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Python for AI: Vectorized Computing with NumPy & Matrix Operations",
            "bn": "নামপাই ভেক্টরাইজড কম্পিউটিং ও ম্যাট্রিক্স"
          },
          {
            "en": "Data Wrangling with Pandas: DataFrames, Filtering, GroupBy & Missing Values",
            "bn": "পান্ডাস দিয়ে ডেটা ক্লিনিং ও ট্রান্সফরমেশন"
          },
          {
            "en": "Data Visualization: Matplotlib, Seaborn Statistical Plots & Correlation Heatmaps",
            "bn": "সিবর্ন ও হিটম্যাপ ভিজ্যুয়ালাইজেশন"
          },
          {
            "en": "Feature Engineering: Scaling (StandardScaler, MinMaxScaler), One-Hot Encoding & Outliers",
            "bn": "ফিচার স্কেলিং ও ওয়ান-হট এনকোডিং"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Supervised & Unsupervised Machine Learning",
          "bn": "মডিউল ২: সুপারভাইজড ও আনসুপারভাইজড মেশিন লার্নিং"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Linear Regression, Cost Functions (MSE), Gradient Descent & Polynomial Regression",
            "bn": "লিনিয়ার রিগ্রেশন ও গ্রেডিয়েন্ট ডিসেন্ট"
          },
          {
            "en": "Logistic Regression, Binary/Multiclass Classification & Confusion Matrix / ROC-AUC",
            "bn": "লজিস্টিক রিগ্রেশন ও কনফিউশন ম্যাট্রিক্স"
          },
          {
            "en": "Tree Algorithms: Decision Trees, Random Forests, Gradient Boosting & XGBoost",
            "bn": "ডিসিশন ট্রি, র‍্যান্ডম ফরেস্ট ও এক্সজিবুস্ট"
          },
          {
            "en": "Unsupervised Learning: K-Means Clustering & Principal Component Analysis (PCA)",
            "bn": "কে-মিনস ক্লাস্টারিং ও পিসিএ ডাইমেনশনালিটি রিডাকশন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Deep Learning, NLP & Streamlit Deployment",
          "bn": "মডিউল ৩: ডিপ লার্নিং, এনএলপি ও ডেপ্লয়মেন্ট"
        },
        "duration": {
          "en": "10 Classes • 30 Hours",
          "bn": "১০ টি ক্লাস • ৩০ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Deep Learning Foundations: Artificial Neural Networks (ANN), Forward/Backprop & Optimizers",
            "bn": "আর্টিফিশিয়াল নিউরাল নেটওয়ার্ক (ANN) ও ব্যাকপ্রোপাগেশন"
          },
          {
            "en": "Convolutional Neural Networks (CNN) for Image Classification with TensorFlow/Keras",
            "bn": "ইমেজ ক্লাসিফিকেশনের জন্য সিএনএন মডেল"
          },
          {
            "en": "NLP Basics: Text Preprocessing, TF-IDF, Word Embeddings & Sentiment Analysis",
            "bn": "এনএলপি টেক্সট প্রসেসিং ও সেন্টিমেন্ট অ্যানালাইসিস"
          },
          {
            "en": "Building & Deploying Interactive ML Web Apps with Streamlit & Hugging Face",
            "bn": "স্ট্রিমলিট দিয়ে লাইভ এআই ওয়েব অ্যাপ ডেপ্লয়মেন্ট"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Machine Learning & AI Specialist Certificate",
        "bn": "মেশিন লার্নিং ও এআই স্পেশালিস্ট সার্টিফিকেট"
      },
      {
        "en": "Complete Source Code of 5 Machine Learning Projects",
        "bn": "৫টি মেশিন লার্নিং প্রজেক্টের সম্পূর্ণ সোর্স কোড"
      },
      {
        "en": "Google Colab Pro & GPU Cloud Notebook Environment",
        "bn": "গুগল কোলাব জিপিইউ ক্লাউড নোটবুক এক্সেস"
      },
      {
        "en": "AI / Data Science Career Mentorship & Portfolio Review",
        "bn": "এআই ও ডাটা সায়েন্স ক্যারিয়ার মেন্টরশিপ"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Anisul Haque",
        "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
        "role": {
          "en": "Junior Machine Learning Engineer",
          "bn": "জুনিয়র মেশিন লার্নিং ইঞ্জিনিয়ার"
        },
        "rating": 5,
        "comment": {
          "en": "The XGBoost and TensorFlow CNN image classification projects were industry-grade. Hired at an AI startup!",
          "bn": "এক্সজিবুস্ট ও সিএনএন প্রজেক্টগুলো পোর্টফোলিওতে থাকায় এআই স্টার্টআপে চাকরি পেয়েছি।"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "53",
    "slug": "advanced-excel-mastery",
    "title": {
      "en": "Advanced Excel for Business Analytics",
      "bn": "অ্যাডভান্সড এক্সেল ফর বিজনেস অ্যানালিটিক্স"
    },
    "subtitle": {
      "en": "Master Advanced Formulas, Dynamic Arrays, Power Query, What-If Analysis & Executive KPI Dashboards",
      "bn": "অ্যাডভান্সড ফর্মুলা, ডায়নামিক অ্যারে, পাওয়ার কোয়েরি ও বিজনেস কেপিআই ড্যাশবোর্ড"
    },
    "category": "others",
    "categoryLabel": {
      "en": "Others",
      "bn": "অন্যান্য"
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
    "ratingsCount": 190,
    "enrolledCount": "470+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "8,000৳",
    "rawFee": 8000,
    "originalFee": "12,000৳",
    "duration": {
      "en": "36 hrs. (1 Month)",
      "bn": "৩৬ ঘণ্টা (১ মাস)"
    },
    "classesCount": {
      "en": "12 Classes",
      "bn": "১২ টি ক্লাস"
    },
    "image": "/images/course thumbnail/advance excel for business analytics.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Mahfuz Ahmed",
      "designation": {
        "en": "Lead Financial & Data Analyst",
        "bn": "লিড ফিন্যান্সিয়াল ও ডাটা অ্যানালিস্ট"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "8+ years building enterprise financial models, reporting dashboards and Excel automations.",
        "bn": "এক্সেল ফিন্যান্সিয়াল মডেলিং ও অটোমেশনে ৮+ বছরের অভিজ্ঞতা।"
      },
      "experience": "8+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Fast-track Advanced Excel for corporate professionals, accountants and managers. Topics include advanced formulas (XLOOKUP, INDEX/MATCH, SUMIFS, FILTER, SORT, UNIQUE), multi-level dynamic Pivot Tables, Power Query automated data transformation, What-If Analysis (Goal Seek, Scenario Manager, Solver), data validation and building C-suite interactive KPI dashboards.",
      "bn": "চাকরিজীবী ও ব্যবসায়ীদের জন্য দ্রুত এক্সেল মাস্টারি কোর্স। এতে এক্সলুকআপ, ইনডেক্স/ম্যাচ, ডায়নামিক পিভট টেবিল, পাওয়ার কোয়েরি ডাটা ক্লিনিং, হোয়াট-ইফ অ্যানালাইসিস এবং আকর্ষণীয় কেপিআই ড্যাশবোর্ড তৈরি শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Level up your Excel skills from basic data entry to powerful business analytics. Learn how to crunch thousands of rows in seconds, write advanced nested functions, automate data cleanup with Power Query and build interactive dashboards that impress senior management.",
      "bn": "এই কোর্সে আপনি ম্যানুয়াল ডাটা এন্ট্রির ঝামেলা ছাড়া আধুনিক ফর্মুলা ও ড্যাশবোর্ড ব্যবহার করে প্রফেশনাল বিজনেস রিপোর্ট ও ফাইন্যান্সিয়াল মডেল তৈরি করতে পারবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Modern Formulas",
          "bn": "মডার্ন এক্সেল ফর্মুলা"
        },
        "desc": {
          "en": "Master XLOOKUP, INDEX/MATCH, FILTER, UNIQUE, SEQUENCE & dynamic arrays.",
          "bn": "এক্সলুকআপ ও আধুনিক ডায়নামিক ফর্মুলা।"
        },
        "icon": "Zap"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Power Query ETL",
          "bn": "পাওয়ার কোয়েরি অটোমেশন"
        },
        "desc": {
          "en": "Clean and merge messy data files with 0 formulas and 100% automation.",
          "bn": "ফর্মুলা ছাড়া অটোমেটেড ডাটা ক্লিনিং ও মার্জিং।"
        },
        "icon": "Database"
      },
      {
        "id": "cv3",
        "title": {
          "en": "C-Suite Dashboards",
          "bn": "এক্সিকিউটিভ ড্যাশবোর্ড"
        },
        "desc": {
          "en": "Build interactive sales, inventory and financial KPI dashboards with slicers.",
          "bn": "স্লাইসার ও ট্রেন্ডস সহ আকর্ষণীয় সেলস ও ফিন্যান্স ড্যাশবোর্ড।"
        },
        "icon": "TrendingUp"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Write complex formulas using XLOOKUP, INDEX/MATCH, nested IFs and dynamic arrays.",
        "bn": "জটিল এক্সেল ফর্মুলা নির্ভুলভাবে লেখা।"
      },
      {
        "en": "Automate daily repetitive data cleaning and merging using Power Query.",
        "bn": "পাওয়ার কোয়েরি দিয়ে ডাটা ক্লিন ও ফাইল মার্জ করা।"
      },
      {
        "en": "Analyze multi-dimensional data with Advanced Pivot Tables and calculated fields.",
        "bn": "অ্যাডভান্সড পিভট টেবিল দিয়ে ডাটা বিশ্লেষণ করা।"
      },
      {
        "en": "Perform business forecasting and optimization using Goal Seek and Solver.",
        "bn": "গোল সিক ও সলভার দিয়ে বিজনেস ফোরকাস্টিং করা।"
      },
      {
        "en": "Design and present interactive executive KPI dashboards to leadership.",
        "bn": "ম্যানেজমেন্টের জন্য ইন্টারঅ্যাক্টিভ ড্যাশবোর্ড রিপোর্ট তৈরি করা।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Advanced Lookup, Dynamic Arrays & Logic",
          "bn": "মডিউল ১: অ্যাডভান্সড লুকআপ ও ডায়নামিক ফর্মুলা"
        },
        "duration": {
          "en": "4 Classes • 12 Hours",
          "bn": "৪ টি ক্লাস • ১২ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Modern Lookup Functions: XLOOKUP (Exact, Wildcard, Two-Way), INDEX/MATCH",
            "bn": "এক্সলুকআপ ও ইনডেক্স/ম্যাচ মাস্টারি"
          },
          {
            "en": "Dynamic Array Formulas: FILTER, SORT, SORTBY, UNIQUE, SEQUENCE & CHOOSECOLS",
            "bn": "ডায়নামিক অ্যারে: ফিল্টার, সর্ট ও ইউনিক"
          },
          {
            "en": "Multi-Condition Logic: SUMIFS, COUNTIFS, AVERAGEIFS & IFS / SWITCH",
            "bn": "মাল্টি-কন্ডিশন সামইফস ও কাউন্টইফস"
          },
          {
            "en": "Data Validation, Dynamic Searchable Dropdowns & Custom Conditional Formatting",
            "bn": "ডাটা ভ্যালিডেশন ও সার্চেবল ড্রপডাউন"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Advanced Pivot Tables & Power Query Automation",
          "bn": "মডিউল ২: অ্যাডভান্সড পিভট ও পাওয়ার কোয়েরি"
        },
        "duration": {
          "en": "4 Classes • 12 Hours",
          "bn": "৪ টি ক্লাস • ১২ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Advanced Pivot Tables: Calculated Fields, Grouping Dates/Numbers & Slicers",
            "bn": "পিভট টেবিল: ক্যালকুলেটেড ফিল্ডস ও স্লাইসার্স"
          },
          {
            "en": "Power Query ETL: Importing Data from Multiple Folders & Automated Appending",
            "bn": "পাওয়ার কোয়েরি দিয়ে একাধিক ফাইল অটো কম্বাইন"
          },
          {
            "en": "Data Transformation: Unpivoting Columns, Cleaning Text & Conditional Columns",
            "bn": "ডাটা ট্রান্সফরমেশন ও আনপিভট"
          },
          {
            "en": "What-If Analysis: Goal Seek, Data Tables & Scenario Manager",
            "bn": "হোয়াট-ইফ অ্যানালাইসিস ও গোল সিক"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Executive KPI Dashboard Design & Capstone",
          "bn": "মডিউল ৩: এক্সিকিউটিভ ড্যাশবোর্ড ডিজাইন"
        },
        "duration": {
          "en": "4 Classes • 12 Hours",
          "bn": "৪ টি ক্লাস • ১২ ঘণ্টা"
        },
        "lessonsCount": 4,
        "topics": [
          {
            "en": "Dashboard Architecture: Layout Principles, Color Palettes & User Experience",
            "bn": "ড্যাশবোর্ড ডিজাইন আর্কিটেকচার ও কালার থিওরি"
          },
          {
            "en": "Dynamic Charts: Sparklines, Bullet Charts, Waterfall Charts & Gauge Meters",
            "bn": "ডায়নামিক চার্টস ও গজ মিটারস"
          },
          {
            "en": "Building an Interactive Sales & Financial KPI Dashboard from Scratch",
            "bn": "পূর্ণাঙ্গ ইন্টারঅ্যাক্টিভ সেলস কেপিআই ড্যাশবোর্ড তৈরি"
          },
          {
            "en": "Protecting Worksheets, Workbook Security & PDF Export Optimization",
            "bn": "ওয়ার্কশিট প্রটেকশন ও পিডিএফ এক্সপোর্ট"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Advanced Excel Specialist Certificate",
        "bn": "অ্যাডভান্সড এক্সেল স্পেশালিস্ট সার্টিফিকেট"
      },
      {
        "en": "15+ Complete Executive KPI Dashboard Templates",
        "bn": "১৫+ এক্সিকিউটিভ ড্যাশবোর্ড টেমপ্লেটস"
      },
      {
        "en": "Excel Formula Cheat Sheets & Keyboard Shortcuts Pack",
        "bn": "এক্সেল ফর্মুলা চিটশিট ও শর্টকাটস প্যাক"
      },
      {
        "en": "1-on-1 Corporate Data Problem Solving Mentorship",
        "bn": "১-অন-১ অফিসিয়াল ডাটা প্রবলেম সলভিং সাপোর্ট"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Hasibul Hasan",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "role": {
          "en": "Senior Accountant",
          "bn": "সিনিয়র অ্যাকাউন্ট্যান্ট"
        },
        "rating": 5,
        "comment": {
          "en": "The XLOOKUP and Power Query sessions saved me hours of daily reconciliation work. Excellent course!",
          "bn": "এক্সলুকআপ ও পাওয়ার কোয়েরি শেখার পর আমার সারাদিনের কাজ এখন কয়েক মিনিটে শেষ হয়।"
        },
        "date": "1 Week Ago"
      }
    ]
  },
  {
    "id": "54",
    "slug": "amazon-kdp-publishing",
    "title": {
      "en": "Amazon KDP (Kindle Direct Publishing)",
      "bn": "আমাজন কেডিপি (কিন্ডল ডিরেক্ট পাবলিশিং)"
    },
    "subtitle": {
      "en": "Master passive income book publishing: Niche research, Low/Medium/High Content, Cover Design & Amazon Ads",
      "bn": "আমাজনে বই প্রকাশ করে প্যাসিভ ইনকাম: নিশ রিসার্চ, কভার ডিজাইন, কিন্ডল ও পেপারব্যাক মার্কেটিং"
    },
    "category": "others",
    "categoryLabel": {
      "en": "Others",
      "bn": "অন্যান্য"
    },
    "badge": {
      "en": "PASSIVE INCOME",
      "bn": "প্যাসিভ ইনকাম"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 4.8,
    "ratingsCount": 125,
    "enrolledCount": "340+ Enrolled",
    "languages": {
      "en": "Bengali / English",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "14,000৳",
    "rawFee": 14000,
    "originalFee": "20,000৳",
    "duration": {
      "en": "60 hrs. (2 Months)",
      "bn": "৬০ ঘণ্টা (২ মাস)"
    },
    "classesCount": {
      "en": "20 Classes",
      "bn": "২০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/amazon kdp.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Tariqul Islam",
      "designation": {
        "en": "Top Amazon KDP Publisher & Author",
        "bn": "টপ আমাজন কেডিপি পাবলিশার ও লেখক"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "Published 200+ bestselling books on Amazon generating $3,000+/month passive royalties.",
        "bn": "আমাজনে ২০০+ বই প্রকাশ করে প্রতি মাসে সফল রয়্যালটি আয়ের বাস্তব অভিজ্ঞতা।"
      },
      "experience": "7+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Complete Amazon Kindle Direct Publishing (KDP) blueprint for global passive royalties. Topics include Amazon KDP account setup & US tax interview, profitable niche & keyword research (Publisher Rocket, Helium 10), creating low content (journals, planners), medium content (coloring books, activity books, puzzle books) & high content books, Canva / Illustrator cover design, formatting, Amazon Ads (AMS) and royalty withdrawals.",
      "bn": "আমাজন কেডিপি দিয়ে বই প্রকাশ করে আজীবন প্যাসিভ ইনকাম করার কমপ্লিট কোর্স। এতে লাভজনক নিশ রিসার্চ, কালারিং বুক, অ্যাক্টিভিটি বুক, প্লাগিয়ারিজম-মুক্ত কনটেন্ট, কভার ডিজাইন, আমাজন অ্যাডস এবং রয়্যালটি তোলার উপায় শেখানো হয়।"
    },
    "fullDescription": {
      "en": "Earn continuous dollar royalties without inventory, shipping or customer support. Amazon prints, ships and handles customer service while depositing your monthly book royalties directly into your Payoneer bank account.",
      "bn": "এই কোর্সে আপনি কোনো প্রিন্টিং বা ইনভেন্টরি ছাড়াই আমাজনে বিশ্বব্যাপী বই বিক্রি করার যাবতীয় সিক্রেট টেকনিক ও এআই টুলস ব্যবহার করে আকর্ষণীয় বই তৈরি শিখবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "Winning Niche Research",
          "bn": "লাভজনক নিশ রিসার্চ"
        },
        "desc": {
          "en": "Find low-competition, high-demand niches with Helium 10 & Book Beam.",
          "bn": "কম প্রতিযোগিতা ও বেশি বিক্রির নিশ খুঁজে বের করা।"
        },
        "icon": "Search"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Low & Medium Content Books",
          "bn": "কালারিং ও অ্যাক্টিভিটি বুক"
        },
        "desc": {
          "en": "Create coloring books, logbooks, planners and puzzle interiors with AI.",
          "bn": "এআই ও ক্যানভা দিয়ে কালারিং ও পাজল বুক তৈরি।"
        },
        "icon": "BookOpen"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Amazon Ads & Scale",
          "bn": "আমাজন অ্যাডস ও স্কেলিং"
        },
        "desc": {
          "en": "Run profitable Amazon Sponsored Product campaigns for automated sales.",
          "bn": "আমাজন স্পনসরড অ্যাডস চালিয়ে বই বেস্টসেলার করা।"
        },
        "icon": "TrendingUp"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Set up and verify Amazon KDP accounts with 0% US withholding tax.",
        "bn": "আমাজন কেডিপি অ্যাকাউন্ট ও ট্যাক্স ইন্টারভিউ সঠিকভাবে সম্পন্ন করা।"
      },
      {
        "en": "Discover profitable evergreen keywords and niches using research tools.",
        "bn": "প্রফিটেবল কিওয়ার্ড ও নিশ খুঁজে বের করা।"
      },
      {
        "en": "Design stunning high-converting book covers in Canva and Adobe Illustrator.",
        "bn": "ক্যানভা ও ইলাস্ট্রেটরে আকর্ষণীয় বুক কভার তৈরি করা।"
      },
      {
        "en": "Format interior manuscripts for Paperback, Hardcover and Kindle eBooks.",
        "bn": "পেপারব্যাক ও কিন্ডল ই-বুকের সঠিক ফরম্যাটিং করা।"
      },
      {
        "en": "Launch and optimize Amazon PPC Ads to scale monthly royalty earnings.",
        "bn": "আমাজন পিপিসি অ্যাডস দিয়ে মাসিক রয়্যালটি বাড়ানো।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: KDP Account Setup & Niche Research",
          "bn": "মডিউল ১: অ্যাকাউন্ট সেটআপ ও নিশ রিসার্চ"
        },
        "duration": {
          "en": "6 Classes • 18 Hours",
          "bn": "৬ টি ক্লাস • ১৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Amazon KDP Overview, Business Model, Royalty Structure & Terms of Service",
            "bn": "আমাজন কেডিপি পরিচিতি ও রয়্যালটি হিসাব"
          },
          {
            "en": "Account Setup, Bank Connection (Payoneer) & US Tax Interview (W-8BEN)",
            "bn": "অ্যাকাউন্ট ক্রিয়েশন, পেওনিয়ার ও ট্যাক্স ফরম"
          },
          {
            "en": "Profitable Niche & Keyword Research: BSR Analysis, Demand vs Competition",
            "bn": "বিএসআর বিশ্লেষণ ও লাভজনক নিশ নির্বাচন"
          },
          {
            "en": "Trademark & Copyright Checking (USPTO) to Keep Account 100% Safe",
            "bn": "ট্রেডমার্ক ও কপিরাইট চেক করার নিয়ম"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: Book Interior Creation & Cover Design",
          "bn": "মডিউল ২: বইয়ের ইন্টেরিয়র ও কভার ডিজাইন"
        },
        "duration": {
          "en": "8 Classes • 24 Hours",
          "bn": "৮ টি ক্লাস • ২৪ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "Low Content Books: Notebooks, Planners, Logbooks & Journals",
            "bn": "লো কনটেন্ট বুকস: নোটবুক ও জার্নাল তৈরি"
          },
          {
            "en": "Medium Content: Kids Coloring Books, Word Search, Sudoku & Puzzle Books with AI",
            "bn": "বাচ্চাদের কালারিং বুক ও পাজল বুক তৈরি"
          },
          {
            "en": "Paperback Trim Sizes, Bleed vs No-Bleed, Page Margins & KDP Templates",
            "bn": "বইয়ের সঠিক সাইজ, ব্লিড ও মার্জিন রুলস"
          },
          {
            "en": "High-Converting Cover Design in Canva & Adobe Illustrator (Spine Width Calculation)",
            "bn": "ক্যানভা ও ইলাস্ট্রেটরে প্রফেশনাল বুক কভার ডিজাইন"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: Publishing, Amazon Ads & Scaling Royalties",
          "bn": "মডিউল ৩: পাবলিশিং, আমাজন অ্যাডস ও রয়্যালটি"
        },
        "duration": {
          "en": "6 Classes • 18 Hours",
          "bn": "৬ টি ক্লাস • ১৮ ঘণ্টা"
        },
        "lessonsCount": 5,
        "topics": [
          {
            "en": "Publishing Workflow: Title, Subtitle, 7 Backend Keywords & Category Selection",
            "bn": "বই পাবলিশিং, ৭টি ব্যাকএন্ড কিওয়ার্ড ও ক্যাটাগরি"
          },
          {
            "en": "A+ Content (Enhanced Brand Content) Creation for Boosting Conversion Rates",
            "bn": "এ-প্লাস কনটেন্ট ডিজাইন দিয়ে সেলস দ্বিগুণ করা"
          },
          {
            "en": "Amazon Advertising (AMS): Auto Ads, Keyword Targeting & Product Targeting",
            "bn": "আমাজন স্পনসরড অ্যাডস ক্যাম্পেইন সেটআপ"
          },
          {
            "en": "Scaling to a Multi-Book Publishing Business & Monthly Dollar Withdrawals",
            "bn": "মাল্টিপল বই পাবলিশ করে প্যাসিভ ইনকাম বৃদ্ধি"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "Amazon KDP Publishing Specialist Certificate",
        "bn": "আমাজন কেডিপি পাবলিশিং সার্টিফিকেট"
      },
      {
        "en": "50+ Ready-to-Upload Book Interior Templates",
        "bn": "৫০+ রেডিমেড বুক ইন্টেরিয়র টেমপ্লেটস"
      },
      {
        "en": "Amazon KDP Niche & Keyword Research Secret Sheet",
        "bn": "নিশ ও কিওয়ার্ড রিসার্চ সিক্রেট শিট"
      },
      {
        "en": "1-on-1 Book Publishing & Ad Review Mentorship",
        "bn": "১-অন-১ বই পাবলিশিং ও অ্যাড রিভিউ মেন্টরশিপ"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Shahadat Hossain",
        "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100",
        "role": {
          "en": "Amazon KDP Publisher",
          "bn": "আমাজন কেডিপি পাবলিশার"
        },
        "rating": 5,
        "comment": {
          "en": "Published 12 coloring and puzzle books. Made $420 in royalties in my second month!",
          "bn": "১২টি কালারিং বুক পাবলিশ করেছি। দ্বিতীয় মাসেই ৪২০ ডলার রয়্যালটি পেয়েছি!"
        },
        "date": "2 Weeks Ago"
      }
    ]
  },
  {
    "id": "55",
    "slug": "sap-enterprise-fico-abap-sd-mm",
    "title": {
      "en": "SAP (FICO, ABAP, SD, MM)",
      "bn": "এসএপি (FICO, ABAP, SD, MM)"
    },
    "subtitle": {
      "en": "Master SAP S/4HANA ERP: Financial Accounting (FICO), Programming (ABAP), Sales (SD) & Materials Management (MM)",
      "bn": "এসএপি এস/৪ হানা ইআরপি: ফিন্যান্সিয়াল একাউন্টিং, এব্যাপ কোডিং, সেলস অ্যান্ড ডিস্ট্রিবিউশন ও মেটেরিয়ালস"
    },
    "category": "others",
    "categoryLabel": {
      "en": "Others",
      "bn": "অন্যান্য"
    },
    "badge": {
      "en": "ENTERPRISE",
      "bn": "এন্টারপ্রাইজ"
    },
    "mode": {
      "en": "Online & Offline",
      "bn": "অনলাইন ও অফলাইন"
    },
    "modeType": "offline",
    "rating": 5,
    "ratingsCount": 55,
    "enrolledCount": "110+ Enrolled",
    "languages": {
      "en": "English / Bengali",
      "bn": "বাংলা / ইংরেজি"
    },
    "fee": "60,000৳",
    "rawFee": 60000,
    "originalFee": "80,000৳",
    "duration": {
      "en": "120 hrs. (4 Months)",
      "bn": "১২০ ঘণ্টা (৪ মাস)"
    },
    "classesCount": {
      "en": "40 Classes",
      "bn": "৪০ টি ক্লাস"
    },
    "image": "/images/course thumbnail/sap enterprise fico abap sd mm.webp",
    "videoUrl": "https://www.facebook.com/reel/1931942940836268/",
    "instructor": {
      "name": "Engr. Rezaul Karim (SAP Consultant)",
      "designation": {
        "en": "Lead SAP S/4HANA Enterprise Architect",
        "bn": "লিড এসএপি এস/৪ হানা এন্টারপ্রাইজ আর্কিটেক্ট"
      },
      "image": "/images/default-avatar.svg",
      "bio": {
        "en": "12+ years implementing SAP ERP for Fortune 500 multinationals, garment conglomerates and telecom.",
        "bn": "বহুজাতিক ও বৃহৎ শিল্পগ্রুপে এসএপি ইআরপি বাস্তবায়নে ১২+ বছরের অভিজ্ঞতা।"
      },
      "experience": "12+ Yrs Exp",
      "verified": true
    },
    "overview": {
      "en": "Comprehensive SAP S/4HANA ERP Enterprise master program covering the four core modules: SAP FICO (Financial Accounting & Controlling, General Ledger, AP, AR, Asset Accounting), SAP ABAP (Advanced Business Application Programming, Data Dictionary, Reports, BAPIs, Interfaces), SAP SD (Sales & Distribution, Order-to-Cash process) and SAP MM (Materials Management & Procurement, Procure-to-Pay process) with live server access.",
      "bn": "বিশ্বের শীর্ষস্থানীয় এন্টারপ্রাইজ ইআরপি এসএপি (SAP S/4HANA) কোর্স। এতে ৪টি কোর মডিউল: ফিন্যান্সিয়াল একাউন্টিং (FICO), এব্যাপ প্রোগ্রামিং (ABAP), সেলস অ্যান্ড ডিস্ট্রিবিউশন (SD) এবং মেটেরিয়ালস ম্যানেজমেন্ট (MM) লাইভ সার্ভার অ্যাক্সেস সহ শেখানো হয়।"
    },
    "fullDescription": {
      "en": "SAP is the world's leading ERP system utilized by over 90% of Fortune 500 corporations and massive business conglomerates in Bangladesh. This 120-hour enterprise training qualifies you for high-paying SAP Functional and Technical Consultant roles globally.",
      "bn": "এই কোর্সে আপনি এসএপি সার্ভার এক্সেস নিয়ে রিয়েল টাইম বিজনেস প্রসেস কনফিগারেশন, মাস্টার ডাটা ক্রিয়েশন, একাউন্টিং পোস্টিং, সাপ্লাই চেইন ম্যানেজমেন্ট এবং কাস্টম এব্যাপ কোডিংয়ের আন্তর্জাতিক প্রশিক্ষণ পাবেন।"
    },
    "coreValues": [
      {
        "id": "cv1",
        "title": {
          "en": "4 Core SAP Modules",
          "bn": "৪টি কোর এসএপি মডিউল"
        },
        "desc": {
          "en": "Comprehensive mastery of FICO, ABAP, SD and MM module configurations.",
          "bn": "এফআইসিও, এব্যাপ, এসডি ও এমএম মডিউলে পূর্ণ দক্ষতা।"
        },
        "icon": "Briefcase"
      },
      {
        "id": "cv2",
        "title": {
          "en": "Live SAP Server Access",
          "bn": "লাইভ এসএপি সার্ভার এক্সেস"
        },
        "desc": {
          "en": "24/7 dedicated GUI server access for real-world enterprise configuration practice.",
          "bn": "২৪/৭ লাইভ এসএপি সার্ভার ল্যাব প্র্যাকটিস সুবিধা।"
        },
        "icon": "Server"
      },
      {
        "id": "cv3",
        "title": {
          "en": "Global Enterprise Careers",
          "bn": "গ্লোবাল এন্টারপ্রাইজ ক্যারিয়ার"
        },
        "desc": {
          "en": "Qualify for high-paying SAP Consultant and Business Analyst roles worldwide.",
          "bn": "আন্তর্জাতিক ও দেশীয় বৃহৎ শিল্পগ্রুপে এসএপি কনসালট্যান্ট ক্যারিয়ার।"
        },
        "icon": "Award"
      }
    ],
    "learningOutcomes": [
      {
        "en": "Understand enterprise structure, organizational units and master data in SAP S/4HANA.",
        "bn": "এসএপিতে এন্টারপ্রাইজ স্ট্রাকচার ও মাস্টার ডাটা সেটআপ করা।"
      },
      {
        "en": "Configure SAP FICO: General Ledger, Accounts Payable, Accounts Receivable & Cost Centers.",
        "bn": "এসএপি এফআইসিও একাউন্টিং ও কস্ট সেন্টার কনফিগার করা।"
      },
      {
        "en": "Execute Order-to-Cash (O2C) in SAP SD and Procure-to-Pay (P2P) in SAP MM.",
        "bn": "এসডি ও এমএম মডিউলে সেলস ও প্রকিউরমেন্ট প্রসেস পরিচালনা করা।"
      },
      {
        "en": "Write custom ABAP programs, Data Dictionary objects and BAPI interfaces.",
        "bn": "কাস্টম এব্যাপ কোডিং ও ডাটা ডিকশনারি অবজেক্টস তৈরি করা।"
      },
      {
        "en": "Land lucrative SAP Consultant and Systems Analyst positions in corporate IT.",
        "bn": "কর্পোরেট আইটিতে এসএপি কনসালট্যান্ট হিসেবে চাকরি পাওয়া।"
      }
    ],
    "curriculum": [
      {
        "moduleNumber": 1,
        "title": {
          "en": "Module 1: Enterprise Structure & SAP FICO (Finance & Controlling)",
          "bn": "মডিউল ১: এন্টারপ্রাইজ স্ট্রাকচার ও এসএপি এফআইসিও"
        },
        "duration": {
          "en": "14 Classes • 42 Hours",
          "bn": "১৪ টি ক্লাস • ৪২ ঘণ্টা"
        },
        "lessonsCount": 7,
        "topics": [
          {
            "en": "SAP S/4HANA Overview, SAP GUI Navigation & Enterprise Structure (Company Code, Plant)",
            "bn": "এসএপি ইন্টারফেস ও কোম্পানি কোড সেটআপ"
          },
          {
            "en": "General Ledger (G/L) Accounting, Chart of Accounts & Financial Statement Versions",
            "bn": "জেনারেল লেজার ও ফিন্যান্সিয়াল স্টেটমেন্ট"
          },
          {
            "en": "Accounts Payable (AP) & Accounts Receivable (AR): Vendor/Customer Invoices & Payments",
            "bn": "ভেন্ডর ও কাস্টমার ইনভয়েস এবং পেমেন্ট"
          },
          {
            "en": "Asset Accounting, Bank Accounting & Controlling (CO): Cost Centers & Profit Centers",
            "bn": "অ্যাসেট একাউন্টিং ও কস্ট সেন্টার ম্যানেজমেন্ট"
          }
        ]
      },
      {
        "moduleNumber": 2,
        "title": {
          "en": "Module 2: SAP MM (Procurement) & SAP SD (Sales & Distribution)",
          "bn": "মডিউল ২: এসএপি এমএম (প্রকিউরমেন্ট) ও এসএপি এসডি (সেলস)"
        },
        "duration": {
          "en": "14 Classes • 42 Hours",
          "bn": "১৪ টি ক্লাস • ৪২ ঘণ্টা"
        },
        "lessonsCount": 7,
        "topics": [
          {
            "en": "SAP MM: Material Master Data, Purchasing Groups, Vendor Master & Valuation",
            "bn": "মেটেরিয়াল মাস্টার ডাটা ও ভেন্ডর ম্যানেজমেন্ট"
          },
          {
            "en": "Procure-to-Pay (P2P) Cycle: Purchase Requisition, Purchase Order, Goods Receipt (MIGO) & Invoice Verification (MIRO)",
            "bn": "প্রকিউরমেন্ট প্রসেস: পিও, গুডস রিসিট ও ইনভয়েস"
          },
          {
            "en": "SAP SD: Sales Organization, Distribution Channels, Customer Master & Pricing Procedures",
            "bn": "সেলস অর্গানাইজেশন ও প্রাইসিং প্রসিডিউর"
          },
          {
            "en": "Order-to-Cash (O2C) Cycle: Sales Inquiry, Quotation, Sales Order, Delivery & Billing",
            "bn": "সেলস অর্ডার থেকে বিলিং ও পেমেন্ট প্রসেস"
          }
        ]
      },
      {
        "moduleNumber": 3,
        "title": {
          "en": "Module 3: SAP ABAP Programming & End-to-End Implementation",
          "bn": "মডিউল ৩: এব্যাপ প্রোগ্রামিং ও লাইভ ইমপ্লিমেন্টেশন"
        },
        "duration": {
          "en": "12 Classes • 36 Hours",
          "bn": "১২ টি ক্লাস • ৩৬ ঘণ্টা"
        },
        "lessonsCount": 6,
        "topics": [
          {
            "en": "ABAP Workbench, ABAP Dictionary (Tables, Views, Data Elements, Domains)",
            "bn": "এব্যাপ ওয়ার্কবেঞ্চ ও ডাটা ডিকশনারি"
          },
          {
            "en": "ABAP Programming: Open SQL, Internal Tables, Work Areas & Modularization (Subroutines)",
            "bn": "এব্যাপ প্রোগ্রামিং ও ইন্টারনাল টেবিলস"
          },
          {
            "en": "Classical & Interactive Reports, ALV Grid Reporting & BAPIs / Function Modules",
            "bn": "এএলভি গ্রিড রিপোর্টিং ও বিএপিআই"
          },
          {
            "en": "SAP ASAP Implementation Methodology, Real-World Project Simulation & Consultant Interview Prep",
            "bn": "এসএপি ইমপ্লিমেন্টেশন ও কনসালট্যান্ট ইন্টারভিউ প্রিপারেশন"
          }
        ]
      }
    ],
    "includedItems": [
      {
        "en": "SAP Certified Enterprise Consultant Training Certificate",
        "bn": "এসএপি এন্টারপ্রাইজ কনসালট্যান্ট সার্টিফিকেট"
      },
      {
        "en": "24/7 Dedicated Live SAP Server Access (GUI & Cloud)",
        "bn": "২৪/৭ লাইভ এসএপি সার্ভার অ্যাক্সেস"
      },
      {
        "en": "FICO, ABAP, SD & MM Official SAP Configuration Guides",
        "bn": "এসএপি অফিসিয়াল কনফিগারেশন গাইডস"
      },
      {
        "en": "Corporate Conglomerate & MNC SAP Consultant Placement Support",
        "bn": "কর্পোরেট ও বহুজাতিক কোম্পানিতে প্লেসমেন্ট সাপোর্ট"
      }
    ],
    "reviews": [
      {
        "id": "r1",
        "name": "Zubayer Hossain",
        "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
        "role": {
          "en": "SAP FICO Consultant",
          "bn": "এসএপি এফআইসিও কনসালট্যান্ট"
        },
        "rating": 5,
        "comment": {
          "en": "The live SAP server hands-on practice with P2P and O2C cycles prepared me for my consultant role at a top multinational!",
          "bn": "লাইভ এসএপি সার্ভারে প্র্যাকটিসের কারণে বহুজাতিক কোম্পানিতে এসএপি কনসালট্যান্ট হিসেবে চাকরি পেয়েছি।"
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
