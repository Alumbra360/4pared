<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { ArrowUpRight } from '@lucide/vue'

const header = ref<HTMLElement | null>(null)
const links = [
  { href: '#meta', label: 'Nuestra meta' },
  { href: '#video', label: 'Video' },
  { href: '#fotografia', label: 'Fotografía' },
]
let resizeObserver: ResizeObserver | undefined
onMounted(() => {
  resizeObserver = new ResizeObserver(([entry]) => {
    if (entry) document.documentElement.style.setProperty('--header-height', `${entry.target.getBoundingClientRect().height}px`)
  })
  if (header.value) resizeObserver.observe(header.value)
})
onBeforeUnmount(() => {
  resizeObserver?.disconnect()
  document.documentElement.style.removeProperty('--header-height')
})
</script>
<template>
  <header ref="header" class="site-header">
    <div class="header-inner">
      <a href="#inicio" class="brand-link" aria-label="4PARED 360, inicio"><img src="/brand/logo-negativo.svg" alt="4PARED 360" width="248" height="69"/></a>
      <nav class="primary-nav" aria-label="Navegación principal"><a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a></nav>
      <a href="#contacto" class="header-contact">Hablemos <ArrowUpRight :size="18" aria-hidden="true"/></a>
    </div>
  </header>
</template>
