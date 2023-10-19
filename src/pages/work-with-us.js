import * as React from "react"
import { useTranslation } from "react-i18next"

import Layout from "../components/Layout"
import SectionHeader from "../components/SectionHeader"
import WorkForm from "../components/WorkForm"
import Imagen from "../components/Imagen"

import headerImage from "../../public/rocket.svg"

const WorkWithUsPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>

      <SectionHeader
        title={t("workWithUs_sectionHeader_title")}
        btn={false}
        little={true}
        img={headerImage}
      />
      
      <WorkForm />

      <Imagen />

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

export default WorkWithUsPage
