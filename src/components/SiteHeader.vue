<script setup lang="ts">
import { ref } from 'vue'
import { ArrowUpRight, Menu, X } from '@lucide/vue'
const menuOpen = ref(false)
const links = [{ href: '#servicios', label: 'Qué hacemos' }, { href: '#enfoque', label: 'Nuestro enfoque' }, { href: '#proceso', label: 'Cómo trabajamos' }]
</script>
<template>
  <header class="site-header" @keydown.esc="menuOpen = false">
    <div class="header-inner">
      <a href="#inicio" class="brand-link" aria-label="4PARED 360, inicio" @click="menuOpen = false"><picture><source media="(max-width: 700px)" srcset="/brand/logo-esencial.svg"/><img src="/brand/logo.svg" alt="4PARED 360" width="248" height="69"/></picture></a>
      <nav class="desktop-nav" aria-label="Navegación principal"><a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a></nav>
      <a href="#contacto" class="header-contact">Hablemos <ArrowUpRight :size="17" aria-hidden="true"/></a>
      <button class="mobile-menu" :aria-expanded="menuOpen" aria-controls="mobile-navigation" :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'" @click="menuOpen = !menuOpen"><X v-if="menuOpen" :size="25"/><Menu v-else :size="25"/></button>
    </div>
    <nav v-if="menuOpen" id="mobile-navigation" class="mobile-navigation" aria-label="Navegación móvil"><a v-for="link in [...links, { href: '#contacto', label: 'Hablemos' }]" :key="link.href" :href="link.href" @click="menuOpen = false">{{ link.label }}<ArrowUpRight :size="20" aria-hidden="true"/></a></nav>
  </header>
</template>
