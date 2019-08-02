import { remote } from '../services/helpers'

const state = {
  posts: null,
  post: null
}

const getters = {
  posts: state => state.posts,
  post: state => state.post
}

const mutations = {
  GET_POSTS (state, payload) {
    state.posts = payload
  },

  GET_POST (state, payload) {
    state.post = payload
  }
}

const actions = {
  async getPosts ({ commit }) {
    commit('GET_POSTS', await remote('getPosts'))
  },

  async getPost ({ commit }, payload) {
    commit('GET_POST', await remote('getPost', payload))
  },

  async deletePost ({ commit }, payload) {
    await remote('deletePost', payload)

    commit('GET_POSTS', await remote('getPosts'))
  },

  async createPost ({ commit }, payload) {

  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
