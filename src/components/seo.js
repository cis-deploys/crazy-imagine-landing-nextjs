import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Loading from "./Loading"
import { useTranslation } from "react-i18next"
import { NextSeo } from 'next-seo'

const SEO = () => {
  const { i18n } = useTranslation()
  const lang = i18n.language 

  return (  
    <>
    <NextSeo
      title ="Crazy Imagine Software | Software and App Developers"
      description="Software and Mobile Application Development Company, Full Cycle Software Development and Dedicated Teams. The Best Developers To Hire"
      canonical="https://crazyimagine.com"
    />
    </>
  )
}

export default SEO

