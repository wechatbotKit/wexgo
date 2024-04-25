import { request } from '../index'

/**
 * 获取用户详情
 * @returns
 */
export const getUserInfo = () => {
  return request<IApi.IUser, 'get'>({
    url: '/i/user/account',
    method: 'get',
  })
}
