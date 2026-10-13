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

## 2026-10-07 17:11:03 -0500 — Subida de corrección no autorizada

- Estado: parcial; corrección local completada, envío pendiente.
- Verificación: `wrangler deploy --dry-run` completado sin errores; 61 archivos de assets.
- Resultado: commit local `1801bf8` en `/tmp/4pared-kathy-upload`; el envío a GitHub fue rechazado por el usuario, no se volvió a intentar.
- Respaldo: `docs/cloudflare-build-fix.patch` conserva el commit completo para aplicarlo en otra copia del repositorio. No se desplegó la corrección.

## 2026-10-07 17:12:28 -0500 — Indexación habilitada por solicitud del usuario

- Estado: cambio preparado para publicación.
- Cambios: meta `index, follow`; retirado X-Robots-Tag noindex; robots.txt permite rastreo general, incluidos los agentes antes bloqueados. Ajustado control del build y documentación. Sustituye la política anterior de no indexación.
- Alcance: web principal y propuesta Kathy M. Se conserva la corrección pendiente que incorpora la propuesta al paquete de Cloudflare.
- Verificación: compilación y revisión de directivas; confirmación pública pendiente del despliegue.

## 2026-10-07 17:16:07 -0500 — Publicación e indexabilidad comprobadas

- Estado: publicado en workers.dev; dominio personalizado pendiente de corregir.
- GitHub: push confirmado de `1270073` a `3b8328f`, incluyendo la integración del build y la autorización de indexación.
- Verificación pública: `https://4pared.alumbra365.workers.dev/Odontologa-KathyM/` devuelve HTTP 200 y meta `index, follow`, sin X-Robots-Tag noindex. `/robots.txt` permite rastreo.
- Pendiente: `https://4pared.alumbra360.com/Odontologa-KathyM/` continúa en HTTP 404. Requiere revisar asociación o enrutamiento del dominio en Cloudflare. No se modificó esa configuración.
- La consulta privada de checks de GitHub no fue autorizada; se verificó el resultado público. La indexabilidad no implica inclusión inmediata en buscadores.

## 2026-10-07 19:12:17 -0500 — Tarjetas visuales en La oportunidad

- Estado: implementado localmente; sin publicación.
- Cambios: `index.html` sustituye los tres principios por tarjetas de Instagram, WhatsApp y consulta odontológica; `styles.css` incorpora composición de escritorio en tres columnas y móvil en una, estilos de Reel y conversación. Se conserva el resto del contenido preexistente.
- Recursos: `assets/consulta-oportunidad.jpg`, imagen ilustrativa generada con IA; procedencia documentada en `docs/ASSETS.md`. Original de trabajo conservado en `tmp/consulta-oportunidad-original.png`, fuera de la carpeta pública.
- Verificación: tres tarjetas detectadas, referencias de imágenes locales comprobadas, atributos alt presentes y llaves CSS equilibradas. Imagen generada inspeccionada.
- Limitación: no se verificó la composición en navegador; el servidor local no fue autorizado y la política del navegador impide abrir URLs file. No se reintentaron esas acciones.

## 2026-10-08 00:08:54 -0500 — Tarjetas con apariencia de redes sociales

- Estado: implementado localmente, sin publicar.
- Cambios: `index.html` incorpora iconos decorativos de interacción y presentación social para la consulta; `styles.css` sustituye las tarjetas rectangulares por marcos verticales con esquinas redondeadas, sombras, rotaciones leves y posiciones escalonadas. Se conserva separación entre columnas y los textos quedan fuera de los marcos. A 1000 px o menos se usa una columna; WhatsApp crece según su contenido.
- Verificación: HTML correctamente anidado, tres tarjetas y dos barras sociales presentes, imágenes locales existentes y llaves CSS equilibradas. No se ejecutó revisión visual en navegador por las restricciones de vista previa identificadas en la entrada anterior.

## 2026-10-08 00:15:50 -0500 — Video y fotografía de Kathy en tarjetas sociales

- Estado: completado localmente; sin publicación remota.
- Cambios: `index.html` incorpora `assets/Kathy video web.mp4` con controles nativos y reproducción manual en Instagram y `assets/kathy cliente.png` en consulta; actualiza la nota de procedencia. `styles.css` refina marcos, sombras, separación y desnivel de las tarjetas, ajusta WhatsApp al formato vertical y deja libres los controles del video. `docs/ASSETS.md` documenta los recursos del usuario.
- Verificación: referencias locales existentes, llaves CSS equilibradas y sintaxis JavaScript correcta. Vista previa en navegador: video cargado (6,63 segundos), foto visible, tres tarjetas sin intersección en escritorio de 1440 px y en móvil de 390 px, sin desbordamiento horizontal.

## 2026-10-08 00:24:31 -0500 — Reunión mensual de seguimiento y mejora

- Estado: implementado; verificación y publicación pendientes.
- Cambios: sección editorial después del sistema de medición y antes de la hoja de ruta; destaca 1 reunión mensual de hasta 1 hora, decisiones y prioridades, agenda desplegable y ciclo Medir → Revisar → Decidir → Ejecutar → Volver a medir. Resumen descargable y alcance de responsabilidades actualizados.
- Alcance: incorporación aplicada a la versión local y a la copia actualizada de GitHub; se conservan los cambios locales previos de video y fotografía sin incorporarlos a este envío.
- Verificación completada: compilación y sintaxis JavaScript correctas; sección revisada visualmente en escritorio y móvil, sin desbordamiento a 320/390/768/1440 px; agenda desplegable funcional y resumen descargable con duración y contenido de la reunión. Sin errores de ejecución.

## 2026-10-08 00:28:49 -0500 — Subida de la reunión mensual confirmada

- Estado: subida a GitHub completada; verificación final de despliegue pendiente.
- Referencia: commit `2a6e58a`, push a `main` confirmado.
- Dominio: la primera consulta devolvió HTTP 200 con la versión previa; la segunda comprobación fue rechazada por el usuario y no se repitió. La actualización se entrega al despliegue automático de Cloudflare.

## 2026-10-08 00:56:39 -0500 — Sincronización de cambios pendientes para Cloudflare

- Estado: integración completada; envío y comprobación pública pendientes.
- Motivo: publicar los cambios locales de la propuesta que faltaban en GitHub.
- Cambios: incorporados a la copia conectada a `Alumbra360/4pared`, rama `main`, los textos de portada, tarjetas sociales, estilos, video y fotografía de Kathy, imagen ilustrativa y documentación de recursos. Se conserva la reunión mensual ya publicada.
- Verificación: compilación Vue/TypeScript y Worker correcta; sintaxis JavaScript correcta; referencias locales del HTML comprobadas; paquete de Cloudflare validado con 64 assets, incluido el video de 6.534.019 bytes.

## 2026-10-08 00:59:49 -0500 — Envío a GitHub y despliegue automático iniciado

- Estado: push completado; confirmación final de publicación pendiente.
- Resultado: commit `6bb54e1` enviado a `main` de `Alumbra360/4pared`; avance remoto desde `2a6e58a`. GitHub confirmó `Workers Builds: 4pared` en progreso.
- Verificación: primera consulta pública mostró aún la versión anterior. Consultas posteriores de estado y URLs públicas rechazadas por el usuario; no se reintentaron. No se confirma la finalización del despliegue.
- Referencia: https://github.com/Alumbra360/4pared/commit/6bb54e1

## 2026-10-13 16:49:50 -0500 — Ajuste de entregables de la sección 2

- Estado: completado localmente.
- Cambios: eliminada la franja superior de cifras; detalles de formatos actualizados a 10 Reels, 6 Micro Reels, 5 fotografías profesionales y 4 carruseles. Alcance de publicación, resumen descargable y documentación sincronizados.
- Verificación: ausencia del bloque deliverables y cantidades correctas en datos interactivos; sintaxis JavaScript comprobada. No se realizó publicación remota.

## 2026-10-13 17:11:35 -0500 — Recorrido narrativo de la sección 03

- Estado: completado localmente; sin publicación remota.
- Motivo: convertir la ruta comercial existente en una historia visual de captación y atención.
- Cambios:
  - `index.html`: sustituida únicamente la sección `#sistema` e incorporadas referencias a los nuevos estilos y script. Siete capítulos: contenido, anuncio, landing, contacto, CRM, seguimiento y cita; protagonista ficticia Lucía, interfaces conceptuales y acciones entre etapas. Conservados íntegramente los tres desplegables estratégicos originales y la nota de medición, incluidos plazos y límites de IA.
  - `journey.css` y `journey.js`: escena fija en escritorios amplios con suficiente altura; capítulos con maquetas integradas en móvil y pantallas bajas. Activación por scroll, navegación directa y teclado, marcador de Lucía, movimiento reducido, altura estable de escena y contenido disponible sin JavaScript. Sin nuevas dependencias.
  - `assets/lucia-journey.webp` y `assets/kathy-journey.webp`: personaje generado en tres poses y derivado optimizado de la fotografía existente; aproximadamente 74 KB combinados. Procedencia y prompt en `docs/ASSETS.md`.
- Verificación: sintaxis JS y `git diff --check`; otras secciones idénticas byte a byte respecto al inicio de esta tarea. Chromium: siete etapas por clic, acciones entre maquetas, flechas/Home/End y scroll en ambos sentidos; responsive a 320/390/768/1024/1440 px; siete escenas visibles sin JS; texto base al 200 % a 390 px sin desbordamiento en la sección; navegación táctil de al menos 44 px; sin errores JS ni HTTP. Revisión de capturas de las escenas en escritorio y móvil. Se reutilizó el servidor local existente en el puerto 4173.
- Hallazgo ajeno al alcance: la tarjeta preexistente de WhatsApp en la sección de oportunidad desborda a 320 px. No se modificó; la sección 03 no presenta ese desbordamiento.
- Se conservaron cambios preexistentes en README, app.js, content.js, index.html, bitácora y .DS_Store.

## 2026-10-13 17:21:04 -0500 — Dashboard de medición y decisiones mensuales

- Estado: completado localmente; sin publicación remota.
- Motivo: aplicar el prompt adjunto a «Un mes de datos. Decisiones para avanzar.»; el recorrido de Lucía permanece intacto.
- Cambios:
  - `index.html`: rediseñada exclusivamente `#seguimiento-mensual`, con dashboard, selectores, KPIs comerciales prioritarios, indicadores de captación, curvas semanales, hitos, embudo, conclusiones y trazabilidad. Conservadas reunión mensual de hasta una hora, agenda original y ciclo de mejora.
  - `analytics.js`: cuatro periodos ficticios coherentes, prueba corta al finalizar mes 1, CRM desde mes 3 y seguimiento desde mes 4. Cálculos derivados, estados «Sin datos», comparación válida solo entre meses 3 y 4, interacción por clic y teclado, curvas activables, lectura semanal y tabla alternativa. Interpretaciones vinculadas al KPI y al periodo.
  - `analytics.css`: dashboard responsive, gráficos SVG, controles táctiles, ayudas desplegables, animación de entrada y soporte de movimiento reducido. Sin dependencias nuevas.
  - `docs/ANALYTICS.md`: contrato del adaptador, fórmulas, supuestos y requisitos de futura conexión a datos reales. No se implementaron integraciones externas.
- Verificación: Chromium, valores calculados en los cuatro periodos, datos ausentes y comparaciones, selección de KPIs, curvas (incluido estado vacío), lectura semanal por teclado, etapas del embudo, hitos y ayudas. Sin desbordamiento de esta sección a 320/390/768/1024/1440 px ni con texto al 200 % a 390 px; explicación alternativa visible sin JavaScript. Sin errores de ejecución. Capturas de escritorio y móvil revisadas; sintaxis JS y `git diff --check` correctos. Comparación byte a byte confirma que ninguna otra sección cambió respecto al inicio de esta solicitud.

## 2026-10-13 17:23:23 -0500 — Preparación de subida al repositorio

- Estado: integración y validación completadas; envío pendiente en esta entrada.
- Cambios: preparada una copia actualizada de `Alumbra360/4pared`, rama `main`, en `/private/tmp/4pared-publish-20261013`; incorporados recorrido interactivo, dashboard, recursos optimizados, documentación y ajustes locales previos de entregables. Excluido `.DS_Store`.
- `scripts/build-proposals.mjs` del repositorio remoto: ampliada la lista de archivos públicos para incluir los cuatro nuevos archivos CSS/JS. Este script no existe en la carpeta local de la propuesta; el cambio está en la copia de integración.
- Descripción del cambio: `docs/DESCRIPCION_CAMBIOS.md`.
- Verificación: `npm ci` y `npm run build` completados; compilaciones de cliente y Worker correctas, propuesta copiada al directorio público. No se alteró el lockfile de dependencias.
