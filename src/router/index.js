import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About.vue";
import Kiosk from "../views/Kiosk.vue";
import Shop from "../views/Shop.vue";
import Detail from "../views/Detail.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: ()=> import('@/views/home/home.vue'),
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/kiosk",
    name: "Kiosk",
    component: Kiosk,
    props: ({ query }) => query,
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop,
  },
  {
    path: "/detail",
    name: "detail",
    component: Detail,
  },
  {
    path:"/kiosk-detail",
    name:"kiosk-detail",
    component:()=> import('@/views/kioskDetail/kioskDetail.vue')
  },
  {
    path:"/kiosk-map",
    name:"kiosk-map",
    component:()=> import('@/views/kiosk-map/kiosk-map.vue')
  },
  {
    path:'/customer',
    name:'customer',
    component:()=> import('@/views/customer/customer.vue')
  },
  {
    path:'/smartpay',
    name:'smartpay',
    component:()=> import('@/views/smartpay/smartpay.vue')
  },
  {
    path:'/member',
    name:'member',
    component:()=> import('@/views/member/member.vue')
  },
  {
    path:'/terms/:type',
    name:'terms',
    component:()=> import('@/views/Terms.vue')
  },
  {
    path:"/404",
    name:'notFound',
    component:()=> import('@/views/NotFound.vue')
  },
  {
    path:"/*",
    redirect: '/404',
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(){
    return {x:0, y:0}
  }
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location){
  return originalPush.call(this, location).catch(err => {
    if(err.name !== 'NavigationDuplicated') throw err;
  })
}

export default router;
