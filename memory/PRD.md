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
- Bandierine lingua: IT/EN/FR/DE
- Google Maps embed La Maddalena
- Mobile-first, responsive

## Architecture
- Frontend: React + TailwindCSS + Shadcn UI
- Backend: FastAPI (minimal, health check)
- Database: MongoDB (non utilizzato al momento)
- Fonts: Cormorant Garamond (headings) + Manrope (body)

## What's Been Implemented (Jan 2026)
- **Home page completa**: Hero carousel, Stats bar, Fleet (3 barche), Destinazioni (4 isole), Perche Noi (6 features), Come Funziona (6 step), Chi Siamo, FAQ accordion (11 domande), CTA finale
- **Navbar multi-pagina**: React Router Link, glass effect, hamburger mobile, language flags
- **Footer**: Google Maps embed, social links, contatti
- **WhatsApp floating button** su tutte le pagine
- **Pagine placeholder**: Itinerari, Prezzi, Prenotazioni, Contatti (con hero + CTA)
- **Conversione single-page → multi-page** con React Router

## Pages Structure
- `/` - Home (completa)
- `/itinerari` - Placeholder (da completare)
- `/prezzi` - Placeholder (da completare)
- `/prenotazioni` - Placeholder (da completare con FareHarbor embed)
- `/contatti` - Placeholder con mappa e WhatsApp

## Prioritized Backlog
### P0 - Da completare subito
- Contenuto pagina Itinerari (testo dal cliente)
- Contenuto pagina Prezzi (testo dal cliente)
- Contenuto pagina Prenotazioni (testo dal cliente)
- Contenuto pagina Contatti (testo dal cliente)

### P1
- Traduzioni EN/FR/DE complete
- Cookie consent banner GDPR
- Gallery fotografica con lightbox
- SEO meta tags per ogni pagina

### P2
- Google Analytics
- Schema.org markup per local business
- Lazy loading immagini ottimizzato
- PWA support
