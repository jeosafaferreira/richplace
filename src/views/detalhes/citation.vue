<template>
	<div class="container" style="padding-top: 40px;">
		<h3>Detalhes do Avião</h3>
    Modelo: Citation X<br>
    Fabricante: Cessna<br>
    Ano de Fabricação: 2017<br>
    Valor: R$2.000.000<br><br>
    Novo valor: {{$route.params.valor}}
    Alterar o valor:
    <input v-model="valor" type="text"/>
    <router-link :to="'citation/'  valor">Alterar valor</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>