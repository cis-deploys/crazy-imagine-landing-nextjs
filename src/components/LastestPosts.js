import React, { useEffect, useState } from "react"
import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles"
import BlogPost from "./BlogPost"
import { BLOG } from "../navigation/sitemap"
import Link from "next/link"
import { StyleComponent } from "./StyleComponent"

const useStyes = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "55px 48px 0px 43px",
    gap: "15px",
    justifyContent: "center",
    backgroundColor: "#193174",
    backgroundImage: `url('/background.webp')`,
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
    height: "700px",
    [theme.breakpoints.between(1925, 4000)]: {
      padding: "55px 208px 0px 208px",
      gap: "16px",
      height: "700px",
    },
    [theme.breakpoints.between(1280, 1920)]: {
      padding: "55px 48px 0px 43px",
      gap: "16px",
      height: "540px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "20px 43px 0px 43px",
      gap: "16px",
      height: "480px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "20px 43px 0px 43px",
      gap: "16px",
      height: "430px",
    },
    [theme.breakpoints.between(326, 460)]: {
      padding: "20px 43px 0px 43px",
      gap: "16px",
      height: "420px",
    },
    [theme.breakpoints.between(0, 325)]: {
      padding: "20px 43px 0px 43px",
      gap: "10px",
      height: "430px",
    },
  },
  link: {
    visibility: "hidden",
  },
  link2: {
    animation: `$myEffectos 3000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    textAlign: "center",
    lineHeight: "15px",
    letterspacing: "0.1em",
    color: "#888DFF",
    marginBottom: "5px",
    [theme.breakpoints.up("xl")]: {
      fontSize: "20px",
      lineHeight: "18px",
      marginBottom: "20px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      lineHeight: "11px",
      marginBottom: "5px",
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

const LastestPosts = ({ articlesAll }) => {
  const classes = useStyes()
  const classesComponent = StyleComponent()
  const { i18n, t } = useTranslation();
    
  const [projectDataAll, setProjectDataAll] = useState(articlesAll)?.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at)
    }); 

    useEffect(() => {
      setProjectDataAll(articlesAll)?.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at)
        });
    }, [articlesAll]);

  return (
    <Box className={classes.container}>
      <Typography
        className={classesComponent.titleWhite}>
        {t("home_lastestPosts_title")}

        </Typography>
      <Link href={`${BLOG}`} style={{ textDecoration: "none" }}>

        <a className={classes.link2}>
        {t("common_lastestPosts_button_allBlogs")}
        </a>

      </Link>
      <BlogPost articles={ projectDataAll }/>
    </Box>
  )
}

export default LastestPosts
