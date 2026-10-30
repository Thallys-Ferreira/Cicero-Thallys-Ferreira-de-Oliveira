
<script setup>
import vinciHeader from './components/vinciHeader.vue'
import vinciFooter from './components/vinciFooter.vue'
import megaMenu from './components/megaMenu.vue';
</script>

<template>
  <div class="min-h-screen">
    <vinciHeader />
    <RouterView />

    <vinciFooter />
  </div>
</template>

