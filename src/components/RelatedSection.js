import React from "react"
import { Box, Typography } from "@mui/material"
import RelatedProjects from "../components/RelatedProjects"
import { PROJECTS } from "../navigation/sitemap"
import { useTranslation } from "react-i18next"
import Link from "next/link"
import { makeStyles } from "@mui/styles"

const useStyes = makeStyles(theme => ({
  title: {
    fontFamily: "Nexa Bold",
    fonSstyle: "normal",
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "40px",
    textAlign: "center",
    color: "white",
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      lineWeight: "28px",
      marginTop: "55px",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "23px",
    width: "100%",
    height: "670px",
    padding: "78px 60px 10px 60px",
    backgroundColor: "#193174",
    backgroundImage: `url('/background.svg')`,
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      gap: "16px",
      padding: "78px 43px 54px 43px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "78px 15px",
    },
  },
  link: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "15px",
    letterspacing: "0.1em",
    color: "#888DFF",
    marginBottom: "auto",
    textAlign: "center",
    textDecoration: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      lineHeight: "11px",
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
  const classes = useStyes()
  const { t } = useTranslation()
  
  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>{t("project_RelatedSection_title")}</Typography>
      <Link href={`${PROJECTS}`} >
        
        <a className={classes.link}>
        {t("common_lastestPosts_button_allBlogs")}
        </a>
      </Link>
      
      <RelatedProjects projects={ projects }/>
    </Box>
  )
}

export default RelatedSection
