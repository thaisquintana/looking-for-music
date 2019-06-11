<template>
  <div class="broswer-playlists">
    <h1 class="title">Artistas</h1>
    <div class="search-filter">
      <i class="search-icon"></i>
      <i class="close-icon"></i>
      <form ref="form" @keyup.enter="onSubmit" @submit.prevent="onSubmit">
        <input type="text" name="search" placeholder="Filtrar">
      </form>
    </div>
    <div class="list">
      <div class="artists" v-for="artist in artists" :key="artist.id">
        <img v-bind:src="artist.images[0].url" />
        <strong>{{artist.name}}</strong>
        <p>gênero: {{artist.genres[0]}}</p>
        <p> popularidade: {{artist.popularity}}%</p>
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
      artists: []
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      let auth = queryString.parse(window.location.search)
      let accessToken = auth.access_token
      let searched = this.$refs.form.search.value
      const api = 'https://api.spotify.com/v1/search?q='
      const typeSearch = '&type=artist&market=US&limit=10&offset=12'
      const url = api + searched + typeSearch
      axios.get(url, {
        headers: {'Authorization': 'Bearer ' + accessToken}
      })
        .then(response => {
          this.artists = response.data.artists.items
        }).catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>
