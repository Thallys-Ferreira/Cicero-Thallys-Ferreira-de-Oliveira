<script setup>
const base = import.meta.env.BASE_URL
</script>

<template>
  <main class="mx-auto w-full max-w-[1180px] px-5 py-12">
    <section
      class="mx-auto flex w-full max-w-[800px] flex-col items-center"
    >
      <!-- Imagem do carro -->
      <figure class="w-full">
        <img
          :src="`${base}assets/viewmodel1.png`"
          alt="Vinci Model V2"
          class="mx-auto h-auto w-full object-contain"
        >
      </figure>

      <!-- Textos -->
      <div class="flex w-full flex-col items-center">
        <h1 class="text-center text-4xl font-normal uppercase md:text-6xl">
          Vinci Model V2
        </h1>

        <p class="mt-3 text-center text-base md:text-xl leading-[1.5] text-black">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever.
        </p>

        <!-- Botões -->
        <div class="mt-5 flex flex-wrap justify-center gap-5 w-full sm:w-auto">
          <a
            href="#nossos-veiculos"
            class="rounded bg-vinci-red px-8 py-[15px] text-lg md:text-xl font-normal uppercase text-white no-underline transition-opacity duration-300 hover:opacity-85 text-center md:px-20 w-full sm:w-auto"
          >
            Modelos
          </a>

          <a
            href="#opcoes"
            class="rounded border border-black bg-transparent px-8 py-[15px] text-lg md:text-xl font-normal uppercase text-black no-underline transition-opacity duration-300 hover:opacity-85 text-center md:px-20 w-full sm:w-auto"
          >
            Test Drive
          </a>
        </div>
      </div>
    </section>

    <div class="flex w-full flex-col items-center py-12">
      <h3 class="text-lg md:text-xl uppercase mb-10 text-[#979797] text-center">Tecnologia alinhada ao Futuro</h3>
      <div class="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-8 text-4xl md:text-6xl text-center">
        <p class="leading-[1.5] flex flex-col">520 KM <span class="text-xs md:text-xl text-neutral-500 uppercase mt-2">com 1 carga</span></p>
        <div class="hidden md:block mt-5 h-16 w-[1px] bg-neutral-300"></div>
        <p class="leading-[1.5] flex flex-col">2.800 RPM <span class="text-xs md:text-xl text-neutral-500 uppercase mt-2">de torque</span></p>
        <div class="hidden md:block mt-5 h-16 w-[1px] bg-neutral-300"></div>
        <p class="leading-[1.5] flex flex-col">10 anos <span class="text-xs md:text-xl text-neutral-500 uppercase mt-2">garantia</span></p>
      </div>
    </div>

    <section>
      <figure class="w-full">
        <img :src="`${base}assets/banner4.png`" alt="" class="w-full h-auto object-cover">
      </figure>
    </section>

    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
      <div>
        <h2 class="text-xl uppercase mb-5">Recarga Rápida</h2>
        <p class="text-sm text-[#979797] mb-5 px-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. </p>
      <figure><img :src="`${base}assets/recarga.png`" alt="" class="w-full h-auto"></figure>
      </div>
      <div>
        <h2 class="text-xl uppercase mb-5">Painel de Instrumentos</h2>
        <p class="text-sm text-[#979797] mb-5 px-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. </p>
        <figure><img :src="`${base}assets/painel.png`" alt="" class="w-full h-auto"></figure>
      </div>
      <div>
        <h2 class="text-xl uppercase mb-5">Pontos de Recarga</h2>
        <p class="text-sm text-[#979797] mb-5 px-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
       <figure><img :src="`${base}assets/pontos.png`" alt="" class="w-full h-auto"></figure>
      </div>
      <div>
        <h2 class="text-xl uppercase mb-5">Design Premiado</h2>
        <p class="text-sm text-[#979797] mb-5 px-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. </p>
        <figure><img :src="`${base}assets/design.png`" alt="" class="w-full h-auto"></figure>
      </div>
    </section>

    <section class="px-1 py-10">
      <div class="flex flex-col lg:flex-row justify-between items-start gap-10">
        
        <!-- Lado Esquerdo: Título e Descrição -->
        <div>
          <h2 class="text-3xl md:text-4xl uppercase font-['Genos']">Vinci Model V2</h2>
          <p class="text-base md:text-lg text-[#666666] mt-3">
            Lorem Ipsum is simply dummy text of the printing <br class="hidden sm:inline">
            and typesetting industry. Lorem Ipsum has been <br class="hidden sm:inline">
            the industry's standard dummy text ever.
          </p>
        </div>

        <!-- Lado Direito: Grelha de Especificações (A a H) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 w-full lg:w-auto">
          
          <!-- Coluna Esquerda (A, B, C, D) -->
          <div class="flex flex-col gap-6">
            <div class="flex items-center gap-4">
              <span class="w-5 h-5 bg-neutral-900 text-white rounded-full flex items-center justify-center font-medium shrink-0">A</span>
              <span class="text-sm tracking-[0.15em] text-neutral-800 uppercase font-['Genos']">Retrovisores inteligentes</span>
            </div>

            <div class="flex items-center gap-4">
              <span class="w-5 h-5 bg-neutral-900 text-white rounded-full flex items-center justify-center font-medium shrink-0">B</span>
              <span class="text-sm tracking-[0.15em] text-neutral-800 uppercase font-['Genos']">Rodas de liga leve</span>
            </div>

            <div class="flex items-center gap-4">
              <span class="w-5 h-5 bg-neutral-900 text-white rounded-full flex items-center justify-center font-medium shrink-0">C</span>
              <span class="text-sm tracking-[0.15em] text-neutral-800 uppercase font-['Genos']">Reconhecimento digital</span>
            </div>

            <div class="flex items-center gap-4">
              <span class="w-5 h-5 bg-neutral-900 text-white rounded-full flex items-center justify-center font-medium shrink-0">D</span>
              <span class="text-sm tracking-[0.15em] text-neutral-800 uppercase font-['Genos']">Sensor de proximidade</span>
            </div>
          </div>

          <!-- Coluna Direita (E, F, G, H) -->
          <div class="flex flex-col gap-6">
            <div class="flex items-center gap-4">
              <span class="w-5 h-5 bg-neutral-900 text-white rounded-full flex items-center justify-center font-medium shrink-0">E</span>
              <span class="text-sm tracking-[0.15em] text-neutral-800 uppercase font-['Genos']">Antena 5G</span>
            </div>

            <div class="flex items-center gap-4">
              <span class="w-5 h-5 bg-neutral-900 text-white rounded-full flex items-center justify-center font-medium shrink-0">F</span>
              <span class="text-sm tracking-[0.15em] text-neutral-800 uppercase font-['Genos']">Design sofisticado</span>
            </div>

            <div class="flex items-center gap-4">
              <span class="w-5 h-5 bg-neutral-900 text-white rounded-full flex items-center justify-center font-medium shrink-0">G</span>
              <span class="text-sm tracking-[0.15em] text-neutral-800 uppercase font-['Genos']">Abertura automatica</span>
            </div>

            <div class="flex items-center gap-4">
              <span class="w-5 h-5 bg-neutral-900 text-white rounded-full flex items-center justify-center font-medium shrink-0">H</span>
              <span class="text-sm tracking-[0.15em] text-neutral-800 uppercase font-['Genos']">Camera de estacionamento</span>
            </div>
          </div>

        </div>

      </div>

      <!-- Imagem do Carro na parte inferior -->
      <div class="px-0 sm:px-15 py-5 mt-10">
        <figure>
          <img :src="`${base}assets/specs.png`" alt="Vinci Model V2 Specs" class="w-full h-auto object-contain">
        </figure>
      </div>
    </section>

    <section class="flex flex-col items-center gap-5 mx-0 sm:mx-10 md:mx-20 lg:mx-40">
      <div class="w-full">
        <h2 class="text-center text-4xl">FAQ</h2>
        <p class="text-center text-[#979797]">Perguntas frequentes</p>
        <ul class="m-0 w-full list-none p-0">
          <li>
            <a
              href="#loja"
              class="flex items-center justify-between py-2 text-sm sm:text-base md:text-[20px] text-black no-underline transition-opacity duration-300 hover:opacity-70 gap-4"
            >
              <span>Qual é a autonomia real da bateria em diferentes condições de condução?</span>
              <span class="font-bold">&gt;</span>
            </a>
          </li>
          <li>
            <a
              href="#loja"
              class="flex items-center justify-between py-2 text-sm sm:text-base md:text-[20px] text-black no-underline transition-opacity duration-300 hover:opacity-70 gap-4"
            >
              <span>Quanto tempo o carro leva para carregar em tomadas residenciais e em <br class="hidden md:inline">carregadores rápidos?</span>
              <span class="font-bold">&gt;</span>
            </a>
          </li>
          <li>
            <a
              href="#loja"
              class="flex items-center justify-between py-2 text-sm sm:text-base md:text-[20px] text-black no-underline transition-opacity duration-300 hover:opacity-70 gap-4"
            >
              <span>Como funciona a infraestrutura de recarga para viagens de longa distância?</span>
              <span class="font-bold">&gt;</span>
            </a>
          </li>
          <li>
            <a
              href="#loja"
              class="flex items-center justify-between py-2 text-sm sm:text-base md:text-[20px] text-black no-underline transition-opacity duration-300 hover:opacity-70 gap-4"
            >
              <span>Qual é o tempo de garantia da bateria e qual a sua vida útil estimada?</span>
              <span class="font-bold">&gt;</span>
            </a>
          </li>
          <li>
            <a
              href="#loja"
              class="flex items-center justify-between py-2 text-sm sm:text-base md:text-[20px] text-black no-underline transition-opacity duration-300 hover:opacity-70 gap-4"
            >
              <span>Quais são as principais economias em manutenção e impostos comparado a <br class="hidden md:inline">um carro a combustão?</span>
              <span class="font-bold">&gt;</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>