export interface EventItem {
  id: string;
  titleEn: string;
  titleBn: string;
  categoryEn: string;
  categoryBn: string;
  status: "upcoming" | "ongoing" | "completed";
  date: string;
  timeEn: string;
  timeBn: string;
  venueEn: string;
  venueBn: string;
  speakerEn: string;
  speakerBn: string;
  speakerRoleEn: string;
  speakerRoleBn: string;
  speakerAvatar: string;
  coverImage: string;
  descEn: string;
  descBn: string;
  seatTotal: number;
  seatBooked: number;
  priceEn: string;
  priceBn: string;
  isFree: boolean;
  registrationOpen: boolean;
  highlightsEn: string[];
  highlightsBn: string[];
}

export const EVENTS_DATA: EventItem[] = [
  {
    id: "evt-1",
    titleEn: "Web Development & AI Tools Workshop",
    titleBn: "ওয়েব ডেভেলপমেন্ট ও এআই টুলস ফ্রি ওয়ার্কশপ",
    categoryEn: "Free Workshop",
    categoryBn: "ফ্রি ওয়ার্কশপ",
    status: "upcoming",
    date: "2026-09-25",
    timeEn: "04:00 PM - 06:30 PM",
    timeBn: "বিকাল ৪:০০ - সন্ধ্যা ৬:৩০",
    venueEn: "US Software Training Lab & Online",
    venueBn: "ইউএস সফটওয়্যার ট্রেনিং ল্যাব ও অনলাইন",
    speakerEn: "Lead Instructor",
    speakerBn: "লিড ইন্সট্রাক্টর",
    speakerRoleEn: "Senior Web Developer, US Software",
    speakerRoleBn: "সিনিয়র ওয়েব ডেভেলপার, ইউএস সফটওয়্যার",
    speakerAvatar: "/images/about/about-mentors-focus.png",
    coverImage: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=1200&auto=format&fit=crop",
    descEn: "A practical session on modern web development techniques and how to use AI tools for faster coding.",
    descBn: "আধুনিক ওয়েব ডেভেলপমেন্ট পদ্ধতি এবং দ্রুত কোডিং করার জন্য এআই টুলস ব্যবহারের উপর একটি প্র্যাকটিক্যাল সেশন।",
    seatTotal: 35,
    seatBooked: 24,
    priceEn: "Free Entry",
    priceBn: "ফ্রি এন্ট্রি",
    isFree: true,
    registrationOpen: true,
    highlightsEn: [
      "Hands-on coding demo",
      "Career Q&A with instructor",
      "Certificate of Participation",
      "Free learning resources",
    ],
    highlightsBn: [
      "হ্যান্ডস-অন কোডিং ডেমো",
      "ইন্সট্রাক্টরের সাথে প্রশ্নোত্তর পর্ব",
      "অংশগ্রহণ সার্টিফিকেট",
      "প্রয়োজনীয় রিসোর্স ফাইল",
    ],
  },
  {
    id: "evt-2",
    titleEn: "Practical Python & Django Bootcamp",
    titleBn: "প্র্যাকটিক্যাল পাইথন ও জ্যাঙ্গো বুটক্যাম্প",
    categoryEn: "Bootcamp",
    categoryBn: "বুটক্যাম্প",
    status: "upcoming",
    date: "2026-10-15",
    timeEn: "03:00 PM - 06:00 PM",
    timeBn: "বিকাল ৩:০০ - সন্ধ্যা ৬:০০",
    venueEn: "US Software Lab",
    venueBn: "ইউএস সফটওয়্যার ল্যাব",
    speakerEn: "Software Engineer",
    speakerBn: "সফটওয়্যার ইঞ্জিনিয়ার",
    speakerRoleEn: "Backend Specialist",
    speakerRoleBn: "ব্যাকএন্ড স্পেশালিস্ট",
    speakerAvatar: "/images/about/about-students-1.png",
    coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    descEn: "Learn to build backend APIs with Python and Django from scratch with real project examples.",
    descBn: "পাইথন ও জ্যাঙ্গো দিয়ে স্ক্র্যাচ থেকে ব্যাকএন্ড এপিআই তৈরির সহজ প্র্যাকটিক্যাল গাইডলাইন।",
    seatTotal: 30,
    seatBooked: 22,
    priceEn: "Free For Registered Students",
    priceBn: "রেজিস্ট্রিকৃতদের জন্য ফ্রি",
    isFree: true,
    registrationOpen: true,
    highlightsEn: [
      "Build a simple project during the session",
      "Doubt solving & code review",
      "Free source code & slides",
    ],
    highlightsBn: [
      "সেশনের মাঝে প্রজেক্ট তৈরি",
      "কোড রিভিউ ও প্রবলেম সলভিং",
      "সোর্স কোড ও নোট প্রদান",
    ],
  },
  {
    id: "evt-3",
    titleEn: "Basic Linux & Server Management",
    titleBn: "প্রাথমিক লিনাক্স ও সার্ভার ম্যানেজমেন্ট সেশন",
    categoryEn: "Completed",
    categoryBn: "সম্পন্ন সেশন",
    status: "completed",
    date: "2026-06-12",
    timeEn: "03:00 PM - 05:30 PM",
    timeBn: "বিকাল ৩:০০ - ৫:৩০",
    venueEn: "US Software Office",
    venueBn: "ইউএস সফটওয়্যার অফিস",
    speakerEn: "System Administrator",
    speakerBn: "সিস্টেম অ্যাডমিনিস্ট্রেটর",
    speakerRoleEn: "IT Trainer",
    speakerRoleBn: "আইটি ট্রেইনার",
    speakerAvatar: "/images/about/about-lab-session.png",
    coverImage: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop",
    descEn: "Successful workshop covering Linux terminal commands, SSH keys, and basic server setup.",
    descBn: "লিনাক্স টার্মিনাল কমান্ড, এসএসএইচ কী এবং বেসিক সার্ভার সেটআপ নিয়ে সফল ওয়ার্কশপ সম্পন্ন হয়েছে।",
    seatTotal: 25,
    seatBooked: 25,
    priceEn: "Completed",
    priceBn: "সম্পন্ন হয়েছে",
    isFree: true,
    registrationOpen: false,
    highlightsEn: ["25 Attendees", "Practical commands sheet given"],
    highlightsBn: ["২৫ জন শিক্ষার্থী অংশ নেন", "প্র্যাকটিক্যাল কমান্ড শিট প্রদান"],
  },
];
