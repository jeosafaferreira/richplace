<template>
	<div class="container" style="padding-top: 40px;">
    <div style="width: 400px">
      <h3>Detalhes do Jet Ski</h3>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <th scope="row" class="text-right">Modelo:</th>
            <td>{{modelo}}</td>
          </tr>
          <tr>
            <th scope="row" class="text-right">Fabricante:</th>
            <td>{{fabricante}}</td>
          </tr>
          <tr>
            <th scope="row" class="text-right">Ano de Fabricação:</th>
            <td>{{ano}}</td>
          </tr>
          <tr>
            <th scope="row" class="text-right">Valor:</th>
            <td>R$ {{valor}}</td>
          </tr>
        </tbody>
      </table>
    </div>
      <label><b>Alterar modelo:</b></label><br>
      <input type="text" v-model="novoModelo"/>&nbsp;
      <input type="button" value="Salvar" @click="alterarModelo()"/>
      <br>
      <label><b>Alterar Fabricante:</b></label><br>
      <input type="text" v-model="novoFabricante"/>&nbsp;
      <input type="button" value="Salvar" @click="alterarFabricante()"/>
      <br>
      <label><b>Alterar Ano de Fabricação:</b></label><br>
      <input type="text" v-model="novoAno"/>&nbsp;
      <input type="button" value="Salvar" @click="alterarAno()"/>
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
      modelo: 'B3R Sport',
      fabricante: 'Belassi',
      ano:'2021',
      valor: '1.000.000',
      
      novoModelo: '',
      novoFabricante: '',
      novoAno:'',
      novoValor:''
    }
  },
  methods:{
    alterarValor(){
      this.valor=this.novoValor
      this.novoValor=''
    },
    alterarModelo(){
      this.modelo=this.novoModelo
      this.novoModelo=''
    },
    alterarFabricante(){
      this.fabricante=this.novoFabricante
      this.novoFabricante=''
    },
    alterarAno(){
      this.ano=this.novoAno
      this.novoAno = ''
    }
  }

}
</script>

<style>

</style>