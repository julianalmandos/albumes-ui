import App from './App.vue'
import GAuth from 'vue-google-oauth2'
import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import router from './router'
import store from './store'

require('./assets/reset.css');
require('./assets/root.css');

Vue.config.productionTip = false
Vue.use(VueYouTubeEmbed)

const gauthOption = {
  clientId: process.env.VUE_APP_CLIENT_ID,
  scope: 'profile email',
}
Vue.use(GAuth, gauthOption)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
