<script setup lang="ts">
const props = defineProps<{
  img: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="card bg-base-100 w-full max-w-sm mx-auto shadow-sm">
    <figure class="aspect-video">
      <img class="w-full h-full object-cover" :src="props.img" :alt="props.title" />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-lg">
        {{ props.title }}
      </h2>
      <p class="text-sm">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>
