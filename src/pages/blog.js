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
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL
  const resArticles = await fetch(`${domain}articles?locale=all&populate=category&populate=author&populate=image&populate=seo`)
  const articles = await resArticles.json()

  return { props: { articles } }
}

const Blog = ({ articles }) => {
  const { t } = useTranslation()
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL_FILES;
  
  const articlesNew = [];
  articles.data.map(({ attributes: { title, description, content, slug, Key, createdAt, locale, image, category, author, seo}}) => {
    const imagesArticles = [];
    if(image.data){
      image.data.map(({ attributes: { url }}) => {
        imagesArticles.push({
          url//: `${domain}${url}`
        });
      });
    }
    articlesNew.push({
      title,
      description,
      content,
      slug,
      Key,
      createdAt,
      locale,
      image: (imagesArticles.length > 0) ? imagesArticles : undefined,
      category: category?.data?.attributes,
      author: author?.data?.attributes,
      seo
    });
  });

  return (
    <Layout >

      <SectionHeader
        title={t("blog_sectionHeader_title")}
        btn={true}
        img={headerImage}
        cls="textContainer"
      />

      <FeaturedArticle articles={ articlesNew }/>

      <BlogArticle articles={ articlesNew }/>

      <ContactSection />

    </Layout>
  )
}


export default Blog
