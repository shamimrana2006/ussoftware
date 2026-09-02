"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  GALLERY_ITEMS,
  GALLERY_CATEGORIES,
  GalleryItem,
} from "@/data/galleryData";
import {
  Camera,
  Play,
  Heart,
  Calendar,
  MapPin,
  Tag,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Share2,
  Download,
  Filter,
  Search,
  LayoutGrid,
  Layers,
  Award,
  Users,
  Laptop,
  CheckCircle2,
  ArrowRight,
  Eye,
  ZoomIn,
  ZoomOut,
  Video,
} from "lucide-react";

export default function GalleryPage() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  // State
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [activeVideoItem, setActiveVideoItem] = useState<GalleryItem | null>(null);
  const [likedItems, setLikedItems] = useState<{ [id: string]: boolean }>({});
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [copiedShare, setCopiedShare] = useState<boolean>(false);

  // Filtered gallery items
  const filteredItems = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        (isBn ? item.titleBn : item.titleEn)
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, isBn]);

  // Current lightbox item
  const currentLightboxItem =
    activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  // Like handler
  const handleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Keyboard navigation for Lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === "Escape") {
        setActiveLightboxIndex(null);
        setIsZoomed(false);
      } else if (e.key === "ArrowRight") {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
        setIsZoomed(false);
      } else if (e.key === "ArrowLeft") {
        setActiveLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredItems.length) % filteredItems.length
            : null
        );
        setIsZoomed(false);
      }
    },
    [activeLightboxIndex, filteredItems.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Prevent background scroll when lightbox/modal is open
  useEffect(() => {
    if (activeLightboxIndex !== null || activeVideoItem !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeLightboxIndex, activeVideoItem]);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard?.writeText(window.location.href);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafcff] text-slate-900 flex flex-col selection:bg-emerald-500 selection:text-white">
      <Header />

      <main className="flex-grow">
        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-slate-900 via-[#071927] to-[#040f1a] text-white">
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#008744]/20 rounded-full blur-3xl pointer-events-none -z-0" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#DE1F26]/15 rounded-full blur-3xl pointer-events-none -z-0" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />

          <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            {/* Breadcrumb & Live Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center space-x-2 text-xs font-semibold text-slate-300">
                <Link href="/" className="hover:text-emerald-400 transition-colors">
                  {isBn ? "হোম" : "Home"}
                </Link>
                <span>/</span>
                <span className="text-emerald-400 font-bold">
                  {isBn ? "গ্যালারি ও কার্যক্রম" : "Gallery & Company Moments"}
                </span>
              </div>

              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold tracking-wide backdrop-blur-md shadow-[0_0_15px_rgba(0,135,68,0.2)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{isBn ? "লাইভ ল্যাব ও ইভেন্টস মেমোরিজ" : "Live Tech Lab & Event Moments"}</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="max-w-3xl space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
              >
                {isBn ? (
                  <>
                    আমাদের <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">আইটি প্রতিষ্ঠান</span> ও বিশেষ মুহূর্তসমূহ
                  </>
                ) : (
                  <>
                    Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Company Life</span> & Tech Moments
                  </>
                )}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal"
              >
                {isBn
                  ? "ইউএস সফটওয়্যার লিমিটেডের ট্রেনিং ল্যাব, প্র্যাকটিক্যাল ক্লাস, সার্টিফিকেট বিতরণ এবং শিক্ষার্থী ও টিমের সুন্দর মুহূর্তগুলোর এক ঝলক।"
                  : "A visual look at our hands-on coding labs, practical workshops, certificate ceremonies, and memorable team moments."}
              </motion.p>
            </div>

            {/* Quick Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 mt-10"
            >
              {[
                {
                  labelEn: "Photo & Video Moments",
                  labelBn: "ছবি ও ভিডিও মুহূর্ত",
                  value: "700+",
                  icon: Camera,
                  color: "text-emerald-400",
                  bg: "bg-emerald-500/10 border-emerald-500/20",
                },
                {
                  labelEn: "Lab & Practical Classes",
                  labelBn: "ল্যাব ও প্র্যাকটিক্যাল ক্লাস",
                  value: "30+",
                  icon: Laptop,
                  color: "text-cyan-400",
                  bg: "bg-cyan-500/10 border-cyan-500/20",
                },
                {
                  labelEn: "Workshops & Sessions",
                  labelBn: "ওয়ার্কশপ ও সেমিনার",
                  value: "15+",
                  icon: Award,
                  color: "text-amber-400",
                  bg: "bg-amber-500/10 border-amber-500/20",
                },
                {
                  labelEn: "Enrolled Learners",
                  labelBn: "সফল শিক্ষার্থী",
                  value: "300+",
                  icon: Users,
                  color: "text-rose-400",
                  bg: "bg-rose-500/10 border-rose-500/20",
                },
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl p-4 sm:p-5 border backdrop-blur-md bg-white/[0.04] ${stat.bg} transition-all duration-300 hover:scale-[1.02] shadow-sm`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Icon className={`w-5 h-5 ${stat.color}`} />
                      <span className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        {stat.value}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-slate-300">
                      {isBn ? stat.labelBn : stat.labelEn}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ================= FILTER & SEARCH BAR ================= */}
        <section className="sticky top-[58px] sm:top-[68px] z-30 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-xs py-3.5 transition-all">
          <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-3">
            {/* Category Filter Pills */}
            <div className="flex items-center space-x-1.5 sm:space-x-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              {GALLERY_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`relative px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#008744] text-white shadow-[0_4px_12px_rgba(0,135,68,0.3)]"
                        : "bg-slate-100/80 text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200/60"
                    }`}
                  >
                    {isBn ? cat.labelBn : cat.labelEn}
                  </button>
                );
              })}
            </div>

            {/* Search Input & Item Count */}
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <div className="relative flex-grow md:w-72">
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    isBn
                      ? "ছবি, ইভেন্ট বা ট্যাগ খুঁজুন..."
                      : "Search photos, events, tags..."
                  }
                  className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-slate-100/90 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 text-slate-800 placeholder-slate-400 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              <div className="hidden sm:flex items-center space-x-1.5 px-3 py-2 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-bold whitespace-nowrap">
                <span>
                  {filteredItems.length} {isBn ? "টি ছবি" : "Photos"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= GALLERY GRID / MASONRY ================= */}
        <section className="py-10 sm:py-14 max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200/80 p-8 shadow-xs">
              <Camera className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800 mb-1">
                {isBn ? "কোনো ছবি পাওয়া যায়নি" : "No Moments Found"}
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto mb-5">
                {isBn
                  ? "আপনার অনুসন্ধানের সাথে মিল রেখে কোনো ছবি পাওয়া যায়নি। অন্য কোনো ফিল্টার নির্বাচন করুন।"
                  : "We couldn't find any photos matching your search. Please try another category or search term."}
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="px-5 py-2.5 bg-[#008744] text-white text-xs font-bold rounded-xl shadow-md hover:bg-[#007038] transition-all cursor-pointer"
              >
                {isBn ? "সকল ছবি দেখুন" : "View All Moments"}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
              {filteredItems.map((item, index) => {
                const isLiked = !!likedItems[item.id];
                const likeCount = item.likes + (isLiked ? 1 : 0);

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,135,68,0.12)] hover:border-emerald-300/80 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
                    onClick={() => {
                      if (item.isVideo) {
                        setActiveVideoItem(item);
                      } else {
                        setActiveLightboxIndex(index);
                      }
                    }}
                  >
                    {/* Media Container with 16:10 / 4:3 Aspect */}
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                      <img
                        src={item.imageUrl}
                        alt={isBn ? item.titleBn : item.titleEn}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                        loading="lazy"
                      />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                        <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-white/95 backdrop-blur-md text-slate-800 shadow-sm border border-slate-100 flex items-center space-x-1">
                          {item.isVideo ? (
                            <Video size={12} className="text-[#DE1F26]" />
                          ) : (
                            <Sparkles size={12} className="text-[#008744]" />
                          )}
                          <span>
                            {isBn ? item.categoryLabelBn : item.categoryLabelEn}
                          </span>
                        </span>

                        {item.featured && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 shadow-sm">
                            ★ Featured
                          </span>
                        )}
                      </div>

                      {/* Video Play Overlay Button */}
                      {item.isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all">
                          <div className="w-14 h-14 rounded-full bg-[#DE1F26] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                            <Play size={22} className="ml-1 fill-white" />
                          </div>
                        </div>
                      )}

                      {/* Hover Overlay Preview Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div className="text-white text-xs font-semibold flex items-center space-x-1.5 drop-shadow">
                          <Maximize2 size={14} />
                          <span>
                            {item.isVideo
                              ? isBn
                                ? "ভিডিও প্লে করুন"
                                : "Play Video Reel"
                              : isBn
                              ? "ফুলস্ক্রিন দেখুন"
                              : "Click to Expand HD"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content & Details */}
                    <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between bg-white">
                      <div className="space-y-2">
                        {/* Date & Location */}
                        <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} className="text-[#008744]" />
                            {item.date}
                          </span>
                          <span className="flex items-center gap-1 max-w-[50%] truncate text-right">
                            <MapPin size={12} className="text-rose-500 flex-shrink-0" />
                            <span className="truncate">
                              {isBn ? item.locationBn : item.locationEn}
                            </span>
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-[#008744] transition-colors line-clamp-2 leading-snug">
                          {isBn ? item.titleBn : item.titleEn}
                        </h3>

                        {/* Description */}
                        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          {isBn ? item.descBn : item.descEn}
                        </p>
                      </div>

                      {/* Card Footer: Tags & Like Interaction */}
                      <div className="pt-3.5 mt-3 border-t border-slate-100 flex items-center justify-between">
                        {/* Tags Preview */}
                        <div className="flex items-center space-x-1 overflow-hidden">
                          {item.tags.slice(0, 2).map((t, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[10px] font-semibold truncate"
                            >
                              #{t}
                            </span>
                          ))}
                        </div>

                        {/* Like Button */}
                        <button
                          onClick={(e) => handleLike(e, item.id)}
                          className={`flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                            isLiked
                              ? "bg-rose-50 text-[#DE1F26] border border-rose-200"
                              : "text-slate-500 hover:bg-slate-100 hover:text-rose-600"
                          }`}
                          title="Like this moment"
                        >
                          <Heart
                            size={14}
                            className={isLiked ? "fill-[#DE1F26]" : ""}
                          />
                          <span>{likeCount}</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </section>

        {/* ================= STUDENT MEMORY WALL & TOUR BANNER ================= */}
        <section className="bg-gradient-to-r from-emerald-900 via-[#072418] to-slate-900 text-white py-14 sm:py-18 relative overflow-hidden my-10">
          <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="px-3.5 py-1.5 rounded-full bg-emerald-400/15 border border-emerald-400/30 text-emerald-300 text-xs font-extrabold uppercase tracking-wider inline-flex items-center gap-1.5">
                  <Users size={14} />
                  {isBn ? "ইউএস সফটওয়্যার কমিউনিটি" : "US Software Community"}
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                  {isBn
                    ? "আপনিও কি আমাদের সাথে শিখতে চান?"
                    : "Want to Learn & Grow with Us?"}
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                  {isBn
                    ? "আমাদের প্র্যাকটিক্যাল ট্রেনিং কোর্সে যুক্ত হয়ে সরাসরি মেন্টরের গাইডেন্সে নিজের কোডিং ও টেকনিক্যাল স্কিল ডেভেলপ করুন।"
                    : "Join our hands-on training courses and build your programming and practical IT skills with dedicated mentor guidance."}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link href="/courses">
                    <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-6 py-3 rounded-xl font-black text-xs sm:text-sm shadow-lg hover:shadow-emerald-500/25 transition-all flex items-center space-x-2 cursor-pointer">
                      <span>{isBn ? "কোর্সসমূহ এক্সপ্লোর করুন" : "Explore All Courses"}</span>
                      <ArrowRight size={16} />
                    </button>
                  </Link>
                  <Link href="/contact">
                    <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm backdrop-blur-md transition-all cursor-pointer">
                      {isBn ? "আমাদের অফিস ভিজিট করুন" : "Visit Our Headquarter"}
                    </button>
                  </Link>
                </div>
              </div>

              {/* Memory Mini Showcase preview */}
              <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                <div className="space-y-3">
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-white/10">
                    <img
                      src="/images/about/about-students-1.png"
                      alt="Celebration"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-square shadow-md border border-white/10">
                    <img
                      src="/images/about/about-lab-session.png"
                      alt="Lab"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-3 pt-5">
                  <div className="rounded-2xl overflow-hidden aspect-square shadow-md border border-white/10">
                    <img
                      src="/images/about/about-mentors-focus.png"
                      alt="Mentors"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-white/10">
                    <img
                      src="/images/about/about-students-2.png"
                      alt="Tour"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= FULLSCREEN HD LIGHTBOX MODAL ================= */}
      <AnimatePresence>
        {activeLightboxIndex !== null && currentLightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl flex flex-col justify-between select-none"
            onClick={() => setActiveLightboxIndex(null)}
          >
            {/* Top Toolbar */}
            <div
              className="p-4 sm:p-6 flex items-center justify-between text-white border-b border-white/10 bg-black/40 relative z-20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-black">
                  {activeLightboxIndex + 1} / {filteredItems.length}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-200 hidden sm:block truncate max-w-md">
                  {isBn
                    ? currentLightboxItem.titleBn
                    : currentLightboxItem.titleEn}
                </h4>
              </div>

              {/* Action buttons */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                {/* Zoom Toggle */}
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  title={isZoomed ? "Zoom Out" : "Zoom In"}
                >
                  {isZoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
                </button>

                {/* Share Button */}
                <button
                  onClick={handleShare}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center space-x-1.5 cursor-pointer text-xs font-bold"
                  title="Share link"
                >
                  <Share2 size={18} />
                  {copiedShare && (
                    <span className="text-emerald-400 text-[11px]">
                      {isBn ? "কপিকৃত!" : "Copied!"}
                    </span>
                  )}
                </button>

                {/* Close Button */}
                <button
                  onClick={() => setActiveLightboxIndex(null)}
                  className="p-2 rounded-xl bg-rose-600/80 hover:bg-rose-600 text-white transition-colors cursor-pointer"
                  title="Close (Esc)"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Middle Container with Main Image & Prev/Next Arrows */}
            <div
              className="relative flex-grow flex items-center justify-center p-4 sm:p-8 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Arrow */}
              <button
                onClick={() =>
                  setActiveLightboxIndex((prev) =>
                    prev !== null
                      ? (prev - 1 + filteredItems.length) % filteredItems.length
                      : null
                  )
                }
                className="absolute left-3 sm:left-6 z-20 p-3 sm:p-4 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md transition-transform hover:scale-110 cursor-pointer"
                title="Previous photo (Left Arrow)"
              >
                <ChevronLeft size={26} />
              </button>

              {/* Next Arrow */}
              <button
                onClick={() =>
                  setActiveLightboxIndex((prev) =>
                    prev !== null ? (prev + 1) % filteredItems.length : null
                  )
                }
                className="absolute right-3 sm:right-6 z-20 p-3 sm:p-4 rounded-full bg-white/15 hover:bg-white/25 text-white backdrop-blur-md transition-transform hover:scale-110 cursor-pointer"
                title="Next photo (Right Arrow)"
              >
                <ChevronRight size={26} />
              </button>

              {/* Active Image with Animated Scale */}
              <motion.div
                key={currentLightboxItem.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: isZoomed ? 1.4 : 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className={`max-h-[70vh] sm:max-h-[75vh] max-w-full flex items-center justify-center transition-transform ${
                  isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <img
                  src={currentLightboxItem.imageUrl}
                  alt={
                    isBn
                      ? currentLightboxItem.titleBn
                      : currentLightboxItem.titleEn
                  }
                  className="max-h-[70vh] sm:max-h-[75vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
                />
              </motion.div>
            </div>

            {/* Bottom Caption & Thumbnails Strip */}
            <div
              className="p-4 sm:p-6 bg-gradient-to-t from-black via-black/80 to-transparent border-t border-white/10 text-white relative z-20 space-y-3"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-black text-emerald-300">
                    {isBn
                      ? currentLightboxItem.titleBn
                      : currentLightboxItem.titleEn}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1">
                    {isBn
                      ? currentLightboxItem.descBn
                      : currentLightboxItem.descEn}
                  </p>
                </div>

                <div className="flex items-center space-x-3 text-xs font-semibold text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} className="text-emerald-400" />
                    {currentLightboxItem.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={13} className="text-rose-400" />
                    {isBn
                      ? currentLightboxItem.locationBn
                      : currentLightboxItem.locationEn}
                  </span>
                </div>
              </div>

              {/* Thumbnails Navigation Row */}
              <div className="flex items-center justify-center space-x-2 overflow-x-auto py-1 scrollbar-none max-w-2xl mx-auto">
                {filteredItems.map((thumb, tIdx) => (
                  <button
                    key={thumb.id}
                    onClick={() => {
                      setActiveLightboxIndex(tIdx);
                      setIsZoomed(false);
                    }}
                    className={`relative w-12 h-10 sm:w-14 sm:h-11 rounded-lg overflow-hidden flex-shrink-0 transition-all cursor-pointer ${
                      tIdx === activeLightboxIndex
                        ? "ring-2 ring-emerald-400 scale-110 opacity-100"
                        : "opacity-40 hover:opacity-80"
                    }`}
                  >
                    <img
                      src={thumb.imageUrl}
                      alt="thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= VIDEO MODAL ================= */}
      <AnimatePresence>
        {activeVideoItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveVideoItem(null)}
          >
            <div
              className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between p-4 bg-slate-950 text-white border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <Play size={16} className="text-[#DE1F26] fill-[#DE1F26]" />
                  <span className="font-bold text-sm">
                    {isBn ? activeVideoItem.titleBn : activeVideoItem.titleEn}
                  </span>
                </div>
                <button
                  onClick={() => setActiveVideoItem(null)}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Video Embed Frame */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`${activeVideoItem.videoUrl}?autoplay=1`}
                  title={activeVideoItem.titleEn}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Caption */}
              <div className="p-4 bg-slate-950 text-slate-300 text-xs sm:text-sm">
                <p>
                  {isBn ? activeVideoItem.descBn : activeVideoItem.descEn}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
