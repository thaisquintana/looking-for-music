<template>
  <aside>
    <div class="main-navegation">
      <ul class="main-explorer">
        <li>
          <a href>Navegar</a>
        </li>
        <li>
          <a href>Rádio</a>
        </li>
      </ul>
      <ul>
        <li class="main-libary">
          <a href>Sua Biblioteca</a>
        </li>
        <li>
          <a href>Seu Daily Mix</a>
        </li>
        <li>
          <a href>Tocadas Recentemente</a>
        </li>
        <li>
          <a href>Músicas</a>
        </li>
        <li>
          <a href>Albúns</a>
        </li>
        <li>
          <a href>Artistas</a>
        </li>
        <li>
          <a href>Estações</a>
        </li>
        <li>
          <a href>Arquivos Locais</a>
        </li>
        <li>
          <a href>Vídeos</a>
        </li>
        <li>
          <a href>Podcasts</a>
        </li>
      </ul>
      <ul>
        <li>
          <span>Playlists</span>
        </li>
        <li>
          <a class="playlist-title">Playlist Titulo</a>
        </li>
      </ul>
    </div>
      <button>
        <img src="../assets/images/add_playlist.svg" alt="Adicionar Playlist" />
        <label>Nova Playlist</label>
      </button>
  </aside>
</template>

<script>
export default {
  name: 'sideBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
