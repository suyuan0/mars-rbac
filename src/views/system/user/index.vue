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
    <a-card class='table-card'>
      <div style='margin-bottom:15px '>
        <a-button style='margin-right:10px ' type='primary' @click='modelVisible=true'>新增</a-button>
        <a-button type='danger'>批量删除</a-button>
      </div>
      <a-spin :spinning='$store.getters.loading' tip='Loading...'>
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
  <a-modal :visible='modelVisible' title='用户新增' width='700px' @cancel='modelVisible=false' @ok='handleAddUser'>
    <a-form ref='formRef' :label-col='{span: 3, offset: 1}' :model='addUsersModel' :rules='rules'>
      <a-form-item label='用户名' name='userName'>
        <a-input v-model:value='addUsersModel.userName' placeholder='请输入用户名称' />
      </a-form-item>
      <a-form-item label='邮箱' name='userEmail'>
        <a-input v-model:value='addUsersModel.userEmail' addon-after='@imocc.com' placeholder='请输入用户邮箱' />
      </a-form-item>
      <a-form-item label='手机号'>
        <a-input v-model:value='addUsersModel.mobile' placeholder='请输入手机号' />
      </a-form-item>
      <a-form-item label='岗位'>
        <a-input v-model:value='addUsersModel.job' placeholder='请输入岗位' />
      </a-form-item>
      <a-form-item label='岗位'>
        <a-select v-model:value='addUsersModel.state'>
          <a-select-option value='1'>在职</a-select-option>
          <a-select-option value='2'>离职</a-select-option>
          <a-select-option value='3'>试用期</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label='系统角色'>
        <a-cascader :field-names='systemFieldNames' :options='systemOptions' multiple placeholder='请选择用户系统角色'
                    @change='changeSystem'></a-cascader>
      </a-form-item>
      <a-form-item label='部门' name='deptId'>
        <a-cascader :field-names='deptFieldNames' :options='deptOptions' change-on-select
                    placeholder='请选择所属部门' @change='changeDept'></a-cascader>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { userList, operate } from '@/api/user'
import { roleAllList } from '@/api/role'
import { deptList } from '@/api/dept'
import systemFieldNames from './systemFieldNames'
import deptFieldNames from './deptFieldNames'
import clos from './clos'
import rules from './rules'
import { message } from 'ant-design-vue'

const formRef = ref(null)
const modelVisible = ref(false)
const systemOptions = ref([])
const deptOptions = ref([])
// 获取用户列表
const userListModel = reactive({
  pageNum: 1,
  pageSize: 5,
  state: '1',
  userName: '',
  userId: ''
})
// 分页
const pagination = ref({
  showSizeChanger: true,
  showQuickJumper: true,
  defaultCurrent: 1,
  defaultPageSize: userListModel.pageSize,
  pageSizeOptions: ['5', '10', '15', '20'],
  showTotal: total => `共${total}条记录 `
})
// 添加用户数据模型
const addUsersModel = reactive({
  action: 'add',
  userName: '',
  userEmail: '',
  mobile: '',
  job: '',
  state: '3',
  roleList: [],
  deptId: []
})
const tableList = ref([])
const getUserList = async () => {
  try {
    if (!userListModel.userId) {
      delete userListModel.userId
    }
    if (!userListModel.userName) {
      delete userListModel.userName
    }
    const {
      list,
      page
    } = await userList(userListModel)
    tableList.value = list
    userListModel.total = page.total
    pagination.value.total = page.total
    deptOptions.value = await deptList()
    systemOptions.value = await roleAllList()
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
// 下拉框选择
const changeSystem = value => {
  const set = new Set()
  value.forEach(item => set.add(...item))
  addUsersModel.roleList = [...set]
}
const changeDept = value => {
  addUsersModel.deptId = value
}
// 添加用户
const handleAddUser = async () => {
  try {
    await formRef.value.validate()
    const addModel = { ...addUsersModel }
    addModel.userEmail = addModel.userEmail.concat('@imocc.com')
    await operate(addModel)
    message.success('创建成功')
    modelVisible.value = false
    getUserList()
  } catch (e) {
    console.log(e)
  }
}
</script>

<style lang='scss' scoped>

</style>
