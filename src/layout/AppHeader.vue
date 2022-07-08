<template>
  <div class='header-container'>
    <MyBredcrumb />
    <MyDropwn />
  </div>
</template>

<script setup>

import MyBredcrumb from '@/components/MyBredcrumb'
import MyDropwn from '@/components/MyDropwn'
</script>

<style lang='scss' scoped>
.header-container {
  display: flex;
  height: 100%;
  justify-content: space-between;

  .ant-breadcrumb {
    font-size: 15px;
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
