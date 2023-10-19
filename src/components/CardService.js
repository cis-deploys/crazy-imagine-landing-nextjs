import React, { useRef, useState } from "react";
import { makeStyles } from "@mui/styles"
import { Box, Typography, Button } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useIntersection } from "../hooks/useIntersection"

const useStyles = makeStyles(theme => ({
  container: {
    visibility: "hidden",
  },
  container2: {
    animation: `$myEffect 2000ms`,
    width: "470px",
    height: "min-content",
    display: "flex",
    flexDirection: "column",
    justfiyContent: "center",
    background: "#FFFFFF",
    boxShadow: "10px 10px 100px 3px rgba(0, 0, 0, 0.06)",
    borderRadius: "14px",
    [theme.breakpoints.down("md")]: {
      width: "45%",
      height: 'min-content !important'
    },
    [theme.breakpoints.down("sm")]: {
      width: "45%",
      height: 'min-content !important'
    },
    [theme.breakpoints.down("xs")]: {
      width: "65%",
      height: 'min-content !important'
      
    },
    [theme.breakpoints.between(0, 420)]: {
      width: "65%",
      height: 'min-content !important'
    },
    [theme.breakpoints.between(0, 380)]: {
      width: "75%",
      height: 'min-content !important'
    },
   
  },
  
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "28px",
    lineHeight: "28px",
    textAlign: "center",
    color: "#193174",
    marginTop: "27px",
    whiteSpace: "pre-line",
    minHeight: "54px",
    [theme.breakpoints.down("md")]: {
      fontSize: "21px",
      lineHeight: "21px",
      marginTop: "21px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      lineHeight: "18px",
      marginTop: "18px",
    },
  },
  list: {
    // marginBottom: "46px",
    // marginLeft: "41px",
    // marginRight: "40px",
    margin: "20px 40px 46px",
    textAlign: "justify",
    [theme.breakpoints.down("md")]: {
      // marginBottom: "31px",
      // marginLeft: "30px",
      // marginRight: "30px",
      margin: "20px 30px 31px"
    },
    [theme.breakpoints.down("sm")]: {
      // marginBottom: "20px",
      // marginLeft: "20px",
      // marginRight: "20px",
      margin: "20px"
    },
    [theme.breakpoints.down("xs")]: {
      // paddingLeft: "18px",
      // paddingRight: "22px",
      // padding: "20px 20px 0px"
      margin: "20px 20px 20px 0px"
    },
  },
  listItem: {
    marginBottom: "20px",
    fontfamily: "HindVadodara",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "140%",
    letterspacing: "0.02em",
    color: "#193174",
    "&::marker": {
      color: "#797EF6",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "14px",
      fontSize: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "12px",
      fontSize: "12px",
    },
  },
  icon: {
    marginTop: "32px",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "27px",
    lineHeight: "27px",
    textAlign: "center",
    color: "#27AAE1",
    [theme.breakpoints.down("md")]: {
      marginTop: "23px",
      fontSize: "21px",
      lineHeight: "21px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "18px",
      fontSize: "18px",
      lineHeight: "18px",
    },
  },
  readMoreButton: {
    border: "none",
    borderRadius: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    fontFamily: "Nexa, Helvetica",
    letterSpacing: "0.1em",
    lineHeight: "140%",
    color: "blue",
    background: "none",
    paddingLeft: "20px",
    paddingTop: "10px", 
    paddingBottom: "10px",
    display: "inline-block",
    width: "100%",
  
  },
 

}))
const CardService = ({ icon, title, contentList }) => {
  const classes = useStyles()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  const [isListVisible, setListVisible] = useState(false)
  return (
    <Box
      ref={ref}
      className={isVisible ? classes.container2 : classes.container}
    >
      <FontAwesomeIcon icon={icon} className={classes.icon} />
      <Typography className={classes.title}>{title}</Typography>
      <ul className={classes.list} style={{ display: isListVisible ? "block" : "none" }}>
        {contentList?.map((value, index) => (
          <li key={index} className={classes.listItem}>
            {value}
          </li>
        ))}
      </ul>
      <Button
        className={classes.readMoreButton}
        onClick={() => setListVisible(!isListVisible)}
      >
        {isListVisible ? "Read Less «" : "Read More »"}
      </Button>
    </Box>
  )
}
export default CardService