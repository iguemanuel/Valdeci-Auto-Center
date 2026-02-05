<script setup lang="ts">
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
