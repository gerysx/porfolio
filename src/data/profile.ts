// Todo el contenido del porfolio vive aquí: para actualizar experiencia,
// proyectos o stack basta con editar este fichero.

export const PROFILE = {
  name: "Germán Álvarez",
  fullName: "Germán Álvarez González",
  role: "Arquitecto de Software",
  company: "NTT DATA",
  location: "Madrid, España",
  email: "geralvarez95@gmail.com",
  linkedin: "https://linkedin.com/in/germanalvarezgonzalez",
  github: "https://github.com/gerysx",
  cv: "/CV_GERMAN_ALVAREZ_FS.pdf",
  site: "https://gerysdev.es",
  tagline:
    "Diseño y construyo plataformas de software enterprise: arquitectura, integración, cloud y entrega continua.",
  summary:
    "Arquitecto de Software con perfil completo: diseño sistemas distribuidos, defino contratos e integraciones, planifico despliegues cloud native y cuido el rendimiento y la calidad en producción. Vengo del desarrollo en banca internacional, así que conozco el sistema desde el código hasta la operación.",
}

export const HIGHLIGHTS = [
  {
    kicker: "Diseño",
    title: "Sistemas distribuidos",
    text: "Arquitecturas desacopladas, con límites de dominio claros y decisiones documentadas, pensadas para crecer sin reescribirse.",
  },
  {
    kicker: "Integración",
    title: "Contratos primero",
    text: "APIs definidas antes del código y patrones de integración que permiten a varios equipos avanzar en paralelo.",
  },
  {
    kicker: "Eventos",
    title: "Mensajería asíncrona",
    text: "Comunicación por eventos y colas de mensajes para absorber picos, aislar fallos y mantener la consistencia.",
  },
  {
    kicker: "Plataforma",
    title: "Cloud y entrega continua",
    text: "Contenedores, Kubernetes y pipelines con puertas de calidad y seguridad en cada despliegue.",
  },
]

export interface Job {
  role: string
  company: string
  context?: string
  start: string
  end: string
  current?: boolean
  summary: string
  points: string[]
  stack: string[]
  /** Logo oficial en /public/logos/... Si falta, no se muestra nada. */
  logo?: string
}

export const EXPERIENCE: Job[] = [
  {
    role: "Arquitecto de Software",
    company: "NTT DATA",
    start: "May 2026",
    end: "Actualidad",
    current: true,
    summary:
      "Responsable del diseño técnico de soluciones enterprise: defino cómo se construyen, integran, despliegan y operan los sistemas, y acompaño a los equipos desde la primera decisión hasta producción.",
    points: [
      "Diseño de arquitecturas distribuidas y orientadas a eventos, eligiendo patrones según el dominio, el volumen y los requisitos no funcionales.",
      "Definición de contratos de API y de la estrategia de integración entre sistemas, plataformas y terceros.",
      "Estrategia de despliegue cloud native sobre contenedores y Kubernetes, con pipelines CI/CD y puertas de calidad y seguridad.",
      "Análisis de rendimiento y escalabilidad: caché distribuida, pruebas de carga, observabilidad y capacidad.",
      "Planificación de migraciones de librerías e infraestructura con análisis de impacto, plan de pruebas y rollback.",
      "Gobierno técnico: estándares, revisiones de diseño y registro de decisiones de arquitectura.",
    ],
    stack: [
      "Arquitectura distribuida",
      "Mensajería de eventos",
      "API First",
      "Kubernetes",
      "OpenShift",
      "CI/CD",
      "Caché distribuida",
      "Observabilidad",
      "Migraciones",
    ],
  },
  {
    role: "Desarrollador de Software",
    company: "Delogica",
    context: "Proyecto Santander Bank USA",
    start: "Oct 2025",
    end: "Abr 2026",
    summary:
      "Modernización de plataformas en un entorno bancario internacional de alta exigencia, cubriendo el ciclo completo: análisis, diseño, integración, despliegue y calidad.",
    points: [
      "Análisis de sistemas legacy y su documentación técnica (UML, flujos de integración) como base para la migración.",
      "Migración de APIs y componentes de integración legacy a microservicios.",
      "Diseño de contratos API First con OpenAPI 3.0 y patrones de delegación para separar contrato e implementación.",
      "Comunicación asíncrona mediante mensajería de eventos y colas en arquitecturas orientadas a eventos.",
      "Exposición segura de servicios a través de API gateway y despliegue automatizado sobre OpenShift.",
      "Calidad y seguridad en el pipeline: análisis estático, escaneo de vulnerabilidades y pruebas automatizadas.",
      "Implementación en Java y Spring Boot con Clean Code y transformación de datos JSON, XML y CSV.",
    ],
    stack: [
      "Microservicios",
      "OpenAPI 3.0",
      "Mensajería de eventos",
      "MuleSoft",
      "IBM API Connect",
      "OpenShift",
      "GitHub Actions",
      "SonarQube",
      "Java",
    ],
  },
  {
    role: "Desarrollador de Software",
    company: "Adviser Cloud",
    context: "Prácticas",
    start: "Feb 2025",
    end: "Jul 2025",
    summary:
      "Servicios para aplicaciones internas empresariales y primeros agentes de IA para automatizar procesos.",
    points: [
      "Desarrollo de servicios con arquitectura por capas y principios SOLID.",
      "Diseño de APIs REST como capa de comunicación entre servicios y aplicaciones.",
      "Integración extremo a extremo con el frontend de las aplicaciones internas.",
      "Agentes de inteligencia artificial para automatizar tareas y flujos de trabajo.",
    ],
    stack: ["Microservicios", "REST", "SOLID", "Agentes IA", "Java"],
  },
]

export const STACK = [
  {
    group: "Arquitectura empresarial",
    items: ["Microservicios", "Event-Driven", "API First · OpenAPI 3.0", "DDD", "Arquitectura hexagonal", "Patrón Delegate"],
  },
  {
    group: "Integración y mensajería",
    items: ["Mensajería de eventos", "Colas de mensajes", "Pub/Sub", "API gateways", "IBM API Connect", "MuleSoft"],
  },
  { group: "Cloud y despliegue", items: ["Kubernetes", "OpenShift", "Docker", "AWS"] },
  { group: "CI/CD y calidad", items: ["GitHub Actions", "SonarQube", "Fortify", "Trivy", "Pruebas automatizadas"] },
  { group: "Datos y rendimiento", items: ["PostgreSQL", "Redis", "NoSQL", "Caché distribuida", "Dynatrace"] },
  { group: "Desarrollo", items: ["Java", "Spring Boot", "Spring Cloud", "SQL"] },
]

export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
  github?: string
  featured?: boolean
}

export const PROJECTS: Project[] = [
  {
    title: "ERP de ventas",
    description:
      "ERP full stack para gestionar productos, clientes y facturas. Autenticación JWT, control de roles, generación de PDF y despliegue en Render.",
    image: "/projects/foto_erp.webp",
    tags: ["Angular", "Node.js", "Express", "PostgreSQL", "JWT"],
    link: "https://erp-ventas-frontend.onrender.com/",
    github: "https://github.com/gerysx/erp-ventas-frontend",
    featured: true,
  },
  {
    title: "MyEcommerce",
    description:
      "Tienda online con Spring Boot, Thymeleaf y MySQL: usuarios, carrito, pedidos e inventario.",
    image: "/projects/ecommerce.webp",
    tags: ["Spring Boot", "Thymeleaf", "MySQL"],
    github: "https://github.com/gerysx/spring-ecommerce",
  },
  {
    title: "App para microemprendimientos",
    description:
      "App móvil multiplataforma para gestionar productos con autenticación, Firestore en tiempo real y despliegue con Capacitor.",
    image: "/projects/vista_pc.webp",
    tags: ["Angular", "Ionic", "Firebase"],
    link: "https://product-admin-app-3cd73.web.app/auth/",
    github: "https://github.com/gerysx/product-admin/",
  },
  {
    title: "Mapas interactivos",
    description:
      "App con Angular 20, señales y componentes reutilizables sobre Mapbox, adaptada a cualquier dispositivo.",
    image: "/projects/mapbox.webp",
    tags: ["Angular", "Mapbox", "Tailwind"],
    link: "https://mapasinteractivos.netlify.app/",
    github: "https://github.com/gerysx/maps-app",
  },
  {
    title: "Country App",
    description:
      "SPA que consume una API REST pública de países con carga asíncrona y diseño responsive.",
    image: "/projects/screenshot_home.webp",
    tags: ["Angular", "Tailwind", "REST"],
    link: "https://countries-78scb.ondigitalocean.app/",
    github: "https://github.com/gerysx/country-app",
  },
]

export const EDUCATION = [
  { title: "Desarrollo de Aplicaciones Multiplataforma (DAM)", school: "Digitech" },
  { title: "Sistemas Microinformáticos y Redes (SMR)", school: "Afuera I" },
]

export const LANGUAGES = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "B1-B2" },
]

// Comentarios con Giscus (GitHub Discussions). Rellenar repoId y categoryId
// desde https://giscus.app una vez activadas las Discussions en el repo.
export const GISCUS = {
  repo: "gerysx/porfolio",
  repoId: "R_kgDOO4QAWA",
  category: "Announcements",
  categoryId: "DIC_kwDOO4QAWM4DKp_j",
}
