<template>
  <Layout>
    <template #title>¡Bienvenido, Andrés!</template>
    <template #subtitle>Desde aquí podrás crear y gestionar tus álbumes.</template>
    <div class="dashboard__buttons">
      <router-link class="dashboard__button" to="/new">
        <New/>
        <span>Crear nuevo álbum</span>
      </router-link>
      <router-link class="dashboard__button" to="/albums">
        <List/>
        <span>Ver mis álbumes</span>
      </router-link>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout.vue';
import List from '@/components/icons/List.vue';
import New from '@/components/icons/New.vue';

export default {
  name: 'Dashboard',
  components: {
    Layout,
    List,
    New
  }
}
</script>

<style>
.dashboard__buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  gap: 5rem 10rem;
  width: 90%;
}

.dashboard__button {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: min(340px, 90%);
  padding: 4rem 0;
  border-radius: 2rem;

  border: 3px solid var(--text-navbar);
  color: var(--text-navbar);
  font-weight: bold;
  box-shadow: 6px 6px 5px -1px rgba(0, 0, 0, 0.5);
}

.dashboard__button > svg {
  width: 13rem;
  height: 13rem;
  margin-bottom: 1.5rem;
}

.dashboard__button > span {
  width: 10ch;
}

.dashboard__button:hover {
  box-shadow: none;
  transform: translate(0.25rem, 0.25rem);
}

@media (max-width: 1024px) {
  .dashboard__button {
    flex-direction: row;
    padding: 2rem 2.5rem;
    width: auto;
    max-width: 90%;
  }

  .dashboard__button > svg {
    margin-bottom: 0;
    margin-right: 1rem;
    width: 4rem;
    height: 4rem;
  }
}
</style>