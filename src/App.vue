<template>
  <div class="app">
    <Navbar/>
    <NavbarCollapsed class="navbar--collapsed"/>
    <Loader v-show="isLoading" />
    <EmptyResults v-show="isEmpty" />
    <Error v-show="isError" />
    <AlertContainer/>
    <router-view v-show="isSuccess" />
  </div>
</template>

<script>
import AlertContainer from '@/components/AlertContainer.vue';
import Navbar from '@/components/Navbar.vue';
import NavbarCollapsed from '@/components/NavbarCollapsed.vue';
import Loader from '@/components/share/Loader.vue'
import Error from '@/components/share/Error.vue'
import EmptyResults from '@/components/share/EmptyResults.vue'
import { mapGetters } from 'vuex'


export default {
  name: 'App',
  components: {
    AlertContainer,
    Navbar,
    NavbarCollapsed,
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

.navbar--collapsed {
  display: none;
}

@media (max-width: 1024px) {
  .navbar--collapsed {
    display: flex;
  }

  .navbar:not(.navbar--collapsed) {
    display: none;
  }
}
</style>
