<template>
  <div class="progress-bar">
    <div class="arrow" v-for="(step, index) in progressBar" :key="index">
        {{ step.value }}
    </div>
  </div>
</template>

<style lang="scss">
.progress-bar {
  width: 100%;
  height: 4em;
  background: #81d4fa;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.arrow {
  width: 33%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script lang="ts">

export default {
  props: {'initialProgressBar': {type: Object, default: null}},
  data() {
    return {
      progressBar: this.initialProgressBar
    }
  }
}
</script>
