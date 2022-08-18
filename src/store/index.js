import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    invisibleCheckTime: null,
  },
  mutations: {
    SET_ALERT_MODAL_VISIBLE(state, value) {
      state.invisibleCheckTime = value;
    }
  },
  actions: {},
  modules: {},
});
