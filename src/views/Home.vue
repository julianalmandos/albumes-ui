<template>
  <div class="home">
    <h2 class="home__title">¡Bienvenido a Álbumes!</h2>
    <h3 class="home__subtitle">Creá, elegí e imprimí tus propios álbumes para concientizar a la población sobre desastres naturales.</h3>
    <ol class="home__steps">
      <li class="home__step">
        <FirstStep />        
        <p>Crea un álbum interactivo con fotos y códigos QR accesibles.</p>
      </li>
      <li class="home__step">
        <SecondStep />
        <p>Elegí entre las más de 10 entrevistas a sobrevivientes de desastres naturales.</p>
      </li>
      <li class="home__step">
        <ThirdStep />
        <p>Imprimí tu álbum de fotos junto a los códigos QR relacionados.</p>
      </li>
    </ol>
    <div class="home__login">
      <h4>¡Comenza ya!</h4>
        <CButton variant="red squared" @click="loginWithGoogle">
          <template #left-icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" fill-rule="evenodd" clip-rule="evenodd"/></svg>
          </template>
          Continuar con Google
        </CButton>
    </div>
  </div>
</template>

<script>
import CButton from '@/components/CButton.vue';

import FirstStep from '@/components/icons/FirstStep.vue';
import SecondStep from '@/components/icons/SecondStep.vue';
import ThirdStep from '@/components/icons/ThirdStep.vue';

import api from '@/services/index';


export default {
  name: 'Home',

  components: {
    CButton,
    FirstStep,
    SecondStep,
    ThirdStep
  },

  methods: {
    async loginWithGoogle() {
      const authCode = await this.$gAuth.getAuthCode();
      await this.$store.dispatch('loginWithGoogle', authCode);
      
      if (this.$store.getters.isUserLoggedIn) {
        this.$router.push({ name: 'Dashboard' })
      }
    }
  },
}
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 100vh;

  color: var(--text-secondary);
  font-family: var(--font-secondary);
  padding-top: 3.5rem;
}

.home__title {
  color: var(--text-primary);
  font-family: var(--font-primary);
  font-size: clamp(2rem, 3.5vw, 4rem);
  max-width: 85%;
}

.home__subtitle {
  width: min(60ch, 85%);
  margin-top: 2rem;
  font-size: clamp(1rem, 3vw, 1.75rem);
}

.home__steps {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

  gap: 3rem;
  margin: 4rem 0;
}

.home__step {
  width: min(300px, 80%);
}

.home__step > p {
  font-size: clamp(1rem, 3vw, 1.5rem);
  margin-top: 1rem;
}

.home__login {
  padding: 3rem;
  width: 100%;
  background-color: var(--bg-secondary);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home__login > h4 {
  font-size: clamp(2rem, 3vw, 3rem);
  margin-bottom: 2rem;
}

.home__step > span,
.home__login > h4 {
  background: var(--grad-pink-inv);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
