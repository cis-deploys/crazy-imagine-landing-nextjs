import React from "react"
import { Box, Typography, Grid } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useTranslation } from "react-i18next"
import Vector from "../../public/VectorRoadMap.svg"
import PhoneRoadMap2 from "../../public/iPhone1.svg"
import PhoneRoadMap1 from "../../public/iPhone2.svg"

const useStyles = makeStyles(theme => ({
  contentPhase1: {
    width: "100%",
    height: "100%",
    marginLeft: "90px",
    minHeight: "800px",
    marginTop: "90px",
  },
  titlePhase1: {
    fontFamily: "Nexa Bold",
    fontWeight: 700,
    fontSize: "20px",
    letterSpacing: "0.2rem",
    color: "#797EF6",
  },
  subtitlePhase1: {
    fontFamily: "Nexa Bold",
    lineHeight: "20px",
    fontSize: "58px",
    color: "#193174",
    paddingTop: "32px",
  },
  descriptionPhase1: {
    fontFamily: "HindVadodara",
    fontWeight: 500,

    fontSize: "26px",
    color: "#193174",
    lineHeight: "32.8px",
    paddingTop: "50px",
  },
  description2Phase1: {
    fontFamily: "HindVadodara",
    fontWeight: 500,
    lineHeight: "20px",
    fontSize: "17px",
    color: "#193174",
    lineHeight: "22.1px",
    paddingTop: "30px",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
  },

  imageVector: {
    position: "absolute",
    width: "553px",
    height: "791px",
    top: "-150px",
    right: 0,
  },
  imagePhoneRoadMap1: {
    position: "absolute",
    top: "105px",
    left: "49px",
    width: "465px",
    height: "488px",
  },
  imagePhoneRoadMap2: {
    position: "absolute",
    top: "-63px",
    left: "-105px",
    width: "500px",
    height: "495px",
  },

  /*box step styles */
  stepContainer: {
    display: "flex",
    alignItems: "center",

    paddingTop: "20px",
  },
  stepNumber: {
    color: "#888DFF",
    fontFamily: "Nexa Bold",
    fontWeight: 700,
    fontSize: "15px",
    lineHeight: "15px",
    letterSpacing: "0.2rem",
  },
  stepDescription: {
    color: "#8C98BA",
    fontFamily: "HindVadodara",
    fontWeight: 500,
    fontSize: "15px",
    lineHeight: "18px",
    letterSpacing: "0.2rem",
    paddingLeft: "8px",
  },
  /*step 1 content */
  contentStep1: {
    width: "100%",
    height: "100%",
    height: "auto",
    minHeight: "800px",
    marginLeft: "90px",
    marginTop: "-95px",
  },
  boxStep1: {},
}))
const DesignSection = () => {
  const classes = useStyles()
  const { t, i18n } = useTranslation()

  const lang = i18n.language
  const steps = [
    { number: t("step1").toUpperCase(), description: t("designDiscovery") },
    { number: t("step2").toUpperCase(), description: t("technicalDiscovery") },
    {
      number: t("step3").toUpperCase(),
      description: t("userExperience_Design"),
    },
    {
      number: t("step4").toUpperCase(),
      description: t("userInterface_Design"),
    },
    { number: t("step5").toUpperCase(), description: t("PrototypeEstimation") },
  ]

  return (
    <>
      <Grid className={classes.contentPhase1} container spacing={2} id="design">
        <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
          <Typography className={classes.titlePhase1}>
            {t("designPhase1").toUpperCase()}
          </Typography>
          <Box>
            <Typography className={classes.subtitlePhase1}>
              {t("design")}
            </Typography>
            <Typography className={classes.descriptionPhase1}>
              {t("designDescripcion")}
            </Typography>
            <Typography className={classes.description2Phase1}>
              {t("designDescripcion2")}
            </Typography>
          </Box>
          <Box style={{ marginTop: "50px" }}>
            {steps.map((step, index) => (
              <Box key={index} className={classes.stepContainer}>
                <Typography variant="body1" className={classes.stepNumber}>
                  {step.number}.
                </Typography>
                <Typography variant="body1" className={classes.stepDescription}>
                  {step.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Box className={classes.imageContainer}>
            <img
              className={classes.imageVector}
              src={Vector.src}
              alt="Vector image "
            />
            <img
              className={classes.imagePhoneRoadMap1}
              src={PhoneRoadMap1.src}
              alt="Phone 1 Image"
            />
            <img
              className={classes.imagePhoneRoadMap2}
              src={PhoneRoadMap2.src}
              alt="Phone 2 Image"
            />
          </Box>
        </Grid>
      </Grid>
      <Grid className={classes.contentStep1} container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Box className={classes.boxStep1}>
            <Typography variant="body1" className={classes.stepNumber}>
              STEP 1
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
export default DesignSection
