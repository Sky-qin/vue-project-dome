import Vue from "vue";
import mint from "mint-ui";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import "mint-ui/lib/style.css";

Vue.config.productionTip = false;

Vue.use(mint);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
