<template>
  <div class="type welcome-type" :id="idHtml">
    <div :class="'welcome welcome-' + welcome.id">
      <img src="../assets/logo_assasnet.png" class="logo" />
      <h2 v-html="welcome.title"></h2>
      <div class="welcome-content" v-html="welcome.content"></div>
    </div>
    <div class="wrapper-button">
      <Button @click.native="fadeOutAndDisappear" msg="Commencer" />
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
      return "type-" + this.$data.welcome.id;
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

},
  data() {
    return {
      welcome: {
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
  font-size: 1.6em
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
  color: #2c3e50;

.logo
  width: 200px
  margin-bottom: 30px
</style>
