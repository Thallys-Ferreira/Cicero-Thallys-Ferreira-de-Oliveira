<template>
  <header class="relative w-full bg-white border-b border-neutral-200 font-['Genos'] z-50">
    <!-- Navbar Principal -->
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <!-- Logo Vinci -->
      <div class="flex items-center gap-3 cursor-pointer">
        <img src="/assets/logoVinci.png" alt="Vinci Logo" class="h-6 w-auto" />
        <span class="text-2xl font-semibold tracking-[0.25em] uppercase text-neutral-900">VINCI</span>
      </div>

      <!-- Links de Navegação do Topo -->
      <nav class="hidden md:flex items-center gap-10 text-sm tracking-[0.15em] uppercase text-neutral-600 font-medium">
        <a href="#" class="hover:text-black transition-colors">HOME</a>
        <a href="#" class="hover:text-black transition-colors">SOBRE</a>
        
        <!-- Botão que ativa/desativa o Mega Menu -->
        <button 
          @click="isMenuOpen = !isMenuOpen" 
          class="hover:text-black transition-colors flex items-center gap-1 focus:outline-none"
          :class="{ 'text-black font-semibold border-b-2 border-black pb-1': isMenuOpen }"
        >
          VEÍCULOS
        </button>

        <a href="#" class="hover:text-black transition-colors">SERVIÇOS</a>
        <a href="#" class="hover:text-black transition-colors">TEST DRIVE</a>
      </nav>
    </div>

    <!-- Painel do Mega Menu (Desdobrável) -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="isMenuOpen" 
        class="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-neutral-100 py-10 px-8"
      >
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
          
          <!-- Lado Esquerdo: Grelha de Veículos (3 colunas, 2 linhas) -->
          <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pr-0 md:pr-12 md:border-r border-neutral-200">
            
            <div 
              v-for="(car, index) in vehicles" 
              :key="index" 
              class="flex flex-col items-center text-center group cursor-pointer"
            >
              <div class="h-28 flex items-center justify-center overflow-hidden">
                <img 
                  :src="car.image" 
                  :alt="car.name" 
                  class="max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 class="text-base font-semibold tracking-wider uppercase mt-3 text-neutral-900">
                {{ car.name }}
              </h4>
              <div class="flex items-center gap-4 text-xs text-neutral-500 mt-1">
                <a href="#" class="hover:underline hover:text-black">Ver mais</a>
                <a href="#" class="hover:underline hover:text-black">Comprar</a>
              </div>
            </div>

          </div>

          <!-- Lado Direito: Menu Lateral de Navegação Secundária -->
          <div class="w-full md:w-64 flex flex-col pl-0 md:pl-4">
            <span class="text-xs tracking-[0.2em] text-neutral-400 uppercase mb-6 font-semibold">
              NAVEGUE
            </span>

            <ul class="flex flex-col gap-4 text-sm tracking-[0.15em] font-medium uppercase">
              <li><a href="#" class="text-neutral-800 hover:text-red-600 transition-colors">OFERTAS</a></li>
              <li><a href="#" class="text-red-600 font-semibold hover:text-red-700 transition-colors">TEST DRIVE</a></li>
              <li><a href="#" class="text-neutral-800 hover:text-red-600 transition-colors">LOJAS</a></li>
              <li><a href="#" class="text-neutral-800 hover:text-red-600 transition-colors">SERVIÇOS</a></li>
              <li><a href="#" class="text-neutral-800 hover:text-red-600 transition-colors">SAC</a></li>
              <li><a href="#" class="text-neutral-800 hover:text-red-600 transition-colors">PRIVACIDADE</a></li>
            </ul>
          </div>

        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

// Estado para abrir/fechar o mega menu
const isMenuOpen = ref(true)

// Dados dinâmicos dos modelos de carros
const vehicles = ref([
  { name: 'MODELO V1', image: '/assets/car-white-suv.png' },
  { name: 'MODELO V2', image: '/assets/car-red-hatch.png' },
  { name: 'MODELO V3', image: '/assets/car-black-suv.png' },
  { name: 'MODELO V1', image: '/assets/car-green-suv.png' },
  { name: 'MODELO V1', image: '/assets/car-white-suv-2.png' },
  { name: 'MODELO V1', image: '/assets/car-white-suv-3.png' }
])
</script>