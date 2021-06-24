<template>
  <div class="new">
    <form @submit.prevent="createAlbum">
      <component :is="steps[currentStep]" ref="currentStep"></component>
      <div v-if="currentStep < 3" class="new__footer">
        <div class="footer__button">
          <CButton v-if="currentStep > 0" @click="currentStep--" type="button">
            <template #left-icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
            </template>
            Atras
          </CButton>
        </div>
        <div class="footer__button">
          <CButton v-if="currentStep < 2" @click="goToNextStep" type="button">
            Siguiente
            <template #right-icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
            </template>
          </CButton>
          <CButton v-else-if="currentStep === 2" type="submit">
            <template #left-icon>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
            </template>
            Crear álbum
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
import FourthStep from '@/components/form/FourthStep.vue'

import CButton from '@/components/CButton.vue';
import { mapActions } from 'vuex'

export default {
  name: 'NewAlbum',
  components: {
    CButton
  },
  data() {
    return {
      steps: [
        FirstStep,
        SecondStep,
        ThirdStep,
        FourthStep
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
    createAlbum() {
      if (this.$refs.currentStep.validate()) {
        this.createAlbumAction();
        this.currentStep++;
      }
    },
    ...mapActions({ createAlbumAction: 'createAlbum' }),
    ...mapActions(['getInterviews'])
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
  display: flex;
  justify-content: space-between;
  padding: 1rem 4rem;
  background-color: var(--bg-primary);
  -webkit-box-shadow: 0px -1px 8px -3px rgba(0,0,0,0.5);
  -moz-box-shadow: 0px -1px 8px -3px rgba(0,0,0,0.5);
  box-shadow: 0px -1px 8px -3px rgba(0,0,0,0.5);
}
</style>