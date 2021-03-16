import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/test",
    component: require("../pages/layouts/Test.vue").default,
  },
];

const router = new VueRouter({
  mode: "history",
  linkActiveClass: 'active',
  
  routes,
});

export default router;
