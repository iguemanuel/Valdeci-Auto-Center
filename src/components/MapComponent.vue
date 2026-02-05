<script setup lang="ts">
import { MapPinIcon } from '@heroicons/vue/24/solid'

const mapUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.8898783917693!2d-51.49115932356839!3d-25.37500693072003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ef37a081f8719b%3A0xbf0ac7e4909592bc!2sValdeci%20Auto%20Center!5e0!3m2!1spt-BR!2sbr!4v1770247651280!5m2!1spt-BR!2sbr'
</script>

<template>
  <div class="title-container p-8 text-center text-black font-bold">
    <h2 class="text-xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">Localização</h2>
    <div class="h-1.5 w-24 bg-red-500 mx-auto rounded-sm mb-2"></div>
  </div>
  <div class="w-full h-full min-h-100 relative r overflow-hidden shadow-xl">
    <div class="absolute inset-0 flex items-center justify-center -z-10">
      <MapPinIcon class="w-10 h-10 animate-bounce" />
    </div>

    <iframe
      :src="mapUrl"
      width="100%"
      height="100%"
      style="border: 0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      class="absolute inset-0 w-full h-full transition-all duration-500"
    ></iframe>
  </div>
</template>
