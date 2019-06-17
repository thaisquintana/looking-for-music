import Vuex from 'vuex'
import Vue from 'vue'
import user from './modules/user'
import artists from './modules/artists'
import search from './modules/search'

// Load Vuex
Vue.use(Vuex)

// Create store
export default new Vuex.Store({
  modules: {
    user,
    artists,
    search
  }
})
