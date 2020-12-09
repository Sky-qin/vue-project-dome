import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../view/home.vue";
import List from "../view/list.vue";
import Detail from "../view/detail.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
      alias: "/",
    },
    {
      path: "/list",
      name: "list",
      component: List,
    },
    {
      path: "/detail",
      name: "detail",
      component: Detail,
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});

export default router;
