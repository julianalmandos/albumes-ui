<template>
  <div class="section">
    <h2 class="section__title"><slot name="title"></slot></h2>
    <h3 class="section__subtitle"><slot name="subtitle"></slot></h3>
    <slot class="section__content"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 5rem;
}

.section__title {
  font-size: clamp(2rem, 4vw, 3rem);
  max-width: 85%;
}

.section__subtitle {
  margin: 2rem 0 3rem 0;
  width: min(60ch, 85%);
  color: var(--text-secondary);
  font-size: clamp(1.25rem, 3vw, 1.75rem);
}
</style>