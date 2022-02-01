import { useField } from "formik"
import { FC } from "react"

type Props = JSX.IntrinsicElements["input"] & {
  label: string
}

const Input: FC<Props> = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props.name as string)

  return (
    <div className="my-2">
      <label
        htmlFor={props.id}
        className="ml-2 block text-left text-xs   text-gray-700"
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
        className="ring-accent-main focus:border-accent-main mt-2 h-14 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm font-medium text-gray-800 placeholder-gray-400 ring-opacity-10 transition duration-300 focus:border-2 focus:border-opacity-30 focus:outline-none focus:ring-4"
      />
      {meta.touched && meta.error && (
        <div className={"ml-3 mt-2 block text-left   text-xs   text-red-500"}>
          *{meta.error}
        </div>
      )}
    </div>
  )
}

export default Input
