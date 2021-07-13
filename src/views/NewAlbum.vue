<template>
  <AlbumForm
    @submit="createAlbum"
    finishStepTextLabel="Crear álbum"
  />
</template>

<script>
import AlbumForm from '@/components/form/AlbumForm'
import { mapActions } from 'vuex'

export default {
  name: 'NewAlbum',
  components: {
    AlbumForm
  },
  methods: {
    ...mapActions(['createAlbum']),
  },
}
</script>
