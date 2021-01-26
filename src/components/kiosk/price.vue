<template>
  <div class="price">
    <div class="section section-1">
      <div class="inner">
        <v-row>
          <v-col cols="12" md="6">
            <div class="product">
              <img src="/img/price01.png" />
            </div>
          </v-col>
          <v-spacer />
          <v-col cols="12" md="5">
            <div class="title">
              <p>프리미엄 무인세탁서비스를 위한 파트너</p>
              <h4>페이오티 키오스크</h4>
            </div>
            <div class="divider first"/>
            <dl class="kiosk-price">
              <dt>가격</dt>
              <dd>
                4,500,000 원
              </dd>
            </dl>
            <dl class="admin-price">
              <dt>관리비</dt>
              <dd>
                <span>일반 15,000원</span>
                <span>프리미엄 30,000원</span>
              </dd>
            </dl>
            <dl class="delivery">
              <dt>배송/설치비</dt>
              <dd>무료배송/무상설치</dd>
            </dl>
            <div class="tip">※부가세는 별도입니다</div>
            <div class="divider"/>
            <div class="customer">
              <div class="button phone" v-ripple>
                <label><v-icon>mdi-phone</v-icon>전화문의</label>
                <span>070-7807-6857</span>
              </div>
              <div class="button kakao" v-ripple @click="kakaoLink">
                <label><v-icon>mdi-comment-processing</v-icon>카카오톡 문의</label>
                <span>
                  <v-icon>mdi-chevron-right-circle</v-icon>
                </span>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="section section-2">
      <div class="inner">
        <div class="section-title">
          <h4>관리비 안내</h4>
          <p>프리미엄 멤버십에서 더욱 다양한 기능을 만나보세요!</p>
        </div>
        <v-row>
          <v-col cols="12" md="6">
            <div class="admin-cost standard">
              <div class="title">
                <h4>STANDARD</h4>
                <span>일반 회원</span>
              </div>
              <dl class="option">
                <dt>일반기능</dt>
                <dd>
                  <span>키오스크 버젼 4.1.1</span>
                  <span>매출집계기능</span>
                  <span>키오스크 현금/카드 매출집계</span>
                  <span>포인트 지급/차감 기능</span>
                  <span>멤버십 기능</span>
                  <span>장비별 매출정보</span>
                  <span>포인트 지급/차감 카톡 알림 기능</span>
                  <span>충전/결제 카톡 알림 기능</span>
                </dd>
              </dl>
              <div class="option-price">
                <strong>￦ 15,000</strong>
                <span>부가세별도</span>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="admin-cost primeum">
              <div class="title">
                <h4>PREMIUM</h4>
                <span>프리미엄 회원</span>
              </div>
              
              <dl class="option">
                <dt>일반 외<br>추가기능</dt>
                <dd>
                  <span>키오스크 버젼 5.0.0</span>
                  <span>키오스크 메인 대기광고 기능</span>
                  <span>세탁완료 카톡 알림기능</span>
                  <span>요일/시간별 적립률 설정기능</span>
                  <span>키오스크 종합 매출정보</span>
                  <span>월/일/시간/주간별 매출 통계 및 그래프</span>
                  <span>타 빨래방 평균 매출 조회 & 수익계산</span>
                </dd>
              </dl>
            
              <div class="option-price">
                <strong>￦ 30,000</strong>
                <span>부가세별도</span>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div> <!-- section-2 -->

    <div class="section section-3">
      <div class="inner">
        <v-row>
          <v-col cols="12" md="5">
            <div class="section-title">
              <h4>제품스펙</h4>
            </div>
            <div class="spec">
              <dl>
                <dt>모니터</dt>
                <dd>32인치 정전식 터치모니터</dd>
              </dl>
              <dl>
                <dt>운영체제</dt>
                <dd>Windows 10 pro (64bit)</dd>
              </dl>
              <dl>
                <dt>메인보드</dt>
                <dd>Gigbyte</dd>
              </dl>
              <dl>
                <dt>CPU</dt>
                <dd>인텔 셀러론 브라스웰 j3160(1.6Hz)</dd>
              </dl>
              <dl>
                <dt>메모리</dt>
                <dd>DDR3L 8GB</dd>
              </dl>
              <dl>
                <dt>저장장치</dt>
                <dd>SSD 120GB</dd>
              </dl>
              <dl>
                <dt>무선</dt>
                <dd>802.11ac (WI-FI5)</dd>
              </dl>
              <dl>
                <dt>기타</dt>
                <dd>블루투스 지원</dd>
              </dl>
            </div>
          </v-col>
          <v-spacer/>
          <v-col cols="12" md="4">
            <div class="size">
              <img src="/img/size.png">
            </div>
          </v-col>
        </v-row>
      </div>
    </div> <!-- section-3 -->
    <div class="section section-4">
      <div class="inner">
        <div class="section-title">
          <h4>키오스크 설치방법 안내</h4>
        </div>
        <v-row>
          <v-col cols="12" md="6">
            <dl>
              <dt>벽면 매립식 설치형</dt>
              <dd>
                <span>가로 480 x 세로 1030 벽면 목공작업</span>
                <span>(앞문, 뒷문 개폐형)</span>
              </dd>
            </dl>
          </v-col>
          <v-col cols="12" md="6">
            <div class="image image-1">
              <img src="/img/install01.png">
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <dl>
              <dt>스탠드 설치형</dt>
              <dd>
                <span>스태드 설치 시 받침대 필요</span>
                <span>MDF 혹은 목공재질</span>
                <span>220V 1개 /  LAN케이블 1개 필요</span>
                <span>스탠드 제작필요 (W480 x D139 x H850)</span>
              </dd>
            </dl>
          </v-col>
          <v-col cols="12" md="6">
            <div class="image image-2">
              <img src="/img/install02.png">
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
      carousel: 0,
      carouselData: [
        { url: "img/sub-visual01.jpg" },
        { url: "img/sub-visual02.jpg" },
        { url: "img/sub-visual03.jpg" },
      ],
    };
  },
  methods:{
    kakaoLink(){
      window.open('http://pf.kakao.com/_uAqmK' , '_new')
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  justify-content: center;
  align-content: center;

  .inner {
    width: 100%;
    max-width: 1280px;
  }
}

.section-1 {
  padding:100px 0;

  .product{
    border:1px solid #e2e2e2;
    overflow:hidden;
      img {
      width: 100%;
      display:block;
    }
  }

  .title {
    margin-top:20px;
    p {
      margin-bottom:5px;
      color: #888;
    }
    h4 {
      font-size: 2.5rem;
    }
  }

  .divider{
    height:1px;
    background:#e2e2e2;
    margin:30px 0;
  }

  .divider.first{
    background:#0588E1
  }

  dl{
    display:flex;
    justify-content: space-between;
    text-align:right;
    margin-bottom:30px;

    dd{
      font-size:1.3rem;
    }
  }
  dl.kiosk-price{
    dd{
      font-weight:500;
      font-size:2rem;
      color:#EF1682;
    }
  }

  dl.admin-price{
    dd{
      span{
        display:block;
        margin-bottom:5px;
      }
    }
  }

  .tip{
    display:flex;
    align-items: center;
    justify-content: center;
    text-align:center;
    background:#f2f2f2;
    height:30px;
    border-radius:15px;
    margin-top:10px;
  }
  .customer{
    display:flex;
    
    .button{
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      height:100%;
      padding:15px;
      height:100px;
      flex:1;
      border:1px solid #e2e2e2;
      border-radius:10px;

      label{
        .v-icon{margin-right:10px;}
      }
      span{
        text-align:right;
        font-size:1.5rem;
        margin-top:15px;

        .v-icon{
          font-size:30px;
        }
      }
    }

    .kakao{
      margin-left:10px;
      background:#FFCC00;
      border:0px;
    }

  }
}

.section-2{
  background: #f8f8f8;
  padding:70px 0;

  .section-title{
    text-align:center;  
    margin-bottom:40px;
  }
  .row{
    overflow:hidden;
  }

  .col-12{
    padding:0px;
  }

  .title{
    margin-bottom:30px;
    h4{
      font-size:3rem;
      font-weight:500;
    }
    span{color:#888;}
  }

  .admin-cost{
    display:flex;
    flex-direction: column;
    text-align:center;
    padding:50px;
    height:100%;

      .option{
      padding:30px;
      background:#fff;
      text-align:left;
      display:flex;
      border-radius:15px;
      height:100%;
      min-height:300px;

      dt{
        font-size: 1.2rem;
        margin-right:30px;
      }
      dd{
        border-left:1px solid #e2e2e2;
        padding-left:30px;
        span{
          display:block;
          margin-bottom:10px;
        }
        span:before{
          content:'';
          width:4px;
          height:4px;
          display:inline-block;
          margin-right:15px;
          background:#c2c2c2;
        }
      }
    }

    .option-price{
      margin-top:30px;
      strong{
        font-weight:500;
        font-size:2.4rem;
        font-family:'Roboto';
        display:block;
      }
      span{
        margin-top:5px;
        color:#888;
        display:block;
      }
    }
   
  }

  .standard{
    background:#fff;
    .option{
      background:#f2f2f2;
    }
  }

  .primeum{
    background:#0588E1;
    .title{
      h4{color:#fff}
      span{color:#fff}
    }

    .option-price{
      strong{color:#fff;}
      span{color:#fff;}
    }
  }
}

.section-3{
  padding-top:100px;

  .size{
    img{width:100%;}
  }

  h4{
    font-size:2rem;
    margin-bottom:20px;
  }


  .spec{
    dl{
      border:1px solid #e2e2e2;
      background:#fff;
      margin-bottom:10px;
      padding:0 15px;
      height:40px;
      display:flex;
      align-items: center;
      justify-content: space-between;

      dt{
        color:#888;
      }
    }
  }
}


.section-4{
  padding:100px 0;

  .section-title{
    margin-bottom:40px;
  }
  .image{
    img{
      width:100%;
      display:block;
    }
  }

  .row{
    align-items: center;
    border:1px solid #e2e2e2;
    padding:30px;
    margin-bottom:20px;
    background:#fff;
  }

  dl{
    dt{
      font-size:1.5rem;
      font-weight:500;
    }

    dd{
      margin-top:30px;
      span{
        display:block;
        margin-bottom:10px;
      }
      span:before{
        content:'';
        display:inline-block;
        width:4px;
        height:4px;
        margin-right:15px;
        background:#e2e2e2;
      }
    }
  }
}

@media screen and(max-width:1280px) {
  .section{
    .inner{
      padding:0 15px;
    }
  }

  .section-2{
    .admin-cost{
      padding:20px;

      .option{
        flex-direction: column;
        dt{margin-bottom:20px;}
        dd{border-left:0px;padding:0px;}
      }
    }
    
  }
}

</style>
