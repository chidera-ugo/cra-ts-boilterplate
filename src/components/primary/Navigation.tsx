import { FC } from "react"
import { useAppState } from "../../overmind"

interface Props {
  toggleMenu: () => void
}

const Navigation: FC<Props> = ({ toggleMenu }: Props) => {
  const { user } = useAppState()
  return (
    <nav className="fixed top-0 left-0 z-50 flex h-16 w-screen justify-between bg-white bg-opacity-70 px-4 align-middle backdrop-blur-md backdrop-filter">
      <h3 className="my-auto text-lg font-bold capitalize text-gray-500">
        Hello, {user?.name.split(" ")[0]}
      </h3>

      <button
        onClick={() => toggleMenu()}
        className="my-auto -ml-2 p-2 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  )
}

export default Navigation
