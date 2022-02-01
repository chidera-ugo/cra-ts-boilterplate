import Head from "next/head"
import { FC, PropsWithChildren } from "react"
import Navigation from "./Navigation"

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
      <Head>
        <title>{`${title} - Shoptree Affiliate`}</title>
      </Head>

      {!authPage && <Navigation toggleMenu={() => null} />}

      <main>{children}</main>
    </div>
  )
}

export default Layout
