import React, { useRef } from "react"
import { makeStyles } from "@mui/styles"
import { useTranslation } from 'next-i18next'
import { Box, Typography } from "@mui/material"
import { useIntersection } from "../hooks/useIntersection"

const useStyles = makeStyles(theme => ({
  title: {
    visibility: "hidden",
  },
  title2: {
    animation: `$myEffect 2000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    marginTop: "140px",
    fontWeight: "900",
    fontSize: "35px",
    lineHeight: "50px",
    whiteSpace: "pre-line",
    color: "#193174",
    [theme.breakpoints.up("xl")]: {
      fontSize: "50px",
      marginTop: "120px",
      lineHeight: "50px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "30px",
      marginTop: "120px",
      lineHeight: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "80px",
      fontSize: "25px",
      width: "85%",
      whiteSpace:"normal",
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "80px",
      fontSize: "25px",
      width: "85%",
      whiteSpace:"normal",
      textAlign: "center",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateX(-100%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
}))

const WorkInfo = () => {
  const classes = useStyles()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  const { t } = useTranslation()

  return (
    <Box ref={ref} className={classes.container}>
      <Typography
        className={isVisible ? classes.title2 : classes.title}
      >{t("workWithUs_workForm_workInfo_title")}</Typography>
    </Box>
  )
}

export default WorkInfo
