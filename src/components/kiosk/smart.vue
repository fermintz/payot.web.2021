<template>
  <div class="smart-kiosk">
    <div class="section-1">
      <div class="inner">
        <div class="section-title">
          <h2>스마트한 매장 운영관리</h2>
          <p>
            매장을 관리하기 위한 스마트한 기능을 담고 있습니다.<br>클레임처리를 위한
            원격장비제어 기능과, 카카오톡 알림, 회원포인트 지급/차감 등<br>매장운영에 필요한 다양한 기능을 만나보세요
          </p>
        </div>
        <div class="section-visual">
          <img src="/img/kiosk-smart.png" />
        </div>
      </div>
    </div>
    <div class="section section-2">
      <div class="inner">
        <v-row justify="space-between">
          <v-col cols="12" md="4">
            <div class="contents-title">
              <dl>
                <dt>
                  클레임처리 간편하게<br />
                  장비원격투입
                </dt>
                <dd class="text1">
                  매장이 상주하주 않아도 간편하게 클레임처리 합니다
                  장비원격투입기능을 통해 스마트폰으로 간단하게 장비에 금액을 넣어 줄 수 있습니다.
                </dd>
              </dl>
            </div>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" md="6">
            <div class="contents-visual">
              <img src="/img/smart-01.png" />
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="section section-3">
      <div class="inner">
        <v-row justify="space-between">
          <v-col cols="12" style="margin-bottom:30px;">
            <div class="contents-title">
              <dl>
                <dt>
                  카카오톡 알림
                </dt>
                <dd class="text1">
                  카카오톡 알림 시스템을 사용할 수 있습니다
                </dd>
              </dl>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="contents-visual">
              <img src="/img/smart-02.png" />
            </div>
            <div class="contents-text">
              <strong>충전/결제 알림</strong>
              <span>키오스크 현금결제&카드결제 이용시 충전내역, 결제내역을 카톡알림으로 알려드립니다</span>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="contents-visual">
              <img src="/img/smart-03.png" />
            </div>
            <div class="member-icon">
              <span class="premium">프리미엄</span>
            </div>
            <div class="contents-text">
              <strong>장비 종료 알림 </strong>
              <span>세탁물 방치를 예방하기 위해 3~5분전 
종료알림 카톡을 발송합니다</span>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="contents-visual">
              <img src="/img/smart-04.png" />
            </div>
            <div class="contents-text">
              <strong>포인트 지급/차감 알림</strong>
              <span>관리자가 직접 사용자의 포인트를 변경하게되면 
변동내역을 카톡으로 알려드립니다</span>
            </div>
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
                  해커의 위협으로 부터 안전하게 실시간 백업
                </dt>
                <dd class="text1">
                  해커로부터 안전하게 고객님의 정보를 지키기위해 실시간으로 자료를 백업합니다
                </dd>
              </dl>
            </div>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" md="6" >
            <div class="contents-visual">
              <img src="/img/smart-05.png" />
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
                  회원 포인트 지급/차감 기능
                </dt>
                <dd class="text1">
                  관리자를 통해 개인회원에게 포인트 지급 및 차감을 기능을 사용할 수 있습니다
                </dd>
              </dl>
            </div>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" md="6">
            <div class="contents-visual">
              <img src="/img/smart-06.png" />
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
                  적립률 및 적립이벤트 설정기능
                </dt>
                <dd class="text1">
                  매출이 적은 오전, 요일별, 시간대별 다양한 환경에 맞게 적립률을 설정할 수 있습니다
                </dd>
              </dl>
            </div>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" md="6">
            <div class="contents-visual">
              <img src="/img/smart-07.png" />
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="section section-7">
      <div class="inner">
        <v-row justify="space-between">
          <v-col cols="12" md="4">
            <div class="contents-title">
              <dl>
                <dt>
                  회원 문자 발송 기능
                </dt>
                <dd class="text1">
                  키오스크로 가입된 회원에게 이벤트 내용 및 기타 공지사항을 문자로 전송할 수 있습니다
                </dd>
              </dl>
            </div>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" md="6">
            <div class="contents-visual">
              <img src="/img/smart-08.png" />
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="section section-8">
      <div class="inner">
        <v-row justify="space-between">
          <v-col cols="12" md="4">
            <div class="contents-title">
              <dl>
                <dt>
                  고객이용내역 상세조회
                </dt>
                <dd class="text1">
                  가입된 회원의 이용내역을 확인할 수 있습니다.
                  (클레임처리에 사용됩니다)
                </dd>
              </dl>
            </div>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" md="6">
            <div class="contents-visual">
              <img src="/img/smart-09.png" />
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
.smart-kiosk {
  width: 100%;

  .inner {
    width:100%;
    max-width: 1280px;
    padding: 0 10px;
    overflow:hidden;
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
    padding: 50px 0;

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
        }
      }
    }
  }

  .section:nth-child(2n) {
    background: #f8f8f8;
  }

  .section-3{

    .row{padding:0;margin:0;}
    .col-md-4{
      padding:0 30px;
      margin-bottom:50px;
    }

    .inner{
      .contents-title{
        dl{
          dt{margin-bottom:10px;}
        }
      }
    }
    .member-icon{margin-top:20px;}
    .contents-text{
      margin-top:20px;

      strong{
        display:block;
        font-size:1.3rem;
        font-weight:500;
      }
      span{
        display:block;
        margin-top:10px;
        line-height:1.7rem;
        color:#888;
      }
    }
  }

  .section-4{
    .row{
      flex-direction: row-reverse;
    }
  }

  .section-6{
    .row{
      flex-direction: row-reverse;
    }
  }

  .section-8{
    .row{
      flex-direction: row-reverse;
    }
  }
}
</style>
