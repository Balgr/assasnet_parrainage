<template>
  <div class="home">
    <div class="not-found">
      <div class="not-found-title">
        <h2>Erreur 404</h2>
      </div>
      <div class="not-found-message">
        Cette page n'existe pas.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  computed: {},
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="stylus">
h2
  font-size 2em
</style>
