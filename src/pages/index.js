import { Box } from "@mui/material"
import { useTranslation } from "react-i18next"

import Layout from "../components/Layout"
import SectionHeader from "../components/SectionHeader"
import HomeMainSection from "../components/HomeMainSection"
import ReferenceSection from "../components/ReferenceSection"
import ProjectSection from "../components/ProjectSection"
import MailchimpForm from "../components/MailchimpForm"
import Partners from "../components/Partners"
import LastestPosts from "../components/LastestPosts"
import ContactSection from "../components/ContactSection"

import headerImage from "../../public/flag.svg"

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
