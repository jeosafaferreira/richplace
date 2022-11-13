<template>
  <div>
    <ParteSuperior></ParteSuperior>
    <router-view></router-view>
  </div>
</template>

<script>
import ParteSuperior from '@/components/ParteSuperior.vue'
import Rodape from '@/components/Rodape.vue'
export default {
  components: {
      ParteSuperior, Rodape
   }
}
</script>

<style>

</style>