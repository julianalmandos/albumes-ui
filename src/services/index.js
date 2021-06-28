import axios from 'axios'
import store from '@/store/index'

const api = axios.create({
  baseURL: 'https://albumes-api.herokuapp.com/',
})

api.getAlbums = async () => {
  const response = await api.get('albums/')
  return response.data
}

api.getInterviews = async () => {
  const response = await api.get('interviews/')
  return response.data
}

api.getSettingsById = async (id) => {
  const response = await api.get(`settings/${id}/`)
  return response.data
}

api.updateSettings = async (newSettings) => {
  const { id } = newSettings
  const response = await api.put(`settings/${id}/`, newSettings)
  return response.data
}

api.getAlbumById = async (id) => {
  const response = await api.get(`albums/${id}/`)
  return response.data
}

api.deleteAlbum = async (id) => {
  const response = await api.delete(`albums/${id}/`)
  return response.data
}

api.createAlbum = async (name, qrPosition, interviews) => {
  const response = await api.post(`albums/`, {
    name,
    qr_position: qrPosition,
    interview_ids: interviews
  });
  return response.data
}

api.interceptors.request.use(config => {
    store.commit('loading')
    return config
  }, () => {
    store.commit('error')
})

api.interceptors.response.use(response => {

    if (response.status == 200 && response.data.length == 0) { 
      store.commit('empty')
    } else {
      store.commit('success')
    }
    
    return response
  }, () => {
    store.commit('error')
})

export default api