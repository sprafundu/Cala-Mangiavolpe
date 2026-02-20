import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Anchor, MessageCircle } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { useLanguage } from '@/context/LanguageContext';
import { FAREHARBOR_URL, WHATSAPP_URL } from '@/constants';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Itinerari', href: '/itinerari' },
  { label: 'Prezzi', href: '/prezzi' },
  { label: 'Prenotazioni', href: '/prenotazioni' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contatti', href: '/contatti' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage, LANGUAGES } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showTransparent = isHome && !scrolled;

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        showTransparent
          ? 'bg-transparent'
          : 'backdrop-blur-md bg-white/90 shadow-sm border-b border-slate-100'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link
          to="/"
          data-testid="logo-link"
          className="flex items-center gap-2"
        >
          <Anchor className={`h-6 w-6 transition-colors duration-300 ${showTransparent ? 'text-white' : 'text-turquoise'}`} />
          <div className={`transition-colors duration-300 ${showTransparent ? 'text-white' : 'text-ocean'}`}>
            <span className="font-heading text-lg lg:text-xl font-bold leading-tight block">Rental Boat</span>
            <span className="font-body text-[10px] lg:text-xs tracking-widest uppercase leading-tight block opacity-80">Cala Mangiavolpe</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              data-testid={`nav-link-${link.href === '/' ? 'home' : link.href.slice(1)}`}
              className={`font-body text-sm font-medium transition-all duration-300 hover:opacity-100 ${
                location.pathname === link.href
                  ? showTransparent ? 'text-white' : 'text-turquoise'
                  : showTransparent ? 'text-white/70 hover:text-white' : 'text-ocean/60 hover:text-turquoise'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side: language + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-1 mr-2">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                data-testid={`lang-${lang.code}`}
                onClick={() => setLanguage(lang.code)}
                className={`px-1.5 py-0.5 text-[11px] font-bold rounded transition-all duration-300 ${
                  language === lang.code
                    ? showTransparent ? 'text-white bg-white/20' : 'text-turquoise bg-turquoise/10'
                    : showTransparent ? 'text-white/40 hover:text-white/70' : 'text-ocean/40 hover:text-ocean/70'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
          <a
            href={FAREHARBOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-book-cta"
            className="bg-turquoise text-white font-body text-sm font-bold px-6 py-2.5 rounded-full hover:bg-turquoise-light hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Prenota Ora
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-2">
          <div className="flex items-center gap-1 mr-1">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                data-testid={`lang-mobile-${lang.code}`}
                onClick={() => setLanguage(lang.code)}
                className={`px-1 py-0.5 text-[10px] font-bold rounded transition-all duration-300 ${
                  language === lang.code
                    ? showTransparent ? 'text-white' : 'text-turquoise'
                    : showTransparent ? 'text-white/30' : 'text-ocean/30'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                data-testid="mobile-menu-toggle"
                className={`p-2 transition-colors duration-300 ${showTransparent ? 'text-white' : 'text-ocean'}`}
                aria-label="Menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white w-[300px] p-0">
              <SheetTitle className="sr-only">Menu di navigazione</SheetTitle>
              <SheetDescription className="sr-only">Navigazione del sito</SheetDescription>
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Anchor className="h-5 w-5 text-turquoise" />
                    <div>
                      <span className="font-heading text-lg font-bold text-ocean block">Rental Boat</span>
                      <span className="font-body text-[9px] tracking-widest uppercase text-ocean/60">Cala Mangiavolpe</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      data-testid={`mobile-nav-${link.href === '/' ? 'home' : link.href.slice(1)}`}
                      onClick={() => setMobileOpen(false)}
                      className={`font-body text-base font-medium py-3 border-b border-slate-50 transition-colors duration-300 ${
                        location.pathname === link.href ? 'text-turquoise' : 'text-ocean/80 hover:text-turquoise'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="p-6 space-y-3 border-t border-slate-100">
                  <a
                    href={FAREHARBOR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="mobile-book-cta"
                    className="flex items-center justify-center gap-2 bg-turquoise text-white font-body text-sm font-bold px-6 py-3 rounded-full hover:bg-turquoise-light transition-all duration-300 w-full"
                  >
                    Prenota Ora
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="mobile-whatsapp-cta"
                    className="flex items-center justify-center gap-2 bg-whatsapp text-white font-body text-sm font-bold px-6 py-3 rounded-full hover:bg-whatsapp/90 transition-all duration-300 w-full"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
