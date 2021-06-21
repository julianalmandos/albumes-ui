<template>
  <Layout>
    <div>
      <rotate-square3 :size="size" :color="color"></rotate-square3>
      <div class="loader__text" role="progressbar">Cargando</div>
    </div>
  </Layout>
</template>

<script>
  import { RotateSquare3 } from 'vue-loading-spinner'
  import Layout from '@/components/Layout.vue';

  export default {
    name: 'Loader',
    props: {
      size: {
        default: '60px'
      },
      color: {
        default: '#2C6778'
      }
    },
    components: {
      RotateSquare3,
      Layout
    }
  }
</script>

<style>
  .loader__text {
    margin: 1rem;
    color: var(--text-navbar);
  }
</style>