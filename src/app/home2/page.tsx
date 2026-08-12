import Header from "@/components/Header";
import HeroSection2 from "@/components/HeroSection2";
import ServicesSection from "@/components/ServicesSection";
import AboutUsSection from "@/components/AboutUsSection";
import TechStackSection from "@/components/TechStackSection";
import Footer from "@/components/Footer";

export default function Home2() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection2 />
      <AboutUsSection />
      <ServicesSection />
      <TechStackSection />
      <Footer />
    </main>
  );
}
