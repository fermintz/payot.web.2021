<template>
  <div class="sideBanner">
    <div class="btn kakao" @click="kakaoLink()" v-ripple>
      <div class="image">
        <img src="/img/kakao.png">
      </div>
      <label>카톡상담</label>
    </div>
    <div @click="$router.push('kiosk-map')" v-ripple class="btn">
      <v-icon color="#de0059">mdi-map-marker</v-icon>
      <label>매장확인</label>
    </div>
    <div @click="downloadFile('catalog')" v-ripple class="btn">
      <v-icon>mdi-book-open</v-icon>
      <label>카탈로그</label>
    </div>
     <div class="customer">
      <span>문의전화</span>
      <strong>
        <b>070</b><br>7807<br>6857
      </strong>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
     downloadFile(fileName) {
      const filePath = `http://www.payot-inc.com/pdf/${fileName}.pdf`;
      window.open(filePath, '_blank');
    },
    kakaoLink(){
      const kakaoUrl = 'https://pf.kakao.com/_uAqmK'
      window.open(kakaoUrl, '_blank')
    },
    scrollToTop(){
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.sideBanner{
  position:fixed;
  top:50%;
  transform:translateY(-50%);
  margin-right:15px;
  background:#fff;
  border-radius:10px;
  box-shadow: -5px -5px 30px rgba(0,0,0,0.1);
  width:70px;
  z-index:999;
  overflow:hidden;
  animation:first 1s forwards;

  
  .btn{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background:#fff;
    border-bottom:1px solid #e2e2e2;

    cursor: pointer;

    padding:10px 0;
    min-height:80px;
    .v-icon{
      font-size:28px;
      color:#494949;
    }
    img{
      height:24px;
      display:block;
    }
    label{
      font-size:13px;
      margin-top:6px;
      display:block;
      cursor: pointer;
    }
  }

  .btn:hover{
    background:#f8f8f8;
  }

  .btn.kakao{
     background:#FFEB00;
  }

  .btn.kakao:hover{
    background:#f5e000;
  }

  .customer{
    text-align:left;
    padding:10px;
    min-height:100px;
    text-align:center;

    b{
      color:#de0059
    }
    span{
      display:block;
      font-size:13px;
      margin-bottom:5px;
      color:#898989;
    }
    strong{
      
      display:block;
      font-family:'Roboto';
      font-size:20px;
      font-weight:700;
      margin-bottom:10px;
    }
  }
}

@keyframes first {
  0%{
    right:-100px;
  }

  100%{
    right:0px
  }
}

@media screen and (max-width:980px){
  .sideBanner{
    display:none;
  }
}
</style>