'use strict';
const $ = (selector) => document.querySelector(selector);
const data = window.proposal;
function activateTabs(buttons, activate) {
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => activate(index));
    button.addEventListener('keydown', (event) => {
      let next;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % buttons.length;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + buttons.length) % buttons.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = buttons.length - 1;
      if (next !== undefined) { event.preventDefault(); activate(next); buttons[next].focus(); }
    });
  });
}
function selectTab(buttons, index) {
  buttons.forEach((button, i) => { button.setAttribute('aria-selected', String(i === index)); button.tabIndex = i === index ? 0 : -1; });
}
function setList(element, items) { element.replaceChildren(...items.map(text => { const li=document.createElement('li');li.textContent=text;return li; })); }
const formatButtons = [...document.querySelectorAll('[data-format]')];
function showFormat(index) {
  selectTab(formatButtons,index);
  const button = formatButtons[index], format = data.formats[button.dataset.format];
  $('#format-panel').setAttribute('aria-labelledby',button.id);
  $('#format-count').textContent=format.count; $('#format-title').textContent=format.title;
  $('#format-description').textContent=format.description; setList($('#format-features'),format.features);
  $('#mock-kicker').textContent=format.kicker; $('#mock-title').innerHTML=format.headline; $('#mock-footer').textContent=format.footer;
  $('.phone').dataset.format=button.dataset.format;
}
activateTabs(formatButtons,showFormat);
const monthButtons = data.months.map((month,index)=> {
  const button=document.createElement('button'); button.id=`month-${index}`; button.type='button'; button.setAttribute('role','tab');button.setAttribute('aria-controls','month-panel');button.innerHTML=`<span>MES ${index+1}</span><strong>${month.name}</strong>`;$('#month-tabs').append(button);return button;
});
function showMonth(index) {
  selectTab(monthButtons,index); const month=data.months[index];
  $('#month-panel').setAttribute('aria-labelledby',`month-${index}`);
  $('#month-index').textContent=String(index+1).padStart(2,'0');$('#month-eyebrow').textContent=`MES ${index+1} · ${month.name.toUpperCase()}`;
  $('#month-title').textContent=month.title;$('#month-description').textContent=month.description;setList($('#month-items'),month.items);
}
activateTabs(monthButtons,showMonth);showMonth(0);
$('#ad-budget').addEventListener('input',event=>{const budget=Number(event.target.value);$('#ad-value').textContent=`$${budget}`;$('#budget-total').innerHTML=`$${500+budget} <small>USD</small>`;$('#budget-breakdown').textContent=`$500 de servicio + $${budget} de pauta`;});
const dialog=$('#next-dialog');$('#open-next').addEventListener('click',()=>dialog.showModal());$('#close-next').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
const message='Hola, equipo de 4PARED. Me gustaría conversar sobre el Programa de Crecimiento Comercial para Odontóloga Kathy M y confirmar los próximos pasos.';
if (/^\d{8,15}$/.test(data.contact.whatsapp) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contact.email)) {
 const link=$('#contact-link');link.hidden=false;link.href=data.contact.whatsapp?`https://wa.me/${data.contact.whatsapp}?text=${encodeURIComponent(message)}`:`mailto:${data.contact.email}?subject=${encodeURIComponent('Propuesta Kathy M × 4PARED')}&body=${encodeURIComponent(message)}`;link.target='_blank';link.rel='noopener noreferrer';$('#contact-note').textContent='Abre la conversación para confirmar alcance y disponibilidad. No implica contratación automática.';
}
$('#download-summary').addEventListener('click',()=>{
 const summary=`4PARED 360 × ODONTÓLOGA KATHY M\nPrograma de Crecimiento Comercial para Marca Personal\n\nPRODUCCIÓN MENSUAL\n8 Reels, 3 Micro Reels, 5 fotografías profesionales y 3 carruseles.\nPublicación: Reels, Micro Reels y carruseles. Historias a cargo de la profesional.\n1 jornada mensual de hasta 5 horas. Segunda jornada de apoyo si es necesaria para completar la producción planificada.\n1 ronda de cambios por pieza o entrega.\nContenido específico para publicidad: volumen a acordar.\n\nREUNIÓN MENSUAL DE SEGUIMIENTO\n1 reunión incluida cada mes de hasta 1 hora entre 4PARED y la profesional o su equipo.\nRevisamos contenido, campañas, landing, leads, oportunidades, citas solicitadas y agendadas, objeciones, fricciones, servicios promocionados, CRM, automatizaciones y aprendizajes.\nAcordamos qué mantener, corregir y probar; qué contenido reforzar; qué campañas ajustar; qué procesos mejorar; qué inversión publicitaria mantener, reducir o incrementar; y las prioridades del siguiente mes.\nMedir → Revisar → Decidir → Ejecutar → Volver a medir.\n\nETAPAS\n${data.months.map((m,i)=>`Mes ${i+1}: ${m.name}. ${m.description}`).join('\n')}\nMeses 6–12: optimización continua.\n\nINVERSIÓN 4PARED\nMes 1: $100 USD\nMes 2: $200 USD\nMes 3: $300 USD\nMes 4: $400 USD\nMes 5: $500 USD\nTotal primeros 5 meses: $1.500 USD, solo servicio.\nTarifa desde el mes 6 e impuestos: pendientes de confirmar antes de formalizar.\n\nPAUTA Y EXTERNOS\nPauta adicional pagada directamente por el cliente: prueba inicial aproximada de $50. Escala posterior de referencia de $100 a $500 según resultados, no automática. Licencias, API de WhatsApp y terceros adicionales según necesidad y alcance acordado.\n\nCONDICIONES\nPago 100 % al inicio de cada mes. Permanencia mínima propuesta: 12 meses. No se garantiza una cantidad específica de pacientes. Las metas se definirán con datos y colaboración del equipo de atención.\n\nPRÓXIMOS PASOS\nElegir servicios prioritarios; confirmar alcance, continuidad e impuestos; acordar accesos y jornada.\nDocumento para conversación comercial. No confirma contratación ni envía mensajes.\n`;
 const url=URL.createObjectURL(new Blob([summary],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='4PARED-KathyM-resumen.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);$('#download-status').textContent='Resumen preparado para descargar.';
});
if ('IntersectionObserver' in window) {
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:0.08});
 document.querySelectorAll('.section-heading,.principles,.production,.month-panel').forEach(element=>{element.classList.add('reveal');observer.observe(element);});
}
