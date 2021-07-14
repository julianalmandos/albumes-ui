import axios from 'axios'
import store from '@/store/index'

const api = axios.create({
  baseURL: 'https://albumes-api.herokuapp.com/',
})

api.getInterviews = async () => {
  const response = await api.get('interviews/')
  return response.data
}

api.createInterview = async (name, code) => {
  const response = await api.post('interviews/', {
    name,
    youtube_video: {
      code
    }
  });

  return response.data
}

api.getAlbums = async () => {
  const response = await api.get('albums/')
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

api.editAlbum = async (id, name, qrPosition, interviews) => {
  const response = await api.put(`albums/${id}/`, {
    name,
    qr_position: qrPosition,
    interview_ids: interviews
  });
  return response.data
}

api.downloadAlbum = async (id) => {
  const response = await api.get(`albums/${id}/download/`, {
    responseType: 'blob'
  });
  return response.data
}

api.loginWithGoogle = async (code) => {
  const response = await api.post('auth/login/', { 
    code, 
    provider: 'google-oauth2',
    redirect_uri: window.origin
  });
  return response.data
}

api.getUser = async (id) => {
  const response = await api.get(`users/${id}/`)
  return response.data
}

api.updateUser = async (userModified) => {
  const { id } = userModified
  const response = await api.put(`users/${id}/`, userModified)
  return response.data
}

api.interceptors.request.use(config => {
    const { getToken:token } = store.getters

    if (token) {
      config.headers.Authorization = `Token ${token}`
    }

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