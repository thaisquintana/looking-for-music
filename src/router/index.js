import Vue from 'vue'
import Router from 'vue-router'

import Artists from '@/views/Artists.vue'
import Albums from '@/views/Albums.vue'
import Songs from '@/views/Songs.vue'

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
      path: '/Songs',
      name: 'Songs',
      component: Songs
    }
  ]
})
