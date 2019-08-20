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
      state.questions.forEach(questionDansBoucle => {
        if (questionDansBoucle.id === payload.id) {
          questionDansBoucle.reponseDonnee = payload.reponseDonnee;
          if (questionDansBoucle.type === "multiple") {
            if (typeof questionDansBoucle.scoreObtenu !== "undefined") {
              questionDansBoucle.scoreObtenu = questionDansBoucle.reponses.find(function(reponse) {
                return reponse.reponse === questionDansBoucle.reponseDonnee;
              }).score;
            }
            if (typeof questionDansBoucle.coefficientObtenu !== "undefined") {
              questionDansBoucle.coefficientObtenu = questionDansBoucle.reponses.find(function(reponse) {
                return reponse.reponse === questionDansBoucle.reponseDonnee;
              }).coefficient;
            }
          }
        }

        if (typeof questionDansBoucle.conditions !== "undefined") {
          for(let condition of questionDansBoucle.conditions) {
            let questionToMonitor = state.questions.find(function(el) {
              return condition.answerToQuestionId === el.id;
            });

            if(typeof questionToMonitor !== 'undefined' && questionToMonitor.reponseDonnee === condition.isEqualTo) {
              questionDansBoucle.conditionRemplie = true;
              questionDansBoucle.obligatoire = true;
              break;
            } else {
              questionDansBoucle.conditionRemplie = false;
              questionDansBoucle.obligatoire = false;
            }
            //break;
          }
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
    },
    chargerQuestions(state, payload) {
      let q = require("./assets/json/questions_" + payload.formType + ".json");
      state.questions = q.questions;
    }
  },
  actions: {}
});
