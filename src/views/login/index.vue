<template>
  <div class='wrapper'>
    <div class='login-model'>
      <a-form>
        <div class='title'>火星</div>
        <a-form-item>
          <a-input placeholder='请输入用户名'>
            <template #prefix>
              <user-outlined />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input placeholder='请输入密码' type='password'>
            <template #prefix>
              <eye-invisible-outlined />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button block type='primary'>登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import { UserOutlined, EyeInvisibleOutlined } from '@ant-design/icons-vue'
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
