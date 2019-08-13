<template>
  <div class="home">
    <vue-scroll-snap :fullscreen="true">
      <div class="content">
        <div class="welcome-container">
          <WelcomeType />
        </div>
        <div class="form-container">
          <form action="" method="POST">
            <div
              class="item"
              v-for="question in questions.questions"
              :key="question.id"
            >
              <QuestionType v-bind:question="question" />
            </div>
            <Button class="item btn-submit" @click.native="submit" msg="Envoyer" />
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

export default {
  name: "filleul",
  computed: {
    questions: () => store.state.questions
  },
  methods: {
    submit: function() {
      console.log("submit");
      // On valide les différentes entrées du formulaire : si ça ne passe pas, on interrompt l'exécution sans rien envoyer et en prévenant l'utilisateur
      if (validerFormulaire() === true) {
        $(".gradientback").css("display", "none");
        $(".form-container").fadeOut();
        $(".thanks-container").fadeIn(500);
      }
      // Si ça passe, on fadeOut le formulaire et on affiche le .thanks-container à la place
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
.home
  height: 100vh
  width: 100vw
  display: flex
  justify-content: center
  align-items: center
  background-color: cyan

.content
  display: flex
  justify-content: flex-start
  flex-direction: column


.type
  display: flex
  justify-content: left
  align-items: center
  text-align: left;


/*.item
  height: 500px;*/

.scroll-snap-container
  height: 100%;
  width: 100%;

.btn-submit
  margin: auto
  margin-top 200px

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

.form-container
  display none
  margin-bottom 200px

.thanks-container
  display none
</style>
