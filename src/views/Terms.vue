<template>
  <div class="terms">
    <div class="inner">
      <h1>{{title}}</h1>
      <div class="cont" v-html="cont"></div> 
    </div>
  </div>
</template>

<script>
import docs from "@/assets/docs/terms.js";

export default {
  data(){
    return{
      title:'',
      cont:'',
    }
  },
  mounted(){
    this.show()
  },
  computed:{
    type(){
      return this.$route.params.type;
    }
  },
  watch:{
    type() {
      this.show();
    },
  },
  methods:{
    show() {
      switch (this.type) {
        case "person":
          this.title = "페이오티 개인정보 취급방침";
          break;
        case "service":
          this.title = "키오스크 서비스 이용약관";
          break;
      }
      this.cont = docs[this.type].replace(/\n/g, "<br />");
    },
  }
}
</script>

<style lang="scss" scoped>
.terms{
  padding:70px 0;

  h1{
    font-size:40px;
  }
  .cont{
    font-size:18px;
  }
}
</style>