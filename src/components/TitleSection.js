import React, { useRef } from "react"
import { Box, Typography } from "@mui/material"
import mainImage from "../../public/Group619.svg"
import { useIntersection } from "../hooks/useIntersection"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles"
import Image from "next/image"

const useStyles = makeStyles(theme => ({
  container1: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: "59px",
    height: "100%",
    marginTop: "50px",
    [theme.breakpoints.between(0, 600)]: {
      gap: "5px",
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
      fontSize: "18px",
      lineHeight: "18px",
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
      fontSize: "20px",
      lineHeight: "20px",
    },
  },
  desc: {
    display: "flex",
    flexDirection: "row",
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      flexDirection: "row",
      display: 'none',
    },
  },
  desc2: {
    display: "flex",
    flexDirection: "row",
    fontFamily: "HindVadodara",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "17px",
    letterSpacing: "0.03em",
    color: "#193174",
    [theme.breakpoints.between(601, 3000)]: {
      display: "none",
    },
    [theme.breakpoints.between(0, 600)]: {
      display: "unset",
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
      marginRight: "10px"
    },
  },
}))

export const TitleSection = ({ desc }) => {
  const classes = useStyles()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  const { t } = useTranslation();
  return (
    <Box className={classes.container1}>
    <Box className={'container-white-component'}>
      <Box className={classes.imgContainer}>
        <Image
          src={mainImage}
          width={314}
          height={357}
          className={isVisible ? 'image-component' : 'image'}
          alt="Title"
        />
      </Box>
      <Box className={'text-container-white-component'}>
        <Box className={classes.titleContainer}>
          <Typography className={classes.title2}>{t("home_homeMainSection_titleSection_title")}</Typography>
          <Typography className={classes.blueTitle2}>{t("home_homeMainSection_titleSection_blueTitle")}</Typography>
        </Box>
        <Typography ref={ref} className={classes.desc}>
          {desc}
        </Typography>
      </Box>
    </Box>
    <Box sx={{ padding: "0px 30px", textAlign: "center", width: "90%", marginBottom: "50px"}}>
      <Typography ref={ref} className={classes.desc2}>
          {desc}
      </Typography>
    </Box>
    </Box>
  )
}

export default TitleSection
