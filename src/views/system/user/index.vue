<template>
  <div>
    <a-card style='margin-bottom: 10px'>
      <a-form layout='inline'>
        <a-form-item label='用户ID'>
          <a-input v-model:value='userListModel.userId' placeholder='请输入用户ID' />
        </a-form-item>
        <a-form-item label='用户名称'>
          <a-input v-model:value='userListModel.userName' placeholder='请输入用户名称' />
        </a-form-item>
        <a-form-item label='状态'>
          <a-select v-model:value='userListModel.state' style='width: 200px'>
            <a-select-option v-for='(item,i) in seleceList' :key='i' :value='item.id'>{{ item.title }}</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item>
          <a-button style='margin-right: 10px' type='primary' @click='getUserList'>查询</a-button>
          <a-button html-type='reset' @click='reset'>重置</a-button>
        </a-form-item>
      </a-form>
    </a-card>
    <a-card>
      <div style='margin-bottom:15px '>
        <a-button style='margin-right:10px ' type='primary'>新增</a-button>
        <a-button type='danger'>批量删除</a-button>
      </div>
      <a-spin :spinning='$store.getters.loading'>
        <a-table :columns='clos' :data-source='tableList'
                 :pagination='pagination'
                 :row-class-name="(_record, index) => (index % 2 === 1 ? 'table-striped' : null)"
                 :row-selection='{selectedRowKeys: state.selectedRowKeys,  onChange: onSelectChange }'
                 bordered
                 row-key='userId'
                 @change='handleChangePagintaion'>
          <template #bodyCell='{column,record:{role,state}}'>
            <template v-if='column.dataIndex==="role"'>
              <a-tag v-if='role===0' color='pink'>管理员</a-tag>
              <a-tag v-if='role===1' color='orange'>普通用户</a-tag>
            </template>
            <template v-if='column.dataIndex==="state"'>
              <a-tag v-if='state===1' color='success'>在职</a-tag>
              <a-tag v-if='state===2' color='processing'>离职</a-tag>
              <a-tag v-if='state===3' color='error'>试用期</a-tag>
            </template>
            <template v-if='column.dataIndex==="action"'>
              <a-button style='margin-right: 10px;'>编辑</a-button>
              <a-button type='danger'>删除</a-button>
            </template>
          </template>
        </a-table>
      </a-spin>
    </a-card>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { userList } from '@/api/user'
import clos from './clos'
// 获取用户列表
const userListModel = reactive({
  pageNum: 1,
  pageSize: 5,
  state: '1',
  userName: '',
  userId: ''
})// 分页
const pagination = ref({
  showSizeChanger: true,
  showQuickJumper: true,
  defaultCurrent: 1,
  defaultPageSize: userListModel.pageSize,
  pageSizeOptions: ['5', '10', '15', '20'],
  showTotal: total => `共${total}条记录 `
})
const tableList = ref([])
const getUserList = async () => {
  try {
    const {
      list,
      page
    } = await userList(userListModel)
    tableList.value = list
    pagination.value.total = page.total
  } catch (e) {
    console.log(e)
  }
}
getUserList()
// 分页
const handleChangePagintaion = async (pagination) => {
  const {
    current,
    pageSize
  } = pagination
  userListModel.pageSize = pageSize
  userListModel.pageNum = current
  await getUserList()
}
// 全选反选
const state = reactive({
  selectedRowKeys: []
})

const onSelectChange = selectedRowKeys => {
  state.selectedRowKeys = selectedRowKeys
}
// 下拉框
const seleceList = [
  {
    title: '所有',
    id: '0'
  },
  {
    title: '在职',
    id: '1'
  }, {
    title: '离职',
    id: '2'
  }, {
    title: '试用期',
    id: '3'
  }]
// 重置
const reset = () => {
  userListModel.userName = ''
  userListModel.userId = ''
  userListModel.state = '1'
}

</script>

<style lang='scss' scoped>
</style>
