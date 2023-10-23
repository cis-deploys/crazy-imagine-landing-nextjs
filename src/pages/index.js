import { Box } from "@mui/material"
import { useTranslation } from "react-i18next"
import dynamic from 'next/dynamic'

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
  const resProjects = await fetch("https://strapi.crazyimagine.com/projects")
  const projects = await resProjects.json()

  const resArticles = await fetch("https://strapi.crazyimagine.com/articles")
  const articles = await resArticles.json()

  const resReviews = await fetch("https://strapi.crazyimagine.com/reviews")
  const reviews = await resReviews.json()

  return { props: { projects, articles, reviews } }
}


function IndexPage({ projects, articles, reviews }) {
  const { t } = useTranslation()

  return (
    <Layout>
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