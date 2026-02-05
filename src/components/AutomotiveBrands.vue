<script setup lang="ts">
import { brands } from '@/data/automotiveLogos'
</script>

<template>
  <div class="w-full bg-slate-50 py-8 border-b border-gray-200 overflow-hidden">
    <div class="slider relative">
      <div class="slide-track flex items-center gap-16">
        <div v-for="(brand, index) in brands" :key="`original-${index}`" class="slide">
          <img
            :src="brand.logo"
            :alt="brand.name"
            class="h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
          />
        </div>

        <div v-for="(brand, index) in brands" :key="`duplicate-${index}`" class="slide">
          <img
            :src="brand.logo"
            :alt="brand.name"
            class="h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
          />
        </div>

        <div v-for="(brand, index) in brands" :key="`triplicate-${index}`" class="slide">
          <img
            :src="brand.logo"
            :alt="brand.name"
            class="h-12 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    /* Como temos 3 blocos de itens, movemos 1/3 (33.33%) para criar o ciclo perfeito */
    transform: translateX(calc(-100% / 3));
  }
}

.slider {
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.slide-track {
  animation: scroll 40s linear infinite;
  width: max-content;
}
</style>
