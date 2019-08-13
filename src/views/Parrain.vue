<template>
  <div class="home">
    <vue-scroll-snap>
      <div class="content">
        <form action="" method="POST">
          <div
            class="item"
            v-for="question in questions.questions"
            :key="question.id"
          >
            <WelcomeType
              v-if="question.type === 'welcome'"
              v-bind:welcome="question"
            />
            <QuestionType v-else v-bind:question="question" />
          </div>
        </form>
      </div>
    </vue-scroll-snap>
    <!--<QuestionType v-for="(question, key) in questions" :key="key" v-bind:question="question" />
    <QuestionType v-bind:question="questions[0]" />
    <WelcomeType />-->
    <div class="gradientback"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import VueScrollSnap from "vue-scroll-snap";
import QuestionType from "@/components/QuestionType.vue";
import WelcomeType from "@/components/WelcomeType.vue";

import store from "../store.js";

export default {
  name: "home",
  computed: {
    questions: () => store.state.questions
  },
  components: {
    VueScrollSnap,
    QuestionType,
    WelcomeType
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
  background-color: cyan

.content
  display: flex
  justify-content: flex-start
  flex-direction: column


.type
  display: flex
  justify-content: left
  align-items: center
  text-align: left;


/*.item
  height: 500px;*/

.scroll-snap-container
  height: 100%;
  width: 100%;

.gradientback
  position:absolute;
  bottom:0px;
  left:0px;
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
