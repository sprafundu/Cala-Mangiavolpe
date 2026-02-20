import { Calendar, Users, Fuel, Sun, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { FAREHARBOR_URL } from '@/constants';
import ScrollReveal from '@/components/ScrollReveal';

const boats = [
  {
    id: 'gommone-550',
    name: 'Gommoni 5,50 metri',
    badge: 'Senza patente',
    badgeColor: 'bg-turquoise text-white',
    models: 'BWA e MarSea SP90',
    engine: 'Motori 40 CV nuovi 2024',
    recommended: 'Max 4/5 persone',
    idealFor: 'Coppie, famiglie con bambini',
    features: ['Doppia tanica carburante', 'Tendalino parasole', 'Scaletta di risalita', 'Borsa frigo gratuita'],
    price: '100',
    image: 'https://images.pexels.com/photos/5730197/pexels-photo-5730197.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Gommone 5,50 metri per noleggio senza patente La Maddalena',
  },
  {
    id: 'gommone-600',
    name: 'Gommoni 6 metri',
    badge: 'Piu richiesto',
    badgeColor: 'bg-amber-500 text-white',
    models: 'Alson e MarSea 100',
    engine: 'Comfort superiore',
    recommended: 'Max 6 adulti',
    idealFor: 'Gruppi di amici, chi vuole piu spazio',
    features: ['Ampio prendisole a poppa', 'Tendalino parasole', 'Scaletta di risalita', 'Borsa frigo gratuita'],
    price: '120',
    image: 'https://images.unsplash.com/photo-1763424622942-2afe42d76ef3?w=800&q=80',
    imageAlt: 'Gommone 6 metri Alson comfort superiore',
  },
  {
    id: 'joker-boat',
    name: 'Joker Boat 7 metri',
    badge: 'Con Skipper',
    badgeColor: 'bg-ocean text-white',
    models: 'Joker Boat 7m',
    engine: 'Motore 150 CV Mercury Pro',
    recommended: 'Fino a 8 persone',
    idealFor: 'Chi cerca il massimo comfort',
    features: ['Doccetta acqua dolce', 'Autoradio', 'Ampi spazi prendisole', 'Con skipper o patente'],
    price: '250',
    image: 'https://images.pexels.com/photos/35740506/pexels-photo-35740506.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Joker Boat 7 metri con skipper massimo comfort',
  },
];

export default function FleetSection() {
  return (
    <section id="flotta" data-testid="fleet-section" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-turquoise mb-3">La Flotta</p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ocean tracking-tight mb-4">
              Scegli il tuo gommone
            </h2>
            <p className="font-body text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
              Diverse soluzioni, tutte curate e controllate quotidianamente. Gommoni nuovi 2024 con motori affidabili.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {boats.map((boat, i) => (
            <ScrollReveal key={boat.id} delay={i * 150}>
              <div
                data-testid={`boat-card-${boat.id}`}
                className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={boat.image}
                    alt={boat.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className={`absolute top-4 left-4 ${boat.badgeColor} font-body text-xs font-bold px-3 py-1.5 rounded-full`}>
                    {boat.badge}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-2xl font-bold text-ocean mb-1">{boat.name}</h3>
                  <p className="font-body text-sm text-turquoise font-medium mb-4">{boat.models} &middot; {boat.engine}</p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-foreground/70">
                    <span className="flex items-center gap-1.5">
                      <Users className="h-4 w-4 text-turquoise" />
                      {boat.recommended}
                    </span>
                  </div>

                  <p className="font-body text-sm text-foreground/60 mb-4">
                    Ideale per: {boat.idealFor}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    {boat.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-foreground/70">
                        <div className="h-1.5 w-1.5 rounded-full bg-turquoise flex-shrink-0" />
                        <span className="font-body">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-end justify-between pt-4 border-t border-slate-100">
                    <div>
                      <span className="font-body text-xs text-foreground/50">Da</span>
                      <span className="font-heading text-3xl font-bold text-ocean ml-1">&euro;{boat.price}</span>
                      <span className="font-body text-sm text-foreground/50 ml-1">/ giorno</span>
                    </div>
                    <a
                      href={FAREHARBOR_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`book-${boat.id}`}
                      className="flex items-center gap-1.5 bg-turquoise text-white font-body text-sm font-bold px-5 py-2.5 rounded-full hover:bg-turquoise-light hover:scale-105 transition-all duration-300"
                    >
                      Prenota
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pricing Transparency */}
        <ScrollReveal>
          <div className="mt-16 sm:mt-20 bg-sand rounded-2xl p-8 sm:p-12">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-ocean mb-6 text-center">
              Prezzi chiari, nessuna sorpresa
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h4 className="font-body text-sm font-bold text-turquoise uppercase tracking-wider mb-4">Incluso nel prezzo</h4>
                <ul className="space-y-2.5">
                  {['Utilizzo del gommone per l\'intera giornata', 'Motore 40 CV nuovo 2024', 'Tendalino parasole', 'Scaletta di risalita', 'Dotazioni di sicurezza', 'Borsa frigo gratuita', 'Briefing completo prima della partenza'].map((item) => (
                    <li key={item} className="flex items-start gap-2 font-body text-sm text-foreground/80">
                      <div className="h-5 w-5 rounded-full bg-turquoise/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="h-3 w-3 text-turquoise" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-body text-sm font-bold text-ocean/60 uppercase tracking-wider mb-4">Non incluso</h4>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 font-body text-sm text-foreground/80">
                    <Fuel className="h-4 w-4 text-ocean/40 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Carburante</strong> — il gommone viene consegnato con il pieno. Al rientro si effettua il rifornimento al distributore nautico vicino al porto.
                    </div>
                  </li>
                  <li className="flex items-start gap-2 font-body text-sm text-foreground/80">
                    <Sun className="h-4 w-4 text-ocean/40 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong>Assicurazione elica</strong> — &euro;30 + &euro;50 franchigia, opzionale ma consigliata. Oppure cauzione &euro;250 rimborsabile.
                    </div>
                  </li>
                </ul>
                <p className="font-body text-xs text-foreground/50 mt-4 italic">
                  Il carburante non e incluso perche ogni giornata e diversa: paghi solo quello che consumi realmente.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
