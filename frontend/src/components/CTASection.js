import { Calendar, MessageCircle } from 'lucide-react';
import { FAREHARBOR_URL, WHATSAPP_URL, WHATSAPP_NUMBER } from '@/constants';
import ScrollReveal from '@/components/ScrollReveal';

export default function CTASection() {
  return (
    <section data-testid="cta-section" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/34951694/pexels-photo-34951694.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Vista aerea dell'Arcipelago di La Maddalena"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ocean/80" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Prenota ora il tuo gommone
            <br />
            <span className="italic font-normal">a La Maddalena</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-white/80 max-w-xl mx-auto mb-8 sm:mb-10">
            Vivi l'Arcipelago di La Maddalena in totale liberta — senza patente, senza pensieri.
            Angela ti aspetta a Cala Mangiavolpe.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={FAREHARBOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-book-button"
              className="flex items-center gap-2 bg-turquoise text-white font-body text-sm sm:text-base font-bold px-8 py-4 rounded-full hover:bg-turquoise-light hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Calendar className="h-5 w-5" />
              Prenota Online
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="cta-whatsapp-button"
              className="flex items-center gap-2 bg-whatsapp text-white font-body text-sm sm:text-base font-bold px-8 py-4 rounded-full hover:bg-whatsapp/90 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp {WHATSAPP_NUMBER}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
