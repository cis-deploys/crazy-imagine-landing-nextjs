import React from "react"
import { useTranslation } from "react-i18next"
import dynamic from 'next/dynamic'

import Layout from "../components/Layout"

import headerImage from "../../public/astronaut.svg"

const SectionHeader = dynamic(
  () => import("../components/SectionHeader"),
  { ssr: false },
)

const ContactSection = dynamic(
  () => import("../components/ContactSection"),
  { ssr: false },
)

const Contact = () => {
  const { t } = useTranslation()
  return (
    <Layout>

      <SectionHeader
        title={t("contactUs_sectionHeader_title")}
        btn={false}
        img={headerImage}
        little={true}
      />
      <ContactSection />
      
    </Layout>
  )
}

export default Contact
