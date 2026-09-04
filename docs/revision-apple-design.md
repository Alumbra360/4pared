# Revisión de diseño: 4PARED

## Resumen

Evaluación inicial: necesita mejoras de legibilidad e interacción. Se aplicaron los principios de apple-design a la web Vue de 4PARED, conservando la fotografía editorial, el naranja de marca y el enfoque audiovisual para marcas personales, tecnología y restaurantes.

Alcance: revisión del código y mejora de la portada, navegación, galería, video y adaptación móvil. No constituye una certificación de accesibilidad ni una prueba visual en dispositivos.

## Problemas prioritarios

### 1. Tamaño del texto y distribución adaptable — prioridad alta

**Qué:** las descripciones de fotografía usaban 14 px, varios datos de servicio 12 px y la portada combinaba altura fija, altura máxima y contenido oculto. Esto suponía un riesgo de recorte al ampliar texto.

**Por qué:** Design Guideline — Accessibility > Vision y Typography > Supporting scalable text: permitir ampliar el texto, mantener su jerarquía y adaptar la distribución sin truncar información útil. Layout > Adaptability: responder a cambios de tamaño y contexto.

**Cambio aplicado:** cuerpo de 1 rem, etiquetas habituales de 0,875 rem, titulares con escalas que combinan rem y ancho de pantalla. La portada crece con el contenido; acciones, créditos y pies pueden reorganizarse. Su nota de imagen conceptual ahora participa en el flujo normal. Se conserva el carácter editorial con Inter y Georgia.

### 2. Controles de galería y contexto de retorno — prioridad alta

**Qué:** los controles anterior/siguiente se reducían a 40 px de ancho en móvil; el cierre se comunicaba solo con un icono.

**Por qué:** Design Guideline — Accessibility > Mobility: controles suficientemente grandes y separados. Modality > Best practices: ofrecer una salida evidente y mantener la tarea breve y comprensible.

**Cambio aplicado:** controles de al menos 48 × 48 px, cierre con texto visible en una barra que permanece accesible al desplazar el diálogo, contador anunciado y restauración explícita del foco al elemento de origen. Se preservan Escape, flechas y el comportamiento modal nativo. El bloqueo de desplazamiento se restaura solo si la galería lo activó.

## Mejoras aplicadas

### Navegación y jerarquía — prioridad alta

**Qué:** las tres secciones estaban ocultas tras un menú móvil; la portada ofrecía una única entrada discreta.

**Por qué:** Design Guideline — Layout > Visual hierarchy: hacer visible lo esencial, diferenciar controles y contenido, y alinear elementos relacionados.

**Cambio aplicado:** Fotografía, Video y Nuestra meta permanecen visibles en una fila adaptable. Hablemos tiene un contorno reconocible. La portada distingue una acción principal, Explorar fotografía, y una secundaria, Ver video. El desplazamiento a secciones considera la altura real de la cabecera.

### Color, foco y preferencias — prioridad media

**Qué:** los estilos acumulaban variaciones de tamaño, colores y estados; faltaban respuestas a preferencias de contraste y transparencia.

**Por qué:** Design Guideline — Color > Best practices e Inclusive color: colores coherentes, diferenciación perceptible y señales adicionales al color. Accessibility > Cognitive: reducir movimiento cuando se solicite.

**Cambio aplicado:** variables semánticas para superficies y texto, foco visible según la superficie, controles delimitados y enlace Ampliar permanente. Se respetan movimiento reducido, contraste aumentado y transparencia reducida.

Contrastes calculados con luminancia relativa sRGB para parejas de colores sólidos:

| Uso | Colores | Relación |
| --- | --- | --- |
| Texto principal oscuro | #F2F0E9 / #111210 | 16,47:1 |
| Texto secundario oscuro | #B8B9B0 / #111210 | 9,49:1 |
| Texto secundario claro | #57594F / #F2F0E9 | 6,25:1 |
| Acción naranja | #161713 / #FF5000 | 5,49:1 |
| Categorías de fotografía | #753019 / #F2F0E9 | 8,40:1 |
| Categorías de video | #FF874F / #111210 | 7,90:1 |

Estas mediciones no cubren texto sobre cada píxel de las fotografías. La portada utiliza una capa oscura para reforzar la legibilidad.

### Video — prioridad media

**Por qué:** Design Guideline — Playing Video > Best practices: utilizar controles conocidos, respetar proporciones y mantener la información adicional fuera del contenido.

**Cambio aplicado:** se conserva el reproductor nativo sin reproducción automática, con créditos legibles y controles de recuperación más grandes. Se captura también el error de la fuente MP4 para mostrar la alternativa de reintentar o abrir el archivo.

## Aspectos positivos conservados

- Fotografías protagonistas y composición asimétrica acorde con una productora audiovisual.
- Ejemplos concretos para tres sectores de negocio.
- Identificación explícita de imágenes conceptuales y video de referencia.
- Tipografía local, imágenes adaptables y carga diferida de la galería.
- Contacto pendiente identificado con honestidad, sin inventar canales.

## Notas por plataforma

Se adaptaron los principios HIG al navegador: enlaces HTML, navegación superior, diálogo y video nativos, unidades rem, preferencias CSS y áreas seguras en cabecera y pie. Se conserva la composición clara/oscura de marca; no se añadió un selector de apariencia ni componentes propios de aplicaciones nativas.

La versión móvil muestra las secciones sin necesitar abrir un menú. En escritorio se mantiene una cabecera compacta y una galería editorial. Los títulos pueden ocupar más líneas al aumentar el texto.

## Validación y límites

Completadas la comprobación TypeScript, la compilación de cliente y Worker, la revisión de espacios del diff y los cálculos de contraste indicados. No se realizaron capturas, navegación automatizada, pruebas con lector de pantalla ni verificación visual al 200 %. Esas comprobaciones siguen pendientes; no se afirma conformidad integral con WCAG. La versión permanece local conforme a la preferencia previa del usuario.

## Referencias consultadas

Referencias incluidas en la skill apple-design, apartados citados arriba:

- [Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility)
- [Color](https://developer.apple.com/design/human-interface-guidelines/color)
- [Layout](https://developer.apple.com/design/human-interface-guidelines/layout)
- [Typography](https://developer.apple.com/design/human-interface-guidelines/typography)
- [Modality](https://developer.apple.com/design/human-interface-guidelines/modality)
- [Playing Video](https://developer.apple.com/design/human-interface-guidelines/playing-video)
