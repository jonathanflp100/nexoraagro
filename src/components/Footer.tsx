import { Instagram, Mail, MapPin } from 'lucide-react';
import {
  buildWhatsAppUrl,
  COMPANY_INFO,
  WHATSAPP_MESSAGES,
} from '../config/siteConfig';
import { NAV_ITEMS } from '../data/siteContent';
import { NexoraLogo } from './NexoraLogo';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Footer() {
  const year = new Date().getFullYear();
  const whatsappHref = buildWhatsAppUrl(WHATSAPP_MESSAGES.general);

  return (
    <footer className="border-t border-white/10 bg-[#0D0D0D] text-neutral-300">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Identidad */}
          <div className="md:col-span-5">
            <a
              href="#inicio"
              aria-label="NEXORA — Volver al inicio"
              className="inline-flex rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFB800]"
            >
              <NexoraLogo variant="dark" />
            </a>
            <p className="mt-4 font-display text-base font-bold text-[#FFB800]">
              {COMPANY_INFO.tagline}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-neutral-400">
              Construcción de tanques circulares de ferrocemento, instalación de
              geomembrana, mentoría técnica y cursos de piscicultura para
              productores en todo el Paraguay.
            </p>
          </div>

          {/* Navegación */}
          <div className="md:col-span-3">
            <h3 className="font-display text-sm font-extrabold text-white">
              Secciones
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-neutral-400 transition-colors hover:text-[#FFB800]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#proyectos"
                  className="text-neutral-400 transition-colors hover:text-[#FFB800]"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#preguntas"
                  className="text-neutral-400 transition-colors hover:text-[#FFB800]"
                >
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="md:col-span-4">
            <h3 className="font-display text-sm font-extrabold text-white">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-neutral-300 transition-colors hover:text-[#FFB800]"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#FFB800]" />
                  <span className="tabular-nums">
                    WhatsApp: {COMPANY_INFO.whatsappDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-neutral-300 transition-colors hover:text-[#FFB800]"
                >
                  <Instagram
                    className="h-4 w-4 shrink-0 text-[#FFB800]"
                    aria-hidden="true"
                  />
                  <span>Instagram: {COMPANY_INFO.instagramHandle}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="inline-flex items-center gap-2.5 text-neutral-300 transition-colors hover:text-[#FFB800]"
                >
                  <Mail
                    className="h-4 w-4 shrink-0 text-[#FFB800]"
                    aria-hidden="true"
                  />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5 text-neutral-400">
                <MapPin
                  className="h-4 w-4 shrink-0 text-[#2DD4BF]"
                  aria-hidden="true"
                />
                <span>{COMPANY_INFO.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center">
          <p>
            © {year} {COMPANY_INFO.name}. Todos los derechos reservados.
          </p>
          <p>Paraguay · Soluciones en piscicultura y ferrocemento</p>
        </div>
      </div>
    </footer>
  );
}
