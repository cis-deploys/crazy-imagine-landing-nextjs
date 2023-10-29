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
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL
  const resContactpage = await fetch(`${domain}contact-page?locale=all`)
  const contactpage = await resContactpage.json()

  return { props: { contactpage } }
}

const Contact = ({ contactpage }) => {
  const { t } = useTranslation()
  // const metaTitle = contactpage.SEO.metaTitle
  // const metaDescription = contactpage.SEO.metaDescription
  // const keywords = contactpage.SEO.keywords

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
