<template>
  <Layout>
    <template #title>Mis álbumes</template>
    <template #subtitle>Administra tus álbumes</template>
    <ul>
      <li>
        <Album
          v-for="(album, index) in albums"
          :key="index"
          :album="album"
          @deleteAlbum="showDeleteAlbumModal"
        />
      </li>
    </ul>
    <div v-if="showModal" class="modal">
      <div class="modal__dialog">
        <p>{{modalMessage}}</p>
        <div class="modal__buttons">
          <CButton @click="deleteAlbum" variant="white large">
            Si
          </CButton>
          <CButton @click="hideModal" variant="red large">
            No
          </CButton>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Album from '@/components/Album.vue';
import CButton from '@/components/CButton.vue';
import Layout from '@/components/Layout.vue';

import api from '@/services/index'

export default {
  name: 'Albums',
  components: {
    Album,
    CButton,
    Layout
  },
  data() {
    return {
      albums: [],
      showModal: false
    }
  },
  async created() {
    this.albums = await api.getAlbums()
  },
  methods: {
    getAlbumName(albumId) {
      return this.albums.find(album => album.id === albumId).name;
    },
    showDeleteAlbumModal(albumId) {
      this.modalMessage = `¿Está seguro que desea eliminar el álbum "${this.getAlbumName(albumId)}"?`;
      this.showModal = true;
    },
    hideModal() {
      this.showModal = false;
      this.modalMessage = '';
    },
    deleteAlbum() {
      this.hideModal();
      // TODO: delete album
    }
  }
}
</script>

<style>
.modal {
  display: grid;
  place-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
  inset: 0;
}

.modal__dialog {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 3rem 4rem;
  border-radius: 12px;
  max-width: 85%;

  background-color: var(--bg-button);
  color: white;
}

.modal__dialog > p {
  margin-bottom: 2rem;
  font-size: 1.5rem;
  max-width: 30ch;
}

.modal__buttons {
  display: flex;
  gap: 2rem;
}
</style>