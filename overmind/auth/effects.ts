import axios from "axios"
import { State } from "../state"

export const api = {
  async getCurrentUser(): Promise<State["user"]> {
    if (typeof window === "undefined") return null

    const token = localStorage.getItem("shoptree_affiliate_user_token")

    if (!token) return null

    const url = `${process.env.NEXT_APP_BASE_URL}/affliate/profile`
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    console.log(response)

    return null
  },
}
