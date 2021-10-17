<template>
  <div class="model exercise">
    <ui-textfield v-model="originalSentences" @keyup="setOriginalSentences()" input-type="textarea" required rows="8" cols="40">
      Enter the sentence you learned
    </ui-textfield>
    <ui-textfield v-model="translatedSentences" @keyup="setTranslatedSentences()" input-type="textarea" required rows="8" cols="40">
      Enter the translation
    </ui-textfield>
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
</style>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";

@Component
export default class ExerciseOne extends Vue {
  originalSentences: Array<String> = [];
  translatedSentences: Array<String> = [];

  mounted() {
    this.originalSentences = this.$store.getters['todayLessons/OriginalSentences'];
    this.translatedSentences = this.$store.getters['todayLessons/TranslatedSentences'];
  }

  setOriginalSentences() {
    this.$store.commit('todayLessons/setOriginalSentences', this.originalSentences);
    console.log(this.$store.getters['todayLessons/OriginalSentences']);
  }

  setTranslatedSentences() {
    this.$store.commit('todayLessons/setTranslatedSentences', this.translatedSentences);
  }
}

</script>
