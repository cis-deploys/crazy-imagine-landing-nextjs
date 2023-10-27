import { Box } from "@mui/material"
import { useTranslation } from "react-i18next"
import dynamic from 'next/dynamic'
import Head from 'next/head'

import Layout from "../components/Layout"

import headerImage from "../../public/flag.svg"

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
  const resProjects = await fetch("https://strapi.crazyimagine.com/projects?_locale=es-VE&_limit=6&_sort=created_at:DESC")
  const projects = await resProjects.json()

  const resProjectsEn = await fetch("https://strapi.crazyimagine.com/projects?_locale=en&_limit=6&_sort=created_at:DESC")
  const projectsEn = await resProjectsEn.json()

  const resArticles = await fetch("https://strapi.crazyimagine.com/articles?_locale=es-VE&_limit=6&_sort=created_at:DESC")
  const articles = await resArticles.json()

  const resArticlesEn = await fetch("https://strapi.crazyimagine.com/articles?_locale=en&_limit=6&_sort=created_at:DESC")
  const articlesEn = await resArticlesEn.json()

  const resReviews = await fetch("https://strapi.crazyimagine.com/reviews?_locale=all")
  const reviews = await resReviews.json()

  const resHomepage = await fetch("https://strapi.crazyimagine.com/homepage?_locale=all")
  const homepage = await resHomepage.json()

  return { props: { projects, projectsEn, articles, articlesEn, reviews, homepage } }
}


function IndexPage({ projects, projectsEn, articles, articlesEn, reviews, homepage }) {
  const { t } = useTranslation()

  return (
    <Layout >
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
          projects={projects.concat(projectsEn)}
        />
        <MailchimpForm />

        <Partners />

        <LastestPosts articlesAll={ articles.concat(articlesEn) }/>

        <ContactSection bgColor="#FFFFFF" />
      </Box>
    </Layout>
  )
}
export default IndexPage
