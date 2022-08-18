<template>
  <div class="footer">
    <div class="inner">
      <div class="top">
        <div class="logo">
          <img src="@/assets/img/logo_b.png">
        </div>
        <div class="footer-nav">
          <span @click="$router.push('/terms/person')">개인정보 취급방침</span>
          <span @click="$router.push('/terms/service')">서비스 이용약관</span>
          <span @click="adminLink">무인매장 관리시스템</span>
          <span @click="$router.push('member')">가맹점안내</span>
        </div>
      </div>

      <div class="infomation">
        <div class="company">
          <ul>
            <li>
              <span>
                <b>(주)페이오티</b>
              </span>
              <span>
                <b>대표</b> 차경진
              </span>
            </li>
            <li>
              <span>
                <b>사업자등록번호</b> 599-81-00659
              </span>
              <span>
                <b>통신판매업 신고번호</b> 2021-부산강서구-0877 
              </span>
            </li>
            <li><span><b>주소</b> 부산광역시 강서구 대저1동 2304-3</span></li>
            <li>
              <span><b>이메일</b> cs.payot@gmail.com</span>
              <span><b>팩스</b> 0504-433-6857</span>
            </li>
            <li>
              <span>COPYRIGHT (C) PAYOT ALL RIGHTS RESERVED</span>
            </li>
          </ul>
        </div>
        <div class="customer">
          <label>고객센터</label>
          <strong>070.7807.6857</strong>
          <span>평일 10:00 ~ 17:00</span>
          <span>점심 12:30 ~ 14:00</span>
        </div>
      </div>    
    </div>
    <Terms ref="terms"/>
  </div>
</template>

<script>
export default {
  methods:{

    adminLink(){
      window.open('http://www.coin-machine.com','_new')
    }
  }
};
</script>

<style lang="scss" scoped>
.footer{
  border-top:1px solid #e2e2e2;

  .inner{
    width:100%;
    max-width:1200px;
    margin:0 auto;
  }

  .top{
    display:flex;
    align-items: center;
    justify-content: space-between;

    height:100%;
    padding:40px 0px 0px 20px;


    .logo{
      margin-right:70px;
      img{
        height:36px;
        filter:grayscale(1)
      }
    }

    .footer-nav{
      display:flex;
      align-items: center;
      gap:10px;
      
      span{
        display:flex;
        align-items: center;
        padding:0 15px;
        font-size:13px;
        background:#f2f2f2;
        height:30px;
        border-radius:15px;
        font-weight:bold;
        cursor: pointer;

        &:hover{
          background:#eaeaea;
        }
      }
    }
  }

  
  

  .infomation{
    padding:20px 20px 80px 20px;
    display:flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .company{
    ul{
      display:flex;
      flex-direction: column;
      gap:4px;
      li{
        span{
          font-size:13px;
          margin-right:15px;
          &:last-child{
            margin-right:0;
          }
          b{
            font-weight:200;
          }
        }
      }
    }
  }
  
  .customer{
    text-align:right;
    label{
      display:block;
      font-size:13px;
    }
    strong{
      display:block;
      font-size:24px;
      margin:10px 0 5px 0;
    }
    span{
      color:#898989;
      display:block;
      font-size:13px;
    }
  }
}

@media screen and (max-width:900px){
  .footer{
    font-size:12px;

    .top{
      width:100%;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      overflow:hidden;

      .logo{
        margin-bottom:30px;
      }
      .footer-nav{

        flex-wrap: nowrap;
        overflow-x:scroll;

        span{
          flex:none;
        }

        &::-webkit-scrollbar{
          display:none;
        }
      }
    }

    .infomation{
      flex-direction: column-reverse;
      align-items: flex-start;

      .customer{
        width:100%;
        text-align:left;
        margin-bottom:20px;
        padding-bottom:20px;
        border-bottom:1px solid #e2e2e2;
        
        strong{
          font-size:18px;
          margin:5px 0 5px 0;;
        }
      }
    }
  }
}

</style>