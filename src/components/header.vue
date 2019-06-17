<template>
  <div class="container-no-flex">
    <Search></Search>
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
import search from '../components/search'
export default {
  name: 'Artists',
  components: {
    Search : search
  },
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
