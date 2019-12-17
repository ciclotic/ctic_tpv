// initial state
const state = {
  user: null,
  token: null,
  username: null,
  password: null
}

// getters
const getters = {
  user: (state) => {
    return state.user
  },

  token: (state) => {
    return state.token
  },

  username: (state) => {
    return state.username
  },

  password: (state) => {
    return state.password
  }
}

// actions
const actions = {
  setUser ({ commit }, user) {
    commit('postUser', user)
  },

  setToken ({ commit }, token) {
    commit('postToken', token)
  },

  setUsername ({ commit }, username) {
    commit('postUsername', username)
  },

  setPassword ({ commit }, password) {
    commit('postPassword', password)
  }
}

// mutations
const mutations = {
  postUser (state, user) {
    state.user = user
  },

  postToken (state, token) {
    state.token = token
  },

  postUsername (state, username) {
    state.username = username
  },

  postPassword (state, password) {
    state.password = password
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
