<template>
  <div class="new">
    <form @submit.prevent>
      <component :is="steps[currentStep]" ref="currentStep"></component>
      <div v-if="currentStep < 3" class="new__footer">
        <div class="footer__button">
          <CButton v-if="currentStep > 0" @click="currentStep--" type="button">
            <template #left-icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
            </template>
            <span class="footer__button_text">
              Atrás
            </span>
          </CButton>
        </div>
        <div class="footer__text">
          {{ getSelectedInterviews.length }} entrevistas seleccionadas
        </div>
        <div class="footer__button">
          <CButton v-if="currentStep < 2" @click="goToNextStep" type="button">
            <span class="footer__button_text">
              Siguiente
            </span>
            <template #right-icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
            </template>
          </CButton>
          <CButton v-else-if="currentStep === 2" type="submit" @click="submitAlbum">
            <template #left-icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
            </template>
            {{ finishStepTextLabel }}
          </CButton>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import FirstStep from '@/components/form/FirstStep.vue'
import SecondStep from '@/components/form/SecondStep.vue'
import ThirdStep from '@/components/form/ThirdStep.vue'

import CButton from '@/components/CButton.vue';
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'NewAlbum',
  components: {
    CButton
  },
  props: {
    finishStepTextLabel: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      steps: [
        FirstStep,
        SecondStep,
        ThirdStep,
      ],
      currentStep: 0
    }
  },
  mounted() {
    this.getInterviews();
  },
  methods: {
    goToNextStep() {
      if (this.$refs.currentStep.validate()) {
        this.currentStep++;
      }
    },
    submitAlbum() {
      if (this.$refs.currentStep.validate()) {
        this.$emit('submit')
        this.$router.push({ name: "Albums" });
      }
    },
    ...mapActions(['getInterviews', 'setAlbumSelected'])
  },
  computed: {
    ...mapGetters(['getSelectedInterviews'])
  }
}
</script>

<style>
.new {
  padding-bottom: 10rem;
}

.new__footer {
  position: fixed;
  width: 100%;
  bottom: 0;
  gap: 1em;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  background-color: var(--bg-primary);
  -webkit-box-shadow: 0px -1px 8px -3px rgba(0,0,0,0.5);
  -moz-box-shadow: 0px -1px 8px -3px rgba(0,0,0,0.5);
  box-shadow: 0px -1px 8px -3px rgba(0,0,0,0.5);
}

.new__footer > * {
  display: flex;
  justify-content: center;
}

.footer__text {
  font-size: 1rem; 
  hyphens: auto;
  text-align: center;
}

@media (max-width: 720px) {
  .footer__button_text {
    display: none;
  }
}

</style>