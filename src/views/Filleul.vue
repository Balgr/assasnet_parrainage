<template>
  <div class="filleul">
    <loading :show="showLoadingOverlay" label="Veuillez patienter..."></loading>
    <vue-scroll-snap :fullscreen="true">
      <div class="container">
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
              <ul>
                <li v-for="(erreur, key) in erreurs" :key="key">
                  {{ erreur }}
                </li>
              </ul>
              <Button class="btn-submit" @click.native="submit" msg="Envoyer" />
            </div>
          </form>
        </div>
        <div class="thanks-container">
          <ThanksType />
        </div>
      </div>
    </vue-scroll-snap>
  </div>
</template>

<script>
// @ is an alias to /src
import VueScrollSnap from "vue-scroll-snap";
import QuestionType from "@/components/QuestionType.vue";
import ThanksType from "@/components/ThanksType.vue";
import Button from "@/components/elements/Button.vue";
import loading from "vue-full-loading";

import store from "@/store.js";
import HTTP from "@/http-common.js";

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
      coefficient: 1,
      showLoadingOverlay: false
    };
  },
  methods: {
    submit: function() {
      // On affiche l'écran de chargement pour éviter le clic sauvage
      this.$data.showLoadingOverlay = true;
      // On valide les différentes entrées du formulaire : si ça ne passe pas, on interrompt l'exécution sans rien envoyer et en prévenant l'utilisateur
      if (this.validerFormulaire() === true) {
        this.craftPostRequest();

        let $this = this;
        HTTP.post("filleuls", this.$data.postBody)
          .then(response => {
            if (
              response.request.status > 200 &&
              response.request.status < 300
            ) {
              this.$data.showLoadingOverlay = false;
              this.$emit("formulaire-envoye");
              $(".gradientback").css("display", "none");
              $(".form-container").fadeOut();
              $(".thanks-container").fadeIn(500);
            }
          })
          .catch(function(error) {
            $this.$data.erreurs.push(error.response.data["hydra:description"]);
            this.$data.showLoadingOverlay = false;

            $("html, body, .form-container").animate(
              { scrollTop: $(document).height() },
              "slow"
            );
          });
      }
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
            question.reponses.filter(r => r.value === question.reponseDonnee)
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
      obj["centre"] = this.questions.find(
        el => el.id === "KZ78yq7BTS"
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
    Button,
    loading
  },
  created: function() {}
};
</script>

<style lang="stylus">
 @import url("https://fonts.googleapis.com/css?family=Karla&display=swap");


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
  height: 300px;

.scroll-snap-container
  height: 100%;
  width: 100%;

.btn-submit
  margin: auto
  margin-top 300px

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
