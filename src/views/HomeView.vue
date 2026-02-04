<script setup lang="ts">
import CarouselComponent from '@/components/CarouselComponent.vue'

import banner01 from '@/assets/imgs/banner01.png'
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
  <div class="">
    <CarouselComponent :slides="slides" />
  </div>
</template>

<style scoped></style>
