import Vue from 'vue'
import Vuex from 'vuex'

import requests from '@/store/modules/requests'
import albumsStore from '@/store/modules/albums'
import album from '@/store/modules/album'
import session from '@/store/modules/session'
import alertsStore from '@/store/modules/alerts'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    requests,
    albumsStore,
    album,
    session,
    alertsStore
  }
})

export default store
