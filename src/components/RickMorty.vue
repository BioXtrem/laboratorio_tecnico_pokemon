<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="">
        <b-row class="w-100 text-center">
          <b-col>
            <b-nav-text><b-icon icon="person"></b-icon> Bienvenido {{ name }}</b-nav-text>
          </b-col>
          <b-col>
            <b-navbar-brand class="rmFont">Rick and Morty</b-navbar-brand>
          </b-col>
            <b-col>
              <b-navbar-toggle target="nav-collapse">Menu</b-navbar-toggle>
              <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="">
                  <b-nav-item href="#">Home</b-nav-item>
                  <b-nav-item href="#">Habilidades</b-nav-item>
                  <b-nav-item href="#">Rick Y Morthy</b-nav-item>
                  <b-nav-item v-on:click="closeSesion">Cerrar sesión</b-nav-item>
                </b-navbar-nav>
              </b-collapse>
          </b-col>
        </b-row> 
      </b-navbar>      
    </div>
    <hr class="white">
    <b-container>
      <b-form-input id="nombre" v-model="nombre" type="text" placeholder="Rick" ></b-form-input>
      <div v-for="(character, key) in characterList" :key="key">
        <p>{{ character.name }}</p>
      </div>

    </b-container>
  </div>
</template>

<script>
import { rickMortyCharacteres } from '../services/api'

  export default {
    data() {
      return {
        name: localStorage.getItem('name'),
        nombre: '',
        characters: [],
      }
    },
    methods: {
      closeSesion() {
        localStorage.setItem('isAuthenticated', false)
        localStorage.setItem('name', '')
        this.$router.go('/');
      },
    },
    computed: {
      characterList() {
        return this.characters
      }
    },
    beforeCreate: function() {
        document.body.className = 'rm'
    },
    created(){
      this.characters = rickMortyCharacteres()
    },    
  }
</script>

<style>
@font-face {
  font-family: rANDmFont;
  src: url('../assets/get_schwifty.ttf');
}

body.rm {
  background: url('../assets/BackgroundRick.jpg');
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}  

hr.white {
  border: 0.1rem solid white;
  border-radius: 5px;
}

.rmFont {
  font-family: rANDmFont;
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

</style>