import Vue from 'vue'
import Router from 'vue-router'
import Browse from '@/views/browse.vue'
import Playlist from '@/views/playlist.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Browse',
      component: Browse
    },
    {
      path: '/playlists/:id',
      name: 'Playlist',
      component: Playlist
    }
  ]
})
