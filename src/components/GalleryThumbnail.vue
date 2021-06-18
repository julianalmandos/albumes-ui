<template>
  <div class="thumbnail">
    <img v-for="(thumbnail, index) in getThumbnails"
      :key="index"
      :class="getClass(index)"
      :src="thumbnail.img"
      :alt="thumbnail.alt"
    />
  </div>
</template>
<script>
const numberOfThumbnails = 3

export default {
  name: 'GalleryThumbnail',
  props: {
    'thumbnails': {
      type: Array,
      default: [],
      required: true
    }
  },
  methods: {
    getClass(index) {
      return `thumbnail__image_${index}`
    }
  },
  computed: {
    getThumbnails() {
      return this.thumbnails.slice(0, numberOfThumbnails);
    }
  }
}
</script>
<style scoped>

.thumbnail {
  display: flex;
  flex:  1;
  justify-content: center;
  width: 300px;
  height: 150px;
  position: relative;
}

img {
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  margin: auto;
}

.thumbnail__image_0 {
  z-index: 1;
  box-shadow: 0px 0px 4px 0px #020202;
}

.thumbnail__image_1 {
  transform: rotate(6deg);
}

.thumbnail__image_2 {
  transform: rotate(3deg);
}
    
</style>