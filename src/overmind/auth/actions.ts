import { IUser } from "../../utils/types"
import { Context } from "../index"

export const login = ({ state }: Context, user: IUser) => {
  state.user = user
}
