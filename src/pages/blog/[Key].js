import React from "react"
import dynamic from "next/dynamic";

// COMPONENTS
import Layout from "../../components/Layout";
import { Box } from "@mui/material";

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
  const resArticles = await fetch(`https://strapi.crazyimagine.com/articles`)
  const articles = await resArticles.json()

  return { props: { articles } }
}

const Post = ({ articles }) => {


  return (
    <Layout>

      <BlogKey articles={ articles }/>

      <LastestPosts articles={ articles }/>

      <ContactSection />
      
    </Layout>
  )
}



export default Post