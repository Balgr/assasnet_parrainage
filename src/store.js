import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questionsCounter: 0,
    questions: Array
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
    },
    updateAnswer(state, payload) {
      /*var question = state.questions.find(function(element) {
        return element.id === payload.id;
      });
      question.reponseDonnee = payload.reponseDonnee;*/
      state.questions.questions.forEach((el, id) => {
        if (el.id === payload.id) el.reponseDonnee = payload.reponseDonnee;
      })
    }
  },
  actions: {}
});
