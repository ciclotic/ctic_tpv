// initial state
const state = {
  terminal: null
}

// getters
const getters = {
  terminal: (state) => {
    return state.terminal
  }
}

// actions
const actions = {
  setTerminal ({ commit }, terminal) {
    commit('postTerminal', terminal)
  }
}

// mutations
const mutations = {
  postTerminal (state, terminal) {
    state.terminal = terminal
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
