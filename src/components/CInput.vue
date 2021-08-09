<template>
  <div class="input">
    <label class="input__label" :for="name">
      <slot name="label"></slot>
    </label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CInput",
  props: {
    name: String,
  },
};
</script>

<style>
.input {
  display: flex;
  flex-direction: column;

  width: 100%;
  font-family: var(--font-secondary);
}

.input__label {
  background-color: var(--bg-button);
  color: var(--bg-primary);
  font-size: clamp(1rem, 2vw, 1.5rem);
  padding: 0.35rem 1rem;
  border-radius: 11px 11px 0 0;
}
</style>