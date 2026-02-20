import { Ship, Users, GraduationCap, Shield, MapPin, Heart } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const features = [
  {
    icon: Ship,
    title: 'Gommoni nuovi 2024',
    description: 'Motori 40 CV Selva, Yamaha o Honda di ultima generazione, perfetti anche senza patente nautica.',
  },
  {
    icon: Users,
    title: 'Comfort reale a bordo',
    description: 'Consigliamo sempre un numero inferiore di passeggeri per garantire il massimo comfort. Qualita, non quantita.',
  },
  {
    icon: GraduationCap,
    title: 'Briefing completo',
    description: 'Prima della partenza controlliamo insieme elica, carburante, sicurezza e ti spieghiamo come navigare nel Parco Nazionale.',
  },
  {
    icon: Shield,
    title: 'Assicurazione trasparente',
    description: 'Assicurazione elica a 30 euro + 50 euro franchigia oppure cauzione 250 euro. Nessuna sorpresa, tutto spiegato prima di partire.',
  },
  {
    icon: MapPin,
    title: 'Posizione strategica',
    description: 'Davanti a Piazza Umberto I: 300 metri dallo sbarco traghetti, parcheggi gratuiti, bar, supermercato e servizi a pochi passi.',
  },
  {
    icon: Heart,
    title: 'Passione locale',
    description: 'Non siamo una grande societa, ma persone del posto. Conosciamo il mare, i venti e ogni angolo dell\'Arcipelago.',
  },
];

export default function WhyChooseUs() {
  return (
    <section data-testid="why-choose-us-section" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-turquoise mb-3">Perche Noi</p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ocean tracking-tight mb-4">
              Perche scegliere noi
            </h2>
            <p className="font-body text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
              Angela e il suo team ti accolgono con il sorriso, ma soprattutto con competenza e attenzione alla sicurezza.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div
                data-testid={`feature-card-${i}`}
                className="group p-6 sm:p-8 rounded-2xl bg-sand hover:bg-white hover:shadow-md border border-transparent hover:border-slate-100 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-turquoise/10 flex items-center justify-center mb-5 group-hover:bg-turquoise/20 transition-colors duration-300">
                  <feature.icon className="h-6 w-6 text-turquoise" />
                </div>
                <h3 className="font-heading text-xl font-bold text-ocean mb-2">{feature.title}</h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
