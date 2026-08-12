import Header from "@/components/Header";
import HeroSection5 from "@/components/HeroSection5";
import ServicesSection from "@/components/ServicesSection";
import AboutUsSection from "@/components/AboutUsSection";
import TechStackSection from "@/components/TechStackSection";
import Footer from "@/components/Footer";

export default function Home5() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection5 />
      <AboutUsSection />
      <ServicesSection />
      <TechStackSection />
      <Footer />
    </main>
  );
}
