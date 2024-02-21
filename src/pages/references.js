import dynamic from "next/dynamic"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import Layout from "../components/Layout"
import headerImage from "../../public/references.webp"

import { NextSeo } from "next-seo"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"

const SectionHeader = dynamic(() => import("../components/SectionHeader"), {
  ssr: false,
})
const CarCategoryReview = dynamic(
  () => import("../components/CarCategoryReview"),
  {
    ssr: false,
  }
)
export async function getServerSideProps({ locale }) {
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL

  const resReviews = await fetch(
    `${domain}reviews?locale=${locale}&_limit=6&_sort=created_at:DESC&&populate=avatar=slug&populate=project&populate=category_reviews`
  )
  const reviews = await resReviews.json()

  const resReferencespage = await fetch(
    `${domain}references-page?locale=${locale}&&populate=seo&populate=title`
  )
  const referencespage = await resReferencespage.json()

  return {
    props: {
      referencespage,
      reviews,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  }
}

const References = ({ referencespage, reviews }) => {
  const { i18n, t } = useTranslation("common")
  const lang = i18n.language
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

  useEffect(() => {
    setMetaTitle(referencespage.data?.attributes.seo?.metaTitle),
      setMetaDescription(referencespage.data?.attributes.seo?.metaDescription),
      setKeywords(referencespage.data?.attributes.seo?.keywords),
      setTitle(referencespage.data?.attributes.title)
  }, [referencespage])

  return (
    <Layout>
      <NextSeo
        title={`Crazy Imagine Software | ${metaTitle ? metaTitle : title}`}
        description={`${
          metaDescription
            ? metaDescription
            : "Crazy Imagine Software Offer SofHuy que tware Development of High-Quality Web and Mobile Applications To Meet Our Client’s Unique Demands. Contac Us!"
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

      {reviews.data
        .sort((a, b) => b.id - a.id)
        .map((rev, index) => {
          if (index < 6) {
            if (rev?.attributes?.project?.data != null) {
              return (
                <CarCategoryReview key={index} review={rev} index={index} />
              )
            }
          }
        })}
    </Layout>
  )
}
export default References
