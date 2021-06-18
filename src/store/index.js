import Vue from 'vue'
import Vuex from 'vuex'

import requests from '@/store/requests'
import albumsStore from '@/store/albums'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    requests,
    albumsStore
  }
})

export default store
