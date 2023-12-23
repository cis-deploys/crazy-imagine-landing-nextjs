import React from "react"
import { Box, Typography } from "@mui/material"
import CustomerReview from "./CustomerReview"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles"
import { StyleComponent } from "./StyleComponent"

const useStyes = makeStyles(theme => ({
  referenceContainer: {
    textAlign: "center",
    background: "white",

    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
    overflow: "hidden",
    padding: "58px 48px",
    height: "700px",
    [theme.breakpoints.between(1921, 4000)]: {
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
  const classesComponent = StyleComponent()
  const { t } = useTranslation()

  return (
    <Box className={classes.referenceContainer}>
      <Typography
        className={classesComponent.titleBlue}
        style={{ marginBottom: "15px" }}
      >
        {t("Best_developers")}
      </Typography>
      {console.log("reviews ", reviews)}

      {/* <CustomerReview reviews={reviews} /> */}
    </Box>
  )
}

export default ReferenceSection
