<template>
  <div class="new">
    <component :is="steps[currentStep]" ref="currentStep"></component>
    <div class="new__footer">
      <div class="footer__button">
        <CButton v-if="currentStep > 0 && currentStep < 3" @click="currentStep--">
          Atras
        </CButton>
      </div>
      <div class="footer__button">
        <CButton v-if="currentStep != 3" @click="goToNextStep">
          Siguiente
        </CButton>
      </div>
    </div>
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
      if (this.currentStep === 2) {
        // submittear
      }
      if (this.$refs.currentStep.validate()) {
        this.currentStep++;
      }
    },
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