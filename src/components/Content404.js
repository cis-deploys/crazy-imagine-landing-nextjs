import React from 'react'
import { useTranslation } from "react-i18next"
import Image from "next/image"

import { Box, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

//import Image404 from '../../public/Image404.svg'

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
  },
  title: {
    fontSize: 75,
    fontWeight: "bold",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: 50,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 35,
    },    
  },
  titleSecondary: {
    fontSize: 65,
    fontWeight: "bold",
    textAlign: "initial",
    fontFamily: 'Nexa Bold',
    [theme.breakpoints.down("lg")]: {
      fontSize: 40,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 40,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
    },
  },
  container: {
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    background: ` linear-gradient(123deg, rgba(40,64,128,1) 0%, rgba(39,170,225,1) 31%,transparent 75%),
    url('/Background404.svg')
    `,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      alignItems: "center",
      backgroundPosition: 'top',
      background: ` linear-gradient(123deg, rgba(40,64,128,1) 0%, rgba(39,170,225,1) 31%,transparent 75%)`,
    },
  },
  ContainerTexts: {
    display: "flex",
    flexDirection: "column",
    textAlign: 'center',
    alignContent: "center",
    padding: '0 0 0 200px',
    boxSizing: 'border-box',
    [theme.breakpoints.down("lg")]: {
      padding: '0 0 0 150px',
    },
    [theme.breakpoints.down("md")]: {
      padding: '0 0 0 100px',
    },
    [theme.breakpoints.down("sm")]: {
      padding: '0 0 0 0px',
    },
  }
}))

const Content404 = () => {
    const { t } = useTranslation()
    const classes = useStyles()

  return (
<Box className={classes.container}>
    <Box className={classes.ContainerTexts} >
        {/* <Image src={Image404} className={classes.navbarLogo} alt="imagen-404"/> */}
        <Typography variant="h3" className={classes.title}>404</Typography>
        <Typography variant="h3" className={classes.titleSecondary}>{t("404-title")}</Typography>
    </Box>
</Box>
  )
}

export default Content404
