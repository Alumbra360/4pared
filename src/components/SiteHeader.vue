<script setup lang="ts">
import { Menu, X } from '@lucide/vue'
import { ref } from 'vue'

const menuOpen = ref(false)
const links = [
  { href: '#portafolio', label: 'Trabajos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#bio', label: 'Nosotros' },
]
</script>

<template>
  <header class="site-header">
    <div class="header-inner page-width">
      <a href="#perfil" class="brand-link" aria-label="4PARED 360, inicio"><img src="/brand/logo.svg" alt="4PARED 360" width="240" height="67"/></a>
      <nav class="primary-nav" aria-label="Navegación principal"><a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a><a href="#contacto" class="nav-contact">Hablemos</a></nav>
      <button type="button" class="menu-toggle" :aria-expanded="menuOpen" aria-controls="mobile-nav" :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'" @click="menuOpen = !menuOpen"><X v-if="menuOpen" :size="24"/><Menu v-else :size="26"/></button>
    </div>
    <nav v-if="menuOpen" id="mobile-nav" class="mobile-nav" aria-label="Navegación móvil"><a v-for="link in links" :key="link.href" :href="link.href" @click="menuOpen = false">{{ link.label }}</a><a href="#contacto" @click="menuOpen = false">Hablemos</a></nav>
  </header>
</template>
