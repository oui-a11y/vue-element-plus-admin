import { request } from '.'
import type { AxiosUploadProgress, UploadFileParams } from './types'

export function uploadFile<T>(
  url: string,
  params: UploadFileParams,
  onUploadProgress?: AxiosUploadProgress
) {
  return request.uploadFile<T>(
    {
      url,
      onUploadProgress
    },
    params
  )
}
