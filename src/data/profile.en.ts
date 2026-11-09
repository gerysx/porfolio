// English version of the portfolio content. Same shape as profile.ts:
// when you change something there, update it here too.
import type { Job, Project } from "./profile"
import { PROFILE as PROFILE_ES } from "./profile"

export const PROFILE = {
  ...PROFILE_ES,
  role: "Software Architect",
  specialty: "International banking specialist",
  location: "Madrid, Spain",
  cv: "/cv/German-Alvarez-CV-EN.pdf",
  tagline: "I design and build enterprise software platforms: architecture, integration, cloud and continuous delivery.",
  summary:
    "Software Architect specialised in international banking, with projects for Santander and TSB Bank. Full-spectrum profile: I design distributed systems, define contracts and integrations, plan cloud native deployments and look after performance and quality in production, from the code all the way to operations.",
}

export const HIGHLIGHTS = [
  {
    kicker: "Design",
    title: "Distributed systems",
    text: "Decoupled architectures with clear domain boundaries and documented decisions, built to grow without being rewritten.",
  },
  {
    kicker: "Integration",
    title: "Contract first",
    text: "APIs defined before the code and integration patterns that let several teams move forward in parallel.",
  },
  {
    kicker: "Events",
    title: "Asynchronous messaging",
    text: "Event-driven communication and message queues to absorb peaks, isolate failures and keep data consistent.",
  },
  {
    kicker: "Platform",
    title: "Cloud and continuous delivery",
    text: "Containers, Kubernetes and pipelines with quality and security gates on every deployment.",
  },
]

export const EXPERIENCE: Job[] = [
  {
    role: "Software Architect",
    company: "NTT DATA",
    context: "Santander and TSB Bank projects",
    start: "May 2026",
    end: "Present",
    current: true,
    summary:
      "Responsible for the technical design of enterprise solutions: I define how systems are built, integrated, deployed and operated, and I support teams from the first decision all the way to production.",
    points: [
      "Design of distributed and event-driven architectures, choosing patterns based on domain, volume and non-functional requirements.",
      "Definition of API contracts and the integration strategy between systems, platforms and third parties.",
      "Cloud native deployment strategy on containers and Kubernetes, with CI/CD pipelines and quality and security gates.",
      "Performance and scalability analysis: distributed caching, load testing, observability and capacity.",
      "Planning of library and infrastructure migrations with impact analysis, test plan and rollback.",
      "Technical governance: standards, design reviews and architecture decision records.",
    ],
    stack: [
      "Distributed architecture",
      "Event messaging",
      "API First",
      "Kubernetes",
      "OpenShift",
      "CI/CD",
      "Distributed caching",
      "Observability",
      "Migrations",
    ],
  },
  {
    role: "Software Developer",
    company: "Delogica",
    context: "Santander Bank USA project",
    start: "Oct 2025",
    end: "Apr 2026",
    summary:
      "Platform modernisation in a demanding international banking environment, covering the full lifecycle: analysis, design, integration, deployment and quality.",
    points: [
      "Analysis of legacy systems and their technical documentation (UML, integration flows) as the basis for the migration.",
      "Migration of legacy APIs and integration components to microservices.",
      "API First contract design with OpenAPI 3.0 and delegation patterns to separate contract and implementation.",
      "Asynchronous communication through event messaging and queues in event-driven architectures.",
      "Secure service exposure through an API gateway and automated deployment on OpenShift.",
      "Quality and security in the pipeline: static analysis, vulnerability scanning and automated testing.",
      "Implementation in Java and Spring Boot with Clean Code and JSON, XML and CSV data transformation.",
    ],
    stack: [
      "Microservices",
      "OpenAPI 3.0",
      "Event messaging",
      "MuleSoft",
      "IBM API Connect",
      "OpenShift",
      "GitHub Actions",
      "SonarQube",
      "Java",
    ],
  },
  {
    role: "Software Developer",
    company: "Adviser Cloud",
    context: "Internship",
    start: "Feb 2025",
    end: "Jul 2025",
    summary: "Services for internal business applications and first AI agents to automate processes.",
    points: [
      "Service development with layered architecture and SOLID principles.",
      "REST API design as the communication layer between services and applications.",
      "End-to-end integration with the frontend of the internal applications.",
      "Artificial intelligence agents to automate tasks and workflows.",
    ],
    stack: ["Microservices", "REST", "SOLID", "AI agents", "Java"],
  },
]

export const STACK = [
  {
    group: "Enterprise architecture",
    items: ["Microservices", "Event-Driven", "API First · OpenAPI 3.0", "DDD", "Hexagonal architecture", "Delegate pattern"],
  },
  {
    group: "Integration and messaging",
    items: ["Event messaging", "Message queues", "Pub/Sub", "API gateways", "IBM API Connect", "MuleSoft"],
  },
  { group: "Cloud and deployment", items: ["Kubernetes", "OpenShift", "Docker", "AWS"] },
  { group: "CI/CD and quality", items: ["GitHub Actions", "SonarQube", "Fortify", "Trivy", "Automated testing"] },
  { group: "Data and performance", items: ["PostgreSQL", "Redis", "NoSQL", "Distributed caching", "Dynatrace"] },
  { group: "Development", items: ["Java", "Spring Boot", "Spring Cloud", "SQL"] },
]

export const PROJECTS: Project[] = [
  {
    title: "Professional investment website",
    description:
      "Professional portfolio for an investment analyst with the EFA accreditation. Indices, stock quotes and market news that update themselves every few hours with GitHub Actions, a company search and calculator served from a Cloudflare Worker, and a downloadable CV. No admin panel: everything runs on its own.",
    image: "/projects/jacobo-invest.webp",
    tags: ["Astro", "Cloudflare Workers", "GitHub Actions", "Market data", "Automation"],
    link: "https://jalvarezinvest.com/",
    github: "https://github.com/gerysx/jacobo-porfolio",
    featured: true,
  },
  {
    title: "Sales ERP",
    description:
      "Full stack ERP to manage products, customers and invoices. JWT authentication, role-based access, PDF generation and deployment on Render.",
    image: "/projects/foto_erp.webp",
    tags: ["Angular", "Node.js", "Express", "PostgreSQL", "JWT"],
    link: "https://erp-ventas-frontend.onrender.com/",
    github: "https://github.com/gerysx/erp-ventas-frontend",
    featured: true,
  },
  {
    title: "MyEcommerce",
    description: "Online shop with Spring Boot, Thymeleaf and MySQL: users, cart, orders and inventory.",
    image: "/projects/ecommerce.webp",
    tags: ["Spring Boot", "Thymeleaf", "MySQL"],
    github: "https://github.com/gerysx/spring-ecommerce",
  },
  {
    title: "Small business app",
    description:
      "Cross-platform mobile app to manage products, with authentication, real-time Firestore and deployment with Capacitor.",
    image: "/projects/vista_pc.webp",
    tags: ["Angular", "Ionic", "Firebase"],
    link: "https://product-admin-app-3cd73.web.app/auth/",
    github: "https://github.com/gerysx/product-admin/",
  },
  {
    title: "Interactive maps",
    description: "App built with Angular 20, signals and reusable components on top of Mapbox, adapted to any device.",
    image: "/projects/mapbox.webp",
    tags: ["Angular", "Mapbox", "Tailwind"],
    link: "https://mapasinteractivos.netlify.app/",
    github: "https://github.com/gerysx/maps-app",
  },
  {
    title: "Country App",
    description: "SPA that consumes a public countries REST API with asynchronous loading and responsive design.",
    image: "/projects/screenshot_home.webp",
    tags: ["Angular", "Tailwind", "REST"],
    link: "https://countries-78scb.ondigitalocean.app/",
    github: "https://github.com/gerysx/country-app",
  },
]

export const EDUCATION = [
  { title: "Higher Technical Diploma in Cross-Platform App Development (DAM)", school: "Digitech" },
  { title: "Technical Diploma in Computer Systems and Networks (SMR)", school: "Afuera I" },
]

export const LANGUAGES = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "B1-B2" },
]
