import axios, { AxiosInstance, AxiosRequestHeaders } from 'axios'
import type { AxiosRequestConfig } from 'axios'
import { stringify } from 'qs'
import { ContentTypeEnum, MethodsEnum } from './httpEnum'
import { UploadFileParams, AxiosRequestOmitMethodsConfig } from './types'

export default class Axios {
  private axiosInstance: AxiosInstance
  constructor(options: AxiosRequestConfig) {
    this.axiosInstance = axios.create(options)
    this.setupInterceptors()
  }

  private setupInterceptors() {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        if (
          config.method === 'post' &&
          (config.headers as AxiosRequestHeaders)['Content-Type'] ===
            'application/x-www-form-urlencoded'
        ) {
          config.data = stringify(config.data)
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    this.axiosInstance.interceptors.response.use(
      (response) => {
        const status = response.status
        if (status >= 200 && status < 300) {
          return response.data
        } else {
          return Promise.reject(status)
        }
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }

  getAxios() {
    return this.axiosInstance
  }

  // request<T = any>(options: AxiosRequestConfig) {
  //   return this.axiosInstance.request<any, AxiosResponse<T>>(options)
  // }
  //去除AxiosResponse一层
  request<T = any>(options: AxiosRequestConfig) {
    return this.axiosInstance.request<any, T>(options)
  }

  get<T = any>(options: AxiosRequestOmitMethodsConfig) {
    return this.axiosInstance.request<any, T>({
      ...options,
      method: MethodsEnum.GET
    })
  }
  post<T = any>(options: AxiosRequestOmitMethodsConfig) {
    return this.axiosInstance.request<any, T>({
      ...options,
      method: MethodsEnum.POST
    })
  }
  put<T = any>(options: AxiosRequestOmitMethodsConfig) {
    return this.axiosInstance.request<any, T>({
      ...options,
      method: MethodsEnum.PUT
    })
  }
  delete<T = any>(options: AxiosRequestOmitMethodsConfig) {
    return this.axiosInstance.request<any, T>({
      ...options,
      method: MethodsEnum.DELETE
    })
  }

  uploadFile<T = any>(config: AxiosRequestConfig, params: UploadFileParams) {
    const formData = new window.FormData()
    const customFileName = params.name || 'file'

    if (params.filename) {
      formData.append(customFileName, params.file, params.filename)
    } else {
      formData.append(customFileName, params.file)
    }

    if (params.data) {
      Object.keys(params.data).forEach((key) => {
        const value = params.data![key]
        if (Array.isArray(value)) {
          value.forEach((item) => {
            formData.append(`${key}[]`, item)
          })
          return
        }
        formData.append(key, params.data![key])
      })
    }

    return this.axiosInstance.request<any, T>({
      ...config,
      method: MethodsEnum.POST,
      data: formData,
      headers: { 'Content-type': ContentTypeEnum.FORM_DATA }
    })
  }
}
