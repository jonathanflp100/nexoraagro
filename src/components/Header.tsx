import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../data/siteContent';
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/siteConfig';
import { NexoraLogo } from './NexoraLogo';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const whatsappHref = buildWhatsAppUrl(WHATSAPP_MESSAGES.general);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled || mobileMenuOpen
          ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-white/10'
          : 'bg-[#0D0D0D]/75 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zona 1: Marca (una sola línea) */}
        <a
          href="#inicio"
          aria-label="NEXORA — Ir al inicio"
          className="rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFB800]"
          onClick={() => setMobileMenuOpen(false)}
        >
          <NexoraLogo variant="dark" />
        </a>

        {/* Zona 2: Enlaces de navegación */}
        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex items-center gap-7"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 text-sm font-medium text-neutral-200 transition-colors duration-150 hover:text-[#FFB800] whitespace-nowrap shrink-0 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#FFB800] after:transition-transform after:duration-150 hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFB800]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zona 3: Acción principal + botón menú móvil */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-[#FFB800] px-4 py-2.5 text-sm font-bold text-[#0D0D0D] transition-all duration-150 hover:bg-[#E5A500] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            <span>Hablar por WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB800]"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#0D0D0D] px-4 pb-6 pt-4 lg:hidden"
        >
          <nav aria-label="Navegación móvil" className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-neutral-100 transition-colors hover:bg-white/5 hover:text-[#FFB800]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 border-t border-white/10 pt-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#FFB800] px-5 py-3 text-sm font-bold text-[#0D0D0D] transition-colors hover:bg-[#E5A500]"
            >
              <WhatsAppIcon className="h-4 w-4 shrink-0" />
              <span>Hablar por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
