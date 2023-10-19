import React from "react"
import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles"
import Image from "next/image"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "60px",
    [theme.breakpoints.down("md")]: {
      padding: "75px 43px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "75px 15px",
    },
  },
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "28px",
    lineHeight: "28px",
    color: "#193174",
    marginBottom: "26px",
    [theme.breakpoints.down("md")]: {
      fontSize: "21px",
      lineHeight: "21px",
    },
  },
  description: {
    fontFamily: "HindVadodara",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "25px",
    color: "#787878",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      lineHeight: "20px",
      width: "100%",
    },
  },
  imgContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "21px",
    padding: "0px 60px",
    [theme.breakpoints.down("md")]: {
      gap: "18px",
      padding: "0px 43px",
    },
    [theme.breakpoints.between(0, 600)]: {
      flexDirection: "column",
      padding: "0px 15px",
    },
  },
}))

const AboutProjects = ({ aboutProject, moreAbout, gallery, images }) => {
  const classes = useStyles()
  const { t } = useTranslation()



  return (
    <>
      <Box className={classes.container}>
        <Typography className={classes.title}>{t("project_aboutProjects_title")}</Typography>
        <Typography className={classes.description}>{aboutProject}</Typography>
      </Box>
      <Box className={classes.imgContainer}>
        <Image
          src={gallery[0] ? gallery[0]?.url : images[0]?.url }
          style={{ objectFit: "contain" }}
          alt="About the project"
          width={530}
          height={300}
        />
        <Image
          src={ gallery[1] ? gallery[1]?.url : images[0]?.url }
          style={{ objectFit: "contain" }}
          alt="More"
          width={530}
          height={300}
        />
      </Box>
      <Box className={classes.container}>
        <Typography className={classes.title}>{t("project_aboutProjects_subtitle")}</Typography>
        <Typography className={classes.description}>{moreAbout}</Typography>
      </Box>
    </>
  )
}

export default AboutProjects
