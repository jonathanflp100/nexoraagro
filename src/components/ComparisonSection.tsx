import { Check, X } from 'lucide-react';
import { COMPARISON_ROWS } from '../data/siteContent';
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/siteConfig';

export function ComparisonSection() {
  const tankHref = buildWhatsAppUrl(WHATSAPP_MESSAGES.tanques);

  return (
    <section className="bg-[#0D0D0D] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#FFB800]">
            Comparativo técnico
          </p>
          <h2 className="mt-2 font-display text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
            Tanque de ferrocemento vs. estanque de tierra vs. tanque de lona
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-300">
            Evalúe con claridad qué sistema le ofrece mayor durabilidad, mejor
            sanidad del agua y menor costo de mantenimiento a lo largo de los años.
          </p>
        </div>

        {/* Tabla responsiva con scroll horizontal seguro en pantallas muy estrechas */}
        <div className="mt-10 overflow-x-auto rounded-2xl border border-white/10 bg-[#161616]">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th
                  scope="col"
                  className="px-6 py-5 font-display text-sm font-extrabold text-neutral-300"
                >
                  Criterio
                </th>
                <th
                  scope="col"
                  className="bg-[#FFB800]/12 px-6 py-5 font-display text-base font-black text-[#FFB800]"
                >
                  Tanque de ferrocemento (NEXORA)
                </th>
                <th
                  scope="col"
                  className="px-6 py-5 font-display text-sm font-bold text-neutral-300"
                >
                  Estanque de tierra
                </th>
                <th
                  scope="col"
                  className="px-6 py-5 font-display text-sm font-bold text-neutral-300"
                >
                  Tanque de lona
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-sm">
              {COMPARISON_ROWS.map((row) => (
                <tr
                  key={row.criterion}
                  className="transition-colors hover:bg-white/[0.02]"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-semibold text-white"
                  >
                    {row.criterion}
                  </th>

                  {/* Ferrocemento destacado */}
                  <td className="bg-[#FFB800]/[0.06] px-6 py-4">
                    <div className="flex items-start gap-2.5">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFB800] text-[#0D0D0D]"
                        aria-label="Ventaja"
                      >
                        <Check className="h-3.5 w-3.5 stroke-[3]" aria-hidden="true" />
                      </span>
                      <span className="font-semibold text-white">
                        {row.ferrocement.label}
                      </span>
                    </div>
                  </td>

                  {/* Estanque de tierra */}
                  <td className="px-6 py-4 text-neutral-300">
                    <div className="flex items-start gap-2.5">
                      {row.earthPond.ok ? (
                        <span
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-[#2DD4BF]"
                          aria-label="Cumple parcialmente"
                        >
                          <Check className="h-3.5 w-3.5 stroke-[2.5]" aria-hidden="true" />
                        </span>
                      ) : (
                        <span
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-400"
                          aria-label="Limitación"
                        >
                          <X className="h-3.5 w-3.5 stroke-[2.5]" aria-hidden="true" />
                        </span>
                      )}
                      <span>{row.earthPond.label}</span>
                    </div>
                  </td>

                  {/* Tanque de lona */}
                  <td className="px-6 py-4 text-neutral-300">
                    <div className="flex items-start gap-2.5">
                      {row.canvasTank.ok ? (
                        <span
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-[#2DD4BF]"
                          aria-label="Cumple parcialmente"
                        >
                          <Check className="h-3.5 w-3.5 stroke-[2.5]" aria-hidden="true" />
                        </span>
                      ) : (
                        <span
                          className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-400"
                          aria-label="Limitación"
                        >
                          <X className="h-3.5 w-3.5 stroke-[2.5]" aria-hidden="true" />
                        </span>
                      )}
                      <span>{row.canvasTank.label}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-neutral-400">
            ¿Tiene dudas sobre cuál opción conviene más para su suelo y fuente de agua?
          </p>
          <a
            href={tankHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-[#FFB800]/50 px-5 py-2.5 text-sm font-bold text-[#FFB800] transition-colors hover:bg-[#FFB800] hover:text-[#0D0D0D] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB800]"
          >
            Consultar qué sistema conviene a mi terreno
          </a>
        </div>
      </div>
    </section>
  );
}
