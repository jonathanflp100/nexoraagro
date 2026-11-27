import { ArrowUpRight, Check, Droplets, Laptop, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import {
  COURSE_MODALITIES,
  MENTORSHIP_AUDIENCE,
  MENTORSHIP_FORMATS,
  MENTORSHIP_IMAGE,
  MENTORSHIP_TOPICS,
} from '../data/siteContent';
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/siteConfig';
import { SmartImage } from './SmartImage';
import { WhatsAppIcon } from './WhatsAppIcon';

export function MentorshipSection() {
  const mentorshipHref = buildWhatsAppUrl(WHATSAPP_MESSAGES.mentoria);
  const coursesHref = buildWhatsAppUrl(WHATSAPP_MESSAGES.cursos);

  return (
    <section
      id="mentoria"
      className="scroll-mt-20 bg-white py-20 text-[#0D0D0D] sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Parte 1: Mentoría para piscicultores */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Fotografía editorial de campo */}
          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[340px] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
              <SmartImage
                src={MENTORSHIP_IMAGE}
                alt="Especialista de Nexora realizando medición de calidad del agua junto a un productor paraguayo"
                className="h-full w-full object-cover"
                fallbackLabel="Mentoría técnica en campo"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0D0D0D]/85 via-[#0D0D0D]/40 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs font-semibold text-[#2DD4BF]">
                  Acompañamiento real en su ciclo
                </p>
                <p className="mt-1 font-display text-lg font-extrabold leading-snug">
                  Decisiones técnicas respaldadas para evitar pérdidas y cuidar su inversión
                </p>
              </div>
            </div>
          </div>

          {/* Para quién es + Formato + CTA */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="text-sm font-semibold text-[#0D9488]">
                Mentoría para piscicultores
              </p>
              <h2 className="mt-2 font-display text-balance text-3xl font-black tracking-tight text-[#0D0D0D] sm:text-4xl">
                No produzca a prueba y error: cuente con acompañamiento experto
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                Un buen tanque es la base, pero la rentabilidad está en el manejo
                diario. Nuestra mentoría lo acompaña desde el cálculo inicial hasta
                que coloca su pescado en el mercado.
              </p>

              {/* Para quién es */}
              <div className="mt-7">
                <h3 className="font-display text-lg font-extrabold text-[#0D0D0D]">
                  ¿Para quién es esta mentoría?
                </h3>
                <ul className="mt-3.5 space-y-2.5 text-sm text-neutral-700 sm:text-base">
                  {MENTORSHIP_AUDIENCE.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-[#0D9488]">
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Formato */}
              <div className="mt-7 grid grid-cols-1 gap-4 border-t border-neutral-200 pt-6 sm:grid-cols-3">
                {MENTORSHIP_FORMATS.map((fmt) => (
                  <div key={fmt.label}>
                    <p className="font-display text-sm font-extrabold text-[#0D0D0D]">
                      {fmt.label}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                      {fmt.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <a
                href={mentorshipHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[50px] items-center gap-2.5 rounded-xl bg-[#FFB800] px-7 py-3.5 text-base font-extrabold text-[#0D0D0D] shadow-sm transition-all duration-150 hover:bg-[#E5A500] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D0D0D]"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                <span>Quiero la mentoría</span>
              </a>
            </div>
          </div>
        </div>

        {/* Qué aprende en la mentoría (6 pilares) */}
        <div className="mt-16 rounded-2xl border border-neutral-200 bg-[#FAFAFA] p-6 sm:p-10">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold text-[#0D9488]">
                Contenidos clave del acompañamiento
              </p>
              <h3 className="mt-1 font-display text-2xl font-black tracking-tight text-[#0D0D0D]">
                Qué aprende y aplica en su establecimiento
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600">
              <Droplets className="h-4 w-4 text-[#0D9488]" aria-hidden="true" />
              <span>Enfoque práctico de campo</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MENTORSHIP_TOPICS.map((topic, idx) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.35,
                  delay: idx * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-xl border border-neutral-200/80 bg-white p-5 transition-colors duration-200 hover:border-[#0D9488]/45"
              >
                <p className="font-display text-xs font-extrabold text-[#0D9488] tabular-nums">
                  0{idx + 1}.
                </p>
                <h4 className="mt-1.5 font-display text-lg font-extrabold text-[#0D0D0D]">
                  {topic.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {topic.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Parte 2: Cursos de piscicultura (#cursos) */}
        <div
          id="cursos"
          className="mt-20 scroll-mt-24 border-t border-neutral-200 pt-16"
        >
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#0D9488]">
                Formación técnica
              </p>
              <h2 className="mt-1.5 font-display text-balance text-3xl font-black tracking-tight text-[#0D0D0D]">
                Cursos de piscicultura presenciales y online
              </h2>
              <p className="mt-3 text-base leading-relaxed text-neutral-600">
                Capacítese usted o su personal con contenidos ordenados, ejemplos
                reales de Paraguay y herramientas listas para usar en campo.
              </p>
            </div>
            <a
              href={coursesHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-[#0D0D0D] px-6 py-3 text-sm font-bold text-white transition-colors duration-150 hover:bg-[#FFB800] hover:text-[#0D0D0D] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D0D0D]"
            >
              <span>Consultar próximas fechas</span>
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {COURSE_MODALITIES.map((course, idx) => (
              <div
                key={course.title}
                className="flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#0D0D0D]/30 hover:shadow-lg hover:shadow-neutral-900/5"
              >
                <div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0D9488]">
                    {idx === 0 ? (
                      <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
                    ) : (
                      <Laptop className="h-5 w-5 shrink-0" aria-hidden="true" />
                    )}
                    <span>{course.schedule}</span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-extrabold text-[#0D0D0D]">
                    {course.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
                    {course.description}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-neutral-100 pt-5 text-sm text-neutral-700">
                    {course.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#0D9488]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
