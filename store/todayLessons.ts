import {Module, Mutation, VuexModule} from 'vuex-module-decorators'

@Module({
  name: 'todaylessons',
  stateFactory: true,
  namespaced: true,
})
export default class TodayLessons extends VuexModule {
  active: number = 0;
  originalSentences: Array<string> = []
  translatedSentences: Array<string> = []


  @Mutation
  setActive(active: number) {
    this.active = active;
  }

  @Mutation
  decrement() {
    this.active--;
  }

  @Mutation
  increment() {
    this.active++;
  }

  @Mutation
  setOriginalSentences(sentences: any) {
    this.originalSentences = sentences;
  }

  @Mutation
  setTranslatedSentences(sentences: any) {
    this.translatedSentences = sentences;
  }


  get GetActive() {
    return this.active;
  }

  get OriginalSentences() {
    return this.originalSentences
  }

  get TranslatedSentences() {
    return this.translatedSentences
  }
}
