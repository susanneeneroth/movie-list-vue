<template>
  <div>
      <h3>{{ movie }}</h3>
      <h3>{{ rating }}</h3>
      <h3>{{ genre }}</h3>
      <h3>{{ description }}</h3>

  </div>
</template>

<script>
export default {
    props: ['movie', 'rating', 'genre', 'description'],

    methods:{
        removeMovie(){
            this.$store.commit('removeMovie', this.movie)
        }
    }

}
</script>

<style scoped>

</style>