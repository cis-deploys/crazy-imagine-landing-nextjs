import React, { useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useIntersection } from "../hooks/useIntersection"
import { makeStyles } from "@mui/styles"
import { Card, CardContent, Typography } from "@mui/material"

const useStyles = makeStyles(theme => ({
  // title: {
  //   fontFamily: "Nexa Bold",
  //   fontStyle: "normal",
  //   fontWeight: "700",
  //   width: "150px",
  //   fontSize: "28px",
  //   lineHeight: "28px",
  //   textAlign: "center",
  //   whiteSpace: "pre-line",
  //   color: "#193174",
  //   [theme.breakpoints.up("xl")]: {
  //     width: "200px",
  //     fontSize: "30px",
  //     lineHeight: "30px",
  //   },
  //   [theme.breakpoints.down("md")]: {
  //     width: "105px",
  //     fontSize: "12px",
  //     lineHeight: "12px",
  //   },
  //   [theme.breakpoints.down("sm")]: {
  //     width: "65px",
  //     fontSize: "12px",
  //     lineHeight: "12px",
  //   },
  // },
  cardContainer: {
    visibility: "hidden",
  },
  cardContainer2: {
    animation: `$myEffectos 2000ms`,
    backgroundColor: "#FFFFFF",
    boxShadow: "10px 10px 100px 3px rgba(0, 0, 0, 0.06)",
    borderRadius: "14px",
  },
  "@keyframes myEffectos": {
    "0%": {
      opacity: 0,
    },
    "50%": {
      opacity: 0.5,
    },
    "100%": {
      opacity: 1,
    },
  },
  cardContent: {
    width: "314px",
    height: "185px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "27px",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: "220px",
      height: "130px",
      gap: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "154px",
      height: "91px",
      gap: "12px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "200px",
      height: "110px",
      gap: "12px",
    },
  },
  cardIcon: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "27px",
    lineHeight: "27px",
    textAlign: "center",
    color: "#27AAE1",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      lineHeight: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      lineHeight: "15px",
    },
  },
}))

const HomeCard = ({ title, icon }) => {
  const classes = useStyles()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")

  return (
    <Card
      ref={ref}
      className={isVisible ? classes.cardContainer2 : classes.cardContainer}
    >
      <CardContent className={classes.cardContent}>
        <FontAwesomeIcon icon={icon} className={classes.cardIcon} />
        <Typography className={'title-card'}>{title}</Typography>
      </CardContent>
    </Card>
  )
}

export default HomeCard
