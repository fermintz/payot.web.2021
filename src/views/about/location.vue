<template>
  <div class="location-wrap">
    <div class="inner">
      <div class="section-title">
        <h4>회사정보</h4>
      </div>
      <div class="company-info">
        <v-row>
          <v-col cols="12" md="6">
            <dl>
              <dt>회사명</dt>
              <dd>(주)페이오티</dd>
            </dl>
            <dl>
              <dt>대표이사</dt>
              <dd>차경진</dd>
            </dl>
            <dl>
              <dt>도로명주소</dt>
              <dd>부산광역시 강서구 체육공원로26번길 148</dd>
            </dl>
            <dl>
              <dt>지번주소</dt>
              <dd>부산광역시 강서구 대저1동 2304-3</dd>
            </dl>
          </v-col>
          <v-col cols="12" md="6">
            <dl>
              <dt>전화번호</dt>
              <dd>070-7807-6857</dd>
            </dl>
            <dl>
              <dt>펙스</dt>
              <dd>0504-433-6857</dd>
            </dl><dl>
              <dt>이메일</dt>
              <dd>cs.payot@gmail.com</dd>
            </dl>
          </v-col>
        </v-row>
        
        
      </div>
      <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1370.5928037637327!2d128.98017192909208!3d35.21051822131504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568c006e1f566d9%3A0xb07a06e94450e0e7!2s2304-3%20Daejeo%201(il)-dong%2C%20Gangseo-gu%2C%20Busan!5e0!3m2!1sen!2skr!4v1625710334270!5m2!1sen!2skr" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
      
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
.location-wrap{
  display:flex;
  justify-content: center;
  width:100%;
  padding-bottom:90px;

  .inner{
    width:100%;
    max-width:1280px;
    padding:0 10px;
  }

  .section-title{
    text-align:left;
    border-bottom:1px solid #e2e2e2;
    padding-bottom:20px;
  }

  .company-info{
    margin:40px 0;

    dl{
      display:flex;
      
      margin-bottom:20px;
      dt{
        width:100px;
        flex-shrink: 0;
        color:#888;
      }
      dd{
        color:#292929
      }
    }
  }

  .map{
    border-radius:15px;
    overflow: hidden;
    iframe{
      width:100%;
      max-width:100%;
      min-width:100%;
      height:560px;
    }
  }
}
</style>