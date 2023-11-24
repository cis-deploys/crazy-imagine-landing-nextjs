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

export async function getServerSideProps() {
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL
  const resContactpage = await fetch(`${domain}contact-page?locale=all`)
  const contactpage = await resContactpage.json()

  return { props: { contactpage } }
}

const Contact = ({ contactpage }) => {
  const { t } = useTranslation()

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
