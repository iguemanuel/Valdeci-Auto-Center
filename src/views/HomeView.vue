<script setup lang="ts">
import CarouselComponent from '@/components/CarouselComponent.vue'

import banner01 from '@/assets/imgs/banners/banner01.png'
import banner02 from '@/assets/imgs/banners/banner02.png'
import AutomotiveBrands from '@/components/AutomotiveBrands.vue'
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
    <AutomotiveBrands />
  </div>
</template>

<style scoped></style>
