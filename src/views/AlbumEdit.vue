<template>
  <AlbumForm type="edit">
    <template #submitText>
      Editar álbum
    </template>
    <template #submitIcon>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z"/></svg>
    </template>
  </AlbumForm>
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
    ...mapActions(['getAlbumById']),
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
