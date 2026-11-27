import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export function FinalCta() {
  const ctaHref = buildWhatsAppUrl(WHATSAPP_MESSAGES.ctaFinal);

  return (
    <section className="bg-[#FFB800] py-20 text-[#0D0D0D] sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2
              className="font-display text-balance font-black leading-[1.08] tracking-tight text-[#0D0D0D]"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Empiece su producción de tilapia hoy
            </h2>
            <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-[#0D0D0D]/80 sm:text-lg">
              Hable directamente con el equipo de NEXORA en Paraguay y reciba
              asesoramiento sobre tanques de ferrocemento, geomembrana o
              mentoría técnica para su establecimiento.
            </p>
          </div>

          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-xl bg-[#0D0D0D] px-8 py-4 text-base font-extrabold text-white shadow-xl shadow-black/15 transition-all duration-150 hover:bg-neutral-800 active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D0D0D]"
          >
            <WhatsAppIcon className="h-5 w-5 shrink-0 text-[#FFB800]" />
            <span>Hablar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
