<script setup lang="ts">
import type { Component } from 'vue'

const props = defineProps<{
  icon: Component
  title: string
  description: string
}>()
</script>

<
<template>
  <div class="card-color p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
    <div
      class="icon-card-component flex items-center justify-center w-14 h-14 border border-red-700 shadow-sm transition-shadow duration-300 bg-red-700 mb-4 rounded-md"
    >
      <component :is="props.icon" class="w-8 h-8 text-white" aria-hidden="true" />
    </div>

    <h3 class="text-lg font-semibold mb-2">
      {{ props.title }}
    </h3>

    <p class="text-gray-300 text-sm">
      {{ props.description }}
    </p>
  </div>
</template>

<style scoped>
.card-color {
  background-color: var(--card-color);
}
</style>
