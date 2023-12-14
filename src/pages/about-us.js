import React, { useEffect, useState } from "react"
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

  const resAboutpage = await fetch(`${domain}about-page?locale=all&populate=seo&populate=title`)
  const aboutpage = await resAboutpage.json()

  return { props: { aboutpage } }
}


const About = ({ aboutpage }) => {
  const { t } = useTranslation()

  const [metaTitle, setMetaTitle] = useState();
  const [metaDescription, setMetaDescription] = useState();
  const [keywords, setKeywords] = useState();
  const [ title, setTitle ] = useState();

useEffect(() => {
  aboutpage.data.map(({ attributes: { seo, title }}) => {
    if(seo){
      setMetaTitle(seo?.metaTitle),
      setMetaDescription(seo?.metaDescription),
      setKeywords(seo?.keywords)
    }
    setTitle(title)
  });

}, [])

  return (
    <Layout >
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
        btn={false}
        img={headerImage}
        cls="textContainer"
      />
      <AboutSection />
      <Imagen />
      <ContactSection />
    </Layout>
  )
}
export default About
