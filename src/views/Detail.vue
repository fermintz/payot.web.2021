<template>
  <div class="detail">
      <div class="top-info-wrap">
        <div class="inner">
          <v-row>
            <v-col cols="12" md="5">
              <div class="thumb">
                <img src="/img/x_banner_thum.jpg">
              </div>
            </v-col>
            <v-spacer/>
            <v-col cols="12" md="6">
              <div class="top-info">
                <div class="headline">
                  <h4>세탁방전용 X - 통풍배너(거치대포함)</h4>
                  <p>바람이 불어도 쉽게 넘어가지 않는 통풍배너</p>
                </div>

                <div class="topDetail">
                  <div class="priceInfo">
                    <span>99,000</span>
                    <strong>77,000</strong>
                  </div>
                  <dl>
                    <dt><v-icon>mdi-truck</v-icon></dt>
                    <dd>무료배송</dd>
                  </dl>
                </div>
              </div>

              <div class="top_btns">
                <v-row>
                  <v-col cols="12" md="6"  class="phone">
                    <v-btn text>
                      <v-icon>mdi-phone</v-icon>
                      <span>문의 070-7807-6857</span>
                    </v-btn>
                  </v-col>
                  <v-col cols="12" md="6"  class="kakao">
                    <v-btn text @click="kakaoLink">
                      <v-icon>mdi-message</v-icon>
                      <span>카카오톡 문의하기</span>
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </div>
      </div> <!-- top-info-wrap -->

      <!-- <div class="nomination">
        <div class="inner">
          <h4>관련상품</h4>
        </div>
      </div> -->

      <div class="detail-info-wrap">
        <div class="inner">
          <img src="/img/banner_detail.jpg">
        </div>
      </div>
  </div>
</template>

<script>
export default {
   mounted() {
    window.scrollTo(0,0)
   },
   methods:{
    kakaoLink(){
      window.open('http://pf.kakao.com/_uAqmK' , '_new')
    }
  }
}
</script>

<style lang="scss" scoped>
.detail{
  padding-top:100px;
  border-top:1px solid #e2e2e2;
  

  .inner{
    width:100%;
    max-width: 1280px;
    margin:0 auto;
  }

  .divider{
    height:1px;
    background:#e2e2e2;
    margin:30px 0;
  }

  .top-info-wrap{
    .thumb{
      display:flex;
      justify-content: center;
      border:1px solid #e2e2e2;

      img{
        display:block;
      }
    }

    .top-info{
      .headline{
        h4{
          font-size:32px;
          line-height:40px;
        }
        p{
          font-size:16px;
          color:#888;
          margin-top:5px;
        }
      }

      .topDetail{
        .priceInfo{
          padding:30px 0;
          margin-top:30px;
          border-top:1px solid #aaa;
          border-bottom:1px solid #e2e2e2;
          span{
          font-size:18px;
          font-weight:400;
          text-decoration: line-through;
          color:#888;
          }
          span::after{
            content:'원';
            font-size:16px;
            margin-left:5px;
          }
          strong{
            display:block;
            font-size:32px;
            font-weight:600;
          }
          strong::after{
            content:'원';
            font-family:'SCDream';
            font-weight:300;
            font-size:24px;
            margin-left:10px;
          }
        }
        
        dl{
          border-bottom:1px solid #e2e2e2;
          display:flex;
          align-items: center;
          height:60px;

          dt{
            width:50px;
            .v-icon{
              color:#c2c2c2;
            }
          }
        }
      }
    }

    .top_btns{
      margin-top:50px;

      .col-12{
        padding:0
      }

      .phone{
        padding-right:5px;
        .v-btn{
          align-items: center;
          .v-icon{font-size:15px;margin-right:8px;}
          border:1px solid #d2d2d2;
        }
      }

      .kakao{
        padding-left:5px;
        .v-btn{
          align-items: center;
          .v-icon{font-size:15px;margin-right:8px;}
          background:#FFDC00;
        }
      }

      .v-btn{
        width:100%;
        height:50px;
        font-size:16px;
        font-weight:400;
      }
    }
  }

  .nomination{
    margin:70px 0;
    background:#f8f8f8;
  }

  .detail-info-wrap{
    text-align:center;
    padding:100px 0;
    margin-top:70px;
    border-top:1px solid #e2e2e2;
    min-height:1500px;

    img{
      width:100%;
      max-width:900px;
    }
  }
}

@media screen and (max-width:1280px) {
  .detail{
    
    .top-info-wrap{
      .top_btns{
        .phone{
          padding:0;
          margin-bottom:10px;
        }
        .kakao{
          padding:0;
        }
      }
    }
  }
}
</style>