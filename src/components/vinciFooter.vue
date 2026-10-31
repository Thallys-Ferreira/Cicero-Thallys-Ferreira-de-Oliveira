
<template>
  <footer
    id="sobre"
    class="mx-auto my-20 flex w-full max-w-[1180px] flex-col items-start justify-between gap-12 px-5 md:flex-row md:gap-8"
  >
    <!-- Logo -->
    <div class="shrink-0">
      <RouterLink to="/" class="flex items-center gap-[15px]">
        <img
          :src="`${import.meta.env.BASE_URL}assets/logoVinci.png`"
          alt="Logo Vinci"
          class="h-auto w-10"
        >

        <span class="text-[41.66px] font-medium uppercase tracking-[12px]">
          vinci
        </span>
      </RouterLink>
    </div>

    <!-- Sobre -->
    <div class="flex flex-col gap-[15px]">
      <h2 class="mb-[5px] text-[25px] font-normal uppercase tracking-[2px] text-vinci-black">
        Sobre
      </h2>

      <a href="#sobre" class="text-xl text-vinci-gray transition-colors hover:text-black">
        A Marca
      </a>
      <a href="#sobre" class="text-xl text-vinci-gray transition-colors hover:text-black">
        História
      </a>
      <a href="#sobre" class="text-xl text-vinci-gray transition-colors hover:text-black">
        Qualidade
      </a>
      <a href="#sobre" class="text-xl text-vinci-gray transition-colors hover:text-black">
        Onde estamos
      </a>
      <a href="#sobre" class="text-xl text-vinci-gray transition-colors hover:text-black">
        Investidores
      </a>
    </div>

    <!-- Contato -->
    <div class="flex flex-col gap-[15px]">
      <h2 class="mb-[5px] text-[25px] font-normal uppercase tracking-[2px] text-vinci-black">
        Contato
      </h2>

      <a href="#sobre" class="text-xl text-vinci-gray transition-colors hover:text-black">
        Fale Conosco
      </a>
      <a href="#sobre" class="text-xl text-vinci-gray transition-colors hover:text-black">
        Atendimento
      </a>
      <a href="#sobre" class="text-xl text-vinci-gray transition-colors hover:text-black">
        SAC
      </a>
    </div>

    <!-- SAC -->
    <div class="flex flex-col gap-[15px]">
      <h2 class="mb-[5px] text-[25px] font-normal uppercase tracking-[2px] text-vinci-black">
        SAC
      </h2>

      <a href="#sobre" class="text-xl text-vinci-gray transition-colors hover:text-black">
        Canais Oficiais
      </a>
      <a href="#sobre" class="text-xl text-vinci-gray transition-colors hover:text-black">
        Redes Sociais
      </a>
      <a href="#sobre" class="text-xl text-vinci-gray transition-colors hover:text-black">
        Suporte
      </a>
    </div>
  </footer>

  <div
    class="mx-5 my-10 flex flex-col gap-2.5 text-lg tracking-[4px] text-[#666666] md:mx-10 md:tracking-[12px]"
  >
    <p>©Copyright {{ new Date().getFullYear() }}.</p>
    <p>Todos os Direitos Reservados.</p>
  </div>
</template>
