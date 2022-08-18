<template>
  <div class="kiosk-wrap">
    <div class="subVisual">
      <div class="subTitle">
        <h4 class="ani">편리한 매장 스마트한 관리</h4>
        <p class="ani">무인세탁매장 키오스크</p>
      </div>
      <div class="black"></div>
    </div>


    <div class="tab-wrap">
      <ul class="tabs">
        <li
          :class="{ tab: true, tabActive: tabs === i ? true : false }"
          v-for="(item, i) in items"
          :key="i"
          @click="tabMove(i)"
        >
          {{ item }}
        </li>
      </ul>
      <v-slide-x-transition>
        <div class="tab-items company" v-show="tabs === 0">
          <Intro />
        </div>
      </v-slide-x-transition>

      <v-slide-x-transition>
        <div class="tab-items" v-show="tabs === 1">
          <Smart />
        </div>
      </v-slide-x-transition>

      <v-slide-x-transition>
        <div class="tab-items" v-show="tabs === 2">
          <Sales />
        </div>
      </v-slide-x-transition>
    </div>
  </div>
</template>

<script>
import Intro from "@/views/kiosk/intro.vue";
import Smart from "@/views/kiosk/smart.vue";
import Sales from "@/views/kiosk/sales.vue";

import gsap from 'gsap';
export default {
  components: {
    Intro,
    Smart,
    Sales,
  },
  props: {
    tab: String,
  },
  data() {
    return {
      tabs: 0,
      items: [
        "키오스크 소개",
        "스마트 운영관리",
        "정확한 매출관리",
      ],
      text: "dasdsadasdsadsa",
      tabSticky: false,
    };
  },
  watch: {
    tab: {
      immediate: true,
      handler: function(query) {
        switch (query) {
          case 'sales':
            this.tabs = 2;
            this.tabMove(2);
            break;
          default:
            this.tabs = 0;
            this.tabMove(0);
            break;
        }
      },
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.tabFixed);

    gsap.from('.subVisual .ani' ,{
      y:100,
      opacity:0,
      stagger:{
        amount:0.2,
        from:'end'
      }
    })
  },
  methods: {
 
    tabMove(i) {
      if(window.innerWidth < 960){
        this.tabs = i;
        window.scrollTo(0, 0);
      }else{
        this.tabs = i;
        window.scrollTo(0, 430);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.kiosk-wrap{
  padding:0 50px;
  padding-top:100px;
}
.subVisual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 450px;
  background: #f2f2f2 url("/img/kiosk-bg.jpg") 100%;
  border-radius: 30px;
  overflow: hidden;


  .subTitle {
    position: relative;
    z-index: 2;
    text-align: center;

    h4 {
      font-size: 1.3rem;
      color: #888;
      font-weight: 300;
      letter-spacing: 5px;
    }
    p {
      font-size: 3rem;
      line-height: 3rem;
      font-weight: 200;
      color: #292929;
      margin-top:15px;
    }
  }

  .black {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    background: #000;
    opacity: 0.15;
  }
}
.mobile-visual {
  display: none;
}

.kiosk-wrap {
  display: block;
  height: 100%;

  .tab-wrap {
    display: block;

    .tabs {
      width:100%;
      position: sticky;
      display: flex;
      justify-content: center;
      align-items: center;
      height:70px;
      font-size: 1.2rem;
      background: #fff;
      z-index: 99;
      top:0px;

      .tab {
        margin-right:70px;
        color: #888;

        &:last-child{
          margin-right:0px;
        }
      }
      .tab:hover {
        cursor: pointer;
        color: #0084de;
      }
      .tabActive {
        color: #0084de;
      }
    }
   
  }
}

@media screen and(max-width:960px) {
  .kiosk-wrap{
    padding:0 20px;
    padding-top:100px;

  }
  .subVisual {
    display: none;
  }
  
  .kiosk-wrap {
    display: block;

    .tab-wrap {
      .tabs {
        top:70px;
        height:50px;
        background:#f2f2f2;
        border-radius:5px;
        justify-content: space-around;

        .tab{
          margin-right:0px;
        }

      }
    }
  }
  
}
</style>
