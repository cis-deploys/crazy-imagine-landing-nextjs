import React, { useRef, useState, useEffect } from "react"
import { Box, Typography, Button } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useTranslation } from "react-i18next"
import { BLOG } from "../navigation/sitemap"
import { useIntersection } from "../hooks/useIntersection"
import Link from "next/link"
import Image from "next/image"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "26px",
    flex: "1 0 40%",
    background: "#FFFFFF",
    borderRadius: "14px",
    overflow: "hidden",
    height: "fit-content",
    maxWidth: "480px",
    [theme.breakpoints.down("md")]: {
      gap: "18px",
      maxWidth: "300px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "13px",
    },
    [theme.breakpoints.down("xs")]: {
      flex: "1 0 48%",
      borderRadius: "7px",
      maxWidth: "250px",
      gap: "7px",
    },
  },
  ron:{
    "& > div:first-of-type":{
      height: "250px"
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "19px",
    padding: "6px 25px 22px 37px",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      gap: "13px",
      padding: "18px 18px 16px 26px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "8px",
      padding: "11px 11px 10px 16px",
    },
  },
  wrapperTitle: {
    visibility: "hidden",
  },
  wrapperTitle2: {
    animation: `$myEffect 2000ms`,
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "40px",
    lineHeight: "40px",
    textAlign: "center",
    color: "#FFFFFF",
    marginBottom: "38px",
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      lineHeight: "28px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "22px",
      lineHeight: "22px",
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
  wrapperContainer: {
    width: "75%",
    margin: "auto",
    paddingTop: "83px",
    paddingBottom: "83px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      paddingTop: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px 15px",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "10px",
    },
  },
  wrapperContainerSection: {
    width: "100%",
    backgroundColor: "#193174",
    backgroundImage: `url('/background.svg')`,
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
  },
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "20px",
    lineHeight: "20px",
    color: "#193174",
    textTransform: "uppercase",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: "2",
    height: "36px",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      lineHeight: "16px",
      lineClamp: "3",
      height: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      lineHeight: "10px",
    },
  },
  img: {
    backgroundColor: "#27AAE1",
    height: "210px",
    [theme.breakpoints.down("md")]: {
      height: "147px",
    },
  },
  link: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "15px",
    lineHeight: "15px",
    letterSpacing: "0.1em",
    color: "#888DFF",
    textDecoration: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: "11px",
      lineHeight: "11px",
    },
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    background: "transparent",
    gap: "21px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  loadButton: {
    visibility: "hidden",
  },
  loadButton2: {
    background: "#797EF6",
    borderRadius: "100px",
    alignSelf: "center",
    marginTop: "71px",
    animation: `$myEffecto 2000ms`,
    "&:hover": {
      backgroundColor: "#30AADE",
    },
    "& > span": {
      fontFamily: "Nexa Bold",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "14px",
      padding: "14px 20px 12px 20px",
      lineHeight: "14px",
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      letterSpacing: "0.05em",
      color: "#FFFFFF",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: "50px",
      marginBottom: "75px",
      "& > span": {
        fontSize: "10px",
        lineHeight: "10px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "40px",
      marginBottom: "70px",
    },
    [theme.breakpoints.down("xs")]: {
      "& > span": {
        fontSize: "9px",
        lineHeight: "9px",
      },
      marginTop: "30px",
      marginBottom: "45px",
    },
  },
  "@keyframes myEffecto": {
    "0%": {
      opacity: 0,
      transform: "translateY(300%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}))

const BlogArticle = ({ articles: AllArticles }) => {
  const classes = useStyles()
  const ref = useRef()
  const isVisible = useIntersection(ref, "0px")
  const ref1 = useRef()
  const isVisible1 = useIntersection(ref1, "0px")
  const [load, setLoad] = useState(6)
  const [buttonLoad, setButtonLoad] = useState(true)
  const loadArticles = length => {
    if (length > load) setLoad(load + 2)
    if (length <= load) setButtonLoad(false)
  }

  const { t, i18n } = useTranslation()
  const lang = i18n.language

  const articles = AllArticles
  const articlesFilter = articles.filter(article =>
    article.locale.includes(lang)
  )

    const [projectDataAll, setProjectDataAll] = useState(articlesFilter
      .sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at)
      })
      .slice(0, load));

    useEffect(() => {
      const articles = AllArticles
      const articlesFilter = articles.filter(article =>
        article.locale.includes(lang)
      )
        setProjectDataAll(articlesFilter
          .sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at)
          })
          .slice(0, load));
    }, [i18n.language, load]);

  return (
    <Box className={classes.wrapperContainerSection}>
      <Box className={classes.wrapperContainer}>
        <Typography
          ref={ref}
          className={
            isVisible ? classes.wrapperTitle2 : classes.wrapperTitle
          }
        >
          {t("blog_blogArticle_title")}
        </Typography>
        <Box className={classes.wrapper}>
          {
          projectDataAll.map(( el, index) => {
              const dataImage = el?.image[0].url
              const title = el?.image[0].title
            return(
            <Box
              key={index}
              component="article"
              className={classes.container}
            >
              <Image className={classes.ron} src={dataImage} alt={title} width={480} height={250}/>
              <Box className={classes.textContainer}>
                <Typography className={classes.title}>
                  {el?.title}
                </Typography>
                <Link href={`${BLOG}/${el?.Key}`} >

                  <a className={classes.link}>
                  {t("common_lastestPosts_blogPost_button_readMore")}
                  </a>

                </Link>
              </Box>
            </Box>
          )
          })}
        </Box>
        { buttonLoad && (
          <Button
            ref={ref1}
            onClick={() => { loadArticles(articles.length) }}
            className={ isVisible1 ? classes.loadButton2 : classes.loadButton }
          >
            <span>{t("blog_blogArticle_button")}</span>
          </Button>
        )}
      </Box>
    </Box>

  )
}

export default BlogArticle
