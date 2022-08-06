import { request } from '@/utils/http'
import { MethodsEnum } from '@/utils/http/httpEnum'
import type { AxiosUploadProgress, UploadFileParams } from '@/utils/http/types'
import { uploadFile } from '@/utils/http/upload'
import { GetNameParams, Res } from './types'

enum RequestUrl {
  getName = 'http://localhost:3001/page/getName',
  upload = 'http://localhost:3002/api/handleUpload'
}

export function getHelloworld(params: GetNameParams) {
  return request.request<Res>({
    url: RequestUrl.getName,
    method: MethodsEnum.GET,
    params
  })
}

export function TestUploadFile(params: UploadFileParams, onUploadProgress?: AxiosUploadProgress) {
  return uploadFile(RequestUrl.upload, params, onUploadProgress)
}
