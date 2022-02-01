import { Context } from "."
import { IUser } from "../utils/types/user.types"

export const onInitializeOvermind = async ({
  state,
  actions,
  effects,
}: Context) => {
  const currentUser = await effects.auth.api.getCurrentUser()

  if (currentUser) {
    actions.auth.login(currentUser as IUser)
  }

  state.loading = false
}
