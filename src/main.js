import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// styles
// import "./index.css";
import "./css/vendor/slick.css";
import "./css/custom.css";


import "./js/vendor/jquary.min.js";
import "./js/vendor/slick.js";
import "./js/main.js";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
