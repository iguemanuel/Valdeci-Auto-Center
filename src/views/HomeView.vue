<script setup lang="ts">
import CarouselComponent from '@/components/CarouselComponent.vue'

import banner01 from '@/assets/imgs/banner01.jpeg'
import banner02 from '@/assets/imgs/banner02.png'
const slides = [
  {
    id: 1,
    image: banner01,
    alt: 'Serviços automotivos de qualidade',
  },
  {
    id: 2,
    image: banner02,
    alt: 'Curso de mecânica automotiva',
  },
]
</script>

<template>
  <div class="min-h-screen bg-base-100">
    <CarouselComponent :slides="slides" />
  </div>
</template>

<style scoped></style>
