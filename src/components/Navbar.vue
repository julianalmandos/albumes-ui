<template>
  <header :class="['navbar', { 'navbar--centered': isHome }]">
    <h1 class="navbar__logo">
      <router-link :to="'/'"> Álbumes </router-link>
    </h1>
    <slot>
      <nav v-if="!isHome" class="navbar__menu">
        <NavbarLink :to="'/new'">
          <template #icon><New /></template>
          <template #title>Crear álbum</template>
        </NavbarLink>
        <NavbarLink :to="'/dashboard'">
          <template #icon><Home /></template>
          <template #title>Página principal</template>
        </NavbarLink>
        <NavbarLink :to="'/albums'">
          <template #icon><List /></template>
          <template #title>Mis álbumes</template>
        </NavbarLink>
      </nav>
      <div v-if="!isHome" class="navbar__user" tabindex="0">
        <div class="navbar__settings">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>Usuario</title>
            <path
              d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"
            />
          </svg>
          <span>{{ email }}</span>
          <router-link to="/settings">
            <CButton>
              <template #left-icon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <title>Configuración</title>
                  <path
                    d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"
                  />
                </svg>
              </template>
            </CButton>
          </router-link>
          <CButton @click="logoutUser" variant="red">
            <template #left-icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <title>Cerrar sesión</title>
                <path
                  d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-16-7v20h14v-2h-12v-16h12v-2h-14z"
                />
              </svg>
            </template>
          </CButton>
        </div>
      </div>
    </slot>
  </header>
</template>

<script>
import CButton from "@/components/CButton.vue";
import Home from "@/components/icons/Home.vue";
import List from "@/components/icons/List.vue";
import NavbarLink from "@/components/NavbarLink.vue";
import New from "@/components/icons/New.vue";

import { mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";

export default {
  name: "Navbar",
  components: {
    NavbarLink,
    Home,
    List,
    New,
    CButton,
  },
  computed: {
    isHome() {
      return this.$route.name === "Home";
    },
    ...mapFields(["user.email"]),
  },
  mounted() {
    this.getUser();
  },
  methods: {
    ...mapActions(["getUser"]),
    logoutUser() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>

<style>
.navbar {
  display: flex;
  align-items: center;
  gap: 2rem;
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
  color: var(--bg-button);
}

.navbar__menu {
  display: flex;
  justify-content: center;
}

.navbar__user,
.navbar__logo {
  flex: 1;
}

.navbar__user,
.navbar__settings {
  display: flex;
  justify-content: flex-end;
}

.navbar__settings {
  align-items: center;
  color: var(--bg-button);
  fill: var(--bg-button);
  padding: 0.4rem 0.75rem;
  border-radius: 15px;
  background-color: var(--bg-tertiary);
}

.navbar__settings > *:not(:last-child) {
  margin-right: 1rem;
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
}
</style>