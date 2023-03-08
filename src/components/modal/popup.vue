<template>
  <v-dialog v-model="visible" width="unset" overlay-opacity="0.8">
    <div class="popup">
      <a @click="$router.push('smartpay')">
      <img src="/img/home/smartpay_popup.png" />
      </a>
      <v-btn icon @click="visible = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    
  </v-dialog>
</template>

<script>
export default {
  data(){
    return{
      visible:true,
    }
  },
  methods:{
    show(value){
      this.visible = value
    },
    close(){
      this.visible = false
    }
  },
}
</script>

<style lang="scss" scoped>
.v-dialog{
  box-shadow: unset !important;
}
.popup{
  position: relative;

  a{
    display:block;
    cursor: pointer;
  }
  img{
    width:100%;
    border-radius:20px;
  }

  .v-btn{
    position: absolute;
    top:15px;
    right:15px;
    width:42px;
    height:42px;
    background-color:#fff;

    .v-icon{
      font-size:30px;
      color:#292929;
    }
  }
}


</style>