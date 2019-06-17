<template>
  <div class="broswer-playlists">
    <h1 class="title">Álbuns</h1>
    <div class="search-filter">
      <i class="search-icon"></i>
      <i class="close-icon"></i>
      <input type="text" v-model="search" placeholder="Filtrar">
    </div>
    <div class="list-album-mobile list">
      <div class="albums" v-for="album in filteredAlbums" :key="album.id">
        <router-link :to="{ path: `/album-songs/${album.id}`}" class="playlist-title" >
          <img v-bind:src="album.images[0].url">
        </router-link>
        <router-link :to="{ path: `/album-songs/${album.id}`}" class="playlist-title" >
          <strong>{{album.name}}</strong>
        </router-link>
        <p>Artistas: {{album.artists[0].name}}</p>
        <p>Disponível: {{album.release_date}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import queryString from 'query-string'
export default {
  name: 'AlbumsArtist',
  data () {
    return {
      albums: [],
      search: ''
    }
  },
  created () {
    let auth = queryString.parse(window.location.search)
    let accessToken = auth.access_token
    const artist =  this.$route.params.id
    console.log(artist)
    const api = 'https://api.spotify.com/v1/artists/'
    const typeSearch = '/albums?limit=5'
    const url = api + artist +typeSearch
    axios
      .get(url, {
        headers: { Authorization: 'Bearer ' + accessToken }
      })
      .then(response => {
        this.albums = response.data.items
        console.log(this.albums)
      })
  },
  computed: {
    filteredAlbums () {
      return this.albums.filter(album => {
        return album.name.toLowerCase().match(this.search.toLowerCase())
      })
    }
  }
}
</script>
