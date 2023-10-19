import * as React from "react"
import { useTranslation } from "react-i18next"
import Image from 'next/image'
import { Box, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

import Layout from "../components/layout"

import Background from '../../public/Background404.svg'
import Image404 from '../../public/Image404.svg'
import ContactSection from "../components/ContactSection"

const useStyles = makeStyles((theme)=>({
  navbarLogo: {
    width: '100%',
    height: 160,
    display: 'none',
    marginBottom: '20px',
    filter: 'drop-shadow(1px 1px 1px #0008)',
    [theme.breakpoints.down("sm")]: {
      height: 200,
      display: 'block'
    },
    [theme.breakpoints.down("xs")]: {
      height: 160,
    },
  },
  title: {
    fontSize: 75,
    fontWeight: "bold",
    textAlign: "center",    
  },
  titleSecondary: {
    fontSize: 65,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: 'Nexa Bold',
    [theme.breakpoints.down("md")]: {
      fontSize: 50,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 35,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
    }
  },
  container: {
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    background: ` linear-gradient(123deg, rgba(40,64,128,1) 0%, rgba(39,170,225,1) 31%,transparent 75%),url('/Background404.svg')`,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      backgroundPosition: 'top',
      background: ` linear-gradient(123deg, rgba(40,64,128,1) 0%, rgba(39,170,225,1) 31%,transparent 75%)`,
    },
  },
  ContainerTexts: {
    textAlign: 'center',
    padding: '0 0 0 530px',
    boxSizing: 'border-box',
    [theme.breakpoints.down("lg")]: {
      padding: '0 0 0 150px',
    },
    [theme.breakpoints.down("md")]: {
      padding: '0 0 0 130px',
    },
    [theme.breakpoints.down("sm")]: {
      padding: '0',
    },
  }
}))

const NotFoundPage = () => {
  const { t } = useTranslation()
  const classes = useStyles()
  return (
    <Layout>
    <Box className={classes.container}>
      <Box className={classes.ContainerTexts} >
        <Image src={Image404} className={classes.navbarLogo} alt="imagen-404" />
        <Typography variant="h3" className={classes.title}>404</Typography>
        <Typography variant="h3" className={classes.titleSecondary}>{t("404-title")}</Typography>
      </Box>
    </Box>
    </Layout>
  )
}

export default NotFoundPage
