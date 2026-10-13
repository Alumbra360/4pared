# Dashboard de seguimiento mensual

La sección `#seguimiento-mensual` es una demostración comercial, no un panel conectado. `analytics.js` contiene un adaptador local `periods`, funciones de cálculo y renderizadores independientes de KPIs, curvas, embudo e interpretaciones. `analytics.css` está limitado a esta sección.

## Contrato para una futura fuente de datos

Cada periodo aporta `days`, inversión publicitaria atribuible en USD (`spend`), alcance (`reach`), impresiones (`impressions`), clics de anuncios (`clicks`), clics hacia WhatsApp (`waClicks`), etiquetas temporales (`labels`) y series semanales **no acumuladas**: `visits`, `conversations`, `qualified`, `appointments`. Las series deben compartir longitud y ventanas. `null` significa indisponible; cero solo debe representar una medición real de cero. `events` contiene hitos y explicaciones verificadas.

Antes de conectar Meta Ads, analítica web o CRM: normalizar ventanas temporales y de atribución, moneda, definición de clic, deduplicación de contactos y criterios de calificación. Verificar que las citas y la inversión pertenezcan al mismo origen. Las funciones de interpretación actuales son para el conjunto de demostración; sus referencias a los meses 3 y 4 deben reemplazarse por comparaciones validadas de la fuente real.

## Simulación y cálculos

- Mes 1: cinco días de prueba al terminar el mes, $50 ilustrativos. No se dibuja una tendencia con un solo punto.
- Mes 2: 28 días de captación. Sin calificación ni citas en este conjunto, no ceros asumidos.
- Mes 3: 28 días con CRM; primera línea base comercial completa.
- Mes 4: 28 días con seguimiento; única comparación habilitada frente al mes 3. Los criterios y ventanas del ejemplo son iguales.
- CTR = clics / impresiones; CPC = pauta / clics.
- Contacto = contacto nuevo deduplicado con conversación verificada. Un clic hacia WhatsApp no demuestra conversación.
- Costo por contacto = pauta atribuible / contactos. Costo por cita = pauta atribuible / citas agendadas. Solo inversión publicitaria, no honorarios ni terceros.
- Conversión de contacto a cita = citas / contactos, no citas / contactos calificados.
- Las curvas representan cantidades por semana. El minigráfico de costo por cita compara totales de los meses 3 y 4; se identifica debajo.
- Si falta una magnitud o el denominador es cero, las funciones de razón muestran «Sin datos».
- El embudo parte de clics, no de alcance. Sus barras usan el mismo denominador visual (clics) y cada tasa usa la etapa anterior. No se afirma que todos los eventos sean personas únicas ni que una variación demuestre causalidad.

Se conservan la reunión incluida de hasta una hora, la agenda de revisión y el ciclo de mejora. No hay conexiones, envíos de información ni persistencia externa.
