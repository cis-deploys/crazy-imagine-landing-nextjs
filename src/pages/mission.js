import React from 'react'
import dynamic from 'next/dynamic'

import headerImage from "../../public/flag.webp"
import { useTranslation } from 'react-i18next'
import Layout from '../components/Layout'
import MissionComponent from '../components/MissionComponent'

const SectionHeader = dynamic(
    () => import("../components/SectionHeader"),
    { ssr: false },
  )

function Mission () {
    const { t } = useTranslation()

  return (
    <Layout>
    <SectionHeader
        title={t("about_aboutSection_Mission_title")}
        btn={false}
        img={headerImage}
        cls="textContainer"
      />    
      <MissionComponent/>
    </Layout>
  )
}

export default Mission
