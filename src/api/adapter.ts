import { fetch } from '@tauri-apps/plugin-http'
import { AxiosRequestConfig, ResponseType } from 'axios'
// @ts-ignore
import settle from '../../node_modules/axios/lib/core/settle.js'

/**
 * axios Tauri 适配器
 * @param config
 * @returns
 */
export default async function axiosTauriAdapter(config: AxiosRequestConfig): Promise<any> {
  return new Promise(async function (resolve, reject) {
    const response = await fetch(
      `${config.baseURL}${config.url && config.url[0] === '/' ? config.url : `/${config.url}`}` as string,
      {
        method: config.method?.toUpperCase() as AxiosRequestConfig['method'],
        timeout: config.timeout || 99999999, // 0 is not supported
        // @ts-ignore
        headers: config.headers,
        query: config.params,
        body: config.data,
        credentials: config.withCredentials ? 'include' : 'omit',
      }
    )

    settle(resolve, reject, {
      data: await responseTypeParser(response, config.responseType),
      status: response.status,
      statusText: response.statusText,
      headers: config.headers,
      config,
    })
  })
}

/**
 * 响应转换器
 * @param response
 * @param responseType
 * @returns
 */
const responseTypeParser = async (response: Response, responseType?: ResponseType) => {
  switch (responseType) {
    case 'arraybuffer':
      return await response.arrayBuffer()
    case 'blob':
      return await response.blob()
    case 'document':
      return await response.text()
    case 'json':
      return await response.json()
    case 'text':
      return await response.text()
    case 'stream':
      return await response.formData()
    default:
      return await response.text()
  }
}
