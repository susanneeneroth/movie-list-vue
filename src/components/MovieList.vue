<template>
  <div>
      <Movie 
        v-for="(movie, index) in movies"
        :key="index"
        :movie="movie"
        :rating="rating"
        :genre="genre"
        :description="description"
        />
        
  </div>
</template>

<script>
import Movie from './Movie.vue'

export default {
  components: {
      Movie
},
computed: {
    movies(){
        return this.$store.state.movies;
    }
  }
}
</script>

<style scoped>

</style>