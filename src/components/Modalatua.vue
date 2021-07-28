<template>
  
  <div class="modal-2">
<!-- Modal de atualizar-->
<div class="modal show fade" id="exampleModal" tabindex="-1" 
    aria-labelledby="exampleModalLabel" aria-hidden="true" style="display: block" v-if="visible" >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Detalhe do produto</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="visible = false">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="visible = false">Sair</button>
       

      </div>
    </div>
  </div>
</div>
  <div class="modal-backdrop fade show" v-if="visible"></div>
  </div>

</template>

<script>
export default {
  name: 'Modalatua',
  data(){
    return{
      visible: false
    }
  },
 
  created(){
    this.$root.$on('open-modal-2', () =>{this.visible = true})
  }

}
</script>

<style scoped>
  .modal-1{
    align-items: center;
  }

</style>