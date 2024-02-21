import React, { useState } from "react"
import Image from "next/image"
import { useTranslation } from "next-i18next"
import { makeStyles } from "@mui/styles"

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

import { colorsIconos, colors } from "../helpers/navbarColors"
import useScroll from "../hooks/useScroll"

import CrazyImageLogo from "../../public/crazy-imagine-icon.svg"
import {
  CONTACT,
  HOME,
  PROJECTS,
  SERVICES,
  WORK_WITH_US,
  ABOUT,
  BLOG,
} from "../navigation/sitemap"
import Link from "next/link"

const useStyles = makeStyles(theme => ({
  container: props => ({
    transition: "background 300ms ease",
    boxShadow: "none",
    backgroundColor: props.scroll ? props.color : "rgba(25, 49, 116, 0.87)",
    [theme.breakpoints.down("xs")]: {
      backgroundColor: props.scroll ? props.color : "rgba(25, 49, 116, 0.87)",
    },
  }),
  navbarMobileIcons: props => ({
    fontSize: 50,
    color: props.scroll ? props.iconsVariant : "white",
    [theme.breakpoints.down("md")]: {
      fontSize: 30,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
    },
  }),
  navbarLogo: {
    marginLeft: "25px",
    marginTop: "15px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "10px",
    },
  },
  navbarMobileLogo: {
    width: 140,
    height: 73,
  },
  resetLink: {
    lineHeight: 2.5,
    color: "white",
    textDecoration: "none !important",
    "&:hover": {
      color: "#67DAFF",
      textDecoration: "none !important",
    },
  },
  textLink: {
    fontFamily: "HindVadodara",
    fontStyle: "normal",
    color: "white",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "130%",
    letterSpacing: "0.02em",
    textDecoration: "none !important",
    "&:hover": {
      color: "#67DAFF",
      textDecoration: "none !important",
    },
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
      marginRight: "2px",
    },
    [theme.breakpoints.down("md")]: {
      marginRight: "0px",
      marginLeft: "1px",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: "0px",
      marginLeft: "1px",
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: "0px",
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
    [theme.breakpoints.down("sm")]: {
      height: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "3em",
    },
  },
  Crazy: {
    width: "100%",
    height: "100%",
  },
}))

const drawerWidth = "100%"
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}))

const icons = [
  <FontAwesomeIcon key="icon-faHouse" icon={faHouse} size="lg" />,
  <FontAwesomeIcon key="icon-faBars" icon={faBars} size="lg" />,
  <FontAwesomeIcon key="icon-faCode" icon={faCode} size="lg" />,
  <FontAwesomeIcon key="icon-faBlog" icon={faBlog} size="lg" />,
  <FontAwesomeIcon key="icon-faLaptopCode" icon={faLaptopCode} size="lg" />,
  <FontAwesomeIcon key="icon-faPhone" icon={faPhone} size="lg" />,
  <FontAwesomeIcon key="icon-faFlag" icon={faFlag} size="lg" />,
]

export const NavbarMobile = ({
  variant = "secondary",
  variantIcons = "secondary",
  color = "transparent",
}) => {
  const [open, setOpen] = useState(false)
  const linkVariant = colors(variant)
  const iconsVariant = colorsIconos(variantIcons)
  const { t } = useTranslation("common")

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
    color,
  })

  return (
    <>
      <AppBar color={color} position="fixed" className={classes.container}>
        <Toolbar>
          <Box className={classes.navbarMobileResponsive}>
            <Link href={`${HOME}`}>
              <a className={classes.navbarLogo}>
                <Image
                  src={CrazyImageLogo}
                  alt="logo"
                  width={230}
                  height={48}
                />
              </a>
            </Link>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={classes.btn}
              edge="start"
              sx={{ ...(open && { display: "none" }) }}
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
          <DrawerHeader
            style={{ justifyContent: "space-between", marginLeft: "15px" }}
          >
            <Link href={`${HOME}`}>
              <a onClick={handleDrawerClose}>
                <Image
                  src={CrazyImageLogo}
                  alt="ss"
                  className={classes.Crazy}
                />
              </a>
            </Link>
            <IconButton onClick={handleDrawerClose}>
              <FontAwesomeIcon icon={faXmark} inverse size="lg" />
            </IconButton>
          </DrawerHeader>

          <Divider style={{ backgroundColor: "white", opacity: 0.7 }} />
          <List onClick={handleDrawerClose} className={classes.list}>
            {[
              <Link key="navbar-link-home" href={`${HOME}`}>
                <a className={classes.resetLink}>
                  <Typography className={classes.textLink}>
                    {t("common_button_home")}
                  </Typography>
                </a>
              </Link>,
              <Link key="navbar-link-about" href={`${ABOUT}`}>
                <a className={classes.resetLink}>
                  <Typography className={classes.textLink}>
                    {t("common_button_about")}
                  </Typography>
                </a>
              </Link>,
              <Link key="navbar-link-projects" href={`${PROJECTS}`}>
                <a className={classes.resetLink}>
                  <Typography className={classes.textLink}>
                    {t("common_button_projects")}
                  </Typography>
                </a>
              </Link>,
              <Link key="navbar-link-services" href={`${SERVICES}`}>
                <a className={classes.resetLink}>
                  <Typography className={classes.textLink}>
                    {t("common_button_services")}
                  </Typography>
                </a>
              </Link>,

              <Link key="navbar-link-blog" href={`${BLOG}`}>
                <a className={classes.resetLink}>
                  <Typography className={classes.textLink}>
                    {t("common_button_blog")}
                  </Typography>
                </a>
              </Link>,

              <Link key="navbar-link-work-with-us" href={`${WORK_WITH_US}`}>
                <a className={classes.resetLink}>
                  <Typography
                    style={{ textDecoration: "none" }}
                    className={classes.textLink}
                  >
                    {t("common_button_work_with_us")}
                  </Typography>
                </a>
              </Link>,
              <Link key="navbar-link-contact" href={`${CONTACT}`}>
                <a className={classes.resetLink}>
                  <Typography className={classes.textLink}>
                    {t("common_button_contact_us")}
                  </Typography>
                </a>
              </Link>,
              <LanguageModal key="language-modal" />,
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
