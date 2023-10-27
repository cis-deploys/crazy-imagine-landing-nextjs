import React, { useRef } from 'react'
import { Box,  Typography } from "@mui/material"
import { makeStyles } from "@mui/styles";
import littleImage from "../../public/littleTallerLogo.webp"
import vettedvizImage from "../../public/vettedvizLogo.webp"
import clientifyImage from "../../public/clientifyLogo.svg"
import motorennImage from "../../public/motorennLogo.webp"
import orderingImage from "../../public/orderingLogo.webp"
import piggyImage from "../../public/piggyBackLogo.webp"
import { useIntersection } from "../hooks/useIntersection"
import { useTranslation } from "react-i18next"
import Image from 'next/image'

const useStyles = makeStyles(theme => ({
    section: {
      padding: "50px 0",
      backgroundColor:"white",
    },
    container: {
      display: "flex",
      width: "100%",
      minHeight: "100px",
      justifyContent: "space-around",
      alignItems: "flex-end",
      gap: "50px",
      padding: "0 2%",
      paddingBottom: "4%",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
        padding: "0 5%",
      },
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        alignItems: "center",
        padding: "0 5%",
      },
    },
    containerImage: {
      display: "flex",
      justifyContent: "center",
    },
    title: {
      visibility: "hidden",
    },
    title2: {
      animation: `$myEffectTitle 2000ms`,
      fontFamily: "Nexa Bold",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "50px",
      textAlign: "center",
      color: "#193173",
      lineHeight: "40px",
      margin: "50px 0",
      [theme.breakpoints.down("sm")]: {
        margin: "30px 0",
        fontSize: "40px",
      },
      [theme.breakpoints.down("xs")]: {
        margin: "20px 0",
        fontSize: "30px",
      },
    },
    "@keyframes myEffectTitle": {
      "0%": {
        opacity: 0,
        transform: "translateY(-200%)",
      },
      "100%": {
        opacity: 1,
        transform: "translateY(0)",
      },
    },
    logo: {
      width: "100%",
      height: "auto",
      objectFit: 'contain'
    }
}))

const Partners = () => {
    const classes = useStyles()
    const ref = useRef()
    const isVisible = useIntersection(ref, "0px")
    const { t } = useTranslation();

  return (
    <Box className={classes.section}>
      <Typography ref={ref} className={isVisible ? classes.title2 : classes.title}>
        {t("home_partners_title")}
      </Typography>
      <Box className={classes.container}>
        <Box className={`${classes.containerImage}`}>
              <Image
                  className={`${classes.logo}`}
                  src={littleImage}
                  alt='Little Taller logo'
                  width={85}
                  height={85}
                  layout='fixed'
              /> 
        </Box>
        <Box className={`${classes.containerImage}`}>
              <Image
                  className={`${classes.logo}`}
                  src={orderingImage}
                  alt='Ordering Logo'
                  width={279}
                  height={62}
                  layout='fixed'
              /> 
        </Box>
        <Box className={`${classes.containerImage}`}>
              <Image
                  className={`${classes.logo}`}
                  src={piggyImage}
                  alt='Piggyback logo'
                  width={71}
                  height={85}
                  layout='fixed'
              /> 
        </Box>
      </Box>
      <Box className={classes.container}>
        <Box className={`${classes.containerImage}`}>
              <Image
                  className={`${classes.logo}`}
                  src={clientifyImage}
                  alt='Clientify logo'
                  width={280}
                  height={66}
                  layout='fixed'
              /> 
        </Box>
        <Box className={`${classes.containerImage}`}>
              <Image
                  className={`${classes.logo}`}
                  src={motorennImage}
                  alt='Motorenn logo'
                  width={85}
                  height={85}
                  layout='fixed'
              /> 
        </Box>
        <Box className={`${classes.containerImage}`}>
              <Image
                  className={`${classes.logo}`}
                  src={vettedvizImage}
                  alt='Vettedviz logo'
                  width={280}
                  height={106}
                  layout='fixed'
              /> 
        </Box>
      </Box>
    </Box>
  )
}

export default Partners
