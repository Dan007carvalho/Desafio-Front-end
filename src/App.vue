<template>
  <div id="app">

     
    <div class="container">

      <ul>
        <li v-for="(erro, index) of errors" :key="index">
          campo <b>{{erro.fiel}}</b> - {{erro.defaultMessage}}
        </li>
      </ul>
    
      <table>
        <thead>
           <div class="principal">
        <strong>Gerenciar produtos</strong>
      </div>
         <tr >
            <th>Código</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Status</th>
                                    <!-- Botão para cadastrar -->
           <a-button  type="button" class="btn btn-primary" @click="$root.$emit('open-modal-1')">
             Novo +
          </a-button >
        </tr>
      </thead>

        <tbody>

          <tr v-for="produto in produtos" :key="produto.id">

            <td>{{produto.codigo}}</td>
            <td>{{produto.nome}}</td>
            <td>{{produto.preco}}</td>
            <td>{{produto.categoria}}</td>
            <td>{{produto.status}}</td>                              
            <td>
                           <!-- (Botão Atualizar registro) Obs: Quando clicar em atualizar,
                          tem que atualizar e salvar, para que o campo de cadastrar fique limpo --> 
                <button type="button" class="btn btn-primary" @click="$root.$emit('open-modal-2')"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" 
                      @click="editar(produto)"   class="bi bi-pencil" viewBox="0 0 16 16">
          <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 
          2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 
          3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 
          3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg> 
          </button>
                                <!-- Botão Apagar registro -->
                          <button type="button" class="btn btn-primary"  @click="remover(produto)">
                    <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 
              .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path   fill-rule="evenodd"  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0
              0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5  3V2h11v1h-11z"/>
            </svg></button>
              
            </td>                               
           </tr>
        </tbody>  
                                            
      </table>
    </div>

                    <!-- Formulário para Cadastrar -->
       <Modaladd>
           <div>
                <form @submit.prevent="salvar">
                    <div>
                      <c-label>Nome</c-label><br/>
                      <input class="nome" type="text" v-model="produto.nome"><br/>
                    </div>

                    <div>
                      <c-label>Descrição</c-label><br/>
                      <textarea class="descricao" v-model="produto.descricao"></textarea><br/>
                    </div>
                    
                      <div >
                        <c-label>Status</c-label><br/>
                        <select class="status" v-model="produto.status">
                        <option value="Em estoque">Em estoque</option>
                        <option value="Baixo estoque">Baixo estoque</option>
                        <option value="Esgotado">Esgotado</option>
                        </select>
                    </div>

                      <div>
                        <c-label>Categoria</c-label><br/>
                        <div>
                          <span class="categoria-1" ><input type="radio" value="Móveis" v-model="produto.categoria">Móveis</span>
                          <span class="categoria-3" ><input type="radio" value="Eletro" v-model="produto.categoria">Eletro</span>
                      </div>
                    <div>
                        <span class="categoria-1" ><input type="radio" value="Portáteis" v-model="produto.categoria">Portáteis</span>
                        <span class="categoria-2" ><input type="radio" value="Informática" v-model="produto.categoria">Informática</span>
                    </div>
                      
                    </div>
                      <div class="preco">
                      <c-label>Preço</c-label><br/>
                      <input  type="text" v-model="produto.preco">
                      </div>

                      <div class="quantidade">
                          <c-label>Quantidade</c-label><br/>
                          <input type="text" v-model="produto.quantidade">
                      </div><br/>
                                    
                      <div class="codigo">
                      <c-label>Código</c-label><br/>
                      <input class="codigo" type="text" v-model="produto.codigo">
                    </div>

                     <button class="waves-effect waves-light btn-small">salvar</button>

              </form>
          </div>
        </Modaladd>

                    <!-- Formulário para Atualizar Registro -->
          <Modalatua>
             <div>
                <form @submit.prevent="salvar">
             
                  <div >
                    <c-label>Nome</c-label><br/>
                    <input class="nome" type="text" v-model="produto.nome"><br/>
                  </div>

                  <div >
                    <c-label>Descrição</c-label><br/>
                    <textarea class="descricao" v-model="produto.descricao"></textarea><br/>
                  </div>
                  
                    <div >
                      <c-label>Status</c-label><br/>
                      <select class="status" v-model="produto.status">
                      <option value="Em estoque">Em estoque</option>
                      <option value="Baixo estoque">Baixo estoque</option>
                      <option value="Esgotado">Esgotado</option>
                      </select>
                  </div>

                    <div>
                      <c-label>Categoria</c-label><br/>
                      <div>
                        <span class="categoria-1" ><input type="radio" value="Móveis" v-model="produto.categoria">Móveis</span>
                        <span class="categoria-3" ><input type="radio" value="Eletro" v-model="produto.categoria">Eletro</span>
                    </div>
                  <div>
                      <span class="categoria-1" ><input type="radio" value="Portáteis" v-model="produto.categoria">Portáteis</span>
                      <span class="categoria-2" ><input type="radio" value="Informática" v-model="produto.categoria">Informática</span>
                  </div>
                    
                  </div>
                    <div class="preco">
                    <c-label>Preço</c-label><br/>
                    <input  type="text" v-model="produto.preco">
                    </div>

                    <div class="quantidade">
                        <c-label>Quantidade</c-label><br/>
                        <input type="text" v-model="produto.quantidade">
                    </div><br/>
                                  
                    <div class="codigo">
                    <c-label>Código</c-label><br/>
                    <input class="codigo" type="text" v-model="produto.codigo">
                  </div>

                  <button class="waves-effect waves-light btn-small">salvar</button>

            </form>
         </div>
      </Modalatua>
  </div>
    
</template>

<script>

import Produto from './services/produtos';
import Modaladd from './components/Modaladd';
import Modalatua from './components/Modalatua';

export default {
    components:{
       Modaladd,
       Modalatua,    
    },
   
  data(){
    return{
      produto: {
          id: '',
          codigo: '',
          nome: '',
          preco: '',
          categoria: '',
          descricao: '',
          quantidade:'',
          status: '',
                  
      },
      produtos: [],
      errors: [],
      
    }
  },

  mounted(){
    this.listar()
  },
  
  methods:{

    listar(){
      Produto.listar().then(resposta => {
       this.produtos = resposta.data
      })
    },


    salvar(){
        if(!this.produto.id){
            Produto.salvar(this.produto).then(resposta => {
              this.produto = {}
              resposta
              this.$swal('Parabéns', 'Salvo com sucesso!', 'success')
              this.listar()
              this.errors = []
         }) .catch(e =>{
            this.errors = e.response.data.errors
         
         })

        }else{
          Produto.atualizar(this.produto).then(resposta => {
            this.produto = {}
            this.$swal('Parabéns', 'Atualizado com sucesso!', 'success')
            resposta
            this.listar()
            this.errors = []
         }) .catch(e =>{
            this.errors = e.response.data.errors
         })

        }  
      
    },
    
    editar(produto){
        this.produto = produto
    },

    remover(produto){
        if(confirm('Deseja excluir o produto?')){
          this.$swal('Parabéns', 'Produto excluido com sucesso!', 'success')
        Produto.apagar(produto).then(resposta =>{
            this.listar();
            this.errors = []
            resposta
        }).catch(e =>{
            this.errors = e.response.data.errors
        })
    }
    },

   
    }
    
    }
  
</script>

<style scoped>
  
 body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  background-color: #fff;
 
}

table {
  border: 2px solid #c3c5c4;
  border-radius: 3px;
  background-color: #fff;
  color: rgb(65, 62, 62);
  
}

th {
  background-color: #d0d6d4;
  color: rgba(65, 63, 63, 0.66);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
.principal{
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: auto;
}
   
.container{
   display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
b-button{
  padding-inline-start: 20px;
  padding-inline-end: 15px;
}

.nome{
  width: 100%;
  display: inline;
}

.descricao{
  width: 100%;
  display: inline;
  
}
.status{
  width: 100%;
  display: inline;
}
 .categoria-1 {
 display: inline;
 padding-inline-end: 100px;
  
}

.categoria-3{
  padding-inline-start: 60px;
}

.categoria-2{
  display: inline;
  padding-inline-start: 50px;
}
.preco{
  display: inline-block;
 padding-inline-end: 15px;
}
.quantidade{
  display: inline-block;
  
}
.codigo{
  display: inline-block;
  padding-inline-end: 100px;
} 

.card-body{
  align-items: center;
  }
  a-button{
    display: inline-block;
    padding-inline-end: 38px;
    padding-bottom: 12px;
  }
  c-label{
   color:cornflowerblue;
 }

</style>
