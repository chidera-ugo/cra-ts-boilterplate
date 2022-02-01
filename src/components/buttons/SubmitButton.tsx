import { FC } from "react"

interface Props {
  text: string
  isSubmitting: boolean
}

const SubmitButton: FC<Props> = ({ text, isSubmitting }: Props) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={
        isSubmitting
          ? "bg-primary-main my-3 flex h-14 w-full appearance-none items-center justify-center rounded-xl px-4 align-middle text-sm font-semibold text-white shadow-md focus:outline-none disabled:opacity-50"
          : "group bg-primary-main focus:ring-primary-main my-3 flex h-14 w-full appearance-none items-center justify-center rounded-xl px-4 align-middle text-sm font-semibold text-white shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-80 focus:ring-offset-2"
      }
    >
      {isSubmitting && (
        <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
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
      )}

      {isSubmitting ? "" : text}
    </button>
  )
}

export default SubmitButton
