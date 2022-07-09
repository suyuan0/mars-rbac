import request from '@/utils/request'

/**
 * 获取部门列表
 * @returns {AxiosPromise}
 */
export const deptList = () => {
  return request({
    url: '/dept/list',
    method: 'GET'
  })
}
