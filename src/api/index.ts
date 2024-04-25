import axios from 'axios'
import qs from 'qs'
import adapter from './adapter'

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
  (response: IAxios.IAxiosResponse) => {
    // 冻结请求时候 直接返回整个响应体
    if (response.config.responseFreeze) {
      return response
    }
    return response.data
  },
  (err) => Promise.reject(err)
)

export default Axios

export const request = <T, U extends keyof IAxios.IRequest<T>>({
  url,
  data,
  config,
  method,
  params,
}: IAxios.IConfig<U>) => {
  return Axios.request<T>({ url, data, method, params, ...config }) as unknown as Promise<
    IAxios.IResponse<T>
  >
}

export * from './lib/auth'
export * from './lib/user'
