import React, { useState } from "react"
import { Box, Typography, Grid, Button } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useTranslation } from "react-i18next"
import CardService from "./CardService"
import { useRouter } from "next/router"
import Link from "next/link"
import LanguageIcons from "../../public/languageIcons.svg"
import { StyleComponent } from "./StyleComponent"
import Computer from "../../public/computerPhone.svg"
import Servers from "../../public/backendServers.svg"
import Services from "../../public/servicesIntegrations.svg"
import Background from "../../public/backgroundImage3.svg"
import SquarePen from "../../public/iconPenSquare.svg"
import Icon1 from "../../public/icon1Card2.svg"
import Icon2 from "../../public/iconCheck.svg"
import Servers2 from "../../public/servers2.svg"

const useStyles = makeStyles(theme => ({
  containerInfoTechnical: {
    width: "100%",
    height: "auto",
    padding: "40px",
    margin: "0 auto",
    [theme.breakpoints.between(2500, 4000)]: {
      padding: "60px",
    },
  },
  boxContentStep2: {
    width: "100%",
    height: "auto",
    backgroundColor: "#F9F9F9",
  },
  containerTechnical: {
    width: "100%",
    height: "auto",

    padding: "50px",
    margin: "0 auto",
    marginTop: "75px",
  },
  containerInfo3: {
    width: "100%",
    height: "auto",

    padding: "40px",
    margin: "0 auto",
  },
  containerInfo4: {
    width: "100%",
    height: "auto",

    padding: "40px",
    margin: "0 auto",
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
    [theme.breakpoints.between(0, 600)]: {
      lineHeight: "40px",
      fontSize: "30px",
    },
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
    [theme.breakpoints.between(2500, 4000)]: {
      fontSize: "20px",
    },
  },
  title1: {
    fontFamily: "Nexa Bold",
    fontWeight: 700,
    fontSize: "40px",
    lineHeight: "40px",
    color: "#193174",
    [theme.breakpoints.between(0, 600)]: {
      fontSize: "20px",
      lineHeight: "30px",
    },
  },
  thechnicalDescription1: {
    fontFamily: "HindVadodara",
    fontSize: "17px",
    fontWeight: 500,
    letterSpacing: "0.02rem",
    lineHeight: "33px",
    color: "#304392",
  },

  boxthechnicalDescriptions: {
    paddingTop: "16px",
  },
  thechnicalDescriptions: {
    fontFamily: "HindVadodara",
    fontSize: "17px",
    fontWeight: 500,
    letterSpacing: "0.02rem",
    lineHeight: "28px",
    color: "#304392",
    [theme.breakpoints.between(0, 600)]: {
      lineHeight: "26px",
    },
    [theme.breakpoints.between(1920, 2498)]: {
      fontSize: "20px",
    },
    [theme.breakpoints.between(2500, 4000)]: {
      fontSize: "20px",
    },
  },
  boxthechnicalDescription3: {
    paddingTop: "32px",
  },
  boxImageComputer: {
    display: "flex",
    justifyContent: "end",

    height: "100%",
    [theme.breakpoints.between(901, 1040)]: {
      justifyContent: "center",
    },
  },

  boxContentTexts: {
    paddingTop: "32px",
    width: "82%",
    animation: `$myEffect 1000ms`,

    [theme.breakpoints.between(0, 600)]: {
      width: "100%",
      paddingTop: 0,
    },
    [theme.breakpoints.between(600, 900)]: {
      width: "100%",
    },
    [theme.breakpoints.between(901, 1040)]: {
      width: "100%",
    },
    [theme.breakpoints.between(1200, 1450)]: {
      maxWidth: "555px",
    },
    [theme.breakpoints.between(2500, 4000)]: {
      width: "100%",
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateX(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
  boxImagelanguages: {
    display: "flex",
    justifyContent: "center",
  },
  boxContentServers: {
    width: "100%",
    paddingTop: "85px",
    animation: `$myEffect 1000ms`,
    [theme.breakpoints.between(0, 600)]: {
      paddingTop: "5px",
    },
    [theme.breakpoints.between(601, 900)]: {
      paddingTop: "20px",
    },
    [theme.breakpoints.between(901, 1080)]: {
      paddingTop: "10px",
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
  boxContentImageBackendServer: {
    [theme.breakpoints.between(605, 1080)]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  boxContentServices: {
    width: "85%",
    [theme.breakpoints.up(1920)]: {
      width: "100%",
    },
    [theme.breakpoints.between(0, 1080)]: {
      width: "100%",
    },
  },

  boxContentTesting: {
    width: "100%",
    height: "auto",
    backgroundImage: `url(${Background.src})`,
    backgroundSize: "cover",
    minHeight: "350px",
  },
  containerTesting: {
    paddingTop: "50px",
    [theme.breakpoints.between(0, 380)]: {
      paddingTop: "20px",
    },
    [theme.breakpoints.between(385, 475)]: {
      paddingTop: "4px",
    },
    [theme.breakpoints.between(600, 780)]: {
      paddingTop: "80px",
    },
  },

  boxImageServices: {
    display: "flex",
    justifyContent: "center",
  },
  imageBackground: {
    width: "100%",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "20px",
    height: "auto",
    paddingTop: "auto",
    [theme.breakpoints.between(0, 767)]: {
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
    },
  },
  card: {
    height: "min-content !important",
  },
  containerInfrastructure: {
    width: "100%",
    height: "auto",
    margin: "0 auto",
    padding: "40px",
  },
  boxContentServers2: {
    width: "100%",
    paddingTop: "32px",

    [theme.breakpoints.between(1200, 1450)]: {
      minWidth: "582px",
    },
  },

  containerFatherExample: {
    marginTop: "25px",
  },
  exampleContainer: {
    display: "flex",
    alignItems: "center",

    paddingTop: "16px",
  },

  exampleName: {
    color: "#888DFF",
    fontFamily: "Nexa Bold",
    fontWeight: 700,
    fontSize: "15px",
    lineHeight: "15px",
    letterSpacing: "0.2rem",
  },
  exampleDescription: {
    color: "#8C98BA",
    fontFamily: "HindVadodara",
    fontWeight: 500,
    fontSize: "15px",
    lineHeight: "18px",
    letterSpacing: "0.2rem",
    paddingLeft: "8px",
  },
  boxContentImageServices2: {
    [theme.breakpoints.between(605, 1080)]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  containerTextButton: {
    width: "100%",
    height: "auto",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
  },
  boxdescriptionAfter: {
    width: "56%",
    [theme.breakpoints.between(0, 600)]: {
      width: "100%",
    },
  },
  textDescriptionAfter: {
    fontFamily: "HindVadodara",
    fontWeight: 500,
    fontSize: "26px",
    color: "#304392",
    letterSpacing: "0.2rem",
    textAlign: "center",
    lineHeight: "33.8px",
    [theme.breakpoints.between(0, 600)]: {
      fontSize: "20px",
      lineHeight: "22px",
    },
  },
}))

const ThechnicalDiscovery = () => {
  const classes = useStyles()
  const { t, i18n } = useTranslation()
  const router = useRouter()
  const classesComponent = StyleComponent()
  const [card1Open, setCard1Open] = useState(false)

  const examples = [
    { name: t("example1").toUpperCase(), description: t("technicalDiscovery") },
    { name: t("example2").toUpperCase(), description: t("technicalDiscovery") },
  ]

  return (
    <>
      <Box className={classes.boxContentStep2}>
        <Grid container spacing={2} className={classes.containerTechnical}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Box className={classes.boxImagelanguages}>
              <img src={LanguageIcons.src} alt="Images Languages" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Box className={classes.boxContent2Step2}>
              <Typography className={classes.subTitleStep2}>
                {t("technicalDiscovery")}
              </Typography>
              <Box className={classes.boxDescriptionStep2}>
                <Typography className={classes.descriptionStep2}>
                  {t("descriptionStep2")}
                </Typography>{" "}
              </Box>
              <Box className={classes.boxDescription2Step2}>
                <Typography className={classes.textDescription2Step2}>
                  {t("description2step2")}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={2} className={classes.containerInfoTechnical}>
        <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
          <Box className={classes.boxContentTexts}>
            <Typography className={classes.title1}>
              {t("title_TechiDis")}
            </Typography>
            <Box className={classes.boxthechnicalDescriptions}>
              <Typography className={classes.thechnicalDescriptions}>
                {t("thechnical_description1")}
              </Typography>
              <Box className={classes.boxthechnicalDescriptions}>
                <Typography className={classes.thechnicalDescriptions}>
                  {t("thechnical_description2")}
                </Typography>
              </Box>
              <Box className={classes.boxthechnicalDescriptions}>
                <Typography className={classes.thechnicalDescriptions}>
                  {t("thechnical_description3")}
                </Typography>
              </Box>
              <Box className={classes.boxthechnicalDescriptions}>
                <Typography className={classes.thechnicalDescriptions}>
                  {t("thechnical_description4")}
                </Typography>
              </Box>
              <Box className={classes.boxthechnicalDescriptions}>
                <Typography className={classes.thechnicalDescriptions}>
                  {t("thechnical_description5")}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
          <Box className={classes.boxImageComputer}>
            <img src={Computer.src} alt="Image computer" />
          </Box>
        </Grid>
      </Grid>
      <Box className={classes.boxContentStep2}>
        <Grid container spacing={2} className={classes.containerInfo3}>
          <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
            <Box className={classes.boxContentImageBackendServer}>
              <img src={Servers.src} alt="Image servers" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={5} xl={5}>
            <Box className={classes.boxContentServers}>
              <Typography className={classes.title1}>
                {t("backend_servers")}
              </Typography>
              <Box className={classes.boxthechnicalDescriptions}>
                <Typography className={classes.thechnicalDescriptions}>
                  {t("backend_desc1")}
                </Typography>
              </Box>
              <Box className={classes.boxthechnicalDescriptions}>
                <Typography className={classes.thechnicalDescriptions}>
                  {t("backend_desc2")}
                </Typography>
              </Box>
              <Box className={classes.boxthechnicalDescriptions}>
                <Typography className={classes.thechnicalDescriptions}>
                  {t("backend_desc3")}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={2} className={classes.containerInfo4}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Box className={classes.boxContentServices}>
            <Typography className={classes.title1}>
              {t("services_integrations")}
            </Typography>
            <Box className={classes.boxthechnicalDescriptions}>
              <Typography className={classes.thechnicalDescriptions}>
                {t("services_desc1")}
              </Typography>
            </Box>
            <Box className={classes.boxthechnicalDescriptions}>
              <Typography className={classes.thechnicalDescriptions}>
                {t("services_desc2")}
              </Typography>
            </Box>
            <Box className={classes.boxthechnicalDescriptions}>
              <Typography className={classes.thechnicalDescriptions}>
                {t("services_desc3")}
              </Typography>
            </Box>
            <Box className={classes.boxthechnicalDescriptions}>
              <Typography className={classes.thechnicalDescriptions}>
                {t("services_desc4")}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Box className={classes.boxImageServices}>
            <img src={Services.src} alt="Image services" />
          </Box>
        </Grid>
      </Grid>
      <Box className={classes.boxContentTesting}>
        <Grid container spacing={2} className={classes.containerTesting}>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box className={`${classes.cardContainer}`}>
              <CardService
                title={t("title_Card1")}
                titleCss2
                img={SquarePen.src}
                description={t("description_Card1")}
                isOpen={card1Open}
                onClick={() => setCard1Open(!card1Open)}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            <Box className={`${classes.cardContainer}`}>
              <CardService
                title={t("title_Card2")}
                titleCss2
                img={Icon1.src}
                img2={Icon2.src}
                description={t("description_Card2")}
                isOpen={card1Open}
                onClick={() => setCard1Open(!card1Open)}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid container spacing={2} className={classes.containerInfrastructure}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Box className={classes.boxContentImageServices2}>
            <img src={Servers2.src} alt="Image servers2" />
          </Box>
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={6} xl={6}>
          <Box className={classes.boxContentServers2}>
            <Typography className={classes.title1}>
              {t("infrastructure")}
            </Typography>
            <Box className={classes.boxthechnicalDescriptions}>
              <Typography className={classes.thechnicalDescriptions}>
                {t("infrastructure_desc1")}
              </Typography>
            </Box>
            <Box className={classes.boxthechnicalDescriptions}>
              <Typography className={classes.thechnicalDescriptions}>
                {t("infrastructure_desc2")}
              </Typography>
            </Box>
            <Box className={classes.boxthechnicalDescriptions}>
              <Typography className={classes.thechnicalDescriptions}>
                {t("infrastructure_desc3")}
              </Typography>
            </Box>
            <Box className={classes.boxthechnicalDescriptions}>
              <Typography className={classes.thechnicalDescriptions}>
                {t("infrastructure_desc4")}
              </Typography>
            </Box>
          </Box>
          {/* <Box className={classes.containerFatherExample}>
            {examples.map((example, index) => (
              <Box key={index} className={classes.exampleContainer}>
                <Typography variant="body1" className={classes.exampleName}>
                  {example.name}.
                </Typography>

                <Typography
                  variant="body1"
                  className={classes.exampleDescription}
                  style={{ cursor: "pointer" }}
                >
                  {example.description}
                </Typography>
              </Box>
            ))}
          </Box> */}
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.containerTextButton}>
        <Grid item style={{ display: "flex", justifyContent: "center" }}>
          <Box className={classes.boxdescriptionAfter}>
            <Typography className={classes.textDescriptionAfter}>
              {t("description_AfterBtn")}
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Link href="/road-map#step3">
            <Button
              className={classesComponent.buttonComponentUserExperience}
              type="submit"
              onClick={() => router.push("/road-map#step3")}
            >
              <span>{t("common_button_USER_EXPERIENCE")}</span>
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  )
}
export default ThechnicalDiscovery
