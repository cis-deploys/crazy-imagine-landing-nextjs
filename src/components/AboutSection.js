import React from "react"
import { useTranslation } from 'next-i18next'
import Link from "next/link"
import Image from "next/image"

import reference_icon from "../../public/reference_icon.webp"
import meet_icon from "../../public/meet_icon.webp"
import blog_icon from "../../public/blog_icon.webp"
import faq_icon from "../../public/faq_icon.webp"
import mission_icon from "../../public/mission_icon.webp"
import whoWeAre_icon from "../../public/whoWeAre_icon.webp"
import working_icon from "../../public/working_icon.webp"
import workWithUs_icon from "../../public/workWithUs_icon.webp"
import roadmap_icon from "../../public/roadmap_icon.webp"

import { Box, Card, CardContent, Grid, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiCardContent-root":{
      padding: "0px !important"
    }
  },
  container: {
    height: "auto",
    display: "flex",
    flexDirection: "column",
    marginTop: '50px',
    marginLeft: '60px',
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "auto",
      marginLeft: "40px",
    },
  },
  containerGrids: {
    width: "100%",
  },
  gridElements: {
    marginTop: "20px",
    marginLeft: "10px",
    marginRight: "10px",
    marginBottom: "20px",
    alignItems: "center",
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0px",
    },
  },
  card:{
    display:"flex", 
    backgroundColor: "#F8F8F8",
    alignItems:'center',
    width: "100%",
    height: "auto",
    padding: "24px",
    gap: "24px",
    alignSelf: "stretch",
    boxShadow: "5px 5px 15px rgba(164,164,166,0.3)",
    [theme.breakpoints.down("md")]: {
      gap: "5px"
    },
  },
  gridImage:{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  },
  titleCard: {
    "& > a": {
      color: "#081E7A",
      fontFamily: "Nexa Bold",
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "30px",
      textDecoration: "none",
      [theme.breakpoints.up("xl")]: {
        fontSize: "23px",
      },
      [theme.breakpoints.between(960, 1280)]: {
        fontSize: "15px",
      },
      [theme.breakpoints.between(600, 959)]: {
        fontSize: "15px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "13px",
      },
    },
  },
  description: {
    color: "#A4A4A6",
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "19px",
    [theme.breakpoints.up("xl")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      lineHeight: "14px",
    },
  },
}))

const AboutSection = () => {
  const classes = useStyles()
  const { t } = useTranslation("common")

  const elements = [
    // {
    //   title: "Careers",
    //   description: "Collaboration with our internal team as well as with our clients sets our work apart from the pack.",
    //   link: '/careers',
    //   icon: faDesktop
    // },
    {
      title: t("about_aboutSection_reference_title"),
      description: t("about_aboutSection_reference"),
      link: "/references",
      iconImage: reference_icon,
    },
    {
      title: t("about_aboutSection_meetTheTeam_title"),
      description: t("about_aboutSection_meetTheTeam"),
      link: "/meet-team",
      iconImage: meet_icon,
    },
    {
      title: "Blog",
      description: t("about_aboutSection_blog"),
      link: "/blog",
      iconImage: blog_icon,
    },
    {
      title: t("about_aboutSection_faq_title"),
      description: t("about_aboutSection_faq"),
      link: '/faq',
      iconImage: faq_icon,
    },
    {
      title: t("about_aboutSection_Mission_title"),
      description: t("about_aboutSection_Mission"),
      link: '/mission',
      iconImage: mission_icon,
    },
    {
      title: t("about_aboutSection_whoWeAre_title"),
      description: t("about_aboutSection_whoWeAre"),
      link: "/",
      iconImage: whoWeAre_icon
    },
    {
      title: t("about_aboutSection_Roadmap_title"),
      description: t("about_aboutSection_Roadmap"),
      link: '/road-map',
      iconImage: roadmap_icon
    },
    {
      title: t("about_aboutSection_WorkingTogether_title"),
      description: t("about_aboutSection_WorkingTogether"),
      link: "/services",
      iconImage: working_icon,
    },
    {
      title: t("about_aboutSection_WorkWithUs_title"),
      description: t("about_aboutSection_WorkWithUs"),
      link: '/work-with-us',
      iconImage: workWithUs_icon,
    },
  ]

  return (
    <>
      <Box className={classes.container}>
          <Grid container className={classes.containerGrids}>
            {elements.map(e => (
              <Grid item
                lg={4}
                md={6}
                sm={6}
                xs={12}
                key={e.title}
              >
                <Box>
                  <Grid
                    container
                    justifyContent="space-evenly"
                    className={classes.gridElements}
                  >
                    <Card
                    className={`${classes.card} ${classes.root}`}
                    >
                    <Grid item md={2} className={classes.gridImage}> 
                    <Image src={e.iconImage} alt="icon-image" width={60} height={60}/>                     
                    </Grid>

                    <Grid item md={10}>
                    <CardContent>
                      <Typography className={classes.titleCard}>
                        <Link href={e.link}>
                          <a>{e.title}</a>
                        </Link>
                      </Typography>

                      <Typography className={ classes.description}>
                        {e.description}
                      </Typography>
                    </CardContent>
                    </Grid>
                      </Card>
                  </Grid>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
    </>
  )
}

export default AboutSection
