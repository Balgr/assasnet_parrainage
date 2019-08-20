<template>
  <div class="filleul">
    <vue-scroll-snap :fullscreen="true">
      <div class="content">
        <div class="form-container">
          <div class="item item-logo">
            <img src="../assets/logo_assasnet.png" class="logo" />
          </div>
          <form action="" method="POST">
            <div
              class="question-container"
              v-for="question in questions"
              :key="question.id"
              v-if="
                typeof question.conditionRemplie === 'undefined' ||
                  question.conditionRemplie
              "
            >
              <QuestionType v-bind:question="question" />
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
    <div class="gradientback"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import VueScrollSnap from "vue-scroll-snap";
import QuestionType from "@/components/QuestionType.vue";
import ThanksType from "@/components/ThanksType.vue";
import Button from "@/components/elements/Button.vue";

import store from "../store.js";
import HTTP from "../http-common.js";

export default {
  name: "filleul",
  computed: {
    questions: () => store.state.questions
  },
  data() {
    return {
      postBody: "",
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

        //console.log(this.$data.postBody);

        HTTP.post("filleuls", this.$data.postBody)
          .then(response => {
            this.$emit('formulaire-envoye');
          })
          .catch(e => {
            if (e.response) {
              this.$data.erreurs.push(
                "Une erreur s'est produite lors de l'envoi des données au serveur. Veuillez contacter le webmaster (webmaster@assas.net).<br>Erreur " +
                  e.response.status
              );
            } else {
              this.$data.erreurs.push(
                "Une erreur inconnue s'est produite. Veuillez contacter le webmaster (webmaster@assas.net).<br>" +
                  e.message
              );
            }
          });

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
        type: "resetErrorsForAllQuestions"
      });

      this.questions.forEach(function(question) {
        // On vérifie que la question a été répondue (si elle est obligatoire)
        if (question.obligatoire === true && question.reponseDonnee === "") {
          this.$store.commit({
            type: "updateErrors",
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
            type: "updateErrors",
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
              type: "updateErrors",
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
      obj["nom"] = this.questions.find(
        el => el.id === "Efz8gtn6z9"
      ).reponseDonnee;
      obj["prenom"] = this.questions.find(
        el => el.id === "P3Oigxjazq"
      ).reponseDonnee;
      obj["email"] = this.questions.find(
        el => el.id === "5OKjkE49MS"
      ).reponseDonnee;
      obj["nomFacebook"] = this.questions.find(
        el => el.id === "jgskTRIlwL"
      ).reponseDonnee;
      obj["telephone"] = this.questions.find(
        el => el.id === "D15UFZLwFq"
      ).reponseDonnee;
      obj["discipline"] = this.questions.find(
        el => el.id === "uBo0agUKn6"
      ).reponseDonnee;
      obj["anneeActuelle"] = this.questions.find(
        el => el.id === "kc1qjzOXfe"
      ).reponseDonnee;

      // Si l'étudiant est en L1
      if (obj["anneeActuelle"] === "Licence 1") {
        obj["equipeL1"] = this.questions.find(
          el => el.id === "bjQ9feAUk8"
        ).reponseDonnee;
        obj["equipeL2"] = "";
        obj["equipeL3"] = "";
      }

      // SI l'étudiant est en L2
      else if (obj["anneeActuelle"] === "Licence 2") {
        obj["equipeL1"] = this.questions.find(
          el => el.id === "a5y74UnxtV"
        ).reponseDonnee;
        obj["equipeL2"] = this.questions.find(
          el => el.id === "QUYbdmORrh"
        ).reponseDonnee;
        obj["equipeL3"] = "";
      }

      // Si l'étudiant est en L3
      else if (obj["anneeActuelle"] === "Licence 3") {
        obj["equipeL1"] = this.questions.find(
          el => el.id === "a5y74UnxtV"
        ).reponseDonnee;
        obj["equipeL2"] = this.questions.find(
          el => el.id === "WQG0VSFJaR"
        ).reponseDonnee;
        obj["equipeL3"] = this.questions.find(
          el => el.id === "xiR5jbH2wy"
        ).reponseDonnee;
      }

      // Si l'étudiant est en M1
      else {
        obj["equipeL1"] = this.questions.find(
          el => el.id === "a5y74UnxtV"
        ).reponseDonnee;
        obj["equipeL2"] = this.questions.find(
          el => el.id === "WQG0VSFJaR"
        ).reponseDonnee;
        obj["equipeL3"] = this.questions.find(
          el => el.id === "N9AiOZ5BuI"
        ).reponseDonnee;
      }

      obj["commentairesSpeciaux"] = this.questions.find(
        el => el.id === "H8wpHwdeZk"
      ).reponseDonnee;

      obj["reponses"] = [];

      // On calcule le score avec le coefficient, et on l'ajoute au tableau
      this.questions.forEach(function(q) {
        // On calcule le score et le coefficient
        if (typeof q.scoreObtenu !== "undefined") {
          this.$data.score += q.scoreObtenu;
        } else if (typeof q.coefficientObtenu !== "undefined") {
          this.$data.coefficient = q.coefficientObtenu;
        }

        // On en profite pour récupérer la liste des réponses de l'utilisateur,
        // qu'on envoie avec le JSON
        if (q.type === "multiple") {
          obj["reponses"].push(q.reponseDonnee);
        }
      }, this);

      obj["score"] = Math.round(this.$data.score * this.$data.coefficient);

      this.$data.postBody = JSON.stringify(obj);
    }
  },
  components: {
    VueScrollSnap,
    QuestionType,
    ThanksType,
    Button
  },
  created: function() {
    //console.log("Loaded filleul");
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
  background-color: #042a5f
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

.item-submit
  height: 300px

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
