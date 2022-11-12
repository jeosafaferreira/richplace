<template>
   <span>
      <!-- Menu do Topo -->
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
         <a class="navbar-brand" href="#">RichPlace</a>
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
               <li class="nav-item active">
                  <a class="nav-link" href="/Home">
                     Home
                     <span class="sr-only">(current)</span>
                  </a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="/Detalhes">Link</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
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
      <!-- Painel Jumbotron -->
      <div class="jumbotron">
         <div class="container">
            <h1 class="display-4">Produtos</h1>
            <hr />
         </div>
      </div>
   </span>
</template>

<script>
export default {
   name: "ParteSuperior"
};
</script>

<style scoped>
</style>