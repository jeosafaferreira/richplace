<template>
    <div id="login">
      <div class="container">
          <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form">
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label class="text-info">E-mail:</label><br>
                                <input type="text" v-model="email" name="email" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Senha:</label><br>
                                <input type="password" v-model="senha" name="senha" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="button" class="btn btn-info btn-md" value="Entrar" @click="logar()">
                            </div>
                        </form>
                    </div>
                    <br><div v-show="senhaIncorreta" class="alert alert-danger" role="alert">E-mail ou senha inválida.</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from '../router'
  
export default {
  data: function(){
    return{
      email:'',
      senha:'',
      msg:'',
      senhaIncorreta: false
    }
  },
  methods:{
    logar: function(){
      if(this.email == 'administrador@richplace.com' && this.senha=='admin'){
        router.push('/home')
      }else{
        this.msg = 'E-mail ou senha inválida.'
        this.senhaIncorreta = true
      }
    }
  }
}
</script>

<style>
#login .container #login-row #login-column #login-box {
  margin-top: 180px;
  max-width: 600px;
  height: 320px;
  border: 1px solid #9C9C9C;
  background-color: #EAEAEA;
}
#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}
#login .container #login-row #login-column #login-box #login-form #register-link {
  margin-top: -85px;
}
</style>