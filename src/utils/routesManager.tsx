import Home from "../routes/Home"
import Register from "../routes/Register"

export const publicRoutes = [
  {
    path: "/register",
    element: <Register />,
  },
]

export const protectedRoutes = [{ path: "/", element: <Home /> }]
