<template>
  <div class="search">
    <form ref="form" @submit.prevent="onSubmit" @keyup.enter="findResult()">
        <input type="text" name="search" v-model="search" placeholder="Filtrar">
    </form>
  </div>
</template>

<script>

import { bus } from '../main'
export default {
  name: 'Search',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    findResult () {
      bus.$emit('search', this.$refs.form.search.value)
    },
    onSubmit (e) {
      e.preventDefault()
        this.$router.push('/searched')
    }
  }
}
</script>
