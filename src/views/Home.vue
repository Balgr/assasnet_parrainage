<template>
  <div class="home">
    <div class="homepage">
      <vue-scroll-snap :fullscreen="true">
        <div class="content">
          <div class="logo-container">
            <img src="../assets/logo_assasnet.png" class="logo" />
          </div>
          <div class="parrainage-description">
            Le parrainage est une initiative de l'association Assas.net
            (première association de l'Université Paris-II Panthéon-Assas et
            fière de l'être) ! Le principe est simple : vous entrez en première
            année, dans le monde merveilleux et effrayant qu'est l'enseignement
            supérieur, et pire encore : dans cette filière macabre qu'est le
            droit (ou l'éco, ou l'AES, ou l'info-com, ou le management... vous
            avez saisi). <br />
            <br />
            Perdu, apeuré, vous remplissez notre formulaire en quelques minutes,
            et hop ! Nous vous mettons en relation avec le parrain qui vous
            correspond ! Le parrain est un étudiant de Paris-II, passé comme
            vous par l'antre de la première année, et qui pourra vous faire
            profiter de son expérience. L'occasion de rencontrer "un grand", qui
            pourra vous aider à vous reprérer dans la fac, à comprendre le
            système universitaire, et éventuellement à appréhender la discipline
            juridique. C'est gratuit et rapide : qu'attendez-vous ?
          </div>
          <div class="btn">
            <Button msg="Parrainer" @click.native="devenirParrain" />
            <Button msg="Être parrainé" @click.native="devenirFilleul" />
          </div>
        </div>
      </vue-scroll-snap>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from "@/components/elements/Button.vue";
import VueScrollSnap from "vue-scroll-snap";

export default {
  name: "home",
  computed: {},
  data() {
    return {};
  },
  methods: {
    devenirParrain: function() {
      $(".homepage").fadeOut(1000);
      setTimeout(() => {
        this.$router.push("parrain");
      }, 1000);
    },
    devenirFilleul: function() {
      $(".homepage").fadeOut(1000);
      setTimeout(() => {
        this.$router.push("filleul");
      }, 1000);
    }
  },
  components: {
    Button,
    VueScrollSnap
  }
};
</script>

<style scoped lang="stylus">
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
  align-items: center;
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
.btn
  width: 80%
  margin-top: 100px
  margin-bottom: 100px

.button
  display: inline-block
  width 90%
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
</style>
