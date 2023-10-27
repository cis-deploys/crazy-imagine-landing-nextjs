import React from "react"
import { useTranslation } from "react-i18next"
import dynamic from 'next/dynamic'

import Layout from "../components/Layout"

import headerImage from "../../public/astronaut.svg"
import { NextSeo } from "next-seo"

const SectionHeader = dynamic(
  () => import("../components/SectionHeader"),
  { ssr: false },
)

const ContactSection = dynamic(
  () => import("../components/ContactSection"),
  { ssr: false },
)

export async function getServerSideProps() {
  const resContactpage = await fetch("https://strapi.crazyimagine.com/contact-page")
  const contactpage = await resContactpage.json()

  return { props: { contactpage } }
}

const Contact = ({ contactpage }) => {
  const { t } = useTranslation()
  const metaTitle = contactpage.SEO.metaTitle
  const metaDescription = contactpage.SEO.metaDescription
  const keywords = contactpage.SEO.keywords

  return (
    <Layout>

      <SectionHeader
        title={t("contactUs_sectionHeader_title")}
        btn={true}
        img={headerImage}
        cls="textContainer"
      />
      <ContactSection />
      
    </Layout>
  )
}

export default Contact
