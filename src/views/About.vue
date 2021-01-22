<template>
  <div class="about">
    <div class="subVisual">
      <div class="subTitle">
        <h4>무인매장을 더욱 편리하게</h4>
        <span></span>
        <p>페이오티</p>
      </div>
      <div class="black"></div>
    </div>

    <div class="tab-wrap">
      <ul :class="{ tabs: true, tabsActive: tabSticky }">
        <li
          :class="{ tab: true, tabActive: tabs === index ? true : false }"
          v-for="(item, index) in items"
          :key="index"
          @click="tabMove(index)"
        >
          {{ item }}
        </li>
      </ul>
      <v-slide-x-transition>
        <div class="tab-items company" v-show="tabs === 0">
          <div class="section-01">
            <div class="inner">
              <v-row>
                <v-col cols="12" md="6">
                  <div class="sec-title">
                    <h2>
                      페이오티는 완전한 무인화시스템을<br />연구하는 전문
                      기업입니다
                    </h2>
                    <p>
                      기존 무인매장의 한계를 극복하기 위해 원격 결제시스템을
                      도입해 비상 상황에 대처하고 매출까지 자동으로 관리할 수
                      있는 시스템을 개발해 매장 운영의 완전 무인화를 앞당기고
                      있습니다
                    </p>
                  </div>

                  <dl>
                    <dt>
                      <img src="/img/about-img01.jpg" />
                    </dt>
                    <dd>
                      <h4>사물과 사물을 연결하는 기술력</h4>
                      <p>
                        (주)페이오티는 스마트한 사업환경을 구축을 위한 핵심
                        무인기술력을 보유하고 있으며 무인장비 제어기술력과
                        혁신성을 기반으로 사람중심적 제품을 만들어 나가고
                        있습니다
                      </p>
                    </dd>
                  </dl>
                </v-col>
                <v-col cols="12" md="6">
                  <dl>
                    <dt>
                      <img src="/img/about-img02.jpg" />
                    </dt>
                    <dd>
                      <h4>무인매장을 가장 잘 아는 사람들</h4>
                      <p>
                        페이오티는 각 분야의 전문가들이 모여 최고의 장비를
                        제작합니다. 사람의 편리함과 편의성을 먼저 생각하며,
                        효율적이고 실용성있는 시스템을 만들기 위해 노력하고
                        있습니다
                      </p>
                    </dd>
                  </dl>
                </v-col>
              </v-row>
            </div>
          </div>

          <div class="section-02">
            <div class="inner">
              <div class="sec-title">
                <h2>페이오티 대표 서비스</h2>
              </div>
              <v-row>
                <v-col cols="12" md="4">
                  <dl>
                    <dt>
                      <img src="/img/about-icon02.png" />
                    </dt>
                    <dd>
                      <strong>무인세탁매장 전용 키오스크</strong>
                      <span>
                        무익세탁매장을 스마트하게 관리하자!
                        동전까지 잡아내는 정확한 매출집계와 간편한 금액 원격투입기능,
                        카드결제에 삼성페이 결제까지 완벽한 시스템
                        다양한 스마트기능으로 색다른 관리 경험을 제시합니다
                      </span>
                      <div class="more">
                        <v-btn text @click="$router.push('kiosk')">자세히 보기</v-btn>
                      </div>
                    </dd>
                  </dl>
                </v-col>
                <v-col cols="12" md="4">
                  <dl>
                    <dt>
                      <img src="/img/about-icon03.png" />
                    </dt>
                    <dd>
                      <strong>동전/지폐기 모바일 결제시스템</strong>
                      <span>
                        동전투입기, 지폐기를 스마트하게 만들어드립니다!
                        페이오티에서 개발한 특별한 장치를 통해 기본 현금만
                        투입되던 장치에 모바일 결제기능을 더한
                        스마트한 기능을 더해드립니다
                      </span>
                    </dd>
                  </dl>
                </v-col>
                <v-col cols="12" md="4">
                  <dl>
                    <dt>
                      <img src="/img/about-icon04.png" />
                    </dt>
                    <dd>
                      <strong>세탁 수거/배달 전문앱 데일리세탁</strong>
                      <span>
                        모바일로 간편하게! 앱으로 주문하면 문앞까지 수거·배송!
                        세탁물을 직접 수거하고 세탁후 깔끔하게 배달해드리는
                        서비스입니다 고객님이 원하는 장소로 세탁물을 수거·배달해드립니다
                      </span>
                      <div class="more">
                        <v-btn text @click="daily">자세히보기</v-btn>
                      </div>
                    </dd>
                  </dl>
                </v-col>
              </v-row>
            </div>
          </div>
          <!-- section-02 -->

          <div class="section-03">
            <div class="inner">
              <v-row>
                <v-col cols="12" md="6">
                  <div class="section-title">
                    <h4>함께 성장하는 페이오티</h4>
                    <p>스마트폰 결제, 무인장비 관리시스템, 무인장비 중앙결제시스템을 
    통하여 무인장비 운영점주, 프렌차이즈 본사에게 매출상승, 비용감소효과를 안겨줌으로써 함께 성장하는 기업이 되고자 
    노력하고 있습니다</p>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
          <!-- section-03 -->
        </div>
      </v-slide-x-transition>

      <v-slide-x-transition>
        <div class="tab-items" v-show="tabs === 1">
          <History />
        </div>
      </v-slide-x-transition>

      <v-slide-x-transition>
        <div class="tab-items" v-show="tabs === 2">
          <Location />
        </div>
      </v-slide-x-transition>
    </div>
  </div>
</template>

<script>
import History from '@/components/about/history.vue';
import Location from '@/components/about/location.vue';

export default {
  components:{
    History, Location
  },
  data() {
    return {
      tabs: 0,
      items: ["회사소개", "히스토리", "회사정보"],
      text: "dasdsadasdsadsa",
      tabSticky: false,
    };
  },
  mounted() {
    window.scrollTo(0,0)
    window.addEventListener("scroll", this.tabFixed)
  },
  methods: {
    tabFixed() {
      window.scrollY >= 450
        ? (this.tabSticky = true)
        : (this.tabSticky = false);
    },
    tabMove(i){
      this.tabs = i
      window.scrollTo(0,430)       
    },
    daily(){
      window.open('https://www.dailywash.co.kr/', '_new')
    }
  },
};
</script>

<style lang="scss" scoped>
.about {
  height: 100%;

  .inner {
    width:100%;
    max-width: 1280px;
    margin:0 auto;
  }
  
  .subVisual{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
    background: #f2f2f2 url("/img/about-bg.jpg") 100% center;
    border-radius: 15px;
    overflow: hidden;
    margin:0 30px;

    .subTitle {
      position: relative;
      z-index: 2;
      text-align: center;

      h4 {
        font-size: 1.3rem;
        color: #fff;
        font-weight: 300;
        letter-spacing: 5px;
      }
      span {
        display: inline-block;
        margin: 20px 0;
        width: 30px;
        height: 1px;
        background: #fff;
      }
      p {
        font-size: 3rem;
        line-height:3rem;
        font-weight: 200;
        color: #fff;
      }
    }

    .black {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.7);
    }
  }

  .tab-wrap {
    .tabs {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80px;
      font-size: 1.2rem;
      background:#fff;
      z-index:99;

      .tab {
        margin: 0 40px;
        color: #888;
      }
      .tab:hover {
        cursor: pointer;
        color: #0084DE;
      }
      .tabActive {
        color: #0084DE;
      }
    }

    .tabsActive {
      position: fixed;
      width: 100%;
      top: 70px;
      height: 50px;
      border-bottom: 1px solid #e2e2e2;
      animation: tabsActive 0.5s forwards;
      background: #fff;

      @keyframes tabsActive {
        0% {
          height: 80px;
        }
        100% {
          height: 50px;
          font-size: 1rem;
        }
      }
    }

    .tab-items {
      margin-top: 70px;
    }
  }

  .company {
    .section-01 {
      .sec-title {
        h2 {
          font-size: 2rem;
          font-weight: 400;
        }
        p {
          margin-top: 20px;
          color: #999;
          font-size: 1.2rem;
        }
      }

      .row {
        .col-md-6 {
          padding: 40px;
        }
      }

      dl {
        margin-top: 90px;
        dt {
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 15px;
          // box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.2);

          img {
            width: 100%;
            display: block;
          }
        }
        dd {
          margin-top: 30px;
          h4 {
            font-size: 1.5rem;
            font-weight: 400;
          }
          p {
            font-size: 1.1rem;
            margin-top: 15px;
            color: #999;
          }
        }
      }
    }

    .section-02 {
      margin-top: 100px;
      .sec-title {
        h2 {
          font-size: 2rem;
          text-align: center;
        }
        margin-bottom: 30px;
      }

      dl {
        display:flex;
        flex-direction: column;
        border: 1px solid #e2e2e2;
        padding:0 30px;
        text-align: center;
        min-height:380px;
        border-radius:10px;

        dt {
          margin:40px 0;
          img {
            height: 60px;
          }
        }
        dd {
          font-size: 1.2rem;
          text-align: left;

          strong{
            display:block;
            font-weight:500;
            font-size:18px;
          }
          span{
            display:block;
            margin-top:15px;
            font-size:14px;
            line-height:24px;
            color:#888;
          }

          .more{
            text-align:right;
            .v-btn{
              margin-top:30px;
              font-size:14px;
              color:#026DCB;
            }
          }
        }
      }
    }

    .section-03 {
      margin-top: 120px;
      width: 100%;
      min-height:500px;
      padding: 120px 0;
      background:url('/img/about-bg3.jpg') no-repeat;
      .section-title{
        padding:30px;
        background:#fff;
      }
    }
  }
}


</style>
