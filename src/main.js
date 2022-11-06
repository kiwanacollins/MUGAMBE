import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// styles
// import "./index.css";



import "./js/vendor/jquary.min.js";
import "./js/vendor/slick.js";
import "./js/main.js";
Vue.config.productionTip = false;

 // On page load or when changing themes, best to add inline in `head` to avoid FOUC
 if (localStorage.getItem("color-theme") == "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}


new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
