export type UserLoginType = {
  username: string
  password: string
}

export type ReqResponseType<T> = {
  code: string | number
  data: T
}

export type UserType = {
  username: string
  password: string
  role: string
  roleId: string
}
