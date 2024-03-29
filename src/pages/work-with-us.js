import * as React from "react"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from "next/dynamic"

import headerImage from "../../public/rocket.svg"
import { useState } from "react"
import { NextSeo } from "next-seo"
import { useEffect } from "react"
import { useRouter } from "next/router"

const SectionHeader = dynamic(() => import("../components/SectionHeader"), {
  ssr: false,
})

const WorkForm = dynamic(() => import("../components/WorkForm"), { ssr: false })

const Imagen = dynamic(() => import("../components/Imagen"), { ssr: false })

export async function getServerSideProps({ locale }) {
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL

  const resWorkWithUspage = await fetch(
    `${domain}work-with-us-page?locale=${locale}&populate=seo&populate=title&populate=images`
  )
  const workWithUspage = await resWorkWithUspage.json()

  return { props: { workWithUspage,
    ...await serverSideTranslations(locale, ['common'])
  } }
}

const WorkWithUsPage = ({ workWithUspage }) => {
  const { t, i18n } = useTranslation('common')
  const router = useRouter()

  useEffect(() => {
    // Obtener la locale del router
    const locale = router.locale

    if (locale === "es" && i18n.language !== "es") {
      // Establecer el idioma en español si no está establecido
      i18n.changeLanguage("es")
    }
  }, [router.locale, i18n])

  const [metaTitle, setMetaTitle] = useState()
  const [metaDescription, setMetaDescription] = useState()
  const [keywords, setKeywords] = useState()
  const [title, setTitle] = useState()

  const images = workWithUspage.data?.attributes?.images?.data ?? []
  useEffect(() => {
    setMetaTitle(workWithUspage.data?.attributes.seo?.metaTitle),
      setMetaDescription(workWithUspage.data?.attributes.seo?.metaDescription),
      setKeywords(workWithUspage.data?.attributes.seo?.keywords)
    setTitle(workWithUspage.data?.attributes.title)
  }, [workWithUspage])

  const imageUrl =
    workWithUspage.data?.attributes?.images?.data[0]?.attributes?.url

  return (
    <>
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
        title={t("workWithUs_sectionHeader_title")}
        btn={true}
        img={headerImage}
        cls="textContainer"
      />

      <WorkForm />

      {imageUrl && <Imagen imageUrl={imageUrl} />}
    </>
  )
}

export default WorkWithUsPage
