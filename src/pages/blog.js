import React from "react"
import { useTranslation } from "react-i18next"

import Layout from "../components/Layout"
import FeaturedArticle from "../components/FeaturedArticle"
import SectionHeader from "../components/SectionHeader"
import BlogArticle from "../components/BlogArticle"
import ContactSection from "../components/ContactSection"

import headerImage from "../../public/deco.svg"

export async function getServerSideProps() {
  const resArticles = await fetch("https://strapi.crazyimagine.com/articles")
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
