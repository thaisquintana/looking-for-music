<template>
  <div class="container-no-flex">
    <div class="search">
      <img src="../assets/images/search.svg">
      <input placeholder="Search">
    </div>

    <div class="user">
      <img :src="imageUrl" :alt="user.name">
      <span>{{user.display_name}}</span>
      <i class="menu-icon"></i>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import queryString from 'query-string'
export default {
  name: 'Artists',
  data () {
    return {
      user: '',
      imageUrl: []
    }
  },
  created () {
    let auth = queryString.parse(window.location.search)
    let accessToken = auth.access_token
    axios
      .get('https://api.spotify.com/v1/me', {
        headers: { Authorization: 'Bearer ' + accessToken }
      })
      .then(response => {
        this.user = response.data
        this.imageUrl = response.data.images[0].url
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>
