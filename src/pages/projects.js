import React from "react"
import { useTranslation } from "react-i18next"
import { Box } from "@mui/material"

import SectionHeader from "../components/SectionHeader"
import Layout from "../components/layout"
import ServicesSection from "../components/ServicesSection"
import ContactSection from "../components/ContactSection"
import ProjectSection from "../components/ProjectSection"

import headerImage from "../../public/robot.svg"

export async function getServerSideProps() {
  const resProjects = await fetch("https://strapi.crazyimagine.com/projects")
  const projects = await resProjects.json()
  return { props: { projects } }
}

function Projects({ projects }) {
  const { t } = useTranslation()

  return (
    <Layout>
      <Box overflow="hidden">
        <SectionHeader
          title={t("services_sectionHeader_title")}
          img={headerImage}
          btn={false}
          little={true}
        />
        <ServicesSection />
        <ProjectSection
          title={t("services_projectSection_title")}
          btn={false}
          projects={projects}
        />
        <ContactSection />
      </Box>
    </Layout>
  )
}

export default Projects
