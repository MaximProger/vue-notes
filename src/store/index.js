import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showModal: false,
  },
  mutations: {
    OPEN_MODAL(state) {
      state.showModal = true;
    },
    CLOSE_MODAL(state) {
      state.showModal = false;
    },
  },
  actions: {
    OPEN_TO_MODAL({ commit }) {
      commit("OPEN_MODAL");
    },
    CLOSE_TO_MODAL({ commit }) {
      commit("CLOSE_MODAL");
    },
  },
  modules: {},
});
