<template>
  <div class="payot-mini">
    <div class="top">
      <div class="inner">
        <v-row>
          <v-col cols="12" md="7" class="left">
            <div class="thumnail">
              <v-carousel
                cycle
                hide-delimiter-background
                :show-arrows="false"
                v-model="thumnail"
              >
                <v-carousel-item
                  v-for="(item, index) in thumnailData"
                  :key="index"
                >
                  <div class="image">
                    <img :src="item.url" />
                  </div>
                </v-carousel-item>
              </v-carousel>

              <div class="control">
                <dl 
                  v-for="(item, index) in thumnailData" 
                  :key="index" 
                  :class="{active:thumnail === index}"
                  @click="thumnail = index"
                >
                  <dt>{{ item.name }}</dt>
                </dl>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="5" class="right">
            <h2>키오스크 미니</h2>
            <div class="divider"></div>
            <div class="options">
              <dl>
                <dt>도입비용</dt>
                <dd>145만원</dd>
              </dl>
              <dl>
                <dt>월 사용료</dt>
                <dd>33,000원</dd>
              </dl>
              <dl>
                <dt>무상 A/S기간</dt>
                <dd>설치일로부터 1년 보증<br/>(재해 및 고객과실은 제외됩니다.)</dd>
              </dl>
            </div>

            <div class="divider"></div>

            <h4>설치 구성품</h4>
            <div class="kit">
              <dl>
                <dt>
                  <img src="/img/kiosk_mini/kiosk_mini.png" />
                </dt>
                <dd>키오스크 미니(태블릿)</dd>
              </dl>
              <dl>
                <dt>
                  <img src="/img/kiosk_mini/control.png" />
                </dt>
                <dd>IOT 무선결제장치(10개)</dd>
              </dl>
              <dl>
                <dt>
                  <img src="/img/kiosk_mini/smartpay.png" />
                </dt>
                <dd>스마트페이 결제 키트</dd>
              </dl>
            </div>

            <div class="divider"></div>

            <div class="btns">
              <div class="btn phone">
                <strong>전화문의</strong>
                <span>070.7807.6857</span>
              </div>
              <div class="btn kakao" @click="kakao">
                <strong>카톡상담</strong>
                <img src="/img/kakao.png" />
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="detail">
      <section class="section_1">
        <div class="inner">
          <div class="text">
            <span>소규모 무인세탁매장을 위한 스마트 매장관리 솔루션</span>
            <h2>키오스크 미니</h2>
            <p>
              키오스크 미니는 편리한 결제시스템과 스마트한 매장관리를
              <br />한 번에 가능하게 만드는 무인세탁매장 관리 솔루션입니다.
            </p>
          </div>
          <img src="/img/kiosk_mini/kiosk_title.png" />

          <v-row class="spec">
            <v-col cols="4" md="2">
              <div class="spec_item">
                <span class="material-icons">bluetooth</span>
                <strong>블루투스 5.0</strong>
              </div>
            </v-col>
            <v-col cols="4" md="2">
              <div class="spec_item">
                <span class="material-icons">memory</span>
                <strong>쿼드코어 칩셋</strong>
              </div>
            </v-col>
            <v-col cols="4" md="2">
              <div class="spec_item">
                <span class="material-icons">android</span>
                <strong>안드로이드11</strong>
              </div>
            </v-col>
            <v-col cols="4" md="2"
              ><div class="spec_item">
                <span class="material-icons">tablet</span>
                <strong>10.1인치 LCD</strong>
              </div>
            </v-col>
            <v-col cols="4" md="2"
              ><div class="spec_item">
                <span class="material-icons">credit_card</span>
                <strong>간편결제 지원</strong>
              </div>
            </v-col>
            <v-col cols="4" md="2">
              <div class="spec_item">
                <span class="material-icons">monitor</span>
                <strong>쉬운 관리프로그램</strong>
              </div>
            </v-col>
          </v-row>
          <div class="spec"></div>
        </div>
      </section>

      <section class="section_2">
        <div class="inner">
          <div class="text">
            <h2>간단하고, 편리한<br />무인세탁매장 전용 키오스크</h2>
            <p>
              페이오티에서 개발한 IOT무선장비를 설치를 통해<br />세탁장비와
              매장을 스마트하게 관리할 수 있습니다
            </p>
          </div>
          <div class="image">
            <img src="/img/kiosk_mini/plan.png" />
          </div>
        </div>
      </section>

      <section class="section_3">
        <div class="inner">
          <div class="text">
            <h2>편리하고 다양한 스마트한 기능 지원</h2>
          </div>
          <v-row>
            <v-col cols="12" md="6">
              <dl>
                <dt>
                  <img src="/img/kiosk_mini/function_1.png" />
                </dt>
                <dd>
                  <strong>
                    네이버/카카오/삼성페이 간편결제지원
                  </strong>
                  <span
                    >빠르고 편리한 결제를 위해 다양한 간편결제 시스템을
                    지원합니다.</span
                  >
                </dd>
              </dl>
            </v-col>
            <v-col cols="12" md="6">
              <dl>
                <dt>
                  <img src="/img/kiosk_mini/function_2.png" />
                </dt>
                <dd>
                  <strong>
                    매출관리도 간편하게 실시간 매출확인
                  </strong>
                  <span>
                    모바일 및 PC를 통해 실시간으로 결제되는 현황을 확인할 수
                    있습니다.
                  </span>
                </dd>
              </dl>
            </v-col>
            <v-col cols="12" md="6">
              <dl>
                <dt>
                  <img src="/img/kiosk_mini/function_3.png" />
                </dt>
                <dd>
                  <strong>
                    다양한 카카오톡 알림서비스
                  </strong>
                  <span>
                    세탁물 방치 방지를 위한 알림, 결제영수증 등 다양한 알림을
                    카카오톡으로 전달됩니다.
                  </span>
                </dd>
              </dl>
            </v-col>
            <v-col cols="12" md="6">
              <dl>
                <dt>
                  <img src="/img/kiosk_mini/function_4.png" />
                </dt>
                <dd>
                  <strong>
                    원격제어을 통해 장비에 금액을 투입
                  </strong>
                  <span>
                    외부에서도 장비에 금액을 투입할 수 있어 금액오류에의한
                    클레임은 재빠르게 해결할 수 있습니다.
                  </span>
                </dd>
              </dl>
            </v-col>
          </v-row>
        </div>
      </section>

      <section class="section_5">
        <div class="inner">
          <div class="text">
            <h2>매출 관리와 운영에 효과적인 데이터 분석</h2>
          </div>

          <v-row>
            <v-col cols="12" md="4">
              <dl>
                <dt><img src="/img/sales-09.png" /></dt>
                <dd>
                  <strong>타매장 매출비교</strong>
                  <span
                    >전국 가맹점들과의 평균매출을 비교하여 우리가게의 매출이
                    전체 어느정도인지를 비교분석하여 알려드립니다</span
                  >
                </dd>
              </dl>
            </v-col>
            <v-col cols="12" md="4">
              <dl>
                <dt><img src="/img/calendar.png" /></dt>
                <dd>
                  <strong>매출캘린더</strong>
                  <span
                    >이번달 매출이 달력안에 표기되어 간편하게<br />일 매출을
                    확인할 수 있습니다</span
                  >
                </dd>
              </dl>
            </v-col>
            <v-col cols="12" md="4">
              <dl>
                <dt><img src="/img/sales-02.png" /></dt>
                <dd>
                  <strong>월/일/시 매출통계</strong>
                  <span
                    >데이터를 시각화를 통해 한눈에 데이터를 파악하여<br />매장의
                    매출을 빠르게 분석할 수 있습니다</span
                  >
                </dd>
              </dl>
            </v-col>
          </v-row>
        </div>
      </section>

      <section class="section_4">
        <div class="inner">
          <div class="text">
            <h2>QR코드로 간편하게 결제 ‘스마트페이’</h2>
            <p>
              세탁 장비에 부착된 QR코드를 스캔하면, 스마트폰을
              키오스크(결제장비)로 사용할 수 있습니다
              <br /><b>※ 키오스크 미니 이용시 함께 설치됩니다.</b>
            </p>

            <v-btn outlined @click="$router.push('/smartpay')">
              <span>스마트페이 상세보기</span>
              <span class="material-icons">arrow_right</span>
            </v-btn>
          </div>
          <div class="cont">
            <img src="/img/smartpay/movie02.gif" />
          </div>
        </div>
      </section>

      <section class="section_6">
        <div class="inner">
          <div class="text">
            <h2>주문협의 및 설치절차</h2>
          </div>
          <v-row>
            <v-col cols="6" md="3">
              <dl>
                <dt>
                  01
                </dt>
                <dd>
                  <strong>구매 및 설치문의</strong>
                  <span>카카오톡, 전화 상담을 통해 구매절차를 진행합니다.</span>
                </dd>
              </dl>
            </v-col>
            <v-col cols="6" md="3">
              <dl>
                <dt>
                  02
                </dt>
                <dd>
                  <strong>설치일정 조율</strong>
                  <span>필요 시기 혹은 오픈일에 따른 설치일정 조율합니다.</span>
                </dd>
              </dl>
            </v-col>
            <v-col cols="6" md="3">
              <dl>
                <dt>
                  03
                </dt>
                <dd>
                  <strong>키오스크 셋팅</strong>
                  <span>협의된 매장정보를 기준으로 키오스크 준비합니다.</span>
                </dd>
              </dl>
            </v-col>
            <v-col cols="6" md="3">
              <dl>
                <dt>
                  04
                </dt>
                <dd>
                  <strong>방문설치</strong>
                  <span
                    >조율된 날짜에 맞춰 기사님이 방문하여 키오스크를
                    설치합니다.</span
                  >
                </dd>
              </dl>
            </v-col>
          </v-row>
        </div>
      </section>

      <section class="section_7">
        <div class="inner">
          <div class="text">
            <h2>키오스크 스펙 및 구성</h2>
          </div>

          <div class="spac">
            <div class="spac_item">
              <span>크기</span>
              <strong>넓이 280mm x 높이 165mm</strong>
            </div>
            <div class="spac_item">
              <span>화면</span>
              <strong>10.1인치 LCD</strong>
            </div>
            <div class="spac_item">
              <span>운영체제</span>
              <strong>안드로이드 11</strong>
            </div>
            <div class="spac_item">
              <span>프로세서</span>
              <strong>쿼드코어 프로세서</strong>
            </div>
            <div class="spac_item">
              <span>설치방식</span>
              <strong>거치형 or 벽면부착형</strong>
            </div>
            <div class="spac_item">
              <span>설치조건</span>
              <strong>설치 위치 근처 220V 전원 콘센트 1개 필요</strong>
            </div>
          </div>

          <div class="product">
            
            <div class="image">
              <img src="/img/kiosk_mini/kiosk_option.png" />
            </div>
            <span>키오스크 미니 거치형 또는 벽부착형 중 택1</span>
          </div>

          <v-row>
            <v-col cols="6" md="4">
              <dl>
                <dt><img src="/img/kiosk_mini/control.png" /></dt>
                <dd>IOT 무선결제장치(10개)</dd>
              </dl>
            </v-col>
            <v-col cols="6" md="4">
              <dl>
                <dt><img src="/img/kiosk_mini/smartpay.png" /></dt>
                <dd>스마트페이 결제 키트</dd>
              </dl>
            </v-col>
            <v-col cols="6" md="4">
              <dl>
                <dt><img src="/img/kiosk_mini/function_2.png" /></dt>
                <dd>관리시스템 PC/모바일 제공</dd>
              </dl>
            </v-col>
          </v-row>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thumnail: 0,
      thumnailData: [
        {
          url: "/img/kiosk_mini/kiosk2.png",
          name: "키오스크 미니 스탠드형",
        },
        {
          url: "/img/kiosk_mini/kiosk_mini.png",
          name: "키오스크 미니 벽부착형",
        },
      ],
    };
  },
  methods: {
    kakao() {
      window.open("about/blank").location.href = "https://pf.kakao.com/_uAqmK";
    },
  },
};
</script>

<style lang="scss" scoped>
.payot-mini {
  padding: 150px 0;
  overflow:hidden;

  .top {
    .inner {
      max-width: 1440px;
    }
    .row {
      padding: 0;
      margin: -60px;
    }
    .col-12 {
      margin: 0;
      padding: 60px;
    }

    .left {
      .thumnail {
        .image {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          padding: 50px;

          img {
            max-width: 100%;
            max-height:400px;
          }
        }
      }

      .control{
        display:flex;
        align-items: center;
        justify-content: center;
        gap:20px;
        margin-top:20px;

        dl{
          display:flex;
          align-items: center;

          background:#f2f2f2;
          border-radius:20px;
          padding:10px 20px;
          cursor: pointer;
        }
        dl.active{
          background:#0066ff;
          color:#fff;
        }
      }
    }

    .right {
      h2 {
        font-size: 32px;
      }
      .divider {
        height: 1px;
        background: #e2e2e2;
        margin: 30px 0;
      }

      .options {
        display: flex;
        flex-direction: column;
        gap: 15px;
        dl {
          display: flex;
          justify-content: space-between;
          dt {
          }
          dd {
            text-align:right;
            font-size: 18px;
            font-weight: 600;
          }
        }
      }
      h4 {
        margin-bottom: 15px;
      }
      .kit {
        display: flex;
        gap: 20px;
        dl {
          flex: 1;
    
          dt {
            display: flex;
            justify-content: center;
            text-align: center;
            background: #f5f5f7;
            border-radius: 5px;
            padding: 15px;

            img {
              max-width: 100%;
              max-height: 60px;
            }
          }

          dd {
            text-align: center;
            margin-top: 15px;
            font-size: 13px;
          }
        }
      }

      .btns {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;

        .btn {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 15px;
          flex: 1;
          border: 1px solid #d2d2d2;
          height: 60px;
          border-radius: 5px;
          strong {
            font-size: 14px;
          }
          span {
            font-weight: 600;
            font-size: 16px;
          }
        }

        .kakao {
          background: #f5e000;
          &:hover {
            background: #ffeb10;
          }
          border: 0;
          cursor: pointer;
          img {
            height: 28px;
          }
        }
      }
    }
  }

  .detail {
    border-top: 1px solid #e2e2e2;
    margin-top: 100px;
  }
}

section {
  padding: 120px 20px;
  .inner {
    max-width: 1200px;
  }
  .text {
    margin-bottom: 70px;

    h2 {
      font-size: 40px;
    }
    p {
      font-size: 20px;
      margin-top: 20px;
      color: #595959;
    }
  }
}

.section_1 {
  background: #f5f5f7;
  .text {
    span {
      font-size: 24px;
    }
    h2 {
      font-size: 100px;
      font-weight: 900;
    }
  }

  img {
    width: 100%;
  }

  .row {
    padding: 0;
    margin: -10px;
  }
  .col-12 {
    padding: 10px;
    margin: 0;
  }

  .spec {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 70px auto 0 auto;
    .spec_item {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      span {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 20px;
        font-size: 40px;
        background: #fff;
        border-radius: 10px;
      }
      strong {
        margin-top: 15px;
      }
    }
  }
}

.section_2 {
  .image {
    img {
      width: 100%;
    }
  }
}

.section_3 {
  .row {
    padding: 0;
    margin: -30px;
  }
  .col-12 {
    padding: 30px;
    margin: 0;
  }

  .divider {
    height: 1px;
    background: #e2e2e2;
  }

  dl {
    dt {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      background: #f5f5f7;
      padding: 10%;
      padding-bottom: 0;
      border-radius: 10px;
      img {
        max-width: 100%;
        max-height: 240px;
      }
    }
    dd {
      margin-top: 20px;
      strong,
      span {
        display: block;
      }
      strong {
        font-size: 24px;
      }
      span {
        margin-top: 10px;
      }
    }
  }
}

.section_4 {
  padding-top: 0;
  .inner {
    border-top: 1px solid #e2e2e2;
    padding-top: 120px;
  }
  .text {
    .v-btn {
      height: 50px;
      border: 1px solid #292929;
      border-radius: 5px;
      margin-top: 20px;
      background: #fff;
    }
    b {
      color: #0066ff;
    }
  }

  .cont {
    img {
      object-fit: cover;
      width: 100%;
      height: 500px;
      border-radius: 10px;
    }
  }
}

.section_5 {
  padding-top: 0;

  .row {
    margin: -30px;
  }
  .col-12 {
    padding: 30px;
  }
  dl {
    dt {
      border: 1px solid #e2e2e2;
      overflow: hidden;
      border-radius: 5px;
      img {
        object-fit: cover;
        width: 100%;
        height: 200px;
        object-position: top;
      }
    }
    dd {
      margin-top: 30px;
      strong,
      span {
        display: block;
      }
      strong {
        font-size: 20px;
      }
      span {
        font-size: 16px;
        margin-top: 10px;
        color: #595959;
      }
    }
  }
}

.section_6 {
  background: #f5f5f7;
  .row {
    padding: 0;
    margin: -20px;
  }
  .col-6 {
    padding: 20px;
    margin: 0;
  }
  dl {
    dt {
      font-size: 40px;
      font-weight: 800;
      color: #0066ff;
    }
    dd {
      margin-top: 10px;

      strong,
      span {
        display: block;
      }
      strong {
        font-size: 20px;
      }
      span {
        font-size: 16px;
        margin-top: 10px;
        color: #898989;
      }
    }
  }
}

.section_7 {
  .row {
    margin: -10px;
  }
  .col-6 {
    padding: 10px;
  }
  .spac {
    margin-top: 50px;
    margin-bottom:70px;
    .spac_item {
      display: flex;
      align-items: center;
      height: 40px;
      border-bottom: 1px solid #e2e2e2;
      margin-bottom: 10px;
      span {
        width: 120px;
      }
      strong {
        flex: 1;
      }
    }
  }
  .product{
    position: relative;
    margin-bottom:50px;

    .image{
      display:flex;
      align-items: center;
      justify-content: center;
      background:#f2f2f2;
      padding:50px 0;
      border-radius:10px;
      img{
        max-width: 100%;
        max-height: 400px;
      }
    }

    span{
      display:block;
      margin-top:30px;
      font-size:20px;
      text-align: center;
    }
  }

  dl {
    text-align: center;
    dt {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 30px 15px;
      background: #f5f5f7;
      border-radius: 10px;
      img {
        max-width: 100%;
        max-height: 100px;
      }
    }
    dd {
      margin-top: 15px;
      font-size:18px;
    }
  }
}

@media screen and(max-width:1440px) {
  .top {
    padding: 0 20px;
  }
}
</style>
