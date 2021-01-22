<template>
  <div :class="{header:true, header_set:headerState}">
    <div class="logo">
      <img src="@/assets/img/logo_b.png" @click="$router.push('/')"/>
    </div>
    <div class="gnb">
      <ul>
        <li>
          <a @click="$router.push('About')">페이오티 소개</a>
          <span></span>
        </li>
        <li>
          <a @click="kiosk('default')">무인세탁매장 키오스크</a>
          <span></span>
        </li>
        <li class="buy">
          <a @click="kiosk('buy')">키오스크 구매안내</a>
          <span></span>
        </li>
      </ul>
      <div class="mobile-gnb">
        <v-btn text icon>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      headerState:false,
    }
  },
  mounted(){
    window.addEventListener('scroll', this.headerSet);
  },
  methods:{
    headerSet(){
      window.pageYOffset >= 1 ? this.headerState = true : this.headerState = false
    },
    kiosk(value){
      this.$router.push({ name: 'Kiosk', query: { tab:value }});
    }
  },

}
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 0 50px;
  z-index: 99;
  background:transparent;
  animation: headerBack 0.3s forwards linear;

  @keyframes headerBack {
    0%{height:70px;}
    100%{height:100px;}
  }

  .logo {
    display:flex;
    align-items: center;
    

    img {
      display: block;
      height: 40px;
    }
    img:hover{
      cursor: pointer;
    }
    p{
      font-size:16px;
      margin-left:20px;
    }
  }
  .gnb {

    display:flex;
    align-items: center;

    ul {
      display: flex;
      align-items: center;
      li {
        position: relative;
        margin: 0 30px;
        font-size: 1.15rem;
        color: #494949;
      }

      li.buy{
        color:#EF1682
      }

      li:hover{
        cursor: pointer;
        a{color:#0084DE}
        span{
          position:absolute;
          bottom:-5px;
          height:2px;
          background:#0084DE;
          animation: underline 0.2s forwards ease-out;
        }

        @keyframes underline {
          0%{left:50%;right:50%;width:0;}
          100%{left:0;right:0;width:100%}
        }
      }

      li:last-child{
        margin-right:0px;
      }
    }

    .sns{
      display:flex;
      align-content: center;
      margin-left:50px;

      span{
        display:block;
        margin:0 10px;
        width:40px;
        height:40px;
        img{width:100%;display:block;}
      }
    }
    .mobile-gnb {
      display:none;
      .v-btn {
        width: 50px;
        height: 50px;
        color: #494949;
      }
    }
  }
}

.header_set{  
  animation: headerBg 0.3s forwards linear;
  position: fixed;

  @keyframes headerBg {
    0%{
      background:transparent;
      border-bottom:0px;
    }
    100%{
      background:#fff;
      border-bottom:1px solid #efefef;
      height:70px;
    }
  }
}

@media screen and(max-width:720px){
  .header{
    padding:0;
    .logo{
      margin-left:15px;
    }
    .gnb{
      ul{display:none;}
      .mobile-gnb{display:block}
    }
  }
}


</style>
