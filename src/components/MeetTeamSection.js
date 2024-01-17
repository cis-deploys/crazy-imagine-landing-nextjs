import React from "react"
import { Box, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles"
import TitleSection from "./TitleSection"
import mainImage from "../../public/Group619.webp"
import Image from "next/image"

const useStyles = makeStyles(theme => ({
  gridContainer:{
    marginBottom: '70px',
    [theme.breakpoints.down("md")]: {
      marginBottom: '55px',
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: '25px',
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    height: "100%",
    marginTop: "20px",
    padding: "60px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
  },
  title2: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "58px",
    lineHeight: "58px",
    color: "#193174",
    alignSelf: "flex-start",
    height: "100%",
    [theme.breakpoints.up("xl")]: {
      fontSize: "70px",
      lineHeight: "70px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "35px",
      lineHeight: "35px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      lineHeight: "25px",
    },
    "@media (max-width: 335px)": {
      fontSize: "19px",
      lineHeight: "19px",
    },
  },
  blueTitle2: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: "40px",
    lineHeight: "40px",
    color: "#27AAE1",
    alignSelf: "flex-start",
    marginTop: "7px",
    [theme.breakpoints.up("xl")]: {
      fontSize: "50px",
      lineHeight: "50px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "31px",
      lineHeight: "31px",
      marginTop: "6px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      lineHeight: "15px",
      marginTop: "5px",
    },
  },
  textBox:{
    position: "absolute",
    bottom: 0,
    textAlign: "end",
    paddingBottom: "30px",
    right: "0",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      textAlign: "start",
      display: "fixed",
      position: "realtive",
      paddingBottom: "5px",
      letf: "0",
      marginTop: "10px",
    },
  }, 
  textBoxLeft:{
    position: "absolute",
    bottom: 0,
    textAlign: "start",
    paddingBottom: "30px",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      paddingBottom: "5px",
      width: "100%",
    },
  },
  contentLeft:{
    position: "relative",
    padding: '15px', 
    textAlign: 'end',
    marginRight: '25px',
    minHeight: "40px",
    minWidth: "40px",
    [theme.breakpoints.down("md")]: {
      textAlign: "start",
      marginRight: '1px',
      padding: '2px', 
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: '0px',
      padding: '3px',
      textAlign: "start",
      position: "relative",
      width: "100%",
      height: "100%"
    },
  },
  contentRight:{
    padding: '5px', 
    textAlign: 'start', 
    marginLeft: '25px',
    position: "relative",
    [theme.breakpoints.down("md")]: {
      marginLeft: '0px',
      padding: '3px',
    },
  },
  textRenponsiveRight:{
    "@media (max-width: 959px)": {
      display: "none",
    },
  },
  textRenponsiveSmallscreen:{
    position: "relative", 
    marginTop: "10px",
    marginBottom: '5px',
    width: "100%",
    "@media (min-width: 960px)": {
      display: "none",
    },
  },
}))

const MeetTeamSection = ({members}) => {
  const classes = useStyles()
  const { t } = useTranslation()
  members.sort((a, b) => a.id - b.id);

  return (
    <Box className={classes.container}>
      
      {members.map(e => (
        <Grid container justifyContent="center" key={e.id} className={classes.gridContainer}>
          {e.id % 2 === 0? 
            <>
            <Grid md={5} sm={6} item className={classes.contentLeft}>
              <div  className={`${classes.textBox}`} >
                <Box style={{height: '45%'}}/>
                <Box style={{height: '55%'}}>
                  <Typography className={classes.title2}>{e.name}</Typography>
                  <Typography className={classes.blueTitle2} >{e.role}</Typography>
                </Box> 
              </div>
            </Grid>
            <Grid md={5} sm={6} className={classes.contentRight} item >
              <Image
                src={e.avatar[0] ? e.avatar[0].url: mainImage}
                width={314}
                height={357}
                alt="Title"
              />
            </Grid>
          </>
        : 
          <>
            <Grid md={5} sm={6} className={classes.textRenponsiveSmallscreen} item >
              <div className={classes.textBoxLeft}>
                <Box style={{height: '45%'}}/>
                <Box style={{height: '55%'}}>
                  <Typography className={classes.title2}>{e.name}</Typography>
                  <Typography className={classes.blueTitle2}>{e.role}</Typography>
                </Box>  
              </div>
            </Grid> 
            <Grid md={5} sm={6} item className={classes.contentLeft} style={{right: '0'}}>
              <Image
                src={e.avatar[0] ? e.avatar[0].url: mainImage}
                width={314}
                height={357}
                alt="Title"
              />
            </Grid>
            <Grid md={5} sm={6} item className={`${classes.contentRight} ${classes.textRenponsiveRight}`}>
              <div className={classes.textBoxLeft}>
                <Box style={{height: '45%'}}/>
                <Box style={{height: '55%'}}>
                  <Typography className={classes.title2}>{e.name}</Typography>
                  <Typography className={classes.blueTitle2}>{e.role}</Typography>
                </Box> 
              </div>
            </Grid> 
          </>
        }
        </Grid>
      ))}
        
      
    </Box>
  )
}

export default MeetTeamSection