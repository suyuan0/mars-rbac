<template>
  <a-sub-menu v-if='item.children && item.children.length>0' :key='item.path'>
    <template #icon>
      <setting-outlined v-if='item.path ==="/system"' />
      <send-outlined v-if='item.path==="/audit"' />
    </template>
    <template #title>{{ item.meta.title }}</template>
    <MenuItem v-for='child in item.children' :key='child.path' :item='child'></MenuItem>
  </a-sub-menu>
  <a-menu-item v-else :key='item.path'>
    {{ item.meta.title }}
  </a-menu-item>
</template>

<script setup>
import { defineProps } from 'vue'
import { SettingOutlined, SendOutlined } from '@ant-design/icons-vue'

defineProps({
  item: {
    type: Object,
    default: () => {
    }
  }
})
</script>

<style scoped>

</style>
