<template>
  <div class="container">
    <div class="progress-bar">
      <div class="step" v-for="(step, index) in progressBar" :key="index" :class="index === 0 ? 'first' : ''">
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
      padding: 1em;
      border: 1px solid grey;
      border-radius: 10px;
    }

    .content.active {
      border: 1px solid #81d4fa;
    }
  }

}

.arrow.active {
  background: #81d4fa;
}
</style>

<script lang="ts">
export default {
  name: "ProgressBar",
  active: 0,
  props: {initialProgressBar: {type: Array, default: Array}},
  data(): any {
    return {
      progressBar: this.initialProgressBar,
      active: 0
    }
  },
  methods: {
  }
}
</script>
