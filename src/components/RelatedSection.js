import React, { useEffect, useRef, useState } from "react"
import { Box, Typography } from "@mui/material"
import RelatedProjects from "../components/RelatedProjects"
import { PROJECTS } from "../navigation/sitemap"
import { useTranslation } from "react-i18next"
import Link from "next/link"
import { makeStyles } from "@mui/styles"
import { useIntersection } from "../hooks/useIntersection"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "55px 48px 0px 43px",
    gap: "15px",
    justifyContent: "center",
    backgroundColor: "#193174",
    backgroundImage: `url('/background.svg')`,
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
    height: "700px",
    [theme.breakpoints.between(1925, 3000)]: {
      padding: "55px 205px 0px 205px",
      gap: "16px",
      height: "800px",
    },
    [theme.breakpoints.between(1280, 1920)]: {
      padding: "0px 48px 0px 43px",
      gap: "16px",
      height: "600px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "20px 43px 0px 43px",
      gap: "10px",
      height: "520px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "20px 43px 0px 43px",
      gap: "10px",
      height: "500px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px 43px 0px 43px",
      gap: "5px",
      height: "460px",
    },
  },
  link: {
    visibility: "hidden",
  },
  link2: {
    animation: `$myEffectos 5000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    textAlign: "center",
    lineHeight: "15px",
    letterspacing: "0.1em",
    color: "#888DFF",
    [theme.breakpoints.up("xl")]: {
      fontSize: "20px",
      lineHeight: "18px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      lineHeight: "11px",
    },
  },
  "@keyframes myEffectos": {
    "0%": {
      opacity: 0,
    },
    "50%": {
      opacity: 0.5,
    },
    "100%": {
      opacity: 1,
    },
  },
  containerPost: {
    display: "flex",
    flexDirection: "row",
    gap: "21px",
    [theme.breakpoints.down("md")]: {
      gap: "15px",
    },
  },
}))

const RelatedSection = ({ projects }) => {
  const classes = useStyles()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  const { i18n, t } = useTranslation();
    
  const [projectDataAll, setProjectDataAll] = useState(projects.filter(project =>
    project.locale.includes(i18n.language)
    ))?.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at)
    }); 

    useEffect(() => {
      setProjectDataAll(projects.filter(project =>
        project.locale.includes(i18n.language)
        ))?.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at)
        });
    }, [i18n.language]);
    
  return (
    <Box ref={ref} className={classes.container}>
      <Typography
        className={isVisible ? 'title-white' : 'title'}>
      {t("project_RelatedSection_title")}
      </Typography>

      <Link 
      href={`${PROJECTS}`} >
        
      <a className={isVisible ? classes.link2 : classes.link}>
        {t("common_lastestPosts_button_allBlogs")}
        </a>
      </Link>
      
      <RelatedProjects projects={ projectDataAll }/>
    </Box>
  )
}

export default RelatedSection
