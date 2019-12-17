import Vue from 'vue'
import axios from 'axios'

import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

import OlimpoTpv from './OlimpoTpv'
import router from './router'
import store from './store'

Vue.use(require('vue-electron'))

Vue.http = Vue.prototype.$http = axios.create({
  baseURL: 'http://api.olimpoapp.local',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#olimpoTpv',
  components: { OlimpoTpv },
  router,
  store,
  vuetify,
  template: '<OlimpoTpv/>'
})
