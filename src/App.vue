<template>
  <div class="app">
    <Header />
    <router-view/>
    <Footer />
    <Side />
  </div>
</template>
<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import Side from '@/components/side.vue';

export default {
  name: "App",
  components:{
    Header,Footer, Side
  },
  data: () => ({
    //
  })
};
</script>
