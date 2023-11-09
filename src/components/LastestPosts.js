import React, { useRef, useEffect, useState } from "react"
import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@mui/styles"
import BlogPost from "./BlogPost"
import { BLOG } from "../navigation/sitemap"
import { useIntersection } from "../hooks/useIntersection"
import Link from "next/link"

const useStyes = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 0px 10px",
    gap: "15px",
    justifyContent: "center",
    backgroundColor: "#193174",
    backgroundImage: `url('/background.svg')`,
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
    height: "800px",
    [theme.breakpoints.up("lg")]: {
      padding: "55px 15px 20px 15px",
      gap: "16px",
      height: "750px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "55px 15px 20px 15px",
      gap: "16px",
      height: "500px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "34px 15px 0px 15px",
      gap: "16px",
      height: "500px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "34px 15px 0px 15px",
      gap: "16px",
      height: "520px",
    },
    [theme.breakpoints.down("xs")]: {
      gap: "16px",
      padding: "0px 0px 0px",
      height: "520px",
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
    [theme.breakpoints.up("xl")]: {
      fontSize: "20px",
      lineHeight: "18px",
    },
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

const LastestPosts = ({ articles, articlesAll }) => {
  const classes = useStyes()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  const { i18n, t } = useTranslation();
    
  const [projectDataAll, setProjectDataAll] = useState(articlesAll.filter(article =>
    article.locale.includes(i18n.language)
    ))?.sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at)
    }); 

    useEffect(() => {
      setProjectDataAll(articlesAll.filter(article =>
        article.locale.includes(i18n.language)
        ))?.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at)
        });
    }, [i18n.language]);

  return (
    <Box ref={ref} className={classes.container}>
      <Typography

        className={isVisible ? 'title-white' : 'title'}>
        {t("home_lastestPosts_title")}

        </Typography>
      <Link href={`${BLOG}`} style={{ textDecoration: "none" }}>

        <a className={isVisible ? classes.link2 : classes.link}>
        {t("common_lastestPosts_button_allBlogs")}
        </a>

      </Link>
      <BlogPost articles={ projectDataAll }/>
    </Box>
  )
}

export default LastestPosts
