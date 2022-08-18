<template>
  <div class="app" data-app>
    <Drawer ref="drawer" />
    <Header @child="drawer"/>
    <SideBanner />
    <div class="container">
      <router-view/>
    </div>
    <Footer />

  </div>
</template>
<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

import Drawer from '@/components/drawer.vue';
import SideBanner from '@/components/sideBanner.vue';

export default {
  name: "App",
  components:{
    Header,Footer, Drawer, SideBanner
  },
  methods:{
    drawer(value){
      this.$refs.drawer.open(value);
    }
  }
};
</script>

<style lang="scss" scoped>
.container{
  padding:0;
  margin:0;
  max-width:unset;
}
</style>
