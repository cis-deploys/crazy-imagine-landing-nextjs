import React from "react"
import { Box,  Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { PRIVACY_POLICY } from "../navigation/sitemap"
import { makeStyles } from "@mui/styles";
import Link from "next/link";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#071A4E",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      height: "auto",
    },
  },
  copyContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "92%",
    height: "78px",
    [theme.breakpoints.down("md")]: {
      height: "55px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "34px",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      height: "auto",
      marginTop: "5px",
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: "1920px",
      margin: "0 auto",
      padding: "0px",
    },
  },
  copyright: {
    color: "white",
    fontFamily: "Roboto",
    fontWeight: 400,
    fontSize: "12px",
    textAlign: "left",
    fontStyle: "normal",
    [theme.breakpoints.down("sm")]: {
      fontSize: "7px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "5px",
    },
  },
  barText: {
    color: "#27AAE1",
    fontSize: "15px",
    height: "17px",
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      height: "12px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "7px",
      height: "7px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "5px",
    },
  },
  text: {
    textAlign: "right",
    fontWeight: 700,
    fontSize: "12px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "7px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "5px",
    },
  },
}))

const Copyright = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Box className={classes.container}>
      <Box className={classes.copyContainer}>
        <Typography className={classes.copyright}>
          {" "}
          {t("home_copyright_label1")}
        </Typography>
        <Link href={`${PRIVACY_POLICY}`}>
          <a className={classes.copyright}>
          {" "}
          {t("home_copyright_label2")}
          
          <span className={classes.barText}>|</span>
          
          {t("home_copyright_label3")}
          </a>
        </Link>
      </Box>
    </Box>
  )
}

export default Copyright
