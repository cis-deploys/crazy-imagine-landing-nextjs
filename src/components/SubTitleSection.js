import React, { useRef } from "react"
import { makeStyles } from "@mui/styles"
import { Box, Typography } from "@mui/material"
import Image from 'next/image'
import { useIntersection } from "../hooks/useIntersection"

const useStyles = makeStyles(theme => ({
  container: {
    width: "100%",
    gap: "59px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    marginBottom: "52px",
    marginTop: "34px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "auto",
      marginTop: "17px",
      marginBottom: "17px",
    },
  },
  textContainer: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "20px",
    flexDirection: "column",
    width: "41%",
    [theme.breakpoints.down("sm")]: {
      gap: "10px",
      width: "79%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "86%",
      gap: "4px",
      marginBottom: "17px",
    },
  },
  title2: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "58px",
    lineHeight: "58px",
    color: "#193174",
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
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      fontWeight: "auto",
      fontSize: "22px",
      lineHeight: "22px",
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
    [theme.breakpoints.down("xs")]: {
      marginTop: "-27px",
      width: "80%",
    },
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
    [theme.breakpoints.down("sm")]: {
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
