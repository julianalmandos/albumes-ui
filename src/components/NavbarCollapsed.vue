<template>
  <Navbar>
    <div v-if="!isHome" class="navbar--collapsed__menu" ref="menu">
      <CButton v-if="!isHome" @click="toggleMenu">
        <template #left-icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </svg>
        </template>
        Menú
      </CButton>
      <div
        :class="[
          'navbar--collapsed__list',
          { 'navbar--collapsed__list--displayed': showMenu },
        ]"
        ref="list"
      >
        <div class="navbar--collapsed__info" tabindex="0">
          <span class="navbar--collapsed__name">¡Hola, {{ first_name }}!</span>
          <span class="navbar--collapsed__email">{{ email }}</span>
        </div>
        <ul>
          <li>
            <router-link class="navbar--collapsed__link" to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20 7.093l-3-3v-2.093h3v5.093zm4 5.907h-3v10h-18v-10h-3l12-12 12 12zm-10 2h-4v6h4v-6z"
                />
              </svg>
              Página principal
            </router-link>
          </li>
          <li>
            <router-link class="navbar--collapsed__link" to="/albums">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 22v-16h16v7.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-10.386h-20v20h10.189c3.163 0 9.811-7.223 9.811-9.614zm-10 1.614h-5v-1h5v1zm5-4h-10v1h10v-1zm0-3h-10v1h10v-1zm2-7h-19v19h-2v-21h21v2z"
                />
              </svg>
              Mis álbumes
            </router-link>
          </li>
          <li>
            <router-link class="navbar--collapsed__link" to="/new">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 12h10v1h-10v-1zm7.816-3h-7.816v1h9.047c-.45-.283-.863-.618-1.231-1zm5.184 1.975v2.569c0 4.106-6 2.456-6 2.456s1.518 6-2.638 6h-7.362v-20h9.5c.312-.749.763-1.424 1.316-2h-12.816v24h10.189c3.163 0 9.811-7.223 9.811-9.614v-3.886c-.623.26-1.297.421-2 .475zm-13-3.975h6.5c-.134-.32-.237-.656-.319-1h-6.181v1zm17-2.5c0 2.485-2.017 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.017-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-2-.5h-2v-2h-1v2h-2v1h2v2h1v-2h2v-1z"
                />
              </svg>
              Crear álbum
            </router-link>
          </li>
          <li>
            <router-link class="navbar--collapsed__link" to="/settings">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"
                />
              </svg>
              Configuración
            </router-link>
          </li>
          <li>
            <button
              class="navbar--collapsed__link navbar--collapsed__link--red"
              @click="logoutUser"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-16-7v20h14v-2h-12v-16h12v-2h-14z"
                />
              </svg>
              Cerrar sesión
            </button>
          </li>
        </ul>
      </div>
    </div>
  </Navbar>
</template>

<script>
import CButton from "@/components/CButton.vue";
import Navbar from "@/components/Navbar.vue";

import { mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";

export default {
  name: "NavbarCollapsed",
  components: {
    CButton,
    Navbar,
  },
  data() {
    return {
      showMenu: false,
    };
  },
  computed: {
    isHome() {
      return this.$route.name === "Home";
    },
    ...mapFields(["user.first_name", "user.email"]),
  },
  mounted() {
    document.addEventListener("click", (e) => {
      if (
        !this.$refs.menu?.contains(e.target) ||
        this.$refs.list?.contains(e.target)
      ) {
        this.showMenu = false;
      }
    });

    this.getUser();
  },
  methods: {
    ...mapActions(["getUser"]),
    logoutUser() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style>
.navbar--collapsed__menu {
  position: relative;
  color: var(--bg-button);
}

.navbar--collapsed__list {
  display: none;
  position: absolute;
  margin-top: 0.25rem;
  right: 0;
  min-width: 250px;
  border-radius: 6px;
  padding: 0.3rem 0.3rem;
  background-color: var(--bg-primary);
  box-shadow: var(--shadow-button);
  z-index: 2;
}

.navbar--collapsed__info {
  text-align: center;
  padding: 1rem;
}

.navbar--collapsed__name,
.navbar--collapsed__email {
  display: block;
}

.navbar--collapsed__name {
  font-size: 1.25rem;
}

.navbar--collapsed__email {
  margin-top: 0.5rem;
  font-size: 0.75rem;
}

.navbar--collapsed__list--displayed {
  display: block;
}

.navbar--collapsed__list > *:not(:last-child) {
  margin-bottom: 0.25rem;
}

.navbar--collapsed__link {
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 6px;
  padding: 0.4rem 0.4rem;
  font-size: clamp(0.7rem, 3vw, 0.8rem);
}

.navbar--collapsed__link > svg {
  height: 1.25rem;
  margin-right: 0.25rem;
}

.navbar--collapsed__link:hover {
  background-color: var(--bg-tertiary);
}

.navbar--collapsed__link--red {
  cursor: pointer;
  background-color: var(--bg-button-red);
  color: white;
  fill: white;
}

.navbar--collapsed__link--red:hover {
  background-color: var(--bg-button-red-hover);
}
</style>