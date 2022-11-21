<template>
  <div>
    <ParteSuperior></ParteSuperior>
    <router-view></router-view>
  </div>
</template>

<script>
import ParteSuperior from '@/components/parteSuperior.vue'
import Rodape from '@/components/rodape.vue'
export default {
  components: {
      ParteSuperior, Rodape
   }
}
</script>

<style>

</style>