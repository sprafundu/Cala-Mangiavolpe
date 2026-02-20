import { Link } from 'react-router-dom';
import { Calendar, MessageCircle, Phone, Ship, Fuel, Shield, Clock, CloudRain, TreePine, BookOpen } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ScrollReveal from '@/components/ScrollReveal';
import { FAREHARBOR_URL, WHATSAPP_URL, WHATSAPP_NUMBER } from '@/constants';

/* ─── FAQ Data ─── */
const faqCategories = [
  {
    id: 'patente',
    icon: Ship,
    label: 'Patente e persone a bordo',
    items: [
      {
        q: 'Serve la patente nautica?',
        a: 'No, per i gommoni da 5,50 m e 6 m con motore 40 CV non e richiesta la patente nautica. Sono classificati come unita da diporto entro i limiti previsti dalla normativa italiana. Per il Joker Boat 7 m con motore 150 CV Mercury Pro e invece necessaria la patente nautica, oppure puoi prenotare il servizio con skipper professionista.',
      },
      {
        q: 'E difficile guidare un gommone?',
        a: 'No, i nostri gommoni sono progettati per essere facili e intuitivi anche per chi non ha esperienza. I motori 40 CV sono semplici da gestire: acceleratore, marcia avanti/indietro e sterzo. Prima della partenza facciamo un briefing completo in cui ti spieghiamo tutto: come guidare, come ancorare, come gestire il tendalino e come comportarti nelle diverse situazioni. Molti dei nostri clienti sono alla prima esperienza e si trovano a loro agio fin da subito.',
      },
      {
        q: 'Quante persone possono salire a bordo?',
        a: 'Gommone 5,50 m: omologato per piu persone, ma consigliamo massimo 4-5 per garantire comfort reale. Gommone 6 m: consigliamo massimo 5-6 adulti per avere spazio sufficiente e una navigazione piacevole. Joker Boat 7 m: fino a 8 persone. Noi suggeriamo sempre un numero inferiore rispetto all\'omologazione massima, perche crediamo nella qualita dell\'esperienza, non nella quantita.',
      },
      {
        q: 'Posso portare bambini?',
        a: 'Certamente, i bambini sono i benvenuti a bordo. Le dotazioni di sicurezza obbligatorie sono sempre presenti, inclusi giubbotti salvagente di diverse taglie. I gommoni da 5,50 m sono particolarmente adatti per famiglie con bambini piccoli grazie alla loro stabilita e facilita di utilizzo. Raccomandiamo sempre di tenere i bambini sotto sorveglianza durante la navigazione e durante le soste.',
      },
      {
        q: 'Posso portare il cane?',
        a: 'Si, puoi portare il tuo cane a bordo. Ti chiediamo solo di fare attenzione che le unghie non danneggino il tessuto del gommone e di portare un tappetino o un asciugamano dove farlo stare. Il cane deve essere sempre sotto controllo durante la navigazione. Ricorda che in alcune spiagge del Parco Nazionale l\'accesso ai cani potrebbe essere limitato nel periodo estivo.',
      },
    ],
  },
  {
    id: 'carburante',
    icon: Fuel,
    label: 'Carburante',
    items: [
      {
        q: 'Il carburante e incluso nel prezzo?',
        a: 'No, il carburante non e incluso nel prezzo del noleggio. Il gommone viene consegnato con il pieno di carburante. Al rientro potrai rifornire autonomamente al distributore nautico, oppure il consumo verra calcolato al rientro. In questo modo paghi solo il carburante effettivamente consumato. La spesa varia indicativamente da 20 a 80 euro a seconda dell\'itinerario, del numero di passeggeri, della velocita e delle condizioni del mare.',
      },
      {
        q: 'Dove si fa rifornimento?',
        a: 'Il distributore nautico si trova a Cala Gavetta, vicino al nostro pontile di Cala Mangiavolpe. Al rientro dalla giornata in mare, prima di restituire il gommone, ti avvicini al distributore e fai il rifornimento in autonomia. E un\'operazione semplice e veloce che ti spieghiamo durante il briefing di partenza.',
      },
    ],
  },
  {
    id: 'cauzione',
    icon: Shield,
    label: 'Cauzione elica',
    items: [
      {
        q: 'E prevista una cauzione dell\'elica?',
        a: 'Si, offriamo due opzioni trasparenti. Opzione consigliata: assicurazione elica a 30 euro + 50 euro di franchigia. Se al rientro l\'elica non presenta danni, i 50 euro ti vengono restituiti. In alternativa: cauzione di 250 euro, interamente restituita se non ci sono danni. Prima della partenza controlliamo l\'elica insieme a te e la verifichiamo nuovamente al rientro. Nessuna sorpresa: tutto viene spiegato e documentato prima di partire.',
      },
      {
        q: 'Posso assicurare anche altre parti del motore o del gommone?',
        a: 'L\'assicurazione offerta copre esclusivamente l\'elica, che e la parte piu esposta a eventuali urti con fondali bassi o scogli. Il gommone e il motore sono coperti dalla nostra assicurazione aziendale per danni da navigazione ordinaria. In caso di danni causati da negligenza grave o uso improprio, il cliente potrebbe essere ritenuto responsabile. Durante il briefing ti spieghiamo come evitare situazioni a rischio.',
      },
    ],
  },
  {
    id: 'orari',
    icon: Clock,
    label: 'Orari e partenza',
    items: [
      {
        q: 'A che ora apre e chiude il noleggio?',
        a: 'Siamo operativi tutti i giorni durante la stagione estiva. L\'apertura e alle 8:30 e l\'orario di rientro consigliato e entro le 18:30. Gli orari possono variare leggermente in base al periodo della stagione e alla durata delle giornate.',
      },
      {
        q: 'A che ora devo arrivare?',
        a: 'Per goderti una giornata completa in mare, ti consigliamo di arrivare entro le 9:00 - 9:30. In questo modo avrai il tempo per il briefing, il controllo del gommone e potrai partire con calma. Prima arrivi, prima raggiungi le calette prima che si riempiano.',
      },
      {
        q: 'Se arrivo alle 10:00?',
        a: 'Nessun problema, puoi arrivare alle 10:00. Avrai comunque una giornata piena davanti a te per esplorare l\'Arcipelago. Semplicemente alcune calette (come Cala Coticcio) potrebbero essere gia piu affollate rispetto alle prime ore del mattino.',
      },
      {
        q: 'Posso arrivare dopo le 10:00?',
        a: 'Si, e possibile, ma ti consigliamo di contattarci in anticipo per organizzare al meglio la tua giornata. Partendo piu tardi potresti dover ridurre il numero di tappe del tuo itinerario. Angela ti suggerira il percorso piu adatto in base all\'orario di partenza e alle condizioni del mare.',
      },
      {
        q: 'A che ora devo rientrare?',
        a: 'Il rientro e previsto entro le 18:30. Questo ti lascia il tempo per il rifornimento al distributore nautico di Cala Gavetta e la riconsegna del gommone. In caso di ritardo, ti chiediamo di avvisarci telefonicamente. Rientri oltre l\'orario concordato senza preavviso potrebbero comportare supplementi.',
      },
      {
        q: 'Quanto dura il noleggio?',
        a: 'Il noleggio e giornaliero, generalmente dalla mattina (ore 9:00 circa) fino al tardo pomeriggio (ore 18:30 circa). Si tratta di un\'intera giornata in mare, piu che sufficiente per esplorare le isole principali dell\'Arcipelago. Per esigenze diverse (mezza giornata, piu giorni) contattaci per un preventivo personalizzato.',
      },
    ],
  },
  {
    id: 'meteo',
    icon: CloudRain,
    label: 'Meteo e annullamenti',
    items: [
      {
        q: 'Cosa succede in caso di maltempo?',
        a: 'La sicurezza viene prima di tutto. Se le condizioni meteo non consentono la navigazione in sicurezza, il noleggio viene annullato o riprogrammato senza alcun costo aggiuntivo. Monitoriamo costantemente le previsioni e ti avvisiamo in anticipo in caso di condizioni avverse. Se il maltempo sopraggiunge durante la navigazione, ti consigliamo di rientrare al porto e siamo sempre raggiungibili telefonicamente per supporto.',
      },
      {
        q: 'Se annullo per motivi personali?',
        a: 'Le condizioni di cancellazione dipendono dal preavviso. Per cancellazioni con ampio anticipo (piu di 48 ore) generalmente non ci sono penali. Per cancellazioni dell\'ultimo momento, ti invitiamo a contattarci direttamente: cerchiamo sempre di trovare una soluzione ragionevole, come lo spostamento della prenotazione ad un\'altra data. Le condizioni specifiche ti vengono comunicate al momento della prenotazione.',
      },
    ],
  },
  {
    id: 'parco',
    icon: TreePine,
    label: 'Parco Nazionale e destinazioni',
    items: [
      {
        q: 'I gommoni sono autorizzati nel Parco Nazionale?',
        a: 'Si, tutti i nostri gommoni sono in regola per navigare nelle acque del Parco Nazionale dell\'Arcipelago di La Maddalena. Rispettiamo tutte le normative vigenti e le autorizzazioni necessarie. Durante il briefing ti informiamo su tutte le regole del Parco: zone di ancoraggio consentite, aree interdette, limiti di velocita e comportamenti da tenere per rispettare l\'ambiente marino protetto.',
      },
      {
        q: 'Posso andare a Cala Coticcio?',
        a: 'Si, Cala Coticcio (la "Tahiti" dell\'Arcipelago) e raggiungibile con i nostri gommoni. Si trova sull\'isola di Caprera, a circa 25-30 minuti dal nostro pontile. Il consiglio di Angela: arriva nelle prime ore del mattino per goderti la spiaggia quando e ancora quasi deserta. L\'Itinerario Strategico (n.03) e studiato proprio per arrivare a Coticcio prima della folla. E una delle esperienze piu belle che puoi vivere nell\'Arcipelago.',
      },
      {
        q: 'Posso vedere la Spiaggia Rosa?',
        a: 'La Spiaggia Rosa di Budelli e visibile solo dal mare: non e consentito sbarcare, ancorare fuori dalle boe, entrare con il gommone nell\'area delimitata o fare il bagno. E un\'area strettamente protetta del Parco Nazionale. Puoi comunque ammirarla dalla barca e scattare fotografie. La sabbia rosata, composta da frammenti di coralli, e un fenomeno unico nel Mediterraneo. Subito accanto si trovano le Piscine Naturali di Porto della Madonna, dove invece puoi ancorare e fare il bagno in acque spettacolari.',
      },
    ],
  },
  {
    id: 'prenotare',
    icon: BookOpen,
    label: 'Come prenotare',
    items: [
      {
        q: 'Come posso prenotare un gommone?',
        a: 'Hai diverse opzioni per prenotare. Online: attraverso il nostro sistema di prenotazione FareHarbor, rapido e sicuro, disponibile 24/7. WhatsApp: scrivici al numero +39 389 094 9373 per prenotare o chiedere informazioni. Angela risponde personalmente e velocemente. Telefono: chiamaci allo stesso numero per prenotare direttamente a voce. Ti consigliamo di prenotare con anticipo, soprattutto nei mesi di luglio e agosto quando la disponibilita si riduce rapidamente.',
      },
    ],
  },
];

/* ─── Page ─── */
export default function FAQ() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-ocean overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1634405277712-617c29ea436e?w=1920&q=80"
            alt="Arcipelago di La Maddalena"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-turquoise-light mb-3">Risposte rapide</p>
          <h1 data-testid="faq-page-title" className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Domande Frequenti
          </h1>
          <p className="font-body text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            Qui trovi le risposte alle domande che i nostri clienti ci fanno piu spesso prima di noleggiare un gommone.
          </p>
        </div>
      </section>

      {/* ══════════ CATEGORY NAV ══════════ */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-16 lg:top-20 z-40 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
            {faqCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#faq-${cat.id}`}
                data-testid={`faq-nav-${cat.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(`#faq-${cat.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="flex items-center gap-1.5 whitespace-nowrap bg-sand hover:bg-turquoise/10 text-ocean/70 hover:text-turquoise font-body text-xs font-medium px-3 py-2 rounded-full transition-all duration-300 flex-shrink-0"
              >
                <cat.icon className="h-3.5 w-3.5" />
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FAQ SECTIONS ══════════ */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          {faqCategories.map((cat, catIdx) => (
            <div key={cat.id} id={`faq-${cat.id}`} className="scroll-mt-40">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-turquoise/10 flex items-center justify-center">
                    <cat.icon className="h-5 w-5 text-turquoise" />
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-ocean">{cat.label}</h2>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <Accordion type="single" collapsible className="space-y-3">
                  {cat.items.map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`${cat.id}-${i}`}
                      data-testid={`faq-item-${cat.id}-${i}`}
                      className="bg-sand rounded-xl border border-slate-100 px-5 sm:px-6 overflow-hidden"
                    >
                      <AccordionTrigger
                        data-testid={`faq-trigger-${cat.id}-${i}`}
                        className="font-body text-sm sm:text-base font-medium text-ocean hover:text-turquoise hover:no-underline py-4 sm:py-5 text-left"
                      >
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="font-body text-sm text-foreground/70 leading-relaxed pb-5">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ DIDN'T FIND ANSWER ══════════ */}
      <section className="py-16 sm:py-20 bg-sand">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ocean tracking-tight mb-4">
              Non hai trovato la risposta che cercavi?
            </h2>
            <p className="font-body text-base text-foreground/70 mb-8">
              Scrivici su WhatsApp o chiamaci — Angela risponde direttamente, senza attese.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="faq-contact-whatsapp"
                className="flex items-center gap-2 bg-whatsapp text-white font-body text-sm font-bold px-8 py-4 rounded-full hover:bg-whatsapp/90 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
              <a
                href={`tel:${WHATSAPP_NUMBER.replace(/\s/g, '')}`}
                data-testid="faq-contact-call"
                className="flex items-center gap-2 border-2 border-ocean text-ocean font-body text-sm font-bold px-8 py-4 rounded-full hover:bg-ocean hover:text-white transition-all duration-300"
              >
                <Phone className="h-5 w-5" /> Chiamaci
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════ FINAL CTA ══════════ */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1727786616190-62a1e83ef91f?w=1920&q=80"
            alt="Spiaggia dall'alto acque turchesi"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-ocean/80" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Pronto a prenotare
              <br />
              <span className="italic font-normal">la tua giornata in mare?</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-white/80 max-w-xl mx-auto mb-8">
              Hai tutte le risposte. Manca solo il gommone.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={FAREHARBOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="faq-cta-book"
                className="flex items-center gap-2 bg-turquoise text-white font-body text-sm sm:text-base font-bold px-8 py-4 rounded-full hover:bg-turquoise-light hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Calendar className="h-5 w-5" /> Prenota Online
              </a>
              <Link
                to="/prezzi"
                data-testid="faq-cta-prices"
                className="flex items-center gap-2 border-2 border-white/40 text-white font-body text-sm sm:text-base font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Vedi i Prezzi 2026
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="faq-cta-whatsapp"
                className="flex items-center gap-2 bg-whatsapp text-white font-body text-sm sm:text-base font-bold px-8 py-4 rounded-full hover:bg-whatsapp/90 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
