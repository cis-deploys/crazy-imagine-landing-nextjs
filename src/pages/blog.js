import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import dynamic from 'next/dynamic'

import Layout from "../components/Layout"

import headerImage from "../../public/deco.svg"
import { NextSeo } from "next-seo"

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

  const resBlogpage = await fetch(`${domain}blog?populate=seo&populate=title`)
  const blogpage = await resBlogpage.json()

  return { props: { articles, blogpage } }
}

const Blog = ({ articles, blogpage }) => {
  const { t } = useTranslation()
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL_FILES;

  const [metaTitle, setMetaTitle] = useState();
  const [metaDescription, setMetaDescription] = useState();
  const [keywords, setKeywords] = useState();
  const [ title, setTitle ] = useState();
  
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
      image: imagesArticles,
      category: category?.data?.attributes,
      author: author?.data?.attributes,
      seo
    });
  });

  useEffect(() => {
    setMetaTitle(blogpage.data?.attributes.seo?.metaTitle),
    setMetaDescription(blogpage.data?.attributes.seo?.metaDescription),
    setKeywords(blogpage.data?.attributes.seo?.keywords)
    setTitle(blogpage.data?.attributes.title)
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
