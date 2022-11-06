import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/resume",
    name: "Resume",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Resume.vue");
    },
  }, {
    path: "/portifolio",
    name: "Portifolio",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Portifolio.vue");
    },
  }, {
    path: "/contact",
    name: "Contact",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Contact.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
