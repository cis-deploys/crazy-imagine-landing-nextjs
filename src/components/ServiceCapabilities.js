import { Box, Typography } from "@mui/material"
import React, { useRef } from "react"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles"
import Image from 'next/image'
import { useIntersection } from "../hooks/useIntersection"

const useStyles = makeStyles(theme => ({
  container: props => ({
    display: "flex",
    gap: "59px",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    margin: props.img ? "unset" : "auto",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "40px",
      textAlign: "justify"
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "40px",
      textAlign: "justify"
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "40px",
      textAlign: "justify"
    },
  }),
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
  conta: {
    visibility: "hidden",
  },
  conta2: {
    animation: `$myEffect 2000ms`,
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
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "14px",
    },
  },
  title2: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "58px",
    lineHeight: "58px",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      lineHeight: "28px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "28px",
      lineHeight: "28px",
    },
    [theme.breakpoints.between(0, 400)]: {
      fontSize: "24px",
      lineHeight: "24px",
    },
  },
  textContainer: props => ({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: props.img ? "35%" : "50%",
    justifyContent: "center",
    [theme.breakpoints.up("xl")]: {
      width: "50%",
      alignItems: "center",
      justifyItems: "center",
      flexDirection: "column",
    },
    [theme.breakpoints.down("md")]: {
      width: "50%",
      alignItems: "center",
      justifyItems: "center",
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      width: "60%"
    },
    [theme.breakpoints.down("xs")]: {
      width: "60%"
    },
  }),
  desc2: {
    fontFamily: "HindVadodara",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "130%",
    letterSpacing: "0.02em",
    color: "#193174",
    whiteSpace: "pre-line",
    textAlign: "justify",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
   img: {
     display: "flex",
     justifyContent: "center",
     width: "40%",
     [theme.breakpoints.down("sm")]: {
       width: "15%",
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

const ServiceCapabilities = ({ title, desc, img }) => {
  const classes = useStyles({ img })
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  const { t } = useTranslation()
  return (
    <Box className={isVisible ? classes.conta2 : classes.conta}>
      <Box className={classes.container}>
        <Box className={classes.imgContainer}>
        <Image src={img} className={isVisible ? 'image-component' : 'image'} alt={`${title}`}/>
        </Box>
        <Box className={classes.textContainer}>
          <Typography className={classes.subtitle2}>{t("common_button_capabilities")}</Typography>
          <Typography className={classes.title2}>{title}</Typography>
          <Typography ref={ref} className={classes.desc2}>
            {desc}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ServiceCapabilities
