import React from "react"
import { useTranslation } from "react-i18next"
import dynamic from 'next/dynamic'
import { Box } from "@mui/material"

import Layout from "../components/Layout"

import headerImage from "../../public/robot.svg"

const SectionHeader = dynamic(
  () => import("../components/SectionHeader"),
  { ssr: false },
)

const ServicesSection = dynamic(
  () => import("../components/ServicesSection"),
  { ssr: false },
)

const ProjectSection = dynamic(
  () => import("../components/ProjectSection"),
  { ssr: false },
)

const ContactSection = dynamic(
  () => import("../components/ContactSection"),
  { ssr: false },
)

export async function getServerSideProps() {
  const resProjects = await fetch("https://strapi.crazyimagine.com/projects?_locale=all")
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
