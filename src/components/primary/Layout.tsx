import { FC, PropsWithChildren } from "react"
import Navigation from "./Navigation"
import { Helmet } from "react-helmet-async"

interface Props {
  title?: string
  authPage?: boolean
}

const Layout: FC<Props> = ({
  title = "Home",
  authPage,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div>
      <Helmet>
        <title>{`${title} - Shoptree Affiliate`}</title>
      </Helmet>

      {!authPage && <Navigation toggleMenu={() => null} />}

      <main>{children}</main>
    </div>
  )
}

export default Layout
