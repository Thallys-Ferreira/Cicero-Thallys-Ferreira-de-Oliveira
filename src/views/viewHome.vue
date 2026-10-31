<script setup>
const carros = [
  {
    nome: 'Vinci Model V2',
    imagem: `${import.meta.env.BASE_URL}assets/modelo1.jpeg`,
    alt: 'Vinci Model V2',
    descricao: 'A SUV mais robusta da categoria',
    potencia: '300 cavalos',
    autonomia: '500km por carga',
    peso: '1.500 kg',
    tecnologia: 'GPS e Smartink'
  },
  {
    nome: 'Vinci Model V1',
    imagem: `${import.meta.env.BASE_URL}assets/modelo2.png`,
    alt: 'Vinci Model V1',
    descricao: 'A SUV mais robusta da categoria',
    potencia: '300 cavalos',
    autonomia: '500km por carga',
    peso: '1.500 kg',
    tecnologia: 'GPS e Smartink'
  }
]
</script>

<template>
  <main>
    <!-- Banner principal -->
    <section
      class="flex h-[500px] w-full items-end bg-cover bg-center bg-no-repeat px-5 pb-[50px] pt-10"
      :style="{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/banner1.png)` }"
    >
      <div class="mx-auto flex w-full max-w-[1180px] flex-col items-start justify-end">
        <div class="flex w-full flex-col md:w-1/2">
          <h1 class="text-[48px] font-normal leading-[1.3] text-white md:text-[72px]">
            VINCI MODEL V3
          </h1>

          <p class="my-5 text-xl leading-[2] text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.
          </p>

          <div class="flex flex-wrap gap-5">
            <a
              href="#nossos-veiculos"
              class="rounded bg-vinci-red px-8 py-[15px] text-xl font-normal uppercase text-white no-underline transition-opacity duration-300 hover:opacity-[0.85] md:px-20"
            >
              Modelos
            </a>

            <a
              href="#opcoes"
              class="rounded border border-white bg-transparent px-8 py-[15px] text-xl font-normal uppercase text-white no-underline transition-opacity duration-300 hover:opacity-[0.85] md:px-20"
            >
              Test Drive
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Veículos em destaque -->
    <section class="mx-auto w-full max-w-[1180px] px-5">
      <div class="my-[60px] flex flex-col gap-12 md:flex-row md:gap-[100px]">
        <!-- Vinci Model V2 -->
        <article class="min-w-0 flex-1">
          <div class="flex flex-col justify-between gap-5 sm:flex-row sm:gap-4">
            <h2 class="w-full text-2xl uppercase tracking-[6px] text-black sm:w-[40%] sm:tracking-[12px]">
              Vinci Model V2
            </h2>

            <div class="text-left">
              <h3 class="text-lg text-black">
                Potência:
                <span class="ml-[15px] font-normal text-[#979797]">300 cavalos</span>
              </h3>
              <h3 class="text-lg text-black">
                Autonomia:
                <span class="ml-[15px] font-normal text-[#979797]">500km por carga</span>
              </h3>
              <h3 class="text-lg text-black">
                Peso:
                <span class="ml-[15px] font-normal text-[#979797]">1.500 kg</span>
              </h3>
              <h3 class="text-lg text-black">
                Tecnologia:
                <span class="ml-[15px] font-normal text-[#979797]">GPS e Smartink</span>
              </h3>
            </div>
          </div>

          <figure class="mt-5">
            <img
              :src="`${import.meta.env.BASE_URL}assets/modelo1.png`"
              alt="Vinci Model V2"
              class="mx-auto mt-[60px] mb-5 h-auto max-w-[80%] object-contain"
            >
          </figure>

          <div class="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p class="text-xl text-vinci-muted">A SUV mais robusta da categoria</p>
            <RouterLink
              to="/veiculos2"
              class="text-right text-xl uppercase tracking-[2px] text-vinci-black transition-opacity hover:opacity-60"
            >
              Conheça
            </RouterLink>
          </div>
        </article>

        <!-- Vinci Model V1 -->
        <article class="min-w-0 flex-1">
          <div class="flex flex-col justify-between gap-5 sm:flex-row sm:gap-4">
            <h2 class="w-full text-2xl uppercase tracking-[6px] text-black sm:w-[40%] sm:tracking-[12px]">
              Vinci Model V1
            </h2>

            <div class="text-left">
              <h3 class="text-lg text-black">
                Potência:
                <span class="ml-[15px] font-normal text-[#979797]">300 cavalos</span>
              </h3>
              <h3 class="text-lg text-black">
                Autonomia:
                <span class="ml-[15px] font-normal text-[#979797]">500km por carga</span>
              </h3>
              <h3 class="text-lg text-black">
                Peso:
                <span class="ml-[15px] font-normal text-[#979797]">1.500 kg</span>
              </h3>
              <h3 class="text-lg text-black">
                Tecnologia:
                <span class="ml-[15px] font-normal text-[#979797]">GPS e Smartink</span>
              </h3>
            </div>
          </div>

          <figure class="mt-5">
            <img
              :src="`${import.meta.env.BASE_URL}assets/modelo2.png`"
              alt="Vinci Model V1"
              class="mx-auto mt-5 mb-0 h-auto w-123 object-contain"
            >
          </figure>

          <div class="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p class="text-xl text-vinci-muted">A SUV mais robusta da categoria</p>
            <RouterLink
              to="/veiculos"
              class="text-right text-xl uppercase tracking-[2px] text-vinci-black transition-opacity hover:opacity-60"
            >
              Conheça
            </RouterLink>
          </div>
        </article>
      </div>
    </section>

    <!-- Banner promocional 1 -->
    <section
      class="flex h-[400px] w-full items-end bg-cover bg-center bg-no-repeat px-5 pb-[50px] pt-10"
      :style="{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/banner2.jpeg)` }"
      aria-label="Banner promocional Vinci"
    ></section>

    <!-- Menu de opções -->
    <section id="opcoes" class="mx-5 my-5 scroll-mt-5 md:mx-10">
      <ul class="m-0 w-full list-none p-0">
        <li>
          <a
            href="#teste-drive"
            class="flex items-center justify-between py-2 text-[36px] text-black no-underline transition-opacity duration-300 hover:opacity-70 md:text-[72px]"
          >
            <span>Agende um Teste Drive</span>
            <span class="font-bold">&gt;</span>
          </a>
        </li>
        <li>
          <a
            href="#ofertas"
            class="flex items-center justify-between py-2 text-[36px] text-black no-underline transition-opacity duration-300 hover:opacity-70 md:text-[72px]"
          >
            <span>Veja Ofertas</span>
            <span class="font-bold">&gt;</span>
          </a>
        </li>
        <li>
          <a
            href="#loja"
            class="flex items-center justify-between py-2 text-[36px] text-black no-underline transition-opacity duration-300 hover:opacity-70 md:text-[72px]"
          >
            <span>Encontre uma Loja</span>
            <span class="font-bold">&gt;</span>
          </a>
        </li>
      </ul>
    </section>

    <!-- Banner promocional 2 -->
    <section
      class="flex h-[400px] w-full items-end bg-cover bg-center bg-no-repeat px-5 pb-[50px] pt-10"
      :style="{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/banner3.jpeg)` }"
      aria-label="Segundo banner promocional Vinci"
    ></section>
  </main>
</template>