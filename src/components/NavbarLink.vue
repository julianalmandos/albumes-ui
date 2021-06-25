<template>
  <router-link class="anchor" :to="to">
    <slot name="icon"></slot>
    <slot name="title"></slot>
  </router-link>
</template>

<script>
export default {
  name: 'NavbarLink',
  props: {
    to: {
      type: String
    }
  }
}
</script>

<style>
.anchor {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  font-weight: bold;
  text-decoration: none;
  color: #033e4f;
}

.anchor:hover {
  color: #e6f8ff;
  transition: color 0.2s ease-in-out;
  -moz-transition: color 0.2s ease-in-out;
  -webkit-transition: color 0.2s ease-in-out;
  -o-transition: color 0.2s ease-in-out;
  -ms-transition: color 0.2s ease-in-out;
}

.anchor > * {
  margin-bottom: 0.5rem;
}
</style>