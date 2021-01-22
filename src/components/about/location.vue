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
              <dd>부산광역시 강서구 미음산단5로41번길 71 부산글로벌테크비즈센터 310호</dd>
            </dl>
            <dl>
              <dt>지번주소</dt>
              <dd>부산광역시 강서구 범방동 1164-1 부산글로벌테크비즈센터 310호</dd>
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
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.7824984376257!2d128.86506401554104!3d35.16204476587678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3568c51c580a2e6d%3A0xa7f3cbbb3e4b489e!2z67aA7IKw6riA66Gc67KM7YWM7YGs67mE7KaI7IS87YSw!5e0!3m2!1sko!2skr!4v1610935619562!5m2!1sko!2skr" 
          frameborder="0"
          allowfullscreen="" 
          aria-hidden="false" 
          tabindex="0">
        </iframe>
      </div>
      
    </div>
  </div>
</template>

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