import React, { useState } from "react"
import { Box, Typography, Grid, Avatar, Button } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useTranslation } from "react-i18next"
import { StyleComponent } from "./StyleComponent"

import Link from "next/link"

import Stack from "@mui/material/Stack"
import Vector from "../../public/VectorRoadMap.svg"
import PhoneRoadMap2 from "../../public/iPhone1.svg"
import PhoneRoadMap1 from "../../public/iPhone2.svg"
import People from "../../public/peopleStep1.svg"
import LanguageIcons from "../../public/languageIcons.svg"
import { useRouter } from "next/router"
const useStyles = makeStyles(theme => ({
  contentPhase1: {
    width: "100%",
    height: "100%",
    marginLeft: "90px",

    marginTop: "73px",
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
  boxdescriptionPhase1: {
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      width: "78%",
    },
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

    [theme.breakpoints.up("xl")]: {
      right: 0,
      width: "715px",
      height: "882px",
      top: "-150px",
    },
    [theme.breakpoints.up("xxl")]: {
      width: "736px",
      height: "900px",
      top: "-137px",
    },
  },
  imagePhoneRoadMap1: {
    position: "absolute",
    top: "154px",
    left: "-29px",
    width: "500px",
    height: "495px",
    [theme.breakpoints.between("lg", "xl")]: {
      top: "92px",
      left: "-138px",
    },

    [theme.breakpoints.up("xl")]: {
      top: "105px",
      left: "-50px",
    },
    [theme.breakpoints.up("xxl")]: {
      top: "105px",
      left: "52px",
    },
  },
  imagePhoneRoadMap2: {
    position: "absolute",
    top: "-14px",
    left: "-167px",
    width: "500px",
    height: "495px",
    [theme.breakpoints.between("lg", "xl")]: {
      top: "-63px",
      left: "-266px",
    },

    [theme.breakpoints.up("xl")]: {
      top: "-63px",
      left: "-183px",
    },

    [theme.breakpoints.up("xxl")]: {
      top: "-63px",
      left: "-80px",
    },
  },

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

    height: "auto",

    marginLeft: "90px",
    marginTop: "73px",
  },

  titleStep1: {
    color: "#888DFF",
    fontFamily: "Nexa Bold",
    fontWeight: 700,
    fontSize: "15px",
    lineHeight: "15px",
    letterSpacing: "0.2rem",
  },
  subTitleStep1: {
    color: "#193174",
    fontFamily: "Nexa Bold",
    fontWeight: 700,
    fontSize: "40px",
    lineHeight: "55px",
  },
  boxDescriptionStep1: {
    width: "61%",
    paddingTop: "30px",
  },
  descriptionStep1: {
    fontFamily: "HindVadodara",
    fontWeight: 500,
    fontSize: "26px",
    lineHeight: "34px",
    letterSpacing: "0.02rem",
    color: "#304392",
  },

  title2Step1: {
    fontFamily: "Nexa Bold",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: " 32px",
    letterSpacing: "0.02rem",
    color: "#193174",
    textAlign: "justify",
  },
  description2Step1: {
    fontFamily: "HindVadodara",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "24px",
    color: "#193174",

    letterSpacing: "0.02rem",
  },
  boxContentMeeting: {
    paddingTop: "153px",
  },
  boxContentDescripcion2: {
    width: "56%",
    paddingTop: "20px",
  },
  boxImageMeetTeam: {
    boxShadow: "rgba(0, 0, 0, 0.06)",
  },
  imageMeetTeam: {
    objectFit: "contain",
  },
  contentMeetTeam: {
    width: "100%",
    height: "auto",

    marginLeft: "62px",
  },
  /*content avatar  */
  containerAvatarAndText: {
    width: "100%",
    height: "auto",
  },

  contentAvatar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  contentAvatar2: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: "54px",
    marginLeft: "77px",
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginRight: theme.spacing(1),
  },
  textContainer: {
    marginLeft: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  name: {
    fontFamily: "Nexa Bold",
    fontSize: "24px",
    fontWeight: 700,
    color: "#2B3C47",
    lineHeight: "31px",
    letterSpacing: "0.02rem",
    textAlign: "justify",
  },
  area: {
    fontFamily: "HindVadodara",
    fontWeight: 300,
    fontSize: "14px",
    color: "#000000",
    lineHeight: "18.2px",
    textAlign: "justify",
    letterSpacing: "0.02rem",
  },
  role: {
    fontFamily: "HindVadodara",
    fontSize: "14px",
    color: "#8C98BA",
    paddingTop: "1px",
  },
  /* users persons  */

  boxContentUsers: {
    paddingTop: "153px",
  },
  boxContentDescripcionUsers: {
    width: "68%",
    paddingTop: "20px",
  },
  descriptionUsers: {
    fontFamily: "HindVadodara",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "24px",
    color: "#193174",

    letterSpacing: "0.02rem",
  },
  title3Users: {
    fontFamily: "Nexa Bold",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: " 32px",
    letterSpacing: "0.02rem",
    color: "#193174",
    textAlign: "justify",
  },
  /* Step 2  */
  containerStep3: {
    width: "100%",
    height: "auto",

    padding: "50px",
    margin: "0 auto",
    marginTop: "75px",
  },
  boxContentStep2: {
    width: "100%",
    height: "auto",
    backgroundColor: "#F9F9F9",
  },
  boxContent2Step2: {
    paddingTop: "44px",
  },
  titleStep2: {
    color: "#888DFF",
    fontFamily: "Nexa Bold",
    fontWeight: 700,
    fontSize: "15px",
    lineHeight: "15px",
    letterSpacing: "0.2rem",
  },
  subTitleStep2: {
    color: "#193174",
    fontFamily: "Nexa Bold",
    fontWeight: 700,
    fontSize: "40px",
    lineHeight: "64px",
  },
  boxDescriptionStep2: {
    paddingTop: "26px",
  },
  descriptionStep2: {
    fontFamily: "HindVadodara",
    fontWeight: 700,
    fontSize: "26px",
    lineHeight: "34px",
    letterSpacing: "0.02rem",
    color: "#304392",
  },
  boxDescription2Step2: {
    paddingTop: "24px",
  },
  textDescription2Step2: {
    fontFamily: "HindVadodara",
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "24px",

    letterSpacing: "0.02rem",
    color: "#193174",
    paddingTop: "16px",
  },
  boxButtonContinue: {
    paddingTop: "30px",
    display: "flex",
    justifyContent: "end",
  },
  boxImagelanguages: {
    display: "flex",
    justifyContent: "center",
  },
  textDeliverables: {
    fontFamily: "Nexa Bold",
    fontWeight: 700,
    fontSize: "15px",
    lineHeight: "25px",
    letterSpacing: "0.2rem",
    color: "#888DFF",
    paddingTop: "12px",
  },
  avatar1Stack: {
    paddingLeft: "32px",
  },
}))
const DesignSection = () => {
  const classes = useStyles()
  const { t, i18n } = useTranslation()
  const classesComponent = StyleComponent()

  const lang = i18n.language
  const router = useRouter()
  const [technicalDiscoveryVisible, setTechnicalDiscoveryVisible] =
    useState(false)
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
            <Box className={classes.boxdescriptionPhase1}>
              <Typography className={classes.descriptionPhase1}>
                {t("designDescripcion")}
              </Typography>
            </Box>

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

            <Typography className={classes.textDeliverables}>
              {t("DELIVERABLES").toUpperCase()}
            </Typography>
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
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box>
            <Typography variant="body1" className={classes.titleStep1}>
              {t("step1").toUpperCase()}
            </Typography>
            <Typography className={classes.subTitleStep1}>
              {t("designDiscovery")}
            </Typography>
            <Box className={classes.boxDescriptionStep1}>
              <Typography className={classes.descriptionStep1}>
                {t("step1Description")}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} className={classes.contentMeetTeam}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Box className={classes.boxImageMeetTeam}>
            <img
              className={classes.imageMeetTeam}
              src={People.src}
              alt="Image people step1"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Box className={classes.boxContentMeeting}>
            <Typography className={classes.title2Step1}>
              {t("title2Step1")}
            </Typography>
            <Box className={classes.boxContentDescripcion2}>
              <Typography className={classes.description2Step1}>
                {t("step1Description2")}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} className={classes.containerAvatarAndText}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Box className={classes.contentAvatar}>
            <Stack direction="row" spacing={2} className={classes.avatar1Stack}>
              <Avatar
                alt="Remy Sharp"
                src="/avatar1.png"
                sx={{ width: 85, height: 85 }}
              />
              <Box className={classes.textContainer}>
                <Typography className={classes.name}>
                  Enzo Kukuriczka
                </Typography>
                <Typography className={classes.area}>
                  Account Owner/Propel contact - 47 Years Old Male
                </Typography>
                <Typography className={classes.role}>
                  Responsible for managing business relationship.
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Box className={classes.contentAvatar2}>
            <Stack direction="row" spacing={2}>
              <Avatar
                alt="Remy Sharp"
                src="/avatar2.png"
                sx={{ width: 85, height: 85 }}
              />
              <Box className={classes.textContainer}>
                <Typography className={classes.name}>John Methol</Typography>
                <Typography className={classes.area}>
                  Senior Manager - 33 Years Old Male
                </Typography>
                <Typography className={classes.role}>
                  Needs a better method for organizing invoices.
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Box>
            <Typography className={classes.title3Users}>
              {t("titleUserPersonas")}
            </Typography>
            <Box className={classes.boxContentDescripcionUsers}>
              <Typography className={classes.descriptionUsers}>
                {t("descripctionUser")}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box className={classes.boxContentStep2}>
        <Grid container spacing={2} className={classes.containerStep3}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Box className={classes.boxImagelanguages}>
              <img src={LanguageIcons.src} alt="Images Languages" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Box className={classes.boxContent2Step2}>
              <Typography variant="body1" className={classes.titleStep2}>
                {t("step2").toUpperCase()}
              </Typography>
              <Typography className={classes.subTitleStep2}>
                {t("technicalDiscovery")}
              </Typography>
              <Box className={classes.boxDescriptionStep2}>
                <Typography className={classes.descriptionStep2}>
                  {t("descriptionStep2")}
                </Typography>
              </Box>
              <Box className={classes.boxDescription2Step2}>
                <Typography className={classes.textDescription2Step2}>
                  {t("description2step2")}
                </Typography>
              </Box>

              <Link href="/road-map/technical-discovery">
                <Box className={classes.boxButtonContinue}>
                  <Button
                    className={classesComponent.buttonComponentContinueReading}
                    type="submit"
                    onClick={() => {
                      setTechnicalDiscoveryVisible(true)
                      router.push("/road-map/technical-discovery")
                    }}
                  >
                    <span>{t("common_button_CONTINUE_READING")}</span>
                  </Button>
                </Box>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
export default DesignSection
