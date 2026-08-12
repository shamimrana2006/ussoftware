import Header from "@/components/Header";
import HeroSection4 from "@/components/HeroSection4";
import ServicesSection from "@/components/ServicesSection";
import AboutUsSection from "@/components/AboutUsSection";
import TechStackSection from "@/components/TechStackSection";
import Footer from "@/components/Footer";

export default function Home4() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection4 />
      <AboutUsSection />
      <ServicesSection />
      <TechStackSection />
      <Footer />
    </main>
  );
}
