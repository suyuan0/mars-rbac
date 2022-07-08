<template>
  <a-layout>
    <a-layout-sider>
      <SideBar></SideBar>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <AppHeader />
      </a-layout-header>
      <a-layout-content>
        <AppMain></AppMain>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import AppMain from '@/layout/AppMain'
import SideBar from './SideBar'
import AppHeader from '@/layout/AppHeader'
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
    line-height: normal;
    padding: 0 20px;
  }

  .ant-layout-content {
    padding: 20px;
  }
}
</style>
