<template>
  <div class="clickable max-height card bg-dark text-white" >
    <img class="max-height card-img" :src="image" alt="Card image" >
    <div class="app-overlay card-img-overlay"
      @click="showOverview = !showOverview" >

      <h5 class="card-title">{{ movie.title }}</h5>
      <p v-if="showOverview" class="card-text">{{ movie.overview }}</p>
    </div>
  </div>
</template>

<script>
import { posterBaseURL } from '../api/tmdb.config'

export default {
  name: 'card',

  data () {
    return {
      showOverview: false
    }
  },

  props: [ 'movie' ],

  computed: {
    image () {
      return this.movie ? `${posterBaseURL}${this.movie.poster_path}` : ''
    }
  }
}
</script>

<style scoped>
  .clickable {
    cursor: pointer;
  }

  .app-overlay {
    background-color: rgba(0, 0, 0, .5)
  }

  .max-height {
    height: 100%;
  }
</style>
