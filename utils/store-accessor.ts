import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import TodayLessons from '~/store/today-lessons'

let todaylessonsStore: TodayLessons

function initialiseStores(store: Store<any>): void {
  todaylessonsStore = getModule(TodayLessons, store)
}

export { initialiseStores, todaylessonsStore }
