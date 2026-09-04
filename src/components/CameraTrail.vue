<script setup lang="ts">
import { Camera, Focus } from '@lucide/vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const trail = ref<HTMLElement | null>(null)
const frameLabel = ref('PORTADA')
const frameNumber = ref('00')
const isFlashing = ref(false)

const frames = [
  { id: 'inicio', label: 'PORTADA', number: '00' },
  { id: 'meta', label: 'INTENCIÓN', number: '01' },
  { id: 'video', label: 'MOVIMIENTO', number: '02' },
  { id: 'fotografia', label: 'FOTOGRAFÍA', number: '03' },
  { id: 'contacto', label: 'ACCIÓN', number: '04' },
] as const

let raf = 0
let currentX = 88
let currentY = 48
let targetX = 88
let targetY = 48
let activeFrame = 0
let flashTimer = 0

function updateTarget() {
  const root = document.documentElement
  const maxScroll = Math.max(root.scrollHeight - window.innerHeight, 1)
  const progress = Math.min(Math.max(window.scrollY / maxScroll, 0), 1)
  const sweep = Math.sin(progress * Math.PI * 3.4)
  const mobile = window.innerWidth < 768
  targetX = mobile ? 88 : 50 + sweep * 41
  targetY = mobile ? 76 - Math.sin(progress * Math.PI * 2) * 8 : 43 + Math.cos(progress * Math.PI * 2.4) * 12

  trail.value?.style.setProperty('--camera-progress', `${progress}`)
  trail.value?.style.setProperty('--camera-tilt', `${sweep * 8}deg`)

  const marker = window.scrollY + window.innerHeight * 0.52
  let nextFrame = 0
  frames.forEach((frame, index) => {
    const section = document.getElementById(frame.id)
    if (section && section.offsetTop <= marker) nextFrame = index
  })
  if (nextFrame !== activeFrame) {
    activeFrame = nextFrame
    const frame = frames[nextFrame] ?? frames[0]
    frameLabel.value = frame.label
    frameNumber.value = frame.number
    isFlashing.value = true
    window.clearTimeout(flashTimer)
    flashTimer = window.setTimeout(() => { isFlashing.value = false }, 360)
  }
}

function animate() {
  currentX += (targetX - currentX) * 0.075
  currentY += (targetY - currentY) * 0.075
  trail.value?.style.setProperty('--camera-x', `${currentX}vw`)
  trail.value?.style.setProperty('--camera-y', `${currentY}vh`)
  raf = window.requestAnimationFrame(animate)
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  updateTarget()
  window.addEventListener('scroll', updateTarget, { passive: true })
  window.addEventListener('resize', updateTarget, { passive: true })
  raf = window.requestAnimationFrame(animate)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateTarget)
  window.removeEventListener('resize', updateTarget)
  window.cancelAnimationFrame(raf)
  window.clearTimeout(flashTimer)
})
</script>

<template>
  <div ref="trail" class="camera-trail" :class="{ 'is-flashing': isFlashing }" aria-hidden="true">
    <div class="camera-coordinate camera-coordinate--top">REC · {{ frameNumber }}</div>
    <div class="camera-orbit">
      <span class="camera-corner camera-corner--tl"/><span class="camera-corner camera-corner--tr"/>
      <span class="camera-corner camera-corner--bl"/><span class="camera-corner camera-corner--br"/>
      <Camera class="camera-body" :size="31" :stroke-width="1.55"/>
      <Focus class="camera-focus" :size="18" :stroke-width="1.35"/>
      <span class="camera-flash"/>
    </div>
    <div class="camera-coordinate camera-coordinate--bottom">{{ frameLabel }}</div>
  </div>
</template>
