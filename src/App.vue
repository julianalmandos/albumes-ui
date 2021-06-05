<template>
  <div class="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
.app {
  background-color: var(--bg-primary);
  min-height: 100vh;
}
</style>
