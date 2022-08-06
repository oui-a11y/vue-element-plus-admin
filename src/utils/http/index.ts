import Axios from './Axios'

export const request = new Axios({
  timeout: 3000,
  validateStatus(status) {
    return status >= 0
  }
})

export interface UploadApiResult {
  message: string
  code: number
  url: string
}
