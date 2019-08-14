import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questionsCounter: 0,
    questionsParrain: Array,
    questionsFilleul: Array
  },
  mutations: {
    /*loadData(state, payload) {
      console.log("./assets/json/questions_" + payload.form + ".json");
      state.questions = require("./assets/json/questions_" + payload.form + ".json");
      console.log(state.questions);
    },*/
    updateAnswerParrain(state, payload) {
      /*var question = state.questions.find(function(element) {
        return element.id === payload.id;
      });
      question.reponseDonnee = payload.reponseDonnee;*/
      state.questionsParrain.questions.forEach(el => {
        if (el.id === payload.id) {
          el.reponseDonnee = payload.reponseDonnee;
          if (el.type === "multiple") {
            if (typeof el.scoreObtenu !== "undefined") {
              el.scoreObtenu = el.reponses.find(function(reponse) {
                return reponse.reponse === el.reponseDonnee;
              }).score;
            }
            //} else if (el.coefficientObtenu !== 'undefined') {
            if (typeof el.coefficientObtenu !== "undefined") {
              el.coefficientObtenu = el.reponses.find(function(reponse) {
                return reponse.reponse === el.reponseDonnee;
              }).coefficient;
            }
          }
        }
      });
    },
    updateAnswerFilleul(state, payload) {
      /*var question = state.questions.find(function(element) {
        return element.id === payload.id;
      });
      question.reponseDonnee = payload.reponseDonnee;*/
      state.questionsFilleul.questions.forEach(el => {
        if (el.id === payload.id) {
          el.reponseDonnee = payload.reponseDonnee;
          if (el.type === "multiple") {
            if (typeof el.scoreObtenu !== "undefined") {
              el.scoreObtenu = el.reponses.find(function(reponse) {
                return reponse.reponse === el.reponseDonnee;
              }).score;
            }
            //} else if (el.coefficientObtenu !== 'undefined') {
            if (typeof el.coefficientObtenu !== "undefined") {
              el.coefficientObtenu = el.reponses.find(function(reponse) {
                return reponse.reponse === el.reponseDonnee;
              }).coefficient;
            }
          }
        }
      });
    },
    updateErrorsParrain(state, payload) {
      state.questionsParrain.questions.forEach(el => {
        if (el.id === payload.id) el.erreurs.push(payload.erreur);
      });
    },
    updateErrorsFilleul(state, payload) {
      state.questionsFilleul.questions.forEach(el => {
        if (el.id === payload.id) el.erreurs.push(payload.erreur);
      });
    },
    resetErrorsForAllQuestionsParrain(state, payload) {
      state.questionsParrain.questions.forEach((el, id) => {
        el.erreurs = [];
      });
    },
    resetErrorsForAllQuestionsFilleul(state, payload) {
      state.questionsFilleul.questions.forEach((el, id) => {
        el.erreurs = [];
      });
    }
  },
  actions: {}
});
