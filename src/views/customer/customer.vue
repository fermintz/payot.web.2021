<template>
  <div class="customer contents">
    <div class="inner">

      <div class="cs_title">
        <h2>페이오티 고객지원</h2>
        <p>페이오티 키오스크 이용 중 궁금하신 문의사항에 대해 친절하게 상담해드리겠습니다.</p>
      </div>

      <div class="data-list">
        <h4>키오스크 관련자료</h4>
        <v-row>
          <v-col cols="6" md="4">
            <dl>
              <dt>
                <a href="/pdf/howToUse-h.pdf" target="_new">
                <img src="/img/customer/howToUse-h.png" height="50%">
                </a>
              </dt>
              <dd>
                <span>키오스크 사용방법 안내(가로)_포맥스합지3T</span>
                <a href="/pdf/howToUse-h.pdf" download><strong>[다운로드]</strong></a>
              </dd>
            </dl>
          </v-col>
          <v-col cols="6" md="4">
            <dl>
              <dt>
                <a href="/pdf/howToUse-v.pdf" target="_new">         
                <img src="/img/customer/howToUse-v.png" height="100%">
                </a>
              </dt>
              <dd>
                <span>키오스크 사용방법(세로)_포맥스합지3T </span>
                <a href="/pdf/howToUse-v.pdf" download><strong>[다운로드]</strong></a>
              </dd>
            </dl>
          </v-col>
          <v-col cols="6" md="4">
             
            <dl>
              <dt>
                <a href="/pdf/guide.pdf" target="_new">
                  <img src="/img/guide.png" height="80%">
                </a>
              </dt>
              <dd>
                <span>키오스크 메뉴얼</span>
                <a href="/pdf/guide.pdf" download><strong>[다운로드]</strong></a>
              </dd>
            </dl> 
      
          </v-col>
        </v-row>
      </div>

      <div class="qna-list">
        <h4>자주묻는 질문</h4>
        <dl class="qna-item">
          <dt><span class="icon">+</span> 키오스크에 충전방식은 어떻게 되나요?</dt>
          <dd class="qua-item-cont">
            별도의 RF카드가 없이 키오스크내에 전화번호를 입력하면 회원가입이 되며, 고객은 해당 번호를 사용하여 포인트를 적립하고 사용합니다.
          </dd>
        </dl>
        <dl class="qna-item">
          <dt><span class="icon">+</span> 키오스크를 사용하면 포인트를 적립할 수 있나요?</dt>
          <dd class="qua-item-cont">
            일반요금제의 경우 기본적인 요금적립률을 설정 할 수 있습니다.
            프리미엄 요금제의 경우에는 설정한 요일과 시간에 맞춰 포인트 적립률을 별도로 지정할 수 있습니다.
          </dd>
        </dl>
        <dl class="qna-item">
          <dt><span class="icon">+</span> 월 관리비는 어떻게 되나요?</dt>
          <dd class="qua-item-cont">
            키오스크 월 관리비는 33,000원 입니다.
          </dd>
        </dl>
        <dl class="qna-item">
          <dt><span class="icon">+</span> 프로그램 오류나 기기 고장이 있을때는 어떻게 조치되나요</dt>
          <dd class="qua-item-cont">구입 후 1년간 무상으로 A/S해드리며, 고객과실에 의한 A/S의 경우 유상으로 처리될 수 있습니다.</dd>
        </dl>
        <dl class="qna-item">
          <dt><span class="icon">+</span> 모든 장비에 설치가 가능한가요?</dt>
          <dd class="qua-item-cont">세탁기, 건조기 모델에 따라 다를 수 있습니다. 자세한 내용은 전화로 문의해주세요</dd>
        </dl>
        <dl class="qna-item">
          <dt><span class="icon">+</span> 매출기록은 어떻게 이루어 지나요?</dt>
          <dd class="qua-item-cont">업계 최초로 장비에 사용되는 동전매출에서부터 키오스크에 사용되는 카드결제, 현금결제까지 종합하여 매출이 기록되며 확인할 수 있습니다</dd>
        </dl>
        <dl class="qna-item">
          <dt><span class="icon">+</span> 설치시 소요시간 및 기간은 얼마나 걸리나요?</dt>
          <dd class="qua-item-cont">키오스크 설치예약  (7일~10일 설치예약 070-7807-6857) 키오스크 설치시간  (2-3 시간 소요되며, 작업환경에 따라 연장될 수 있습니다.)</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  mounted(){
    this.hideItem()
  },
  methods:{
    hideItem(){
      const items = document.querySelectorAll('.qna-item')
      
      items.forEach((item) => {
        const itemHead = item.children[0];
        item.style.height = itemHead.clientHeight + 'px'

        item.addEventListener('click', ()=>{
          let itemHt = item.children[1].clientHeight;
          let itemIcon = item.children[0].querySelector('.icon')

          if(!item.classList.contains('on')){
            item.classList.add('on')
            item.style.height = itemHead.clientHeight + itemHt + 'px';
            item.style.transition = 'height' + ' 0.3s';
            itemIcon.textContent = '-'
          }else{
            item.classList.remove('on');
            item.style.height = itemHead.clientHeight + 'px';
            itemIcon.textContent = '+'
          }
        })
      })
    }
  },
}
</script>

<style lang="stylesheet" src="./customer.scss" scoped/>
