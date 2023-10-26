import React, { useRef, useState, useEffect } from "react"
import { Box, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useTranslation } from "react-i18next"
import { BLOG } from "../navigation/sitemap"
import { useIntersection } from "../hooks/useIntersection"
import Link from "next/link"
import Image from "next/image"

const useStyles = makeStyles(theme => ({
  container: {
    height: "auto",
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "98px",
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      height: "708px",
      paddingBottom: "58px",
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto",
      paddingBottom: "38px",
    },
  },
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
    marginTop: "84px",
    textAlign: "center",
    color: "#193173",
    marginBottom: "47px",
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      lineHeight: "28px",
      marginTop: "55px",
      marginBottom: "33px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
      lineHeight: "22px",
      marginTop: "34px",
      marginBottom: "20px",
    },
    [theme.breakpoints.between(450, 0)]: {
      fontSize: "10px",
      lineHeight: "10px",
    },
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(-300%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  button: {
    background: "#797EF6",
    borderRadius: "100px",
    padding: "14px 20px 12px 20px",
    alignSelf: "center",
    "& > span": {
      fontFamily: "Nexa Bold",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "14px",
      alignItems: "center",
      textAlign: "center",
      letterSpacing: "0.05em",
      color: "#FFFFFF",
    },
    [theme.breakpoints.down("md")]: {
      padding: "10px 14px 8px 14px",
      marginTop: "15px",
      "& > span": {
        fontSize: "10px",
        lineHeight: "10px",
      },
    },
  },
  cardContainer: {
    backgroundColor: "#FFFFFF",
    boxShadow: "19.9387px 19.9387px 199.387px 5.98162px rgba(0, 0, 0, 0.1)",
    borderRadius: "14px",
    overflow: "hidden",
    width: "980px",
    display: "flex",
    flexDirection: "column",
    maxHeight: "750px",
    [theme.breakpoints.down("md")]: {
      width: "686px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "425px",
    },
    [theme.breakpoints.between(450, 600)]: {
      width: "325px",
    },
    [theme.breakpoints.between(350, 450)]: {
      width: "280px",
    },
    [theme.breakpoints.between(0, 350)]: {
      width: "80%",
    },
  },
  titleCard: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "28px",
    paddingLeft: "26px",
    lineHeight: "28px",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      lineHeight: "20px",
      paddingLeft: "18px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "15px",
      lineHeight: "15px",
      paddingLeft: "9px",
    },
  },
  link: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    cursor: "pointer",
    lineHeight: "15px",
    paddingLeft: "26px",
    letterSpacing: "0.1em",
    color: "#888DFF",
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      paddingLeft: "9px",
      lineHeight: "11px",
    },
  },
  img: {
    height: "auto",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "26px",
    padding: "28px 0 38px 28px",
    [theme.breakpoints.down("md")]: {
      gap: "18px",
      padding: "20px 0 27px 20px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "18px",
      padding: "12px 0 18px 12px",
    },
  },
}))

const FeaturedArticle = ({ articles: AllArticles }) => {
  const classes = useStyles()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  const articles = AllArticles
  const articlesFilter = articles.filter(article =>
    article.locale.includes(lang)
  )
  const featureArticle = articlesFilter
    .sort((a, b) => {
      return new Date(b.created_at) - new Date(a.created_at)
    })
    .slice(0, 1)
      
    const [projectDataAll, setProjectDataAll] = useState(featureArticle);

    useEffect(() => {
          const articles = AllArticles
          const articlesFilter = articles.filter(article =>
            article.locale.includes(lang)
          )
          const featureArticle = articlesFilter
            .sort((a, b) => {
              return new Date(b.created_at) - new Date(a.created_at)
            })
            .slice(0, 1)
            setProjectDataAll(featureArticle);
    }, [i18n.language]);

  return (
    <Box ref={ref} className={classes.container}>
      <Typography className={isVisible ? classes.title2 : classes.title}>
        {t("blog_featuredArticle_title")}
      </Typography>
      <Box className={classes.cardContainer}>
        <>
          <Image
            className={classes.img}
            alt="Feature Article"
            src={projectDataAll[0]?.image[0]?.url}
            width={982}
            height={614}
          />
          <Box className={classes.textContainer}>
            <Typography className={classes.titleCard}>
              {projectDataAll[0]?.title}
            </Typography>
            <Link href={`${BLOG}/[Key].js`} as={`${BLOG}/${projectDataAll[0]?.Key}`} >
              <a style={{ textDecoration: "none" }} className={classes.link}>
                {t("common_lastestPosts_blogPost_button_readMore")}
              </a>
            </Link>
          </Box>
        </>
      </Box>
    </Box>
  )
}

export default FeaturedArticle
