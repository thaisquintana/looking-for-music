<template>
  <div id="app">
      <div class="wrapper">
        <div class="container">
          <Sidebar />
          <div class="content">
            <Header />
            <router-view/>
          </div>
        </div>
      <Player />
    </div>
  </div>
</template>

<script>

import Player from '@/components/player.vue'
import Sidebar from '@/components/sidebar.vue'
import Header from '@/components/header.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Player,
    Header
  }
}
</script>
