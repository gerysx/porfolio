export interface NewsItem {
  slug: string
  tag: string
  title: string
  summary: string
  take: string
  source: string
  url: string
}
export interface NewsDay {
  date: string
  items: NewsItem[]
}

const files = import.meta.glob<NewsDay>("../content/noticias/*.json", { eager: true, import: "default" })

/** Todos los días con noticias, del más reciente al más antiguo. */
export const NEWS_DAYS: NewsDay[] = Object.values(files).sort((a, b) => b.date.localeCompare(a.date))

export const TAG_STYLES: Record<string, string> = {
  IA: "text-violet-600 dark:text-violet-300 bg-violet-500/10",
  Java: "text-orange-600 dark:text-orange-300 bg-orange-500/10",
  Cloud: "text-sky-600 dark:text-sky-300 bg-sky-500/10",
  Seguridad: "text-red-600 dark:text-red-300 bg-red-500/10",
  Industria: "text-emerald-600 dark:text-emerald-300 bg-emerald-500/10",
  Frontend: "text-pink-600 dark:text-pink-300 bg-pink-500/10",
}

export function formatDate(date: string, opts: Intl.DateTimeFormatOptions = { dateStyle: "full" }, locale = "es-ES") {
  return new Intl.DateTimeFormat(locale, { ...opts, timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`))
}
