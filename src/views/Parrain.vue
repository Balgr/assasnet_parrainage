<template>
  <div class="home">
    <vue-scroll-snap :fullscreen="true">
      <div class="content">
        <div class="welcome-container">
          <WelcomeType :parrain="true" :filleul="false" />
        </div>
        <div class="form-container">
          <div class="item item-logo">
            <img src="../assets/logo_assasnet.png" class="logo" />
          </div>
          <form action="" method="POST">
            <div
              class="item"
              v-for="question in questions.questions"
              :key="question.id"
            >
              <QuestionType v-bind:question="question" :parrain="true" :filleul="false"  />
            </div>
            <div class="item item-submit">
              <Button class="btn-submit" @click.native="submit" msg="Envoyer" />
              <ul>
                <li v-for="(erreur, key) in erreurs" :key="key">
                  {{ erreur }}
                </li>
              </ul>
            </div>
          </form>
        </div>
        <div class="thanks-container">
          <ThanksType />
        </div>
      </div>
    </vue-scroll-snap>
    <!--<QuestionType v-for="(question, key) in questions" :key="key" v-bind:question="question" />
    <QuestionType v-bind:question="questions[0]" />
    <WelcomeType />-->
    <div class="gradientback"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import VueScrollSnap from "vue-scroll-snap";
import QuestionType from "@/components/QuestionType.vue";
import WelcomeType from "@/components/WelcomeType.vue";
import ThanksType from "@/components/ThanksType.vue";
import Button from "@/components/elements/Button.vue";

import store from "../store.js";
import { HTTP } from "../http-common.js";

export default {
  name: "parrain",
  computed: {
    questions: () => store.state.questionsParrain
  },
  data() {
    return {
      postBody: '',
      erreurs: [],
      score: 50,
      coefficient: 1
    };
  },
  methods: {
    submit: function() {
      // On valide les différentes entrées du formulaire : si ça ne passe pas, on interrompt l'exécution sans rien envoyer et en prévenant l'utilisateur
      if (this.validerFormulaire() === true) {
        this.craftPostRequest();

        HTTP.post("parrains", {
          body: this.$data.postBody
        })
          .then(response => { })
          .catch(e => { });

        // Si on reçoit une réponse 201 de l'API, on affiche le message de remerciement.
        $(".gradientback").css("display", "none");
        $(".form-container").fadeOut();
        $(".thanks-container").fadeIn(500);

        // Sinon, on affiche une erreur.
      } else {

}
      // Si ça passe, on fadeOut le formulaire et on affiche le .thanks-container à la place
    },
    validerFormulaire() {
      // On efface toutes les erreurs précédentes
      this.$data.erreurs = [];
      this.$store.commit({
        type: "resetErrorsForAllQuestionsParrain"
      });

      this.questions.questions.forEach(function(question) {
        // On vérifie que la question a été répondue (si elle est obligatoire)
        if (question.obligatoire === true && question.reponseDonnee === "") {
          this.$store.commit({
            type: "updateErrorsParrain",
            erreur: "Cette question est obligatoire.",
            id: question.id
          });
          if (this.$data.erreurs.length === 0) {
            this.$data.erreurs.push(
              "Le formulaire n'est pas valide. Veuillez corriger les erreurs."
            );
          }
        }
        // On vérifie que le pattern de la réponse est correct
        else if (
          question.pattern != "" &&
          RegExp(question.pattern).test(question.reponseDonnee) !== true
        ) {
          this.$store.commit({
            type: "updateErrorsParrain",
            erreur: "Le format de la réponse est incorrect.",
            id: question.id
          });
          if (this.$data.erreurs.length === 0) {
            this.$data.erreurs.push(
              "Le formulaire n'est pas valide. Veuillez corriger les erreurs."
            );
          }
        }
        // Si la question propose des choix multiples, on vérifie que la réponse donnée est bien l'un des choix proposés et pas autre chose
        if (question.type === "multiple" && question.reponseDonnee !== "") {
          if (
            question.reponses.filter(r => r.reponse === question.reponseDonnee)
              .length == 0
          ) {
            this.$store.commit({
              type: "updateErrorsParrain",
              erreur: "Veuillez sélectionner une réponse existante",
              id: question.id
            });
            if (this.$data.erreurs.length === 0) {
              this.$data.erreurs.push(
                "Le formulaire n'est pas valide. Veuillez corriger les erreurs."
              );
            }
          }
        }
      }, this);

      if (this.$data.erreurs.length === 0) {
        return true;
      }
      return false;
    },
    craftPostRequest: function() {
      let obj = {};
      obj["nom"] = this.questions.questions.find(
        el => el.id === "Efz8gtn6z9"
      ).reponseDonnee;
      obj["prenom"] = this.questions.questions.find(
        el => el.id === "P3Oigxjazq"
      ).reponseDonnee;
      obj["email"] = this.questions.questions.find(
        el => el.id === "5OKjkE49MS"
      ).reponseDonnee;
      obj["nomFacebook"] = this.questions.questions.find(
        el => el.id === "jgskTRIlwL"
      ).reponseDonnee;
      obj["telephone"] = this.questions.questions.find(
        el => el.id === "D15UFZLwFq"
      ).reponseDonnee;
      obj["discipline"] = this.questions.questions.find(
        el => el.id === "uBo0agUKn6"
      ).reponseDonnee;
      obj["anneeActuelle"] = this.questions.questions.find(
        el => el.id === "kc1qjzOXfe"
      ).reponseDonnee;
      obj["equipeL1"] = this.questions.questions.find(
        el => el.id === "t0mP0MWg22"
      ).reponseDonnee;
      obj["commentairesSpeciaux"] = this.questions.questions.find(
        el => el.id === "H8wpHwdeZk"
      ).reponseDonnee;
      //obj["dateInscription"] = new Date().toString();
      obj["dateInscription"] = "2019-08-06T13:02:47+02:00";
      obj["reponses"] = ["test"];

      // On calcule le score avec le coefficient, et on l'ajoute au tableau
      this.questions.questions.forEach(function(q) {
        if (typeof q.scoreObtenu !== "undefined") {
          this.$data.score += q.scoreObtenu;
        } else if (typeof q.coefficientObtenu !== "undefined") {
          this.$data.coefficient = q.coefficientObtenu;
        }
      }, this);

      obj["score"] = this.$data.score * this.$data.coefficient;

      this.$data.postBody = JSON.stringify(obj);
    }
  },
  components: {
    VueScrollSnap,
    QuestionType,
    WelcomeType,
    ThanksType,
    Button
  }
};
</script>

<style lang="stylus">
@import url("https://fonts.googleapis.com/css?family=Karla&display=swap");

.home
  height: 100vh
  width: 100vw
  display: flex
  justify-content: center
  align-items: center
  background-color: cyan
  line-height: 1.8em

.content
  display: flex
  justify-content: flex-start
  flex-direction: column

.type
  display: flex
  justify-content: left
  align-items: center
  text-align: left;

.item
  height: 400px;

.scroll-snap-container
  height: 100%;
  width: 100%;

.btn-submit
  margin: auto
  margin-top 300px

.gradientback
  position:absolute;
  bottom:0px;
  left:0px;
  width:100%;
  height:60%;
  background: -moz-linear-gradient(top,  rgba(137,255,241,0) 0%, rgba(0,0,0,0.5) 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(137,255,241,0)), color-stop(100%,rgba(0,0,0,0.5)));
  background: -webkit-linear-gradient(top,  rgba(137,255,241,0) 0%,rgba(0,0,0,0.5) 100%);
  background: -o-linear-gradient(top,  rgba(137,255,241,0) 0%,rgba(0,0,0,0.5) 100%);
  background: -ms-linear-gradient(top,  rgba(137,255,241,0) 0%,rgba(0,0,0,0.5) 100%);
  background: linear-gradient(to bottom,  rgba(137,255,241,0) 0%,rgba(0,0,0,0.5) 100%);
  pointer-events: none;
  display none // Ne s'affiche pas avec le WelcomeType ni le ThanksType

.item-submit
  height: 300px

.form-container
  display none
  margin-bottom 200px

.thanks-container
  display none

.item-logo
  margin-bottom -200px

.logo
  width: 200px
  padding-top 100px

@media screen and (max-width: 599px)
  .logo
    width: 150px
</style>
