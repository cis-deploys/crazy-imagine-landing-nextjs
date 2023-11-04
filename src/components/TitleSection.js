import React, { useRef } from "react"
import { Box, Typography } from "@mui/material"
import mainImage from "../../public/Group619.svg"
import { useIntersection } from "../hooks/useIntersection"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles"
import Image from "next/image"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    gap: "59px",
    height: "100%",
    marginTop: "50px",
    [theme.breakpoints.down("md")]: {
      gap: "10px",
      height: "auto",
      marginTop: "35px",
      marginBottom: "35px",
      width:"80%"
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "0px",
      width: "70%",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column ",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "20px",
    width: "45%",
    whiteSpace: "pre-line",
    [theme.breakpoints.up("xl")]: {
      marginTop: "9px",
      marginBottom: "9px", 
      width: "40%",
      gap: "14px",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "9px",
      marginBottom: "9px", 
      width: "40%",
      gap: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "9px",
      width: "55%",
      paddingRight: "30px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "50%",
    },
  },
  titleContainer: {
    alignSelf: "flex-start",
  },
  title2: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "58px",
    lineHeight: "58px",
    color: "#193174",
    alignSelf: "flex-start",
    [theme.breakpoints.up("xl")]: {
      fontSize: "60px",
      lineHeight: "60px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "41px",
      lineHeight: "41px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "29px",
      lineHeight: "29px",
    },
  },
  blueTitle2: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "58px",
    lineHeight: "58px",
    color: "#27AAE1",
    alignSelf: "flex-start",
    [theme.breakpoints.up("xl")]: {
      fontSize: "60px",
      lineHeight: "60px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "41px",
      lineHeight: "41px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "29px",
      lineHeight: "29px",
    },
  },
  desc2: {
    fontFamily: "HindVadodara",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "21px",
    lineHeight: "130%",
    letterSpacing: "0.02em",
    textAlign: "justify",
    color: "#193174",
    [theme.breakpoints.up("xl")]: {
      fontSize: "30px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
  img: {
    visibility: "hidden",
  },
  img2: {
    animation: `$myEffect 2000ms`,
    width: "314px",
    height: "357px",
    [theme.breakpoints.down("lg")]: {
      width: "auto",
      height: "auto",
    },
    [theme.breakpoints.down("md")]: {
      width: "70%",
      height: "70%",
      alignItems: "center",
    },
    [theme.breakpoints.between(200, 600)]: {
      width: "45%",
    },
    [theme.breakpoints.between(0, 200)]: {
      width: "55%",
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateX(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      width: "40%",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      width: "40%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "inherit",
      justifyContent: "center",
      marginTop: "10px",
    },
  },
}))

export const TitleSection = ({ desc }) => {
  const classes = useStyles()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  const { t } = useTranslation();
  return (
    <Box className={classes.container}>
      <Box className={classes.imgContainer}>
        <Image
          src={mainImage}
          width={314}
          height={357}
          className={isVisible ? classes.img2 : classes.img}
          alt="Title"
        />
      </Box>
      <Box className={classes.textContainer}>
        <Box className={classes.titleContainer}>
          <Typography className={classes.title2}>{t("home_homeMainSection_titleSection_title")}</Typography>
          <Typography className={classes.blueTitle2}>{t("home_homeMainSection_titleSection_blueTitle")}</Typography>
        </Box>
        <Typography ref={ref} className={classes.desc2}>
          {desc}
        </Typography>
      </Box>
    </Box>
  )
}

export default TitleSection
