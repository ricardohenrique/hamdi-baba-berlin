import { LanguageProvider } from "@/i18n/LanguageContext";
import Navbar from "@/components/restaurant/Navbar";
import Hero from "@/components/restaurant/Hero";
import About from "@/components/restaurant/About";
import WhyChoose from "@/components/restaurant/WhyChoose";
import MenuPreview from "@/components/restaurant/MenuPreview";
import Gallery from "@/components/restaurant/Gallery";
import VisitUs from "@/components/restaurant/VisitUs";
import Services from "@/components/restaurant/Services";
import Reviews from "@/components/restaurant/Reviews";
import Footer from "@/components/restaurant/Footer";
import MobileCTA from "@/components/restaurant/MobileCTA";

const Index = () => {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChoose />
        <MenuPreview />
        <Gallery />
        <VisitUs />
        <Services />
        <Reviews />
      </main>
      <Footer />
      <MobileCTA />
    </LanguageProvider>
  );
};

export default Index;
