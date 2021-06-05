<template>
  <header class="navbar">
    <h1 class="navbar__logo">
      Álbumes
    </h1>
    <nav class="navbar__menu">
      <NavbarButton>
        <template #icon><New/></template>
        <template #title>Crear álbum</template>
      </NavbarButton>
      <NavbarButton>
        <template #icon><Home/></template>
        <template #title>Página principal</template>
      </NavbarButton>
      <NavbarButton>
        <template #icon><List/></template>
        <template #title>Mis álbumes</template>
      </NavbarButton>
    </nav>
    <div></div>
  </header>
</template>

<script>
import NavbarButton from '@/components/NavbarButton.vue';
import Home from '@/components/icons/Home.vue';
import List from '@/components/icons/List.vue';
import New from '@/components/icons/New.vue';

export default {
  name: 'Navbar',
  components: {
    NavbarButton,
    Home,
    List,
    New
  }
}
</script>

<style>
.navbar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  height: 4.5rem;
  width: 100%;
  background-color: var(--bg-navbar);
  color: var(--text-navbar);
}

.navbar__logo {
  font-size: 2rem;
  font-family: var(--font-tertiary);
  font-weight: bold;
  margin-left: 2rem;
  padding-top: 1rem;
}

.navbar__menu {
  display: flex;
  justify-content: center;
}

.navbar__menu > *:not(:last-child) {
  margin-right: 2rem;
}
</style>