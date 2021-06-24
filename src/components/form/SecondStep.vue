<template>
  <Layout>
    <template #title>2° Ordena</template>
    <template #subtitle>tu álbum.</template>
    <ol class="selected-interviews">
      <li class="selected-interview" v-for="(interview, index) in getSelectedInterviews" :key="interview.id">
        <span class="selected-interview__number">{{index + 1}}.</span>
        <img :alt="interview.name + ' video'" :src="interview.youtube_video.thumbnail"/>
        <div class="selected-interview__buttons"><!--SVGs inside this container should have an ALT text or sth for a11y-->
          <button class="selected-interview__button" v-if="index !== 0" @click="moveUp(index)" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
            <span>Mover hacia arriba</span>
          </button>
          <button class="selected-interview__button" v-if="index !== getSelectedInterviews.length - 1" @click="moveDown(index)" type="button">
            <span>Mover hacia abajo</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
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

.selected-interview__button {
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--bg-button-grey);
  color: var(--text-navbar);
  fill: var(--text-navbar);

  font-size: 0.8rem;
  font-weight: bold;
  line-height: 1.2;
  width: 5rem;
  padding: 0.5rem;
}

.selected-interview__button:hover {
  background-color: var(--bg-button-grey-hover);
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

  .selected-interview__button > span {
    display: none;
  }
}
</style>