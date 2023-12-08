import React from "react"
import { Box,  Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { PRIVACY_POLICY } from "../navigation/sitemap"
import { makeStyles } from "@mui/styles";
import Link from "next/link"
import '@fontsource/roboto/400.css'

const useStyles = makeStyles(theme => ({
  copyContainer: {
    display: "flex",
    alignItems: "left",
    flexDirection: "column",
    width: "100%",
    [theme.breakpoints.up("xl")]: {
      maxWidth: "4000px",
      margin: "0 auto",
      padding: "0px",
    },
  },
  copyright: {
    color: "#FFFFFF",
    fontFamily: "Roboto,sans-serif",
    fontWeight: 400,
    fontSize: "12px",
    textAlign: "left",
    fontStyle: "normal",
    lineHeight: "25px",
    marginBottom: "10px",
    [theme.breakpoints.up("xl")]: {
      fontSize: "17.6px",
    },
    [theme.breakpoints.between(0, 325)]: {
      fontSize: "14px",
    },
  },
  barText: {
    color: "#A7E4F5",
    fontSize: "15px",
    height: "17px",
    alignItems: "left",
  },
}))

const Copyright = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
      <Box className={classes.copyContainer}>
        <Typography className={classes.copyright}>
          {" "}
          {t("home_copyright_label1")}
        </Typography>

        <Link href={`${PRIVACY_POLICY}`} >

          <a className={classes.copyright} >
          {t("home_copyright_label2")}
          <span className={classes.barText}>|</span>
          {t("home_copyright_label3")}
          </a>

        </Link>
      </Box>
  )
}

export default Copyright
