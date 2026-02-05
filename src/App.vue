<script setup lang="ts">
import FooterComponent from './components/FooterComponent.vue'
import NavbarComponent from './components/NavbarComponent.vue'
import LocationView from './views/LocationView.vue'
import HomeView from './views/HomeView.vue'
import ReasonsView from './views/ReasonsView.vue'
import ServiceView from './views/ServiceView.vue'
import ReviewsView from './views/ReviewsView.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
</script>

<template>
  <NavbarComponent />
  <div id="home" class="scroll-mt-28">
    <HomeView />
  </div>
  <div id="servicos" class="scroll-mt-28">
    <ServiceView />
  </div>
  <div id="sobre" class="scroll-mt-28">
    <ReasonsView />
  </div>
  <div id="avaliacoes" class="scroll-mt-28">
    <ReviewsView />
  </div>
  <div id="localizacao" class="scroll-mt-28">
    <LocationView />
  </div>
  <FooterComponent />
  <WhatsAppButton />
</template>

<style scoped></style>
