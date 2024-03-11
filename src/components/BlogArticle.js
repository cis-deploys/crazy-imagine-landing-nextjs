import React, { useState, useEffect } from "react"
import { Box, Typography, Button } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useTranslation } from 'next-i18next'
import { BLOG } from "../navigation/sitemap"
import Link from "next/link"
import Image from "next/image"
import { StyleComponent } from "./StyleComponent"
import { useRouter } from "next/router"
import Loading from "./Loading"

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
  ron: {
    "& > div:first-of-type": {
      height: "250px",
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "19px",
    padding: "6px 25px 22px 37px",
    height: "100%",
    [theme.breakpoints.down("md")]: {
      gap: "10px",
      padding: "5px 18px 16px 26px",
    },
    [theme.breakpoints.down("sm")]: {
      gap: "8px",
      padding: "11px 11px 10px 16px",
    },
  },
  wrapperContainer: {
    width: "80%",
    margin: "auto",
    paddingTop: "83px",
    paddingBottom: "83px",
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-start",
    [theme.breakpoints.up("xl")]: {
      width: "80%",
      paddingTop: "40px",
    },
    [theme.breakpoints.down("xl")]: {
      width: "70%",
      paddingTop: "40px",
    },
    [theme.breakpoints.down("lg")]: {
      paddingTop: "40px",
      width: "80%",
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: "40px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      paddingTop: "40px",
    },
  },
  wrapperContainerSection: {
    width: "100%",
    backgroundColor: "#193174",
    backgroundImage: `url('/background.webp')`,
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
    height: "40px",
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
      fontSize: "10px",
      lineHeight: "10px",
    },
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "left",
    background: "transparent",
    marginTop: "50px",
    marginBottom: "50px",
    gap: "21px",
    [theme.breakpoints.between(2560, 3000)]: {
      paddingLeft: "25px",
    },
    [theme.breakpoints.between(1280, 2559)]: {
      paddingLeft: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}))

const prepareArticles = articles => {
  return articles?.slice(2) || [] }

const BlogArticle = ({ articles: AllArticles, articlesPagination }) => {
  const classes = useStyles()
  const router = useRouter()
  const { query } = router
  const classesComponent = StyleComponent()
  const { t, i18n } = useTranslation('common')

  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const [showLoadMore, setShowLoadMore] = useState(true)
  const [filteredArticles, setFilteredArticles] = useState(
    prepareArticles(AllArticles)
  )

  useEffect(() => {
    setFilteredArticles(prepareArticles(AllArticles))
  }, [query?.size])

  const initialPagination = () => {
    const size = window.innerWidth >= 3000 ? 7 : 6
    router.push({
      query: {
        size: size 
      },
    })
  }

  useEffect(() => {
    initialPagination()
  }, [window.innerWidth])

  function getLoadArticles() {
    return window.innerWidth >= 3000 ? 5 : 4
  }

  useEffect(() => {
    const handleResize = () => {
      initialPagination()
    }
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)}
  }, [])

  const loadMore = () => {

    const pagination = articlesPagination.pagination
    const maxLimitOfCards = pagination.total
    const { query } = router
    const sumArticles = Number(query.size) + Number(getLoadArticles())

    if (sumArticles > maxLimitOfCards) {
      sumArticles = maxLimitOfCards
      setShowLoadMore(false)
    }
    if (sumArticles <= maxLimitOfCards) router.push({query: {size: sumArticles}}, undefined, { scroll: false})
    if (sumArticles == maxLimitOfCards) setShowLoadMore(false)
  }

  return (
    <Box className={classes.wrapperContainerSection}>
      <Box className={classes.wrapperContainer}>
        <Typography className={classesComponent.titleWhite}>
          {t("blog_blogArticle_title")}
        </Typography>
        <Box className={classes.wrapper}>
          {filteredArticles.map((el, index) => {
            const dataImage = el?.image[0]?.url
            const title = el?.image[0]?.title
            return (
              <Box
                key={index}
                component="article"
                className={classes.container}
              >
              {isLoading && (
                <Box sx={{ minHeight: "80%", height: "250px", padding: "50px" }}>
                <Loading/>
                </Box>
              )}
              {!isLoading && (
                <>
                <Image
                  className={classes.ron}
                  src={dataImage}
                  alt={title}
                  width={480}
                  height={250}
                />
                <Box className={classes.textContainer}>
                  <Typography className={classes.title}>{el?.title}</Typography>
                  <Link href={`${BLOG}/${el?.Key}`}>
                    <a className={classes.link}>
                      {t("common_lastestPosts_blogPost_button_readMore")}
                    </a>
                  </Link>
                </Box>
                </>
              )}
              </Box>
            )
          })}
        </Box>
        {showLoadMore && (
          <Button
            onClick={() => {
              loadMore()
            }}
            style={{
              textDecoration: "none",
              alignSelf: "center",
              marginBottom: "5px",
            }}
            className={classesComponent.buttonComponent}
          >
            <span>{t("blog_blogArticle_button")}</span>
          </Button>
        )}
      </Box>
    </Box>
  )
}

export default BlogArticle
