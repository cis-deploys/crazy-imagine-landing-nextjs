import React from "react"
import { Box, Typography, Button } from "@mui/material"
import { useTranslation } from 'next-i18next'
import Image from "next/image"
import { makeStyles } from "@mui/styles"
import { StyleComponent } from "./StyleComponent"

const useStyles = makeStyles(theme => ({
  backgroundIn: props => ({
    backgroundColor: "#27AAE1",
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: "14px",
    overflow: "hidden",
    height: props.little ? "332px" : "530px",
    [theme.breakpoints.down("md")]: {
      height: props.little ? "290px" : "332px",
      paddingTop: "10px",
      marginTop: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
      height: props.little ? "312px" : "290px",
      background: props.little ? "#27AAE1" : "transparent",
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "50px",
      justifyContent: "center",
      height: "auto",
      width: "100%",
      background: props.little ? "#27AAE1" : "transparent",
      backgroundColor: "transparent",
    },
    [theme.breakpoints.between(450, 350)]: {
      height: props.little ? "257px" : "235px",
    },
    [theme.breakpoints.between(350, 0)]: {
      height: props.little ? "237px" : "215px",
    },
  }),
  backgroundOut: props => ({
    backgroundImage: `url('/headerBackground.webp')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    background: "linear-gradient(179.23deg, #193174 27.17%, #27AAE1 96.81%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: props.little ? "490px" : "688px",
    mixBlendMode: "normal",
    width: "100%",
    padding: "0px 60px",
    [theme.breakpoints.down("md")]: {
      height: props.little ? "350px" : "490px",
      padding: "0px 43px 0px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: "30px 15px 0px 20px",
      height: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      height: props.little ? "370px" : "350px",
      padding: "30px 15px 0px 20px",
    },
    [theme.breakpoints.between(0, 400)]: {
      flexDirection: "column",
      height: props.little ? "370px" : "350px",
    },
  }),
  textContainer: props => ({
    backgroundColor: "#27AAE1",
    display: "flex",
    flexDirection: "column",
    padding: "100px 0px 100px 100px",
    borderRadius: "14px",
    gap: "42px",
    justifyContent: props.little ? "center" : "flex-start",
    alignItems: "flex-start",
    [theme.breakpoints.down("lg")]: {
      padding: "70px 0px 50px 50px",
      gap: "32px",
      width: "auto",
      height: "auto",
    },
    [theme.breakpoints.down("md")]: {
      padding: "20px 0px 50px 50px",
      gap: "32px",
      width: "auto",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "5px 10px 20px 10px",
      width: "auto",
      height: "auto",
      gap: "22px",
      background: props.little ? "#27AAE1" : "transparent",
    },
  }),
  imgContainer: props => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    marginRight: props.little ? "100px" : "0px",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      marginRight: props.little ? "50px" : "0px",
      marginTop: "40px",
      height: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: props.little ? "50px" : "0px",
      marginBottom: "50px",
      height: "80%",
    },
  }),
  img: {
    animation: `$myEffect 2000ms`,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "200%",
      height: "70%",
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateX(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
  title: props => ({
    fontStyle: "normal",
    fontWeight: "900",
    fontFamily: "Nexa Bold",
    fontSize: props.little ? "70px" : "90px",
    lineHeight: "81px",
    color: "#FFFFFF",
    whiteSpace: "pre-line",
    [theme.breakpoints.down("lg")]: {
      lineHeight: "70px",
      fontWeight: "600",
      fontSize: "70px",
    },
    [theme.breakpoints.down("md")]: {
      lineHeight: "40px",
      fontWeight: "600",
      fontSize: "40px",
    },
    [theme.breakpoints.between(377, 600)]: {
      lineHeight: props.little ? "41px" : "30px",
      fontSize: props.little ? "21px" : "25px",
      fontWeight: 100,
    },
    [theme.breakpoints.between(0, 376)]: {
      lineHeight: props.little ? "31px" : "20px",
      fontSize: props.little ? "21px" : "20px",
      fontWeight: 100,
    },
  }),
  desc: props => ({
    display: props.btn ? "inherit" : "none",
    fontStyle: "normal",
    fontWeight: 700,
    fontFamily: "Nexa",
    fontSize: "20px",
    lineHeight: "20px",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: "#E3FFFF",
    [theme.breakpoints.down("lg")]: {
      fontSize: "15px",
      lineHeight: "inherit",
      width: "100%"
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      lineHeight: "inherit",
      width: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "8px",
      lineHeight: "inherit",
      width: "100%"
    },
  }),
  link: {
    textDecoration: "none",
    borderRadius: "100px"
  },
  contactButton: {
    background: "#797EF6 !important",
    margin: 0,
    "&:hover": {
      background: "#797EF6 !important",
    },
  },
}))

export const SectionHeader = ({ title, desc, btn, little, img, button }) => {
  const classes = useStyles({ little, btn })
  const classesComponent = StyleComponent()
  const { t } = useTranslation("common")

  return (
    <Box className={classes.backgroundOut}>
      <Box className={classes.backgroundIn}>
        <Box className={classes.textContainer}>
          <Typography className={classes.title} variant="h1" component="h1"><span>{title}</span></Typography>
          <Typography className={classes.desc}>{desc}</Typography>
          { button ? 
            <Button component="a" href={`#${button.refID}`}
            className={`${classesComponent.buttonComponent} ${classes.contactButton} `}
            >
              <span>{button.text}</span>
            </Button> 
            : ''
          }
        </Box>
        <Box className={classes.imgContainer}>
          <Image className={classes.img} src={img} width={307} height={407} alt="Header Section" quality={100} priority={ true }/>
        </Box>
      </Box>
    </Box>
  )
}

export default SectionHeader
