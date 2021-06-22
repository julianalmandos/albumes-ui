<template>
  <Layout>
    <template #title>3° Finaliza</template>
    <template #subtitle>tu álbum.</template>
    <div class="information">
      <CInput
        v-model.number="albumName"
      >
        <template #label>¡Ponle un nombre!</template>
        <input
          class="information__name"
          type="text"
          placeholder="Mi álbum de entrevistas"
          v-model="albumName"
        >
      </CInput>
      <CSelect
        :label="'¿Dónde quieres posicionar los códigos QR?'"
        :options="qrPositionOptions"
        v-model.number="qrPosition"
      ></CSelect>
      <img/>FOTO QR
    </div>
  </Layout>
</template>

<script>
import CInput from '@/components/CInput.vue';
import CSelect from '@/components/CSelect.vue';
import Layout from '@/components/Layout.vue';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'ThirdStep',
  components: {
    CInput,
    CSelect,
    Layout
  },
  data() {
    return {
      qrPositionOptions: [
        {
          value: 0,
          label: 'Arriba a la izquierda'
        },
        {
          value: 1,
          label: 'Arriba a la derecha'
        },
        {
          value: 2,
          label: 'Abajo a la derecha'
        },
        {
          value: 3,
          label: 'Abajo a la izquierda'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['getAlbumName', 'getQrPosition']),
    albumName: {
      get() {
        return this.getAlbumName;
      },
      set(value) {
        this.setAlbumName(value);
      }
    },
    qrPosition: {
      get() {
        return this.getQrPosition;
      },
      set(value) {
        this.setQrPosition(value);
      }
    }
  },
  methods: {
    ...mapMutations(['setAlbumName', 'setQrPosition']),
    validate() {
      if (!this.albumName) {
        return false;
      }
      return true;
    }
  }
}
</script>

<style>
.information > *:not(:last-child) {
  margin-bottom: 3rem;
}

.information__name {
  border: none;
  border-radius: 0 0 11px 11px;
  text-align: center;
  text-align-last:center; /* For Chrome */
  padding: 0.75rem;
}

.information__image {
  width: min(400px, 80%);
}
</style>