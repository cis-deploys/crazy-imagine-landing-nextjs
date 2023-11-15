import React, { useRef } from "react"
import { Box, Typography } from "@mui/material"
import Image from "next/image"
import { makeStyles } from "@mui/styles"
import { useIntersection } from "../hooks/useIntersection"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: "59px",
    marginTop: "144px",
    marginBottom: "52px",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      height: "auto",
      marginTop: "17px",
      marginBottom: "17px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "auto",
      marginTop: "17px",
      marginBottom: "17px",
    },
    [theme.breakpoints.down("sx")]: {
      flexDirection: "column",
      height: "auto",
      marginTop: "17px",
      marginBottom: "17px",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "20px",
    width: "41%",
    [theme.breakpoints.down("md")]: {
      width: "79%",
      gap: "10px",
      marginBottom: "17px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "79%",
      gap: "10px",
      marginBottom: "17px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "86%",
      gap: "4px",
    },
  },
  title2: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "58px",
    lineHeight: "58px",
    color: "#193174",
    width: "526px",
    [theme.breakpoints.down("lg")]: {
      fontWeight: "auto",
      fontSize: "50px",
      lineHeight: "50px",
    },
    [theme.breakpoints.down("md")]: {
      fontWeight: "auto",
      fontSize: "53px",
      lineHeight: "53px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      fontWeight: "auto",
      fontSize: "28px",
      lineHeight: "28px",
    },
  },
  "@keyframes myEffecto": {
    "0%": {
      opacity: 0,
      transform: "scale(0)",
    },
    "50%": {
      opacity: 0.5,
      transform: "scale(0.5)",
    },
    "100%": {
      opacity: 1,
      transform: "scale(1)",
    },
  },
  desc2: {
    fontFamily: "HindVadodara",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "130%",
    letterSpacing: "0.02em",
    color: "#193174",
    [theme.breakpoints.down("xs")]: {
      fontSize: "8px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
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

export const AboutTitle = ({ title, desc, img }) => {
  const classes = useStyles()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")

  return (
    <Box className={classes.container}>
      <Box className={classes.imgContainer}>
        <Image className={isVisible ? 'image-component' : 'image'} src={img} alt="" />
      </Box>
      <Box className={classes.textContainer}>
        <Typography className={classes.title2}>{title}</Typography>
        <Typography ref={ref} className={classes.desc2}>{desc}</Typography>
      </Box>
    </Box>
  )
}

export default AboutTitle
