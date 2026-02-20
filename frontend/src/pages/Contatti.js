import { Link } from 'react-router-dom';
import { Calendar, MessageCircle, Phone, Mail, MapPin, Clock, Car, Ship, Users, Star, Compass, Anchor, TreePine, ExternalLink, Fuel, ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { FAREHARBOR_URL, WHATSAPP_URL, WHATSAPP_NUMBER, MAPS_EMBED_URL } from '@/constants';

const ANGELA_PHONE = '+39 331 865 9946';
const ANGELA_WA = 'https://wa.me/393318659946?text=Ciao%20Angela%2C%20vorrei%20informazioni%20sul%20noleggio%20gommoni';
const EMAIL = 'info@rentalboatcalamangiavolpe.it';

function SectionLabel({ children }) {
  return <p className="font-body text-xs tracking-[0.3em] uppercase text-turquoise mb-3">{children}</p>;
}

export default function Contatti() {
  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-ocean overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1597822759119-98ac55426359?w=1920&q=80" alt="Tramonto sull'Arcipelago" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel>Siamo qui per te</SectionLabel>
          <h1 data-testid="contatti-title" className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Contatti
          </h1>
          <p className="font-body text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            Se desideri informazioni sul noleggio gommoni a La Maddalena, disponibilita, itinerari o prenotazioni, siamo a tua completa disposizione. Ci trovi nel punto piu strategico dell'isola, a pochi metri dallo sbarco dei traghetti.
          </p>
        </div>
      </section>

      {/* ══════════ DOVE SIAMO ══════════ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionLabel>Dove Siamo</SectionLabel>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ocean tracking-tight mb-4">
                Posizione strategica nel centro di La Maddalena
              </h2>
              <p className="font-body text-base text-foreground/70 max-w-2xl mx-auto">
                Siamo all'interno della Marina di Cala Mangiavolpe, di fronte alla Piazza Umberto I, nel cuore dell'isola di La Maddalena.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <ScrollReveal>
              <div>
                {/* Address card */}
                <div className="p-6 rounded-2xl bg-sand border border-slate-100 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-turquoise/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-turquoise" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-turquoise font-bold uppercase tracking-wider mb-1">Indirizzo</p>
                      <p className="font-body text-base text-ocean font-medium">Marina di Cala Mangiavolpe</p>
                      <p className="font-body text-sm text-foreground/70">Piazza Umberto I</p>
                      <p className="font-body text-sm text-foreground/70">07024 – La Maddalena (SS)</p>
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/Rental+Boat+Cala+Mangiavolpe+La+Maddalena"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="contatti-open-maps"
                    className="flex items-center justify-center gap-2 border-2 border-turquoise text-turquoise font-body text-sm font-bold px-5 py-2.5 rounded-full hover:bg-turquoise hover:text-white transition-all duration-300 w-full mt-4"
                  >
                    <MapPin className="h-4 w-4" /> Apri in Google Maps <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* Why convenient */}
                <h3 className="font-heading text-lg font-bold text-ocean mb-4">Perche la nostra posizione e comoda?</h3>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: 'dallo sbarco dei traghetti', value: '~300 m' },
                    { label: 'da supermercati e negozi', value: '~100 m' },
                    { label: 'dalle Poste Italiane', value: '~30 m' },
                    { label: 'dalla banca', value: '~100 m' },
                  ].map((item, i) => (
                    <div key={i} className="p-3 rounded-xl bg-turquoise/5 border border-turquoise/10 text-center">
                      <p className="font-heading text-xl font-bold text-turquoise">{item.value}</p>
                      <p className="font-body text-[11px] text-foreground/60">{item.label}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 font-body text-sm text-foreground/70">
                    <Car className="h-4 w-4 text-turquoise flex-shrink-0" />
                    <strong className="text-ocean">Parcheggi gratuiti</strong> dietro le Poste
                  </div>
                  <div className="flex items-center gap-2 font-body text-sm text-foreground/70">
                    <Fuel className="h-4 w-4 text-turquoise flex-shrink-0" />
                    <strong className="text-ocean">Benzinaio nautico</strong> a pochi metri (Porto di Cala Gavetta)
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                  <Fuel className="h-4 w-4 text-ocean/40 flex-shrink-0 mt-0.5" />
                  <p className="font-body text-xs text-foreground/50">
                    Prima di rientrare potrai comodamente fare rifornimento e riportare il serbatoio al pieno direttamente al distributore nautico di Cala Gavetta, accanto al nostro pontile.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Map */}
            <ScrollReveal delay={150}>
              <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 h-[400px] lg:h-full lg:min-h-[500px]">
                <iframe
                  src={MAPS_EMBED_URL}
                  title="Rental Boat Cala Mangiavolpe - La Maddalena"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  data-testid="contatti-google-maps"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════ ORARI ══════════ */}
      <section className="py-16 sm:py-20 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <SectionLabel>Orari</SectionLabel>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ocean tracking-tight mb-4">
                Orari di Apertura
              </h2>
              <p className="font-body text-base text-foreground/70 max-w-2xl mx-auto">
                Se vuoi goderti l'intera giornata in mare, ti consigliamo di arrivare qualche minuto prima delle 09:00 per completare contratto e briefing senza fretta.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <ScrollReveal>
              <div data-testid="orario-apertura" className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 text-center">
                <div className="h-12 w-12 rounded-full bg-turquoise/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-turquoise" />
                </div>
                <p className="font-body text-xs text-turquoise font-bold uppercase tracking-wider mb-1">Apertura</p>
                <p className="font-heading text-4xl font-bold text-ocean">09:00</p>
                <p className="font-body text-sm text-foreground/60 mt-1">Arriva qualche minuto prima per il briefing</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div data-testid="orario-chiusura" className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 text-center">
                <div className="h-12 w-12 rounded-full bg-ocean/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-ocean" />
                </div>
                <p className="font-body text-xs text-ocean/60 font-bold uppercase tracking-wider mb-1">Chiusura & rientro massimo</p>
                <p className="font-heading text-4xl font-bold text-ocean">17:30</p>
                <p className="font-body text-sm text-foreground/60 mt-1">Tutti i gommoni devono rientrare entro quest'orario</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════ CONTATTI DIRETTI ══════════ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionLabel>Contatti</SectionLabel>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ocean tracking-tight mb-4">
                Contatti Diretti
              </h2>
              <p className="font-body text-base text-foreground/70 max-w-2xl mx-auto">
                Rispondiamo il prima possibile, specialmente durante la stagione estiva. Angela e disponibile personalmente per qualsiasi domanda.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <ScrollReveal>
              <a href={`tel:${ANGELA_PHONE.replace(/\s/g, '')}`} data-testid="contatti-telefono"
                className="group flex flex-col items-center p-6 sm:p-8 rounded-2xl bg-sand hover:bg-white hover:shadow-md border border-transparent hover:border-slate-100 transition-all duration-300 text-center">
                <div className="h-14 w-14 rounded-full bg-turquoise/10 flex items-center justify-center mb-4 group-hover:bg-turquoise/20 transition-colors duration-300">
                  <Phone className="h-7 w-7 text-turquoise" />
                </div>
                <p className="font-body text-xs text-turquoise font-bold uppercase tracking-wider mb-1">Telefono</p>
                <p className="font-body text-base text-ocean font-medium mb-1">{ANGELA_PHONE}</p>
                <p className="font-body text-sm text-foreground/50">Chiama direttamente</p>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="contatti-whatsapp"
                className="group flex flex-col items-center p-6 sm:p-8 rounded-2xl bg-sand hover:bg-white hover:shadow-md border border-transparent hover:border-slate-100 transition-all duration-300 text-center">
                <div className="h-14 w-14 rounded-full bg-whatsapp/10 flex items-center justify-center mb-4 group-hover:bg-whatsapp/20 transition-colors duration-300">
                  <MessageCircle className="h-7 w-7 text-whatsapp" />
                </div>
                <p className="font-body text-xs text-whatsapp font-bold uppercase tracking-wider mb-1">WhatsApp</p>
                <p className="font-body text-base text-ocean font-medium mb-1">{WHATSAPP_NUMBER}</p>
                <p className="font-body text-sm text-foreground/50">Attivo per info e prenotazioni rapide</p>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <a href={`mailto:${EMAIL}`} data-testid="contatti-email"
                className="group flex flex-col items-center p-6 sm:p-8 rounded-2xl bg-sand hover:bg-white hover:shadow-md border border-transparent hover:border-slate-100 transition-all duration-300 text-center">
                <div className="h-14 w-14 rounded-full bg-turquoise/10 flex items-center justify-center mb-4 group-hover:bg-turquoise/20 transition-colors duration-300">
                  <Mail className="h-7 w-7 text-turquoise" />
                </div>
                <p className="font-body text-xs text-turquoise font-bold uppercase tracking-wider mb-1">Email</p>
                <p className="font-body text-base text-ocean font-medium mb-1 break-all">{EMAIL}</p>
                <p className="font-body text-sm text-foreground/50">Per richieste scritte e documentazione</p>
              </a>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="contatti-wa-cta"
              className="flex items-center justify-center gap-2 bg-whatsapp text-white font-body text-sm font-bold px-8 py-4 rounded-full hover:bg-whatsapp/90 hover:shadow-xl hover:scale-105 transition-all duration-300 max-w-md mx-auto">
              <MessageCircle className="h-5 w-5" /> Scrivici su WhatsApp — Risposta rapida
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════ COME ARRIVARE ══════════ */}
      <section className="py-16 sm:py-24 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionLabel>Come Arrivare</SectionLabel>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ocean tracking-tight mb-4">
                Come Raggiungerci
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ScrollReveal>
              <div data-testid="arrive-ferry" className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 h-full">
                <div className="h-12 w-12 rounded-xl bg-turquoise/10 flex items-center justify-center mb-4">
                  <Ship className="h-6 w-6 text-turquoise" />
                </div>
                <h3 className="font-heading text-lg font-bold text-ocean mb-2">Se arrivi in traghetto</h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">
                  Dallo sbarco dei traghetti percorri il lungomare verso il centro storico. In circa <strong className="text-ocean">5 minuti a piedi</strong> raggiungi Piazza Umberto I e la Marina di Cala Mangiavolpe. Siamo a soli 300 metri dal porto traghetti.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div data-testid="arrive-car" className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 h-full">
                <div className="h-12 w-12 rounded-xl bg-turquoise/10 flex items-center justify-center mb-4">
                  <Car className="h-6 w-6 text-turquoise" />
                </div>
                <h3 className="font-heading text-lg font-bold text-ocean mb-2">Se arrivi in auto</h3>
                <p className="font-body text-sm text-foreground/70 leading-relaxed">
                  Puoi parcheggiare <strong className="text-ocean">gratuitamente</strong> dietro le Poste Italiane (a 30 metri da noi) o nei parcheggi pubblici vicini al centro. Una volta parcheggiata l'auto, raggiungi Piazza Umberto I a piedi.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════ PRENOTAZIONI ══════════ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionLabel>Prenotazioni</SectionLabel>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ocean tracking-tight mb-4">
                Prenotazioni e Informazioni
              </h2>
              <p className="font-body text-base text-foreground/70 max-w-2xl mx-auto">
                Per bloccare un gommone consigliamo sempre la prenotazione anticipata, soprattutto nei mesi di luglio e agosto.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Calendar, label: 'Online', text: 'Tramite la piattaforma ufficiale', link: FAREHARBOR_URL, linkText: 'Prenota qui', external: true },
              { icon: MessageCircle, label: 'WhatsApp', text: 'Scrivi ad Angela per disponibilita rapida', link: WHATSAPP_URL, linkText: 'Scrivi ora', external: true },
              { icon: Phone, label: 'Telefono', text: `Chiama direttamente al ${ANGELA_PHONE}`, link: `tel:${ANGELA_PHONE.replace(/\s/g, '')}`, linkText: 'Chiama', external: false },
              { icon: Anchor, label: 'Di persona', text: 'Passa in porto, compatibilmente con la disponibilita', link: null, linkText: null },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div data-testid={`booking-channel-${i}`} className="p-5 rounded-xl bg-sand border border-slate-100 h-full flex flex-col">
                  <div className="h-10 w-10 rounded-lg bg-turquoise/10 flex items-center justify-center mb-3">
                    <item.icon className="h-5 w-5 text-turquoise" />
                  </div>
                  <h3 className="font-body text-sm font-bold text-ocean mb-1">{item.label}</h3>
                  <p className="font-body text-sm text-foreground/60 flex-1">{item.text}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noopener noreferrer' : undefined}
                      className="font-body text-xs font-bold text-turquoise hover:text-turquoise-light mt-3 flex items-center gap-1 transition-colors duration-300"
                    >
                      {item.linkText} <ChevronRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PERCHE NOI ══════════ */}
      <section className="py-16 sm:py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <SectionLabel>Perche Noi</SectionLabel>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ocean tracking-tight mb-4">
                Perche Scegliere Rental Boat Cala Mangiavolpe?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: MapPin, text: 'Posizione centrale e comodissima — a 300 m dai traghetti, nel cuore di La Maddalena' },
              { icon: Ship, text: 'Gommoni nuovi e perfettamente mantenuti — pronti ogni mattina con pieno e dotazioni complete' },
              { icon: Compass, text: 'Assistenza prima e durante la navigazione — briefing dettagliato e Angela sempre raggiungibile' },
              { icon: Star, text: 'Recensioni eccellenti su Google — la fiducia di centinaia di clienti soddisfatti ogni stagione' },
              { icon: Users, text: 'Esperienza e accoglienza familiare — Angela e il suo staff ti trattano come un ospite di riguardo' },
              { icon: TreePine, text: 'Conoscenza dell\'arcipelago — consigli personalizzati su itinerari, calette e condizioni del giorno' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div data-testid={`why-us-${i}`} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-100">
                  <div className="h-10 w-10 rounded-lg bg-turquoise/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-turquoise" />
                  </div>
                  <p className="font-body text-sm text-foreground/70">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="font-body text-sm text-foreground/60 text-center mt-8 italic max-w-xl mx-auto">
              Angela e il suo staff saranno felici di aiutarti a organizzare la tua giornata perfetta nell'Arcipelago di La Maddalena.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════ FINAL CTA ══════════ */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/34951694/pexels-photo-34951694.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Vista aerea Arcipelago" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-ocean/80" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-2">
              Noleggio Gommoni a La Maddalena
            </h2>
            <p className="font-heading text-lg sm:text-xl italic text-white/70 mb-4">Contattaci Senza Impegno</p>
            <p className="font-body text-sm sm:text-base text-white/70 max-w-2xl mx-auto mb-4">
              Se stai cercando un noleggio gommoni a La Maddalena con partenza dalla Marina di Cala Mangiavolpe, contattaci oggi stesso per ricevere tutte le informazioni su prezzi, disponibilita e itinerari.
            </p>
            <p className="font-body text-base sm:text-lg text-white font-medium mb-2">Hai domande? Scrivi ad Angela</p>
            <p className="font-body text-sm text-white/60 mb-8">Risponde sempre in tempi rapidi su WhatsApp. Nessuna domanda e troppo banale.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-testid="contatti-cta-wa"
                className="flex items-center gap-2 bg-whatsapp text-white font-body text-sm sm:text-base font-bold px-8 py-4 rounded-full hover:bg-whatsapp/90 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <MessageCircle className="h-5 w-5" /> WhatsApp {WHATSAPP_NUMBER}
              </a>
              <a href={`tel:${ANGELA_PHONE.replace(/\s/g, '')}`} data-testid="contatti-cta-call"
                className="flex items-center gap-2 border-2 border-white/40 text-white font-body text-sm sm:text-base font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300">
                <Phone className="h-5 w-5" /> Chiama Ora
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
