import { Calendar, MapPin, GraduationCap, Sun, Fuel, Heart, MessageCircle } from 'lucide-react';
import { FAREHARBOR_URL, WHATSAPP_URL } from '@/constants';
import ScrollReveal from '@/components/ScrollReveal';

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: 'Prenota il tuo gommone',
    description: 'Puoi prenotare online in pochi minuti, tramite WhatsApp o telefonicamente. Ti aiutiamo a scegliere il modello piu adatto.',
    cta: { label: 'Prenota Online', href: FAREHARBOR_URL, type: 'book' },
    ctaSecondary: { label: 'WhatsApp', href: WHATSAPP_URL, type: 'whatsapp' },
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Arriva al porto di Cala Mangiavolpe',
    description: 'Siamo davanti a Piazza Umberto I: 300 metri dallo sbarco traghetti, parcheggi gratuiti, bar e supermercato a pochi passi.',
  },
  {
    number: '03',
    icon: GraduationCap,
    title: 'Briefing e controllo insieme',
    description: 'Controlliamo stato dell\'elica, carburante, dotazioni e motore. Ti spieghiamo dove andare in base al vento e le regole del Parco Nazionale.',
  },
  {
    number: '04',
    icon: Sun,
    title: 'Vivi la tua giornata in mare',
    description: 'Raggiungi Spargi in 15 minuti, Budelli in 25, Caprera in 10. Fermati nelle calette piu belle e vivi l\'Arcipelago in totale liberta.',
  },
  {
    number: '05',
    icon: Fuel,
    title: 'Rientro e rifornimento',
    description: 'Il gommone viene consegnato con il pieno. Al rientro fai il rifornimento al distributore nautico vicino al pontile, in autonomia.',
  },
  {
    number: '06',
    icon: Heart,
    title: 'Non e un addio',
    description: 'Molti clienti tornano l\'anno successivo. Quando vivi il mare nel modo giusto, vuoi rifarlo. Angela e il team saranno felici di rivederti.',
  },
];

export default function HowItWorks() {
  return (
    <section id="come-funziona" data-testid="how-it-works-section" className="py-16 sm:py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-turquoise mb-3">Il Processo</p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ocean tracking-tight mb-4">
              Come funziona il noleggio
            </h2>
            <p className="font-body text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
              Abbiamo reso tutto semplice e chiaro, cosi puoi pensare solo a goderti il mare.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div
                data-testid={`step-${step.number}`}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                {/* Timeline line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-6 top-14 w-px h-[calc(100%-3.5rem)] bg-turquoise/20" />
                )}

                {/* Number circle */}
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-turquoise/10 flex items-center justify-center relative z-10">
                  <step.icon className="h-5 w-5 text-turquoise" />
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-body text-xs font-bold text-turquoise/60">{step.number}</span>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-ocean">{step.title}</h3>
                  </div>
                  <p className="font-body text-sm text-foreground/70 leading-relaxed mb-3">{step.description}</p>
                  {step.cta && (
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={step.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`step-cta-${step.cta.type}`}
                        className="inline-flex items-center gap-2 bg-turquoise text-white font-body text-xs font-bold px-5 py-2 rounded-full hover:bg-turquoise-light transition-all duration-300"
                      >
                        <Calendar className="h-3.5 w-3.5" />
                        {step.cta.label}
                      </a>
                      {step.ctaSecondary && (
                        <a
                          href={step.ctaSecondary.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-testid={`step-cta-${step.ctaSecondary.type}`}
                          className="inline-flex items-center gap-2 bg-whatsapp text-white font-body text-xs font-bold px-5 py-2 rounded-full hover:bg-whatsapp/90 transition-all duration-300"
                        >
                          <MessageCircle className="h-3.5 w-3.5" />
                          {step.ctaSecondary.label}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
