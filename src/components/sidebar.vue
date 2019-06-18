<template>
  <div>
    <aside>
      <div class="main-navegation">
        <ul class="main-explorer">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Navegar</a>
          </li>
          <li>
            <a>Rádio</a>
          </li>
        </ul>
        <ul>
          <li class="main-libary">
            <a>Sua Biblioteca</a>
          </li>
          <li>
            <a>Seu Daily Mix</a>
          </li>
          <li>
            <a>Tocadas Recentemente</a>
          </li>
          <li>
            <router-link :to="{ path: '/songs' }">Músicas</router-link>
          </li>
          <li>
            <router-link :to="{ path: '/albums' }">Álbuns</router-link>
          </li>
          <li>
            <router-link :to="{ path: '/' }">Artistas</router-link>
          </li>
          <li>
            <a>Estações</a>
          </li>
          <li>
            <a>Arquivos Locais</a>
          </li>
          <li>
            <a>Vídeos</a>
          </li>
          <li>
            <a>Podcasts</a>
          </li>
        </ul>
        <ul>
          <span>Playlists</span>
          <li v-for="playlist in playlists" :key="playlist.id">
            <router-link :to="{ path: `/playlists/${playlist.id}`}" class="playlist-title" >{{playlist.name}}</router-link>
          </li>
        </ul>
      </div>
      <button>
        <img src="../assets/images/add_playlist.svg" alt="Adicionar Playlist">
        <label>Nova Playlist</label>
      </button>
    </aside>
    <section>
      <router-link :to="{ path: '/songs' }">Músicas</router-link>
      <router-link :to="{ path: '/albums' }">Albúns</router-link>
      <router-link :to="{ path: '/' }">Artistas</router-link>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import queryString from 'query-string'

export default {
  name: 'sidebar',
  data () {
    return {
      playlists: []
    }
  },

  created () {
    let auth = queryString.parse(window.location.search)
    let accessToken = auth.access_token
    const api = 'https://api.spotify.com/v1/me/'
    const typeSearch = 'playlists'
    const url = api + typeSearch
    axios
      .get(url, {
        headers: { Authorization: 'Bearer ' + accessToken }
      })
      .then(response => {
        this.playlists = response.data.items
      })
  }
}
</script>
