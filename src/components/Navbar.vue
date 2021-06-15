<template>
  <header :class="['navbar', { 'navbar--centered': isHome }]">
    <h1 class="navbar__logo">
      Álbumes
    </h1>
    <nav v-if="!isHome" class="navbar__menu">
      <NavbarLink :to="'/new'">
        <template #icon><New/></template>
        <template #title>Crear álbum</template>
      </NavbarLink>
      <NavbarLink :to="'/'">
        <template #icon><Home/></template>
        <template #title>Página principal</template>
      </NavbarLink>
      <NavbarLink :to="'/albums'">
        <template #icon><List/></template>
        <template #title>Mis álbumes</template>
      </NavbarLink>
    </nav>
    <div v-if="!isHome" class="navbar__user"></div>
  </header>
</template>

<script>
import NavbarLink from '@/components/NavbarLink.vue';
import Home from '@/components/icons/Home.vue';
import List from '@/components/icons/List.vue';
import New from '@/components/icons/New.vue';

export default {
  name: 'Navbar',
  components: {
    NavbarLink,
    Home,
    List,
    New
  },
  computed: {
    isHome() {
      return this.$route.name === 'Home';
    }
  }
}
</script>

<style>
.navbar {
  display: flex;
  align-items: center;
  height: 4.5rem;
  width: 100%;
  background-color: var(--bg-navbar);
  color: var(--text-navbar);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
}

.navbar__logo {
  font-size: 2rem;
  font-family: var(--font-tertiary);
  font-weight: bold;
  margin-left: 2rem;
  padding-top: 1rem;
  flex: 1 0 auto;
}

.navbar__menu {
  display: flex;
  justify-content: center;
  flex: 0 1 auto;
}

.navbar__user,
.navbar__logo {
  flex: 1;
}

.navbar__menu > *:not(:last-child) {
  margin-right: 2rem;
}

@media (max-width: 1024px) {
  .navbar--centered {
    display: flex;
    justify-content: center;
  }

  .navbar--centered .navbar__logo {
    margin: 0;
  }

  .navbar__menu {
    visibility: hidden;
  }
}
</style>