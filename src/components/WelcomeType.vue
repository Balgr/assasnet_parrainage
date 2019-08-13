<template>
  <div class="type welcome-type" :id="idHtml">
    <div :class="'welcome welcome-' + welcome.id">
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
      return "type-" + this.$props.welcome.id;
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
    welcome: Object
  },
  data() {
    return {
      
    };
  },
  methods: {
    submit: function(event) {
      console.log("Clicked");
    },
    scrollToNextQuestion: function() {
      window.location.href = this.idNextQuestion;
      $(this.idNextQuestion)
        .find("input")[0]
        .focus();
    },
    fadeOutAndDisappear: function() {
      console.log("#" + this.idHtml + ".fadeOut(1000)");
      $("#" + this.idHtml).fadeOut(500);
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
  font-family: 'Avenir', Helevetica, Arial, sans-serif
  color: #2c3e50;
</style>
