import { IContext } from "overmind"
import { namespaced, merge } from "overmind/config"
import {
  createStateHook,
  createActionsHook,
  createEffectsHook,
  createReactionHook,
} from "overmind-react"
import * as auth from "./auth"
import * as actions from "./actions"
import { state } from "./state"

export const config = merge(
  { state, actions },
  namespaced({
    auth,
  })
)

export type Context = IContext<typeof config>

export const useAppState = createStateHook<Context>()
export const useActions = createActionsHook<Context>()
export const useEffects = createEffectsHook<Context>()
export const useReaction = createReactionHook<Context>()
