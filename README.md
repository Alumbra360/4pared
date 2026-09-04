# 4PARED 360

Web de 4PARED, una productora audiovisual para negocios: marcas personales, tecnología y restaurantes. Usa Vue 3, Vue Router, Vite 8, TypeScript 6 y CSS propio. Iconos de Lucide para Vue. Fuente Inter local y logotipos vectoriales del manual de marca.

## Desarrollo

Node 24.12 o superior (también compatible con Node 22.18+).

- `npm ci`: instalar las dependencias del lockfile.
- `npm run dev`: iniciar el servidor local.
- `npm run build`: comprobar tipos y generar sitio y Worker.
- `npm run preview`: revisar la compilación.
- `npm run deploy`: compilar y desplegar con Wrangler, después de configurar la cuenta de Cloudflare.

## Contenido

`src/views/HomeView.vue` contiene los textos y las secciones. El enfoque confirmado por el propietario es fotografía y video para negocios. Los ejemplos muestran marcas personales, tecnología y restaurantes; no presentar la empresa como un portafolio de paisajes o arte sin objetivo comercial.

`src/contact.ts` centraliza los canales de contacto. Por ahora están vacíos porque no se ha proporcionado un correo o WhatsApp oficial. La página comunica esa situación; no simula envíos ni utiliza datos inventados. Cuando se configure un canal aparecerá el enlace de contacto.

`src/assets/main.css` contiene el sistema visual y las reglas adaptables a móvil. `src/router.ts` define inicio y la pantalla 404. `src/sites-worker.ts` es la entrada de Cloudflare Workers. La imagen conceptual de portada fue generada para esta marca; no representa un cliente ni un proyecto construido.

## Publicación

`.openai/hosting.json` conserva la identidad del Site. Los archivos generados están en `dist/`. No se requieren base de datos, secretos ni servicios externos para navegar por el sitio. La primera publicación se mantiene privada para revisión.

## Dirección artística

La página combina fotografía y video comerciales con una dirección artística. La meta propuesta es comunicar valor, generar confianza y despertar interés en nuevos clientes. Incluye galería ampliable con controles de teclado y reproducción de un clip local mediante controles nativos.

Las tres imágenes son referencias conceptuales generadas con IA, identificadas en la interfaz. El clip de cocina «Chef working in a large kitchen» proviene de Mixkit con Free License; no se atribuye a 4PARED. Los créditos completos están en `public/portfolio/creditos.txt`. Sustituir las muestras por fotografías y videos propios para presentar trabajos reales.
