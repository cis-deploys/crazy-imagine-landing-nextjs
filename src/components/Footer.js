import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBuilding, faEnvelopeOpen, faPhone } from "@fortawesome/free-solid-svg-icons"
import { Box,  Typography } from "@mui/material"
import CrazyImageLogo from "../../public/crazy-imagine-icon.svg"
import { HOME, PROJECTS, WORK_WITH_US, ABOUT, CONTACT, SERVICES, BLOG, SITEMAP, SITEMA } from "../navigation/sitemap"
import { useTranslation } from "react-i18next"
import { SocialMedia } from "./SocialMedia"
import Copyright from "./Copyright"
import Image from "next/image" 
import { makeStyles } from "@mui/styles";
import Link from "next/link"

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: "#193174",
    paddingTop: "80px",
    paddingBottom: "80px",
    display: "block",
    position: "relative",
    [theme.breakpoints.between(0, 450)]: {
      paddingTop: "40px",
      paddingBottom: "40px",
    },
  },
  footerContainer: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.up("xl")]: {
      maxWidth: "1640px",
      flexDirection: "row",
    },
    [theme.breakpoints.down("lg")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "row",
      flexWrap: 'wrap',
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      height: "auto",
      flexDirection: "column",
    },
  },
  footerColumn: {
    display: "flex",
    width: "25%",
    paddingLeft: "35px",
    paddingRight: "35px",
    flexDirection: "column",
    [theme.breakpoints.between(451, 960)]: {
      paddingLeft: "35px",
      paddingRight: "35px",
      width: "45%",
    },
    [theme.breakpoints.between(0, 450)]: {
      paddingLeft: "20px",
      paddingRight: "20px",
      width: "auto",
    },
  },
  Container1: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "center",
    height: "100%",
    [theme.breakpoints.between(371, 450)]: {
      width: "max-content",
      padding: "14px 4px 10px 4px",
    },
    [theme.breakpoints.between(0, 370)]: {
      width: "220px",
      padding: "14px 4px 10px 4px",
    },

  },
  titleTypography: {
    fontFamily: "Nexa",
    fontStyle: "normal",
    fontSize: "20px",
    color: "#FFFFFF",
    display: "flex",
    textAlign: "left",
    letterSpacing: "0.1em",
    textDecoration: "none",
    margin: "10px 0px 20px",
  },
  image: {
    display: "flex",
    width: "245px",
    height: "55px",
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
    [theme.breakpoints.between(0, 450)]: {
      padding: "4px 0px 4px 4px",
      marginBottom: "10px",
    },
  },
  infoTypography: {
    color: "#FFFFFF",
    fontStyle: "normal",
    fontFamily: "Roboto,sans-serif",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "25px",
    marginBottom: "10px",
    display: "flex",
    [theme.breakpoints.up("xl")]: {
      fontSize: "17.6px",
      lineHeight: "1.8rem",
    },
    [theme.breakpoints.between(451, 1920)]: {
      fontSize: "14px",
    },
    [theme.breakpoints.between(0, 450)]: {
      fontSize: "13px",
      maxWidth: "270px"
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
  infoIcon: {
    color: "#A7E4F5",
    marginTop: 3,
    alingSelf: "center",
    size:"1x",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      size: "1x"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      size:"1x"
    },
  },
  linkTypography: {
    color: "#FFFFFF",
    fontStyle: "normal",
    fontFamily: "Nexa",
    fontWeight: "700",
    lineHeight: "16px",
    fontSize: "13px",
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
    [theme.breakpoints.up("xl")]: {
      fontSize: "18px",
    },
  },
  
}));

const Footer = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  const formatText = (text) => {
    return text?.charAt(0).toUpperCase() + text.substring(1, text.lenght).toLowerCase();
  }

  return (
    <Box component="footer" className={classes.footer}>

      <Box className={classes.footerContainer}>
      
        <Box className={classes.footerColumn} order={1}>
          <Box className={classes.Container1}>
          <Link href={`${HOME}`}>
            <a style={{ margin: "10px 0px 10px"}}>
            <Image src={CrazyImageLogo} alt="footerImage" className={classes.image}/>
            </a>
          </Link>
          <Typography className={classes.infoTypography} style={{ marginBottom: "10px"}}>
            {t("home_footer_text")}
          </Typography>
          <Copyright />
          </Box>
        </Box>

        <Box className={classes.footerColumn} order={2}>
          <Box className={classes.Container1}>
            <Typography className={classes.titleTypography}>
            {t("home_footer_location")}
            </Typography>
        <Box className={classes.info}>
            <FontAwesomeIcon
              icon={faBuilding}
              className={classes.infoIcon}
              size="1x"
            />
            <Box style={{ flexDirection: "column", }}>
              <Typography className={classes.infoTypography}>
                {"1786 Smarts Rule St. kissimmee"}
              </Typography>
            </Box>
        </Box>
        <Typography className={classes.infoTypography}>
                {"Florida 34744"}
              </Typography>
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

        <Box className={classes.footerColumn} order={3}>
          <Box className={classes.Container1}>
          <Typography className={classes.titleTypography}>
           {t("home_footer_socialMedia")}
          </Typography>
            <Box>
            <SocialMedia/>
            </Box>
          </Box>
        </Box>

        <Box className={classes.footerColumn} order={4}>
          <Box className={classes.Container1}>
            <Typography className={classes.titleTypography}>
              {t("home_footer_link")}
            </Typography>

            <Typography>
              <Link href={`${ABOUT}`} >
                <a className={classes.infoTypography}>
                {formatText(t("common_button_about"))}
                </a>
              </Link>
          </Typography>

          <Typography>
              <Link href={`${PROJECTS}`} >
                <a className={classes.infoTypography}>
                {formatText(t("common_button_projects"))}
                </a>
              </Link>
          </Typography>

          <Typography>
              <Link href={`${SERVICES}`} >
                <a className={classes.infoTypography}>
                {formatText(t("common_button_services"))}
                </a>
              </Link>
          </Typography>

          <Typography>
              <Link href={`${BLOG}`} >
                <a className={classes.infoTypography}>
                {formatText(t("common_button_blog"))}
                </a>
              </Link>
          </Typography>

          <Typography>
              <Link href={`${WORK_WITH_US}`} >
                <a className={classes.infoTypography}>
                {formatText(t("common_button_work_with_us"))}
                </a>
              </Link>
          </Typography>

          <Typography style={{ textTransform: "capitalize" }}>
              <Link href={`${CONTACT}`} >
                <a className={classes.infoTypography}>
                {formatText(t("home_footer_button_contact"))}
                </a>
              </Link>
          </Typography>

          <Typography style={{ textTransform: "capitalize" }}>
              <Link href={`${SITEMAP}`} >
                <a className={classes.infoTypography}>
                {formatText(t("home_footer_button_sitemap"))}
                </a>
              </Link>
          </Typography>

          </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default Footer
