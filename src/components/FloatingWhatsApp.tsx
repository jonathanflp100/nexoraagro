import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from '../config/siteConfig';
import { WhatsAppIcon } from './WhatsAppIcon';

export function FloatingWhatsApp() {
  const href = buildWhatsAppUrl(WHATSAPP_MESSAGES.general);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar con NEXORA por WhatsApp"
      className="group fixed bottom-5 right-5 z-40 inline-flex h-13 items-center gap-2.5 rounded-full bg-[#FFB800] px-4 text-[#0D0D0D] shadow-xl shadow-black/35 ring-2 ring-[#0D0D0D]/15 transition-all duration-150 hover:scale-105 hover:bg-[#E5A500] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFB800]"
    >
      <WhatsAppIcon className="h-6 w-6 shrink-0" />
      <span className="hidden text-sm font-extrabold whitespace-nowrap sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
