<template>
  <Navbar>
    <div v-if="!isHome" class="navbar--collapsed__menu" ref="menu">
      <CButton v-if="!isHome" @click="toggleMenu">
        <template #left-icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
        </template>
        Menú
      </CButton>
      <div :class="['navbar--collapsed__list', { 'navbar--collapsed__list--displayed': showMenu }]" ref="list">
        <div class="navbar--collapsed__info">
          <span class="navbar--collapsed__name">¡Hola, {{ first_name }}!</span>
          <span class="navbar--collapsed__email">{{ email }}</span>
        </div>
        <ul>
          <li>
            <router-link class="navbar--collapsed__link" to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M20 7.093l-3-3v-2.093h3v5.093zm4 5.907h-3v10h-18v-10h-3l12-12 12 12zm-10 2h-4v6h4v-6z"/>
              </svg>
              Página principal
            </router-link>
          </li>
          <li>
            <router-link class="navbar--collapsed__link" to="/albums">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M6 22v-16h16v7.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-10.386h-20v20h10.189c3.163 0 9.811-7.223 9.811-9.614zm-10 1.614h-5v-1h5v1zm5-4h-10v1h10v-1zm0-3h-10v1h10v-1zm2-7h-19v19h-2v-21h21v2z"/>
              </svg>
              Mis álbumes
            </router-link>
          </li>
          <li>
            <router-link class="navbar--collapsed__link" to="/new">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M6 12h10v1h-10v-1zm7.816-3h-7.816v1h9.047c-.45-.283-.863-.618-1.231-1zm5.184 1.975v2.569c0 4.106-6 2.456-6 2.456s1.518 6-2.638 6h-7.362v-20h9.5c.312-.749.763-1.424 1.316-2h-12.816v24h10.189c3.163 0 9.811-7.223 9.811-9.614v-3.886c-.623.26-1.297.421-2 .475zm-13-3.975h6.5c-.134-.32-.237-.656-.319-1h-6.181v1zm17-2.5c0 2.485-2.017 4.5-4.5 4.5s-4.5-2.015-4.5-4.5 2.017-4.5 4.5-4.5 4.5 2.015 4.5 4.5zm-2-.5h-2v-2h-1v2h-2v1h2v2h1v-2h2v-1z"/>
              </svg>
              Crear álbum
            </router-link>
          </li>
          <li>
            <router-link class="navbar--collapsed__link" to="/settings">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17 12.645v-2.289c-1.17-.417-1.907-.533-2.28-1.431-.373-.9.07-1.512.6-2.625l-1.618-1.619c-1.105.525-1.723.974-2.626.6-.9-.374-1.017-1.117-1.431-2.281h-2.29c-.412 1.158-.53 1.907-1.431 2.28h-.001c-.9.374-1.51-.07-2.625-.6l-1.617 1.619c.527 1.11.973 1.724.6 2.625-.375.901-1.123 1.019-2.281 1.431v2.289c1.155.412 1.907.531 2.28 1.431.376.908-.081 1.534-.6 2.625l1.618 1.619c1.107-.525 1.724-.974 2.625-.6h.001c.9.373 1.018 1.118 1.431 2.28h2.289c.412-1.158.53-1.905 1.437-2.282h.001c.894-.372 1.501.071 2.619.602l1.618-1.619c-.525-1.107-.974-1.723-.601-2.625.374-.899 1.126-1.019 2.282-1.43zm-8.5 1.689c-1.564 0-2.833-1.269-2.833-2.834s1.269-2.834 2.833-2.834 2.833 1.269 2.833 2.834-1.269 2.834-2.833 2.834zm15.5 4.205v-1.077c-.55-.196-.897-.251-1.073-.673-.176-.424.033-.711.282-1.236l-.762-.762c-.52.248-.811.458-1.235.283-.424-.175-.479-.525-.674-1.073h-1.076c-.194.545-.25.897-.674 1.073-.424.176-.711-.033-1.235-.283l-.762.762c.248.523.458.812.282 1.236-.176.424-.528.479-1.073.673v1.077c.544.193.897.25 1.073.673.177.427-.038.722-.282 1.236l.762.762c.521-.248.812-.458 1.235-.283.424.175.479.526.674 1.073h1.076c.194-.545.25-.897.676-1.074h.001c.421-.175.706.034 1.232.284l.762-.762c-.247-.521-.458-.812-.282-1.235s.529-.481 1.073-.674zm-4 .794c-.736 0-1.333-.597-1.333-1.333s.597-1.333 1.333-1.333 1.333.597 1.333 1.333-.597 1.333-1.333 1.333z"/></svg>
              Configuración
            </router-link>
          </li>
          <li>
            <button class="navbar--collapsed__link navbar--collapsed__link--red" @click="logoutUser">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-16-7v20h14v-2h-12v-16h12v-2h-14z"/></svg>
              Cerrar sesión
            </button>
          </li>
        </ul>
      </div>
    </div>
  </Navbar>
</template>

<script>
import CButton from '@/components/CButton.vue';
import Navbar from '@/components/Navbar.vue';

import { mapActions } from 'vuex';
import { mapFields } from 'vuex-map-fields';

export default {
  name: 'NavbarCollapsed',
  components: {
    CButton,
    Navbar
  },
  data() {
    return {
      showMenu: false
    }
  },
  computed: {
    isHome() {
      return this.$route.name === 'Home';
    },
    ...mapFields([
      'user.first_name',
      'user.email'
    ])
  },
  mounted() {
    document.addEventListener('click', e => {
      if (!this.$refs.menu?.contains(e.target) || this.$refs.list?.contains(e.target)) {
        this.showMenu = false;
      }
    });

    this.getUser();
  },
  methods: {
    ...mapActions(['getUser']),
    logoutUser() {
      this.$store.dispatch('logout');
      this.$router.push('/');
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
}
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
  color: var(--bg-primary);
  fill: var(--bg-primary);
}

.navbar--collapsed__link--red:hover {
  background-color: var(--bg-button-red-hover);
}
</style>