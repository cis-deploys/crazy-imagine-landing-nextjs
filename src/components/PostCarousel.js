import React from "react"
import BlogPost from "../components/BlogPost"
import { Box, Typography } from "@mui/material"
import { BLOG } from "../navigation/sitemap"
import { useTranslation } from 'next-i18next'
import { makeStyles } from "@mui/styles"
import Link from "next/link"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 60px",
    gap: "23px",
    justifyContent: "center",
    backgroundColor: "#193174",
    backgroundImage: `url('/background.webp')`,
    backgroundPosition: "center",
    backgroundRepeat: "norepeat",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      gap: "16px",
      padding: "0px 43px"
    },
    [theme.breakpoints.down("xs")]: {
      gap: "16px",
      padding: "0px 15px"
    },
  },
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "40px",
    lineHeight: "40px",
    textAlign: "center",
    color: "white",
    marginTop: "78px",
    marginBottom: "89px",
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      lineHeight: "28px",
      marginTop: "54px",
      marginBottom: "65px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "21px",
      lineHeight: "21px",
      marginTop: "20px",
      marginBottom: "25px",
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
    marginBottom: "51px",
    textDecoration: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      lineHeight: "12px",
    },
  },
}))

const PostCarousel = ({ articles }) => {
  const classes = useStyles()
  const { t } = useTranslation("common")
  return (
    <Box className={classes.container}>
      <Typography className={classes.title}>{t("post_postCarousel_title")}</Typography>
      <Link href={`${BLOG}`} >
        <a className={classes.link}>
        {t("common_lastestPosts_button_allBlogs")}
        </a>
      </Link>
      <BlogPost articles={ articles }/>
    </Box>
  )
}

export default PostCarousel