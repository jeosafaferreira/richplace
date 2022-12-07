<template>
	<div class="container" style="height:500px">
		<div class="jumbotron" style="height: 210px;">
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
					<router-link to="/detalhes/citation" class="btn btn-primary">Ver Detalhes</router-link>
  				</div>
			</div>
			<div class="card" style="width: 18rem;">
				<img src="https://b6d3c5t3.rocketcdn.me/wp-content/uploads/2014/05/moderna-e-nova-casa-a-venda-no-alphaville-litoral-8.jpg" style="height:214px;" class="card-img-top">
  				<div class="card-body">
	    			<h5 class="card-title">Alphaville<br>R$600.000</h5>
    				<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    				<router-link to="/detalhes/alphaville" class="btn btn-primary">Ver Detalhes</router-link>
  				</div>
			</div>
			<div class="card" style="width: 18rem;">
				<img src="https://www.helicidade.com.br/wp-content/uploads/2021/05/BELL4292015-1.jpg" class="card-img-top">
  				<div class="card-body">
	    			<h5 class="card-title">Eurocopter Magnum<br>R$1.350.000</h5>
    				<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    				<router-link to="/detalhes/eurocopter" class="btn btn-primary">Ver Detalhes</router-link>
  				</div>
      </div>
    </div>
    <div class="d-flex flex-row justify-content-between" style="margin: 0px 30px 0px 30px">
      <div class="card" style="width: 18rem;">
        <img src="https://img.olhardigital.com.br/wp-content/uploads/2021/07/60d9fab836cf170019de80e1.jpg" class="card-img-bottom">
          <div class="card-body">
            <h5 class="card-title">PASCOE INTERNATIONAL 26-FT<br>R$1.000.000.000</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <router-link to="/detalhes/pascoe" class="btn btn-primary">Ver Detalhes</router-link>
          </div>
      </div>
       
        <div class="card" style="width: 18rem;">
<img src="https://assets.newatlas.com/dims4/default/7b4a4b4/2147483647/strip/true/crop/3508x2339+0+71/resize/840x560!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fbelassi-b3r-worlds-most-powerful-pwc-jet-ski.jpg" class="card-img-bottom">
  <div class="card-body">
    <h5 class="card-title">Belassi B3R Sport<br>R$163.500.000</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <router-link to="/detalhes/belassi" class="btn btn-primary">Ver Detalhes</router-link>
  </div>
        </div>
      
      <div class="card" style="width: 18rem;">
        <img src="https://s2.glbimg.com/JlvKXOOCEjXhQVjv6EMIWukkpWE=/0x0:2000x1400/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2021/9/2/i6rjirSaqgVxkb1BQcSg/lavoiturebugatti.jpg" class="card-img-bottom">
          <div class="card-body">
            <h5 class="card-title">Bugatti La Voiture Noir<br>R$67.000.000</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <router-link to="/detalhes/bugatti" class="btn btn-primary">Ver Detalhes</router-link>
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