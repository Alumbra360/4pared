<script setup lang="ts">
import { ArrowDown, ArrowUpRight, ArrowRight } from '@lucide/vue'
import SiteHeader from '@/components/SiteHeader.vue'
import { contact, contactLink } from '@/contact'
const services = [
  { n: '01', title: 'Estrategia que da dirección.', description: 'Encontramos lo que hace diferente a tu negocio y lo convertimos en un mensaje claro. Una base para decidir qué decir, a quién y cómo.', tags: ['Estrategia de marca', 'Posicionamiento', 'Plan de comunicación'] },
  { n: '02', title: 'Identidad que se reconoce.', description: 'Damos forma a la personalidad de tu marca. Una identidad visual y verbal que se siente propia en cada punto de contacto.', tags: ['Identidad visual', 'Voz de marca', 'Diseño gráfico'] },
  { n: '03', title: 'Contenido que conecta.', description: 'Llevamos las ideas a los canales donde tu audiencia está. Mensajes y piezas que construyen una conversación coherente alrededor de tu negocio.', tags: ['Redes sociales', 'Contenido digital', 'Campañas'] },
]
const steps = [
  { n: '01', title: 'Escuchamos.', text: 'Tu negocio, tus objetivos y las personas a las que quieres llegar. Todo empieza por entender.' },
  { n: '02', title: 'Damos forma.', text: 'Aterrizamos una dirección clara y la traducimos en ideas, mensajes y diseño.' },
  { n: '03', title: 'Lo ponemos en marcha.', text: 'Conectamos las piezas, acompañamos la ejecución y ajustamos el siguiente paso.' },
]
</script>
<template>
  <a class="skip-link" href="#contenido">Ir al contenido</a>
  <SiteHeader />
  <main id="contenido">
    <section id="inicio" class="hero" aria-labelledby="hero-title">
      <div class="hero-copy"><p class="eyebrow"><span class="status-dot"/> ESTRATEGIA QUE SE VE. IDEAS QUE MUEVEN.</p>
        <h1 id="hero-title">Tu marca.<br/>Su siguiente<br/><span>gran paso.</span></h1>
        <p class="hero-description">Conectamos estrategia y creatividad para que tu negocio comunique con claridad y avance con dirección.</p>
        <a href="#servicios" class="primary-link">Descubre qué podemos hacer <ArrowUpRight aria-hidden="true" :size="20"/></a>
      </div>
      <div class="hero-art"><img src="/brand/avance.webp" alt="Cuatro planos abiertos enmarcan un triángulo naranja que apunta hacia adelante" width="1536" height="1024" fetchpriority="high"/><span class="art-caption">UNA NUEVA PERSPECTIVA <span aria-hidden="true">↗</span></span></div>
      <div class="hero-bottom"><span>Comunicación estratégica para tu negocio</span><a href="#servicios"><ArrowDown :size="17" aria-hidden="true"/> Sigue la idea</a></div>
    </section>
    <section id="servicios" class="services-section section-wrap" aria-labelledby="services-title">
      <div class="section-heading"><p class="eyebrow section-label">01 / QUÉ HACEMOS</p><div><h2 id="services-title">De una buena idea<br/>a una marca que <em>se siente.</em></h2><p class="section-intro">Estrategia, identidad y comunicación.<br/>Tres formas de impulsar una misma marca: la tuya.</p></div></div>
      <div class="services-list"><article v-for="service in services" :key="service.n" class="service-row"><span class="service-number">{{ service.n }}</span><h3>{{ service.title }}</h3><div class="service-detail"><p>{{ service.description }}</p><ul class="service-tags" aria-label="Áreas de trabajo"><li v-for="tag in service.tags" :key="tag">{{ tag }}</li></ul></div><ArrowUpRight :size="26" class="service-arrow" aria-hidden="true"/></article></div>
    </section>
    <section id="enfoque" class="approach-section dark" aria-labelledby="approach-title"><div class="section-wrap approach-inner"><div><p class="eyebrow">02 / NUESTRO ENFOQUE</p><h2 id="approach-title">Miramos el conjunto.<br/><span>Cuidamos<br/>cada detalle.</span></h2><p class="approach-text">Una marca no vive solo en un logo. Vive en lo que dice, en cómo se ve y en lo que las personas sienten cuando se encuentran con ella.</p></div><div class="approach-aside"><span class="perspective" aria-label="Una perspectiva de 360 grados">360<span>°</span></span><p>Una mirada integral.<br/>Una dirección compartida.</p><div class="approach-principles"><span>Claridad</span><span>Coherencia</span><span>Intención</span></div></div></div></section>
    <section id="proceso" class="process-section section-wrap" aria-labelledby="process-title"><div class="process-heading"><p class="eyebrow section-label">03 / CÓMO TRABAJAMOS</p><h2 id="process-title">Primero entendemos.<br/>Después, <em>hacemos que pase.</em></h2></div><div class="steps"><article v-for="step in steps" :key="step.n"><div class="step-top"><span>{{ step.n }}</span><ArrowRight :size="24" aria-hidden="true"/></div><h3>{{ step.title }}</h3><p>{{ step.text }}</p></article></div></section>
    <section id="contacto" class="contact-section" aria-labelledby="contact-title"><div class="section-wrap contact-inner"><p class="eyebrow">EL SIGUIENTE PASO EMPIEZA AQUÍ.</p><div class="contact-main"><h2 id="contact-title">Tu próxima<br/>gran idea.<br/><span>Hagámosla avanzar.</span></h2><div class="contact-side"><ArrowUpRight :size="74" :stroke-width="1.1" aria-hidden="true"/><p>Cuéntanos en qué punto está tu negocio y a dónde quieres llegar.</p><a v-if="contactLink" :href="contactLink" class="contact-action" :target="contact.whatsapp ? '_blank' : undefined" :rel="contact.whatsapp ? 'noopener noreferrer' : undefined">Conversemos <ArrowUpRight :size="20" aria-hidden="true"/></a><p v-else class="contact-status">Nuestro canal de contacto estará disponible pronto.</p></div></div></div></section>
  </main>
  <footer class="site-footer section-wrap"><div class="footer-top"><a href="#inicio" aria-label="4PARED 360, volver al inicio"><img src="/brand/logo.svg" alt="4PARED 360" width="260" height="72"/></a><p>Comunicación estratégica<br/>para tu negocio.</p><a href="#inicio" class="back-top">Volver arriba <ArrowUpRight :size="18" aria-hidden="true"/></a></div><div class="footer-bottom"><span>© {{ new Date().getFullYear() }} 4PARED 360</span><span>Una idea clara. Un siguiente paso.</span></div></footer>
</template>
