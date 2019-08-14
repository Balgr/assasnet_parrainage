import Vue from "vue";
import Router from "vue-router";
import Parrain from "./views/Parrain.vue";
import Filleul from "./views/Filleul.vue";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/parrain",
      name: "parrain",
      component: Parrain
    },
    {
      path: "/filleul",
      name: "filleul",
      component: Filleul
    }
  ]
});
