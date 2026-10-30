<template>
  <header class="relative w-full bg-white px-5 py-5 text-vinci-black border-b border-neutral-200 z-50">
    <div class="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-5">
      
      <!-- Logótipo -->
      <RouterLink to="/" class="flex shrink-0 items-center justify-center gap-3 md:gap-5">
        <img
          src="/assets/logoVinci.png"
          alt="Logo Vinci"
          class="h-auto w-8 md:w-10"
        >
        <span class="text-2xl md:text-[41.66px] font-medium uppercase tracking-[8px] md:tracking-[12px] font-['Genos'] text-neutral-900">
          vinci
        </span>
      </RouterLink>

      <!-- Navegação Desktop -->
      <nav class="hidden md:block main-nav">
        <ul class="flex items-center gap-x-5 lg:gap-x-20 font-['Genos'] uppercase text-base">
          <li>
            <RouterLink to="/" class="text-black transition-colors hover:text-neutral-500">
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/#sobre" class="text-black transition-colors hover:text-neutral-500">
              Sobre
            </RouterLink>
          </li>
          <li>
            <button 
              @click="toggleMenu" 
              class="text-black transition-colors hover:text-neutral-500 flex items-center gap-1 focus:outline-none"
              :class="{ 'font-bold border-b-2 border-black pb-0.5': isMenuOpen }"
            >
              Veículos
            </button>
          </li>
          <li>
            <RouterLink to="/#opcoes" class="text-black transition-colors hover:text-neutral-500">
              Serviços
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/#opcoes" class="text-black transition-colors hover:text-neutral-500">
              Teste Drive
            </RouterLink>
          </li>
        </ul>
      </nav>

      <!-- Botão Hambúrguer para Mobile -->
      <button 
        @click="toggleMenu" 
        class="block md:hidden text-black focus:outline-none p-2"
        aria-label="Abrir Menu"
      >
        <svg v-if="!isMenuOpen" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>

    </div>

    <!-- Painel do Mega Menu (Fundo Branco e Responsivo) -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div 
        v-if="isMenuOpen" 
        class="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-neutral-200 py-6 px-5 md:py-10 md:px-8 font-['Genos'] max-h-[85vh] overflow-y-auto"
      >
        <div class="mx-auto max-w-[1180px] flex flex-col md:flex-row gap-8 md:gap-12">
          
          <!-- Links de Navegação Mobile -->
          <div class="block md:hidden pb-6 border-b border-neutral-200">
            <span class="text-xs tracking-[0.2em] text-neutral-400 uppercase mb-4 block font-semibold">
              Menu Principal
            </span>
            <ul class="flex flex-col gap-3 text-lg text-neutral-900 uppercase tracking-wider">
              <li><RouterLink to="/" @click="isMenuOpen = false">Home</RouterLink></li>
              <li><RouterLink to="/#sobre" @click="isMenuOpen = false">Sobre</RouterLink></li>
              <li><RouterLink to="/#opcoes" @click="isMenuOpen = false">Serviços</RouterLink></li>
              <li><RouterLink to="/#opcoes" @click="isMenuOpen = false">Teste Drive</RouterLink></li>
            </ul>
          </div>

          <!-- Grelha de Veículos (Utilizando apenas 2 imagens base alternadas) -->
          <div class="flex-1">
            <span class="text-xs tracking-[0.2em] text-neutral-400 uppercase mb-6 block font-semibold">
              Veículos
            </span>
            <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pr-0 md:pr-12 md:border-r border-neutral-200">
              <div 
                v-for="(car, index) in vehicles" 
                :key="index" 
                class="flex flex-col items-center text-center group cursor-pointer"
              >
                <div class="h-20 md:h-24 flex items-center justify-center overflow-hidden">
                  <img 
                    :src="car.image" 
                    :alt="car.name" 
                    class="max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 class="text-sm md:text-base font-semibold tracking-wider uppercase mt-2 text-neutral-900">
                  {{ car.name }}
                </h4>
                <div class="flex items-center gap-3 md:gap-4 text-xs text-neutral-500 mt-1">
                  <a href="#" class="hover:underline hover:text-black">Ver mais</a>
                  <a href="#" class="hover:underline hover:text-black">Comprar</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Menu Secundário (Navegue) -->
          <div class="w-full md:w-64 flex flex-col pl-0 md:pl-4 pt-4 md:pt-0 border-t md:border-t-0 border-neutral-200">
            <span class="text-xs tracking-[0.2em] text-neutral-400 uppercase mb-4 md:mb-6 font-semibold">
              Navegue
            </span>

            <ul class="flex flex-col gap-3 md:gap-4 text-sm tracking-[0.15em] font-medium uppercase">
              <li><a href="#" class="text-neutral-800 hover:text-black transition-colors">Ofertas</a></li>
              <li><a href="#" class="text-red-600 font-semibold hover:text-red-700 transition-colors">Test Drive</a></li>
              <li><a href="#" class="text-neutral-800 hover:text-black transition-colors">Lojas</a></li>
              <li><a href="#" class="text-neutral-800 hover:text-black transition-colors">Serviços</a></li>
              <li><a href="#" class="text-neutral-800 hover:text-black transition-colors">SAC</a></li>
              <li><a href="#" class="text-neutral-800 hover:text-black transition-colors">Privacidade</a></li>
            </ul>
          </div>

        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Configurado para alternar apenas entre os seus 2 PNGs principais
const vehicles = ref([
  { name: 'MODELO V1', image: '/assets/modelo1.png' },
  { name: 'MODELO V2', image: '/assets/modelo2.png' },
  { name: 'MODELO V3', image: '/assets/modelo1.png' },
  { name: 'MODELO V1', image: '/assets/modelo2.png' },
  { name: 'MODELO V2', image: '/assets/modelo1.png' },
  { name: 'MODELO V3', image: '/assets/modelo2.png' }
])
</script>