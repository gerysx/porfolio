// Idiomas de la web: español en la raíz y la versión en inglés bajo /en/.
import * as es from "@/data/profile"
import * as en from "@/data/profile.en"
import * as quizEs from "@/data/quiz"
import * as quizEn from "@/data/quiz.en"

export type Lang = "es" | "en"

export const getLang = (url: URL): Lang => (url.pathname === "/en" || url.pathname.startsWith("/en/") ? "en" : "es")

/** Ruta de inicio de cada idioma (las anclas de secciones cuelgan de aquí). */
export const homePath = (lang: Lang) => (lang === "en" ? "/en/" : "/")

/** Contenido del porfolio (perfil, experiencia, stack...) en el idioma pedido. */
export const content = (lang: Lang) => (lang === "en" ? en : es)

export const quiz = (lang: Lang) => (lang === "en" ? quizEn : quizEs)

/** Equivalente de la página actual en el otro idioma. */
export function alternatePath(_url: URL, lang: Lang) {
  if (lang === "en") return "/"
  return "/en/"
}
