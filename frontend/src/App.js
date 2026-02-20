import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Itinerari from "@/pages/Itinerari";
import Prezzi from "@/pages/Prezzi";
import Prenotazioni from "@/pages/Prenotazioni";
import Contatti from "@/pages/Contatti";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-white font-body">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/itinerari" element={<Itinerari />} />
              <Route path="/prezzi" element={<Prezzi />} />
              <Route path="/prenotazioni" element={<Prenotazioni />} />
              <Route path="/contatti" element={<Contatti />} />
            </Routes>
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
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
