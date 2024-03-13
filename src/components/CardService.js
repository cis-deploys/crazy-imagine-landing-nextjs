import React, { useEffect, useRef, useState } from "react"
import { makeStyles } from "@mui/styles"
import { Typography, Button, CardContent } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useIntersection } from "../hooks/useIntersection"
import { useTranslation } from "next-i18next"
import { StyleComponent } from "./StyleComponent"
import { useRouter } from "next/router"

const useStyles = makeStyles(theme => ({
  list: {
    margin: "20px 40px 46px",
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      margin: "20px 30px 31px",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "20px",
    },
  },
  listItem: {
    marginBottom: "20px",
    fontfamily: "HindVadodara",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "22px",
    lineHeight: "140%",
    letterspacing: "0.02em",
    color: "#193174",
    "&::marker": {
      color: "#797EF6",
    },
    [theme.breakpoints.down("xl")]: {
      marginBottom: "14px",
      fontSize: "18px",
    },
    [theme.breakpoints.down("lg")]: {
      marginBottom: "14px",
      fontSize: "14px",
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
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    fontFamily: "Nexa bold",
    letterSpacing: "0.1em",
    lineHeight: "140%",
    color: "#797EF6",
    background: "none",
    paddingLeft: "20px",
    display: "inline-block",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      lineHeight: "12px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      lineHeight: "10px",
    },
  },
  textInfoCard: {
    fontFamily: "HindVadodara",
    fontSize: "20px",
    fontWeight: 400,
    letterSpacing: "0.02rem",
    lineHeight: "24px",
    color: "#193174",
    paddingTop: "20px",
    paddingBottom: "10px",
  },
}))
const CardService = ({
  icon = null,
  title,
  contentList,
  img,
  typeInfo = "ul",
  description = null,
  titleCss2 = null,
  img2,
}) => {
  const router = useRouter()
  const classes = useStyles()
  const classesComponent = StyleComponent()
  const ref = useRef()
  const { t } = useTranslation("common")
  const isVisible = useIntersection(ref, "0px")
  const [isListVisible, setListVisible] = useState(false)
  const [showSecondImage, setShowSecondImage] = useState(false)
  const [hiddeImageInServices, setHiddeImageInServices] = useState(false)

  const titleCss = titleCss2
    ? classesComponent.titleCard2
    : classesComponent.titleCard

  useEffect(() => {
    if (router.pathname.includes('services')) {
      console.log("estamos en services")

      setHiddeImageInServices(true)
    }
  },[router])

  return (
    <CardContent
      ref={ref}
      className={
        isVisible
          ? classesComponent.containerServices2
          : classesComponent.cardContainer
      }
    >
      { !hiddeImageInServices && (
      <>
        {showSecondImage && img2 ? (
        <img src={img2} alt="Image" className={classes.icon} />
      ) : (
        <img src={img} alt="Image" className={classes.icon} />
      )}
      </>
      )}
      

      {icon && <FontAwesomeIcon icon={icon} className={classes.icon} />}

      <Typography className={titleCss}>{title}</Typography>

      { hiddeImageInServices && (
      <>
      {typeInfo && (
        <ul
          className={classes.list}
          style={{ display: isListVisible ? "block" : "none" }}
        >
          {contentList?.map((value, index) => (
            <li key={index} className={classes.listItem}>
              {value}
            </li>
          ))}
        </ul>
      )}
      </>
      )}

      {description && (
        <Typography
          className={classes.textInfoCard}
          style={{ display: isListVisible ? "block" : "none" }}
        >
          {description}
        </Typography>
      )}

      <Button
        className={classes.readMoreButton}
        onClick={() => {
          setListVisible(!isListVisible)
          setShowSecondImage(!showSecondImage)
        }}
      >
        {isListVisible ? t("readLess") : t("readMore")}
      </Button>
    </CardContent>
  )
}
export default CardService