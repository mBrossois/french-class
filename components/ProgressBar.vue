<template>
  <div class="container">
    <div id="progressBarElement" class="progress-bar">
      <div v-for="(step, index) in progressBar" :key="index" :class="index === 0 ? 'first' : ''" class="step" @click="updateActive(index)">
        <div data-test-id="progressbar-title" class="content" :class="{active: (active === index),  filled: (index < active) }">{{ step.value }}</div>
        <div data-test-id="progressbar-lines" v-if="index !== (progressBar.length - 1)" :class="{filled: (index < active)}" class="line"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.progress-bar {
  width: 80%;
  height: 4em;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .step.first {
    margin-left: 10%;
  }

  .step {
    display: flex;
    align-items: center;
    flex-grow: 1;


    .line {
      height: 2px;
      background: grey;
      flex-grow: 1;
    }

    .line.filled {
      background: #81d4fa;
    }

    .content {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 7em;
      padding: 1em;
      border: 1px solid grey;
      border-radius: 10px;
    }

    .content.filled {
      background: #81d4fa;
      border: 1px solid #81d4fa;
      color: white;
    }

    .content.active {
      border: 1px solid #81d4fa;
    }
  }

}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

const ProgressBarProps = Vue.extend({
  props: {
    initialProgressBar: Array
  }
})

@Component
export default class ProgressBar extends ProgressBarProps {
  progressBar: Array<any> = this.initialProgressBar;
  active: number = 0;

  mounted() {
    this.active = this.$store.getters['todayLessons/GetActive'] as number;
  }

  increaseActive(): number {
    return this.active++;
  };

  setActive() {
    this.active = this.$store.getters['todayLessons/GetActive'];
  }

  updateActive(index: number): number {
    this.active = this.$store.getters['todayLessons/GetActive'];
    this.active = (index < this.active) ? index : this.active;
    this.$store.commit('todayLessons/increment', this.active);
    return this.active;
  }
}

</script>
