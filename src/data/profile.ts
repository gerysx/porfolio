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
    "Diseño arquitecturas backend robustas, escalables y listas para producción en entornos enterprise.",
  summary:
    "Arquitecto de Software especializado en microservicios con Java y Spring Boot, arquitecturas orientadas a eventos y diseño de APIs API First. Vengo del desarrollo backend en banca internacional y hoy defino cómo se construyen los sistemas: contratos, patrones, rendimiento, calidad y despliegue.",
}

export const HIGHLIGHTS = [
  {
    kicker: "Arquitectura",
    title: "Microservicios y eventos",
    text: "Sistemas desacoplados con Spring Boot, Kafka y RabbitMQ, diseñados para escalar y evolucionar.",
  },
  {
    kicker: "Contratos",
    title: "API First",
    text: "APIs definidas antes de escribir código con OpenAPI 3.0, para que los equipos trabajen en paralelo.",
  },
  {
    kicker: "Enterprise",
    title: "Banca internacional",
    text: "Experiencia en entornos de alta exigencia: seguridad, trazabilidad y continuidad del servicio.",
  },
  {
    kicker: "Plataforma",
    title: "Cloud native",
    text: "Kubernetes y OpenShift con pipelines CI/CD y puertas de calidad en cada entrega.",
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
}

export const EXPERIENCE: Job[] = [
  {
    role: "Arquitecto de Software",
    company: "NTT DATA",
    start: "May 2026",
    end: "Actualidad",
    current: true,
    summary:
      "Diseño y evolución de arquitecturas backend para clientes enterprise, definiendo estándares técnicos y acompañando a los equipos desde el diseño hasta producción.",
    points: [
      "Diseño de arquitecturas de microservicios y orientadas a eventos con Java y Spring Boot.",
      "Definición de contratos de API (API First, OpenAPI) y de los patrones de integración entre sistemas.",
      "Análisis de rendimiento y escalabilidad: caché distribuida, pruebas de carga y observabilidad.",
      "Planificación de migraciones de librerías e infraestructura con análisis de impacto, estrategia de pruebas y rollback.",
      "Revisión técnica, buenas prácticas y documentación de decisiones de arquitectura.",
      "Calidad y seguridad integradas en CI/CD y despliegue sobre Kubernetes y OpenShift.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Microservicios",
      "Kafka",
      "Redis",
      "OpenAPI",
      "Kubernetes",
      "OpenShift",
      "Dynatrace",
      "CI/CD",
    ],
  },
  {
    role: "Desarrollador de Software Backend",
    company: "Delogica",
    context: "Proyecto Santander Bank USA",
    start: "Oct 2025",
    end: "Abr 2026",
    summary:
      "Ciclo completo de desarrollo en un entorno bancario internacional de alta exigencia, desde el análisis funcional hasta el despliegue en producción.",
    points: [
      "Análisis de sistemas legacy en MuleSoft Anypoint Studio con diagramas UML y documentación técnica en Confluence.",
      "Migración de APIs y componentes legacy a microservicios Spring Boot (Darwin/Gluon).",
      "Diseño de APIs API First con OpenAPI 3.0 y patrón Delegate.",
      "Backend en Java 8 con Clean Code y programación funcional; transformación de datos JSON, XML y CSV con Mapstruct.",
      "Mensajería asíncrona con Kafka y RabbitMQ en arquitecturas orientadas a eventos.",
      "Exposición segura en IBM API Connect y despliegue con GitHub Actions sobre OpenShift.",
      "Calidad y seguridad con SonarQube, JUnit, Fortify y Trivy bajo Scrum y CI/CD.",
    ],
    stack: [
      "Java 8",
      "Spring Boot",
      "MuleSoft",
      "OpenAPI 3.0",
      "Kafka",
      "RabbitMQ",
      "IBM API Connect",
      "OpenShift",
      "GitHub Actions",
      "SonarQube",
    ],
  },
  {
    role: "Desarrollador de Software Backend",
    company: "Adviser Cloud",
    context: "Prácticas",
    start: "Feb 2025",
    end: "Jul 2025",
    summary:
      "Microservicios para aplicaciones internas empresariales y primeros agentes de IA para automatizar procesos.",
    points: [
      "Microservicios con Java y Spring Boot aplicando arquitectura por capas y principios SOLID.",
      "Diseño e integración de APIs REST como capa de comunicación entre servicios.",
      "Integración del backend con frontend en Angular.",
      "Agentes de inteligencia artificial para automatizar tareas y flujos de trabajo internos.",
    ],
    stack: ["Java", "Spring Boot", "REST", "Angular", "Agentes IA"],
  },
]

export const STACK = [
  { group: "Lenguajes", items: ["Java", "TypeScript", "JavaScript", "SQL"] },
  { group: "Frameworks", items: ["Spring Boot", "Angular", "Astro", "Ionic"] },
  {
    group: "Arquitectura",
    items: ["Microservicios", "Event-Driven", "API First", "OpenAPI 3.0", "DDD", "Hexagonal", "REST"],
  },
  { group: "Mensajería y caché", items: ["Kafka", "RabbitMQ", "Redis"] },
  {
    group: "Cloud y DevOps",
    items: ["Kubernetes", "OpenShift", "Docker", "GitHub Actions", "CI/CD", "AWS"],
  },
  { group: "Integración", items: ["IBM API Connect", "MuleSoft"] },
  {
    group: "Calidad y observabilidad",
    items: ["SonarQube", "JUnit", "Fortify", "Trivy", "Dynatrace", "Postman"],
  },
  {
    group: "Datos",
    items: ["PostgreSQL", "MySQL", "NoSQL", "Mapstruct", "JSON · XML · CSV"],
  },
  { group: "IA", items: ["Agentes de IA", "Automatización de flujos"] },
  {
    group: "Forma de trabajo",
    items: ["Scrum", "Kanban", "Clean Code", "Programación funcional", "UML", "Jira", "Confluence"],
  },
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
  repoId: "",
  category: "Noticias",
  categoryId: "",
}
