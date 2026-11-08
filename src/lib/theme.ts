export function toggleTheme() {
  const isDark = document.documentElement.classList.toggle("dark")
  try {
    localStorage.setItem("theme", isDark ? "dark" : "light")
  } catch (_) {
    /* almacenamiento no disponible */
  }
}
