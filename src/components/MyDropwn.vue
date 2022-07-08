<template>
  <a-dropdown>
    <a class='ant-dropdown-link' @click.prevent>
      {{ $store.getters.userInfo.userName }}
      <DownOutlined />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <a href='javascript:;'>
            邮箱：{{ $store.getters.userInfo.userEmail }}
          </a>
        </a-menu-item>
        <a-menu-item>
          <a href='javascript:;' @click='handleLogout'>退出</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script setup>
import { DownOutlined } from '@ant-design/icons-vue'
import { useStore } from 'vuex'

const store = useStore()
const handleLogout = () => {
  store.commit('user/tokeNoverdue')
}
</script>

<style lang='scss' scoped>
.ant-dropdown-link {
  display: flex;
  align-items: center;
}
</style>
