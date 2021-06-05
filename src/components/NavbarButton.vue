<template>
  <button class="button">
    <slot name="icon"></slot>
    <slot name="title"></slot>
  </button>
</template>

<script>
export default {
  name: 'NavbarButton'
}
</script>

<style>
.button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  font-weight: bold;
}

.button > * {
  margin-bottom: 0.5rem;
}
</style>