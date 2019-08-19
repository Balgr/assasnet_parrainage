import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questionsCounter: 0,
    questions: Array
  },
  mutations: {
    /*loadData(state, payload) {
      state.questions = require("./assets/json/questions_" + payload.form + ".json");
    },*/
    updateAnswer(state, payload) {
      /*var question = state.questions.find(function(element) {
        return element.id === payload.id;
      });
      question.reponseDonnee = payload.reponseDonnee;*/

      state.questions.forEach(el => {
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

        if (typeof el.conditions !== "undefined") {
          el.conditions.forEach(element => {
            if (
              state.questions.find(function(q) {
                return q.id === element.answerToQuestionId;
              }).reponseDonnee === element.reponseDonnee
            ) {
              el.conditionRemplie = true;
            } else {
              el.conditionRemplie = false;
            }
          });
        }
      });
    },
    updateErrors(state, payload) {
      state.questions.forEach(el => {
        if (el.id === payload.id) el.erreurs.push(payload.erreur);
      });
    },
    resetErrorsForAllQuestions(state, payload) {
      state.questions.forEach((el, id) => {
        el.erreurs = [];
      });
    }
  },
  actions: {}
});
