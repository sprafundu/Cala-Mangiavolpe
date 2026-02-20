import { useState, useEffect } from 'react';
import { Calendar, MessageCircle, ChevronDown, Star, Ship, Gauge, Award } from 'lucide-react';
import { FAREHARBOR_URL, WHATSAPP_URL } from '@/constants';

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1634405277712-617c29ea436e?w=1920&q=80',
    alt: 'Barche in baia turchese dell\'Arcipelago di La Maddalena',
  },
  {
    url: 'https://images.unsplash.com/photo-1534196143787-f563337ca933?w=1920&q=80',
    alt: 'Gommone in navigazione su acque cristalline',
  },
  {
    url: 'https://images.unsplash.com/photo-1727786616190-62a1e83ef91f?w=1920&q=80',
    alt: 'Spiaggia vista dall\'alto con acqua turchese',
  },
  {
    url: 'https://images.unsplash.com/photo-1767884163500-9b493d4a8977?w=1920&q=80',
    alt: 'Caletta nascosta tra le rocce',
  },
];

const stats = [
  { icon: Ship, value: '13', label: 'Gommoni disponibili' },
  { icon: Gauge, value: '40 CV', label: 'Motori nuovi 2024' },
  { icon: Star, value: '4.9', label: 'Rating su Google' },
  { icon: Award, value: '+150', label: 'Recensioni verificate' },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section data-testid="hero-section" className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Background Images */}
        {heroImages.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              i === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ transitionDuration: '1500ms' }}
          >
            <img
              src={slide.url}
              alt={slide.alt}
              className="w-full h-full object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
              onLoad={() => setImagesLoaded(prev => ({ ...prev, [i]: true }))}
            />
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-ocean/50 via-ocean/20 to-ocean/40" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="font-body text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 sm:mb-6 opacity-90 animate-fade-in">
              Arcipelago di La Maddalena - Sardegna
            </p>
            <h1
              data-testid="hero-title"
              className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-4 sm:mb-6 animate-fade-in-up"
            >
              Noleggio Gommoni
              <br />
              <span className="italic font-normal">a La Maddalena</span>
            </h1>
            <p className="font-body text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 opacity-90 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <strong>Senza Patente</strong> e con Skipper. Gommoni nuovi 2024, sicuri e facili da guidare.
              Partenza da Cala Mangiavolpe.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <a
                href={FAREHARBOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-book-cta"
                className="flex items-center gap-2 bg-turquoise text-white font-body text-sm sm:text-base font-bold px-8 py-4 rounded-full hover:bg-turquoise-light hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                Prenota Online
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-whatsapp-cta"
                className="flex items-center gap-2 bg-whatsapp text-white font-body text-sm sm:text-base font-bold px-8 py-4 rounded-full hover:bg-whatsapp/90 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                Scrivici su WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, i) => (
            <button
              key={i}
              data-testid={`hero-slide-${i}`}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === currentSlide ? 'w-8 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <ChevronDown className="h-5 w-5 text-white/60" />
        </div>
      </section>

      {/* Stats Bar */}
      <div data-testid="stats-bar" className="bg-ocean py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-3 justify-center">
                <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-turquoise flex-shrink-0" />
                <div>
                  <p className="font-heading text-2xl sm:text-3xl font-bold text-white leading-none">{stat.value}</p>
                  <p className="font-body text-[11px] sm:text-xs text-white/60 mt-0.5">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
