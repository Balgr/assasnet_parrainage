import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueScrollTo from "vue-scrollto";
import JQuery from "jquery";
import vueSmoothScroll from "vue2-smooth-scroll";
import axios from "axios";

window.$ = JQuery;
Vue.config.productionTip = false;

Vue.use(VueScrollTo, {
  container: ".home",
  offset: -90
});
Vue.use(vueSmoothScroll);
Vue.use(axios);

new Vue({
  router,
  store,
  created: function() {
    store.state.questionsFilleul = require("./assets/json/questions_filleul.json");
    store.state.questionsParrain = require("./assets/json/questions_parrain.json");
  },
  render: h => h(App)
}).$mount("#app");

/* // AUTO-GROWING TEXTAREA
var textContainer, textareaSize, input;
var autoSize = function () {
  // also can use textContent or innerText
  textareaSize.innerHTML = input.value + '\n';
};

document.addEventListener('DOMContentLoaded', function() {
  textContainer = document.querySelector('.textarea-container');
  textareaSize = textContainer.querySelector('.textarea-size');
  input = textContainer.querySelector('textarea');

  autoSize();
  input.addEventListener('input', autoSize);
}); */