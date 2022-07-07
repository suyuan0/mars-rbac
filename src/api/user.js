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
