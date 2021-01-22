<template>
  <div class="kiosk-wrap">
    <div class="subVisual">
      <div class="subTitle">
        <h4>편리한 매장 스마트한 관리</h4>
        <span></span>
        <p>무인세탁매장 키오스크</p>
      </div>
      <div class="black"></div>
    </div>

    <div class="mobile-visual">
      <div class="subTitle">
        <h4>편리한 매장<br />스마트한 관리</h4>
        <p>무인세탁매장 키오스크</p>
      </div>
      <div class="visual">
        <img src="/img/mobile-kiosk.png" />
      </div>
    </div>

    <div class="tab-wrap">
      <ul :class="{ tabs: true, tabsActive: tabSticky }">
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

      <v-slide-x-transition>
        <div class="tab-items" v-show="tabs === 3">
          <Price />
        </div>
      </v-slide-x-transition>
    </div>
  </div>
</template>

<script>
import Intro from "@/components/kiosk/intro.vue";
import Smart from "@/components/kiosk/smart.vue";
import Sales from "@/components/kiosk/sales.vue";
import Price from "@/components/kiosk/price.vue";

export default {
  components: {
    Intro,
    Smart,
    Sales,
    Price,
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
        "키오스크 구매안내",
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
          case 'buy':
            this.tabs = 3;
            this.tabMove(3);
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
  },
  methods: {
    tabFixed() {
      window.scrollY >= 450
        ? (this.tabSticky = true)
        : (this.tabSticky = false);
    },
    tabMove(i) {
      this.tabs = i;
      window.scrollTo(0, 430);
    },
  },
};
</script>

<style lang="scss" scoped>
.subVisual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  background: #f2f2f2 url("/img/kiosk-bg.jpg") 100%;
  border-radius: 15px;
  overflow: hidden;
  margin: 0 30px;

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
    span {
      display: inline-block;
      margin: 20px 0;
      width: 30px;
      height: 1px;
      background: #c2c2c2;
    }
    p {
      font-size: 3rem;
      line-height: 3rem;
      font-weight: 200;
      color: #292929;
    }
  }

  .black {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.05);
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
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80px;
      font-size: 1.2rem;
      background: #fff;
      z-index: 99;

      .tab {
        margin: 0 40px;
        color: #888;
      }
      .tab:hover {
        cursor: pointer;
        color: #0084de;
      }
      .tabActive {
        color: #0084de;
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
  }
}

@media screen and(max-width:960px) {
  .subVisual {
    display: none;
  }
  .mobile-visual {
    position: relative;
    display: flex;
    background: #f8f8f8;
    height: 500px;
    margin: 0 10px;
    border-radius: 15px;

    .subTitle {
      position: absolute;
      width: 50%;
      left: 30px;
      top: 30px;
      h4 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1.4rem;
        margin-top: 10px;
        color: #888;
      }
    }

    .visual {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      flex: 1;

      img {
        height: 350px;
        display: block;
      }
    }
  }

  .kiosk-wrap {
    display: block;

    .tab-wrap {
      display: block;

      .tabs {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 80px;
        font-size: 1.2rem;
        background: #fff;
        z-index: 99;

        .tabActive {
          background: #eef4f8;
          border-radius: 10px;
          padding: 5px 0;
        }

        .tab {
          flex: 1;
          flex-grow: 1;
          text-align: center;
          margin: 0 15px;
        }
      }
    }
  }
}
</style>
