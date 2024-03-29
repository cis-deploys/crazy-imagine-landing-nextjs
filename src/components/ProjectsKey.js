import React, { useEffect, useState } from 'react';
import { Box, Typography } from "@mui/material"
import HeroProjectsSection from "./HeroProjectsSection"
import AboutProjects from "./AboutProjects"
import GalleryProjects from "./GalleryProjects"
import RelatedSection from "./RelatedSection"
import ContactSection from "./ContactSection"
import { useTranslation } from 'next-i18next'
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
    marginBottom: "10px",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      lineHeight: "22px",
      marginBottom: "0px",
    },
  },
  header: {
    width: "80%",
    paddingTop: "60px",
    margin: "70px auto 0px auto",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      margin: "0px auto 0px auto",
    },
  },
}))

const ProjectsKey = ({projectKey, projects}) => {
    const classes = useStyles()
    const { i18n, t } = useTranslation('common')
    const router = useRouter();
    const { Key } = router.query;
    const [projectData, setProjectData] = useState(projectKey
      ?.filter( project => project?.Key === Key && project?.Key !== null)|| [])

    const [projectDataAll, setProjectDataAll] = useState(projects)

        useEffect(() => {
          setProjectData(projectKey
            ?.filter( project => project?.Key === Key && project?.Key !== null)|| [])

            setProjectDataAll(projects
              ?.filter( projects => projects?.locale?.includes(i18n.language)) || [])
        }, [i18n.language, projectKey]);

  return (
    <>
      <Box className={classes.header}>
        <Typography className={classes.title} variant="h1" component="h1">
        {projectData[0]?.title}
        </Typography>
        <Typography className={classes.date}>{projectData[0]?.created_at}</Typography>
        <Typography className={classes.description}>{projectData[0]?.description}</Typography>
      </Box>
      <Box overflow="hidden">
        <HeroProjectsSection image={projectData[0]?.images} title={projectData[0]?.title} />
        <>
          <AboutProjects
            aboutProject={projectData[0]?.details}
            images={projectData[0]?.images}
            gallery={projectData[0]?.galleryImages}
            moreAbout={projectData[0]?.description}
          />
          <GalleryProjects
            images={projectData[0]?.images}
            gallery={projectData[0]?.galleryImages}
            id={projectData[0]?.id}
            description={projectData[0]?.moreAbout}
          />
        </>
        
        <RelatedSection projects={ projectDataAll }/>

        <ContactSection />
      </Box>
    </>
  )
}

export default ProjectsKey
