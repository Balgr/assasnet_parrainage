import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questionsCounter: 0,
    questions: Array
  },
  mutations: {
    updateAnswer(state, payload) {
      /*var question = state.questions.find(function(element) {
        return element.id === payload.id;
      });
      question.reponseDonnee = payload.reponseDonnee;*/
      state.questions.questions.forEach((el, id) => {
        if (el.id === payload.id) el.reponseDonnee = payload.reponseDonnee;
      });
    },
    updateErrors(state, payload) {
      state.questions.questions.forEach((el, id) => {
        if (el.id === payload.id) el.erreurs.push(payload.erreur);
      });
    },
    resetErrorsForAllQuestions(state, payload) {
      state.questions.questions.forEach((el, id) => {
        el.erreurs = [];
      });
    }
  },
  actions: {}
});
