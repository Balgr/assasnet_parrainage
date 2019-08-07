<template>
    <div class="type checkbox-type">
        <div class="question"><label :for="question.id">{{question.question}}</label></div>
            <!-- Si la question appelle un Choix multiple comme réponse -->
            <div v-if="question.type === 'multipleChoices'"  class="reponse">
                <input type="radio" v-for="{reponse, key} in question.reponses" :key="reponse.id" :name="question.id" :value="reponse.reponse" :id="'rps-' + question.id + '-' + reponse.id" ><label :for="'rps-' + question.id + '-' + reponse.id">{{reponse.reponse}}</label>
            </div>

           
            <!-- Si la question appelle une Date comme réponse -->
            <div v-else-if="question.type === 'date'" class="reponse">
              <input type="date" :name="question.id">
            </div>
    </div>
</template>

<script>
export default {
  name: "QuestionType",
  data() {
      return {
          question: {
              id: 1,
              question: "Question ?",
              type: "multipleChoices",
              reponseDonnee: '',
              reponses: [
                  { 
                      id : 1,
                      reponse: "Réponse 1"
                  },  
                  { 
                      id : 2,
                      reponse: "Réponse 2"
                  },
                  { 
                      id : 3,
                      reponse: "Réponse 3"
                  },
              ]
          }
      };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
