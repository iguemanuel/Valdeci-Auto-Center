<script setup lang="ts">
import CardServiceComponent from '@/components/CardServiceComponent.vue'
import { services } from '@/data/services'
</script>

<template>
  <section class="min-h-screen bg-white p-8 pt-0">
    <div class="title-container p-8 text-center text-black font-bold">
      <h2 class="text-xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">
        Nossos Serviços
      </h2>
      <div class="h-1.5 w-24 bg-red-500 mx-auto rounded-sm mb-2"></div>
      <p class="text-base font-normal">
        Aqui alguns dos serviços que oferecemos para cuidar do seu veículo
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
      <CardServiceComponent v-for="service in services" :key="service.title" v-bind="service" />
    </div>
  </section>
</template>
