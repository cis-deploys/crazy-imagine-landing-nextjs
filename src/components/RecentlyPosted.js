import React from "react"
import { Box, Grid, Typography } from "@mui/material"
import { BLOG } from "../navigation/sitemap"
import { useTranslation } from 'next-i18next'
import { makeStyles } from "@mui/styles"
import Link from "next/link"
import { useRouter } from "next/router"

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "28px",
    lineHeight: "28px",
    color: "#193174",
    marginBottom: "15px",
    [theme.breakpoints.down("md")]: {
      fontSize: "21px",
      lineHeight: "26px",
      textAlign: "center",
    },
  },
  container: {
    background: "#FFFFFF",
    boxShadow: "0px 10px 20px 4px rgba(0, 0, 0, 0.05)",
    borderRadius: "14px",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("xl")]: {
      width: "100%",
      padding: "18px",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
      padding: "18px",
    },
  },
  layout: {
    width: "30%",
    flexDirection: "row",
    [theme.breakpoints.up("xl")]: {
      width: "30%",
    },
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  listTitle: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "22px",
    lineHeight: "26px",
    color: "#193174",
    [theme.breakpoints.down("md")]: {
      fontSize: "16px",
      lineHeight: "20px",
    },
  },
  link: {
    fontFamily: "Nexa Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "15px",
    paddingTop: "12px",
    lineHeight: "15px",
    letterSpacing: "0.1em",
    color: "#888DFF",
    textDecoration: "none",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
      lineHeight: "12px",
      paddingTop: "10px",
    },
  },
}))

const RecentlyPosted = ({ articles: AllArticles }) => {
  const classes = useStyles()
  const { i18n, t } = useTranslation()
  const lang = i18n.language 
  const router = useRouter();
  const { Key } = router.query;

        const articles = AllArticles
        const articlesFilter = articles
        ?.filter( project => project?.Key !== Key && project?.Key !== null)
        const articlesSort = articlesFilter
          .sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at)
          })

        return (
          <Box className={classes.layout}>
            <Typography className={classes.title}>
              {t("post_recentlyPosted_title")}
            </Typography>
            {
              articlesSort?.slice(0, 4).map((el) => (

              <Box key={el?.title} marginBottom="24px">
                <Grid container alignItems="center">
                  <Grid item xs>
                    <Box className={classes.container}>
                      <>
                        <Typography className={classes.listTitle}>
                          {el?.title}
                        </Typography>
                        <Link href={`${BLOG}/[Key].js`} as={`${BLOG}/${el?.Key}`} >
                          <a className={classes.link}>
                          {t("common_lastestPosts_blogPost_button_readMore")}
                          </a>
                        </Link>
                      </>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>
        )
      }

export default RecentlyPosted
