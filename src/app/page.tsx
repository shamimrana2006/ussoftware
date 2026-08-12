import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import dynamic from "next/dynamic";

const AboutUsSection = dynamic(() => import("@/components/AboutUsSection"));
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const TechStackSection = dynamic(() => import("@/components/TechStackSection"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <TechStackSection />
      <Footer />
    </main>
  );
}
