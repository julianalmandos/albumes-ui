<template>
  <button @click="$emit('click')" class="button">
    <span v-if="hasIcon('left')" class="button__left">
      <slot name="left-icon"></slot>
    </span>
    <span v-if="hasText" class="button__text">
      <slot></slot>
    </span>
    <span v-if="hasIcon('right')" class="button__right">
      <slot name="right-icon"></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'CButton',
  computed: {
    hasText() {
      return this.$slots['default'];
    }
  },
  methods: {
    hasIcon(position) {
      return this.$slots[`${position}-icon`];
    }
  }
}
</script>

<style>
.button {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--bg-button);
  box-shadow: var(--shadow-button);
  color: white;
  fill: white;

  border-radius: 7px;
  padding: 0.75em 0.75rem;
  font-size: clamp(0.7rem, 3vw, 0.8rem);
}

.button:hover {
  background-color: var(--bg-button-hover);
}

.button__left + .button__text {
  margin-left: 0.25rem;
}

.button__right + .button__text {
  margin-right: 0.25rem;
}

.button__left,
.button__right,
.button__left > svg,
.button__right > svg {
  height: 1rem;
}

.button[variant~="red"] {
  background-color: var(--bg-button-red);
}

.button[variant~="red"]:hover {
  background-color: var(--bg-button-red-hover);
}

.button[variant~="white"] {
  background-color: var(--bg-button-white);
  color: var(--bg-button);
  fill: var(--bg-button);
}

.button[variant~="white"]:hover {
  background-color: var(--bg-button-white-hover);
}

.button[variant~="large"] {
  padding: 0.75rem 3rem;
}

.button[variant~="squared"] {
  border-radius: 0px;
}
</style>