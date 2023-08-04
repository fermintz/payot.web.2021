<template>
  <v-dialog 
    v-model="visible"
    width="100%"
    max-width="800"
  >
    <div class="modal">
      <div class="modal-cont">
        <div class="tit"> 
          <h2>알려드립니다</h2>
          <p>최근 프로그램(소프트웨어) 변경요청건으로 문의가 많아 공지사항으로 안내드립니다.</p>
        </div>
        
        
        <dl>
          <dt>인사말</dt>
          <dd>
            해당 공지는 '페이오티' 당사의 단독 공지이며 타 회사의 입장을 대변하지 않음을 안내드립니다.<br/>오해가 생기거나, 예기치 않은 피해가 있을 수 있기에 관련 문의사항은 아래 1:1 상담채널로 부탁드립니다.
          </dd>
        </dl>

        <div class="divider" />

        <dl>
          <dt>내용</dt>
          <dd>
            <p>프로그램(소프트웨어) 변경요청 접수를 시작하며 이에따른 안내사항은 아래와 같습니다.</p>
            <ul>
              <li>
                <strong>1)</strong>
                <span>프로그램 변경 및 회원데이터 및 포인트정보 이전작업 비용(22만원 부가세 포함)이 발생하며, 점주님께서 매장에 방문하시면 이전작업이 진행되며 약 90분~120분 정도 소요됩니다.</span>
              </li>
              <li>
                <strong>2)</strong>
                <span>키오스크 사용료 월 33,000원 발생되며, 사용료에는 카톡 및 시스템 사용료가 포함되어있습니다.</span>
              </li>
              <li>
                <strong>3)</strong>
                <span>하드웨어(모니터/카드기/지폐투입기/통신보드 등) 고장발생 시 당사의 제조 맟 판매제품이 아니다보니, 불가피하게 유지보수는 당사에서 불가능한 부분을 양해 부탁드립니다. 변경 후 프로그램의 사용 및 유지보수만을 담당하게 됩니다.</span>
              </li>
            </ul>

            <p>※ 장치환경이 열악한 경우 프로그램 변경이 불가능합니다. (스틱PC 등) </p>
            <p>※ 저희는 다른 업체로 기존 이용하시던 프로그램과 시스템이 완전히 상이하며, 해당부분의 수정은 불가능합니다.</p>
            <p>위 내용을 반드시 읽어주시고, 동의하신 경우에만 전환신청을 해주시길 바랍니다.</p>
          </dd>
        </dl>

        <div class="divider" />

        <dl>
          <dt>신청방법</dt>
          <dd>
             <p>1:1 카카오 상담채널 접수<br/>(평일 10:00 - 18:30 / 주말-공휴일휴무)</p>
             <v-btn text class="kakao" @click="kakao">신청 바로가기</v-btn>
             <p>*매장명/연락처를 남겨주시면 접수순으로 연락드리고 일정을 잡을 수 있도록 하겠습니다.</p>
          </dd>
        </dl>
      </div>
      <div class="modal-footer">
        <v-btn text @click="invisible">하루동안 보지 않기</v-btn>
        <v-btn text @click="visible = false" class="close">닫기</v-btn>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
  mounted() {
    if (this.$store.state.invisibleCheckTime) {
      const overTime = Date.now() - this.$store.state.invisibleCheckTime;
      this.visible = overTime > 1000 * 60 * 24;
    }
  },
  methods: {
    move() {
      window.open("http://state.coin-machine.com/151", "_new");
    },
    invisible() {
      this.$store.commit("SET_ALERT_MODAL_VISIBLE", Date.now());
      this.visible = false;
    },

    kakao(){
      window.open('http://pf.kakao.com/_uAqmK/chat', '_new')
    }
  },
};
</script>

<style lang="scss" scoped>


.modal {
  .modal-cont {
    padding:30px;

    .tit{
      margin-bottom:30px;

      h2{
        font-size:32px;
        margin-bottom:5px;
      }
      p{
        font-size:18px;
      }
    }

    .divider{
      height:1px;
      background:#e2e2e2;
      margin:24px 0;
    }
    dl{
      dt{
        display:flex;
        align-items: center;
        gap:8px;
        font-size:20px;
        font-weight:bold;
        margin-bottom:10px;
      }
      dt::before{
        content:'';
        display:block;
        width:10px;
        height:10px;
        background: #d22828;
      }
      dd{
        display:flex;
        flex-direction: column;
        gap:15px;

        ul{
          display:flex;
          flex-direction: column;
          gap:10px;
          li{
            display:flex;
            background: #f2f2f2;
            padding:10px;
            border-radius:5px;
            gap:10px;
            strong{}
            span{}
          }
        }

        p{
          color:#494949;
        }
      }
    }
  }

  .modal-footer {
    width: 100%;
    bottom: 0px;
    display: flex;
    gap:10px;
    align-items: center;
    justify-content: center;
    border-top: 1px solid #e2e2e2;
    padding: 15px;
    background: #fff;
    z-index: 2;

    .v-btn {
      background: #e2e2e2;
      color:#292929;
      min-height: 40px;
      padding: 0px 30px;
      border-radius: 23px;
      
      font-size: 14px;
      font-weight: 500;
    }

    .v-btn.close{
      background:#292929;
      color:#fff;
    }
  }

  .v-btn.kakao{
    height:50px;
    background:#0088ff;
    color:#fff;
    font-size:16px;
  }
}

@media screen and (max-width:480px) {
  .modal{
    font-size:16px;
    .modal-cont{
      padding:20px;
    }
  }
}
</style>
