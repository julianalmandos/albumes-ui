<template>
  <Layout>
    <template #title>Mis álbumes</template>
    <template #subtitle>Alministra tus álbumes</template>
    <Album v-for="(album, index) in albums" :key="index"/>
  </Layout>
</template>

<script>
import Album from '@/components/Album.vue';
import Layout from '@/components/Layout.vue';

export default {
  name: 'Albums',
  components: {
    Album,
    Layout
  }
}
</script>

<style>

</style>