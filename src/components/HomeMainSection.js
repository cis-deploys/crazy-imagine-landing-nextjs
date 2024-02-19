import React from "react"
import { Box, Grid, Button } from "@mui/material"
import {faCode, faThumbsUp, faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import HomeCard from "./HomeCard"
import TitleSection from "./TitleSection"
import HomeDescription from "../components/HomeDescription"
import { PROJECTS } from "../navigation/sitemap"
import { useTranslation } from 'next-i18next'
import { makeStyles } from "@mui/styles"
import Link from "next/link"
import { StyleComponent } from "./StyleComponent"


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
    paddingTop:"5px",
    [theme.breakpoints.down("sm")]: {
      paddingTop:"0px",
      flexDirection: "column",
    },
  },
}))

const HomeMainSection = () => {
  const classes = useStyles()
  const classesComponent = StyleComponent()
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
          className={classesComponent.buttonComponent}
          style={{ marginBottom: "20px" }}
        >
          <span>{t("common_button_get_started")}</span>
        </Button>
        </a>
      </Link>
    </Box>
  )
}

export default HomeMainSection
