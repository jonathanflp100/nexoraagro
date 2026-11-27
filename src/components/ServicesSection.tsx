import {
  ArrowUpRight,
  Compass,
  Cylinder,
  GraduationCap,
  Layers,
} from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES, type ServiceItem } from '../data/siteContent';
import { buildWhatsAppUrl } from '../config/siteConfig';

function ServiceIcon({ iconKey }: { iconKey: ServiceItem['iconKey'] }) {
  const cls = 'h-6 w-6 text-[#0D9488]';
  switch (iconKey) {
    case 'tank':
      return <Cylinder className={cls} aria-hidden="true" />;
    case 'liner':
      return <Layers className={cls} aria-hidden="true" />;
    case 'mentorship':
      return <Compass className={cls} aria-hidden="true" />;
    case 'courses':
      return <GraduationCap className={cls} aria-hidden="true" />;
  }
}

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="scroll-mt-20 bg-white py-20 text-[#0D0D0D] sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#0D9488]">
            Nuestros servicios
          </p>
          <h2 className="mt-2 font-display text-balance text-3xl font-black tracking-tight text-[#0D0D0D] sm:text-4xl">
            Infraestructura y conocimiento técnico para producir con respaldo
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600">
            Resolvemos tanto la obra física como el manejo productivo para que su
            inversión en piscicultura funcione desde el primer ciclo.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {SERVICES.map((service, index) => {
            const href = buildWhatsAppUrl(service.whatsappMessage);
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-[#FAFAFA] p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#0D0D0D]/25 hover:bg-white hover:shadow-xl hover:shadow-neutral-900/5 sm:p-8"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-teal-200/80 bg-teal-50/70">
                      <ServiceIcon iconKey={service.iconKey} />
                    </div>
                    <span className="font-display text-lg font-extrabold text-neutral-400 tabular-nums">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-extrabold tracking-tight text-[#0D0D0D]">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#0D9488]">
                    {service.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-neutral-200/80 pt-5 text-sm text-neutral-700">
                    {service.specs.map((spec) => (
                      <li key={spec} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFB800]"
                        />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-2">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#0D0D0D] px-5 py-2.5 text-sm font-bold text-white transition-all duration-150 group-hover:bg-[#FFB800] group-hover:text-[#0D0D0D] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D0D0D]"
                  >
                    <span>{service.ctaLabel}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
