import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import {
  FERROCEMENT_IMAGE,
  PROCESS_STEPS,
  TANK_ADVANTAGES,
} from '../data/siteContent';
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/siteConfig';
import { SmartImage } from './SmartImage';
import { WhatsAppIcon } from './WhatsAppIcon';

export function FerrocementSection() {
  const tankWhatsappHref = buildWhatsAppUrl(WHATSAPP_MESSAGES.tanques);

  return (
    <section
      id="tanques"
      className="scroll-mt-20 bg-[#0D0D0D] py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Bloque superior: Propuesta y fotografía */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              <p className="text-sm font-semibold text-[#FFB800]">
                Tanques circulares de ferrocemento
              </p>
              <h2 className="mt-2 font-display text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
                Construidos en su propiedad para producir año tras año
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-300">
                El ferrocemento combina una armadura de acero continua con un
                mortero compacto e impermeable. El resultado es un tanque circular
                firme, fácil de limpiar y con una relación costo-durabilidad difícil
                de igualar en el campo paraguayo.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {TANK_ADVANTAGES.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-[#161616] p-5 transition-colors duration-200 hover:border-[#FFB800]/40"
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#FFB800]"
                        aria-hidden="true"
                      />
                      <h3 className="font-display text-base font-extrabold text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-2.5 text-sm leading-relaxed text-neutral-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={tankWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center gap-2.5 rounded-xl bg-[#FFB800] px-6 py-3 text-sm font-extrabold text-[#0D0D0D] transition-all duration-150 hover:bg-[#E5A500] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                <span>Solicitar presupuesto de tanque</span>
              </a>
            </div>
          </div>

          {/* Imagen de obra y ficha técnica integrada */}
          <div className="flex flex-col lg:col-span-6">
            <div className="relative flex-1 overflow-hidden rounded-2xl border border-white/10 bg-[#161616]">
              <SmartImage
                src={FERROCEMENT_IMAGE}
                alt="Tanque circular de ferrocemento de 6 metros en construcción sobre terreno rural en Paraguay"
                className="h-full min-h-[320px] w-full object-cover lg:h-full"
                fallbackLabel="Construcción de tanque de ferrocemento"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/75 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs font-semibold text-[#2DD4BF]">
                  Especificación de referencia · Adaptable a medida
                </p>
                <div className="mt-2 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-sm text-neutral-200 tabular-nums">
                  <span>
                    <strong className="font-display text-lg font-black text-white">
                      6 m
                    </strong>{' '}
                    de diámetro
                  </span>
                  <span aria-hidden="true" className="text-neutral-500">
                    ·
                  </span>
                  <span>
                    <strong className="font-display text-lg font-black text-white">
                      1,20 m
                    </strong>{' '}
                    de altura
                  </span>
                  <span aria-hidden="true" className="text-neutral-500">
                    ·
                  </span>
                  <span>
                    <strong className="font-display text-lg font-black text-[#FFB800]">
                      ~34.000 L
                    </strong>{' '}
                    de volumen útil
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Paso a paso del proceso */}
        <div className="mt-20 border-t border-white/10 pt-16">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold text-[#2DD4BF]">
                Proceso paso a paso
              </p>
              <h3 className="mt-1.5 font-display text-2xl font-black tracking-tight text-white sm:text-3xl">
                Cómo llevamos su tanque del terreno a la producción
              </h3>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-neutral-400">
              Un método claro de cinco etapas para que sepa exactamente qué sucede
              en cada momento de la obra.
            </p>
          </div>

          <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((step, index) => (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative flex flex-col rounded-2xl border border-white/10 bg-[#161616] p-5 transition-colors duration-200 hover:border-[#FFB800]/45"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-black text-[#FFB800] tabular-nums">
                    {step.number}
                  </span>
                  {index < PROCESS_STEPS.length - 1 && (
                    <ArrowRight
                      className="hidden h-4 w-4 text-neutral-600 lg:block"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <h4 className="mt-4 font-display text-lg font-extrabold text-white">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
