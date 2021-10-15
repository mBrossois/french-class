<template>
  <div class="page">
    <Header/>
    <nuxt/>
  </div>
</template>

<style lang="scss">
  .page {
    display: grid;
    grid-template-rows: 70px 1fr;

    height: 100%;
  }
</style>

<script lang="ts">
import Vue from "vue";
import Header from "~/components/Header.vue";

export default Vue.extend({
  components: {Header},
  data() {
    return {
      Header,
    };
  },
})
</script>
