<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>Popular Movies</h1>
      </div>
    </div>
    <div class="row">
      <div class="app-col col-sm-12 col-md-3"
        v-for="movie in movies" :key="movie.id" >

        <app-card :movie="movie" ></app-card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './components/Card'
import { getPopularMovies } from './api/tmdb-api'

export default {
  name: 'app',

  data () {
    return {
      movies: []
    }
  },

  methods: {
    setMovies (newMovies) {
      this.movies = newMovies.slice(0)
    }
  },

  components: {
    appCard: Card
  },

  mounted () {
    getPopularMovies()
      .then(movies => {
        this.setMovies(movies)
      })
  }
}
</script>

<style scoped>
  .app-col {
    margin-top: 1rem;
  }
</style>
