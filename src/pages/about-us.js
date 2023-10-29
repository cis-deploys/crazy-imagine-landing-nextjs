import React from "react"
import { useTranslation } from "react-i18next"
import dynamic from 'next/dynamic'

import Layout from "../components/Layout"

import headerImage from "../../public/marciano.svg"
import { NextSeo } from "next-seo"

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

export async function getServerSideProps() {
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL
  const resAboutpage = await fetch(`${domain}about-page?locale=all`)
  const aboutpage = await resAboutpage.json()

  return { props: { aboutpage } }
}


const About = ({ aboutpage }) => {
  const { t } = useTranslation()
  // const title = aboutpage.title
  // const metaTitle = aboutpage.SEO.metaTitle
  // const metaDescription = aboutpage.SEO.metaDescription
  // const keywords = aboutpage.SEO.keywords

  return (
    <Layout >
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
