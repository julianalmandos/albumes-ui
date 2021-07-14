<template>
  <Layout>
    <div>
      <h3 class="empty__title">No hay resultados para mostrar!</h3>
      <router-link class="empty__link" to="/">Volver a la página principal</router-link>
    </div>
  </Layout>
</template>

<script>
  import Layout from '@/components/Layout.vue';

  export default {
    name: 'EmptyResults',
    components: {
      Layout
    }
  }
</script>

<style>
.empty__title {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.empty__link:hover {
  text-decoration: underline;
}
</style>