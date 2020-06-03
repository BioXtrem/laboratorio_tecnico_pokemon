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
                  <b-nav-item href="#">Rick Y Morthy</b-nav-item>
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
            <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>  
            <div class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div class="grid-item">6</div>  
            <div class="grid-item">7</div>
            <div class="grid-item">8</div>
            <div class="grid-item">9</div>
            <div class="grid-item">10</div>
            <div class="grid-item">11</div>
            <div class="grid-item">12</div>
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
  export default {
    data() {
      return {
        name: localStorage.getItem('name'),
        selected: null,
        options: [
          { value: null, text: 'SELECTOR DE POKÉMON' },
          { value: null, text: 'SELECTOR DE POKÉMON' },
        ]
      }      
    },
    methods: {
      closeSesion() {
        localStorage.setItem('isAuthenticated', false)
        localStorage.setItem('name', '')
        this.$router.go('/');
      }
    }
  }
</script>

<style>
@font-face {
  font-family: pokemonFont;
  src: url('../assets/pokemon.ttf');
}

body {
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