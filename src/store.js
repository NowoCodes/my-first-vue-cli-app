import { Vue } from "vue";
import { Vuex } from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    month: 10,
    day: 13,
    year: 2019,
  },
  getters: {
    formattedDate(state) {
      return `${state.year} - ${state.month} - ${state.day}`;
    },
  },
  mutations: {
    INCREMENT_MONTH(state) {
      state.month++
    },
    INCREMENT_YEAR(state) {
      state.year++
      state.month = 1
    }
  },
  actions: {
    incrementMonth(context) {
      if (context.state.month +1 > 12) {
        context.commit('INCREMENT_year')
      } else {
        context.commit('INCREMENT_MONTH')
      }
    } 
  },
});
