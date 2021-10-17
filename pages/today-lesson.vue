<template>
  <div class="page-body">
    <div class="model">
      <progress-bar ref="progressBarChild" :initial-progress-bar="progressBar"></progress-bar>
      <exercise-one v-if="active === 0" ref="exerciseOneChild" data-test-id="exercise-one"></exercise-one>
      <div class="buttons">
        <ui-button outlined @click="goToPreviousPage()">Previous</ui-button>
        <ui-button raised @click="goToNextPage()" data-test-id="button-next-today-lesson">Next</ui-button>
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

.buttons {
  display: flex;
  justify-content: space-around;
}
</style>

<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component";

import ProgressBar from "~/components/ProgressBar.vue";
import ExerciseOne from "~/components/ExerciseOne.vue";

@Component({
  components: {
    ProgressBar,
    ExerciseOne
  }
})
export default class TodayLesson extends Vue {
  active: number = 0;

  progressBar = [{name: 'enter', value: 'Enter learned'}, {name: 'correction', value: 'Correction'}, {
    name: 'result',
    value: "The results"
  }];

  $refs!: {
    progressBarChild: HTMLFormElement
  }

  mounted() {
    this.active = this.$store.getters['todayLessons/GetActive'] as number;
  }

  getActive() {
    this.active = this.$store.getters['todayLessons/GetActive'];
      this.$refs.progressBarChild.setActive();
  }

  goToPreviousPage() {
    this.$store.commit('todayLessons/decrement')
    this.getActive();
  }

  goToNextPage() {
    this.$store.commit('todayLessons/increment');
    this.getActive();
  }
}

</script>
