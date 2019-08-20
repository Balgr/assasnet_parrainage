import Vue from "vue";
import Router from "vue-router";
import Parrain from "./views/Parrain.vue";
import Filleul from "./views/Filleul.vue";
import Home from "./views/Home.vue";
import NotFound from "./views/NotFound.vue";

import store from "./store.js";

Vue.use(Router);

const router = new Router({
  //mode: "history",
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
    },
    {
      path: "/404",
      name: "404",
      component: NotFound
    },
    {
      path: "*",
      redirect: "404"
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.name == "parrain")) {
    let json = require("./assets/json/questions_parrain.json");
    store.state.questions = json.questions;
    next();
  } else if (to.matched.some(record => record.name == "filleul")) {
    let json = require("./assets/json/questions_filleul.json");
    store.state.questions = json.questions;
    next();
  } else {
    next();
  }
});

export default router;
