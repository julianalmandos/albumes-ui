<template>
  <div class="section" tabindex="0" v-focus>
    <h2 class="section__title" v-if="hasTitleSlot" tabindex="0">
      <slot name="title"></slot>
    </h2>
    <h3 class="section__subtitle" v-if="hasSubtitleSlot" tabindex="0">
      <slot name="subtitle"></slot>
    </h3>
    <slot class="section__content"></slot>
  </div>
</template>

<script>
export default {
  name: "Layout",
  computed: {
    hasTitleSlot() {
      return !!this.$slots["title"];
    },
    hasSubtitleSlot() {
      return !!this.$slots["subtitle"];
    },
  },
};
</script>

<style>
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 5rem;
  padding: 2em;
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

@media (max-width: 720px) {
  .section {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>