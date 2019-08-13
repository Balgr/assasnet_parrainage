import Vue from "vue";
import Router from "vue-router";
import Parrain from "./views/Parrain.vue";
import Filleul from "./views/Filleul.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/parrain",
      name: "parrain",
      component: Parrain
    },
    {
      path: "/filleul",
      name: "filleul",
      component: Filleul
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
