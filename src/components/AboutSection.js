import React from "react"
import { Box } from "@mui/material"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles"
import SubTitleSection from "./SubTitleSection"
import AboutTitle from "./AboutTitle"
import aboutImage from "../../public/sateliteBackground.svg"
import aboutImage1 from "../../public/antenaBackground.svg"

const useStyles = makeStyles(theme => ({
  container: {
    height: "850px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#FFF",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      height: "auto",
    },
  },
}))

const AboutSection = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <>
      <Box className={classes.container}>
        <AboutTitle
          title={t("about_aboutSection_title1")}
          desc={t("about_aboutSection_description1")}
          img={aboutImage}
        />
        <SubTitleSection
          title={t("about_aboutSection_title2")}
          desc={t("about_aboutSection_description2")}
          img={aboutImage1}
        />
      </Box>
    </>
  )
}

export default AboutSection
