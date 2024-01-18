import { Box, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'

import { makeStyles } from "@mui/styles"
import { faRocket, faEye, faAward } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Logo from "../../public/Logo.webp"

  const useStyles = makeStyles(theme => ({
    containerMain: {
    display: "flex",
    width: "100%",
    height: "auto",
    justifyContent: "center",
    margin: "50px 0px",
    flexDirection: "column",
    },
    container: {
    display: "flex",
    height: "auto",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px 0px"
    },
    container2:{
    display: "flex",
    height: "auto",
    width: "100%",
    flexDirection: "row",
    margin: "10px 0px",
    justifyContent: "center",
    alignItems: "center",
    },
    containerImage: {
    display: "flex",
    width: "5%",
    height: "auto",
    justifyContent: "center",
    },
    containerText: {
    display: "flex",
    height: "auto",
    width: "35%",
    flexDirection: "column",
    margin: "10px 0px"
    },
    backgroundImage: {
    padding: "15px",
    backgroundColor: "#27AAE1",
    borderRadius: "200px",
    display: "flex",
    alignContent: "center"
    },
    icon: {
      width: "35px",
      height: "35px",
      [theme.breakpoints.down("xl")]: {
        width: "30px",
        height: "30px",
      },
      [theme.breakpoints.down("md")]: {
        width: "27px",
        height: "27px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "20px",
        height: "20px",
      },
      [theme.breakpoints.down("xs")]: {
        width: "15px",
        height: "15px",
      },
    },
    title: {
    fontSize: "30px",
    fontFamily: "Nexa Bold",
    marginTop: "30px",
    color: "#193174",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
    },
    text1: {
    fontFamily: "HindVadodara",
    fontSize: "35px",
    color: "#193174",
    textAlign: "center",
    margin: "30px 0px",
    display: "flex",
    width: "45%",
    [theme.breakpoints.between(1280, 1550)]: {
      width: "50%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      fontSize: "22px",
    },
    },
    text2: {
      fontFamily: "HindVadodara",
      fontSize: "35px",
      color: "#193174",
      textAlign: "center",
      margin: "30px 0px",
      display: "flex",
      width: "30%",
      [theme.breakpoints.between(1280, 1550)]: {
        width: "40%",
      },
      [theme.breakpoints.down("lg")]: {
        width: "50%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "70%",
        fontSize: "20px",
      },
    },
    text3: {
    fontStyle: "normal",
    fontFamily: "Roboto,sans-serif",
    fontSize: "20px",
    lineHeight: "25px",
    textAlign: "left",
    width: "40%",
    padding: "30px 0px",
    [theme.breakpoints.between(1280, 1550)]: {
      width: "50%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      fontSize: "15px",
    },
    },
    subtitle: {
    fontSize: "25px",
    fontFamily: "Nexa Bold",
    marginTop: "20px",
    color: "#193174",
    display: "flex",
    textAlign: "left",
      [theme.breakpoints.down("sm")]: {
          fontSize: "15px",
      },
    },
    text4: {
    fontStyle: "normal",
    fontFamily: "Roboto,sans-serif",
    fontSize: "20px",
    lineHeight: "25px",
    textAlign: "left",
    paddingTop: "20px",
    [theme.breakpoints.between(1280, 1550)]: {
      width: "50%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      fontSize: "15px",
    },
    }
  }))

const MissionComponent = () => {
    const classes = useStyles()

  return (
    <Box className={ classes.containerMain }>
        <Box className={ classes.container }>

        <Box className={ classes.backgroundImage}>
            <FontAwesomeIcon icon={faRocket} size="lg" color='#193174' className={ classes.icon } />
        </Box >
        <Typography className={ classes.title }>
        Mission Statement
        </Typography>

        <Typography className={ classes.text1 }>
          Design and develop technology that improves the lives of its users, while providing an exceptionally high level of service to our clients.
        </Typography>

        </Box>

        <Box className={ classes.container } >

        <Box className={ classes.backgroundImage}>
            <FontAwesomeIcon icon={faEye} size="lg" color='#193174' className={ classes.icon } />
        </Box >
        <Typography className={ classes.title }>
        Vision Statement
        </Typography>

        <Typography className={ classes.text2 }>
        Technology makes the world a better place to live and improves the lives of its users.
        </Typography>

        <Typography className={ classes.text3 }>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum nisi lorem, ut congue metus efficitur id. 
        Nunc id quam sed lectus bibendum sodales. Aenean in facilisis turpis, vel tempor velit. Aliquam semper dolor eu aliquet cursus.
        Nulla sodales nisi purus, at laoreet erat tincidunt at. Proin convallis purus a condimentum ornare. Donec suscipit mauris sed vulputate aliquet. 
        Phasellus gravida justo urna, id congue lacus dapibus quis.
        <br/>
        <br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum nisi lorem, ut congue metus efficitur id. 
        Nunc id quam sed lectus bibendum sodales. Aenean in facilisis turpis, vel tempor velit. Aliquam semper dolor eu aliquet cursus.
        Nulla sodales nisi purus, at laoreet erat tincidunt at. Proin convallis purus a condimentum ornare. Donec suscipit mauris sed vulputate aliquet. 
        Phasellus gravida justo urna, id congue lacus dapibus quis.
        <br/>
        <br/>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum nisi lorem, ut congue metus efficitur id. 
        Nunc id quam sed lectus bibendum sodales. Aenean in facilisis turpis, vel tempor velit. Aliquam semper dolor eu aliquet cursus.
        Nulla sodales nisi purus, at laoreet erat tincidunt at. Proin convallis purus a condimentum ornare. Donec suscipit mauris sed vulputate aliquet. 
        Phasellus gravida justo urna, id congue lacus dapibus quis.
        </Typography>
        </Box>

        <Box className={ classes.container }>

        <Box className={ classes.backgroundImage}>
            <FontAwesomeIcon icon={faAward} size="lg" color='#193174' className={ classes.icon } />
        </Box >
        <Typography className={ classes.title }>
        Company Values
        </Typography>

        <Box className={ classes.container2 } >

          <Box className={ classes.containerImage }>
          <Image src={Logo} width={80} height={80} alt='image-mision' quality={100}/>
          </Box>

          <Box className={ classes.containerText }>
          <Typography className={ classes.subtitle }>
            Hard Work
          </Typography>

          <Typography className={ classes.text4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum nisi lorem, ut congue metus efficitur id. 
          Nunc id quam sed lectus bibendum sodales. Aenean in facilisis turpis, vel tempor velit. Aliquam semper dolor eu aliquet cursus.
          Nulla sodales nisi purus, at laoreet erat tincidunt at. Proin convallis purus a condimentum ornare. Donec suscipit mauris sed vulputate aliquet. 
          Phasellus gravida justo urna, id congue lacus dapibus quis.
          </Typography>
          </Box>

        </Box>

        </Box>
    </Box>
  )
}

export default MissionComponent
