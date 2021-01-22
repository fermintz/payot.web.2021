<template>
  <div class="footer">
    
    <div class="footer-nav">
      <div class="inner">
      <ul>
        <li>개인정보 취급방침</li>
        <li>무인매장 관리시스템</li>
      </ul>
      </div>
    </div>
    <div class="footer-info">
      <div class="inner">
        <v-row>
          <v-col cols="12" md="2">
            <div class="logo">
              <img src="@/assets/img/logo_b.png">
            </div>
          </v-col>  
          <v-col cols="12" md="10">
            <ul class="company">
              <li class="name">(주)페이오티</li>
              <li class="address"><b>주소</b> 부산 강서구 미음산단5로41번길 71 부산글로벌테크비즈센터 310호 페이오티</li>
              <li class="company_number"><b>사업자등록번호</b> 599-81-00659</li> 
              <li class="email"><b>이메일</b> cs.payot@gmail.com</li>
              <li class="bell"><b>전화</b> 070-7807-6857</li>
              <li class="fax"><b>팩스</b> 0504-433-6857</li>
              <li class="copyright">COPYRIGHT (C) PAYOT ALL RIGHTS RESERVED</li>
            </ul>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer{
  border-top:1px solid #c2c2c2;

  .inner{
    width:1280px;
  }

  .footer-nav{
    display:flex;
    justify-content: center;
    align-items: center;;
    height:50px;
    border-bottom:1px solid #e2e2e2;
    ul{
      display:flex;
      align-items: center;
      li{
        margin-right:40px;
      }
    }
  }

  .footer-info{
    display:flex;
    justify-content: center;
    padding:30px 0 60px 0;

    

    .logo{
      img{height:45px;}
    }

    .inner{
      display:flex;
      justify-content: space-between;
    }

    li{
      display:inline-block;
      margin-right:12px;
      line-height:21px;
      margin-bottom:3px;
      b{font-weight:500;}
    }
    li.name{display:block;margin-bottom:10px;}
    li.address{display:block;}
    li.copyright{display:block;}
    
  }
  
  
}
</style>