import { Box, Typography } from "@mui/material"
import React, { useRef } from "react"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles"
import Image from "next/image"
import { useIntersection } from "../hooks/useIntersection"

const useStyles = makeStyles(theme => ({
  container1: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginTop: "30px",
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
    fontSize: "60px",
    lineHeight: "60px",
    color: "#193174",
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
    fontFamily: "HindVadodara",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "130%",
    letterSpacing: "0.02em",
    color: "#193174",
    whiteSpace: "pre-line",
    textAlign: "left",
    [theme.breakpoints.up("xl")]: {
      fontSize: "30px",
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
    [theme.breakpoints.between(601, 3000)]: {
      display: "none",
    },
    [theme.breakpoints.between(0, 600)]: {
      fontSize: "14px",
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
      marginRight: "10px",
    },
  },
}))

const ServiceCapabilities = ({ title, desc, img }) => {
  const classes = useStyles({ img })
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  const { t } = useTranslation()
  return (
    <Box className={isVisible ? classes.conta2 : classes.conta}>
      <Box className={classes.container1}>
        <Box className="container-white-component">
          {img && (
            <Box className={classes.imgContainer}>
              <Image
                src={img}
                width={314}
                height={357}
                className={isVisible ? "image-component" : "image"}
                alt={`${title}`}
              />
            </Box>
          )}
          <Box className="text-container-white-component">
            <Typography className={classes.subtitle2}>
              {t("common_button_capabilities")}
            </Typography>
            <Typography className={classes.title2}>{title}</Typography>
            <Typography ref={ref} className={classes.desc}>
              {desc}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "0px 30px",
            textAlign: "left",
            width: "100%",
            marginBottom: "50px",
          }}
        >
          <Typography ref={ref} className={classes.desc2}>
            {desc}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ServiceCapabilities
