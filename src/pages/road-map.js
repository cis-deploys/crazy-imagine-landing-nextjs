import React from "react"
import { useTranslation } from "react-i18next"
import dynamic from "next/dynamic"
import { Box } from "@mui/material"

import Layout from "../components/Layout"

import headerImage from "../../public/Roadmap.svg"

const SectionHeader = dynamic(() => import("../components/SectionHeader"), {
  ssr: false,
})

const ContactSection = dynamic(() => import("../components/ContactSection"), {
  ssr: false,
})

const RoadMapContent = dynamic(() => import("../components/RoadMapContent"), {
  ssr: false,
})

function RoadMap() {
  const { t } = useTranslation()
  const button = {
    refID: "contactSection",
    text: t("common_button_get_started"),
  }

  return (
    <Layout>
      <Box overflow="hidden">
        <SectionHeader
          title={t("RoadMap_sectionHeader_title")}
          desc={t("RoadMap_sectionHeader_subtitle").toUpperCase()}
          img={headerImage}
          btn={true}
          cls="textContainer"
          button={button}
        />
        <RoadMapContent />
        {/* <ContactSection /> */}
      </Box>
    </Layout>
  )
}

export default RoadMap
