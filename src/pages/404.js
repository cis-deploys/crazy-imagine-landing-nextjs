import * as React from "react"
import dynamic from "next/dynamic"

import Layout from "../components/Layout"

const Content404 = dynamic(
  () => import("../components/Content404"),
  { ssr: false },
)

const NotFoundPage = () => {

  return (
    <Layout>
      <Content404 />
    </Layout>
  )
}

export default NotFoundPage
