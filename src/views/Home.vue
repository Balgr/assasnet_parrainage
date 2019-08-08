<template>
  <div class="home">
    <!--<QuestionType v-for="(question, key) in questions" :key="key" v-bind:question="question" />-->
    <QuestionType v-bind:question="questions[0]" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionType from "@/components/QuestionType.vue";

export default {
  name: "home",
  data() {
    return {
      questions: [
          {
          id: 1,
          question: "Question 1 ?",
          type: "string",
          reponseDonnee: ''
        },
        {
          id: 2,
          question: "Question 2 ?",
          type: "text",
          reponseDonnee: ''
        },
        {
          id: 3,
          question: "Question 3 ?",
          type: "multiple",
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
        },
        {
          id: 4,
          question: "Question 4 ?",
          type: "date",
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
      ]
    };
  },
  components: {
    QuestionType
  }
};
</script>

<style lang="stylus">
.home
  height: 100vh
  width: 100vw
  display: flex
  justify-content: center
  align-items: center
  margin: auto
  background : silver
</style>
