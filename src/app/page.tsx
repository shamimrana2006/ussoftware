import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SectionDivider from "@/components/SectionDivider";
import dynamic from "next/dynamic";

// Dynamic Section Imports for Optimum Core Web Vitals & Streaming Performance
const HomeCoursesSection = dynamic(() => import("@/components/home/HomeCoursesSection"));
const HomeCategoriesSection = dynamic(() => import("@/components/home/HomeCategoriesSection"));
const HomeBenefitsSection = dynamic(() => import("@/components/home/HomeBenefitsSection"));
const HomeTrainingSection = dynamic(() => import("@/components/home/HomeTrainingSection"));
const HomePartnersSection = dynamic(() => import("@/components/home/HomePartnersSection"));
const HomeSuccessSection = dynamic(() => import("@/components/home/HomeSuccessSection"));
const HomePaymentSection = dynamic(() => import("@/components/home/HomePaymentSection"));
const HomeCTASection = dynamic(() => import("@/components/home/HomeCTASection"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Global Navigation: TopBar (scrolls) + Main Navbar (Sticky) */}
      <Header />

      <main className="overflow-x-clip">
        {/* 1. HERO SECTION: Empower Your Future With IT Skills */}
        <HeroSection />

      {/* Section Smooth Transition Divider */}
      <SectionDivider />

      {/* 2. COURSES SECTION: Featured Courses */}
      <HomeCoursesSection />

      {/* 3. CATEGORIES SECTION: Explore Course Categories */}
      <HomeCategoriesSection />

      {/* 4. BENEFITS SECTION: Why Choose Us */}
      <HomeBenefitsSection />

      {/* 5. TRAINING METHODOLOGY SECTION: Our Training Methodology */}
      <HomeTrainingSection />

      {/* 7. PARTNERS SECTION: Our Industry Partners */}
      <HomePartnersSection />

      {/* 8. SUCCESS SECTION: Student Success Stories */}
      <HomeSuccessSection />

      {/* 9. PAYMENT SECTION: Enrollment & Payment Options */}
      <HomePaymentSection />

      {/* 10. CTA SECTION: Start Your Learning Journey */}
      <HomeCTASection />

      {/* Global Footer */}
      <Footer />
    </main>
  </div>
  );
}
