<template>
  <div class='wrapper'>
    <div class='login-model'>
      <a-form :model='loginFormModel' :rules='rules' @finish='handleLogin'>
        <div class='title'>火星</div>
        <a-form-item name='userName'>
          <a-input v-model:value='loginFormModel.userName' placeholder='请输入用户名'>
            <template #prefix>
              <user-outlined />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item name='userPwd'>
          <a-input v-model:value='loginFormModel.userPwd' :type='passwordText' placeholder='请输入密码'>
            <template #prefix>
              <eye-invisible-outlined v-if='passwordText==="password"' @click='handleChangePasswordText' />
              <EyeOutlined v-else @click='handleChangePasswordText' />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button block html-type='submit' type='primary'>登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import { UserOutlined, EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons-vue'
import rules from './rules'
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
// 密码框切换
const passwordText = ref('password')
const handleChangePasswordText = () => {
  passwordText.value = passwordText.value === 'password' ? 'text' : 'password'
}
// 表单数据模型
const loginFormModel = reactive({
  userName: 'admin',
  userPwd: '123456'
})
// 登录
const handleLogin = async (value) => {
  await store.dispatch('user/userLogin', value)
}
</script>

<style lang='scss' scoped>
.wrapper {
  background: #f9fcff;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-model {
    width: 500px;
    padding: 50px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px 5px rgb(199 201 203 / 30%);

    .anticon-eye-invisible, .anticon-eye {
      cursor: pointer;
    }

    .ant-form {
      .title {
        font-size: 50px;
        line-height: 1.5;
        text-align: center;
        margin-bottom: 30px;
      }

      .ant-input, {
        height: 40px;
      }

      .ant-btn {
        height: 28px;
      }
    }
  }
}
</style>
