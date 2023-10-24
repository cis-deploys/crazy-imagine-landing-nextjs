import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBuilding,
  faEnvelopeOpen,
  faPhone,
} from "@fortawesome/free-solid-svg-icons"
import { Box,  Typography } from "@mui/material"
import CrazyImageLogo from "../../public/crazy-imagine-icon.svg"
import Section from "./Section"
import {
  HOME,
  PROJECTS,
  WORK_WITH_US,
  ABOUT,
  CONTACT,
  BLOG,
} from "../navigation/sitemap"
import { useTranslation } from "react-i18next"
import { SocialMedia } from "./SocialMedia"
import Copyright from "./Copyright"
import Image from "next/image" 
import { makeStyles } from "@mui/styles";
import Link from "next/link"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  root: {
    "& .MuiLink-root": {
      "&:hover": {
        color: "white",
      },
    },
  },
  contactIcon: {
    fontSize: "20px",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    },
  },
  contactIconButton: {
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    [theme.breakpoints.down("xs")]: {
      width: "25px",
      height: "25px",
    },
  },
  infoIcon: {
    color: "#27AAE1",
    marginTop: 3,
    alingSelf: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  footerContainer: {
    display: "flex",
    height: "192px",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 60px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "0px 43px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "auto",
      flexDirection: "column",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "1440px",
      margin: "0 auto",
      padding: "0px 60px",
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: "1920px",
      margin: "0 auto",
      padding: "0px 60px",
    },
  },
  effect: {
    paddingTop: "10px",
    "&::before": {
      left: "0",
      bottom: "-2px",
      width: "100%",
      height: "3px",
      background: "white",
      transform: "scaleX(0)",
    },
    "&:hover::before": {
      transform: "scaleX(1)",
    },
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    height: "100%",
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      gap: "0px",
      marginBottom: "-45px",
      marginTop: "15px",
      padding: "14px 4px 54px 4px",
    },
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
    height: "50%",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "50px",
    [theme.breakpoints.between(1280, 1450)]: {
      gap: "20px",
    },
    [theme.breakpoints.between(0, 1300)]: {
      visibility: "hidden",
      width: "0px",
      display: "none",
    },
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    gap: "20px",
    padding: "44px 0px 44px 44px",
    borderLeft: "1.5px solid #233B7E",
    [theme.breakpoints.down("md")]: {
      width: "auto",
      borderLeft: "0px solid #233B7E",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "4px 0px 4px 4px",
      marginBottom: "15px",
    },
  },
  iconsContainer: {
    display: "flex",
    alignSelf: "center",
    gap: "21px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "15px",
    },
  },
  info: {
    display: "flex",
    flexDirection: "row",
    lineHeight: "20px",
    gap: "4px",
    [theme.breakpoints.down("xs")]: {
      lineHeight: "8px",
    },
  },
  linkTypography: {
    color: "#FFFFFF",
    fontStyle: "normal",
    fontFamily: "Nexa",
    fontWeight: "700",
    lineHeight: "16px",
    fontSize: "14px",
    textDecoration: "none",
    position: "relative",
    "&::before, &::after": {
      content: "''",
      position: "absolute",
      transition: "transform .5s ease",
    },
    "&:hover": {
      color: "white",
    },
  },
  infoTypography: {
    color: "#FFFFFF",
    fontStyle: "normal",
    fontFamily: "HindVadodara",
    fontWeight: "400",
    fontSize: "14px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },
  footerSection: {
    [theme.breakpoints.down("xs")]: {
      height: "auto",
    },
  }
}));

const Footer = ({ height = "192px" }) => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <Section
      backgroundColor="#193174"
      width="100%"
      component="footer"
      height={height}
      sx={{ margin: "0 auto" }}
    >
      <Box className={classes.footerContainer}>
        <Box className={classes.logoContainer}>
          <Link href={`${HOME}`}  >
            <a className={classes.linkTypography}>
            <Image src={CrazyImageLogo} alt="footerImage" width={245} height={55}/>
            </a>
          </Link>
          <SocialMedia />
        </Box>
        <Box className={classes.linkContainer}>
          <Typography>
          <Link href={`${ABOUT}`} >
                <a className={`${classes.linkTypography} ${classes.effect}`}>
                {t("common_button_about")}
                </a>
              </Link>
          </Typography>
          <Typography>
          <Link href={`${PROJECTS}`} >
                <a className={`${classes.linkTypography} ${classes.effect}`}>
                {t("common_button_services")}
                </a>
              </Link>
          </Typography>
          <Typography>
          <Link href={`${BLOG}`} >
                <a className={`${classes.linkTypography} ${classes.effect}`}>
                {t("common_button_blog")}
                </a>
              </Link>
          </Typography>
          <Typography>
          <Link href={`${WORK_WITH_US}`} >
                <a className={`${classes.linkTypography} ${classes.effect}`}>
                {t("common_button_work_with_us")}
                </a>
              </Link>
          </Typography>
          <Typography>
          <Link href={`${CONTACT}`} >
                <a className={`${classes.linkTypography} ${classes.effect}`}>
                {t("home_footer_button_contact")}
                </a>
              </Link>
          </Typography>
        </Box>
        <Box className={classes.infoContainer}>
          <Box className={classes.info}>
            <FontAwesomeIcon
              icon={faBuilding}
              className={classes.infoIcon}
              size="1x"
            />
            <Box style={{ flexDirection: "column" }}>
              <Typography className={classes.infoTypography}>
                {t("home_footer_direction1")}
              </Typography>
              <Typography className={classes.infoTypography}>
                {t("home_footer_direction2")}
              </Typography>
            </Box>
          </Box>
          <Box className={classes.info}>
            <FontAwesomeIcon
              icon={faEnvelopeOpen}
              className={classes.infoIcon}
              size="1x"
            />
            <Typography className={classes.infoTypography}>
              Support@crazyimagine.com
            </Typography>
          </Box>
          <Box className={classes.info}>
            <FontAwesomeIcon
              icon={faPhone}
              className={classes.infoIcon}
              size="1x"
            />
            <Typography className={classes.infoTypography}>
              +13203229488
            </Typography>
          </Box>
        </Box>
      </Box>
      <Copyright />
    </Section>
  )
}

export default Footer
