import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";

// COMPONENTS
import Layout from "../../components/Layout";

const LastestPosts = dynamic(
  () => import("../../components/LastestPosts"),
  { ssr: false },
)

const ContactSection = dynamic(
  () => import("../../components/ContactSection"),
  { ssr: false },
)

const BlogKey = dynamic(
  () => import("../../components/BlogKey"),
  { ssr: false },
)

export async function getServerSideProps(context) {
  const { query } = context;
  const { Key } = query;

  const resArticlesAll = await fetch(`https://strapi.crazyimagine.com/articles?_locale=es-VE&_limit=6&_sort=created_at:DESC`)
  const resArticlesAllEs = await fetch(`https://strapi.crazyimagine.com/articles?_locale=en&_limit=6&_sort=created_at:DESC`)
  const articlesAll = await resArticlesAll.json();
  const articlesAllEs = await resArticlesAllEs.json();

  const resArticles = await fetch(`https://strapi.crazyimagine.com/articles?Key=${Key}&_locale=all`)
  const articles = await resArticles.json();

  return { props: { articles, articlesAll, articlesAllEs } }
}

const Post = ({ articles, articlesAll, articlesAllEs }) => {

  return (
    <Layout>

      <BlogKey articles={ articles } articlesAll={ articlesAll }/>

      <LastestPosts articles={ articles } articlesAll={ articlesAll.concat(articlesAllEs) }/>

      <ContactSection />
      
    </Layout>
  )
}



export default Post