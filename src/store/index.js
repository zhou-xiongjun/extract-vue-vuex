import Vue from 'vue'
import Vuex from '../vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 10,
    a: 1
  },
  getters: {
    getCount: function (state) {
      return 1 + state.count
    }
  },
  mutations: {
    addCount(state, payload) {
      state.count += payload
    }
  },
  actions: {
    actionsAA({ commit }, payload) {
      setTimeout(() => {
        commit("addCount", payload)
      }, 1000)
    },
    actionsA({ commit, dispatch }, payload) {
      setTimeout(() => {
        commit("addCount", payload)
        dispatch("actionsAA", 1)
      }, 1000)
    }
  },
  
})
