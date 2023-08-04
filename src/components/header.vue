<template>
  <div :class="{header:true, header_set:headerState, smartpay:$route.name === 'smartpay'}">
    <div class="left">
      <img src="@/assets/img/logo_b.png" @click="$router.push('/')" v-show="headerState ? true : false || $route.name !== 'smartpay'"/>
      <img src="@/assets/img/logo_w.png" @click="$router.push('/')" v-show="$route.name === 'smartpay' && headerState === false"/>
    </div>

    <div class="center">
      <ul class="main_menu">
        <li @click="$router.push('About')">
          <a>회사소개</a>          
        </li>
        <li @click="$router.push('smartpay')">
          <a>스마트페이</a>
        </li>
        <li @click="kiosk('default')">
          <a>키오스크</a>
        </li>
        <li @click="$router.push('kiosk-mini')">
          <a>키오스크 미니</a>
        </li>
        <li class="buy" @click="$router.push('kiosk-detail')">
          <a>구매안내</a>
        </li>
        <li @click="$router.push('customer')">
          <a>고객지원</a>
        </li>
        <li>
          <a href="https://blog.naver.com/PostList.naver?blogId=payot_2017&from=postList&categoryNo=9" target="_new">
            설치사례
          </a>
        </li>
        <!-- <li class="buy"  @click="$router.push('shop')">
          매장 관련용품
        </li> -->
      </ul>
    </div>

    <div class="right">
      <v-btn icon class="map-btn" @click="$router.push('/kiosk-map')">
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
      <v-btn icon @click="adminLink" class="admin">
        <v-icon>mdi-storefront-outline</v-icon>
      </v-btn>
      <v-btn icon @click="kakaoLink" class="kakao">
        <img src="/img/kakao.png">
      </v-btn>      
    </div>

    <div class="mobile-right">
      <v-btn @click="kakaoLink" class="kakao" icon>
        <img src="/img/kakao.png">
      </v-btn>
      <v-btn text icon @click="drawerUpdate(true)" class="menu">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
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
    console.log(window.matchMedia().matches)
  },
  methods:{
    headerSet(){
      window.pageYOffset >= 1 ? this.headerState = true : this.headerState = false
    },
    kiosk(value){
      this.$router.push({ name: 'Kiosk', query: { tab:value }});
    },
    drawerUpdate(value){
      this.$emit('child', value)
    },
    adminLink(){
      window.open('http://www.coin-machine.com','_new')
    },
    kakaoLink(){
      window.open('https://pf.kakao.com/_uAqmK/chat','_new')
    }
  },

}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top:0px;
  width: 100%;
  height: 100px;
  padding: 0 50px;
  z-index: 99;
  transition:height 0.5s ease;
 
  .left {
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


  .main_menu{
    display: flex;
    align-items: center;
    gap:40px;

    li {
      position: relative;
     
      a{
        font-size: 18px;
        color:#595959;
        text-decoration:none;
      }

      a:hover{
        cursor: pointer;
        color: #de0059;
      }

      &:last-child{
        margin-right:0;
      }
    }
  }

  
}

.right{
  .v-btn{
    width:40px;
    height:40px;
    margin-left:15px;

    &:first-child{
      margin-left:0px;
    }

    img{
      height:20px;
    }
  }
  .v-btn.map-btn{
    background:#5e58a6;
    color:#fff;
  }
  .v-btn.admin{
    background:#de0059;
    color:#fff;
  }
  .v-btn.kakao{
    background:#FFEB00
  }
} 

.mobile-right {
  display:none;

  .v-btn {
    width: 40px;
    height: 40px;
    color: #494949;
    margin-left:10px;
    background:#f2f2f2;
  }

  .v-btn.kakao{
    background:#FFEB00;
    img{
      height:24px;
    }
  }
}

.smartpay{
  .main_menu{
    li{
      a{
        color:#fff;
      }
    }
  }
}

.header_set{
  position: sticky;
  height:70px;
  position: fixed;
  background:#fff;

  .main_menu{
    li{
      a{
        color:#595959;
      }
    }
  }
}

@media screen and(max-width:1200px){
  .header{
    padding:0 20px;
    .main_menu{
      display:none;
    }
    .right{
      display:none; 
    }
    .mobile-right{
      display:block;

      .menu{
        border:2px solid #e2e2e2;
        background:#fff;
      }
    }
  }
}


</style>
