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

    // New Partner Additions from New Folder
    {
      id: "bteb",
      name: "Bangladesh Technical Education Board (BTEB)",
      nameBn: "বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB)",
      logo: "/our partner/New folder/1_bteb.webp",
      category: "collaboration",
      subtitle: "Technical Education Board",
      subtitleBn: "কারিগরি শিক্ষা বোর্ড",
      description: "Official collaboration with Bangladesh Technical Education Board (BTEB) for national skill standards and vocational IT diplomas.",
      descriptionBn: "বাংলাদেশ কারিগরি শিক্ষা বোর্ডের সাথে জাতীয় দক্ষতা কারিকুলাম ও কারিগরি শিক্ষা সহযোগিতার মাধ্যমে প্রশিক্ষণ পরিচালনা।",
      highlights: ["BTEB Recognized Skills", "National Vocational Standard", "Professional Diploma Support"],
      highlightsBn: ["কারিগরি শিক্ষা বোর্ড অনুমোদিত স্কিলস", "জাতীয় ভোকেশনাল কারিকুলাম", "প্রফেশনাল ডিপ্লোমা সুবিধা"]
    },

    {
      id: "iitu",
      name: "Islamic University of Technology (IUT)",
      nameBn: "ইসলামিক ইউনিভার্সিটি অব টেকনোলজি (IUT)",
      logo: "/our partner/New folder/3_iitu.webp",
      category: "collaboration",
      subtitle: "International Engineering Institution",
      subtitleBn: "আন্তর্জাতিক প্রকৌশল বিশ্ববিদ্যালয়",
      description: "Academic and technological collaboration with Islamic University of Technology.",
      descriptionBn: "আইইউটি-এর সাথে একাডেমিক ও কারিগরি দক্ষতা উন্নয়ন সেমিনার এবং ওয়ার্কশপ আয়োজন।",
      highlights: ["Engineering Collaboration", "Tech Seminars", "Research Exchange"],
      highlightsBn: ["ইঞ্জিনিয়ারিং কোলাবোরেশন", "টেক সেমিনার", "রিসার্চ এক্সচেঞ্জ"]
    },
    {
      id: "edge-new",
      name: "EDGE Project Bangladesh",
      nameBn: "এজ (EDGE) প্রকল্প",
      logo: "/our partner/New folder/4_edge.webp",
      category: "collaboration",
      subtitle: "Digital Gov & Economy Project",
      subtitleBn: "ডিজিটাল ইকোনমি প্রজেক্ট",
      description: "Partnership with World Bank backed EDGE project under BCC for high-end IT skill development.",
      descriptionBn: "বিশ্বব্যাংক সহায়তাপুষ্ট EDGE প্রজেক্টের সাথে হাই-এন্ড আইটি স্কিল ডেভেলপমেন্ট ও কর্মসংস্থান উদ্যোগ।",
      highlights: ["Export Ready IT Skills", "World Bank Backed", "Direct Placement"],
      highlightsBn: ["এক্সপোর্ট-রেডি আইটি স্কিল", "বিশ্বব্যাংক সহায়তাপুষ্ট", "সরাসরি জব সংযোগ"]
    },
    {
      id: "du",
      name: "University of Dhaka",
      nameBn: "ঢাকা বিশ্ববিদ্যালয়",
      logo: "/our partner/New folder/6_dhaka_university.webp",
      category: "collaboration",
      subtitle: "Premier University of Bangladesh",
      subtitleBn: "প্রাচ্যের অক্সফোর্ড - ঢাকা বিশ্ববিদ্যালয়",
      description: "Academic tie-up and workshops with the University of Dhaka for software engineering advancement.",
      descriptionBn: "ঢাকা বিশ্ববিদ্যালয়ের সাথে একাডেমিক সেশন, কোডিং ওয়ার্কশপ ও টেক মেন্টরশিপ পার্টনারশিপ।",
      highlights: ["Academic Seminars", "Student Mentorship", "Technical Workshops"],
      highlightsBn: ["একাডেমিক সেমিনার", "স্টুডেন্ট মেন্টরশিপ", "কারিগরি ওয়ার্কশপ"]
    },
    {
      id: "cibt",
      name: "Crown Institute of Business & Technology",
      nameBn: "ক্রাউন ইনস্টিটিউট অব বিজনেস অ্যান্ড টেকনোলজি",
      logo: "/our partner/New folder/7_crown_institute_of_business_and_technology.webp",
      category: "collaboration",
      subtitle: "Higher Education Institute",
      subtitleBn: "উচ্চশিক্ষা প্রতিষ্ঠান",
      description: "Educational collaboration for corporate training and computer science skill building.",
      descriptionBn: "শিক্ষার্থীদের আইটি শিল্পমুখী করতে ক্রাউন ইনস্টিটিউটের সাথে বিশেষ ট্রেনিং প্রোগ্রাম।",
      highlights: ["Corporate Training", "Student Development", "Career Grooming"],
      highlightsBn: ["কর্পোরেট ট্রেনিং", "স্টুডেন্ট ডেভেলপমেন্ট", "কেরিয়ার গ্রুমিং"]
    },
    {
      id: "eu",
      name: "Eastern University",
      nameBn: "ইস্টার্ন ইউনিভার্সিটি",
      logo: "/our partner/New folder/8_eastern_eniversity.webp",
      category: "collaboration",
      subtitle: "Private University Academic Partner",
      subtitleBn: "একাডেমিক পার্টনার",
      description: "Academic synergy for CSE student internships, capstone projects, and industry readiness.",
      descriptionBn: "ইস্টার্ন ইউনিভার্সিটির সিএসই শিক্ষার্থীদের জন্য ইন্ডাস্ট্রিয়াল ট্রেনিং ও ইন্টার্নশিপ সুযোগ।",
      highlights: ["Campus Placement Drives", "Live Project Guidance", "CSE Capstone Mentoring"],
      highlightsBn: ["ক্যাম্পাস প্লেসমেন্ট ড্রাইভ", "লাইভ প্রজেক্ট গাইডেন্স", "ক্যাপস্টোন প্রজেক্ট মেন্টরিং"]
    },
    {
      id: "jnu",
      name: "Jagannath University",
      nameBn: "জগন্নাথ বিশ্ববিদ্যালয়",
      logo: "/our partner/New folder/9_jagannath_university.webp",
      category: "collaboration",
      subtitle: "Public University Partner",
      subtitleBn: "পাবলিক বিশ্ববিদ্যালয় পার্টনার",
      description: "Joint tech seminars and career bootcamps for computer science students of Jagannath University.",
      descriptionBn: "জগন্নাথ বিশ্ববিদ্যালয়ের শিক্ষার্থীদের জন্য টেক বুটক্যাম্প ও রিয়েল-ওয়ার্ল্ড কোডিং ট্রেনিং।",
      highlights: ["Career Bootcamps", "Industry Seminars", "Hands-on Code Reviews"],
      highlightsBn: ["কেরিয়ার বুটক্যাম্প", "ইন্ডাস্ট্রি সেমিনার", "হ্যান্ডস-অন কোড রিভিউ"]
    },
    {
      id: "dc",
      name: "Dhaka College",
      nameBn: "ঢাকা কলেজ",
      logo: "/our partner/New folder/10_dhaka_college.webp",
      category: "collaboration",
      subtitle: "Historic Educational Institution",
      subtitleBn: "ঐতিহ্যবাহী ঢাকা কলেজ",
      description: "IT skill development and digital literacy workshops for Dhaka College students.",
      descriptionBn: "ঢাকা কলেজের শিক্ষার্থীদের জন্য আইটি ও প্রোগ্রামিং ফান্ডামেন্টালস কর্মশালা।",
      highlights: ["Digital Literacy", "Programming Foundations", "IT Orientation"],
      highlightsBn: ["ডিজিটাল লিটারেসি", "প্রোগ্রামিং ফান্ডামেন্টালস", "আইটি অরিয়েন্টেশন"]
    },
    {
      id: "uiu",
      name: "United International University (UIU)",
      nameBn: "ইউনাইটেড ইন্টারন্যাশনাল ইউনিভার্সিটি (UIU)",
      logo: "/our partner/New folder/11_united_international_university.webp",
      category: "collaboration",
      subtitle: "Leading Private Research University",
      subtitleBn: "শীর্ষ গবেষণা বিশ্ববিদ্যালয়",
      description: "Collaboration for AI & software engineering research, hackathons, and placement drives.",
      descriptionBn: "ইউআইইউ-এর সাথে যৌথ হ্যাকাথন, এআই প্রজেক্ট ও গ্র্যাজুয়েট প্লেসমেন্ট কার্যক্রম।",
      highlights: ["AI & Software Research", "Hackathons & Contests", "Direct Graduate Recruitment"],
      highlightsBn: ["এআই ও সফটওয়্যার রিসার্চ", "হ্যাকাথন ও কনটেস্ট", "সরাসরি গ্র্যাজুয়েট নিয়োগ"]
    },
    {
      id: "mu",
      name: "Metropolitan University",
      nameBn: "মেট্রোপলিটন ইউনিভার্সিটি",
      logo: "/our partner/New folder/12_metropolitan_university.webp",
      category: "collaboration",
      subtitle: "Academic Alliance Partner",
      subtitleBn: "একাডেমিক অ্যালায়েন্স",
      description: "Academic partnership for practical software development skills and regional tech growth.",
      descriptionBn: "মেট্রোপলিটন ইউনিভার্সিটির সাথে আঞ্চলিক সফটওয়্যার দক্ষতা বৃদ্ধি ও একাডেমিক কোলাবোরেশন।",
      highlights: ["Practical Software Training", "Regional Tech Growth", "Mentorship Programs"],
      highlightsBn: ["প্র্যাকটিক্যাল সফটওয়্যার ট্রেইনিং", "আঞ্চলিক টেক গ্রোথ", "মেন্টরশিপ প্রোগ্রাম"]
    },
    {
      id: "nsu",
      name: "North South University (NSU)",
      nameBn: "নর্থ সাউথ ইউনিভার্সিটি (NSU)",
      logo: "/our partner/New folder/13_north_south_university.webp",
      category: "collaboration",
      subtitle: "First Private University of Bangladesh",
      subtitleBn: "নর্থ সাউথ ইউনিভার্সিটি",
      description: "Partnership for enterprise software engineering, campus recruitment, and tech leadership.",
      descriptionBn: "নর্থ সাউথ ইউনিভার্সিটির সাথে সফটওয়্যার ইঞ্জিনিয়ারিং ট্রেনিং ও এক্সক্লুসিভ ক্যাম্পাস রিক্রুটমেন্ট।",
      highlights: ["Enterprise Software Labs", "Campus Job Recruitment", "Global Career Guidance"],
      highlightsBn: ["এন্টারপ্রাইজ সফটওয়্যার ল্যাব", "ক্যাম্পাস জব রিক্রুটমেন্ট", "গ্লোবাল ক্যারিয়ার গাইডেন্স"]
    },
    {
      id: "ewu",
      name: "East West University (EWU)",
      nameBn: "ইস্ট ওয়েস্ট ইউনিভার্সিটি (EWU)",
      logo: "/our partner/New folder/14_east_west_university.webp",
      category: "collaboration",
      subtitle: "Top-Tier Higher Education Institute",
      subtitleBn: "ইস্ট ওয়েস্ট ইউনিভার্সিটি",
      description: "Academic collaboration for practical software engineering capstone and industry alignment.",
      descriptionBn: "ইস্ট ওয়েস্ট ইউনিভার্সিটির সিএসই ডিপার্টমেন্টের সাথে ইন্ডাস্ট্রিয়াল কোলাবোরেশন।",
      highlights: ["Capstone Project Mentoring", "Industry Readiness", "Tech Seminars"],
      highlightsBn: ["ক্যাপস্টোন প্রজেক্ট মেন্টরিং", "ইন্ডাস্ট্রি রেডিনেস", "টেক সেমিনার"]
    },
    {
      id: "smuct",
      name: "Shanto-Mariam University (SMUCT)",
      nameBn: "শান্ত-মারিয়াম ইউনিভার্সিটি (SMUCT)",
      logo: "/our partner/New folder/15_smuct.webp",
      category: "collaboration",
      subtitle: "Creative & Tech Academic Partner",
      subtitleBn: "শান্ত-মারিয়াম ইউনিভার্সিটি",
      description: "Collaboration for Web Engineering, UI/UX design standards, and IT skill building.",
      descriptionBn: "শান্ত-মারিয়াম ইউনিভার্সিটির শিক্ষার্থীদের জন্য ওয়েব ও ইউআই/ইউএক্স ডিজাইনিং ট্রেইনিং।",
      highlights: ["Web & UI/UX Standards", "Creative Tech Labs", "Student Grooming"],
      highlightsBn: ["ওয়েব ও ইউআই/ইউএক্স স্ট্যান্ডার্ড", "ক্রিয়েটিভ টেক ল্যাব", "স্টুডেন্ট গ্রুমিং"]
    },
    {
      id: "bracu",
      name: "BRAC University",
      nameBn: "ব্র্যাক বিশ্ববিদ্যালয়",
      logo: "/our partner/New folder/16_bracu.webp",
      category: "collaboration",
      subtitle: "Leading Research Institution",
      subtitleBn: "ব্র্যাক বিশ্ববিদ্যালয়",
      description: "Strategic academic ties with BRAC University for student internships, AI research, and hiring.",
      descriptionBn: "ব্র্যাক বিশ্ববিদ্যালয়ের শিক্ষার্থীদের সাথে টেক হ্যাকাথন, এআই প্রজেক্ট ও ইন্টার্নশিপ নেটওয়ার্ক।",
      highlights: ["AI & Cloud Projects", "Tech Hackathons", "Graduate Internship Pipeline"],
      highlightsBn: ["এআই ও ক্লাউড প্রজেক্ট", "টেক হ্যাকাথন", "গ্র্যাজুয়েট ইন্টার্নশিপ পাইপলাইন"]
    },

    // Polytechnic Partner Institutes
    {
      id: "poly-17",
      name: "Dhaka Polytechnic Institute",
      nameBn: "ঢাকা পলিটেকনিক ইনস্টিটিউট",
      logo: "/our partner/New folder/17_polytechnic.webp",
      category: "collaboration",
      subtitle: "Government Polytechnic Partner",
      subtitleBn: "সরকারি পলিটেকনিক ইনস্টিটিউট",
      description: "Industrial training and skill empowerment for diploma computer engineering students.",
      descriptionBn: "ডিপ্লোমা ইন কম্পিউটার ইঞ্জিনিয়ারিং শিক্ষার্থীদের জন্য প্রফেশনাল ইন্ডাস্ট্রিয়াল ট্রেইনিং।",
      highlights: ["Diploma IT Training", "Industrial Attachment", "Career Grooming"],
      highlightsBn: ["ডিপ্লোমা আইটি ট্রেইনিং", "ইন্ডাস্ট্রিয়াল অ্যাটাচমেন্ট", "কেরিয়ার গ্রুমিং"]
    },
    {
      id: "poly-18",
      name: "Chittagong Polytechnic Institute",
      nameBn: "চট্টগ্রাম পলিটেকনিক ইনস্টিটিউট",
      logo: "/our partner/New folder/18_polytechnic.webp",
      category: "collaboration",
      subtitle: "Government Polytechnic Partner",
      subtitleBn: "সরকারি পলিটেকনিক ইনস্টিটিউট",
      description: "Technical collaboration and hands-on software development workshops.",
      descriptionBn: "কারিগরি শিক্ষা ও প্র্যাকটিক্যাল সফটওয়্যার ডেভেলপমেন্ট ওয়ার্কশপ কোলাবোরেশন।",
      highlights: ["Hands-on Software Labs", "Skill Development", "Placement Support"],
      highlightsBn: ["হ্যান্ডস-অন সফটওয়্যার ল্যাব", "স্কিল ডেভেলপমেন্ট", "প্লেসমেন্ট সাপোর্ট"]
    },
    {
      id: "poly-19",
      name: "Rajshahi Polytechnic Institute",
      nameBn: "রাজশাহী পলিটেকনিক ইনস্টিটিউট",
      logo: "/our partner/New folder/19_polytechnic.webp",
      category: "collaboration",
      subtitle: "Government Polytechnic Partner",
      subtitleBn: "সরকারি পলিটেকনিক ইনস্টিটিউট",
      description: "Skill enhancement and live project mentorship for diploma engineers.",
      descriptionBn: "ডিপ্লোমা প্রকৌশলীদের জন্য লাইভ প্রজেক্ট মেন্টরশিপ ও দক্ষতা উন্নয়ন।",
      highlights: ["Live Project Mentorship", "Industry Alignment", "Software Engineering"],
      highlightsBn: ["লাইভ প্রজেক্ট মেন্টরশিপ", "ইন্ডাস্ট্রি অ্যালাইনমেন্ট", "সফটওয়্যার ইঞ্জিনিয়ারিং"]
    },
    {
      id: "poly-20",
      name: "Sylhet Polytechnic Institute",
      nameBn: "সিলেট পলিটেকনিক ইনস্টিটিউট",
      logo: "/our partner/New folder/20_polytechnic.webp",
      category: "collaboration",
      subtitle: "Government Polytechnic Partner",
      subtitleBn: "সরকারি পলিটেকনিক ইনস্টিটিউট",
      description: "Industrial attachment training for diploma in Computer Science students.",
      descriptionBn: "কম্পিউটার সাইন্স ডিপ্লোমা শিক্ষার্থীদের জন্য বিশেষ ইন্ডাস্ট্রিয়াল ট্রেইনিং।",
      highlights: ["Industrial Attachment", "Web Development", "Database Systems"],
      highlightsBn: ["ইন্ডাস্ট্রিয়াল অ্যাটাচমেন্ট", "ওয়েব ডেভেলপমেন্ট", "ডাটাবেস সিস্টেমস"]
    },
    {
      id: "poly-21",
      name: "Barishal Polytechnic Institute",
      nameBn: "বরিশাল পলিটেকনিক ইনস্টিটিউট",
      logo: "/our partner/New folder/21_polytechnic.webp",
      category: "collaboration",
      subtitle: "Government Polytechnic Partner",
      subtitleBn: "সরকারি পলিটেকনিক ইনস্টিটিউট",
      description: "Collaborative technical training for building future software professionals.",
      descriptionBn: "ভবিষ্যতের দক্ষ সফটওয়্যার ইঞ্জিনিয়ার তৈরিতে যৌথ কারিগরি প্রশিক্ষণ।",
      highlights: ["Technical Skill Labs", "Career Mentorship", "Diploma Support"],
      highlightsBn: ["টেকনিক্যাল স্কিল ল্যাব", "কেরিয়ার মেন্টরশিপ", "ডিপ্লোমা সাপোর্ট"]
    },
    {
      id: "poly-22",
      name: "Khulna Polytechnic Institute",
      nameBn: "খুলনা পলিটেকনিক ইনস্টিটিউট",
      logo: "/our partner/New folder/22_polytechnic.webp",
      category: "collaboration",
      subtitle: "Government Polytechnic Partner",
      subtitleBn: "সরকারি পলিটেকনিক ইনস্টিটিউট",
      description: "Practical coding bootcamps and industrial project guidance.",
      descriptionBn: "প্র্যাকটিক্যাল কোডিং বুটক্যাম্প এবং ইন্ডাস্ট্রিয়াল প্রজেক্ট গাইডেন্স।",
      highlights: ["Coding Bootcamps", "Project Guidance", "Job Readiness"],
      highlightsBn: ["কোডিং বুটক্যাম্প", "প্রজেক্ট গাইডেন্স", "জব রেডিনেস"]
    },
    {
      id: "poly-23",
      name: "Mymensingh Polytechnic Institute",
      nameBn: "ময়মনসিংহ পলিটেকনিক ইনস্টিটিউট",
      logo: "/our partner/New folder/23_polytechnic.webp",
      category: "collaboration",
      subtitle: "Government Polytechnic Partner",
      subtitleBn: "সরকারি পলিটেকনিক ইনস্টিটিউট",
      description: "Diploma engineering industrial attachment and IT skill enhancement.",
      descriptionBn: "ডিপ্লোমা ইঞ্জিনিয়ারিং শিক্ষার্থীদের জন্য প্রফেশনাল আইটি স্কিল এনহান্সমেন্ট।",
      highlights: ["IT Skill Enhancement", "Diploma Placement", "Industry Workflows"],
      highlightsBn: ["আইটি স্কিল এনহান্সমেন্ট", "ডিপ্লোমা প্লেসমেন্ট", "ইন্ডাস্ট্রি ওয়ার্কফ্লো"]
    },
    {
      id: "poly-24",
      name: "Rangpur Polytechnic Institute",
      nameBn: "রংপুর পলিটেকনিক ইনস্টিটিউট",
      logo: "/our partner/New folder/24_polytechnic.webp",
      category: "collaboration",
      subtitle: "Government Polytechnic Partner",
      subtitleBn: "সরকারি পলিটেকনিক ইনস্টিটিউট",
      description: "Industrial training program for computer technology students.",
      descriptionBn: "কম্পিউটার প্রযুক্তি শিক্ষার্থীদের জন্য ইন্ডাস্ট্রিয়াল ট্রেইনিং ও জব প্রিপারেশন।",
      highlights: ["Industrial Training", "Job Preparation", "Skill Validation"],
      highlightsBn: ["ইন্ডাস্ট্রিয়াল ট্রেইনিং", "জব প্রিপারেশন", "স্কিল ভ্যালিডেশন"]
    },
    {
      id: "poly-25",
      name: "Comilla Polytechnic Institute",
      nameBn: "কুমিল্লা পলিটেকনিক ইনস্টিটিউট",
      logo: "/our partner/New folder/25_polytechnic.webp",
      category: "collaboration",
      subtitle: "Government Polytechnic Partner",
      subtitleBn: "সরকারি পলিটেকনিক ইনস্টিটিউট",
      description: "Empowering diploma engineers with production ready software skills.",
      descriptionBn: "ডিপ্লোমা ইঞ্জিনিয়ারদের প্রোডাকশন-রেডি সফটওয়্যার স্কিলে তৈরি করার যৌথ উদ্যোগ।",
      highlights: ["Production Ready Skills", "Software Engineering", "Mentorship"],
      highlightsBn: ["প্রোডাকশন-রেডি স্কিলস", "সফটওয়্যার ইঞ্জিনিয়ারিং", "মেন্টরশিপ"]
    },
    {
      id: "poly-26",
      name: "Bogra Polytechnic Institute",
      nameBn: "বগুড়া পলিটেকনিক ইনস্টিটিউট",
      logo: "/our partner/New folder/26_polytechnic.webp",
      category: "collaboration",
      subtitle: "Government Polytechnic Partner",
      subtitleBn: "সরকারি পলিটেকনিক ইনস্টিটিউট",
      description: "Industrial project training and tech career empowerment.",
      descriptionBn: "ইন্ডাস্ট্রিয়াল প্রজেক্ট ট্রেইনিং ও টেক ক্যারিয়ার ক্ষমতায়ন।",
      highlights: ["Project Training", "Tech Career Guidance", "Skill Development"],
      highlightsBn: ["প্রজেক্ট ট্রেইনিং", "টেক ক্যারিয়ার গাইডেন্স", "স্কিল ডেভেলপমেন্ট"]
    },
    {
      id: "poly-27",
      name: "Tangail Polytechnic Institute",
      nameBn: "টাঙ্গাইল পলিটেকনিক ইনস্টিটিউট",
      logo: "/our partner/New folder/27_polytechnic.webp",
      category: "collaboration",
      subtitle: "Government Polytechnic Partner",
      subtitleBn: "সরকারি পলিটেকনিক ইনস্টিটিউট",
      description: "Collaborative IT skill bootcamps for diploma students.",
      descriptionBn: "ডিপ্লোমা শিক্ষার্থীদের জন্য সমন্বিত আইটি স্কিল বুটক্যাম্প।",
      highlights: ["Skill Bootcamps", "Hands-on Training", "Industry Networking"],
      highlightsBn: ["স্কিল বুটক্যাম্প", "হ্যান্ডস-অন ট্রেইনিং", "ইন্ডাস্ট্রি নেটওয়ার্কিং"]
    },
    {
      id: "poly-28",
      name: "Feni Polytechnic Institute",
      nameBn: "ফেনী পলিটেকনিক ইনস্টিটিউট",
      logo: "/our partner/New folder/28_polytechnic.webp",
      category: "collaboration",
      subtitle: "Government Polytechnic Partner",
      subtitleBn: "সরকারি পলিটেকনিক ইনস্টিটিউট",
      description: "Practical software training for computer technology diploma students.",
      descriptionBn: "কম্পিউটার টেকনোলজি ডিপ্লোমা শিক্ষার্থীদের জন্য বাস্তবমুখী সফটওয়্যার প্রশিক্ষণ।",
      highlights: ["Practical Software Training", "Diploma Attachment", "Career Mentoring"],
      highlightsBn: ["প্র্যাকটিক্যাল সফটওয়্যার ট্রেইনিং", "ডিপ্লোমা অ্যাটাচমেন্ট", "কেরিয়ার মেন্টরিং"]
    },
    {
      id: "poly-29",
      name: "Pabna Polytechnic Institute",
      nameBn: "পাবনা পলিটেকনিক ইনস্টিটিউট",
      logo: "/our partner/New folder/29_polytechnic.webp",
      category: "collaboration",
      subtitle: "Government Polytechnic Partner",
      subtitleBn: "সরকারি পলিটেকনিক ইনস্টিটিউট",
      description: "Skill development and job placement orientation for diploma engineers.",
      descriptionBn: "ডিপ্লোমা প্রকৌশলীদের জন্য দক্ষতা উন্নয়ন ও চাকরির প্রস্তুতিমূলক প্রশিক্ষণ।",
      highlights: ["Skill Development", "Placement Orientation", "Code Reviews"],
      highlightsBn: ["দক্ষতা উন্নয়ন", "প্লেসমেন্ট অরিয়েন্টেশন", "কোড রিভিউ"]
    },
    {
      id: "poly-30",
      name: "Faridpur Polytechnic Institute",
      nameBn: "ফরিদপুর পলিটেকনিক ইনস্টিটিউট",
      logo: "/our partner/New folder/30_polytechnic.webp",
      category: "collaboration",
      subtitle: "Government Polytechnic Partner",
      subtitleBn: "সরকারি পলিটেকনিক ইনস্টিটিউট",
      description: "Industrial training program for computer technology students.",
      descriptionBn: "কম্পিউটার টেকনোলজি শিক্ষার্থীদের ইন্ডাস্ট্রিয়াল ট্রেনিং ও স্কিল ডেভেলপমেন্ট।",
      highlights: ["Industrial Training", "Software Skills", "Job Preparation"],
      highlightsBn: ["ইন্ডাস্ট্রিয়াল ট্রেইনিং", "সফটওয়্যার স্কিলস", "জব প্রিপারেশন"]
    },
    {
      id: "poly-31",
      name: "Jessore Polytechnic Institute",
      nameBn: "যশোর পলিটেকনিক ইনস্টিটিউট",
      logo: "/our partner/New folder/31_polytechnic.webp",
      category: "collaboration",
      subtitle: "Government Polytechnic Partner",
      subtitleBn: "সরকারি পলিটেকনিক ইনস্টিটিউট",
      description: "Hands-on software development training and project guidance.",
      descriptionBn: "হ্যান্ডস-অন সফটওয়্যার ডেভেলপমেন্ট ট্রেনিং ও প্রজেক্ট গাইডেন্স।",
      highlights: ["Hands-on Training", "Project Guidance", "Tech Skills"],
      highlightsBn: ["হ্যান্ডস-অন ট্রেইনিং", "প্রজেক্ট গাইডেন্স", "টেক স্কিলস"]
    },
    {
      id: "poly-32",
      name: "Dinajpur Polytechnic Institute",
      nameBn: "দিনাজপুর পলিটেকনিক ইনস্টিটিউট",
      logo: "/our partner/New folder/32_polytechnic.webp",
      category: "collaboration",
      subtitle: "Government Polytechnic Partner",
      subtitleBn: "সরকারি পলিটেকনিক ইনস্টিটিউট",
      description: "Skill empowerment for diploma computer science students.",
      descriptionBn: "ডিপ্লোমা কম্পিউটার সাইন্স শিক্ষার্থীদের কারিগরি দক্ষতা ক্ষমতায়ন।",
      highlights: ["Technical Skills", "Diploma Support", "Industry Exposure"],
      highlightsBn: ["কারিগরি দক্ষতা", "ডিপ্লোমা সাপোর্ট", "ইন্ডাস্ট্রি এক্সপোজার"]
    },
    {
      id: "poly-33",
      name: "Kushtia Polytechnic Institute",
      nameBn: "কুষ্টিয়া পলিটেকনিক ইনস্টিটিউট",
      logo: "/our partner/New folder/33_polytechnic.webp",
      category: "collaboration",
      subtitle: "Government Polytechnic Partner",
      subtitleBn: "সরকারি পলিটেকনিক ইনস্টিটিউট",
      description: "Industrial training and placement guidance for diploma engineers.",
      descriptionBn: "ডিপ্লোমা ইঞ্জিনিয়ারদের জন্য ইন্ডাস্ট্রিয়াল ট্রেনিং ও প্লেসমেন্ট গাইডেন্স।",
      highlights: ["Industrial Training", "Placement Guidance", "Practical Coding"],
      highlightsBn: ["ইন্ডাস্ট্রিয়াল ট্রেইনিং", "প্লেসমেন্ট গাইডেন্স", "প্র্যাকটিক্যাল কোডিং"]
    },
    {
      id: "poly-34",
      name: "Patuakhali Polytechnic Institute",
      nameBn: "পটুয়াখালী পলিটেকনিক ইনস্টিটিউট",
      logo: "/our partner/New folder/34_polytechnic.webp",
      category: "collaboration",
      subtitle: "Government Polytechnic Partner",
      subtitleBn: "সরকারি পলিটেকনিক ইনস্টিটিউট",
      description: "Computer science diploma industrial attachment and skill building.",
      descriptionBn: "কম্পিউটার সাইন্স ডিপ্লোমা শিক্ষার্থীদের জন্য ইন্ডাস্ট্রিয়াল অ্যাটাচমেন্ট।",
      highlights: ["Industrial Attachment", "Skill Building", "Career Mentoring"],
      highlightsBn: ["ইন্ডাস্ট্রিয়াল অ্যাটাচমেন্ট", "স্কিল বিল্ডিং", "কেরিয়ার মেন্টরিং"]
    },
    {
      id: "poly-35",
      name: "Barguna Polytechnic Institute",
      nameBn: "বরগুনা পলিটেকনিক ইনস্টিটিউট",
      logo: "/our partner/New folder/35_polytechnic.webp",
      category: "collaboration",
      subtitle: "Government Polytechnic Partner",
      subtitleBn: "সরকারি পলিটেকনিক ইনস্টিটিউট",
      description: "Diploma engineering software skills development.",
      descriptionBn: "ডিপ্লোমা ইঞ্জিনিয়ারিং শিক্ষার্থীদের সফটওয়্যার স্কিল ডেভেলপমেন্ট।",
      highlights: ["Software Skills", "Diploma Attachment", "Job Readiness"],
      highlightsBn: ["সফটওয়্যার স্কিলস", "ডিপ্লোমা অ্যাটাচমেন্ট", "জব রেডিনেস"]
    },
    {
      id: "poly-36",
      name: "Munshiganj Polytechnic Institute",
      nameBn: "মুন্সীগঞ্জ পলিটেকনিক ইনস্টিটিউট",
      logo: "/our partner/New folder/36_polytechnic.webp",
      category: "collaboration",
      subtitle: "Government Polytechnic Partner",
      subtitleBn: "সরকারি পলিটেকনিক ইনস্টিটিউট",
      description: "Practical coding and software engineering orientation.",
      descriptionBn: "প্র্যাকটিক্যাল কোডিং ও সফটওয়্যার ইঞ্জিনিয়ারিং অরিয়েন্টেশন।",
      highlights: ["Practical Coding", "Engineering Orientation", "Skill Labs"],
      highlightsBn: ["প্র্যাকটিক্যাল কোডিং", "ইঞ্জিনিয়ারিং অরিয়েন্টেশন", "স্কিল ল্যাব"]
    },
    {
      id: "poly-37",
      name: "Narsingdi Polytechnic Institute",
      nameBn: "নরসিংদী পলিটেকনিক ইনস্টিটিউট",
      logo: "/our partner/New folder/37_polytechnic.webp",
      category: "collaboration",
      subtitle: "Government Polytechnic Partner",
      subtitleBn: "সরকারি পলিটেকনিক ইনস্টিটিউট",
      description: "Industrial training program for computer technology students.",
      descriptionBn: "কম্পিউটার টেকনোলজি শিক্ষার্থীদের জন্য ইন্ডাস্ট্রিয়াল ট্রেইনিং প্রোগ্রাম।",
      highlights: ["Industrial Training", "IT Bootcamps", "Career Guidance"],
      highlightsBn: ["ইন্ডাস্ট্রিয়াল ট্রেইনিং", "আইটি বুটক্যাম্প", "কেরিয়ার গাইডেন্স"]
    },
    {
      id: "poly-38",
      name: "Brahmanbaria Polytechnic Institute",
      nameBn: "ব্রাহ্মণবাড়িয়া পলিটেকনিক ইনস্টিটিউট",
      logo: "/our partner/New folder/38_polytechnic.webp",
      category: "collaboration",
      subtitle: "Government Polytechnic Partner",
      subtitleBn: "সরকারি পলিটেকনিক ইনস্টিটিউট",
      description: "Software engineering skills and industrial attachment program.",
      descriptionBn: "সফটওয়্যার ইঞ্জিনিয়ারিং স্কিলস এবং ইন্ডাস্ট্রিয়াল অ্যাটাচমেন্ট প্রোগ্রাম।",
      highlights: ["Software Engineering", "Industrial Attachment", "Placement Support"],
      highlightsBn: ["সফটওয়্যার ইঞ্জিনিয়ারিং", "ইন্ডাস্ট্রিয়াল অ্যাটাচমেন্ট", "প্লেসমেন্ট সাপোর্ট"]
    },

    // 2. Member Of
    {
      id: "ict",
      name: "ICT Division Bangladesh",
      nameBn: "তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ",
      logo: "/our partner/New folder/2_ict.webp",
      category: "member",
      subtitle: "Government ICT Division",
      subtitleBn: "আইসিটি বিভাগ",
      description: "Joint ICT initiatives and membership alliance for building national tech capability and empowering young engineers.",
      descriptionBn: "তথ্য ও যোগাযোগ প্রযুক্তি বিভাগের সাথে যৌথ উদ্যোগে দক্ষ আইটি জনশক্তি গড়ে তোলার কার্যক্রম।",
      highlights: ["Government Tech Initiatives", "Youth Empowerment", "National Skill Labs"],
      highlightsBn: ["সরকারি আইসিটি উদ্যোগ", "তরুণদের কারিগরি দক্ষতা", "জাতীয় স্কিল ল্যাব"],
      website: "https://ictd.gov.bd"
    },
    {
      id: "nsda",
      name: "NSDA - Prime Minister's Office",
      nameBn: "জাতীয় দক্ষতা উন্নয়ন কর্তৃপক্ষ (প্রধানমন্ত্রীর কার্যালয়)",
      logo: "/our partner/us-software-ltd-268073-জাতীয়_দক্ষতা_উন্নয়ন_কর্তৃপক্ষ.webp",
      category: "member",
      subtitle: "National Skills Development Authority",
      subtitleBn: "দক্ষতা উন্নয়ন কর্তৃপক্ষ",
      description: "Official recognized membership & alignment with the National Skills Development Authority (Prime Minister's Office, Bangladesh) to deliver government-aligned technical competency standards and verified national certifications.",
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
      id: "idb",
      name: "IDB-BISEW IT Scholarship",
      nameBn: "আইডিবি-বিআইএসইডব্লিউ আইটি স্কলারশিপ প্রোগ্রাম",
      logo: "/our partner/us-software-ltd-68966-idb-bisew.webp",
      category: "member",
      subtitle: "Islamic Development Bank - BISEW",
      subtitleBn: "আইটি স্কলারশিপ প্রোগ্রাম",
      description: "Collaborative engagement and network partnership with IDB-BISEW scholarship programs to empower meritorious students with industry-grade software engineering and enterprise placement.",
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
      id: "bcs",
      name: "Bangladesh Computer Samity (BCS)",
      nameBn: "বাংলাদেশ কম্পিউটার সমিতি (BCS)",
      logo: "/our partner/us-software-ltd-399754-favicon_2x.webp",
      category: "member",
      subtitle: "Apex ICT Trade Association Member",
      subtitleBn: "বাংলাদেশ কম্পিউটার সমিতি সদস্য",
      description: "Member of BCS, the apex ICT trade association in Bangladesh, promoting nationwide computing education, tech exhibitions, and workforce enablement.",
      descriptionBn: "দেশের শীর্ষস্থানীয় আইসিটি ট্রেড বডি বাংলাদেশ কম্পিউটার সমিতি (BCS)-এর সদস্য হিসেবে তথ্যপ্রযুক্তি সম্প্রসারণ, টেক এক্সপো ও আইটি স্কিল ডেভেলপমেন্ট পরিচালনা।",
      highlights: [
        "Pioneer ICT trade body membership in Bangladesh",
        "Nationwide tech fairs, seminars, and networking hubs",
        "Industry-aligned IT training and student workshops"
      ],
      highlightsBn: [
        "দেশের প্রাচীনতম আইসিটি ট্রেড বডির সদস্যপদ",
        "দেশব্যাপী টেক এক্সপো, সেমিনার ও পেশাদার নেটওয়ার্কিং",
        "ইন্ডাস্ট্রি-অ্যালাইন্ড আইটি প্রশিক্ষণ ও কর্মশালা"
      ],
      website: "https://bcs.org.bd"
    },
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
            className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 lg:gap-6 max-w-[88rem] mx-auto"
          >
            {filteredPartners.map((partner, idx) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, delay: idx * 0.03 }}
                onClick={() => setSelectedPartner(partner)}
                className="group relative w-[calc(50%-10px)] sm:w-48 md:w-52 lg:w-56 xl:w-[230px] h-24 sm:h-28 lg:h-32 bg-white hover:bg-gradient-to-b hover:from-white hover:to-slate-50 border border-slate-200/90 hover:border-[#008744]/50 rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_35px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-106 hover:z-20 overflow-hidden cursor-pointer flex-shrink-0"
              >
                {/* Clean Logo Image (Centered, scales & translates up on hover) */}
                <div className="w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={partner.logo}
                    alt={isEn ? partner.name : partner.nameBn}
                    className="max-h-12 sm:max-h-15 lg:max-h-17 max-w-[88%] object-contain filter contrast-[1.02] group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Animated Name: Revealed on Hover */}
                <div className="absolute inset-x-1.5 bottom-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex flex-col items-center pointer-events-none">
                  <p className="font-extrabold text-[#08121a] text-[10px] sm:text-xs leading-tight line-clamp-1 px-1 text-center group-hover:text-[#008744] transition-colors">
                    {isEn ? partner.name : partner.nameBn}
                  </p>
                </div>

                {/* Subtle Green/Red Bottom Line on Hover */}
                <div 
                  className={`absolute bottom-0 left-0 right-0 h-[2.5px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${
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
              className="relative w-full max-w-xl sm:max-w-2xl bg-white rounded-[28px] p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.25)] border border-slate-100 z-10 overflow-hidden"
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
                className="absolute -top-16 -right-16 w-56 h-56 bg-[#008744] rounded-full blur-[70px] pointer-events-none"
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.22, 0.1],
                  x: [0, -8, 0],
                  y: [0, 8, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-16 -left-16 w-56 h-56 bg-[#DE1F26] rounded-full blur-[70px] pointer-events-none"
              />

              {/* Close Button with gentle hover spin */}
              <button
                onClick={() => setSelectedPartner(null)}
                className="cursor-pointer absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all duration-200 hover:rotate-90 z-20 shadow-2xs"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Modal Header: Floating Logo + Identity */}
              <div className="relative z-10 flex items-start gap-4 sm:gap-5 mb-5">
                {/* Floating Logo Box with Continuous Levitation & Live Dot */}
                <motion.div 
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border border-slate-200/90 p-3 flex items-center justify-center flex-shrink-0 shadow-[0_6px_20px_rgba(0,0,0,0.06)]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={selectedPartner.logo}
                    alt={isEn ? selectedPartner.name : selectedPartner.nameBn}
                    className="max-h-full max-w-full object-contain"
                  />
                  {/* Live Active Status Indicator Dot */}
                  <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#008744]" />
                  </span>
                </motion.div>

                {/* Title & Subtitle */}
                <div className="min-w-0 pr-8">
                  <span 
                    className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold uppercase px-3 py-1 rounded-full mb-1.5 shadow-2xs ${
                      selectedPartner.category === "collaboration"
                        ? "bg-[#008744]/10 text-[#008744] border border-[#008744]/25"
                        : "bg-[#DE1F26]/10 text-[#DE1F26] border border-[#DE1F26]/25"
                    }`}
                  >
                    {selectedPartner.category === "collaboration" ? (
                      <>
                        <ShieldCheck size={13} className="animate-pulse" />
                        <span>{isEn ? "Strategic Collaboration" : "স্ট্র্যাটেজিক পার্টনারশিপ"}</span>
                      </>
                    ) : (
                      <>
                        <Award size={13} className="animate-pulse" />
                        <span>{isEn ? "Official Member" : "অফিসিয়াল সদস্য"}</span>
                      </>
                    )}
                  </span>

                  <h3 className="text-lg sm:text-2xl font-black text-[#08121a] leading-tight mb-1">
                    {isEn ? selectedPartner.name : selectedPartner.nameBn}
                  </h3>

                  {selectedPartner.subtitle && (
                    <p className="text-xs sm:text-sm text-slate-500 font-semibold truncate">
                      {isEn ? selectedPartner.subtitle : selectedPartner.subtitleBn}
                    </p>
                  )}
                </div>
              </div>

              {/* Partner Detailed Description with subtle frosted glass feel */}
              <div className="relative z-10 mb-5 bg-slate-50/90 backdrop-blur-xs border border-slate-100 rounded-2xl p-4 sm:p-5 shadow-2xs">
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                  {isEn ? selectedPartner.description : selectedPartner.descriptionBn}
                </p>
              </div>

              {/* Key Benefits & Highlights Checklist */}
              <div className="relative z-10 mb-6">
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-flex"
                  >
                    <Sparkles size={15} className="text-[#008744]" />
                  </motion.span>
                  <span>{isEn ? "Key Value & Student Benefits" : "মূল সুবিধাসমূহ"}</span>
                </h4>

                <ul className="space-y-2.5">
                  {(isEn ? selectedPartner.highlights : selectedPartner.highlightsBn).map((item, hIdx) => (
                    <motion.li 
                      key={hIdx} 
                      whileHover={{ x: 3 }}
                      className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700 font-medium transition-transform"
                    >
                      <CheckCircle2 size={17} className="text-[#008744] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                {selectedPartner.website ? (
                  <motion.a
                    href={selectedPartner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#008744] hover:text-emerald-700 transition-all bg-emerald-50 hover:bg-emerald-100/80 px-4 py-2.5 rounded-xl border border-emerald-200/80 cursor-pointer"
                  >
                    <Globe size={15} className="animate-spin duration-[15000ms]" />
                    <span>{isEn ? "Official Portal" : "অফিসিয়াল ওয়েবসাইট"}</span>
                    <ExternalLink size={13} />
                  </motion.a>
                ) : (
                  <span />
                )}

                <button
                  onClick={() => setSelectedPartner(null)}
                  className="cursor-pointer bg-[#08121a] hover:bg-slate-800 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-95"
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
