import * as React from "react"
import { useTranslation } from "react-i18next"
import dynamic from 'next/dynamic'

import Layout from "../components/Layout"

import headerImage from "../../public/rocket.svg"

const SectionHeader = dynamic(
  () => import("../components/SectionHeader"),
  { ssr: false },
)

const PrivacyPolicySection = dynamic(
  () => import("../components/PrivacyPolicySection"),
  { ssr: false },
)

const Imagen = dynamic(
  () => import("../components/Imagen"),
  { ssr: false },
)

const ContactSection = dynamic(
  () => import("../components/ContactSection"),
  { ssr: false },
)

const PrivacyPolicy = () => {
  const { t } = useTranslation()
  return (
    <Layout>

      <SectionHeader
        title={t("privacyPolicy_title")}
        img={headerImage}
        btn={false}
        little={true}
      />
      <PrivacyPolicySection />
      <Imagen />
      <ContactSection />
    </Layout>
  )
}


export default PrivacyPolicy
