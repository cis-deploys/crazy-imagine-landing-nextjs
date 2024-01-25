import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import dynamic from 'next/dynamic'

import Layout from "../components/Layout"

import headerImage from "../../public/astronaut.svg"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"

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

  const resContactpage = await fetch(`${domain}contact-page?populate=seo&populate=title`)
  const contactpage = await resContactpage.json()

  return { props: { contactpage } }
}

const Contact = ({ contactpage }) => {
  const { t, i18n } = useTranslation()
  const router = useRouter()

  useEffect(() => {
    // Obtener la locale del router
    const locale = router.locale;

    if (locale === 'es' && i18n.language !== 'es') {
      // Establecer el idioma en español si no está establecido
      i18n.changeLanguage('es');
    }
  }, [router.locale, i18n]);

  const [metaTitle, setMetaTitle] = useState();
  const [metaDescription, setMetaDescription] = useState();
  const [keywords, setKeywords] = useState();
  const [ title, setTitle ] = useState(); 

  useEffect(() => {
        setMetaTitle(contactpage.data?.attributes.seo?.metaTitle),
        setMetaDescription(contactpage.data?.attributes.seo?.metaDescription),
        setKeywords(contactpage.data?.attributes.seo?.keywords)
        setTitle(contactpage.data?.attributes.title)
  }, [])

  return (
    <Layout>
      <NextSeo
      title={`Crazy Imagine Software | ${metaTitle ? metaTitle : title}`}
      description={`${metaDescription ? metaDescription : 'Crazy Imagine Software Offer Software Development of High-Quality Web and Mobile Applications To Meet Our Client’s Unique Demands. Contac Us!'}`}
      keywords={`${keywords ? keywords : 'crazy imagine, web development services, mobile app development, Software Development Company, Web and Mobile App Development Firm, developer, software, work, Full-stack Development, programming, user Experience, quality support'}`}
      openGraph={{
        type: "website",
        locale: "en_US",
        url: "https://crazyimagine.com",
      }}
      />
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
