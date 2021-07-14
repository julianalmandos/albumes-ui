<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <linearGradient :id="id" x2="0" y2="1">
      <stop offset="0%" stop-color="rgb(239, 93, 168, 1)" />
      <stop offset="100%" stop-color="rgba(18, 110, 130, 1)" />
    </linearGradient>
    <path d="M20 7.093l-3-3v-2.093h3v5.093zm4 5.907h-3v10h-18v-10h-3l12-12 12 12zm-10 2h-4v6h4v-6z" :fill="url"/>
  </svg>
</template>


<script>
import icon from '@/mixins/icon'

export default {
  name: 'List',
  mixins: [icon]
}
</script>
