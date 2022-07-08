<template>
  <a-menu mode='inline' theme='dark' @click='changePath'>
    <MenuItem v-for='item in menuList' :key='item.path' :item='item'></MenuItem>
  </a-menu>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ObtainingLevel1Routing, GeneratingMenuData } from '@/utils/route'
import { computed } from 'vue'
import { removeChildren } from '@/utils/removeChildren'
import MenuItem from '@/layout/SideBar/MenuItem'

const router = useRouter()
const menuList = computed(() => {
  const routes = GeneratingMenuData(ObtainingLevel1Routing(router.getRoutes()))
  return removeChildren(routes)
})
const changePath = ({ key }) => {
  router.push(key)
}
</script>

<style scoped>

</style>
