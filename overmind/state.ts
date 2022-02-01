import { IUser } from "../utils/types/user.types"

export interface State {
  user: IUser | null
  loading: boolean
}

export const state: State = {
  user: null,
  loading: true,
}
