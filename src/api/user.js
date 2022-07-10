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

/**
 * 获取用户列表
 * @param data
 * @returns {AxiosPromise}
 */
export const userList = (data) => {
  return request({
    url: '/users/list',
    method: 'GET',
    data
  })
}
/**
 * 创建用户
 * @param data
 * @returns {AxiosPromise}
 */
export const operate = (data) => {
  return request({
    url: '/users/operate',
    method: 'POST',
    data
  })
}

export const remove = (data) => {
  return request({
    url: '/users/delete',
    method: 'POST',
    data
  })
}
