<template>
  <div class="shop">
    <div class="subVisual">
      <div class="subTitle">
        <h4 class="ani">우리매장을 더욱 돋보이게</h4>
        <span class="ani"></span>
        <p class="ani">세탁매장 관련용품</p>
      </div>
      <div class="black"></div>
    </div>

    <div class="shop-list-wrap">
      <div class="inner">
        <v-row>
          <v-col cols="6" md="4">
            <div class="item">
              <div class="thumb" @click="$router.push('detail')">
                <img src="/img/x_banner_thum.jpg">
              </div>
              <dl>
                <dt>
                  <span>바람이 불어도 쉽게 넘어가지 않는 통풍배너</span>
                  <strong>세탁방전용 x-통풍배너</strong>
                </dt>
                <dd class="price">
                  77,000
                </dd>
              </dl>
            </div>
          </v-col>
          <!-- <v-col cols="6" md="4">
            <div class="item">
              <div class="thumb" @click="$router.push('detail')">
                <img src="/img/a2_thum.jpg">
              </div>
              <dl>
                <dt>
                  <span>나의 세탁매장을 홍보하세요!</span>
                  <strong>세탁관련 포스터 (A2사이즈)</strong>
                </dt>
                <dd class="price">
                  77,000
                </dd>
              </dl>
            </div>
          </v-col> -->
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap';

export default {
   mounted() {
    window.scrollTo(0,0)
    window.addEventListener("scroll", this.tabFixed)

    gsap.from('.subVisual .ani' ,{
      y:100,
      opacity:0,
      stagger:{
        amount:0.2,
        from:'end'
      }
    })

  },
}
</script>

<style lang="scss" scoped>
.shop {
  height: 100%;

  .inner {
    width:100%;
    max-width: 1280px;
    margin:0 auto;
  }
  
  .subVisual{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
    background: #f2f2f2 url("/img/shop-bg.jpg") no-repeat center / 100% auto;
    border-radius: 15px;
    overflow: hidden;
    margin:0 30px;

    .subTitle {
      position: relative;
      z-index: 2;
      text-align: center;

      h4 {
        font-size: 1.3rem;
        color: #fff;
        font-weight: 300;
        letter-spacing: 5px;
      }
      span {
        display: inline-block;
        margin: 20px 0;
        width: 30px;
        height: 1px;
        background: #fff;
      }
      p {
        font-size: 3rem;
        line-height:3rem;
        font-weight: 200;
        color: #fff;
      }
    }

    .black {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      background:#000;
      opacity: 0.65;
    }
  }

  .shop-list-wrap{
    padding:70px 0;
    .item{
      margin-bottom:50px;
      .thumb{
        border:1px solid #e2e2e2;
        border-radius:10px;
        overflow:hidden;
        img{width:100%;}
      }
      dl{
        margin-top:15px;
        padding:0 15px;
        dt{
          span{
            display:block;
            font-size:14px;
            color:#888;
          }
          strong{
            display:block;
            font-size:18px;
            font-weight:400;
          }
        }
        dd.price{
          margin-top:10px;
          font-size:18px;
          font-weight:600;
        }
        dd.price::after{
          content:'원';
          font-weight:400;
          font-size:14px;
        }
      }

      .thumb:hover{
        cursor: pointer;
        img{
          transition: 0.5s all;
          transform: scale(1.1);
        }
      }

      dl:hover{
        dt{
          strong{
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
    }
  }
}

@media screen and(max-width:1280px){
  .shop{
    .subVisual{
      margin:0 15px;
    }
    .subVisual{
      background: #f2f2f2 url("/img/shop-bg.jpg") no-repeat center / 200% auto;
    }
  }
  
}
</style>