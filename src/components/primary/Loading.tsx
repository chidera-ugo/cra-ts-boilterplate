import { FC } from "react"
import { Helmet } from "react-helmet"

export const Loading: FC = () => {
  return (
    <div>
      <Helmet>
        <title>Shoptree Affiliate</title>
      </Helmet>
      <div className="flex h-screen w-screen flex-col justify-center align-middle">
        <svg
          className="my-auto mx-auto h-10 w-10 animate-spin text-center text-primary-green "
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
    </div>
  )
}
