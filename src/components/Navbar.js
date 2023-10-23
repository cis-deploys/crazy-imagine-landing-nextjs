import React from "react"
import { useTranslation } from "react-i18next"
import Link from "next/link"
import Image from "next/image"
import { makeStyles } from "@mui/styles"
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material"
import {
  CONTACT,
  HOME,
  PROJECTS,
  WORK_WITH_US,
  ABOUT,
  BLOG,
} from "../navigation/sitemap"
import { colors, colorsIconos } from "../helpers/navbarColors"
import useScroll from "../hooks/useScroll"
import { SocialMedia } from "./SocialMedia"
import { LanguageModal } from "./LanguageModal"

import CrazyImagineLogo from "../../public/crazy-imagine-icon.svg"

const useStyles = makeStyles(theme => ({
  container: props => ({
    transition: "background 300ms ease",
    boxShadow: "none",
    width: "100%",
    padding: "0px",
    backgroundColor: props.scroll ? props.color : "rgba(25, 49, 116, 0.87)",
    zIndex: 9,
  }),
  iconSpacing: {
    marginLeft: theme.spacing(10),
  },
  root: {
    justifyContent: "center",
    padding: "0px",
  },
  navbarIcons: props => ({
    fontSize: 25,
    color: props.scroll ? props.iconsVariant : "white",
  }),
  contactButton: {
    width: "150px",
    height: "40px",
    background: "transparent",
    borderRadius: "100px",
    textDecoration: "none",
    border: "2px solid #FFFFFF",
    "&:hover": {
      background: "#FFFFFF",
      "& span": {
        color: "#1E2F97",
      },
    },
    [theme.breakpoints.down("lg")]: {
      width: "140px",
      height: " 35px",
    },
    [theme.breakpoints.down("md")]: {
      width: "130px",
      height: " 30px",
    },
  },
  linkTypography: props => ({
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Nexa",
    width: "100%",
    letterSpacing: "0.1em",
    lineHeight: "16px",
    textAlign: "right",
    color: props.scroll ? props.linkVariant : "#FFFFFF",
    position: "relative",
    textDecoration: "none !important",
    "&::before, &::after": {
      content: "''",
      position: "absolute",
      transition: "transform .5s ease",
    },
    "&:hover": {
      content: "''",
      color: "#FFFFFF",
    },
    [theme.breakpoints.down("lg")]: {
      maxWidth: "auto",
      fontSize: 14,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 13,
    },
  }),
  barContainer: {
    margin: 1,
    display: "flex",
    width: "100%",
    height: "6em",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "40px",
    [theme.breakpoints.between(1280, 1300)]: {
      gap: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "auto",
      margin: "0 auto",
      padding: "0px 60px",
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: "1920px",
      margin: "0 auto",
      padding: "0px 60px",
    },
  },
  linkContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "40px",
    [theme.breakpoints.between(0, 1470)]: {
      gap: "20px",
    },
  },
  contactTypography: {
    fontSize: "14px",
    fontWeight: 700,
    textDecoration: "none",
    letterSpacing: "0.05em",
    textAlign: "center",
    lineHeight: "14px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  effect: {
    paddingTop: "10px",
    "&::before": {
      content: "''",
      left: "0",
      width: "100%",
      bottom: "-2px",
      height: "3px",
      background: "white",
      color: "white !important",
      transform: "scaleX(0)",
    },
    "&:hover::before": {
      color: "white",
      background: "white",
      transform: "scaleX(1)",
    },
  },
  contactTypographyOutside: {
    fontSize: "14px",
    fontWeight: 700,
    textDecoration: "none",
    letterSpacing: "0.05em",
    textAlign: "center",
    lineHeight: "14px",
    backgroundColor: "#1E2F97",
    "&:hover": {
      color: "#FFFFF",
    },
  },

  link: {
    textDecoration: "none",
    borderRadius: "100px"
  }
}))

export const Navbar = ({
  variant = "primary",
  variantIcons = "primary",
  color = "transparent",
}) => {
  const { scroll } = useScroll()
  const linkVariant = colors(variant)
  const iconsVariant = colorsIconos(variantIcons)
  const { t } = useTranslation()
  const classes = useStyles({
    scroll,
    linkVariant,
    iconsVariant,
    color,
  });

  return (
    <AppBar color={color} position="fixed" className={classes.container}>
      <Toolbar className={classes.root}>
        <Box className={classes.barContainer}>
          <Link href={`${HOME}`} >
            <a>
            <Image
              src={CrazyImagineLogo}
              alt="logo"
              width={230}
              height={48}
            />
            </a>
          </Link>
          <Box className={classes.linkContainer}>
            <Typography style={{ minWidth: "max-content"}}>
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
            <Typography style={{ minWidth: "max-content" }}>
            <Link href={`${WORK_WITH_US}`} >
                <a className={`${classes.linkTypography} ${classes.effect}`}>
                {t("common_button_work_with_us")}
                </a>
              </Link>
            </Typography>
            <LanguageModal />
          </Box>
          <SocialMedia />
          <Link href={`${CONTACT}`}>

            <a className={ classes.link }>
            <Button className={classes.contactButton}>
              <span
                className={classes.contactTypography}
              >
                {t("common_button_contact_us")}
              </span>
            </Button>
            </a>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
