import React from 'react'
import { Box,  Typography } from "@mui/material"
import { makeStyles } from "@mui/styles";
import littleImage from "../../public/littleTallerLogo.webp"
import clientifyImage from "../../public/clientifyLogo.webp"
import motorennImage from "../../public/motorennLogo.webp"
import EmpowerHR from "../../public/EmpowerHR-Logo.webp"
import Sirge from "../../public/Sirge-Logo.webp"
import orderingImage from "../../public/orderingLogo.webp"
import piggyImage from "../../public/piggyBackLogo.webp"
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { StyleComponent } from "./StyleComponent"

const useStyles = makeStyles(theme => ({
    section: {
      padding: "50px 43px",
      backgroundColor:"white",
    },
    container: {
      display: "flex",
      width: "100%",
      minHeight: "100px",
      justifyContent: "space-around",
      alignItems: "flex-end",
      gap: "40px",
      padding: "0 2%",
      paddingBottom: "4%",
      flexWrap: "nowrap",
      [theme.breakpoints.between(0, 960)]: {
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        gap: "20px"
      },
    },
    containerImage: {
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.between(0, 960)]: {
        width: "40%",
        marginTop: "10px",
      }
    },
    logo: {
      width: "100%",
      height: "auto",
      objectFit: 'contain',
    },
}))

const Partners = () => {
    const classes = useStyles()
    const classesComponent = StyleComponent()
    const { t } = useTranslation("common");

  return (
    <Box className={classes.section}>
      <Typography className={classesComponent.titleBlue}>
        {t("home_partners_title")}
      </Typography>
      <Box className={classes.container}>
        <Box className={classes.containerImage}>
              <Image
                  className={classes.logo}
                  src={littleImage}
                  alt='Little Taller logo'
                  width={150}
                  height={90}
                  layout='fixed'
                  quality={100}
                  priority={ false } 
              /> 
        </Box>
        <Box className={classes.containerImage}>
              <Image
                  className={classes.logo}
                  src={orderingImage}
                  alt='Ordering Logo'
                  width={279}
                  height={62}
                  layout='fixed'
                  quality={100}
                  priority={ false } 
              /> 
        </Box>
        <Box className={classes.containerImage}>
              <Image
                  className={classes.logo}
                  src={motorennImage}
                  alt='Motorenn logo'
                  width={85}
                  height={85}
                  layout='fixed'
                  quality={100}
                  priority={ false } 
              /> 
        </Box>
        <Box className={classes.containerImage}>
              <Image
                  className={classes.logo}
                  src={piggyImage}
                  alt='Piggyback logo'
                  width={71}
                  height={85}
                  layout='fixed'
                  quality={100}
                  priority={ false } 
              /> 
        </Box>
      </Box>
      <Box className={classes.container}>
      <Box className={classes.containerImage}>
              <Image
                  className={classes.logo}
                  src={clientifyImage}
                  alt='Clientify logo'
                  width={280}
                  height={66}
                  layout='fixed'
                  quality={100}
                  priority={ false } 
              /> 
        </Box>
        <Box className={classes.containerImage}>
              <Image
                  className={classes.logo}
                  src={EmpowerHR}
                  alt='EmpowerHR logo'
                  width={280}
                  height={85}
                  layout='fixed'
                  quality={100}
                  priority={ false } 
              /> 
        </Box>
        <Box className={classes.containerImage}>
              <Image
                  className={classes.logo}
                  src={Sirge}
                  alt='Sirge logo'
                  width={280}
                  height={66}
                  layout='fixed'
                  quality={100}
                  priority={ false } 
              /> 
        </Box>
      </Box>
    </Box>
  )
}

export default Partners
