import { Calendar, MessageCircle, Waves, Wind, Anchor, Clock, MapPin, Star, Shield, Ban, Check, ChevronRight, Fuel, AlertTriangle, Lightbulb, TreePine } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { FAREHARBOR_URL, WHATSAPP_URL, WHATSAPP_NUMBER } from '@/constants';

/* ─── Images ─── */
const IMG = {
  hero: 'https://images.unsplash.com/photo-1634405277712-617c29ea436e?w=1920&q=80',
  spargi: 'https://images.unsplash.com/photo-1604321830182-faf7cfca8b55?w=800&q=80',
  budelli: 'https://images.pexels.com/photos/11533128/pexels-photo-11533128.jpeg?auto=compress&cs=tinysrgb&w=800',
  piscine: 'https://images.unsplash.com/photo-1763424689047-cb2dae159479?w=800&q=80',
  santaMaria: 'https://images.unsplash.com/photo-1763424622942-2afe42d76ef3?w=800&q=80',
  coticcio: 'https://images.pexels.com/photos/34951691/pexels-photo-34951691.jpeg?auto=compress&cs=tinysrgb&w=800',
  coticcioMorning: 'https://images.unsplash.com/photo-1767884163500-9b493d4a8977?w=800&q=80',
  caprera: 'https://images.unsplash.com/photo-1604321688638-3eb08276fdaa?w=800&q=80',
  granara: 'https://images.pexels.com/photos/417239/pexels-photo-417239.jpeg?auto=compress&cs=tinysrgb&w=800',
  aerial: 'https://images.pexels.com/photos/29489683/pexels-photo-29489683.jpeg?auto=compress&cs=tinysrgb&w=800',
};

/* ─── Sub-components ─── */

function SectionLabel({ children }) {
  return <p className="font-body text-xs tracking-[0.3em] uppercase text-turquoise mb-3">{children}</p>;
}

function ItineraryImageBlock({ src, alt, children }) {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      <img src={src} alt={alt} className="w-full aspect-[16/9] sm:aspect-[2/1] object-cover" loading="lazy" />
      {children && <div className="absolute inset-0 bg-gradient-to-t from-ocean/60 to-transparent flex flex-col justify-end p-6 sm:p-8">{children}</div>}
    </div>
  );
}

function StopCard({ title, description }) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-2 w-2 rounded-full bg-turquoise mt-2 flex-shrink-0" />
      <div>
        <h4 className="font-body text-sm font-bold text-ocean">{title}</h4>
        <p className="font-body text-sm text-foreground/60">{description}</p>
      </div>
    </div>
  );
}

function InfoBanner({ icon: Icon, variant = 'info', children }) {
  const styles = {
    info: 'bg-turquoise/5 border-turquoise/20 text-turquoise',
    warning: 'bg-amber-50 border-amber-200 text-amber-700',
    tip: 'bg-sky-50 border-sky-200 text-sky-700',
    fuel: 'bg-slate-50 border-slate-200 text-slate-600',
  };
  return (
    <div className={`flex items-start gap-3 p-4 rounded-xl border ${styles[variant]}`}>
      <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
      <p className="font-body text-sm leading-relaxed">{children}</p>
    </div>
  );
}

/* ─── Page ─── */
export default function Itinerari() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-ocean overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={IMG.hero} alt="Arcipelago di La Maddalena dall'alto" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel>Scopri l'Arcipelago</SectionLabel>
          <h1 data-testid="itinerari-title" className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Itinerari in Gommone
            <br />
            <span className="italic font-normal">a La Maddalena</span>
          </h1>
          <p className="font-body text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-8">
            I <strong className="text-white">3 percorsi piu richiesti</strong> per scoprire Spargi, Budelli, le Piscine Naturali, Cala Coticcio e Caprera.
            Ogni itinerario viene adattato ogni mattina in base a vento, mare e condizioni meteo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={FAREHARBOR_URL} target="_blank" rel="noopener noreferrer" data-testid="itinerari-hero-book"
              className="flex items-center gap-2 bg-turquoise text-white font-body text-sm font-bold px-8 py-4 rounded-full hover:bg-turquoise-light hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Calendar className="h-5 w-5" /> Prenota il tuo gommone
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="itinerari-hero-wa"
              className="flex items-center gap-2 bg-whatsapp text-white font-body text-sm font-bold px-8 py-4 rounded-full hover:bg-whatsapp/90 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <MessageCircle className="h-5 w-5" /> Chiedi consiglio su WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ PARCO NAZIONALE INTRO ══════════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionLabel>Parco Nazionale dell'Arcipelago</SectionLabel>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ocean tracking-tight mb-4">
                Quello che devi sapere prima di partire
              </h2>
              <p className="font-body text-base text-foreground/70 max-w-2xl mx-auto">
                Navigare nell'Arcipelago significa entrare in un'area marina protetta unica nel Mediterraneo.
                Prima di ogni partenza forniamo un briefing dettagliato su condizioni, zone riparate, aree regolamentate e punti di ancoraggio.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Waves, title: 'Condizioni della giornata', text: 'Analizziamo insieme stato del mare e previsioni meteo per scegliere rotta e momento migliori.' },
              { icon: Wind, title: 'Zone riparate dal vento', text: 'In base alla direzione del vento indichiamo quali calette raggiungere e quali evitare per navigare in sicurezza.' },
              { icon: Anchor, title: 'Ancoraggi e regolamenti', text: 'Spieghiamo dove e consentito ancorare, le boe da rispettare e le zone interdette del Parco Nazionale.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center p-6 rounded-2xl bg-sand">
                  <div className="h-12 w-12 rounded-full bg-turquoise/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-turquoise" />
                  </div>
                  <h3 className="font-body text-sm font-bold text-ocean mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-foreground/60">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ ITINERARY OVERVIEW CARDS ══════════ */}
      <section className="py-12 sm:py-16 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: '01', name: 'Il Classico', stops: 'Spargi · Budelli · Piscine Naturali · Santa Maria', tag: 'Per tutti i livelli', tagColor: 'bg-turquoise', time: 'Giornata intera', anchor: '#itinerario-01' },
              { num: '02', name: 'Caprera Completo', stops: 'Circumnavigazione · Cala Coticcio · Cala Napoletana', tag: 'Con mare calmo', tagColor: 'bg-amber-500', time: 'Giornata intera', anchor: '#itinerario-02' },
              { num: '03', name: 'Lo Strategico', stops: 'Cala Coticcio al mattino · Piscine Naturali · Spargi', tag: 'Mare favorevole', tagColor: 'bg-ocean', time: 'Il piu ottimizzato', anchor: '#itinerario-03' },
            ].map((it, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <a href={it.anchor} data-testid={`itinerary-card-${it.num}`}
                  className="group block bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:border-turquoise/30 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-heading text-3xl font-bold text-turquoise/30">{it.num}</span>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-ocean">{it.name}</h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className={`${it.tagColor} text-white font-body text-[10px] font-bold px-2 py-0.5 rounded-full`}>{it.tag}</span>
                        <span className="font-body text-[11px] text-foreground/50 flex items-center gap-1"><Clock className="h-3 w-3" />{it.time}</span>
                      </div>
                    </div>
                  </div>
                  <p className="font-body text-sm text-foreground/60 mb-3">{it.stops}</p>
                  <span className="font-body text-xs font-bold text-turquoise flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                    Scopri il percorso <ChevronRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ ITINERARIO 01 — IL CLASSICO ══════════ */}
      <section id="itinerario-01" className="py-16 sm:py-24 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-body text-xs font-bold text-turquoise bg-turquoise/10 px-3 py-1 rounded-full">Itinerario 01</span>
              <span className="font-body text-xs text-foreground/50">Giornata intera · Per tutti</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ocean tracking-tight mb-4">
              Itinerario Classico
            </h2>
            <p className="font-body text-base text-foreground/70 mb-8 max-w-2xl">
              Il giro piu completo e richiesto dell'Arcipelago. Ideale per una giornata intera, adatto a tutti anche a chi e alla prima esperienza.
              Partenza da Cala Mangiavolpe: in circa 15 minuti si raggiunge la prima tappa.
            </p>
          </ScrollReveal>

          {/* Spargi */}
          <ScrollReveal>
            <ItineraryImageBlock src={IMG.spargi} alt="Isola di Spargi acque cristalline arcipelago La Maddalena">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-white/20 backdrop-blur-sm text-white font-body text-xs px-3 py-1 rounded-full flex items-center gap-1"><Clock className="h-3 w-3" />15/20 min</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">Isola di Spargi</h3>
            </ItineraryImageBlock>
          </ScrollReveal>

          <ScrollReveal>
            <div className="py-8 space-y-6">
              <p className="font-body text-base text-foreground/70">
                Un paradiso di granito rosa e calette turchesi. Selvaggia e accessibile, con sabbia bianca e acque di un turchese intenso difficile da dimenticare.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <StopCard title="Cala Corsara" description="La piu grande e famosa. Roccia del Bulldog e Testa della Strega." />
                <StopCard title="Cala Soraya" description="La Principessa Soraya amava bagnarsi qui. Caletta riparata, fondo sabbioso." />
                <StopCard title="Cala Granara" description="Sabbia chiara, acqua bassa color smeraldo — ideale per famiglie." />
                <StopCard title="Cala Ferrigno & Bonifazzinca" description="Piu selvagge e riservate. Raggiungibili solo via mare." />
              </div>
              <InfoBanner icon={Waves} variant="info">
                <strong>Bocche di Bonifacio:</strong> Tratto noto per correnti e venti variabili. Durante il briefing indicheremo la rotta piu sicura in base al vento della giornata.
              </InfoBanner>
            </div>
          </ScrollReveal>

          {/* Budelli */}
          <ScrollReveal>
            <ItineraryImageBlock src={IMG.budelli} alt="Spiaggia Rosa di Budelli Parco Nazionale La Maddalena">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-white/20 backdrop-blur-sm text-white font-body text-xs px-3 py-1 rounded-full flex items-center gap-1"><Clock className="h-3 w-3" />25/30 min</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">Isola di Budelli — La Spiaggia Rosa</h3>
            </ItineraryImageBlock>
          </ScrollReveal>

          <ScrollReveal>
            <div className="py-8 space-y-6">
              <p className="font-body text-base text-foreground/70">
                Famosa in tutto il mondo, visibile solo via mare. La sabbia rosata e composta da frammenti di coralli — un fenomeno unico nel Mediterraneo.
              </p>
              <InfoBanner icon={AlertTriangle} variant="warning">
                <strong>Zona protetta — regole obbligatorie:</strong><br />
                Vietato ancorare fuori dalle boe. Vietato entrare con il gommone all'interno delle boe. Vietato fare il bagno dentro o fuori l'area delimitata.<br />
                <em>Spieghiamo tutto prima della partenza. La tutela ambientale e fondamentale.</em>
              </InfoBanner>
            </div>
          </ScrollReveal>

          {/* Piscine Naturali + Santa Maria */}
          <ScrollReveal>
            <ItineraryImageBlock src={IMG.piscine} alt="Piscine Naturali Porto della Madonna acque basse turchesi">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">Piscine Naturali e Isola di Santa Maria</h3>
            </ItineraryImageBlock>
          </ScrollReveal>

          <ScrollReveal>
            <div className="py-8 space-y-6">
              <p className="font-body text-base text-foreground/70">
                Subito dopo Budelli si entra nello specchio d'acqua piu bello del Parco: <strong className="text-ocean">acque basse, sabbia chiarissima, colori dal turchese allo smeraldo</strong>. Qui e consentito ancorare e fare il bagno.
              </p>
              <p className="font-body text-base text-foreground/70">
                A pochi metri si trova la splendida <strong className="text-ocean">Cala Santa Maria</strong>, con spiaggia ampia e fondale sabbioso. Perfetta per un ultimo bagno prima del rientro.
              </p>
              <InfoBanner icon={Fuel} variant="fuel">
                <strong>Rientro:</strong> Si passa davanti a Porto di Cala Gavetta, dove si trova il distributore nautico per il rifornimento. Poi rientro al pontile di Cala Mangiavolpe.
              </InfoBanner>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════ ITINERARIO 02 — CAPRERA COMPLETO ══════════ */}
      <section id="itinerario-02" className="py-16 sm:py-24 bg-sand scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-body text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">Itinerario 02</span>
              <span className="font-body text-xs text-foreground/50">Circumnavigazione · Con mare calmo</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ocean tracking-tight mb-4">
              Caprera Completo
            </h2>
            <p className="font-body text-base text-foreground/70 mb-8 max-w-2xl">
              Il giro dell'isola di Caprera — lato ponente e lato levante — con la mitica Cala Coticcio (Tahiti).
              Perfetto quando il mare consente la circumnavigazione. Si parte passando sotto il Ponte della Moneta.
            </p>
          </ScrollReveal>

          {/* Cala Coticcio hero image */}
          <ScrollReveal>
            <ItineraryImageBlock src={IMG.coticcio} alt="Cala Coticcio Tahiti Caprera La Maddalena acqua cristallina">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-amber-500/80 backdrop-blur-sm text-white font-body text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Star className="h-3 w-3" /> La piu bella dell'Arcipelago
                </span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">Cala Coticcio — La "Tahiti"</h3>
            </ItineraryImageBlock>
          </ScrollReveal>

          {/* Lato Ponente */}
          <ScrollReveal>
            <div className="py-8">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-ocean mb-2 flex items-center gap-2">
                Lato Ponente — Le calette riparate
              </h3>
              <p className="font-body text-base text-foreground/70 mb-6">
                Si esplora il lato ovest di Caprera, generalmente piu riparato dal vento. Quattro soste imperdibili:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <img src={IMG.caprera} alt="Cala Garibaldi Caprera" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="space-y-4 flex flex-col justify-center">
                  <StopCard title="Cala Garibaldi" description="Spiaggia ampia e riparata, fondali bassi — ideale famiglie." />
                  <StopCard title="Cala Serena" description="Acque trasparenti, grande tranquillita." />
                  <StopCard title="Tra Serena e Napoletana" description="Numerose insenature di incredibile bellezza." />
                  <StopCard title="Cala Napoletana" description="Una delle piu suggestive. Ottima per lo snorkeling." />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Cala Coticcio detail */}
          <ScrollReveal>
            <div className="py-8">
              <ItineraryImageBlock src={IMG.coticcioMorning} alt="Cala Coticcio al mattino acqua cristallina deserta">
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">Cala Coticcio — La "Tahiti" dell'Arcipelago</h3>
              </ItineraryImageBlock>
              <div className="mt-6 space-y-4">
                <p className="font-body text-base text-foreground/70">
                  Considerata tra le spiagge piu belle al mondo: acqua cristallina dal turchese al verde smeraldo, granito rosa, vegetazione mediterranea.
                </p>
                <InfoBanner icon={Lightbulb} variant="tip">
                  <strong>Consiglio di Angela:</strong> Meglio arrivare nelle prime ore del mattino, perche durante la giornata si riempie rapidamente. L'Itinerario Strategico (n.03) e studiato esattamente per questo.
                </InfoBanner>
                <p className="font-body text-sm text-foreground/60">
                  Dopo Coticcio si prosegue verso levante passando davanti a Cala Portese, la Spiaggia del Relitto e Cala Andreani. Superata Punta Rossa si rientra a La Maddalena.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════ ITINERARIO 03 — LO STRATEGICO ══════════ */}
      <section id="itinerario-03" className="py-16 sm:py-24 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-body text-xs font-bold text-white bg-ocean px-3 py-1 rounded-full">Itinerario 03</span>
              <span className="font-body text-xs text-foreground/50">Il piu ottimizzato · Mare favorevole</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ocean tracking-tight mb-4">
              Itinerario Strategico
            </h2>
            <p className="font-body text-base text-foreground/70 mb-10 max-w-2xl">
              L'itinerario piu dinamico e ottimizzato. Consigliato nelle giornate con mare favorevole — per chi vuole vedere il meglio dell'arcipelago <strong className="text-ocean">senza folla e senza compromessi</strong>.
            </p>
          </ScrollReveal>

          {/* Steps */}
          <div className="space-y-8">
            {[
              {
                num: '1',
                title: 'Si parte verso Punta Rossa',
                text: 'Non si passa sotto il ponte di Caprera, ma si raggiunge direttamente il lato Levante. Un approccio che ottimizza i tempi e permette di arrivare a Cala Coticcio quando e ancora quasi deserta.',
                image: null,
              },
              {
                num: '2',
                title: 'Cala Coticcio nelle prime ore del mattino',
                text: 'Arrivare a Cala Coticcio prima della folla: meno natanti, acqua piu limpida, silenzio assoluto. Goditi la "Tahiti dell\'Arcipelago" come la vedono in pochi.',
                image: null,
              },
              {
                num: '3',
                title: 'Direzione Piscine Naturali di Budelli',
                text: 'Si naviga verso le Piscine Naturali di Porto della Madonna per la sosta del pranzo. Acque bassissime, colori surreali, relax totale.',
                image: IMG.granara,
                imageAlt: 'Cala Granara Spargi acque smeraldo',
              },
              {
                num: '4',
                title: 'Discesa verso Spargi',
                text: 'Nel pomeriggio si scende verso Spargi. In base al vento si sceglie la caletta migliore.',
                beaches: ['Cala Granara', 'Cala Soraya', 'Cala Connari', 'Cala Corsara'],
              },
              {
                num: '5',
                title: 'Rientro in porto',
                text: 'Si rientra a Cala Mangiavolpe dopo aver visto il meglio dell\'Arcipelago in un unico giro ottimizzato. Rifornimento al distributore nautico di Cala Gavetta e restituzione del gommone.',
                image: null,
              },
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="relative flex gap-5">
                  {/* Timeline */}
                  {i < 4 && <div className="absolute left-5 top-12 w-px h-[calc(100%-2rem)] bg-turquoise/15" />}
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-ocean text-white font-heading text-lg font-bold flex items-center justify-center relative z-10">
                    {step.num}
                  </div>
                  <div className="flex-1 pb-2">
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-ocean mb-2">{step.title}</h3>
                    <p className="font-body text-sm text-foreground/70 mb-3">{step.text}</p>
                    {step.beaches && (
                      <div className="flex flex-wrap gap-2">
                        {step.beaches.map(b => (
                          <span key={b} className="font-body text-xs bg-turquoise/10 text-turquoise font-medium px-3 py-1 rounded-full flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> {b}
                          </span>
                        ))}
                      </div>
                    )}
                    {step.image && (
                      <div className="mt-4 rounded-xl overflow-hidden">
                        <img src={step.image} alt={step.imageAlt} className="w-full aspect-[2/1] object-cover" loading="lazy" />
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PARCO NAZIONALE RULES ══════════ */}
      <section className="py-16 sm:py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionLabel>Parco Nazionale</SectionLabel>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ocean tracking-tight mb-4">
                La liberta va vissuta con consapevolezza
              </h2>
              <p className="font-body text-base text-foreground/70 max-w-2xl mx-auto">
                L'intero arcipelago e un'area marina protetta di altissimo valore ambientale.
                Navigare qui e un privilegio e porta con se la responsabilita di rispettare un ecosistema fragile e unico.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {[
              { icon: Anchor, title: 'Ancoraggi regolamentati', text: 'In alcune zone l\'ancoraggio e consentito solo nelle boe del Parco. Ti indichiamo ogni giorno dove sostare in sicurezza.' },
              { icon: Ban, title: 'Aree interdette', text: 'La Spiaggia Rosa di Budelli e alcune zone di Caprera hanno restrizioni precise. La nostra conoscenza locale ti permette di navigare senza rischi.' },
              { icon: Check, title: 'Gommoni in regola', text: 'Tutti i nostri gommoni sono in regola per navigare nelle acque del Parco nel rispetto delle normative vigenti. Incluso nel noleggio.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center p-6 sm:p-8 rounded-2xl bg-white border border-slate-100">
                  <div className="h-12 w-12 rounded-full bg-turquoise/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-turquoise" />
                  </div>
                  <h3 className="font-body text-sm font-bold text-ocean mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-foreground/60">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="flex items-center gap-3 p-5 rounded-xl bg-turquoise/5 border border-turquoise/20 max-w-3xl mx-auto">
              <TreePine className="h-6 w-6 text-turquoise flex-shrink-0" />
              <p className="font-body text-sm text-ocean/80">
                <strong>La liberta e bellissima, ma va vissuta con consapevolezza.</strong> Prima di ogni partenza forniamo indicazioni precise su tutte le norme del Parco Nazionale di La Maddalena.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════ FINAL CTA ══════════ */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.aerial} alt="Vista aerea Arcipelago di La Maddalena" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-ocean/80" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Scegli il tuo itinerario,
              <br />
              <span className="italic font-normal">ci pensiamo noi al resto</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-white/80 max-w-xl mx-auto mb-8">
              Ogni mattina Angela ti consiglia il percorso migliore in base alle condizioni del mare.
              Prenota il tuo gommone e vivi l'Arcipelago come merita.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={FAREHARBOR_URL} target="_blank" rel="noopener noreferrer" data-testid="itinerari-cta-book"
                className="flex items-center gap-2 bg-turquoise text-white font-body text-sm sm:text-base font-bold px-8 py-4 rounded-full hover:bg-turquoise-light hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Calendar className="h-5 w-5" /> Prenota Online
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="itinerari-cta-wa"
                className="flex items-center gap-2 bg-whatsapp text-white font-body text-sm sm:text-base font-bold px-8 py-4 rounded-full hover:bg-whatsapp/90 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <MessageCircle className="h-5 w-5" /> WhatsApp {WHATSAPP_NUMBER}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
