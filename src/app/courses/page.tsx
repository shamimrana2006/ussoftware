"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, Star, Clock, Users, BookOpen, 
  ArrowRight, MessageCircle, CheckCircle2,
  Code2, Cpu, Cloud, Smartphone, ShieldCheck, 
  Palette, Megaphone, Database, Award, Layers,
  Search, Filter, LayoutGrid, ListFilter,
  AlignJustify, X, Zap, Check, Bot, Globe2,
  TrendingUp, Video, Server, Briefcase, GraduationCap,
  Calendar, DollarSign, Play
} from "lucide-react";

function CoursesContent() {
  const { language } = useLanguage();
  const isEn = language === "en";
  const searchParams = useSearchParams();

  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedMode, setSelectedMode] = useState<"all" | "online" | "offline">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<any>(null);
  const [selectedVideoCourse, setSelectedVideoCourse] = useState<any>(null);

  const categories = [
    { id: "all", label: isEn ? "All Categories" : "সকল ক্যাটাগরি", icon: Layers, iconColor: "text-[#008744]" },
    { id: "ai", label: isEn ? "AI and Automation" : "এআই ও অটোমেশন", icon: Cpu, iconColor: "text-[#DE1F26]" },
    { id: "design", label: isEn ? "Art & Design" : "আর্ট ও ডিজাইন", icon: Palette, iconColor: "text-amber-500" },
    { id: "programming", label: isEn ? "Programming" : "প্রোগ্রামিং", icon: Code2, iconColor: "text-[#008744]" },
    { id: "language", label: isEn ? "Language Skills" : "ভাষা দক্ষতা", icon: Globe2, iconColor: "text-blue-600" },
    { id: "marketing", label: isEn ? "Digital Marketing" : "ডিজিটাল মার্কেটিং", icon: TrendingUp, iconColor: "text-[#DE1F26]" },
    { id: "media", label: isEn ? "Media & Film" : "মিডিয়া ও ফিল্ম", icon: Video, iconColor: "text-purple-600" },
    { id: "networking", label: isEn ? "Networking & Server" : "নেটওয়ার্কিং ও সার্ভার", icon: Server, iconColor: "text-cyan-600" },
    { id: "management", label: isEn ? "Management" : "ম্যানেজমেন্ট", icon: Briefcase, iconColor: "text-indigo-600" },
    { id: "database", label: isEn ? "Database" : "ডাটাবেস", icon: Database, iconColor: "text-[#008744]" },
    { id: "diploma", label: isEn ? "Diploma" : "ডিপ্লোমা", icon: GraduationCap, iconColor: "text-[#DE1F26]" },
    { id: "cybersecurity", label: isEn ? "Cybersecurity" : "সাইবার সিকিউরিটি", icon: ShieldCheck, iconColor: "text-[#008744]" },
  ];

  const allCourses = useMemo(() => [
    {
      id: "ai-prompt",
      category: "ai",
      categoryLabel: isEn ? "AI and Automation" : "এআই ও অটোমেশন",
      catIcon: Cpu,
      title: isEn ? "Generative AI & Prompt Engineering" : "জেনারেটিভ এআই ও প্রম্পট ইঞ্জিনিয়ারিং",
      mode: "Offline",
      modeType: "offline",
      rating: 5,
      duration: isEn ? "3 Months" : "৩ মাস",
      enrolled: isEn ? "50+ Enrolled" : "৫০+ শিক্ষার্থী",
      fee: "8000৳",
      rawFee: 8000,
      bannerTitle: "Generative AI & Prompt Engineering",
      bgGradient: "from-[#081b29] via-[#0d2a42] to-[#081b29]",
      illustration: "🤖",
      image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/2eWuYf-keXI?autoplay=1",
      desc: isEn 
        ? "Master ChatGPT, Midjourney, Claude, prompt engineering techniques, and AI automation workflows."
        : "চ্যাটজিপিটি, মিডজার্নি, ক্লদ ও এআই প্রম্পট ইঞ্জিনিয়ারিংয়ের মাধ্যমে কাজকে ১০ গুণ দ্রুত করুন।"
    },
    {
      id: "ai-agentic",
      category: "ai",
      categoryLabel: isEn ? "AI and Automation" : "এআই ও অটোমেশন",
      catIcon: Bot,
      title: isEn ? "Agentic AI & Business Automation" : "এজেন্টিক এআই ও বিজনেস অটোমেশন",
      mode: "Online",
      modeType: "online",
      rating: 5,
      duration: isEn ? "3 Months" : "৩ মাস",
      enrolled: isEn ? "50+ Enrolled" : "৫০+ শিক্ষার্থী",
      fee: "15000৳",
      rawFee: 15000,
      bannerTitle: "Agentic AI Business Automation",
      bgGradient: "from-[#0d1e2b] via-[#13324a] to-[#0d1e2b]",
      illustration: "🧠",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/2eWuYf-keXI?autoplay=1",
      desc: isEn 
        ? "Build autonomous AI agents with LangGraph, CrewAI, multi-tool calling, and enterprise RAG systems."
        : "অটোনোমাস এআই এজেন্টস, টুল কলিং ও এন্টারপ্রাইজ অটোমেশন তৈরি শিখুন।"
    },
    {
      id: "mern-stack",
      category: "programming",
      categoryLabel: isEn ? "Programming" : "প্রোগ্রামিং",
      catIcon: Code2,
      title: isEn ? "Mastering MERN Stack Web Development" : "মাস্টারিং মার্ন স্ট্যাক ওয়েব ডেভেলপমেন্ট",
      mode: "Offline",
      modeType: "offline",
      rating: 5,
      duration: isEn ? "3 Months" : "৩ মাস",
      enrolled: isEn ? "50+ Enrolled" : "৫০+ শিক্ষার্থী",
      fee: "20000৳",
      rawFee: 20000,
      bannerTitle: "MERN STACK DEVELOPMENT",
      bgGradient: "from-[#111827] via-[#1e293b] to-[#0f172a]",
      illustration: "⚛️",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/wm5gMKuwSYk?autoplay=1",
      desc: isEn 
        ? "Complete MongoDB, Express.js, React, Node.js full-stack development with real-world SaaS projects."
        : "সম্পূর্ণ মঙ্গোডিবি, এক্সপ্রেস, রিঅ্যাক্ট ও নোড.জেএস দিয়ে ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন তৈরি।"
    },
    {
      id: "fs-nextjs",
      category: "programming",
      categoryLabel: isEn ? "Programming" : "প্রোগ্রামিং",
      catIcon: Code2,
      title: isEn ? "Enterprise Full-Stack Next.js 15 & TypeScript" : "এন্টারপ্রাইজ ফুল-স্ট্যাক নেক্সট.জেএস ১৫ ও টাইপস্ক্রিপ্ট",
      mode: "Offline",
      modeType: "offline",
      rating: 5,
      duration: isEn ? "6 Months" : "৬ মাস",
      enrolled: isEn ? "90+ Enrolled" : "৯০+ শিক্ষার্থী",
      fee: "25000৳",
      rawFee: 25000,
      bannerTitle: "NEXT.JS 15 ARCHITECTURE",
      bgGradient: "from-[#09090b] via-[#18181b] to-[#09090b]",
      illustration: "⚡",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/wm5gMKuwSYk?autoplay=1",
      desc: isEn 
        ? "Server Components, dynamic caching, PostgreSQL ORM, microservices, and Docker cloud deployment."
        : "নেক্সট.জেএস ১৫ সার্ভার কম্পোনেন্টস ও পোস্টগ্রেসকিউএল ডাটাবেস দিয়ে বড় স্কেলের সফটওয়্যার তৈরি।"
    },
    {
      id: "ielts-prep",
      category: "language",
      categoryLabel: isEn ? "Language Skills" : "ভাষা দক্ষতা",
      catIcon: Globe2,
      title: isEn ? "IELTS Complete Preparation Masterclass" : "আইইএলটিএস কমপ্লিট প্রিপারেশন মাস্টারক্লাস",
      mode: "Offline",
      modeType: "offline",
      rating: 5,
      duration: isEn ? "3 Months" : "৩ মাস",
      enrolled: isEn ? "80+ Enrolled" : "৮০+ শিক্ষার্থী",
      fee: "10000৳",
      rawFee: 10000,
      bannerTitle: "IELTS MASTERCLASS",
      bgGradient: "from-[#1e1b4b] via-[#312e81] to-[#1e1b4b]",
      illustration: "🇬🇧",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/nU-IIXBWlS4?autoplay=1",
      desc: isEn 
        ? "Target 7.5+ Band score with expert British Council certified trainers, mock tests, and 1-on-1 speaking reviews."
        : "ব্যান্ড ৭.৫+ অর্জনের জন্য মক টেস্ট ও ১-অন-১ স্পিকিং প্র্যাকটিস সহ আইইএলটিএস প্রস্তুতি।"
    },
    {
      id: "graphic-design",
      category: "design",
      categoryLabel: isEn ? "Art & Design" : "আর্ট ও ডিজাইন",
      catIcon: Palette,
      title: isEn ? "Professional Graphic & Brand Design" : "প্রফেশনাল গ্রাফিক ও ব্র্যান্ড ডিজাইন",
      mode: "Offline",
      modeType: "offline",
      rating: 5,
      duration: isEn ? "3 Months" : "৩ মাস",
      enrolled: isEn ? "65+ Enrolled" : "৬৫+ শিক্ষার্থী",
      fee: "12000৳",
      rawFee: 12000,
      bannerTitle: "GRAPHIC DESIGN",
      bgGradient: "from-[#064e3b] via-[#047857] to-[#064e3b]",
      illustration: "🎨",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1",
      desc: isEn 
        ? "Master Adobe Photoshop, Illustrator, Brand Identity Design, typography, and portfolio creation."
        : "ফটোশপ ও ইলাস্ট্রেটরে ব্র্যান্ড লোগো, সোশ্যাল মিডিয়া ব্যানার ও প্রিন্ট ডিজাইন শিখুন।"
    },
    {
      id: "digital-mkt",
      category: "marketing",
      categoryLabel: isEn ? "Digital Marketing" : "ডিজিটাল মার্কেটিং",
      catIcon: TrendingUp,
      title: isEn ? "Digital Marketing & Growth Hacking 360°" : "ডিজিটাল মার্কেটিং ও গ্রোথ হ্যাকিং ৩৬০°",
      mode: "Offline",
      modeType: "offline",
      rating: 5,
      duration: isEn ? "3 Months" : "৩ মাস",
      enrolled: isEn ? "70+ Enrolled" : "৭০+ শিক্ষার্থী",
      fee: "12000৳",
      rawFee: 12000,
      bannerTitle: "DIGITAL MARKETING",
      bgGradient: "from-[#4c0519] via-[#881337] to-[#4c0519]",
      illustration: "📢",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/nU-IIXBWlS4?autoplay=1",
      desc: isEn 
        ? "Meta Ads, Google Ads, SEO, Content Strategy, Sales Funnels, and Analytics conversion tracking."
        : "মেটা ও গুগল অ্যাডস, এসইও এবং সেলস ফানেল অপ্টিমাইজেশন শিখে ক্লায়েন্টদের সেলস বাড়ান।"
    },
    {
      id: "python-ml",
      category: "programming",
      categoryLabel: isEn ? "Programming" : "প্রোগ্রামিং",
      catIcon: Code2,
      title: isEn ? "Python, Django & Machine Learning Bootcamp" : "পাইথন, জ্যাঙ্গো ও মেশিন লার্নিং বুটক্যাম্প",
      mode: "Online",
      modeType: "online",
      rating: 5,
      duration: isEn ? "4 Months" : "৪ মাস",
      enrolled: isEn ? "75+ Enrolled" : "৭৫+ শিক্ষার্থী",
      fee: "18000৳",
      rawFee: 18000,
      bannerTitle: "PYTHON & DJANGO BOOTCAMP",
      bgGradient: "from-[#1e293b] via-[#334155] to-[#1e293b]",
      illustration: "🐍",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/_uQrJ0TkZlc?autoplay=1",
      desc: isEn 
        ? "Python fundamentals, OOP, Django REST Framework, Data Science with Pandas, and ML algorithms."
        : "পাইথন প্রোগ্রামিং, জ্যাঙ্গো ব্যাকএন্ড এবং ডাটা সাইন্স ও মেশিন লার্নিং মডেল তৈরি।"
    },
    {
      id: "video-editing",
      category: "media",
      categoryLabel: isEn ? "Media & Film" : "মিডিয়া ও ফিল্ম",
      catIcon: Video,
      title: isEn ? "Professional Video Editing & Motion Graphics" : "ভিডিও এডিটিং ও মোশন গ্রাফিক্স",
      mode: "Offline",
      modeType: "offline",
      rating: 5,
      duration: isEn ? "3 Months" : "৩ মাস",
      enrolled: isEn ? "55+ Enrolled" : "৫৫+ শিক্ষার্থী",
      fee: "14000৳",
      rawFee: 14000,
      bannerTitle: "VIDEO EDITING & MOTION",
      bgGradient: "from-[#311042] via-[#581c87] to-[#311042]",
      illustration: "🎬",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1",
      desc: isEn 
        ? "Adobe Premiere Pro, After Effects, cinematic color grading, sound design, and YouTube viral editing."
        : "প্রিমিয়ার প্রো ও আফটার ইফেক্টস দিয়ে সিনেমাটিক কালার গ্রেডিং ও অ্যানিমেশন তৈরি।"
    },
    {
      id: "devops-aws",
      category: "networking",
      categoryLabel: isEn ? "Networking & Server" : "নেটওয়ার্কিং ও সার্ভার",
      catIcon: Server,
      title: isEn ? "Cloud DevOps, Docker & Kubernetes Engineering" : "ক্লাউড ডেভঅপ্স, ডকার ও কুবারনেটিস",
      mode: "Online",
      modeType: "online",
      rating: 5,
      duration: isEn ? "4.5 Months" : "৪.৫ মাস",
      enrolled: isEn ? "60+ Enrolled" : "৬০+ শিক্ষার্থী",
      fee: "24000৳",
      rawFee: 24000,
      bannerTitle: "CLOUD DEVOPS & K8S",
      bgGradient: "from-[#0c4a6e] via-[#0284c7] to-[#0c4a6e]",
      illustration: "☁️",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1",
      desc: isEn 
        ? "AWS Architecture, Terraform IaC, multi-stage Docker, Helm charts, and automated GitHub CI/CD."
        : "এডব্লিউএস ক্লাউড আর্কিটেকচার, কুবারনেটিস অটোমেশন ও সিআই/সিডি পাইপলাইন পরিচালনা।"
    },
    {
      id: "cyber-sec",
      category: "cybersecurity",
      categoryLabel: isEn ? "Cybersecurity" : "সাইবার সিকিউরিটি",
      catIcon: ShieldCheck,
      title: isEn ? "Ethical Hacking & Defensive Cybersecurity" : "এথিক্যাল হ্যাকিং ও ডিফেন্সিভ সিকিউরিটি",
      mode: "Offline",
      modeType: "offline",
      rating: 5,
      duration: isEn ? "4 Months" : "৪ মাস",
      enrolled: isEn ? "50+ Enrolled" : "৫০+ শিক্ষার্থী",
      fee: "22000৳",
      rawFee: 22000,
      bannerTitle: "ETHICAL HACKING & DEFENSE",
      bgGradient: "from-[#14532d] via-[#15803d] to-[#14532d]",
      illustration: "🛡️",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/inWWhr5tnEA?autoplay=1",
      desc: isEn 
        ? "Kali Linux, Penetration Testing, OWASP Top 10 vulnerabilities, Wireshark, and SOC operations."
        : "পেনিট্রেশন টেস্টিং, নেটওয়ার্ক ডিফেন্স ও ওয়েব সিকিউরিটি ভালনারেবিলিটি অ্যানালাইসিস।"
    },
    {
      id: "spoken-english",
      category: "language",
      categoryLabel: isEn ? "Language Skills" : "ভাষা দক্ষতা",
      catIcon: Globe2,
      title: isEn ? "Spoken English & Corporate Communication" : "স্পোকেন ইংলিশ ও কর্পোরেট কমিউনিকেশন",
      mode: "Online",
      modeType: "online",
      rating: 5,
      duration: isEn ? "2.5 Months" : "২.৫ মাস",
      enrolled: isEn ? "110+ Enrolled" : "১১০+ শিক্ষার্থী",
      fee: "6000৳",
      rawFee: 6000,
      bannerTitle: "SPOKEN ENGLISH FLUENCY",
      bgGradient: "from-[#1e3a8a] via-[#2563eb] to-[#1e3a8a]",
      illustration: "🗣️",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/nU-IIXBWlS4?autoplay=1",
      desc: isEn 
        ? "Overcome hesitation, master business emails, interview techniques, and fluent international accents."
        : "জড়তা কাটিয়ে প্রফেশনাল প্রেজেন্টেশন ও আন্তর্জাতিক ক্লায়েন্টদের সাথে অনর্গল কথা বলার কৌশল।"
    },
    {
      id: "uiux-figma",
      category: "design",
      categoryLabel: isEn ? "Art & Design" : "আর্ট ও ডিজাইন",
      catIcon: Palette,
      title: isEn ? "Advanced UI/UX & Figma Design Systems" : "এডভান্সড ইউআই/ইউএক্স ও ফিগমা সিস্টেমস",
      mode: "Online",
      modeType: "online",
      rating: 5,
      duration: isEn ? "3.5 Months" : "৩.৫ মাস",
      enrolled: isEn ? "85+ Enrolled" : "৮৫+ শিক্ষার্থী",
      fee: "16000৳",
      rawFee: 16000,
      bannerTitle: "UI/UX & FIGMA SYSTEMS",
      bgGradient: "from-[#4a044e] via-[#86198f] to-[#4a044e]",
      illustration: "📱",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/c9Wg6Cb_YlU?autoplay=1",
      desc: isEn 
        ? "User research, Figma variables, interactive component sets, and scalable enterprise design tokens."
        : "ফিগমায় প্রফেশনাল ডিজাইন সিস্টেম, মাইক্রো-ইন্টারঅ্যাকশন ও প্রোটোটাইপিং।"
    },
    {
      id: "mobile-flutter",
      category: "programming",
      categoryLabel: isEn ? "Programming" : "প্রোগ্রামিং",
      catIcon: Smartphone,
      title: isEn ? "Cross-Platform Flutter & Dart App Development" : "ফ্লাটার ও ডার্ট মোবাইল অ্যাপ ডেভেলপমেন্ট",
      mode: "Offline",
      modeType: "offline",
      rating: 5,
      duration: isEn ? "4 Months" : "৪ মাস",
      enrolled: isEn ? "70+ Enrolled" : "৭০+ শিক্ষার্থী",
      fee: "20000৳",
      rawFee: 20000,
      bannerTitle: "FLUTTER APP DEVELOPMENT",
      bgGradient: "from-[#0369a1] via-[#0284c7] to-[#0369a1]",
      illustration: "📲",
      image: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/1gDhl4leEzA?autoplay=1",
      desc: isEn 
        ? "Clean Architecture, Riverpod, offline SQLite sync, REST APIs, and Google Play Store publishing."
        : "ফ্লাটার দিয়ে আকর্ষণীয় ইউআই এবং দ্রুতগতির আইওএস ও অ্যান্ড্রয়েড অ্যাপ তৈরি।"
    },
    {
      id: "postgres-db",
      category: "database",
      categoryLabel: isEn ? "Database" : "ডাটাবেস",
      catIcon: Database,
      title: isEn ? "PostgreSQL & Database Architecture Masterclass" : "পোস্টগ্রেসকিউএল ও ডাটাবেস আর্কিটেকচার",
      mode: "Online",
      modeType: "online",
      rating: 5,
      duration: isEn ? "3 Months" : "৩ মাস",
      enrolled: isEn ? "40+ Enrolled" : "৪০+ শিক্ষার্থী",
      fee: "15000৳",
      rawFee: 15000,
      bannerTitle: "POSTGRESQL ARCHITECTURE",
      bgGradient: "from-[#1e3a5f] via-[#2d5f8b] to-[#1e3a5f]",
      illustration: "🗄️",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/qw--VYLpxG4?autoplay=1",
      desc: isEn 
        ? "Advanced SQL indexing, query optimization, high-availability replication, and Redis caching."
        : "ডাটাবেস ইনডেক্সিং, কোয়েরি অপ্টিমাইজেশন ও হাই-পারফরম্যান্স ডাটাবেস ডিজাইন।"
    },
    {
      id: "agile-scrum",
      category: "management",
      categoryLabel: isEn ? "Management" : "ম্যানেজমেন্ট",
      catIcon: Briefcase,
      title: isEn ? "Agile Project Management & Scrum Master" : "অ্যাজাইল প্রজেক্ট ম্যানেজমেন্ট ও স্ক্রাম",
      mode: "Online",
      modeType: "online",
      rating: 5,
      duration: isEn ? "2 Months" : "২ মাস",
      enrolled: isEn ? "45+ Enrolled" : "৪৫+ শিক্ষার্থী",
      fee: "12000৳",
      rawFee: 12000,
      bannerTitle: "AGILE & SCRUM MASTER",
      bgGradient: "from-[#713f12] via-[#a16207] to-[#713f12]",
      illustration: "📊",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1",
      desc: isEn 
        ? "Jira workflows, sprint planning, backlog management, user stories, and Scrum certification prep."
        : "জিরা ও স্ক্রাম ফ্রেমওয়ার্ক দিয়ে সফটওয়্যার প্রজেক্ট ও টিম পরিচালনা।"
    },
    {
      id: "diploma-se",
      category: "diploma",
      categoryLabel: isEn ? "Diploma" : "ডিপ্লোমা",
      catIcon: GraduationCap,
      title: isEn ? "1-Year Professional Diploma in Software Engineering" : "১ বছর মেয়াদী ডিপ্লোমা ইন সফটওয়্যার ইঞ্জিনিয়ারিং",
      mode: "Offline",
      modeType: "offline",
      rating: 5,
      duration: isEn ? "12 Months" : "১২ মাস",
      enrolled: isEn ? "150+ Enrolled" : "১৫০+ শিক্ষার্থী",
      fee: "65000৳",
      rawFee: 65000,
      bannerTitle: "DIPLOMA IN SOFTWARE ENG",
      bgGradient: "from-[#022c22] via-[#065f46] to-[#022c22]",
      illustration: "🎓",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/wm5gMKuwSYk?autoplay=1",
      desc: isEn 
        ? "Complete engineering curriculum: Algorithms, Full-Stack Next.js, Cloud DevOps, AI Agents & Placement."
        : "কম্পিউটার সায়েন্স ফান্ডামেন্টালস, ফুল-স্ট্যাক ও ক্লাউড সহ ১ বছরের সমন্বিত প্রফেশনাল ডিপ্লোমা।"
    },
    {
      id: "linux-sysadmin",
      category: "networking",
      categoryLabel: isEn ? "Networking & Server" : "নেটওয়ার্কিং ও সার্ভার",
      catIcon: Server,
      title: isEn ? "Linux System Administration & Server Management" : "লিনাক্স সিস্টেম অ্যাডমিনিস্ট্রেশন",
      mode: "Offline",
      modeType: "offline",
      rating: 5,
      duration: isEn ? "3.5 Months" : "৩.৫ মাস",
      enrolled: isEn ? "50+ Enrolled" : "৫০+ শিক্ষার্থী",
      fee: "16000৳",
      rawFee: 16000,
      bannerTitle: "LINUX SYSTEM ADMIN",
      bgGradient: "from-[#334155] via-[#475569] to-[#334155]",
      illustration: "🐧",
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1",
      desc: isEn 
        ? "RHCSA preparation, Bash automation, Apache/Nginx web servers, firewall security, and DNS."
        : "লিনাক্স কমান্ড লাইন, শেল স্ক্রিপ্টিং, এনজিনএক্স সার্ভার কনফিগারেশন ও ক্লাউড হোস্ট।"
    },
    {
      id: "3d-blender",
      category: "media",
      categoryLabel: isEn ? "Media & Film" : "মিডিয়া ও ফিল্ম",
      catIcon: Video,
      title: isEn ? "3D Animation, Blender & Visual Effects" : "৩ডি অ্যানিমেশন ও ব্লেন্ডার ভিএফএক্স",
      mode: "Offline",
      modeType: "offline",
      rating: 5,
      duration: isEn ? "4 Months" : "৪ মাস",
      enrolled: isEn ? "35+ Enrolled" : "৩৫+ শিক্ষার্থী",
      fee: "18000৳",
      rawFee: 18000,
      bannerTitle: "3D BLENDER ANIMATION",
      bgGradient: "from-[#3b0764] via-[#6b21a8] to-[#3b0764]",
      illustration: "🧊",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1",
      desc: isEn 
        ? "Blender 3D modeling, texturing, rigging, character animation, lighting, and rendering engines."
        : "ব্লেন্ডার দিয়ে ৩ডি মডেলিং, প্রোডাক্ট অ্যানিমেশন ও সিনেমাটিক রেন্ডারিং।"
    },
    {
      id: "soc-analyst",
      category: "cybersecurity",
      categoryLabel: isEn ? "Cybersecurity" : "সাইবার সিকিউরিটি",
      catIcon: ShieldCheck,
      title: isEn ? "SOC Analyst & Blue Team Network Defense" : "এসওসি অ্যানালিস্ট ও ব্লু টিম নেটওয়ার্ক ডিফেন্স",
      mode: "Online",
      modeType: "online",
      rating: 5,
      duration: isEn ? "4 Months" : "৪ মাস",
      enrolled: isEn ? "40+ Enrolled" : "৪০+ শিক্ষার্থী",
      fee: "25000৳",
      rawFee: 25000,
      bannerTitle: "SOC ANALYST & BLUE TEAM",
      bgGradient: "from-[#0f172a] via-[#1e293b] to-[#0f172a]",
      illustration: "🚨",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/inWWhr5tnEA?autoplay=1",
      desc: isEn 
        ? "SIEM configuration (Splunk, Wazuh), threat intelligence, incident response, and malware analysis."
        : "স্প্ল্যাঙ্ক ও ওয়াজুহ দিয়ে সিকিউরিটি অপারেশন সেন্টার (SOC) মনিটরিং ও থ্রেট হান্টিং।"
    },
    {
      id: "seo-ads",
      category: "marketing",
      categoryLabel: isEn ? "Digital Marketing" : "ডিজিটাল মার্কেটিং",
      catIcon: TrendingUp,
      title: isEn ? "Technical SEO, Meta Ads & Sales Funnels" : "টেকনিক্যাল এসইও ও মেটা অ্যাডস",
      mode: "Online",
      modeType: "online",
      rating: 5,
      duration: isEn ? "2.5 Months" : "২.৫ মাস",
      enrolled: isEn ? "60+ Enrolled" : "৬০+ শিক্ষার্থী",
      fee: "10000৳",
      rawFee: 10000,
      bannerTitle: "SEO & META ADS MASTERY",
      bgGradient: "from-[#831843] via-[#be185d] to-[#831843]",
      illustration: "📈",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/nU-IIXBWlS4?autoplay=1",
      desc: isEn 
        ? "On-page & off-page SEO, backlink building, Google Search Console, and Facebook pixel tracking."
        : "গুগল র‍্যাংকিং, কি-ওয়ার্ড রিসার্চ এবং হাই-কনভার্টিং মেটা অ্যাড ক্যাম্পেইন পরিচালনা।"
    },
    {
      id: "product-mgmt",
      category: "management",
      categoryLabel: isEn ? "Management" : "ম্যানেজমেন্ট",
      catIcon: Briefcase,
      title: isEn ? "Product Management for Tech Leaders" : "প্রোডাক্ট ম্যানেজমেন্ট ফর টেক লিডারস",
      mode: "Online",
      modeType: "online",
      rating: 5,
      duration: isEn ? "2.5 Months" : "২.৫ মাস",
      enrolled: isEn ? "30+ Enrolled" : "৩০+ শিক্ষার্থী",
      fee: "20000৳",
      rawFee: 20000,
      bannerTitle: "TECH PRODUCT MANAGEMENT",
      bgGradient: "from-[#312e81] via-[#4338ca] to-[#312e81]",
      illustration: "🎯",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=600",
      videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA?autoplay=1",
      desc: isEn 
        ? "PRDs, product roadmaps, metrics (AARRR), user interviews, wireframing, and Go-to-Market strategies."
        : "সফটওয়্যার প্রোডাক্টের রোডম্যাপ, ইউজার জার্নি ও সফল মার্কেট লঞ্চ স্ট্র্যাটেজি।"
    }
  ], [isEn]);

  // Handle URL query parameters from homepage navigation
  useEffect(() => {
    const courseId = searchParams.get("course") || searchParams.get("track");
    const categoryParam = searchParams.get("category");

    if (categoryParam) {
      setActiveCategory(categoryParam);
    }

    if (courseId) {
      const match = allCourses.find((c) => c.id === courseId);
      if (match) {
        setSelectedCourseForModal(match);
        setActiveCategory(match.category);
      }
    }
  }, [searchParams, allCourses]);

  // Filtering & Sorting
  const filteredCourses = useMemo(() => {
    let result = allCourses.filter((course) => {
      const matchCategory = activeCategory === "all" || course.category === activeCategory;
      const matchMode = selectedMode === "all" || course.modeType === selectedMode;
      const matchSearch = searchQuery.trim() === "" || 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchMode && matchSearch;
    });

    if (sortBy === "price-low") {
      result.sort((a, b) => a.rawFee - b.rawFee);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.rawFee - a.rawFee);
    }

    return result;
  }, [allCourses, activeCategory, selectedMode, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <Header />

      <main className="flex-grow py-8 sm:py-12 select-none">
        <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10">
          
          {/* MAIN LAYOUT: LEFT SIDEBAR (SEARCH + CATEGORIES) & RIGHT CONTENT (CONTROLS + COURSE GRID) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* LEFT SIDEBAR: Search & Categories (Sticky on Desktop) */}
            <div className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-24 space-y-4 max-h-[calc(100vh-7rem)] overflow-y-auto overflow-x-hidden pr-0.5 z-20">
              
              {/* Search Input Box */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-2.5 shadow-2xs focus-within:border-[#008744] focus-within:ring-2 focus-within:ring-[#008744]/15 transition-all">
                <div className="relative flex items-center">
                  <Search size={15} className="text-slate-400 ml-2.5 flex-shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={isEn ? "Search courses..." : "কোর্স খুঁজুন..."}
                    className="w-full pl-2.5 pr-8 py-1 text-xs text-slate-800 placeholder-slate-400 outline-none bg-transparent font-medium"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2 text-slate-400 hover:text-slate-600 cursor-pointer"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
              </div>

              {/* Categories Checkbox Panel */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-2xs">
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 font-extrabold text-slate-900 text-sm">
                  <div className="w-6 h-6 rounded-lg bg-emerald-50 text-[#008744] flex items-center justify-center">
                    <Filter size={13} />
                  </div>
                  <span>{isEn ? "Categories" : "ক্যাটাগরি"}</span>
                </div>

                <div className="space-y-1">
                  {categories.map((cat) => {
                    const isChecked = activeCategory === cat.id;
                    const IconComponent = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all text-left cursor-pointer group ${
                          isChecked 
                            ? "bg-emerald-50/90 text-[#008744] font-bold border border-emerald-200 shadow-2xs" 
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          {/* Custom Checkbox */}
                          <div className={`w-4 h-4 rounded-md border flex items-center justify-center flex-shrink-0 transition-all ${
                            isChecked 
                              ? "bg-[#008744] border-[#008744] text-white" 
                              : "border-slate-300 bg-white group-hover:border-slate-400"
                          }`}>
                            {isChecked && <Check size={11} className="stroke-[3]" />}
                          </div>

                          <span className="truncate">{cat.label}</span>
                        </div>

                        {/* Distinct Thematic Icon */}
                        <IconComponent size={13} className={`flex-shrink-0 ${isChecked ? "text-[#008744]" : cat.iconColor}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* RIGHT AREA: TOP CONTROLS & COURSE CARDS GRID */}
            <div className="lg:col-span-8 xl:col-span-9 space-y-6">
              
              {/* Top Filter / Control Bar */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-3 sm:p-4 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
                
                {/* Left: Count & Mode Tabs */}
                <div className="flex items-center flex-wrap gap-3 w-full sm:w-auto">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/80 px-3 py-1.5 rounded-xl">
                    <Sparkles size={13} className="text-[#DE1F26]" />
                    <span>
                      <strong className="text-[#008744] font-black">{filteredCourses.length}</strong> {isEn ? "courses found" : "টি কোর্স পাওয়া গেছে"}
                    </span>
                  </div>

                  {/* Mode Pills: All, Online, Offline (Brand Styled) */}
                  <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                    {(["all", "online", "offline"] as const).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => setSelectedMode(mode)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold capitalize transition-all cursor-pointer ${
                          selectedMode === mode
                            ? "bg-[#008744] text-white shadow-2xs"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        {mode === "all" ? (isEn ? "All" : "সকল") : mode === "online" ? (isEn ? "Online" : "অনলাইন") : (isEn ? "Offline" : "অফলাইন")}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right: Sort By Dropdown & View Mode Toggle */}
                <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
                  {/* Sort dropdown */}
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white border border-slate-200 text-slate-700 text-xs font-semibold px-3 py-2 rounded-xl outline-none cursor-pointer hover:border-emerald-300 shadow-2xs transition-colors"
                  >
                    <option value="default">{isEn ? "⇅ Sort By: Default" : "⇅ বাছাই: ডিফল্ট"}</option>
                    <option value="price-low">{isEn ? "Price: Low to High" : "মূল্য: কম থেকে বেশি"}</option>
                    <option value="price-high">{isEn ? "Price: High to Low" : "মূল্য: বেশি থেকে কম"}</option>
                  </select>

                  {/* Grid / List icons */}
                  <div className="flex items-center bg-slate-100 p-1 rounded-xl">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-1.5 rounded-lg cursor-pointer transition-colors ${
                        viewMode === "grid" ? "bg-[#008744] text-white shadow-2xs" : "text-slate-500 hover:text-slate-800"
                      }`}
                      title="Grid View"
                    >
                      <LayoutGrid size={14} />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-1.5 rounded-lg cursor-pointer transition-colors ${
                        viewMode === "list" ? "bg-[#008744] text-white shadow-2xs" : "text-slate-500 hover:text-slate-800"
                      }`}
                      title="List View"
                    >
                      <AlignJustify size={14} />
                    </button>
                  </div>
                </div>

              </div>

              {/* Course Cards Grid */}
              {filteredCourses.length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-200/90 p-12 text-center shadow-2xs">
                  <Search size={36} className="mx-auto text-slate-300 mb-3" />
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base">
                    {isEn ? "No courses match your filter" : "কোনো কোর্স পাওয়া যায়নি"}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {isEn ? "Try changing your search term or category filter." : "অনুগ্রহ করে অন্য কোনো ক্যাটাগরি বা কি-ওয়ার্ড দিয়ে খুঁজুন।"}
                  </p>
                </div>
              ) : (
                <div className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6"
                    : "grid grid-cols-1 gap-4"
                }>
                  {filteredCourses.map((course) => {
                    const CatIcon = course.catIcon;
                    return (
                      <motion.div
                        key={course.id}
                        id={`course-card-${course.id}`}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ y: -4 }}
                        className="bg-white rounded-2xl border border-slate-200/90 hover:border-emerald-200 shadow-2xs hover:shadow-[0_10px_25px_rgba(0,135,68,0.06)] transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                      >
                        {/* TOP THUMBNAIL BANNER */}
                        <div 
                          onClick={() => setSelectedVideoCourse(course)}
                          className={`relative h-44 sm:h-48 bg-gradient-to-br ${course.bgGradient} overflow-hidden p-4 sm:p-5 flex flex-col justify-between text-white cursor-pointer group/thumb`}
                          title={isEn ? "Click to watch video preview" : "ভিডিও সিলেবাস দেখতে ক্লিক করুন"}
                        >
                          {/* Background Image with Zoom on hover */}
                          <img 
                            src={course.image} 
                            alt={course.title}
                            className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover/thumb:opacity-40 group-hover/thumb:scale-105 transition-all duration-500" 
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                          {/* Top Badges: Mode & Star Rating */}
                          <div className="flex items-center justify-between relative z-10 pointer-events-none">
                            <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-md uppercase tracking-wider shadow-xs ${
                              course.modeType === "offline" 
                                ? "bg-[#008744] text-white" 
                                : "bg-[#DE1F26] text-white"
                            }`}>
                              {course.mode}
                            </span>

                            <span className="bg-white/95 text-slate-900 text-[11px] font-extrabold px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1">
                              <Star size={11} className="fill-[#F59E0B] text-[#F59E0B]" />
                              <span>{course.rating}</span>
                            </span>
                          </div>

                          {/* CENTER VIDEO PLAY BUTTON */}
                          <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="w-11 h-11 rounded-full bg-white/25 group-hover/thumb:bg-[#008744] text-white backdrop-blur-md border border-white/50 shadow-lg transition-all duration-300 group-hover/thumb:scale-110 pl-0.5 flex items-center justify-center">
                              <Play size={16} className="fill-white" />
                            </div>
                          </div>

                          {/* Poster Title & Graphic Art */}
                          <div className="relative z-10 flex items-center justify-between gap-3 pointer-events-none">
                            <h4 className="text-sm sm:text-base font-black leading-tight tracking-tight max-w-[75%] drop-shadow-md text-white">
                              {course.bannerTitle}
                            </h4>
                            <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-lg flex-shrink-0 shadow-inner group-hover/thumb:scale-105 transition-transform">
                              {course.illustration}
                            </div>
                          </div>
                        </div>

                        {/* CARD BODY CONTENT */}
                        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                          <div>
                            {/* Category Tag */}
                            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#008744] bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-md mb-2">
                              <CatIcon size={12} className="text-[#008744]" />
                              <span>{course.categoryLabel}</span>
                            </div>

                            {/* Course Title */}
                            <h3 className="font-extrabold text-slate-900 text-sm sm:text-[14.5px] leading-snug line-clamp-2 mb-2.5 group-hover:text-[#008744] transition-colors min-h-[2.4rem]">
                              {course.title}
                            </h3>

                            {/* Metadata Row (Duration & Enrolled) */}
                            <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 font-semibold">
                              <div className="flex items-center gap-1">
                                <Calendar size={13} className="text-[#008744]" />
                                <span>{course.duration}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Users size={13} className="text-[#DE1F26]" />
                                <span>{course.enrolled}</span>
                              </div>
                            </div>
                          </div>

                          {/* Price & Rating Row */}
                          <div>
                            <div className="pt-3 border-t border-slate-100 flex items-center justify-between mb-4">
                              <div>
                                <span className="text-[10px] text-slate-400 block font-bold uppercase tracking-wider">
                                  {isEn ? "Course Fee" : "কোর্স ফি"}
                                </span>
                                <span className="text-lg sm:text-xl font-black text-[#008744]">
                                  {course.fee}
                                </span>
                              </div>

                              {/* 5 Stars */}
                              <div className="flex items-center text-[#F59E0B]">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} size={13} className="fill-[#F59E0B]" />
                                ))}
                              </div>
                            </div>

                            {/* Action Buttons Row */}
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => setSelectedCourseForModal(course)}
                                className="flex-1 py-2.5 px-3 rounded-xl bg-[#008744] hover:bg-[#007038] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
                              >
                                <BookOpen size={13} />
                                <span>{isEn ? "Details" : "বিস্তারিত"}</span>
                              </button>

                              <a
                                href={`https://wa.me/880171234578?text=Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(course.title)}%20course.`}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 py-2.5 px-3 rounded-xl bg-white hover:bg-emerald-50 border border-emerald-200 text-[#008744] hover:text-[#007038] text-xs font-bold flex items-center justify-center gap-1.5 shadow-2xs transition-colors"
                              >
                                <MessageCircle size={13} className="text-[#008744]" />
                                <span>{isEn ? "Enroll" : "ভর্তি হন"}</span>
                              </a>
                            </div>
                          </div>
                        </div>

                      </motion.div>
                    );
                  })}
                </div>
              )}

            </div>

          </div>

        </div>

        {/* DETAILS MODAL */}
        <AnimatePresence>
          {selectedCourseForModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedCourseForModal(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative text-left"
              >
                <button
                  onClick={() => setSelectedCourseForModal(null)}
                  className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center cursor-pointer transition-colors"
                >
                  <X size={18} />
                </button>

                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008744] bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md uppercase tracking-wider mb-2">
                  <BookOpen size={12} />
                  <span>{selectedCourseForModal.categoryLabel}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                  {selectedCourseForModal.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {selectedCourseForModal.desc}
                </p>

                <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 mb-6 text-xs">
                  <div>
                    <span className="text-slate-400 block font-medium">{isEn ? "Duration" : "সময়সীমা"}</span>
                    <span className="font-bold text-slate-800 text-sm flex items-center gap-1 mt-0.5">
                      <Calendar size={13} className="text-[#008744]" />
                      {selectedCourseForModal.duration}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">{isEn ? "Delivery Mode" : "মাধ্যম"}</span>
                    <span className="font-bold text-slate-800 text-sm flex items-center gap-1 mt-0.5">
                      <span className={`w-2 h-2 rounded-full ${selectedCourseForModal.modeType === "offline" ? "bg-[#008744]" : "bg-[#DE1F26]"}`} />
                      {selectedCourseForModal.mode}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-bold uppercase">{isEn ? "Course Fee" : "কোর্স ফি"}</span>
                    <span className="text-xl sm:text-2xl font-black text-[#008744]">{selectedCourseForModal.fee}</span>
                  </div>

                  <a
                    href={`https://wa.me/880171234578?text=Hello%2C%20I%20want%20to%20enroll%20in%20${encodeURIComponent(selectedCourseForModal.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#008744] hover:bg-[#007038] text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all flex items-center gap-2"
                  >
                    <MessageCircle size={15} />
                    <span>{isEn ? "Enroll via WhatsApp" : "হোয়াটসঅ্যাপে ভর্তি হন"}</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* VIDEO PREVIEW MODAL */}
        <AnimatePresence>
          {selectedVideoCourse && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedVideoCourse(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-slate-900 rounded-3xl overflow-hidden max-w-2xl w-full border border-slate-800 shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 text-white">
                  <div className="flex items-center gap-2.5">
                    <Play size={15} className="text-[#008744] fill-[#008744]" />
                    <span className="font-bold text-xs sm:text-sm truncate max-w-[280px] sm:max-w-md">
                      {selectedVideoCourse.title}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedVideoCourse(null)}
                    className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center cursor-pointer transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* 16:9 Video Player */}
                <div className="relative pt-[56.25%] bg-black">
                  <iframe
                    src={selectedVideoCourse.videoUrl}
                    title={selectedVideoCourse.title}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="p-4 sm:p-5 bg-slate-950 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">{isEn ? "Course Tuition" : "কোর্স ফি"}</span>
                    <span className="text-lg font-black text-emerald-400">{selectedVideoCourse.fee}</span>
                  </div>
                  <a
                    href={`https://wa.me/880171234578?text=Hello%2C%20I%20want%20to%20enroll%20in%20${encodeURIComponent(selectedVideoCourse.title)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-all flex items-center gap-1.5"
                  >
                    <MessageCircle size={14} />
                    <span>{isEn ? "Enroll Now" : "ভর্তি নিশ্চিত করুন"}</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      <Footer />
    </div>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#f8fafc]" />}>
      <CoursesContent />
    </Suspense>
  );
}
