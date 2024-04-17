import { AxiosResponse, AxiosRequestConfig } from 'axios'

export interface IData<T> {
  total_items?: number
  page_index?: number
  items_per_page?: number
  items?: T[]
}
export interface IResponse<T> {
  code: number
  data?: IData<T>
  success: boolean
  message?: string
}

export interface IAxiosResponse extends AxiosResponse {
  data: IResponse
}

export interface IRequest<T> {
  get: Promise<IAxiosResponse<T>>
  post: Promise<IAxiosResponse<T>>
  put: Promise<IAxiosResponse<T>>
  delete: Promise<IAxiosResponse<T>>
  patch: Promise<IAxiosResponse<T>>
}

export interface IConfig<T> {
  url: string
  data?: { [propName: string]: any }
  method?: T
  config?: AxiosRequestConfig
  params?: { [propName: string]: any }
}

export interface IPage {
  page_index: number
  items_per_page: number
}
