<template>
  <div class="new_interview">

    <header class="new_interview__header" v-show="!isFormVisible" @click="showForm">
      <h3>¿No aparece la entrevista que querés en el listado?</h3>
      <CButton>
        <template #left-icon>
          <slot name="submitIcon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
          </slot>
        </template>
        Haz click aquí para agregarla          
      </CButton>
    </header>

    <transition name="fade">
      <form class="new_interview__form" @submit.prevent="submit" v-show="isFormVisible">
        <CInput class="new_interview__form_input">
          <template #label>¡Ponle un nombre!</template>
          <input
            class="interview__name"
            type="text"
            ref="name"
            placeholder="Mi álbum de entrevistas"
            v-model="interviewName"
            required
          >
        </CInput>

        <CInput class="new_interview__form_input">
          <template #label>¡Ingresa el código de Youtube de la entrevista!</template>
          <input
            class="interview__code"
            type="text"
            ref="code"
            placeholder="wxiT4CkO7CQ"
            v-model="interviewCode"
            maxlength="14"
            required
          >
          <div class="interview__code_suggestion" v-show="interviewCode">
            <youtube
              :video-id="interviewCode">
            </youtube>
            <p>https://www.youtube.com/watch?v=<span>{{ interviewCode }}</span></p>          
          </div>
        </CInput>

        <div class="new_interview__form_buttons">
          <CButton variant="red large" type="button" @click="hideForm">
            Cancelar
          </CButton>
          <CButton type="submit" class="new_interview__form_submit">
            <template #left-icon>
              <slot name="submitIcon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
              </slot>
            </template>
            <slot name="submitText">
              Agregar al listado
            </slot>
          </CButton>
        </div>        
      </form>
    </transition>

  </div>
</template>
<script>
  import CInput from '@/components/CInput.vue';
  import CButton from '@/components/CButton.vue';

  import { mapGetters, mapActions, mapMutations } from 'vuex';
  import { isValidYoutubeCode } from '@/utils/validators'


  export default {
    name: 'InterviewForm',
    components: {
      CInput,
      CButton
    },
    data() {
      return {
        isFormVisible: false
      }
    },
    computed: {
      ...mapGetters(['getInterviewName', 'getInterviewCode']),
      interviewName: {
        get() {
          return this.getInterviewName;
        },
        set(value) {
          this.setInterviewName(value);
        }
      },
      interviewCode: {
        get() {
          return this.getInterviewCode;
        },
        set(value) {
          this.setInterviewCode(value);
        }
      }
    },
    methods: {
      ...mapActions(['createInterview']),
      ...mapMutations([
        'setInterviewName',
        'setInterviewCode',
        'addAlert'
      ]),
      async submit() {

        if (!this.interviewName) {
          const error = 'Por favor, ingrese un nombre para la entrevista.';
          this.showError(error, this.$refs.name);

          return;
        };

        if (!await isValidYoutubeCode(this.interviewCode)) {
          const error = 'Por favor, verifique el código del video.';
          this.showError(error, this.$refs.code);

          return;
        };

        await this.createInterview();
      },
      showError(message, input) {
        this.addAlert({
          msg: message,
          variant: 'error'
        });
        input.focus();
      },
      showForm() {
        this.isFormVisible = true;
      },
      hideForm() {
        this.isFormVisible = false;
      }
    }
  }
</script>
<style>
  .interview__code,
  .interview__name {
    border: none;
    border-radius: 0 0 11px 11px;
    text-align: center;
    text-align-last:center;
    padding: 0.75rem;
  }

  .new_interview {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border-top: solid 1px var(--bg-gray);
    border-bottom: solid 1px var(--bg-gray);
    padding: 2rem;
    margin-bottom: 2rem;
    width: 100%;
  }

  .new_interview__form {
    display: flex;
    gap: 1rem;
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }

  .new_interview__form_buttons {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    gap: 0.4rem;
  }

  .new_interview__header {
    display: flex;
    gap: 1rem;
    color: var(--text-secondary);
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .new_interview__form_submit {
    align-self: center;
  }

  .interview__code_suggestion {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding-bottom: 1rem;
    background-color: var(--bg-navbar);
    border-bottom-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
  }

  .interview__code_suggestion > p {
    padding: 0 1rem;
  }

  .interview__code_suggestion > * > span {
    color: var(--bg-button-red);
  }

  .interview__code_suggestion > * > iframe {
    width: 100%;
  }

  .fade-enter-active {
    transition: opacity .8s;
  }

  .fade-leave-active {
    transition: opacity .3s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>