<template>
  <div class="broswer-playlists">
    <h1 class="title">Songs</h1>
    <div class="search-filter">
      <i class="search-icon"></i>
      <i class="close-icon"></i>
      <form ref="form" @keyup.enter="onSubmit" @submit.prevent="onSubmit">
        <input type="text" name="search" placeholder="Filtrar">
      </form>
    </div>
    <div class="list-album-mobile list">
      <div class="albums" v-for="track in tracks" :key="track.id">
        <img v-bind:src="track.album.images[0].url" />
        <strong>{{track.name}}</strong>
        <p>Artistas: {{track.artists[0].name}}</p>
        <p>Duração: {{track.duration_ms}}</p>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import queryString from 'query-string'
export default {
  name: 'Songs',
  data () {
    return {
      tracks: []
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      let auth = queryString.parse(window.location.search)
      let accessToken = auth.access_token
      let searched = this.$refs.form.search.value
      const api = 'https://api.spotify.com/v1/search?q='
      const typeSearch = '&type=track&market=BR&offset=0&limit=12'
      const url = api + searched + typeSearch
      axios.get(url, {
        headers: {'Authorization': 'Bearer ' + accessToken}
      })
        .then(response => {
          this.tracks = response.data.tracks.items
        }).catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>
