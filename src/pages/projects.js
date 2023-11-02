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

const ContactSection = dynamic(
  () => import("../components/ContactSection"),
  { ssr: false },
)

function Projects({ projects }) {
    const { t } = useTranslation()
    console.log(projects)

  return (
    <Layout>
      <Box overflow="hidden">
        <SectionHeader
          title={t("services_sectionHeader_title")}
          img={headerImage}
          btn={true}
          cls="textContainer"
        />
        <ContactSection />
      </Box>
    </Layout>
  )
}

export default Projects
