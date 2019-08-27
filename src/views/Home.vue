<template>
  <div class="home">
    <div class="content">
      <component
        :is="composantActuel"
        @formulaire-envoye="afficherRemerciements"
        @click-form-parrain="devenirParrain"
        @click-form-filleul="devenirFilleul"
      />
    </div>
    <div class="gradientback"></div>
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
  justify-content: center
  align-items: center
  line-height: 1.8em
  border: none
  font-family: 'Karla', Helevetica, Arial, sans-serif
  color: white;
  background-color: #042a5f

.content
  display flex
  height 100%
  width 100%
  background-color: #042a5f

.gradientback
  position fixed;
  bottom:0px;
  //left:0px;
  width:100%;
  height:60%;
  background: -moz-linear-gradient(top,  rgba(137,255,241,0) 0%, rgba(0,0,0,0.5) 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(137,255,241,0)), color-stop(100%,rgba(0,0,0,0.5)));
  background: -webkit-linear-gradient(top,  rgba(137,255,241,0) 0%,rgba(0,0,0,0.5) 100%);
  background: -o-linear-gradient(top,  rgba(137,255,241,0) 0%,rgba(0,0,0,0.5) 100%);
  background: -ms-linear-gradient(top,  rgba(137,255,241,0) 0%,rgba(0,0,0,0.5) 100%);
  background: linear-gradient(to bottom,  rgba(137,255,241,0) 0%,rgba(0,0,0,0.5) 100%);
  pointer-events: none;
</style>
