<template>
  <div class="app" data-app>
    <Drawer ref="drawer" />
    <Header @child="drawer"/>
    <router-view/>
    <Footer />
    <Side />
  </div>
</template>
<script>

import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import Side from '@/components/side.vue';
import Drawer from '@/components/drawer.vue';
export default {
  name: "App",
  components:{
    Header,Footer, Side, Drawer
  },
  methods:{
    drawer(value){
      this.$refs.drawer.open(value);
    }
  }
};
</script>
