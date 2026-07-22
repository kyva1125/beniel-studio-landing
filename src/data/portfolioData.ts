export const PortfolioData = {
  imagesCine: [
    '/assets/images/cine/1.png',
    '/assets/images/cine/2.png',
    '/assets/images/cine/3.png',
  ],
  imagesImc: [
    '/assets/images/imc/1.png',
    '/assets/images/imc/2.png',
  ],
  imagesMienfermera: [
    '/assets/images/mienfermera/1.png',
    '/assets/images/mienfermera/2.png',
    '/assets/images/mienfermera/3.png',
    '/assets/images/mienfermera/4.png',
    '/assets/images/mienfermera/5.png',
  ],
  imagesOxigeno: [
    '/assets/images/oxigeno/1.png',
    '/assets/images/oxigeno/2.png',
    '/assets/images/oxigeno/3.png',
  ],
  imagesPecano: [
    '/assets/images/pecano/1.png',
    '/assets/images/pecano/2.png',
    '/assets/images/pecano/3.png',
  ],
  imagesPecanoWeb: [
    '/assets/images/pecano_web/1.png',
    '/assets/images/pecano_web/2.png',
  ],
  imagesRestoner: [
    '/assets/images/restoner/1.png',
    '/assets/images/restoner/2.png',
    '/assets/images/restoner/3.png',
    '/assets/images/restoner/6.png',
    '/assets/images/restoner/7.png',
    '/assets/images/restoner/8.png',
    '/assets/images/restoner/9.png',
    '/assets/images/restoner/10.png',
    '/assets/images/restoner/11.png',
  ],
  imagesSeguridad: [
    '/assets/images/seguridad/1.png',
    '/assets/images/seguridad/2.png',
    '/assets/images/seguridad/3.png',
    '/assets/images/seguridad/4.png',
  ],
  imagesComsatel: [
    '/assets/images/comsatel/1.jpg',
    '/assets/images/comsatel/2.jpg',
    '/assets/images/comsatel/3.jpg',
    '/assets/images/comsatel/4.jpg',
    '/assets/images/comsatel/5.jpg',
  ],
  imagesEnotria: [
    '/assets/images/enotria/1.jpg',
    '/assets/images/enotria/2.jpg',
    '/assets/images/enotria/3.jpg',
    '/assets/images/enotria/4.jpg',
  ],
  imagesAndytrack: [
    '/assets/images/andytrack/1.jpg',
    '/assets/images/andytrack/2.jpg',
    '/assets/images/andytrack/3.jpg',
    '/assets/images/andytrack/4.jpg',
  ],
  imagesDevida: [
    '/assets/images/devida/1.png',
    '/assets/images/devida/2.png',
    '/assets/images/devida/3.png',
  ],
  imagesMerakicare: [
    '/assets/images/merakicare/1.jpeg',
    '/assets/images/merakicare/2.jpeg',
    '/assets/images/merakicare/3.jpeg',
    '/assets/images/merakicare/4.jpeg',
    '/assets/images/merakicare/5.jpeg',
    '/assets/images/merakicare/6.jpeg',
    '/assets/images/merakicare/7.jpeg',
    '/assets/images/merakicare/8.jpeg',
    '/assets/images/merakicare/9.jpeg',
    '/assets/images/merakicare/10.jpeg',
    '/assets/images/merakicare/11.jpeg',
  ],
  imagesAcata: [
    '/assets/images/acata/2.svg',
    '/assets/images/acata/1.png',
  ],
  imagesAcita: [
    '/assets/images/acita/2.svg',
    '/assets/images/acita/1.png',
  ],
  imagesKepchu: [
    '/assets/images/kepchu/2.svg',
    '/assets/images/kepchu/1.png',
  ],
  imagesProgramarWhatsapp: [
    '/assets/images/programar-whatsapp/2.svg',
    '/assets/images/programar-whatsapp/1.png',
  ],
};

type LocalizedText = {
  es: string;
  en: string;
};

export interface PortfolioProject {
  title: LocalizedText;
  description: LocalizedText;
  stack: string[];
  images: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    title: {
      es: 'Cine App',
      en: 'Cinema App',
    },
    description: {
      es: 'Aplicación móvil para explorar películas, consultar detalles y trabajar una experiencia visual enfocada en entretenimiento.',
      en: 'Mobile app for browsing movies, checking details, and delivering a visual entertainment-focused experience.',
    },
    stack: ['Flutter', 'Dart', 'REST API', 'UI/UX'],
    images: PortfolioData.imagesCine,
  },
  {
    title: {
      es: 'IMC App',
      en: 'BMI App',
    },
    description: {
      es: 'Herramienta móvil para calcular indicadores corporales con una interfaz clara y rápida para usuarios finales.',
      en: 'Mobile tool for calculating body indicators with a clear and fast interface for end users.',
    },
    stack: ['Flutter', 'Dart', 'Mobile UI'],
    images: PortfolioData.imagesImc,
  },
  {
    title: {
      es: 'Mi Enfermera',
      en: 'Mi Enfermera',
    },
    description: {
      es: 'Aplicación para búsqueda de enfermeras a domicilio con seguimiento por GPS, creada para atender pacientes durante la pandemia.',
      en: 'App for finding home-care nurses with GPS tracking, created to support patient care during the pandemic.',
    },
    stack: ['Flutter', 'GPS', 'Maps', 'Mobile'],
    images: PortfolioData.imagesMienfermera,
  },
  {
    title: {
      es: 'Gestión de Oxígeno',
      en: 'Oxygen Management',
    },
    description: {
      es: 'Aplicación desktop para control de almacén, inventario de botellas de O2 y CO2, y generación de reportes en PDF.',
      en: 'Desktop app for warehouse control, O2 and CO2 cylinder inventory, and PDF report generation.',
    },
    stack: ['Desktop', 'PDF Reports', 'Inventory', 'UI/UX'],
    images: PortfolioData.imagesOxigeno,
  },
  {
    title: {
      es: 'Pecano App',
      en: 'Pecano App',
    },
    description: {
      es: 'Aplicación para comercios que premian a usuarios por recargar gasolina, con acumulación de puntos y operaciones de fidelización.',
      en: 'App for businesses that reward users for refueling, with points accumulation and loyalty operations.',
    },
    stack: ['Flutter', 'Dart', 'Loyalty', 'Mobile'],
    images: PortfolioData.imagesPecano,
  },
  {
    title: {
      es: 'Pecano Web',
      en: 'Pecano Web',
    },
    description: {
      es: 'Versión web para comercios del ecosistema Pecano, enfocada en gestión operativa y soporte a puntos de venta.',
      en: 'Web version for businesses in the Pecano ecosystem, focused on operational management and point-of-sale support.',
    },
    stack: ['Flutter Web', 'Responsive UI', 'POS'],
    images: PortfolioData.imagesPecanoWeb,
  },
  {
    title: {
      es: 'Restoner',
      en: 'Restoner',
    },
    description: {
      es: 'Producto digital para operaciones comerciales con interfaz móvil y flujos orientados a pedidos y gestión diaria.',
      en: 'Digital product for commercial operations with a mobile interface and flows focused on orders and daily management.',
    },
    stack: ['Flutter', 'Mobile', 'Operations'],
    images: PortfolioData.imagesRestoner,
  },
  {
    title: {
      es: 'Seguridad Ciudadana',
      en: 'Public Safety',
    },
    description: {
      es: 'Aplicación móvil y web con rastreo en tiempo real sobre mapas para alertas y gestión de incidencias de seguridad.',
      en: 'Mobile and web app with real-time map tracking for public safety alerts and incident management.',
    },
    stack: ['Flutter', 'Maps', 'GPS', 'Realtime'],
    images: PortfolioData.imagesSeguridad,
  },
  {
    title: {
      es: 'Comsatel',
      en: 'Comsatel',
    },
    description: {
      es: 'Sistema de gestión de citas para instalación, mantenimiento y retiro de dispositivos de rastreo en operaciones de campo.',
      en: 'Scheduling management system for installation, maintenance, and removal of tracking devices in field operations.',
    },
    stack: ['Flutter', 'Scheduling', 'Field Operations'],
    images: PortfolioData.imagesComsatel,
  },
  {
    title: {
      es: 'Enotria',
      en: 'Enotria',
    },
    description: {
      es: 'Aplicación orientada a procesos operativos y gestión interna, con pantallas móviles para flujos de trabajo reales.',
      en: 'Application focused on operational processes and internal management, with mobile screens for real workflows.',
    },
    stack: ['Flutter', 'Mobile', 'Business Workflows'],
    images: PortfolioData.imagesEnotria,
  },
  {
    title: {
      es: 'DEVIDA',
      en: 'DEVIDA',
    },
    description: {
      es: 'Solución web para optimizar procesos de gestión, desarrollada con React, Node.js y SQL Server siguiendo buenas prácticas de arquitectura.',
      en: 'Web solution for optimizing management processes, built with React, Node.js, and SQL Server following sound architecture practices.',
    },
    stack: ['React', 'Node.js', 'SQL Server', 'Architecture'],
    images: PortfolioData.imagesDevida,
  },
  {
    title: {
      es: 'Andytrack',
      en: 'Andytrack',
    },
    description: {
      es: 'Aplicación logística central usada por más de 500 couriers a nivel nacional, con mejoras continuas de rendimiento, estabilidad y experiencia de usuario.',
      en: 'Core logistics app used by more than 500 couriers nationwide, with ongoing improvements in performance, stability, and user experience.',
    },
    stack: ['Flutter', 'Logistics', 'Performance', 'Mobile'],
    images: PortfolioData.imagesAndytrack,
  },
  {
    title: {
      es: 'MerakiCare',
      en: 'MerakiCare',
    },
    description: {
      es: 'SaaS para terapeutas con gestión de pacientes, expediente clínico digital, agenda inteligente, notificaciones, finanzas, IA aplicada y publicación Android.',
      en: 'SaaS for therapists with patient management, digital clinical records, smart scheduling, notifications, finance tracking, applied AI, and Android release.',
    },
    stack: ['Flutter', 'SaaS', 'Applied AI', 'Prompt Engineering', 'Clinical Records', 'Payments'],
    images: PortfolioData.imagesMerakicare,
  },
  {
    title: {
      es: 'Acata - Catálogos digitales',
      en: 'Acata - Digital Catalogs',
    },
    description: {
      es: 'SaaS de Beniel Studio para crear catálogos digitales, administrar productos y categorías, recibir pedidos por WhatsApp, generar QR para comercios y vender planes de suscripción con Mercado Pago. Evoluciona con automatización e IA aplicada.',
      en: 'Beniel Studio SaaS for creating digital catalogs, managing products and categories, receiving orders through WhatsApp, generating store QR codes, and selling subscription plans with Mercado Pago. Evolving with automation and applied AI.',
    },
    stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Applied AI', 'Mercado Pago', 'Docker', 'Hetzner', 'Vercel'],
    images: PortfolioData.imagesAcata,
  },
  {
    title: {
      es: 'Acita',
      en: 'Acita',
    },
    description: {
      es: 'MVP de agenda online para barberías, salones de uñas y estética. Incluye reservas sin cuenta, link y QR comercial, panel de citas, estados de solicitudes y confirmaciones por WhatsApp.',
      en: 'Online booking MVP for barber shops, nail salons, and beauty businesses. It includes guest bookings, commercial link and QR, appointment dashboard, request statuses, and WhatsApp confirmations.',
    },
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'WhatsApp', 'Docker'],
    images: PortfolioData.imagesAcita,
  },
  {
    title: {
      es: 'Kepchu',
      en: 'Kepchu',
    },
    description: {
      es: 'Plataforma SaaS para WhatsApp Business Cloud API con login, conexión Meta, modo sandbox, plantillas, contactos con opt-in, envío de mensajes, campañas, analítica e historial.',
      en: 'SaaS platform for the WhatsApp Business Cloud API with login, Meta connection, sandbox mode, templates, opt-in contacts, message sending, campaigns, analytics, and history.',
    },
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'Prisma', 'WhatsApp Cloud API', 'Meta'],
    images: PortfolioData.imagesKepchu,
  },
  {
    title: {
      es: 'Programar WhatsApp',
      en: 'WhatsApp Scheduler',
    },
    description: {
      es: 'Aplicación Android y backend para programar mensajes de WhatsApp, vincular cuenta por QR, seleccionar contactos, revisar historial de envíos y despachar mensajes desde un servidor 24/7.',
      en: 'Android app and backend for scheduling WhatsApp messages, linking an account by QR, selecting contacts, reviewing delivery history, and dispatching messages from a 24/7 server.',
    },
    stack: ['Flutter', 'Dart', 'Node.js', 'Express', 'PostgreSQL', 'Baileys', 'Mercado Pago', 'Android'],
    images: PortfolioData.imagesProgramarWhatsapp,
  },
];

export const imagesPortfolio = portfolioProjects.map((project) => project.images[0]);

export const listImagesPortfolio = portfolioProjects.map((project) => project.images);
