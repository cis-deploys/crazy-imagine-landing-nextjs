import React, { useState } from 'react'
import GeneralFAQ from './GeneralFAQ'
import ProjectFAQ from './ProjectFAQ'
import { Box } from '@mui/material'

import { makeStyles } from "@mui/styles"
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    height: "auto",
    width: "100%",
    padding: "20px 100px 50px 100px",
    flexDirection: "row",
    [theme.breakpoints.down("lg")]: {
      padding: "20px 50px 50px 50px",
  },
    [theme.breakpoints.down("md")]: {
      padding: "20px 80px 50px 80px",
      flexDirection: "column",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "20px 10px 50px 10px",
    flexDirection: "column",
},
},
}))

const FaqComponent = ({ faq }) => {
  const classes = useStyles()
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  const faqs = faq
  const faqFilter = faqs
  .filter(faq => faq.locale.includes(lang)
  )

  const generalFilter = faqFilter
  .filter(item => item.faq_options.data.attributes.slug === "general_faqs" || item.faq_options.data.attributes.slug === "preguntas_generales")

  const projectFilter = faqFilter
  .filter(item => item.faq_options.data.attributes.slug === "project_faq" || item.faq_options.data.attributes.slug === "proyectos_preguntas_frecuentes")

  return (
    <Box className={ classes.container}>    
    
    <GeneralFAQ generalFAQ={ generalFilter } />

    <ProjectFAQ projectFAQ={ projectFilter } />
    </Box>
  )
}

export default FaqComponent
