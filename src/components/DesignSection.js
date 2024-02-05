import React, { useState, useEffect, useRef } from "react"
import { Box, Typography, Grid, Avatar, Button } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useTranslation } from "react-i18next"
import { StyleComponent } from "./StyleComponent"

import Link from "next/link"
import { useRouter } from "next/router"
import Stack from "@mui/material/Stack"
import Vector from "../../public/VectorRoadMap.svg"
import PhoneRoadMap2 from "../../public/iPhone1.svg"
import PhoneRoadMap1 from "../../public/iPhone2.svg"
import People from "../../public/peopleStep1.svg"
import LanguageIcons from "../../public/languageIcons.svg"
import Background3 from "../../public/background3.svg"
import FeatureMap from "../../public/imageFeatureMap.svg"
import UserFlow from "../../public/imageUserFlow.svg"
import Wireframes from "../../public/imageWireframes.svg"

const useStyles = makeStyles(theme => ({
  contentPhase1: {
    width: "100%",
    height: "100%",
    paddingLeft: "90px",

    marginTop: "73px",
    [theme.breakpoints.between("xs", "sm")]: {
      paddingLeft: "50px",
    },
    [theme.breakpoints.between(605, 780)]: {
      marginTop: "-200px",
    },
    [theme.breakpoints.between(950, 1030)]: {
      marginTop: "-267px",
    },
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
    [theme.breakpoints.between("xs", "sm")]: {
      width: "93%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "94%",
    },
    [theme.breakpoints.between(950, 1030)]: {
      width: "98%",
    },
  },
  descriptionPhase1: {
    fontFamily: "HindVadodara",
    fontWeight: 500,

    fontSize: "26px",
    color: "#193174",
    lineHeight: "32.8px",
    paddingTop: "50px",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "16px",
      lineHeight: "24.8px",
    },
  },
  boxdescription2Phase1: {
    [theme.breakpoints.between("xs", "sm")]: {
      width: "90%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "94%",
    },
  },
  description2Phase1: {
    fontFamily: "HindVadodara",
    fontWeight: 500,
    lineHeight: "20px",
    fontSize: "17px",
    color: "#193174",
    lineHeight: "22.1px",
    paddingTop: "30px",

    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "16px",
    },
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
    right: "-18px",

    [theme.breakpoints.between(0, 600)]: {
      display: "none",
    },
    [theme.breakpoints.between(601, 1024)]: {
      display: "none",
    },
    [theme.breakpoints.between(1024, 1399)]: {
      display: "none",
    },
    [theme.breakpoints.up("xl")]: {
      right: "-44px",
      width: "715px",
      height: "882px",
      top: "-150px",
    },
    [theme.breakpoints.up("xxl")]: {
      width: "736px",
      height: "900px",
      top: "-137px",
      right: "-119px",
    },
  },
  imagePhoneRoadMap1: {
    position: "absolute",
    top: "74px",
    left: "-73px",
    width: "500px",
    height: "495px",

    [theme.breakpoints.between(0, 600)]: {
      display: "none",
    },
    [theme.breakpoints.between(601, 1024)]: {
      display: "none",
    },
    [theme.breakpoints.between(1024, 1399)]: {
      display: "none",
    },

    [theme.breakpoints.up("xl")]: {
      top: "105px",
      left: "-50px",
    },
    [theme.breakpoints.up("xxl")]: {
      top: "132px",
      left: "161px",
    },
  },
  imagePhoneRoadMap2: {
    position: "absolute",
    top: "-81px",
    left: "-183px",
    width: "500px",
    height: "495px",
    [theme.breakpoints.between(0, 600)]: {
      display: "none",
    },
    [theme.breakpoints.between(601, 1024)]: {
      display: "none",
    },
    [theme.breakpoints.between(1024, 1399)]: {
      display: "none",
    },

    [theme.breakpoints.up("xl")]: {
      top: "-63px",
      left: "-183px",
    },

    [theme.breakpoints.up("xxl")]: {
      top: "-41px",
      left: "29px",
    },
  },

  stepContainer: {
    display: "flex",
    alignItems: "center",

    paddingTop: "20px",
    [theme.breakpoints.between("xs", "sm")]: {
      paddingTop: "16px",
    },
  },
  stepNumber: {
    color: "#888DFF",
    fontFamily: "Nexa Bold",
    fontWeight: 700,
    fontSize: "15px",
    lineHeight: "15px",
    letterSpacing: "0.2rem",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "14px",
      paddingTop: "2px",
      letterSpacing: "0.02rem",
    },
  },
  stepDescription: {
    color: "#8C98BA",
    fontFamily: "HindVadodara",
    fontWeight: 500,
    fontSize: "15px",
    lineHeight: "18px",
    letterSpacing: "0.2rem",
    paddingLeft: "8px",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "14px",
      letterSpacing: " 0.02rem",
    },
  },
  /*step 1 content */
  contentStep1: {
    width: "100%",
    height: "auto",
    paddingLeft: "90px",
    marginTop: "73px",

    [theme.breakpoints.between("xs", "sm")]: {
      paddingLeft: "50px",
      marginTop: "50px",
    },
    [theme.breakpoints.between(605, 780)]: {
      marginTop: "40px",
    },
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
    [theme.breakpoints.between("xs", "sm")]: {
      width: "90%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "96%",
    },
    [theme.breakpoints.between(950, 1030)]: {
      width: "94%",
    },

    [theme.breakpoints.up("lg")]: {
      width: "69%",
    },
  },
  descriptionStep1: {
    fontFamily: "HindVadodara",
    fontWeight: 500,
    fontSize: "26px",
    lineHeight: "34px",
    letterSpacing: "0.02rem",
    color: "#304392",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "22px",
      lineHeight: "30px",
    },
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
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "15px",
      lineHeight: "21px",
    },
  },
  boxContentMeeting: {
    paddingTop: "153px",
    [theme.breakpoints.between("xs", "sm")]: {
      paddingTop: "40px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      paddingTop: "5px",
    },
    [theme.breakpoints.between(950, 1030)]: {
      paddingTop: "5px",
    },
  },

  boxContentDescripcion2: {
    paddingTop: "20px",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "92%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "97%",
    },
    [theme.breakpoints.between(1200, 1450)]: {
      width: "70%",
      minWidth: "650px",
    },
    [theme.breakpoints.between(1450, 1980)]: {
      width: "95%",
    },
    [theme.breakpoints.between(950, 1030)]: {
      width: "97%",
    },
    [theme.breakpoints.up(2560)]: {
      width: "95%",
    },
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

    paddingLeft: "50px",
    [theme.breakpoints.between(950, 1030)]: {
      paddingLeft: "100px",
    },
  },
  /*content avatar  */

  containerAvatarAndText: {
    width: "100%",
    height: "auto",
    paddingLeft: "40px",
    [theme.breakpoints.between("xs", "sm")]: {
      paddingTop: "50px",
      paddingLeft: "8px",
      paddingRight: "8px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      paddingTop: "50px",
    },
    [theme.breakpoints.between(950, 1030)]: {
      paddingLeft: "90px",
      paddingTop: "40px",
    },
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
    paddingLeft: "96px",
    [theme.breakpoints.between("xs", "sm")]: {
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },
  avatar1Stack: {
    paddingLeft: "32px",
    [theme.breakpoints.between("xs", "sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: 0,
    },
  },
  avatar2Stack: {
    [theme.breakpoints.between("xs", "sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: 0,
    },
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginRight: theme.spacing(1),
  },
  textContainer: {
    paddingLeft: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.between("xs", "sm")]: {
      paddingLeft: 0,
      paddingTop: "16px",
    },
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
    [theme.breakpoints.between("xs", "sm")]: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: "30px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      display: "flex",

      flexDirection: "column",
      alignItems: "flex-start",
      paddingTop: "30px",
    },
    [theme.breakpoints.between(950, 1030)]: {
      paddingTop: "30px",
    },
  },
  boxContentDescripcionUsers: {
    width: "68%",
    paddingTop: "20px",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "93%",
      paddingLeft: "32px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: "98%",
    },
    [theme.breakpoints.between(950, 1030)]: {
      width: "96%",
    },
    [theme.breakpoints.between(1200, 1450)]: {
      width: "75%",
      minWidth: "770px",
    },

    [theme.breakpoints.between(1450, 1980)]: {
      width: "95%",
    },
    [theme.breakpoints.up(2560)]: {
      width: "96%",
    },
  },
  descriptionUsers: {
    fontFamily: "HindVadodara",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "24px",
    color: "#193174",

    letterSpacing: "0.02rem",
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "15px",
      lineHeight: "21px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: "19px",
    },
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
  containerStep2: {
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
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "20px",
      lineHeight: "24.8px",
    },
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
    [theme.breakpoints.between("xs", "sm")]: {
      justifyContent: "center",
    },
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

  /* Step 3  */
  containerStep3: {
    width: "100%",
    height: "auto",

    padding: "50px",
    margin: "0 auto",
  },
  boxContentStep3: {
    width: "100%",
    height: "auto",
    backgroundImage: `url(${Background3.src})`,
    backgroundSize: "cover",
  },
  subTitleStep3: {
    color: "#FFFFFF",
    fontFamily: "Nexa Bold",
    fontWeight: 700,
    fontSize: "40px",
    lineHeight: "55px",
  },
  descriptionStep3: {
    fontFamily: "HindVadodara",
    fontWeight: 500,
    fontSize: "26px",
    lineHeight: "33px",
    letterSpacing: "0.02rem",
    color: "#FFFFFF",
  },
  boxDescriptionStep3: {
    width: "70%",
    paddingTop: "30px",
    [theme.breakpoints.between(0, 600)]: {
      width: "100%",
    },
    [theme.breakpoints.between(600, 780)]: {
      width: "100%",
    },
  },
  contentFeatureMap: {
    width: "100%",
    height: "auto",
    margin: "0 auto",
    padding: "40px",
  },
  boxContentFeatureMap: {
    paddingTop: "60px",
  },
  titleFeatureMap: {
    fontFamily: "Nexa Bold",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: " 32px",
    letterSpacing: "0.02rem",
    color: "#FFFFFF",
    textAlign: "justify",
    [theme.breakpoints.up(2560)]: {
      fontSize: "25px",
    },
  },
  descriptionFeatureMap: {
    fontFamily: "HindVadodara",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "24px",
    color: "#FFFFFF",

    letterSpacing: "0.02rem",
    [theme.breakpoints.between(0, 600)]: {
      fontSize: "16px",
      lineHeight: "22px",
    },
  },
  boxContentDescripcionFeatureMap: {
    width: "100%",
    paddingTop: "20px",
    [theme.breakpoints.between(1200, 1450)]: {
      width: "95%",
    },
    [theme.breakpoints.between(600, 780)]: {
      width: "100%",
      minWidth: "680px",
    },
  },
  boxContentDescripcionUserFlow: {
    paddingTop: "20px",
    width: "100%",

    [theme.breakpoints.between(600, 780)]: {
      width: "100%",
      minWidth: "670px",
    },

    [theme.breakpoints.between(1200, 1450)]: {
      width: "85%",
    },
  },
  contentUserFlow: {
    width: "100%",
    height: "auto",
    margin: "0 auto",
    padding: "50px",
  },
  boxContentUserFlow: {
    paddingTop: "60px",
  },
  contentWirefrawes: {
    width: "100%",
    height: "auto",
    margin: "0 auto",
    padding: "50px",
  },
  contentBoxWireframes: {
    paddingTop: "60px",
  },
  boxContentWireframes: {
    paddingTop: "40px",
    paddingLeft: "32px",
    [theme.breakpoints.between(0, 600)]: {
      paddingLeft: 0,
    },
  },
  boxContentDescripcionWireframes: {
    width: "100%",
    paddingTop: "20px",

    [theme.breakpoints.between(600, 780)]: {
      width: "100%",
      minWidth: "670px",
    },

    [theme.breakpoints.between(1200, 1450)]: {
      width: "95%",
    },
  },

  listItem: {
    color: "white",
    lineHeight: "40px",
  },
  contentUxExamples: {
    width: "100%",
    height: "auto",
    margin: "0 auto",
    padding: "50px",
  },
  titleUxExamples: {
    fontFamily: "Nexa Bold",
    fontWeight: 700,
    fontSize: "30px",
    lineHeight: " 32px",
    letterSpacing: "0.02rem",
    color: "#FFFFFF",
  },
}))
const DesignSection = () => {
  const classes = useStyles()
  const { t, i18n } = useTranslation()
  const classesComponent = StyleComponent()

  const targetStep1 = useRef(null)
  const targetStep2 = useRef(null)
  const targetStep3 = useRef(null)

  const router = useRouter()
  const [technicalDiscoveryVisible, setTechnicalDiscoveryVisible] =
    useState(false)
  const steps = [
    {
      number: t("step1").toUpperCase(),
      description: t("designDiscovery"),
      anchor: "step1",
    },
    {
      number: t("step2").toUpperCase(),
      description: t("technicalDiscovery"),
      anchor: "step2",
    },
    {
      number: t("step3").toUpperCase(),
      description: t("userExperience_Design"),
      anchor: "step3",
    },
    {
      number: t("step4").toUpperCase(),
      description: t("userInterface_Design"),
      anchor: "step4",
    },
    {
      number: t("step5").toUpperCase(),
      description: t("PrototypeEstimation"),
      anchor: "step5",
    },
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

            <Box className={classes.boxdescription2Phase1}>
              <Typography className={classes.description2Phase1}>
                {t("designDescripcion2")}
              </Typography>
            </Box>
          </Box>
          <Box style={{ marginTop: "50px" }}>
            {steps.map((step, index) => (
              <Box key={index} className={classes.stepContainer}>
                <Typography variant="body1" className={classes.stepNumber}>
                  {step.number}.
                </Typography>
                <Link key={index} href={`#${step.anchor}`}>
                  <a
                    style={{
                      textTransform: "capitalize",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      if (index === 0) {
                        targetStep1.current?.scrollIntoView({
                          behavior: "smooth",
                        })
                      } else if (index === 1) {
                        targetStep2.current?.scrollIntoView({
                          behavior: "smooth",
                        })
                      } else if (index === 2) {
                        targetStep3.current?.scrollIntoView({
                          behavior: "smooth",
                        })
                      }
                    }}
                  >
                    <Typography
                      variant="body1"
                      className={classes.stepDescription}
                    >
                      {step.description.toLowerCase()}
                    </Typography>
                  </a>
                </Link>
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
      <Grid
        ref={targetStep1}
        className={classes.contentStep1}
        container
        spacing={2}
      >
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
        <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
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
            <Stack direction="row" spacing={2} className={classes.avatar2Stack}>
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
        <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
          <Box className={classes.boxContentUsers}>
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
        <Grid
          ref={targetStep2}
          container
          spacing={2}
          className={classes.containerStep2}
        >
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Box className={classes.boxImagelanguages}>
              <img src={LanguageIcons.src} alt="Images Languages" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Box id="step2" className={classes.boxContent2Step2}>
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
      <Box id="step3" ref={targetStep3} className={classes.boxContentStep3}>
        <Grid container spacing={2} className={classes.containerStep3}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Box>
              <Typography variant="body1" className={classes.titleStep1}>
                {t("step3").toUpperCase()}
              </Typography>
              <Typography className={classes.subTitleStep3}>
                {t("user_ExperienceDesign")}
              </Typography>
              <Box className={classes.boxDescriptionStep3}>
                <Typography className={classes.descriptionStep3}>
                  {t("descriptionStep3")}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} className={classes.contentFeatureMap}>
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}></Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Box className={classes.boxContentFeatureMap}>
              <Typography className={classes.titleFeatureMap}>
                {t("title_FeatureMap")}
              </Typography>
              <Box className={classes.boxContentDescripcionFeatureMap}>
                <Typography className={classes.descriptionFeatureMap}>
                  {t("description_FeatureMap")}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} className={classes.contentUserFlow}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Box className={classes.boxContentUserFlow}>
              <Typography className={classes.titleFeatureMap}>
                {t("title_UserFlow")}
              </Typography>
              <Box className={classes.boxContentDescripcionUserFlow}>
                <Typography className={classes.descriptionFeatureMap}>
                  {t("description_UserFlow")}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}></Grid>
        </Grid>
        <Grid container spacing={2} className={classes.contentWirefrawes}>
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}></Grid>
          <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
            <Box className={classes.contentBoxWireframes}>
              <Typography className={classes.titleFeatureMap}>
                {t("title_Wireframes")}
              </Typography>
              <Box className={classes.boxContentDescripcionWireframes}>
                <Typography className={classes.descriptionFeatureMap}>
                  {t("description_Wireframes")}
                </Typography>
              </Box>
              <Box className={classes.boxContentWireframes}>
                <ul>
                  <li className={classes.listItem}>
                    <Typography className={classes.descriptionFeatureMap}>
                      {t("li1_Wireframes")}
                    </Typography>
                  </li>
                  <li className={classes.listItem}>
                    <Typography className={classes.descriptionFeatureMap}>
                      {t("li2_Wireframes")}
                    </Typography>
                  </li>
                  <li className={classes.listItem}>
                    <Typography className={classes.descriptionFeatureMap}>
                      {t("li3_Wireframes")}
                    </Typography>
                  </li>
                  <li className={classes.listItem}>
                    <Typography className={classes.descriptionFeatureMap}>
                      {t("li4_Wireframes")}
                    </Typography>
                  </li>
                </ul>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2} className={classes.contentUxExamples}>
          <Grid item xs={12} align="center">
            <Typography className={classes.titleUxExamples}>
              {t("title_UxExamples")}
            </Typography>
          </Grid>

          <Grid item xs={4} align="center">
            <a
              href="https://whimsical.com/account-management-LgYciykM5TXFZwYa4a9qTR"
              target="_blank"
            >
              <img src={FeatureMap.src} alt="Images FeatureMap" />
            </a>
          </Grid>
          <Grid item xs={4} align="center">
            <a
              href="https://whimsical.com/example-user-flow-for-invoices-FvrfYrQFBLCNbMfCCzzkt"
              target="_blank"
            >
              <img src={UserFlow.src} alt="Images UserFlow" />
            </a>
          </Grid>
          <Grid item xs={4} align="center">
            <img src={Wireframes.src} alt="Images Wireframes" />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default DesignSection
