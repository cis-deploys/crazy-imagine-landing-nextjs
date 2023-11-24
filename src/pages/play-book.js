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

const PlayBookContent = dynamic(
  () => import("../components/PlayBookContent"),
  { ssr: false },
)

function PlayBook() {
  const { t } = useTranslation()
  
  return (
    <Layout>
      <Box overflow="hidden">
        <SectionHeader 
          title={t("playBook_sectionHeader_title")}
          img={headerImage}
          btn={true}
          cls="textContainer"
        />
        <PlayBookContent/>
        <ContactSection/>
      </Box>
    </Layout>
  )
}

export default PlayBook
