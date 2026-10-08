# Registro de cambios — Odontóloga Kathy M

## 2026-10-07 16:53:23 -0500 — Propuesta comercial interactiva

- Estado: completado en entorno local.
- Motivo: transformar el programa comercial de Kathy M en una experiencia visual, comprensible e interactiva.
- Cambios:
  - `index.html`, `styles.css`, `content.js`, `app.js`: página independiente con narrativa comercial, muestra de formatos, recorrido de cinco meses, inversión progresiva, simulador de pauta, condiciones y cierre con WhatsApp y resumen descargable.
  - `assets/`: copia del logo, favicon, fuente Inter y licencia del kit existente; imagen conceptual generada con herramienta integrada y optimizada a WebP en 540 y 1080 px.
  - `README.md` y `docs/ASSETS.md`: uso, arquitectura, procedencia visual y aspectos comerciales por confirmar.
  - Adaptaciones de pantallas de 320 px y texto ampliado al 200 % tras detectar desbordamientos en las pruebas.
- Verificación: sintaxis JavaScript; Chromium a 320/390/768/1024/1440 px; texto al 200 % a 390/1440 px; controles de formatos y meses; navegación de pestañas por teclado; cálculo de pauta; apertura y cierre del diálogo; enlace de WhatsApp; descarga; movimiento reducido. Sin errores JavaScript ni recursos HTTP fallidos. Revisión visual de capturas.
- Alcance: todos los archivos creados se encuentran en `Odontologa-KathyM/`. Los cambios preexistentes en `.DS_Store` no pertenecen a esta tarea. No se publicó el sitio ni se enviaron mensajes.
- Pendientes comerciales: confirmar tarifa desde el mes 6, impuestos y volumen de piezas específicas para publicidad antes de formalizar; sustituir muestras conceptuales cuando existan recursos reales aprobados de la cliente.

## 2026-10-07 16:58:14 -0500 — Preparación para incorporación a GitHub

- Estado: archivos preparados para incorporar al repositorio `Alumbra360/4pared`.
- Motivo: solicitud del usuario de subir la propuesta al repositorio de 4 PARED.
- Cambios: carpeta `Odontologa-KathyM/` añadida como proyecto estático independiente sobre una copia actualizada de la rama `main`. No se modifica la aplicación Vue existente ni su configuración de compilación o despliegue.
- Verificación: revisión del repositorio remoto, sintaxis JavaScript y alcance de archivos. Se excluyen archivos del sistema y cambios ajenos a la propuesta.
- Alcance: almacenamiento del proyecto en GitHub; no incorpora la página al despliegue de la web principal.

## 2026-10-07 16:59:57 -0500 — Subida a GitHub confirmada

- Estado: completado.
- Resultado: commit `d42bf2c` enviado a `main` de `Alumbra360/4pared`; Git confirmó el avance remoto de `c14446c` a `d42bf2c`.
- Alcance: 13 archivos de `Odontologa-KathyM/`; la web principal no se modificó. No se ejecutó despliegue.
- Referencia: https://github.com/Alumbra360/4pared/commit/d42bf2c
- Esta confirmación posterior al push se conserva en la bitácora local.

## 2026-10-07 17:03:59 -0500 — Reglas contra indexación y recopilación

- Estado: implementado; preparado para subir a GitHub.
- Cambios: meta robots ampliada, `_headers` y `robots.txt` para alojamiento independiente; reglas HTTP y robots limitadas a `/Odontologa-KathyM` en `public/` del repositorio remoto. Documentación de alcance y límites.
- Criterio: los buscadores conservan acceso para leer noindex; los agentes de recopilación enumerados reciben Disallow. No se añadió la propuesta a navegación ni sitemaps. No equivale a autenticación.
- Verificación: comprobaciones estáticas de directivas, alcance de rutas y diff. El servidor local no interpreta `_headers`; verificación HTTP de producción pendiente de despliegue.

## 2026-10-07 17:10:10 -0500 — Integración de la propuesta en el build de Cloudflare

- Diagnóstico: Workers Builds marcó exitoso el commit anterior, pero el build publicaba solo la web Vue; `Odontologa-KathyM/` no entraba en `dist`. La URL pública de la propuesta devolvía HTTP 404.
- Cambios: `scripts/build-proposals.mjs` copia únicamente HTML, CSS, JavaScript y assets al resultado; `package.json` lo ejecuta al final del build; documentación actualizada.
- Verificación: `npm ci`, compilación Vue/TypeScript y Worker correctas; el resultado incluye la propuesta y reglas de cabecera/robots. No se modificó el nombre del Worker ni el dominio.
- Estado: corrección preparada para GitHub y despliegue automático; confirmación pública pendiente.

## 2026-10-07 17:12:28 -0500 — Indexación habilitada por solicitud del usuario

- Estado: cambio preparado para publicación.
- Cambios: meta `index, follow`; retirado X-Robots-Tag noindex; robots.txt permite rastreo general, incluidos los agentes antes bloqueados. Ajustado control del build y documentación. Sustituye la política anterior de no indexación.
- Alcance: web principal y propuesta Kathy M. Se conserva la corrección pendiente que incorpora la propuesta al paquete de Cloudflare.
- Verificación: compilación y revisión de directivas; confirmación pública pendiente del despliegue.

## 2026-10-08 00:24:31 -0500 — Reunión mensual de seguimiento y mejora

- Estado: implementado; verificación y publicación pendientes.
- Cambios: sección editorial después del sistema de medición y antes de la hoja de ruta; destaca 1 reunión mensual de hasta 1 hora, decisiones y prioridades, agenda desplegable y ciclo Medir → Revisar → Decidir → Ejecutar → Volver a medir. Resumen descargable y alcance de responsabilidades actualizados.
- Alcance: incorporación aplicada a la versión local y a la copia actualizada de GitHub; se conservan los cambios locales previos de video y fotografía sin incorporarlos a este envío.
- Verificación completada: compilación y sintaxis JavaScript correctas; sección revisada visualmente en escritorio y móvil, sin desbordamiento a 320/390/768/1440 px; agenda desplegable funcional y resumen descargable con duración y contenido de la reunión. Sin errores de ejecución.
