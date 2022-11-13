<template>
	<span>
	   <!-- Menu do Topo -->
	   <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
		  <router-link class="navbar-brand" to="/">RichPlace!</router-link>
		  <button
			 class="navbar-toggler"
			 type="button"
			 data-toggle="collapse"
			 data-target="#navbarsExampleDefault"
			 aria-controls="navbarsExampleDefault"
			 aria-expanded="false"
			 aria-label="Toggle navigation"
		  >
			 <span class="navbar-toggler-icon"></span>
		  </button>
 
		  <div class="collapse navbar-collapse" id="navbarsExampleDefault">
			 <ul class="navbar-nav mr-auto">
				<li class="nav-item">
				   <router-link class="nav-link" to="/Pagina1">Página 1</router-link>
				</li>
				<li class="nav-item">
				   <router-link class="nav-link" to="/Pagina2">Página2</router-link>
				</li>
				<!-- Menu DropDown -->
				<li class="nav-item dropdown">
				   <a
					  class="nav-link dropdown-toggle"
					  href="http://example.com"
					  id="dropdown01"
					  data-toggle="dropdown"
					  aria-haspopup="true"
					  aria-expanded="false"
				   >Dropdown</a>
				   <!-- Itens do Menu DropDown -->
				   <div class="dropdown-menu" aria-labelledby="dropdown01">
					  <a class="dropdown-item" href="#">Action</a>
					  <a class="dropdown-item" href="#">Another action</a>
					  <a class="dropdown-item" href="#">Something else here</a>
				   </div>
				</li>
			 </ul>
		  </div>
	   </nav>
	</span>
 </template>
 
 <script>
 export default {
	name: "ParteSuperior"
 };
 </script>
 
 <style scoped>
 </style>