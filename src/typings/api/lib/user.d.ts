import { IPermission } from './permission'

export interface IUser {
  avatar?: string
  created_at: number
  email?: string
  id: number
  mobilephone: string
  nickname: string
  state: number
  updated_at: number
  username: string
  permissions: IPermission[]
}
