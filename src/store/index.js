import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      filtred: null,
      
    };
  },
  mutations: {
    filtred(state, payload) {
      state.filtred = payload;
    },
  },

  actions: {
    filtred(context, payload) {
      context.commit("filtred", payload);
    },
  },
  getters: {
    filtred(state) {
      return state.filtred;
    },
  },
  modules: {},
});
