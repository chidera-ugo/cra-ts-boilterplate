import { useField } from "formik"
import { FC, useState } from "react"
import TogglePassword from "../buttons/TogglePassword"

type Props = JSX.IntrinsicElements["input"] & {
  label: string
}

const SecureInput: FC<Props> = ({ label, ...props }: Props) => {
  const [showPassword, setShowPassword] = useState(false)
  const [field, meta] = useField(props.name as string)

  return (
    <div className="my-2">
      <label
        htmlFor={props.id}
        className="ml-2 block text-left text-xs   text-gray-700"
      >
        {label}
      </label>

      <div className="ring-accent-main focus-within:border-accent-main relative mt-2  flex w-full overflow-hidden rounded-xl border border-gray-300 bg-white align-middle text-sm text-gray-700 placeholder-gray-400 ring-opacity-10 transition duration-300 focus-within:border-2 focus-within:border-opacity-30 focus-within:outline-none focus-within:ring-4">
        <input
          type={showPassword ? "text" : "password"}
          {...props}
          {...field}
          className="ppearance-none h-14 w-full appearance-none border-0 bg-white px-4 text-sm font-medium text-gray-700 placeholder-gray-400 focus:border-0 focus:outline-none focus:ring-0"
        />
        <TogglePassword
          setShowPassword={(query) => setShowPassword(query)}
          showPassword={showPassword}
        />
      </div>

      {meta.touched && meta.error && (
        <div className={"ml-3 mt-2 block text-left   text-xs   text-red-500"}>
          *{meta.error}
        </div>
      )}
    </div>
  )
}

export default SecureInput
