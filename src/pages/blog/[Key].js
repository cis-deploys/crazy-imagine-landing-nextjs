import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from "next/dynamic";

import Layout from "../../components/Layout";
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

const BlogKey = dynamic(
  () => import("../../components/BlogKey"),
  { ssr: false },
)
const LastestPosts = dynamic(
  () => import("../../components/LastestPosts"),
  { ssr: false },
)

const ContactSection = dynamic(
  () => import("../../components/ContactSection"),
  { ssr: false },
)

export async function getServerSideProps(context) {
  const domain = process.env.NEXT_PUBLIC_CRAZY_STRAPI_URL
  const { query, locale } = context;
  const { Key } = query;

  const resArticles = await fetch(`${domain}articles?locale=${locale}&pagination[limit]=10&sort[0]=createdAt:desc&populate=category&populate=author&populate=image&populate=seo`)//falta restringuir seo
  const articles = await resArticles.json();

  const resArticleKey = await fetch(`${domain}articles?filters[Key][$eq]=${Key}&locale=all&populate=category&populate=author&populate=image&populate=seo`)
  const articleKey = await resArticleKey.json();

  return { props: { articles, articleKey,
    ...await serverSideTranslations(locale, ['common']),
  },
 }
}

const Post = ({ articles, articleKey }) => {
  const { i18n } = useTranslation('common')
  const router = useRouter()

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

  const articleKeyNew = [];
  articleKey.data.map(({ attributes: { title, description, content, slug, Key, createdAt, locale, image, category, author, seo}}) => {
    const imagesArticles = [];
    if(image.data){
      image.data.map(({ attributes: { url }}) => {
        imagesArticles.push({
          url//: `${domain}${url}`
        });
      });
    }
    articleKeyNew.push({
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
    setMetaTitle(articleKey.data[0]?.attributes.seo?.metaTitle),
    setMetaDescription(articleKey.data[0]?.attributes.seo?.metaDescription),
    setKeywords(articleKey.data[0]?.attributes.seo?.keywords)
    setTitle(articleKey.data[0]?.attributes.title)
  }, [articleKey])

  return (
    <Layout>
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
      <BlogKey articleKey={ articleKeyNew } articles={ articlesNew }/>

      <LastestPosts articlesAll={ articlesNew }/>

      <ContactSection />
    </Layout>
  )
}



export default Post