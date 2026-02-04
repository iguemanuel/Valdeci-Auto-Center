<script setup lang="ts">
import IconCardComponent from '@/components/IconCardComponent.vue'
import { reasons } from '@/data/reasons'
import { onMounted } from 'vue'

onMounted(() => {
  const script = document.createElement('script')
  script.src = 'https://static.elfsight.com/platform/platform.js'
  script.setAttribute('data-use-service-core', '')
  script.defer = true
  document.body.appendChild(script)
})
</script>

<template>
  <section class="background-primary py-16">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-16 justify-items-center mb-12">
      <div class="col-span-1 md:col-span-2 text-center md:text-left">
        <div class="about-services">
          <span class="text-red-500 font-semibold uppercase text-sm tracking-wider">
            Aqui você encontra qualidade e em quem confiar
          </span>
          <h2 class="mt-4 uppercase font-bold text-white text-2xl md:text-3xl">
            Por que escolher nossos serviços?
          </h2>
          <p class="mt-4 text-white leading-relaxed">
            No Valdeci Auto Center, priorizamos a satisfação do cliente e a excelência em cada
            serviço prestado. Nossa equipe une tradição e resiliência desde 2012 para garantir sua
            segurança em Guarapuava.
          </p>
        </div>
      </div>

      <div class="logo hidden md:flex items-center justify-center p-8">
        <img
          class="w-full max-w-[300px]"
          src="/src/assets/imgs/logo2.svg"
          alt="Logo Valdeci Auto Center"
        />
      </div>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-8 px-4 md:px-16 justify-items-center"
    >
      <div v-for="reason in reasons" :key="reason.title">
        <IconCardComponent
          :icon="reason.icon"
          :title="reason.title"
          :description="reason.description"
        />
      </div>
    </div>
  </section>

  <section class="w-full bg-white py-16">
    <div class="max-w-7xl mx-auto px-4 md:px-16">
      <div class="text-center mb-8">
        <h2 class="text-xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">
          O que nossos clientes dizem
        </h2>
        <div class="h-1 w-16 bg-red-500 mx-auto rounded-full mt-2"></div>
      </div>

      <div class="elfsight-app-2260d322-4175-440f-acc6-48d15cebf289" data-elfsight-app-lazy></div>
    </div>
  </section>
</template>
