<template>
	<div class="container" style="padding-top: 40px;">
    <div style="width: 400px">
      <h3>Detalhes da Casa</h3>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th scope="row" class="text-right">Localização:</th>
            <td>{{localizacao}}</td>
          </tr>
          <tr>
            <th scope="row" class="text-right">Área Construída:</th>
            <td>{{area}} m²</td>
          </tr>
          <tr>
            <th scope="row" class="text-right">Valor:</th>
            <td>R$ {{valor}}</td>
          </tr>
        </tbody>
      </table>
    </div>
      <label><b>Alterar Localização:</b></label><br>
      <input type="text" v-model="novaLocalizacao"/>&nbsp;
      <input type="button" value="Salvar" @click="alterarLocalizacao()"/>
      <br>
      <label><b>Alterar Área Construída (m²):</b></label><br>
      <input type="text" v-model="novaArea"/>&nbsp;
      <input type="button" value="Salvar" @click="alterarArea()"/>
      <br>
      <label><b>Alterar Valor:</b></label><br>
      <input type="text" v-model="novoValor"/>&nbsp;
      <input type="button" value="Salvar" @click="alterarValor()"/>
  </div>
</template>

<script>
export default {
  data: function(){
    return{
      localizacao: 'Alphaville',
      area: '150',
      valor: '2.000.000',
      
      novaLocalizacao: '',
      novaArea: '',
      novoValor: '',
    }
  },
  methods:{
    alterarLocalizacao(){
      this.localizacao=this.novaLocalizacao
      this.novaLocalizacao=''
    },
    alterarArea(){
      this.area=this.novaArea
      this.novaArea=''
    },
    alterarValor(){
      this.valor=this.novoValor
      this.novoValor=''
    }
  }

}
</script>

<style>

</style>