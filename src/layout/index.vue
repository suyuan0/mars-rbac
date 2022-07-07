<template>
  <a-layout>
    <a-layout-sider>Sider</a-layout-sider>
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout-content>
        <AppMain></AppMain>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import AppMain from '@/layout/AppMain'
</script>

<style lang='scss' scoped>
.ant-layout {
  height: 100%;

  .ant-layout-sider-children {
    background: #001529;
  }

  .ant-layout-header {
    background: #ffffff;
    border-bottom: 1px solid #ddd;
    height: 50px;
  }

  .ant-layout-content {
    padding: 20px;
  }
}
</style>
