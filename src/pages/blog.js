import React from "react"
import { useTranslation } from "react-i18next"
import dynamic from 'next/dynamic'

import Layout from "../components/Layout"

import headerImage from "../../public/deco.svg"

const SectionHeader = dynamic(
  () => import("../components/SectionHeader"),
  { ssr: false },
)

const FeaturedArticle = dynamic(
  () => import("../components/FeaturedArticle"),
  { ssr: false },
)

const BlogArticle = dynamic(
  () => import("../components/BlogArticle"),
  { ssr: false },
)

const ContactSection = dynamic(
  () => import("../components/ContactSection"),
  { ssr: false },
)


export async function getServerSideProps() {
  const resArticles = await fetch("https://strapi.crazyimagine.com/articles?_locale=all")
  const articles = await resArticles.json()

  return { props: { articles } }
}

const Blog = ({ articles }) => {
  const { t } = useTranslation()

  return (
    <Layout >

      <SectionHeader
        title={t("blog_sectionHeader_title")}
        btn={false}
        img={headerImage}
        little={true}
      />

      <FeaturedArticle articles={ articles }/>

      <BlogArticle articles={ articles }/>

      <ContactSection />

    </Layout>
  )
}


export default Blog
