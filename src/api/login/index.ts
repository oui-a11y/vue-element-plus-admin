import { request } from '@/utils/http'
import { MethodsEnum } from '@/utils/http/httpEnum'
import type { ReqResponseType, UserLoginType, UserType } from './types'

enum RequestUrl {
  login = '/user/login',
  loginOut = '/user/loginOut',
  getRoleList = '/role/list',
  getUserList = '/user/list'
}

export function loginApi(data: UserLoginType) {
  return request.request<ReqResponseType<UserType>>({
    url: RequestUrl.login,
    method: MethodsEnum.POST,
    data
  })
}

export const loginOutApi = () => {
  return request.get({ url: RequestUrl.loginOut })
}

export const getUserListApi = ({ params }) => {
  return request.get<
    ReqResponseType<{
      total: number
      list: UserType[]
    }>
  >({ url: RequestUrl.getUserList, params })
}

export const getAdminRoleApi = ({ params }) => {
  return request.get<
    ReqResponseType<{
      list: AppCustomRouteRecordRaw[]
    }>
  >({ url: RequestUrl.getRoleList, params })
}

export const getTestRoleApi = ({ params }) => {
  return request.get<
    ReqResponseType<{
      list: string[]
    }>
  >({ url: RequestUrl.getRoleList, params })
}
