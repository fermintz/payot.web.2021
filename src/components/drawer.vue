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
        <li v-ripple @click="$router.push('About')">
          <a>회사소개</a>
        </li>
        <li @click="$router.push('smartpay')">
          <a>스마트페이</a>
        </li>
        <li v-ripple @click="kiosk('default')">
          <a>키오스크</a>
        </li>
        <li v-ripple @click="$router.push('kiosk-mini')">
          <a>키오스크 미니</a>
        </li>
        <li v-ripple @click="$router.push('kiosk-detail')">
          <a>구매안내</a>
        </li>
        <li v-ripple @click="$router.push('customer')">
          <a>고객지원</a>
        </li>
        <li>
          <a href="https://blog.naver.com/PostList.naver?blogId=payot_2017&from=postList&categoryNo=9" target="_new">
            설치사례
          </a>
        </li>
      </ul>
      <div class="btns">
        
        <v-btn text @click="kakaoLink" class="kakao">
          <img src="/img/kakao.png">
          <label>카카오톡 상담하기</label>
        </v-btn>
        <v-btn text @click="$router.push('kiosk-map')" class="map-btn">
          <v-icon>mdi-map</v-icon>
          <label>설치매장 지도</label>
        </v-btn>
        <v-btn text @click="adminLink" class="admin">
          <v-icon>mdi-storefront-outline</v-icon>
          <label>무인매장 관리시스템</label>
        </v-btn>
      </div>
    </div>
    <!-- <div class="overlay" /> -->
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
    adminLink(){
      window.open('http://www.coin-machine.com/login','_new')
    },
    kakaoLink(){
      window.open('https://pf.kakao.com/_uAqmK/chat','_new')
    }
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

/* .overlay{
  position: fixed;
  width:100%;
  height:100%;
  background:#0000001a;
  backdrop-filter: blur(7px);
  z-index:888
} */

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
    height:45px;
    padding:0 10px;
    cursor: pointer;

    &:hover{
      background:#f8f8f8;
      border-radius:5px;
    }

    a{
      text-decoration: none;
      color:#292929;
      font-size:15px;
    }
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
    border-radius:4px;
    font-weight:400;
    font-size:12px;
  }

  .v-btn.map-btn{
    border:1px solid #5e58a6;
    color:#292929;
    margin-bottom:10px;

    .v-icon{
      color:#5e58a6;
      margin-right:5px;
      font-size:18px;
    }
  }
  .v-btn.kakao{
    background:#f5e000;
    color:#292929;
    margin-bottom:10px;

    img{
      display:block;
      height:20px;
      margin-right:5px;
    }
  }
  .v-btn.admin{
    border:1px solid #EF1682;
    color:#292929;

    .v-icon{
      color:#EF1682;
      margin-right:5px;
      font-size:18px;
    }
  }
}
</style>
