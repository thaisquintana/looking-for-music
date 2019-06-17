<template>
  <div class="playlist-album">
    <div class="header">
      <div>
        <h1>Album</h1>
        <button>PLAY</button>
      </div>
    </div>
      <div class="search-filter">
      <i class="search-icon"></i>
      <i class="close-icon"></i>
      <input type="text" v-model="search" placeholder="Filtrar">
    </div>
    <table class="songlist" cell-padding="0" cell-spacing="0">
      <thead>
        <tr>
          <th></th>
          <th>Título</th>

          <th>
            <img src="../assets/images/clock.svg" alt="Duração" />
          </th>
        </tr>
      </thead>
      <tbody>
          <tr class="song-item" v-for="track in filteredTrack" :key="track.id">
            <td>
              <img src="../assets/images/plus.svg" alt="Adicionar">
            </td>
            <td>{{track.name}}</td>
            <td>{{track.duration_ms | duration('minutes')}}:{{track.duration_ms | duration('seconds')}}</td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import queryString from 'query-string'
import moment from 'vue-moment'
export default {
  name: 'Playlist',
  data () {
    return {
      moment: moment,
      tracks: [],
      imageUrl: [],
      search: ''
    }
  },
  created () {
    let auth = queryString.parse(window.location.search)
    let accessToken = auth.access_token
    const songs =  this.$route.params.id
    const api = `https://api.spotify.com/v1/albums/`
    const typeSearch = '/tracks?offset=0&limit=20'
    const url = api + songs + typeSearch
    axios
      .get(url, {
        headers: { Authorization: 'Bearer ' + accessToken }
      })
      .then(response => {
        this.tracks = response.data.items
      })
  },
  computed: {
    filteredTrack () {
      return this.tracks.filter(track => {
        return track.name.toLowerCase().match(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style>
</style>
