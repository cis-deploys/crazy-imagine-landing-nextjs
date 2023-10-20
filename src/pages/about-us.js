import React from "react"
import { useTranslation } from "react-i18next"
import dynamic from 'next/dynamic'

import Layout from "../components/Layout"

import headerImage from "../../public/marciano.svg"

const SectionHeader = dynamic(
  () => import("../components/SectionHeader"),
  { ssr: false },
)

const AboutSection = dynamic(
  () => import("../components/AboutSection"),
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
export default About
