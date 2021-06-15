<template>
  <div v-if="interviews" class="thumbnail">
    <img class="thumbnail__frontground" 
      v-if="frontgroundInterview"
      :src="frontgroundInterview.youtube_video.thumbnail"
      :alt="frontgroundAlternativeText"
      >
    <img class="thumbnail__first-background" 
      v-if="firstBackgroundInterview"
      :src="firstBackgroundInterview.youtube_video.thumbnail"
      :alt="firstBackgroundAlternativeText">
    <img class="thumbnail__second-background" 
      v-if="secondBackgroundInterview"
      :src="secondBackgroundInterview.youtube_video.thumbnail"
      :alt="firstBackgroundAlternativeText">
  </div>    
</template>
<script>
export default {
  name: 'GalleryThumbnail',
  props: ['interviews'],
  computed: {
    frontgroundInterview() {
      if (this.interviews.length === 0) return null;
      return this.interviews[0]
    },

    frontgroundAlternativeText() {
      return `Primera imagen de la entrevista ${this.frontgroundInterview.name}`
    },

    firstBackgroundInterview() {
      if (this.interviews.length === 1) return null;
      return this.interviews[1]
    },

    firstBackgroundAlternativeText() {
      return `Segunda imagen de la entrevista ${this.firstBackgroundInterview.name}`
    },

    secondBackgroundInterview() {
      if (this.interviews.length === 2) return null;
      return this.interviews[2]
    },

    secondBackgroundAlternativeText() {
      return `Segunda imagen de la entrevista ${this.secondBackgroundInterview.name}`
    },
  }
}
</script>
<style scoped>

.thumbnail {
  display: flex;
  justify-content: center;
  flex: 1;
}

img {
  width: 300px;
  box-sizing: border-box;
  flex: none;
}

.thumbnail__frontground {
  z-index: 1;
  position: relative;
  box-shadow: 0px 0px 4px 0px #020202;
}

.thumbnail__first-background {
  margin-left: -300px;
  transform: rotate(6deg);
}

.thumbnail__second-background {
  margin-left: -300px;
  transform: rotate(3deg);
}
    
</style>