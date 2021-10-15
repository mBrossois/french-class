import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'Todaylessons',
  stateFactory: true,
  namespaced: true,
})
export default class TodayLessons extends VuexModule {
  active: number = 2;

  @Mutation
  setActive(active: number) {
    this.active = active;
  }

  get activeLesson() {
    return this.active;
  }
}
