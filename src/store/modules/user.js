import axios from 'axios'

export const state = {
  user: null
}

export const mutations = {
  SET_USER_DATA (state, userData) {
    state.user = userData
    localStorage.setItem('user', JSON.stringify(userData))
    axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
  },
  CLEAR_USER_DATA () {
    localStorage.removeItem('user')
    location.reload()
  }
}
