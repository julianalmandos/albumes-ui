<template>
  <div class="app">
    <Navbar/>
    <Loader v-show="isLoading" />
    <EmptyResults v-show="isEmpty" />
    <Error v-show="isError" />
    <router-view v-show="isSuccess" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Loader from '@/components/share/Loader.vue'
import Error from '@/components/share/Error.vue'
import EmptyResults from '@/components/share/EmptyResults.vue'
import { mapGetters } from 'vuex'


export default {
  name: 'App',
  components: {
    Navbar,
    Loader,
    EmptyResults,
    Error
  },
  computed: {
    ...mapGetters([
      'isLoading',
      'isEmpty',
      'isError',
      'isSuccess'
    ])
  }
}
</script>

<style>
.app {
  background-color: var(--bg-primary);
  min-height: 100vh;
}
</style>
