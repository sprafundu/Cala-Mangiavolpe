import ScrollReveal from '@/components/ScrollReveal';

export default function AboutSection() {
  return (
    <section id="chi-siamo" data-testid="about-section" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1597822759119-98ac55426359?w=800&q=80"
                alt="Tramonto sull'Arcipelago di La Maddalena"
                className="w-full aspect-[4/3] object-cover rounded-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-turquoise text-white p-4 sm:p-6 rounded-2xl shadow-lg">
                <p className="font-heading text-3xl sm:text-4xl font-bold leading-none">4.9</p>
                <p className="font-body text-xs mt-1 opacity-80">su Google</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-turquoise mb-3">Chi Siamo</p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ocean tracking-tight mb-6">
                Una passione che nasce dal mare
              </h2>
              <div className="space-y-4 font-body text-sm sm:text-base text-foreground/80 leading-relaxed">
                <p>
                  Dietro Rental Boat Cala Mangiavolpe non c'e una grande societa anonima, ma una realta locale costruita con impegno, presenza e passione.
                  <strong className="text-ocean"> Angela</strong> e la titolare del noleggio. Ogni giorno accoglie personalmente i clienti con il sorriso, ma soprattutto con attenzione e responsabilita.
                </p>
                <p>
                  Per noi il noleggio non e "consegnare un gommone". E <strong className="text-ocean">far vivere un'esperienza nel modo giusto</strong>.
                </p>
                <p>
                  Navigare nell'Arcipelago di La Maddalena non e solo lavoro per noi: e parte della nostra vita. Conosciamo le zone piu riparate con maestrale, le correnti e i fondali, le regole del Parco Nazionale.
                </p>
                <p>
                  Crediamo nella chiarezza: prezzi spiegati prima, cauzione e assicurazione senza sorprese, controllo elica insieme. Il nostro obiettivo non e fare "una giornata e basta". E far si che tu voglia tornare.
                </p>
              </div>

              <blockquote className="mt-8 pl-6 border-l-2 border-turquoise">
                <p className="font-heading text-xl sm:text-2xl italic text-ocean/80">
                  "Ogni giorno il mare e diverso. Ogni giornata e un'avventura unica."
                </p>
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
