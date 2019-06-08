<template>
  <div class="playlist-album">
    <div class="header">
      <img src="" alt="" />
      <div>
        <span>Playlist</span>
        <h1>Título</h1>
        <button>PLAY</button>
      </div>
    </div>
    <div class="songlist" cell-padding="0" cell-spacing="0">
      <thead>
        <tr>
          <th />
          <th>Título</th>
          <th>Artista</th>
          <th>Albúm</th>
          <th>
            <img src="../assets/images/clock.svg" alt="Duração" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td col-span={5}> Nenhuma música encontrada.</td>
        </tr>
        <tr class="song-item">
          <td>
            <img src="../assets/images/plus.svg" alt="Adicionar" />
          </td>
          <td>{song.title}</td>
          <td>{song.author}</td>
          <td>{song.album}</td>
          <td>3:26</td>
        </tr>
      </tbody>
    </div>
  </div>
</template>
