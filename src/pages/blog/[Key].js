import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";

import Layout from "../../components/Layout";
import { Box } from '@mui/material';
import { NextSeo } from 'next-seo';

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
  const { query } = context;
  const { Key } = query;

  const resArticlesAll = await fetch(`${domain}articles?locale=es-VE&_limit=6&_sort=created_at:DESC&populate=category&populate=author&populate=image&populate=seo`)
  const articlesAll = await resArticlesAll.json();

  const resArticlesAllEs = await fetch(`${domain}articles?locale=en&_limit=6&_sort=created_at:DESC&populate=category&populate=author&populate=image&populate=seo`)//falta restringuir seo
  const articlesAllEs = await resArticlesAllEs.json();

  const resArticles = await fetch(`${domain}articles?filters[Key][$eq]=${Key}&locale=all&populate=category&populate=author&populate=image&populate=seo`)
  const articles = await resArticles.json();

  return { props: { articles, articlesAll, articlesAllEs } }
}

const Post = ({ articles, articlesAll, articlesAllEs }) => {
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

  const articlesAllNew = [];
  articlesAll.data.map(({ attributes: { title, description, content, slug, Key, createdAt, locale, image, category, author, seo}}) => {
    const imagesArticles = [];
    if(image.data){
      image.data.map(({ attributes: { url }}) => {
        imagesArticles.push({
          url//: `${domain}${url}`
        });
      });
    }
    articlesAllNew.push({
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

  const articlesAllEsNew = [];
  articlesAllEs.data.map(({ attributes: { title, description, content, slug, Key, createdAt, locale, image, category, author, seo}}) => {
    const imagesArticles = [];
    if(image.data){
      image.data.map(({ attributes: { url }}) => {
        imagesArticles.push({
          url//: `${domain}${url}`
        });
      });
    }
    articlesAllEsNew.push({
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
    setMetaTitle(articles.data[0]?.attributes.seo?.metaTitle),
    setMetaDescription(articles.data[0]?.attributes.seo?.metaDescription),
    setKeywords(articles.data[0]?.attributes.seo?.keywords)
    setTitle(articles.data[0]?.attributes.title)
  }, [])

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
      <BlogKey articles={ articlesNew } articlesAll={ articlesAllNew ? articlesAllNew?.concat(articlesAllEsNew) : [] }/>

      <LastestPosts articles={ articlesNew } articlesAll={ articlesAllNew ? articlesAllNew?.concat(articlesAllEsNew) : [] }/>

      <ContactSection />
    </Layout>
  )
}



export default Post