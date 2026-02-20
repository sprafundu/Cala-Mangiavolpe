import { Link } from 'react-router-dom';
import { Calendar, MessageCircle, Phone, Ship, Users, Check, CreditCard, FileCheck, CloudSun, MapPin, Clock, ExternalLink, ArrowRight, AlertTriangle, Info, ChevronRight, Anchor } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { FAREHARBOR_URL, WHATSAPP_URL, WHATSAPP_NUMBER, MAPS_EMBED_URL } from '@/constants';

/* ─── Images ─── */
const IMG = {
  hero: 'https://images.unsplash.com/photo-1727786616190-62a1e83ef91f?w=1920&q=80',
  fleet550: 'https://images.pexels.com/photos/5730197/pexels-photo-5730197.jpeg?auto=compress&cs=tinysrgb&w=800',
  fleet600: 'https://images.unsplash.com/photo-1763424622942-2afe42d76ef3?w=800&q=80',
  joker: 'https://images.pexels.com/photos/35740506/pexels-photo-35740506.jpeg?auto=compress&cs=tinysrgb&w=800',
  cta: 'https://images.pexels.com/photos/34951694/pexels-photo-34951694.jpeg?auto=compress&cs=tinysrgb&w=1920',
};

const ANGELA_PHONE = '+39 331 865 9946';
const ANGELA_WA = 'https://wa.me/393318659946?text=Ciao%20Angela%2C%20vorrei%20prenotare%20un%20gommone%20a%20La%20Maddalena';

/* ─── Sub-components ─── */
function SectionLabel({ children }) {
  return <p className="font-body text-xs tracking-[0.3em] uppercase text-turquoise mb-3">{children}</p>;
}

/* ─── Page ─── */
export default function Prenotazioni() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-ocean overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={IMG.hero} alt="Spiaggia dall'alto La Maddalena" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel>Prenota il tuo gommone</SectionLabel>
          <h1 data-testid="prenotazioni-title" className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Prenota il tuo Gommone
            <br />
            <span className="italic font-normal">a La Maddalena</span>
          </h1>
          <p className="font-body text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            Organizza la tua giornata in mare in pochi semplici passaggi. Ti aiutiamo noi a scegliere la soluzione migliore in base a periodo, meteo e numero di persone.
          </p>
        </div>
      </section>

      {/* ══════════ CHOOSE YOUR BOAT ══════════ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionLabel>Scegli il modello</SectionLabel>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ocean tracking-tight mb-4">
                Quale gommone fa per te?
              </h2>
              <p className="font-body text-base text-foreground/70 max-w-2xl mx-auto">
                Tre opzioni disponibili. Per i gommoni da 5,50 m e 6 m non serve la patente nautica.
                Il Joker Boat e disponibile con skipper o per chi ha la patente.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Boat 5.50m */}
            <ScrollReveal>
              <div data-testid="boat-card-550" className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={IMG.fleet550} alt="Gommone BWA 5,50 m La Maddalena" className="w-full h-full object-cover" loading="lazy" />
                  <span className="absolute top-4 left-4 bg-turquoise text-white font-body text-[10px] font-bold px-3 py-1 rounded-full">Senza patente</span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-ocean mb-0.5">Gommoni 5,50 metri</h3>
                  <p className="font-body text-sm text-turquoise font-medium mb-3">BWA – MarSea SP90</p>
                  <p className="font-body text-sm text-foreground/70 flex items-center gap-1.5 mb-4">
                    <Users className="h-4 w-4 text-turquoise" /> Ideali per 4/5 persone
                  </p>
                  <div className="space-y-2 mb-6">
                    {['Motore 40 CV – nessuna patente richiesta', 'Tendalino parasole', 'Scaletta di risalita', 'Borsa frigo inclusa'].map((f) => (
                      <div key={f} className="flex items-center gap-2 font-body text-sm text-foreground/60">
                        <Check className="h-3.5 w-3.5 text-turquoise flex-shrink-0" /> {f}
                      </div>
                    ))}
                  </div>
                  <Link to="/prezzi" data-testid="boat-550-prices"
                    className="flex items-center justify-center gap-2 bg-turquoise text-white font-body text-sm font-bold px-5 py-3 rounded-full hover:bg-turquoise-light hover:scale-105 transition-all duration-300 w-full">
                    Vedi i prezzi <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Boat 6m */}
            <ScrollReveal delay={120}>
              <div data-testid="boat-card-600" className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={IMG.fleet600} alt="Gommone Alson 6 m La Maddalena" className="w-full h-full object-cover" loading="lazy" />
                  <span className="absolute top-4 left-4 bg-turquoise text-white font-body text-[10px] font-bold px-3 py-1 rounded-full">Senza patente</span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-ocean mb-0.5">Gommoni 6 metri</h3>
                  <p className="font-body text-sm text-turquoise font-medium mb-3">Alson – MarSea 100</p>
                  <p className="font-body text-sm text-foreground/70 flex items-center gap-1.5 mb-4">
                    <Users className="h-4 w-4 text-turquoise" /> Ideali per 5/6 persone
                  </p>
                  <div className="space-y-2 mb-6">
                    {['Motore 40 CV – nessuna patente richiesta', 'Piu spazio e comfort a bordo', 'Ampio prendisole poppiero', 'Dotazioni di sicurezza complete'].map((f) => (
                      <div key={f} className="flex items-center gap-2 font-body text-sm text-foreground/60">
                        <Check className="h-3.5 w-3.5 text-turquoise flex-shrink-0" /> {f}
                      </div>
                    ))}
                  </div>
                  <Link to="/prezzi" data-testid="boat-600-prices"
                    className="flex items-center justify-center gap-2 bg-turquoise text-white font-body text-sm font-bold px-5 py-3 rounded-full hover:bg-turquoise-light hover:scale-105 transition-all duration-300 w-full">
                    Vedi i prezzi <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Joker Boat */}
            <ScrollReveal delay={240}>
              <div data-testid="boat-card-joker" className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={IMG.joker} alt="Joker Boat 7 m 150 CV La Maddalena" className="w-full h-full object-cover" loading="lazy" />
                  <span className="absolute top-4 left-4 bg-ocean text-white font-body text-[10px] font-bold px-3 py-1 rounded-full">Con skipper / Patente</span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-ocean mb-0.5">Joker Boat 7 metri</h3>
                  <p className="font-body text-sm text-turquoise font-medium mb-3">Motore 150 CV Mercury Pro</p>
                  <p className="font-body text-sm text-foreground/70 flex items-center gap-1.5 mb-4">
                    <Users className="h-4 w-4 text-turquoise" /> Fino a 8 persone
                  </p>
                  <div className="space-y-2 mb-6">
                    {['Disponibile con skipper incluso', 'Locazione con patente (entro 12 miglia)', 'Piu velocita e ampio raggio d\'azione', 'Contattaci per prezzi e disponibilita'].map((f) => (
                      <div key={f} className="flex items-center gap-2 font-body text-sm text-foreground/60">
                        <Check className="h-3.5 w-3.5 text-turquoise flex-shrink-0" /> {f}
                      </div>
                    ))}
                  </div>
                  <a href={ANGELA_WA} target="_blank" rel="noopener noreferrer" data-testid="boat-joker-wa"
                    className="flex items-center justify-center gap-2 bg-whatsapp text-white font-body text-sm font-bold px-5 py-3 rounded-full hover:bg-whatsapp/90 hover:scale-105 transition-all duration-300 w-full">
                    <MessageCircle className="h-4 w-4" /> Richiedi disponibilita
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Price notice */}
          <ScrollReveal>
            <div className="flex items-start gap-3 mt-8 p-4 rounded-xl bg-sand border border-slate-100 max-w-3xl mx-auto">
              <Calendar className="h-5 w-5 text-turquoise flex-shrink-0 mt-0.5" />
              <p className="font-body text-sm text-foreground/70">
                Il prezzo varia in base al periodo. In alta stagione si consiglia di prenotare con anticipo.{' '}
                <Link to="/prezzi" className="text-turquoise font-medium hover:underline inline-flex items-center gap-1">
                  Consulta il listino completo 2026 <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════ HOW BOOKING WORKS ══════════ */}
      <section className="py-16 sm:py-24 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionLabel>Come funziona</SectionLabel>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ocean tracking-tight mb-4">
                La prenotazione in 4 passaggi
              </h2>
              <p className="font-body text-base text-foreground/70 max-w-2xl mx-auto">
                Semplice, veloce, senza sorprese. Dalla richiesta alla partenza, ti seguiamo in ogni step.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              { num: '1', title: 'Invia la richiesta', text: 'Scrivici via WhatsApp oppure chiamaci. Dicci data, numero di persone e modello preferito.', icon: MessageCircle },
              { num: '2', title: 'Conferma disponibilita', text: 'Verifichiamo subito la disponibilita per la data richiesta e ti rispondiamo in tempi rapidi.', icon: Check },
              { num: '3', title: 'Conferma la prenotazione', text: 'Con l\'eventuale acconto concordato la prenotazione e confermata. Ricevi tutte le istruzioni.', icon: FileCheck },
              { num: '4', title: 'Arrivi e parti', text: 'Il giorno del noleggio fai il briefing con noi e sei libero di esplorare l\'Arcipelago.', icon: Ship },
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div data-testid={`booking-step-${step.num}`} className="relative flex gap-5">
                  {i < 3 && <div className="absolute left-5 top-14 w-px h-[calc(100%-2.5rem)] bg-turquoise/15" />}
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-turquoise text-white font-heading text-lg font-bold flex items-center justify-center relative z-10">
                    {step.num}
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-5 border border-slate-100">
                    <div className="flex items-center gap-2 mb-1">
                      <step.icon className="h-4 w-4 text-turquoise" />
                      <h3 className="font-heading text-lg font-bold text-ocean">{step.title}</h3>
                    </div>
                    <p className="font-body text-sm text-foreground/70">{step.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PAYMENT & REQUIREMENTS ══════════ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionLabel>Informazioni importanti</SectionLabel>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ocean tracking-tight mb-4">
                Pagamento e requisiti
              </h2>
              <p className="font-body text-base text-foreground/70 max-w-2xl mx-auto">
                Tutto quello che devi sapere prima di prenotare.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ScrollReveal>
              <div data-testid="payment-info" className="p-6 sm:p-8 rounded-2xl bg-sand border border-slate-100 h-full">
                <div className="h-10 w-10 rounded-xl bg-turquoise/10 flex items-center justify-center mb-4">
                  <CreditCard className="h-5 w-5 text-turquoise" />
                </div>
                <h3 className="font-heading text-lg font-bold text-ocean mb-3">Modalita di pagamento</h3>
                <ul className="space-y-2">
                  {['Acconto alla prenotazione (se richiesto)', 'Saldo il giorno del noleggio', 'Cauzione o assicurazione elica per gommoni senza patente'].map((item) => (
                    <li key={item} className="flex items-start gap-2 font-body text-sm text-foreground/70">
                      <div className="h-1.5 w-1.5 rounded-full bg-turquoise mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="font-body text-xs text-foreground/50 mt-4">
                  I dettagli specifici vengono comunicati al momento della conferma. Per domande sulla cauzione{' '}
                  <Link to="/prezzi" className="text-turquoise hover:underline">consulta la pagina prezzi</Link>.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div data-testid="requirements-info" className="p-6 sm:p-8 rounded-2xl bg-sand border border-slate-100 h-full">
                <div className="h-10 w-10 rounded-xl bg-turquoise/10 flex items-center justify-center mb-4">
                  <FileCheck className="h-5 w-5 text-turquoise" />
                </div>
                <h3 className="font-heading text-lg font-bold text-ocean mb-3">Requisiti per il noleggio</h3>
                <ul className="space-y-2">
                  {[
                    'Documento d\'identita valido obbligatorio',
                    'Eta minima 18 anni per il conducente',
                    'Patente nautica solo per i modelli che la richiedono',
                    'Cauzione o assicurazione elica per gommoni senza patente',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 font-body text-sm text-foreground/70">
                      <Check className="h-3.5 w-3.5 text-turquoise flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="font-body text-xs text-foreground/50 mt-4">
                  I gommoni da 5,50 m e 6 m non richiedono patente nautica. Chiunque sia maggiorenne puo condurli dopo il briefing.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════ WEATHER POLICY ══════════ */}
      <section className="py-16 sm:py-24 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionLabel>Condizioni meteo</SectionLabel>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ocean tracking-tight mb-4">
                Politica di rimborso e condizioni meteo
              </h2>
              <p className="font-body text-base text-foreground/70 max-w-2xl mx-auto">
                La sicurezza viene sempre prima di tutto. Ecco come gestiamo le situazioni legate al meteo e agli annullamenti.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Good weather refund */}
            <ScrollReveal>
              <div data-testid="weather-refund" className="p-6 sm:p-8 rounded-2xl border-2 border-turquoise bg-turquoise/5 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-8 rounded-full bg-turquoise/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-turquoise" />
                  </div>
                  <h3 className="font-body text-sm font-bold text-turquoise uppercase tracking-wider">Meteo avverso — rimborso garantito</h3>
                </div>
                <p className="font-body text-sm text-foreground/70 mb-4">
                  In caso di condizioni meteo-marine avverse (forte vento o mare non sicuro per la navigazione), la prenotazione verra:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 font-body text-sm text-foreground/70">
                    <Check className="h-3.5 w-3.5 text-turquoise flex-shrink-0" />
                    Spostata ad altra data, compatibilmente con la disponibilita
                  </li>
                  <li className="flex items-center gap-2 font-body text-sm text-foreground/70">
                    <Check className="h-3.5 w-3.5 text-turquoise flex-shrink-0" />
                    Rimborsata al <strong className="text-ocean ml-1">100%</strong>
                  </li>
                </ul>
                <p className="font-body text-xs text-foreground/50 italic">
                  Il rimborso completo e previsto esclusivamente nei casi in cui l'impossibilita di uscire in mare sia dovuta a condizioni meteo non idonee alla navigazione.
                </p>
              </div>
            </ScrollReveal>

            {/* Personal cancellation */}
            <ScrollReveal delay={150}>
              <div data-testid="personal-cancel" className="p-6 sm:p-8 rounded-2xl border border-amber-200 bg-amber-50 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-8 rounded-full bg-amber-200/50 flex items-center justify-center">
                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                  </div>
                  <h3 className="font-body text-sm font-bold text-amber-700 uppercase tracking-wider">Annullamento per motivi personali</h3>
                </div>
                <p className="font-body text-sm text-amber-800/70 mb-4">
                  In caso di mancata presentazione o annullamento per cause non legate alle condizioni meteo, non e previsto il rimborso dell'importo versato.
                </p>
                <div className="space-y-2 mb-4">
                  {['Mancata presentazione', 'Ritardo o cambio programma', 'Motivi personali non meteorologici'].map((item) => (
                    <div key={item} className="flex items-center gap-2 font-body text-sm text-amber-800/60">
                      <div className="h-1.5 w-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <p className="font-body text-xs text-amber-800/50 italic">
                  Faremo sempre il possibile per venire incontro alle esigenze del cliente, compatibilmente con le altre prenotazioni gia confermate.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════ WHERE TO FIND US ══════════ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionLabel>Dove trovarci</SectionLabel>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ocean tracking-tight mb-4">
                Marina di Cala Mangiavolpe
              </h2>
              <p className="font-body text-base text-foreground/70 max-w-2xl mx-auto">
                Il giorno del noleggio trovi tutto gia pronto al nostro pontile.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Info cards */}
            <ScrollReveal>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: 'Indirizzo', value: 'Marina di Cala Mangiavolpe – Piazza Umberto I, La Maddalena (SS) 07024' },
                  { icon: Anchor, label: 'A piedi dal centro', value: '2 minuti a piedi da Piazza Umberto I' },
                  { icon: Ship, label: 'Traghetti', value: 'Vicino allo sbarco dei traghetti da Palau – raggiungibile a piedi' },
                  { icon: Clock, label: 'Orari', value: 'Tutti i giorni 8:00 – 19:00 · Assistenza telefonica 7:00 – 20:00' },
                  { icon: Phone, label: 'Contatti diretti', value: `${ANGELA_PHONE} · WhatsApp Angela` },
                ].map((item, i) => (
                  <div key={i} data-testid={`location-info-${i}`} className="flex items-start gap-4 p-4 rounded-xl bg-sand">
                    <div className="h-10 w-10 rounded-lg bg-turquoise/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-turquoise" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-turquoise font-bold uppercase tracking-wider mb-0.5">{item.label}</p>
                      <p className="font-body text-sm text-foreground/70">{item.value}</p>
                    </div>
                  </div>
                ))}

                <a
                  href="https://www.google.com/maps/search/Rental+Boat+Cala+Mangiavolpe+La+Maddalena"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="open-google-maps"
                  className="flex items-center justify-center gap-2 border-2 border-turquoise text-turquoise font-body text-sm font-bold px-6 py-3 rounded-full hover:bg-turquoise hover:text-white transition-all duration-300 w-full mt-2"
                >
                  <MapPin className="h-4 w-4" /> Apri in Google Maps <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </ScrollReveal>

            {/* Map */}
            <ScrollReveal delay={150}>
              <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 h-[400px] lg:h-full lg:min-h-[450px]">
                <iframe
                  src={MAPS_EMBED_URL}
                  title="Rental Boat Cala Mangiavolpe - La Maddalena"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  data-testid="prenotazioni-google-maps"
                />
              </div>
            </ScrollReveal>
          </div>
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
              Vuoi prenotare subito?
            </h2>
            <p className="font-body text-base sm:text-lg text-white/80 max-w-xl mx-auto mb-8">
              Scrivi un messaggio su WhatsApp o chiamaci direttamente.
              Angela risponde sempre, senza attese e senza call center.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={ANGELA_WA}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="prenotazioni-cta-wa"
                className="flex items-center gap-2 bg-whatsapp text-white font-body text-sm sm:text-base font-bold px-8 py-4 rounded-full hover:bg-whatsapp/90 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5" /> Scrivici su WhatsApp
              </a>
              <a
                href={`tel:${ANGELA_PHONE.replace(/\s/g, '')}`}
                data-testid="prenotazioni-cta-call"
                className="flex items-center gap-2 border-2 border-white/40 text-white font-body text-sm sm:text-base font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <Phone className="h-5 w-5" /> Chiamaci direttamente
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
