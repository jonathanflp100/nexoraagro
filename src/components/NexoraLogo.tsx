import { COMPANY_INFO, LOGO_IMAGE_URL } from '../config/siteConfig';

interface NexoraLogoProps {
  variant?: 'dark' | 'light';
  showWordmark?: boolean;
  className?: string;
}

export function NexoraLogo({
  variant = 'dark',
  showWordmark = true,
  className = '',
}: NexoraLogoProps) {
  const textColor = variant === 'dark' ? 'text-white' : 'text-[#0D0D0D]';

  return (
    <span className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 ${className}`}>
      {LOGO_IMAGE_URL ? (
        <img
          src={LOGO_IMAGE_URL}
          alt={`Símbolo ${COMPANY_INFO.name}`}
          className="h-9 w-9 object-contain shrink-0"
          referrerPolicy="no-referrer"
        />
      ) : (
        <svg
          width="36"
          height="36"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="shrink-0"
        >
          <rect
            width="64"
            height="64"
            rx="14"
            fill={variant === 'dark' ? '#161616' : '#0D0D0D'}
            stroke="#FFB800"
            strokeOpacity="0.35"
            strokeWidth="2"
          />
          <circle
            cx="32"
            cy="32"
            r="23"
            stroke="#FFB800"
            strokeWidth="1.5"
            strokeOpacity="0.22"
          />
          <path
            d="M18 44V19H24.5L39.5 36.2V19H46V44H39.5L24.5 26.8V44H18Z"
            fill="#FFB800"
          />
          <path
            d="M16 49.5C21.5 46.8 27 46.8 32 49.5C37 52.2 42.5 52.2 48 49.5"
            stroke="#2DD4BF"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      )}
      {showWordmark && (
        <span
          className={`font-display text-xl font-black tracking-tight ${textColor}`}
        >
          {COMPANY_INFO.name}
        </span>
      )}
    </span>
  );
}
