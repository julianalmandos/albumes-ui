import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueYouTubeEmbed from 'vue-youtube-embed'

require('./assets/reset.css');
require('./assets/root.css');

Vue.config.productionTip = false
Vue.use(VueYouTubeEmbed)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
