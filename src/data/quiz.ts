// Banco de preguntas del minijuego. answer = índice de la opción correcta.
export interface Question {
  cat: string
  q: string
  code?: string
  options: string[]
  answer: number
  why: string
}

export const QUESTIONS: Question[] = [
  { cat: "HTTP", q: "¿Qué código devuelve una API cuando creas un recurso correctamente?", options: ["200 OK", "201 Created", "204 No Content", "302 Found"], answer: 1, why: "201 indica que se ha creado un recurso nuevo." },
  { cat: "HTTP", q: "Un cliente sin token llama a un endpoint protegido. ¿Qué responde?", options: ["400", "401", "403", "404"], answer: 1, why: "401: falta autenticación. 403 es autenticado pero sin permiso." },
  { cat: "HTTP", q: "¿Qué método HTTP es idempotente?", options: ["POST", "PUT", "PATCH siempre", "Ninguno"], answer: 1, why: "PUT con el mismo cuerpo deja el mismo estado aunque lo repitas." },
  { cat: "HTTP", q: "Superas el rate limit de una API. ¿Qué código esperas?", options: ["429", "503", "418", "409"], answer: 0, why: "429 Too Many Requests." },
  { cat: "Java", q: "¿Qué imprime este código?", code: 'String a = "hola";\nString b = new String("hola");\nSystem.out.println(a == b);', options: ["true", "false", "No compila", "NullPointerException"], answer: 1, why: "== compara referencias; new String crea otro objeto." },
  { cat: "Java", q: "¿Qué colección no admite duplicados?", options: ["ArrayList", "LinkedList", "HashSet", "ArrayDeque"], answer: 2, why: "Un Set no guarda elementos repetidos." },
  { cat: "Java", q: "¿Qué devuelve Optional.ofNullable(null).orElse(\"x\")?", options: ["null", "\"x\"", "Lanza excepción", "Optional.empty"], answer: 1, why: "orElse devuelve el valor alternativo si está vacío." },
  { cat: "Java", q: "¿Cuál es la complejidad de buscar una clave en un HashMap (caso medio)?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)"], answer: 0, why: "Acceso por hash en tiempo constante de media." },
  { cat: "Java", q: "¿Qué palabra clave hace que una variable sea visible entre hilos sin caché local?", options: ["static", "final", "volatile", "transient"], answer: 2, why: "volatile garantiza visibilidad entre hilos." },
  { cat: "Java", q: "Desde Java 21, ¿qué permite crear millones de hilos ligeros?", options: ["ForkJoinPool", "Virtual threads", "Green threads", "CompletableFuture"], answer: 1, why: "Los virtual threads (Project Loom) son estables desde Java 21." },
  { cat: "Java", q: "¿Qué devuelve esto?", code: "List.of(1, 2, 3).stream()\n  .map(x -> x * 2)\n  .filter(x -> x > 2)\n  .count();", options: ["1", "2", "3", "6"], answer: 1, why: "Queda [4, 6]: dos elementos." },
  { cat: "Spring", q: "¿Qué anotación expone una clase como controlador REST?", options: ["@Service", "@RestController", "@Component", "@Repository"], answer: 1, why: "@RestController = @Controller + @ResponseBody." },
  { cat: "Spring", q: "¿Qué ámbito tiene por defecto un bean de Spring?", options: ["prototype", "request", "singleton", "session"], answer: 2, why: "Por defecto Spring crea una única instancia." },
  { cat: "Spring", q: "Llamas a un método @Transactional desde otro método de la misma clase. ¿Qué pasa?", options: ["Abre transacción nueva", "No se aplica la transacción", "Lanza excepción", "Se aplica dos veces"], answer: 1, why: "La auto-invocación salta el proxy, así que no hay transacción." },
  { cat: "Spring", q: "¿Qué tipo de inyección se recomienda en Spring?", options: ["Por campo", "Por constructor", "Por setter", "Estática"], answer: 1, why: "Por constructor: dependencias explícitas, inmutables y fáciles de testear." },
  { cat: "SQL", q: "¿Qué JOIN devuelve también las filas de la izquierda sin coincidencia?", options: ["INNER JOIN", "LEFT JOIN", "CROSS JOIN", "SELF JOIN"], answer: 1, why: "LEFT JOIN conserva todas las filas de la tabla izquierda." },
  { cat: "SQL", q: "¿Qué cláusula filtra después de un GROUP BY?", options: ["WHERE", "HAVING", "ORDER BY", "LIMIT"], answer: 1, why: "HAVING filtra sobre los grupos agregados." },
  { cat: "SQL", q: "Tu API hace 1 consulta para la lista y 1 más por cada elemento. ¿Cómo se llama?", options: ["Deadlock", "Problema N+1", "Full scan", "Race condition"], answer: 1, why: "El clásico N+1; se arregla con JOIN FETCH o batch." },
  { cat: "SQL", q: "¿Qué propiedad ACID garantiza que una transacción se aplica entera o nada?", options: ["Atomicidad", "Consistencia", "Aislamiento", "Durabilidad"], answer: 0, why: "Atomicidad: todo o nada." },
  { cat: "Arquitectura", q: "En el teorema CAP, durante una partición de red eliges entre…", options: ["Coste y rendimiento", "Consistencia y disponibilidad", "Caché y almacenamiento", "CPU y memoria"], answer: 1, why: "Con partición (P) eliges C o A." },
  { cat: "Arquitectura", q: "¿Qué patrón gestiona transacciones distribuidas con pasos y compensaciones?", options: ["Singleton", "Saga", "Adapter", "Observer"], answer: 1, why: "Una Saga encadena transacciones locales con compensaciones." },
  { cat: "Arquitectura", q: "Un servicio caído hace que todos sus clientes se queden colgados. ¿Qué patrón lo evita?", options: ["Circuit breaker", "Factory", "Builder", "Strangler fig"], answer: 0, why: "El circuit breaker corta las llamadas a un servicio que falla." },
  { cat: "Arquitectura", q: "Migras un monolito sustituyendo piezas poco a poco. ¿Qué patrón es?", options: ["Big bang", "Strangler fig", "Blue/green", "Sidecar"], answer: 1, why: "Strangler fig: el sistema nuevo va envolviendo al viejo." },
  { cat: "Arquitectura", q: "¿Qué significa API First?", options: ["Hacer la API antes que la BBDD", "Definir el contrato antes de programar", "Exponer todo como API", "Priorizar APIs públicas"], answer: 1, why: "Primero el contrato (OpenAPI), después la implementación." },
  { cat: "Arquitectura", q: "En arquitectura hexagonal, el dominio depende de…", options: ["La base de datos", "El framework web", "Nada externo: usa puertos", "El broker de eventos"], answer: 2, why: "El dominio define puertos; los adaptadores dependen de él." },
  { cat: "Eventos", q: "Un consumidor procesa dos veces el mismo evento tras un reintento. ¿Qué propiedad lo hace inofensivo?", options: ["Atomicidad", "Idempotencia", "Durabilidad", "Latencia"], answer: 1, why: "Si el consumidor es idempotente, repetir el evento no cambia el resultado." },
  { cat: "Eventos", q: "Un mensaje falla una y otra vez al procesarse. ¿Dónde debería acabar?", options: ["Se borra", "En una dead letter queue", "Se reintenta para siempre", "Vuelve al productor"], answer: 1, why: "La DLQ aparta los mensajes venenosos para analizarlos sin bloquear la cola." },
  { cat: "Eventos", q: "Guardas en BBDD y publicas un evento: ¿qué patrón evita que uno ocurra sin el otro?", options: ["Outbox", "Singleton", "CQRS", "Sidecar"], answer: 0, why: "El outbox guarda el evento en la misma transacción y otro proceso lo publica." },
  { cat: "Cloud", q: "En Kubernetes, ¿qué objeto guarda contraseñas o tokens?", options: ["ConfigMap", "Secret", "Volume", "Ingress"], answer: 1, why: "Los Secret guardan datos sensibles; los ConfigMap, configuración." },
  { cat: "Cloud", q: "¿Qué sonda decide si un pod recibe tráfico?", options: ["livenessProbe", "readinessProbe", "startupProbe", "healthProbe"], answer: 1, why: "readiness: listo para recibir peticiones. liveness: reinicia si muere." },
  { cat: "Cloud", q: "¿Qué hace un HorizontalPodAutoscaler?", options: ["Más CPU al pod", "Más réplicas según carga", "Más nodos al clúster", "Reinicia pods"], answer: 1, why: "Escala horizontalmente el número de réplicas." },
  { cat: "Cloud", q: "Despliegas la versión nueva al 5% del tráfico antes que al resto. ¿Cómo se llama?", options: ["Blue/green", "Canary", "Rolling", "Recreate"], answer: 1, why: "Canary: una parte pequeña del tráfico prueba la versión nueva." },
  { cat: "Git", q: "¿Qué comando aplica un único commit de otra rama?", options: ["git merge", "git rebase", "git cherry-pick", "git stash"], answer: 2, why: "cherry-pick copia ese commit en tu rama." },
  { cat: "Git", q: "Quieres guardar cambios sin hacer commit para cambiar de rama.", options: ["git stash", "git reset", "git revert", "git tag"], answer: 0, why: "stash aparca los cambios para recuperarlos después." },
  { cat: "Seguridad", q: "¿Qué ataque evita usar PreparedStatement?", options: ["XSS", "CSRF", "Inyección SQL", "DDoS"], answer: 2, why: "Los parámetros nunca se concatenan en la consulta." },
  { cat: "Seguridad", q: "Un JWT firmado…", options: ["Está cifrado", "Puede leerlo cualquiera", "Caduca solo", "Es imposible de robar"], answer: 1, why: "Firmado no es cifrado: el payload es Base64 legible." },
  { cat: "Seguridad", q: "¿Cómo se deben guardar las contraseñas?", options: ["Cifradas con AES", "En Base64", "Con hash lento + salt (bcrypt/argon2)", "En texto plano en un Secret"], answer: 2, why: "Hash lento con salt; nunca reversible." },
  { cat: "Algoritmos", q: "¿Complejidad de una búsqueda binaria?", options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], answer: 1, why: "Divide el espacio a la mitad en cada paso." },
  { cat: "Algoritmos", q: "¿Qué estructura de datos sigue el orden LIFO?", options: ["Queue", "Stack", "Heap", "Grafo"], answer: 1, why: "LIFO = último en entrar, primero en salir: una pila." },
  { cat: "Redis", q: "¿Qué estrategia de caché lee de la caché y, si falla, de la BBDD y la rellena?", options: ["Write-through", "Cache-aside", "Write-behind", "Read-repair"], answer: 1, why: "Cache-aside (lazy loading): la aplicación rellena la caché al fallar." },
]

export const RANKS = [
  { min: 0, title: "Becario en prácticas", text: "Todos empezamos aquí. ¡Otra ronda!" },
  { min: 800, title: "Junior Developer", text: "Vas cogiendo el ritmo." },
  { min: 1800, title: "Mid Developer", text: "Sólido. Te aprobaría la PR con un par de comentarios." },
  { min: 3200, title: "Senior Developer", text: "Muy bien. Pasarías mi code review." },
  { min: 5000, title: "Arquitecto de Software", text: "Nivel arquitecto. Hablemos." },
]
