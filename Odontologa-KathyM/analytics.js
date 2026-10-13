/* Illustrative data only. Replace this adapter with validated, attributed period data.
 * Null means unavailable, never zero. Weekly arrays contain non-cumulative events.
 * Comparison is permitted only for equal-duration periods with the same definitions. */
(() => {
 'use strict';
 const root = document.querySelector('.km-analytics');
 if (!root) return;
 const $ = s => root.querySelector(s);
 const periods = {
  1: {days:5,spend:50,reach:1800,impressions:2500,clicks:100,waClicks:12,visits:[80],conversations:[8],qualified:null,appointments:null,labels:['Prueba final'],context:'Mes 1 · Prueba ilustrativa de 5 días al finalizar el mes. Aún no hay un periodo completo comparable ni datos de CRM.',events:[['Inicio de prueba','La publicidad empieza al finalizar el mes 1. Este ejemplo cubre solo cinco días; todavía no permite establecer una tendencia.']]},
  2: {days:28,spend:100,reach:4200,impressions:6000,clicks:300,waClicks:36,visits:[50,60,55,75],conversations:[5,6,5,8],qualified:null,appointments:null,labels:['Sem. 1','Sem. 2','Sem. 3','Sem. 4'],context:'Mes 2 · 28 días ilustrativos de captación. Conversaciones verificadas por el equipo; sin datos de CRM en esta demostración. No comparable con la prueba corta del mes 1.',events:[['Primera semana completa','Observamos visitas y conversaciones para construir la línea base.'],['Revisión de mensajes','Ejemplo de revisión de dudas frecuentes para preparar nuevos contenidos.']]},
  3: {days:28,spend:180,reach:6500,impressions:10000,clicks:600,waClicks:70,visits:[100,120,140,120],conversations:[8,12,16,12],qualified:[4,7,10,7],appointments:[2,3,4,3],labels:['Sem. 1','Sem. 2','Sem. 3','Sem. 4'],context:'Mes 3 · 28 días ilustrativos. Se incorpora el CRM. Primera línea base comercial completa; sin comparación de KPIs con los meses de implementación previa.',events:[['S1 · CRM en marcha','Ejemplo de registro de contactos, información enviada y próximos pasos.'],['S3 · Revisión de landing','Ejemplo de ajuste de claridad del contacto. La evolución simultánea no demuestra causalidad.']]},
  4: {days:28,spend:200,reach:8000,impressions:12000,clicks:800,waClicks:90,visits:[150,170,160,160],conversations:[13,17,16,18],qualified:[8,11,9,12],appointments:[4,5,5,6],labels:['Sem. 1','Sem. 2','Sem. 3','Sem. 4'],context:'Mes 4 · 28 días ilustrativos, comparables con 28 días del mes 3. Respuestas y recordatorios según el proceso acordado. Todos los valores son ficticios.',events:[['S1 · Seguimiento','Ejemplo de respuestas y recordatorios desde el mes 4, según el proceso acordado.'],['S2 · Nueva creatividad','Ejemplo de cambio de anuncio. Contrastamos su rendimiento sin atribuirle por sí solo la variación de citas.'],['S4 · Revisión conjunta','Observamos contactos, citas y costos antes de decidir qué mantener, corregir o probar.']]}
 };
 const series = [
  {key:'visits',label:'Visitas a la landing',color:'#876321',dash:''},
  {key:'conversations',label:'Conversaciones',color:'#b44314',dash:''},
  {key:'qualified',label:'Contactos calificados',color:'#337060',dash:'7 4'},
  {key:'appointments',label:'Citas agendadas',color:'#6759a0',dash:'2 5'}
 ];
 const sum = list => Array.isArray(list) ? list.reduce((a,b)=>a+b,0) : null;
 const ratio = (a,b) => a === null || b === null || b === 0 ? null : a/b;
 const number = v => v === null ? 'Sin datos' : new Intl.NumberFormat('es-EC',{maximumFractionDigits:0}).format(v);
 const money = v => v === null ? 'Sin datos' : '$'+v.toFixed(2).replace('.',',');
 const percent = v => v === null ? 'Sin datos' : (v*100).toFixed(1).replace('.',',')+' %';
 const totals = p => ({visits:sum(p.visits),conversations:sum(p.conversations),qualified:sum(p.qualified),appointments:sum(p.appointments),cost:ratio(p.spend,sum(p.appointments))});
 let period='4',metric='appointments',step=3;
 const visible = new Set(['conversations','qualified','appointments']);
 const icons = ['<path d="M21 11a9 9 0 0 1-13 8l-5 2 1-5A9 9 0 1 1 21 11Z"/>','<circle cx="9" cy="8" r="4"/><path d="M2 21v-3a7 7 0 0 1 14 0m0-6 3 3 4-5"/>','<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v5m10-5v5M3 11h18m-13 5 3 3 5-5"/>','<circle cx="12" cy="12" r="9"/><path d="M15 8h-4a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4H9m3-10v12"/>'];
 const icon = i => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[i]}</svg>`;
 const kpis=[['conversations','Conversaciones iniciadas','Contactos nuevos con conversación verificada; no clics al botón de WhatsApp.'],['qualified','Contactos calificados','Contactos que cumplen los criterios de interés acordados con el equipo. Se registran en el CRM desde el mes 3.'],['appointments','Citas agendadas','Citas registradas y atribuibles al periodo. Agendamiento no equivale a asistencia.'],['cost','Costo por cita','Inversión publicitaria atribuible dividida por citas agendadas. Solo pauta, sin honorarios.']];
 function trend(key,p) {
  const values=key==='cost'?(period==='4'?[totals(periods[3]).cost,totals(p).cost]:null):p[key];
  if(!values || values.length<2)return '<span class="km-spark-empty">'+(key==='cost'?'Costo del periodo':'Aún sin tendencia')+'</span>';
  const max=Math.max(...values,1), points=values.map((v,i)=>`${i*102/(values.length-1)},${30-v/max*26}`).join(' ');
  return `<svg class="km-spark" viewBox="0 0 104 34" aria-hidden="true"><polyline points="${points}" fill="none" stroke="currentColor" stroke-width="2"/></svg>`;
 }
 function renderKpis() {
  const p=periods[period],t=totals(p),prev=period==='4'?totals(periods[3]):null;
  $('#km-kpis').innerHTML=kpis.map(([key,label,help],i)=>{
   const diff=prev&&prev[key]!==null&&prev[key]!==0?(t[key]-prev[key])/prev[key]:null;
   const delta=diff===null?'Sin comparación disponible':`${diff>=0?'+':''}${percent(diff)} vs. mes 3`;
   return `<article class="km-kpi ${metric===key?'is-selected':''}"><button type="button" data-km-metric="${key}" aria-pressed="${metric===key}">${icon(i)}<span>${label}</span><strong>${key==='cost'?money(t[key]):number(t[key])}</strong><small>${delta}</small>${trend(key,p)}${key==='cost'&&period==='4'?'<span class="km-spark-caption">Mes 3 → Mes 4</span>':''}</button><details class="km-help"><summary aria-label="Cómo se mide: ${label}">i</summary><p>${help}</p></details></article>`;
  }).join('');
  $('#km-commercial').innerHTML=`<span>Contacto → cita <b>${percent(ratio(t.appointments,t.conversations))}</b></span><span>Costo por contacto <b>${money(ratio(p.spend,t.conversations))}</b></span><span>Clics hacia WhatsApp <b>${number(p.waClicks)}</b><small> ≠ conversaciones iniciadas</small></span>`;
  $('#km-kpis').querySelectorAll('[data-km-metric]').forEach(button=>button.addEventListener('click',()=>{
   metric=button.dataset.kmMetric;
   $('#km-kpis').querySelectorAll('[data-km-metric]').forEach(b=>{b.setAttribute('aria-pressed',String(b===button));b.closest('article').classList.toggle('is-selected',b===button);});renderInsights();
  }));
 }
 function renderChart() {
  const p=periods[period],n=p.labels.length;
  const selected=series.filter(s=>visible.has(s.key)&&p[s.key]);
  const max=Math.max(5,...selected.flatMap(s=>p[s.key]));const ceiling=Math.ceil(max/4/5)*5*4;
  const compact=matchMedia('(max-width:600px)').matches, width=compact?400:800, left=compact?32:56, right=width-24;
  $('#km-chart').setAttribute('viewBox',`0 0 ${width} 300`);
  const x=i=>n===1?(left+right)/2:left+i*(right-left)/(n-1), y=v=>250-v/ceiling*220;
  let svg='<title id="km-chart-title">Evolución semanal de la simulación</title><desc id="km-chart-desc">Cantidades no acumuladas. Consulta cada semana o la tabla para leer todos los valores.</desc>';
  for(let i=0;i<5;i++){const v=ceiling*i/4;svg+=`<line x1="${left}" x2="${right}" y1="${y(v)}" y2="${y(v)}" stroke="#dedfd7"/><text x="${left-10}" y="${y(v)+4}" text-anchor="end">${v}</text>`;}
  const eventWeeks = period==='4'?[0,1,3]:period==='3'?[0,2]:period==='2'?[0,1]:[0];
  eventWeeks.forEach((week,i)=>{svg+=`<line x1="${x(week)}" x2="${x(week)}" y1="20" y2="250" stroke="#b4bea7" stroke-dasharray="3 5"/><text x="${x(week)}" y="16" text-anchor="middle">◇</text>`;});
  p.labels.forEach((label,i)=>{svg+=`<text x="${x(i)}" y="282" text-anchor="${i===0&&n>1?'start':i===n-1&&n>1?'end':'middle'}">${label}</text>`;});
  selected.forEach(s=>{
   const values=p[s.key];let d=`M${x(0)},${y(values[0])}`;
   for(let i=1;i<values.length;i++){const mid=(x(i-1)+x(i))/2;d+=` C${mid},${y(values[i-1])} ${mid},${y(values[i])} ${x(i)},${y(values[i])}`;}
   svg+=`<path class="km-curve" d="${d}" fill="none" stroke="${s.color}" stroke-width="3" stroke-dasharray="${s.dash}"/>`;
   values.forEach((v,i)=>{svg+=`<circle cx="${x(i)}" cy="${y(v)}" r="4" fill="${s.color}" stroke="#fff" stroke-width="2"/>`;});
  });
  if(!selected.length)svg+=`<text x="${width/2}" y="145" text-anchor="middle">Activa una curva para explorar.</text>`;
  $('#km-chart').innerHTML=svg;
  $('#km-chart-hitareas').style.gridTemplateColumns=`repeat(${n},1fr)`;
  $('#km-chart-hitareas').innerHTML=p.labels.map((label,i)=>`<button type="button" data-km-week="${i}" aria-label="Consultar ${label}"><span>${label}</span></button>`).join('');
  const reading=i=>{
   $('#km-chart-reading').textContent=p.labels[i]+' · '+(selected.length?selected.map(s=>`${s.label}: ${number(p[s.key][i])}`).join(' · '):'Ninguna curva activa.');
   $('#km-chart-hitareas').querySelectorAll('button').forEach((b,j)=>b.classList.toggle('is-active',i===j));
  };
  $('#km-chart-hitareas').querySelectorAll('button').forEach(b=>{['pointerenter','focus','click'].forEach(event=>b.addEventListener(event,()=>reading(Number(b.dataset.kmWeek))));});
  reading(n-1);
  $('#km-data-table').innerHTML='<caption>Cantidades semanales no acumuladas · Datos de ejemplo</caption><thead><tr><th scope="col">Periodo</th>'+series.map(s=>`<th scope="col">${s.label}</th>`).join('')+'</tr></thead><tbody>'+p.labels.map((label,i)=>`<tr><th scope="row">${label}</th>${series.map(s=>`<td>${number(p[s.key]?p[s.key][i]:null)}</td>`).join('')}</tr>`).join('')+'</tbody>';
 }
 function renderLegend(){
  const p=periods[period];
  $('#km-legend').innerHTML=series.map(s=>`<button type="button" data-km-curve="${s.key}" aria-pressed="${visible.has(s.key)&&!!p[s.key]}" ${!p[s.key]?'disabled':''} style="--series-color:${s.color}"><span aria-hidden="true">${visible.has(s.key)&&p[s.key]?'✓':'+'}</span>${s.label}${!p[s.key]?' · Sin datos':''}</button>`).join('');
  $('#km-legend').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{const key=b.dataset.kmCurve;visible.has(key)?visible.delete(key):visible.add(key);b.setAttribute('aria-pressed',String(visible.has(key)));b.querySelector('span').textContent=visible.has(key)?'✓':'+';renderChart();}));
 }
 function renderFunnel(){
  const p=periods[period],t=totals(p);const stages=[['Publicidad',p.clicks,'clics'],['Landing',t.visits,'visitas'],['Contactos',t.conversations,'conversaciones verificadas'],['Citas',t.appointments,'agendadas']];
  const tips=['Revisar creatividad, mensaje y segmentación junto con el CTR y el costo por clic.','Revisar carga, claridad del servicio y trazabilidad de visitas antes de interpretar diferencias con los clics.','Revisar el camino al contacto y la atención. Un clic hacia WhatsApp no confirma una conversación.','Revisar disponibilidad, dudas pendientes y seguimiento. Registrar también asistencia; agendar no equivale a atender.'];
  $('#km-funnel').innerHTML=stages.map(([name,value,unit],i)=>`<button type="button" data-km-step="${i}" aria-pressed="${step===i}"><span class="km-funnel-title">${icon(i)}<b>${name}</b><strong>${number(value)}</strong></span><span class="km-funnel-track"><span style="width:${value===null?0:value/p.clicks*100}%"></span></span><span class="km-funnel-meta">${unit}<span>${i<3?percent(ratio(stages[i+1][1],value))+' al siguiente paso':'Resultado comercial'}</span></span></button>`).join('');
  const choose=i=>{$('#km-funnel-detail').textContent=stages[i][0]+' · '+tips[i];$('#km-funnel').querySelectorAll('button').forEach((b,j)=>b.setAttribute('aria-pressed',String(j===i)));};
  $('#km-funnel').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{step=Number(b.dataset.kmStep);choose(step);}));choose(step);
 }
 function renderInsights(){
  const p=periods[period],t=totals(p);let good,friction,action;
  if(metric==='conversations'){
   good=`${number(t.conversations)} conversaciones verificadas de ${number(t.visits)} visitas: una relación del ${percent(ratio(t.conversations,t.visits))} en este ejemplo.`;
   friction=`Se registran ${p.waClicks} clics hacia WhatsApp y ${t.conversations} conversaciones. Son eventos distintos; la diferencia requiere revisar duplicados y trazabilidad.`;
   action='Contrastar los clics y las conversaciones verificadas cada semana. Probar un mensaje de contacto más claro y comparar su tasa con la línea base.';
  }else if(metric==='qualified'){
   good=t.qualified===null?'Aún no hay datos de calificación disponibles. La captación permite comenzar a conocer las necesidades de los contactos.':`${t.qualified} de ${t.conversations} contactos cumplen los criterios de calificación del ejemplo (${percent(ratio(t.qualified,t.conversations))}).`;
   friction=t.qualified===null?'Sin un criterio registrado no podemos distinguir el interés general de una oportunidad calificada.':`${t.conversations-t.qualified} contactos no figuran como calificados. Antes de descartarlos, hay que revisar motivos e información pendiente.`;
   action='Acordar criterios de calificación y registrar el motivo de cada estado en el CRM desde el mes 3. Revisar la proporción de contactos con estado completo.';
  }else if(metric==='cost'){
   good=t.cost===null?'La inversión publicitaria está registrada. Todavía faltan citas atribuibles para calcular su costo.':`La inversión ilustrativa es de ${money(p.spend)} y el costo por cita es de ${money(t.cost)}.`;
   friction=t.cost===null?'Sin citas registradas y atribución consistente no hay un costo por cita fiable.':'El costo por cita por sí solo no demuestra rentabilidad. Faltan asistencia, ingresos y costos de atención.';
   action='Revisar pauta atribuible, citas y asistencia antes de cambiar presupuesto. Comparar el costo por cita entre ventanas de igual duración y con el mismo criterio.';
  }else{
   good=t.appointments===null?'Hay conversaciones registradas, pero todavía no contamos con un registro de citas en esta simulación.':`${t.appointments} citas de ${t.conversations} contactos: ${percent(ratio(t.appointments,t.conversations))} de conversión.`+(period==='4'?` En el mes 3 ilustrativo fueron 12 de 48 (25,0 %).`:'');
   friction=t.appointments===null?'Sin datos de citas, no podemos medir la conversión comercial. No significa que haya cero citas.':`${t.conversations-t.appointments} contactos no aparecen vinculados a una cita. Pueden estar pendientes, fuera de disponibilidad o no avanzar; revisamos sus motivos.`;
   action='Registrar el siguiente paso de cada contacto y revisar las dudas que frenan el agendamiento. Comparar contacto → cita el próximo periodo, junto con asistencia.';
  }
  $('#km-insight-context').textContent=`Lectura de ejemplo · ${kpis.find(k=>k[0]===metric)[1]} · Mes ${period}`;
  $('#km-insights').innerHTML=[['01','Qué funcionó',good],['02','Qué debemos mejorar',friction],['03','Qué haremos el próximo mes',action]].map(([n,title,text])=>`<article><span>${n}</span><h4>${title}</h4><p>${text}</p></article>`).join('');
 }
 function render(){
  const p=periods[period];$('#km-period-context').textContent=p.context;
  renderKpis();renderLegend();renderChart();renderFunnel();renderInsights();
  const capture=[['Alcance publicitario',number(p.reach)+' personas'],['Impresiones',number(p.impressions)],['Clics en anuncios',number(p.clicks)],['CTR · clics / impresiones',percent(ratio(p.clicks,p.impressions))],['CPC · costo por clic',money(ratio(p.spend,p.clicks))],['Visitas a la landing',number(sum(p.visits))]];
  $('#km-capture-metrics').innerHTML=capture.map(([label,value])=>`<div><dt>${label}</dt><dd>${value}</dd></div>`).join('');
  $('#km-spend').textContent=`Pauta ilustrativa: ${money(p.spend)} USD · ${p.days} días. Presupuesto separado del servicio de 4PARED.`;
  $('#km-events').innerHTML=p.events.map(([label],i)=>`<button type="button" data-km-event="${i}" aria-pressed="${i===0}"><span aria-hidden="true">◇</span> ${label}</button>`).join('');
  $('#km-event-detail').textContent=p.events[0][1];
  $('#km-events').querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{$('#km-event-detail').textContent=p.events[Number(b.dataset.kmEvent)][1];$('#km-events').querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));}));
 }
 $('#km-period').addEventListener('change',e=>{period=e.target.value;render();});
 render();$('.km-live').hidden=false;
 matchMedia('(max-width:600px)').addEventListener('change',renderChart);
 if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){root.classList.add('km-in-view');observer.disconnect();}},{threshold:.08});observer.observe($('#km-dashboard'));}else root.classList.add('km-in-view');
})();
