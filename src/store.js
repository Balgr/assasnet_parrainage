import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questionsCounter: 0
  },
  mutations: {
    questionsIncrement(state) {
      // Just add one to questionsCounter
      state.questionsCounter++;
      console.log('Incremented');
    },
    questionsDecrement(state) {
      // Just remove one from questionsCounter
      state.questionsCounter--;
      console.log('Decremented');
    }
  },
  actions: {}
});
