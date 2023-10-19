import React from "react"
import { useTranslation } from "react-i18next"

import Layout from "../components/layout"
import SectionHeader from "../components/SectionHeader"
import ContactSection from "../components/ContactSection"
import AboutSection from "../components/AboutSection"
import Imagen from "../components/Imagen"

import headerImage from "../../public/marciano.svg"

const About = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      
      <SectionHeader
        title={t("about_sectionHeader_title")}
        btn={false}
        img={headerImage}
        little={true}
      />
      <AboutSection />
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
export default About
