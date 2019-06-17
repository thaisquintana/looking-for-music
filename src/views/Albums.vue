<template>
  <div class="broswer-playlists">
    <h1 class="title">Álbuns</h1>
    <div class="search-filter">
      <i class="search-icon"></i>
      <i class="close-icon"></i>
      <input type="text" v-model="search" placeholder="Filtrar">
    </div>
    <div class="list-album-mobile list">
      <div class="albums" v-for="album in filteredAlbums" :key="album.album.id">
        <a :href="album.album.href">
          <img v-bind:src="album.album.images[0].url">
        </a>
        <a :href="album.album.href">
          <strong>{{album.album.name}}</strong>
        </a>
        <p>Artistas: {{album.album.artists[0].name}}</p>
        <p>Disponível: {{album.album.release_date}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import queryString from 'query-string'
export default {
  name: 'Albums',
  data () {
    return {
      albums: [],
      search: ''
    }
  },
  created () {
    let auth = queryString.parse(window.location.search)
    let accessToken = auth.access_token
    const api = 'https://api.spotify.com/v1/me/'
    const typeSearch = 'albums?limit=20'
    const url = api + typeSearch
    axios
      .get(url, {
        headers: { Authorization: 'Bearer ' + accessToken }
      })
      .then(response => {
        this.albums = response.data.items
      })
  },
  computed: {
    filteredAlbums () {
      return this.albums.filter(album => {
        return album.album.name.toLowerCase().match(this.search.toLowerCase())
      })
    }
  }
}
</script>
