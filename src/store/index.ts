import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: ['yjing', 'zhangcai', 'yangzile'],
    filterValue: '',
  },
  mutations: {
    addCustomItem(state, item) {
      state.items.push(item);
    },
    deleteCustomItem(state) {
      state.items.pop();
    },
    setCustomFilterValue(state, value) {
      state.filterValue = value;
    }
  },
  actions: {},
  modules: {},
});
