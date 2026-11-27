import { WHATSAPP_MESSAGES } from '../config/siteConfig';

export interface NavItem {
  label: string;
  href: string;
}

export interface TrustMetric {
  value: string;
  label: string;
  detail: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  specs: string[];
  ctaLabel: string;
  whatsappMessage: string;
  iconKey: 'tank' | 'liner' | 'mentorship' | 'courses';
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface TankAdvantage {
  title: string;
  description: string;
}

export interface MentorshipTopic {
  title: string;
  description: string;
}

export interface ComparisonRow {
  criterion: string;
  ferrocement: { ok: boolean; label: string };
  earthPond: { ok: boolean; label: string };
  canvasTank: { ok: boolean; label: string };
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  category: 'Ferrocemento' | 'Geomembrana' | 'Campo y Tilapia';
  caption: string;
  /** Reemplace esta ruta por su propia fotografía en /public/proyectos/... cuando desee */
  imageUrl: string;
  alt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const HERO_IMAGE =
  '/src/assets/images/hero_ferrocement_tank_1795742120277.jpg';
export const FERROCEMENT_IMAGE =
  '/src/assets/images/ferrocement_tank_construction_1795742119353.jpg';
export const MENTORSHIP_IMAGE =
  '/src/assets/images/aquaculture_mentorship_field_1795742123345.jpg';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Tanques', href: '#tanques' },
  { label: 'Mentoría', href: '#mentoria' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Contacto', href: '#contacto' },
];

export const TRUST_METRICS: TrustMetric[] = [
  {
    value: '6 m',
    label: 'Diámetro estándar',
    detail: '1,20 m de altura útil y diseño a medida',
  },
  {
    value: '+25 años',
    label: 'Ferrocemento durable',
    detail: 'Estructura monolítica pensada para décadas',
  },
  {
    value: '100 %',
    label: 'Acompañamiento técnico',
    detail: 'Desde el diseño hasta la cosecha y venta',
  },
  {
    value: '17 deptos.',
    label: 'Todo el Paraguay',
    detail: 'Construcción en su propiedad y soporte remoto',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'servicio-tanques',
    number: '01.',
    title: 'Tanques circulares de ferrocemento',
    subtitle: 'Infraestructura acuícola de larga vida útil',
    description:
      'Construimos tanques circulares de ferrocemento directamente en su propiedad, ideales para cría intensiva y semi-intensiva de tilapia con excelente oxigenación y recambio eficiente.',
    specs: [
      'Diámetro estándar aprox. 6 m y altura de 1,20 m (adaptable a medida)',
      'Drenaje central con pendiente para limpieza rápida de sólidos',
      'Paredes lisas que cuidan la piel del pez y resisten el sol paraguayo',
    ],
    ctaLabel: 'Cotizar tanque',
    whatsappMessage: WHATSAPP_MESSAGES.tanques,
    iconKey: 'tank',
  },
  {
    id: 'servicio-geomembrana',
    number: '02.',
    title: 'Instalación de geomembrana',
    subtitle: 'Impermeabilización profesional para estanques y tanques',
    description:
      'Revestimos estanques excavados, reservorios y tanques con geomembrana de alta densidad (HDPE), evitando filtraciones y optimizando el aprovechamiento del agua en suelos arenosos o permeables.',
    specs: [
      'Termofusión profesional y anclaje seguro en corona',
      'Reducción drástica de pérdidas de agua por infiltración',
      'Mayor control sanitario del fondo y cosecha más ágil',
    ],
    ctaLabel: 'Consultar geomembrana',
    whatsappMessage: WHATSAPP_MESSAGES.geomembrana,
    iconKey: 'liner',
  },
  {
    id: 'servicio-mentoria',
    number: '03.',
    title: 'Mentoría para piscicultores',
    subtitle: 'Acompañamiento técnico desde el inicio hasta la venta',
    description:
      'Lo guiamos paso a paso para que su proyecto sea rentable y predecible, evitando los errores más costosos en calidad del agua, alimentación y manejo sanitario.',
    specs: [
      'Planificación productiva y cálculo de densidad por ciclo',
      'Control de parámetros del agua y ajuste de ración diaria',
      'Estrategia comercial para posicionar y vender su producción',
    ],
    ctaLabel: 'Consultar mentoría',
    whatsappMessage: WHATSAPP_MESSAGES.mentoria,
    iconKey: 'mentorship',
  },
  {
    id: 'servicio-cursos',
    number: '04.',
    title: 'Cursos de piscicultura',
    subtitle: 'Capacitación práctica presencial y online',
    description:
      'Formación clara y directa al grano para productores rurales, emprendedores y equipos de campo que desean dominar la producción moderna de tilapia en Paraguay.',
    specs: [
      'Modalidad presencial en campo y modalidad online en vivo',
      'Manuales técnicos, planillas de costos y tablas de alimentación',
      'Enfoque real adaptado al clima y mercado paraguayo',
    ],
    ctaLabel: 'Ver próximos cursos',
    whatsappMessage: WHATSAPP_MESSAGES.cursos,
    iconKey: 'courses',
  },
];

export const TANK_ADVANTAGES: TankAdvantage[] = [
  {
    title: 'Durabilidad comprobada por décadas',
    description:
      'La combinación de malla metálica y mortero de alta resistencia soporta el sol intenso, lluvias y presión constante del agua sin resecarse ni rasgarse.',
  },
  {
    title: 'Bajo mantenimiento anual',
    description:
      'A diferencia de lonas que requieren reemplazo periódico o estanques de tierra que se desmoronan, el ferrocemento exige cuidados mínimos entre ciclos.',
  },
  {
    title: 'Costo accesible y alta rentabilidad',
    description:
      'Ofrece una inversión inicial mucho menor que el hormigón armado tradicional, logrando una estructura fija que valoriza su establecimiento.',
  },
  {
    title: 'Construidos directamente en su propiedad',
    description:
      'Nuestro equipo se traslada hasta su finca o quinta en cualquier departamento de Paraguay y adapta la obra al terreno y fuente de agua disponibles.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Visita y medición',
    description:
      'Evaluamos su terreno, disponibilidad de agua, energía y espacio para ubicar los tanques en el punto óptimo.',
  },
  {
    number: '02',
    title: 'Proyecto',
    description:
      'Definimos dimensiones, cantidad de unidades, sistema de drenaje central, entradas de agua y presupuesto cerrado.',
  },
  {
    number: '03',
    title: 'Construcción',
    description:
      'Ejecutamos la base, armado de estructura metálica, revocado técnico de ferrocemento y curado controlado.',
  },
  {
    number: '04',
    title: 'Llenado y puesta en marcha',
    description:
      'Realizamos pruebas de estanqueidad, lavado inicial, calibración de aireación y preparación del agua para siembra.',
  },
  {
    number: '05',
    title: 'Acompañamiento',
    description:
      'Seguimos junto a usted en el arranque del ciclo productivo para asegurar crecimiento sano y buena conversión.',
  },
];

export const MENTORSHIP_AUDIENCE: string[] = [
  'Productores agropecuarios que buscan diversificar ingresos aprovechando agua y espacio disponibles.',
  'Emprendedores que desean comenzar su primera producción de tilapia con método y menor riesgo.',
  'Piscicultores activos que quieren bajar mortalidad, optimizar balanceado y mejorar su margen de ganancia.',
];

export const MENTORSHIP_TOPICS: MentorshipTopic[] = [
  {
    title: 'Alimentación y conversión',
    description:
      'Selección de balanceado por fase, frecuencia diaria, cálculo de biomasa y reducción de desperdicios.',
  },
  {
    title: 'Calidad del agua',
    description:
      'Control práctico de oxígeno disuelto, pH, temperatura, amoníaco y protocolos de recambio.',
  },
  {
    title: 'Densidad de siembra',
    description:
      'Cuántos alevines sembrar según volumen del tanque, recambio disponible y equipo de aireación.',
  },
  {
    title: 'Manejo diario y biometrías',
    description:
      'Rutinas de campo simples, pesajes de control y clasificación para lograr lotes parejos.',
  },
  {
    title: 'Sanidad preventiva',
    description:
      'Buenas prácticas de bioseguridad, detección temprana de estrés y prevención de enfermedades.',
  },
  {
    title: 'Comercialización y venta',
    description:
      'Cálculo real de costo por kilo, planificación de cosechas escalonadas y canales de venta locales.',
  },
];

export const MENTORSHIP_FORMATS = [
  {
    label: 'Diagnóstico inicial',
    detail: 'Revisión de su infraestructura, agua y objetivo productivo.',
  },
  {
    label: 'Seguimiento continuo',
    detail: 'Sesiones programadas por videollamada y soporte directo por WhatsApp.',
  },
  {
    label: 'Visitas técnicas opcionales',
    detail: 'Acompañamiento presencial en su establecimiento según etapa del ciclo.',
  },
];

export const COURSE_MODALITIES = [
  {
    title: 'Curso Presencial en Campo',
    schedule: 'Jornadas prácticas intensivas · Grupos reducidos',
    description:
      'Aprenda directamente junto a los tanques: medición de agua, manejo de peces, preparación de sistemas y planificación de costos con especialistas de Nexora.',
    highlights: [
      'Práctica real en instalaciones productivas',
      'Material impreso y certificado de participación',
      'Espacio para analizar su propio proyecto',
    ],
  },
  {
    title: 'Curso Online en Vivo',
    schedule: 'Clases dinámicas desde cualquier punto de Paraguay',
    description:
      'Capacítese sin moverse de su ciudad o finca con clases grabadas y sesiones de consulta en vivo para resolver dudas puntuales de su emprendimiento.',
    highlights: [
      'Acceso a grabaciones y planillas descargables',
      'Guía paso a paso desde la siembra hasta la cosecha',
      'Grupo de consultas técnicas con el equipo',
    ],
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    criterion: 'Vida útil estimada',
    ferrocement: { ok: true, label: 'Más de 25 años' },
    earthPond: { ok: true, label: 'Variable (requiere dragado)' },
    canvasTank: { ok: false, label: '3 a 6 años promedio' },
  },
  {
    criterion: 'Resistencia al sol y perforaciones',
    ferrocement: { ok: true, label: 'Alta resistencia estructural' },
    earthPond: { ok: true, label: 'Sin cubierta, pero con erosión' },
    canvasTank: { ok: false, label: 'Se reseca o rasga con el tiempo' },
  },
  {
    criterion: 'Limpieza y drenaje de sólidos',
    ferrocement: { ok: true, label: 'Drenaje central rápido y limpio' },
    earthPond: { ok: false, label: 'Acumula lodo y barro en el fondo' },
    canvasTank: { ok: true, label: 'Posible, con cuidado al cepillar' },
  },
  {
    criterion: 'Facilidad de cosecha',
    ferrocement: { ok: true, label: 'Rápida y con bajo estrés al pez' },
    earthPond: { ok: false, label: 'Lenta, requiere redes y más personal' },
    canvasTank: { ok: true, label: 'Ágil en lotes medianos' },
  },
  {
    criterion: 'Control de infiltración de agua',
    ferrocement: { ok: true, label: '100 % impermeable' },
    earthPond: { ok: false, label: 'Pierde agua en suelos arenosos' },
    canvasTank: { ok: true, label: 'Impermeable mientras no tenga fugas' },
  },
  {
    criterion: 'Mantenimiento y costo a largo plazo',
    ferrocement: { ok: true, label: 'Mínimo mantenimiento, alta rentabilidad' },
    earthPond: { ok: false, label: 'Reparación frecuente de taludes y malezas' },
    canvasTank: { ok: false, label: 'Reemplazo completo de lona y estructura' },
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'proyecto-1',
    title: 'Módulo de tanques circulares en producción',
    location: 'Región Oriental · Paraguay',
    category: 'Ferrocemento',
    caption: 'Tanques de 6 m de diámetro operando con agua oxigenada y drenaje central.',
    imageUrl: '/src/assets/images/hero_ferrocement_tank_1795742120277.jpg',
    alt: 'Tanques circulares de ferrocemento con agua cristalina en campo paraguayo al atardecer',
  },
  {
    id: 'proyecto-2',
    title: 'Construcción de tanque de 6 m en obra',
    location: 'Itapúa · Paraguay',
    category: 'Ferrocemento',
    caption: 'Armado estructural, tubería central y revocado sanitario ejecutado en la propiedad.',
    imageUrl: '/src/assets/images/ferrocement_tank_construction_1795742119353.jpg',
    alt: 'Construcción de tanque circular de ferrocemento sobre tierra colorada en Paraguay',
  },
  {
    id: 'proyecto-3',
    title: 'Batería de 4 tanques conectados',
    location: 'Caaguazú · Paraguay',
    category: 'Ferrocemento',
    caption: 'Sistema modular escalonado para cosechas continuas durante todo el año.',
    imageUrl: '/src/assets/images/paraguay_aquaculture_farm_1795742124223.jpg',
    alt: 'Cuatro tanques circulares de ferrocemento alineados en granja piscícola de Paraguay',
  },
  {
    id: 'proyecto-4',
    title: 'Estanque impermeabilizado con geomembrana',
    location: 'Paraguarí · Paraguay',
    category: 'Geomembrana',
    caption: 'Instalación de geomembrana HDPE con sellado térmico y anclaje perimetral.',
    imageUrl: '/src/assets/images/geomembrane_pond_paraguay_1795742121915.jpg',
    alt: 'Estanque rural impermeabilizado con geomembrana negra lleno de agua en Paraguay',
  },
  {
    id: 'proyecto-5',
    title: 'Biometría y cosecha de tilapia',
    location: 'Alto Paraná · Paraguay',
    category: 'Campo y Tilapia',
    caption: 'Ejemplares sanos y uniformes criados en tanque circular con alimentación controlada.',
    imageUrl: '/src/assets/images/tilapia_harvest_water_1795742121376.jpg',
    alt: 'Tilapia fresca inspeccionada con red sobre tanque circular con agua oxigenada',
  },
  {
    id: 'proyecto-6',
    title: 'Mentoría y medición de parámetros en campo',
    location: 'Cordillera · Paraguay',
    category: 'Campo y Tilapia',
    caption: 'Control de calidad del agua y capacitación directa al productor junto al tanque.',
    imageUrl: '/src/assets/images/aquaculture_mentorship_field_1795742123345.jpg',
    alt: 'Especialista en piscicultura midiendo calidad del agua junto a un productor paraguayo',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '¿Cuánto tarda la construcción de un tanque de ferrocemento?',
    answer:
      'Un tanque circular estándar de 6 metros de diámetro y 1,20 metros de altura toma en promedio entre 7 y 12 días hábiles de obra en el terreno, dependiendo del clima y las condiciones del suelo. Luego se respeta el tiempo de curado y lavado inicial antes de sembrar los peces.',
  },
  {
    question: '¿Cuántos peces caben en un tanque de 6 metros?',
    answer:
      'Un tanque de 6 m de diámetro por 1,20 m de altura almacena aproximadamente 34.000 litros de agua (34 m³). Según el nivel de aireación y recambio de agua que utilice, puede producir entre 800 y 1.500 tilapias por ciclo. En la evaluación inicial le indicamos la densidad segura para su finca.',
  },
  {
    question: '¿Atienden en mi departamento?',
    answer:
      'Sí, trabajamos en todo el territorio paraguayo. Nuestro equipo se traslada hasta su propiedad en Central, Cordillera, Paraguarí, Caaguazú, Itapúa, Alto Paraná, San Pedro, Concepción, Misiones, Chaco y demás departamentos. Consulte por WhatsApp indicando su ciudad para coordinar.',
  },
  {
    question: '¿Cuáles son las formas de pago disponibles?',
    answer:
      'Trabajamos con pagos por etapas acompañando el avance real de la obra (seña de reserva de materiales, avance estructural y entrega final). Aceptamos transferencias bancarias y acuerdos a medida para proyectos de múltiples tanques o módulos completos.',
  },
  {
    question: '¿La mentoría sirve para principiantes sin experiencia previa?',
    answer:
      'Totalmente. La mentoría está diseñada con lenguaje claro y paso a paso para personas que nunca criaron peces antes, así como para productores que ya tienen estanques y buscan mejorar su productividad y rentabilidad sin cometer errores costosos.',
  },
];

export const PARAGUAY_DEPARTMENTS: string[] = [
  'Asunción / Central',
  'Alto Paraná',
  'Itapúa',
  'Caaguazú',
  'Cordillera',
  'Paraguarí',
  'San Pedro',
  'Guairá',
  'Caazapá',
  'Misiones',
  'Ñeembucú',
  'Concepción',
  'Amambay',
  'Canindeyú',
  'Presidente Hayes',
  'Boquerón',
  'Alto Paraguay',
];

export const CONTACT_SERVICES: string[] = [
  'Tanques circulares de ferrocemento',
  'Instalación de geomembrana',
  'Mentoría para piscicultores',
  'Cursos de piscicultura (presencial / online)',
  'Asesoramiento integral para iniciar desde cero',
];
