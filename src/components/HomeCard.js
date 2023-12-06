import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { makeStyles } from "@mui/styles"
import { Card, CardContent, Typography } from "@mui/material"
import { StyleComponent } from "./StyleComponent"

const useStyles = makeStyles(theme => ({
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
  const classesComponent = StyleComponent()

  return (
    <Card className={classesComponent.cardContainerHome2}
    >
      <CardContent className={classesComponent.cardContentHome}>
        <FontAwesomeIcon icon={icon} className={classes.cardIcon} />
        <Typography className={classesComponent.titleCard}>{title}</Typography>
      </CardContent>
    </Card>
  )
}

export default HomeCard
