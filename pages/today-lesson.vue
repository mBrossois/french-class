<template>
  <div class="page-body">
    <div class="model">
      <progress-bar :initial-progress-bar="progressBar"></progress-bar>
      <p>Hello?</p>
    </div>
  </div>
</template>

<style lang="scss">
.model {
  width: 50em;
  height: 50em;
}
</style>

<script lang="ts">
import Vue from 'vue'
import ProgressBar from "~/components/ProgressBar.vue";

const progressBar = [{name: 'enter', value: 'Enter learned'}, {name: 'correction', value: 'Correction'}, {name: 'result', value: "The results"}];

export default Vue.extend({
  components: {ProgressBar},
  data() {
    return {
      progressBar
    };
  },
})
</script>
