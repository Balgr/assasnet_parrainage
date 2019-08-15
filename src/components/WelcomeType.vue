<template>
  <div class="type welcome-type" :id="idHtml">
    <div class="welcome" v-if="parrain === true">
      <div :class="'welcome-' + welcomeParrain.id">
        <img src="../assets/logo_assasnet.png" class="logo" />
        <h2 v-html="welcomeParrain.title"></h2>
        <div class="welcome-content" v-html="welcomeParrain.content"></div>
      </div>
      <div class="wrapper-button">
        <Button @click.native="fadeOutAndDisappear" msg="Commencer" />
      </div>
    </div>
    <div class="welcome" v-else-if="filleul === true">
      <div :class="'welcome-' + welcomeFilleul.id">
        <img src="../assets/logo_assasnet.png" class="logo" />
        <h2 v-html="welcomeFilleul.title"></h2>
        <div class="welcome-content" v-html="welcomeFilleul.content"></div>
      </div>
      <div class="wrapper-button">
        <Button @click.native="fadeOutAndDisappear" msg="Commencer" />
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store.js";
import Button from "./elements/Button.vue";

export default {
  name: "WelcomeType",
  computed: {
    questionsCounter: () => store.state.questionsCounter,
    idHtml: function() {
      return "type-" + this.$data.welcomeFilleul.id;
    },
    idNextQuestion: function() {
      var elem = $("#" + this.idHtml)
        .closest(".item")
        .next()
        .find(".type");
      return "#" + elem.attr("id");
    }
  },
  props: {
    parrain: Boolean,
    filleul: Boolean
  },
  data() {
    return {
      welcomeParrain: {
        id: "KSUE9c3ksj3",
        title: "Bienvenue sur le formulaire de parrainage d'Assas.net !",
        content:
          "<p>Répond à quelques questions, et nous t'attribuerons le/la filleul(e) qui te correspond ! Prêt.e ? C'est parti !</p><p>Note : les données que tu nous confies ne seront pas partagés avec des tiers sans ton autorisation, évidemment.</p>",
        type: "welcome"
      },
      welcomeFilleul: {
        id: "KSUE9c3ksj3",
        title: "Bienvenue sur le formulaire de parrainage d'Assas.net !",
        content:
          "<p>Répond à quelques questions, et nous t'attribuerons le parrain / la marraine qui te correspond ! Prêt.e ? C'est parti !</p><p>Note : les données que tu nous confies ne seront pas partagés avec des tiers sans ton autorisation, évidemment.</p>",
        type: "welcome"
      }
    };
  },
  methods: {
    fadeOutAndDisappear: function() {
      // On affiche le formulaire et le .gradientback, et on efface le WelcomeType
      $("#" + this.idHtml).fadeOut(700);
      $(".gradientback").fadeIn(700);
      $(".form-container").fadeIn(700);

      // On met le focus sur le premier input du formulaire
      setTimeout(function() {
        // eslint-disable-next-line no-undef
        $(this.idNextQuestion)
          .find("input")
          .focus();
      }, 700);
    }
  },
  components: {
    Button
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h2
  font-size: 3em
  width 50%
  line-height 1.1em
  margin auto

a
  color #42b983

.welcome-content
  margin-top 50px
  font-size 1.3em
  width 75%
  margin auto


.welcome-type
  margin: auto
  height: 100vh
  width: 100vw
  text-align: center
  display: flex;
  flex-direction: column;
  justify-content: center;

.welcome
  display: block

.welcome-titre
  text-align: center

.welcome-description
  margin-top: 10px
  font-size: 1.2em
  text-align: center

.welcome-description p
  margin-top: 10px

.welcome
  background: transparent
  border: none
  font-family: 'Karla', Helevetica, Arial, sans-serif
  color: white;

.logo
  width: 200px
  margin-bottom: 30px

@media screen and (max-width: 599px)
  h2
    width: 80%
    line-height 1.1em
    font-size: 1.5em
  .logo
    width: 150px
  .welcome-content
    font-size 1em


@media screen and (min-width: 600px) and (max-width: 767px)
  h2
    width: 100%
    line-height 1.1em
    font-size: 2em


@media screen and (min-width: 768px) and (max-width: 991px)
  h2
    width: 100%
    line-height 1.1em
    font-size: 2em

@media screen and (min-width: 992px) and (max-width: 1199px)
  h2
    width 75%

@media screen and (min-width: 1200px)
  h2
    width: 50%
</style>
