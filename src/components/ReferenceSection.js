import React, { useRef } from "react"
import { Box, Typography } from "@mui/material"
import CustomerReview from "./CustomerReview"
import { useIntersection } from "../hooks/useIntersection"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles"

const useStyes = makeStyles(theme => ({
  referenceContainer: {
    textAlign: "center",
    background: "#193174",
    backgroundImage: `url('/background.svg')`,
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
    overflow: "hidden",
    padding: "58px 60px",
    [theme.breakpoints.up("lg")]: {
      padding: "55px 30px",
      height: "600px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "55px 30px",
      height: "480px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "55px 43px",
      height: "450px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "30px 43px 10px 43px",
      height: "430px",
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
        className={isVisible ? 'title-white' : 'title'}
      >
        {t("home_referenceSection_title")}

      </Typography>
      
      <CustomerReview reviews={ reviews }/>
    </Box>
  )
}

export default ReferenceSection
