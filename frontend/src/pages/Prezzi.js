import { Calendar, MessageCircle, Ship, Clock, Fuel, Shield, Phone, Users, Compass, Map, PhoneCall, LifeBuoy, Snowflake, HelpCircle, Sun, Flower2, Leaf, ChevronRight, Check, Info, Flame } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { FAREHARBOR_URL, WHATSAPP_URL, WHATSAPP_NUMBER } from '@/constants';

/* ─── Images ─── */
const IMG = {
  hero: 'https://images.unsplash.com/photo-1534196143787-f563337ca933?w=1920&q=80',
  fleet550: 'https://images.pexels.com/photos/5730197/pexels-photo-5730197.jpeg?auto=compress&cs=tinysrgb&w=800',
  fleet600: 'https://images.unsplash.com/photo-1763424622942-2afe42d76ef3?w=800&q=80',
  joker: 'https://images.pexels.com/photos/35740506/pexels-photo-35740506.jpeg?auto=compress&cs=tinysrgb&w=800',
  cta: 'https://images.pexels.com/photos/34951694/pexels-photo-34951694.jpeg?auto=compress&cs=tinysrgb&w=1920',
};

/* ─── Price Data ─── */
const prices550 = [
  { period: 'Aprile', price: 80 },
  { period: 'Maggio', price: 90 },
  { period: '1 – 15 Giugno', price: 110 },
  { period: '16 – 30 Giugno', price: 120 },
  { period: '1 – 15 Luglio', price: 160 },
  { period: '16 – 31 Luglio', price: 180 },
  { period: '1 – 7 Agosto', price: 240 },
  { period: '8 – 19 Agosto', price: 260, hot: true },
  { period: '20 – 31 Agosto', price: 235 },
  { period: '1 – 15 Settembre', price: 155 },
  { period: '16 – 30 Settembre', price: 135 },
  { period: 'Ottobre', price: 90 },
];

const prices600 = [
  { period: 'Aprile', price: 90 },
  { period: 'Maggio', price: 110 },
  { period: '1 – 15 Giugno', price: 120 },
  { period: '16 – 30 Giugno', price: 130 },
  { period: '1 – 15 Luglio', price: 180 },
  { period: '16 – 31 Luglio', price: 200 },
  { period: '1 – 7 Agosto', price: 260 },
  { period: '8 – 19 Agosto', price: 280, hot: true },
  { period: '20 – 31 Agosto', price: 255 },
  { period: '1 – 15 Settembre', price: 175 },
  { period: '16 – 30 Settembre', price: 145 },
  { period: 'Ottobre', price: 100 },
];

/* ─── Sub-components ─── */
function SectionLabel({ children }) {
  return <p className="font-body text-xs tracking-[0.3em] uppercase text-turquoise mb-3">{children}</p>;
}

function PriceTable({ title, subtitle, ideal, data, features, image, imageAlt }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
      {/* Header with image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img src={image} alt={imageAlt} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean/70 to-transparent" />
        <div className="absolute bottom-4 left-6 right-6">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">{title}</h3>
          <p className="font-body text-sm text-white/80">{subtitle}</p>
        </div>
      </div>

      <div className="p-6">
        <p className="font-body text-sm text-turquoise font-medium mb-4">{ideal}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {features.map((f, i) => (
            <span key={i} className="font-body text-[11px] bg-turquoise/5 text-ocean/70 px-2.5 py-1 rounded-full flex items-center gap-1">
              <Check className="h-3 w-3 text-turquoise" /> {f}
            </span>
          ))}
        </div>

        {/* Price Table */}
        <div className="border border-slate-100 rounded-xl overflow-hidden">
          <div className="grid grid-cols-2 bg-ocean text-white px-4 py-3">
            <span className="font-body text-xs font-bold uppercase tracking-wider">Periodo</span>
            <span className="font-body text-xs font-bold uppercase tracking-wider text-right">Prezzo / giorno</span>
          </div>
          {data.map((row, i) => (
            <div
              key={i}
              data-testid={`price-row-${i}`}
              className={`grid grid-cols-2 px-4 py-2.5 ${
                i % 2 === 0 ? 'bg-white' : 'bg-sand'
              } ${row.hot ? 'bg-amber-50' : ''}`}
            >
              <span className="font-body text-sm text-foreground/80 flex items-center gap-1.5">
                {row.period}
                {row.hot && <Flame className="h-3.5 w-3.5 text-amber-500" />}
              </span>
              <span className={`font-body text-sm font-bold text-right ${row.hot ? 'text-amber-600' : 'text-ocean'}`}>
                &euro; {row.price}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-2 mt-4 p-3 rounded-lg bg-slate-50">
          <Fuel className="h-4 w-4 text-ocean/40 flex-shrink-0 mt-0.5" />
          <p className="font-body text-xs text-foreground/50">
            Il carburante non e incluso nel prezzo. Il gommone viene consegnato con il pieno.
          </p>
        </div>

        <a
          href={FAREHARBOR_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid={`price-book-${title.includes('5,50') ? '550' : '600'}`}
          className="flex items-center justify-center gap-2 bg-turquoise text-white font-body text-sm font-bold px-6 py-3 rounded-full hover:bg-turquoise-light hover:scale-105 transition-all duration-300 w-full mt-5"
        >
          <Calendar className="h-4 w-4" /> Prenota questo gommone
        </a>
      </div>
    </div>
  );
}

/* ─── Page ─── */
export default function Prezzi() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-ocean overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={IMG.hero} alt="Gommone in navigazione La Maddalena" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel>Listino 2026</SectionLabel>
          <h1 data-testid="prezzi-title" className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Noleggio Gommoni
            <br />
            <span className="italic font-normal">Prezzi 2026</span>
          </h1>
          <p className="font-body text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-8">
            Il prezzo del noleggio varia in base a periodo stagionale, modello e durata.
            Di seguito il listino completo e aggiornato. Tutti i prezzi si intendono per noleggio giornaliero.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={FAREHARBOR_URL} target="_blank" rel="noopener noreferrer" data-testid="prezzi-hero-book"
              className="flex items-center gap-2 bg-turquoise text-white font-body text-sm font-bold px-8 py-4 rounded-full hover:bg-turquoise-light hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Calendar className="h-5 w-5" /> Verifica disponibilita
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="prezzi-hero-wa"
              className="flex items-center gap-2 bg-whatsapp text-white font-body text-sm font-bold px-8 py-4 rounded-full hover:bg-whatsapp/90 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <MessageCircle className="h-5 w-5" /> Chiedi un preventivo
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ HOW PRICING WORKS ══════════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionLabel>Listino 2026</SectionLabel>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ocean tracking-tight mb-4">
                Come si calcola il prezzo del noleggio
              </h2>
              <p className="font-body text-base text-foreground/70 max-w-2xl mx-auto">
                Tre fattori determinano il costo della tua giornata in gommone a La Maddalena.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Calendar, title: 'Periodo stagionale', text: 'Agosto e alta stagione. Maggio, giugno e settembre offrono condizioni ideali con meno affollamento. Aprile e ottobre sono perfetti per giornate tranquille.' },
              { icon: Ship, title: 'Modello di gommone', text: 'Proponiamo gommoni da 5,50 m e 6 m senza patente, e un Joker Boat 7 m con motore 150 CV per chi ha la patente o desidera uno skipper.' },
              { icon: Clock, title: 'Durata del noleggio', text: 'Il listino si riferisce al noleggio giornaliero. Per durate diverse o tariffe settimanali contattaci per un preventivo personalizzato.' },
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

      {/* ══════════ PRICE TABLES ══════════ */}
      <section className="py-16 sm:py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionLabel>Listino prezzi giornaliero</SectionLabel>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ocean tracking-tight mb-4">
                Tariffe per gommone e periodo
              </h2>
              <p className="font-body text-base text-foreground/70 max-w-xl mx-auto">
                Tutti i prezzi si intendono per noleggio giornaliero — carburante escluso.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ScrollReveal>
              <PriceTable
                title="Gommoni 5,50 m"
                subtitle="BWA – Marsea SP 90"
                ideal="Ideali per 4/5 persone"
                data={prices550}
                features={['Motori 40 CV senza patente', 'Tendalino parasole', 'Scaletta di risalita', 'Doppia tanica carburante', 'Borsa frigo inclusa']}
                image={IMG.fleet550}
                imageAlt="Gommone BWA 5,50 m noleggio La Maddalena"
              />
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <PriceTable
                title="Gommoni 6 m"
                subtitle="Alson – Marsea 100"
                ideal="Ideali per 5/6 persone — piu spazio e comfort"
                data={prices600}
                features={['Motori 40 CV', 'Maggiore stabilita e prendisole', 'Tendalino parasole', 'Scaletta di risalita', 'Dotazioni sicurezza complete']}
                image={IMG.fleet600}
                imageAlt="Gommone Alson 6 m comfort superiore"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════ WHAT'S INCLUDED ══════════ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionLabel>Incluso nel prezzo</SectionLabel>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ocean tracking-tight mb-4">
                Cosa e incluso nel noleggio
              </h2>
              <p className="font-body text-base text-foreground/70 max-w-2xl mx-auto">
                Il prezzo del noleggio giornaliero comprende tutto cio che ti serve per partire in sicurezza e goderti la giornata senza pensieri.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Ship, title: 'Noleggio giornaliero', text: 'Gommone assegnato per l\'intera giornata, dalla partenza al rientro.' },
              { icon: Compass, title: 'Briefing pre-partenza', text: 'Condizioni del mare, rotte, regole del Parco, punti di ancoraggio.' },
              { icon: Map, title: 'Mappa dell\'Arcipelago', text: 'Cartina dettagliata con le principali calette e percorsi consigliati.' },
              { icon: PhoneCall, title: 'Assistenza telefonica', text: 'Siamo sempre raggiungibili durante la tua giornata in mare.' },
              { icon: LifeBuoy, title: 'Dotazioni di sicurezza', text: 'Giubbotti salvagente, estintore, segnali di emergenza, kit pronto soccorso.' },
              { icon: Snowflake, title: 'Borsa frigo gratuita', text: 'Per mantenere freschi acqua, bevande e pranzo durante la giornata.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-sand" data-testid={`included-item-${i}`}>
                  <div className="h-10 w-10 rounded-lg bg-turquoise/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-turquoise" />
                  </div>
                  <div>
                    <h3 className="font-body text-sm font-bold text-ocean mb-1">{item.title}</h3>
                    <p className="font-body text-sm text-foreground/60">{item.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FUEL COSTS ══════════ */}
      <section className="py-16 sm:py-24 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionLabel>Carburante</SectionLabel>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ocean tracking-tight mb-4">
                Quanto si spende di carburante?
              </h2>
              <p className="font-body text-base text-foreground/70 max-w-2xl mx-auto">
                Il carburante non e incluso nel prezzo. Il gommone viene consegnato con il pieno: al rientro puoi rifornire al distributore nautico di Cala Gavetta, oppure pagare il consumo calcolato al rientro.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {[
              { label: 'Itinerario breve', price: '~ \u20AC 20', desc: 'Es. solo Spargi – Cala Corsara con lunga sosta all\'ancora', color: 'bg-turquoise/10 border-turquoise/20' },
              { label: 'Giornata completa', price: '\u20AC 50 / 60', desc: 'Giro classico con piu soste e spostamenti piu lunghi', color: 'bg-turquoise/10 border-turquoise/30' },
              { label: 'Utilizzo intenso', price: 'fino a \u20AC 80', desc: 'Doppia tanica o serbatoio ampio, itinerari molto lunghi', color: 'bg-ocean/5 border-ocean/20' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={`text-center p-6 rounded-2xl border ${item.color}`} data-testid={`fuel-tier-${i}`}>
                  <p className="font-body text-xs font-bold text-turquoise uppercase tracking-wider mb-2">{item.label}</p>
                  <p className="font-heading text-3xl font-bold text-ocean mb-2">{item.price}</p>
                  <p className="font-body text-sm text-foreground/60">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="space-y-3 max-w-2xl mx-auto">
              <p className="font-body text-sm text-foreground/60 text-center">
                La spesa puo variare indicativamente da &euro; 20 a &euro; 80 in base alla giornata e allo stile di navigazione.
              </p>
              <p className="font-body text-sm text-foreground/60 text-center">
                Il consumo dipende da: <strong className="text-ocean">numero di persone a bordo, peso complessivo, velocita, itinerario scelto</strong> e condizioni del mare.
              </p>
              <p className="font-body text-sm text-foreground/70 text-center font-medium">
                Paghi esclusivamente il carburante realmente consumato.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════ DEPOSIT & INSURANCE ══════════ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionLabel>Cauzione e assicurazione elica</SectionLabel>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ocean tracking-tight mb-4">
                Cauzione e Assicurazione Elica
              </h2>
              <p className="font-body text-base text-foreground/70 max-w-2xl mx-auto">
                Valida solo per i gommoni senza patente nautica. Prima della partenza viene verificata l'elica insieme a te.
                Al rientro, se non ci sono danni, la franchigia viene restituita. Trasparenza totale.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
            <ScrollReveal>
              <div className="relative p-6 sm:p-8 rounded-2xl border-2 border-turquoise bg-turquoise/5" data-testid="insurance-recommended">
                <span className="absolute -top-3 left-6 bg-turquoise text-white font-body text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Consigliata
                </span>
                <div className="text-center mb-4 pt-2">
                  <p className="font-heading text-4xl font-bold text-ocean">&euro; 30 + &euro; 50</p>
                  <p className="font-body text-sm text-foreground/60 mt-1">Assicurazione elica + franchigia</p>
                </div>
                <p className="font-body text-sm text-foreground/70 mb-4">
                  Scegli l'assicurazione elica: paghi &euro; 30 di assicurazione e depositi &euro; 50 di franchigia.
                  Se al rientro l'elica non presenta danni, i &euro; 50 ti vengono restituiti.
                </p>
                <div className="flex items-center gap-2 p-3 rounded-lg bg-white">
                  <Check className="h-4 w-4 text-turquoise flex-shrink-0" />
                  <p className="font-body text-sm text-turquoise font-medium">&euro; 50 restituiti in caso di nessun danno</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white" data-testid="insurance-alternative">
                <div className="text-center mb-4">
                  <p className="font-body text-xs text-foreground/50 uppercase tracking-wider mb-2">In alternativa</p>
                  <p className="font-heading text-4xl font-bold text-ocean">&euro; 250</p>
                  <p className="font-body text-sm text-foreground/60 mt-1">Cauzione intero deposito</p>
                </div>
                <p className="font-body text-sm text-foreground/70 mb-4">
                  In alternativa all'assicurazione puoi optare per una cauzione di &euro; 250, che viene interamente restituita al rientro se non ci sono danni.
                </p>
                <div className="flex items-start gap-2 p-3 rounded-lg bg-slate-50">
                  <Info className="h-4 w-4 text-ocean/40 flex-shrink-0 mt-0.5" />
                  <p className="font-body text-xs text-foreground/50">Un'elica acquistata in loco ha un costo medio di &euro; 250.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════ JOKER BOAT 7M ══════════ */}
      <section className="py-16 sm:py-24 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8">
              <SectionLabel>Gommone 7 metri — Su richiesta</SectionLabel>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ocean tracking-tight mb-4">
                Joker Boat 7 m
              </h2>
              <p className="font-body text-base text-foreground/70 max-w-2xl mx-auto">
                Per chi cerca piu potenza, velocita e spazio a bordo. Disponibile con skipper o in locazione con patente nautica entro 12 miglia.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
              <div className="relative h-56 sm:h-72 overflow-hidden">
                <img src={IMG.joker} alt="Joker Boat 7 metri 150 CV La Maddalena" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean/60 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">Joker Boat 7 m</h3>
                  <p className="font-body text-sm text-white/80">Motore 150 CV Mercury Pro</p>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Con skipper', 'Con patente nautica', 'Fino a 8 persone', 'Navigazione veloce', 'Ampio raggio d\'azione'].map((f, i) => (
                    <span key={i} className="font-body text-[11px] bg-ocean/5 text-ocean/70 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Check className="h-3 w-3 text-turquoise" /> {f}
                    </span>
                  ))}
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 mb-6">
                  <Clock className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-body text-sm text-amber-800 font-medium">Listino prezzi in arrivo!</p>
                    <p className="font-body text-sm text-amber-700/80">
                      Stiamo aggiornando le tariffe 2026 per il Joker Boat 7 m. Nel frattempo puoi contattarci per un preventivo personalizzato.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="joker-whatsapp"
                    className="flex items-center justify-center gap-2 bg-whatsapp text-white font-body text-sm font-bold px-6 py-3 rounded-full hover:bg-whatsapp/90 transition-all duration-300 flex-1">
                    <MessageCircle className="h-4 w-4" /> Chiedi il prezzo su WhatsApp
                  </a>
                  <a href={`tel:${WHATSAPP_NUMBER.replace(/\s/g, '')}`} data-testid="joker-call"
                    className="flex items-center justify-center gap-2 border-2 border-ocean text-ocean font-body text-sm font-bold px-6 py-3 rounded-full hover:bg-ocean hover:text-white transition-all duration-300 flex-1">
                    <Phone className="h-4 w-4" /> Chiamaci
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════ WHY PRICES VARY ══════════ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionLabel>Perche i prezzi variano?</SectionLabel>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ocean tracking-tight mb-4">
                Il periodo giusto fa la differenza
              </h2>
              <p className="font-body text-base text-foreground/70 max-w-2xl mx-auto">
                Scegliere il periodo giusto puo farti risparmiare anche il <strong className="text-ocean">60% rispetto ad agosto</strong>, godendo comunque di un mare splendido e di meno traffico.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Sun, title: 'Agosto — Alta stagione', text: 'Il periodo piu richiesto. Mare caldo e giornate lunghe, ma piu affollamento nelle calette e prezzi al massimo.', color: 'bg-amber-50 border-amber-200' },
              { icon: Flower2, title: 'Giugno & Settembre — Ideali', text: 'Condizioni eccellenti, acqua gia calda, meno folla. La scelta migliore per vivere l\'arcipelago al meglio con un risparmio significativo.', color: 'bg-turquoise/5 border-turquoise/20' },
              { icon: Leaf, title: 'Aprile & Ottobre — Bassa stagione', text: 'Giornate tranquille, mare spesso piatto e prezzi ai minimi. Perfetti per chi vuole calette tutte per se.', color: 'bg-emerald-50 border-emerald-200' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className={`p-6 rounded-2xl border ${item.color}`} data-testid={`season-card-${i}`}>
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mb-4">
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

      {/* ══════════ HELP CHOOSING ══════════ */}
      <section className="py-16 sm:py-24 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionLabel>Hai dubbi?</SectionLabel>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ocean tracking-tight mb-4">
                Quale gommone e piu adatto a te?
              </h2>
              <p className="font-body text-base text-foreground/70 max-w-2xl mx-auto">
                Contattaci e ti consigliamo il modello ideale in base al numero di persone, all'esperienza di navigazione e all'itinerario scelto. Angela e a disposizione per aiutarti.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Users, title: 'Numero di persone', text: '4/5 persone: il 5,50 m e la scelta giusta. 5/6 persone: il 6 m garantisce piu spazio e maggior comfort.' },
              { icon: Compass, title: 'Esperienza di navigazione', text: 'Entrambi i modelli sono accessibili senza patente. Il briefing pre-partenza ti mette in sicurezza anche la prima volta.' },
              { icon: Map, title: 'Itinerario scelto', text: 'In base all\'itinerario e alle condizioni meteo, Angela ti suggerira il gommone piu adatto e la rotta migliore.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="text-center p-6 rounded-2xl bg-white border border-slate-100">
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`tel:${WHATSAPP_NUMBER.replace(/\s/g, '')}`} data-testid="help-call"
                className="flex items-center gap-2 border-2 border-ocean text-ocean font-body text-sm font-bold px-8 py-4 rounded-full hover:bg-ocean hover:text-white transition-all duration-300">
                <Phone className="h-5 w-5" /> Chiamaci
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="help-whatsapp"
                className="flex items-center gap-2 bg-whatsapp text-white font-body text-sm font-bold px-8 py-4 rounded-full hover:bg-whatsapp/90 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <MessageCircle className="h-5 w-5" /> Scrivici su WhatsApp
              </a>
              <a href={FAREHARBOR_URL} target="_blank" rel="noopener noreferrer" data-testid="help-book"
                className="flex items-center gap-2 bg-turquoise text-white font-body text-sm font-bold px-8 py-4 rounded-full hover:bg-turquoise-light hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Calendar className="h-5 w-5" /> Verifica disponibilita
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════ FINAL CTA ══════════ */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.cta} alt="Vista aerea Arcipelago La Maddalena" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-ocean/80" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Pronto a esplorare
              <br />
              <span className="italic font-normal">l'Arcipelago di La Maddalena?</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-white/80 max-w-xl mx-auto mb-8">
              Prenota il tuo gommone online oppure contattaci — troverai sempre qualcuno a risponderti.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={FAREHARBOR_URL} target="_blank" rel="noopener noreferrer" data-testid="prezzi-cta-book"
                className="flex items-center gap-2 bg-turquoise text-white font-body text-sm sm:text-base font-bold px-8 py-4 rounded-full hover:bg-turquoise-light hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Calendar className="h-5 w-5" /> Prenota Online
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="prezzi-cta-wa"
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
