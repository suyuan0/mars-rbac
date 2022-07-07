import request from '@/utils/request'

/**
 * 用户登录
 * @param data
 * @returns {*}
 */
export const login = (data) => {
  return request({
    url: '/users/login',
    method: 'POST',
    data
  })
}

/**
 * 获取用户权限
 * @returns {AxiosPromise}
 */
export const permissionList = () => {
  return request({
    url: '/users/getPermissionList',
    method: 'GET'
  })
}
