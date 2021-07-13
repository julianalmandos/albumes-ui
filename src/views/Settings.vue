<template>
  <Layout>
    <template #title>Configuración</template>
    <template #subtitle>Configure aspectos generales de la plataforma como el modo de color, el tamaño de la letra o el número de elementos por página.</template>
    <form class="settings" @submit.prevent="saveSettings">
      <CSelect
        :label="'Colores'"
        :options="colorsOptions"
        v-model="color_mode"
      ></CSelect>
      <div class="settings__buttons">
        <router-link class="buttons__cancel" to="/dashboard">
          <CButton variant="red large" type="button">Cancelar</CButton>
        </router-link>
        <CButton variant="large" type="submit">Guardar</CButton>
      </div>
    </form>
  </Layout>
</template>

<script>
import CButton from '@/components/CButton.vue';
import CSelect from '@/components/CSelect.vue';
import Layout from '@/components/Layout.vue';
import * as Settings from '@/utils/SettingsUtils.js';

import { mapFields } from 'vuex-map-fields';
import { mapActions, mapMutations } from 'vuex';

export default {
  name: 'Settings',
  components: {
    CButton,
    CSelect,
    Layout
  },
  data() {
    return {
      colorsOptions: Settings.getColorModeOptions()
    }
  },
  computed: {
    ...mapFields([
      'user.settings.color_mode',
    ])
  },
  methods: {
    ...mapActions(['getUser', 'updateUser']),
    ...mapMutations(['addAlert']),
    saveSettings() {
      this.updateUser();
      this.$router.go(-1);
      this.addAlert({
        msg: 'Configuración editada exitosamente!'
      });
    }
  },
  mounted() {
    this.getUser()
  }
}
</script>

<style>
.settings {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: min(400px, 80%);
}

.settings > .input:not(:last-child) {
  margin-bottom: 2rem;
}

.settings__buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

@media (max-width: 720px) {
  .settings__buttons {
    display: flex;
    flex-direction: column;
  }

  .buttons__cancel {
    order: 2;
  }

  .settings__buttons > *:last-child {
    order: 1;
    margin-bottom: 1rem;
  }

  .buttons__cancel > button {
    width: 100%;
  }
}
</style>