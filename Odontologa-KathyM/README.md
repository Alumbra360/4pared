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

La política vigente permite indexación de la web principal y de Kathy M por solicitud explícita del propietario. El HTML declara `index, follow`, robots.txt permite rastreo y no se envía X-Robots-Tag noindex. La inclusión efectiva en buscadores depende de sus procesos y no se garantiza por estas reglas. Las entradas históricas de la bitácora conservan la política anterior, ahora sustituida.

## Integración con el Worker principal

La compilación del repositorio ahora copia la página y sus assets a `dist/Odontologa-KathyM/`. Al desplegar esa compilación, la propuesta queda accesible en `/Odontologa-KathyM/`. No se copian bitácoras, documentación ni archivos de configuración de la propuesta al directorio público. Esta integración sustituye la limitación de despliegue descrita en las entradas históricas anteriores.

## Reunión mensual de seguimiento

Incluye una reunión cada mes de hasta 1 hora con la profesional o su equipo. La sección `#seguimiento-mensual` presenta revisión de indicadores, agenda desplegable, decisiones del próximo período y ciclo de mejora continua. También se incluye en el resumen descargable y en las responsabilidades de 4PARED.
