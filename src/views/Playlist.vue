<template>
  <div class="playlist-album">
    <div class="header">
      <img :src="imageUrl" :alt="playlists.name">
      <div>
        <span>Playlist</span>
        <h1>{{playlists.name}}</h1>
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
          <th />
          <th>Título</th>
          <th>Artista</th>
          <th>Albúm</th>
          <th>
            <img src="../assets/images/calendar-regular.svg" alt="Data de Lançamento" />
          </th>
        </tr>
      </thead>
      <tbody>
          <tr class="song-item" v-for="playlist in filteredPlaylists" :key="playlist.id">
            <td>
              <img src="../assets/images/plus.svg" alt="Adicionar">
            </td>
            <td>{{playlist.track.name}}</td>
            <td>{{playlist.track.artists[0].name}}</td>
            <td>{{playlist.track.album.name}}</td>
            <td>{{playlist.added_at}}</td>
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
      playlists: [],
      imageUrl: [],
      search: ''
    }
  },
  created () {
    let auth = queryString.parse(window.location.search)
    let accessToken = auth.access_token
    const user = this.$route.params.id
    const api = `https://api.spotify.com/v1/playlists/`
    const url = api + user
    axios
      .get(url, {
        headers: { Authorization: 'Bearer ' + accessToken }
      })
      .then(response => {
        this.playlists = response.data
        this.playlistsTracks = response.data.tracks.items
        this.imageUrl = response.data.images[0].url
        console.log(this.playlistsTracks)
      })
  },
  computed: {
    filteredPlaylists () {
      return this.playlistsTracks.filter(playlist => {
        return playlist.track.name.toLowerCase().match(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style>
</style>
