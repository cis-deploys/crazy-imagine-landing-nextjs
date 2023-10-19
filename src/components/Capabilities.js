import React from "react"
import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles"
import Image from "next/image"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    width: "32%",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    gap: "22px",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      gap: "15px",
      height: "auto",
      alignSelf: "flex-end",
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      alignSelf: "flex-end",
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      width: "65%",
      alignSelf: "center"
    },
  },
  classContainer: {
    display: "flex",
    width: "32%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "22px",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      gap: "15px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "9px",
    },
    [theme.breakpoints.down("xs")]: {
      gap: "5px",
      height: "auto",
      width: "70%",
      alignSelf: "center",
    },
  },
  subtitle2: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "20px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#797EF6",
    marginBottom: "6px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
      lineHeight: "14px",
    },
  },
  title2: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "58px",
    lineHeight: "58px",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      fontSize: "41px",
      lineHeight: "41px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      lineHeight: "25px",
    },
  },
  img2: {
    width: "405px",
    [theme.breakpoints.down("lg")]: {
      width: "auto",
      height: "auto",
    },
    [theme.breakpoints.down("md")]: {
      width: "70%",
      height: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      alignSelf: "center",
      width: "100%",
    },
  },
  desc2: {
    fontFamily: "HindVadodara",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "21px",
    lineHeight: "min-content",
    letterSpacing: "0.02em",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  },
}))

const Capabilities = ({ title, desc, img, cls, width, height }) => {
  const classes = useStyles()
  const { t } = useTranslation();
  return (
    <Box className={classes[cls]}>
      <Typography className={classes.subtitle2}>{t("common_button_capabilities")}</Typography>
      <Typography className={classes.title2}>{title}</Typography>
      <Typography className={classes.desc2}>{desc}</Typography>
      {img && 
      <Image className={classes.img2} src={img} width={width} height={height} alt="Capabilities" />}
    </Box>
  )
}
export default Capabilities
