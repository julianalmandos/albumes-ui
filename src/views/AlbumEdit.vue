<template>
  <AlbumForm
    @submit="editAlbum"
    finishStepTextLabel="Editar álbum"
  />
</template>

<script>
import AlbumForm from '@/components/form/AlbumForm'
import { mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'AlbumEdit',
  
  components: {
    AlbumForm
  },

  methods: {
    ...mapActions(['getAlbumById', 'editAlbum']),
    ...mapMutations(['setAlbumToForm']),
    ...mapGetters(['getAlbum']),
  },

  async mounted() {
    const { id } = this.$route.params;

    await this.getAlbumById(id);
    const album = this.getAlbum();

    this.setAlbumToForm(album);
  }
}
</script>
