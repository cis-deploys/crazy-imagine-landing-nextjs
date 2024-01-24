import { Box, Typography } from "@mui/material"
import React, { useRef } from "react"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles"
import Image from "next/image"
import { useIntersection } from "../hooks/useIntersection"
import { StyleComponent } from "./StyleComponent"

const useStyles = makeStyles(theme => ({
  container1: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",

    paddingBottom: "68px",
    [theme.breakpoints.between(0, 600)]: {
      gap: "5px",
    },
  },
  conta: {
    animation: `$myEffect 2000ms`,
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
  subtitle2: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "20px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#797EF6",
    [theme.breakpoints.up("xl")]: {
      fontSize: "30px",
      lineHeight: "30px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
      lineHeight: "13px",
      justifyContent: "center",
    },
  },
  title2: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "58px",
    lineHeight: "58px",
    color: "#193174",
    marginTop: 0,
    marginBottom: 0,
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      lineHeight: "28px",
    },
    [theme.breakpoints.between(0, 600)]: {
      fontSize: "18px",
      lineHeight: "18px",
    },
  },
  desc: {
    fontFamily: "Nexa Bold ",

    fontWeight: "700",
    fontSize: "26px",
    lineHeight: "33.8px",
    letterSpacing: "0.2rem",
    color: "#193174",
    whiteSpace: "pre-line",
    // textAlign: "justify",
    [theme.breakpoints.up("xl")]: {
      fontSize: "32px",
      lineHeight: "37px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      display: "none",
    },
  },
  desc2: {
    fontFamily: "HindVadodara",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "130%",
    letterSpacing: "0.01em",
    color: "#193174",
    whiteSpace: "pre-line",
    textAlign: "left",
    [theme.breakpoints.between(601, 4000)]: {
      display: "none",
    },
    [theme.breakpoints.between(0, 600)]: {
      fontSize: "14px",
      display: "unset",
    },
  },
  containerDesc2: {
    padding: "0px 30px",
    textAlign: "left",
    width: "90%",
    marginBottom: "20px",
    [theme.breakpoints.between(0, 450)]: {
      padding: "0px 40px",
      textAlign: "left",
      width: "90%",
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
      marginRight: "10px",
    },
  },
}))

const RoadMapComponents = ({ title, desc, img }) => {
  const classes = useStyles({ img })
  const classesComponent = StyleComponent()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  const { t } = useTranslation()

  const titleParts = title.split(" ")
  const firstPart = titleParts.slice(0, 3).join(" ")
  const secondPart = titleParts.slice(3).join(" ")

  return (
    <Box className={isVisible ? classes.conta2 : classes.conta}>
      <Box className={classes.container1}>
        <Box className={classesComponent.containerWhiteComponentRoadMap}>
          {img && (
            <Image
              src={img}
              width={473}
              height={294}
              className={
                isVisible
                  ? classesComponent.imageComponent
                  : classesComponent.image
              }
              alt={`${title}`}
            />
          )}
          <Box className={classesComponent.textContainerWhiteComponentRoadMap}>
            <Typography className={classes.title2}>
              <span style={{ color: "#193174" }}>{firstPart}</span>{" "}
              <span style={{ color: "#27AAE1", display: "block" }}>
                {secondPart}
              </span>
            </Typography>
            <Typography ref={ref} className={classes.desc}>
              {desc}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default RoadMapComponents
