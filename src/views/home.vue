<template>
	<div class="container" style="height:500px">
		<div class="jumbotron" style="height: 180px;">
			<h1 class="display-4">Produtos</h1>
			<hr />
			<p class="text-muted">Imagens meramente ilustrativas.</p>
	   </div>
		<div class="d-flex flex-row justify-content-between" style="margin: 0px 30px 0px 30px">
			<div class="card" style="width: 18rem;">
				<img src="https://www.aeronavesavenda.com/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-20-at-02.54.14-1.jpeg" class="card-img-top"/>
				<div class="card-body">
	    			<h5 class="card-title">Aeronave Citation<br>R$2.000.000</h5>
    				<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<router-link to="/detalhes/aviao" class="btn btn-primary">Ver Detalhes</router-link>
  				</div>
			</div>
			<div class="card" style="width: 18rem;">
				<img src="https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2014/05/moderna-e-nova-casa-a-venda-no-alphaville-litoral-8.jpg" style="height:214px;" class="card-img-top">
  				<div class="card-body">
	    			<h5 class="card-title">Alphaville<br>R$600.000</h5>
    				<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    				<router-link to="/detalhes/casa" class="btn btn-primary">Ver Detalhes</router-link>
  				</div>
			</div>
			<div class="card" style="width: 18rem;">
				<img src="https://www.helicidade.com.br/wp-content/uploads/2021/05/BELL4292015-1.jpg" class="card-img-top">
  				<div class="card-body">
	    			<h5 class="card-title">Eurocopter Magnum<br>R$1.350.000</h5>
    				<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    				<router-link to="/detalhes/helicoptero" class="btn btn-primary">Ver Detalhes</router-link>
  				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style>

</style>