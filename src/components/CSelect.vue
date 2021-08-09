<template>
  <CInput :name="name">
    <template #label>{{ label }}</template>
    <select
      class="select"
      :name="name"
      :id="name"
      :value="value"
      @change="$emit('input', $event.target.value)"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
        :selected="true"
      >
        {{ option.label }}
      </option>
    </select>
  </CInput>
</template>

<script>
import CInput from "@/components/CInput.vue";

export default {
  name: "CSelect",
  components: {
    CInput,
  },
  props: {
    name: {
      type: String,
    },
    label: {
      type: String,
    },
    value: {},
    options: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style>
.select {
  border: none;
  border-radius: 0 0 11px 11px;
  text-align: center;
  text-align-last: center; /* For Chrome */
  padding: 0.75rem;
}

.select:hover {
  cursor: pointer;
}
</style>