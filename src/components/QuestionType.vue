<template>
  <div class="type anchor-offset question-type" :id="idHtml">
    <div :class="'question question-' + question.id">
      <label :for="question.id" v-html="question.question"></label>
      <br />
    </div>

    <!-- Si la question appelle un Choix multiple comme réponse -->
    <div v-if="question.type === 'multiple'" class="reponse">
      <div
        v-for="reponse in question.reponses"
        :key="reponse.id"
        class="radiobtn"
      >
        <input
          type="radio"
          :required="question.obligatoire"
          :name="question.id"
          :value="reponse.reponse"
          :id="'rps-' + question.id + '-' + reponse.id"
          class="input-choices"
          @change="scrollToNextQuestion()"
          v-on:keyup.enter="scrollToNextQuestion()"
          @input="updateAnswer"
        />
        <label
          :for="'rps-' + question.id + '-' + reponse.id"
          class="label-choices"
          >{{ reponse.reponse }}</label
        >
      </div>
    </div>

    <!-- Si la question appelle une Date comme réponse -->
    <div v-else-if="question.type === 'date'" class="reponse">
      <input
        type="date"
        :name="question.id"
        class="input-date"
        :required="question.obligatoire"
        v-on:keyup.enter="scrollToNextQuestion()"
        @input="updateAnswer"
      />
    </div>

    <!-- Si la question appelle un StringInput comme réponse -->
    <div
      v-else-if="question.type === 'string'"
      class="reponse"
      :required="question.obligatoire"
      :type="question.format"
    >
      <input
        :type="type"
        :name="question.id"
        class="input-string"
        placeholder="Entrez une réponse puis appuyez sur Entrée..."
        v-on:keyup.enter="scrollToNextQuestion()"
        :required="question.obligatoire"
        @input="updateAnswer"
      />
    </div>

    <!-- Si la question appelle un TextInput comme réponse -->
    <div v-else-if="question.type === 'text'" class="reponse">
      <div class="textarea-container">
        <textarea
          :name="question.id"
          :required="question.obligatoire"
          rows="5"
          cols="50"
          placeholder="Entrez une réponse..."
          class="input-text"
          @input="updateAnswer"
        ></textarea>
        <div class="textarea-size"></div>
      </div>
    </div>

    <!-- Si la question appelle un Confirmation comme réponse -->
    <div v-else-if="question.type === 'confirmation'" class="reponse">
      <div class="confirmation-message"></div>
      <div class="confirmation-reponses">
        <Button
          v-for="(reponse, idx) in question.reponses"
          :key="idx"
          class="input-string"
          :msg="reponse.text"
          v-on:keyup.enter="scrollToNextQuestion()"
          @click="updateAnswer"
        />
      </div>
    </div>

    <!-- SINON : ERREUR -->
    <div v-else>
      <p>Erreur. Veuillez contacter l'administrateur.</p>
    </div>
  </div>
</template>

<script>
import store from "../store.js";
import Button from "./elements/Button.vue";

export default {
  name: "QuestionType",
  computed: {
    type: function() {
      if(typeof this.$props.question.format !== 'undefined') return this.$props.question.format
      return "text";
    },
    idHtml: function() {
      return "type-" + this.$props.question.id;
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
    question: Object
  },
  data() {
    return {};
  },
  methods: {
    updateAnswer(e) {
      this.$props.question.reponseDonnee = e.target.value;
      this.$store.commit({
        type: "updateAnswer",
        reponseDonnee: e.target.value,
        id: this.$props.question.id
      });
    },
    scrollToNextQuestion: function() {
      //let target = $(this.idNextQuestion);
      //if (target.length) {
      //  $("html, body")
      //  .stop()
      //  .animate({ scrollTop: target.offset().top }, 1500);
      //}
      window.location.href = this.idNextQuestion;
      if ($(this.idNextQuestion).find("input")[0] !== "undefined") {
        $(this.idNextQuestion).find("input")[0].focus();
      }
    }
  },
  components: {
    Button
  }
};

/**
 * ,
  mounted: {
    autogrowTextarea: function() {
      // AUTO-GROWING TEXTAREA
      var textContainer, textareaSize, input;
      var autoSize = function() {
        // also can use textContent or innerText
        textareaSize.innerHTML = input.value + "\n";
      };

      document.addEventListener("DOMContentLoaded", function() {
        textContainer = document.querySelector(".textarea-container");
        textareaSize = textContainer.querySelector(".textarea-size");
        input = textContainer.querySelector("textarea");

        autoSize();
        input.addEventListener("input", autoSize);
      });
    }
  },
 */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">

.question, .reponse
  width: 100%
  max-width: 700px

.type
  align-items: center
  display: flex
  justify-content: center
  flex-direction: column
  text-align: left
  margin-left: 200px
  margin-right: auto
  padding-top: 100px

.question-type
  height: 500px
  width: 50%


.question, .arrow
  font-size: 1.5em
  margin-bottom 20px


input[type="date"], input[type="text"], input[type="email"], input[type="tel"], textarea
  background: transparent
  border: none
  border-bottom: solid 1px gray
  padding-left: 5px
  font-family: 'Karla', Helevetica, Artial, sans-serif
  color: #2c3e50;
  font-size: 1.2em
  outline: none;
  max-width: 500px
  width: 100%

input[type="date"], input[type="text"]
  height: 40px

textarea
  overflow-y auto
  border-left solid 1px gray

.confirmation-reponses
  width: auto
  display: flex
  justify-content: center
  margin: auto



// Auto-growing <textarea>
.textarea-container
  position: relative
  width: 50%

textarea, .textarea-size {
  //min-height: 25px;
  box-sizing: border-box;
  padding: 4px;
  overflow: hidden;
  width: 100%;
}

textarea {
  //height: 100%;
  position: absolute;
  //resize:none;
  white-space: normal;
}

.textarea-size {
  visibility: hidden;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;
}
</style>
