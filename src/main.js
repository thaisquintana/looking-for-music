// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueSlider from 'vue-slider-component'
import App from './App'
import router from './router'
import store from './store/store'
import VueMoment from 'vue-moment'

import 'vue-slider-component/theme/default.css'
import './assets/styles/main.scss'

Vue.component('VueSlider', VueSlider)
Vue.use(VueMoment)

export const bus = new Vue()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
