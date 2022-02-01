import { Link } from "react-router-dom"

interface Props {
  buttonText: string
  url?: string
  action?: () => void
}

const SecondaryButton: React.FC<Props> = ({
  buttonText,
  action,
  url,
}: Props) => {
  if (url) {
    return (
      <Link
        to={url}
        className="group text-primary-main my-auto flex h-14 w-full appearance-none items-center justify-center rounded-xl border border-gray-100 bg-gray-100 px-6 align-middle text-sm		 font-bold ring-gray-300 ring-offset-2 transition duration-300 focus:outline-none focus:ring-2"
      >
        {buttonText}
      </Link>
    )
  } else {
    return (
      <button
        type="button"
        onClick={action}
        className="group text-primary-main my-auto h-14 w-full appearance-none items-center justify-center rounded-xl border border-gray-100 bg-gray-100 px-6 align-middle text-sm		 font-bold ring-gray-300 ring-offset-2 transition duration-300 focus:outline-none focus:ring-2"
      >
        {buttonText}
      </button>
    )
  }
}

export default SecondaryButton
