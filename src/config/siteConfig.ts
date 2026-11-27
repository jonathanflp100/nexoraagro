/**
 * Configuración centralizada de NEXORA.
 * Edite estas constantes para actualizar el número de WhatsApp, redes y logo en todo el sitio.
 */

export const WHATSAPP = '595XXXXXXXXX';

/**
 * Si desea usar un archivo de imagen propio para el logo (ej.: '/logo-nexora.png' en la carpeta /public),
 * reemplace `null` por la ruta del archivo. Si queda en `null`, se muestra el símbolo vectorial de NEXORA.
 */
export const LOGO_IMAGE_URL: string | null = null;

export const COMPANY_INFO = {
  name: 'NEXORA',
  tagline: 'Soluciones para el agro paraguayo',
  whatsappDisplay: '+595 XX XXX XXXX',
  instagramHandle: '@nexora.py',
  instagramUrl: 'https://instagram.com/nexora.py',
  email: 'contacto@nexora.com.py',
  location: 'Paraguay — Atendemos en todo el país',
} as const;

export const WHATSAPP_MESSAGES = {
  general:
    'Hola Nexora, quiero recibir información sobre sus soluciones en piscicultura.',
  tanques:
    'Hola Nexora, quiero información y presupuesto sobre los tanques circulares de ferrocemento.',
  geomembrana:
    'Hola Nexora, quiero información sobre el servicio de instalación de geomembrana para estanques.',
  mentoria:
    'Hola Nexora, quiero conocer más sobre la mentoría para piscicultores.',
  cursos:
    'Hola Nexora, quiero información sobre los próximos cursos de piscicultura (presenciales y online).',
  heroTanque:
    'Hola Nexora, quiero mi tanque de ferrocemento para producir tilapia. ¿Podrían asesorarme?',
  ctaFinal:
    'Hola Nexora, quiero empezar mi producción de tilapia y necesito asesoramiento.',
} as const;

export function buildWhatsAppUrl(message: string): string {
  const cleanNumber = WHATSAPP.replace(/[^\d]/g, '');
  const phone = cleanNumber.length > 0 ? cleanNumber : WHATSAPP;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
