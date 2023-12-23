import dynamic from "next/dynamic"
import { useTranslation } from "react-i18next"
import Layout from "../components/Layout"
import headerImage from "../../public/marciano.svg"
import ReferenceSection from "../components/ReferenceSection"
import { NextSeo } from "next-seo"
import React, { useEffect, useState } from "react"
const SectionHeader = dynamic(() => import("../components/SectionHeader"), {
  ssr: false,
})
const References = ({ referencespage }) => {
  const { t } = useTranslation()
  const [metaTitle, setMetaTitle] = useState()
  const [metaDescription, setMetaDescription] = useState()
  const [keywords, setKeywords] = useState()
  const [title, setTitle] = useState()

  useEffect(() => {
    referencespage?.data.map(({ attributes: { seo, title } }) => {
      if (seo) {
        setMetaTitle(seo?.metaTitle),
          setMetaDescription(seo?.metaDescription),
          setKeywords(seo?.keywords)
      }
      setTitle(title)
    })
  }, [])
  return (
    <Layout>
      <NextSeo
        title={`Crazy Imagine Software | ${metaTitle ? metaTitle : title}`}
        description={`${
          metaDescription
            ? metaDescription
            : "Crazy Imagine Software Offer Software Development of High-Quality Web and Mobile Applications To Meet Our Client’s Unique Demands. Contac Us!"
        }`}
        keywords={`${
          keywords
            ? keywords
            : "crazy imagine, web development services, mobile app development, Software Development Company, Web and Mobile App Development Firm, developer, software, work, Full-stack Development, programming, user Experience, quality support"
        }`}
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://crazyimagine.com",
        }}
      />
      <SectionHeader
        title={t("References")}
        btn={false}
        img={headerImage}
        cls="textContainer"
      />

      <ReferenceSection />
    </Layout>
  )
}
export default References
