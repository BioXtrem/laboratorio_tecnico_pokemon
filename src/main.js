import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { rtdbPlugin as VueFire } from 'vuefire'

import InicioRegistro from './components/InicioRegistro'
import Pokemon from './components/Pokemon'
import RickMorty from './components/RickMorty'
import PageNotFound from './components/PageNotFound'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueFire)
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
    name: 'home',
    component: Pokemon,
  }, {
    path: '/rickmorty',
    name: 'rickmorty',
    component: RickMorty,
  },
  { path: "*", component: PageNotFound }]
})

router.beforeEach((to, from, next) => {
  if (to.name != 'sesion' && localStorage.getItem('isAuthenticated') !== 'true') next({ name: 'sesion' })
  else next()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
