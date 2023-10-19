import React from "react"
import { useTranslation } from "react-i18next"

import Layout from "../components/Layout"
import SectionHeader from "../components/SectionHeader"
import ContactSection from "../components/ContactSection"

import headerImage from "../../public/astronaut.svg"

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
//`

export default Contact
