import * as React from "react"
import { useTranslation } from "react-i18next"
import dynamic from 'next/dynamic'

import Layout from "../components/Layout"

import headerImage from "../../public/rocket.svg"

const SectionHeader = dynamic(
  () => import("../components/SectionHeader"),
  { ssr: false },
)

const WorkForm = dynamic(
  () => import("../components/WorkForm"),
  { ssr: false },
)

const Imagen = dynamic(
  () => import("../components/Imagen"),
  { ssr: false },
)

const WorkWithUsPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>

      <SectionHeader
        title={t("workWithUs_sectionHeader_title")}
        btn={true}
        img={headerImage}
        cls="textContainer"
      />
      
      <WorkForm />

      <Imagen />

    </Layout>
  )
}

export default WorkWithUsPage
