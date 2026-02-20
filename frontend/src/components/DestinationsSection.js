import { Clock, MapPin, Wind, Compass, CloudSun } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const destinations = [
  {
    id: 'spargi',
    name: 'Isola di Spargi',
    subtitle: 'La piu amata',
    time: '15/20 min',
    description: 'Spesso la prima tappa consigliata. Vicina, scenografica e con calette facilmente accessibili anche a chi e alla prima esperienza.',
    highlights: ['Cala Corsara', 'Cala Soraya', 'Cala Granara', 'Cala Connari'],
    image: 'https://images.unsplash.com/photo-1604321830182-faf7cfca8b55?w=800&q=80',
    imageAlt: 'Isola di Spargi acque cristalline',
    large: true,
  },
  {
    id: 'budelli',
    name: 'Budelli e Piscine Naturali',
    subtitle: 'Famosa nel mondo',
    time: '25/30 min',
    description: 'Famosa per la Spiaggia Rosa (area protetta). Porto Madonna offre uno spettacolo unico con acqua cristallina e fondali chiari.',
    highlights: ['Spiaggia Rosa', 'Piscine Naturali', 'Porto Madonna'],
    image: 'https://images.pexels.com/photos/29489683/pexels-photo-29489683.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Budelli e Piscine Naturali acque turchesi',
    large: false,
  },
  {
    id: 'santa-maria',
    name: 'Santa Maria',
    subtitle: 'Acque basse e tranquille',
    time: '25/30 min',
    description: 'Perfetta per una sosta piu lunga. Ideale per famiglie e gruppi che vogliono rilassarsi. Acque basse e sabbia chiara.',
    highlights: ['Acque basse', 'Sabbia chiara', 'Ideale famiglie'],
    image: 'https://images.unsplash.com/photo-1763424689047-cb2dae159479?w=800&q=80',
    imageAlt: 'Santa Maria acque basse e tranquille',
    large: false,
  },
  {
    id: 'caprera',
    name: 'Caprera',
    subtitle: 'Natura selvaggia',
    time: '10/15 min',
    description: 'Piu selvaggia e autentica. Cala Coticcio, la "Tahiti", e la piu fotografata dell\'arcipelago.',
    highlights: ['Cala Napoletana', 'Cala Serena', 'Cala Garibaldi', 'Cala Coticcio'],
    image: 'https://images.unsplash.com/photo-1604321688638-3eb08276fdaa?w=800&q=80',
    imageAlt: 'Caprera natura selvaggia acqua turchese',
    large: true,
  },
];

const windConditions = [
  { icon: Wind, condition: 'Con maestrale', text: 'Si preferiscono zone piu riparate, lontano dai tratti aperti.' },
  { icon: Compass, condition: 'Con scirocco', text: 'Si cambia completamente rotta e si scelgono baie diverse.' },
  { icon: CloudSun, condition: 'Con mare calmo', text: 'Si puo fare il giro completo dell\'arcipelago in piena liberta.' },
];

export default function DestinationsSection() {
  return (
    <section id="destinazioni" data-testid="destinations-section" className="py-16 sm:py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-turquoise mb-3">Destinazioni</p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ocean tracking-tight mb-4">
              Cosa vedere in gommone
            </h2>
            <p className="font-body text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
              Dal pontile di Cala Mangiavolpe puoi raggiungere le principali destinazioni in pochi minuti.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {destinations.map((dest, i) => (
            <ScrollReveal key={dest.id} delay={i * 100} className={dest.large ? 'md:row-span-1' : ''}>
              <div
                data-testid={`destination-${dest.id}`}
                className="group relative h-full min-h-[300px] sm:min-h-[360px] rounded-2xl overflow-hidden"
              >
                <img
                  src={dest.image}
                  alt={dest.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean/80 via-ocean/20 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="flex items-center gap-1 bg-white/20 backdrop-blur-sm text-white font-body text-xs font-medium px-3 py-1 rounded-full">
                      <Clock className="h-3 w-3" />
                      {dest.time}
                    </span>
                    <span className="text-turquoise-light font-body text-xs font-medium">{dest.subtitle}</span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-2">{dest.name}</h3>
                  <p className="font-body text-sm text-white/80 mb-3 max-w-md">{dest.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {dest.highlights.map((h) => (
                      <span key={h} className="font-body text-[11px] text-white/70 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Wind Conditions */}
        <ScrollReveal>
          <div className="mt-12 sm:mt-16 text-center">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-ocean mb-6">
              L'itinerario cambia in base al vento
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {windConditions.map((wc, i) => (
                <div key={i} className="flex flex-col items-center text-center p-4">
                  <div className="h-12 w-12 rounded-full bg-turquoise/10 flex items-center justify-center mb-3">
                    <wc.icon className="h-6 w-6 text-turquoise" />
                  </div>
                  <h4 className="font-body text-sm font-bold text-ocean mb-1">{wc.condition}</h4>
                  <p className="font-body text-sm text-foreground/60">{wc.text}</p>
                </div>
              ))}
            </div>
            <p className="font-body text-sm text-foreground/50 mt-4 italic max-w-lg mx-auto">
              Grazie alla nostra esperienza diretta, ti suggeriamo ogni giorno il percorso migliore in base alle condizioni reali del mare.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
