import Vue from 'vue'
import Router from 'vue-router'

import Artists from '@/views/Artists.vue'
import Albums from '@/views/Albums.vue'
import Songs from '@/views/Songs.vue'
import Playlist from '@/views/Playlist.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Artists',
      component: Artists
    },
    {
      path: '/albums',
      name: 'Albums',
      component: Albums
    },
    {
      path: '/songs',
      name: 'Songs',
      component: Songs
    },
    {
      path: '/playlist',
      name: 'Playlist',
      component: Playlist
    }
  ]
})
