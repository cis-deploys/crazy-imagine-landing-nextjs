import React from "react"
import { Box, Typography } from "@mui/material"
import CustomerReview from "./CustomerReview"
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
    padding: "58px 48px",
    height: "700px",
    [theme.breakpoints.between(1921, 3000)]: {
      padding: "55px 200px",
      height: "700px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "55px 48px",
      height: "500px",
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
  const { t } = useTranslation()

  return (
    <Box className={classes.referenceContainer}>
      <Typography
        className={'title-white'}
        style={{ marginBottom: "15px" }}>
          
        {t("home_referenceSection_title")}

      </Typography>
      
      <CustomerReview reviews={ reviews }/>
    </Box>
  )
}

export default ReferenceSection
