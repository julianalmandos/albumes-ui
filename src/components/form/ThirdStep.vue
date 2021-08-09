<template>
  <Layout>
    <template #title>3. Finaliza</template>
    <template #subtitle>tu álbum.</template>
    <div class="information">
      <CInput name="interviewName">
        <template #label>¡Ponle un nombre!</template>
        <input
          class="information__name"
          ref="name"
          id="interviewName"
          name="interviewName"
          type="text"
          placeholder="Mi álbum de entrevistas"
          v-model="albumName"
        />
      </CInput>
      <CSelect
        class="information__select"
        :label="'¿Dónde quieres posicionar los códigos QR?'"
        name="qrPositions"
        :options="qrPositionOptions"
        v-model="qrPosition"
      ></CSelect>
      <div class="information__image">
        <img
          class="information__qr"
          src="@/assets/images/dummy-qr.png"
          :alt="optionSelected.label"
          :variant="qrPosition"
        />
        <img
          class="information__placeholder"
          src="@/assets/images/image-placeholder.png"
          alt="Ejemplo de la imagen de la entrevista"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
import CInput from "@/components/CInput.vue";
import CSelect from "@/components/CSelect.vue";
import Layout from "@/components/Layout.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "ThirdStep",
  components: {
    CInput,
    CSelect,
    Layout,
  },
  data() {
    return {
      qrPositionOptions: [
        {
          value: "TOP_LEFT",
          label: "Arriba a la izquierda",
        },
        {
          value: "TOP_RIGHT",
          label: "Arriba a la derecha",
        },
        {
          value: "BOTTOM_RIGHT",
          label: "Abajo a la derecha",
        },
        {
          value: "BOTTOM_LEFT",
          label: "Abajo a la izquierda",
        },
      ],
      emptyNameError: false,
    };
  },
  computed: {
    ...mapGetters(["getAlbumName", "getQrPosition"]),
    albumName: {
      get() {
        return this.getAlbumName;
      },
      set(value) {
        this.setAlbumName(value);
      },
    },
    qrPosition: {
      get() {
        return this.getQrPosition;
      },
      set(value) {
        this.setQrPosition(value);
      },
    },
    optionSelected() {
      const optionsFound = this.qrPositionOptions.filter(
        (option) => option.value === this.qrPosition
      );

      return optionsFound.pop();
    },
  },
  mounted() {
    this.$refs.name.focus();
  },
  methods: {
    ...mapMutations(["setAlbumName", "setQrPosition", "addAlert"]),
    validate() {
      if (!this.albumName) {
        this.addAlert({
          msg: "Por favor, ingrese un nombre para el álbum.",
          variant: "error",
        });
        this.$refs.name.focus();
        return false;
      }
      return true;
    },
  },
};
</script>

<style>
.information__name {
  border: none;
  border-radius: 0 0 11px 11px;
  text-align: center;
  text-align-last: center; /* For Chrome */
  padding: 0.75rem;
}

.information__image {
  position: relative;
  margin: auto;
  width: 80%;
}

.information__placeholder {
  width: 100%;
  display: block;
}

.information__select,
.information__image {
  margin-top: 2rem;
}

.information__qr {
  position: absolute;
  width: 15%;
  border: 2px solid var(--bg-button-red);
}

.information__qr[variant*="TOP_LEFT"] {
  top: 0;
  left: 0;
}

.information__qr[variant*="TOP_RIGHT"] {
  top: 0;
  right: 0;
}

.information__qr[variant*="BOTTOM_RIGHT"] {
  bottom: 0;
  right: 0;
}

.information__qr[variant*="BOTTOM_LEFT"] {
  bottom: 0;
  left: 0;
}
</style>