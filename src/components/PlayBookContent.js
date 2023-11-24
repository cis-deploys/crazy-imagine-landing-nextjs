import React, {  useState, useEffect } from "react"
import { Box, Grid, Typography, Button, Pagination } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useTranslation } from "react-i18next"
import Link from "next/link"

const useStyles = makeStyles(theme => ({
  container: {
    padding: '2px',
    margin: '6px',
    width: '100%',
    position: 'relative'
  },
  title: {
    animation: `$myEffect 2000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "40px",
    lineHeight: "40px",
    textAlign: "center",
    color: "#FFFFFF",
    margin: "38px",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      lineHeight: "28px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
      lineHeight: "22px",
    },
  },
  sectionTitles: {
    margin: "20px",
    padding: "5px",
    position: "relative",
  },
  sectionTitlesText: {
    color: "black",
    position: "relative",
    fontSize: "30px",
    "&:hover": {
        color: "#797EF6",
        borderBottom: "none"
    },
    "&:link": {
        textDecoration: 'none'
    },
  },
  sectionTitlesDescripcion: {
    color: "black",
    fontSize: "12px"
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}))


const DesignSection = () => {
  return (
    <Box id="design"  style={{height: "700px"}}>
      design
    </Box>

  )
}
const DevelopSection = () => {
  return (
    <Box id="develop" style={{height: "700px"}}>
      develop
    </Box>

  )
}
const MaintainSection = () => {
  return (
    <Box id="maintain"  style={{height: "700px"}}>
      maintain
    </Box>

  )
}


const PlayBookContent = () => {
  const classes = useStyles()

  const { t, i18n } = useTranslation()
  const lang = i18n.language

  const sectionTitles = [
    {
        title: t("design"),
        descripcion: "PHASE 1",
        link: "#design"
    },
    {
        title: t("develop"),
        descripcion: "PHASE 2",
        link: "#develop"
    },
    {
        title: t("maintain"),
        descripcion: "PHASE 3",
        link: "#maintain"
    },
  ]
  
  return (
    <Box>
        <Typography className={classes.title}>
          {t("playBook_title")}
        </Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            {sectionTitles.map((e)=>(
                <Grid sm={3} md={2} lg={2} xl={1} >
                    <Box className={classes.sectionTitles}>
                        <Typography className={classes.sectionTitlesDescripcion}>{e.descripcion}</Typography>
                        <Typography>
                            <Link href={e.link} >
                                <a className={classes.sectionTitlesText}>
                                    {e.title}
                                </a>
                            </Link>
                        </Typography>
                    </Box>
                </Grid>
            ))}
        </Grid>
        <DesignSection/>
        <DevelopSection/>
        <MaintainSection/>
    </Box>

  )
}

export default PlayBookContent