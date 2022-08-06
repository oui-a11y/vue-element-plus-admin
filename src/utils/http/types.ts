import { AxiosRequestConfig } from 'axios'

export interface UploadFileParams {
  data?: Recordable
  name?: string
  file: File | Blob
  filename?: string
  [key: string]: any
}

export type AxiosRequestOmitMethodsConfig = Omit<AxiosRequestConfig, 'method'>

export type AxiosUploadProgress = (progressEvent: ProgressEvent) => void
