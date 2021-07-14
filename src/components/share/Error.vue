<template>
  <Layout>
    <div>
      <div>
      <h3 class="empty__title">Ocurrió un error al mostrar esta página.</h3>
      <router-link class="empty__link" to="/">Volver a la página principal</router-link>
    </div>
    </div>
  </Layout>
</template>

<script>
  import Layout from '@/components/Layout.vue';

  export default {
    name: 'Error',
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