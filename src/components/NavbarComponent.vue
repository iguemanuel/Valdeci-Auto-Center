<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Função para fechar o menu ao clicar em um link (Melhor UX no celular)
const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav
    class="sticky top-0 z-50 flex items-center justify-between bg-[#111111] px-8 py-4 text-white shadow-md border-b border-gray-800"
  >
    <div class="logo">
      <a href="#" class="flex items-center" @click="closeMenu">
        <img
          src="@/assets/imgs/valdecirLogo/logo.png"
          alt="Valdeci Auto Center"
          class="h-10 md:h-12 w-auto"
        />
      </a>
    </div>

    <div class="hidden md:flex items-center space-x-8">
      <ul class="flex space-x-8 text-sm font-semibold tracking-wide uppercase">
        <li><a class="hover:text-red-500 transition-colors duration-200" href="#home">Home</a></li>
        <li>
          <a class="hover:text-red-500 transition-colors duration-200" href="#servicos">Serviços</a>
        </li>
        <li>
          <a class="hover:text-red-500 transition-colors duration-200" href="#sobre">Sobre</a>
        </li>
        <li>
          <a class="hover:text-red-500 transition-colors duration-200" href="#avaliacoes"
            >Avaliações</a
          >
        </li>
        <li>
          <a class="hover:text-red-500 transition-colors duration-200" href="#localizacao"
            >Localização<object data="" type=""></object
          ></a>
        </li>
      </ul>

      <a href="https://wa.me/5542999999999" target="_blank">
        <button
          class="rounded-full bg-red-600 px-6 py-2.5 text-sm font-bold text-white hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
        >
          Entrar em contato
        </button>
      </a>
    </div>

    <button @click="toggleMenu" class="block md:hidden text-white focus:outline-none p-2">
      <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-5 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-5 opacity-0"
    >
      <div
        v-show="isMenuOpen"
        class="absolute top-full left-0 w-full bg-[#111111] border-b border-gray-800 flex flex-col items-center py-6 space-y-6 md:hidden shadow-2xl"
      >
        <a @click="closeMenu" class="hover:text-red-500 text-lg font-semibold" href="#home">Home</a>
        <a @click="closeMenu" class="hover:text-red-500 text-lg font-semibold" href="#servicos"
          >Serviços</a
        >
        <a @click="closeMenu" class="hover:text-red-500 text-lg font-semibold" href="#sobre"
          >Sobre</a
        >
        <a @click="closeMenu" class="hover:text-red-500 text-lg font-semibold" href="#avaliacoes"
          >Avaliações</a
        >
        <a @click="closeMenu" class="hover:text-red-500 text-lg font-semibold" href="#localizacao"
          >Localização</a
        >

        <a href="https://wa.me/5542999999999" target="_blank" class="w-full px-8">
          <button
            class="w-full rounded-full bg-red-600 px-4 py-3 text-white font-bold hover:bg-red-700 transition"
          >
            Falar no WhatsApp
          </button>
        </a>
      </div>
    </transition>
  </nav>
</template>
