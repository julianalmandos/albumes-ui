<template>
  <div class="created">
    <h2 class="created__title">
      ¡Álbum creado exitosamente!
    </h2>
    <router-link :to="`/albums/${getAlbumId}`">
      <CButton variant="large">
        Visualizar álbum
      </CButton>
    </router-link>
  </div>
</template>

<script>
import CButton from '@/components/CButton.vue';
import Layout from '@/components/Layout.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'FourthStep',
  components: {
    CButton,
    Layout
  },
  computed: {
    ...mapGetters(['getAlbumId'])
  }
}
</script>

<style>
.created {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 6rem;
}

.created__title {
  font-size: clamp(2rem, 3.5vw, 4rem);
  margin-bottom: 2rem;
}
</style>