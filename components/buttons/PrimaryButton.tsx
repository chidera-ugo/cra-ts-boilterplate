import { Link } from "react-router-dom"

interface Props {
  buttonText: string
  url?: string
  action?: () => void
}

const PrimaryButton: React.FC<Props> = ({ buttonText, action, url }: Props) => {
  if (url) {
    return (
      <Link
        to={url}
        className="group bg-primary-main ring-primary-main my-auto flex h-14 appearance-none items-center justify-center rounded-xl px-6 align-middle text-sm font-medium text-white shadow-md ring-offset-2 transition duration-300 focus:outline-none focus:ring-2"
      >
        {buttonText}
      </Link>
    )
  } else {
    return (
      <button
        type="button"
        onClick={action}
        className="group bg-primary-main ring-primary-main my-auto flex h-14 appearance-none items-center justify-center rounded-xl px-6 align-middle text-sm font-medium text-white shadow-md ring-offset-2 transition duration-300 focus:outline-none focus:ring-2"
      >
        {buttonText}
      </button>
    )
  }
}

export default PrimaryButton
