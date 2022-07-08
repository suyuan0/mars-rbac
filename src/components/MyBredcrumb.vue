<template>
  <a-breadcrumb separator='/'>
    <a-breadcrumb-item>
      <router-link to='/'>首页</router-link>
    </a-breadcrumb-item>
    <a-breadcrumb-item>{{ $route.meta.title }}</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script setup>

</script>

<style scoped>

</style>
