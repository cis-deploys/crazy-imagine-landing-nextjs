import React from "react"
import { Box, Typography } from "@mui/material"
import { useTranslation } from "next-i18next"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(theme => ({
  content: {
    fontFamily: "HindVadodara",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "130%",
    letterSpacing: "0.02em",
    color: "#193174",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    padding: "100px 0",
    [theme.breakpoints.down("xs")]: {
      fontSize: "8px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
  },
  container: {
    width: "80%",
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "58px",
    lineHeight: "58px",
    color: "#193174",
    width: "526px",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontWeight: "auto",
      fontSize: "53px",
      lineHeight: "53px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      fontWeight: "auto",
      fontSize: "28px",
      lineHeight: "28px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      fontWeight: "auto",
      fontSize: "22px",
      lineHeight: "22px",
    },
  },
  subtitle: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "28px",
    lineHeight: "28px",
    textAlign: "center",
    color: "#193174",
    marginTop: "27px",
    whiteSpace: "pre-line",
    minHeight: "54px",
    [theme.breakpoints.down("md")]: {
      fontSize: "21px",
      lineHeight: "21px",
      marginTop: "21px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      lineHeight: "18px",
      marginTop: "18px",
    },
  },
}))

const PrivacyPolicySection = () => {
  const classes = useStyles()
  const { t } = useTranslation("common")
  return (
    <>
      <Box className={classes.container}>
        <Typography className={classes.content}>
          {t("privacyPolicy_paragraph1")}
          <span className={classes.subtitle}>
            {t("privacyPolicy_subtitle1")}
          </span>
          {t("privacyPolicy_paragraph2")}
          <span className={classes.subtitle}>
            {t("privacyPolicy_subtitle2")}
          </span>
          {t("privacyPolicy_paragraph3")}
          <br />
          {t("privacyPolicy_paragraph4")}
          <span className={classes.subtitle}>
            {t("privacyPolicy_subtitle3")}
          </span>
          {t("privacyPolicy_paragraph5")}
          <span className={classes.subtitle}>
            {t("privacyPolicy_subtitle4")}
          </span>
          {t("privacyPolicy_paragraph6")}
          <br />
          {t("privacyPolicy_paragraph7")}
          <br />
          {t("privacyPolicy_paragraph8")}
        </Typography>
      </Box>
    </>
  )
}

export default PrivacyPolicySection
