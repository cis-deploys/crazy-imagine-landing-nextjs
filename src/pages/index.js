import { Box } from "@mui/material"
import { useTranslation } from "react-i18next"
import dynamic from 'next/dynamic'
import Head from 'next/head'

import Layout from "../components/Layout"

import headerImage from "../../public/flag.svg"
import { NextSeo } from "next-seo"

const SectionHeader = dynamic(
  () => import("../components/SectionHeader"),
  { ssr: false },
)

const HomeMainSection = dynamic(
  () => import("../components/HomeMainSection"),
  { ssr: false },
)

const ReferenceSection = dynamic(
  () => import("../components/ReferenceSection"),
  { ssr: false },
)

const ProjectSection = dynamic(
  () => import("../components/ProjectSection"),
  { ssr: false },
)

const MailchimpForm = dynamic(
  () => import("../components/MailchimpForm"),
  { ssr: false },
)

const Partners = dynamic(
  () => import("../components/Partners"),
  { ssr: false },
)

const LastestPosts = dynamic(
  () => import("../components/LastestPosts"),
  { ssr: false },
)

const ContactSection = dynamic(
  () => import("../components/ContactSection"),
  { ssr: false },
)

export async function getServerSideProps() {
  const resProjects = await fetch("https://strapi.crazyimagine.com/projects")
  const projects = await resProjects.json()

  const resArticles = await fetch("https://strapi.crazyimagine.com/articles")
  const articles = await resArticles.json()

  const resReviews = await fetch("https://strapi.crazyimagine.com/reviews")
  const reviews = await resReviews.json()

  const resHomepage = await fetch("https://strapi.crazyimagine.com/homepage")
  const homepage = await resHomepage.json()

  return { props: { projects, articles, reviews, homepage } }
}


function IndexPage({ projects, articles, reviews, homepage }) {
  const { t } = useTranslation()
  const metaTitle = homepage.seo.metaTitle
  const metaDescription = homepage.seo.metaDescription
  const keywords = homepage.seo.keywords

  return (
    <Layout seo >
      <NextSeo
      title={`${metaTitle}`}
      description={`${metaDescription}`}
      />
      <Box overflow="hidden">
        <SectionHeader
          title={t("home_sectionHeader_title")}
          desc={t("home_sectionHeader_description")}
          btn={true}
          img={headerImage}
          cls="textContainer"
        />
        <HomeMainSection />

        <ReferenceSection reviews={ reviews }/>

        <ProjectSection
          title={t("home_projectSection_title")}
          btn={true}
          size={true}
          projects={projects}
        />
        <MailchimpForm />

        <Partners />

        <LastestPosts articles={ articles }/>

        <ContactSection bgColor="#FFFFFF" />
      </Box>
    </Layout>
  )
}
export default IndexPage
