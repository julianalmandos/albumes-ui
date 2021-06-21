<template>
  <Layout>
    <template #title>Mis álbumes</template>
    <template #subtitle>Administra tus álbumes</template>

    <ul>
      <li class="albums__list">
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
import Album from '@/components/Album.vue'
import CButton from '@/components/CButton.vue'
import Layout from '@/components/Layout.vue'
import Loader from '@/components/share/Loader.vue'

import { mapActions, mapState } from 'vuex'

export default {
  name: 'Albums',

  components: {
    Album,
    CButton,
    Layout,
    Loader
  },

  data() {
    return {
      showModal: false,
      albumToRemove: null
    }
  },

  computed: {
    ...mapState({
      albums: state => state.albumsStore.albums
    })
  },

  methods: {
    getAlbumName(albumId) {
      return this.albums.find(album => album.id === albumId).name;
    },
    showDeleteAlbumModal(albumId) {
      this.modalMessage = `¿Está seguro que desea eliminar el álbum "${this.getAlbumName(albumId)}"?`;
      this.showModal = true;

      this.albumToRemove = albumId;
    },
    hideModal() {
      this.showModal = false;
      this.modalMessage = '';
    },
    deleteAlbum() {
      this.hideModal();
      this.$store.dispatch('deleteAlbum', this.albumToRemove);
    },
    getAlbums() {
      this.$store.dispatch('getAlbums');
    }
  },

  created() {
    this.getAlbums();
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
  z-index: 2;

  height: 100vh;
  width: 100vw;
}

.modal__dialog {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  max-width: 85%;

  padding: 2rem;
  border-radius: 12px;

  background-color: var(--bg-button);
  color: white;
}

.modal__dialog > p {
  margin-bottom: 2.5rem;
  max-width: 30ch;
  font-size: clamp(1.2rem, 3vw, 1.4rem);  
}

.modal__buttons {
  display: flex;
  gap: 2rem;
}

.albums__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>