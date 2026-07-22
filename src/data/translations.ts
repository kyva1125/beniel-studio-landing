export interface TranslationDict {
  navbar: {
    hero: string;
    about: string;
    skills: string;
    experience: string;
    portfolio: string;
  };
  hero: {
    greeting: string;
    name: string;
    rolePrefix: string;
    roles: string[];
    description: string;
    cell: string;
    email: string;
    location: string;
    locationValue: string;
  };
  about: {
    titleStart: string;
    titleEnd: string;
    subtitle: string;
    bioParagraph1: string;
    bioParagraph2: string;
    educationTitle: string;
    educationDegree1: string;
    educationDegree2: string;
    languagesTitle: string;
    languagesNative: string;
    languagesEnglish: string;
    languagesEnglishDetails: string;
    softSkillsTitle: string;
    softSkillsList: string[];
  };
  skills: {
    titleStart: string;
    titleEnd: string;
  };
  experience: {
    titleStart: string;
    titleEnd: string;
    list: {
      period: string;
      company: string;
      role: string;
      description: string;
    }[];
  };
  services: {
    titleStart: string;
    titleEnd: string;
    list: {
      title: string;
      content: string;
    }[];
  };
  portfolio: {
    titleStart: string;
    titleEnd: string;
    viewGallery: string;
  };
  footer: {
    rights: string;
  };
}

export const translations: Record<'es' | 'en', TranslationDict> = {
  es: {
    navbar: {
      hero: 'Inicio',
      about: 'Sobre mí',
      skills: 'Habilidades',
      experience: 'Experiencia',
      portfolio: 'Portafolio',
    },
    hero: {
      greeting: 'Hola, Yo Soy',
      name: 'Nick Ledesma',
      rolePrefix: 'Y Soy ',
      roles: ['Consultor de Software e Ingeniero de Producto', 'SaaS & IA aplicada', 'Consultoría independiente'],
      description: 'Consultor de Software e Ingeniero de Producto independiente en Beniel Studio. Transformo necesidades reales en productos SaaS y soluciones digitales, combinando consultoría, UX/UI, desarrollo full stack, IA aplicada, testing y despliegue.',
      cell: 'Celular',
      email: 'Correo',
      location: 'Ubicación',
      locationValue: 'Ayacucho, Perú',
    },
    about: {
      titleStart: 'Acerca de',
      titleEnd: 'Mi!',
      subtitle: 'Nick Bryan Ledesma Corilloclla',
      bioParagraph1: 'Soy Consultor de Software e Ingeniero de Producto. Transformo necesidades operativas en productos digitales que se pueden usar, medir y escalar, liderando descubrimiento, alcance, arquitectura, UX/UI, desarrollo, despliegue y mejora continua.',
      bioParagraph2: 'Mi diferencial es combinar ejecución técnica con criterio de producto: puedo convertir requerimientos ambiguos en sistemas funcionales, mejorar estabilidad y rendimiento, trabajar con React, TypeScript, Tailwind CSS, Node.js, PostgreSQL, MongoDB, Firebase/Supabase, Docker y servidores Ubuntu, y usar IA como apoyo para acelerar desarrollo sin perder control técnico.',
      educationTitle: 'Educación',
      educationDegree1: 'Ingeniería de Sistemas',
      educationDegree2: 'Técnico en Hardware Informático',
      languagesTitle: 'Idiomas',
      languagesNative: 'Español: Nativo',
      languagesEnglish: 'Inglés:',
      languagesEnglishDetails: 'Lectura y escritura: Intermedio / Hablado: Básico',
      softSkillsTitle: 'Habilidades Blandas',
      softSkillsList: [
        'Trabajo en equipo',
        'Autogestión',
        'Comunicación efectiva',
        'Resolución de problemas',
        'Adaptabilidad',
        'Responsabilidad',
        'Aprendizaje continuo'
      ],
    },
    skills: {
      titleStart: 'Mis',
      titleEnd: 'Habilidades',
    },
      experience: {
      titleStart: 'Mi',
      titleEnd: 'Experiencia',
      list: [
        {
          period: 'Abril 2026 - Actualidad',
          company: 'BENIEL STUDIO - CONSULTORÍA INDEPENDIENTE',
          role: 'Fundador y Consultor de Software e Ingeniero de Producto',
          description: 'Emprendimiento personal desde el que convierto necesidades de negocio en productos digitales, SaaS y automatizaciones. Lidero descubrimiento, alcance, arquitectura, UX/UI, desarrollo, IA aplicada, Prompt Engineering, pruebas unitarias, de integración y E2E, despliegue y mejora continua, reduciendo trabajo manual y acelerando la entrega de soluciones.',
        },
        {
          period: 'Febrero 2026 - Marzo 2026',
          company: 'JARV.ES',
          role: 'Consultor de Software',
          description: 'Consultoría para analizar necesidades, definir soluciones digitales y traducir objetivos de negocio en alcance técnico, prioridades de producto y entregables claros, reduciendo fricción entre negocio y desarrollo.',
        },
        {
          period: 'Diciembre 2025 - Marzo 2026',
          company: 'MERAKICARE (Freelance)',
          role: 'Fundador y Product Engineer - SaaS para terapeutas',
          description: 'Desarrollo integral de MerakiCare, plataforma SaaS para terapeutas: gestión de pacientes, expediente clínico digital, agenda inteligente con notificaciones y control financiero. Catálogo de patologías basado en CIE-10, integración de pagos locales (Yape, Plin) con modelo freemium, diseño UX/UI, branding, web de ventas y publicación de la app Android, centralizando procesos operativos en un solo producto.'
        },
        {
          period: 'Julio 2024 - Enero 2026',
          company: 'ANDES EXPRESS S.A.C',
          role: 'Responsable de evolución técnica - Andytrack',
          description: 'Encargado del desarrollo, funcionamiento y mantenimiento de la aplicación central Andytrack. Implementación de mejoras continuas en rendimiento, estabilidad y experiencia de usuario, reduciendo incidencias y trabajo operativo repetitivo. Desarrollo de soluciones para la gestión logística utilizada por más de 500 couriers a nivel nacional.'
        },
        {
          period: 'Junio 2025 - Diciembre 2025',
          company: 'DEVIDA',
          role: 'Desarrollador React',
          description: 'Participación en el desarrollo y mantenimiento de soluciones tecnológicas orientadas a optimizar procesos de gestión. Implementación de módulos y mejoras funcionales en aplicaciones web con React, Node.js y SQL Server, siguiendo buenas prácticas de arquitectura y organización de código.'
        },
        {
          period: 'Octubre 2023 - Junio 2024',
          company: 'XTend SAC',
          role: 'Jefe de proyecto app de citas Flutter — Arequipa',
          description: 'Responsable del desarrollo y mantenimiento de una aplicación de gestión de citas para instalación, mantenimiento y retiro de dispositivos de rastreo. Coordinación de requerimientos y optimización técnica de campo.'
        },
        {
          period: 'Octubre 2022 - Octubre 2023',
          company: 'PECANO SOFTWARE SAC',
          role: 'Desarrollador de aplicaciones Flutter — Lima',
          description: 'Encargado de desarrollar el aplicativo STARTUP para comercios que premian a usuarios por recargar gasolina acumulando puntos. Creación de la versión web de comercio en Flutter y desarrollo del POS de Tankea.'
        },
        {
          period: 'Marzo 2022 - Septiembre 2022',
          company: 'FREELANCER',
          role: 'Desarrollador de Producto Mobile, Web y Desktop — Proyectos seleccionados',
          description: 'Proyectos mobile, web y desktop para seguridad ciudadana con GPS, inventario con reportes PDF, delivery con seguimiento y geolocalización para atención domiciliaria.'
        }
      ]
    },
      services: {
      titleStart: 'Mis',
      titleEnd: 'Servicios',
      list: [
        {
          title: 'Consultoría de Software',
          content: 'Analizo procesos, defino alcance y convierto necesidades ambiguas en soluciones digitales claras, medibles y listas para crecer.',
        },
        {
          title: 'Desarrollo Móvil',
          content: 'Creación de aplicaciones nativas y multiplataforma con Flutter y React Native, de alto rendimiento y excelente UX/UI.',
        },
        {
          title: 'Desarrollo Web',
          content: 'Interfaces web dinámicas y modernas utilizando React, optimizadas para SEO y velocidad.',
        },
        {
          title: 'Backend Node.js',
          content: 'APIs RESTful seguras y escalables con Node.js y Express, con integración de bases de datos PostgreSQL.',
        }
      ]
    },
    portfolio: {
      titleStart: 'Últimos',
      titleEnd: 'Proyectos',
      viewGallery: 'Ver Galería',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    }
  },
  en: {
    navbar: {
      hero: 'Home',
      about: 'About Me',
      skills: 'Skills',
      experience: 'Experience',
      portfolio: 'Portfolio',
    },
    hero: {
      greeting: 'Hello, I Am',
      name: 'Nick Ledesma',
      rolePrefix: 'And I Am ',
      roles: ['Software Consultant & Product Engineer', 'SaaS & Applied AI', 'Independent Consulting'],
      description: 'Independent Software Consultant & Product Engineer at Beniel Studio. I turn real business needs into SaaS products and digital solutions by combining consulting, UX/UI, full-stack development, applied AI, testing, and deployment.',
      cell: 'Phone',
      email: 'Email',
      location: 'Location',
      locationValue: 'Ayacucho, Peru',
    },
    about: {
      titleStart: 'About',
      titleEnd: 'Me!',
      subtitle: 'Nick Bryan Ledesma Corilloclla',
      bioParagraph1: 'I am a Software Consultant & Product Engineer. I turn operational needs into digital products that can be used, measured, and scaled, leading discovery, scope, architecture, UX/UI, development, deployment, and continuous improvement.',
      bioParagraph2: 'My edge is combining technical execution with product judgment: I can turn ambiguous requirements into working systems, improve stability and performance, work with React, TypeScript, Tailwind CSS, Node.js, PostgreSQL, MongoDB, Firebase/Supabase, Docker, and Ubuntu servers, and use AI as a development accelerator without losing technical control.',
      educationTitle: 'Education',
      educationDegree1: 'Systems Engineering',
      educationDegree2: 'Computer Hardware Technician',
      languagesTitle: 'Languages',
      languagesNative: 'Spanish: Native',
      languagesEnglish: 'English:',
      languagesEnglishDetails: 'Reading & Writing: Intermediate / Speaking: Basic',
      softSkillsTitle: 'Soft Skills',
      softSkillsList: [
        'Teamwork',
        'Self-management',
        'Effective Communication',
        'Problem Solving',
        'Adaptability',
        'Responsibility',
        'Continuous Learning'
      ],
    },
    skills: {
      titleStart: 'My',
      titleEnd: 'Skills',
    },
      experience: {
      titleStart: 'My',
      titleEnd: 'Experience',
      list: [
        {
          period: 'April 2026 - Present',
          company: 'BENIEL STUDIO - INDEPENDENT CONSULTING',
          role: 'Founder & Software Consultant / Product Engineer',
          description: 'Personal venture turning business needs into digital products, SaaS platforms, and automation. I lead discovery, scope, architecture, UX/UI, development, applied AI, Prompt Engineering, unit, integration and E2E testing, deployment, and continuous improvement, reducing manual work and accelerating solution delivery.',
        },
        {
          period: 'February 2026 - March 2026',
          company: 'JARV.ES',
          role: 'Software Consultant',
          description: 'Consulting engagement to analyze needs, define digital solutions, and translate business objectives into technical scope, product priorities, and clear deliverables, reducing friction between business and development.',
        },
        {
          period: 'December 2025 - March 2026',
          company: 'MERAKICARE (Freelance)',
          role: 'Founder & Product Engineer - SaaS for therapists',
          description: 'End-to-end development of MerakiCare, a SaaS platform for therapists: patient management, digital clinical records, smart scheduling with notifications, and financial tracking. ICD-10 based pathology catalog, local payment integration (Yape, Plin) with a freemium model, UX/UI design, branding, sales website, and Android app release, centralizing operational workflows in one product.'
        },
        {
          period: 'July 2024 - January 2026',
          company: 'ANDES EXPRESS S.A.C',
          role: 'Technical Evolution Lead - Andytrack',
          description: 'Responsible for the development, operation, and maintenance of the central Andytrack application. Implementation of continuous improvements in performance, stability, and user experience, reducing incidents and repetitive operational work. Developed logistics management solutions used by over 500 couriers nationwide.'
        },
        {
          period: 'June 2025 - December 2025',
          company: 'DEVIDA',
          role: 'React Developer',
          description: 'Participated in the development and maintenance of technological solutions aimed at optimizing management processes. Implemented modules and functional improvements in web applications using React, Node.js, and SQL Server, following best practices in architecture and code organization.'
        },
        {
          period: 'October 2023 - June 2024',
          company: 'XTend SAC',
          role: 'Flutter Appointment App Project Lead — Arequipa',
          description: 'Responsible for the development and maintenance of a scheduling management application for tracking device installation, maintenance, and removal. Requirement coordination and field technical operation optimization.'
        },
        {
          period: 'October 2022 - October 2023',
          company: 'PECANO SOFTWARE SAC',
          role: 'Flutter Application Developer — Lima',
          description: 'In charge of developing a STARTUP app for businesses that reward users with points for refueling. Created the business web version in Flutter and developed the Tankea POS.'
        },
        {
          period: '2020 - 2022',
          company: 'FREELANCER',
          role: 'Mobile, Web & Desktop Product Developer — Selected projects',
          description: 'Selected mobile, web and desktop projects: public-safety GPS tracking, O2 cylinder inventory, food delivery logistics and a nurse-finder app. Led discovery, UX collaboration, implementation and delivery.'
        }
      ]
    },
      services: {
      titleStart: 'My',
      titleEnd: 'Services',
      list: [
        {
          title: 'Software Consulting',
          content: 'I analyze processes, define scope, and turn ambiguous needs into clear, measurable digital solutions ready to grow.',
        },
        {
          title: 'Mobile Development',
          content: 'Creation of high-performance native and cross-platform mobile apps using Flutter and React Native with excellent UX/UI.',
        },
        {
          title: 'Web Development',
          content: 'Dynamic and modern web interfaces using React, optimized for speed and SEO.',
        },
        {
          title: 'Backend Development',
          content: 'Secure and scalable RESTful APIs with Node.js and Express, integrated with PostgreSQL databases.',
        }
      ]
    },
    portfolio: {
      titleStart: 'Latest',
      titleEnd: 'Projects',
      viewGallery: 'View Gallery',
    },
    footer: {
      rights: 'All rights reserved.',
    }
  }
};
