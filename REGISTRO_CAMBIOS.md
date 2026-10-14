# Registro de cambios

## 2026-10-14 14:51:48 -0500 — Instalación de Open Design

- Estado: parcial.
- Motivo: instalar Open Design e iniciar una página para el plan de creación de contenido en `/planes/creacion-contenido`.
- Cambios: instalada `/Applications/Open Design.app` desde el instalador local `open-design-0.24.1-mac-arm64.dmg`; registrada su conexión MCP en Codex mediante la aplicación instalada.
- Verificación: firma validada con codesign; spctl aceptó la aplicación como Notarized Developer ID; `codex mcp get open-design --json` confirmó el servidor habilitado.
- Pendientes: este chat no expone las herramientas nuevas de Open Design. Se requiere un nuevo chat para iniciar el flujo de creación. No se ha generado la página.
- Los cambios preexistentes en `Odontologa-KathyM` no forman parte de esta tarea.

## 2026-10-14 15:15:36 -0500 — Página local del plan de contenido

- Estado: completado localmente, por instrucción del usuario sin Open Design.
- Cambios: creados `planes/creacion-contenido/index.html` y `styles.css`, con diseño adaptable, entregables, precio, condiciones, proceso de producción y preguntas desplegables. Sin dependencias externas.
- Verificación: HTML analizado, enlaces internos y CSS comprobados; servidor local devolvió HTTP 200; contenido y presentación revisados en el navegador de Codex.
- Vista previa: `http://127.0.0.1:8765/planes/creacion-contenido/`. No se ha publicado en un alojamiento externo.

## 2026-10-14 16:37:21 -0500 — PDF del plan mensual de contenido

- Estado: completado.
- Cambios: creado `output/pdf/plan-mensual-creacion-contenido.pdf`, de dos páginas, con jerarquía visual de inversión, entregables, proceso y condiciones. Fuente de generación y vistas de revisión en `tmp/pdfs/`.
- Verificación: ambas páginas renderizadas e inspeccionadas visualmente; texto extraído y condiciones principales comprobadas con pypdf.

## 2026-10-14 16:39:52 -0500 — PDF del plan con identidad 4PARED

- Estado: completado.
- Cambios: creado `output/pdf/4pared-plan-mensual-contenido.pdf`, de dos páginas, con logo del kit, tipografía Inter, paleta corporativa, iconos e ilustración vectorial original de formatos de contenido. Se conserva el PDF anterior. Fuente y renders en `tmp/pdfs/plan-marca/`.
- Verificación: ambas páginas renderizadas e inspeccionadas visualmente, sin recortes ni solapamientos; comprobación del texto y las condiciones principales con pypdf.

## 2026-10-14 16:45:01 -0500 — Identidad 4PARED y mejoras UX del plan

- Estado: completado localmente.
- Cambios: actualizados `planes/creacion-contenido/index.html` y `styles.css` con colores y tipografía del kit, logotipo original, imagen ilustrativa existente, iconos SVG, navegación persistente y resumen inicial de precio y condiciones. Añadidos recursos locales y README con procedencia.
- Accesibilidad: foco visible, enlace para saltar al contenido, alternativas textuales, contraste conforme a los tokens de marca y controles táctiles.
- Verificación: recursos y anclas válidos; imágenes cargadas en navegador; acordeón expandido correctamente; sin desbordamiento horizontal en 390 y 1440 px. Sin cambios en condiciones comerciales ni publicación externa.

## 2026-10-14 — Inclusión del plan en la compilación de producción

- Corregido `scripts/build-proposals.mjs` para copiar HTML, CSS y assets de `planes/creacion-contenido` a `dist/planes/creacion-contenido`.
- Verificado que la página estaba en main, pero faltaba su inclusión en la compilación consumida por Cloudflare.
- Validación previa: TypeScript, compilaciones Vite y Wrangler dry-run completados; Wrangler no pudo guardar su log por restricciones del entorno.
- Este cambio prepara la publicación desde Git; el resultado del despliegue automático de Cloudflare requiere comprobación independiente.
