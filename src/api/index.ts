import axios from 'axios'
import qs from 'qs'
import adapter from './adapter'
import { IRequest, IConfig, IResponse } from '../typings'

const Axios = axios.create({
  adapter,
  withCredentials: true,
  responseType: 'json',
  paramsSerializer: (param) => qs.stringify(param, { arrayFormat: 'repeat' }),
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
  },
  baseURL: import.meta.env.VITE_APP_BASE_API,
})

Axios.interceptors.request.use(
  (config) => config,
  (err) => Promise.reject(err)
)

Axios.interceptors.response.use(
  (response) => response,
  (err) => Promise.reject(err)
)

export default Axios

export const request = <T, U extends keyof IRequest<T>>({
  url,
  data,
  config,
  method,
  params,
}: IConfig<U>) => {
  return Axios.request<T>({ url, data, method, params, ...config }) as unknown as Promise<
    IResponse<T>
  >
}

export * from './lib/test'
