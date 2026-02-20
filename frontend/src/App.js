import "@/App.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/constants";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FleetSection from "@/components/FleetSection";
import DestinationsSection from "@/components/DestinationsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white font-body">
        <Navbar />
        <main>
          <HeroSection />
          <FleetSection />
          <DestinationsSection />
          <WhyChooseUs />
          <HowItWorks />
          <AboutSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="whatsapp-float"
          className="whatsapp-float"
          aria-label="Contattaci su WhatsApp"
        >
          <div className="h-14 w-14 bg-whatsapp rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
            <MessageCircle className="h-6 w-6 text-white" />
          </div>
        </a>
      </div>
    </LanguageProvider>
  );
}

export default App;
