<script setup lang="ts">
// Não precisamos de imports externos para este footer estático
const currentYear = new Date().getFullYear()

// Links de navegação rápida
const companyLinks = [
  { text: 'Início', href: '#home' },
  { text: 'Quem Somos', href: '#sobre' },
  { text: 'Nossos Serviços', href: '#servicos' },
  { text: 'Contato', href: '#contato' },
]

// Serviços principais (Resumo)
const serviceLinks = [
  'Mecânica Geral',
  'Suspensão e Freios',
  'Alinhamento 3D',
  'Troca de Óleo',
  'Injeção Eletrônica',
]
</script>

<template>
  <footer class="background-primary text-gray-400 pt-16 pb-8 border-t border-gray-800">
    <div class="max-w-7xl mx-auto px-4 md:px-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div class="lg:col-span-2 space-y-6">
          <div class="logo">
            <img
              class="w-48"
              src="/src/assets/imgs/valdecirLogo/logo2.svg"
              alt="Valdeci Auto Center"
            />
          </div>
          <p class="text-sm leading-relaxed max-w-sm">
            Sua oficina de confiança em Guarapuava desde 2012. Aliamos tradição, equipamentos
            modernos e transparência para garantir a segurança do seu veículo e da sua família.
          </p>

          <div class="flex gap-4 pt-2">
            <a href="#" class="social-btn">
              <svg fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                />
              </svg>
            </a>
            <a href="#" class="social-btn">
              <svg fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
            <a href="#" class="social-btn">
              <svg fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-white font-bold uppercase mb-6 tracking-wide">Serviços</h3>
          <ul class="space-y-4">
            <li v-for="service in serviceLinks" :key="service">
              <a href="#servicos" class="hover:text-red-500 transition-colors duration-200 text-sm">
                {{ service }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-bold uppercase mb-6 tracking-wide">Companhia</h3>
          <ul class="space-y-4">
            <li v-for="link in companyLinks" :key="link.text">
              <a
                :href="link.href"
                class="hover:text-red-500 transition-colors duration-200 text-sm"
              >
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500"
      >
        <div class="mb-4 md:mb-0">
          <p>
            Copyright © {{ currentYear }} Valdeci Auto Center <span class="mx-2">|</span> Design by
            Igor Web Developer
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
