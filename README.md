# 4PARED 360

Sitio de marca en Vue 3, Vue Router, Vite 8, TypeScript 6 y CSS propio. Iconos de Lucide para Vue. Fuente Inter local y logotipos vectoriales del manual de marca.

## Desarrollo

Node 24.12 o superior (también compatible con Node 22.18+).

- `npm ci`: instalar las dependencias del lockfile.
- `npm run dev`: iniciar el servidor local.
- `npm run build`: comprobar tipos y generar sitio y Worker.
- `npm run preview`: revisar la compilación.
- `npm run deploy`: compilar y desplegar con Wrangler, después de configurar la cuenta de Cloudflare.

## Contenido

`src/views/HomeView.vue` contiene los textos y las secciones. La oferta inicial de servicios y el contenido son una propuesta editorial que el propietario debe confirmar.

`src/contact.ts` centraliza los canales de contacto. Por ahora están vacíos porque no se ha proporcionado un correo o WhatsApp oficial. La página comunica esa situación; no simula envíos ni utiliza datos inventados. Cuando se configure un canal aparecerá el enlace de contacto.

`src/assets/main.css` contiene el sistema visual y las reglas adaptables a móvil. `src/router.ts` define inicio y la pantalla 404. `src/sites-worker.ts` es la entrada de Cloudflare Workers. La imagen conceptual de portada fue generada para esta marca; no representa un cliente ni un proyecto construido.

## Publicación

`.openai/hosting.json` conserva la identidad del Site. Los archivos generados están en `dist/`. No se requieren base de datos, secretos ni servicios externos para navegar por el sitio. La primera publicación se mantiene privada para revisión.
