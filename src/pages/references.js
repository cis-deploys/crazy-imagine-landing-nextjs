import dynamic from "next/dynamic"
import { useTranslation } from "react-i18next"
import Layout from "../components/Layout"
import headerImage from "../../public/references.svg"

import { NextSeo } from "next-seo"
import React, { useEffect, useState } from "react"

const SectionHeader = dynamic(() => import("../components/SectionHeader"), {
  ssr: false,
})
const CarCategoryReview = dynamic(
  () => import("../components/CarCategoryReview"),
  {
    ssr: false,
  }
)
export async function getServerSideProps() {
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL

  const resCategoryReviews = await fetch(
    `${domain}category-reviews?locale=all&populate=slug&populate=reviews`
  )
  const categoryReviews = await resCategoryReviews.json()

  const resReviews = await fetch(
    `${domain}reviews?locale=all&populate=avatar=slug&populate=project&populate=category_reviews`
  )
  const reviews = await resReviews.json()

  const resReferencespage = await fetch(
    `${domain}references-page?locale=all&populate=seo&populate=title`
  )
  const referencespage = await resReferencespage.json()

  return { props: { referencespage, categoryReviews, reviews } }
}
const References = ({ referencespage, categoryReviews, reviews }) => {
  const { t } = useTranslation()
  const [metaTitle, setMetaTitle] = useState()
  const [metaDescription, setMetaDescription] = useState()
  const [keywords, setKeywords] = useState()
  const [title, setTitle] = useState()

  useEffect(() => {
    setMetaTitle(referencespage.data?.attributes.seo?.metaTitle),
      setMetaDescription(referencespage.data?.attributes.seo?.metaDescription),
      setKeywords(referencespage.data?.attributes.seo?.keywords)
    setTitle(referencespage.data?.attributes.title)
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
      {console.log("categoryReviews ", categoryReviews)}
      <SectionHeader
        title={t("References")}
        btn={false}
        img={headerImage}
        cls="textContainer"
      />
      {reviews.data
        .filter(r => r?.attributes?.locale === "en")
        .map((rev, index) => {
          return <CarCategoryReview key={index} review={rev} index={index} />
        })}
    </Layout>
  )
}
export default References
