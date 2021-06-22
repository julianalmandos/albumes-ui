<template>
  <Layout>
    <template #title>Configuración</template>
    <template #subtitle>Configure aspectos generales de la plataforma como el modo de color, el tamaño de la letra o el número de elementos por página.</template>
    <form class="configuration" @submit.prevent="saveConfiguration">
      <CSelect
        :label="'Colores'"
        :options="colorsOptions"
        v-model.number="colorsValue"
      ></CSelect>
      <CSelect
        :label="'Tamaño de letra'"
        :options="fontSizeOptions"
        v-model.number="fontSizeValue"
      ></CSelect>
      <CSelect
        :label="'Números de elementos por página'"
        :options="elementsPerPageOptions"
        v-model.number="elementsPerPageValue"
      ></CSelect>
      <div class="configuration__buttons">
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

export default {
  name: 'Configuration',
  components: {
    CButton,
    CSelect,
    Layout
  },
  data() {
    return {
      colorsValue: 0,
      fontSizeValue: 0,
      elementsPerPageValue: 0,
      colorsOptions: [
        {
          value: 0,
          label: 'Modo original'
        },
        {
          value: 1,
          label: 'Modo daltónico'
        },
      ],
      fontSizeOptions: [
        {
          value: 0,
          label: '1x'
        },
        {
          value: 1,
          label: '2x'
        },
        {
          value: 2,
          label: '4x'
        },
      ],
      elementsPerPageOptions: [
        {
          value: 0,
          label: '2'
        },
        {
          value: 1,
          label: '4'
        },
      ]
    }
  },
  methods: {
    saveConfiguration() {
      // TODO: save configuration
    }
  }
}
</script>

<style>
.configuration {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: min(400px, 80%);
}

.configuration > .input:not(:last-child) {
  margin-bottom: 2rem;
}

.configuration__buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

@media (max-width: 720px) {
  .configuration__buttons {
    display: flex;
    flex-direction: column;
  }

  .buttons__cancel {
    order: 2;
  }

  .configuration__buttons > *:last-child {
    order: 1;
    margin-bottom: 1rem;
  }

  .buttons__cancel > button {
    width: 100%;
  }
}
</style>