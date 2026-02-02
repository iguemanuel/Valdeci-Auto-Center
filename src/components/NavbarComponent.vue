<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="relative flex items-center justify-between navbar background-navbar p-4 text-white">
    <div class="logo">
      <a href="#" class="flex items-center">
        <img src="@/assets/logo.png" alt="Logo" class="h-14 w-auto mr-4" />
      </a>
    </div>

    <div class="hidden md:flex items-center space-x-8">
      <ul class="flex space-x-6 text-lg">
        <li><a class="hover:text-gray-300 transition" href="#">Home</a></li>
        <li><a class="hover:text-gray-300 transition" href="#">Sobre</a></li>
        <li><a class="hover:text-gray-300 transition" href="#">Serviços</a></li>
        <li><a class="hover:text-gray-300 transition" href="#">Contato</a></li>
      </ul>

      <a href="#">
        <button
          class="rounded bg-red-500 px-4 py-2 text-white font-bold hover:bg-red-600 transition duration-300 shadow-lg"
        >
          Entrar em contato
        </button>
      </a>
    </div>

    <button @click="toggleMenu" class="block md:hidden focus:outline-none">
      <svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          v-if="!isMenuOpen"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </button>

    <div
      v-show="isMenuOpen"
      class="absolute top-full left-0 w-full background-navbar flex flex-col items-center py-4 space-y-4 md:hidden shadow-xl z-50"
    >
      <a class="hover:text-gray-300 text-lg" href="#">Home</a>
      <a class="hover:text-gray-300 text-lg" href="#">Sobre</a>
      <a class="hover:text-gray-300 text-lg" href="#">Serviços</a>
      <a class="hover:text-gray-300 text-lg" href="#">Contato</a>

      <a href="#" class="cursor-pointer w-full px-4">
        <button
          class="w-full rounded bg-red-500 px-4 py-3 text-white font-bold hover:bg-red-600 transition"
        >
          Entrar em contato
        </button>
      </a>
    </div>
  </nav>
</template>

<style scoped>
.background-navbar {
  background-color: var(--primary-color);
}
</style>
