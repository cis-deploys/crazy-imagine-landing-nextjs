import React from "react"
import { Box, Typography } from "@mui/material"
import HeroProjectsSection from "./HeroProjectsSection"
import AboutProjects from "./AboutProjects"
import GalleryProjects from "./GalleryProjects"

import RelatedSection from "./RelatedSection"
import ContactSection from "./ContactSection"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router"

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "70px",
    lineHeight: "71px",
    color: "#193174",
    marginBottom: "17px",
    [theme.breakpoints.down("md")]: {
      fontSize: "51px",
      lineHeight: "53px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
      lineHeight: "28px",
    },
  },
  date: {
    fontFamily: "Nexa",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "22px",
    color: "#193174",
    marginBottom: "49px",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      lineHeight: "15px",
      marginBottom: "35px",
    },
  },
  description: {
    fontFamily: "HindVadodara",
    fontStyle: "normal",
    fontWeight: "399",
    fontSize: "22px",
    lineHeight: "31px",
    color: "#27AAE1",
    marginBottom: "99px",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      lineHeight: "22px",
      marginBottom: "0px",
    },
  },
  header: {
    height: "330px",
    width: "80%",
    paddingTop: "60px",
    margin: "70px auto 0px auto",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      margin: "0px auto 0px auto",
    },
  },
}))

const ProjectsKey = ({projects}) => {
    const classes = useStyles()
    const { i18n, t } = useTranslation()
    const lang = i18n.language 
    const router = useRouter();
    const { Key } = router.query;

    const projectsFilter = projects
    ?.filter( project => project?.Key === Key && project?.Key !== null)
    ?.filter( projects => projects?.locale?.includes(lang)) || []
        const title = projectsFilter[0]?.title || ''
        const date = projectsFilter[0]?.created_at || ''
        const description = projectsFilter[0]?.description || ''
        const image = projectsFilter[0]?.images || ''
  return (
    <>
      <Box className={classes.header}>
        <Typography className={classes.title} variant="h1" component="h1">
        {title}
        </Typography>
        <Typography className={classes.date}>{date}</Typography>
        <Typography className={classes.description}>{description}</Typography>
      </Box>
      <Box overflow="hidden">
        <HeroProjectsSection image={image} title={projectsFilter[0]?.title} />
        <>
          <AboutProjects
            aboutProject={projectsFilter[0]?.details}
            images={image}
            gallery={projectsFilter[0]?.galleryImages}
            moreAbout={projectsFilter[0]?.description}
          />
          <GalleryProjects
            images={image}
            gallery={projectsFilter[0]?.galleryImages}
            id={projectsFilter[0]?.id}
            description={projectsFilter[0]?.moreAbout}
          />
        </>
        <RelatedSection projects={ projects }/>
        <ContactSection />
      </Box>
    </>
  )
}

export default ProjectsKey
