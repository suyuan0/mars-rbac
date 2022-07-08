<template>
  <div class='search-container'>
    <a-form layout='inline'>
      <a-form-item label='用户ID'>
        <a-input placeholder='请输入用户ID' />
      </a-form-item>
      <a-form-item label='用户名称'>
        <a-input placeholder='请输入用户名称' />
      </a-form-item>
      <a-form-item label='状态'>
        <a-select v-model:value='selectValue' style='width: 200px' @change='changeSelect'>
          <a-select-option v-for='(item,i) in seleceList' :key='i' :value='item'>{{ item }}</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item>
        <a-button style='margin-right: 10px' type='primary'>查询</a-button>
        <a-button html-type='reset'>重置</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 下拉框
const seleceList = ['所有', '在职', '离职', '试用期']
const selectValue = ref('在职')
const changeSelect = (value) => {
  console.log(value)
}
</script>

<style lang='scss' scoped>
.search-container {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px 5px rgb(199 201 203 / 30%);
  margin-bottom: 20px;
}
</style>
