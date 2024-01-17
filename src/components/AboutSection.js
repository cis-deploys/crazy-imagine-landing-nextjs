import React from "react"
import { Box, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles"
import SubTitleSection from "./SubTitleSection"
import AboutTitle from "./AboutTitle"
import aboutImage from "../../public/sateliteBackground.svg"
import aboutImage1 from "../../public/antenaBackground.svg"
import Link from "next/link"
import {
  faDesktop,
  faUser,
  faUsers,
  faCheckSquare,
  faFileText,
  faEnvelopeOpen,
  faRocket,
  faBriefcase,
  faHandshake,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const useStyles = makeStyles(theme => ({
  container: {
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#FFF",
    marginBottom: "10px",
    marginTop: "50px",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      height: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      height: "auto",
    },
  },
  containerGrids: {
    padding: "30px",
    margin: "6px",
    marginTop: "20px",
    marginBottom: "20px",
    width: "96%",
    position: "relative",
  },
  gridElements: {
    padding: "3px",
    margin: "3px",
    marginTop: "20px",
  },
  icon: {
    // fontSize: '2rem',
    width: "35px",
    height: "35px",
    [theme.breakpoints.down("xl")]: {
      // fontSize: '1.5rem',
      width: "30px",
      height: "30px",
    },
    [theme.breakpoints.down("md")]: {
      // fontSize: '1rem',
      width: "27px",
      height: "27px",
    },
    [theme.breakpoints.down("sm")]: {
      // fontSize: '2rem',
      width: "20px",
      height: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      // fontSize: '0.7rem',
      width: "15px",
      height: "15px",
    },
  },
  gridElementImg: {
    padding: "5px",
    margin: "3px",
    textAlign: "end",
    "& > svg": {
      padding: "18px",
      background: "rgb(39, 170, 225)",
      borderRadius: "100%",
    },
    [theme.breakpoints.down("xl")]: {
      padding: "2px",
      "& > svg": {
        padding: "10px",
        background: "rgb(39, 170, 225)",
        borderRadius: "100%",
      },
    },
    [theme.breakpoints.between(960, 1280)]: {
      padding: "1px",
      "& > svg": {
        padding: "13px",
        background: "rgb(39, 170, 225)",
        borderRadius: "100%",
      },
    },
    [theme.breakpoints.between(600, 959)]: {
      padding: "0px",
      "& > svg": {
        padding: "16px",
        background: "rgb(39, 170, 225)",
        borderRadius: "100%",
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px",
      "& > svg": {
        padding: "10px",
        background: "rgb(39, 170, 225)",
        borderRadius: "100%",
      },
    },
  },
  gridText: {
    marginTop: "10px",
    fontStyle: "normal",
    fontFamily: "HindVadodara",
    color: "#193174",
    display: "-webkit-box",
    "-webkit-line-clamp": "3",
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    "text-overflow": "ellipsis",
  },
  gridTitle: {
    "& > a": {
      color: "#193174",
      fontSize: "28px",
      fontFamily: "Nexa Bold",
      fontStyle: "normal",
      [theme.breakpoints.down("xl")]: {
        fontSize: "25px",
      },
      [theme.breakpoints.between(960, 1280)]: {
        fontSize: "20px",
      },
      [theme.breakpoints.between(600, 959)]: {
        fontSize: "18px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
      },
    },
  },
}))

const AboutSection = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  const elements = [
    // {
    //   title: "Careers",
    //   description: "Collaboration with our internal team as well as with our clients sets our work apart from the pack.",
    //   link: '/careers',
    //   icon: faDesktop
    // },
    {
      title: "References",
      description:
        "Collaboration with our internal team as well as with our clients sets our work apart from the pack.",
      link: "/references",
      icon: faUser,
    },
    {
      title: "Meet the team",
      description: "Collaboration with our internal team",
      link: "/meet-team",
      icon: faUsers,
    },
    {
      title: "RoadMap",
      description:
        "Collaboration with our internal team as well as with our clients sets our work apart from the pack.",
      link: "/road-map",
      icon: faCheckSquare,
    },
    {
      title: t("common_button_blog"),
      description: "Collaboration with our internal team",
      link: "/blog",
      icon: faFileText,
    },
    // {
    //   title: "FAQ",
    //   description: "Collaboration with our internal team",
    //   link: '/about-us',
    //   icon: faEnvelopeOpen
    // },
    // {
    //   title: "Mission",
    //   description: "Collaboration with our internal team. Crazy Imagine, our biggest strength is the quality of our team",
    //   link: '/mission',
    //   icon: faRocket
    // },
    {
      title: "Who we are",
      description:
        "We have a dynamic and diverse mix of full-stack, front-end, back-end, and mobile developers, as well as industry-leading project managers who are passionate about combining technology with creativity to develop web solutions to help your business thrive.",
      link: "/about-us",
      icon: faBriefcase,
    },
    // {
    //   title: "To create more",
    //   description: t("about_aboutSection_description2"),
    //   link: '/to_create_more',
    //   icon: faBuilding
    // },
    {
      title: "Workinng together",
      description: t("about_aboutSection_description1"),
      link: "/services",
      icon: faHandshake,
    },
  ]

  return (
    <>
      <Box className={classes.container}>
        {/* <AboutTitle
          title={t("about_aboutSection_title1")}
          desc={t("about_aboutSection_description1")}
          img={aboutImage}
        />
        <SubTitleSection
          title={t("about_aboutSection_title2")}
          desc={t("about_aboutSection_description2")}
          img={aboutImage1}
        /> */}
        <Box>
          <Grid container className={classes.containerGrids}>
            {elements.map(e => (
              <Grid
                lg={3}
                md={4}
                sm={6}
                xs={12}
                style={{ padding: "5px" }}
                key={e.title}
              >
                <Box>
                  <Grid
                    container
                    justifyContent="space-evenly"
                    className={classes.gridElements}
                  >
                    <Grid
                      lg={2}
                      md={3}
                      sm={2}
                      xs={2}
                      className={classes.gridElementImg}
                    >
                      <FontAwesomeIcon icon={e.icon} className={classes.icon} />
                    </Grid>
                    <Grid lg={9} md={8} sm={8} xs={9}>
                      <Typography className={classes.gridTitle}>
                        <Link href={e.link}>
                          <a className={``}>{e.title}</a>
                        </Link>
                      </Typography>
                      <Typography className={classes.gridText}>
                        {e.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default AboutSection
