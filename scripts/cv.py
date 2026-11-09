"""Genera los CV en PDF (español e inglés) en public/cv/.

Formato pensado para filtros ATS: una sola columna, texto seleccionable,
encabezados estándar, sin tablas, iconos ni imágenes, y fuente incrustada.

Uso:  python3 scripts/cv.py   (requiere reportlab)
"""
from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import HRFlowable, KeepTogether, ListFlowable, ListItem, Paragraph, SimpleDocTemplate, Spacer

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "cv"
FONT_DIRS = [ROOT / "scripts" / "fonts", Path("/usr/share/fonts/truetype/crosextra")]


def register_fonts():
    for name, file in [("Body", "Carlito-Regular.ttf"), ("Body-Bold", "Carlito-Bold.ttf"), ("Body-Italic", "Carlito-Italic.ttf")]:
        path = next((d / file for d in FONT_DIRS if (d / file).exists()), None)
        if path is None:
            raise SystemExit(f"No encuentro la fuente {file}")
        pdfmetrics.registerFont(TTFont(name, str(path)))
    pdfmetrics.registerFontFamily("Body", normal="Body", bold="Body-Bold", italic="Body-Italic", boldItalic="Body-Bold")


INK = HexColor("#111827")
MUTED = HexColor("#4b5563")
ACCENT = HexColor("#1d4ed8")

CONTACT = {
    "location": "Madrid, España",
    "phone": "+34 691 793 335",
    "email": "geralvarez95@gmail.com",
    "linkedin": "linkedin.com/in/germanalvarezgonzalez",
    "github": "github.com/gerysx",
    "web": "gerysdev.es",
}

ES = {
    "file": "German-Alvarez-CV-ES.pdf",
    "lang": "es-ES",
    "title": "Arquitecto de Software | Especialista en banca internacional",
    "location": "Madrid, España",
    "h": {
        "summary": "Perfil profesional",
        "experience": "Experiencia profesional",
        "skills": "Competencias técnicas",
        "education": "Formación",
        "languages": "Idiomas",
    },
    "summary": (
        "Arquitecto de Software especialista en banca internacional: actualmente en NTT DATA en el proyecto conjunto Santander UK – TSB, "
        "y antes en la modernización de plataformas de Santander Bank USA. Diseño sistemas distribuidos "
        "y orientados a eventos, defino contratos de API y estrategias de integración, y planifico despliegues on premise y cloud "
        "sobre OpenShift, Kubernetes y AWS con CI/CD, observabilidad y seguridad en cada entrega. Perfil completo de arquitectura: "
        "del diseño del sistema y sus decisiones técnicas a la operación, el rendimiento y la calidad en producción."
    ),
    "jobs": [
        {
            "role": "Arquitecto de Software",
            "company": "NTT DATA · Proyecto Santander UK – TSB",
            "place": "Madrid",
            "dates": "Mayo 2026 – Actualidad",
            "points": [
                "Diseño, creación y mantenimiento de componentes comunes de arquitectura (librerías compartidas, configuración base y plantillas) que reutilizan los equipos de desarrollo.",
                "Actualización de librerías, frameworks e infraestructura: análisis de breaking changes e impacto en el código, plan de pruebas, despliegue por fases y rollback.",
                "Análisis y remediación de vulnerabilidades en dependencias e imágenes (SonarQube, Fortify, Trivy) integrados en los pipelines CI/CD.",
                "Observabilidad y rendimiento: monitorización con Dynatrace, pruebas de carga comparadas, análisis de throughput y latencias (p95/p99) e informes de conclusiones.",
                "Caché distribuida: configuración y ajuste de pools, timeouts y topología en varios centros de datos.",
                "Soporte y diagnóstico en entornos on premise: acceso a servidores Linux y a contenedores en OpenShift/Kubernetes para revisar logs, configuración y despliegues.",
                "Diseño de arquitecturas distribuidas y orientadas a eventos, con contratos de API y estrategia de integración entre sistemas.",
                "Gobierno técnico: estándares, revisiones de diseño y registro de decisiones de arquitectura (ADR).",
            ],
        },
        {
            "role": "Desarrollador de Software",
            "company": "Delogica · Proyecto Santander Bank USA",
            "place": "Madrid",
            "dates": "Octubre 2025 – Abril 2026",
            "points": [
                "Modernización de plataformas en entorno bancario internacional cubriendo el ciclo completo: análisis, diseño, integración, despliegue y calidad.",
                "Análisis de sistemas legacy en MuleSoft y documentación técnica (UML, flujos de integración en Confluence) como base para la migración.",
                "Migración de APIs y componentes de integración legacy a microservicios con Java y Spring Boot.",
                "Diseño de contratos API First con OpenAPI 3.0 y patrón Delegate para separar contrato e implementación.",
                "Comunicación asíncrona mediante mensajería de eventos y colas en arquitecturas orientadas a eventos.",
                "Exposición segura de servicios en IBM API Connect y despliegue automatizado con GitHub Actions sobre OpenShift (ConfigMaps y Secrets).",
                "Calidad y seguridad en el pipeline: SonarQube, Fortify, Trivy y pruebas automatizadas con JUnit.",
                "Integración con bases de datos relacionales y NoSQL y transformación de datos JSON, XML y CSV con MapStruct.",
            ],
        },
        {
            "role": "Desarrollador de Software (prácticas)",
            "company": "Adviser Cloud",
            "place": "Madrid",
            "dates": "Febrero 2025 – Julio 2025",
            "points": [
                "Desarrollo de microservicios con Java y Spring Boot para aplicaciones internas, con arquitectura por capas y principios SOLID.",
                "Diseño e integración de APIs REST como capa de comunicación entre servicios y aplicaciones.",
                "Creación de agentes de inteligencia artificial para automatizar tareas y flujos de trabajo internos.",
            ],
        },
    ],
    "skills": [
        ("Arquitectura", "Arquitectura de software, microservicios, arquitectura orientada a eventos (EDA), sistemas distribuidos, API First, OpenAPI 3.0, REST, DDD, arquitectura hexagonal, CQRS, Saga, Outbox, Circuit Breaker, patrón Delegate"),
        ("Integración y mensajería", "Mensajería de eventos, colas de mensajes, publicación/suscripción, API Gateway, IBM API Connect, MuleSoft"),
        ("Cloud e infraestructura", "OpenShift, Kubernetes, Docker, servidores Linux on premise, AWS, cloud native, contenedores, ConfigMaps y Secrets"),
        ("CI/CD y DevOps", "CI/CD, GitHub Actions, Git, SonarQube, Fortify, Trivy, DevSecOps, Linux"),
        ("Datos y rendimiento", "PostgreSQL, SQL, NoSQL, MongoDB, Redis, caché distribuida, Dynatrace, observabilidad, pruebas de carga"),
        ("Desarrollo backend", "Java, Spring Boot, Spring Cloud, JUnit, MapStruct, JSON, XML"),
        ("Inteligencia artificial", "Agentes de IA, automatización de procesos"),
        ("Metodologías", "Scrum, Kanban, Clean Code, SOLID, ADR, documentación técnica (UML, Confluence), Jira"),
    ],
    "education": [
        ("Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)", "Digitech"),
        ("Técnico en Sistemas Microinformáticos y Redes (SMR)", "Afuera I"),
    ],
    "languages": "Español: nativo · Inglés: B1-B2",
}

EN = {
    "file": "German-Alvarez-CV-EN.pdf",
    "lang": "en-GB",
    "title": "Software Architect | International Banking Specialist",
    "location": "Madrid, Spain",
    "h": {
        "summary": "Professional summary",
        "experience": "Professional experience",
        "skills": "Technical skills",
        "education": "Education",
        "languages": "Languages",
    },
    "summary": (
        "Software Architect specialised in international banking: currently at NTT DATA on the joint Santander UK – TSB project, "
        "previously modernising platforms for Santander Bank USA. I design distributed and event-driven "
        "systems, define API contracts and integration strategies, and plan on-premise and cloud deployments on OpenShift, Kubernetes "
        "and AWS with CI/CD, observability and security built into every release. Full architecture profile: from system "
        "design and technical decisions to operations, performance and quality in production."
    ),
    "jobs": [
        {
            "role": "Software Architect",
            "company": "NTT DATA · Santander UK – TSB project",
            "place": "Madrid, Spain",
            "dates": "May 2026 – Present",
            "points": [
                "Design, build and maintain common architecture components (shared libraries, base configuration and templates) reused by development teams.",
                "Upgrade libraries, frameworks and infrastructure: breaking-change and code impact analysis, test plans, phased rollout and rollback.",
                "Vulnerability analysis and remediation in dependencies and images (SonarQube, Fortify, Trivy) built into the CI/CD pipelines.",
                "Observability and performance: Dynatrace monitoring, comparative load testing, throughput and latency analysis (p95/p99) and findings reports.",
                "Distributed caching: configuration and tuning of pools, timeouts and multi-data-centre topology.",
                "Support and troubleshooting in on-premise environments: access to Linux servers and OpenShift/Kubernetes containers to review logs, configuration and deployments.",
                "Design distributed and event-driven architectures, with API contracts and the integration strategy between systems.",
                "Technical governance: standards, design reviews and architecture decision records (ADR).",
            ],
        },
        {
            "role": "Software Developer",
            "company": "Delogica · Santander Bank USA project",
            "place": "Madrid, Spain",
            "dates": "October 2025 – April 2026",
            "points": [
                "Platform modernisation in an international banking environment across the full lifecycle: analysis, design, integration, deployment and quality.",
                "Analysed legacy MuleSoft systems and produced technical documentation (UML, integration flows in Confluence) as the basis for migration.",
                "Migrated legacy APIs and integration components to microservices with Java and Spring Boot.",
                "Designed API First contracts with OpenAPI 3.0 and the Delegate pattern to separate contract from implementation.",
                "Asynchronous communication through event messaging and queues in event-driven architectures.",
                "Secure service exposure on IBM API Connect and automated deployment with GitHub Actions to OpenShift (ConfigMaps and Secrets).",
                "Quality and security in the pipeline: SonarQube, Fortify, Trivy and automated testing with JUnit.",
                "Integration with relational and NoSQL databases and JSON, XML and CSV data transformation with MapStruct.",
            ],
        },
        {
            "role": "Software Developer (internship)",
            "company": "Adviser Cloud",
            "place": "Madrid, Spain",
            "dates": "February 2025 – July 2025",
            "points": [
                "Built microservices with Java and Spring Boot for internal business applications, using layered architecture and SOLID principles.",
                "Designed and integrated REST APIs as the communication layer between services and applications.",
                "Built AI agents to automate internal tasks and workflows.",
            ],
        },
    ],
    "skills": [
        ("Architecture", "Software architecture, microservices, event-driven architecture (EDA), distributed systems, API First, OpenAPI 3.0, REST, DDD, hexagonal architecture, CQRS, Saga, Outbox, Circuit Breaker, Delegate pattern"),
        ("Integration and messaging", "Event messaging, message queues, publish/subscribe, API Gateway, IBM API Connect, MuleSoft"),
        ("Cloud and infrastructure", "OpenShift, Kubernetes, Docker, on-premise Linux servers, AWS, cloud native, containers, ConfigMaps and Secrets"),
        ("CI/CD and DevOps", "CI/CD, GitHub Actions, Git, SonarQube, Fortify, Trivy, DevSecOps, Linux"),
        ("Data and performance", "PostgreSQL, SQL, NoSQL, MongoDB, Redis, distributed caching, Dynatrace, observability, load testing"),
        ("Backend development", "Java, Spring Boot, Spring Cloud, JUnit, MapStruct, JSON, XML"),
        ("Artificial intelligence", "AI agents, process automation"),
        ("Methodologies", "Scrum, Kanban, Clean Code, SOLID, ADR, technical documentation (UML, Confluence), Jira"),
    ],
    "education": [
        ("Higher Technical Diploma in Cross-Platform Application Development (DAM)", "Digitech, Spain"),
        ("Technical Diploma in Computer Systems and Networks (SMR)", "Afuera I, Spain"),
    ],
    "languages": "Spanish: native · English: B1-B2 (intermediate)",
}

S = {}


def styles():
    S["name"] = ParagraphStyle("name", fontName="Body-Bold", fontSize=22, leading=26, textColor=INK)
    S["title"] = ParagraphStyle("title", fontName="Body-Bold", fontSize=12.5, leading=16, textColor=ACCENT, spaceBefore=1)
    S["contact"] = ParagraphStyle("contact", fontName="Body", fontSize=9.5, leading=13, textColor=MUTED, spaceBefore=3)
    S["h"] = ParagraphStyle("h", fontName="Body-Bold", fontSize=11.5, leading=14, textColor=INK, spaceBefore=11, spaceAfter=2)
    S["body"] = ParagraphStyle("body", fontName="Body", fontSize=10, leading=13.4, textColor=INK, alignment=TA_LEFT)
    S["job"] = ParagraphStyle("job", fontName="Body-Bold", fontSize=10.8, leading=14, textColor=INK, spaceBefore=7)
    S["meta"] = ParagraphStyle("meta", fontName="Body", fontSize=9.6, leading=12.5, textColor=MUTED, spaceAfter=2)
    S["bullet"] = ParagraphStyle("bullet", parent=S["body"], leading=13)


def link(url, text):
    return f'<a href="https://{url}" color="#1d4ed8">{text}</a>'


def heading(text):
    return [Paragraph(text.upper(), S["h"]), HRFlowable(width="100%", thickness=0.6, color=HexColor("#d1d5db"), spaceAfter=4)]


def bullets(items):
    return ListFlowable(
        [ListItem(Paragraph(t, S["bullet"]), leftIndent=11, value="•") for t in items],
        bulletType="bullet", start="•", leftIndent=11, bulletFontName="Body", bulletFontSize=9, bulletOffsetY=-0.5,
    )


def build(cv):
    c = CONTACT
    story = [
        Paragraph("Germán Álvarez González", S["name"]),
        Paragraph(cv["title"], S["title"]),
        Paragraph(
            " | ".join([
                cv["location"],
                c["phone"],
                f'<a href="mailto:{c["email"]}" color="#1d4ed8">{c["email"]}</a>',
            ]),
            S["contact"],
        ),
        Paragraph(
            " | ".join([link(c["linkedin"], c["linkedin"]), link(c["github"], c["github"]), link(c["web"], c["web"])]),
            S["contact"],
        ),
    ]

    story += heading(cv["h"]["summary"])
    story.append(Paragraph(cv["summary"], S["body"]))

    story += heading(cv["h"]["skills"])
    for group, items in cv["skills"]:
        story.append(Paragraph(f"<b>{group}:</b> {items}", S["body"]))
        story.append(Spacer(0, 2.5))

    story += heading(cv["h"]["experience"])
    for job in cv["jobs"]:
        head = [
            Paragraph(f'{job["role"]} | {job["company"]}', S["job"]),
            Paragraph(f'{job["dates"]} | {job["place"]}', S["meta"]),
        ]
        story.append(KeepTogether(head + [bullets(job["points"][:2])]))
        if len(job["points"]) > 2:
            story.append(bullets(job["points"][2:]))

    block = heading(cv["h"]["education"])
    for title, school in cv["education"]:
        block.append(Paragraph(f"<b>{title}</b> | {school}", S["body"]))
        block.append(Spacer(0, 2.5))
    block += heading(cv["h"]["languages"])
    block.append(Paragraph(cv["languages"], S["body"]))
    story.append(KeepTogether(block))

    OUT.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUT / cv["file"]),
        pagesize=A4,
        leftMargin=18 * mm, rightMargin=18 * mm, topMargin=15 * mm, bottomMargin=15 * mm,
        title=f"Germán Álvarez González - {cv['title'].split(' | ')[0]} - CV",
        author="Germán Álvarez González",
        subject=f"{cv['title']} - CV",
        keywords="Software Architect, Arquitecto de Software, International Banking, Banca internacional, Microservices, Event-Driven Architecture, Kubernetes, AWS, CI/CD, Spring Cloud, OpenShift, API First",
        lang=cv["lang"],
    )
    doc.build(story)
    print("OK", OUT / cv["file"])


if __name__ == "__main__":
    register_fonts()
    styles()
    for cv in (ES, EN):
        build(cv)
