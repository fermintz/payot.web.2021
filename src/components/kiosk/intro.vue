<template>
  <div class="kiosk">
    <div class="section-1">
      <div class="inner">
        <div class="section-title">
          <h2>
            간단한 설치, 손쉬운 결제<br />점주와 고객 모두를 만족시킬
            무인결제시스템!
          </h2>
          <p>
            전문 기술 없이 간단한 터치 조작으로 고객 관리와 매장 관리를 한
            번에!<br />
            페이오티만의 무선통신 기술로 더욱 편리해진 키오스크 서비스를
            경험해보세요.
          </p>
        </div>
        <div class="section-visual">
          <img src="/img/kiosk-img01.png" />
        </div>
      </div>
    </div>
    <div class="section-2">
      <div class="inner"> 
        <v-row>
          <v-col cols="12" md="4">
            <div class="section-title">
              <h4>무인세탁서비스 관리가<br />더욱 편리해집니다</h4>
              <p>
                키오스크를 통한 멤버십 운영, 포인트 충전 및 적립, 동전매출까지
                잡아내는 똑똑한 매출집계, 회원에 문자마케팅 및 적립률 이벤트까지
                세탁매장에 꼭 필요한 기능을 한번에!
              </p>
            </div>
          </v-col>
          <v-spacer/>
          <v-col cols="12" md="7" >
            <div class="icons">
              <dl>
                <dt><v-icon>mdi-card-account-details-outline</v-icon></dt>
                <dd>회원제운영, 포인트충전/사용/적립</dd>
              </dl>
              <dl>
                <dt><v-icon>mdi-email-open-outline</v-icon></dt>
                <dd>메인광고, 문자마케팅, 적립률이벤트</dd>
              </dl>
              <dl>
                <dt><v-icon>mdi-chart-bar</v-icon></dt>
                <dd>정확하고 편리한 매출집계 시스템</dd>
              </dl>
            </div>
          </v-col>
        </v-row>    
        
        <div class="vsual-image">
          <v-row>
            <v-col cols="12" md="6">
              <img src="/img/kiosk-intro01.jpg" />
            </v-col>
            <v-col cols="12" md="6">
              <img src="/img/kiosk-intro02.jpg" />
            </v-col>
          </v-row>
        </div>
      </div> <!--inner -->
    </div> <!-- section-2 -->
    <div class="section section-3">
      <div class="inner">
        <div class="section-title">
          <h4>페이오티 키오스크</h4>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="inner">
        <v-row justify="space-between">
          <v-col cols="12" md="4">
            <div class="contents-title">
              <dl>
                <dt>
                  <div class="member-icon">
                    <span class="premium">프리미엄</span>
                  </div>
                  키오스크 대기광고 기능
                </dt>
                <dd class="text1">
                  매장에서 매일 대기중인 키오스크 메인화면을
                  광고전광판으로 사용할 수 있습니다. 지역광고, 혹은 매장마케팅을
                  사용하여 또 다른 수익을 만들어 낼 수 있습니다.
                  
                </dd>
              </dl>
            </div>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" md="6" offset-md="6">
            <div class="contents-visual">
              <img src="/img/kiosk-img2.png" />
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="section section-4">
      <div class="inner">
        <v-row>
          <v-col cols="12" md="4">
            <div class="item">
              <div class="visual">
                <img src="/img/kiosk-img3.png" />
              </div>
              <dl>
                <dt>신용카드/현금/삼성페이<br />다양한 결제채널</dt>
                <dd class="text1">
                  현금만 결제되던 무인세탁매장을 카드에서부터 삼성페이까지
                  다양한 결제채널을 지원합니다
                </dd>
              </dl>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="item">
              <div class="visual">
                <img src="/img/kiosk-img4.png" />
              </div>

              <dl>
                <dt>매장별 멤버십 운영,<br />개인 비밀번호를 통한 안전관리</dt>
                <dd class="text1">
                  키오스크를 통해 자동 회원가입, 개인 비밀번호생성을 통해
                  안전하게 회원정보를 지킵니다
                </dd>
              </dl>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="item">
              <div class="visual">
                <img src="/img/kiosk-img5.png" />
              </div>

              <dl>
                <dt>미리 포인트 충전하고 장비사용</dt>
                <dd class="text1">
                  회원은 가입된 전화번호를 통해 포인트를 미리 충전해두고 사용할
                  수 있습니다. 미리 충전하는 회원에게는 포인트를 추가지급할 수
                  있습니다
                </dd>
              </dl>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="section section-5">
      <div class="inner">
        <v-row>
          <v-col cols="12" md="4">
            <div class="contents-title">
              <dl>
                <dt>
                  <div class="member-icon">
                    <span class="premium">프리미엄</span>
                  </div>
                  추가 포인트 적립이벤트
                </dt>
                <dd class="text1">
                  키오스크에서 결제한 금액 일부를 포인트로 돌려줄 수 있습니다
                  관리자기능을 통해 적릴률을 주간/시간별로 상세하게 설정할 수
                  있습니다
                </dd>
              </dl>
            </div>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" md="6">
            <div class="contents-visual">
              <img src="/img/kiosk-img6.png" />
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="section section-6">
      <div class="inner">
        <v-row>
          <v-col cols="12" md="4">
            <div class="contents-title">
              <dl>
                <dt>안내음성과 경고방송</dt>
                <dd class="text1">
                  키오스크의 각 페이지마다 음성을 통해 안내합니다. 그리고
                  관리자는 비이용자에게 경고방송을 직접 송출할 수 있습니다
                </dd>
              </dl>
            </div>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" md="6">
            <div class="contents-visual">
              <img src="/img/kiosk-img7.png" />
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="section section-7">
      <div class="inner">
        <v-row>
          <v-col cols="12" md="4">
            <div class="contents-title">
              <dl>
                <dt>고객 이용내역 조회</dt>
                <dd class="text1">
                  고객은 키오스크를 통해 이전에 장비를 사용한 내역 및 남은
                  포인트를 확인할 수 있습니다.
                </dd>
              </dl>
            </div>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" md="6">
            <div class="contents-visual">
              <img src="/img/kiosk-img8.png" />
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.kiosk {
  width: 100%;

  .inner {
    width: 100%;
    max-width: 1280px;
    padding: 0 10px;
    overflow: hidden;
  }

  .section-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 120px 0;

    .inner {
      max-width: 1440px;
    }

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
    padding: 50px 0;

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
      }
    }
  }

  .section-2 {
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
    padding-bottom: 120px;

    .section-title {
      margin-bottom: 30px;
    }
    .icons {
      justify-self: center;
      height: 100%;
      width: 100%;
      display: flex;
      dl {
        text-align: center;
        padding: 0 20px;

        dt {
          display: flex;
          justify-content: center;
          justify-content: center;
          background: #f8f8f8;
          min-height: 120px;
          border-radius: 10px;
          .v-icon {
            font-size: 70px;
            color: #0084de;
          }
        }
        dd {
          font-size: 1.2rem;
          margin-top: 30px;
        }
      }
    }

    .vsual-image {
      margin-top: 50px;
      img {
        width: 100%;
        border-radius: 10px;
      }
    }
  }

  .section-3{
    .inner{
      text-align: center;

      h4{
        font-size:1.5rem;
        letter-spacing: 3rem;
        color:#c3c3c3;
      }
    }
  }

  .section-4 {
    background:#0075c4 url('/img/kiosk-intro-bg.png') no-repeat 100% center;

    .col-12 {
      padding: 20px;
    }

    .item {
      border: 1px solid #e2e2e2;
      padding: 40px;
      height: 100%;
      border-radius:10px;
      // box-shadow: 5px 5px 20px rgba(0,0,0,0.08);
      background:#fff;

      .visual{
        flex:1;
        img{width:100%;}
      }

      dl{
        position:relative;
        dt{
          font-size:1.6rem;
        }
        dd{
          margin-top:15px;
          font-size:1.2rem;
          line-height:1.8rem;
          color:#999;
        }
      }
      dl:before{
        content:'';
        display:block;
        width:30px;
        height:4px;
        background:#0084de;
        margin: 30px 0;
      }
    }
  }

  .section-6{
    background:#f8f8f8;
  }
}
</style>
