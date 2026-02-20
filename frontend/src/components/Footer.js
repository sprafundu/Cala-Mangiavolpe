import { Link } from 'react-router-dom';
import { Anchor, MapPin, Phone, Clock } from 'lucide-react';
import { FAREHARBOR_URL, WHATSAPP_URL, WHATSAPP_NUMBER, FACEBOOK_URL, INSTAGRAM_URL, MAPS_EMBED_URL } from '@/constants';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Itinerari', href: '/itinerari' },
  { label: 'Prezzi', href: '/prezzi' },
  { label: 'Prenotazioni', href: '/prenotazioni' },
  { label: 'Contatti', href: '/contatti' },
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-ocean text-white">
      {/* Google Maps */}
      <div className="w-full h-[300px] sm:h-[350px]">
        <iframe
          src={MAPS_EMBED_URL}
          title="Rental Boat Cala Mangiavolpe - La Maddalena"
          className="w-full h-full border-0 grayscale-[30%]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          data-testid="google-maps-embed"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Anchor className="h-6 w-6 text-turquoise" />
              <div>
                <span className="font-heading text-xl font-bold block">Rental Boat</span>
                <span className="font-body text-[10px] tracking-widest uppercase opacity-60">Cala Mangiavolpe</span>
              </div>
            </div>
            <p className="font-body text-sm text-white/60 leading-relaxed mb-4">
              Noleggio gommoni senza patente a La Maddalena. Gommoni nuovi 2024, briefing completo e posizione strategica nel cuore dell'isola.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-facebook"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-turquoise transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-instagram"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-turquoise transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body text-sm font-bold mb-4 uppercase tracking-wider text-white/80">Navigazione</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    data-testid={`footer-link-${link.href === '/' ? 'home' : link.href.slice(1)}`}
                    className="font-body text-sm text-white/50 hover:text-turquoise transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={FAREHARBOR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-book-link"
                  className="font-body text-sm text-turquoise hover:text-turquoise-light transition-colors duration-300 font-medium"
                >
                  Prenota Ora
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-sm font-bold mb-4 uppercase tracking-wider text-white/80">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-turquoise flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-white/50">
                  Porto turistico Cala Mangiavolpe<br />La Maddalena (SS), Sardegna
                </span>
              </li>
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-whatsapp"
                  className="flex items-center gap-2.5 font-body text-sm text-white/50 hover:text-whatsapp transition-colors duration-300"
                >
                  <Phone className="h-4 w-4 text-turquoise flex-shrink-0" />
                  {WHATSAPP_NUMBER}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="h-4 w-4 text-turquoise flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm text-white/50">
                  Tutti i giorni<br />Stagione estiva
                </span>
              </li>
            </ul>
          </div>

          {/* Trust */}
          <div>
            <h4 className="font-body text-sm font-bold mb-4 uppercase tracking-wider text-white/80">Riconoscimenti</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className="h-3.5 w-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="font-body text-xs text-white/50">4.9 su Google</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className="h-3.5 w-3.5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 110-12 6 6 0 010 12z" />
                    </svg>
                  ))}
                </div>
                <span className="font-body text-xs text-white/50">5.0 su TripAdvisor</span>
              </div>
              <p className="font-body text-xs text-white/30 mt-2">+150 recensioni verificate</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/30">
            &copy; {new Date().getFullYear()} Rental Boat Cala Mangiavolpe. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="font-body text-xs text-white/30 hover:text-white/50 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-xs text-white/30 hover:text-white/50 transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
