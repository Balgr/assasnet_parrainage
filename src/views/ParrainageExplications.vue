<template>
  <div class="explications-container">
    <div class="logo-container">
      <img src="../assets/logo_assasnet.png" class="logo" />
    </div>
    <div class="parrainage-description">
      Le parrainage est une initiative de l'association Assas.net (première
      association de l'Université Paris-II Panthéon-Assas et fière de l'être) !
      Le principe est simple : vous entrez en première année, dans le monde
      merveilleux et effrayant qu'est l'enseignement supérieur, et pire encore :
      dans cette filière macabre qu'est le droit (ou l'éco, ou l'AES, ou
      l'info-com, ou le management... vous avez saisi). <br />
      <br />
      Perdu, apeuré, vous remplissez notre formulaire en quelques minutes, et
      hop ! Nous vous mettons en relation avec le parrain qui vous correspond !
      Le parrain est un étudiant de Paris-II, passé comme vous par l'antre de la
      première année, et qui pourra vous faire profiter de son expérience.
      L'occasion de rencontrer "un grand", qui pourra vous aider à vous reprérer
      dans la fac, à comprendre le système universitaire, et éventuellement à
      appréhender la discipline juridique. C'est gratuit et rapide :
      qu'attendez-vous ?
    </div>
    <div class="btn">
      <Button
        msg="Parrainer"
        id="devenir-parrain"
        @click.native="$emit('click-form-parrain')"
      />
      <Button
        msg="Être parrainé"
        id="devenir-filleul"
        @click.native="$emit('click-form-filleul')"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VueScrollSnap from "vue-scroll-snap";
import Button from "@/components/elements/Button.vue";

export default {
  name: "ParrainageExplications",
  computed: {},
  data() {
    return {};
  },
  methods: {},
  components: {
    VueScrollSnap,
    Button
  }
};
</script>

<style scoped lang="stylus">

.explications-container
  margin auto
  display: flex
  justify-content: flex-start
  flex-direction: column
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;

.parrainage-description
  width: 80%
  margin: auto
  font-size: 1.2em;

.btn
  width: 80%
  margin-top: 100px
  margin-bottom: 100px

.button
  display: inline-block
  width 90%
  margin auto
  margin-bottom: 25px;
</style>
