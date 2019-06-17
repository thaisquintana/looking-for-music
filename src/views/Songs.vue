<template>
  <div class="playlist-album">
    <div class="header">
      <div>
        <h1>Músicas</h1>
        <button>PLAY</button>
      </div>
    </div>
    <table class="songlist" cell-padding="0" cell-spacing="0">
      <thead>
        <tr>
          <th/>
          <th>Título</th>
          <th>Artista</th>
          <th>Albúm</th>
          <th>
            <img src="../assets/images/clock.svg" alt="Duração">
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="song-item" v-for="track in filteredTracks" :key="track.track.id">
          <td>
            <img src="../assets/images/plus.svg" alt="Adicionar">
          </td>
          <td>{{track.track.name}}</td>
          <td>{{track.track.artists[0].name}}</td>
          <td>{{track.track.album.name}}</td>
          <td>{{track.track.duration_ms | duration('minutes')}}:{{track.track.duration_ms | duration('seconds')}}</td>
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
  name: 'Songs',
  data () {
    return {
      moment: moment,
      tracks: [],
      search: ''
    }
  },
  created () {
    let auth = queryString.parse(window.location.search)
    let accessToken = auth.access_token
    const api = 'https://api.spotify.com/v1/me/'
    const typeSearch = 'tracks?limit=20'
    const url = api + typeSearch
    axios
      .get(url, {
        headers: { Authorization: 'Bearer ' + accessToken }
      })
      .then(response => {
        this.tracks = response.data.items
      })
  },
  computed: {
    filteredTracks () {
      return this.tracks.filter(track => {
        return track.track.name.toLowerCase().match(this.search.toLowerCase())
      })
    }
  },
  methods: {
    // millisToMinutesAndSeconds() {
    //   let minutes = Math.floor(this.tracks.track.duration_ms / 60000)
    //   let seconds = ((this.tracks.track.duration_ms % 60000) / 1000).toFixed(0)
    //   return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
    //   console.log('duracao da musica', minutes + seconds)
    // }
  }
}
</script>
