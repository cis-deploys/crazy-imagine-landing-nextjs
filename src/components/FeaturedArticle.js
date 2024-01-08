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
    backgroundColor: "#FFFFFF",
    padding: "0px 83px",
    overflow: "hidden",
    height: "auto",
    [theme.breakpoints.down("lg")]: {
      padding: "40px 40px",
    },
    [theme.breakpoints.between(325, 450)]: {
      padding: "40px 40px",
    },
    [theme.breakpoints.between(0, 324)]: {
      padding: "0px 5px",
    },
  },
  containerCard: {
    height: "auto",
    width: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    margin: "0px 144px",
    paddingBottom: "50px",
    [theme.breakpoints.down("lg")]: {
      height: "auto",
      margin: "0px 60px",
      width: "fit-content",
      gap: "20px",
    },
    [theme.breakpoints.down("md")]: {
      height: "auto",
      width: "auto",
      paddingBottom: "20px",
      margin: "0px 40px",
      gap: "20px",
    },
    [theme.breakpoints.between(325, 600)]: {
      height: "auto",
      padding: "0px 0px 20px 0px",
      flexDirection: "column",
    },
    [theme.breakpoints.between(0, 324)]: {
      height: "auto",
      width: "229px",
      padding: "0px 0px 20px 0px",
      flexDirection: "column",
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
    marginTop: "50px",
    textAlign: "center",
    color: "#193173",
    marginBottom: "47px",
    display: "flex",
    flexDirection: "column",
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
    backgroundColor: "#FFFFF",
    boxShadow: "19.9387px 19.9387px 199.387px 5.98162px rgba(0, 0, 0, 0.1)",
    borderRadius: "14px",
    overflow: "hidden",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    height: "fit-content",
    gap: "26px",
    [theme.breakpoints.up("xl")]: {
      width: "980px",
      height: "600px"
    },
    [theme.breakpoints.down("xl")]: {
      width: "600px",
      height: "400px"
    },
    [theme.breakpoints.between(960, 1280)]: {
      width: "400px",
      height: "332px",
    },
    [theme.breakpoints.between(400, 959)]: {
      width: "300px",
      height: "250px",
      gap: "5px"
    },
    [theme.breakpoints.between(326, 399)]: {
      width: "262px",
      height: "220px",
      gap: "5px"
    },
    [theme.breakpoints.between(0, 325)]: {
      width: "225px",
      height: "200px",
      gap: "5px"
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      paddingLeft: "9px",
      lineHeight: "10px",
    },
  },
  img: {
    height: "auto",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "19px",
    width: "100%",
    padding: "6px 25px 22px 26px",
    height: "98px",
    [theme.breakpoints.down("lg")]: {
      gap: "13px",
      padding: "18px 18px 16px 26px",
      height: "100px"
    },
    [theme.breakpoints.down("md")]: {
      gap: "13px",
      padding: "18px 18px 16px 26px",
      height: "88px"
    },
    [theme.breakpoints.down("sm")]: {
      gap: "8px",
      padding: "11px 11px 10px 16px",
      height: "70px"
    },
  },
  titleCard: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    width: "150px",
    fontSize: "28px",
    lineHeight: "20px",
    textAlign: "left",
    color: "#193174",
    [theme.breakpoints.between(1920, 4000)]: {
      width: "100%",
      fontSize: "28px",
      lineHeight: "28px",
    },
    [theme.breakpoints.between(960, 1919)]: {
      width: "400px",
      fontSize: "20px",
      lineHeight: "17px",
    },
    [theme.breakpoints.between(600, 959)]: {
      width: "230px",
      fontSize: "12px",
      lineHeight: "12px",
    },
    [theme.breakpoints.between(0, 599)]: {
      width: "200px",
      fontSize: "10px",
      lineHeight: "10px",
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
    .slice(0, 2)
      
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
            .slice(0, 2)
            setProjectDataAll(featureArticle);
    }, [i18n.language]);

  return (
    <Box ref={ref} className={ classes.container }>
      <Typography className={isVisible ? classes.title2 : classes.title}>
        {t("blog_featuredArticle_title")}
      </Typography>
      <Box className={classes.containerCard}>
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

        <Box className={classes.cardContainer}>
        <>
          <Image
            className={classes.img}
            alt="Feature Article"
            src={projectDataAll[1]?.image[0]?.url}
            width={982}
            height={614}
          />
          <Box className={classes.textContainer}>
            <Typography className={classes.titleCard}>
              {projectDataAll[1]?.title}
            </Typography>
            <Link href={`${BLOG}/[Key].js`} as={`${BLOG}/${projectDataAll[1]?.Key}`} >
              <a style={{ textDecoration: "none" }} className={classes.link}>
                {t("common_lastestPosts_blogPost_button_readMore")}
              </a>
            </Link>
          </Box>
        </>
        </Box>
        </Box>

      </Box>
  )
}

export default FeaturedArticle
