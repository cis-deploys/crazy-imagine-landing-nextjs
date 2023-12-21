import React from "react"
import { Box, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles"
import TitleSection from "./TitleSection"
import mainImage from "../../public/Group619.svg"
import Image from "next/image"

const useStyles = makeStyles(theme => ({
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
    [theme.breakpoints.up("xl")]: {
      fontSize: "60px",
      lineHeight: "60px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "41px",
      lineHeight: "41px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      lineHeight: "25px",
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
    [theme.breakpoints.up("xl")]: {
      fontSize: "50px",
      lineHeight: "50px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "31px",
      lineHeight: "31px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      lineHeight: "15px",
    },
  },
}))

const MeetTeamSection = ({members}) => {
  const classes = useStyles()
  const { t } = useTranslation()
console.log(members)
  return (
    <Box className={classes.container}>
      
      {members.map(e => (
        <Grid container justifyContent="center" style={{display: 'relative'}} key={e.order}>
          {e.order % 2 === 0? 
            <>
            <Grid md={5} sm={6} style={{padding: '15px', textAlign: 'end'}} item >
              <Box style={{height: '45%'}}/>
              <Box style={{height: '55%'}}>
                <Typography className={classes.title2}>{e.name}</Typography>
                <Typography className={classes.blueTitle2} >{e.role}</Typography>
              </Box>  
            </Grid>
            <Grid md={5} sm={6} style={{padding: '5px', textAlign: 'start'}} item >
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
            <Grid md={5} sm={6} style={{padding: '5px', textAlign: 'end'}} item >
              <Image
                src={e.avatar[0] ? e.avatar[0].url: mainImage}
                width={314}
                height={357}
                alt="Title"
              />
            </Grid>
            <Grid md={5} sm={6} style={{padding: '15px', textAlign: 'start'}} item >
              <Box style={{height: '45%'}}/>
              <Box style={{height: '55%'}}>
                <Typography className={classes.title2} >{e.name}</Typography>
                <Typography className={classes.blueTitle2}>{e.role}</Typography>
              </Box>  
            </Grid>
          </>
        }
        </Grid>
      ))}
        
      
    </Box>
  )
}

export default MeetTeamSection