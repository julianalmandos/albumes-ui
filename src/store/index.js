import Vue from 'vue'
import Vuex from 'vuex'

import requests from '@/store/modules/requests'
import albumsStore from '@/store/modules/albums'
import album from '@/store/modules/album'
import settings from '@/store/modules/settings'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    requests,
    albumsStore,
    album,
    settings
  }
})

export default store
