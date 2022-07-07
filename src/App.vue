<template>
  <a-spin :spinning='$store.getters.loading' tip='正在加载中'>
    <router-view />
  </a-spin>
</template>

<style lang='scss'>
html, body, #app, .ant-spin-nested-loading, .ant-spin-container {
  height: 100%;
}
</style>
