import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { FAREHARBOR_URL, WHATSAPP_URL, WHATSAPP_NUMBER } from '@/constants';
import { MessageCircle } from 'lucide-react';

export default function Prenotazioni() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-ocean overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1727786616190-62a1e83ef91f?w=1920&q=80"
            alt="Spiaggia dall'alto"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-turquoise-light mb-3">Prenota il tuo gommone</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Prenotazioni
          </h1>
          <p className="font-body text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            Prenota online o contattaci direttamente per riservare il tuo gommone.
          </p>
        </div>
      </section>

      {/* Content placeholder */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center py-16 sm:py-24">
              <div className="h-16 w-16 rounded-full bg-turquoise/10 flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-turquoise" />
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ocean mb-4">
                Contenuto in arrivo
              </h2>
              <p className="font-body text-base text-foreground/60 max-w-md mx-auto mb-8">
                Questa pagina sara presto aggiornata con il sistema di prenotazione completo.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={FAREHARBOR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="prenotazioni-fareharbor"
                  className="flex items-center gap-2 bg-turquoise text-white font-body text-sm font-bold px-8 py-4 rounded-full hover:bg-turquoise-light hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Calendar className="h-5 w-5" />
                  Prenota su FareHarbor
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="prenotazioni-whatsapp"
                  className="flex items-center gap-2 bg-whatsapp text-white font-body text-sm font-bold px-8 py-4 rounded-full hover:bg-whatsapp/90 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp {WHATSAPP_NUMBER}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
