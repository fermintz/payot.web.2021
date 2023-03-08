<template>
  <div class="smartpay">
    <div class="top">
      <h4>
        <strong>내 손안의 키오스크, 스마트페이</strong>
        <span></span>
      </h4>

      <div class="inner">
        <svg version="1.1" id="smartpay" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
	 y="0px" viewBox="0 0 1200 200" style="enable-background:new 0 0 1200 200;" xml:space="preserve">

          <g>
            <path class="st0" d="M240.97,76.88h-26.32c-1.54-9.94-8.96-15.96-21.14-15.96c-11.9,0-18.48,4.76-18.48,11.62
              c0,8.54,8.82,11.48,31.08,16.1c26.32,5.46,35.28,18.48,35.28,35.56c0,21.84-20.58,35.14-46.06,35.14
              c-28.14,0-48.72-15.26-49.84-39.62h26.18c1.4,10.92,10.92,18.2,25.48,18.2c10.36,0,18.06-5.18,18.06-12.6c0-9.1-7.7-12.74-28-16.52
              c-24.78-4.62-38.22-14.84-38.22-36.26c0-20.58,20.44-32.9,46.2-32.9C220.67,39.64,239.71,55.17,240.97,76.88z"/>
            <path class="st0" d="M256.37,42.44h20.3l39.34,63.84l39.34-63.84h20.3v114.1h-25.48V93.95l-26.46,43.82h-15.4l-26.46-43.82v62.58
              h-25.48V42.44z"/>
            <path class="st0" d="M465.67,134.41h-44.24l-7.98,22.12h-26.32l44.24-114.1h26.46l44.24,114.1h-28.42L465.67,134.41z
              M457.83,112.29l-14.28-39.76l-14.28,39.76H457.83z"/>
            <path class="st0" d="M581.45,156.54l-22.12-35.98h-20.3v35.98h-25.48V42.44h45.92c28.98,0,45.92,15.4,45.92,39.06
              c0,15.68-7.42,27.72-20.86,34.02l26.46,41.02H581.45z M539.03,98.01h19.32c13.44,0,21.56-5.74,21.56-16.52
              c0-10.78-8.12-16.52-21.56-16.52h-19.32V98.01z"/>
            <path class="st0" d="M713.61,64.98h-37.1v91.56h-25.48V64.98h-37.1V42.44h99.68V64.98z"/>
            <path class="st0" d="M766.53,42.44h43.82c29.68,0,47.04,16.52,47.04,41.72c0,25.48-17.36,42-47.04,42h-18.34v30.38h-25.48V42.44z
              M809.23,103.62c14.14,0,22.68-6.72,22.68-19.46c0-12.6-8.54-19.18-22.68-19.18h-17.22v38.64H809.23z"/>
            <path class="st0" d="M929.21,134.41h-44.24l-7.98,22.12h-26.32l44.24-114.1h26.46l44.24,114.1h-28.42L929.21,134.41z
              M921.37,112.29l-14.28-39.76l-14.28,39.76H921.37z"/>
            <path class="st0" d="M1014.75,120.7v35.84h-25.48V120.7l-42.7-78.26h29.12l27.44,53.9l27.3-53.9h27.02L1014.75,120.7z"/>
          </g>
        </svg>
      </div>
      
      <p>스마트페이는 QR코드를 활용한 세탁장비 결제시스템입니다</p>
      <div class="bg">
        <video autoplay loop id="video-bg" muted>
          <source src="/video/smartpay.mp4" type="video/mp4" poster="/img/smartpay/smart03.jpg">
        </video>
      </div>
      <div class="scrolldown" @click="scrollMoveEvent">
        <v-icon>mdi-mouse-move-down</v-icon>
        <label>scroll down</label>
      </div>
      
    </div>

    <section class="section_1">
      <div class="visual">
        <img src="/img/smartpay/movie02.gif" />
        <div class="black"></div>
        <div class="text">
          QR코드로 간편하게<br />
          세탁장비 결제
        </div>
      </div>
      <div class="inner">
        <div class="title">
          <h2>어플없는 간편결제 스마트페이</h2>
          <p>
            QR코드를 스캔만 하면 휴대폰이 작은 키오스크가 되어 쉽고 간편하게
            결제할 수 있습니다<br />
            포인트적립, 매출집계, 문자마케팅, 원격제어를 통한 장비 동전 투입 등
            다양한 기능을 통해 매장을 더욱 쉽고 편리하게 운영할 수 있습니다
          </p>
        </div>

        <v-row>
          <v-col cols="12" md="6">
            <img src="/img/smartpay/smart02.jpg" />
            <p>동전 사용만 가능하던 세탁 장비에<br>다양한 결제 채널 추가</p>
          </v-col>
          <v-col cols="12" md="6">
            <img src="/img/smartpay/smart03.jpg" />
            <p>지갑이 없어도 휴대폰만으로<br />결제가 가능합니다</p>
          </v-col>
        </v-row>
      </div>
    </section>

    <section class="section_2">
      <div class="inner">
        <dl>
          <dt>스마트페이에서<b>지원되는 간편결제</b></dt>
          <dd>
            <span>
              <img src="/img/pay01.png" />
              <label>삼성페이</label>
            </span>
            <span>
              <img src="/img/pay02.png" />
              <label>카카오페이</label>
            </span>
            <span>
              <img src="/img/pay03.png" />
              <label>네이버페이</label>
            </span>
            <span>
              <img src="/img/pay04.png" />
              <label>페이코</label>
            </span>


          </dd>
        </dl>
      </div>
    </section>

    <section class="section_3">
      <div class="inner">
        <div class="title">
          <h2>전용어플설치 없이 기본 카메라앱으로 실행되는 결제시스템</h2>
          <p>
            스마트페이는 별도의 어플설치가 필요없어 접근성이 높아 모든 연령층이
            사용하기 편리합니다
          </p>
        </div>

        <v-row>
          <v-col cols="6" md="3">
            <dl>
              <dt>
                <img src="/img/smartpay/step01.jpg" />
              </dt>
              <dd>
                QR코드촬영
              </dd>
            </dl>
          </v-col>
          <v-col cols="6" md="3">
            <dl>
              <dt>
                <img src="/img/smartpay/step02.jpg" />
              </dt>
              <dd>
                로그인 or 회원가입
              </dd>
            </dl>
          </v-col>
          <v-col cols="6" md="3">
            <dl>
              <dt>
                <img src="/img/smartpay/step04.jpg" />
              </dt>
              <dd>
                장비&상품선택
              </dd>
            </dl>
          </v-col>
          <v-col cols="6" md="3">
            <dl>
              <dt>
                <img src="/img/smartpay/step05.jpg" />
              </dt>
              <dd>
                결제하기
              </dd>
            </dl>
          </v-col>
        </v-row>
      </div>
    </section>

    <section class="section_4">
      <div class="inner">
        <div class="title">
          <h2>
            매장 운영을 더욱 간편하게 <b>간편결제 + 매장운영 관리시스템</b>
          </h2>
        </div>
        <v-row>
          <v-col cols="6" md="3">
            <dl>
              <dt>
                <v-icon>mdi-account-group</v-icon>
              </dt>
              <dd>
                <strong>고객관리</strong>
                <span>포인트 적립을 통한<br />매장 회원모집</span>
              </dd>
            </dl>
          </v-col>
          <v-col cols="6" md="3">
            <dl>
              <dt>
                <v-icon>mdi-wifi</v-icon>
              </dt>
              <dd>
                <strong>원격 장비관리</strong>
                <span>매장밖에서도<br />실시간 장비관리</span>
              </dd>
            </dl>
          </v-col>
          <v-col cols="6" md="3">
            <dl>
              <dt>
                <v-icon>mdi-qrcode-scan</v-icon>
              </dt>
              <dd>
                <strong>QR코드 간편결제</strong>
                <span>삼성페이, 카카오페이<br />신용카드 결제 지원</span>
              </dd>
            </dl>
          </v-col>
          <v-col cols="6" md="3">
            <dl>
              <dt>
                <v-icon>mdi-chart-bar</v-icon>
              </dt>
              <dd>
                <strong>매장분석</strong>
                <span>시간별/일별/월별 매출집계<br />타매장 매출비교</span>
              </dd>
            </dl>
          </v-col>
        </v-row>
      </div>
    </section>

    <section class="section_5">
      <div class="inner">
        <div class="title">
          <h2>매장운영에 필요한 <b>모든 것을 담았습니다</b></h2>
          <p>
            언제 어디서든 내 매장을 관리하고 홍보할 수 있는 훌륭한 방법들을
            제공합니다
          </p>
        </div>

        <v-row class="info_1">
          <v-col cols="12" md="6">
            <div class="text">
              <h3>클레임처리를 간편하게, 장비 원격제어 시스템</h3>
              <p>
                매장에 상주하지 않아도 간편하게 클레임처리가 가능합니다 장비원격
                투입기능을 통해 스마트폰으로 간단하게 장비에 코인(동전)을 넣어
                줄 수 있습니다
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="image">
              <img src="/img/hooper-02.png" />
            </div>
          </v-col>
        </v-row>
        <v-row class="info_2">
          <v-col cols="12" md="6">
            <div class="image">
              <img src="/img/hooper-05.png" />
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="text">
              <h3>상황별 카카오톡 알림기능</h3>
              <p>
                충전/결제 및 장비사용종료, 포인트 지급/차감등 다양한 상황에 맞춰
                카카오톡 알림을 발송합니다
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row class="info_3">
          <v-col cols="12" md="6">
            <div class="text">
              <h3>회원 문자 발송 기능</h3>
              <p>
                키오스크로 가입된 회원에게 이벤트 내용 및 기타 공지사항을 문자로
                전송할 수 있습니다
              </p>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="image">
              <img src="/img/hooper-06.png" />
            </div>
          </v-col>
        </v-row>
        <v-row class="info_4">
          <v-col cols="12" md="6">
            <div class="image">
              <img src="/img/smart-06.png" />
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="text">
              <h3>회원 포인트 지급/차감 기능</h3>
              <p>
                관리자를 통해 개인회원에게 포인트 지급 및 차감을 기능을 사용할
                수 있습니다
              </p>
            </div>
          </v-col>
        </v-row>
      </div>
    </section>

    <section class="section_6">
      <div class="title">
        <h2>매출 관리와 운영에 효과적인 데이터 분석</h2>
      </div>

      <div class="inner">
        <div class="control">
          <v-btn
            text
            rounded
            @click="model = index"
            :class="{ active: model === index }"
            v-for="(item, index) in delimiter"
            :key="index"
          >
            {{ item }}
          </v-btn>
        </div>

        <div class="descriptions">
          <p v-show="model === 0">
            전국 가맹점들과의 평균매출을 비교하여 우리가게의<br />매출이 전체
            어느정도인지를 비교분석하여 알려드립니다
          </p>
          <p v-show="model === 1">
            이번달 매출이 달력안에 표기되어 간편하게<br />일 매출을 확인할 수
            있습니다
          </p>
          <p v-show="model === 2">
            데이터를 시각화를 통해 한눈에 데이터를 파악하여<br />매장의 매출을
            빠르게 분석할 수 있습니다
          </p>
        </div>

        <v-carousel
          v-model="model"
          hide-delimiters
          height="auto"
          :show-arrows="false"
        >
          <v-carousel-item>
            <div class="image">
              <img src="/img/sales-09.png" />
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="image">
              <img src="/img/calendar.png" />
            </div>
          </v-carousel-item>
          <v-carousel-item>
            <div class="image">
              <img src="/img/sales-02.png" />
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
    </section>

    <section class="section_8">
      <div class="bg"></div>
      <div class="inner">
        <div class="title">
          <h2>
            <span>키오스크 함께 이용시 <b>무료혜택</b></span>
          </h2>
        </div>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="12" md="4">
            <div class="benefit">
              <strong>1</strong>
              <span
                >페이오티 키오스크를 구매하실 예정이시라면 <b>스마트페이를 무료</b>로 함께 설치할 수 있습니다</span
              >
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <div class="benefit">
              <strong>
                2
              </strong>
              <span
                >기존 페이오티 키오스크를 이용중이시라면 <b>스마트페이</b>
                 이용이 가능합니다 (요청필수)</span
              >
            </div>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <p>* 기존 사용하고있는 키오스크의 회원정보(포인트) 및 관리자는 스마트페이와 함께 사용할 수 있습니다</p>
      </div>
    </section>

    <section class="section_7">
      <div class="inner">
        <div class="title">
          <h1>SMART <b>PAY</b></h1>
          <h3><span>스마트페이 가격안내</span></h3>
        </div>
        <div class="visual">
          <div class="image">
            <img src="/img/smartpay/smartpay_price.png" alt="스마트페이" />
            <span>
            </span>
          </div>
        </div>

        <div class="price_info">
          <div class="row">
            <dl>
              <dt>설치비용</dt>
              <dd>132만원</dd>
            </dl>
            <div class="divider"></div>
            <dl>
              <dt>월 사용료</dt>
              <dd>33,000원</dd>
            </dl>
          </div>
          <p>
            <span>부가세가 포함된 가격입니다</span>
            <span
              >설치비용은 10대기준이며 초과 시
              <b>1대당 13만2천원</b> 추가부과됩니다</span
            >
          </p>
          
        </div>

        <div class="btns">
          <v-btn text
            @click="smartpay"
          >
            스마트페이 신청하기
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: 0,
      delimiter: ["타매장 매출비교", "매출캘린더", "월/일/시 매출통계"],
    };
  },
  mounted() {
    this.scrollDownEvent()

  },
  methods: {
  
    scrollDownEvent(){
      const ht = window.innerHeight;
  
      window.addEventListener('scroll',()=>{
        if(window.scrollY < ht){
            window.scrollTo({
            top:window.innerHeight,
            behavior:'smooth',
          })
        }
      },{once:true})
    },

    scrollMoveEvent(){
      window.scrollTo({
      top:window.innerHeight,
      behavior:'smooth',
    })
    },
    smartpay(){
      window.open('https://pf.kakao.com/_uAqmK/chat','_new')
    },

    kakaoLink() {
      const kakaoUrl = "https://pf.kakao.com/_uAqmK";
      window.open(kakaoUrl, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped src="./smartpay.scss" />
