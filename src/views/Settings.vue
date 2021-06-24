<template>
  <Layout>
    <template #title>Configuración</template>
    <template #subtitle>Configure aspectos generales de la plataforma como el modo de color, el tamaño de la letra o el número de elementos por página.</template>
    <form class="settings" @submit.prevent="saveSettings">
      <CSelect
        :label="'Colores'"
        :options="colorsOptions"
        v-model="colorsValue"
      ></CSelect>
      <CSelect
        :label="'Tamaño de letra'"
        :options="fontSizeOptions"
        v-model="fontSizeValue"
      ></CSelect>
      <CSelect
        :label="'Números de elementos por página'"
        :options="elementsPerPageOptions"
        v-model="elementsPerPageValue"
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

import api from '@/services/index.js';
import * as Settings from '@/utils/SettingsUtils.js';

export default {
  name: 'Settings',
  components: {
    CButton,
    CSelect,
    Layout
  },
  data() {
    return {
      colorsValue: Settings.getColorModeDefaultOption(),
      fontSizeValue: Settings.getFontSizeDefaultOption(),
      elementsPerPageValue: Settings.getElementsPerPageDefaultOption(),
      colorsOptions: Settings.getColorModeOptions(),
      fontSizeOptions: Settings.getFontSizeOptions(),
      elementsPerPageOptions: Settings.getElementsPerPageOptions()
    }
  },
  async mounted() {
    const settings = await api.getSettings();
    this.colorsValue = settings.color_mode;
    this.fontSizeValue = settings.font_size;
    this.elementsPerPageValue = settings.elements_per_page;
  },
  methods: {
    saveSettings() {
      // TODO: save configuration
    }
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