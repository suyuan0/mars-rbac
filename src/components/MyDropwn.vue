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
          <a-popconfirm title='确定要退出嘛' @cancel='cancel' @confirm='confirm'>
            <a href='javascript:;' @click='handleLogout'>退出</a>
          </a-popconfirm>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script setup>
import { DownOutlined } from '@ant-design/icons-vue'
import { useStore } from 'vuex'
import { message } from 'ant-design-vue'

const store = useStore()

const confirm = () => {
  return new Promise(resolve => {
    message.error('呜呜呜，拜拜咯')
    setTimeout(() =>
      store.commit('user/tokeNoverdue'), 1.5 * 1000)
  })
}

const cancel = e => {
  console.log(e)
  message.success('好叭，看来你舍不得离开我')
}
</script>

<style lang='scss' scoped>
.ant-dropdown-link {
  display: flex;
  align-items: center;
}
</style>
