import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { WHATSAPP_URL, WHATSAPP_NUMBER, FACEBOOK_URL, INSTAGRAM_URL, MAPS_EMBED_URL } from '@/constants';

export default function Contatti() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-ocean overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1597822759119-98ac55426359?w=1920&q=80"
            alt="Tramonto sull'Arcipelago"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-turquoise-light mb-3">Siamo qui per te</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Contatti
          </h1>
          <p className="font-body text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            Scrivici o chiamaci per qualsiasi informazione sul noleggio gommoni a La Maddalena.
          </p>
        </div>
      </section>

      {/* Content placeholder */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ocean mb-4">
                Contenuto in arrivo
              </h2>
              <p className="font-body text-base text-foreground/60 max-w-md mx-auto">
                Questa pagina sara presto aggiornata con tutte le informazioni di contatto dettagliate.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="contatti-whatsapp"
                className="flex flex-col items-center p-8 rounded-2xl bg-sand hover:shadow-md transition-all duration-300"
              >
                <div className="h-14 w-14 rounded-full bg-whatsapp/10 flex items-center justify-center mb-4">
                  <MessageCircle className="h-7 w-7 text-whatsapp" />
                </div>
                <h3 className="font-body text-sm font-bold text-ocean mb-1">WhatsApp</h3>
                <p className="font-body text-sm text-foreground/60">{WHATSAPP_NUMBER}</p>
              </a>
              <div className="flex flex-col items-center p-8 rounded-2xl bg-sand">
                <div className="h-14 w-14 rounded-full bg-turquoise/10 flex items-center justify-center mb-4">
                  <MapPin className="h-7 w-7 text-turquoise" />
                </div>
                <h3 className="font-body text-sm font-bold text-ocean mb-1">Posizione</h3>
                <p className="font-body text-sm text-foreground/60 text-center">Porto turistico Cala Mangiavolpe<br />La Maddalena (SS)</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Map */}
          <ScrollReveal delay={200}>
            <div className="rounded-2xl overflow-hidden shadow-sm">
              <iframe
                src={MAPS_EMBED_URL}
                title="Rental Boat Cala Mangiavolpe - La Maddalena"
                className="w-full h-[350px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                data-testid="contatti-google-maps"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
