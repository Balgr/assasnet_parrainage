<template>
    <div class="type question-type">
        <div class="question"><label :for="question.id">{{question.question}}</label><br></div>      
           
        <!-- Si la question appelle un Choix multiple comme réponse -->
        <div v-if="question.type === 'multiple'" class="reponse">
            <div v-for="reponse in question.reponses" :key="reponse.id" >
              <input type="radio" :name="question.id" :value="reponse.reponse" :id="'rps-' + question.id + '-' + reponse.id" class="input-choices" v-on:keyup.enter="questionsIncrement">
              <label :for="'rps-' + question.id + '-' + reponse.id" class="label-choices">{{reponse.reponse}}</label>
            </div>
        </div>

                <!-- Si la question appelle une Date comme réponse -->
        <div v-else-if="question.type === 'date'" class="reponse">
          <input type="date" :name="question.id" class="input-date" v-on:keyup.enter="questionsIncrement">
        </div>

        <!-- Si la question appelle un StringInput comme réponse -->
        <div v-else-if="question.type === 'string'" class="reponse" :pattern="question.pattern">
          <input type="text" :name="question.id" class="input-string" v-on:keyup.enter="questionsIncrement">
        </div>

        <!-- Si la question appelle un TextInput comme réponse -->
        <div v-else-if="question.type === 'text'" class="reponse">
          <textarea :name="question.id" class="input-text"></textarea>
        </div>

        <!-- SINON : ERREUR -->
        <div v-else>
          <p>Erreur. Veuillez contacter l'administrateur.</p>
        </div>

        <div class="arrow arrow-submit" v-on:click="questionsDecrement">←    -  </div>
        <div class="arrow arrow-previous" v-on:click="questionsIncrement">     →</div>
    </div>
</template>

<script>
import store from '../store.js'

export default {
  name: "QuestionType",
  props: {
    question: Object
  },
  data() {
      return {
          
      };
  },
  methods: {
    submit: function(event) {
      console.log('Clicked');
    },
    questionsIncrement: () => store.commit('questionsIncrement'),
    questionsDecrement: () => store.commit('questionsDecrement')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

a
  color #42b983

.type
  display: flex
  justify-content: center
  align-items: center
  width: 50%
  margin: auto

.question, .reponse, .arrow
  display: block
  float: left

.question, .arrow
  font-size: 3em

input[type="date"], input[type="text"]
  background: transparent
  border: none
  border-bottom: solid 1px gray
  font-family: 'Avenir', Helevetica, Artial, sans-serif
  color: #2c3e50;
  font-size: 3em


</style>
