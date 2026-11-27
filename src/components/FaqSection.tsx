import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/siteContent';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="preguntas"
      className="scroll-mt-20 bg-[#0D0D0D] py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#FFB800]">
            Preguntas frecuentes
          </p>
          <h2 className="mt-2 font-display text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
            Respuestas claras antes de iniciar su proyecto
          </h2>
          <p className="mt-3 text-base leading-relaxed text-neutral-300">
            Reunimos las consultas más habituales de productores y emprendedores
            en Paraguay.
          </p>
        </div>

        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#161616]">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            const panelId = `faq-panel-${idx}`;
            const buttonId = `faq-button-${idx}`;

            return (
              <div key={item.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(idx)}
                    className="flex min-h-[60px] w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.03] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#FFB800]"
                  >
                    <span className="font-display text-base font-extrabold text-white sm:text-lg">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#FFB800] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 pb-6 pt-0 text-sm leading-relaxed text-neutral-300 sm:text-base"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
