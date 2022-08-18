<template>
  <div class="notFound">
    <div class="inner">
      <h2>404</h2>
      <strong>현재 찾을 수 없는 페이지를 요청하셨습니다.</strong>
      <span>페이지의 주소가 잘못 입력되었거나, 주소가 변경혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.</span>
      <v-btn text @click="$router.push('/')">메인으로 돌아가기</v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notFound{
  .inner{
    padding:150px 20px;
    min-height:720px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align:center;
  }
  h2{
    font-family:'Roboto';
    font-size:15vw;
    line-height:1;
    margin-bottom:30px;
  }
  strong{
    display:block;
    font-size:24px;
  }
  span{
    display:block;
    font-size:16px;
    margin-top:10px;
    color:#898989;
  }
  .v-btn{
    margin-top:50px;
    height:50px;
    border-radius:5px;
    border:2px solid #292929;
    font-size:14px;
  }
}
</style>