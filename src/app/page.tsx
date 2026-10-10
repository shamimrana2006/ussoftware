import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SectionDivider from "@/components/SectionDivider";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "US Software LTD | Best IT Training & Software Solutions in Bangladesh",
  description:
    "Join US Software LTD for industry-standard professional IT training in Web Development, App Development, Cyber Security, Digital Marketing, Graphics & UI/UX. Build career-ready skills with live enterprise projects.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "US Software LTD | Best IT Training & Software Solutions in Bangladesh",
    description:
      "Industry-standard professional IT training in Web Dev, App Dev, Cyber Security, UI/UX & Cloud. 1-on-1 mentorship & job placement support.",
    url: "https://ussoftwareltd.com",
    siteName: "US Software LTD",
    images: [
      {
        url: "/logo/us software logo.png",
        width: 800,
        height: 600,
        alt: "US Software LTD",
      },
    ],
  },
};

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
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://ussoftwareltd.com/#organization",
        "name": "US Software LTD",
        "url": "https://ussoftwareltd.com",
        "logo": "https://ussoftwareltd.com/logo/us software logo.png",
        "description": "Premier IT training institute and software engineering company in Dhaka, Bangladesh.",
        "telephone": "+8801995852964",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mirpur-10",
          "addressLocality": "Dhaka",
          "addressCountry": "BD"
        },
        "sameAs": [
          "https://www.facebook.com/ussoftwareltd",
          "https://wa.me/8801995852964"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://ussoftwareltd.com/#website",
        "url": "https://ussoftwareltd.com",
        "name": "US Software LTD",
        "publisher": {
          "@id": "https://ussoftwareltd.com/#organization"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Top Global Navigation: TopBar (scrolls) + Main Navbar (Sticky) */}
      <Header />

      <main className="overflow-x-clip">
        {/* 1. HERO SECTION: Empower Your Future With IT Skills */}
        <HeroSection />

      {/* Section Smooth Transition Divider */}
      <SectionDivider />

      {/* 2. COURSES SECTION: Featured Courses */}
      <HomeCoursesSection />

      {/* 3. CATEGORIES SECTION: Explore Course Categories (Hidden temporarily) */}
      {/* <HomeCategoriesSection /> */}

      {/* 4. BENEFITS SECTION: Why Choose Us */}
      <HomeBenefitsSection />

      {/* 5. TRAINING METHODOLOGY SECTION: Our Training Methodology (Hidden temporarily) */}
      {/* <HomeTrainingSection /> */}

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
