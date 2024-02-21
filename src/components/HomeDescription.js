import React, { useRef } from "react"
import { Box, Typography } from "@mui/material"
import { useIntersection } from "../hooks/useIntersection"
import { useTranslation } from "next-i18next"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(theme => ({
  container: {
    height: "auto",
    padding: "0px 10px",
    width: "90%",
    [theme.breakpoints.between(2562, 4000)]: {
      height: "auto",
      paddingTop: "30px",
      paddingBottom: "30px",
      width: "55%",
    },
    [theme.breakpoints.between(2150, 2561)]: {
      width: "70%",
      height: "auto",
      paddingTop: "30px",
      paddingBottom: "10px",
    },
    [theme.breakpoints.between(0, 2149)]: {
      width: "80%",
      height: "auto",
      paddingTop: "30px",
      paddingBottom: "10px",
    },
  },
  textContainer: {
    visibility: "hidden",
  },
  textContainer2: {
    animation: `$myEffect 2000ms`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  text: {
    fontFamily: "Nexa",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "24px",
    color: "#193174",
    textAlign: "center",
    [theme.breakpoints.up("xl")]: {
      fontSize: "25px",
      lineHeight: "25px",
    },
    [theme.breakpoints.between(1281, 1920)]: {
      padding: "20px 50px 0px 50px",
      fontSize: "23px",
      lineHeight: "23px",
    },
    [theme.breakpoints.between(601, 1280)]: {
      padding: "20px 30px 0px 30px",
      fontSize: "16px",
      lineHeight: "17px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      textAlign: "left",
      lineHeight: "17px",
    },
  },
  desc: {
    fontFamily: "HindVadodara",
    fontWeight: "600",
    fontSize: "30px",
    lineHeight: "39px",
    paddingTop: "30px",
    color: "#193174",
    textAlign: "center",
    [theme.breakpoints.up("xl")]: {
      fontSize: "25px",
      lineHeight: "25px",
    },
    [theme.breakpoints.between(1281, 1919)]: {
      padding: "20px 50px 0px 50px",
      fontSize: "25px",
      lineHeight: "25px",
    },
    [theme.breakpoints.between(601, 1280)]: {
      padding: "20px 30px 0px 30px",
      fontSize: "18px",
      lineHeight: "25px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "25px",
      fontSize: "15px",
      lineHeight: "18px",
      whiteSpace: "normal",
      textAlign: "left",
    },
  },
}))

const HomeDescription = () => {
  const classes = useStyles()
  const { t } = useTranslation("common")

  return (
    <Box className={classes.container}>
      <Box className={classes.textContainer2}>
        <Typography className={classes.text}>
          {t("home_homeDescription_text")}
        </Typography>

        <Typography className={classes.desc}>
          {t("home_homeDescription_description")}
        </Typography>
      </Box>
    </Box>
  )
}

export default HomeDescription
