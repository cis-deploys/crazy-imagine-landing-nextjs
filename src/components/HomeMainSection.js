import React, { useRef } from "react"
import { Box, Grid, Button } from "@mui/material"
import {
  faCode,
  faThumbsUp,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons"
import HomeCard from "./HomeCard"
import TitleSection from "./TitleSection"
import HomeDescription from "../components/HomeDescription"
import { PROJECTS } from "../navigation/sitemap"
import { useIntersection } from "../hooks/useIntersection"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles"
import Link from "next/link"


const useStyles = makeStyles(theme => ({
  container: {
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#FFF",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      flexDirection: "column",
    },
  },
  cardContainer: {
    paddingTop:"62px",
    [theme.breakpoints.down("sm")]: {
      paddingTop:"0px",
      flexDirection: "column",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      paddingTop: "0px"
    },
    
    
  },
  button: {
    visibility: "hidden",
  },
  button2: {
    animation: `$myEffect 2000ms`,
    background: "#797EF6",
    borderRadius: "100px",
    marginBottom: "87px",
    marginTop: "48px",
    "&:hover": {
      backgroundColor: "#30AADE",
    },
    "& > span": {
      fontFamily: "Nexa Bold",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      padding: "14px 20px 12px 20px",
      lineHeight: "14px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      letterSpacing: "0.05em",
      color: "#FFFFFF",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "61px",
      marginTop: "34px",
      "& > span": {
        fontSize: "10px",
        lineHeight: "14px",
        padding: "10px 14px 8px 14px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "40px",
      marginTop: "24px",
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}))

const HomeMainSection = () => {
  const classes = useStyles()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  const { t } = useTranslation();
  return (
    <Box className={classes.container}>
      <TitleSection
        desc={t("home_homeMainSection_titleSection_description")}
      />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={3}
        className={classes.cardContainer}
      >
        <Grid item xs="auto">
          <HomeCard title={t("common_capabilities_title1")} icon={faCode} />
        </Grid>
        <Grid item xs="auto">
          <HomeCard title={t("common_capabilities_title2")} icon={faThumbsUp} />
        </Grid>
        <Grid item xs="auto">
          <HomeCard title={t("common_capabilities_title3")} icon={faCircleCheck} />
        </Grid>
      </Grid>

      <HomeDescription />

      <Link href={`${PROJECTS}`} style={{ textDecoration: "none" }} >
        <a>
        <Button
          ref={ref}
          className={isVisible ? classes.button2 : classes.button}
        >
          <span>{t("common_button_get_started")}</span>
        </Button>
        </a>
      </Link>
    </Box>
  )
}

export default HomeMainSection
