import { request } from '../index'

export const getApi = () =>
  request({
    url: '/v1/upload/accessToken',
  })
