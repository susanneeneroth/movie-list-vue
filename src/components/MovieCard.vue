<template>
  <div>
   
      <h1 v-if="movie">{{movieName}}}</h1>
      <h2 v-if="movie">{{rating}}}</h2>
      <h2 v-if="movie">{{genre}}}</h2>
      <p v-if="movie">{{description}}</p>

        
  </div>
</template>

<script>


export default {


}
</script>

<style>

</style>