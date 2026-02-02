<script setup lang="ts">
import { ref } from 'vue'

export interface CarouselSlide {
  id: number | string
  image: string
  alt?: string
}

const props = defineProps<{
  slides: CarouselSlide[]
}>()

const currentSlide = ref(0)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % props.slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + props.slides.length) % props.slides.length
}
</script>

<template>
  <div class="relative w-full overflow-hidden rounded-box shadow-xl">
    <div
      class="flex transition-transform duration-500 ease-out"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div
        v-for="slide in props.slides"
        :key="slide.id"
        class="w-full flex-shrink-0 relative aspect-video"
      >
        <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-contain bg-black" />
      </div>
    </div>

    <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <button
        @click="prevSlide"
        class="btn btn-circle btn-ghost bg-black/20 hover:bg-black/40 text-white border-none"
      >
        ❮
      </button>
      <button
        @click="nextSlide"
        class="btn btn-circle btn-ghost bg-black/20 hover:bg-black/40 text-white border-none"
      >
        ❯
      </button>
    </div>

    <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
      <button
        v-for="(_, index) in props.slides"
        :key="index"
        @click="currentSlide = index"
        class="w-3 h-3 rounded-full transition-all"
        :class="currentSlide === index ? 'bg-white w-6' : 'bg-white/50'"
      ></button>
    </div>
  </div>
</template>
