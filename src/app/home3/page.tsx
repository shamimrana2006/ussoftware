import Header from "@/components/Header";
import HeroSection3 from "@/components/HeroSection3";
import ServicesSection from "@/components/ServicesSection";
import AboutUsSection from "@/components/AboutUsSection";
import TechStackSection from "@/components/TechStackSection";
import Footer from "@/components/Footer";

export default function Home3() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection3 />
      <AboutUsSection />
      <ServicesSection />
      <TechStackSection />
      <Footer />
    </main>
  );
}
