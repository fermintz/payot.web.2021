<template>
  <div class="kiosk-detail contents">
    <div class="top">
      <div class="inner">
        <div class="top-title">
          <strong>무인세탁매장의 파트너 <b>페이오티 키오스크</b></strong>
          <span>무인세탁매장의 운영에 꼭 필요한 다양한 기능 제공하여, 점주님들이 편안하게 매장을 운영할  있도록 도와드립니다.</span>
        </div>

        <v-row>
          <v-col cols="12" md="5">
            <div class="thum">
              <v-carousel
                hide-delimiters
                :show-arrows="false"
                cycle
                interval="3000"
              >
                <v-carousel-item>
                  <div class="thum-item">
                    <img src="/img/kiosk-detail/thum01.png">
                  </div>
                </v-carousel-item>
                <v-carousel-item>
                  <div class="thum-item">
                    <img src="/img/kiosk-detail/thum02.png">
                  </div>
                </v-carousel-item>
                <v-carousel-item>
                  <div class="thum-item">
                    <img src="/img/kiosk-detail/thum03.png">
                  </div>
                </v-carousel-item>
              </v-carousel>
            </div>
          </v-col>
          <v-spacer/>
          <v-col cols="12" md="5">
            <div class="goods-info">
              <dl>
                <dt>판매제품</dt>
                <dd>일반형 키오스크 / 스탠드형 키오스크</dd>
              </dl>
              <div class="divider" />
              <dl class="price">
                <dt>판매가격</dt>
                <dd>
                  <div class="item normal">
                    <span>일반형 32인치</span>
                    <strong>4,500,000</strong>
                  </div>
                  <div class="item stand">
                    <span>스탠드형 24인치</span>
                    <strong>4,800,000</strong>
                  </div>
                  <p>부가세는 별도입니다.</p>
                </dd>
              </dl>
              <div class="divider" />
              <dl>
                <dt>배송/설치비</dt>
                <dd>무료</dd>
              </dl>
              <div class="divider" />
              <dl class="members">
                <dt>월 사용료</dt>
                <dd>
                  <!-- <div class="item">
                    <span>베이직</span>
                    <strong>16,500</strong>
                  </div> -->
                  <div class="item">
                    <!-- <span>프리미엄</span> -->
                    <strong>33,000</strong>
                  </div>
                  <p>부가세가 포함된 가격입니다.</p>
                </dd>
              </dl>
            </div>
          </v-col>
        </v-row>
      </div> <!-- top -->
    </div>

    <div class="section">
      <div class="inner">
        <div class="kakao banner" v-ripple @click="kakaoLink">
          <img src="/img/kakao.png" /> 
          <div class="text">
            <span>페이오티 키오스크는 상담 후 구매 하실 수 있습니다</span>
            <strong>카카오톡으로 문의하기</strong>
          </div>
        </div>

        <div class="map banner" v-ripple @click="$router.push('kiosk-map')">
          <v-icon>mdi-map-marker</v-icon>
          <div class="text">
            <span>지도에서 설치된 매장을 확인해보세요!</span>
            <strong>가까운 매장 확인하기</strong>
          </div>
        </div>
      </div>
    </div>

    <div class="section visual">
      <div class="inner">
        <div class="text">
          <strong>이제는 무인세탁매장 키오스크 선택이 아닌 필수입니다</strong>
          <span>코인세탁소에서 고객이 불편을 해소하고자 키오스크 도입이 확대되고 있습니다. 휴대가 불편한 동전을 사용하는 방식이 아닌 카드 결제가 가능한 무인기기를 설치하여 편리함을 더해줍니다</span>
        </div>
        
        <div class="image">
          <img src="/img/kiosk-detail/kiosk-grid.jpg">
        </div>
        
      </div>
    </div>

    <div class="section members-detail" v-show="false">
      <div class="inner">
        <div class="sec-title">월 사용료 안내</div>

        <ul class="list">
          <li class="list-hd">
            <span class="name"></span>
            <span class="title">
              <label>베이직</label>
              <strong>16,500</strong>
            </span>
            <span class="title">
              <label>프리미엄</label>
              <strong>33,000</strong>
            </span>
          </li>
          <li>
            <span class="name">키오스크 현금/카드 매출집계</span>
            <span class="ok">
              <v-icon>mdi-check</v-icon>
            </span>
            <span class="ok">
              <v-icon>mdi-check</v-icon>
            </span>
          </li>
          <li>
            <span class="name">포인트 지급/차감</span>
            <span class="ok">
              <v-icon>mdi-check</v-icon>
            </span>
            <span class="ok">
              <v-icon>mdi-check</v-icon>
            </span>
          </li>
          <li>
            <span class="name">장비별 매출정보</span>
            <span class="ok">
              <v-icon>mdi-check</v-icon>
            </span>
            <span class="ok">
              <v-icon>mdi-check</v-icon>
            </span>
          </li>
          
          <li>
            <span class="name">회원관리</span>
            <span class="ok">
              <v-icon>mdi-check</v-icon>
            </span>
            <span class="ok">
              <v-icon>mdi-check</v-icon>
            </span>
          </li>
          <li>
            <span class="name">포인트 지급/차감 카톡알림</span>
            <span class="ok">
              <v-icon>mdi-check</v-icon>
            </span>
            <span class="ok">
              <v-icon>mdi-check</v-icon>
            </span>
          </li>
          <li>
            <span class="name">충전/결제 카톡알림</span>
            <span class="ok">
              <v-icon>mdi-check</v-icon>
            </span>
            <span class="ok">
              <v-icon>mdi-check</v-icon>
            </span>
          </li>
          <li>
            <span class="name">세탁완료시 카톡알림</span>
            <span class="cancle">
              <v-icon>mdi-close</v-icon>
            </span>
            <span class="ok">
              <v-icon>mdi-check</v-icon>
            </span>
          </li>
          <li>
            <span class="name">요일/시간별 적립률 설정기능</span>
            <span class="cancle">
              <v-icon>mdi-close</v-icon>
            </span>
            <span class="ok">
              <v-icon>mdi-check</v-icon>
            </span>
          </li>
          <li>
            <span class="name">키오스크 메인 대기광고 기능</span>
            <span class="cancle">
              <v-icon>mdi-close</v-icon>
            </span>
            <span class="ok">
              <v-icon>mdi-check</v-icon>
            </span>
          </li>
          <li>
            <span class="name">타 빨래방 평균 매출조회</span>
            <span class="cancle">
              <v-icon>mdi-close</v-icon>
            </span>
            <span class="ok">
              <v-icon>mdi-check</v-icon>
            </span>
          </li>
          <li>
            <span class="name">매출통계 및 그래프</span>
            <span class="cancle">
              <v-icon>mdi-close</v-icon>
            </span>
            <span class="ok">
              <v-icon>mdi-check</v-icon>
            </span>
          </li>
          <li>
            <span class="name">키오스크 경고음 송출</span>
            <span class="cancle">
              <v-icon>mdi-close</v-icon>
            </span>
            <span class="ok">
              <v-icon>mdi-check</v-icon>
            </span>
          </li>
          <li>
            <span class="name">헛걸음 방지시스템</span>
            <span class="cancle">
              <v-icon>mdi-close</v-icon>
            </span>
            <span class="ok">
              <v-icon>mdi-check</v-icon>
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="section product-size">
      <div class="inner">
        <div class="sec-title">제품제원</div>
        <v-row>
          <v-col cols="12" md="6">
            <dl>
              <dt><img src="/img/kiosk-detail/normal-size.jpg"></dt>
              
              <dd>일반형(매립형)</dd>
            </dl>
          </v-col>
          <v-col cols="12" md="6">
            <dl>
              <dt><img src="/img/kiosk-detail/stand-size.jpg"></dt>
              <dd>스탠드형</dd>
            </dl>
          </v-col>
        </v-row>
      </div>
    </div>
    
    <div class="section product-spec">
      <div class="inner">
        <div class="sec-title">
          제품사양
        </div>

        <v-row>
          <v-col cols="12" md="6">
            <table cellspacing="0" cellpadding="0">
              <tr>
                <th>제품명</th>
                <td>키오스크 일반형</td>
              </tr>
              <tr>
                <th>모니터</th>
                <td>32인치 정전식 모니터</td>
              </tr>
              <tr>
                <th>사이즈</th>
                <td>넓이 480mm x 높이 1030mm</td>
              </tr>
              <tr>
                <th>운영체제</th>
                <td>Windows 10 Pro (64bit)</td>
              </tr>
              <tr>
                <th>메인보드</th>
                <td>GIGBYTE</td>
              </tr>
              <tr>
                <th>CPU</th>
                <td>인텔/셀러론-J3160/4500C/N5105</td>
              </tr>
              <tr>
                <th>메모리</th>
                <td>DDR3L 8GB</td>
              </tr>
              <tr>
                <th>저장장치</th>
                <td>SSD 120GB</td>
              </tr>
              <tr>
                <th>무선</th>
                <td>802.11ac (WI-FI5)</td>
              </tr>
              <tr>
                <th>기타</th>
                <td>Bluetooth</td>
              </tr>        
            </table>
          </v-col>

          <v-col cols="12" md="6">
            <table cellspacing="0" cellpadding="0">
              <tr>
                <th>제품명</th>
                <td>키오스크 스탠드형</td>
              </tr>
              <tr>
                <th>모니터</th>
                <td>24인치 정전식 모니터</td>
              </tr>
              <tr>
                <th>사이즈</th>
                <td>넓이 445mm x 높이 1615mm x 두께 125mm (하단두께 330mm)</td>
              </tr>
              <tr>
                <th>운영체제</th>
                <td>Windows 10 Pro (64bit)</td>
              </tr>
              <tr>
                <th>메인보드</th>
                <td>GIGBYTE</td>
              </tr>
              <tr>
                <th>CPU</th>
                <td>인텔/셀러론-J3160/4500C/N5105</td>
              </tr>
              <tr>
                <th>메모리</th>
                <td>DDR3L 8GB</td>
              </tr>
              <tr>
                <th>저장장치</th>
                <td>SSD 120GB</td>
              </tr>
              <tr>
                <th>무선</th>
                <td>802.11ac (WI-FI5)</td>
              </tr>
              <tr>
                <th>기타</th>
                <td>Bluetooth</td>
              </tr>        
            </table>
          </v-col>
        </v-row>

        
      </div>
    </div>

    <div class="section guide">
      <div class="inner">
        <div class="sec-title">
          안내사항
        </div>

        <div class="guide-item">
          <v-row>
            <v-col cols="12" md="6">
              <div class="text">
                <strong>일반형 설치시</strong>
                <span>일반형의 경우 매립되는 방식으로 설치됩니다. 설치 전 키오스크 크기에 맞게 벽면 타공작업이 필요합니다</span>
                <span>가로 480 x 세로 1030 벽면 목공작업(앞문, 뒷문 개폐형)</span>
                <span>전원 220v 1개 / LAN케이블 1개 필요</span>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="image">
                <img src="/img/kiosk-detail/guide.png">
              </div>
            </v-col>
          </v-row>
        </div>


        <div class="guide-detail">
          <h4>※ 일반형 매립시 주의사항</h4>

          <div class="cont">
            <v-row>
              <v-col cols="12" md="8" sm="12">
                <dl class="box box01">
                  <dt>정면부가 돌출되는 키오스크 입니다. 작업시 주의 부탁드립니다.</dt>
                  <dd>
                    <img src="/img/kiosk-detail/guide-detail01.png" >
                  </dd>
                </dl>
              </v-col>
              <v-col cols="12" md="4" sm="12">
                <div class="custom_row">
                  <dl class="box box02">
                    <dt>뒷면 (높이 1030mm x 넓이 480mm)
매립을 위한 벽면 타공이 필요합니다.</dt>
                    <dd>
                      <img src="/img/kiosk-detail/guide-detail02.png" >
                    </dd>
                  </dl>
              
                  <dl class="box box03">
                    <dt>매립시 정면부는 돌출됩니다. 주의해주세요</dt>
                    <dd>
                      <img src="/img/kiosk-detail/guide-detail03.png" >
                    </dd>
                  </dl>
               
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  components:{
  
  },
  data(){
    return{

    }
  },
  methods:{
    kakaoLink(){
      window.open('https://pf.kakao.com/_uAqmK/chat','_new')
    }
  },


}
</script>


<style lang="scss" src="./kioskDetail.scss" scoped />
