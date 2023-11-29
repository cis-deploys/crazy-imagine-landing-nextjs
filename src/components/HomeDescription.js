import React, { useRef } from "react"
import { Box, Typography } from "@mui/material"
import { useIntersection } from "../hooks/useIntersection"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(theme => ({
  container: {
    height: "auto",
    padding: "0px 10px",
    width: "100%",
    [theme.breakpoints.between(0, 3000)]: {
      height: "auto",
      paddingTop: "30px",
      paddingBottom: "30px",
    },
    [theme.breakpoints.down("sm")]: {
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
    whiteSpace: "pre-line",
    [theme.breakpoints.up("xl")]: {
      fontSize: "25px",
      lineHeight: "25px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "17px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      textAlign: "justify",
      lineHeight: "17px",
      whiteSpace: "normal",
    },
},
  desc: {
    fontFamily: "HindVadodara",
    fontWeight: "600",
    fontSize: "30px",
    lineHeight: "39px",
    paddingTop: "40px",
    color: "#193174",
    textAlign: "center",
    [theme.breakpoints.up("xl")]: {
      fontSize: "28px",
      lineHeight: "28px",
    },
    [theme.breakpoints.between(1281, 1949)]: {
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
      textAlign: "justify",
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
