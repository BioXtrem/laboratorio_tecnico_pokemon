<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="">
        <b-row class="w-100 text-center">
          <b-col>
            <b-nav-text><b-icon icon="person"></b-icon> Bienvenido {{ name }}</b-nav-text>
          </b-col>
          <b-col>
            <b-navbar-brand class="pokemon">PoKéMoN</b-navbar-brand>
          </b-col>
            <b-col>
              <b-navbar-toggle target="nav-collapse">Menu</b-navbar-toggle>
              <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="">
                  <b-nav-item href="#">Home</b-nav-item>
                  <b-nav-item href="#">Habilidades</b-nav-item>
                  <b-nav-item v-on:click="navRM">Rick Y Morthy</b-nav-item>
                  <b-nav-item v-on:click="closeSesion">Cerrar sesión</b-nav-item>
                </b-navbar-nav>
              </b-collapse>
          </b-col>
        </b-row> 
      </b-navbar>      
    </div>
    <hr class="white">
    <div class="grid-center">
      <div class="grid-select">
        <b-form-select v-model="selected" :options="options"></b-form-select>
      </div>      
      <div class="grid-padre">
        <div class="scrollY">
          <div class="grid-tres">
            <div class="grid-item" v-for="(pokemon, key) in pokemonCalculated" :key="key">

              <vue-load-image>
                <img slot="image" :src="pokemon.img">
                <img slot="preloader" :src="imagen" style="width: 5%;"/>
                <img slot="error" :src="imagen" style="width: 5%;"/>
              </vue-load-image>

              <h3>{{ pokemon.name }}</h3>
              <button class="button1 ">Agregar</button>
            </div>
          </div>          
        </div>
        <div class="grid-uno">
          <div class="grid-item-seleccionados">1</div>
        </div>
      </div>
    </div>
    

  </div>
</template>

<script>
  import { getPokemons } from '../services/api'
  import VueLoadImage from 'vue-load-image'
  import imagen from '../assets/loading.gif'

  export default {
    data() {
      return {
        imagen: imagen,
        name: localStorage.getItem('name'),
        selected: null,
        options: [
          { value: null, text: 'SELECTOR DE POKÉMON' },
          { value: null, text: 'SELECTOR DE POKÉMON' },
        ],
        pokemons: []
      }      
    },
    components: {
      'vue-load-image': VueLoadImage
    },
    methods: {
      closeSesion() {
        localStorage.setItem('isAuthenticated', false)
        localStorage.setItem('name', '')
        this.$router.go('/');
      },
      navRM() {
        this.$router.push("/rickmorty")
      }
    },    
    computed: {
      pokemonCalculated() {
        return this.pokemons
      }
    },
    beforeCreate: function() {
      document.body.className = 'poke';      
    }, 
    created(){
      getPokemons().then(result => this.pokemons=result)
    },
  }
</script>

<style>
@font-face {
  font-family: pokemonFont;
  src: url('../assets/pokemon.ttf');
}

body.poke {
  background: url('../assets/backgroundblue.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

hr.white {
  border: 0.1rem solid white;
  border-radius: 5px;
}

.button1 {
  background-color: white; 
  color: black; 
  border: 2px solid #4CAF50;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.button1:hover {
  background-color: #4CAF50;
  color: white;
}

.pokemon {
  font-family: pokemonFont;
}

.grid-uno {
  display: grid;
  grid-template-columns: auto ;
  padding: 10px;
  width: 100%;
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 30px;
  text-align: center;
  height: 16rem;
  max-height: 16rem;
}

.grid-item-seleccionados {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  font-size: 30px;
  text-align: center;
  height: 49rem;
}

.grid-center {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
}

.navbar-dark .navbar-text {
  color: rgba(255, 255, 255, 1) !important;
}

.navbar-nav .nav-link {
  color: rgba(255, 255, 255, 1) !important;;
}

.navbar-nav .nav-link:hover {
  color: rgba(255, 255, 255, 0.75) !important;;
}

@media only screen 
and (max-width : 1199px) {
.grid-padre {
  display: grid;
  grid-template-columns: 60% 40%;
  width: 100%;
}

.grid-tres {
  display: grid;
  grid-template-columns: auto;
  padding: 0.5rem;
  width: 100%;
  grid-column-gap: 0.4rem;
  grid-row-gap: 0.4rem;
}

.grid-select{
  width: 40%;
  margin-left: auto;
  margin-right: auto;
}

.scrollY {
  overflow-y: auto;
  max-height: 49rem;
}
}

@media only screen 
and (min-width : 1200px) {
.grid-padre {
  display: grid;
  grid-template-columns: 80% 20%;
  width: 100%;
}

.grid-tres {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 0.5rem;
  width: 100%;
  grid-column-gap: 0.4rem;
  grid-row-gap: 0.4rem;
}

.grid-select{
  width: 15%;
  margin-left: auto;
  margin-right: auto;
}

.scrollY {
  overflow-y: auto;
  max-height: 50rem;
}
}

</style>