// Capa de movimiento: scroll suave (Lenis) + animaciones con GSAP.
// Si el usuario prefiere menos movimiento o falla el JS, todo el contenido
// queda visible tal cual (ver .motion en global.css).
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"
import Lenis from "lenis"

gsap.registerPlugin(ScrollTrigger, SplitText)

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches

function smoothScroll() {
  const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
  lenis.on("scroll", ScrollTrigger.update)
  gsap.ticker.add((t) => lenis.raf(t * 1000))
  gsap.ticker.lagSmoothing(0)

  // Enlaces internos (#seccion o /#seccion) con el mismo scroll suave
  document.addEventListener("click", (ev) => {
    const a = (ev.target as Element).closest?.("a[href*='#']") as HTMLAnchorElement | null
    if (!a || a.origin !== location.origin || a.pathname !== location.pathname) return
    const target = a.hash && document.querySelector(a.hash)
    if (!target) return
    ev.preventDefault()
    lenis.scrollTo(target as HTMLElement, { offset: -80 })
    history.pushState(null, "", a.hash)
  })
  ;(window as any).__lenis = lenis
}

function reveals() {
  gsap.set(".reveal", { autoAlpha: 0, y: 28 })
  ScrollTrigger.batch(".reveal", {
    start: "top 88%",
    once: true,
    onEnter: (els) =>
      gsap.to(els, { autoAlpha: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.08, overwrite: true }),
  })
}

function splitHeadings() {
  document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
    SplitText.create(el, {
      type: "words",
      mask: "words",
      wordsClass: "split-word",
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.words, {
          yPercent: 110,
          duration: 0.9,
          ease: "power4.out",
          stagger: 0.05,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        }),
    })
  })
}

function hero() {
  const banner = document.querySelector("[data-hero-banner]")
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
  const show = { autoAlpha: 1, x: 0, y: 0, scale: 1, rotateX: 0, filter: "blur(0px)" }
  if (banner) tl.fromTo(banner, { scale: 1.04, autoAlpha: 0, filter: "blur(8px)" }, { ...show, duration: 1.1 })
  tl.fromTo("[data-hero-avatar]", { scale: 0.6, autoAlpha: 0 }, { ...show, duration: 0.7, ease: "back.out(1.7)" }, "-=0.6")
  tl.fromTo("[data-hero-item]", { y: 24, autoAlpha: 0 }, { ...show, duration: 0.8, stagger: 0.1 }, "-=0.4")
  tl.fromTo("[data-hero-terminal]", { y: 40, autoAlpha: 0, rotateX: 8 }, { ...show, duration: 1 }, "-=0.7")
  tl.set("[data-hero-banner], [data-hero-avatar], [data-hero-item], [data-hero-terminal]", { clearProps: "filter,transform" })

  // Parallax del banner al bajar
  const scene = document.querySelector("[data-banner-scene]")
  if (scene) {
    gsap.to(scene, {
      yPercent: 8,
      scale: 1.06,
      ease: "none",
      scrollTrigger: { trigger: "#inicio", start: "top top", end: "bottom top", scrub: true },
    })
  }
}

function timeline() {
  document.querySelectorAll<HTMLElement>("[data-progress]").forEach((line) => {
    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: line.parentElement, start: "top 70%", end: "bottom 60%", scrub: true },
      }
    )
  })
}

function magnetic() {
  if (!window.matchMedia("(hover: hover)").matches) return
  document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
    const x = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" })
    const y = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" })
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect()
      x((e.clientX - r.left - r.width / 2) * 0.3)
      y((e.clientY - r.top - r.height / 2) * 0.3)
    })
    el.addEventListener("pointerleave", () => {
      x(0)
      y(0)
    })
  })
}

function tilt() {
  if (!window.matchMedia("(hover: hover)").matches) return
  document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
    gsap.set(el, { transformPerspective: 900 })
    const rx = gsap.quickTo(el, "rotateX", { duration: 0.5, ease: "power3" })
    const ry = gsap.quickTo(el, "rotateY", { duration: 0.5, ease: "power3" })
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect()
      ry(((e.clientX - r.left) / r.width - 0.5) * 6)
      rx(-((e.clientY - r.top) / r.height - 0.5) * 6)
    })
    el.addEventListener("pointerleave", () => {
      rx(0)
      ry(0)
    })
  })
}

function spotlight() {
  document.querySelectorAll<HTMLElement>(".spotlight").forEach((el) => {
    el.addEventListener("pointermove", (ev) => {
      const r = el.getBoundingClientRect()
      el.style.setProperty("--mx", `${ev.clientX - r.left}px`)
      el.style.setProperty("--my", `${ev.clientY - r.top}px`)
    })
  })
}

export function initMotion() {
  spotlight()
  ;(window as any).__motionReady = true
  if (reduced()) {
    document.documentElement.classList.remove("motion")
    return
  }
  smoothScroll()
  reveals()
  splitHeadings()
  hero()
  timeline()
  magnetic()
  tilt()
  // Las fuentes cambian medidas: recalcula posiciones al cargarlas
  document.fonts?.ready.then(() => ScrollTrigger.refresh())
}
