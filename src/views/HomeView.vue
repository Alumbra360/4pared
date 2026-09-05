<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref } from 'vue'
import { ArrowUpRight, BadgeCheck, BarChart3, Camera, Check, ChevronLeft, ChevronRight, ClipboardList, Clapperboard, Folder, Grid3X3, Lightbulb, MapPin, Megaphone, Play, Plus, Tag, Target, Users, X } from '@lucide/vue'
import SiteHeader from '@/components/SiteHeader.vue'
import { contact, contactLink } from '@/contact'

type Tab = 'portafolio' | 'reels' | 'campanas'
type Category = 'Producto' | 'Personas' | 'Resultados' | 'Proceso' | 'Campañas'
type Project = { title: string; tagline: string; description: string; category: Category; image: string; kind: Tab; video?: boolean; alt: string }
type Plan = { name: string; module: string; purpose: string; features: string[]; price: string; featured?: boolean }

const highlights: { label: Category; image: string; position?: string }[] = [
  { label: 'Producto', image: 'tecnologia' },
  { label: 'Personas', image: 'marca-personal', position: 'center 28%' },
  { label: 'Resultados', image: 'rodaje-natural-v2' },
  { label: 'Proceso', image: 'camara-rodaje', position: '62% center' },
  { label: 'Campañas', image: 'rodaje-exterior' },
]

const projects: Project[] = [
  { title: 'Tecnología en primer plano', tagline: 'Detalles que venden', description: 'Una fotografía de producto que concentra la atención en el diseño, las texturas y los detalles que hacen reconocible a la marca.', category: 'Producto', image: 'tecnologia', kind: 'portafolio', alt: 'Auriculares negros sobre un portátil con iluminación naranja' },
  { title: 'Una marca con rostro', tagline: 'Talento que inspira', description: 'Retratos profesionales pensados para comunicar cercanía, experiencia y la personalidad de quien está detrás del negocio.', category: 'Personas', image: 'marca-personal', kind: 'portafolio', alt: 'Retrato profesional de una emprendedora en su espacio de trabajo' },
  { title: 'Contenido que abre el apetito', tagline: 'Marcas que crecen', description: 'El producto, la preparación y el ambiente se combinan en una imagen diseñada para despertar interés desde el primer vistazo.', category: 'Resultados', image: 'restaurante', kind: 'portafolio', alt: 'Chef termina un plato frente a cámara' },
  { title: 'La historia detrás de la toma', tagline: 'De la idea a la realidad', description: 'Una mirada al proceso de producción: planificación, encuadre y ejecución al servicio de una historia clara.', category: 'Proceso', image: 'camara-rodaje', kind: 'reels', video: true, alt: 'Cámara profesional registra el trabajo de un chef' },
  { title: 'Negocios con algo que contar', tagline: 'Historias reales', description: 'Un formato audiovisual cercano que presenta a las personas, el espacio y el valor de una experiencia real de negocio.', category: 'Resultados', image: 'rodaje-natural-v2', kind: 'reels', video: true, alt: 'Producción audiovisual en el exterior de una cafetería' },
  { title: 'Campaña de marca', tagline: 'Marcas en movimiento', description: 'Una producción coordinada para convertir una idea de campaña en fotografías y video con una misma dirección visual.', category: 'Campañas', image: 'agencia-rodaje', kind: 'campanas', alt: 'Equipo audiovisual trabaja en una producción comercial' },
  { title: 'Retrato editorial', tagline: 'Miradas que cuentan', description: 'Iluminación, dirección y composición para construir un retrato con carácter, listo para web, prensa y redes sociales.', category: 'Personas', image: 'retrato', kind: 'portafolio', alt: 'Retrato editorial con iluminación profesional' },
  { title: 'Materia y detalle', tagline: 'Estética que conecta', description: 'Una composición que transforma materiales y texturas en argumentos visuales para presentar mejor un producto.', category: 'Producto', image: 'materia', kind: 'portafolio', alt: 'Composición de producto centrada en materiales y texturas' },
  { title: 'Producción en locación', tagline: 'Ideas en acción', description: 'Contenido creado en el contexto del negocio para mostrar su entorno, su energía y las personas que lo hacen posible.', category: 'Campañas', image: 'rodaje-exterior', kind: 'campanas', video: true, alt: 'Rodaje comercial realizado en exteriores' },
]

const plans: Plan[] = [
  { name: 'Producción Base', module: 'CAPTURA', purpose: 'Solo grabación y fotografía para empresas que ya cuentan con dirección y edición.', features: ['Jornada según alcance aprobado', 'Grabación de video', 'Producción fotográfica', 'Formatos y entrega definidos en la cotización'], price: 'A cotizar' },
  { name: 'Contenido Audiovisual', module: 'MÓDULO A', purpose: 'Producción mensual completa para alimentar redes, campañas y comunicación comercial.', features: ['15 videos tipo Reel', '10 historias', '10 publicaciones', '2 videos corporativos o publicitarios', 'Preproducción, guiones y edición'], price: 'A cotizar' },
  { name: 'Presencia Digital', module: 'MÓDULOS A + B', purpose: 'Contenido, estrategia, branding, gestión de redes y publicidad bajo una misma dirección.', features: ['Todo el contenido del Módulo A', 'Auditoría y estrategia de comunicación', 'Planificación y publicación en redes', 'Gestión de comunidad', 'Ads Manager y reporte de métricas'], price: '$450 / mes', featured: true },
]

const activeTab = ref<Tab>('portafolio')
const activeCategory = ref<Category | null>(null)
const selectedIndex = ref(0)
const selectedPlanIndex = ref(2)
const activationAdded = ref(false)
const dialogContentVisible = ref(false)
const projectDialog = ref<HTMLDialogElement | null>(null)
let opener: HTMLElement | null = null

const visibleProjects = computed(() => {
  if (activeCategory.value) return projects.filter(project => project.category === activeCategory.value)
  if (activeTab.value === 'portafolio') return projects
  return projects.filter(project => project.kind === activeTab.value)
})
const selectedProject = computed<Project>(() => visibleProjects.value[selectedIndex.value] ?? visibleProjects.value[0] ?? projects[0]!)
const selectedPlan = computed<Plan>(() => plans[selectedPlanIndex.value] ?? plans[0]!)

function selectTab(tab: Tab) {
  activeTab.value = tab
  activeCategory.value = null
}
function selectHighlight(category: Category) {
  const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  if (category === 'Producto') {
    activeCategory.value = null
    document.getElementById('servicios')?.scrollIntoView({ behavior, block: 'start' })
    return
  }
  activeTab.value = 'portafolio'
  activeCategory.value = activeCategory.value === category ? null : category
  document.getElementById('portafolio')?.scrollIntoView({ behavior, block: 'start' })
}
function selectPlan(index: number) {
  selectedPlanIndex.value = index
}
async function openProject(index: number, event: Event) {
  opener = event.currentTarget instanceof HTMLElement ? event.currentTarget : null
  selectedIndex.value = index
  dialogContentVisible.value = true
  await nextTick()
  projectDialog.value?.showModal()
  document.documentElement.style.overflow = 'hidden'
}
function closeProject() { projectDialog.value?.close() }
function onDialogClosed() {
  document.documentElement.style.overflow = ''
  dialogContentVisible.value = false
  opener?.focus({ preventScroll: true })
  opener = null
}
function changeProject(direction: number) {
  const total = visibleProjects.value.length
  if (total) selectedIndex.value = (selectedIndex.value + direction + total) % total
}
onBeforeUnmount(() => { document.documentElement.style.overflow = '' })
</script>

<template>
  <a class="skip-link" href="#contenido">Ir al contenido</a>
  <SiteHeader/>
  <main id="contenido">
    <section id="perfil" class="profile page-width" aria-labelledby="profile-title">
      <div class="profile-avatar"><img src="/portfolio/camara-rodaje-640.webp" srcset="/portfolio/camara-rodaje-320.webp 320w, /portfolio/camara-rodaje-640.webp 640w" sizes="(max-width: 48rem) 240px, 352px" alt="Cámara de producción de 4PARED 360" width="640" height="427" fetchpriority="high" decoding="async"/><span class="profile-avatar-badge" aria-hidden="true"><Camera :size="24"/></span></div>
      <div class="profile-copy">
        <p class="profile-eyebrow"><span aria-hidden="true"/> Creación audiovisual</p>
        <div class="profile-name"><h1 id="profile-title">4PARED 360</h1><BadgeCheck :size="25" fill="currentColor" aria-label="Perfil oficial"/></div>
        <p class="profile-handle">@4pared360</p>
        <p id="bio" class="profile-bio">Fotografía y video para negocios</p>
        <p class="profile-location"><MapPin :size="17" aria-hidden="true"/> Ecuador</p>
        <div class="profile-actions">
          <a v-if="contactLink" :href="contactLink" class="button button--primary" :target="contact.whatsapp ? '_blank' : undefined" :rel="contact.whatsapp ? 'noopener noreferrer' : undefined">Hablemos <ArrowUpRight :size="18" aria-hidden="true"/></a>
          <a v-else href="#contacto" class="button button--primary">Hablemos <ArrowUpRight :size="18" aria-hidden="true"/></a>
          <a href="#portafolio" class="button button--secondary">Ver trabajos <ArrowUpRight :size="18" aria-hidden="true"/></a>
        </div>
      </div>
      <aside class="profile-side-note" aria-hidden="true"><p>Ideas<br/>Personas<br/>Marcas<br/>Resultados</p><div><strong>360°</strong><span>en cada historia</span></div></aside>
      <div class="profile-stats" role="list" aria-label="Indicadores de 4PARED 360">
        <div role="listitem"><span class="profile-stat-icon" aria-hidden="true"><Folder :size="25"/></span><p><strong>10</strong><span>Proyectos</span><small>Ideas en acción</small></p></div>
        <div role="listitem"><span class="profile-stat-icon" aria-hidden="true"><Tag :size="25"/></span><p><strong>4</strong><span>Marcas</span><small>Confianza real</small></p></div>
        <div role="listitem"><span class="profile-stat-icon" aria-hidden="true"><BarChart3 :size="25"/></span><p><strong>360</strong><span>Estrategia</span><small>Visión completa</small></p></div>
      </div>
    </section>

    <section class="highlights page-width" aria-label="Explora por categoría">
      <button v-for="highlight in highlights" :key="highlight.label" type="button" class="highlight" :class="{ 'is-active': activeCategory === highlight.label }" :aria-pressed="activeCategory === highlight.label" :aria-label="highlight.label === 'Producto' ? 'Producto: ver planes de servicio' : undefined" @click="selectHighlight(highlight.label)">
        <span class="highlight-image"><img :src="`/portfolio/${highlight.image}-320.webp`" alt="" :style="{ objectPosition: highlight.position }" width="320" height="214" loading="lazy" decoding="async"/></span>
        <span>{{ highlight.label }}</span>
      </button>
    </section>

    <section id="portafolio" class="portfolio page-width" aria-labelledby="portfolio-title">
      <h2 id="portfolio-title" class="sr-only">Portafolio</h2>
      <div class="portfolio-tabs" role="tablist" aria-label="Colecciones del portafolio">
        <button type="button" role="tab" :aria-selected="activeTab === 'portafolio' && !activeCategory" @click="selectTab('portafolio')"><Grid3X3 :size="17" aria-hidden="true"/> Portafolio</button>
        <button type="button" role="tab" :aria-selected="activeTab === 'reels' && !activeCategory" @click="selectTab('reels')"><Clapperboard :size="17" aria-hidden="true"/> Reels</button>
        <button type="button" role="tab" :aria-selected="activeTab === 'campanas' && !activeCategory" @click="selectTab('campanas')"><Megaphone :size="17" aria-hidden="true"/> Campañas</button>
      </div>
      <div v-if="activeCategory" class="active-filter" role="status"><span>Mostrando {{ activeCategory }}</span><button type="button" @click="activeCategory = null">Ver todo <X :size="15" aria-hidden="true"/></button></div>
      <div class="portfolio-grid">
        <button v-for="(project, index) in visibleProjects" :key="project.title" type="button" class="project-card" :aria-label="`Abrir proyecto: ${project.title}`" @click="openProject(index, $event)">
          <img :src="`/portfolio/${project.image}-320.webp`" :srcset="`/portfolio/${project.image}-320.webp 320w, /portfolio/${project.image}-640.webp 640w`" sizes="(max-width: 48rem) 32vw, (max-width: 1440px) 31vw, 460px" :alt="project.alt" width="640" height="640" loading="lazy" decoding="async"/>
          <span class="project-shade"/>
          <span class="project-category">{{ project.category }}</span>
          <span class="project-open" aria-hidden="true"><Plus :size="17"/></span>
          <span v-if="project.video" class="project-play"><Play :size="25" fill="currentColor" aria-hidden="true"/></span>
          <span class="project-title"><strong>{{ project.tagline }}</strong><small>{{ project.video ? 'Ver reel' : 'Ver proyecto' }}</small></span>
        </button>
      </div>
      <p class="portfolio-note">Muestras conceptuales creadas para presentar la dirección visual de 4PARED 360.</p>
    </section>

    <section id="servicios" class="plans page-width" aria-labelledby="plans-title">
      <div class="plans-heading"><div><p class="plans-kicker">PLANES DE SERVICIO</p><h2 id="plans-title">De la producción<br/><em>a la presencia digital.</em></h2></div><p>Comienza con la captura de contenido o incorpora producción, estrategia, redes y publicidad según la etapa de tu negocio.</p></div>
      <div class="plan-nav-shell">
        <div class="plan-steps" role="group" aria-label="Selecciona un nivel de servicio">
          <button v-for="(plan, index) in plans" :key="`step-${plan.name}`" type="button" :class="{ 'is-active': selectedPlanIndex === index }" :aria-pressed="selectedPlanIndex === index" @click="selectPlan(index)">
            <span class="plan-step-icon"><Camera v-if="index === 0" :size="20" aria-hidden="true"/><Clapperboard v-else-if="index === 1" :size="20" aria-hidden="true"/><Megaphone v-else :size="20" aria-hidden="true"/></span>
            <strong>{{ plan.name }}</strong>
          </button>
        </div>
      </div>
      <div id="plan-detail" class="plans-grid">
        <Transition name="plan-switch" mode="out-in">
          <article :key="selectedPlan.name" class="plan-card" :class="{ 'is-featured': selectedPlan.featured }">
            <div class="plan-top"><span>{{ selectedPlan.module }}</span><span v-if="selectedPlan.featured" class="plan-badge">Plan recomendado</span></div>
            <h3>{{ selectedPlan.name }}</h3>
            <p class="plan-purpose">{{ selectedPlan.purpose }}</p>
            <ul><li v-for="feature in selectedPlan.features" :key="feature">{{ feature }}</li></ul>
            <div class="plan-bottom"><div><span>INVERSIÓN</span><strong>{{ selectedPlan.price }}</strong></div><span class="plan-selected-state"><Check :size="18" aria-hidden="true"/>En tu propuesta</span></div>
          </article>
        </Transition>
      </div>
      <p class="plans-note">Las cantidades indicadas son mensuales. La pauta digital no está incluida en Presencia Digital y se paga directamente a la plataforma. El alcance final, las locaciones, los recursos extraordinarios y los servicios de terceros se detallan en la cotización.</p>
      <aside class="activation-service" aria-labelledby="activation-title">
        <div class="activation-main">
          <figure class="activation-visual">
            <img src="/portfolio/activacion-marca-640.webp" srcset="/portfolio/activacion-marca-320.webp 320w, /portfolio/activacion-marca-640.webp 640w, /portfolio/activacion-marca.webp 1536w" sizes="(max-width: 64rem) 92vw, 40vw" width="1536" height="1024" alt="Activación conceptual de una marca de producto con asistentes y registro mediante código QR" loading="lazy" decoding="async" />
            <figcaption><span>SERVICIO COMPLEMENTARIO</span><strong>MÓDULO C</strong></figcaption>
            <p>Las marcas también<br/>generan experiencias.</p>
          </figure>
          <div class="activation-content">
            <span class="activation-kicker">SERVICIO COMPLEMENTARIO / MÓDULO C</span>
            <h3 id="activation-title">Activaciones<br/><em>de Marca</em></h3>
            <p class="activation-lead">Experiencias presenciales o híbridas para presentar una propuesta, generar interacción y convertir el interés del público en oportunidades comerciales.</p>
            <div class="activation-features">
              <div><span><Lightbulb :size="25" aria-hidden="true"/></span><p><strong>Conceptualización estratégica</strong><small>Según campaña, temporada o lanzamiento.</small></p></div>
              <div><span><Users :size="25" aria-hidden="true"/></span><p><strong>Diseño de experiencias</strong><small>Microeventos, demostraciones, talleres o pruebas.</small></p></div>
              <div><span><ClipboardList :size="25" aria-hidden="true"/></span><p><strong>Gestión integral</strong><small>Recorrido, registro y captación de datos.</small></p></div>
              <div><span><BarChart3 :size="25" aria-hidden="true"/></span><p><strong>Seguimiento y comunicación</strong><small>Llamadas a la acción y medición de resultados.</small></p></div>
            </div>
            <div class="activation-action"><div><span>INVERSIÓN</span><strong>A cotizar</strong></div><button type="button" :class="{ 'is-added': activationAdded }" :aria-pressed="activationAdded" @click="activationAdded = !activationAdded"><Check v-if="activationAdded" :size="20" aria-hidden="true"/><Plus v-else :size="20" aria-hidden="true"/>{{ activationAdded ? 'Añadido a tu propuesta' : 'Añadir al plan' }}</button></div>
          </div>
        </div>
        <div class="activation-benefits" aria-label="Resultados de una activación de marca">
          <div><Target :size="30" aria-hidden="true"/><span>Más visibilidad<strong>para tu marca</strong></span></div>
          <div><Users :size="30" aria-hidden="true"/><span>Conexiones<strong>reales</strong></span></div>
          <div><BarChart3 :size="30" aria-hidden="true"/><span>Oportunidades<strong>de negocio</strong></span></div>
        </div>
      </aside>
      <div class="plan-summary" aria-live="polite">
        <div class="plan-summary-copy"><span>TU PROPUESTA</span><strong>{{ selectedPlan.name }}</strong><small>{{ activationAdded ? '+ Activaciones de Marca' : 'Sin servicios complementarios' }}</small></div>
        <div class="plan-summary-price"><span>INVERSIÓN BASE</span><strong>{{ selectedPlan.price }}</strong></div>
        <a href="#contacto">Solicitar propuesta <ArrowUpRight :size="19" aria-hidden="true"/></a>
      </div>
    </section>

    <section id="contacto" class="contact page-width" aria-labelledby="contact-title">
      <div><p class="contact-kicker">TU NEGOCIO TIENE ALGO QUE MOSTRAR</p><h2 id="contact-title">Pongámoslo<br/><em>en escena.</em></h2></div>
      <div class="contact-side"><p>Cuéntanos qué necesitas comunicar. Diseñamos la producción alrededor de tu negocio y de las personas a las que quieres llegar.</p><a v-if="contactLink" :href="contactLink" class="contact-link" :target="contact.whatsapp ? '_blank' : undefined" :rel="contact.whatsapp ? 'noopener noreferrer' : undefined">Hablemos de tu proyecto <ArrowUpRight :size="20"/></a><p v-else class="contact-status">Nuestro canal de contacto estará disponible pronto.</p></div>
    </section>
  </main>

  <dialog ref="projectDialog" class="project-dialog" aria-labelledby="dialog-title" @close="onDialogClosed" @click="event => { if (event.target === projectDialog) closeProject() }" @keydown.left.prevent="changeProject(-1)" @keydown.right.prevent="changeProject(1)">
    <div v-if="dialogContentVisible" class="post-shell">
      <div class="post-media"><img :src="`/portfolio/${selectedProject.image}.webp`" :alt="selectedProject.alt" decoding="async"/></div>
      <article class="post-panel">
        <header class="post-author">
          <span class="post-avatar"><img src="/portfolio/camara-rodaje-320.webp" alt="" width="320" height="214" decoding="async"/></span>
          <span class="post-author-copy"><strong>4PARED 360 <BadgeCheck :size="15" fill="currentColor" aria-label="Perfil oficial"/></strong><small>@4pared360 · Ecuador</small></span>
          <button type="button" autofocus aria-label="Cerrar publicación" @click="closeProject"><X :size="22" aria-hidden="true"/></button>
        </header>
        <div class="post-caption">
          <span class="post-category">{{ selectedProject.category }}</span>
          <h2 id="dialog-title">{{ selectedProject.title }}</h2>
          <p><strong>4PARED 360</strong> {{ selectedProject.description }}</p>
        </div>
        <footer class="post-footer">
          <span>PROYECTO {{ selectedIndex + 1 }} DE {{ visibleProjects.length }}</span>
          <div class="dialog-controls"><button type="button" aria-label="Proyecto anterior" @click="changeProject(-1)"><ChevronLeft :size="24"/></button><button type="button" aria-label="Proyecto siguiente" @click="changeProject(1)"><ChevronRight :size="24"/></button></div>
        </footer>
      </article>
    </div>
  </dialog>

  <footer class="site-footer page-width"><img src="/brand/logo.svg" alt="4PARED 360" width="210" height="59" loading="lazy" decoding="async"/><span>Fotografía y video para negocios.</span></footer>
</template>
