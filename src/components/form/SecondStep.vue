<template>
  <Layout>
    <template #title>2. Ordena</template>
    <template #subtitle>tu álbum.</template>
    <ol class="selected-interviews">
      <li
        class="selected-interview"
        v-for="(interview, index) in getSelectedInterviews"
        :key="interview.id"
      >
        <span class="selected-interview__number" tabindex="0"
          >{{ index + 1 }}.</span
        >

        <div class="selected-interview__thumbnail" tabindex="0">
          <img
            :alt="interview.name + ' video'"
            :src="interview.youtube_video.thumbnail"
          />
        </div>

        <div class="selected-interview__buttons">
          <button
            class="selected-interview__button"
            v-if="index !== 0"
            @click="moveUp(index)"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"
              />
            </svg>
            <span>Mover hacia arriba</span>
          </button>

          <button
            class="selected-interview__button"
            v-if="index !== getSelectedInterviews.length - 1"
            @click="moveDown(index)"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"
              />
            </svg>
            <span>Mover hacia abajo</span>
          </button>
        </div>
      </li>
    </ol>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "SecondStep",
  components: {
    Layout,
  },
  computed: {
    ...mapGetters(["getInterviews"]),
    ...mapGetters({ getSelectedInterviewsIndexes: "getSelectedInterviews" }),
    getSelectedInterviews() {
      return this.getSelectedInterviewsIndexes.map((interviewId) =>
        this.getInterviews.find((interview) => interview.id === interviewId)
      );
    },
  },
  methods: {
    ...mapMutations(["moveInterviewUp", "moveInterviewDown"]),
    validate() {
      return true;
    },
    // We can make some validations in these two methods but everything should be fine.
    moveUp(interviewIndex) {
      this.moveInterviewUp(interviewIndex);
    },
    moveDown(interviewIndex) {
      this.moveInterviewDown(interviewIndex);
    },
  },
};
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
  justify-content: space-between;

  background-color: var(--bg-tertiary);
  padding: 0.75rem 1rem;
  gap: 0.5rem;
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

.selected-interview__number {
  display: flex;
  justify-content: center;
  padding: 0.75rem;
  font-size: clamp(1.5rem, 3vw, 4rem);
  font-family: var(--font-primary);
  color: var(--text-navbar);
  background-color: var(--bg-button-grey);
  border-top-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

.selected-interview__thumbnail {
  display: flex;
  justify-content: center;
  flex: 2;
}

.selected-interview__thumbnail > img {
  max-width: 100%;
  max-height: 200px;
}

.selected-interview__buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 80%;
  padding: 0.2rem 0.75rem;
}

.selected-interview__button:hover {
  background-color: var(--bg-button-grey-hover);
}

@media (max-width: 720px) {
  .selected-interview__button > span {
    display: none;
  }

  .selected-interview__buttons {
    row-gap: 0.2rem;
  }
}
</style>