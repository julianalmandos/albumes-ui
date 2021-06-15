<template>
  <div class="select">
    <label class="select__label" :for="name">{{label}}</label>
    <select
      class="select__input"
      :name="name"
      :value="value"
      @change="$emit('input', $event.target.value)"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >{{option.label}}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'CSelect',
  props: {
    name: {
      type: String
    },
    label: {
      type: String
    },
    value: {
      type: Number
    },
    options: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>
.select {
  display: flex;
  flex-direction: column;

  width: 100%;
  font-family: var(--font-secondary);
}

.select__label {
  background-color: var(--bg-navbar);
  color: var(--text-navbar);
  font-size: clamp(1rem, 2vw, 1.5rem);
  padding: 0.35rem 1rem;
  border-radius: 11px 11px 0 0;
}

.select__input {
  border: none;
  border-radius: 0 0 11px 11px;
  text-align: center;
  text-align-last:center; /* For Chrome */
  padding: 0.75rem;
}

.select__input:hover {
  cursor: pointer;
}
</style>