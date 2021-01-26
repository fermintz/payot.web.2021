<template>
  <v-dialog
    v-model="visible"
    class="dialog"
    width="unset"
    style="z-index:999"
  >
    <div class="terms">
      <div class="termsHead">
        {{serviceTerms.title}}
      </div>

      <div class="termsBody" v-html="serviceTerms.body">

      </div>

      <div class="termsBottom">
        <v-btn outlined @click="open(false)">닫기</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>

import { info, user as userInfo } from '@/assets/docs/terms';

export default {
  data(){
    return{
      visible:false,
      serviceTerms: {
        title: '개인정보취급방침',
        body: userInfo.replace(/\n/g, '<br />')
      },

      userTerms:{
        body: info.replace(/\n/g, '<br />')
      }
      

    }
  },
  methods:{
    open(value){
      this.visible = value;
    }
  }
}
</script>


<style lang="scss" scoped>
.terms{
  max-width:800px;
  background:#fff;
  border-radius:20px;
  overflow:hidden;
  

  .termsHead{
    display:flex;
    align-items: center;
    font-size:1.4rem;
    font-weight:300;
    height:60px;
    padding:0 40px;
    border-bottom:2px solid #e2e2e2
  }

  .termsBody{
    padding:40px;
    max-height:500px;
    font-size:1.1rem;
    overflow-y:auto;

  }

  .termsBottom{
    display:flex;
    justify-content: center;
    align-items:center;
    height:80px;
    border-top:2px solid #e2e2e2;
    padding:0 20px;

    .v-btn{
      font-size:1.2rem;
      width:100%;
      max-width:300px;
      height:40px;
      background:#292929;
      color:#fff;
      font-weight:300;
      border-radius:20px;;
    }
  }
}

</style>