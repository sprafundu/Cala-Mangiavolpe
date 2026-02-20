import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ScrollReveal from '@/components/ScrollReveal';

const faqItems = [
  {
    question: 'Serve la patente nautica per noleggiare un gommone?',
    answer: 'No, i gommoni da 5,50m e 6m con motore 40 CV non richiedono patente nautica. Per il Joker Boat 7m (150 CV) e necessaria la patente nautica oppure puoi prenotare il servizio con skipper.',
  },
  {
    question: 'E adatto anche a chi non ha mai guidato un gommone?',
    answer: 'Assolutamente si. I motori 40 CV sono semplici e sicuri, perfetti anche per chi e alla prima esperienza. Prima della partenza facciamo un briefing completo dove ti spieghiamo tutto: come guidare, dove andare, come ancorare.',
  },
  {
    question: 'Quante persone possono salire a bordo?',
    answer: 'Gommone 5,50m: massimo 4-5 persone. Gommone 6m: massimo 6 adulti. Joker Boat 7m: fino a 8 persone. Consigliamo sempre un numero inferiore per garantire comfort reale a bordo.',
  },
  {
    question: 'Posso portare bambini a bordo?',
    answer: 'Certamente. Le dotazioni di sicurezza sono sempre a bordo. I gommoni da 5,50m sono particolarmente adatti per famiglie con bambini grazie alla loro stabilita e facilita di utilizzo.',
  },
  {
    question: 'Quanto tempo ci vuole per raggiungere le isole principali?',
    answer: 'Caprera: 10-15 minuti. Spargi: 15-20 minuti. Budelli e Santa Maria: 25-30 minuti. Cala Coticcio: 25-30 minuti. I tempi possono variare leggermente in base alle condizioni del mare.',
  },
  {
    question: 'Il carburante e incluso nel prezzo?',
    answer: 'Il gommone viene consegnato con il pieno. Al rientro si effettua il rifornimento al distributore nautico vicino al porto. In questo modo paghi solo il consumo effettivo della giornata, che varia in base alla distanza percorsa e al numero di passeggeri.',
  },
  {
    question: 'E richiesta una cauzione?',
    answer: 'Offriamo due opzioni trasparenti: assicurazione elica a 30 euro + 50 euro di franchigia, oppure cauzione di 250 euro rimborsabile al rientro se non ci sono danni. Prima della partenza controlliamo l\'elica insieme a te.',
  },
  {
    question: 'Cosa succede in caso di mare mosso o vento forte?',
    answer: 'Consigliamo sempre l\'itinerario piu sicuro in base alle condizioni meteo. In caso di condizioni avverse che non consentono la navigazione in sicurezza, il noleggio puo essere riprogrammato. La sicurezza viene prima di tutto.',
  },
  {
    question: 'Dove si trova il punto di partenza?',
    answer: 'Porto turistico di Cala Mangiavolpe, davanti a Piazza Umberto I, nel cuore dell\'isola. A soli 300 metri dallo sbarco dei traghetti. Parcheggi gratuiti nelle vicinanze, bar, supermercato e servizi a pochi passi.',
  },
  {
    question: 'Quanto dura il noleggio?',
    answer: 'Generalmente l\'intera giornata. Consegna al mattino e rientro nel tardo pomeriggio. Orari flessibili da concordare al momento della prenotazione.',
  },
  {
    question: 'E possibile prenotare online?',
    answer: 'Si, puoi prenotare comodamente online attraverso il nostro sistema di prenotazione, oppure tramite WhatsApp o telefonicamente. Rispondiamo velocemente e con chiarezza.',
  },
];

export default function FAQSection() {
  return (
    <section id="faq" data-testid="faq-section" className="py-16 sm:py-24 bg-sand">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-turquoise mb-3">FAQ</p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-ocean tracking-tight mb-4">
              Domande frequenti
            </h2>
            <p className="font-body text-base sm:text-lg text-foreground/70 max-w-xl mx-auto">
              Tutto quello che devi sapere prima di prenotare il tuo gommone a La Maddalena.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                data-testid={`faq-item-${i}`}
                className="bg-white rounded-xl border border-slate-100 px-6 overflow-hidden"
              >
                <AccordionTrigger
                  data-testid={`faq-trigger-${i}`}
                  className="font-body text-sm sm:text-base font-medium text-ocean hover:text-turquoise hover:no-underline py-5 text-left"
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-foreground/70 leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
