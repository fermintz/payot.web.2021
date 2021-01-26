<template>
  <div class="sales">
    <div class="section-1">
      <div class="inner">
        <div class="section-title">
          <h2>매출관리/통계 관리자</h2>
          <p>
            우리가게 매출을 한눈에 확인해보세요!<br />
            세탁장비에서 일어나는 동전매출에서 부터 키오스크 카드매출까지 확인할
            수 있습니다
          </p>
        </div>
        <div class="section-visual">
          <img src="/img/kiosk-sales.png" />
        </div>
      </div>
    </div>
    <div class="section section-2">
      <div class="inner">
        <v-row justify="space-between">
          <v-col cols="12" md="4">
            <div class="contents-title">
              <dl>
                <dt>이번달 매출을 간편하게<br />매출캘린더</dt>
                <dd class="text1">
                  이번달 매출이 달력안에 표기되어 간편하게 일 매출을 확인할 수
                  있습니다
                </dd>
              </dl>
            </div>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" md="7">
            <div class="contents-visual">
              <img src="/img/sales-01.png" />
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="section section-3">
      <div class="inner">
        <v-row>
          <v-col cols="12" md="4">
            <div class="contents-title">
              <dl>
                <dt>
                  <div class="member-icon">
                    <span class="premium">프리미엄</span>
                  </div>
                  매출통계/매출그래프
                </dt>
                <dd class="text1">
                  데이터를 시각화를 통해 한눈에 데이터를 파악하여 매장의 매출을
                  빠르게 분석할 수 있습니다
                </dd>
                <dd>
                  <div class="custom-pager">
                    <v-row>
                      <v-col cols="6" sm="3" md="6"  v-for="(item, i) in slides" :key="i">
                        <v-btn
                          text
                          @click="slide = i"
                          :class="{ active: slide === i }"
                        >
                          {{ item.name }}
                        </v-btn>
                      </v-col>
                    </v-row>
                  </div>
                </dd>
              </dl>
            </div>
          </v-col>
          <v-spacer />
          <v-col cols="12" md="7">
            <v-carousel
              v-model="slide"
              hide-delimiters
              :show-arrows="false"
              height="unset"
            >
              <v-carousel-item v-for="item in slides" :key="item">
                <div class="slide-item">
                  <img :src="item.url" />
                </div>
              </v-carousel-item>
            </v-carousel>
            
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="section section-4">
      <div class="inner">
        <v-row justify="space-between">
          <v-col cols="12" md="4">
            <div class="contents-title">
              <dl>
                <dt>
                  <div class="member-icon">
                    <span class="premium">프리미엄</span>
                  </div>
                  타 매장과 매출비교
                </dt>
                <dd class="text1">
                  다른 매장의 매출의 궁금증을 해결해 드립니다
                  전구 가맹점 평균 매출비교 나의 매장의 평균위치를
                  알려드립니다
                </dd>
              </dl>
            </div>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" md="7">
            <div class="contents-visual">
              <img src="/img/sales-06.png" />
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="section section-5">
      <div class="inner">
        <v-row justify="space-between">
          <v-col cols="12" md="4">
            <div class="contents-title">
              <dl>
                <dt>
                  매장 순이익 계산기
                </dt>
                <dd class="text1">
                  매장에 매출과 발생한 비용등을 입력하여
                  순이익을 계산해 볼 수 있습니다
                </dd>
              </dl>
            </div>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" md="7">
            <div class="contents-visual">
              <img src="/img/sales-07.png" />
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="section section-6">
      <div class="inner">
        <v-row justify="space-between">
          <v-col cols="12" md="4">
            <div class="contents-title">
              <dl>
                <dt>
                  <div class="member-icon">
                    <span class="premium">프리미엄</span>
                  </div>
                  키오스크 종합 매출정보
                </dt>
                <dd class="text1">
                  키오스크에서 발생하는 매출정보를 간략화하여 보여집니다
                </dd>
              </dl>
            </div>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" md="7">
            <div class="contents-visual">
              <img src="/img/sales-08.png" />
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

 
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      slides: [
        {
          name: "월간 매출차트",
          url: "img/sales-02.png",
        },
        {
          name: "일간 매출차트",
          url: "img/sales-03.png",
        },
        {
          name: "시간별 매출차트",
          url: "img/sales-04.png",
        },
        {
          name: "주간별 매출차트",
          url: "img/sales-05.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sales {
  width: 100%;

  .inner {
    width: 100%;
    overflow: hidden;
    max-width: 1280px;
    padding: 0 10px;
  }

  .section-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 120px 0;

    .section-title {
      text-align: center;
    }

    .section-visual {
      margin-top: 80px;
      border: 1px solid #d2d2d2;
      border-radius: 10px;
      overflow: hidden;

      img {
        width: 100%;
        display: block;
      }
    }
  }

  .section {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 70px 0;

    .inner {
      .contents-title {
        display: flex;
        height: 100%;
        align-items: center;

        dl {
          justify-self: center;
          dt {
            font-size: 2rem;
            margin-bottom: 20px;
          }
          dd {
            font-size: 1.2rem;
            line-height: 2rem;
            color: #888;
          }
        }
      }
      .contents-visual {
        img {
          width: 100%;
          display: block;
        }
      }
    }
  }

  .section:nth-child(2n) {
    background: #f8f8f8;
  }
  .section-2{
    .row{
      flex-direction:row-reverse;
    }
  }

  .section-3 {

    .contents-title {
      display: block;
    }

    .custom-pager {
      display:flex;
      justify-content: space-around;
      margin-top:40px;

      .col-4{
        padding:0px;
      }

      .col-6{
        padding:0px 5px; 
        .v-btn{width:100%;}
      }

      .v-btn {
        font-size: 1.1rem;
        background: #f2f2f2;
        margin-bottom:10px;
      }
      .v-btn.active {
        color: #0084de;
      }
    }

    .slide-item {
      height: 100%;
      border: 1px solid #e2e2e2;
      border-radius: 15px;
      overflow: hidden;

      img {
        width: 100%;
        display: block;
      }
    }
  }
  .section-4{
    .row{
      flex-direction:row-reverse;
    }
  }
  .section-6{
    .row{
      flex-direction:row-reverse;
    }
  }
}
</style>
