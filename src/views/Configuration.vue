<template>
  <Layout>
    <template #title>Configuración</template>
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
        <router-link to="/">
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

  width: min(400px, 85%);
}

.configuration > .select:not(:last-child) {
  margin-bottom: 2rem;
}

.configuration__buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>