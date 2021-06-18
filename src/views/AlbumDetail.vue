<template>
  <div>
    <LightBox 
      :media="media"
      :showCaption="true"
      @onClosed="goToAlbumList"
    />
  </div>
</template>
<script>
  import LightBox from 'vue-it-bigger'
  import('vue-it-bigger/dist/vue-it-bigger.min.css')

  import { mapState } from 'vuex'

  export default {
    name: 'AlbumDetail',

    components: {
      LightBox,
    },

    computed: {
      ...mapState({
        album: state => state.albumsStore.album
      }),
      media() {
        if (!this.album.interviews) { return [] };

        return this.album.interviews.map((interview) => {
          return {
            type: 'youtube',
            thumb: interview.youtube_video.thumbnail,
            id: interview.youtube_video.code,
            caption: interview.name
          }
        })
      }
    },

    created() {
      const id = this.$route.params.id
      this.getAlbumById(id)
    },

    methods: {
      getAlbumById(id) {
        this.$store.dispatch('getAlbumById', id)
      },
      goToAlbumList() {
        this.$router.push({ name: 'Albums' })
      }
    }
  }
</script>
<style>
  /* 
   * Necessary because LightBox does not allow clicking 
   * on the foot of the video 
   */
  iframe {
    height: 70% !important;
  }

  /* 
   * Required because LightBox does not support fixed gallery
   * https://github.com/haiafara/vue-it-bigger/issues/12
   */
  .vib-hideable {
    transition: opacity .100s ease !important
  } 

  .vib-hidden {
    opacity: 10 !important
  }
</style>
