<template>
  <div>
    <div class='logo'>
      <img alt=''
           src='https://joeschmoe.io/api/v1/random' />
      <span>Manager</span>
    </div>
    <MenuTree></MenuTree>
  </div>
</template>

<script setup>

import MenuTree from '@/layout/SideBar/MenuTree'
</script>

<style lang='scss' scoped>
.logo {
  display: flex;
  align-items: center;
  font-size: 18px;
  height: 50px;
  color: #fff;

  img {
    margin: 0 16px;
    width: 32px;
    height: 32px;
  }
}
</style>
