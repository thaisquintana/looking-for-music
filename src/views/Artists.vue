<template>
  <div class="broswer-playlists">
    <h1 class="title">Artistas</h1>
    <div class="search-filter">
      <i class="search-icon"></i>
      <i class="close-icon"></i>
      <input type="text" v-model="search" placeholder="Filtrar">
    </div>
    <div class="list">
      <div class="artists" v-for="artist in filteredArtist" :key="artist.id">
        <a :href="artist.href">
          <img v-bind:src="artist.images[0].url">
        </a>
        <a :href="artist.href">
          <strong>{{artist.name}}</strong>
        </a>
        <p>gênero: {{artist.genres[0]}}, {{artist.genres[1]}}</p>
        <p>popularidade: {{artist.popularity}}%</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import queryString from 'query-string'
export default {
  name: 'Artists',
  data () {
    return {
      artists: [],
      search: ''
    }
  },
  created () {
    let auth = queryString.parse(window.location.search)
    let accessToken = auth.access_token
    const api = 'https://api.spotify.com/v1/me/'
    const typeSearch = 'following?type=artist&limit=30'
    const url = api + typeSearch
    axios
      .get(url, {
        headers: { Authorization: 'Bearer ' + accessToken }
      })
      .then(response => {
        this.artists = response.data.artists.items
      })
  },
  computed: {
    filteredArtist () {
      return this.artists.filter(artist => {
        return artist.name.toLowerCase().match(this.search.toLowerCase())
      })
    }
  }
}
</script>
