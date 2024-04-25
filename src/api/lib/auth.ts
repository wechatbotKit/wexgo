import { request } from '../index'

/**
 * 账密登陆
 * @param data
 * @returns
 */
export const onLoginApi = (data: { username: string; password: string }) => {
  return request<IApi.ILogin, 'post'>({
    url: '/open/login',
    data,
    method: 'post',
    config: {
      responseFreeze: true,
    },
  })
}

/**
 * 刷新 token
 * @returns
 */
export const useRefreshAccessTokenApi = () => {
  return request<IApi.ILogin, 'get'>({ url: '/i/account/refresh' })
}
