import React from "react"
import { Box,  Typography, Grid } from "@mui/material"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles";
import Image from 'next/image';
import ContactForm from "./ContactForm"
import Section from "./Section"
import Satelite from "../../public/satelite.svg"

const useStyles = makeStyles(theme => ({
  title2: {
    animation: `$myEffect 2000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "40px",
    lineHeight: "50px",
    color: "#193174",
    display: "flex",
    [theme.breakpoints.down("md")]:{
      fontSize: "40px",
      lineHeight: "50px",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
      lineHeight: "30px",
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateX(-500%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
  subtitle2: {
    animation: `$myEffect 2000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "20px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#797EF6",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      lineHeight: "20px",
      alignItems: "center",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
      lineHeight: "15px",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    height: "auto",
    gap: "19px",
    [theme.breakpoints.up("xl")]: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      order: "2",
    },
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      order: "2",
    },
  },
  container: {
     display: "flex",
     padding: "0px 60px",
     height: "550px",
     alignItems: "end",
     [theme.breakpoints.down("lg")]: { 
       padding: "0px 60px",
     },
     [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "0px 43px",
      flexDirection: "column",
      height: "auto",
     },
     [theme.breakpoints.down("sm")]: {
       height: "auto",
       flexDirection: "column",
       width: "100%",
       padding: "0px 43px",
     },
  },
}))

const ContactSection = ({ bgColor, bgImage }) => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <Section
      width="100%"
      backgroundImage={bgImage ? bgImage : ""}
      backgroundColor={bgColor ? bgColor : ""}
    >
      <Grid container spacing={0} className={classes.container}>
        <Grid item sm={12} md={4} className={classes.textContainer}>
            <Typography
              className={classes.subtitle2}
            >
              {t("home_contacSection_subtitle")}
            </Typography>
            <Typography
              className={'title-blue'}
              style={{ marginTop: "7px", lineHeight: "25px", textAlign: "initial"}}
            >
              {t("home_contacSection_title1")}</Typography>
            <Typography
              className={'title-blue' }
              style={{ marginTop: "-17px", lineHeight: "5px", textAlign: "initial"}}
            >
              {t("home_contacSection_title2")}
            </Typography>
            <Box className={'image-component'}>
              <Image src={Satelite} width={352} height={234} alt="satellite" />
            </Box>
        </Grid>
        <Grid item sm={12} md={8}>
          <ContactForm />
        </Grid>
      </Grid>
    </Section>
  )
}

export default ContactSection
