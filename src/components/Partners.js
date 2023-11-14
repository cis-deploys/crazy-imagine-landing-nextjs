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
      padding: "50px 43px",
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
      [theme.breakpoints.between(0, 960)]: {
        flexDirection: "row",
        alignItems: "center",
        padding: "0 20%",
        gap: "20px"
      },
    },
    containerImage: {
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.between(0, 960)]: {
      width: "50%"
      }
    },
    logo: {
      width: "100%",
      height: "auto",
      objectFit: 'contain',
    }
}))

const Partners = () => {
    const classes = useStyles()
    const ref = useRef()
    const isVisible = useIntersection(ref, "0px")
    const { t } = useTranslation();

  return (
    <Box className={classes.section}>
      <Typography ref={ref} className={isVisible ? 'title-blue' : 'title'}>
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
