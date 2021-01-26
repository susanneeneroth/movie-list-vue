import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: []
  },
  mutations: {
    addMovie(state, movieName){
      state.movies.push(movieName)
    
    },

    removeMovie(state, movieName){
      state.movies = state.movies.filter(movie => movie !== movieName)
    }
  },
})
