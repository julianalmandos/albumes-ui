import Vue from 'vue'
import Vuex from 'vuex'

import requests from '@/store/requests'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    requests
  }
})

export default store
