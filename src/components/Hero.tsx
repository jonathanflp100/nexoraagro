import { ArrowDownRight } from 'lucide-react';
import { motion } from 'motion/react';
import { HERO_IMAGE, TRUST_METRICS } from '../data/siteContent';
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/siteConfig';
import { SmartImage } from './SmartImage';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Hero() {
  const tankWhatsappHref = buildWhatsAppUrl(WHATSAPP_MESSAGES.heroTanque);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-[#0D0D0D] pt-16 text-white"
    >
      {/* Fondo fotográfico con scrim de alto contraste */}
      <div className="absolute inset-0 z-0">
        <SmartImage
          src={HERO_IMAGE}
          alt="Tanques circulares de ferrocemento llenos de agua cristalina en una granja piscícola de Paraguay"
          className="h-full w-full object-cover object-center"
          fallbackLabel="Tanques circulares NEXORA"
          priority
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/92 via-[#0D0D0D]/75 to-[#0D0D0D]/40"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]/55"
        />
      </div>

      {/* Contenido principal del Hero */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-semibold tracking-wide text-[#2DD4BF]">
            Piscicultura en Paraguay · Tanques de ferrocemento y asesoramiento técnico
          </p>

          <h1
            className="font-display text-balance font-black leading-[1.08] tracking-tight text-white"
            style={{ fontSize: 'clamp(2.35rem, 4.6vw, 4rem)' }}
          >
            Produzca tilapia con tanques que duran{' '}
            <span className="text-[#FFB800]">décadas</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-200 sm:text-lg">
            Construimos tanques circulares de ferrocemento en su propiedad,
            instalamos geomembrana y le acompañamos con mentoría técnica desde la
            planificación inicial hasta la venta de su producción.
          </p>

          <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a
              href={tankWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[50px] items-center justify-center gap-2.5 rounded-xl bg-[#FFB800] px-7 py-3.5 text-base font-extrabold text-[#0D0D0D] shadow-lg shadow-black/30 transition-all duration-150 hover:bg-[#E5A500] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              <span>Quiero mi tanque</span>
            </a>

            <a
              href="#mentoria"
              className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-150 hover:border-[#FFB800] hover:bg-white/10 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB800]"
            >
              <span>Conocer la mentoría</span>
              <ArrowDownRight className="h-4 w-4 shrink-0 text-[#FFB800]" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Barra de confianza anclada al pie del Hero */}
      <div className="relative z-10 border-t border-white/10 bg-[#0D0D0D]/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
            {TRUST_METRICS.map((metric, idx) => (
              <div
                key={metric.label}
                className={`${idx > 0 ? 'lg:pl-7' : ''} ${idx < TRUST_METRICS.length - 1 ? 'lg:pr-7' : ''}`}
              >
                <p className="font-display text-2xl font-black tracking-tight text-[#FFB800] tabular-nums sm:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  {metric.label}
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-neutral-400">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
