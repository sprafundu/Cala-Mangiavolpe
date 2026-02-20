# PRD - Rental Boat Cala Mangiavolpe

## Problem Statement
Sito web moderno multi-pagina per noleggio gommoni a La Maddalena, Sardegna. Atmosfera estiva/mediterranea, design pulito e veloce.

## User Personas
- Turisti italiani e stranieri in vacanza in Sardegna
- Famiglie, coppie, gruppi di amici
- Utenti mobile (in vacanza)

## Core Requirements
- Sito multi-pagina con React Router
- Design mediterraneo (blu oceano, turchese, bianco, sabbia)
- CTA: WhatsApp + FareHarbor (no form contatti)
- Bandierine lingua: IT/EN/FR/DE (placeholder - funzionalita da implementare)
- Google Maps embed La Maddalena
- Mobile-first, responsive

## Architecture
- Frontend: React + TailwindCSS + Shadcn UI
- Backend: FastAPI (minimal, health check)
- Database: MongoDB (non utilizzato)
- Fonts: Cormorant Garamond (headings) + Manrope (body)

## What's Been Implemented (Dicembre 2025)

### Pagine Complete
- **Home (`/`)**: Hero, Stats, Fleet (3 barche), Destinazioni (4 isole), Perche Noi (6 features), Come Funziona (6 step), Chi Siamo, FAQ accordion, CTA finale
- **Itinerari (`/itinerari`)**: 3 itinerari dettagliati con distanze, tempi, punti interesse, mappa descrittiva
- **Prezzi (`/prezzi`)**: Tabella prezzi per barca, periodi stagionali, cosa include/non include, deposito, FAQ prezzi
- **FAQ (`/faq`)**: 11+ domande frequenti con accordion, sezione prenotazione, contatti
- **Prenotazioni (`/prenotazioni`)**: Info FareHarbor, documenti necessari, 3 metodi di pagamento, cosa portare, FAQ prenotazioni
- **Contatti (`/contatti`)**: Posizione con mappa, orari, contatti diretti (telefono/WhatsApp/email), come arrivare, canali prenotazione, perche sceglierci

### Componenti
- **Navbar**: React Router Link, glass effect, hamburger mobile, language flags (placeholder)
- **Footer**: Google Maps embed, social links, contatti, navigazione
- **WhatsApp floating button** su tutte le pagine
- **ScrollReveal** animazioni allo scroll

### Integrazioni Esterne
- FareHarbor: Link prenotazioni (`https://fareharbor.com/embeds/book/rentalboatcalamangiavolpe/`)
- WhatsApp: Contatto diretto (`wa.me/393318659946`)
- Google Maps: Embed per localizzazione

## Testing Status
- Tutti i test passati (iteration_7.json - 100% frontend success)
- Pagine testate: Home, Itinerari, Prezzi, FAQ, Prenotazioni, Contatti
- Navigazione, responsive, link esterni: OK

## Prioritized Backlog

### P0 - Completato
- [x] Tutte le 6 pagine create e testate

### P1 - Prossimi Task
- [ ] Implementazione multilingua (EN/FR/DE) con i18next
- [ ] Cookie consent banner GDPR
- [ ] SEO meta tags per ogni pagina

### P2 - Backlog Futuro
- [ ] Gallery fotografica con lightbox
- [ ] Google Analytics
- [ ] Schema.org markup per local business
- [ ] Lazy loading immagini ottimizzato
- [ ] PWA support

## Tech Stack
- React 18
- React Router 6
- TailwindCSS 3
- Shadcn/UI components
- Lucide React icons
- FastAPI (backend minimal)

## External Links
- Preview: https://rental-boat-preview.preview.emergentagent.com
- FareHarbor: https://fareharbor.com/embeds/book/rentalboatcalamangiavolpe/
