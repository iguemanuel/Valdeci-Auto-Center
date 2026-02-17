<script setup lang="ts">
import CarouselComponent from '@/components/CarouselComponent.vue'
import { slides } from '@/data/banners'
</script>

<template>
  <div class="">
    <CarouselComponent :slides="slides" />
    <AutomotiveBrands />
  </div>
</template>

<style scoped></style>
