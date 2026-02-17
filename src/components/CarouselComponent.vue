<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

export interface CarouselSlide {
  id: number | string
  image: string
  imageMobile?: string // <-- Usa a URL da imagem mobile diretamente
  alt?: string
}

const props = defineProps<{
  slides: CarouselSlide[]
}>()

const currentSlide = ref(0)
let autoplayInterval: ReturnType<typeof setInterval> | null = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % props.slides.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + props.slides.length) % props.slides.length
}

const startAutoplay = () => {
  stopAutoplay()
  autoplayInterval = setInterval(() => {
    nextSlide()
  }, 4000)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
    autoplayInterval = null
  }
}

onMounted(() => startAutoplay())
onUnmounted(() => stopAutoplay())
</script>

<template>
  <div
    class="relative w-full overflow-hidden shadow-xl group"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <div
      class="flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div
        v-for="slide in props.slides"
        :key="slide.id"
        class="w-full flex-shrink-0 relative aspect-[3/4] md:aspect-auto md:h-[600px]"
      >
        <picture class="w-full h-full block">
          <source media="(max-width: 767px)" :srcset="slide.imageMobile" />
          <img
            :src="slide.image"
            :alt="slide.alt"
            class="w-full h-full object-cover object-center"
          />
        </picture>
      </div>
    </div>

    <div
      class="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
    >
      <button
        @click="prevSlide"
        class="pointer-events-auto btn btn-circle btn-sm md:btn-md bg-black/30 hover:bg-black/60 text-white border-none backdrop-blur-sm"
      >
        ❮
      </button>
      <button
        @click="nextSlide"
        class="pointer-events-auto btn btn-circle btn-sm md:btn-md bg-black/30 hover:bg-black/60 text-white border-none backdrop-blur-sm"
      >
        ❯
      </button>
    </div>

    <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
      <button
        v-for="(_, index) in props.slides"
        :key="index"
        @click="currentSlide = index"
        class="h-1.5 rounded-full transition-all duration-300 shadow-sm backdrop-blur-sm"
        :class="
          currentSlide === index
            ? 'bg-white w-6 md:w-8'
            : 'bg-white/40 w-3 md:w-4 hover:bg-white/80'
        "
      ></button>
    </div>
  </div>
</template>
