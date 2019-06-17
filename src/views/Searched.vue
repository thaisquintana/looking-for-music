<template>
  <div class="broswer-playlists">
      <h1 class="title">Artistas</h1>
        <div class="list">
          <div class="artists" v-for="artist in filteredArtist" :key="artist.id">
            <router-link :to="{ path: `/albums/${artist.id}`}" class="playlist-title" >
              <img v-bind:src="artist.images[0].url">
            </router-link>
            <router-link :to="{ path: `/albums/${artist.id}`}" class="playlist-title" >
              <strong>{{artist.name}}</strong>
            </router-link>
            <p>gênero: {{artist.genres[0]}}, {{artist.genres[1]}}</p>
            <p>popularidade: {{artist.popularity}}%</p>
          </div>
        </div>
      <h1 class="title">Álbuns</h1>
        <div class="list-album-mobile list">
          <div class="albums" v-for="album in filteredAlbums" :key="album.album.id">
            <router-link :to="{ path: `/album-songs/${album.album.id}`}" class="playlist-title" >
              <img v-bind:src="album.album.images[0].url">
            </router-link>
            <router-link :to="{ path: `/album-songs/${album.album.id}`}" class="playlist-title" >
              <strong>{{album.album.name}}</strong>
            </router-link>
            <p>Artistas: {{album.album.artists[0].name}}</p>
            <p>Disponível: {{album.album.release_date}}</p>
          </div>
        </div>
      <h1 class="title">Músicas</h1>
        <div class="list-album-mobile list">
          <div class="albums" v-for="album in filteredAlbums" :key="album.album.id">
            <router-link :to="{ path: `/album-songs/${album.album.id}`}" class="playlist-title" >
              <img v-bind:src="album.album.images[0].url">
            </router-link>
            <router-link :to="{ path: `/album-songs/${album.album.id}`}" class="playlist-title" >
              <strong>{{album.album.name}}</strong>
            </router-link>
            <p>Artistas: {{album.album.artists[0].name}}</p>
            <p>Disponível: {{album.album.release_date}}</p>
          </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
