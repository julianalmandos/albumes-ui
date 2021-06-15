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
      <NavbarLink :to="'/dashboard'">
        <template #icon><Home/></template>
        <template #title>Página principal</template>
      </NavbarLink>
      <NavbarLink :to="'/albums'">
        <template #icon><List/></template>
        <template #title>Mis álbumes</template>
      </NavbarLink>
    </nav>
    <div v-if="!isHome" class="navbar__user">
      <router-link to="/configuration">
        <CButton variant="white">
          <template #left-icon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 12.645v-2.289c-1.17-.417-1.907-.533-2.28-1.431-.373-.9.07-1.512.6-2.625l-1.618-1.619c-1.105.525-1.723.974-2.626.6-.9-.374-1.017-1.117-1.431-2.281h-2.29c-.412 1.158-.53 1.907-1.431 2.28h-.001c-.9.374-1.51-.07-2.625-.6l-1.617 1.619c.527 1.11.973 1.724.6 2.625-.375.901-1.123 1.019-2.281 1.431v2.289c1.155.412 1.907.531 2.28 1.431.376.908-.081 1.534-.6 2.625l1.618 1.619c1.107-.525 1.724-.974 2.625-.6h.001c.9.373 1.018 1.118 1.431 2.28h2.289c.412-1.158.53-1.905 1.437-2.282h.001c.894-.372 1.501.071 2.619.602l1.618-1.619c-.525-1.107-.974-1.723-.601-2.625.374-.899 1.126-1.019 2.282-1.43zm-8.5 1.689c-1.564 0-2.833-1.269-2.833-2.834s1.269-2.834 2.833-2.834 2.833 1.269 2.833 2.834-1.269 2.834-2.833 2.834zm15.5 4.205v-1.077c-.55-.196-.897-.251-1.073-.673-.176-.424.033-.711.282-1.236l-.762-.762c-.52.248-.811.458-1.235.283-.424-.175-.479-.525-.674-1.073h-1.076c-.194.545-.25.897-.674 1.073-.424.176-.711-.033-1.235-.283l-.762.762c.248.523.458.812.282 1.236-.176.424-.528.479-1.073.673v1.077c.544.193.897.25 1.073.673.177.427-.038.722-.282 1.236l.762.762c.521-.248.812-.458 1.235-.283.424.175.479.526.674 1.073h1.076c.194-.545.25-.897.676-1.074h.001c.421-.175.706.034 1.232.284l.762-.762c-.247-.521-.458-.812-.282-1.235s.529-.481 1.073-.674zm-4 .794c-.736 0-1.333-.597-1.333-1.333s.597-1.333 1.333-1.333 1.333.597 1.333 1.333-.597 1.333-1.333 1.333z"/></svg>
          </template>
          Configuración
        </CButton>
      </router-link>
    </div>
  </header>
</template>

<script>
import CButton from '@/components/CButton.vue';
import Home from '@/components/icons/Home.vue';
import List from '@/components/icons/List.vue';
import NavbarLink from '@/components/NavbarLink.vue';
import New from '@/components/icons/New.vue';

export default {
  name: 'Navbar',
  components: {
    NavbarLink,
    Home,
    List,
    New,
    CButton
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
  padding: 0 2rem;
}

.navbar__logo {
  font-size: 2rem;
  font-family: var(--font-tertiary);
  font-weight: bold;
  padding-top: 1rem;
}

.navbar__menu {
  display: flex;
  justify-content: center;
}

.navbar__user,
.navbar__logo {
  flex: 1;
}

.navbar__user {
  display: flex;
  justify-content: flex-end;
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