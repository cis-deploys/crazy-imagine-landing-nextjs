import React, { useRef } from "react"
import { Box, Typography } from "@mui/material"
import CustomerReview from "./CustomerReview"
import { useIntersection } from "../hooks/useIntersection"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles"

const useStyes = makeStyles(theme => ({
  title: {
    visibility: "hidden",
  },
  title2: {
    animation: `$myEffect 2000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "40px",
    textAlign: "center",
    color: "#FFFFFF",
    whiteSpace: "pre-line",
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      lineHeight: "28px",
      marginBottom: "35px",
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  referenceContainer: {
    textAlign: "center",
    background: "#193174",
    backgroundImage: `url('/background.svg')`,
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
    overflow: "hidden",
    padding: "58px 60px 0px",
    [theme.breakpoints.down("md")]: {
      padding: "55px 43px 20px 43px",
      height: "435px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "34px 15px 0px 15px",
      height: "450px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "34px 15px 0px 15px",
      height: "450px",
    },
  },
}))

const ReferenceSection = ({ reviews }) => {
  const classes = useStyes()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  const { t } = useTranslation()

  return (
    <Box className={classes.referenceContainer}>
      <Typography
        ref={ref}
        className={isVisible ? classes.title2 : classes.title}
      >
        {t("home_referenceSection_title")}

      </Typography>
      
      <CustomerReview reviews={ reviews }/>
    </Box>
  )
}

export default ReferenceSection
