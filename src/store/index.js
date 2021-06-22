import Vue from 'vue'
import Vuex from 'vuex'

import requests from '@/store/modules/requests'
import albumsStore from '@/store/modules/albums'
import album from '@/store/modules/album'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    requests,
    albumsStore,
    album
  }
})

export default store
