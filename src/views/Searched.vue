<template>
  <div class="broswer-playlists">
      <h1 class="title">Artista</h1>
      <div class="list">
        <div class="artists" v-for="artist in artists" :key="artist.id">
          <router-link :to="{ path: `/albums/${artist.id}`}" class="playlist-title" >
            <img v-bind:src="artistsImage" alt="album.name">
          </router-link>
          <router-link :to="{ path: `/albums/${artist.id}`}" class="playlist-title" >
            <strong>{{artist.name}}</strong>
          </router-link>
          <p>gênero: {{artist.genres[0]}}</p>
          <p>popularidade: {{artist.popularity}}%</p>
        </div>
      </div>
      <h1 class="title">Álbums</h1>
      <div class="list-album-mobile list">
        <div class="albums" v-for="album in albums" :key="album.id">
          <router-link :to="{ path: `/album-songs/${album.id}`}" class="playlist-title" >
            <img v-bind:src="album.images[0].url" alt="album.name">
          </router-link>
          <router-link :to="{ path: `/album-songs/${album.id}`}" class="playlist-title" >
            <strong>{{album.name}}</strong>
          </router-link>
          <p>Disponível: {{album.release_date}}</p>
        </div>
      </div>
      <h1 class="title">Música</h1>
      <div class="list-album-mobile list">
        <div class="albums" v-for="track in tracks" :key="track.id">
          <router-link :to="{ path: `/album-songs/${track.id}`}" class="playlist-title" >
            <img v-bind:src="track.album.images[0].url" alt="track.name">
          </router-link>
          <router-link :to="{ path: `/album-songs/${track.id}`}" class="playlist-title" >
            <strong>{{track.name}}</strong>
          </router-link>
          <p>Artista: {{track.album.artists[0].name}}</p>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import queryString from 'query-string'
import moment from 'vue-moment'
import { bus } from '../main'

export default {
  name: 'Searched',
  data () {
    return {
      albums: [],
      artists: [],
      tracks: [],
      searched: ''
    }
  },
  watch: {
    searched (searched) {
      this.search(searched)
    }
  },
  created () {
    bus.$on('search', this.search)
  },
  methods: {
    search (searched) {
      if (this.searched = searched) {
        let auth = queryString.parse(window.location.search)
        let accessToken = auth.access_token
        const api = 'https://api.spotify.com/v1/search?q='
        const typeSearch = '&type=artist%2Ctrack%2Calbum&market=US&offset=0&limit=15'
        const url = api + this.searched + typeSearch
        axios.get(url, {
            headers: { Authorization: 'Bearer ' + accessToken }
          })
          .then(response => {
            this.tracks = response.data.tracks.items
            this.artists = response.data.artists.items
            this.albums = response.data.albums.items
            this.artistsImage = response.data.artists.items.images[0].url
          })
      }
    }
  }
}
</script>

<style>

</style>
