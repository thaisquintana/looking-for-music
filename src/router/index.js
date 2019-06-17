import Vue from 'vue'
import Router from 'vue-router'

import Artists from '@/views/Artists.vue'
import Albums from '@/views/Albums.vue'
import Songs from '@/views/Songs.vue'
import Playlist from '@/views/Playlist.vue'
import AlbumArtist from '@/views/AlbumArtist.vue'
import ArtistSongs from '@/views/ArtistSongs.vue'
import Searched from '@/views/Searched.vue'

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
      path: '/playlists/:id',
      name: 'Playlist',
      component: Playlist
    },
    {
      path: '/albums/:id',
      name: 'AlbumArtist',
      component: AlbumArtist
    },
    {
      path: '/album-songs/:id',
      name: 'ArtistSongs',
      component: ArtistSongs
    },
    {
      path: '/searched',
      name: 'Searched',
      component: Searched
    }
  ]
})
