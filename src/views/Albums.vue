<template>
  <div class="broswer-playlists">
    <h1 class="title">Álbuns</h1>
    <div class="search-filter">
      <i class="search-icon"></i>
      <i class="close-icon"></i>
      <form ref="form" @keyup.enter="onSubmit" @submit.prevent="onSubmit">
        <input type="text" name="search" placeholder="Filtrar">
      </form>
    </div>
    <div class="list-album-mobile list">
      <div class="albums" v-for="album in albums" :key="album.album.id">
        <img :src="imageUrl" :alt="album.album.name">
        <strong>{{album.album.name}}</strong>
        <p>Artistas: {{album.album.artists[0].name}}</p>
        <p>Disponível: {{album.album.release_date}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import queryString from "query-string";
export default {
  name: "Albums",
  data() {
    return {
      albums: [],
      imageUrl: []
    };
  },
  created() {
    let auth = queryString.parse(window.location.search);
    let accessToken = auth.access_token;
    const api = "https://api.spotify.com/v1/me/";
    const typeSearch = "albums?limit=20";
    const url = api + typeSearch;
    axios
      .get(url, {
        headers: { Authorization: "Bearer " + accessToken }
      })
      .then(response => {
        this.albums = response.data.items;
        this.imageUrl = response.data.items.album.images[0].url;
        console.log("imagem do album", this.imageUrl);
      });
    // .catch(e => {
    //   this.errors.push(e);
    // });
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      let auth = queryString.parse(window.location.search);
      let accessToken = auth.access_token;
      let searched = this.$refs.form.search.value;
      const api = "https://api.spotify.com/v1/search?q=";
      const typeSearch = "&type=album&market=US&limit=20&offset=5";
      const url = api + searched + typeSearch;
      axios
        .get(url, {
          headers: { Authorization: "Bearer " + accessToken }
        })
        .then(response => {
          this.albums = response.data.albums.items;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>
