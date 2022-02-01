import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import NotFound from "./routes/404"
import { protectedRoutes, publicRoutes } from "./utils/routesManager"
import { useAppState } from "./overmind"
import { useState } from "react"
import { ErrorBoundary } from "react-error-boundary"

const App = (): JSX.Element => {
  const { user, loading } = useAppState()
  const [componentStack, setComponentStack] = useState("")

  if (loading) {
    return (
      <div className="flex h-screen w-screen flex-col justify-center align-middle">
        <svg
          className="my-auto mx-auto h-12 w-12 animate-spin text-primary-green"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    )
  }

  const ErrorFallback = ({ error }: { error: Error }) => {
    return (
      <div className="flex h-screen flex-col justify-center align-middle">
        <div className="mx-auto my-auto">
          <img src="/assets/error.svg" className="mx-auto h-32" />
          <div className="py-5"></div>
          <div className="my-auto text-center text-lg font-bold text-red-500">
            {error.message}
          </div>
          <div className="w-screen">
            <pre className="my-auto flex-wrap-reverse overflow-scroll p-5 pl-0 text-red-500">
              {componentStack}
            </pre>
          </div>
        </div>
      </div>
    )
  }

  const handleError = (
    _error: Error,
    information: { componentStack: string }
  ) => {
    setComponentStack(information.componentStack)
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={handleError}>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          {protectedRoutes.map(({ path, element }) => (
            <Route
              key={path}
              path={path}
              element={
                user?.id && user?.email ? element : <Navigate to="/register" />
              }
            />
          ))}
          <Route path="/" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
