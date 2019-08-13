<template>
  <div class="type thanks-type" :id="idHtml">
    <div :class="'thanks thanks-' + thanks.id">
      <h2 v-html="thanks.title"></h2>
      <div class="thanks-content" v-html="thanks.content"></div>
    </div>
    <div class="wrapper-button">
      <Button @click.native="redirectToFacebook" msg="Emmenez-moi" />
    </div>
  </div>
</template>

<script>
import store from "../store.js";
import Button from "./elements/Button.vue";

export default {
  name: "ThanksType",
  data: function() {
    return {
      thanks: {
        id: "99rsvZG1yS",
        title: "Merci !",
        content:
          "<p>Merci pour tout !</p><p>Nous avons pris ta demande en compte (tu devrais recevoir un mail de confirmation sous peu), et te recontacterons très vite pour te communiquer l'identité de ton parrain / ta marraine.</p>",
        type: "thanks"
      }
    };
  },
  computed: {
    idHtml: function() {
      return "type-" + this.$data.thanks.id;
    }
  },
  methods: {
    redirectToFacebook: function(event) {
      window.location.href = "http://facebook.fr/OfficielAssas.net";
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

.thanks-content
  margin-top 50px
  font-size 1.3em
  width 75%
  margin auto


.thanks-type
  margin: auto
  height: 100vh
  width: 100vw
  text-align: center
  display: flex;
  flex-direction: column;
  justify-content: center;

.thanks
  display: block

.thanks-titre
  font-size: 1.6em
  text-align: center

.thanks-description
  margin-top: 10px
  font-size: 1.2em
  text-align: center

.thanks-description p
  margin-top: 10px

.thanks
  background: transparent
  border: none
  font-family: 'Avenir', Helevetica, Arial, sans-serif
  color: #2c3e50;
</style>
