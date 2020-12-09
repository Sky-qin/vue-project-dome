/**
 * Created by Administrator on 2016/11/5.
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    wall: {
      count: 1,
    },
  },
  getters: {
    wall: (state) => state.wall,
  },
  mutations: {
    handleChangeCount(state, count) {
      state.wall.count = count;
    },
  },
  actions: {},
});

export default store;
