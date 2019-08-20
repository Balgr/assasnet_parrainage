<template>
  <div class="home">
    <div class="content">
      <div class="component">
        <component
          :is="composantActuel"
          @formulaire-envoye="afficherRemerciements"
          @click-form-parrain="devenirParrain"
          @click-form-filleul="devenirFilleul"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from "@/components/elements/Button.vue";
import ParrainageExplications from "@/views/ParrainageExplications.vue";
import Parrain from "@/views/Parrain.vue";
import Filleul from "@/views/Filleul.vue";
import ThanksType from "@/components/ThanksType.vue";
import VueScrollSnap from "vue-scroll-snap";

export default {
  name: "home",
  computed: {},
  data() {
    return {
      composantActuel: "ParrainageExplications"
    };
  },
  methods: {
    devenirParrain: function() {
      this.$data.composantActuel = "Parrain";
      this.$store.commit({
        type: "chargerQuestions",
        formType: "parrain"
      });
      $(".btn").remove();
    },
    devenirFilleul: function() {
      this.$data.composantActuel = "Filleul";
      this.$store.commit({
        type: "chargerQuestions",
        formType: "filleul"
      });
      $("#devenir-parrain").remove();
      $("#devenir-filleul").remove();
    },
    afficherRemerciements: function() {
      this.$data.composantActuel = "ThanksType";
    }
  },
  components: {
    Button,
    VueScrollSnap,
    ParrainageExplications,
    Parrain,
    Filleul,
    ThanksType
  }
};
</script>

<style lang="stylus">
@import url("https://fonts.googleapis.com/css?family=Karla&display=swap");
.home
  height: 100%
  display: flex
  justify-content: center
  align-items: center
  background-color: #042a5f
  line-height: 1.8em

.content
  display: flex
  justify-content: flex-start
  flex-direction: column
  padding: 0;
  margin: 0;
  justify-content: center;

.welcome-description p
  margin-top: 10px


.home
  border: none
  font-family: 'Karla', Helevetica, Arial, sans-serif
  color: white;

.logo
  width: 200px
  margin-bottom: 100px

.parrainage-description
  width: 80%
  margin: auto
  font-size: 1.2em;

.

.btn
  position: fixed;
  bottom: 80px;
  width: 95%;
  margin auto;


.button
  display: inline-block
  margin auto
  margin-bottom: 25px;
  margin-top: 25px;

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

/**
 *****************************
 * FILLEUL et PARRAIN Styles *
 *****************************
 */
</style>
