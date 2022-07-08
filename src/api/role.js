import request from '@/utils/request'

export const roleList = (data) => {
  return request({
    url: '/roles/list',
    method: 'GET',
    data
  })
}
