import React, { useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import dynamic from "next/dynamic"
import { Box } from "@mui/material"
import { useRouter } from "next/router"
import Layout from "../../components/Layout"

import headerImage from "../../../public/Roadmap.svg"

const SectionHeader = dynamic(() => import("../../components/SectionHeader"), {
  ssr: false,
})

const ContactSection = dynamic(
  () => import("../../components/ContactSection"),
  {
    ssr: false,
  }
)

const RoadMapContent = dynamic(
  () => import("../../components/RoadMapContent"),
  {
    ssr: false,
  }
)

function RoadMap() {
  const { t, i18n } = useTranslation()
  const button = {
    refID: "contactSection",
    text: t("common_button_get_started"),
  }

  const router = useRouter()
  const contactSectionRef = useRef(null)
  useEffect(() => {
    //obtener la locale del router
    const locale = router.locale
    if (locale === "es" && i18n.language !== "es") {
      //Establecer el idioma español sino esta establecido
      i18n.changeLanguage("es")
    }
  }, [router.locale, i18n])

  return (
    <Layout>
      <Box overflow="hidden">
        <SectionHeader
          title={t("RoadMap_sectionHeader_title")}
          desc={t("RoadMap_sectionHeader_subtitle").toUpperCase()}
          img={headerImage}
          // btn={true}
          cls="textContainer"
          button={button}
          buttonRoadmap
        />
        <RoadMapContent />

        <ContactSection />
      </Box>
    </Layout>
  )
}

export default RoadMap
