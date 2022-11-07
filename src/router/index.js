import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Resume from "@/views/Resume.vue";
import Portifolio from "@/views/Portifolio.vue";
import Contact from "@/views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/resume",
    component: Resume,
  }, {
    path: "/mywork",
    component: Portifolio,
  }, {
    path: "/contact",
    component:Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
