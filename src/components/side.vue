<template>
  <div class="side-btns">
    <div class="btn admin-btn" v-ripple>
      <label>무인매장<br>관리시스템</label>
    </div>
    <div class="btn top" v-ripple @click="scrollUp">
      <v-icon>mdi-arrow-up</v-icon>
      <label>Top</label>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    scrollUp(){
      
      document.querySelector('html').classList.add('smooth');
      setTimeout(() => {
        window.scrollTo(0,0);
        document.querySelector('html').classList.remove('smooth');
      }, 100);
    }
  }
}
</script>

<style lang="scss" scoped>
.side-btns{
  position:fixed;
  z-index:99;
  right:10px;
  bottom:10px;

  .btn{
    display:flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width:80px;
    height:80px;
    border:1px solid #e2e2e2;
    background:#fff;

    .v-icon{
      font-size:32px;
    }
    label{
      margin-top:0px;
      text-align:center;
    }
  }
  .btn:hover{
    cursor: pointer;
  }

  .btn.admin-btn{
    font-size:0.9rem;
    background:#0084DE;
    color:#fff;
    border-color:#0077c7;
  }

  .btn.top:hover{
    .v-icon{
      color:#0084DE
    }
    color:#0084DE
  }
}

</style>