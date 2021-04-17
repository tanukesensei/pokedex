<template>
  <div id="app">
    <!-- <img src="@/assets/Pokemon.png"> -->
    <img src="https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png">
    <!-- <img :src="$options.PokemonPng"> -->
    <div class="column is-half is-offset-one-quarter" >
      <input type="text" name="" id="" placeholder="Buscar pelo nome" v-model="busca" class="input is-rounded mb-2">
      <button class="button is-primary is-light">Buscar</button>
      <div v-for="poke in resultadoBusca" :key="poke.id">
      <Pokemon :name="poke.name" :url="poke.url" :num="poke.id"/>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Pokemon from './components/Pokemon';
// import PokemonPng from './components/Pokemon.png';

export default {
  name: 'App',
  
  // PokemonPng,
  
  components: {
    Pokemon
  },

  data(){
    return {
      pokemons: [],
      busca: ''
    }
  },
  created() {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then(res => {
        console.log("Pegou a lista de pokémon");
        this.pokemons = res.data.results;
      })
      .catch(err => {
        console.error(err)
      })
  },
  computed: {
    pokemonsWithId() {
      return this.pokemons.map(pokemon => ({
        ...pokemon,
        id: Number(/(\d+)\/$/.exec(pokemon.url)[1])
      }))
    },

    resultadoBusca() {
      if(!this.busca.trim().length) {
        return this.pokemonsWithId;
      }

      // return this.pokemonsWithId.filter(pokemon => {
      //   return pokemon.name.toLowerCase().includes(this.busca.toLowerCase())
      // })
      return this.pokemonsWithId.filter(pokemon => 
        // id do pokemon eh igual a minha busca OR
        // nome do pokemon contem a minha busca

        // if(busca.isNumber()){
        //   return numero
        // }
        
        pokemon.name.toLowerCase().includes(this.busca.toLowerCase()) ||
        pokemon.id === Number(this.busca)
      );
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
