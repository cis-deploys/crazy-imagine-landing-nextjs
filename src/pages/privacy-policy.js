import * as React from "react"
import { useTranslation } from "react-i18next"

import Layout from "../components/Layout"
import PrivacyPolicySection from "../components/PrivacyPolicySection"
import SectionHeader from "../components/SectionHeader"
import ContactSection from "../components/ContactSection"
import Imagen from "../components/Imagen"

import headerImage from "../../public/rocket.svg"

const PrivacyPolicy = () => {
  const { t } = useTranslation()
  return (
    <Layout
      // seo={{
      //   metaTitle: "Crazy Imagine Software | Privacy Policy",
      //   metaDescription: t("privacyPolicy_sectionHeader_metaDescription"),
      // }}
    >
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

// export const query = graphql`
//   query($language: String!) {
//     locales: allLocale(filter: { language: { eq: $language } }) {
//       edges {
//         node {
//           ns
//           data
//           language
//         }
//       }
//     }
//   }
// `

export default PrivacyPolicy
