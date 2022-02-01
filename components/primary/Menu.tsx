/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useRef, useState } from "react"

interface Props {
  toggleMenu: () => void
}

const Menu: FC<Props> = ({ toggleMenu }: Props) => {
  const [displayMenu, setDisplayMenu] = useState(false)

  const timeout = useRef<any>(null)

  useEffect(() => {
    setDisplayMenu(true)
    return clearTimeout(timeout.current)
  }, [])

  const handleHideMenu = () => {
    setDisplayMenu(!displayMenu)
    timeout.current = setTimeout(() => {
      toggleMenu()
    }, 600)
  }

  return (
    <div className="z-1000 fixed inset-0 h-screen w-screen">
      <button
        onClick={() => handleHideMenu()}
        tabIndex={-1}
        className="z-850 absolute h-full w-full bg-black bg-opacity-60"
      ></button>

      <div className="relative right-0 flex h-screen w-4/5 flex-col justify-between bg-white p-8">
        <button
          onClick={() => handleHideMenu()}
          className="absolute top-0 right-0 p-4 focus:outline-none"
        >
          <svg
            className="my-auto h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Menu
