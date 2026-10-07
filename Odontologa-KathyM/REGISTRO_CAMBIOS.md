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
