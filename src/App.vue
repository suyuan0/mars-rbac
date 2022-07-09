<template>
  <a-config-provider :locale='zhCN'>
    <router-view />
  </a-config-provider>
</template>

<script setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')
</script>

<style lang='scss'>
html, body, #app, .ant-spin-nested-loading, .ant-spin-container {
  height: 100%;

  .ant-table-wrapper {
    height: 1200px;
    overflow: auto;
  }
}
</style>
