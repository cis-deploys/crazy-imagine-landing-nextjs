import React, { useEffect, useState } from "react"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'

import headerImage from "../../public/Objects.webp"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"

const SectionHeader = dynamic(
  () => import("../components/SectionHeader"),
  { ssr: false },
)

const AboutSection = dynamic(
  () => import("../components/AboutSection"),
  { ssr: false },
)

const ContactSection = dynamic(
  () => import("../components/ContactSection"),
  { ssr: false },
)

export async function getServerSideProps({ locale}) {
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL

  const resAboutpage = await fetch(`${domain}about-page?locale=${locale}&populate=seo&populate=title`)
  const aboutpage = await resAboutpage.json()

  return { props: { aboutpage,
    ...await serverSideTranslations(locale, ['common']),
  } }
}


const About = ({ aboutpage }) => {
  const { t, i18n } = useTranslation('common')
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
    setMetaTitle(aboutpage.data?.attributes.seo?.metaTitle),
    setMetaDescription(aboutpage.data?.attributes.seo?.metaDescription),
    setKeywords(aboutpage.data?.attributes.seo?.keywords),
    setTitle(aboutpage.data?.attributes.title)
  }, [aboutpage])

  return (
    <>
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
        title={t("about_sectionHeader_title")}
        desc={t("about_sectionHeader_desc")}
        btn={true}
        img={headerImage}
        cls="textContainer"
      />
      <AboutSection />
      
      <ContactSection />
    </>
  )
}
export default About
