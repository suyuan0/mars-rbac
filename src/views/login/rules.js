export default {
  userName: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    }
  ],
  userPwd: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    },
    {
      min: 6,
      max: 20,
      message: '密码不能小于6位或者大于20位',
      trigger: 'blur'
    }
  ]
}
