<template>
  <v-navigation-drawer
    v-model="drawer"
    fixed
    right
    temporary
    style="z-index:999;"
  >
    <div class="drawer fill-height">
      <div class="logo">
        <img src="@/assets/img/logo_b.png" @click="$router.push('/')"/>
      </div>
      <ul class="menu">
        <li v-ripple @click="$router.push('About')">페이오티 소개</li>
        <li v-ripple @click="kiosk('default')">무인세탁매장 키오스크</li>
        <li v-ripple @click="kiosk('buy')">키오스크 구매안내</li>
      </ul>
      <div class="btns">
        <v-btn text>
          <v-icon>mdi-storefront-outline</v-icon>
          <label>무인매장 관리시스템</label>
        </v-btn>
      </div>
    </div>
    <div class="overlay" />
  </v-navigation-drawer>
</template>

<script>
export default {
  data(){
    return{
      drawer:false
    }
  },
  methods:{
    open(value){
      this.drawer = value;
    },
    kiosk(value){
      this.$router.push({ name: 'Kiosk', query: { tab:value }});
    },
  }
}
</script>

<style lang="scss" scoped>
.drawer{
  position: relative;
  display:Flex;
  flex-direction: column;
  height:100%;
  z-index:999;
}

.overlay{
  position: fixed;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.8);
  z-index:888
}
.logo{
  padding:20px;
  display:flex;
  align-items: center;
  justify-content: center;
  border-bottom:1px solid #e2e2e2;
  img{
    display:block;
    height:45px;
  }
}
ul.menu{
  overflow:hidden;
  padding: 10px;

  li{
    display:flex;
    align-items: center;
    font-size:15px;
    height:45px;
    padding:0 10px;
  }
}
.btns{
  position:absolute;
  width:100%;
  bottom:20px;
  justify-self: flex-end;
  padding:0 10px;
  margin-top:20px;
  text-align:center;

  .v-btn{
    width:90%;
    font-size:14px;
    min-height:40px;
    border-radius:20px;
    font-weight:400;
    border:2px solid #EF1682;
    color:#EF1682;
    .v-icon{margin-right:5px;}
  }
}
</style>
