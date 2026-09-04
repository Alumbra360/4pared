<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import { ArrowUpRight, BadgeCheck, ChevronLeft, ChevronRight, Clapperboard, Grid3X3, MapPin, Megaphone, Play, X } from '@lucide/vue'
import SiteHeader from '@/components/SiteHeader.vue'
import { contact, contactLink } from '@/contact'

type Tab = 'portafolio' | 'reels' | 'campanas'
type Category = 'Producto' | 'Personas' | 'Resultados' | 'Proceso' | 'Campañas'
type Project = { title: string; category: Category; image: string; kind: Tab; video?: boolean; alt: string }

const highlights: { label: Category; image: string; position?: string }[] = [
  { label: 'Producto', image: 'tecnologia' },
  { label: 'Personas', image: 'marca-personal', position: 'center 28%' },
  { label: 'Resultados', image: 'rodaje-natural-v2' },
  { label: 'Proceso', image: 'camara-rodaje', position: '62% center' },
  { label: 'Campañas', image: 'rodaje-exterior' },
]

const projects: Project[] = [
  { title: 'Tecnología en primer plano', category: 'Producto', image: 'tecnologia', kind: 'portafolio', alt: 'Auriculares negros sobre un portátil con iluminación naranja' },
  { title: 'Una marca con rostro', category: 'Personas', image: 'marca-personal', kind: 'portafolio', alt: 'Retrato profesional de una emprendedora en su espacio de trabajo' },
  { title: 'Contenido que abre el apetito', category: 'Resultados', image: 'restaurante', kind: 'portafolio', alt: 'Chef termina un plato frente a cámara' },
  { title: 'La historia detrás de la toma', category: 'Proceso', image: 'camara-rodaje', kind: 'reels', video: true, alt: 'Cámara profesional registra el trabajo de un chef' },
  { title: 'Negocios con algo que contar', category: 'Resultados', image: 'rodaje-natural-v2', kind: 'reels', video: true, alt: 'Producción audiovisual en el exterior de una cafetería' },
  { title: 'Campaña de marca', category: 'Campañas', image: 'agencia-rodaje', kind: 'campanas', alt: 'Equipo audiovisual trabaja en una producción comercial' },
  { title: 'Retrato editorial', category: 'Personas', image: 'retrato', kind: 'portafolio', alt: 'Retrato editorial con iluminación profesional' },
  { title: 'Materia y detalle', category: 'Producto', image: 'materia', kind: 'portafolio', alt: 'Composición de producto centrada en materiales y texturas' },
  { title: 'Producción en locación', category: 'Campañas', image: 'rodaje-exterior', kind: 'campanas', video: true, alt: 'Rodaje comercial realizado en exteriores' },
]

const activeTab = ref<Tab>('portafolio')
const activeCategory = ref<Category | null>(null)
const selectedIndex = ref(0)
const projectDialog = ref<HTMLDialogElement | null>(null)
let opener: HTMLElement | null = null

const visibleProjects = computed(() => {
  if (activeCategory.value) return projects.filter(project => project.category === activeCategory.value)
  if (activeTab.value === 'portafolio') return projects
  return projects.filter(project => project.kind === activeTab.value)
})
const selectedProject = computed<Project>(() => visibleProjects.value[selectedIndex.value] ?? visibleProjects.value[0] ?? projects[0]!)

function selectTab(tab: Tab) {
  activeTab.value = tab
  activeCategory.value = null
}
function selectHighlight(category: Category) {
  activeTab.value = 'portafolio'
  activeCategory.value = activeCategory.value === category ? null : category
  document.getElementById('portafolio')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
function openProject(index: number, event: Event) {
  opener = event.currentTarget instanceof HTMLElement ? event.currentTarget : null
  selectedIndex.value = index
  projectDialog.value?.showModal()
  document.documentElement.style.overflow = 'hidden'
}
function closeProject() { projectDialog.value?.close() }
function onDialogClosed() {
  document.documentElement.style.overflow = ''
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
      <div class="profile-avatar"><img src="/portfolio/camara-rodaje.webp" alt="Cámara de producción de 4PARED 360" width="420" height="420"/></div>
      <div class="profile-copy">
        <div class="profile-name"><h1 id="profile-title">4PARED 360</h1><BadgeCheck :size="25" fill="currentColor" aria-label="Perfil oficial"/></div>
        <p class="profile-handle">@4pared360</p>
        <p id="bio" class="profile-bio">Fotografía y video para negocios</p>
        <p class="profile-location"><MapPin :size="17" aria-hidden="true"/> Ecuador</p>
        <div id="servicios" class="profile-actions">
          <a v-if="contactLink" :href="contactLink" class="button button--primary" :target="contact.whatsapp ? '_blank' : undefined" :rel="contact.whatsapp ? 'noopener noreferrer' : undefined">Hablemos</a>
          <a v-else href="#contacto" class="button button--primary">Hablemos</a>
          <a href="#portafolio" class="button button--secondary">Ver trabajos</a>
        </div>
      </div>
      <dl class="profile-stats" aria-label="Especialidades de 4PARED 360">
        <div><dt>FOTO</dt><dd>IMAGEN</dd></div>
        <div><dt>VIDEO</dt><dd>MOVIMIENTO</dd></div>
        <div><dt>360°</dt><dd>MIRADA</dd></div>
      </dl>
    </section>

    <section class="highlights page-width" aria-label="Explora por categoría">
      <button v-for="highlight in highlights" :key="highlight.label" type="button" class="highlight" :class="{ 'is-active': activeCategory === highlight.label }" :aria-pressed="activeCategory === highlight.label" @click="selectHighlight(highlight.label)">
        <span class="highlight-image"><img :src="`/portfolio/${highlight.image}.webp`" alt="" :style="{ objectPosition: highlight.position }" width="180" height="180"/></span>
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
          <img :src="`/portfolio/${project.image}.webp`" :alt="project.alt" width="720" height="720" loading="lazy"/>
          <span class="project-shade"/>
          <span class="project-category">{{ project.category }}</span>
          <span v-if="project.video" class="project-play"><Play :size="25" fill="currentColor" aria-hidden="true"/></span>
          <span class="project-title">{{ project.title }} <ArrowUpRight :size="18" aria-hidden="true"/></span>
        </button>
      </div>
      <p class="portfolio-note">Muestras conceptuales creadas para presentar la dirección visual de 4PARED 360.</p>
    </section>

    <section id="contacto" class="contact page-width" aria-labelledby="contact-title">
      <div><p class="contact-kicker">TU NEGOCIO TIENE ALGO QUE MOSTRAR</p><h2 id="contact-title">Pongámoslo<br/><em>en escena.</em></h2></div>
      <div class="contact-side"><p>Cuéntanos qué necesitas comunicar. Diseñamos la producción alrededor de tu negocio y de las personas a las que quieres llegar.</p><a v-if="contactLink" :href="contactLink" class="contact-link" :target="contact.whatsapp ? '_blank' : undefined" :rel="contact.whatsapp ? 'noopener noreferrer' : undefined">Hablemos de tu proyecto <ArrowUpRight :size="20"/></a><p v-else class="contact-status">Nuestro canal de contacto estará disponible pronto.</p></div>
    </section>
  </main>

  <dialog ref="projectDialog" class="project-dialog" aria-labelledby="dialog-title" @close="onDialogClosed" @click="event => { if (event.target === projectDialog) closeProject() }" @keydown.left.prevent="changeProject(-1)" @keydown.right.prevent="changeProject(1)">
    <div class="dialog-toolbar"><span>{{ selectedIndex + 1 }} / {{ visibleProjects.length }}</span><button type="button" autofocus @click="closeProject"><X :size="20" aria-hidden="true"/> Cerrar</button></div>
    <img :src="`/portfolio/${selectedProject.image}.webp`" :alt="selectedProject.alt"/>
    <div class="dialog-caption"><div><span>{{ selectedProject.category }}</span><h2 id="dialog-title">{{ selectedProject.title }}</h2></div><div class="dialog-controls"><button type="button" aria-label="Proyecto anterior" @click="changeProject(-1)"><ChevronLeft :size="25"/></button><button type="button" aria-label="Proyecto siguiente" @click="changeProject(1)"><ChevronRight :size="25"/></button></div></div>
  </dialog>

  <footer class="site-footer page-width"><img src="/brand/logo.svg" alt="4PARED 360" width="210" height="59"/><span>Fotografía y video para negocios.</span><a href="#perfil">Volver arriba <ArrowUpRight :size="16"/></a></footer>
</template>
