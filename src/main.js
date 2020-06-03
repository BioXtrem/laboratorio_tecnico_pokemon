import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import InicioRegistro from './components/InicioRegistro'
import Pokemon from './components/Pokemon'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    name: 'sesion',
    component: InicioRegistro,
  }, {
    path: '/home',
    component: Pokemon,
  }]
})

/* router.beforeEach((to, from, next) => {
  if (to.path == '/' && !isAuthenticated) next({ name: 'Login' })
  else next()
}) */

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
