"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle2, 
  MessageSquare, ChevronDown, HelpCircle, 
  Headphones, MessageCircle, ArrowRight
} from "lucide-react";

export default function ContactPage() {
  const { t, language } = useLanguage();
  const isEn = language === "en";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Full-Stack Development",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const faqs = [
    {
      q: isEn ? "How do I enroll in a course?" : "কোর্সে কীভাবে ভর্তি হব?",
      a: isEn ? "You can click 'Enroll Now' on any course page or submit the contact form above. Our academic advisor will contact you within 24 hours to guide you through admission and schedule." : "যেকোনো কোর্স পেইজ থেকে 'ভর্তি হন' বাটনে ক্লিক করুন অথবা ফর্মটি পূরণ করুন। আমাদের প্রতিনিধি ২৪ ঘণ্টার মধ্যে যোগাযোগ করে সম্পূর্ণ প্রক্রিয়া বুঝিয়ে দেবেন।"
    },
    {
      q: isEn ? "Are classes live or pre-recorded?" : "ক্লাসগুলো কি লাইভ হয় নাকি রেকর্ডেড?",
      a: isEn ? "All our masterclasses are 100% interactive live sessions with senior industry engineers. You also get lifetime access to all recorded sessions, code repositories, and LMS resources." : "আমাদের সবগুলো ক্লাস ১০০% ইন্টারেক্টিভ লাইভ সেশন। এছাড়া প্রতিটি ক্লাসের হাই-কোয়ালিটি রেকর্ডিং এবং প্রজেক্ট সোর্স কোডের আজীবন এক্সেস পাবেন।"
    },
    {
      q: isEn ? "Do you offer job placement support?" : "কোর্স শেষে কি চাকরির নিশ্চয়তা বা ইন্টার্নশিপ সুবিধা আছে?",
      a: isEn ? "Yes! We have an active hiring network with 120+ top tech companies. Top performers get direct interview referrals, resume optimization, and paid internship opportunities." : "হ্যাঁ! আমাদের ১২০+ শীর্ষ সফটওয়্যার কোম্পানির সাথে প্লেসমেন্ট পার্টনারশিপ রয়েছে। কোর্স সফলভাবে সম্পন্নকারীদের সরাসরি ইন্টারভিউ রেফারেল ও ইন্টার্নশিপ প্রদান করা হয়।"
    },
    {
      q: isEn ? "Can I pay in installments?" : "কোর্স ফি কি কিস্তিতে দেওয়ার সুবিধা আছে?",
      a: isEn ? "Yes, we offer flexible 2 to 3-month installment plans with zero extra charges for all our professional programs." : "হ্যাঁ, যেকোনো প্রফেশনাল প্রোগ্রামে ২ থেকে ৩ মাসের সহজ কিস্তিতে ফি পরিশোধের সুযোগ রয়েছে।"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col">
      <Header />

      <main className="flex-grow pt-6 pb-24">
        
        {/* CONTACT CONCIERGE 2-COLUMN HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#08121a] via-[#0b1e19] to-[#050b10] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 border-b border-slate-800">
          <div className="absolute -top-24 -right-24 w-[36rem] h-[36rem] bg-[#008744]/20 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-[36rem] h-[36rem] bg-[#DE1F26]/15 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="max-w-[96rem] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column (7 Cols) */}
              <div className="lg:col-span-7">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center space-x-2 bg-[#008744]/15 border border-[#008744]/35 rounded-full px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-wider text-emerald-300"
                >
                  <Headphones size={14} className="text-[#DE1F26]" />
                  <span>{t.contactPage?.badge || "LET'S TALK"}</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 }}
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-tight mb-6"
                >
                  {t.contactPage?.title || "Get in Touch with Our Team"}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-base sm:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed font-normal"
                >
                  {t.contactPage?.subtitle || "Have questions about our programs, corporate training, or custom software solutions? We are here to help."}
                </motion.p>

                {/* Live Status Chip */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22 }}
                  className="inline-flex items-center space-x-2.5 bg-[#008744]/15 border border-[#008744]/35 px-4 py-2.5 rounded-full text-xs font-bold text-emerald-300"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#008744] animate-ping" />
                  <span>{isEn ? "🟢 Concierge Online — Average response in 15 mins" : "🟢 অনলাইন ডেস্ক — ১৫ মিনিটের মধ্যে রেসপন্স"}</span>
                </motion.div>
              </div>

              {/* Right Column: Direct Quick Connect Card (5 Cols) */}
              <div className="lg:col-span-5">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/10 backdrop-blur-2xl rounded-3xl p-7 border border-white/20 shadow-2xl space-y-4 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-emerald-400">Direct Support Hotline</span>
                    <span className="text-[10px] text-slate-300 font-mono">DHAKA HQ</span>
                  </div>

                  <div className="space-y-3">
                    <a
                      href="https://wa.me/8801800000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 bg-[#008744]/20 hover:bg-[#008744]/30 border border-[#008744]/40 rounded-2xl flex items-center justify-between transition-all group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-[#008744] text-white flex items-center justify-center">
                          <MessageCircle size={20} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{isEn ? "Instant WhatsApp Chat" : "ইনস্ট্যান্ট হোয়াটসঅ্যাপ চ্যাট"}</div>
                          <div className="text-[11px] text-emerald-300 font-mono">+880 1800-000000</div>
                        </div>
                      </div>
                      <ArrowRight size={16} className="text-emerald-400 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="p-3.5 bg-black/30 rounded-2xl border border-white/5 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-[#DE1F26]/20 text-[#DE1F26] flex items-center justify-center">
                          <Phone size={18} />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{isEn ? "Admissions Hotline" : "ভর্তি সংক্রান্ত হেল্পলাইন"}</div>
                          <div className="text-[11px] text-rose-300 font-mono">+880 1700-000000</div>
                        </div>
                      </div>
                      <span className="text-[10px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-md font-mono">9 AM - 8 PM</span>
                    </div>
                  </div>

                  <div className="pt-2 text-center text-xs text-slate-300 font-mono flex items-center justify-center gap-1.5">
                    <MapPin size={13} className="text-[#008744]" />
                    <span>Level 7, Innovation Tower, Panthapath, Dhaka</span>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* MAIN CONTACT CHANNELS & FORM */}
        <section className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 -mt-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT 5 COLS: CONTACT CHANNELS */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* WhatsApp & Helpline Card */}
              <motion.div
                whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.15 } }}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(0,135,68,0.15)] hover:border-[#008744]/80 transition-all duration-150 flex items-start space-x-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-[#008744] flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{t.contactPage?.helpline || "24/7 Helpline & WhatsApp"}</div>
                  <div className="text-lg font-black text-slate-900 mt-1">+880 1800-000000</div>
                  <div className="text-xs text-[#008744] font-semibold mt-0.5">+880 1700-000000 (Admissions Desk)</div>
                </div>
              </motion.div>

              {/* Email Support Card */}
              <motion.div
                whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.15 } }}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(222,31,38,0.15)] hover:border-[#DE1F26]/80 transition-all duration-150 flex items-start space-x-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-[#DE1F26] flex items-center justify-center flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{isEn ? "Official Email Inquiries" : "অফিসিয়াল ইমেইল"}</div>
                  <div className="text-lg font-black text-slate-900 mt-1">contact@ussoftwareltd.com</div>
                  <div className="text-xs text-slate-500 font-medium">support@ussoftwareltd.com</div>
                </div>
              </motion.div>

              {/* Physical Office Card */}
              <motion.div
                whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.15 } }}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(0,135,68,0.15)] hover:border-[#008744]/80 transition-all duration-150 flex items-start space-x-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-[#008744] flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{isEn ? "Innovation Hub & Office" : "অফিস ও ইনোভেশন ল্যাব"}</div>
                  <div className="text-lg font-black text-slate-900 mt-1">Dhaka, Bangladesh</div>
                  <div className="text-xs text-slate-500 leading-relaxed mt-0.5 font-normal">
                    {isEn ? "Level 7, Innovation Tower, Panthapath, Dhaka-1205" : "লেভেল ৭, ইনোভেশন টাওয়ার, পান্থপথ, ঢাকা-১২০৫"}
                  </div>
                </div>
              </motion.div>

              {/* Working Hours Card */}
              <motion.div
                whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.15 } }}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-[0_6px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(222,31,38,0.15)] hover:border-[#DE1F26]/80 transition-all duration-150 flex items-start space-x-4 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-[#DE1F26] flex items-center justify-center flex-shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{t.contactPage?.officeHours || "Office Hours"}</div>
                  <div className="text-lg font-black text-slate-900 mt-1">
                    {isEn ? "Saturday – Thursday" : "শনিবার – বৃহস্পতিবার"}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">9:00 AM – 8:00 PM (GMT+6)</div>
                </div>
              </motion.div>

            </div>

            {/* RIGHT 7 COLS: INTERACTIVE FORM */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-[0_12px_35px_rgba(0,0,0,0.06)] relative overflow-hidden">
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-100 text-[#008744] flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3">
                      {isEn ? "Message Received!" : "বার্তাটি সফলভাবে পৌঁছেছে!"}
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-8 font-normal">
                      {t.contactPage?.successMessage || "Thank you! Your message has been sent successfully. Our team will contact you shortly."}
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", phone: "", subject: "Full-Stack Development", message: "" });
                      }}
                      className="bg-[#008744] hover:bg-[#007038] text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow-md cursor-pointer"
                    >
                      {isEn ? "Send Another Message" : "আরেকটি বার্তা পাঠান"}
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <div className="flex items-center space-x-2 text-xs font-bold text-[#008744] uppercase tracking-wider mb-1">
                        <MessageSquare size={14} />
                        <span>{isEn ? "Direct Concierge Form" : "ইনকোয়ারি ফর্ম"}</span>
                      </div>
                      <h2 className="text-2xl font-black text-slate-900">
                        {isEn ? "Send Us a Direct Message" : "সরাসরি বার্তা পাঠান"}
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          {t.contactPage?.formName || "Full Name"} *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={isEn ? "e.g. John Doe" : "আপনার নাম"}
                          className="w-full bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#008744] focus:border-transparent focus:bg-white transition-all font-normal"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          {t.contactPage?.formEmail || "Email Address"} *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#008744] focus:border-transparent focus:bg-white transition-all font-normal"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          {t.contactPage?.formPhone || "Phone Number"}
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+880 1..."
                          className="w-full bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#008744] focus:border-transparent focus:bg-white transition-all font-normal"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          {t.contactPage?.formSubject || "Subject / Track of Interest"}
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200/90 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#008744] focus:border-transparent focus:bg-white transition-all font-normal cursor-pointer"
                        >
                          <option value="Full-Stack Web Development">{isEn ? "Enterprise Full-Stack Web" : "ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট"}</option>
                          <option value="Generative AI & LLMs">{isEn ? "Generative AI & LLMs" : "জেনারেটিভ এআই ও এলএলএম"}</option>
                          <option value="DevOps & Cloud Architecture">{isEn ? "Cloud & DevOps Architecture" : "ডেভঅপ্স ও ক্লাউড আর্কিটেকচার"}</option>
                          <option value="Cross-Platform Mobile Apps">{isEn ? "Cross-Platform Mobile Apps" : "মোবাইল অ্যাপস"}</option>
                          <option value="Corporate Software Solutions">{isEn ? "Corporate Custom Software" : "কর্পোরেট সফটওয়্যার সলিউশন"}</option>
                          <option value="Other">{isEn ? "Other Inquiry" : "অন্যান্য তথ্য"}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {t.contactPage?.formMessage || "How can we help you?"} *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={isEn ? "Tell us about your requirements or learning goals..." : "আপনার প্রশ্ন বা প্রয়োজনীয় তথ্য লিখুন..."}
                        className="w-full bg-slate-50 border border-slate-200/90 rounded-xl p-4 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#008744] focus:border-transparent focus:bg-white transition-all font-normal resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#008744] hover:bg-[#007038] text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-[#008744]/25 flex items-center justify-center space-x-2 transition-all cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>{isEn ? "Sending Message..." : "পাঠানো হচ্ছে..."}</span>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>{t.contactPage?.submitBtn || "Send Message"}</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 mt-16 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#008744] uppercase tracking-wider mb-2">
              <HelpCircle size={14} />
              <span>{isEn ? "Common Questions" : "সাধারণ প্রশ্নোত্তর"}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mb-3">
              {isEn ? "Frequently Asked Questions" : "সচরাচর জিজ্ঞাসিত প্রশ্নাবলী"}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:border-[#008744]/50 transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between font-bold text-slate-800 text-sm sm:text-base cursor-pointer hover:text-[#008744] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={18} className={`text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#008744]" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
