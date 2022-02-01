import { Link } from "react-router-dom"

interface Props {
  label?: string
  identifier: string
  name: string
  type?: string
  formikTouched?: boolean
  formikErrors?: string
  getFieldProps?: unknown
  showForgotPassword?: boolean
  hideErrors?: boolean
  placeHolder?: string
  autoFocus?: boolean
  inputMode?:
    | "text"
    | "email"
    | "tel"
    | "numeric"
    | "none"
    | "url"
    | "decimal"
    | "search"
}

const PrimaryInput: React.FC<Props> = ({
  label,
  identifier,
  name,
  type,
  formikTouched,
  formikErrors,
  getFieldProps,
  showForgotPassword,
  placeHolder,
  inputMode,
  hideErrors,
  autoFocus,
}: Props) => {
  return (
    <div className="my-2">
      <div className="flex justify-between">
        <div className="ml-2 block text-left text-xs   text-gray-700">
          {label}
        </div>
        {showForgotPassword && (
          <Link
            to="/reset-password"
            className="tab text-secondary-default mr-2 block text-left text-xs hover:underline focus:outline-none"
            tabIndex={-1}
          >
            Forgot Password?
          </Link>
        )}
      </div>
      <input
        id={identifier}
        name={name}
        type={type}
        autoFocus={autoFocus}
        placeholder={placeHolder}
        autoComplete="off"
        inputMode={inputMode}
        {...getFieldProps}
        className="ring-accent-main focus:border-accent-main mt-2 h-14 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm font-medium text-gray-800 placeholder-gray-400 ring-opacity-10 transition duration-300 focus:border-2 focus:border-opacity-30 focus:outline-none focus:ring-4"
      />
      {formikTouched && formikErrors && !hideErrors && (
        <div className={"ml-3 mt-2 block text-left   text-xs   text-red-500"}>
          *{formikErrors}
        </div>
      )}
    </div>
  )
}

export default PrimaryInput
