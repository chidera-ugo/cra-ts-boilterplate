import { useField } from "formik"
import { FC, PropsWithChildren } from "react"

type Props = JSX.IntrinsicElements["input"] & {
  name: string
}

const Checkbox: FC<Props> = ({
  children,
  name,
  ...props
}: PropsWithChildren<Props>) => {
  const [field, meta] = useField(name)

  return (
    <div>
      <label htmlFor={props.id}>
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  )
}

export default Checkbox
