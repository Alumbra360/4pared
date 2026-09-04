<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import { ArrowDown, ArrowUpRight, ChevronLeft, ChevronRight, X, Expand, Play } from '@lucide/vue'
import SiteHeader from '@/components/SiteHeader.vue'
import CameraTrail from '@/components/CameraTrail.vue'
import { contact, contactLink } from '@/contact'
const photos = [
  { title: 'Tu producto, protagonista.', category: 'Tecnología', description: 'Imágenes que muestran el diseño, los detalles y el valor de lo que vendes.', deliverables: 'Fotografía de producto · Catálogo · Campañas', image: 'tecnologia', layout: 'landscape', width: 1536, height: 1024, alt: 'Ejemplo conceptual de fotografía comercial: auriculares negros sobre un portátil con iluminación naranja' },
  { title: 'La persona detrás de la marca.', category: 'Marcas personales', description: 'Retratos que transmiten cercanía y confianza, para que tus clientes sepan quién eres.', deliverables: 'Retrato profesional · Web · Redes sociales', image: 'marca-personal', layout: 'portrait', width: 1024, height: 1536, alt: 'Ejemplo conceptual para marca personal: una emprendedora en su estudio, sentada junto a una libreta' },
  { title: 'Una imagen que abre el apetito.', category: 'Restaurantes', description: 'Tus platos, tu equipo y el ambiente que convierte una visita en una experiencia.', deliverables: 'Fotografía gastronómica · Menú · Redes sociales', image: 'restaurante', layout: 'still', width: 1448, height: 1086, alt: 'Ejemplo conceptual para restaurantes: un chef termina un plato de pescado y vegetales con unas pinzas' },
] as const
const photoDialog = ref<HTMLDialogElement | null>(null)
const selectedIndex = ref(0)
const selectedPhoto = computed(() => photos[selectedIndex.value] ?? photos[0])
let previousOverflow = ''
let scrollLocked = false
let photoOpener: HTMLElement | null = null
function openPhoto(index: number) {
  if (!photoDialog.value || photoDialog.value.open) return
  photoOpener = document.activeElement instanceof HTMLElement ? document.activeElement : null
  selectedIndex.value = index
  previousOverflow = document.documentElement.style.overflow
  photoDialog.value?.showModal()
  document.documentElement.style.overflow = 'hidden'
  scrollLocked = true
}
function closePhoto() { photoDialog.value?.close() }
function restoreScroll() {
  if (!scrollLocked) return
  document.documentElement.style.overflow = previousOverflow
  scrollLocked = false
}
function onPhotoClosed() {
  restoreScroll()
  photoOpener?.focus({ preventScroll: true })
  photoOpener = null
}
function changePhoto(direction: number) { selectedIndex.value = (selectedIndex.value + direction + photos.length) % photos.length }
const videoElement = ref<HTMLVideoElement | null>(null)
const videoError = ref(false)
function retryVideo() { videoError.value = false; videoElement.value?.load() }
onBeforeUnmount(restoreScroll)

</script>
<template>
  <a class="skip-link" href="#contenido">Ir al contenido</a><SiteHeader/><CameraTrail/>
  <main id="contenido" tabindex="-1">
    <section id="inicio" class="art-hero" aria-labelledby="hero-title">
      <img class="hero-image" src="/portfolio/rodaje-natural-v2.webp" srcset="/portfolio/rodaje-natural-v2-640.webp 640w, /portfolio/rodaje-natural-v2.webp 1672w" sizes="100vw" width="1672" height="941" alt="Escena conceptual de una agencia ecuatoriana: un operador graba a la dueña de una cafetería al aire libre, con una cámara compacta sobre trípode y luz natural" fetchpriority="high"/>
      <div class="hero-shade"/>
      <div class="hero-content page-width">
        <p class="eyebrow"><span/> PRODUCCIÓN AUDIOVISUAL PARA NEGOCIOS</p>
        <h1 id="hero-title">Tu negocio.<br/><em>En primer plano<span>.</span></em></h1>
        <div class="hero-baseline">
          <p>Fotografía y video para marcas personales, tecnología y restaurantes.</p>
        </div>
      </div>
    </section>
    <section id="meta" class="purpose-section" aria-labelledby="purpose-title"><div class="page-width purpose-inner"><p class="eyebrow">01 / NUESTRA META</p><h2 id="purpose-title">Que te conozcan.<br/><em>Que te elijan.</em></h2><div class="purpose-baseline"><span class="purpose-symbol" aria-hidden="true">↗</span><p>Ayudar a tu negocio a comunicar su valor, generar confianza y despertar el interés de nuevos clientes. Una mirada artística al servicio de un objetivo comercial.</p></div></div></section>
    <section id="video" class="video-section page-width" aria-labelledby="video-title"><p class="eyebrow">02 / VIDEO PARA COMUNICAR Y CONECTAR</p><div class="section-heading"><h2 id="video-title">Muestra lo que haces.<br/><em>Haz que conecte.</em></h2><p>Entrevistas, demostraciones de producto y experiencias gastronómicas. Contenido audiovisual pensado para redes, campañas y tu web.</p></div>
      <div class="video-frame"><div class="video-topline"><span><Play :size="13" aria-hidden="true"/> CONTENIDO PARA RESTAURANTES</span><span>COCINA / 00:08</span></div><video key="video-restaurante" ref="videoElement" controls playsinline muted preload="metadata" aria-label="Clip de referencia: un chef trabaja en una cocina profesional" aria-describedby="video-credit" @error="videoError = true"><source src="/portfolio/video-restaurante.mp4" type="video/mp4" @error="videoError = true"/>Tu navegador no puede reproducir este video. <a href="/portfolio/video-restaurante.mp4">Abrir el archivo MP4</a>.</video><div v-if="videoError" class="video-error" role="status"><p>No se pudo cargar el clip.</p><button @click="retryVideo">Volver a cargar</button><a href="/portfolio/video-restaurante.mp4">Abrir video</a></div></div>
      <div id="video-credit" class="video-credit"><p>Clip de referencia: <a href="https://mixkit.co/free-stock-video/chef-working-in-a-large-kitchen-43048/" target="_blank" rel="noopener noreferrer">Chef working in a large kitchen · Mixkit</a> · <a href="https://mixkit.co/license/#videoFree" target="_blank" rel="noopener noreferrer">Free License</a>. No es una producción de 4PARED.</p><span>DEL PROCESO A LA EXPERIENCIA.</span></div>
      <p class="eyebrow ideas-label">EJEMPLOS DE PIEZAS PARA CADA SECTOR</p><div class="video-ideas" aria-label="Ejemplos de contenido audiovisual por sector"><article><span class="idea-sector">Marcas personales</span><h3>Tu experiencia tiene voz.</h3><p>Una entrevista breve donde explicas qué haces, cómo ayudas y por qué confiar en ti.</p><span class="idea-format">Entrevista · Reel de presentación</span></article><article><span class="idea-sector">Tecnología</span><h3>El producto, en acción.</h3><p>Detalles, uso real y beneficios claros para que tus clientes entiendan qué están comprando.</p><span class="idea-format">Demostración · Video de producto</span></article><article><span class="idea-sector">Restaurantes</span><h3>El antojo empieza aquí.</h3><p>De la preparación al primer plano del plato. Una pieza que muestra el sabor y la experiencia de tu local.</p><span class="idea-format">Reel gastronómico · Ambiente</span></article></div>
    </section>
    <section id="servicios" class="photo-section" aria-labelledby="photo-title"><div id="fotografia" class="page-width"><p class="eyebrow">03 / FOTOGRAFÍA PARA TU NEGOCIO</p><div class="section-heading"><h2 id="photo-title">Lo que haces.<br/><em>Como merece verse.</em></h2><p>Tu experiencia profesional, tu producto o la propuesta de tu restaurante. Creamos imágenes que ayudan a tus clientes a entender su valor.</p></div>
      <div class="photo-grid"><figure v-for="(photo, index) in photos" :key="photo.image" :class="['photo-item', 'photo-item--' + photo.layout]"><button class="photo-open" aria-haspopup="dialog" :aria-label="'Ampliar imagen: ' + photo.title" @click="openPhoto(index)"><img :src="'/portfolio/' + photo.image + '.webp'" :srcset="'/portfolio/' + photo.image + '-640.webp 640w, /portfolio/' + photo.image + '.webp ' + photo.width + 'w'" sizes="(max-width: 650px) 100vw, 60vw" :width="photo.width" :height="photo.height" :alt="photo.alt" loading="lazy"/><span class="photo-expand" aria-hidden="true"><Expand :size="17"/> Ampliar</span></button><figcaption><div><span class="photo-category">{{ photo.category }}</span><h3>{{ photo.title }}</h3><p class="photo-description">{{ photo.description }}</p><span class="photo-deliverables">{{ photo.deliverables }}</span></div><span class="photo-index">0{{ index + 1 }}</span></figcaption></figure></div>
      <p class="reference-note"><span class="reference-mark"/> Muestras conceptuales generadas para esta propuesta visual. No corresponden a trabajos de clientes.</p>
    </div></section>
    <section id="contacto" class="contact-section page-width"><p class="eyebrow">TU NEGOCIO TIENE ALGO QUE MOSTRAR.</p><div class="contact-row"><h2>Pongámoslo<br/><em>en escena.</em></h2><div><p>Cuéntanos qué vendes, a quién quieres llegar y qué necesitas comunicar. Démosle forma a tu próxima producción.</p><a v-if="contactLink" :href="contactLink" class="contact-action" :target="contact.whatsapp ? '_blank' : undefined" :rel="contact.whatsapp ? 'noopener noreferrer' : undefined">Hablemos de tu negocio <ArrowUpRight :size="22"/></a><p v-else class="contact-status">Nuestro canal de contacto estará disponible pronto.</p></div></div></section>
  </main>
  <dialog ref="photoDialog" class="photo-dialog" aria-labelledby="photo-dialog-title" aria-describedby="photo-dialog-note" @close="onPhotoClosed" @click="event => { if (event.target === photoDialog) closePhoto() }" @keydown.left.prevent="changePhoto(-1)" @keydown.right.prevent="changePhoto(1)"><div class="dialog-content"><div class="dialog-toolbar"><span aria-live="polite" aria-atomic="true">Fotografía {{ selectedIndex + 1 }} de {{ photos.length }}</span><button class="dialog-close" aria-label="Cerrar fotografía" autofocus @click="closePhoto"><X :size="20" aria-hidden="true"/><span>Cerrar</span></button></div><img :src="'/portfolio/' + selectedPhoto.image + '.webp'" :alt="selectedPhoto.alt"/><div class="dialog-bottom"><div aria-live="polite"><h2 id="photo-dialog-title">{{ selectedPhoto.title }}</h2><p id="photo-dialog-note">{{ selectedPhoto.category }} · Imagen conceptual generada</p></div><div class="photo-controls"><button aria-label="Fotografía anterior" @click="changePhoto(-1)"><ChevronLeft :size="25" aria-hidden="true"/></button><button aria-label="Fotografía siguiente" @click="changePhoto(1)"><ChevronRight :size="25" aria-hidden="true"/></button></div></div></div></dialog>
  <footer class="site-footer page-width"><a href="#inicio" aria-label="4PARED 360, volver al inicio"><img src="/brand/logo-negativo.svg" alt="4PARED 360" width="240" height="67"/></a><p>Comunicación estratégica para tu negocio.</p><a href="#inicio" class="back-top">Volver arriba <ArrowUpRight :size="17"/></a><div class="footer-bottom"><span>© {{ new Date().getFullYear() }} 4PARED 360</span><span>Fotografía y video para negocios.</span></div></footer>
</template>
