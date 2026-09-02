"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { EVENTS_DATA, EventItem } from "@/data/eventsData";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  X,
  Share2,
  Ticket,
  Video,
  Send,
  HelpCircle,
  ExternalLink,
  ChevronDown,
  ShieldCheck,
  Flame,
} from "lucide-react";

export default function EventsPage() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const [activeFilter, setActiveFilter] = useState<"all" | "upcoming" | "completed">("all");
  const [selectedEventForReg, setSelectedEventForReg] = useState<EventItem | null>(null);
  const [regForm, setRegForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "AI & Full-Stack",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState<{ [key: number]: boolean }>({ 0: true });

  const filteredEvents = EVENTS_DATA.filter((evt) => {
    if (activeFilter === "all") return true;
    return evt.status === activeFilter;
  });

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetModal = () => {
    setSelectedEventForReg(null);
    setIsSubmitted(false);
    setRegForm({ name: "", email: "", phone: "", interest: "AI & Full-Stack" });
  };

  const toggleFaq = (index: number) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const faqs = [
    {
      qEn: "Are these workshops and masterclasses free to attend?",
      qBn: "এই ওয়ার্কশপ ও মাস্টারক্লাসগুলোতে কি ফ্রিতে অংশ নেওয়া যাবে?",
      aEn: "Yes! Most of our introductory masterclasses, hackathons, and webinars are 100% free of cost with prior registration. Space is limited per session.",
      aBn: "হ্যাঁ! আমাদের বেশিরভাগ প্রযুক্তি সেমিনার, ওয়েবিনার ও হ্যাক্যাথন সম্পূর্ণ ফ্রি। তবে প্রতিটি সেশনে আসন সংখ্যা সীমিত হওয়ায় পূর্বে রেজিস্ট্রেশন আবশ্যক।",
    },
    {
      qEn: "Will I get a verified Certificate of Participation?",
      qBn: "অংশগ্রহণ করার পর কি ভেরিফায়েড সার্টিফিকেট প্রদান করা হবে?",
      aEn: "Yes, every registered attendee who completes the live workshop and coding tasks will receive an official verifiable digital certificate from US Software LTD.",
      aBn: "হ্যাঁ, লাইভ ওয়ার্কশপ ও ট্যাক্স সম্পন্নকারী প্রত্যেক অংশগ্রহণকারীকে ইউএস সফটওয়্যার লিমিটেডের পক্ষ থেকে ভেরিফায়েড ডিজিটাল সার্টিফিকেট দেওয়া হয়।",
    },
    {
      qEn: "Can absolute beginners or university students join?",
      qBn: "একদম নতুন বা বিশ্ববিদ্যালয়ের শিক্ষার্থীরা কি জয়েন করতে পারবে?",
      aEn: "Absolutely! Our events are crafted for both university students aiming for tech jobs and junior engineers seeking senior architecture mentorship.",
      aBn: "অবশ্যই! আমাদের প্রতিটি সেশন এমনভাবে ডিজাইন করা হয় যাতে শিক্ষার্থী ও ডেভেলপার উভয়ই ইন্ডাস্ট্রি লেভেলের বাস্তব অভিজ্ঞতা অর্জন করতে পারে।",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafcff] text-slate-900 flex flex-col selection:bg-emerald-500 selection:text-white">
      <Header />

      <main className="flex-grow">
        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-slate-900 via-[#0a1a2b] to-[#040e18] text-white overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#008744]/20 rounded-full blur-3xl pointer-events-none -z-0" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#DE1F26]/15 rounded-full blur-3xl pointer-events-none -z-0" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />

          <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-300 mb-6">
              <Link href="/" className="hover:text-emerald-400 transition-colors">
                {isBn ? "হোম" : "Home"}
              </Link>
              <span>/</span>
              <span className="text-emerald-400 font-bold">
                {isBn ? "ইভেন্টস ও ওয়ার্কশপ" : "Events & Workshops"}
              </span>
            </div>

            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-extrabold tracking-wide backdrop-blur-md">
                <Flame size={14} className="text-[#DE1F26] animate-pulse" />
                <span>{isBn ? "শীর্ষস্থানীয় টেক সামিট ও হ্যাক্যাথন" : "Premier Tech Summits & Hackathons"}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                {isBn ? (
                  <>
                    আগামীর প্রযুক্তি শিখুন{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                      লাইভ ইভেন্টস ও ওয়ার্কশপে
                    </span>
                  </>
                ) : (
                  <>
                    Upgrade Your Skills with{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                      Live Tech Summits
                    </span>
                  </>
                )}
              </h1>

              <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed">
                {isBn
                  ? "শীর্ষস্থানীয় সফটওয়্যার ইঞ্জিনিয়ার ও এআই স্পেশালিস্টদের সাথে সরাসরি যুক্ত হোন। লাইভ প্রজেক্ট বিল্ডিং, হ্যাক্যাথন ও নেটওয়ার্কিংয়ের অনন্য প্ল্যাটফর্ম।"
                  : "Connect directly with top software engineers, AI architects, and industry leaders. Experience hands-on live code demos, national hackathons, and high-impact career sessions."}
              </p>
            </div>
          </div>
        </section>

        {/* ================= FILTER TABS ================= */}
        <section className="sticky top-[58px] sm:top-[68px] z-30 bg-white/90 backdrop-blur-xl border-b border-slate-200 py-3">
          <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {[
                { id: "all", labelEn: "All Events", labelBn: "সকল ইভেন্ট" },
                { id: "upcoming", labelEn: "Upcoming", labelBn: "আসন্ন ইভেন্ট" },
                { id: "completed", labelEn: "Completed Recap", labelBn: "সম্পন্ন আর্কাইভ" },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeFilter === f.id
                      ? "bg-[#008744] text-white shadow-md"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {isBn ? f.labelBn : f.labelEn}
                </button>
              ))}
            </div>

            <Link href="/gallery" className="hidden sm:inline-flex items-center space-x-1.5 text-xs font-bold text-[#008744] hover:underline">
              <span>{isBn ? "ইভেন্ট ফটো গ্যালারি দেখুন" : "View Event Photo Gallery"}</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* ================= EVENT CARDS LIST ================= */}
        <section className="py-10 sm:py-16 max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="space-y-8">
            {filteredEvents.map((evt, idx) => {
              const seatPercent = Math.min(100, Math.round((evt.seatBooked / evt.seatTotal) * 100));

              return (
                <motion.div
                  key={evt.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_36px_rgba(0,135,68,0.12)] transition-all overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
                >
                  {/* Left Column: Image Banner & Category */}
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full overflow-hidden bg-slate-900">
                    <img
                      src={evt.coverImage}
                      alt={isBn ? evt.titleBn : evt.titleEn}
                      className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <span
                        className={`px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-sm ${
                          evt.status === "upcoming"
                            ? "bg-emerald-500 text-white"
                            : "bg-slate-700/90 text-slate-200"
                        }`}
                      >
                        {evt.status === "upcoming"
                          ? isBn
                            ? "● আসন্ন ইভেন্ট"
                            : "● UPCOMING"
                          : isBn
                          ? "সম্পন্ন"
                          : "CONCLUDED"}
                      </span>
                    </div>

                    {/* Speaker Info in overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white flex items-center space-x-3 bg-black/40 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-emerald-400 flex-shrink-0 bg-slate-800">
                        <img
                          src={evt.speakerAvatar}
                          alt="Speaker"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold truncate">
                          {isBn ? evt.speakerBn : evt.speakerEn}
                        </div>
                        <div className="text-[11px] text-emerald-300 truncate">
                          {isBn ? evt.speakerRoleBn : evt.speakerRoleEn}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Event Info & Registration CTA */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      {/* Meta Pills */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-semibold text-slate-600">
                        <span className="flex items-center gap-1.5 bg-emerald-50 text-[#008744] px-3 py-1.5 rounded-lg border border-emerald-200/80 font-bold">
                          <Calendar size={14} />
                          {evt.date}
                        </span>
                        <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg text-slate-700">
                          <Clock size={14} className="text-slate-500" />
                          {isBn ? evt.timeBn : evt.timeEn}
                        </span>
                        <span className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-lg text-slate-700">
                          <MapPin size={14} className="text-rose-500" />
                          {isBn ? evt.venueBn : evt.venueEn}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-lg sm:text-2xl font-black text-slate-900 leading-snug hover:text-[#008744] transition-colors">
                        {isBn ? evt.titleBn : evt.titleEn}
                      </h2>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {isBn ? evt.descBn : evt.descEn}
                      </p>

                      {/* Key Highlights Checklist */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                        {(isBn ? evt.highlightsBn : evt.highlightsEn).map((hl, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-center space-x-2 text-xs font-semibold text-slate-700"
                          >
                            <CheckCircle2 size={14} className="text-[#008744] flex-shrink-0" />
                            <span className="truncate">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA Row with Seat Progress Bar */}
                    <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      {/* Seat indicator */}
                      <div className="w-full sm:w-1/2 space-y-1.5">
                        <div className="flex justify-between text-xs font-bold text-slate-700">
                          <span>
                            {isBn ? "বুকিং প্রোগ্রেস:" : "Seats Reserved:"}
                          </span>
                          <span className="text-[#008744]">
                            {evt.seatBooked} / {evt.seatTotal} ({seatPercent}%)
                          </span>
                        </div>
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-emerald-500 to-[#008744] rounded-full transition-all duration-500"
                            style={{ width: `${seatPercent}%` }}
                          />
                        </div>
                      </div>

                      {/* Action Button */}
                      {evt.status === "upcoming" ? (
                        <button
                          onClick={() => setSelectedEventForReg(evt)}
                          className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#008744] to-[#056839] hover:from-[#007038] hover:to-[#04522d] text-white rounded-xl font-extrabold text-xs sm:text-sm shadow-[0_4px_14px_rgba(0,135,68,0.3)] flex items-center justify-center space-x-2 cursor-pointer transition-all hover:scale-102"
                        >
                          <Ticket size={16} />
                          <span>{isBn ? "ফ্রি রেজিস্ট্রেশন করুন" : "Register For Free"}</span>
                        </button>
                      ) : (
                        <Link href="/gallery" className="w-full sm:w-auto">
                          <button className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all cursor-pointer">
                            <span>{isBn ? "ইভেন্ট ফটো দেখুন" : "View Photo Highlights"}</span>
                            <ArrowRight size={15} />
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        <section className="py-14 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center space-y-2 mb-10">
              <h3 className="text-2xl font-black text-slate-900">
                {isBn ? "সচরাচর জিজ্ঞাসিত প্রশ্নাবলী (FAQ)" : "Frequently Asked Questions"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                {isBn
                  ? "ইভেন্ট ও ওয়ার্কশপে অংশগ্রহণ সংক্রান্ত প্রয়োজনীয় তথ্যাবলী"
                  : "Everything you need to know about joining our events and workshops"}
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, fIdx) => {
                const isOpen = !!faqOpen[fIdx];
                return (
                  <div
                    key={fIdx}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
                  >
                    <button
                      onClick={() => toggleFaq(fIdx)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between text-left font-bold text-slate-800 text-sm sm:text-base hover:text-[#008744] transition-colors cursor-pointer"
                    >
                      <span>{isBn ? faq.qBn : faq.qEn}</span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 text-slate-400 ${
                          isOpen ? "rotate-180 text-emerald-600" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {isBn ? faq.aBn : faq.aEn}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* ================= REGISTRATION MODAL ================= */}
      <AnimatePresence>
        {selectedEventForReg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={resetModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={resetModal}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 cursor-pointer"
              >
                <X size={18} />
              </button>

              {isSubmitted ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#008744] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900">
                    {isBn ? "রেজিস্ট্রেশন সফল হয়েছে!" : "Registration Successful!"}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                    {isBn
                      ? "আপনার সিট নিশ্চিত করা হয়েছে। বিস্তারিত তথ্য ও ভেন্যু/অনলাইন ইনভাইটেশন আপনার হোয়াটসঅ্যাপ ও ইমেইলে পাঠিয়ে দেওয়া হয়েছে।"
                      : "Your seat is confirmed! An invitation pass and session link have been sent to your registered WhatsApp and email."}
                  </p>
                  <button
                    onClick={resetModal}
                    className="mt-4 px-6 py-2.5 bg-[#008744] text-white rounded-xl font-bold text-xs shadow-md cursor-pointer hover:bg-[#007038]"
                  >
                    {isBn ? "ঠিক আছে" : "Done"}
                  </button>
                </div>
              ) : (
                <div>
                  <div className="mb-5">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#008744] border border-emerald-200 text-[11px] font-bold">
                      {isBn ? "ফ্রি ইভেন্ট পাস" : "Free Event Pass"}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-2 leading-tight">
                      {isBn
                        ? selectedEventForReg.titleBn
                        : selectedEventForReg.titleEn}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {selectedEventForReg.date} • {isBn ? selectedEventForReg.timeBn : selectedEventForReg.timeEn}
                    </p>
                  </div>

                  <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {isBn ? "আপনার পুরো নাম" : "Your Full Name"} *
                      </label>
                      <input
                        type="text"
                        required
                        value={regForm.name}
                        onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
                        placeholder={isBn ? "উদা: রাহিম আহমেদ" : "e.g. John Doe"}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {isBn ? "ইমেইল অ্যাড্রেস" : "Email Address"} *
                      </label>
                      <input
                        type="email"
                        required
                        value={regForm.email}
                        onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {isBn ? "হোয়াটসঅ্যাপ / ফোন নম্বর" : "WhatsApp / Phone Number"} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={regForm.phone}
                        onChange={(e) => setRegForm({ ...regForm, phone: e.target.value })}
                        placeholder="+880 1XXXXXXXXX"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-[#008744] to-[#056839] text-white font-black text-xs sm:text-sm rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all cursor-pointer flex items-center justify-center space-x-1.5"
                    >
                      <Send size={15} />
                      <span>{isBn ? "সিট কনফার্ম করুন" : "Confirm My Free Seat"}</span>
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
