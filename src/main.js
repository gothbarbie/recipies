import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './App'
import { router } from './router'
import { store } from '@/store/store'

Vue.use(VueResource)

Vue.http.options.root = 'https://dinner-time-2db88.firebaseio.com'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
