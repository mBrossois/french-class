<template>
  <div class="page-body">
    <div class="model">
      <progress-bar :initial-progress-bar="progressBar"></progress-bar>
      <div class="model exercise">
        <ui-textfield v-model="originalSentences" input-type="textarea" required rows="8" cols="40" >
          Enter the sentence you learned
        </ui-textfield>
        <ui-textfield v-model="translatedSentences" input-type="textarea" required rows="8" cols="40">
          Enter the translation
        </ui-textfield>
      </div>
      <div class="buttons">
        <ui-button outlined>Previous</ui-button>
        <ui-button @click="goToNextPage()" raised>Next</ui-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.model {
  display: grid;
  grid-template-rows: 5em 1fr 3em;

  width: 50em;
  height: 50em;

}

.model.exercise {
  display: flex;
  justify-content: center;
  width: 40em;
  height: 40em;

  justify-self: center;
}

.buttons {
  display: flex;
  justify-content: space-around;
}
</style>

<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component";

import ProgressBar from "~/components/ProgressBar.vue";

@Component({
  components: {
    ProgressBar,
  }
})
export default class TodayLesson extends Vue {
  originalSentences: Array<String> = [];
  translatedSentences: Array<String> = [];
  active: number = 0;

  progressBar = [{name: 'enter', value: 'Enter learned'}, {name: 'correction', value: 'Correction'}, {name: 'result', value: "The results"}];

  getActive() {
    console.log(this.active);
    this.active =  this.$store.getters["activeLessons"];
  }

  public increment() {
    this.$store.dispatch('modules/counter/increment', 1)
  }

  public decrement() {
    this.$store.dispatch('modules/counter/decrement', 1)
  }

  goToNextPage() {
    this.getActive();
    console.log(this.active);
    // return
  }
}
// export default Vue.extend({
//   components: {ProgressBar},
//   data() {
//     return {
//       progressBar,
//       originalSentences: [],
//       translatedSentences: []
//     };
//   },
//   methods: {
//     goToNextPage() {
//       // return
//     }
//   }
// })
</script>
