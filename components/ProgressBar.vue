<template>
  <div class="container">
    <div id="progressBarElement" class="progress-bar">
      <div v-for="(step, index) in progressBar" :key="index" :class="index === 0 ? 'first' : ''" class="step" @click="updateActive(index)">
        <div class="content" :class="active === index ? 'active' : ''">{{ step.value }}</div>
        <div v-if="index !== (progressBar.length - 1)" :class="active > index" class="line"></div>
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

    .line.active {
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

    .content.active {
      border: 1px solid #81d4fa;
    }
  }

}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

export interface ProgressBarModel {
  name: string,
  value: string
}

const ProgressBarProps = Vue.extend({
  props: {
    initialProgressBar: Array
  }
})

@Component
export default class ProgressBar extends ProgressBarProps {
  progressBar: Array<any> = this.initialProgressBar;
  active: number = 0;

  increaseActive(): number {
    return this.active++;
  };

  updateActive(index: number): number {
    this.active = (index < this.active) ? index : this.active;
    return this.active;
  }
}

</script>
