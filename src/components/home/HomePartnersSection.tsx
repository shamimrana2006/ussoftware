"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Handshake, Award, X, CheckCircle2, ExternalLink, ShieldCheck, Globe } from "lucide-react";

interface PartnerItem {
  id: string;
  name: string;
  nameBn: string;
  logo: string;
  category: "collaboration" | "member";
  subtitle?: string;
  subtitleBn?: string;
  description: string;
  descriptionBn: string;
  highlights: string[];
  highlightsBn: string[];
  website?: string;
}

export default function HomePartnersSection() {
  const { language } = useLanguage();
  const isEn = language === "en";
  const [activeTab, setActiveTab] = useState<"collaboration" | "member">("collaboration");
  const [selectedPartner, setSelectedPartner] = useState<PartnerItem | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPartner(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const partners: PartnerItem[] = [
    // 1. Collaboration Partners
    {
      id: "nsda",
      name: "NSDA - Prime Minister's Office",
      nameBn: "জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ (প্রধানমন্ত্রীর কার্যালয়)",
      logo: "/our partner/us-software-ltd-268073-জাতীয়_দক্ষতা_উন্নয়ন_কর্তৃপক্ষ.webp",
      category: "collaboration",
      subtitle: "National Skills Development Authority",
      subtitleBn: "দক্ষতা উন্নয়ন কর্তৃপক্ষ",
      description: "Official collaboration with the National Skills Development Authority (Prime Minister's Office, Bangladesh) to deliver government-aligned technical competency standards and national certifications.",
      descriptionBn: "প্রধানমন্ত্রীর কার্যালয়ের অধীনস্থ জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ (NSDA)-এর সাথে সরাসরি অংশীদারিত্বে আন্তর্জাতিক মানের ন্যাশনাল স্কিল স্ট্যান্ডার্ড কারিকুলাম ও ভেরিফাইড সনদ প্রদান করা হয়।",
      highlights: [
        "Government recognized competency benchmarks",
        "National Qualification Framework (NQF) alignment",
        "Direct access to national skill assessment & certification"
      ],
      highlightsBn: [
        "সরকারি স্বীকৃতিপ্রাপ্ত কারিগরি কারিকুলাম",
        "জাতীয় স্কিল ফ্রেমওয়ার্ক (NQF) অনুযায়ী প্রশিক্ষণ",
        "এনএসডিএ ভেরিফাইড স্কিল অ্যাসেসমেন্ট সুবিধা"
      ],
      website: "https://nsda.gov.bd"
    },
    {
      id: "ict",
      name: "ICT Division Bangladesh",
      nameBn: "তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ (গণপ্রজাতন্ত্রী বাংলাদেশ সরকার)",
      logo: "/our partner/us-software-ltd-399754-favicon_2x.webp",
      category: "collaboration",
      subtitle: "Ministry of Posts, Telecommunications & IT",
      subtitleBn: "আইসিটি বিভাগ",
      description: "Strategic joint initiatives with the ICT Division to build high-end software engineering capability, AI readiness, and youth employment in digital economy exports.",
      descriptionBn: "তথ্য ও যোগাযোগ প্রযুক্তি বিভাগের সাথে যৌথ উদ্যোগে অ্যাডভান্সড সফটওয়্যার ইঞ্জিনিয়ারিং, এআই স্কিলস ও ডিজিটাল অর্থনীতিতে উচ্চ বেতনের কর্মসংস্থান তৈরির লক্ষ্যে কার্যক্রম পরিচালিত হয়।",
      highlights: [
        "Digital Bangladesh & Smart Bangladesh roadmap alignment",
        "Specialized industry training and internship tracks",
        "Tech startup mentorship and national contest participation"
      ],
      highlightsBn: [
        "স্মার্ট বাংলাদেশ বিনির্মাণে আইসিটি স্কিল ডেভেলপমেন্ট",
        "বিশেষায়িত ইন্ডাস্ট্রি ট্রেইনিং ও ইন্টার্নশিপ সুযোগ",
        "জাতীয় পর্যায়ের টেক প্রজেক্ট ও মেন্টরশিপ সাপোর্ট"
      ],
      website: "https://ictd.gov.bd"
    },
    {
      id: "iit-du",
      name: "IIT - University of Dhaka",
      nameBn: "ইনস্টিটিউট অব ইনফরমেশন টেকনোলজি, ঢাকা বিশ্ববিদ্যালয়",
      logo: "/our partner/us-software-ltd-472875-images (1).webp",
      category: "collaboration",
      subtitle: "Institute of Information Technology, DU",
      subtitleBn: "একাডেমিক ও গবেষণা পার্টনার",
      description: "Academic synergy and joint workshops with the Institute of Information Technology (IIT), University of Dhaka for software engineering best practices and guest research lectures.",
      descriptionBn: "ঢাকা বিশ্ববিদ্যালয়ের ইনস্টিটিউট অব ইনফরমেশন টেকনোলজি (IIT)-এর সাথে একাডেমিক সেমিনার, অ্যাডভান্সড কোডিং কর্মশালা এবং গবেষণাভিত্তিক সফটওয়্যার ইঞ্জিনিয়ারিং কোলাবোরেশন।",
      highlights: [
        "Academic workshops and software engineering best practices",
        "Guest mentor sessions by leading academic researchers",
        "Code quality and algorithmic problem-solving seminars"
      ],
      highlightsBn: [
        "একাডেমিক কর্মশালা ও সফটওয়্যার ইঞ্জিনিয়ারিং স্ট্যান্ডার্ড",
        "ঢাবি শিক্ষকদের বিশেষ অতিথি লেকচার ও মেন্টরিং",
        "অ্যালগরিদম ও কোড কোয়ালিটি নিশ্চিতকরণ সেমিনার"
      ],
      website: "https://www.iit.du.ac.bd"
    },
    {
      id: "edge",
      name: "EDGE Project (BCC)",
      nameBn: "এনহ্যান্সিং ডিজিটাল গভর্নমেন্ট অ্যান্ড ইকোনমি (EDGE) প্রজেক্ট",
      logo: "/our partner/us-software-ltd-622849-images.webp",
      category: "collaboration",
      subtitle: "Enhancing Digital Gov & Economy",
      subtitleBn: "ডিজিটাল ইকোনমি প্রজেক্ট",
      description: "Collaboration with the World Bank funded EDGE project under BCC to produce export-ready tech talents in fullstack engineering, cloud architecture, and cybersecurity.",
      descriptionBn: "বিশ্বব্যাংক সহায়তাপুষ্ট ও বিসিসি পরিচালিত EDGE প্রকল্পের আওতায় আন্তর্জাতিক সফটওয়্যার বাজারে নিয়োগযোগ্য ফুলস্ট্যাক ডেভেলপার ও সাইবার নিরাপত্তা বিশেষজ্ঞ তৈরিতে সহায়তা।",
      highlights: [
        "World Bank backed tech capability framework",
        "Export-oriented software development workflows",
        "Direct hiring access for top tier government & enterprise IT roles"
      ],
      highlightsBn: [
        "আন্তর্জাতিক মানের এক্সপোর্ট-রেডি সফটওয়্যার কারিকুলাম",
        "টপ-টিয়ার আইটি কোম্পানিতে অগ্রাধিকারভিত্তিক নিয়োগ সংযোগ",
        "গ্লোবাল রিমোট জবের জন্য প্রফেশনাল গ্রুমিং"
      ],
      website: "https://edge.gov.bd"
    },
    {
      id: "bcc",
      name: "Bangladesh Computer Council",
      nameBn: "বাংলাদেশ কম্পিউটার কাউন্সিল (BCC)",
      logo: "/our partner/us-software-ltd-626288-images.webp",
      category: "collaboration",
      subtitle: "Statutory Body for Information Technology",
      subtitleBn: "বাংলাদেশ কম্পিউটার কাউন্সিল",
      description: "Partnership with Bangladesh Computer Council for IT workforce enhancement, industry skills testing, and enterprise training standards across diverse tech domains.",
      descriptionBn: "বাংলাদেশ কম্পিউটার কাউন্সিলের সাথে আইটি মানবসম্পদ উন্নয়ন, প্রফেশনাল টেস্ট ফ্যাসিলিটি এবং এন্টারপ্রাইজ স্ট্যান্ডার্ড সফটওয়্যার ট্রেনিং নিয়ে দীর্ঘমেয়াদি পার্টনারশিপ।",
      highlights: [
        "National standard skill assessments and evaluations",
        "Specialized computing infrastructure integration",
        "Collaborative hackathons and skill validation programs"
      ],
      highlightsBn: [
        "জাতীয় মানের স্কিল টেস্ট ও স্ট্যান্ডার্ডাইজড মূল্যায়ন",
        "কম্পিউটিং ও আইটি ইনফ্রাস্ট্রাকচার সংক্রান্ত সহযোগিতা",
        "স্কিল ভ্যালিডেশন এবং জাতীয় টেক হ্যাকাথন সংযোগ"
      ],
      website: "https://bcc.gov.bd"
    },
    {
      id: "idb",
      name: "IDB-BISEW IT Scholarship",
      nameBn: "আইডিবি-বিআইএসইডব্লিউ আইটি স্কলারশিপ প্রোগ্রাম",
      logo: "/our partner/us-software-ltd-68966-idb-bisew.webp",
      category: "collaboration",
      subtitle: "Islamic Development Bank - BISEW",
      subtitleBn: "আইটি স্কলারশিপ প্রোগ্রাম",
      description: "Collaborative engagement with IDB-BISEW scholarship programs to empower meritorious students with industry-grade software engineering and enterprise placement.",
      descriptionBn: "মেধাবী শিক্ষার্থীদের বিশ্বমানের সফটওয়্যার ট্রেনিং ও কর্মসংস্থান নিশ্চিত করতে আইডিবি-বিআইএসইডব্লিউ আইটি স্কলারশিপ সংক্রান্ত পার্টনারশিপ ও গ্র্যাজুয়েট প্লেসমেন্ট।",
      highlights: [
        "Merit-based scholarship placement network",
        "Rigorous full-time immersion training modules",
        "Proven 90%+ career transition within 6 months"
      ],
      highlightsBn: [
        "স্কলারশিপ নেটওয়ার্ক ও মেধাভিত্তিক ক্যারিয়ার গ্রুমিং",
        "ফুল-টাইম হ্যান্ডস-অন ইন্ডাস্ট্রি প্রজেক্ট লার্নিং",
        "৬ মাসের মধ্যে ৯০%+ গ্র্যাজুয়েটদের চাকরি প্রাপ্তি"
      ],
      website: "https://idb-bisew.org"
    },
    {
      id: "prometric",
      name: "Prometric Authorized Test Center",
      nameBn: "প্রমেট্রিক অথরাইজড গ্লোবাল টেস্ট সেন্টার",
      logo: "/our partner/us-software-ltd-723199-Prometric-Logo-Black_Jpeg.webp",
      category: "collaboration",
      subtitle: "Global Exam & Certification Testing",
      subtitleBn: "গ্লোবাল এক্সাম সেন্টার",
      description: "Authorized testing facility partnership with Prometric, enabling students to sit for Microsoft, AWS, Oracle, Cisco, and other international professional vendor exams in-house.",
      descriptionBn: "প্রমেট্রিক অথরাইজড টেস্ট সেন্টার পার্টনারশিপের মাধ্যমে আমাদের শিক্ষার্থীরা মাইক্রোসফট, এডাব্লিউএস, ওরাকল, সিসকো সহ আন্তর্জাতিক ভেন্ডর এক্সামে সরাসরি অংশ নিতে পারেন।",
      highlights: [
        "In-house international testing facilities",
        "Global vendor credentials (Microsoft, AWS, Oracle, Cisco)",
        "Discounted exam voucher assistance for enrolled students"
      ],
      highlightsBn: [
        "ইন-হাউস আন্তর্জাতিক প্রফেশনাল এক্সাম সেন্টার সুবিধা",
        "গ্লোবাল ভেন্ডর সার্টিফিকেশন (Microsoft, AWS, Oracle)",
        "শিক্ষার্থীদের জন্য বিশেষ এক্সাম ভাউচার গাইডেন্স"
      ],
      website: "https://www.prometric.com"
    },
    {
      id: "academic-alliance",
      name: "University Innovation & Academic Alliance",
      nameBn: "ইউনিভার্সিটি ইনোভেশন ও একাডেমিক অ্যালায়েন্স",
      logo: "/our partner/us-software-ltd-659350-og_logo.webp",
      category: "collaboration",
      subtitle: "Higher Education Curriculum Bridge",
      subtitleBn: "একাডেমিক কারিকুলাম পার্টনার",
      description: "Active academic alliances with 20+ public & private universities to bridge the gap between academic computer science degrees and real-world production engineering.",
      descriptionBn: "২০টিরও বেশি সরকারি ও বেসরকারি বিশ্ববিদ্যালয়ের সাথে সমঝোতার মাধ্যমে অ্যাকাডেমিক সিএসই সিলেবাস এবং ইন্ডাস্ট্রির প্রোডাকশন সফটওয়্যার কাজের মধ্যে ব্যবধান দূর করা।",
      highlights: [
        "University credit transfer and final year capstone guidance",
        "Campus-to-corporate direct recruitment drives",
        "Hands-on GitHub repository reviews & live coding bootcamps"
      ],
      highlightsBn: [
        "বিশ্ববিদ্যালয়ের ফাইনাল ইয়ার ক্যাপস্টোন প্রজেক্ট মেন্টরিং",
        "ক্যাম্পাস রিক্রুটমেন্ট ড্রাইভ ও সরাসরি জব অফার",
        "লাইভ গিটহাব কোড রিভিউ ও ইন্ডাস্ট্রিয়াল বুটক্যাম্প"
      ],
      website: "https://ussoftwareltd.com"
    },

    // 2. Member Of
    {
      id: "ecab",
      name: "E-Commerce Association of Bangladesh (E-CAB)",
      nameBn: "ই-কমার্স অ্যাসোসিয়েশন অব বাংলাদেশ (E-CAB)",
      logo: "/our partner/us-software-ltd-893643-6761268fac232e-CAB logo.webp",
      category: "member",
      subtitle: "Official Corporate Member",
      subtitleBn: "কর্পোরেট মেম্বার",
      description: "Proud corporate member of E-CAB, fostering robust enterprise eCommerce systems, digital logistics platforms, and payment gateway infrastructure development.",
      descriptionBn: "ই-কমার্স অ্যাসোসিয়েশন অব বাংলাদেশ (E-CAB)-এর অফিসিয়াল মেম্বার হিসেবে ই-কমার্স প্রযুক্তি, লজিস্টিকস প্ল্যাটফর্ম ও ডিজিটাল পেমেন্ট সলিউশন নিয়ে কাজ করছি।",
      highlights: [
        "Active member of National E-Commerce Ecosystem",
        "E-Commerce software architecture and scalable cloud infrastructure",
        "Exclusive career network in leading online platforms"
      ],
      highlightsBn: [
        "জাতীয় ই-কমার্স ইকোসিস্টেমের সক্রিয় সদস্য",
        "স্কেলযোগ্য ই-কমার্স সফটওয়্যার ও পেমেন্ট আর্কিটেকচার",
        "ই-কমার্স কোম্পানিতে গ্র্যাজুয়েটদের রিক্রুটমেন্ট সুবিধা"
      ],
      website: "https://e-cab.net"
    },
    {
      id: "basis",
      name: "BASIS",
      nameBn: "বাংলাদেশ অ্যাসোসিয়েশন অব সফটওয়্যার অ্যান্ড ইনফরমেশন সার্ভিসেস (BASIS)",
      logo: "/our partner/us-software-ltd-626288-images.webp",
      category: "member",
      subtitle: "National Software Association Member",
      subtitleBn: "সফটওয়্যার ইন্ডাস্ট্রি মেম্বার",
      description: "Accredited member of BASIS, the national association representing Bangladesh's software and IT-enabled services (ITES) industry.",
      descriptionBn: "বাংলাদেশের শীর্ষ সফটওয়্যার ও আইটি শিল্প সমিতি BASIS-এর নিবন্ধিত সদস্য। সফটওয়্যার ইন্ডাস্ট্রির নীতি নির্ধারণ ও কর্মসংস্থান বৃদ্ধিতে সক্রিয় অংশীদার।",
      highlights: [
        "Accredited national software industry member",
        "Access to BASIS SoftExpo and global tech delegations",
        "Direct recruitment linkage with 1,500+ software companies"
      ],
      highlightsBn: [
        "জাতীয় সফটওয়্যার শিল্প সমিতির নিবন্ধিত সদস্য",
        "বেসিস সফটএক্সপো ও আন্তর্জাতিক ডেলিগেশনে অংশগ্রহণ",
        "১৫০০+ সফটওয়্যার কোম্পানিতে সরাসরি নিয়োগ লিংক"
      ],
      website: "https://basis.org.bd"
    },
    {
      id: "bacco",
      name: "BACCO",
      nameBn: "বাংলাদেশ অ্যাসোসিয়েশন অব কন্ট্যাক্ট সেন্টার অ্যান্ড আউটসোর্সিং (BACCO)",
      logo: "/our partner/us-software-ltd-399754-favicon_2x.webp",
      category: "member",
      subtitle: "Outsourcing Trade Body Member",
      subtitleBn: "আউটসোর্সিং ইন্ডাস্ট্রি মেম্বার",
      description: "Registered member of BACCO, enabling international business process outsourcing (BPO), remote IT operations, and international offshore software support.",
      descriptionBn: "BACCO-এর রেজিস্টার্ড সদস্য হিসেবে আন্তর্জাতিক আউটসোর্সিং, রিমোট আইটি অপারেশন এবং অফশোর সফটওয়্যার ইঞ্জিনিয়ারিং ক্যারিয়ারে সহায়তা প্রদান।",
      highlights: [
        "Offshore IT and global remote job placement",
        "BPO and Tech Support certification standards",
        "International client project management pipelines"
      ],
      highlightsBn: [
        "আন্তর্জাতিক রিমোট জব ও অফশোর আইটি ক্যারিয়ার সংযোগ",
        "গ্লোবাল সাপোর্ট ও ক্লাউড অপারেশন স্ট্যান্ডার্ড",
        "ক্লায়েন্ট প্রজেক্ট হ্যান্ডলিং ও স্পেশালাইজড ট্রেনিং"
      ],
      website: "https://bacco.org.bd"
    },
    {
      id: "bcs",
      name: "Bangladesh Computer Samity (BCS)",
      nameBn: "বাংলাদেশ কম্পিউটার সমিতি (BCS)",
      logo: "/our partner/us-software-ltd-268073-জাতীয়_দক্ষতা_উন্নয়ন_কর্তৃপক্ষ.webp",
      category: "member",
      subtitle: "Apex ICT Trade Association Member",
      subtitleBn: "ট্রেড বডি মেম্বার",
      description: "Member of BCS, the apex ICT trade association, collaborating on technology hardware-software integration, tech fairs, and nationwide computing education.",
      descriptionBn: "দেশের শীর্ষস্থানীয় আইসিটি ট্রেড বডি বাংলাদেশ কম্পিউটার সমিতি (BCS)-এর সদস্য হিসেবে দেশব্যাপী তথ্যপ্রযুক্তি সম্প্রসারণ ও প্রশিক্ষণ প্রদান।",
      highlights: [
        "Pioneer ICT trade body partnership in Bangladesh",
        "Nationwide tech fairs, seminars, and networking hubs",
        "Hardware-software integrated engineering certifications"
      ],
      highlightsBn: [
        "দেশের প্রাচীনতম আইসিটি ট্রেড বডির সদস্যপদ",
        "দেশব্যাপী টেক এক্সপো, সেমিনার ও পেশাদার নেটওয়ার্কিং",
        "হার্ডওয়্যার-সফটওয়্যার ইন্টিগ্রেটেড স্কিল কারিকুলাম"
      ],
      website: "https://bcs.org.bd"
    }
  ];

  const filteredPartners = partners.filter((p) => p.category === activeTab);
  const collaborationCount = partners.filter((p) => p.category === "collaboration").length;
  const memberCount = partners.filter((p) => p.category === "member").length;

  return (
    <section id="partners" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#08121a_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.025] pointer-events-none" />

      <div className="max-w-[96rem] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* SECTION HEADER: Matched with User Screenshot */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-slate-900 text-white px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase mb-3 shadow-xs"
          >
            <Sparkles size={12} className="text-[#008744]" />
            <span>{isEn ? "TRUSTED BY INDUSTRY LEADERS" : "ইন্ডাস্ট্রি লিডারদের বিশ্বস্ত"}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-4xl font-black text-[#08121a] tracking-tight leading-tight"
          >
            {isEn ? (
              <>
                Our <span className="text-[#008744]">Working</span> <span className="text-[#DE1F26]">Partners</span>
              </>
            ) : (
              <>
                আমাদের <span className="text-[#008744]">ওয়ার্কিং</span> <span className="text-[#DE1F26]">পার্টনার্স</span>
              </>
            )}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="mt-2.5 text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto"
          >
            {isEn 
              ? "We collaborate with leading organizations, universities, and institutions to provide the best learning experience."
              : "শিক্ষার্থীদের সেরা প্রশিক্ষণ ও চাকরির সুযোগ দিতে আমরা শীর্ষস্থানীয় প্রতিষ্ঠান, বিশ্ববিদ্যালয় এবং ইন্ডাস্ট্রির সাথে সরাসরি কাজ করি।"}
          </motion.p>
        </div>

        {/* 2 FEATURE TABS: Collaboration With & Member Of */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10">
          {/* Tab 1: Collaboration With */}
          <button
            onClick={() => setActiveTab("collaboration")}
            className={`cursor-pointer inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
              activeTab === "collaboration"
                ? "bg-[#008744] text-white shadow-md shadow-[#008744]/20 scale-105"
                : "bg-slate-100 hover:bg-slate-200/80 text-slate-700"
            }`}
          >
            <Handshake size={16} className={activeTab === "collaboration" ? "text-white" : "text-[#008744]"} />
            <span>{isEn ? "Collaboration With" : "সহযোগী সংস্থাসমূহ"}</span>
            <span
              className={`px-2 py-0.5 rounded-md text-[11px] font-black ${
                activeTab === "collaboration"
                  ? "bg-white/20 text-white"
                  : "bg-slate-200 text-slate-700"
              }`}
            >
              {collaborationCount}
            </span>
          </button>

          {/* Tab 2: Member Of */}
          <button
            onClick={() => setActiveTab("member")}
            className={`cursor-pointer inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 ${
              activeTab === "member"
                ? "bg-[#08121a] text-white shadow-md shadow-slate-900/20 scale-105"
                : "bg-slate-100 hover:bg-slate-200/80 text-slate-700"
            }`}
          >
            <Award size={16} className={activeTab === "member" ? "text-white" : "text-[#DE1F26]"} />
            <span>{isEn ? "Member Of" : "মেম্বারশিপ ও স্বীকৃতি"}</span>
            <span
              className={`px-2 py-0.5 rounded-md text-[11px] font-black ${
                activeTab === "member"
                  ? "bg-white/20 text-white"
                  : "bg-slate-200 text-slate-700"
              }`}
            >
              {memberCount}
            </span>
          </button>
        </div>

        {/* LOGO GRID: Centered Rectangular Cards with Scale-Up and Clickable Modal */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-5xl mx-auto"
          >
            {filteredPartners.map((partner, idx) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: idx * 0.03 }}
                onClick={() => setSelectedPartner(partner)}
                className="group relative w-[calc(50%-8px)] sm:w-40 md:w-44 lg:w-48 h-20 sm:h-24 bg-white hover:bg-gradient-to-b hover:from-white hover:to-slate-50 border border-slate-200/90 hover:border-[#008744]/50 rounded-xl p-2.5 sm:p-3 flex flex-col items-center justify-center text-center shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_14px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-108 hover:z-20 overflow-hidden cursor-pointer flex-shrink-0"
              >
                {/* Clean Logo Image (Centered, scales & translates up on hover) */}
                <div className="w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.logo}
                    alt={isEn ? partner.name : partner.nameBn}
                    className="max-h-9 sm:max-h-11 max-w-[82%] object-contain filter contrast-[1.02] group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Animated Name: Revealed on Hover */}
                <div className="absolute inset-x-1 bottom-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex flex-col items-center pointer-events-none">
                  <p className="font-extrabold text-[#08121a] text-[9.5px] sm:text-[10.5px] leading-tight line-clamp-1 px-1 text-center group-hover:text-[#008744] transition-colors">
                    {isEn ? partner.name : partner.nameBn}
                  </p>
                </div>

                {/* Subtle Green/Red Bottom Line on Hover */}
                <div 
                  className={`absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${
                    activeTab === "collaboration" ? "bg-gradient-to-r from-[#008744] to-emerald-400" : "bg-gradient-to-r from-[#DE1F26] to-rose-400"
                  }`}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>

      {/* ANIMATED POPUP DETAILS MODAL */}
      <AnimatePresence>
        {selectedPartner && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedPartner(null)}
              className="fixed inset-0 bg-[#08121a]/65 backdrop-blur-sm"
            />

            {/* Modal Container: Clean, Modern, Continuous Luxury Ambient Glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 320 }}
              className="relative w-full max-w-lg bg-white rounded-[26px] p-5 sm:p-7 shadow-[0_25px_70px_rgba(0,0,0,0.2)] border border-slate-100 z-10 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Continuous Ambient Glow Orbs in Background */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.25, 1],
                  opacity: [0.15, 0.28, 0.15],
                  x: [0, 8, 0],
                  y: [0, -8, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-16 -right-16 w-52 h-52 bg-[#008744] rounded-full blur-[70px] pointer-events-none"
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.22, 0.1],
                  x: [0, -8, 0],
                  y: [0, 8, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-16 -left-16 w-52 h-52 bg-[#DE1F26] rounded-full blur-[70px] pointer-events-none"
              />

              {/* Close Button with gentle hover spin */}
              <button
                onClick={() => setSelectedPartner(null)}
                className="cursor-pointer absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100/90 hover:bg-slate-200 text-slate-500 hover:text-slate-900 flex items-center justify-center transition-all duration-200 hover:rotate-90 z-20 shadow-2xs"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>

              {/* Modal Header: Floating Logo + Identity */}
              <div className="relative z-10 flex items-start gap-3.5 sm:gap-4 mb-4">
                {/* Floating Logo Box with Continuous Levitation & Live Dot */}
                <motion.div 
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-white/95 border border-slate-200/80 p-2.5 flex items-center justify-center flex-shrink-0 shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedPartner.logo}
                    alt={isEn ? selectedPartner.name : selectedPartner.nameBn}
                    className="max-h-full max-w-full object-contain"
                  />
                  {/* Live Active Status Indicator Dot */}
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#008744]" />
                  </span>
                </motion.div>

                {/* Title & Subtitle */}
                <div className="min-w-0 pr-6">
                  <span 
                    className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full mb-1 shadow-2xs ${
                      selectedPartner.category === "collaboration"
                        ? "bg-[#008744]/10 text-[#008744] border border-[#008744]/20"
                        : "bg-[#DE1F26]/10 text-[#DE1F26] border border-[#DE1F26]/20"
                    }`}
                  >
                    {selectedPartner.category === "collaboration" ? (
                      <>
                        <ShieldCheck size={11} className="animate-pulse" />
                        <span>{isEn ? "Strategic Collaboration" : "স্ট্র্যাটেজিক পার্টনারশিপ"}</span>
                      </>
                    ) : (
                      <>
                        <Award size={11} className="animate-pulse" />
                        <span>{isEn ? "Official Member" : "অফিসিয়াল সদস্য"}</span>
                      </>
                    )}
                  </span>

                  <h3 className="text-base sm:text-lg font-black text-[#08121a] leading-tight mb-0.5">
                    {isEn ? selectedPartner.name : selectedPartner.nameBn}
                  </h3>

                  {selectedPartner.subtitle && (
                    <p className="text-[11px] text-slate-500 font-medium truncate">
                      {isEn ? selectedPartner.subtitle : selectedPartner.subtitleBn}
                    </p>
                  )}
                </div>
              </div>

              {/* Partner Detailed Description with subtle frosted glass feel */}
              <div className="relative z-10 mb-4 bg-slate-50/90 backdrop-blur-xs border border-slate-100 rounded-xl p-3.5 sm:p-4 shadow-2xs">
                <p className="text-slate-700 text-xs sm:text-[13px] leading-relaxed">
                  {isEn ? selectedPartner.description : selectedPartner.descriptionBn}
                </p>
              </div>

              {/* Key Benefits & Highlights Checklist */}
              <div className="relative z-10 mb-5">
                <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <motion.span
                    animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-flex"
                  >
                    <Sparkles size={13} className="text-[#008744]" />
                  </motion.span>
                  <span>{isEn ? "Key Value & Student Benefits" : "মূল সুবিধাসমূহ"}</span>
                </h4>

                <ul className="space-y-1.5">
                  {(isEn ? selectedPartner.highlights : selectedPartner.highlightsBn).map((item, hIdx) => (
                    <motion.li 
                      key={hIdx} 
                      whileHover={{ x: 2 }}
                      className="flex items-start gap-2 text-xs text-slate-600 transition-transform"
                    >
                      <CheckCircle2 size={14} className="text-[#008744] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="relative z-10 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                {selectedPartner.website ? (
                  <motion.a
                    href={selectedPartner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008744] hover:text-emerald-700 transition-all bg-emerald-50 hover:bg-emerald-100/80 px-3 py-1.5 rounded-lg border border-emerald-200/60"
                  >
                    <Globe size={13} className="animate-spin duration-[15000ms]" />
                    <span>{isEn ? "Official Portal" : "অফিসিয়াল ওয়েবসাইট"}</span>
                    <ExternalLink size={11} />
                  </motion.a>
                ) : (
                  <span />
                )}

                <button
                  onClick={() => setSelectedPartner(null)}
                  className="cursor-pointer bg-[#08121a] hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-95"
                >
                  {isEn ? "Close" : "বন্ধ করুন"}
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
