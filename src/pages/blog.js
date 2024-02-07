import React, { useEffect, useState } from "react"
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'

import Layout from "../components/Layout"

import headerImage from "../../public/deco.webp"
import { NextSeo } from "next-seo"
import { useRouter } from "next/router"

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


export async function getServerSideProps({ locale }) {
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL

  const resArticles = await fetch(`${domain}articles?locale=${locale}&populate=category&populate=author&populate=image&populate=seo`)
  const articles = await resArticles.json()

  const resBlogpage = await fetch(`${domain}blog?locale=${locale}&populate=seo&populate=title`)
  const blogpage = await resBlogpage.json()

  return { props: { articles, blogpage,
    ...await serverSideTranslations(locale, ['common'])
  } }
}

const Blog = ({ articles, blogpage }) => {
  const { t, i18n } = useTranslation('common')
  const router = useRouter()
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL_FILES;

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
  
  const articlesNew = [];
  articles.data.map(({ attributes: { title, Key, slug, createdAt, locale, image, seo}}) => {
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
      Key,
      slug,
      createdAt,
      locale,
      image: imagesArticles,
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
