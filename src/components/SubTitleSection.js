import React, { useRef } from "react"
import { makeStyles } from "@mui/styles"
import { Box, Typography } from "@mui/material"
import Image from 'next/image'
import { useIntersection } from "../hooks/useIntersection"

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    gap: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      gap: "20px",
      height: "auto",
      marginBottom: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "auto",
    },
  },
  textContainer: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "20px",
    flexDirection: "column",
    width: "41%",
    [theme.breakpoints.down("md")]: {
      width: "79%",
      gap: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "10px",
      width: "79%",
    },
  },
  title2: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "58px",
    lineHeight: "58px",
    color: "#193174",
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
  desc2: {
    fontStyle: "normal",
    fontWeight: "400",
    fontFamily: "HindVadodara",
    lineHeight: "130%",
    letterSpacing: "0.02em",
    fontSize: "20px",
    color: "#193174",
    [theme.breakpoints.down("xs")]: {
      fontSize: "8px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  img: {
    visibility: "hidden",
  },
  img2: {
    animation: `$myEffect 2000ms`,
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateX(200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
  imgn: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      width: "40%",
      justifyContent: "center",
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      width: "40%",
      justifyContent: "center",
      textAlign: "center",
    },
    [theme.breakpoints.down("sx")]: {
      width: "inherit",
      justifyContent: "center",
      textAlign: "center",
    },
  },
}))

export const SubTitleSection = ({ title, desc, img }) => {
  const classes = useStyles()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  return (
    <Box ref={ref} className={classes.container}>
      <Box className={classes.textContainer}>
        <Typography className={classes.title2}>
          {title}
        </Typography>
        <Typography className={classes.desc2}>
          {desc}
        </Typography>
      </Box>
      <Box className={classes.imgn}>
        <Image
          className={isVisible ? classes.img2 : classes.img}
          src={img}
          alt=""
        />
      </Box>
    </Box>
  )
}

export default SubTitleSection
