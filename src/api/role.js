import request from '@/utils/request'

export const roleList = (data) => {
  return request({
    url: '/roles/list',
    method: 'GET',
    data
  })
}

/**
 * 获取所有权限
 */
export const roleAllList = () => {
  return request({
    url: '/roles/allList',
    method: 'GET'
  })
}
