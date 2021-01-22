<template>
  <div class="history-wrap">
    <div class="inner">
      <div class="section-title">
        <h4>
          페이오티 히스토리
        </h4>
        <p>PAYOT HISTORY</p>
      </div>

      <div class="history">
        <v-row>
          <v-col cols="12" md="6">
            <div class="history-item left">
              <dl>
                <dt>2019</dt>
                <dd>
                  <div class="item">
                    <span>부산 內 5개 대학 설치완료</span>
                    <strong>11</strong>
                  </div>
                  <div class="item">
                    <span>설치대수 500대 돌파</span>
                    <strong>08</strong>
                  </div>
                  <div class="item">
                    <span>월드클리닝 매장 설치</span>
                    <strong>07</strong>
                  </div>
                </dd>
              </dl>
              <div class="line">
                <span class="dotBox"/>
              </div>
            </div>
            <div class="history-item left">
              <dl>
                <dt>2017</dt>
                <dd>
                  <div class="item">
                    <span>자동판매기 결제시스템 개발완료</span>
                    <strong>12</strong>
                  </div>
                  <div class="item">
                    <span>한국디지털미디어고 시스템 적용</span>
                    <strong>10</strong>
                  </div>
                  <div class="item">
                    <span>자동판매기 결제시스템 개발완료</span>
                    <strong>04</strong>
                  </div>
                </dd>
              </dl>
              <div class="line">
                <span class="dotBox"/>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="history-item right">
              <div class="line">
                <span class="dotBox"/>
              </div>
              <dl>
                <dt>2018</dt>
                <dd>
                  <div class="item">
                    <strong>10</strong>
                    <span>연구소기업인증</span>
                    
                  </div>
                  <div class="item">
                    <strong>04</strong>
                    <span>더런드리 공급계약 체결</span>
                    
                  </div>
                  <div class="item">
                    <strong>03</strong>
                    <span>인하대학교 결제시스템 적용</span>
                  </div>
                  <div class="item">
                    <strong>03</strong>
                    <span>벤처기업인증</span>
                  </div>
                </dd>
              </dl>
            </div>
            <div class="history-item right">
              <div class="line">
                <span class="dotBox"/>
              </div>
              <dl>
                <dt>2016</dt>
                <dd>
                  <div class="item">
                    <strong>12</strong>
                    <span>BUH 투자유치</span>
                  </div>
                  <div class="item">
                    <strong>11</strong>
                    <span>(주)페이오티 설립</span>                  
                  </div>
                </dd>
              </dl>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.history-wrap{
  display:flex;
  justify-content: center;
  width:100%;
  padding-bottom:120px;

  .inner {
    width:100%;
    max-width: 1280px;
    padding:0 10px;
  }

  .row{padding:0;margin:0}
  .col-md-6{margin:0;padding:0;border-right:1px solid #e2e2e2;}
  .col-md-6:last-child{border-right:0px;}

  .section-title{
    text-align:center;
    margin-bottom:50px;

    p{
      margin-top:5px;
    }
  }


 .history-item{
   display:flex;
   margin-bottom:150px;

   .line{
     position: relative;
     width:150px;
     height:1px;
     background:#e2e2e2;
     margin-top:16px;
   }
   dl{
     flex:1;

     dt{
       font-size:2.2rem;
       font-weight:500;
       color:#0084DE
     }
     dd{
       font-size:1.1rem;
       color:#888;
       margin-top:30px;

       .item{
         margin-bottom:12px;
         span{margin:0 15px;}
         strong{color:#292929;}
       }
     }
   }
 }

 .history-item.left{
   margin-top:30px;
   dl{
     text-align:right;
   }
   .line{
     margin-left:20px;
     span{
       position:absolute;
       top:-7px;
       right:-7px;
       width:15px;
       height:15px;
       background:#e2e2e2;
     }
   }
 }
 .history-item.right{
   margin-top:150px;
   .line{
     margin-right:20px;
     span{
       position:absolute;
       top:-7px;
       left:-7px;
       width:15px;
       height:15px;
       background:#e2e2e2;
     }
   }
 }
}


@media screen and(max-width:960px){
  .history-wrap{
    .inner{
      width:100%;
    }
    .col-md-6{
      border:0
    }
    .history-item.left{
      display:flex;
      justify-content: center;
      align-items: center;
      border:0px;
      text-align:center;

      dl{text-align:center;}

      .line{
        display:none;
      }
    }
    .history-item.right{
       dl{text-align:center;}
      .line{
        display:none;
      }
    }
  }
}
</style>