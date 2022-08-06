interface User {
  name: string
  age: 20
}

interface ResData {
  list: User[]
  id: string
}

export interface Res {
  code: number
  message: string
  data: ResData
}
export interface GetNameParams {
  name: string
}
