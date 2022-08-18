<template>
  <div class="home">
    <div class="contents">
      <div class="main-visual">
        <v-carousel
          v-model="mainVisualIndex"
          hide-delimiters
          height="auto"
          cycle
          :show-arrows="false"
          @change="e => visualChange(e)"
          interval="6000"
        >
          <v-carousel-item v-for="(item,i) in mainVisual" :key="i">
            <a :href="item.link" :target="item.target">
              <div class="slide-item" :class="{light:item.light}">
                <div class="inner">
                  <div class="text">
                    <strong>
                      {{item.text}}
                    </strong>
                    <span>{{item.subText}}</span>
                  </div>
                </div>
                <div class="image">
                  <img :src="'/img/home/' + item.image">
                </div>
              </div>
             </a>
          </v-carousel-item>
        </v-carousel>

        <div class="arrow">
          <v-btn icon class="left" @click="visualLeftHandle">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn icon class="right" @click="visualRightHandle">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>

        <div class="paging">
          <div class="inner">
            <span 
              v-for="(item, index) in mainVisual"
              :key="index"
              :class="{active:index === mainVisualIndex}"
              @click="mainVisualIndex = index"
            />
          </div>
        </div>
      </div>

      <div class="section section-1">
        <div class="inner">
          <div class="sec-title sa sa-up">
            <strong>무인세탁매장의 파트너<br>페이오티</strong>
            <span>페이오티는 무인세탁매장 점주님의 <br>매장관리의 편의성과 효율성을 위해 노력합니다</span>
          </div>
          <v-row class="top">
            <v-col cols="12" md="6">
              <div class="cards">
                <div class="card card-1" @click="$router.push('kiosk')">
                  <v-carousel
                    hide-delimiters
                    :show-arrows="false"
                    cycle
                    height="auto"
                    interval="2000"
                  >
                    <v-carousel-item>
                      <div class="item">
                        <label>카카오톡 알림기능</label>
                        <img src="/img/hooper-05.png"/>
                      </div>
                    </v-carousel-item>
                    <v-carousel-item>
                      <div class="item">
                        <label>키오스크 전면광고 기능</label>
                        <img src="/img/kiosk-img2.png"/>
                      </div>
                    </v-carousel-item>
                    <v-carousel-item>
                      <div class="item">
                        <label>키오스크 전면광고 기능</label>
                        <img src="/img/kiosk-img2.png"/>
                      </div>
                    </v-carousel-item>
                  </v-carousel>
                </div>
                <div class="card card-2" @click="$router.push('kiosk')">
                  <v-carousel
                    hide-delimiters
                    :show-arrows="false"
                    cycle
                    height="auto"
                    interval="2000"
                  >
                    <v-carousel-item>
                      <div class="item">
                        <label>경고방송 송출 기능</label>
                        <img src="/img/kiosk-img7.png"/>
                      </div>
                    </v-carousel-item>
                    <v-carousel-item>
                      <div class="item">
                        <label>장비원격제어</label>
                        <img src="/img/hooper-02.png"/>
                      </div>
                    </v-carousel-item>
                    <v-carousel-item>
                      <div class="item">
                        <label>회원 문자송신 서비스</label>
                        <img src="/img/hooper-06.png"/>
                      </div>
                    </v-carousel-item>
                  </v-carousel>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="card card-3" @click="$router.push('kiosk-detail')">
                <img src="/img/home/box-3.png" class="sa sa-up" data-sa-delay="500">               
                <v-btn text>가격안내</v-btn>
              </div>
            </v-col>
          </v-row>
          <v-row class="bottom">
            <v-col cols="12" md="6">
              <div class="card card-4" @click="$router.push('smartpay')">
                <p>new</p>
                <div class="title">
                  <strong>스마트페이</strong>
                  <span>QR코드로 간편결제</span>
                </div>
                <img src="/img/home/smartpay.png"  class="sa sa-up" data-sa-margin="0" data-sa-delay="400"/>
              </div>
            </v-col>
            
            <v-col cols="12" md="6">
              <div class="cards">
                <div class="card card-5" @click="$router.push('kiosk')">
                  <v-carousel
                    hide-delimiters
                    :show-arrows="false"
                    cycle
                    height="auto"
                    interval="2000"
                  >
                    <v-carousel-item>
                      <div class="item">
                        <label>헛걸음방지 기능제공</label>
                        <img src="/img/kiosk-img9.png"/>
                      </div>
                    </v-carousel-item>
                    <v-carousel-item>
                      <div class="item">
                        <label>회원등록/회원관리 기능</label>
                        <img src="/img/hooper-04.png"/>
                      </div>
                    </v-carousel-item>
                    <v-carousel-item>
                      <div class="item">
                        <label>포인트 선결제 적립기능</label>
                        <img src="/img/hooper-03.png"/>
                      </div>
                    </v-carousel-item>
                  </v-carousel>
                </div>
                <div class="card card-6">
                  <div class="text">
                    <label>설치된 매장수</label>
                    <strong>{{count}}</strong>
                    <span>다양한 무인세탁매장에서<br>
                      페이오티 키오스크를 사용하고 있습니다.
                    </span>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
          <div class="banner" v-ripple @click="$router.push('kiosk-map')">
            <v-icon>mdi-map-marker</v-icon>
            <span>키오스크가 설치된 매장을 지도에서 확인해보세요</span>
          </div>
        </div>
      </div> <!-- section-1 -->

      <div class="section section-2">
        <div class="inner">
          <div class="image sa sa-left">
            <img src="/img/home/sec-2-image.png">
          </div>
          <div class="sec-title">
            <strong>스마트폰으로 간편하게 매장을 관리하세요</strong>
            <span>집에서도 간편하게 원격제어를 통한 클레임처리, 스마트폰으로 매장 매출확인 등 간편하게 매장을 관리할 수 있습니다</span>
          </div>          
        </div>
        <div class="sec-bg"></div>
      </div> <!-- section-2 -->

      <div class="section section-3">
        <div class="inner">
          <v-row>
            <v-col cols="12" md="4">
              <div class="sec-title">
                <strong>끊임없는 업데이트와 관리지원을 약속드립니다</strong>
                <span>페이오티의 기술노하우로 무인세탁매장 키오스크를 늘 새롭게 진화시키고 있습니다.</span>
              </div>
            </v-col>
            <v-spacer />
            <v-col cols="12" md="7" offset-md="1">
              <div class="kiosk">
                <dl class="sa sa-up">
                  <dt>
                    <img src="/img/home/kiosk-screen-1.png">
                  </dt>
                  <dd>
                    <strong>페이오티 2.0</strong>
                    <span>2019</span>
                  </dd>
                </dl>
                <dl class="sa sa-up" data-sa-delay="200">
                  <dt>
                    <img src="/img/home/kiosk-screen-2.png">
                  </dt>
                  <dd>
                    <strong>페이오티 3.0</strong>
                    <span>2020</span>
                  </dd>
                </dl>
                <dl class="sa sa-up" data-sa-delay="400">
                  <dt>
                    <img src="/img/home/kiosk-screen-3.png">
                  </dt>
                  <dd>
                    <strong>페이오티 4.0</strong>
                    <span>2021</span>
                  </dd>
                </dl>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>

      <div class="section section-4">
        <div class="inner">
          <div class="sec-title">
            <strong>타사와의 비교로<br>페이오티의 강점을 확인 해 보세요</strong>
          </div>

          <v-row>
            <v-col cols="12" md="5">
              <dl class="items payot">
                <dt>
                  페이오티 키오스크
                </dt>
                <dd>
                  <v-row>
                    <v-col cols="4" v-for="(item, i) in items" :key="i"  >
                      <div class="item">
                        <div class="item-in">
                          <strong class="sa sa-scail" :data-sa-delay="i * 100" data-sa-margin="100">
                            <img :src="'img/home/' + item.icon">
                          </strong>
                          <span>{{item.name}}</span>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </dd>
              </dl>
            </v-col>
            <v-col cols="12" md="2" />
            <v-col cols="12" md="5">
              <dl class="items not">
                <dt>
                  A사 키오스크
                </dt>
                <dd>
                  <v-row>
                    <v-col cols="4" v-for="(item,i) in items" :key="i" >
                      <div class="item">
                        <v-icon v-show="item.disable" class="close">mdi-close</v-icon>
                        <div class="item-in" v-show="!item.disable">
                          <strong class="sa sa-scail" :data-sa-delay="i * 100" data-sa-margin="100">
                            <img :src="'img/home/' + item.icon">
                          </strong>
                          <span>{{item.name}}</span>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </dd>
              </dl>
            </v-col>
          </v-row>
        </div>
      </div> <!-- section-4 -->

      <div class="section-7">
        <div class="inner">
          <v-row>
            <v-col cols="12" md="4">
              <div class="sec-title">
                <strong>다양한 세탁브랜드에서 페이오티 키오스크를 사용하고 있습니다</strong>
                <span>페이오티 키오스크는 다양한 브랜드로 부터 인정받은 세탁전용 키오스크 입니다.</span>
              </div>
            </v-col>
            <v-spacer />
            <v-col cols="12" md="7" >
              <v-row class="brands">
                <v-col cols="4" md="3" v-for="(item, i) in 17" :key="i">
                  <div class="brand-item sa sa-up" :data-sa-delay="i * 50" data-sa-margin="0">
                    <img :src="'/img/partner' + (i + 1) +'.png'" />
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          
      </div>
    </div> <!-- section-7 -->

      <div class="section-5">
        <div class="inner">
          <v-row>
            <v-col cols="12" md="4">
              <div class="sec-title">
                <strong>페이오티는 언제나 <br>점주님의 문의를 환영합니다</strong>
              </div>

              <div class="customer">
                <span>문의전화</span>
                <strong>070.7807.6857</strong>
                <v-btn text rounded @click="kakaoLink">
                  <v-icon>mdi-chat</v-icon>
                  <label>카카오톡 상담하기</label>
                </v-btn>
              </div>
            </v-col>
            <v-spacer />
            <v-col cols="12" md="5">
              <div class="catalog">
                <dl @click="downloadFile('guide')">
                  <dt class="sa sa-up">
                    <img src="/img/guide.png">
                  </dt>
                  <dd>
                    <strong>페이오티 키오스크</strong>
                    <span>사용자 메뉴얼</span>
                  </dd>
                </dl>
                <dl @click="downloadFile('catalog')">
                  <dt class="sa sa-up" data-sa-delay="200"> 
                    <img src="/img/catalog.png">
                  </dt>
                  <dd>
                    <strong>페이오티 키오스크</strong>
                    <span>공식 카탈로그</span>
                  </dd>
                </dl>
              </div>
            </v-col>
          </v-row>

        </div>
      </div> <!-- section-5 -->
      

      <div class="section-6">
        <div class="inner">
      
          <div class="sec-title">
            <strong>페이오티의<br>최신 소식을 알려드릴게요</strong>
          </div>


          <v-row>
            <v-col 
              cols="12" md="4" 
              v-for="(post,index) in blogPosts" 
              :key="index"
            >
              <div class="item blog">
                <a :href="post.url" target="_new">
                  <p>
                    <img :src="post.thumbnail" />
                  </p>
                  <div class="text">
                    <strong v-html="post.title"></strong>
                    <span>{{post.datetime.substring(0, 10)}}</span>
                  </div>
                </a>
              </div>
            </v-col>
          </v-row>   
          
        </div>
      </div> <!-- section-6 -->

    </div>  <!--contents -->
  </div>
</template>


<script>
import { daumSearch } from "@/utils/KakaoSearch";

export default {
  components:{
  
  },
  data(){
    return{
      count:0,
      mainVisualIndex:0,
      blogPosts: [],
      mainVisual:[
        {
          light:false,
          text:'키오스크 없이, 어플 설치없이',
          subText:'동전으로만 결제할 수 있었던 세탁장비를 스마트페이 QR코드를 통해 신용카드로 결제할 수 있습니다',
          image:'mainVisual05.png',
          link:'./smartpay',
          target:'_self'
        },
        {
          light:false,
          text:'일반 무인세탁매장을 스마트 무인매장으로',
          subText:'PC/모바일로 쉽고 간편하게 관리하는 스마트 무인세탁매장 페이오티 관리시스템, 지금 바로 시작하세요',
          image:'mainVisual03.png',
          link:'./kiosk?tab=default',
          target:'_self'
        },
        {
          light:true,
          text:'지도에서 설치된 매장을 확인해보세요',
          subText:'페이오티 키오스크가 설치된 가까운 매장을 확인 할 수 있습니다.',
          image:'mainVisual04.png',
          link:'./kiosk-map',
          target:'_self'
        },
        {
          light:true,
          text:'고객들을 위한 헛걸음방지 시스템',
          subText:'세탁기,건조기가 현재 사용중인지 실시간 현황을 핸드폰으로 확인해보세요',
          image:'mainVisual02.png',
          link:'http://state.coin-machine.com/151',
          target:'_new'
        },
        {
          light:true,
          text:'일반 무인세탁매장을 스마트 무인매장으로',
          subText:'PC/모바일로 쉽고 간편하게 관리하는 스마트 무인세탁매장 페이오티 관리시스템, 지금 바로 시작하세요',
          image:'mainVisual01.png',
          link:'./kiosk?tab=default',
          target:'_self'
        },
        
      ],
      items:[
        {
          icon:'main-icon-1.png',
          name:'동전 매출기록',
          disable:true
        },
        {
          icon:'main-icon-2.png',
          name:'전국매장 매출비교',
          disable:true
        },
        {
          icon:'main-icon-3.png',
          name:'경고음 송출기능',
          disable:true
        },
        {
          icon:'main-icon-4.png',
          name:'금액 원격투입',
          disable:false,
        },
        {
          icon:'main-icon-5.png',
          name:'회원 문자발송',
          disable:true,
        },
        {
          icon:'main-icon-6.png',
          name:'포인트적립/차감',
          disable:false,          
        },
        {
          icon:'main-icon-7.png',
          name:'전면 광고기능',
          disable:true,
        },
        {
          icon:'main-icon-8.png',
          name:'카톡 알림기능',
          disable:false,
        },
        {
          icon:'main-icon-9.png',
          name:'음성안내 기능',
          disable:true,
        },
        
      ]
    }
  },
  mounted(){
    this.counting()

    daumSearch('blog').then((data) => {
      this.blogPosts = data.documents;
    });

    this.saFunc();
    addEventListener('scroll',this.saFunc)
  },
  methods:{
    

    counting(){
      setInterval(()=>{
        if(this.count == 600){
          clearInterval(this.counting);
          return false
        }
        this.count += 2;
      }, 10)
    },
    visualChange(e){
      this.mainVisualIndex = e
    },
    visualLeftHandle(){
      if(this.mainVisualIndex !== 0){
        this.mainVisualIndex -= 1
      }else{
        this.mainVisualIndex = this.mainVisual.length - 1
      }
    },
    visualRightHandle(){
      if(this.mainVisual.length - 1 > this.mainVisualIndex){
        this.mainVisualIndex += 1
        
      }else{
          this.mainVisualIndex = 0
        }
    },

    kiosk(value){
      this.$router.push({ name: 'Kiosk', query: { tab:value }});
    },

    kakaoLink(){
      window.open('http://pf.kakao.com/_uAqmK' , '_new')
    },

    downloadFile(fileName) {
      const filePath = `http://www.payot-inc.com/pdf/${fileName}.pdf`;
      window.open(filePath, '_blank');
    },

    saFunc(){
      const saElement = document.querySelectorAll('.sa')
      const defaultMargin = 300;
      let triggerMargin = 0;
      let triggerHeight = 0;

      for(let items of saElement){
        if(!items.classList.contains('show')){
          //설정한 마진값
          if(items.dataset.saMargin){
            triggerMargin = parseInt(items.dataset.saMargin)   
          }else{
            triggerMargin = defaultMargin
          }

          if(items.dataset.saTrigger){
            triggerHeight = document.querySelector(items.dataset.saTrigger).getBoundingClientRect().top + triggerMargin;
          }else{
            triggerHeight = items.getBoundingClientRect().top + triggerMargin;
          }
          
          //애니메이션 시작
          if(window.innerHeight > triggerHeight){
            let delay = items.dataset.saDelay ? items.dataset.saDelay : 0;
            setTimeout(function(){
              items.classList.add('show');
            }, delay)
          }
        }
      }
    }
  },
}
</script>

<style lang="scss" src="./home.scss" scoped />
