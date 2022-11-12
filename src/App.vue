<script setup>
import ParteSuperior from './components/ParteSuperior.vue'
import Rodape from './components/Rodape.vue'
</script>

<template>
  <header>
    <ParteSuperior></ParteSuperior>
  </header>
  <main>
     <div id="app">
         <router-view />
      </div>
  </main>
  
  <Rodape></Rodape>
</template>

<style scoped>

</style>