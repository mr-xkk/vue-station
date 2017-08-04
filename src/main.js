// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import $ from 'jquery'
import Vuex from 'vuex'
import store from './library/publicInfo'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  $,
  store,
  template: '<App/>',
  components: { App }
})
