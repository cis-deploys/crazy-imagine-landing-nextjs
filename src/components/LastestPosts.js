import React, { useRef } from "react"
import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles"
import BlogPost from "./BlogPost"
import { BLOG } from "../navigation/sitemap"
import { useIntersection } from "../hooks/useIntersection"
import Link from "next/link"

const useStyes = makeStyles(theme => ({
  title: {
    visibility: "hidden",
  },
  title2: {
    animation: `$myEffect 2000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "40px",
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: "78px",
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      lineWeight: "28px",
      marginTop: "55px",
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 60px 10px",
    gap: "23px",
    justifyContent: "center",
    backgroundColor: "#193174",
    backgroundImage: `url('/background.svg')`,
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
    height: "670px",
    [theme.breakpoints.down("md")]: {
      gap: "16px",
      padding: "0px 43px 30px"
    },
    [theme.breakpoints.down("xs")]: {
      gap: "16px",
      padding: "0px 15px 30px"
    },
  },
  link: {
    visibility: "hidden",
  },
  link2: {
    animation: `$myEffectos 5000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    textAlign: "center",
    lineHeight: "15px",
    letterspacing: "0.1em",
    color: "#888DFF",
    marginBottom: "auto",
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      lineHeight: "11px",
    },
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
  containerPost: {
    display: "flex",
    flexDirection: "row",
    gap: "21px",
    [theme.breakpoints.down("md")]: {
      gap: "15px",
    },
  },
}))

const LastestPosts = ({ articles }) => {
  const classes = useStyes()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  const { t } = useTranslation();

  return (
    <Box ref={ref} className={classes.container}>
      <Typography

        className={isVisible ? classes.title2 : classes.title}>
        {t("home_lastestPosts_title")}

        </Typography>
      <Link href={`${BLOG}`} style={{ textDecoration: "none" }}>

        <a className={isVisible ? classes.link2 : classes.link}>
        {t("common_lastestPosts_button_allBlogs")}
        </a>

      </Link>
      <BlogPost articles={ articles }/>
    </Box>
  )
}

export default LastestPosts
