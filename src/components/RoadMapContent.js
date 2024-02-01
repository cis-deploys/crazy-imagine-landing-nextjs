import React, { useState } from "react"
import { Box, Grid, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useTranslation } from "react-i18next"
import Link from "next/link"

import RoadMapComponents from "./RoadMapComponents"

import RoadMapImage from "../../public/MapPurple.svg"
import DesignSection from "./DesignSection"
const useStyles = makeStyles(theme => ({
  containerPpl: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    maxWidth: "1440px",
    margin: "0 auto",
    marginTop: "60px",
  },
  container: {
    padding: "2px",
    margin: "6px",
    width: "100%",
    position: "relative",
  },

  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "20px",
    height: "auto",
    paddingTop: "auto",
    [theme.breakpoints.between(0, 767)]: {
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
    },
  },
  card: {
    height: "min-content !important",
  },

  title: {
    animation: `$myEffect 2000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "40px",
    lineHeight: "40px",
    textAlign: "center",
    color: "#FFFFFF",
    margin: "38px",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      lineHeight: "28px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
      lineHeight: "22px",
    },
  },
  sectionTitlesContainer: {
    width: "100%",
    maxWidth: "1200px",
    margin: " 0 auto",
    [theme.breakpoints.between("xs", "sm")]: {
      display: "flex",
      flexDirection: "column",
      width: "80%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      display: "flex",

      width: "80%",
    },
  },

  sectionTitles: {
    padding: "5px",
    position: "relative",

    width: "100%",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#FFFFFF",
    boxShadow: "10px 10px 100px 3px rgba(0, 0, 0, 0.06)",
    borderRadius: "14px",
    height: "185px",
  },
  sectionTitlesText: {
    color: "#193174",
    position: "relative",
    fontFamily: "Nexa Bold",
    fontWeight: 700,
    fontSize: "28px",
    lineHeight: "28px",
    padding: "5px",
    "&:hover": {
      color: "#797EF6",
      borderBottom: "none",
    },
    "&:link": {
      textDecoration: "none",
    },
  },
  sectionTitlesDescripcion: {
    color: "#888DFF",
    fontFamily: "Nexa Bold",
    fontWeight: 700,
    fontSize: "15px",
    lineHeight: "15px",
    letterSpacing: "0.2rem",
    padding: "15px",
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  contentPhase1: {
    width: "100%",
    height: "100%",
    marginLeft: "64px",
    minHeight: "800px",
    marginTop: "90px",
  },
  titlePhase1: {
    fontFamily: "Nexa Bold",
    fontWeight: 700,
    fontSize: "20px",
    letterSpacing: "0.2rem",
    color: "#797EF6",
  },
  subtitlePhase1: {
    fontFamily: "Nexa Bold",
    lineHeight: "20px",
    fontSize: "58px",
    color: "#193174",
    paddingTop: "32px",
  },
  descriptionPhase1: {
    fontFamily: "HindVadodara",
    fontWeight: 500,

    fontSize: "26px",
    color: "#193174",
    lineHeight: "32.8px",
    paddingTop: "50px",
  },
  description2Phase1: {
    fontFamily: "HindVadodara",
    fontWeight: 500,
    lineHeight: "20px",
    fontSize: "17px",
    color: "#193174",
    lineHeight: "22.1px",
    paddingTop: "30px",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
  },

  imageVector: {
    position: "absolute",
    width: "553px",
    height: "791px",
    top: "-150px",
    right: 0,
  },
  imagePhoneRoadMap1: {
    position: "absolute",
    top: "105px",
    left: "49px",
    width: "465px",
    height: "488px",
  },
  imagePhoneRoadMap2: {
    position: "absolute",
    top: "-63px",
    left: "-105px",
    width: "500px",
    height: "495px",
  },

  /*box step styles */
  stepContainer: {
    display: "flex",
    alignItems: "center",

    paddingTop: "20px",
  },
  stepNumber: {
    color: "#888DFF",
    fontFamily: "Nexa Bold",
    fontWeight: 700,
    fontSize: "15px",
    lineHeight: "15px",
    letterSpacing: "0.2rem",
  },
  stepDescription: {
    color: "#8C98BA",
    fontFamily: "HindVadodara",
    fontWeight: 500,
    fontSize: "15px",
    lineHeight: "18px",
    letterSpacing: "0.2rem",
    paddingLeft: "8px",
  },
}))

const DevelopSection = () => {
  return (
    <Box id="develop" style={{ height: "700px" }}>
      develop
    </Box>
  )
}
const MaintainSection = () => {
  return (
    <Box id="maintain" style={{ height: "700px" }}>
      maintain
    </Box>
  )
}

const RoadMapContent = () => {
  const classes = useStyles()

  const { t, i18n } = useTranslation()
  const lang = i18n.language

  const sectionTitles = [
    {
      title: t("design"),
      descripcion: t("Phase1"),
      link: "#design",
    },
    {
      title: t("develop"),
      descripcion: t("Phase2"),
      link: "#develop",
    },
    {
      title: t("maintain"),
      descripcion: t("Phase3"),
      link: "#maintain",
    },
  ]
  const [activeSection, setActiveSection] = useState("#design")
  const handleSectionClick = link => {
    setActiveSection(link)
  }

  return (
    <>
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <Grid
          container
          className={classes.containerPpl}
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Box className={classes.container}>
            <RoadMapComponents
              title={t("common_ThisRoadMapComponents_title1")}
              desc={t("common_ThisRoadMapComponents_descripcion")}
              img={RoadMapImage}
            />
          </Box>

          <Grid
            container
            spacing={2}
            className={classes.sectionTitlesContainer}
          >
            {sectionTitles.map((e, index) => (
              <Grid item key={index} sm={12} md={12} lg={4} xl={4}>
                <Box
                  className={classes.sectionTitles}
                  onClick={() => handleSectionClick(e.link)}
                >
                  <Typography className={classes.sectionTitlesDescripcion}>
                    {e.descripcion}
                  </Typography>
                  <Typography>
                    <Link href={e.link}>
                      <a
                        className={`${classes.sectionTitlesText} ${
                          activeSection === e.link ? "activo" : ""
                        }`}
                      >
                        {e.title}
                      </a>
                    </Link>
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>

      {activeSection === "#design" && <DesignSection />}
      {activeSection === "#develop" && <DevelopSection />}
      {activeSection === "#maintain" && <MaintainSection />}
    </>
  )
}

export default RoadMapContent
