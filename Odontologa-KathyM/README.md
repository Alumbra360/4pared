# Odontóloga Kathy M × 4PARED

Propuesta comercial interactiva, desarrollada como sitio estático independiente. No requiere instalar dependencias ni compilar. Todos los recursos se sirven localmente.

## Ver la página

Abrir `index.html` en un navegador, o ejecutar desde esta carpeta:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Vista previa: http://127.0.0.1:4173. El servidor debe permanecer en ejecución para esa URL. No se ha publicado en internet.

## Archivos

- `index.html`: estructura, narrativa, inversión y condiciones.
- `styles.css`: identidad, composición responsive, animaciones y adaptación de accesibilidad.
- `content.js`: formatos, etapas y contacto de WhatsApp configurable.
- `app.js`: pestañas accesibles, simulador de pauta, diálogo y resumen descargable.
- `assets/`: logo y tipografía reutilizados del kit local de 4PARED; dos versiones WebP de la imagen conceptual.
- `docs/ASSETS.md`: procedencia y prompt de la imagen.
- `REGISTRO_CAMBIOS.md`: bitácora de implementación y validaciones.

## Decisiones comerciales

La fuente es el plan aportado en esta conversación. Se conservan los 8 Reels, 3 Micro Reels, 5 fotografías y 3 carruseles mensuales; jornada de hasta 5 horas; publicación especificada; una revisión; pauta separada; mensualidades de $100 a $500; total inicial de $1.500; pago mensual anticipado y permanencia propuesta de 12 meses.

El documento no define tarifa desde el mes 6, tratamiento de impuestos ni cantidad adicional de piezas publicitarias. Se presentan como aspectos a confirmar, sin inventar importes o volúmenes. No se atribuyen resultados, testimonios ni casos realizados.

El WhatsApp facilitado, 0962154993, se configuró como +593962154993 usando Ecuador. El botón prepara un mensaje; únicamente el visitante decide enviarlo. No se enviaron mensajes durante las pruebas.

La imagen es una referencia generada con IA, no el consultorio de Kathy M. Los ejemplos de formatos son maquetas, no videos reproducibles ni portafolio verificado. Los videos preexistentes eran recursos de referencia sin identificación suficiente para presentarlos como trabajos reales odontológicos.

## Comprobaciones

- Sintaxis JavaScript correcta.
- Navegador Chromium: sin desbordamiento horizontal a 320, 390, 768, 1024 y 1440 px.
- Texto ampliado al 200 %: sin desbordamiento a 390 y 1440 px.
- Pestañas por clic y teclado, simulador, diálogo con cierre por Escape, enlace de WhatsApp y descarga comprobados.
- Recursos sin errores HTTP y ejecución sin errores JavaScript.
- Respeto de preferencia de movimiento reducido.
- Revisión visual mediante capturas de escritorio, móvil, formatos e inversión.

No se midieron Core Web Vitals reales de producción ni se realizó una certificación completa de accesibilidad. La página incluye `noindex,nofollow` por tratarse de una propuesta para una cliente; esto no equivale a control de acceso.

## Indexación y rastreo

El HTML declara `noindex, nofollow, noarchive, nosnippet, noimageindex`. `_headers` añade `X-Robots-Tag` a todas las respuestas cuando esta carpeta se publica como raíz en Cloudflare Pages/Workers con recursos estáticos. `robots.txt` bloquea los agentes de recopilación y asistentes indicados, y permite que otros buscadores lean `noindex`. No se incluyen enlaces en la web principal ni entradas en sitemaps.

Para alojar bajo `/Odontologa-KathyM/`, el repositorio principal incorpora cabeceras limitadas a esa ruta y reglas en `public/robots.txt`; el resto del sitio conserva su indexabilidad. Un robots.txt dentro de una subcarpeta no controla el dominio. El servidor local de Python sirve el HTML con meta robots, pero no interpreta `_headers`.

Estas reglas no ocultan la URL ni impiden el acceso de robots que las ignoran. Para confidencialidad real se requiere autenticación del lado del servidor (por ejemplo Cloudflare Access). Si el repositorio GitHub es público, estas reglas no protegen sus archivos. No se cambió la visibilidad del repositorio. Las cabeceras y robots del alojamiento deben verificarse después de un despliegue; este cambio no despliega la propuesta.

Referencias: https://developers.google.com/search/docs/crawling-indexing/block-indexing y https://developers.cloudflare.com/workers/static-assets/headers/
