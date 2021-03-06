// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import App from '@/App'
import router from '@/router'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  iconfont: 'md' || 'mdi' || 'fa' || 'fa4'
})
sync(store, router)

// /* eslint-disable no-new */

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
