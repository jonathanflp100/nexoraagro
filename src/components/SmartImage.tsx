import { useState } from 'react';
import { Waves } from 'lucide-react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  priority?: boolean;
}

export function SmartImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackLabel = 'NEXORA Piscicultura',
  priority = false,
}: SmartImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#161616] via-[#132a2c] to-[#0D0D0D] text-neutral-300 p-6 text-center ${className}`}
      >
        <Waves className="h-9 w-9 text-[#2DD4BF] mb-3" aria-hidden="true" />
        <span className="font-display text-sm font-bold text-white">
          {fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
