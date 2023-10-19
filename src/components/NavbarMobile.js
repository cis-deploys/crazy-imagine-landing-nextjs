import React, { useState } from "react"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles"

// COMPONENTS
import LanguageModal from "./LanguageModal"

import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  Typography,
} from "@mui/material"
import { Menu } from "@mui/icons-material"
import {
  faHouse,
  faBars,
  faCode,
  faBlog,
  faLaptopCode,
  faPhone,
  faXmark,
  faFlag,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// HOOKS HELPERS
import { colorsIconos, colors } from "../helpers/navbarColors"
import useScroll from "../hooks/useScroll"

// STATIC
import CrazyImageLogo from "../images/crazy-imagine-icon.svg"
import {
  CONTACT,
  HOME,
  PROJECTS,
  WORK_WITH_US,
  ABOUT,
  BLOG,
} from "../navigation/sitemap"
import Link from "next/link"

const useStyles = makeStyles(theme => ({
  container: props => ({
    transition: "background 300ms ease",
    boxShadow: "none",
    backgroundColor: props.scroll ? "transparent" : "rgba(25, 49, 116, 0.87)",
    [theme.breakpoints.down("md")]: {
      padding: "0px 0px 0px 19px",
    },
  }),
  navbarMobileIcons: props => ({
    fontSize: 50,
    color: props.scroll ? props.iconsVariant : "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  }),
  navbarLogo: {},
  navbarMobileLogo: {
    width: 140,
    height: 73,
  },
  resetLink: {
    lineHeight: 2.5,
    color: "white",
    "&:hover": {
      color: "#67DAFF",
      textDecoration: "none",
    },
  },
  textLink: {
    fontFamily: "HindVadodara",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "130%",
    letterSpacing: "0.02em",
  },
  drawer: {
    width: "100%",
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      boxSizing: "border-box",
      backgroundColor: "#193174",
    },
  },
  btn: {
    "& .MuiButtonBase-root": {
      padding: "8px",
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: "-20px",
      marginLeft: "1px",
    },
  },
  list: {
    width: "100%",
    backgroundColor: "#193174",
  },
  hDrawer: {
    justifyContent: "space-beetwen",
  },
  navbarMobileResponsive: {
    display: "flex",
    width: "100%",
    height: "5.5em",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      height: "3em",
    },
  },
}))

const drawerWidth = "100%"
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}))

const icons = [
  <FontAwesomeIcon icon={faHouse} size="lg" />,
  <FontAwesomeIcon icon={faBars} size="lg" />,
  <FontAwesomeIcon icon={faCode} size="lg" />,
  <FontAwesomeIcon icon={faBlog} size="lg" />,
  <FontAwesomeIcon icon={faLaptopCode} size="lg" />,
  <FontAwesomeIcon icon={faPhone} size="lg" />,
  <FontAwesomeIcon icon={faFlag} size="lg" />,
]

export const NavbarMobile = ({
  variant = "secondary",
  variantIcons = "secondary",
}) => {
  const [open, setOpen] = useState(false)
  const linkVariant = colors(variant)
  const iconsVariant = colorsIconos(variantIcons)
  const { t } = useTranslation()

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(!open)
  }
  const { scroll } = useScroll()
  const classes = useStyles({
    scroll,
    linkVariant,
    iconsVariant,
  })

  return (
    <>
      <AppBar
        color="transparent"
        position="fixed"
        className={classes.container}
      >
        <Toolbar>
          <Box className={classes.navbarMobileResponsive}>
            <Link href={`${HOME}`}>
              <a>
              <Image
                src={CrazyImageLogo}
                alt="logo"
                className={classes.navbarLogo}
                style={{ width: "100%", height: "100%" }}
              />
              </a>
            </Link>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={classes.btn}
              edge="start"
              sx={{ p: 8, mr: 2, ...(open && { display: "none" }) }}
            >
              <Menu className={classes.navbarMobileIcons} />
            </IconButton>
          </Box>
        </Toolbar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader style={{ justifyContent: "space-between" }}>
            <Link href={`${HOME}`} >
              <a onClick={handleDrawerClose}>
              <Image
                src={CrazyImageLogo}
                alt="ss"
                style={{ width: "100%", height: "100%" }}
              />
              </a>
            </Link>
            <LanguageModal />
            <IconButton onClick={handleDrawerClose}>
              <FontAwesomeIcon icon={faXmark} inverse />
            </IconButton>
          </DrawerHeader>

          <Divider style={{ backgroundColor: "white", opacity: 0.7 }} />
          <List onClick={handleDrawerClose} className={classes.list}>
            {[
              <Link
                className={classes.resetLink}
                style={{ textDecoration: "none" }}
                href={`${HOME}`}
              >
                <a>
                <Typography className={classes.textLink}>
                  {t("common_button_home")}
                </Typography>
                </a>
              </Link>,
              <Link
                className={classes.resetLink}
                style={{ textDecoration: "none" }}
                href={`${ABOUT}`}
              >
                <a>
                <Typography className={classes.textLink}>
                  {t("common_button_about")}
                </Typography>
                </a>
              </Link>,
              <Link
                className={classes.resetLink}
                style={{ textDecoration: "none" }}
                href={`${PROJECTS}`}
              >
                <a>
                <Typography className={classes.textLink}>
                  {t("common_button_services")}
                </Typography>
                </a>
              </Link>,
              <Link
                className={classes.resetLink}
                style={{ textDecoration: "none" }}
                href={`${BLOG}`}
              >
                <a>
                <Typography className={classes.textLink}>
                  {t("common_button_blog")}
                </Typography>
                </a>
              </Link>,
              <Link
                className={classes.resetLink}
                style={{ textDecoration: "none" }}
                href={`${WORK_WITH_US}`}
              >
                <a>
                <Typography
                  style={{ textDecoration: "none" }}
                  className={classes.textLink}
                >
                  {t("common_button_work_with_us")}
                </Typography>
                </a>
              </Link>,
              <Link
                className={classes.resetLink}
                style={{ textDecoration: "none" }}
                href={`${CONTACT}`}
              >
                <a>
                <Typography className={classes.textLink}>
                  {t("common_button_contact_us")}
                </Typography>
                </a>
              </Link>,
              <LanguageModal />,
            ]?.map((text, index) => (
              <ListItem button key={index} alignItems="center">
                <ListItemIcon className={classes.resetLink}>
                  {icons[index]}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
    </>
  )
}

export default NavbarMobile