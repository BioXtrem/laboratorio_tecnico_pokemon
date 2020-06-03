<template>
  <div>
    <b-container>
      <b-row>
        <b-col sm="9" md="7" lg="5" class="mx-auto">
          <b-card class="card-signin">
            <b-card-title class="card-title">
              <h4>{{ form.title }}</h4>
            </b-card-title>      

            <b-card-body v-if="form.signIn">
              <b-form @submit.prevent="singIn">
                <div class="form-label-group">
                  <b-input type="email" v-model="dataForm.email" :state="validateEmail" id="email" class="form-control"></b-input>
                  <label for="email">Correo</label>
                </div>

                <div class="form-label-group">
                  <b-input type="password" v-model="dataForm.password" :state="validatePassword" id="password" class="form-control"></b-input>
                  <label for="password">Contraseña</label>
                  <b-form-invalid-feedback :state="validatePassword">
                    Tu contraseña debe de ser de 6-16 caracteres.
                  </b-form-invalid-feedback>
                </div>

                <div class="custom-control custom-checkbox mb-3">
                  
                </div>
                <b-button :disabled="validateButtonSingIn" size="lg" variant="primary" class="btn-block text-uppercase" type="submit">Iniciar Sesión</b-button>
                
                <hr class="my-4">
                <b-button pill variant="outline-secondary" v-on:click="showSignIn">Registrarse</b-button>
              </b-form >
            </b-card-body>

            <b-card-body v-else>
              <b-form @submit.prevent="singUp">
                <div class="form-label-group">
                  <b-input type="email" v-model="dataForm.email" :state="validateEmail" id="email" class="form-control"></b-input>
                  <label for="email">Correo</label>
                </div>

                <div class="form-label-group">
                  <b-input type="password" v-model="dataForm.password" :state="validatePassword" id="password" class="form-control"></b-input>
                  <label for="password">Contraseña</label>
                  <b-form-invalid-feedback :state="validatePassword">
                    Tu contraseña debe de ser de 6-16 caracteres.
                  </b-form-invalid-feedback>
                </div>

                <div class="form-label-group">
                  <b-input type="password" v-model="dataForm.repitPassword" :state="validateRepitPassword" id="repitPassword" class="form-control"></b-input>
                  <label for="password">Repite tu contraseña</label>
                  <b-form-invalid-feedback :state="validateRepitPassword">
                    Tu contraseñas no coinciden.
                  </b-form-invalid-feedback>
                </div>

                <div class="custom-control custom-checkbox mb-3">
                  
                </div>
                <b-button :disabled="validateButtonSingUp" size="lg" variant="primary" class="btn-block text-uppercase" type="submit">Iniciar Sesión</b-button>
                
                <hr class="my-4">
                <b-button pill variant="outline-secondary" v-on:click="showSignUp">Iniciar Sesión</b-button>
              </b-form>
            </b-card-body>

          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import Firebase from 'firebase'

  const firebaseConfig = {
    apiKey: "AIzaSyCiAuVte5kWwgmAIpxCaKRw9b3AC2IQRgM",
    authDomain: "vuefire-5651b.firebaseapp.com",
    databaseURL: "https://vuefire-5651b.firebaseio.com",
    projectId: "vuefire-5651b",
    storageBucket: "vuefire-5651b.appspot.com",
    messagingSenderId: "1029123160162",
    appId: "1:1029123160162:web:7c9d05900c22eef330393b"
  };

  let firebaseConnection = Firebase.initializeApp(firebaseConfig);
  let db = firebaseConnection.database();

  let usersRef = db.ref('users');

  export default {
    name:'',
    firebase: {
      users: usersRef
    },
    data() {
      return {
        users: [],
        form:{
          title: "Iniciar Sesión",
          signIn: true,
        },
        dataForm: {
          email: '',
          password: '',
          repitPassword: '',
        },
        re:  /\S+@\S+\.\S+/
      }
    },
    beforeCreate () {
      if(localStorage.getItem('isAuthenticated') === 'true')
        this.$router.push('home')
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      singIn() {
        console.log(this.users)
      },
      singUp() {
        const newUser = {
          email: this.dataForm.email,
          password: this.dataForm.password,
        }
        usersRef.push(newUser)
        localStorage.setItem('isAuthenticated', true)
        localStorage.setItem('name', this.dataForm.email.split("@")[0])
        this.$router.go('home')
      },
      showSignIn(){
        this.form = {
          title: "Registarse",
          signIn: false,
        }

        this.dataForm ={
          email: '',
          password: '',
          repitPassword: '',
        }
      },
      showSignUp(){
        this.form = {
          title: "Iniciar Sesión",
          signIn: true,
        }

        this.dataForm ={
          email: '',
          password: '',
          repitPassword: '',
        }
      },
    },
    computed: {
      validateButtonSingIn(){
        return !(this.re.test(this.dataForm.email) && this.dataForm.password.length > 5 && this.dataForm.password.length < 17);
      },
      validateEmail() {
        return this.re.test(this.dataForm.email);
      },
      validatePassword() {
        return this.dataForm.password.length > 5 && this.dataForm.password.length < 17
      },
      validateButtonSingUp(){
        return !(this.re.test(this.dataForm.email) && this.dataForm.password.length > 5 && this.dataForm.password.length < 17 && this.dataForm.password == this.dataForm.repitPassword);
      },
      validateRepitPassword() {
        return this.dataForm.password == this.dataForm.repitPassword
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
:root {
  --input-padding-x: 1.5rem;
  --input-padding-y: .75rem;
}

body {
  background: #007bff;
  background: linear-gradient(to right, #0062E6, #33AEFF);
}

.card {
  margin-top: 5rem;
}

.card-signin {
  border: 0;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
}

.card-signin .card-title {
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.5rem;
  text-align: center;
}

.card-signin .card-body {
  padding: 2rem;
}

.form-signin {
  width: 100%;
}

.form-signin .btn {
  font-size: 80%;
  border-radius: 5rem;
  letter-spacing: .1rem;
  font-weight: bold;
  padding: 1rem;
  transition: all 0.2s;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group input {
  height: auto;
  border-radius: 2rem;
}

.form-label-group>input,
.form-label-group>label {
  padding: var(--input-padding-y) var(--input-padding-x);
}

.form-label-group>label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0;
  /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown)~label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}

.btn-google {
  color: white;
  background-color: #ea4335;
}

.btn-facebook {
  color: white;
  background-color: #3b5998;
}

/* Fallback for Edge
-------------------------------------------------- */

@supports (-ms-ime-align: auto) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
-------------------------------------------------- */

@media all and (-ms-high-contrast: none),
(-ms-high-contrast: active) {
  .form-label-group>label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}
</style>
