<template>
  <Layout>
    <template #title>2° Ordena</template>
    <template #subtitle>tu álbum.</template>
    <ol class="selected-interviews">
      <li class="selected-interview" v-for="(interview, index) in getSelectedInterviews" :key="interview.id">
        <span class="selected-interview__number">{{index + 1}}.</span>
        <img :alt="interview.name + ' video'" :src="interview.youtube_video.thumbnail"/>
        <div class="selected-interview__buttons">
          <button v-if="index !== 0" @click="moveUp(index)">
            Mover hacia arriba
          </button>
          <button v-if="index !== getSelectedInterviews.length - 1" @click="moveDown(index)">
            Mover hacia abajo
          </button>
        </div>
      </li>
    </ol>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'SecondStep',
  components: {
    Layout
  },
  computed: {
    ...mapGetters(['getInterviews']),
    ...mapGetters({'getSelectedInterviewsIndexes': 'getSelectedInterviews'}),
    getSelectedInterviews() {
      return this.getSelectedInterviewsIndexes.map(interviewId => this.getInterviews.find(interview => interview.id === interviewId));
    }
  },
  methods: {
    ...mapMutations(['moveInterviewUp', 'moveInterviewDown']),
    validate() {
      return true;
    },
    // We can make some validations in these two methods but everything should be fine.
    moveUp(interviewIndex) {
      this.moveInterviewUp(interviewIndex);
    },
    moveDown(interviewIndex) {
      this.moveInterviewDown(interviewIndex);
    }
  }
}
</script>

<style>
.selected-interviews > *:not(:last-child) {
  margin-bottom: 2rem;
}

.selected-interviews {
  max-width: 90%;
}

.selected-interview {
  display: flex;
  align-items: center;

  background-color: var(--bg-tertiary);
  padding: 0.75rem 1rem;
  padding-left: 0;
}

.selected-interview__number {
  font-size: clamp(2rem, 3vw, 4rem);
  width: 7.5rem;
}

.selected-interview > img {
  width: 28rem;
}

.selected-interview__buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1.5rem;
  row-gap: 1rem;
}

.selected-interview__buttons > * {
  background-color: var(--bg-button-grey);
  width: 5rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: var(--text-navbar);
  fill: var(--text-navbar);
  padding: 0.5rem;
  line-height: 1.2;
}

@media (max-width: 1024px) {
  .selected-interview > img {
    width: 20rem;
  }
}

@media (max-width: 720px) {
  .selected-interview > img {
    width: 10rem;
  }
}
</style>