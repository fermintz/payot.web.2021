<template>
  <div class="home">
    <div class="top-bg">
      <div class="wave wave1"></div>
      <div class="wave wave2"></div>
    </div>
    <div class="section-01">
      <div class="inner">
        <div class="main-visual">
          <v-row>
            <v-col cols="12" md="6" sm="12">
              <div class="visual-title">
                <div class="text">
                  <span class="slideUp">PAYOT SMART SYSTEM</span>
                  <h2 class="slideUp">일반 무인세탁매장을<br /><b>스마트 무인매장으로</b></h2>
                  <p class="slideUp">
                    PC/모바일로 쉽고 간편하게 매장을 관리하는 <br />무인세탁매장
                    전용 키오스크<br />
                  </p>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6" sm="12">
              <div class="carousel">
                <v-carousel 
                  v-model="carousel"
                  hide-delimiters
                  interval="4000"
                  :show-arrows="false"
                  height="unset"
                  cycle
                >
                  <v-carousel-item
                    
                    v-for="item in carouselData" :key="item"
                  >
                    <div class="carousel-item">
                      <img :src="item.url"/>
                    </div>
                  </v-carousel-item>
                </v-carousel>
              </div>
            </v-col>
          </v-row>
        </div>
        <v-btn text class="bottom-arrow" @click="bottomScroll">
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </div>
    </div>


    <div class="section-02 section">
      <div class="inner">
        <div class="section-title">
          <div class="v-divider" />
          <h2>페이오티 키오스크의 <b>특별한 기능</b></h2>
          <p>
            무인세탁매장을 위한 페이오티 키오스크는<br />점주님의 편의성과
            효율성을 위해 다양한 기능을 담고 있습니다
          </p>
        </div>
        <div class="section-contents">
          <div class="hooperWrap">
            <hooper
              ref="hooper"
              :settings="setting"
              :itemsToShow="setting.itemsToShow"
              :style="{ height: screenHeight - screenHeight * 0.2 + 'px' }"
            >
              <slide v-for="(item, index) in hooperSlide" :key="index">
                <div
                  class="slide-item"
                  :style="{ background: item.background }"
                  v-ripple
                  @click="$router.push('kiosk')"
                >
                  <div class="item-text">
                    <span>{{ item.title }}</span>
                    <p>{{ item.subText }}</p>
                    <a>VIEW MORE</a>
                  </div>
                  <div class="img">
                    <img :src="item.img" />
                  </div>
                </div>
              </slide>
            </hooper>
          </div>
          <div class="hooperBtn">
            <v-btn text @click="$refs.hooper.slidePrev()">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-btn text @click="$refs.hooper.slideNext()">
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </div>
        </div>

        <div class="more">
          <v-btn text @click="kiosk('buy')">
            <label>키오스크 가격안내 바로가기</label>
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </div>
    </div>

    <div class="section-03 section">
      <div class="inner">
        <v-row>
          <v-col cols="12" md="6" sm="6" lg="3">
            <div class="section-title" >
              <h2 class="slideUp">부담은 줄이고<br><b>혜택은 늘리고</b></h2>
              <p class="slideUp">
                페이오티는 현장에서 점주님과 소통을 통해 문제점을 개선하고
                사용편의성을 높이는 업데이트를 무상으로 제공하고 있으며, 더욱
                효율적이고 편리한 시스템을 만들기 위해 항상 노력하고 있습니다
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6" sm="6" lg="3" >
            <div class="item">
              <div class="img">
                <img src="img/service-01.jpg">
              </div>
              <dl>
                <dt>무료배송 및 설치</dt>
                <dd>
                  페이오티 직원이 직접 매장을 방문하여 꼼꼼하게 설치를 진행해드립니다
                </dd>
              </dl>
            </div>
          </v-col>
          <v-col cols="12" md="6" sm="6" lg="3" >
            <div class="item">
              <div class="img">
                <img src="img/service-02.jpg">
              </div>
              <dl>
                <dt>무상 업데이트</dt>
                <dd>
                  새로운 기능을 개발하고 새로운 기능을 무상으로 업데이트 합니다
                </dd>
              </dl>
            </div>
          </v-col>
          <v-col cols="12" md="6" sm="6"  lg="3">
            <div class="item">
              <div class="img">
                <img src="img/service-03.jpg">
              </div>
              <dl>
                <dt>A/S 1년 무상</dt>
                <dd>
                  구매 후 1년 동안 제품에 문제가 발생할 시 무상 A/S를 받을 실 수
                  있습니다
                </dd>
              </dl>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <!-- section-03 -->

    <div class="section middle-visual">
      <div class="inner">
        <v-row>
          <v-col cols="12" md="6">
            <v-carousel
              v-model="middleVisual"
              width="unset"
              height="unset"
              hide-delimiters
              :show-arrows="false"
              cycle
              interval="5000"
            >
              <v-carousel-item 
                v-for="item in middleVisualData" 
                :key="item"
              >
                <div class="visual-item">
                  <img :src="item.url" />
                </div>
              </v-carousel-item>
            </v-carousel>
          </v-col>
          <v-spacer/>
          <v-col cols="12" md="4">
            <div class="section-title">
              <h2 class="slideUp">무인세탁매장만을 연구해온<br><b>전문가들과 함께하세요!</b></h2>
              <p class="slideUp">페이오티는 무인세탁매장의 완전 무인화를 위한 연구를 계속해오고 있습니다.
                어떻게 하면 고객들이 더욱 편리하게 매장을 이용할 수 있을지, 점주님이 
                신경쓰지 않고 무인매장을 운영할 수 있을지 늘 고민하고 연구하고 있습니다
              </p>
              <div class="pager">
                <v-btn text @click="middleVisual-=1">
                  <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-btn text @click="middleVisual+=1">
                  <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-spacer/>
        </v-row>
      </div>
    </div>


    <div class="section-04 section">
      <div class="inner">
        <div class="section-title">
          <h2>다양한 무인세탁매장이<b> 페이오티와 함께하고 있습니다</b></h2>
          <p>무인세탁서비스 매장을 준비하시는 모든 예비창업자분들도 지금 참여해보세요</p>
        </div>
        <div class="partner-logo">
          <v-row>
            <v-col cols="4" md="2" v-for="item in 18" :key="item" class="logoUp">
              <span >
                <img :src="`/img/partner${item}.png`">
              </span>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>

    <div class="section-05 section">
      <div class="inner">
        <v-row>
          <v-col cols="12" md="3">
            <div class="section-title">
              <h2>페이오티의<br><b>새로운 소식을</b><br>만나보세요!</h2>
            </div>
          </v-col>
          <v-spacer/>
          <v-col cols="12" md="4">
            <div class="list news">
              <div class="list-title">
                뉴스
              </div>
              <ul>
                <li>
                  <a href="http://www.nbntv.co.kr/news/articleView.html?idxno=901512" target="_new">
                    <div class="image">
                      <img src="/img/news01.jpg">
                    </div>
                    <div class="cont">
                      <div class="cont-title">언택트(비대면) 시대, 대학 기숙사 공동 세탁실도 페이오티 관리시스템으로 스마트한 
  관리 가능해져</div>
                      <div class="cont-info">
                        <span class="name">내외경제TV</span>
                        <span class="date">2020.08.21</span>
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="http://www.e2news.com/news/articleView.html?idxno=224453" target="_new">
                    <div class="image">
                      <img src="/img/news02.jpg">
                    </div>
                    <div class="cont">
                      <div class="cont-title">빨래방 카드결제·관리 시스템 개발 전문기업 페이오티, 셀프빨래방·세차장에서 사용가능한 시스템 제작</div>
                      <div class="cont-info">
                        <span class="name">이투뉴스</span>
                        <span class="date">2020.07.21</span>
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="https://www.yna.co.kr/view/AKR20190706033000051?input=1179m" target="_new">
                    <div class="image">
                      <img src="/img/news03.jpg">
                    </div>
                    <div class="cont">
                      <div class="cont-title">[U∼스타트업] 완전 무인매장 구현…해양대 연구소기업 페이오티</div>
                      <div class="cont-info">
                        <span class="name">연합뉴스</span>
                        <span class="date">2019.07.13</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </v-col>

          <v-col cols="12" md="4">
            <div class="list blog">
              <div class="list-title">
                블로그
              </div>
              <ul>
                <li v-for="(post, index) in blogPosts" :key="index">
                  <a :href="post.url" target="_new">
                    <div class="image">
                      <img :src="post.thumbnail" />
                    </div>
                    <div class="cont">
                      <div class="cont-title" v-html="post.title">
                      </div>
                      <div class="cont-info">
                        <span class="name">{{post.blogname}}</span>
                        <span class="date">{{post.datetime.substring(0,10)}}</span>
                      </div>
                      <!-- <div class="text" v-html="post.contents.substring(0,60)" /> -->
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="section-06 section">
      <div class="inner">
        <v-row>
          <v-col cols="12" md="5" lg="3" sm="12">
            <div class="customer">
              <h4>
                무엇이든 물어보세요<br/>친절하게 답변 해 드리겠습니다
              </h4>
              <dl>
                <dt>제품 문의하기</dt>
                <dd>070-7807-6857</dd>
              </dl>
              <v-btn text @click="kakaoLink">
                <v-icon>mdi-message</v-icon>
                <label>카카오톡으로 문의하기</label>
              </v-btn>
            </div>
          </v-col>
          <v-spacer/>
          <v-col cols="12" md="6" lg="5" sm="12">
            <div class="files">
              <dl>
                <dt>
                  <img src="/img/catalog.png" alt="카탈로그">
                </dt>
                <dd>
                  <label>회사소개 브로슈어</label>
                  <v-btn text @click="downloadFile('catalog')">다운로드</v-btn>
                </dd>
              </dl>
              <div class="divider"/>
              <dl>
                <dt>
                  <img src="/img/guide.png" alt="카탈로그">
                </dt>
                <dd>
                  <label>키오스크 가이드북</label>
                  <v-btn text @click="downloadFile('guide')">다운로드</v-btn>
                </dd>
              </dl>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from "hooper";
import { daumSearch } from "@/utils/KakaoSearch";
import gsap from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger'

export default {
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {

      carousel:0,
      carouselData:[
        {url:'/img/main-visual01.png'},
        {url:'/img/main-visual02.png'},
      ],

      middleVisual:0,
      middleVisualData:[
        {url:'/img/middle-01.jpg'},
        {url:'/img/middle-02.jpg'},
        {url:'/img/middle-03.jpg'},
        {url:'/img/middle-04.jpg'},
      ],

      blogPosts: [],

      setting: {
        wheelControl: false,
        autoPlay: true,
        playSpeed: 3000,
        transition: 500,
        hoverPause: false,
        infiniteScroll: true,
        trimWhiteSpace: false,
        breakpoints: {
          1920: {
            itemsToShow: 4,
          },
          1280: {
            itemsToShow: 3,
          },
          960: {
            itemsToShow: 2,
          },
          720: {
            itemsToShow: 2,
          },
          0: {
            itemsToShow: 1,
          },
        },
      },

      hooperSlide: [
        {
          title: "매출관리/매출통계",
          subText: "500원짜리 동전까지 작은 매출도 정확하게 기록",
          img: "/img/hooper-01.png",
          background: "#f5f6f7",
        },
        {
          title: "원격 동전 투입",
          subText: "집에서도 간편하게 원격제어로 클레임을 처리",
          img: "/img/hooper-02.png",
          background: "#fff",
        },
        {
          title: "포인트충전 후 사용",
          subText: "키오스크로 미리 금액을 충전하고 포인트로 장비를 사용",
          img: "/img/hooper-03.png",
          background: "#FBF4F7",
        },
        {
          title: "멤버십 서비스",
          subText: "키오스크를 통한 회원 가입 및 회원관리",
          img: "/img/hooper-04.png",
          background: "#fff",
        },
        {
          title: "카카오톡 알림",
          subText: "키오스크 결제 및 세탁 완료 시 카카오톡 알림서비스",
          img: "/img/hooper-05.png",
          background: "#FBF7F4",
        },
        {
          title: "회원 문자서비스",
          subText: "가입된 회원에게 마케팅 문자 발송서비스",
          img: "/img/hooper-06.png",
          background: "#fff",
        },
      ],
      screenHeight: window.innerHeight,
    };
  },
  mounted() {
    window.addEventListener("resize", this.onScreenSizeChange);

    daumSearch('blog').then((data) => {
      this.blogPosts = data.documents;
    });

    gsap.registerPlugin(scrollTrigger)

    gsap.from('.section-01 .slideUp',{
      y:-100,
      opacity:0,
      stagger:{
        amount:0.6,
      }
    })

    gsap.from('.section-03 .slideUp',{
      scrollTrigger:{
        trigger:'.section-03',
        start:'top 70%',
      },
      y:200,
      opacity:0,
      stagger:{
        amount:0.3,
      }
    })

    gsap.from('.middle-visual .slideUp',{
      scrollTrigger:{
        trigger:'.middle-visual',
        start:'top 60%',
      },
      y:200,
      opacity:0,
      stagger:{
        amount:0.3,
      }
    })

    gsap.from('.section-04 .logoUp',{
      scrollTrigger:{
        trigger:'.section-04',
        start:'top center',
      },
      y:200,
      opacity:0,
      stagger:{
        amount:1,
      }
    })
  
  },
  methods: {
    onScreenSizeChange() {
      this.screenHeight = window.innerHeight;
    },
    bottomScroll(){
      window.scrollTo({top:window.innerHeight, behavior:'smooth'})
    },
     downloadFile(fileName) {
      const filePath = `http://www.payot-inc.com/pdf/${fileName}.pdf`;
      window.open(filePath, '_blank');
    },

    kakaoLink(){
      window.open('http://pf.kakao.com/_uAqmK' , '_new')
    },

    kiosk(value){
      this.$router.push({ name: 'Kiosk', query: { tab:value }});
    },

  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;

  .top-bg {
    position: absolute;
    overflow: hidden;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;

    .wave1 {
      position: absolute;
      top: -700px;
      left: -700px;
      width: 1600px;
      height: 1600px;
      border-radius: 720px;
      background: rgb(0,179,226);
background: linear-gradient(90deg, rgba(0,179,226,1) 0%, rgba(0,131,255,1) 100%);
      z-index: 3;
      animation: waves 20s infinite linear;
      opacity: 1;
    }

    .wave2 {
      position: absolute;
      top:500px;
      right: -350px;
      width: 600px;
      height: 600px;
      border-radius: 270px;
      background: rgb(239,22,130);
      background: linear-gradient(90deg, rgba(239,22,130,1) 0%, rgba(255,171,0,1) 100%);
      z-index: 4;
      opacity: 1;
      animation: waves 15s infinite linear;
    }


    @keyframes waves {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
}

.section {
  position: relative;
  padding: 120px 0;
  z-index: 10;

  .inner {
    margin:0 150px;
  }
}
  

.section-01 {
  position: relative;
  z-index: 10;
  width: 100%;
  padding:0 30px;

  .inner {
    position: relative;
    max-width: 100%;

    .bottom-arrow {
      position: absolute;
      z-index:3;
      left: 50%;
      bottom:-35px;
      margin-left:-35px;
      width: 70px;
      height: 70px;
      border-radius: 40px;
      background: #e2e2e2;
      border:8px solid rgba(255, 255, 255,0.3);
      animation: tingle 1s infinite linear;

      .v-icon {
        color: #fff;
        font-size: 36px;
      }
    }

    .row {
      padding: 0;
      margin: 0;
    }

    .col-md-6 {
      padding: 0;
      margin: 0;
    }

    @keyframes tingle {
      0% {
        background: #0286cb;
      }
      50% {
        background: #0056a2;
      }
      100% {
        background: #0286cb;
      }
    }
  }

  .main-visual {
    position: relative;
    border-radius:30px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15);
    overflow:hidden;
    background:rgba(255,255,255,0.98);
    min-height:720px;

    .visual-title {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding:60px;

      .text {
        width: auto;

        span {
          font-size: 1.5rem;
          letter-spacing: 10px;
          color: #888;
          margin-left: 10px;
        }
        h2 {
          font-size: 4.8rem;
          line-height: 5.8rem;
          font-weight: 200;
          margin-top: 25px;
          margin-bottom: 30px;
          b {
            font-weight: 200;
            color: #0286cb;
          }
        }
        p {
          font-size: 1.4rem;
          line-height: 2.4rem;
          font-weight: 300;
        }
      }
    }
    
    .carousel{
      .carousel-item{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;

        img{
          display:block;
          max-height:720px;
        }
      }
    }
  }
}

.middle-visual.section{
  padding:0px;
  padding-bottom:120px;

  .section-title:before{
    content:'';
    display:inline-block;
    width:40px;
    height:6px;
    border-radius:3px;
    background:#e2e2e2;
    margin-bottom:30px;
  }

  .pager{
    margin-top:50px;
    bottom:30px;


    .v-btn{
      border:1px solid #c2c2c2;
      height:50px;
      border-radius:0px;
    }
    .v-btn:last-child{
      border-left:0px;
    }
  }
  
  .visual-item{
    display:flex;
    align-items: center;
    justify-content: center;
    max-height:450px;
    border-radius:15px; 
    overflow:hidden;

    img{width:100%;}
  }
}

.section-02 {
  margin-top:50px;

  .section-title {
    margin-bottom: 80px;
    text-align: center;

    .v-divider{
      display:inline-block;
      margin-bottom:70px;
      height:100px;
      width:1px;
      background: #e2e2e2;
    }
  }

  .more{
    margin-top:80px;
    text-align:center;
    
    .v-btn{
      width:100%;
      max-width:900px;
      background:#e2e2e2;
      height:60px;
      border-radius:30px;
      label{
        font-size:1.4rem;
        color:#494949;
      }
      .v-icon{
        margin-left:20px;
        color:#b2b2b2;
      }
    }
    .v-btn:hover{
      background:#EF1682;
      label{
        color:#fff;
      }
      .v-icon{
        color:#fff;
      }
    }
  }

  .hooperWrap {
    position: relative;
    border-radius: 30px;
    overflow: hidden;
    border: 1px solid #e2e2e2;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

    .hooper {
      height: 840px;
      margin: 0;
      padding: 0;
      transform: unset;
    }

    .hooper:focus {
      outline: none;
    }

    .slide-item {
      position: relative;
      height: 100%;
      text-align: left;

      .item-text {
        text-align: left;
        padding: 50px;

        span {
          display: block;
          color: #888;
          font-size: 1.2rem;
          margin-bottom: 10px;
        }
        p {
          font-size: 1.8rem;
        }
        a {
          display: block;
          margin-top: 20px;
          color: #0286cb;
        }
      }

      .img {
        position: absolute;
        bottom: 0px;
        left: 0px;
        padding: 0 50px;
        display: flex;
        justify-content: center;
        img {
          width: 100%;
          display: block;
        }
      }
    }
  }

  .section-contents {
    position: relative;

    .hooperBtn {
      width: 90%;
      display: flex;
      justify-content: space-between;
      top: 50%;
      left: 5%;
      position: absolute;
      transform: translateY(-50%);
      padding: 0;

      .v-btn {
        width: 50px;
        min-width: 50px;
        min-height: 50px;
        border-radius: 50%;
        background: #0286cb;

        .v-icon {
          color: #fff;
        }
      }

      .v-btn:first-child {
        margin-left: -30px;
      }

      .v-btn:last-child {
        margin-right: -30px;
      }
    }
  }
}



.section-03 {
  padding:100px 0;

  .section-title {
    padding-right: 50px;

    p {
      margin-top: 30px;
    }
  }

  .section-title:before{
    content:'';
    display:inline-block;
    width:40px;
    height:6px;
    border-radius:3px;
    background:#e2e2e2;
    margin-bottom:30px;
  }

  .item {
    margin-bottom: 40px;

    .img {
      background: #e2e2e2;
      border-radius: 10px;
      overflow:hidden;

      img{
        width:100%;
        display:block;
      }
    }

    dl {
      padding-right: 100px;

      dt {
        font-size: 1.8rem;
        color: #494949
      }
      dd {
        font-size: 1.2rem;
        line-height:1.8rem;
        margin-top: 10px;
        color: #888
      }
    }

    dl:before{
      display:block;
      content:'';
      width:20px;
      height:2px;
      background:#e2e2e2;
      margin:25px 0;
    }
  }
}

.section-04{
  display:flex;
  justify-content: center;
  background:#f8f8f8;
  .inner{
    max-width:1280px;
  }

  .section-title{
    margin-bottom:50px;
    text-align:center;
  }

  .partner-logo{
    display:flex;
    flex-wrap: wrap;

    span{
      img{
        display:block;
        width:100%;
      }
    }
  }
}


.section-05{
  
  .section-title{
    margin-bottom:30px;
  }

  .section-title:before{
    content:'';
    display:inline-block;
    width:40px;
    height:6px;
    border-radius:3px;
    background:#e2e2e2;
    margin-bottom:30px;
  }

  .list{
    background:#fff;
    border-radius:0px;
    border-top:1px solid #494949;
    border-bottom:1px solid #e2e2e2;
    padding:30px 15px;
    height:100%;

    .list-title{
      margin-bottom:30px;
      font-size:1.3rem
    }

    ul{
      li{
        border-bottom:1px solid #e2e2e2;
        margin-bottom:30px;
        padding-bottom:30px;

        a{
          display:flex;
          align-items: flex-start;
          text-decoration:none;
          color:#595959;
        }

        a:hover{
          .cont-title{
            text-decoration:underline;
          }
        }
        
        .image{
          display:Flex;
          justify-content: center;
          align-items: center;
          width:110px;
          height:110px;
          border:1px solid #e2e2e2;
          margin-right:30px;
          border-radius:5px;
          overflow:hidden;

          img{
            height:120%;
            display:block;
          }
        }
        .cont{
          fleX:1;
          .cont-title{
            display:-webkit-box;
            width:100%;
            font-size:1.3rem;
            overflow:hidden;
            text-overflow: ellipsis;
            white-space:normal;
            -webkit-line-clamp: 2;
            -webkit-box-orient:vertical
          }
          .cont-info{
            display:flex;
            align-items: center;
            margin-top:10px;
            span{color:#888;margin-right:15px;}
          }
        }
      }

      li:last-child{
        margin-bottom:0;
        border-bottom:0;
      }
    }
  }
}

.section-06{

  background:#f8f8f8;
  padding:90px 0;

  .customer{
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;

  h4{
      font-size:2rem;
    }
    dl{
      padding-top:40px;
      dt{
        font-size:1.2rem;
        margin-bottom:5px;
        color:#888;
      }
      dd{
        font-size:2.4rem;
        font-weight:500;
      }
    }

    .v-btn{
      height:40px;
      margin-top:30px;
      background:#FFCC00;

      .v-icon{
        font-size:18px;
        margin-right:10px;
      }
    }
  }

  .files{
    display:flex;
    justify-content: center;
    align-items: center;
    height:100%;


    .divider{
      width: 1px;
      height:100%;
      background:#e2e2e2;
      margin:0 20px;
    }
    
    dl{
      padding:0 30px;
      dt{
        display:flex;
        justify-content: center;

        img{
          width:100%;
          max-width:180px;
          display:block;
        }
      }
      dd{
        text-align:center;
        margin-top:30px;
        label{
          display:block;
          font-size:1.2rem
        }
        .v-btn{
          border:2px solid #0286cb;
          height:30px;
          color:#0286cb;
          margin-top:10px;
        }
      }
    }

  }

}

@media screen and (max-width:1440px){
  .home{
    .top-bg{
      .wave1{
        width:700px;
        height:700px;
        left:-400px;
        top:-150px;
        border-radius:300px;
      }
      .wave2{
        width:500px;
        height:500px;
        top:400px;
        right:-350px;
        border-radius:200px;
      }
    }
  }

  .section{
    left:0;
    transform:none;
    
    .inner{
      margin:0 20px;
    }
  }

  .section-01{
    .main-visual{
      .visual-title{
        .text{
          span{
            font-size:1.4rem;
            letter-spacing: 1px;
          }
          h2{
            font-size:4rem;
            line-height:5rem
          }
        }
      }
    }
  }
}
@media screen and(max-width:1280px){
  
} 
@media screen and(max-width:960px){
  .section-01{
    .main-visual{
      .visual-title {
        height: 100%;
        display: block;
        text-align:center;
        padding:50px;
      }
      .carousel{
        .carousel-item{
          img{
            max-height:460px;
          }
        }
      }
    }
  }
}
@media screen and (max-width:720px){
  .section-01{
    padding:0 10px;

    .bottom-arrow{
      display:none;
    }

    .main-visual{
      .visual-title {
        height:100%;

        .text {
          span {
            font-size: 1.2rem;
          }
          h2 {
            font-size: 3rem;
            line-height: 4rem;
          }
          p {
            font-size: 1.2rem;
            line-height:2.2rem;
          }
        }
      }
      .carousel{
          .carousel-item{
          img{
            max-height:400px;
          }
        }
      }
    }
  }

  .section-03{
    .section-title{
      margin-bottom:50px;
      padding:0;
      text-align:center;
    }
  }

  .section-05{
    .list.news{
      margin-right:0px;
    }
    .list.blog{
      margin-left:0px;
    }
  }

  .section-06{
    .section-title{
      text-align:center;
    }
    
    .files{
      margin-top:30px;
      border-top:1px solid #e2e2e2;
      .divider{
        margin:0 15px;
      }
      dl{
        padding:15px;
      }
    }
  }
}

@media screen and (max-width:480px){
  .section-01{
    .main-visual{
      min-height:auto;
      .visual-title {
        padding:40px 20px;
        .text {
          span {
            font-size: 1.2rem;
          }
          h2 {
            font-size: 2.5rem;
            line-height: 3rem;
            margin-bottom:20px;
          }
          p {
            font-size: 1.2rem;
            line-height:2rem;
          }
        }
      }

      .carousel{
          .carousel-item{
          img{
            max-height:300px;
          }
        }
      }
    }
  }

  .hooperWrap{
    .hooper{
      max-height:500px;
    }
  }

  .section-05{
    .list{
      padding:30px 0px;
      ul{
        li{
          margin-bottom:20px;
          padding-bottom:20px;
          .image{
            width:80px;
            height:80px;
            margin-right:20px;
          }
        }
      }
    }
  }

}

</style>
