<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <QuestionType />
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionType from "@/components/QuestionType.vue";

export default {
  name: "home",
  components: {
    QuestionType
  }
};
</script>
