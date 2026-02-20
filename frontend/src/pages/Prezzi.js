import { Link } from 'react-router-dom';
import { Tag, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import CTASection from '@/components/CTASection';

export default function Prezzi() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-ocean overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1534196143787-f563337ca933?w=1920&q=80"
            alt="Gommone in navigazione"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-turquoise-light mb-3">Trasparenza totale</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Prezzi
          </h1>
          <p className="font-body text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            Tariffe chiare e trasparenti per il noleggio gommoni a La Maddalena.
          </p>
        </div>
      </section>

      {/* Content placeholder */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center py-16 sm:py-24">
              <div className="h-16 w-16 rounded-full bg-turquoise/10 flex items-center justify-center mx-auto mb-6">
                <Tag className="h-8 w-8 text-turquoise" />
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ocean mb-4">
                Contenuto in arrivo
              </h2>
              <p className="font-body text-base text-foreground/60 max-w-md mx-auto mb-8">
                Questa pagina sara presto aggiornata con tutti i prezzi e le tariffe dettagliate per il noleggio gommoni.
              </p>
              <Link
                to="/"
                data-testid="prezzi-back-home"
                className="inline-flex items-center gap-2 bg-turquoise text-white font-body text-sm font-bold px-6 py-3 rounded-full hover:bg-turquoise-light transition-all duration-300"
              >
                Torna alla Home
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
