import React, { useRef } from "react"
import { Box, Typography } from "@mui/material"
import { useIntersection } from "../hooks/useIntersection"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(theme => ({
  container: {
    height: "auto",
    paddingTop: "50px",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      paddingTop: "50px",
      paddingBottom: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      paddingTop: "30px",
      paddingBottom: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "65%"
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
    whiteSpace: "pre-line",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "17px",
    },
  },
  desc: {
    fontFamily: "HindVadodara",
    fontWeight: "600",
    whiteSpace: "pre-line",
    fontSize: "30px",
    lineHeight: "39px",
    paddingTop: "40px",
    color: "#193174",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "21px",
      lineHeight: "27px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "25px",
      fontSize: "17px",
      lineHeight: "17px",
    },
  },
}))

const HomeDescription = () => {
  const classes = useStyles()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  const { t } = useTranslation();
  
  return (
    <Box ref={ref} className={classes.container}>
      <Box
        className={isVisible ? classes.textContainer2 : classes.textContainer}
      >
        <Typography className={classes.text}>
          {t("home_homeDescription_text")}
        </Typography>
        
        <Typography
          className={classes.desc}
        >{t("home_homeDescription_description")}</Typography>
      </Box>
    </Box>
  )
}

export default HomeDescription
