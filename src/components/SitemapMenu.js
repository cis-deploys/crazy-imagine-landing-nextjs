import React from 'react'
import Link from "next/link"

import { Box, Divider, Grid, Typography } from '@mui/material'
import { makeStyles } from "@mui/styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faBars,
    faCode,
    faBlog,
    faLaptopCode,
    faPhone,
    faCircle
  } from "@fortawesome/free-solid-svg-icons"
import { REFERENCES, TEAMS, FAQ, SERVICES, BLOG, PROJECTS, ABOUT, WORK_WITH_US, MISSION, } from '../navigation/sitemap'
import { useTranslation } from 'react-i18next'

const useStyles = makeStyles(theme => ({
container: {
    display:"flex",
    width: "100%",
    height: "auto",
    padding: "150px 50px 50px 50px",
    flexDirection: "column",
    [theme.breakpoints.down("lg")]: {
        padding: "120px 30px 30px 30px",
    },
    [theme.breakpoints.down("md")]: {
        padding: "120px 30px 30px 30px",
    },
    [theme.breakpoints.down("sm")]: {
        padding: "100px 30px 30px 30px",
    },
},
containerGrid: {
    display: "flex",
    width: "80%",
    justifyContent: "center",
    flexDirection: "column",
    gap: "15px",
    [theme.breakpoints.down("lg")]: {
        width: "100%",
    },
},
content:{
    display: "flex",
    height: "auto",
    width: "100%",
    flexDirection: "column",
},
contentLinks: {
    display: "flex",
    paddingLeft: "30px",
    justifyContent: "left",
    flexDirection: "row",
    gap: "50px",
    [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
        gap: "5px",
    },
},
title: {
    fontFamily: "Nexa",
    color:"#193174",
    fontSize: "25px",
    fontWeight: "lighter",
    lineHeight: "18px",
    marginBottom: "40px",
    textTransform: "capitali",
    [theme.breakpoints.up("xl")]: {
        fontSize: "30px",
        lineHeight: "28px",
        marginBottom: "40px",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
        marginBottom: "20px",
    },
},
icon: {
    marginRight: "10px",
},
links:{
    fontFamily: "HindVadodara",
    fontSize: "18px",
    lineHeight: "18px",
    color: "#27AAE1",
    "&:hover": {
        color: "#797EF6",
      },
    [theme.breakpoints.up("xl")]: {
        fontSize: "23px",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "15px",
      },
},
}))

const SitemapMenu = () => {
const classes = useStyles()
const { t } = useTranslation()

const formatText = (text) => {
    return text?.charAt(0).toUpperCase() + text.substring(1, text.lenght).toLowerCase();
  }

  return (
<Box className={ classes.container }>

    <Grid container spacing={2} justifyContent={"left"} width={"100%"} >
        <Grid item xs={12} sm={12} md={12} lg={12} className={ classes.containerGrid }>

            <Box className={ classes.content }>

            <Typography className={ classes.title }>
            <FontAwesomeIcon icon={faBars} className={ classes.icon }/>
                {formatText(t("common_button_about"))}
            <Link href={`${ABOUT}`} >
                <a className={ classes.links } style={{ marginLeft: "20px", }}>
                {t("sitemap_view_link_about")}
                </a>
            </Link>
            </Typography>


            <Box className={ classes.contentLinks }>
            <Typography >
            <FontAwesomeIcon icon={faCircle} size={"2xs"} color={"#27AAE1"} style={{ marginRight: "10px" }}/>
            <Link href={`${REFERENCES}`} >
                <a className={ classes.links }>
                {t("about_aboutSection_reference_title")}
                </a>
              </Link>
            </Typography>

            <Typography>
            <FontAwesomeIcon icon={faCircle} size={"2xs"} color={"#27AAE1"} style={{ marginRight: "10px" }}/>
            <Link href={`${TEAMS}`} >
                <a className={ classes.links }>
                {t("about_aboutSection_meetTheTeam_title")}
                </a>
              </Link>
            </Typography>

            <Typography>
            <FontAwesomeIcon icon={faCircle} size={"2xs"} color={"#27AAE1"} style={{ marginRight: "10px" }}/>
            <Link href={`${BLOG}`} >
                <a className={ classes.links }>
                {"Blog"}
                </a>
              </Link>
            </Typography>

            <Typography>
            <FontAwesomeIcon icon={faCircle} size={"2xs"} color={"#27AAE1"} style={{ marginRight: "10px" }}/>
            <Link href={`${FAQ}`} >
                <a className={ classes.links }>
                {t("about_aboutSection_faq_title")}
                </a>
              </Link>
            </Typography>

            <Typography>
            <FontAwesomeIcon icon={faCircle} size={"2xs"} color={"#27AAE1"} style={{ marginRight: "10px" }}/>
            <Link href={`${MISSION}`} >
                <a className={ classes.links }>
                {t("mission_title")}
                </a>
              </Link>
            </Typography>

            <Typography>
            <FontAwesomeIcon icon={faCircle} size={"2xs"} color={"#27AAE1"} style={{ marginRight: "10px" }}/>
            <Link href={`${"/"}`} >
                <a className={ classes.links }>
                {t("about_aboutSection_whoWeAre_title")}
                </a>
              </Link>
            </Typography>

            <Typography>
            <FontAwesomeIcon icon={faCircle} size={"2xs"} color={"#27AAE1"} style={{ marginRight: "10px" }}/>
            <Link href={`${SERVICES}`} >
                <a className={ classes.links }>
                {t("about_aboutSection_WorkinngTogether_title")}
                </a>
              </Link>
            </Typography>
            </Box>

            </Box>
            <Divider/>

            <Box className={ classes.content }>
            <Typography className={ classes.title }>
            <FontAwesomeIcon icon={faCode} className={ classes.icon }/>
            {formatText(t("common_button_projects"))}

            <Link href={`${PROJECTS}`} >
            <a className={ classes.links } style={{ marginLeft: "20px", }}>
            {t("sitemap_view_link_projects")}
            </a>
            </Link>
            </Typography>
            </Box>
            <Divider/>

            <Box className={ classes.content }>
            <Typography className={ classes.title }>
            <FontAwesomeIcon icon={faBlog} className={ classes.icon }/>
            {formatText(t("common_button_services"))}

            <Link href={`${SERVICES}`} >
            <a className={ classes.links } style={{ marginLeft: "20px", }}>
            {t("sitemap_view_link_services")}
            </a>
            </Link>
            </Typography>
            </Box>
            <Divider/>

            <Box className={ classes.content }>
            <Typography className={ classes.title }>
            <FontAwesomeIcon icon={faLaptopCode} className={ classes.icon }/>
            {formatText(t("common_button_blog"))}
            
            <Link href={`${BLOG}`} >
            <a className={ classes.links } style={{ marginLeft: "20px", }}>
            {t("sitemap_view_link_blog")}
            </a>
            </Link>
            </Typography>
            </Box>
            <Divider/>

            <Box className={ classes.content }>
            <Typography className={ classes.title }>
            <FontAwesomeIcon icon={faPhone} className={ classes.icon }/>
            {formatText(t("common_button_work_with_us"))}
            
            <Link href={`${WORK_WITH_US}`} >
            <a className={ classes.links } style={{ marginLeft: "20px", }}>
            {t("sitemap_view_link_workWithUs")}
            </a>
            </Link>
            </Typography>
            </Box>

        </Grid>
    </Grid>

</Box>
  )
}

export default SitemapMenu
