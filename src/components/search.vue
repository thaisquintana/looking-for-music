<template>
  <div class="search">
    <form ref="form" @keyup.enter="onSubmit" @submit.prevent="onSubmit">
        <input type="text" name="search" placeholder="Filtrar">
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import queryString from 'query-string'
export default {
  name: 'Search',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      let auth = queryString.parse(window.location.search)
      let accessToken = auth.access_token
      let searched = this.$refs.form.search.value
      const api = 'https://api.spotify.com/v1/search?q='
      const typeSearch = '&type=artist%2Ctrack%2Calbum&market=US&offset=0&limit=15'
      const url = api + searched + typeSearch
      axios.get(url, {
        headers: {'Authorization': 'Bearer ' + accessToken}
      })
        .then(response => {
          this.tracks = response.data.tracks.items
          this.$router.push('/searched')
        }).catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>
