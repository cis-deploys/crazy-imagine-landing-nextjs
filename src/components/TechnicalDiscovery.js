import React, { useState } from "react"
import { Box, Typography, Grid } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useTranslation } from "react-i18next"
import CardService from "./CardService"
import LanguageIcons from "../../public/languageIcons.svg"

import Computer from "../../public/computerPhone.svg"
import Servers from "../../public/backendServers.svg"
import Services from "../../public/servicesIntegrations.svg"
import Background from "../../public/backgroundImage3.svg"
import SquarePen from "../../public/iconPenSquare.svg"
import Icon1 from "../../public/icon1Card2.svg"

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

    padding: "50px",
    margin: "0 auto",
  },
  containerInfo4: {
    width: "100%",
    height: "auto",

    padding: "60px",
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
    // alignItems: "flex-start",
    height: "100%",
  },

  boxContentTexts: {
    paddingTop: "32px",
    width: "82%",
    [theme.breakpoints.between(2500, 4000)]: {
      width: "100%",
    },
  },
  boxImagelanguages: {
    display: "flex",
    justifyContent: "center",
  },
  boxContentServers: {
    width: "90%",
    paddingTop: "85px",
  },
  boxContentServices: {
    width: "85%",
    [theme.breakpoints.between(1920, 2498)]: {
      width: "100%",
    },
    [theme.breakpoints.between(2500, 4000)]: {
      width: "100%",
    },
  },

  boxContentTesting: {
    width: "100%",
    height: "auto",
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
}))

const ThechnicalDiscovery = () => {
  const classes = useStyles()
  const { t, i18n } = useTranslation()
  const [card1Open, setCard1Open] = useState(false)
  const [card2Open, setCard2Open] = useState(false)
  const [card3Open, setCard3Open] = useState(false)
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
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
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

        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Box className={classes.boxImageComputer}>
            <img src={Computer.src} alt="Image computer" />
          </Box>
        </Grid>
      </Grid>
      <Box className={classes.boxContentStep2}>
        <Grid container spacing={2} className={classes.containerInfo3}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Box>
              <img src={Servers.src} alt="Image computer" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
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
      <Box
        className={classes.boxContentTesting}
        style={{
          backgroundImage: `url(${Background.src})`,
          backgroundSize: "cover",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Box className={`${classes.cardContainer}`}>
              <CardService
                title={t("title_Card1")}
                img={SquarePen.src}
                description={t("description_Card1")}
                isOpen={card1Open}
                onClick={() => setCard1Open(!card1Open)}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Box className={`${classes.cardContainer}`}>
              <CardService
                title={t("title_Card2")}
                img={Icon1.src}
                description={t("description_Card2")}
                isOpen={card1Open}
                onClick={() => setCard1Open(!card1Open)}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
export default ThechnicalDiscovery
