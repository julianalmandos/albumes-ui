<template>
  <div class="album">
    <youtube :player-height="200" :player-width="350" :video-id="youtubeVideo"></youtube>
    <div class="album__information">
      <div class="album__description">
        <h3 class="album__title">{{album.name}}</h3>
        <p class="album__date">Armado el día {{parsedDate}}</p>
      </div>
      <div class="album__actions">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Album',
  props: [
    'album'
  ],
  computed: {
    parsedDate() {
      return this.album.created.split('T')[0].split('-').reverse().join('/');
    },
    youtubeVideo() {
      return this.album.interviews[0].youtube_video.code;
    }
  }
}
</script>

<style>
.album {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: var(--bg-tertiary);
  width: min(calc(4rem+700px), 80%);
  padding: 2rem;
  gap: 2rem;
  border-radius: 15px;
}

.album > * {
  flex: 1;
}

.album__information {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.album__description {
  text-align: left;
}

.album__title {
  color: var(--text-navbar);
  font-size: 2.25rem;
}

.album__date {
  font-family: var(--font-secondary);
  font-size: 1.2rem;
  margin-top: 0.5rem;
}
</style>