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
          <li>
            <span>Playlists</span>
          </li>
          <li>
            <a class="playlist-title">Blink 182</a>
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
export default {
  name: "sidebar"
};
</script>
