<template>
  <Layout>
    <template #title>1° Selecciona</template>
    <template #subtitle>los videos que desees agregar a tu álbum.</template>
    <ul class="interviews">
      <li class="interview" v-for="(interview, index) in getInterviews" :key="index">
        <youtube
          :video-id="interview.youtube_video.code">
        </youtube>
        <button @click="toggleSelection(interview.id)" :class="['interview__button', { 'interview__button--selected': isSelected(interview.id) }]">
          {{isSelected(interview.id) ? 'Deseleccionar' : 'Seleccionar' | capitalize}}
        </button>
      </li>
    </ul>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'FirstStep',
  components: {
    Layout
  },
  computed: {
    ...mapGetters(['getInterviews', 'getSelectedInterviews']),
    isSelected() {
      return (id) => this.getSelectedInterviews.includes(id);
    }
  },
  filters: {
    capitalize(value) {
      return value.toUpperCase();
    }
  },
  methods: {
    ...mapMutations({ 'toggleSelectionMutation': 'toggleSelection' }),
    validate() {
      if (!this.getSelectedInterviews.length) {
        return false;
      }
      return true;
    },
    toggleSelection(interviewId) {
      this.toggleSelectionMutation(interviewId);
    }
  }
}
</script>

<style>
.interviews {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem 4rem;
  width: min(1200px, 90%);
}

.interview iframe {
  width: 500px;
  height: 400px;
}

.interview__button {
  background-color: var(--bg-button-blue);
  padding: 0.75rem 0;
  width: 100%;
}

.interview__button--selected {
  background-color: var(--bg-button-red);
  color: white;
  fill: white;
}

@media (max-width: 720px) {
  .interview {
    max-width: 90%;
  }

  .interview iframe {
    max-width: 100%;
  }
}
</style>