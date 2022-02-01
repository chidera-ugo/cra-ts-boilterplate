import { useState } from "react"

interface Props {
  formikTouched?: boolean
  formikErrors?: string
  noAutoComplete?: boolean
  getFieldProps: unknown
  hideErrors?: boolean
  placeHolder?: string
  autoFocus?: boolean
}

const PasswordInput: React.FC<Props> = ({
  formikTouched,
  formikErrors,
  getFieldProps,
  placeHolder,
  noAutoComplete,
  hideErrors,
  autoFocus,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="my-2">
      <div className="flex justify-between">
        <div className="ml-2 block text-left text-xs text-gray-700">
          Enter Password
        </div>
      </div>

      <div className="ring-accent-main focus-within:border-accent-main relative mt-2  flex w-full overflow-hidden rounded-xl border border-gray-300 bg-white align-middle text-sm text-gray-700 placeholder-gray-400 ring-opacity-10 transition duration-300 focus-within:border-2 focus-within:border-opacity-30 focus-within:outline-none focus-within:ring-4">
        <input
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          autoFocus={autoFocus}
          autoComplete={noAutoComplete ? "new-password" : ""}
          placeholder={placeHolder}
          {...getFieldProps}
          className="ppearance-none h-14 w-full appearance-none border-0 bg-white px-4 text-sm font-medium text-gray-700 placeholder-gray-400 focus:border-0 focus:outline-none focus:ring-0"
        />
        <button
          type="button"
          onClick={() => {
            setShowPassword(!showPassword)
          }}
          className="text-secondary-default absolute right-0 top-0 my-auto flex h-full w-12 flex-col justify-center align-middle text-gray-500 focus:outline-none"
          tabIndex={-1}
        >
          {showPassword ? (
            <svg
              className="mx-auto h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
              />
            </svg>
          ) : (
            <svg
              className="mx-auto h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          )}
        </button>
      </div>

      {formikTouched && formikErrors && !hideErrors && (
        <div className={"ml-3 mt-2 block text-left   text-xs   text-red-500"}>
          *{formikErrors}
        </div>
      )}
    </div>
  )
}

export default PasswordInput
