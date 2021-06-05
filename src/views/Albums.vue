<template>
  <Layout>
    <template #title>Mis álbumes</template>
    <template #subtitle>Alministra tus álbumes</template>
    <ul>
      <li>
        <Album v-for="(album, index) in albums" :key="index" :album="album"/>
      </li>
    </ul>
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
  },
  data() {
    return {
      albums: [
        {
          id: 1,
          name: 'Album prueba',
          created: '2021-05-18T17:58:24.218506Z',
          interviews: [
            {
                "id": 3,
                "name": "Interview 03 - Dichato 02 - VIII Region - Sra Juana",
                "youtube_video": {
                    "code": "N617bK6pnjg",
                    "thumbnail": "https://i.ytimg.com/vi/N617bK6pnjg/maxresdefault.jpg",
                    "url": "https://www.youtube.com/watch?v=N617bK6pnjg"
                }
            },
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>